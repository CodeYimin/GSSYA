import { Controller, Get } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';

@Controller('volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Get()
  async get() {
    return await this.volunteersService.getVolunteers();
  }
}
