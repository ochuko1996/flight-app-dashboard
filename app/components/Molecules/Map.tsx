import Image from 'next/image'
import React from 'react'
import FlightOptions from './FlightOptions'

function Map() {
  return (
    <div className="w-1/3  h-full">
        <div className="flex justify-between p-5 gap-3 h-1/5 rounded-t-3xl bg-[#425C5A]">
            <div className="w-1/3 text-white flex flex-col justify-end">
                <p className='uppercase text-[.7rem]'>from</p>
                <h3 className='uppercase text-[1.3rem]'>jfk</h3>
            </div>
            <div className="w-1/3 flex items-end">
                <p className="uppercase text-white text">non-stop</p>
            </div>
            <div className="w-1/3 text-white flex flex-col justify-end">
                <p className='uppercase text-[.7rem]'>to</p>
                <h3 className='uppercase text-[1.3rem]'>bom</h3>
            </div>
        </div>
        <div className="h-[30%] p-5 bg-[#425C5A]">
            <Image width={320} height={320} className='' src={'/map-plane.png'} alt='tracker'/>
        </div>
        <div className="h-1/2 bg-[#3d5654] rounded-b-3xl">
            <FlightOptions/>
            <div className='px-5'>
                <p className="uppercase text-white mb-3">price</p>
                <div>
                    <Image width={320} height={320} src={'/group 11.png'} alt='price range'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map