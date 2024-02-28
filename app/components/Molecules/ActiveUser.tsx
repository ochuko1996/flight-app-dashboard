import Image from 'next/image'
import React from 'react'

function ActiveUser() {
  return (
    <div className="h-1/4 text-[#C99C33]  pl-[3rem] bg-[#425C5A]">
        <p className="uppercase">active users</p>

        <div>
          <Image width={320} height={320} src={'/map-point.png'} alt='map point'/>
        </div>
    </div>
  )
}

export default ActiveUser