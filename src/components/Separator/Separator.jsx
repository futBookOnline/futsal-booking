import { Divider } from "@nextui-org/divider";

const Separator = ({ orientation = "horizontal", styleClass }) => {
  return <Divider orientation={orientation} className={styleClass} />;
};

export default Separator;
