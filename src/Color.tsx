import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = () => {},
  onRate = () => {},
}: {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}) {
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>{title}</h1>
        <button
          style={{ height: 36, marginLeft: 10 }}
          onClick={() => onRemove(id)}
        >
          <FaTrash />
        </button>
      </div>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating: number) => onRate(id, rating)}
      />
    </section>
  );
}
