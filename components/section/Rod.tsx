type Props = {
  x: number;
  curvature: number;
};

export default function Rod({ x, curvature }: Props) {
  const centerX = x - 200;

  const y = curvature * centerX * centerX;

  const slope = 2 * curvature * centerX;

  const angle = Math.atan(slope);

  const length = 120;

  const x1 = x;
  const y1 = 200 + y - length / 2;

  const x2 = x;
  const y2 = 200 + y + length / 2;

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="black"
      strokeWidth={3}
      transform={`rotate(${(angle * 180) / Math.PI} ${x} ${200 + y})`}
    />
  );
}