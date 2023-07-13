import Image from "next/image";

export const About = () => {
  return (
    <section className="px-40 grid grid-cols-2 my-40">
      <img
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_100000000000000000001o.jpg"
        width={500}
        height={500}
        alt="About"
      />
      <div className="flex flex-col gap-5 justify-center w-3/4">
        <h4 className="text-secondary">ABOUT</h4>
        <h1 className="text-3xl font-bold">
          {" "}
          Some more information about your business
        </h1>
        <h4>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </h4>
      </div>
    </section>
  );
};
