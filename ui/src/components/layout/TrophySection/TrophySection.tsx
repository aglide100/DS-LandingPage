import React from "react";

const TrophySection: React.FC<{}> = () => {
  return (
    <div>      
      <div className="pt-32 mx-20 flex flex-col justify-center">
        <div className="h-20 mt-10 mx-36 pt-3 bg-black rounded-xl text-6xl text-white text-center">
          주요성과
        </div>
        <div className="flex flex-wrap pt-16 justify-center">
          <div className="w-64 h-80 mx-2 content-center text-center bg-white rounded-xl shadow-self">
            1
          </div >
          <div className="w-64 h-80 mx-2 content-center text-center bg-white rounded-xl shadow-self">
            1
          </div>
          <div className="w-64 h-80 mx-2 content-center text-center bg-white rounded-xl shadow-self">
            1
          </div>
          <div className="w-64 h-80 mx-2 content-center text-center bg-white rounded-xl shadow-self">
            1
          </div>
          <div className="w-64 h-80 mx-2 content-center text-center bg-white rounded-xl shadow-self">
            1
          </div>
        </div>
      </div>
      
      <div className="pt-32 mx-20 flex flex-col justify-center">
        <div className="mt-10 flex flex-wrap pt-16">

          <div className="w-1/4 h-80 content-center text-center bg-red-600">            
          </div >
          <div className="w-1/4 h-80 content-center text-center pt-36 text-5xl">
            상상스퀘어
          </div>

          <div className="w-1/4 h-80 content-center text-center bg-red-600">
          </div>
          <div className="w-1/4 h-80 content-center text-center pt-36 text-5xl">
            우수한 기자재
          </div>

          <div className="w-1/4 h-80 content-center text-center pt-36">
            <div className="">학생들의 창의교육을 완성</div>
            <div className="text-5xl">Fab Lab</div>
          </div>
          <div className="w-1/4 h-80 content-center text-center bg-red-600">
            1
          </div>

          <div className="w-1/4 h-80 content-center text-center pt-36 text-5xl">
            AI+X 융합연구소
          </div>
          <div className="w-1/4 h-80 content-center text-center bg-red-600">
          </div>
        </div>
      </div>
      <div className="mb-96" />
      
      {/* <div className="mb-96"></div>
      <CardContainer2 cardViewList={cardViewContainerProps} /> */}
    </div>
  );
};

export default TrophySection;
