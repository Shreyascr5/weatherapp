import React from 'react'
import { UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons';

function TempAndDetails() {
  return (
    <div>
        <div className='flex   items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=" alt="sunny" className='w-20 '/>
            <p className='flex flex-col space-y-2 text-5xl'>34°</p>
            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real feel:
                      <span className='font-md ml-1 '> 32° </span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                      <span className='font-md ml-1 '> 65% </span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                      <span className='font-md ml-1 '> 11 Km/h </span>
                </div>
              
            </div>
        </div>


        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3  '>

        <UilSun/>
        <p className='font-light'>Rise:  <span className='font-medium ml-1'>6:45 AM</span></p>
        <p className='font-light'>| </p>
        <UilSunset/>
        <p className='font-light'>Set:  <span className='font-medium ml-1'>7:35 PM</span></p>
        <p className='font-light'>| </p>
        <UilSun/>
        <p className='font-light'>High:  <span className='font-medium ml-1'>45°</span></p>
        <p className='font-light'>| </p>
        <UilSun/>
        <p className='font-light'>Low:  <span className='font-medium ml-1'>40°</span></p>
        </div> 
    </div>
  )
}

export default TempAndDetails