import Color from "./Color";

type ColorProps = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export default function ColorList({
  colors = [],
  onRemoveColor = () => {},
  onRateColor = () => {}
}: {
  colors: ColorProps[],
  onRemoveColor: (id: string) => void,
  onRateColor: (id: string, rating: number) => void,
}) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}