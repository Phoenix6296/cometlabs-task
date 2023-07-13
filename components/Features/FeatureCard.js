export const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={imgSrc} alt={title} width={400} height={400} />
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
