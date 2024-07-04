import { Controller, Get, Query } from '@nestjs/common';
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
  async getComplete(@Query('score') score: string) {
    const { ChatGPTAPI } = await import('chatgpt');

    const api = new ChatGPTAPI({
      apiKey: CHATGPT_API_KEY,
      completionParams: {
        model: 'gpt-3.5-turbo',
      },
    });

    const res = await api.sendMessage(
      `This is a mental health questionaire. Give feedback and advice to someone who responded in a mental health questionnaire with an overall mental health score of ${score} with higher being the best mental health. Do NOT ask a question. Do NOT comment on if the user was honest or not. Tell the user the score in the response.`,
    );

    return res.text;
  }
}
