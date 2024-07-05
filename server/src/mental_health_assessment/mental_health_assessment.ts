import { Module } from '@nestjs/common';
import { MentalHealthAssessmentController } from './mental_health_assessment.controller';

@Module({
  controllers: [MentalHealthAssessmentController],
})
export class MentalHealthAssessmentModule {}
