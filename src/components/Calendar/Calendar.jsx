import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState(parseDate("2024-03-07"));

  return (
    <Calendar
      aria-label="Date (Controlled)"
      value={value}
      onChange={setValue}
    />
  );
}
