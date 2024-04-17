// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Leaderboard() {
//     // Step 1: Initialize state
//     const [leaderboardData, setLeaderboardData] = useState([]);
//     const [myData, setMyData] = useState([]);

//     useEffect(() => {
//         const getMyPostData = async () => {
//             try {
//                 const res = await axios.get("http://127.0.0.1:8000/api/result", {
//                     headers: {
//                         "Authorization": localStorage.getItem('jwt')
//                     }
//                 });
//                 console.log("Response", res);
//                 setMyData(res.data);
//             } catch (error) {
//                 setIsError(error.message);
//             }
//         };

//         getMyPostData();
//     }, []);

//     useEffect(() => {
//         // Step 2: Make the Axios request
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/leaderboard', {
//                     headers: {"Authorization": localStorage.getItem('jwt')}
//                 });
//                 // Step 3: Set the received data to state
//                 setLeaderboardData(response.data);
//             } catch (error) {
//                 console.error("Error fetching leaderboard data:", error);
//                 // Handle error scenarios (e.g., showing an error message)
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array means this effect runs once on mount

//     // Step 4: Render the data
//     return (
//       <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//       <h2 className="text-2xl font-bold text-center text-gray-800 bg-gray-100 p-4">Leaderboard</h2>
//       <h2>{myData.teamname} {myData.rank}</h2>
//       <ul className="divide-y divide-gray-300">
//           {leaderboardData.map((entry, index) => (
//               <li key={index} className="flex justify-between items-center p-4 hover:bg-gray-50">
//                   <span className="font-semibold text-indigo-600">{index + 1}</span>
//                   <span className="text-gray-800 font-medium">{entry.team_name}</span>
//                   <span className="text-gray-500">{entry.score} pts</span>
//                   <span className="text-sm text-gray-400">Q{entry.current_question - 1}</span>
//               </li>
//           ))}
//           </ul>
//       </div>
  
//     );
// }

// export default Leaderboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TopCards from "./topcards";
import gold from "../../src/images/gold.png";
import silver from "../../src/images/silver.png";
import bronze from "../../src/images/bronze.png";

function Leaderboard() {
  // Step 1: Initialize state
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(3); // Change this value as needed
  const img_src = [gold, silver, bronze];

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/result", {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        });
        console.log("Response", res);
        setMyData(res.data);
      } catch (error) {
        setIsError(error.message);
      }
    };

    getMyPostData();
  }, []);

  useEffect(() => {
    // Step 2: Make the Axios request
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/leaderboard",
          {
            // headers: { Authorization: localStorage.getItem("jwt") },
          }
        );
        // Step 3: Set the received data to state
        setLeaderboardData(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        // Handle error scenarios (e.g., showing an error message)
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

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
      <div className="container w-[100%] flex flex-col mt-10">
        {/* Display top 3 juniors */}
        <div className="top-3-juniors h-[45%] w-full flex justify-center items-center gap-[6vw] ml-10">
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
          <div className="box mt-8 w-[700px] border-sky-400 border border-solid rounded-lg flex justify-between text-center py-[1vw] bg-opacity-60 bg-slate-900 ml-8 shadow-blue-500 hover:bg-slate-950 hover:shadow-none divide-x">
            <p className="text-white text-[20px] w-1/4">Your rank</p>
            <p className="text-white text-[20px] w-1/4">{myData.rank}</p>
            <p className="text-white text-[20px] w-1/4">Your score</p>
            <p className="text-white text-[20px] w-1/4">{myData.score}</p>
          </div>
        </div>

        {/* Display leaderboard table */}
        <div className="juniors-table h-[55%] w-full flex justify-center items-center mt-10 ml-4">
          <div className="w-[700px] mx-auto shadow-md rounded-lg bg-opacity-60 bg-slate-900 border border-sky-400">
            <h2 className="text-2xl sticky top-0 font-bold text-white p-4 ml-5">
              LeaderBoard
            </h2>
            <ul>
              <li className="flex justify-between text-center items-center p-4">
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
      </div>
    </>
  );
}

export default Leaderboard;