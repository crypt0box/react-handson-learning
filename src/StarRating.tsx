import Star from "./Star";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = () => {},
}: {
  totalStars?: number;
  selectedStars: number;
  onRate: (num: number) => void;
}) {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
