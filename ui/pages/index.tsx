import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import dynamic from "next/dynamic";

const Section1 = dynamic(
  () =>
    import("../src/components/layout/ZoomSection/ZoomSection").catch((err) => {
      return () => <p>Sorry, failed to load {err}</p>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

const Section2 = dynamic(
  () =>
    import("../src/components/layout/BounceSection/BounceSection").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const Section3 = dynamic(
  () =>
    import("../src/components/layout/ZoomSection/ZoomSection").catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

const Section4 = dynamic(
  () =>
    import("../src/components/layout/BounceSection/BounceSection").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const CatSection = dynamic(
  () =>
    import("../src/components/layout/Cat/Cat").catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

export default function Home() {
  return (
    <div>
      <br />
      <Section1 />
      <Section2 />
      <CatSection isFirst={true} isSecond={false} />
      <br />
      <Section3 />
      <Section4 />
      <CatSection isFirst={false} isSecond={true} />
    </div>
  );
}
