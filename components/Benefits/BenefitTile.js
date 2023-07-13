import Image from "next/image";

export const BenefitTile = ({ imgSrc, title, content }) => {
  return (
    <div className="flex items-start gap-5 p-2">
      <Image src={imgSrc} alt={title} width={40} height={40} className="mt-1" />
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};
