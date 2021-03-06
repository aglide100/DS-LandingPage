import React, { useRef, useState } from "react";
import Header from "../src/components/layout/Header/Header";
import { Footer } from "../src/components/layout/Footer/Footer";
import type { AppProps } from "next/app";
import "../src/_css/common.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetScroll, UseScrollHooksProps } from "../src/Hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const headerNode = useRef<HTMLDivElement>(null);

  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: headerNode
  };

  const result = useGetScroll(useScrollHooksProps);

  // SSR시 서버에서는 window, document객체가 없기에 예외 처리
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!hasBeenLoaded) {
        if (window.innerWidth <= 600) {
          if (router.pathname != "mobile") {
            router.push("/mobile");
          }
        } else {
          if (router.pathname != "/") {
            router.push("/");
          }
        }
      }

      setHasBeenLoaded(true);

      const handleResize = () => {
        if (window.innerWidth <= 600) {
          if (router.pathname != "mobile") {
            router.push("/mobile");
          }
        } else {
          if (router.pathname != "/") {
            router.push("/");
          }
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  return (
    <>
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
      <div className="flex flex-col justify-between">
        <div ref={headerNode}>
          <Header {...result}></Header>
        </div>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.pathname}
            className="w-screen flex justify-center mt-24 overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="z-30">
        <Footer></Footer>
      </div>
    </>
  );
}

export default MyApp;
