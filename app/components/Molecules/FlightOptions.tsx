'use client'
import { flightsOptions } from '@/app/constants'
import React,{useState} from 'react'

function FlightOptions() {
    const [index, setIndex] = useState<number>(1)
  return (
    <div className='flex justify-between p-3 mb-3'>
        {
            flightsOptions.map(item => {
                return (
                        <button onClick={()=> setIndex(item.id)} className={`${index === item.id ? 'bg-[#C99C33]': ''} text-white h-10 rounded-3xl uppercase text-[.8rem] px-2`} key={item.id}>{item.option}</button>
                )
            })
        }
    </div>
  )
}

export default FlightOptions