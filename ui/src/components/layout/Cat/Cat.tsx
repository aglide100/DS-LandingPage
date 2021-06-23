import React from "react";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import makeCarousel from "react-reveal/makeCarousel";

export type CatProps = {
  isFirst: boolean;
  isSecond: boolean;
  isThird: boolean;
};

const CarouselUI = ({ children }) => (
  <div className="relative w-96 h-96 overflow-hidden">{children}</div>
);
const Carousel = makeCarousel(CarouselUI);

const Cat: React.FC<CatProps> = ({ isFirst, isSecond, isThird }) => {
  return (
    <div className="mb-40">
      {isFirst ? (
        <Carousel defaultWait={5000}>
          <Slide right>
            <Image src="/cat1.jpeg" alt="cat1" width="1000px" height="1000px" />
          </Slide>
          <Slide right>
            <Image src="/cat2.jpeg" alt="cat2" width="1000px" height="1000px" />
          </Slide>
        </Carousel>
      ) : null}
      {isSecond ? (
        <Carousel defaultWait={5000}>
          <Slide right>
            <Image src="/cat3.jpeg" alt="cat3" width="1000px" height="1000px" />
          </Slide>
          <Slide right>
            <Image src="/cat4.jpeg" alt="cat4" width="1000px" height="1000px" />
          </Slide>
        </Carousel>
      ) : null}
      {isThird ? (
        <Carousel defaultWait={5000}>
          <Slide right>
            <div className="w-96 h-96">
              <Image
                src="/cat1.jpeg"
                alt="cat1"
                width="1000px"
                height="1000px"
              />
            </div>
          </Slide>
          <Slide right>
            <div className="h-96">
              <Image
                src="/cat1.jpeg"
                alt="cat2"
                width="1000px"
                height="1000px"
              />
            </div>
          </Slide>
          <Slide right>
            <Image src="/cat3.jpeg" alt="cat3" width="1000px" height="1000px" />
          </Slide>
          <Slide right>
            <Image src="/cat4.jpeg" alt="cat4" width="1000px" height="1000px" />
          </Slide>
        </Carousel>
      ) : null}
    </div>
  );
};

export default Cat;
