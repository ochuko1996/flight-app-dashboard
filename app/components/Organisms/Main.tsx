import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdChevronLeft, MdChevronRight, MdOutlineLocationOn } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import TravelOption from '../Molecules/TravelOption'
import { travelOption } from '@/app/constants'
import { FaChevronDown } from 'react-icons/fa'
import TravelDetails from './TravelDetails'
import Map from '../Molecules/Map'

function Main() {
  return (
    <section className="flex flex-col  w-3/4 px-9 py-8">
            {/* Header */}
          <section className="bg-[white] rounded-3xl h-1/5 p-4 flex flex-col justify-between">
            {/* top right section */}
              <div className='flex justify-between text-[#425c5a]'>
                <div className="w-1/2 flex bg-[#e1eceb]  p-3 rounded-3xl ">
                  <div className="transitWrapper flex justify-between w-full h-5">
                    <div className="from flex items-center">
                      <MdOutlineLocationOn className='mr-5 text-[1.3rem]'/>
                      <p className="uppercase">
                        New York
                      </p>
                    </div>
                    <div className='flex h-[30px] w-[30px] rounded-full bg-[#425c5a] items-center justify-center' ><MdChevronLeft  className='text-[.8] text-[#e1eceb]' /><MdChevronRight className='text-[.6] text-[#e1eceb]'/></div>
                    <div className="to flex items-center">
                      <MdOutlineLocationOn className='mr-5 text-[1.3rem]'/>
                      <p className='uppercase'>MUMBAI (BOM)</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/5 flex items-center p-3  rounded-3xl bg-[#e1eceb] justify-center h-12">
                  <SlCalender className='mr-5 text-[1.3rem]'/>29 JULY 2019
                </div>
                <div className="w-1/5 flex items-center p-3 bg-[#e1eceb] rounded-3xl justify-center h-12">
                 <CgProfile className='mr-5 text-[1.3rem]'/> 2 TRAVELLER
                </div>
              </div>
              {/* bottom right section */}
              <TravelOption travelOption={travelOption}/>
          </section>
          <section className="flex justify-between my-5 items-center">
            <div className="text-[#425c5a]">
              RESULT(20)
            </div>
            <div className="flex text-[#425c5a]">
              <button className="mr-2 bg-white rounded-3xl h-10 px-4">FILTER</button>
              <button className='flex items-center bg-white rounded-3xl h-10 px-4'>
                TICKET OF CLASS 
                <span className='ml-2'><FaChevronDown/> </span>
              </button>
            </div>
          </section>
          <section className="h-2/3 flex justify-between gap-10">
            <TravelDetails/>
            <Map/>
          </section>
        </section>
  )
}

export default Main