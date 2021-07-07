import React from "react";
import RequireLogin from "../../src/components/RequireLogin";

export default function admin() {
  return (
    <>
      <RequireLogin>
        <div>Hello!</div>
      </RequireLogin>
    </>
  );
}
