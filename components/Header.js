import Image from "next/image";

export const Header = () => {
  return (
    <header
      className="flex items-center bg-cover bg-center px-5 md:px-10 lg:px-20 xl:px-40 h-[90dvh] md:h-[70dvh] lg:h-[100dvh]"
      style={{
        backgroundImage:
          "url(https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg)",
      }}
    >
      <div className="flex flex-col gap-6 w-full lg:w-5/6 md:text-left">
        <Image
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
          alt="Multor logo"
          width={150}
          height={100}
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter flex-wrap mt-10 md:mt-20">
          Describe the
          <br /> value of booking
          <br /> an appointment
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl w-full md:w-2/3 mx-auto md:mx-0">
          No need to get clever. Tell people exactly what you&#39;re offering,
          then use this space to communicate your key value proposition.
        </h3>
      </div>
    </header>
  );
};
