import mongoose from "mongoose";
import {
  WebsiteDataDocument,
  WebsiteDataModel,
} from "./../../interfaces/mongoose.gen";

export const websiteDataSchema = new mongoose.Schema({
  language: {
    required: true,
    unique: true,
    type: String,
  },
  navigationBar: {
    required: true,
    type: {
      changeLanguageLabel: String,
      items: {
        required: true,
        type: [
          {
            label: {
              required: true,
              type: String,
            },
            link: String,
          },
        ],
      },
    },
  },
  aboutSection: {
    required: true,
    type: {
      title: String,
      cards: {
        required: true,
        type: [
          {
            title: String,
            image: String,
          },
        ],
      },
    },
  },
  programsSection: {
    required: true,
    type: {
      title: String,
      programs: {
        required: true,
        type: [
          {
            title: String,
            description: String,
            grade: String,
            button: {
              type: {
                label: String,
                link: String,
              },
            },
          },
        ],
      },
    },
  },
  classesSection: {
    required: true,
    type: {
      title: String,
      classes: {
        required: true,
        type: [
          {
            title: String,
            description: String,
            image: String,
            grade: String,
          },
        ],
      },
      viewMoreLabel: String,
    },
  },
  scheduleSection: {
    required: true,
    type: {
      title: String,
      activeDates: {
        required: true,
        type: [
          {
            date: String,
            time: String,
          },
        ],
      },
    },
  },
  questionsSection: {
    required: true,
    type: {
      title: String,
      questions: {
        required: true,
        type: [
          {
            question: String,
            answer: String,
          },
        ],
      },
    },
  },
  teamSection: {
    required: true,
    type: {
      title: String,
      members: {
        required: true,
        type: [
          {
            firstName: String,
            lastName: String,
            image: String,
            role: String,
            description: String,
          },
        ],
      },
    },
  },
  contactSection: {
    required: true,
    type: {
      title: String,
      contactInfo: {
        required: true,
        type: {
          email: String,
          phone: String,
          wechat: String,
        },
      },
    },
  },
});

export default mongoose.model<WebsiteDataDocument, WebsiteDataModel>(
  "WebsiteData",
  websiteDataSchema
);
