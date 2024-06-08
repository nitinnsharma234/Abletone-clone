import React from 'react'

type OverlayTexProps = {
    title: string;
    subtitle: string;
    titleStyle?: string;
    subtitleStyle?:string;
    iconStyle?:string;
  };

const OverlayTex: React.FC<OverlayTexProps> = ({title, subtitle , titleStyle="text-yellow-300 text-5xl",subtitleStyle='text-yellow-300',iconStyle=' text-yellow-300'}) => {
  console.log(titleStyle);
  return (
   
    <div className='mt-4 ms-[3.75rem] '>
                 <h2 className={` font-bold   ${titleStyle} w-3/4 min-w-[300px] `}>{title}</h2>
                 <div className='flex'>
                <h4  className={`text-2xl  underline underline-offset-5 decoration-2 font-semibold ${subtitleStyle} `}>
                 {subtitle}
                  </h4>
                  <span className={`text-2xl ms-2  ${iconStyle}`}>{">"}</span>
                  </div>
                
                </div>
  )
}

export default OverlayTex