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

  const halfWidth = viewWidth / 2;

  const top: string[] = [];
  const bottom: string[] = [];

  for (let i = 0; i <= segments; i++) {

    const x = (i / segments) * viewWidth - halfWidth;
    const y = curvature * x * x;

    top.push(`${x + halfWidth},${centerY + y - beamHeight / 2}`);
    bottom.push(`${x + halfWidth},${centerY + y + beamHeight / 2}`);
  }

  // ----- LEFT EDGE ROTATION -----

  const leftX = -halfWidth;
  const leftY = curvature * leftX * leftX;

  const leftSlope = 2 * curvature * leftX;
  const leftAngle = Math.atan(leftSlope);

  const leftTopX =
    halfWidth + leftX + (beamHeight / 2) * Math.sin(leftAngle);

  const leftTopY =
    centerY + leftY - (beamHeight / 2) * Math.cos(leftAngle);

  const leftBottomX =
    halfWidth + leftX - (beamHeight / 2) * Math.sin(leftAngle);

  const leftBottomY =
    centerY + leftY + (beamHeight / 2) * Math.cos(leftAngle);

  // ----- RIGHT EDGE ROTATION -----

  const rightX = halfWidth;
  const rightY = curvature * rightX * rightX;

  const rightSlope = 2 * curvature * rightX;
  const rightAngle = Math.atan(rightSlope);

  const rightTopX =
    halfWidth + rightX + (beamHeight / 2) * Math.sin(rightAngle);

  const rightTopY =
    centerY + rightY - (beamHeight / 2) * Math.cos(rightAngle);

  const rightBottomX =
    halfWidth + rightX - (beamHeight / 2) * Math.sin(rightAngle);

  const rightBottomY =
    centerY + rightY + (beamHeight / 2) * Math.cos(rightAngle);

  const path =
    `M ${leftTopX} ${leftTopY} ` +
    `L ${top.slice(1).join(" L ")} ` +
    `L ${rightTopX} ${rightTopY} ` +
    `L ${rightBottomX} ${rightBottomY} ` +
    `L ${bottom.reverse().slice(1).join(" L ")} ` +
    `L ${leftBottomX} ${leftBottomY} Z`;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      className="border rounded-md bg-gray-50"
    >
      <path
        d={path}
        fill="#7ea1c4"
        stroke="#6b7a8f"
        strokeWidth={2}
      />

      <Rod x={350} curvature={curvature} />
      <Rod x={650} curvature={curvature} />
    </svg>
  );
}