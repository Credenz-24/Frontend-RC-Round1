import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leaderboard() {
    // Step 1: Initialize state
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const getMyPostData = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/result", {
                    headers: {
                        "Authorization": localStorage.getItem('jwt')
                    }
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
                const response = await axios.get('http://localhost:8000/api/leaderboard', {
                    headers: {"Authorization": localStorage.getItem('jwt')}
                });
                // Step 3: Set the received data to state
                setLeaderboardData(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                // Handle error scenarios (e.g., showing an error message)
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    // Step 4: Render the data
    return (
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-gray-800 bg-gray-100 p-4">Leaderboard</h2>
      <h2>{myData.teamname} {myData.rank}</h2>
      <ul className="divide-y divide-gray-300">
          {leaderboardData.map((entry, index) => (
              <li key={index} className="flex justify-between items-center p-4 hover:bg-gray-50">
                  <span className="font-semibold text-indigo-600">{index + 1}</span>
                  <span className="text-gray-800 font-medium">{entry.team_name}</span>
                  <span className="text-gray-500">{entry.score} pts</span>
                  <span className="text-sm text-gray-400">Q{entry.current_question - 1}</span>
              </li>
          ))}
          </ul>
      </div>
  
    );
}

export default Leaderboard;