// import { useRouter } from "next/dist/client/router";
import React, { ReactNode } from "react";

type RequireLoginProps = {
  children: ReactNode;
};

export default function RequireLogin({ children }: RequireLoginProps) {
  //   const router = useRouter();
  return <>{children}</>;
}
