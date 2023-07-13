import Image from "next/image";

export const Header = () => {
  return (
    <header
      className="h-[100dvh] flex items-center bg-cover bg-center px-40"
      style={{
        backgroundImage:
          "url(https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg)",
      }}
    >
      <div className="flex flex-col w-2/3 gap-10">
        <Image
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
          alt="Multor logo"
          width={150}
          height={100}
        />
        <h1 className="text-7xl font-bold tracking-tighter flex-wrap mt-20">
          Desribe the value of booking an appointment
        </h1>
        <h3 className="text-2xl w-2/3">
          No need to get clever. Tell people exactly what you&apos;re offering,
          then use this space to communicate your key value proposition.
        </h3>
      </div>
    </header>
  );
};
