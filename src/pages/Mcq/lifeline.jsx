import React, { useState } from "react";
import Modal from "../Modal";
import axios from "axios";

function Lifeline() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [lifelineInfo, setLifelineInfo] = useState("");

  const handleLifelineClick = (endpoint, info) => {
    setModalOpen(true);
    setSelectedEndpoint(endpoint);
    setLifelineInfo(info)
  };

  const handleActivate = (endpoint) => {
          axios.get(`http://127.0.0.1:8000/api/lifeline?lifeline=${selectedEndpoint}`,{ 
            headers: {"Authorization": localStorage.getItem('jwt')}
          })
            .then(response => {
              if(selectedEndpoint != "poll")
              {location.reload()}
              console.log("Response ",response.data);
      
            })
            .catch(error => {
              console.error("Error fetching lifeline data:", error);
            });
  };

  return (
    <>
      <div className="[grid-area:4_/_4_/_7_/_5] text-center flex flex-col mb-4 border-2 rounded-lg p-0.5 divide-y-2">
        <div className="flex-1 flex items-center justify-center">
          <p>Lifelines!!</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button onClick={() => handleLifelineClick("aqua_point","Lifeline 1")}>Lifeline 1</button>
          <button onClick={() => handleLifelineClick("time_freeze","Lifeline 2")}>Lifeline 2</button>
          <button onClick={() => handleLifelineClick("poll", "lifeline 3")}>Lifeline 3</button>
        </div>
      </div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} onActivate={() => handleActivate(selectedEndpoint)} lifelineInfo={lifelineInfo} />      )}
    </>
  );
}

export default Lifeline;

