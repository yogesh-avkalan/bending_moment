"use client";

import { useState } from "react";
import Beam from "./Beam";
import { Slider } from "@/vendors/ui/slider";

export default function BendingWidget() {
  const [curvature, setCurvature] = useState(0);

  return (
    <div className="space-y-6 w-full ">
      <Beam curvature={curvature} />

      <Slider
        min={-0.005}
        max={0.005}
        step={0.0005}
        defaultValue={[0]}
        onValueChange={(v) => setCurvature(v[0])}
      />
    </div>
  );
}