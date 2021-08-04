import React from "react";
import Image from "next/image";

const IntroCardView: React.FC<{}> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center w-full bg-white shadow-2xl mt-40 h-80">
      <div>
        <div className="flex flex-row items-center">
          <div className="relative w-40 h-20 mr-4 bottom-4">
            <Image
              alt="sw logo"
              src="/sw_logo.png"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <span
            className="text-6xl font-bold"
            style={{
              textShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)"
            }}
          >
            소프트웨어 융합대학
          </span>
        </div>
        <div className="w-full flex flex-row mt-2">
          <div className="w-full h-px bg-ds_gray-1 bg-gradient-to-l from-ds_gray-1 via-ds_gray-1" />
          <div className="w-full h-px bg-ds_gray-1 bg-gradient-to-r from-ds_gray-1 via-ds_gray-1" />
        </div>
        <div className="flex flex-row justify-around font-bold mt-6 pl-4 pr-4">
          <a href="/sw">
            <span className="text-ds_gray-2">#</span>
            <span className="text-ds_red-1">소프트웨어학과</span>
          </a>

          <a href="/ai">
            <span className="text-ds_gray-2">#</span>
            <span className="text-ds_red-1">인공지능응용학과</span>
          </a>

          <a href="/pro">
            <span className="text-ds_gray-2">#</span>
            <span className="text-ds_red-1">정보보안학과</span>
          </a>

          <a href="/en">
            <span className="text-ds_gray-2">#</span>
            <span className="text-ds_red-1">컴퓨터공학과</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(IntroCardView);
