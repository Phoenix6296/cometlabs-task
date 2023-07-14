import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex justify-between text-xs md:text-base px-5 lg:px-40 items-center h-20 md:h-32 bg-primary text-gray-300">
      <Image
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
        width={100}
        height={80}
        alt="Logo"
      />
      <p>{`© ${new Date().getFullYear()} All Rights Reserved`}</p>
    </footer>
  );
};
