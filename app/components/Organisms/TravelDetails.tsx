import React from 'react'
import SingleTravelDetails from '../Molecules/SingleTravelDetails'
import { flightDetails } from '@/app/constants'

function TravelDetails() {
  return (
    <div className='w-2/3 flex flex-col h-full gap-1'>
        <SingleTravelDetails flightDetails={flightDetails}/>
    </div>
  )
}

export default TravelDetails