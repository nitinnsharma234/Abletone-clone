import { Link } from 'react-router-dom'
import { menuItemsList } from '../../models/MiddleMenuModel'


const MiddleNavBar = () => {
  return (
    <div className=' flex gap-8 mx-auto w-full justify-center py-[66.66px] bg-[#EEEEEE]'>
        <h3 className='font-semibold  text-xl'>More :</h3>
        {
            menuItemsList.map((e)=>{
                return <Link className='text-blue-800 font-bold text-xl' to = {e.route} key={e.route}>{e.title}</Link>
            })
        }
    </div>
  )
}

export default MiddleNavBar