import { Module } from '@nestjs/common';
import { MentalHealthSignupController } from './mental_health_signup.controller';

@Module({
  controllers: [MentalHealthSignupController]
})
export class MentalHealthSignupModule {}
