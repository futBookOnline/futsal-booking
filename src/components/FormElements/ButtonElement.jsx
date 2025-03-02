import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";

const ButtonElement = ({
  variant,
  radius = "sm",
  size,
  isDisabled = false,
  buttonLabel,
  labelStyle = "font-medium",
  color,
  customStyle,
  isIconOnly,
  icon,
  onClick
}) => {
  return (
    <Button
      className={["box-border px-8", customStyle]}
      variant={variant}
      radius={radius}
      size={size}
      isDisabled={isDisabled}
      color={color}
      isIconOnly={isIconOnly}
      onClick={onClick}
    >
      {
        isIconOnly ? <FontAwesomeIcon icon={icon} /> :
          <div className="flex items-center gap-2">
            {icon && <FontAwesomeIcon icon={icon} />}
            <p className={labelStyle}>{buttonLabel}</p>
          </div>
      }
    </Button>
  );
};

export default ButtonElement;
