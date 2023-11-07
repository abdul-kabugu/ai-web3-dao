/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Hero() {
  return (
    <div className='flex justify-between max-w-[1200px] mx-auto w-full h-screen'>
         <div className='flex-1  text-white flex flex-col gap-5 items-center justify-center'>
          <h1 className='text-6xl font-extrabold'>Build web3 with <br /> friends.</h1>
           <h2 className='font-bold text-2xl text-center'>
           AIWeb3's Chinese community, funded by the Polkadot/Kusama Treasury, empowers content creators with token incentives, enriching Web3 education and engagement
           </h2>

            <div className='flex gap-10 items-center'>
                <div className='flex gap-2 items-center border border-purple-500 py-2 px-4 cursor-pointer rounded-lg'>
                    <img    src='https://pbs.twimg.com/profile_images/1636244929897717761/D4lXEIeL_400x400.jpg'  className='w-7 h-7  rounded-full'  />
                      <p className='text-sm'>Subscribe  <br /> <span className='opacity-30'>to our channel</span></p>
                </div>

                <div className='flex gap-2 items-center border border-indigo-800 cursor-pointer py-2 px-4 rounded-lg'>
                    <img    src='https://pbs.twimg.com/profile_images/1719768085815803905/Qt-WhTGg_400x400.jpg'  className='w-7 h-7 rounded-full'  />
                      <p className='text-sm text-center'>Join our dsocord  <br /> <span className='opacity-70'>via guild</span></p>
                </div>
            </div>
         </div>
         <div className='flex-1  flex items-center justify-center '>
         <img  src='https://www.developerdao.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain.4748ebc1.png&w=828&q=75'  />
         </div>
    </div>
  )
}
