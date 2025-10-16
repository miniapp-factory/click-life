"use client";

import { useState } from "react";
import Image from "next/image";

export default function LogoClicker() {
  const [count, setCount] = useState(0);
  const [pulsing, setPulsing] = useState(false);

  const handleClick = () => {
    setCount((c) => c + 1);
    setPulsing(true);
    setTimeout(() => setPulsing(false), 200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`cursor-pointer transition-transform duration-200 ${
          pulsing ? "scale-110" : "scale-100"
        }`}
        onClick={handleClick}
      >
        <Image src="/logo.png" alt="Base Logo" width={200} height={200} />
      </div>
      <span className="text-xl font-medium">Clicks: {count}</span>
    </div>
  );
}
