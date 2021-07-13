import React, { useRef } from "react";
import Header from "../src/components/layout/Header/Header";
import { Footer } from "../src/components/layout/Footer/Footer";
import type { AppProps } from "next/app";
import "../src/_css/common.css";
import "../styles/globals.css";
// import { useRouter } from "next/router";
import Head from "next/head";
import { useGetScroll, UseScrollHooksProps } from "../src/Hooks";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  const headerNode = useRef<HTMLDivElement>(null);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: headerNode,
  };

  const result = useGetScroll(useScrollHooksProps);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="hello!" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
        />
        <title>Hello!</title>
      </Head>
      <div>
        <div ref={headerNode}>
          <Header {...result}></Header>
        </div>
        <div className="w-screen flex justify-center mt-24 overflow-x-hidden">
          <Component {...pageProps} />
        </div>
      </div>
      <div className="z-30">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
