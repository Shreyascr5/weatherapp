import React from 'react'
import { UilSearch,UilLocationPoint,UilCelsius,UilFahrenheit } from '@iconscout/react-unicons';

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 item-center justify-center space-x-4'>

            <input type="text" 
            placeholder='Search for city...' className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'  />
            <UilSearch size={25} className="text-white cursor-pointer  transition ease-out hover:scale-125"/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center '>
         <button name='metric' className='text-xl text-white font-light'><UilCelsius/></button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial'className='text-xl text-white font-light'><UilFahrenheit/></button></div>
    </div>
  )
}

export default Inputs