import React from 'react'
import TravelDetails from './TravelDetails'
import Map from '../Molecules/Map'
import Header from '../Molecules/Header'
import BreadCrumb from '../Molecules/BreadCrumb'

function Main() {
  return (
    <section className="flex flex-col  w-3/4 px-9 py-8">
            {/* Header */}
          <Header/>
          <BreadCrumb/>
          <section className="h-2/3 flex justify-between gap-10">
            <TravelDetails/>
            <Map/>
          </section>
        </section>
  )
}

export default Main