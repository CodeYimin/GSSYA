import {
  Controller,
  Get,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CHATGPT_API_KEY } from 'src/consts';

@Controller('mental-health-signup')
export class MentalHealthSignupController {
  @Get('questionResponse')
  async get(
    @Query('question') question: string,
    @Query('answer') answer: string,
    @Query('score') score: string,
  ) {
    const { ChatGPTAPI } = await import('chatgpt');

    const api = new ChatGPTAPI({
      apiKey: CHATGPT_API_KEY,
      completionParams: {
        model: 'gpt-3.5-turbo',
      },
    });

    const res = await api.sendMessage(
      `Give feedback and advice to someone who responded in a mental health questionnaire "${answer}" to "${question}" which is a score of ${score} with higher being the best mental health. Do NOT ask a question. Do NOT comment on if the user was honest or not. Mention the answer in the response. Do NOT mention the score in the response.`,
    );

    return res.text;
  }

  @Get('completeResponse')
  async getComplete(
    @Query('score', ParseIntPipe) score: number,
    @Query('scoreMax', ParseIntPipe) scoreMax: number,
    @Query('emergency', ParseBoolPipe) emergency: boolean,
  ) {
    const { ChatGPTAPI } = await import('chatgpt');

    const api = new ChatGPTAPI({
      apiKey: CHATGPT_API_KEY,
      completionParams: {
        model: 'gpt-3.5-turbo',
      },
    });

    const percent = (score / scoreMax) * 100;
    const hardRes = emergency
      ? "Based on the responses you've provided in the questionnaire, it appears you may be experiencing severe mental health issues. It's important to reach out for help immediately. If you reside in Canada, please call the 988 Suicide & Crisis Lifeline for confidential support available 24/7."
      : percent < 25
      ? 'High concerns, immediate professional help needed. Please contact a mental health professional or emergency services immediately for urgent support.'
      : percent < 50
      ? 'Moderate concerns, recommend professional support. Consider scheduling an appointment with a mental health professional, such as a therapist or counselor, to discuss your concerns and develop a plan for support.'
      : percent < 75
      ? 'Mild concerns, join our dedicated team of compassionate volunteers who provide one-on-one support to individuals looking for someone to talk to, share their experiences with, and find comfort and guidance. Engage in regular physical activity, practice mindfulness or meditation, maintain a balanced diet, ensure you get enough sleep, and take time to engage in activities you enjoy and find relaxing.'
      : 'Minimal mental health issues. Join our Global Share Support Youth Organization to make new friends and build social connections, which can enhance your well-being and help you enjoy life more.';

    const res = await api.sendMessage(
      `This is a mental health questionaire. Give feedback and advice to someone who responded in a mental health questionnaire with an overall mental health score of ${percent}% with higher being the best mental health. Do NOT ask a question. Do NOT comment on if the user was honest or not. Tell the user the score in the response.`,
    );

    return hardRes + '\n\n' + res.text;
  }
}
