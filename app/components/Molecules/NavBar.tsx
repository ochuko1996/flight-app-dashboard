'use client'
import { Links } from '@/app/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function NavBar() {
    const router = useRouter()
    console.log(router);
    
  return (
    <nav className="h-1/2  bg-[rgb(66,92,90)] pt-10 pl-8">
            <ul>
              {Links.map( item => {
                return (
                  <>
                    <li key={item.id} className=' mb-10'>
                      <Link 
                        href={item.link} 
                        className='uppercase text-white flex'>
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