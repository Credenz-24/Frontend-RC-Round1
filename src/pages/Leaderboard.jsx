// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import TopCards from "./topcards";
// import gold from "../../src/images/gold.png";
// import silver from "../../src/images/silver.png";
// import bronze from "../../src/images/bronze.png";
// import { Switch } from "@mui/material";

// function Leaderboard() {
//   // Step 1: Initialize state
//   const [leaderboardData, setLeaderboardData] = useState([]);
//   const [myData, setMyData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage] = useState(3); // Change this value as needed
//   const img_src = [gold, silver, bronze];
//   const [token, setToken] = useState(false);

//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   useEffect(() => {
//     const getMyPostData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8000/api/result", {
//           headers: {
//             Authorization: localStorage.getItem("jwt"),
//           },
//         });
//         console.log("Response", res);
//         setMyData(res.data);
//       } catch (error) {
//         // setIsError(error.message);
//         console.log(error)
//       }
//     };

//     getMyPostData();
//   }, []);

//   useEffect(() => {
    
//     if(localStorage.getItem('jwt')){
//       setToken(true);
//     }
//     const fetchData = async () => {
//         try {
//             if (token) { // Check if token is present
//               console.log("is token in fetch data",token)
//                 const response = await axios.get(
//                     "http://localhost:8000/api/leaderboard",
//                     {
//                         headers: {
//                             Authorization: localStorage.getItem("jwt")
//                         }
//                     }
//                 );
//                 setLeaderboardData(response.data);
//             }

//             else{
//               console.log("no token")
//               const response = await axios.get(
//                 `http://localhost:8000/api/leaderboard?category=${checked?'SR':'JR'}`)
//               setLeaderboardData(response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching leaderboard data:", error);
//             // Handle error scenarios (e.g., showing an error message)
//         }
//     };

//     fetchData();
// }, [checked]); // Include token in the dependency array
//  // Empty dependency array means this effect runs once on mount

//   // Step 4: Pagination logic
//   const indexOfLastEntry = currentPage * entriesPerPage;
  
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = leaderboardData.slice(
//     indexOfFirstEntry,
//     indexOfLastEntry
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Step 5: Render the data
//   return (
//     <>
//       <div className="container bg-red-70 w-[100%] flex flex-col mt-10">
//         {/* Display top 3 juniors */}
//         <div className="top-3-juniors h-[45%] w-full flex justify-center items-center gap-[6vw]">
//           {leaderboardData
//             .filter((item, index) => index < 3)
//             .map((item, index) => ({ originalIndex: index, item }))
//             .sort((a, b) => {
//               const order = [1, 0, 2];
//               return (
//                 order.indexOf(a.originalIndex) - order.indexOf(b.originalIndex)
//               );
//             })
//             .map(({ item, originalIndex }) => (
//               <TopCards
//                 key={originalIndex}
//                 name={item.team_name}
//                 rank={originalIndex + 1}
//                 teamScore={item.score}
//                 img={img_src[originalIndex]}
//                 accuracy={
//                   Math.floor(
//                     (item.correct_count /
//                       (item.correct_count + item.incorrect_count)) *
//                       10000
//                   ) / 100
//                 }
//               />
//             ))}
//         </div>

//         {/* Display current rank */}
//         <div className="current-rank h-[10%] w-full flex justify-center items-center">
//           <div className="box mt-8 w-[700px] border-sky-400 border ml-4 mr-4 border-solid rounded-lg flex justify-between text-center py-[1vw] bg-opacity-60 bg-slate-900 shadow-blue-500 hover:bg-slate-950 hover:shadow-none divide-x">
//             <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>Your rank</p>
//             <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>{myData.rank}</p>
//             <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>Your score</p>
//             <p className="text-white flex justfy-center text-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>{myData.score}</p>
//           </div>
//         </div>

//         {/* Display leaderboard table */}
//         <div className="juniors-table h-[55%] w-full flex justify-center items-center mt-10 ">
//           <div className="w-[700px] mx-auto shadow-md rounded-lg bg-opacity-60 bg-slate-900 border border-sky-400">
//             <h2 className="text-2xl sticky top-0 font-bold text-white p-4 ml-5">
//               LeaderBoard
//             </h2>
            
            
//             <ul>
//               <li className="flex justify-between text-center items-center p-4">
//                 <span className="w-1/4 font-semibold text-center text-indigo-600">
//                   Rank
//                 </span>
//                 <span className="w-1/4 font-semibold text-center text-indigo-600">
//                   Team Name
//                 </span>
//                 <span className="w-1/4 font-semibold text-center text-indigo-600">
//                   Marks
//                 </span>
//                 <span className="w-1/4 font-semibold text-center text-indigo-600">
//                   Correct Questions
//                 </span>
//               </li>
//               {currentEntries.map((entry, index) => (
//                 <li
//                   key={index}
//                   className="flex text-center justify-between items-center p-4 hover:bg-slate-950 hover:shadow-md"
//                 >
//                   <span className="w-1/4 text-white">
//                   {console.log("current page",currentPage, "index",index)}
//                     {(currentPage - 1) * entriesPerPage + index + 1}
//                   </span>
//                   <span className="w-1/4 text-white">{entry.team_name}</span>
//                   <span className="w-1/4 text-white">{entry.score} pts</span>
//                   <span className="w-1/4 text-white">
//                     Q{entry.correct_count}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="ml-10 flex justify-center mt-4">
//           {Array.from(
//             { length: Math.ceil(leaderboardData.length / entriesPerPage) },
//             (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => paginate(i + 1)}
//                 className={`mx-1 px-3 py-1 rounded-lg ${
//                   i + 1 === currentPage
//                     ? "bg-slate-950 text-white hover:bg-slate-950 hover:shadow-md"
//                     : "bg-slate-900 text-white hover:bg-slate-950 hover:shadow-md"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             )
//           )}
//         </div>
//         {console.log("isToken", token)}
//         {!token && 
//             <Switch
//             onChange={handleChange}
//             checked={checked}
//             width={100}
//             height={40}
//             offColor="#08f"
//             onColor="#09f"
//             uncheckedIcon={
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         height: "100%",
//                         width: "100%",
//                         fontSize: 15,
//                         color: "#fff",
//                         paddingRight: 200, // Adjust padding as needed
//                     }}
//                 >
//                     Juniors
//                 </div>
//             }
//             checkedIcon={
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         height: "100%",
//                         width: "100%",
//                         fontSize: 15,
//                         color: "#fff",
//                         paddingLeft: 200, // Adjust padding as needed
//                     }}
//                 >
//                     Seniors
//                 </div>
//             }
//             className="align-center justify-center ml-auto mr-auto"
//         />
//         }
//         {/* <h1 className="text-white ml-auto mr-[500px] pb-40">Junior</h1> */}
//       </div>
//     </>
//   );
// }

// export default Leaderboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TopCards from "./topcards";
import gold from "../../src/images/gold.png";
import silver from "../../src/images/silver.png";
import bronze from "../../src/images/bronze.png";
import { Switch } from "@mui/material";

function Leaderboard() {
  // Step 1: Initialize state
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(3); // Change this value as needed
  const img_src = [gold, silver, bronze];
  const [token, setToken] = useState(false);
  // let token;

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const res = await axios.get("https://api.rc.credenz.in/api/result", {
          // const res = await axios.get("https://b56b-106-193-237-218.ngrok-free.app/api/result", {
          
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        });
        // console.log("Response", res);
        setMyData(res.data);
      } catch (error) {
        // setIsError(error.message);
        console.log(error);
      }
    };

    getMyPostData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setToken(true);
    }else{
      setToken(false);
    }
    const fetchData = async () => {
      try {
        if (token) {
          // Check if token is present
          console.log("is token in fetch data", token);
          const response = await axios.get(
            "https://api.rc.credenz.in/api/leaderboard",
            // https://rc24.netlify.app/leaderboard
            // "https://b56b-106-193-237-218.ngrok-free.app/api/leaderboard",
            {
              headers: {
                Authorization: localStorage.getItem("jwt"),
              },
            }
          );
          console.log(response)
          setLeaderboardData(response.data);
        } else {
          console.log("no token");
          const response = await axios.get(
            `https://api.rc.credenz.in/api/leaderboard?category=${
              // `https://b56b-106-193-237-218.ngrok-free.app/api/leaderboard?category=${
              checked ? "SR" : "JR"
            }`
          );
          // console.log(response)
          setLeaderboardData(response.data);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        // Handle error scenarios (e.g., showing an error message)
      }
    };

    fetchData();
  }, [checked]); // Include token in the dependency array
  // Empty dependency array means this effect runs once on mount

  // Step 4: Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;

  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = leaderboardData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Step 5: Render the data
  return (
    <>
      <div className="container bg-red-70 w-[100%] flex flex-col mt-10">
        {/* Display top 3 juniors */}
        <div className="top-3-juniors h-[45%] w-full flex justify-center items-center gap-[6vw]">
          {leaderboardData
            .filter((item, index) => index < 3)
            .map((item, index) => ({ originalIndex: index, item }))
            .sort((a, b) => {
              const order = [1, 0, 2];
              return (
                order.indexOf(a.originalIndex) - order.indexOf(b.originalIndex)
              );
            })
            .map(({ item, originalIndex }) => (
              <TopCards
                key={originalIndex}
                name={item.team_name}
                rank={originalIndex + 1}
                teamScore={item.score}
                img={img_src[originalIndex]}
                accuracy={
                  Math.floor(
                    (item.correct_count /
                      (item.correct_count + item.incorrect_count)) *
                      10000
                  ) / 100
                }
              />
            ))}
        </div>

        {/* Display current rank */}
        <div className="current-rank h-[10%] w-full flex justify-center items-center">
          <div className="box mt-8 w-[700px] border-sky-400 border ml-4 mr-4 border-solid rounded-lg flex justify-between text-center py-[1vw] bg-opacity-60 bg-slate-900 shadow-blue-500 hover:bg-slate-950 hover:shadow-none divide-x">
            <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>Your rank</p>
            <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>{myData.rank}</p>
            <p className="text-white flex justfy-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>Your score</p>
            <p className="text-white flex justfy-center text-center items-center text-[20px] w-1/4" style={{justifyContent:"center"}}>{myData.score}</p>
          </div>
        </div>

        {/* Display leaderboard table */}
        <div className="juniors-table h-[55%] w-full flex justify-center items-center mt-10 ">
          <div className="w-[700px] mx-auto shadow-md rounded-lg bg-opacity-60 bg-slate-900 border border-sky-400">
            <h2 className="text-2xl sticky top-0 font-bold text-white p-4 ml-5">
              LeaderBoard
            </h2>
            {!token ? 
            <div className="flex justify-between p-4">
              <h1 className="text-white">Junior</h1>
              <Switch
                onChange={handleChange}
                checked={checked}
                width={90}
                height={40}
                offColor="#08f"
                onColor="#09f"
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      fontSize: 15,
                      color: "#fff",
                      paddingRight: 20, // Adjust padding as needed
                    }}
                  >
                    Juniors
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      fontSize: 15,
                      color: "#fff",
                      paddingLeft: 20, // Adjust padding as needed
                    }}
                  >
                    Seniors
                  </div>
                }
                className="align-center justify-center ml-auto mr-auto"
              />
              <h1 className="text-white">Senior</h1>
            </div> : null
            }

            <ul>
              <li className="flex justify-between text-center items-center p-4 bg-blue-300">
                <span className="w-1/4 font-semibold text-center text-indigo-600">
                  Rank
                </span>
                <span className="w-1/4 font-semibold text-center text-indigo-600">
                  Team Name
                </span>
                <span className="w-1/4 font-semibold text-center text-indigo-600">
                  Marks
                </span>
                <span className="w-1/4 font-semibold text-center text-indigo-600">
                  Correct Questions
                </span>
              </li>
              {currentEntries.map((entry, index) => (
                <li
                  key={index}
                  className="flex text-center justify-between items-center p-4 hover:bg-slate-950 hover:shadow-md"
                >
                  <span className="w-1/4 text-white">
                    {console.log("current page", currentPage, "index", index)}
                    {(currentPage - 1) * entriesPerPage + index + 1}
                  </span>
                  <span className="w-1/4 text-white">{entry.team_name}</span>
                  <span className="w-1/4 text-white">{entry.score} pts</span>
                  <span className="w-1/4 text-white">
                    Q{entry.correct_count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pagination */}
        <div className="ml-10 flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(leaderboardData.length / entriesPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded-lg ${
                  i + 1 === currentPage
                    ? "bg-slate-950 text-white hover:bg-slate-950 hover:shadow-md"
                    : "bg-slate-900 text-white hover:bg-slate-950 hover:shadow-md"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
        {/* {console.log("isToken", token)} */}
        {/* <h1 className="text-white ml-auto mr-[500px] pb-40">Junior</h1> */}
      </div>
    </>
  );
}

export default Leaderboard;
