import React from "react";
// import gold from "../../images/gold.png";

const TopCards = ({ name, rank, teamScore, accuracy, img }) => {
  return (
    <>
      <div className="card h-[230px] w-[400px] bg-blue-00 border-[2px] border-solid border-white rounded-[20px] flex flex-col justify-center items-center backdrop-blur-[30px] ">
        <div className="user h-[50%] w-full bg-yellow-30 flex justify-center items-center ">
          <div className="trophy-image w-[30%] h-full bg-red- flex justify-center items-center">
            <img src={img} alt="" className="h-[85px] w-[80px]" />
            {/* <h1 className="text-[25px] text-white"></h1> */}
          </div>
          <div className="username w-[70%] h-full bg-red-70 flex justify-start items-center px-[20px]">
            <h1 className="text-[30px] text-white">{name}</h1>
          </div>
        </div>
        <div className="stats  h-[50%] w-full bg-blue-30 flex justify-center items-centers ">
          <div className="questions-solved h-full w-[60%] bg-green-90 flex flex-col justify-center items-center ">
            <h5 className="text-[20px] text-white">Team Score</h5>
            <h1 className="text-[30px] text-white">{teamScore}</h1>
          </div>
          <div className="accuracy h-full w-[40%] bg-cyan- flex flex-col justify-center items-center">
            <h5 className="text-[20px] text-white">Accuracy</h5>
            <h1 className="text-[30px] text-white">{accuracy}%</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCards;