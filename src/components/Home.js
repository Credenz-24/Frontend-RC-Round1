import React, { useState } from 'react';


import pho1 from './assests/download.jpeg';
import pho2 from './assests/download.jpeg';
import Circles from '../shapes/Circles';
const Home = () => {

    const [per,setPer]= useState([
        {
            "id":1,
            "percentage" : 65,
        },
        {
            "id":2,
            "percentage" : 20,

        },
        {
            "id":3,
            "percentage" : 30,

        }
    ])

    
    return( 
        <>
        
        <div className='main h-[86vh] w-full flex flex-col justify-center items-center '>
        <div className='container flex flex-wrap items-center justify-center h-[100%] bg-black w-full gap-16'>
        <div className='leftbox w-72 h-[70vh] rounded-3xl flex flex-col justify-between items-center  z-[100] backdrop-blur-[20px] border-2 border-white px-[10px] py-[20px]'>
                <div className='left-top flex flex-col justify-center items-center space-[15px]  w-full'>
                    <div className='profile bg-slate-400 h-[18vh] w-[18vh] rounded-full'></div>
                    <h1 className='names text-[26px] text-white font-semibold'>Username</h1>
                    <h1 className='teamName text-white text-[20px] '>Teamname</h1>
                </div>
                <div className='left-mid h-[450px] w-full flex flex-col justify-center items-center text-[20px] '>
                    <div className='quesAttempted text-white flex flex-col items-center justify-center '>
                        <h3 className='heading1 text-[21px]'>Attempted Questions:</h3>
                        <h1 className='number font-bold text-[23px]'>33</h1>
                       </div>
                       <div className='Lifelines text-white flex flex-col items-center justify-center'>
                        <h3 className='heading2 text-[21px]'>Lifelines used: </h3>
                        <h1 className='number font-bold text-[23px]'>4</h1>
                       </div>
                   
                </div>

                <div className='left-bottom flex flex-col justify-center items-center gap-[20px]  w-full'>
                    
                    {/* <h1 className='feedback  text-white text-[18px] '>Please share your feedback!</h1> */}
                    <button className='bg-blue-800 text-[20px] hover:bg-blue-500 text-white py-2 px-4 rounded-full'>Feedback</button>
                
                </div>
            
            </div>
            <div className='rightbox flex w-[100vh] h-[70vh] rounded-[30px] backdrop-blur-[20px] border-2 border-white  justify-center items-start z-[100]'>
                <div className='jellyfish z-5 h-[40vh] w-[100%] rounded-[30px]  bg-transparent flex justify-around items-center absolute'>
                    <div className='photol flex flex-col justify-center items-center gap-[-5px]'>
                        <h1 className='text-white text-[25px] font-semibold'>Score</h1>
                        <h1 className='text-white text-[55px] font-semibold absolute top-[80px]'>99</h1>
                        <img src={pho1} className='h-[30vh] w-[30vh]' ></img>
                        {/* <div className='px-[20px] py-[5px] text-[20px] bg-slate-400 rounded-lg'>Score</div> */}
                    </div>
                    <div className='photol flex flex-col justify-center items-center gap-[-5px]'>
                    <h1 className='text-white text-[25px] font-semibold '>Rank</h1>
                    <h1 className='text-white text-[55px] font-semibold absolute top-[80px]'>#1</h1>
                        <img src={pho2} className='h-[30vh] w-[30vh] ' ></img>
                        {/* <div className='px-[20px] py-[5px] text-[20px] bg-slate-400 rounded-lg'>Rank</div> */}
                    </div>
                </div>
                <div className='circlesmain my-72 h-[25vh] w-[80vh] flex flex-col justify-around items-center gap-3'>
                    
                   <div className='circle flex flex-row justify-around item-center  gap-10'>
                    {per.map((percent) => {
                        return(
                            <Circles num={percent.percentage}/>
                        );
                    })}
                    </div>
                <div className='written text-white flex flex-row  justify-around item-center gap-24  font-semibold text-[18px]'>
                    <h3>Time taken</h3>
                    <h3>Correct questions</h3>
                    <h3>Accuracy</h3>
                    </div>   
                 
                </div>
               
            </div>
        </div>

        </div>
        
        </>
    )
}

export default Home;