import { Card, CardBody } from "@nextui-org/react";

const BasicCard = ({
  cardText,
  isPressable = true,
  isHoverable = true,
  clickEvent,
  cardStyle, bodyStyle,
  children,
}) => {
  return (
    <Card
      isPressable={isPressable}
      isHoverable={isHoverable}
      className={cardStyle}
      onPress={clickEvent}
    >
      <CardBody className={bodyStyle}>
        {
          children ? children : <p>{cardText}</p>
        }

      </CardBody>
    </Card>
  );
};

export default BasicCard;
