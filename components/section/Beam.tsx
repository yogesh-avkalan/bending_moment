import Rod from "./Rod";

type Props = {
  curvature: number;
};

export default function Beam({ curvature }: Props) {
  const width = 400;
  const height = 80;

  const points = 80;

  const top = [];
  const bottom = [];

  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width - width / 2;

    const y = curvature * x * x;

    top.push(`${x + width / 2},${200 + y - height / 2}`);
    bottom.push(`${x + width / 2},${200 + y + height / 2}`);
  }

  const path =
    "M " +
    top.join(" L ") +
    " L " +
    bottom.reverse().join(" L ") +
    " Z";

  return (
    <svg width={width} height={400} className="border rounded-md">
      <path d={path} fill="#7ea1c4" stroke="#6b7a8f" />

      <Rod x={150} curvature={curvature} />
      <Rod x={250} curvature={curvature} />
    </svg>
  );
}