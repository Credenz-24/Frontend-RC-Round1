import { useState } from "react";
import Popup from "./Popup";
import InstructionMain from "../InstructionMain";


const LifeLine = (props) => {
    const title = props.title;
    const image = props.img;
    const content = props.cont;
    const handlepops = props.popup;
    const ID = props.id;
    const display = props.dis;
    const[text,setText]=useState([]);

    let Display = (text) => { 
        const newDisplay = LifelineArray.filter(items => items.id === text);
        console.log(newDisplay);
        setText(newDisplay);
      }


      const LifelineArray = [
        {
          id: 1,
          title: "Aqua Bonus",
          img: "../aqua point 1.jpeg",
          
          content: "Correct answers earn +8 marks, while incorrect answers result in -4 marks. This lifeline can't be activated after the first response out of two.",
        },
        {
          id: 2,
          title: "Time Stretch",
          
          img: "../time-freeze.png",
          content: "Time slows down for a minute. Every 10 seconds, 1 second is reduced from the timer. This lifeline remains active for only a minute.",
        },
        {
          id: 3,
          title: "Oceanic Opinions",
          img: "../poll 1.svg",
          content: "Reveals the responses of other participants for the same question. It can't be activated after the first response. ",
        },
      ];

    

    
      return ( 
        <>

<style>
            {`
                 @media only screen and (max-width: 468px) {
                    
                    .instruct1{
                        display:none;
                    }
                    .cards2{
                        width:100%;
                        height:80px;
                        overflow-x:hidden;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        // padding: 2vw 2vw;
                        // gap:10px;
                    }
                    .image{
                        height:100%;
                        width:25%;
                    }
                    .icons{
                        height:60px;
                        width:60px;
                    }
                    .titlemain{
                        height:100%;
                        width:75%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .btn{
                        height:100%;
                        width:20%;
                    }
                    .button{
                        height:100%;
                        border-radius:0px;
                    }
   
                } 
                @media only screen and (min-width: 500px) {
                    .cards2{
                        display:none;
                    }
                }

            `}
        </style>
        {/* bg-[#52E6E8] */}
            
        <div className="instruct1 h-[100px] w-full bg-yellow-20 flex justify-center items-center gap-[0px] text-[#038870]">
            <div className="nums w-[10%] h-full bg-blue-70 flex justify-center items-center">
                <img src={image} alt=""  className=" h-[80px] w-[80px]"/>
            
            </div>
            <div className=" desc h-full w-[90%] bg-purple-20 flex flex-col px-[2vw] ">
                <div className="description w-[100%] h-[40%] bg-red-90 flex justify-start items-end">
                    <h1 className="text-[27px]">{title}</h1>
                </div>
                <div className=" w-[100%] h-[60%] flex justify-center items-start px-[vw] ">
                    {content} 
                </div>
            </div>

        </div>

        <div className="cards2 h-[300px] w-[250px] rounded-[10px] backdrop-blur-[50px] border-[2px] border-solid border-[#52E6E8] "onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}>

                <div className="image h-[60%] w-full bg-[#52E6E8] bg bg-purple-40 flex justify-center items-center rounded-[5px]">
                    <img src={image} alt=""  className="icons h-[120px] w-[120px]"/>
                </div>

                <div className="titlemain text-white text-[25px] font-bold h-[18%] w-full bg-yellow-30 flex justify-center items-center">{title}</div>

                {/* <div className="btn h-[22%] w-full flex justify-center items-center">
                    <button className="button text-white  px-[20px] py-[10px] bg-blue-500 rounded-full hover:bg-blue-800"
                    onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}
                    >Know more</button>
                </div> */}
  
            </div>
            
        </>
     );
}
 
export default LifeLine;