import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const SampleSection1: React.FC = () => {
  return (
    <div className="w-screen z-20 flex justify-center">
      <div className="w-auto">
        <Fade bottom triggerOnce={false} delay={200}>
          <div className="float-left p-8 w-80 ">
            <Image className="rounded-full overflow-hidden	" src="/cat1.jpeg" alt="cat1" width="250px" height="250px" />
            <p className="text-center text-xl	font-bold">귀여운 고양이1</p>
            <p className="text-center">귀여운 고양이에 대한 설명 ㅁㄴㅇㄻㄴㅇㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</p>
          </div>

          <div className="float-left p-8 w-80">
            <Image className="rounded-full" src="/cat2.jpeg" alt="cat1" width="250px" height="250px" />
            <p className="text-center text-xl	font-bold">귀여운 고양이2</p>
            <p className="text-center">귀여운 고양이에 대한 설명 ㅁㄴㅇㄻㄴㅇㅁㅇㄴㄻㄴㅇㄻㄴㅇㄹㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</p>
          </div>

          <div className="float-left p-8 w-80">
            <Image className="rounded-full" src="/cat3.jpeg" alt="cat1" width="250px" height="250px" />
            <p className="text-center text-xl	font-bold">귀여운 고양이3</p>
            <p className="text-center">귀여운 고양이에 대한 설명 ㅁㄴㅇㄻㄴㅁㅇㄴㄻㄴㅇㄻㄴㅇㄻㄴㅇㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</p>
          </div>

          <div className="float-left p-8 w-80">
            <Image className="rounded-full" src="/cat4.jpeg" alt="cat1" width="250px" height="250px" />
            <p className="text-center text-xl	font-bold">귀여운 고양이4</p>
            <p className="text-center">귀여운 고양이에 대한 설명 ㅁㄴㅇㄻㄴㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㅇㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</p>
          </div>


        </Fade>
      </div>
    </div>
  );
};

export default SampleSection1;
