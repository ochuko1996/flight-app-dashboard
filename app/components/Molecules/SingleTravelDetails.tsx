import Image from 'next/image'
import React from 'react'
type FlightDetailsProp = {
    flightDetails: TravelDetails[]
}
function SingleTravelDetails({flightDetails}:FlightDetailsProp) {
  return (
    <>
        {
            flightDetails.map((item, index)=> {
                return (
                    <article key={item.id} className={`flex text-[#425C5A] bg-white h-1/4 p-4 ${item.id === 1 ? 'rounded-t-3xl' : ''} ${index === flightDetails.length - 1 ? "rounded-b-3xl" : ''} gap-4`}>
                        <div className="w-1/4 flex items-center justify-center">
                            <Image width={70} height={70} src={item.imgUrl} alt='brand-logo'/>
                        </div>
                        <div className="w-1/4 flex flex-col justify-center">
                            <h2 className='uppercase text-[1.3rem]'>{item.from}</h2>
                            <p className='text-[.8rem]'>{item.toTime}</p>
                        </div>
                        <div className="w-1/4 flex flex-col justify-center items-center">
                            <h6 className='uppercase text-[.8rem]'>{item.airline}</h6>
                            <p className='text-[#C99C33]'>{item.duration}</p>
                            <p className="uppercase">{item.option}</p>
                        </div>
                        <div className="w-1/4 text-right flex flex-col p-3">
                            <h2 className="uppercase text-[1.3rem] mb-3">{item.to}</h2>
                            <p className='text-[.8rem]'>{item.toTime}</p>
                        </div>
                        <div className="w-1/4 flex flex-col">
                            <h3 className='text-right mb-3'>${item.price}</h3>
                            <button className='text-white bg-[#C99C33] p-2 rounded-3xl uppercase text-[.9rem]'>book now</button>
                        </div>
                    </article>
                )
            })
        }
    </>
  )
}

export default SingleTravelDetails