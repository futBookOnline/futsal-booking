import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";

const CheckboxElement = ({ optionText }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
      {optionText}
    </Checkbox>
  );
};

export default CheckboxElement;
