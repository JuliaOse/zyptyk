import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Checkbox } from "@nextui-org/checkbox";
import { inter } from "@/app/fonts/fonts";

function ContactForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [checked, setChecked] = useState(false);

  const handlePhoneChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="items-center mb-10">
        <p className="text-center">Please fill out this form</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col">
          <label className="text-[#344054]">First name</label>
          <Input
            // label="First Name"
            placeholder="Enter first name"
            labelPlacement="outside"
            variant="bordered"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            className="text-[#667085] text-base focus:outline-none outline-none focus:invisible"
            radius="sm"
          />
        </div>
        <div>
          <label className="text-[#344054]">Last name</label>
          <Input
            //   label="Last Name"
            placeholder="Enter last name"
            labelPlacement="outside"
            variant="bordered"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            className="text-[#667085] text-base focus:outline-none outline-none focus:invisible"
            radius="sm"
          />
        </div>
      </div>

      {/* Second Row: Email */}
      <div className="mt-4">
        <label className="text-[#344054]">Email</label>
        <Input
          type="email"
          //   label="Email"
          placeholder="you@company.com"
          labelPlacement="outside"
          variant="bordered"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          className="text-[#667085] text-base focus:outline-none outline-none focus:invisible"
          radius="sm"
        />
      </div>

      {/* Third Row: Phone Number */}
      <div className="mt-4">
        <label className="text-[#344054]">Phone number</label>
        <PhoneInput
          defaultCountry="GH"
          placeholder="+ (233) 0000-00000"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          //   className="flex flex-row"
          className="text-[#667085] text-base border-2 p-2 rounded-md"
          radius="sm"
        />
      </div>
      <div className="mt-4">
        <label className="text-[#344054]">Message</label>
        <Input
          type="message"
          size="lg"
          //   label="Email"
          //   placeholder="you@company.com"
          labelPlacement="outside"
          variant="bordered"
          name="email"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          className="text-[#667085] text-base focus:outline-none outline-none focus:invisible"
          radius="sm"
        />
      </div>
      <div className="py-4">
        <Checkbox defaultSelected radius="md" color="primary">
          <span
            className={`${inter.className} antialiased text-base text-[#475467]`}
          >
            {" "}
            You agree to our friendly{" "}
            <span className="underline  text-[#475467]">privacy policy</span>
          </span>
        </Checkbox>
      </div>
      <div className="my-3">
        <Button color="primary" className="w-full">
          Send Message
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
