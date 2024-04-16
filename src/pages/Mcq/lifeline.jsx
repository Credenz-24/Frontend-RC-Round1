import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import axios from "axios";
import { LineChart } from '@mui/x-charts/LineChart';
import aquapointIcon from './aquapoint.jpeg';
import timefreezeIcon from './time-freeze.png';
import pollIcon from './poll 1.svg';


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

  const handleLifelineClick = (endpoint, info) => {
    setModalOpen(true);
    setSelectedEndpoint(endpoint);
    setLifelineInfo(info)
  };

  useEffect(() => {
    setLF1(props.lifeline1);
    setLF2(props.lifeline2);
    setLF3(props.lifeline3);
  }, [props.lifeline1, props.lifeline2, props.lifeline3]);

  const handleActivate = (endpoint) => {
    axios.get(`http://127.0.0.1:8000/api/lifeline?lifeline=${selectedEndpoint}`, {
      headers: { "Authorization": localStorage.getItem('jwt') }
    })
      .then(response => {
        if (selectedEndpoint === "poll") {
          setPoll(true);
          console.log("Response ", response.data);
          const responseKeys = Object.keys(response.data).map(key => parseInt(key));
          const responseValues = Object.values(response.data);

          // Set keys and values state
          setKeys(responseKeys);
          setVal(responseValues);
          console.log(typeof (responseKeys[0]));
          console.log(typeof (responseValues[0]));
        } else {
          location.reload();
        }
      })
      .catch(error => {
        console.error("Error fetching lifeline data:", error);
      });
  };

  return (
    <>
      <div className="text-center mt-10 border-2 border-[#00B0B0] flex flex-col rounded-lg divide-y-2">
        <button className="text-white py-2 mt-2 mb-2" onClick={() => handleLifelineClick("aqua_point", "Lifeline 1")} disabled={lifeline1}>
          <img src={aquapointIcon} alt="Aquapoint" className="w-8 h-8 inline-block mr-2" />
          Lifeline 1
        </button>
        <button className="text-white py-2 mt-2 mb-2" onClick={() => handleLifelineClick("time_freeze", "Lifeline 2")} disabled={lifeline2}>
          <img src={timefreezeIcon} alt="Time Freeze" className="w-8 h-8 inline-block mr-2" />
          Lifeline 2
        </button>
        <button className="text-white py-2 mt-2 mb-2" onClick={() => handleLifelineClick("poll", "Lifeline 3")} disabled={lifeline3}>
          <img src={pollIcon} alt="Poll" className="w-8 h-8 inline-block mr-2" />
          Lifeline 3
        </button>
      </div>

      {isPoll ?
        <div className="mt-10">
          <LineChart
            sx={{
              '& .axis text': {
                fill: 'white', // Change color of axis text (tick labels) to white
              },
              '& .axis path, & .axis line': {
                stroke: 'white', // Change color of axis lines to white
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
            width={500}
            height={300}
          />
        </div> : null}

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} onActivate={() => handleActivate(selectedEndpoint)} lifelineInfo={lifelineInfo} />
      )}
    </>
  );
}

export default Lifeline;
