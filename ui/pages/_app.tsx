import React from "react";
import { Header, HeaderProps } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import type { AppProps } from "next/app";
import "../src/_css/common.css";
import "../styles/globals.css";
// import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  const headerProps: HeaderProps = {};
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hello!" />
      </Head>
      <div>
        <Header {...headerProps}></Header>
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
