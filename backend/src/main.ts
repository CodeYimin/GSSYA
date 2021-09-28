import express from 'express';
import cors from 'cors';

import ISubject from './interfaces/ISubject';
import sheetsService from './services/sheetsService';
import IAboutCard from './interfaces/IAboutCard';
import INavigationItem from './interfaces/INavigationItem';
import IProgram from './interfaces/IProgram';
import IQuestion from './interfaces/IQuestion';
import ISchedule from './interfaces/ISchedule';
import ITeamMember from './interfaces/ITeamMember';
import IContact from './interfaces/IContact';
import IHome from './interfaces/IHome';
import IHeader from './interfaces/IHeaders';

const app = express();
const port = 3001;

app.use(cors());

app.get('/subjects', async (req, res) => {
  res.send(await getSubjectsData());
});

app.get('/about', async (req, res) => {
  res.send(await getAboutData());
});

app.get('/headers', async (req, res) => {
  res.send(await getHeadersData());
});

app.get('/home', async (req, res) => {
  res.send(await getHomeData());
});

app.get('/navigation', async (req, res) => {
  res.send(await getNavigationData());
});

app.get('/programs', async (req, res) => {
  res.send(await getProgramsData());
});

app.get('/questions', async (req, res) => {
  res.send(await getQuestionsData());
});

app.get('/schedules', async (req, res) => {
  res.send(await getSchedulesData());
});

app.get('/teamMembers', async (req, res) => {
  res.send(await getTeamMembersData());
});

app.get('/contact', async (req, res) => {
  res.send(await getContactData());
});

app.get('/languages', async (req, res) => {
  res.send(await getLanguagesData());
});


app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});

async function getHomeData(): Promise<IHome[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Home');

  const data: IHome[] = entries.map((row) => (
    {
      language: row.language,
      title: row.title,
      subtitle: row.subtitle,
    }
  ));

  return data;
}

async function getHeadersData(): Promise<IHeader[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Section Headers');

  const headers: IHeader[] = entries.map((row) => (
    {
      language: row.language,
      about: row.about,
      programs: row.programs,
      subjects: row.subjects,
      schedules: row.schedules,
      questions: row.questions,
      teamMembers: row.teamMembers,
      contact: row.contact,
    }
  ));

  return headers;
}

async function getSubjectsData(): Promise<ISubject[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Subjects');

  const subjects: ISubject[] = entries.map((row) => (
    {
      language: row.language,
      name: row.name,
      description: row.description,
      grade: row.grade,
      imageLink: row.imageId ? `https://drive.google.com/uc?id=${row.imageId}` : undefined,
    }
  ));

  return subjects;
}

async function getAboutData(): Promise<IAboutCard[]> {
  const entries = await sheetsService.getRowsBySheetTitle('About');

  const aboutCards: IAboutCard[] = entries.map((row) => (
    {
      language: row.language,
      title: row.title,
      imageLink: `https://drive.google.com/uc?id=${row.imageId}`,
    }
  ));

  return aboutCards;
}

async function getNavigationData(): Promise<INavigationItem[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Navigation Links');

  const navigationItems: INavigationItem[] = entries.map((row) => (
    {
      language: row.language,
      label: row.label,
      link: row.link,
    }
  ));

  return navigationItems;
}

async function getProgramsData(): Promise<IProgram[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Programs');

  const programs: IProgram[] = entries.map((row) => (
    {
      language: row.language,
      name: row.name,
      description: row.description,
      grade: row.grade,
      buttonName: row.buttonName,
      buttonLink: row.buttonLink,
    }
  ));

  return programs;
}

async function getQuestionsData(): Promise<IQuestion[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Questions');

  const questions: IQuestion[] = entries.map((row) => (
    {
      language: row.language,
      question: row.question,
      answer: row.answer,
    }
  ));

  return questions;
}

async function getSchedulesData(): Promise<ISchedule[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Schedules');

  const schedules: ISchedule[] = entries.map((row) => (
    {
      year: parseInt(row.year),
      month: parseInt(row.month),
      daysOfWeek: row.daysOfWeek.split(',').map((numStr: string) => parseInt(numStr)),
      dates: row.dates.split(',').map((numStr: string) => parseInt(numStr)),
      excludeDates: row.excludeDates.split(',').map((numStr: string) => parseInt(numStr)),
      time: row.time,
    }
  ));

  return schedules;
}

async function getTeamMembersData(): Promise<ITeamMember[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Team Members');

  const members: ITeamMember[] = entries.map((row) => (
    {
      language: row.language,
      firstName: row.firstName,
      lastName: row.lastName,
      title: row.title,
      description: row.description,
      imageLink: row.imageId ? `https://drive.google.com/uc?id=${row.imageId}` : undefined,
    }
  ));

  return members;
}

async function getContactData(): Promise<IContact[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Contact');

  const contacts: IContact[] = entries.map((row) => (
    {
      language: row.language,
      phone: row.phone,
      email: row.email,
      wechat: row.wechat
    }
  ));

  return contacts;
}

async function getLanguagesData(): Promise<string[]> {
  const entries = await sheetsService.getRowsBySheetTitle('Languages');

  const languages: string[] = entries.map((row) => row.language);

  return languages;
}