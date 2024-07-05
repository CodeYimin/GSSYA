import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MentalHealthAssessmentModule } from './mental_health_assessment/mental_health_assessment';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { VolunteersModule } from './volunteers/volunteers.module';

@Module({
  imports: [TestimonialsModule, VolunteersModule, MentalHealthAssessmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
