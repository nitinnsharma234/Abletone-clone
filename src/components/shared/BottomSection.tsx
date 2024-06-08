import React from 'react'
import { bottomMenuList } from '../../models/BottomMenuList'
import { Link } from 'react-router-dom'
import {fbIcon, instaIcon, tiktok, xIcon, ytIcon} from '../../icons'

const BottomSection = () => {
  return (
    <div className=' mx-[7rem] py-[7rem]'>
      <h6 className='font-bold  text-6xl '>Ableton</h6>
      <div className='flex justify-between pt-11'>
      <div>
        <ul className='flex flex-col'>
          {
            bottomMenuList.slice(0, 3).map((e) => {
              return (<li>
                <Link className='after:content-[">"] font-normal text-lg after:ms-1  after:text-sm' to={e.route}>
                  {e.title}
                </Link>
              </li >)
            })
          }
        </ul>
          <div className="flex ">
          <img src={fbIcon} height={44} width={44} className='p-[6px]'/>
          <img src={xIcon} height={44} width={44} className='p-[6px]'/>
          <img src={ytIcon} height={44} width={44} className='p-[6px]'/>
          <img src={instaIcon} height={44} width={44} className='p-[6px]'/>
          <img src={tiktok} height={44} width={44} className='p-[6px]'/>
          </div>
        </div>
       <div className='flex flex-col'>
       <h3 className='text-lg font-medium mb-1'>Education</h3>
        <ul className=''>
          {
            
            bottomMenuList.slice(3, 6).map((e) => {
              return (<li>
                <Link className='after:content-[">"]  font-normal text-lg after:ms-1 after:text-sm' to={e.route}>
                  {e.title}
                </Link>
              </li >)
            })
          }
        </ul>
        </div>
        <div className='w-full max-w-[553px]'>
          <h3>Sign up to our newsletter</h3>
          <h4 className='pe-8'>
            Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
          </h4>
          <div className='flex mt-4'>
          <input className='bg-[#EEEEEE] py-[0.75rem] px-[1rem] border-0 border-transparent  focus:outline-none  flex-1' type='text' placeholder='Email Address ' />
          <button className='bg-[#0000FF] px-[1.5rem] text-white font-bold'>Sign up</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BottomSection