import { TestimonialsPageProps } from "@/types/Testimonials";
import { ReactElement, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsPage({
  title1,
  title2,
  testimonials,
}: TestimonialsPageProps): ReactElement {
  const [index, setIndex] = useState(0);

  return (
    <div id="testimonials" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
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
          className="text-zinc-400 cursor-pointer text-2xl"
          onClick={() => {
            setIndex((index - 1 + testimonials.length) % testimonials.length);
          }}
        />
        {Array.from({ length: testimonials.length }).map((_, i) => (
          <div
            key={i}
            className={`w-3 aspect-square rounded-full cursor-pointer ${
              index === i ? "bg-zinc-400" : "bg-zinc-200"
            }`}
            onClick={() => {
              setIndex(i);
            }}
          ></div>
        ))}
        <FaChevronRight
          className="text-zinc-400 cursor-pointer text-2xl"
          onClick={() => {
            setIndex((index + 1) % testimonials.length);
          }}
        />
      </div>
    </div>
  );
}
