export interface Testimonial {
  name: string;
  title: string;
  text?: string;
  video?: string;
}

export interface TestimonialsPageProps {
  title1: string;
  title2: string;
  testimonials: Testimonial[];
}
