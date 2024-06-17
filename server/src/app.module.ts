import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { VolunteersModule } from './volunteers/volunteers.module';

@Module({
  imports: [TestimonialsModule, VolunteersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
