import Image from 'next/image'
import React from 'react'

function Profile() {
  return (
    <section className="profile-section text-white h-1/4 bg-[rgb(61,86,84)] flex flex-col justify-center items-center">
            <div className="prof-container  h-[80px] w-[80px] rounded-full flex justify-center items-center bg-[#c99c33] mb-2">
              <Image 
                width={72} 
                height={72} 
                className='rounded-full relative z-[3]' 
                src="/newman.jpg" 
                alt="profile image" 
              />
            </div>
            <h3 className='uppercase'>Alex Johnson</h3>
            <p className='text-[.8rem]'>alexjohnson@gmail.com</p>
          </section>
  )
}

export default Profile