
import React, { useEffect, useState } from "react";

const Time = (props) => {
  const [lifelineFlag, setLifelineFlag] = useState(props.lifelineFlag);
  const [time, setTime] = useState({
    hrs: props.time[0],
    min: props.time[1],
    sec: props.time[2],
  });

  useEffect(() => {
    setTime({
      hrs: props.time[0],
      min: props.time[1],
      sec: props.time[2],
    });
    setLifelineFlag(props.lifelineFlag);
  }, [props.time, props.lifelineFlag]);

  useEffect(() => {
    const intervalId = lifelineFlag === 3 ? setInterval(fetchData, 1000) : setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [lifelineFlag]);

  function updateTimer() {
    setTime(prevTime => {
      let { hrs, min, sec } = prevTime;

      if (sec > 0) {
        sec--;
      } else if (min > 0) {
        min--;
        sec = 59;
      } else if (hrs > 0) {
        hrs--;
        min = 59;
        sec = 59;
      } else {
        // Handle timer expiration here
      }

      return { hrs, min, sec };
    });
  }

  function fetchData() {
    fetch("http://127.0.0.1:8000/api/lifeline?lifeline=time_freeze", { 
      headers: {"Authorization": localStorage.getItem('jwt')}
    })
      .then(response => response.json())
      .then(data => {
        if (data.seconds === -1) {
          window.location.reload();
        } else {
          setTime({
            hrs: data.hours,
            min: data.minutes,
            sec: data.seconds
          });
        }
      })
      .catch(error => console.error('Error fetching time data:', error));
  }

  return (
    <div className="flex h-12 border-2 border-[#00B0B0] rounded-lg">
      {/* <div className="flex-1 text-white flex items-center justify-center">
        <p>Time</p>
      </div> */}
      <div className="flex-1 text-white flex items-center justify-center">
        {`${time.hrs < 10 ? "0" : ""}${time.hrs} : ${time.min < 10 ? "0" : ""}${time.min} : ${time.sec < 10 ? "0" : ""}${time.sec}`}
      </div>
    </div>
  );
}

export default Time;
