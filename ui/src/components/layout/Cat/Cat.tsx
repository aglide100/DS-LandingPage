import React from "react";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import makeCarousel from "react-reveal/makeCarousel";
import styled from "styled-components";

export type CatProps = {
  isFirst: boolean;
  isSecond: boolean;
};

const Container = styled.div`
  border: 1px black red;
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 400px;
`;

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const Cat: React.FC<CatProps> = ({ isFirst, isSecond }) => {
  return (
    <div className="mb-10">
      {isFirst ? (
        <Carousel defaultWait={5000}>
          <Slide right>
            <div>
              <Image src="/cat1.jpeg" width="800px" height="400px" />
            </div>
          </Slide>
          <Slide right>
            <div>
              <Image src="/cat2.jpeg" width="800px" height="400px" />
            </div>
          </Slide>
        </Carousel>
      ) : null}
      {isSecond ? (
        <Carousel defaultWait={5000}>
          <Slide right>
            <div>
              <Image src="/cat3.jpeg" width="800px" height="400px" />
            </div>
          </Slide>
          <Slide right>
            <div>
              <Image src="/cat4.jpeg" width="800px" height="400px" />
            </div>
          </Slide>
        </Carousel>
      ) : null}
    </div>
  );
};

export default Cat;
