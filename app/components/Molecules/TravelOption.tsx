'use client'
import React,{useState} from 'react'

import { PiOfficeChairFill } from 'react-icons/pi'
type TravelOptionProps = {
    travelOption: TravelOption[];
}
function TravelOption({travelOption}:TravelOptionProps) {
    const [index, setIndex] = useState(1)
  return (
    <div className='flex justify-between'>
                 <div className="w-1/2 flex bg-[#e1eceb] text-[#425c5a] rounded-3xl ">
                  <div className="transitWrapper flex justify-between w-full p-1">
                    {
                      travelOption.map(item => {
                        return (
                        <button onClick={()=> setIndex(item.id)} className={`rounded-3xl ${index === item.id ? 'bg-[#425c5a] text-white' : 'text-[#425c5a]'}   uppercase w-1/5`} key={item.id}>{item.name}</button>
                        )
                      })
                    }
                  </div>
                 
                </div>
                <div className="w-1/5 flex items-center p-3 bg-[#e1eceb] rounded-3xl justify-center text-[#425c5a] h-12">
                  <PiOfficeChairFill className='mr-5 text-[1.3rem]' />
                  <p className='uppercase'>first class</p>
                </div>
                <div className="w-1/5 flex items-center p-3 bg-[#c99c33] text-white rounded-3xl justify-center h-12"><p className='uppercase'>search</p></div>
              </div>
  )
}

export default TravelOption