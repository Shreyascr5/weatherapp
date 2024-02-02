import React from 'react';
import './index.css';
import Inputs from './component/Inputs';
import TopButton from './component/TopButton';
import TimeandLocation from './component/TimeandLocation';
import TempAndDetails from './component/TempAndDetails';
import Forecast from './component/Forecast';

export default function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
   <TopButton/>
   <Inputs/>

   <TimeandLocation/> 

   <TempAndDetails/>
   <Forecast title="Hourly Forecast"/>
   <Forecast title="Daily Forecast"/>
    </div>
  )
}
