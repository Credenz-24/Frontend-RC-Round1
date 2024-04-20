import LifeLine from "./LifeLine";
import InstructionMain from "../InstructionMain";
import { useState } from "react";

const Popup = (props) => {
    const close = props.cls;
    const title = props.title;
    const image = props.img;
    const desc = props.desc;
    const handlepops = props.popup;
    const Text = props.pop;
    const ID = props.idx;

    console.log(Text);

    

    return ( 
        <>
        <style>
            {`
                 @media only screen and (max-width: 468px) {
                    .popup{
                        top:10%;
                        height:500px;
                    }
                    .pic{
                        height:50%;
                        width:100%;
                        border-bottom:0px;
                    }
                    .icons{
                        height:160px;
                        width:160px;
                    }
                    .title1{
                        height:10%;
                        width:100%;
                        // background-color:red;
                        display:flex;
                        justify-content:center;
                        align-items:end;

                    }
                    .desc1{
                        height:25%;
                        widht:100%;
                        padding: 0 20px;
                    }
                    .closeBtn1{
                        height:15%;
                        width:100%;
                    }
   
                } 
                @media only screen and (min-width: 500px) {
                    .popup{
                        display:none;
                    }
                }

            `}
        </style>
            {Text.map((text) => (
                <div className="popup absolute top-[10%] h-[400px] w-[350px] bg-[#082634] border-[#52E6E8] border-[2px] rounded-[10px] flex flex-col justify-center items-center backdrop-blur-[10px]">
                    <div className="pic h-[40%] w-full bg-[#52E6E8] rounded-[5px] flex justify-center items-center">
                        <img src={text.img} alt="" className=" icons h-[150px] w-[150px]" />
                    </div>
                    <div className="title1 h-[5%] w-full bg-transparent flex justify-center items-center">
                        <h1 className="text-white text-[30px]">{text.title}</h1>
                    </div>
                    <div className="desc1 h-[25%] w-full bg-blue-40 flex justify-center items-center px-[20px]">
                        <h4 className="text-white text-justify">{text.content}</h4>
                    </div>
                    <div className="closeBtn1 h-[20%] w-full flex justify-center items-center">
                        <button className="closeBtn text-white  px-[20px] py-[10px] bg-[#33d4d6] rounded-full hover:bg-blue-800" onClick={close}>Close</button>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default Popup;