import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';

export default function Modal({isPoll, onClose, onActivate, lifelineInfo,keys,val,activated }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* Modal Content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-600 rounded-t">
              <h3 className="text-3xl font-semibold text-white">
                Lifeline Details
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Selected Lifeline: <span className="text-white font-bold">{lifelineInfo}</span>
              </p>
              {/* Additional modal content can go here */}
            </div>
            {/* Footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-600 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onActivate}
              >
                {activated == "Activated! " ? "Activated!" : "Activate"}
              </button>
              
            </div>
            <div >
            
            {isPoll ? (
              
  <LineChart
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
    width={800}
    height={350}
  />
) : null}
  </div>
          </div>
        </div>
      </div>
      
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black">
      
      </div> */}

      
      
    </>
  );
}
