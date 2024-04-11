import React, { useEffect, useState } from "react";

const Time = (props) => {
  const [hrs, setHrs] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  let interval;

  useEffect(() => {
    setHrs(props.time[0]);
    setMin(props.time[1]);
    setSec(props.time[2]);

    return () => clearInterval(interval);
  }, [props.time]); 
  
  // Include hrs, min, sec in the dependency array
  
  const updateTimer = () => {
    if (sec > 0) {
      setSec(prevSec => prevSec = prevSec - 1); // Fnctional update for sec
    } else {
      if (min > 0) {
        setSec(59);
        setMin(prevMin => prevMin = prevMin - 1); // Functional update for min
      } else {
        if (hrs > 0) {
          setHrs(prevHrs => prevHrs = prevHrs - 1); // Functional update for hrs
          setMin(59);
          setSec(59);
        } else {
          console.log("Over");
          clearInterval(interval); // Clear interval when the timer is over
        }
      }
    }
  };
  
  setTimeout(()=>{
    updateTimer();
  },1000)

  return (
    <div className="[grid-area:1_/_4_/_3_/_5] flex border-2 rounded-lg p-0.5 divide-x-2 divide-dashed">
      <div className="flex-1 flex items-center justify-center">
        <p>Time</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p>{hrs} : {min} : {sec}</p>
      </div>
    </div>
  );
}

export default Time;
