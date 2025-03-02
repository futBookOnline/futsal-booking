import { Calendar } from "@nextui-org/react";

const Calendar = (props) => {
  const date = new Date();
  const { value, setValue, minValue, maxValue, defaultValue = date,  } = props;

  return (
    <Calendar
      aria-label="Date (Controlled)"
      value={value}
      onChange={setValue}
    />
  );
}
