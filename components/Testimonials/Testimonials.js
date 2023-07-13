import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="px-40">
      <h1 className="text-secondary text-center mb-20">
        DON'T JUST TAKE OUR WORD FOR IT
      </h1>
      <div className="grid grid-cols-2">
        <TestimonialCard
          noOfStars={5}
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          imgSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_100000000000000000001o.jpg"
          name="Real Name"
          location="Location"
        />
        <TestimonialCard
          noOfStars={5}
          message="Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
          imgSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_100000000000000000001o.jpg"
          name="Real Name"
          location="Location"
        />
      </div>
    </section>
  );
};
