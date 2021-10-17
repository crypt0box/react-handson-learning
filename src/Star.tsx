import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f: any): void => f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export default Star;