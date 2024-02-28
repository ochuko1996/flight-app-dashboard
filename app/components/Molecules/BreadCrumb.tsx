import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function BreadCrumb() {
  return (
    <section className="flex justify-between my-5 items-center">
        <h3 className="text-[#425c5a]">
            RESULT(20)
        </h3>
        <div className="flex text-[#425c5a]">
            <button className="mr-2 bg-white rounded-3xl h-10 px-4">FILTER</button>
            <button className='flex items-center bg-white rounded-3xl h-10 px-4'>
            TICKET OF CLASS 
            <span className='ml-2'><FaChevronDown/> </span>
            </button>
        </div>
    </section>
  )
}

export default BreadCrumb