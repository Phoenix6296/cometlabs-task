export const Reason = () => {
  return (
    <section className="flex justify-center relative px-40 pt-32 h-[700px] bg-greenLight mb-[500px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-center">
          Show visitors what <br />
          they&apos;re signing up for
        </h1>
        <h3 className="text-lg text-center">
          Include a video or photo from one of your sessions to help people
          <br />
          understand your service &#40;or just to hype &#39;em up&#41;.
        </h3>
      </div>
      <video
        id="video"
        autoPlay
        poster="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.webp?image_crop_resized=1920x1081"
        loop
        muted
        playsInline
        className="absolute w-[80%] top-[400px]"
        src={"https://unbounce.com?wvideo=9o5wexcj4p"}
      ></video>
    </section>
  );
};
