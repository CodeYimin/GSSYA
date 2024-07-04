import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { MentalHealthSignupModule } from './mental_health_signup/mental_health_signup.module';

@Module({
  imports: [TestimonialsModule, VolunteersModule, MentalHealthSignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
