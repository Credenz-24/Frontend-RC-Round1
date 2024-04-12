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


    
    return( 
        <>
            <h1>Team name: {per.teamname}</h1>
            <h1>Score: {per.score}</h1>
            <h1>Correct Submission: {per.correct_submission}</h1>
            <h1>Incorrect Submission: {per.incorrect_submission}</h1>
            <h1>Lifelines used: {per.lifelines_used}</h1>
            <h1>Rank: {per.rank}</h1>
            <h1>Qs attempted: {per.question_attempted}</h1>

        </>


    );        
}
export default Home;
