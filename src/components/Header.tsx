import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../icons/logo.svg'
import { MenuItem, MenuList } from '../constants/menu'

const Header = () => {
  return (
      <div className='flex gap-10   m-0 py-6 bg-white px-10'>

        <Link to="/">
          <img
            className="header_logo" 
            src={Logo}
            height={28}
            width={60}
            alt="header_logo"
          />
        </Link>
        <ul className='flex gap-6 items-center flex-1 font-bold text-base lg:text-xl'>
          {
            MenuList.map((item: MenuItem) => (
              <li key={item.to} >
                 <Link to={item.to} > {item.title}</Link>
              </li>
            ))
          }
        </ul>
        <ul className='flex gap-6  items-center'>
          <Link to='/try-live' className='text-blue-800 font-bold text-base lg:text-xl'>
            Try Live 12 for free
          </Link>
          <Link to='/try-live'>
           Login or signup
          </Link>
        </ul>
      </div>
  )
}

export default Header