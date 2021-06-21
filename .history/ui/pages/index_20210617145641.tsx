import React from "react";
import { useScrollHooks } from "../src/Hooks";

export default function Home() {
  const testHook = useScrollHooks();

  return (
    <div>
      <div className="h-40">test</div>
    </div>
  );
}
