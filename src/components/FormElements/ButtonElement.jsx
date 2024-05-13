import { Button, ButtonGroup } from "@nextui-org/button";

const ButtonElement = ({
  variant,
  radius = "sm",
  size,
  isDisabled = false,
  buttonLabel,
  labelStyle="font-medium",
  color,
}) => {
  return (
    <Button
      className="box-border mt-3 px-8"
      variant={variant}
      radius={radius}
      size={size}
      isDisabled={isDisabled}
      color={color}
    >
      <p className={labelStyle}>{buttonLabel}</p>
    </Button>
  );
};

export default ButtonElement;
