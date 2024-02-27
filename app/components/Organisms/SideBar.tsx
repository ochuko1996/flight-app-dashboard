import React from 'react'
import Profile from '../Molecules/Profile'
import NavBar from '../Molecules/NavBar'
import ActiveUser from '../Molecules/ActiveUser'

function SideBar() {
  return (
    <section className="flex flex-col w-1/4 ">
        <Profile/>
        <NavBar/>
        <ActiveUser/>
    </section>
  )
}

export default SideBar