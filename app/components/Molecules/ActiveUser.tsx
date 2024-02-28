import { profilePics } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

function ActiveUser() {
  return (
    <div className="h-1/4 text-[#C99C33]  pl-[3rem] bg-[#425C5A]">
        <p className="uppercase">active users</p>
        <div className="flex my-2 relative">
          {
            profilePics.map((item, index) => {
              const leftPosition = index > 0 ? `${15 * index + 15}px` : '0';
              return (
                <Image key={item.id} width={40} height={30} src={item.imgUrl} className={`absolute top-0 h-[40px] rounded-full border border-[#3D5654]`} style={{left: leftPosition}} alt='active users'/>
              )
            })
          }
          <div className="w-[40px] h-[40px] rounded-full bg-[#C99C33] z-[5] left-[100px] text-white text-center absolute flex items-center justify-center"><span>70+</span></div>
        </div>
        <div className='mt-12'>
          <Image width={320} height={320} src={'/map-point.png'} alt='map point'/>
        </div>
    </div>
  )
}

export default ActiveUser