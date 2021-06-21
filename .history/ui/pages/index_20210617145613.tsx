import React from "react";
import { useScrollHooks } from "../src/Hooks";

export default function Home() {
  const testHook = useScrollHooks();

  return (
    <div className="h-96">
      <div>test</div>
    </div>
  );
}
