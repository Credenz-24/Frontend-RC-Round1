import React, { useState,useEffect } from "react";
// import Questionno from "./questionno";
// import Questionpanel from "./questionpanel";
import Time from "./Mcq/time";
import Lifeline from "./Mcq/lifeline";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { LineChart } from '@mui/x-charts/LineChart';

const  QuestionMcq = () => {

  const navigate = useNavigate();
  const [val,setVal] = useState();
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(2);
  const [question, setQuestion] = useState("");
  const [queno, setQueno] = useState(1);
  const [hrs, setHrs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [prevans, setPrevans] = useState(0);
  const [lifelineFlag, setLifeLineFlag] = useState(1);
  const [lifeline1,setLF1] = useState(false);
  const [lifeline2,setLF2] = useState(false);
  const [lifeline3,setLF3] = useState(false);


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get_question`, {
      headers: {"Authorization": localStorage.getItem('jwt')}
    })
    .then(res => {
      setLifeLineFlag(res.data['lifeline_flag'])
      setScore(res.data['score']);
      setAttempts(res.data['attempts']);
      setQuestion(res.data['question']);
      setQueno(res.data['Current_Question']);
      setHrs(res.data['hours']);
      setSec(res.data['seconds']);
      setMin(res.data['minutes']);
      setPrevans(res.data['prev_ans']);
      setLF1(res.data['lifeline1']);
      setLF2(res.data['lifeline2']);
      setLF3(res.data['lifeline3']);
    })
    .catch(error => {
      navigate('/')
    })
  }, []);

  const submitResponse = () => {
    // Check if the value is a valid number
    if (!isNaN(val)) {
      axios.post(
        'http://127.0.0.1:8000/api/get_question', 
        { answer: val },
        { 
          headers: {"Authorization": localStorage.getItem('jwt')}
        }
      )
      .then(response => {
        // console.log(typeof(response.data.Current_Question), response.data.Current_Question)
        if(response.data.Current_Question == null)
        {
          console.log("inside current question go to result")
          navigate('/result')
        }
        location.reload();
        console.log(response)
      
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error("Cannot Submit, Please try again!")
      });
    } else {
      // Display an error message or handle the invalid input accordingly
      toast("Invalid input: Please enter a valid number");
    }
  }
  
  return (
    <div className="flex-row grid grid-cols-[1fr_0.7fr_1fr_1fr] grid-rows-[0.2fr_0.3fr_0.4fr_1.3fr_0.5fr_0.3fr] gap-x-[20px] gap-y-[10px] w-[95vw] h-[85vh] mx-6">
          <div className="[grid-area:1_/_1_/_2_/_2] bg-[#0B121B] h-12 text-white border-2 border-[#00B0B0] text-center flex items-center justify-center rounded-lg gap-y-0">
      <p>Question {queno}</p>
        
      
    </div>
    <div className="[grid-area:2_/_1_/_5_/_4] bg-[#0B121B] text-white border-2 border-[#00B0B0] text-center rounded-lg mr-20 overflow-auto" style={{ height: "100%", alignSelf: "flex-start" }}>      
    <div className=" text-left text-xl pt-2 pl-4">
        <p>{question}</p>
        {/* <p>text</p> */}
      </div>
    </div>
    {
  attempts === 2 ? (
    <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-20 mt-1">
      <input
        type="number"
        id="response 1"
        className="appearance-none outline-none border-2 border-[#00B0B0] text-white bg-[#0B121B] text-sm rounded-lg block w-full p-2.5"
        placeholder="Response 1"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  ) : (
    <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-20 mt-1">
      {console.log(lifelineFlag)}
      <input
        type="number"
        id="response 1"
        className="appearance-none bg-[#0B121B] text-white border text-sm rounded-lg block w-full p-2.5"
        placeholder={lifelineFlag === 2 ? "Please enter in Reponse 2" : "Response 1"}
        disabled
        value={lifelineFlag != 2 ? prevans : null}
      />
    </div>
  )
}
      <div className="[grid-area:5_/_3_/_6_/_4] content-around text-center mr-20 mt-1">
        <input
          type="number"
          id="response 2"
          class="bg-[#0B121B] outline-none text-white border border-[#00B0B0] text-sm rounded-lg block w-full p-2.5"
          placeholder="Response 2"
          disabled = {attempts=== 2 ? true : false }
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>      
      {/* <div> */}
      <Time time = {[hrs,min,sec]} lifelineFlag={lifelineFlag}/>
      {/* </div> */}
      <div className=" bg-[#0B121B] grid grid-cols-[2fr_1fr_1fr_1fr] [grid-area:2_/_4_/_4_/_5] border-2 border-[#00B0B0] grid-rows-[1fr_1fr] gap-x-[2px] gap-y-[2px] rounded-lg p-0.5 divide-y-2 divide-solid">
        <div className="[grid-area:1_/_1_/_2_/_3] text-white text-center flex items-center justify-center">
          <p>Score</p>
        </div>
        <div className="[grid-area:1_/_3_/_2_/_5]" style={{ border: "none", color: "white", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>{[score]}</p>
      </div>

        <div className="[grid-area:2_/_1_/_3_/_3] text-white text-center flex items-center justify-center">
          <p>Marks</p>
        </div>
        {attempts=== 2 ?
        (<>
        <div className="[grid-area:2_/_3_/_3_/_4] text-white text-center flex items-center justify-center">
          <p>+4</p>
        </div>
        <div className="[grid-area:2_/_4_/_3_/_5] text-white text-center flex items-center justify-center">
          <p>-1</p>
        </div> 
        </>):
        (lifelineFlag==2 ? (<>
          <div className="[grid-area:2_/_3_/_3_/_4] text-white text-center flex items-center justify-center">
          <p>+8</p>
        </div>
        <div className="[grid-area:2_/_4_/_3_/_5] text-white text-center flex items-center justify-center">
          <p>-4</p>
        </div> 
        </>) :
        (<>
          <div className="[grid-area:2_/_3_/_3_/_4] text-white text-center flex items-center justify-center">
          <p>+3</p>
        </div>
        <div className="[grid-area:2_/_4_/_3_/_5] text-white text-center flex items-center justify-center">
          <p>-1</p>
        </div> 
        </>)
        )

       }
      </div>
      <div className="[grid-area:6_/_1_/_7_/_4] w-0 mb-10 ml-96 content-around text-center">
        <button
          type="submit"
          className="bg-[#00B0B0]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={submitResponse}
        >
          Submit
        </button>
      </div>
      {/* <div className="top-0 mt-20"> */}
          <div className=" [grid-area:4_/_4_/_7_/_5] ">
          <Lifeline lifeline1={lifeline1} lifeline2={lifeline2} lifeline3={lifeline3} lifelineFlag={lifelineFlag}/>
    </div>      
    {/* </div> */}
      
      


    </div>
  );
};

export default QuestionMcq;

// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// export default function BasicArea() {
//   return (
//     <LineChart
//       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//           area: true,
//         },
//       ]}
//       width={500}
//       height={300}
//     />
//   );
// }







// import React, { useState,useEffect } from "react";
// // import Questionno from "./questionno";
// // import Questionpanel from "./questionpanel";
// import Time from "./Mcq/time";
// import Lifeline from "./Mcq/lifeline";
// import axios from 'axios';
// import { LineChart } from '@mui/x-charts/LineChart';

// const  QuestionMcq = () => {
//   const [val,setVal] = useState();
//   const [score, setScore] = useState(0);
//   const [attempts, setAttempts] = useState(2);
//   const [question, setQuestion] = useState("");
//   const [queno, setQueno] = useState(1);
//   const [hrs, setHrs] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [min, setMin] = useState(0);
//   const [prevans, setPrevans] = useState(0);
//   const [lifelineFlag, setLifeLineFlag] = useState(1);
//   const [lifeline1,setLF1] = useState(false);
//   const [lifeline2,setLF2] = useState(false);
//   const [lifeline3,setLF3] = useState(false);


//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/get_question`, {
//       headers: {"Authorization": localStorage.getItem('jwt')}
//     })
//     .then(res => {
//       setLifeLineFlag(res.data['lifeline_flag'])
//       setScore(res.data['score']);
//       setAttempts(res.data['attempts']);
//       setQuestion(res.data['question']);
//       setQueno(res.data['Current_Question']);
//       setHrs(res.data['hours']);
//       setSec(res.data['seconds']);
//       setMin(res.data['minutes']);
//       setPrevans(res.data['prev_ans']);
//       setLF1(res.data['lifeline1']);
//       setLF2(res.data['lifeline2']);
//       setLF3(res.data['lifeline3']);
//     });
//   }, []);

//   const submitResponse = () => {
//     // Check if the value is a valid number
//     if (!isNaN(val)) {
//       axios.post(
//         'http://127.0.0.1:8000/api/get_question', 
//         { answer: val },
//         { 
//           headers: {"Authorization": localStorage.getItem('jwt')}
//         }
//       )
//       .then(response => {
//         location.reload();
//         console.log(response)
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     } else {
//       // Display an error message or handle the invalid input accordingly
//       alert("Invalid input: Please enter a valid number");
//     }
//   }
  
//   return (
//     <div className="flex-row grid grid-cols-[1fr_0.7fr_1.2fr_1fr] grid-rows-[0.3fr_0.3fr_1fr_1fr_0.5fr_0.3fr] gap-x-[20px] gap-y-[10px] w-[95vw] h-[84.3vh] mt-3 mx-6">
      
//       <div className="[grid-area:1_/_1_/_2_/_2] text-white border-2 border-[#00B0B0] text-center flex items-center justify-center rounded-lg gap-y-0">
//         <p>Question {queno}</p>
//       </div>
//       <div className="[grid-area:2_/_1_/_5_/_4] text-white border-2 border-[#00B0B0] text-center rounded-lg mr-20">
//       <div className=" text-left text-xl pt-2 pl-4">
//         <p>{question}</p>
//       </div>
//     </div>
//       {attempts=== 2 ?
//       <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-10 mt-1">
//         <input type="number" id="response 1" class="appearance-none outline-none border-2 border-[#00B0B0] text-white bg-[#0B121B] text-sm rounded-lg block w-full p-2.5"
//           placeholder="Response 1"
//           onChange={(e) => {
//             setVal(e.target.value);
//           }}/>
//       </div>:
//       <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-10 mt-1">
//       <input type="number" id="response 1" class="appearance-none bg-[#0B121B] text-white border text-sm rounded-lg block w-full p-2.5"
//         placeholder="Response 1"
//         disabled
//         value={prevans}
//         />
//       </div>

//       }
//       <div className="[grid-area:5_/_3_/_6_/_4] content-around text-center mr-20 mt-1">
//         <input
//           type="number"
//           id="response 2"
//           class="bg-[#0B121B] outline-none text-white border border-[#00B0B0] text-sm rounded-lg block w-full p-2.5"
//           placeholder="Response 2"
//           disabled = {attempts=== 2 ? true : false }
//           onChange={(e) => {
//             setVal(e.target.value);
//           }}
//         />
//       </div>      
//       <Time time = {[hrs,min,sec]} lifelineFlag={lifelineFlag}/>
//       <div className="ml-36 grid grid-cols-[2fr_1fr_1fr_1fr] border-2 border-[#00B0B0] grid-rows-[1fr_1fr] gap-x-[2px] gap-y-[2px] rounded-lg p-0.5 divide-y-2 divide-solid">
//         <div className="[grid-area:1_/_1_/_2_/_3] text-white text-center flex items-center justify-center">
//           <p>Score</p>
//         </div>
//         <div className="[grid-area:1_/_3_/_2_/_5]" style={{ border: "none", color: "white", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <p>{[score]}</p>
//       </div>

//         <div className="[grid-area:2_/_1_/_3_/_3] text-white text-center flex items-center justify-center">
//           <p>Marks</p>
//         </div>
//         {attempts=== 2 ?
//         (<>
//         <div className="[grid-area:2_/_3_/_3_/_4] text-white text-center flex items-center justify-center">
//           <p>+4</p>
//         </div>
//         <div className="[grid-area:2_/_4_/_3_/_5] text-white text-center flex items-center justify-center">
//           <p>-2</p>
//         </div> 
//         </>):
//        (<>
//        <div className="[grid-area:2_/_3_/_3_/_4] text-white text-center flex items-center justify-center">
//        <p>+2</p>
//      </div>
//      <div className="[grid-area:2_/_4_/_3_/_5] text-white text-center flex items-center justify-center">
//        <p>-1</p>
//      </div> 
//      </>)}
//       </div>
//       <div className="[grid-area:6_/_1_/_7_/_4] content-around text-center">
//         <button
//           type="submit"
//           class="bg-blue-500 mb-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           onClick={submitResponse}
//         >
//           Submit
//         </button>
//       </div>
//       <div className=" top-0 mt-20">
//       <Lifeline lifeline1={lifeline1} lifeline2={lifeline2} lifeline3={lifeline3} /> {/* Render Lifeline component first */}
//       </div>
      
      


//     </div>
//   );
// };

// export default QuestionMcq;