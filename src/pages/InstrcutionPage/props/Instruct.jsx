const Instruct = (props) => {
    const number = props.num;
    const description = props.desc;

    return ( 
        <>
        <style>
            {`
                 @media only screen and (max-width: 468px) {
                    instruct1{
                        width:100%;
                        height: auto;
                        overflow-x:hidden;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        border:1px solid #3b82f6;
                        border-radius:10px;
                        background-color:red;

        
                    }
                    .nums{
                        width:20%;
                        height:100%;
                    }
                    .number{
                        border-radius:0px;
                        width:100%;
                        height:100%;
                        // background-color:red;
                    }
                    .description{
                        border-radius:0px;
                        width:80vw;
                        max-height:auto;
                        background-color:transparent;
                        padding: 5px 10px;
                        overflow-y: auto;
                        display:flex;
                        justify-content:end;
                        align-items:center;
                        padding-top:10px;
                        flex-wrap:wrap;
                    }
                    .desc{
                        font-size:16px;
                        font-weight:600;
                    }
                    .num{
                        font-size:30px;
                    }
            `}
        </style>
            <div className="instruct1 h-[100px] w-full bg-yellow-20 flex justify-bet items-center text-[#038870]">
            <div className="nums w-[10%] h-full bg-red-90 flex justify-center items-center">
                    <div className="number w-[80px] h-[80px] rounded-full flex justify-center items-center" >
                        <h1 className=" num text-[40px] ">0{number}</h1>
                    </div>
                </div>
                <div className="description w-[80%] h-[100%]  rounded-full no-scrollbar overflow-hidden overflow-y-scroll flex justify-start items-center px-[3vw] py-[15px]">
                    <p className=" desc flex justify-center items-center text-[20px] font-semibold">{description}</p>
                </div>
            </div>
        </>
     );
}
 
export default Instruct;