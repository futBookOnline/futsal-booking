import { Input } from "@nextui-org/react";

const InputElement = ({
  label,
  placement = "inside", // Assuming default placement is "outside"
  placeholder,
  errorMessage,
  variant = "bordered",
  radius = "sm",
  isClearable = true,
  description,
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
    />
  );
};

export default InputElement;
