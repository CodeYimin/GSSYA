import { WebsiteDataTestimonialsSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";
import TestinomialCard from "./components/TestimonialCard";

function TestinomialsSection({
  title,
  testimonials,
}: WebsiteDataTestimonialsSection): ReactElement {
  return (
    <div id="testimonials" className="bg-blue-500 pb-5">
      <h1 className="section-header py-8 text-white">{title}</h1>
      <Testimonials>
        {testimonials?.map(
          (testimonial, i) =>
            i < 30 && (
              <TestinomialCard
                key={testimonial._id as unknown as string}
                {...testimonial}
              />
            )
        )}
      </Testimonials>
    </div>
  );
}

const Testimonials = styled.div`
  /* display: flex; */
  /* align-items: flex-start; */
  column-width: 20rem;
  text-align: center;
  /* overflow-x: hidden; */
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

export default TestinomialsSection;
