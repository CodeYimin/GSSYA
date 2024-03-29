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
  homeSection: {
    required: true,
    type: {
      title: String,
      founded: String,
      subtitle: String,
      stats: {
        required: true,
        type: [
          {
            title: String,
            value: String,
          },
        ],
      },
    },
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
  eventsSection: {
    required: true,
    type: {
      title: String,
      events: {
        required: true,
        type: [
          {
            title: {
              type: String,
              required: true,
            },
            image: {
              type: String,
              required: true,
            },
            startDate: {
              type: Date,
              required: true,
            },
            endDate: Date,
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
  subjectsSection: {
    required: true,
    type: {
      title: String,
      subjects: {
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
            date: {
              required: true,
              type: Date,
            },
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
            firstName: {
              required: true,
              type: String,
            },
            lastName: {
              required: true,
              type: String,
            },
            image: String,
            role: String,
            description: String,
          },
        ],
      },
    },
  },
  testimonialsSection: {
    required: true,
    type: {
      title: String,
      testimonials: {
        required: true,
        type: [
          {
            attestant: {
              required: true,
              type: String,
            },
            title: {
              required: true,
              type: String,
            },
            description: {
              required: true,
              type: String,
            },
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
          instagram: String,
          youtube: String,
          facebook: String,
          twitter: String,
        },
      },
    },
  },
  terms: {
    required: true,
    type: String,
  },
});

export default mongoose.model<WebsiteDataDocument, WebsiteDataModel>(
  "WebsiteData",
  websiteDataSchema
);
