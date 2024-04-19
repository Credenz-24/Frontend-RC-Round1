// import React from "react";
// import gold from "../../images/gold.png";

// const TopCards = ({ name, rank, teamScore, accuracy, img }) => {
//   return (
//     <>
//       <div className="card h-[230px] w-[400px] bg-blue-00 border-[2px] border-solid border-white rounded-[20px] flex flex-col justify-center items-center backdrop-blur-[30px] ">
//         <div className="user h-[50%] w-full bg-yellow-30 flex justify-center items-center ">
//           <div className="trophy-image w-[30%] h-full bg-red- flex justify-center items-center">
//             <img src={img} alt="" className="h-[85px] w-[80px]" />
//             {/* <h1 className="text-[25px] text-white"></h1> */}
//           </div>
//           <div className="username w-[70%] h-full bg-red-70 flex justify-start items-center px-[20px]">
//             <h1 className="text-[30px] text-white">{name}</h1>
//           </div>
//         </div>
//         <div className="stats  h-[50%] w-full bg-blue-30 flex justify-center items-centers ">
//           <div className="questions-solved h-full w-[60%] bg-green-90 flex flex-col justify-center items-center ">
//             <h5 className="text-[20px] text-white">Team Score</h5>
//             <h1 className="text-[30px] text-white">{teamScore}</h1>
//           </div>
//           <div className="accuracy h-full w-[40%] bg-cyan- flex flex-col justify-center items-center">
//             <h5 className="text-[20px] text-white">Accuracy</h5>
//             <h1 className="text-[30px] text-white">{accuracy}%</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopCards;

import React from "react";

const TopCards = ({ name, rank, teamScore, accuracy, img }) => {
  return (
    <>
      <style>
        {`
                @media only screen and (max-width: 468px) {
                    .card{
                        width:100%;
                        height:100px;
                        display:flex;
                        flex-direction:column;
                        justify:center;
                        items:center;
                        padding: 0 2vw;
                        display:none;

                    }
                    .card .stat{
                        display:none;
                    }
                }
                @media only screen and (max-width: 760px) {
                    
                    .card{
                        height:100px;
                        width:200px;
                    }

                    .stat{
                        display:none;
                    }
                    .user{
                        height:100%;
                    }
                        
                }
            `}
      </style>
      <div className="card z-50 h-[230px] sm:h-[200px] lg:h-[250px] w-[400px] sm:w-[350px] lg:w-[350px] bg-blue-00 border-[2px] border-solid border-white rounded-[20px] flex flex-col justify-center items-center backdrop-blur-[30px] ">
        <div className="user h-[50%] w-full bg-yellow-30 flex justify-center items-center ">
          <div className="trophy-image w-[30%] sm:w-[25%] lg:w-[35%] h-full bg-red- flex justify-center items-center">
            <img
              src={img}
              alt=""
              className="h-[85px] sm:h-[70px] lg:h-[100px] w-[80px] sm:w-[65px] lg:w-[90px]"
            />
          </div>
          <div className="username w-[70%] sm:w-[75%] lg:w-[65%] h-full bg-red-70 flex justify-start items-center px-[20px]">
            <h1 className="text text-[30px] sm:text-[25px] lg:text-[25px] text-white">
              {name}
            </h1>
          </div>
        </div>
        <div className="stats h-[50%] w-full bg-blue-30 flex justify-center items-center ">
          <div className="text questions-solved h-full w-[60%] sm:w-[55%] lg:w-[65%] bg-green-90 flex flex-col justify-center items-center ">
            <h5 className="text text-[20px] sm:text-[20px] lg:text-[22px] text-indigo-500">
              Team Score
            </h5>
            <h1 className="text text-[30px] sm:text-[15px] lg:text-[25px] text-white">
              {teamScore}
            </h1>
          </div>
          <div className="accuracy h-full w-[40%] sm:w-[45%] lg:w-[35%] bg-cyan- flex flex-col justify-center items-center">
            <h5 className="text-[20px] sm:text-[20px] lg:text-[22px] text-indigo-500">
              Accuracy
            </h5>
            <h1 className="text-[30px] sm:text-[15px] lg:text-[25px] text-white">
              {accuracy}%
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCards;