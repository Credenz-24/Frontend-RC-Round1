import React, { useState, useEffect } from 'react';
import axios from "axios";
// Assuming pho1 and pho2 are not used since they're not referenced in the component rendering
// import pho1 from './assets/download.jpeg';
// import pho2 from './assets/download.jpeg';
// Assuming Circles is not used since it's not referenced in the component rendering
import Circles from '../component/shapes/Circles';

const Home = () => {
    const [per, setPer] = useState({});
    const [isError, setIsError] = useState('');

    useEffect(() => {
        const getMyPostData = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/result", {
                    headers: {
                        "Authorization": localStorage.getItem('jwt')
                    }
                });
                console.log("Response", res);
                setPer(res.data);
            } catch (error) {
                setIsError(error.message);
            }
        };

        getMyPostData();
    }, []);

    // useEffect(() => {
    //     console.log(per);
    // }, [per]);

    // if (isError) {
    //     return <p className="text-red-500 text-center mt-5">{isError}</p>;
    // }


    
    return( 
        <>
            {/* <h1>Team name: {per.teamname}</h1>
            <h1>Score: {per.score}</h1>
            <h1>Correct Submission: {per.correct_submission}</h1>
            <h1>Incorrect Submission: {per.incorrect_submission}</h1>
            <h1>Lifelines used: {per.lifelines_used}</h1>
            <h1>Rank: {per.rank}</h1>
            <h1>Qs attempted: {per.question_attempted}</h1> */}
            
      <div className="main h-[86vh] w-full flex flex-col justify-center items-center ">
        <div className="container flex flex-wrap items-center justify-center h-[100%] w-full gap-16">
          <div className="leftbox w-72 h-[80vh] rounded-3xl flex flex-col justify-between items-center  z-[100] backdrop-blur-[20px] border-2 border-[#0addd7] px-[10px] py-[20px]">
            <div className="left-top flex flex-col justify-center items-center space-[25px] gap-2     w-full">
              <div className="profile bg-[#038c88] h-[18vh] w-[18vh] rounded-full"></div>
              <h1 className="names text-[26px] text-white font-semibold">
                {per.username}
              </h1>
              <h1 className="teamName text-white text-[20px] ">
                {per.team_name}
              </h1>
            </div>
            <div className="left-mid h-[450px] w-full flex flex-col justify-center items-center text-[20px] ">
              <div className="Lifelines text-white flex flex-col items-center justify-center">
                <h3 className="heading2 text-[21px]">Lifelines used: </h3>
                <h1 className="number font-bold text-[23px]"> {per.lifelines_used}</h1>
              </div>
            </div>

            <div className="left-bottom flex flex-col justify-center items-center gap-[20px]  w-full">
              <button className="bg-[#038c88] text-[20px] hover:bg-[#007976] text-white py-2 px-4 rounded-full">
                Feedback
              </button>
            </div>
          </div>
          <div className="rightbox  flex flex-col w-[110vh] h-[80vh] rounded-[30px] backdrop-blur-[20px] border-2 border-[#0addd7] justify-center items-start z-[100]">
            <div className="jellyfish  z-5 h-[60%] w-[100%] rounded-[30px]  bg-transparent flex justify-around items-center ">
              <div className="photol flex flex-col h-[30vh] w-[35vh]  bg-[#038c88] rounded-[30px] justify-end p-4 items-center gap-[5px] z-[-1]">
                <img
                  src="../score.png"
                  alt=""
                  className="h-[100px] w-[100px]"
                />

                <div className="in flex flex-col h-[10vh] w-[30vh] rounded-[15px] bg-[#013542]  justify-center items-center">
                  <h1 className="text-white text-[28px] font-semibold ">{per.score}</h1>
                  <h1 className="text-white opacity-[90%] text-[15px] font-semibold ">
                    Score
                  </h1>
                </div>
              </div>
              <div className="out flex flex-col  h-[30vh] w-[35vh] rounded-[30px] bg-[#038c88] justify-end p-4 items-center gap-[10px] z-[-1]">
                <img src="../rank.png" alt="" className="h-[80px] w-[95px]" />

                <div className="in flex flex-col h-[10vh] w-[30vh] rounded-[15px] bg-[#013542] justify-center items-center">
                  {/* <h1 className="text-white text-[25px] font-semibold ">{per.team_score}</h1> */}
                  <h1 className="text-white text-[28px] font-semibold ">{per.rank}</h1>
                  <h1 className="text-white opacity-[90%] text-[15px] font-semibold ">
                    Rank
                  </h1>
                </div>

              </div>
            </div>
            <div className="circlesmain  h-[40%] w-[100%] flex justify-around items-start gap-3">
              <div className="flex flex-col h-full w-[40%] justify-center items-center gap-2 ">
                <div className="circle flex flex-row justify-around item-center  gap-10">
                  {/* <Circles num={per.user_accuracy} /> */}
                  <Circles num={(50).toFixed(2)}/>   
                </div>

                <div className="written text-white flex flex-row  justify-around item-center gap-24 mx-9 font-semibold text-[18px]">
                  <h3>Accuracy</h3>
                </div>
              </div>

              <div className=" w-[50vh] h-[25vh] flex flex-col items-center justify-center gap-6 text-lg text-white">
                <div className="w-[50vh] h-[20vh] justify-start items-center flex flex-row  gap-7">
                  <h3>Total Submissions</h3>
                  <div className=" rounded-lg h-[50px] w-[95px] bg-[#038c88] font-semibold text-[18px]">{per.question_attempted}</div>
                </div>
                <div className="w-[50vh] h-[20vh] flex flex-row justify-start items-center gap-7">
                  <h3>Correct Questions</h3>
                  <div className="bg-[#038c88] rounded-lg h-[50px] w-[95px] font-semibold text-[18px]">{per.correct_submission}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>


    );        
}
export default Home;
