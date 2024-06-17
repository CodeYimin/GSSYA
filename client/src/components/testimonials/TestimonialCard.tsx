import { Testimonial } from "@/types/Testimonials";
import { ReactElement } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial: { name, title, text, video },
}: TestimonialCardProps): ReactElement {
  return (
    <div className="w-full h-max p-8 bg-zinc-100 text-zinc-800 relative rounded-lg">
      <FaQuoteLeft className="text-[3.5rem] text-zinc-600 -mt-3" />
      <p className="text-2xl italic mt-2 font-medium">{title}</p>
      {text && <p className="text-sm mt-2 italic">{text}</p>}
      {video && (
        <iframe
          src={video}
          width="100%"
          height="100%"
          style={{
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            aspectRatio: "16/9",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
          allow="autoplay; fullscreen"
        />
      )}
      <p className="mt-3">- {name}</p>
    </div>
  );
}
