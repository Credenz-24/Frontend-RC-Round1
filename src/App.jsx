
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Instruction from './pages/Instruction';
import QuestionMcq from './pages/QuestionMcq';
import Leaderboard from './pages/Leaderboard';
// import Result from './pages/Result';
import OurTeam from './pages/OurTeam';
// import Home from './pages/ResultPg/component/Result';
import Nav from './components/Navbar';
import Result from './pages/ResultPg/component/Result';



const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<Login />} />
      <Route path="instruction" element={<Instruction/>} />
      <Route path="question" element={<QuestionMcq/>} />
      <Route path="leaderboard" element={<Leaderboard/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="Ourteam" element={<OurTeam/>} />

      
      </>
     
  
  )
)

function App({routes}) {

  return (
    <>
      <Nav/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

