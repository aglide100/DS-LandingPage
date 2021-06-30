import React, { useRef } from "react";
import { Header, HeaderProps } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
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

  const headerProps: HeaderProps = {
    isShow: result.isShow,
    scrollDirection: result.scrollDirection,
    scrollY: result.scrollY,
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hello!" />
        <title>Hello!</title>
      </Head>
      <div>
        <div ref={headerNode}>
          <Header {...headerProps}></Header>
        </div>
        <div className="flex justify-center mt-24">
          <Component {...pageProps} />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
