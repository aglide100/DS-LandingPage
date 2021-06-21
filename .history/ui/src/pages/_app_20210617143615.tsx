import { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      test
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
