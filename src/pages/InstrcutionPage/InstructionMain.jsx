// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Instruct from "./props/Instruct";
// import LifeLine from "./props/LifeLine";
// import Popup from "./props/Popup";
// // import { useNavigate } from "react-router-dom";

// const InstructionMain = (props) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [acceptedConditions, setAcceptedConditions] = useState(false);
//   const navigate = useNavigate();

//   const [pop, setPop] = useState(false);

//   const LifelineArray = [
//     {
//       id: 1,
//       title: "Aqua Bonus",
//       img: "../aqua point 1.jpeg",
      
//       content: "Correct answer earns +8 marks, while incorrect answer would result in -4 marks. This lifeline can't be activated after you have attempted first response out of two.",
//     },
//     {
//       id: 2,
//       title: "Time Stretch",
      
//       img: "../time-freeze.png",
//       content: "Time slows down for a minute. Every 10 seconds, 1 second is reduced from the timer. This lifeline remains active for only a minute.",
//     },
//     {
//       id: 3,
//       title: "Oceanic Opinions",
//       img: "../poll 1.svg",
//       content: "Reveals the responses of other participants for the same question. It can't be activated after you have attempted the first response. ",
//     },
//   ];

//   const handleProceedClick = () => {
//     if (acceptedConditions) {
//       console.log("Proceeding...");
//       navigate("/mcq");
//     } else {
//       console.log("Please accept the conditions.");
//     }
//   };

//   const [text, setText] = useState([]);
//   const [status, setStatus] = useState([]);
//   const id = 101;

//   // const text = props.text;

//   const handlePopup = () => {
//     setPop((prevPop) => !prevPop); // Toggle the previous value of pop
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };
//   const handlePrev = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const InstructionArray = [
//     {
//       num: 1,
//       desc: "The reverse coding round will last for 30 minutes. ",
//     },
//     {
//       num: 2,
//       desc: "The answers must be strictly in the form of integers. All questions must be solved in sequence.",
//     },
//     {
//       num: 3,
//       desc: "You will get 2 chances for each question. Click Next to see Marking Scheme!",
//     },
//     {
//       num: 4, 
//       desc: "For Response 1, Correct answer: +4 Marks, Wrong Answer: -1 Mark",
//     },
//     {
//       num: 5,
//       desc: "For Response 2 Correct Answer: +3 Marks, Wrong answer -1 Mark",
//     },
//     {
//       num: 6,
//       desc: "Throughout this test, you'll be provided with three lifelines. You can use only a single lifeline for one question. Click Next to see Lifelines Info!",
//     },
//   ];

//   let display = (text) => {
//     const newDisplay = LifelineArray.filter((items) => items.id === text);
//     console.log("NEW DISPLAY: ", newDisplay);
//     setText(newDisplay);
//   };

//   return (
//     <>
//       <div className="container w-full bg-red-60 z-[999] flex justify-center items-center mx-auto h-[91.5vh]">
//         <div className="content-container w-[90%] bg-blue-90 h-[100%] flexf flex-col justify-center items-center ">
//           {/* INSTRUCTIONS */}
//           {currentStep === 0 ? (
//             <>
//               <div className="title h-[16%] w-full bg-green-90 flex justify-center items-center ">
//                 <h1 className="text-[40px] text-white font-red-hat-display">
//                   INSTRUCTIONS
//                 </h1>
//               </div>
//               <div className="instructions h-[70%] w-full bg-[#52E6E8] rounded-xl md:px-[5vw] px-1 flex flex-col justify-center items-center gap-[2vw] my-4">
//                 {InstructionArray.slice(0,3).map((item) => {
//                   return (
//                     <>
//                       <Instruct num={item.num} desc={item.desc} />
//                     </>
//                   );
//                 })}
//               </div>
//               <div className="buttons h-[8%] w-full bg-orange- flex justify-center items-center gap-[50px]">
//                 <button
//                   className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
//                   onClick={handleNext}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           ) : null}
//           {currentStep === 1 ? (
//             <>
//               <div className="title h-[16%] w-full bg-green-90 flex justify-center items-center ">
//                 <h1 className="text-[40px] text-white font-red-hat-display">
//                   INSTRUCTIONS
//                 </h1>
//               </div>
//               <div className="instructions h-[70%] w-full bg-[#52E6E8] rounded-xl px-[5vw] flex flex-col justify-center items-center gap-[2vw] my-2">
//                 {InstructionArray.slice(3,6).map((item) => {
//                   return (
//                     <>
//                       <Instruct num={item.num} desc={item.desc} />
//                     </>
//                   );
//                 })}
//               </div>
//               <div className="buttons h-[8%] w-full bg-orange- flex justify-center items-center gap-[50px]">
//               <button
//                   className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
//                   onClick={handlePrev}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
//                   onClick={handleNext}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           ) : null}
//           {/* LIFELINES */}
//           {currentStep == 2 ? (
//             <div className="h-[91.5] w-full relative ">
//               <div className="title h-[12%] w-full bg-green-90 flex justify-center items-center ">
//                 <h1 className="text-[40px] text-white font-red-hat-display">
//                   LIFELINES
//                 </h1>
//               </div>
//               <div className="content-container w-[90%] bg-blue-90 flexf flex-col justify-center items-center mx-auto ">
//                 <div className="lifeLines w-full bg-[#52E6E8] rounded-xl px-[5vw] flex flex-col justify-center items-center gap-[2vw] my-2">
//                   {LifelineArray.map((items) => {
//                     return (
//                       <>
//                         <div className="instruct1 md:h-[100px] !h-[auto] w-full bg-yellow-20 flex justify-center items-center text-[#038870]">
//                 <div className="nums w-[10%] h-full bg-blue-10 flex justify-center items-center">
//                 <div className="my-auto text-7xl font-bold text-center max-md:text-4xl">
//                 <img src={items.img} alt=""  className=" h-[80px] w-[80px]"/>
//           </div>
//                 </div>
//                 <div className="flex flex-col grow shrink-0 mt-5 basis-0 w-fit max-md:max-w-full">
//                 <div className="description w-[80%] h-[90%] flex justify-center items-center md:px-[3vw] mx-2 font-red-hat-display text-sm md:text-xl">
//                     <p>{items.title}</p>
//                 </div>
//                 <div className="mt-2.5 flex justify-center items-center px-[3vw] font-red-hat-display ext-sm md:text-xl">
//             {items.content} 
//           </div>
//                 </div>

//             </div>
//                       </>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="confirmRadio h-[3%] w-full bg-green-30 flex justify-center items-center gap-[10px]">
//                 <input
//                   type="radio"
//                   name="confirm"
//                   id="confirm"
//                   onClick={() => setAcceptedConditions(true)}
//                 />
//                 <label htmlFor="confirm" className="text-white">
//                   I have read the instructions
//                 </label>
//               </div>
//               <div className="buttons h-[20%] w-full bg-orange-60 flex justify-center items-center gap-[50px]">
//                 <button
//                   className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
//                   onClick={handlePrev}
//                 >
//                   Previous
//                 </button>
//                 {acceptedConditions === true ? (
//                   <button
//                     className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
//                     onClick={handleProceedClick}
//                   >
//                     Proceed
//                   </button>
//                 ) : null}
//               </div>

//               {pop === true ? (
//                 <div className="cont absolute top-[0%] h-[100%] w-full bg-transparent flex justify-center items-center backdrop-blur-[10px]">
//                   <Popup
//                     cls={handlePopup}
//                     pop={text.filter((text) => text.id)}
//                     key={id}
//                   />
//                 </div>
//               ) : null}
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );
// };

// export default InstructionMain;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instruct from "./props/Instruct";
import LifeLine from "./props/LifeLine";
import Popup from "./props/Popup";
// import { useNavigate } from "react-router-dom";

const InstructionMain = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [acceptedConditions, setAcceptedConditions] = useState(false);
  const navigate = useNavigate();

  const [pop, setPop] = useState(false);

  const LifelineArray = [
    {
      id: 1,
      title: "Aqua Bonus",
      img: "/aqua.png",
      
      content: "Correct answers earn +8 marks, while incorrect answers result in -4 marks. This lifeline can't be activated after the first response out of two.",
    },
    {
      id: 2,
      title: "Time Stretch",      
      img: "/stopwatch.png",
      content: "Time slows down for a minute. Every 10 seconds, 1 second is reduced from the timer. This lifeline remains active for only a minute.",
    },
    {
      id: 3,
      title: "Oceanic Opinions",
      img: "/polling.png",
      content: "Reveals the responses of other participants for the same question. It can't be activated after the first response. ",
    },
  ];

  const handleProceedClick = () => {
    if (acceptedConditions) {
      console.log("Proceeding...");
      navigate("/mcq");
    } else {
      console.log("Please accept the conditions.");
    }
  };

  const [text, setText] = useState([]);
  const [status, setStatus] = useState([]);
  const id = 101;

  // const text = props.text;

  const handlePopup = () => {
    setPop((prevPop) => !prevPop); // Toggle the previous value of pop
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const InstructionArray = [
    {
      num: 1,
      desc: "The reverse coding round will last for 30 minutes. ",
    },
    {
      num: 2,
      desc: "The answers are strictly in the form of integers.",
    },
    {
      num: 3,
      desc: "You will get 2 chances for each question. Click Next to see Marking Scheme!",
    },
    {
      num: 4, 
      desc: "For Response 1, Correct answer: +4 Marks, Wrong Answer: -1 Mark",
    },
    {
      num: 5,
      desc: "For Response 2 Correct Answer: +3 Marks, Wrong answer -1 Mark",
    },
    {
      num: 6,
      desc: "Throughout this test, you'll be provided with three lifelines. You can use only a single lifeline for one question. Click Next to see Lifelines Info!",
    },
  ];

  let display = (text) => {
    const newDisplay = LifelineArray.filter((items) => items.id === text);
    console.log("NEW DISPLAY: ", newDisplay);
    setText(newDisplay);
  };

  return (
    <>

<style>
            {`
                 @media only screen and (max-width: 468px) {
                    .container{
                        width:100%;
                        height:635px;
                        overflow-x:hidden;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        // padding: 2vw 2vw;
                        gap:20px;
                    }

                    .content-container{
                        width:100%;
                        height:100%;
                        gap:40px;
                        overflow-y:scroll;

                    }
                    .lifeLines{
                      width:90%;
                      height:100%;
                    }
                    .title{
                        height:10%;
                        width:100%;
                    }
                    .instructions{
                        height:100%;
                        width:90%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        gap:15px;
                        overflow:scroll
                    }
                    .instru{
                        height:100%;
                        width:100%;
                        // background-color:red;
                        padding:0px 10px;
                        overflow-y:scroll;
                    }
                    .life{
                        height:100%;
                        width:100%;
                        background-color:;

                    }
                    .lifeLines{
                        height:70%;
                        width:100%;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        gap:15px;
                        background-color:transparent;

                    }

                    .buttons{
                        height:15%;
                        width:100%;
                    }
                    
                    
                } 
            `}
        </style>

      <div className="container h-[86.3vh] w-full bg-red-60 z-[999] flex justify-center items-center ">
        <div className="content-container w-[70%] h-[100%] bg-red-40 flex flex-col justify-center items-center ">
          {/* INSTRUCTIONS */}
          {currentStep === 0 ? (
            <>
              <div className="title h-[10%] w-full bg-green-90 flex justify-center items-center ">
                <h1 className="text-[40px] text-white">
                  INSTRUCTIONS
                </h1>
              </div>
              <div className="instructions h-[70%] w-full bg-[#52E6E8] rounded-xl overflow-y-scroll px-[5vw] flex flex-col justify-center items-center">
                {InstructionArray.slice(0,3).map((item) => {
                  return (
                    <>
                      <Instruct num={item.num} desc={item.desc} />
                    </>
                  );
                })}
              </div>
              <div className="buttons h-[10%] w-full bg-orange- flex justify-center items-center gap-[50px]">
                <button
                  className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </>
          ) : null}
          {currentStep === 1 ? (
            <>
              <div className="title h-[10%] w-full bg-green-90 flex justify-center items-center ">
                <h1 className="text-[40px] text-white">
                  INSTRUCTIONS
                </h1>
              </div>
              <div className="instructions h-[70%] w-full bg-[#52E6E8] rounded-xl px-[5vw] flex flex-col justify-center items-center gap-[2vw]">
                {InstructionArray.slice(3,6).map((item) => {
                  return (
                    <>
                      <Instruct key={item.num} num={item.num} desc={item.desc} />
                    </>
                  );
                })}
              </div>
              <div className="buttons h-[10%] w-full bg-orange- flex justify-center items-center gap-[50px]">
              <button
                  className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </>
          ) : null}
          {/* LIFELINES */}
          {currentStep == 2 ? (
            <div className="h-[100%] w-full bg-red-40 flex flex-col justify-center items-center relative ">
              <div className="title h-[10%] w-full bg-green-90 flex justify-center items-center ">
                <h1 className="text-[40px] text-white font-red-hat-display">
                  LIFELINES
                </h1>
              </div>
              <div className="content-container h-[72%] w-[100%] bg-blue-90 flex flex-col justify-center items-center">
                <div className="lifeLines h-[100%] w-full bg-[#52E6E8] rounded-[20px] py-[20px] px-[2vw] flex flex-col justify-around items-center  ">
                  {LifelineArray.map((items) => {
                    return (
                      <>
                        
                          <LifeLine key={items.id} dis={display} popup={handlePopup} id={items.id} img={items.img} title={items.title} cont={items.content} />
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="confirmRadio h-[3%] w-full bg-green-30 flex justify-center items-center gap-[10px]">
                <input
                  type="radio"
                  name="confirm"
                  id="confirm"
                  onClick={() => setAcceptedConditions(true)}
                />
                <label htmlFor="confirm" className="text-white">
                  I have read the instructions
                </label>
              </div>
              <div className="buttons h-[10%] w-full bg-orange-60 flex justify-center items-center gap-[50px]">
                <button
                  className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
                  onClick={handlePrev}
                >
                  Previous
                </button>
                {acceptedConditions === true ? (
                  <button
                    className="btnPrev text-white px-[20px] py-[10px] bg-teal-500 rounded-full hover:bg-emerald-500 "
                    onClick={handleProceedClick}
                  >
                    Proceed
                  </button>
                ) : null}
              </div>

              {pop === true ? (
                <div className="cont absolute top-[0%] h-[100%] w-full bg-transparent flex justify-center items-center backdrop-blur-[10px]">
                  <Popup
                    cls={handlePopup}
                    pop={text.filter((text) => text.id)}
                    key={id}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      
    </>
  );
};

export default InstructionMain;