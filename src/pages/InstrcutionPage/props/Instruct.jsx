

const Instruct = (props) => {
    const number = props.num;
    const description = props.desc;

    return ( 
        <>
            <div className="instruct1 h-[100px] w-full bg-yellow-20 flex justify-center items-center text-[#038870]">
                <div className="nums w-[10%] h-full bg-blue-10 flex justify-center items-center">
                <div className="my-auto text-7xl font-bold text-center max-md:text-4xl">
            0{number}
          </div>
                </div>
                <div className="description w-[80%] h-[90%] flex justify-center items-center px-[3vw] font-red-hat-display text-xl">
                    <p>{description}</p>
                </div>
            </div>
        </>
     );
}
 
export default Instruct;