import Rod from "./Rod";

type Props = {
  curvature: number;
};

export default function Beam({ curvature }: Props) {

  const viewWidth = 1000;
  const viewHeight = 400;

  const beamHeight = 80;
  const centerY = 200;

  const segments = 120;

  const top: string[] = [];
  const bottom: string[] = [];

  for (let i = 0; i <= segments; i++) {

    const x = (i / segments) * viewWidth - viewWidth / 2;

    const y = curvature * x * x;

    top.push(`${x + viewWidth / 2},${centerY + y - beamHeight / 2}`);
    bottom.push(`${x + viewWidth / 2},${centerY + y + beamHeight / 2}`);
  }

  const path =
    "M " +
    top.join(" L ") +
    " L " +
    bottom.reverse().join(" L ") +
    " Z";

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      preserveAspectRatio="xMidYMid meet"
      className="border rounded-md bg-gray-50"
    >
      <path d={path} fill="#7ea1c4" stroke="#6b7a8f" strokeWidth={2} />

      <Rod x={350} curvature={curvature} />
      <Rod x={650} curvature={curvature} />
    </svg>
  );
}