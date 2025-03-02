import { Input } from "@nextui-org/react";
import { useState } from "react";

const InputElement = ({
  label,
  type = "text",
  placement = "inside", // Assuming default placement is "outside"
  placeholder,
  errorMessage,
  variant = "bordered",
  radius = "sm",
  isClearable = true,
  description,
  onChange
}) => {


  return (
    <Input
      label={label} // Pass the label prop
      placeholder={placeholder}
      errorMessage={errorMessage && errorMessage}
      variant={variant}
      radius={radius}
      isClearable={isClearable}
      description={description}
      labelPlacement={placement} // Pass the labelPlacement prop
      className="text-black relative"
      type={type}
      onChange={onChange}
    />
  );
};

export default InputElement
