import React, { useState, useEffect } from 'react';
import axios from "axios";
// Assuming pho1 and pho2 are not used since they're not referenced in the component rendering
// import pho1 from './assets/download.jpeg';
// import pho2 from './assets/download.jpeg';
// Assuming Circles is not used since it's not referenced in the component rendering
// import Circles from '../component/shapes/Circles';

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

    if (isError) {
        return <p className="text-red-500 text-center mt-5">{isError}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Submissions Summary</h1>
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-indigo-500/50 rounded-lg p-8">
        <p className="text-lg text-white mb-4">
            <span className="font-semibold">Team name:</span> <span className="font-light">{per.teamname}</span>
        </p>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
            <p className="text-md text-white">Rank: <span className="font-normal">{per.rank}</span></p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <p className="text-md text-white">Score: <span className="font-normal">{per.score}</span></p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
            <p className="text-md text-white">Correct Submissions: <span className="font-normal">{per.correct_submission}</span></p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
            <p className="text-md text-white">Incorrect Submissions: <span className="font-normal">{per.incorrect_submission}</span></p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
            <p className="text-md text-white">Questions Attempted: <span className="font-normal">{per.question_attempted}</span></p>
        </div>
        
    </div>
</div>
    );
};

export default Home;
