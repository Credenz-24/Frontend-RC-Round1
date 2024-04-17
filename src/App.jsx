
import React from 'react';
import { Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
// import Instruction from './pages/Instruction/Instruction';
import QuestionMcq from './pages/QuestionMcq';
import Leaderboard from './pages/Leaderboard';
import Result from './pages/ResultPg/component/Result';
import OurTeam from './pages/OurTeam';
import Navbar from './components/Navbar';
import InstructionMain from './pages/InstrcutionPage/InstructionMain';
import TabSwitchDetector from './pages/TabSwitchDetector';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="instruction" element={<InstructionMain/>} />
//       <Route path="mcq" element={<QuestionMcq/>} />
//       <Route path="leaderboard" element={<Leaderboard/>} />
//       <Route path="result" element={<Result/>} />
//       <Route path="Ourteam" element={<OurTeam/>} />
//     </Routes>
//       </>
     
  
//   )
// )

// function App({routes}) {
//   let path = router;
//   const login = () => path==="/";

//   return (
//     // <UserContextProvider>
//     <>
//       <div className='main '>
//       {/* <Navbar></Navbar>
//       <RouterProvider router={router}/> */}
//       {router==<Login/> ? (
//           <>
//             <RouterProvider router={router}/>
//           </>
//       ):(
//         <>
//         <Navbar></Navbar>
//         <RouterProvider router={router}/>
//         </>
//       )}
//       </div>
//     </>
//     // </UserContextProvider>
//   );
// }

function App() {
  // let path = router;
  // const {currentUser}  = useContext(UserContext);
  // console.log("roter" , path);
  // const login = () => path==="/";

  return (
    
    <>
        
      <div className='main'>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="instruction" element={<InstructionMain />} />
      <Route path="leaderboard" element={<Leaderboard/>} />
      {/* <Route element={<PrivateRoute />} > */}
        <Route path="mcq" element={<QuestionMcq/>} />
        <Route path="result" element={<Result/>} />
        {/* <Route path="Ourteam" element={<OurTeam/>} /> */}
      {/* </Route> */}
      {/* <Route path="question" element={<QuestionMcq/>} />
      <Route path="result" element={<Result/>} />
      <Route path="Ourteam" element={<OurTeam/>} /> */}

      
      </Routes>
      <TabSwitchDetector />
      </div>

      
    </>
  );
}

export default App;

