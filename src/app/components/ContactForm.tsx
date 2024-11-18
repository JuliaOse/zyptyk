import React from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

function ContactForm() {
  return (
    <div className="max-w-lg mx-auto p-4">
      {/* First Row: First Name and Last Name */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          label="First Name"
          placeholder="Enter first name"
          labelPlacement="outside"
          variant="bordered"
          fullWidth
        />
        <Input
          label="Last Name"
          placeholder="Enter last name"
          labelPlacement="outside"
          variant="bordered"
          fullWidth
        />
      </div>

      {/* Second Row: Email */}
      <div className="mt-4">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          labelPlacement="outside"
          variant="bordered"
          fullWidth
        />
      </div>

      {/* Third Row: Phone Number with Country Select */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Select label="Country Code" variant="bordered" fullWidth>
          <SelectItem key="+1">+1 (USA)</SelectItem>
          <SelectItem key="+44">+44 (UK)</SelectItem>
          <SelectItem key="+233">+233 (Ghana)</SelectItem>
          <SelectItem key="+91">+91 (India)</SelectItem>
        </Select>
        <Input
          type="tel"
          label="Phone Number"
          placeholder="Enter phone number"
          labelPlacement="outside"
          variant="bordered"
          fullWidth
        />
      </div>
    </div>
  );
}

export default ContactForm;
