import Rod from "./Rod";

type Props = {
  curvature: number;
};

export default function Beam({ curvature }: Props) {
  const viewWidth = 1000;
  const viewHeight = 400;

  const beamHeight = 40; // smaller beam
  const centerY = 200;

  const segments = 160;

  const top: string[] = [];
  const bottom: string[] = [];

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * viewWidth - viewWidth / 2;

    const y = curvature * x * x;

    const slope = 2 * curvature * x;

    // correct unit normal
    const nx = -slope;
    const ny = 1;

    const length = Math.sqrt(nx * nx + ny * ny);

    const ux = nx / length;
    const uy = ny / length;

    const dx = (beamHeight / 2) * ux;
    const dy = (beamHeight / 2) * uy;

    const px = x + viewWidth / 2;

    top.push(`${px + dx},${centerY + y + dy}`);
    bottom.push(`${px - dx},${centerY + y - dy}`);
  }

  const path = `M ${top.join(" L ")} ` + `L ${bottom.reverse().join(" L ")} Z`;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      className="border rounded-md bg-gray-50"
    >
      <path d={path} fill="#7ea1c4" stroke="#6b7a8f" strokeWidth={2} />

      <Rod x={350} curvature={curvature} />
      <Rod x={650} curvature={curvature} />
    </svg>
  );
}
