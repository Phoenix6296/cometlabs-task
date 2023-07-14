export const TestimonialCard = ({
  noOfStars,
  message,
  imgSrc,
  name,
  location,
}) => {
  return (
    <div className="w-full md:w-96 p-2 flex flex-col gap-3">
      <p>
        {Array(noOfStars)
          .fill()
          .map((_, i) => (
            <span className="text-secondary text-sm" key={i}>
              &#9733;
            </span>
          ))}
      </p>
      <h1 className="text-xl">
        <em>{message}</em>
      </h1>
      <div className="flex items-center gap-2">
        <img src={imgSrc} alt={name} width={50} height={50} layout="fixed" />
        <div>
          <p className="text-sm md:text-base">{name}</p>
          <p className="text-sm md:text-base">{location}</p>
        </div>
      </div>
    </div>
  );
};
