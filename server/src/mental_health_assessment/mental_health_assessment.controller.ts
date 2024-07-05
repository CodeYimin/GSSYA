import {
  Controller,
  Get,
  ParseArrayPipe,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import fs from 'fs/promises';
import nodemailer from 'nodemailer';
import { CHATGPT_API_KEY, GMAIL_APP_PASSWORD, PASSWORD } from 'src/consts';

@Controller('mental-health-assessment')
export class MentalHealthAssessmentController {
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
    @Query('age') age: string,
    @Query('email') email: string,
    @Query('scores', ParseArrayPipe) scoresRaw: string[],
    @Query('questions') questionsRaw: string,
    @Query('responses') responsesRaw: string,
    @Query('sendEmail', ParseBoolPipe) sendEmail: boolean,
  ) {
    const { ChatGPTAPI } = await import('chatgpt');

    const questions = JSON.parse(questionsRaw);
    const responses = JSON.parse(responsesRaw);
    const scores = scoresRaw.map(Number);
    const score = scores.reduce((a, b) => a + b, 0);
    const scoreMax = scores.length * 4;
    const emergency = scores[14] !== 4;

    const api = new ChatGPTAPI({
      apiKey: CHATGPT_API_KEY,
      completionParams: {
        model: 'gpt-3.5-turbo',
      },
    });

    const disclaimer =
      'The information provided in this assessment response is for informational purposes only and should not be taken as professional medical advice. Always consult with a qualified healthcare provider regarding your health and medical conditions. Do not disregard or delay seeking professional medical advice because of something you have read in this assessment response.';
    const percent = Math.round((score / scoreMax) * 100);
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
      `This is a mental health questionaire. Give feedback and advice to someone who responded in a mental health questionnaire with an overall mental health score of ${percent}% with higher being the best mental health. ${
        emergency
          ? 'Regardless of the overall score, the person responded they had suicidal intentions, so this is treated as an emergency.'
          : ''
      } Do NOT ask a question. Do NOT comment on if the user was honest or not. Tell the user the score in the response.`,
    );
    const overallFeedback = hardRes + '\n\n' + res.text + '\n\n' + disclaimer;

    const oldJson = (await doesFileExist('./data/assessments.json'))
      ? JSON.parse(await fs.readFile('./data/assessments.json', 'utf-8'))
      : [];
    const newJson = [
      ...oldJson,
      {
        email,
        age,
        scores,
        score,
        scoreMax,
        emergency,
        date: new Date(),
        responses,
        overallFeedback,
      },
    ];
    fs.mkdir('./data').catch(() => {});
    await fs.writeFile(
      './data/assessments.json',
      JSON.stringify(newJson, null, 2),
    );

    if (sendEmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'info.mentalhealth2024',
            pass: GMAIL_APP_PASSWORD,
          },
        });

        const mailResult = await transporter.sendMail({
          to: email,
          subject: 'Mental Health Assessment Results',
          html: `<div style="white-space: pre-line;"><b>Overall Score:</b> ${percent}% (${score}/${scoreMax})
          <b>Emergency:</b> ${emergency ? 'Yes' : 'No'}
          
          ${questions
            .map(
              (q, i) =>
                `<b>${q.question}:</b> ${q.answers[scores[i]]} (${
                  scores[i]
                }/4)\n\n${responses[i]}`,
            )
            .join('\n\n')}
          
          <b>Overall feedback:</b>
          ${overallFeedback}</div>`,
        });

        console.log('Email sent: ' + mailResult);
      } catch (e) {
        console.log(e);
      }
    }

    return overallFeedback;
  }

  @Get('getResponses')
  async getResponses(@Query('password') password: string) {
    if (password !== PASSWORD) {
      return 'Incorrect password';
    }

    return JSON.parse(await fs.readFile('./data/assessments.json', 'utf-8'));
  }
}

async function doesFileExist(path) {
  try {
    return (await fs.stat(path)).isFile();
  } catch (e) {
    return false;
  }
}
