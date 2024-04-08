
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Instruction from './pages/Instruction/Instruction';
import QuestionMcq from './pages/QuestionMcq';
import Leaderboard from './pages/Leaderboard';
import Result from './pages/ResultPg/component/Result';
import OurTeam from './pages/OurTeam';
import Navbar from './components/Navbar';


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
    <>
      <Navbar />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

