import { Injectable } from '@nestjs/common';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

export interface Testimonial {
  name: string;
  title: string;
  text?: string;
  video?: string;
  time: string;
  status?: 'Accepted' | 'Rejected';
}

@Injectable()
export class TestimonialsService {
  private cachedTestimonials = [];
  private lastFetchTime = 0;
  private readonly cacheTime = 1000 * 60;

  async getTestimonials() {
    if (Date.now() - this.lastFetchTime > this.cacheTime) {
      this.cachedTestimonials = await this.fetchTestimonials();
      this.lastFetchTime = Date.now();
    }
    return this.cachedTestimonials;
  }

  private async fetchTestimonials() {
    const parser = new PublicGoogleSheetsParser(
      '1LGIQuZp6uZIdQw9PABb-Amq3iFfi4eTiJOemALdUB5w',
    );

    const data = await parser.parse();
    const accepted = data.filter((item) => item.status === 'Accepted');
    const corrected = accepted.map((item) => {
      return {
        name: item['Name'],
        title: item['Testimonial Title'],
        text: item['Testimonial Text'],
        video: item['Testimonial Video']
          ? item['Testimonial Video'].replace('open?id=', 'file/d/') +
            '/preview'
          : undefined,
        time: item['Timestamp'],
      };
    });
    return corrected;
  }
}
