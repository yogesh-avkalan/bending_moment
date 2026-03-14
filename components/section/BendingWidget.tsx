"use client";

import { useState } from "react";
import Beam from "./Beam";
import { Slider } from "@/vendors/ui/slider";

export default function BendingWidget() {

  const [curvature, setCurvature] = useState(0);

  return (
    <div className="w-full space-y-6">

      <Beam curvature={curvature} />

      <Slider
        min={-0.0008}
        max={0.0008}
        step={0.00005}
        defaultValue={[0]}
        onValueChange={(v) => setCurvature(v[0])}
      />

    </div>
  );
}