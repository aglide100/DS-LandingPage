import React from "react";

export type HeaderProps = {};

export function Header(props: HeaderProps) {
  return (
    <nav className="w-screen h-24 bg-black">
      <div className="flex justify-between items-center"></div>
    </nav>
  );
}