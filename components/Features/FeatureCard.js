export const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img
        src={imgSrc}
        alt={title}
        width={400}
        height={400}
        className="object-cover"
      />
      <h1 className="text-lg md:text-xl font-bold text-center">{title}</h1>
      <p className="text-sm md:text-base text-center">{description}</p>
    </div>
  );
};
