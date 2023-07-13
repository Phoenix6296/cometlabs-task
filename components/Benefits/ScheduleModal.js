import { Input } from "@/components/common";
export const ScheduleModal = () => {
  return (
    <div className="relative">
      <div className="absolute -top-32 bg-primary flex flex-col items-center gap-5 p-10">
        <h1 className="text-white text-4xl font-bold text-center">
          Schedule an Appointment
        </h1>
        <h3 className="text-white text-center">
          Here, let visitors know what will happen when they complete your form.
        </h3>
        <div className="w-full">
          <Input placeholder={"First Name*"} required={true} />
          <Input placeholder={"Last Name*"} required={true} />
          <Input placeholder={"Email*"} type={"email"} required={true} />
          <Input placeholder={"Phone Number*"} type={"tel"} required={true} />
        </div>
        <button className="w-full bg-secondary text-white p-4 rounded-md hover:bg-secondaryDark">
          Hello
        </button>
      </div>
    </div>
  );
};
