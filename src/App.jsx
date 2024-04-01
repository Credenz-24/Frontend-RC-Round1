import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import  Login  from './pages/Login';
import Instruction from './pages/Instruction';
import QuestionMcq from './pages/QuestionMcq';
import Leaderboard from './pages/Leaderboard';
import Result from './pages/Result';
import OurTeam from './pages/OurTeam';
import NavBar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<Login />} />
      <Route path="instruction" element={<Instruction/>} />
      <Route path="question" element={<QuestionMcq/>} />
      <Route path="leaderboard" element={<Leaderboard/>} />
      <Route path="result" element={<Result/>} />
      <Route path="Ourteam" element={<OurTeam/>} />
      </>     
  
  )
)

function App({routes}) {

  return (
    <div className='min-w-[100vw] min-h-[100vh]'>
      <NavBar />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;



