import { useState } from "react";
import Popup from "./Popup";
import InstructionMain from "../InstructionMain";


const LifeLine = (props) => {
    const title = props.title;
    const image = props.img;
    const handlepops = props.popup;
    const ID = props.id;
    const display = props.dis;
    const[text,setText]=useState([]);

    let Display = (text) => { 
        const newDisplay = LifelineArray.filter(items => items.id === text);
        console.log(newDisplay);
        setText(newDisplay);
      }

    

    
    return ( 
        <>
            
            {/* <div className="cards h-[300px] w-[250px] bg-[#0b143e] rounded-[10px] backdrop-blur-[50px] border-[2px] border-solid border-blue-500 ">

                <div className="image h-[60%] w-full bg-[#09112c] bg-purple-40 flex justify-center items-center rounded-[10px]">
                    <img src={image} alt=""  className=" h-[120px] w-[120px]"/>
                </div>

                <div className="title text-white text-[30px] font-bold h-[18%] w-full bg-yellow-30 flex justify-center items-center">{title}</div>

                <div className="btn h-[22%] w-full flex justify-center items-center">
                    <button className="button text-white  px-[20px] py-[10px] bg-blue-500 rounded-full hover:bg-blue-800"
                    onClick={() => {
                        handlepops();
                        Display(ID);
                        display(ID);
                    }}
                    >Know more</button>
                </div>
       
                
                {/* <div className="hidden">
                    <Popup  idx={text}/>
                </div> */}

                <div className="instruct1 h-[100px] w-full bg-yellow-20 flex justify-center items-center text-[#038870]">
                <div className="nums w-[10%] h-full bg-blue-10 flex justify-center items-center">
                <div className="my-auto text-7xl font-bold text-center max-md:text-4xl">
                <img src={image} alt=""  className=" h-[80px] w-[80px]"/>
          </div>
                </div>
                <div className="flex flex-col grow shrink-0 mt-5 basis-0 w-fit max-md:max-w-full">
                <div className="description w-[80%] h-[90%] flex justify-center items-center px-[3vw] font-red-hat-display text-xl">
                    <p>{title}</p>
                </div>
                <div className="mt-2.5 flex justify-center items-center px-[3vw] font-red-hat-display">
            {content} 
          </div>
                </div>

            </div>
            
        </>
     );
}
 
export default LifeLine;