import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import axios from "axios";
import { LineChart } from '@mui/x-charts/LineChart';
import aquapointIcon from './aquapoint.jpeg';
import timefreezeIcon from './time-freeze.png';
import pollIcon from './poll 1.svg';
import PollModal from "../PollModal";

function Lifeline(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [lifelineInfo, setLifelineInfo] = useState("");
  const [lifeline1, setLF1] = useState(false);
  const [lifeline2, setLF2] = useState(false);
  const [lifeline3, setLF3] = useState(false);
  const [keys, setKeys] = useState([0]);
  const [val, setVal] = useState([0]);
  const [isPoll, setPoll] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [lifelineFlag, setLifelineFlag] = useState(1);
  const [activated, setIsActivated] = useState("");



  useEffect(() => {
    setLF1(props.lifeline1);
    setLF2(props.lifeline2);
    setLF3(props.lifeline3);
    setLifelineFlag(props.lifelineFlag);
    if(lifelineFlag == 4){
      setPoll(true);
    }
  }, [props.lifeline1, props.lifeline2, props.lifeline3,props.lifelineflag]);

  const handleLifelineClick = (endpoint, info) => {
    setModalOpen(true);
    setSelectedEndpoint(endpoint);
    setLifelineInfo(info);
  };

  const handleActivate = () => {
    axios.get(`http://127.0.0.1:8000/api/lifeline?lifeline=${selectedEndpoint}`, {
      headers: { "Authorization": localStorage.getItem('jwt') }
    })
      .then(response => {
        if (selectedEndpoint === "poll") {
          setPoll(true);


          console.log("Response ", response.data);
          const responseKeys = Object.keys(response.data).map(key => parseInt(key));
          const responseValues = Object.values(response.data);

          setKeys(responseKeys);
          setVal(responseValues);

          setShowChart(true);
          
          setIsActivated("Activated! ")
          // window.location.reload();
        } else {
          window.location.reload();
        }
      })
      .catch(error => {
        console.error("Error fetching lifeline data:", error);
      });
  };

  useEffect(() => {
    if (isPoll && showChart) {
      // Show the chart after the page reloads
      setShowChart(false);
    }
  }, [isPoll, showChart]);

  return (
    <>
      <div className="text-center mt-10 border-2 border-[#00B0B0] flex flex-col rounded-lg divide-y-2 ">
        <button className={`text-white py-2 mt-2 mb-2 ${lifeline1 ? 'bg-red-200' : 'bg-green-200'}`} onClick={() => handleLifelineClick("aqua_point", "Lifeline 1")} disabled={lifeline1}>
          <img src={aquapointIcon} alt="Aquapoint" className="w-8 h-8 inline-block mr-2" />
          <span className={lifeline1 ? 'text-red-600' : 'text-green-800'}>Lifeline 1</span>
        </button>
        <button className={`text-white py-2 mt-2 mb-2 ${lifeline2 ? 'bg-red-200' : 'bg-green-200'}`} onClick={() => handleLifelineClick("time_freeze", "Lifeline 2")} disabled={lifeline2}>
          <img src={timefreezeIcon} alt="Time Freeze" className="w-8 h-8 inline-block mr-2" />
          <span className={lifeline2 ? 'text-red-600' : 'text-green-800'}>Lifeline 2</span>
        </button>
        <button className={`text-white py-2 mt-2 mb-2 ${lifelineFlag==4 ? 'bg-green-200' : (lifeline3 &&'bg-red-200') || (!lifeline3 && 'bg-green-200')}`} onClick={() => handleLifelineClick("poll", "Lifeline 3")} disabled={lifelineFlag == 4 ? false : lifeline3}>
          <img src={pollIcon} alt="Poll" className="w-8 h-8 inline-block mr-2" />
          <span className={lifelineFlag==4 ? 'text-green-800' : (lifeline3 &&'text-red-600') || (!lifeline3 && 'text-green-800')}>Lifeline 3</span>
        </button>
      </div>

      {isPoll &&
        <div className="absolute mr-10">
          {/* <h1 className="text-white font-semibold ml-36 mt-6 absolute">Poll</h1> */}
          {/* <LineChart
            sx={{
              '& .axis text': {
                fill: 'white',
              },
              '& .axis path, & .axis line': {
                stroke: 'white',
              },
              '& .MuiChartsAxis-tickContainer': {
                fill: 'white',
                stroke: 'white'
              }
            }}
            xAxis={[{ data: keys }]}
            series={[
              {
                data: val,
                area: true,
              },
            ]}
            width={340}
            height={250}
          /> */}
        </div>}

{/* {      console.log("is pole in lifeline ",isPoll)} */}
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} onActivate={() => handleActivate(selectedEndpoint)} lifelineInfo={lifelineInfo} isPoll={isPoll} keys={keys} val={val} activated={activated} />
      )}
{/* 
      {is <PollModal
          onClose={onClose} // Pass onClose function to PollModal
          // onActivate={onActivate} // Pass onActivate function to PollModal
          lifelineInfo={lifelineInfo}
          isPoll={isPoll}
          keys={keys}
          val={val}
        />} */}
    </>
  );
}

export default Lifeline;
