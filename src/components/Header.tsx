import React from 'react'
import Image from 'next/image'
import { leftMenu } from '@/constants'
export default function Header() {
  return (
    <div className='flex justify-between bg-black/40 w-full max-w-[1200px] mx-auto h-[70px] items-center px-3 rounded-b-xl sticky top-0'>
         <div>
        <Image  src={`/img/logo.jpg`} width={200} height={200} alt='logo' className='w-12 h-12 rounded-full cursor-pointer' />
         </div>
          <div className='text-white flex gap-3 items-center'>
             {leftMenu.map((menu, i) => (
               <div key={i}> 
                 <h2 className='font-semibold cursor-pointer'>{menu.title}</h2>
               </div>

             ))}
          </div>
    </div>
  )
}
