type Props = {
  x: number;
  curvature: number;
};

export default function Rod({ x, curvature }: Props) {

  const centerX = x - 500;

  const y = curvature * centerX * centerX;

  const slope = 2 * curvature * centerX;

  const angle = Math.atan(slope);

  const centerY = 200;

  const rodLength = 160;

  return (
    <line
      x1={x}
      y1={centerY + y - rodLength / 2}
      x2={x}
      y2={centerY + y + rodLength / 2}
      stroke="black"
      strokeWidth={4}
      transform={`rotate(${(angle * 180) / Math.PI} ${x} ${centerY + y})`}
    />
  );
}