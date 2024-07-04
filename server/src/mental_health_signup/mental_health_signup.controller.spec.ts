import { Test, TestingModule } from '@nestjs/testing';
import { MentalHealthSignupController } from './mental_health_signup.controller';

describe('MentalHealthSignupController', () => {
  let controller: MentalHealthSignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentalHealthSignupController],
    }).compile();

    controller = module.get<MentalHealthSignupController>(MentalHealthSignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
