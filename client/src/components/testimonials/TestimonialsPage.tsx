import { TestimonialsPageProps } from "@/types/Testimonials";
import { ReactElement, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPencil } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsPage({
  title1,
  title2,
  formText,
  testimonials,
}: TestimonialsPageProps): ReactElement {
  const [index, setIndex] = useState(0);

  return (
    <div id="testimonials" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3 px-5">
        <p>
          {title1}
          <span className="text-red-500">{title2}</span>
        </p>
      </div>
      <div className="mx-auto w-[25rem] md:w-[30rem]">
        <div
          className="flex w-full mt-8 transition-all items-center"
          style={{ marginLeft: `-${index * 100}%` }}
        >
          {testimonials.map((testimonial) => (
            <div
              className="min-w-full px-10"
              key={testimonial.text || testimonial.video}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 w-full justify-center items-center mt-8">
        <FaChevronLeft
          className="text-zinc-400 cursor-pointer text-2xl select-none"
          onClick={() => {
            setIndex((index - 1 + testimonials.length) % testimonials.length);
          }}
        />
        <div className="text-zinc-400 select-none">
          {index + 1}/{testimonials.length}
        </div>
        <FaChevronRight
          className="text-zinc-400 cursor-pointer text-2xl select-none"
          onClick={() => {
            setIndex((index + 1) % testimonials.length);
          }}
        />
      </div>
      <a
        href={"https://forms.gle/bHuwokmJbdr7C8qf7"}
        className="bg-zinc-500 text-white font-semibold py-2 px-4 rounded-md mt-12 hover:bg-zinc-600 flex items-center gap-2 w-max mx-auto"
      >
        <FaPencil className="inline" /> {formText}
      </a>
    </div>
  );
}
