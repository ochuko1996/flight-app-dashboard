'use client'
import { Links } from '@/app/constants'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

function NavBar() {
    const path = usePathname()
    console.log(path);
    
  return (
    <nav className="h-1/2  bg-[rgb(66,92,90)] pt-10 pl-8">
      <ul>
        {Links.map( item => {
          return (
            <>
              <li key={item.id} className={` p-4 ${path === item.link ? 'bg-[#e1eceb]  text-[#3D5654] rounded-l-3xl': ''} relative`}>
                <Link 
                  href={item.link} 
                  className={`uppercase  flex ${path === item.link ? 'text-[#3D5654]': 'text-white'}`}>
                      {
                        path === item.link 
                         &&
                        <>
                          <b className='top-curve'></b>
                          <b className='bottom-curve'></b>
                        </>
                      }
                  <span className='mr-4 text-[1.3rem]'>
                    < item.icon className='text-[#c99c33]'/>
                  </span>
                  {item.name}
                </Link>
              </li>
            </>
          )
        })}

      </ul>
    </nav>
  )
}

export default NavBar