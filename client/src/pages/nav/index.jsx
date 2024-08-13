import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='flex gap-5 bg-slate-500 justify-center p-2'>
    <NavLink
    to={"/"}
    className={({ isActive }) => isActive ? "bg-red-200 rounded-md" : "" }
    >
        Home
    </NavLink>
    <NavLink
    to={"/about"}
    className={({ isActive }) => isActive ? "bg-red-200 rounded-md" : "" }
    >
        About
    </NavLink>
    </div>
    
    </>
  )
}

export default Nav