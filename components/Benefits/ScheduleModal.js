"use client";

import { Dropdown, Input } from "@/components/common";
import { APPOINTMENT_OPTIONS } from "@/utils/constants";
import { useState } from "react";

const INPUT_FIELDS = [
  { placeholder: "First Name*", name: "firstName" },
  { placeholder: "Last Name*", name: "lastName" },
  { placeholder: "Email*", name: "email", type: "email" },
  { placeholder: "Phone Number*", name: "phoneNumber", type: "tel" },
];

export const ScheduleModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    appointmentType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleFormSubmit}
        className="absolute -top-32 bg-primary flex flex-col items-center gap-5 p-10"
      >
        <h1 className="text-white text-4xl font-bold text-center">
          Schedule an Appointment
        </h1>
        <h3 className="text-white text-center">
          Here, let visitors know what will happen when they complete your form.
        </h3>
        <div className="w-full flex flex-col gap-3">
          {INPUT_FIELDS.map((field) => (
            <Input
              key={field.name}
              placeholder={field.placeholder}
              required={true}
              type={field.type}
              onChange={handleChange}
              name={field.name}
              value={formData[field.name]}
            />
          ))}
          <Dropdown
            placeholder={"Type of Appointment"}
            defaultValue={"Type of Appointment"}
            options={APPOINTMENT_OPTIONS}
            containerStyles={"mt-2"}
            name={"appointmentType"}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full font-bold mt-5 bg-secondary text-white p-4 rounded-md hover:bg-secondaryDark"
          type="submit"
        >
          SCHEDULE NOW
        </button>
      </form>
    </div>
  );
};
