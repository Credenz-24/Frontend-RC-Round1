import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';

export default function PollModal({ onClose, keys, val }) {
  return (
    <>
      {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold text-gray-800">
                Lifeline Poll
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="absolute mr-10">
                <LineChart
                  sx={{
                    '& .axis text': {
                      fill: 'black',
                    },
                    '& .axis path, & .axis line': {
                      stroke: 'black',
                    },
                    '& .MuiChartsAxis-tickContainer': {
                      fill: 'black',
                      stroke: 'black'
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
                />
              </div>
            </div>
            <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose} // Call the onClose function when the close button is clicked
                >
                <span className="bg-transparent text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                </span>
                </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
            
                <LineChart
                  sx={{
                    '& .axis text': {
                      fill: 'black',
                    },
                    '& .axis path, & .axis line': {
                      stroke: 'black',
                    },
                    '& .MuiChartsAxis-tickContainer': {
                      fill: 'black',
                      stroke: 'black'
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
                />  


    </>
  );
}
