import { Injectable } from '@nestjs/common';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

export interface Volunteer {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  description: string;
  status?: 'Accepted' | 'Rejected';
}

@Injectable()
export class VolunteersService {
  private cachedVolunteers = [];
  private lastFetchTime = 0;
  private readonly cacheTime = 1000 * 60;

  async getVolunteers() {
    if (Date.now() - this.lastFetchTime > this.cacheTime) {
      this.cachedVolunteers = await this.fetchVolunteers();
      this.lastFetchTime = Date.now();
    }
    return this.cachedVolunteers;
  }

  private async fetchVolunteers() {
    const parser = new PublicGoogleSheetsParser(
      '1i3-MimK53Ue2h6M6aGdqqlHMqtS0tSK3df8eZtd-ZKs',
    );

    const data = (await parser.parse()) as Volunteer[];
    const acceptedData = data.filter((item) => item.status === 'Accepted');
    const correctedData = acceptedData.map((item) => {
      return {
        firstName: item['First name'],
        lastName: item['Last name'],
        role: item['Role'],
        image: item['Profile photo']
          ? item['Profile photo'].replace('open?', 'thumbnail?')
          : undefined,
        description: item['Description'],
      };
    });
    return correctedData;
  }
}
