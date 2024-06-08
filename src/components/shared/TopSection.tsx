import React from 'react'
import OverlayTex from './OverlayTex'
import hero1 from '../../images/hero_1.png'
import hero3 from '../../images/hero_3.png'
import hero2 from '../../images/hero_2.png'


const TopSection = () => {
  return (
    <div>
        <div  
          className={'flex gap-20 justify-between items-end'}>
          <article style={{
            backgroundImage: `url('${hero1}')`,
            width: '933px',
            height: '622px',
            backgroundSize:'cover'
          }}
          >

            <OverlayTex title={'Learn about the making of Ableton Push'} subtitle={'Find out more'} />
          </article>
          
          <div
            style={{
              backgroundImage: `url(${hero3})`,
              width: '533px',
              height: '355px',
              backgroundSize:'cover'
            }} >
            <OverlayTex
              title={'Live 12 is out now'}
              subtitle={'Find out more'}
              titleStyle={'text-white text-3xl'}
              subtitleStyle='text-white text-xl'
              iconStyle='text-white'
            />

          </div>

        </div>
        <div  
        className='-translate-y-[40%] mx-auto translate-x-1/4 flex'
            style={{
              backgroundImage: `url(${hero2})`,
              width: '533px',
              height: '355px',
              backgroundSize:'cover'

            }} >
            <OverlayTex
              title={"See what's new in Note"}
              subtitle={'Check out the latest feature'}
              titleStyle={'text-green-neon text-3xl '}
              subtitleStyle='text-green-neon text-xl'
              iconStyle='text-green-neon'
            />

          </div>
      </div>
  )
}

export default TopSection