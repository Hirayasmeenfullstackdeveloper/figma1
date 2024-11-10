import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='w-full max-w-7xl bg-[#FFFFFF] flex flex-col'> 
        <div className='w-[50%] ml-[50px] bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-between gap-40 p-8 md:p-16 '>
          <div className='w-1/2 ml-[200px] flex-1 flex justify-center'>
          <div className='flex-1'>
        <h1 className=' w-[472.97] mt-[50px] ml-[50px] font-bold text-4xl mb-4'>IMPECCABLE <br /> 
      CRAFTSMANSHIP AND  <br />
      FINESSE </h1> 
      <p className=' font-serif font-medium text-2xl mb-6 text-[#787054] w-[600] mt-[50px] ml-[50px] '>
       An example of intricate workmanship and detail, elegant <br />
       necklaces and long and short chains form a part of our <br />
       desirable collection.
      </p>
      <button className='w-[207.67px] h-[49.2px] mt-[20px] ml-[50px] rounded-[8.6px] p-[8.6px] bg-[#A29875] flex justify-center items-center'>
  <span className='text-[25.8px] text-[#FFFFFF]'>Explore Now</span>
</button>
         </div>
   </div>
    <div className='w-[300px] h-[400px] relative mt-[10px] ml-[200] rounded-tl-[128.99px] rounded-br-[128.99px]
    border-[0.86px] border-solid border-transparent flex '>
    <Image src="/image/figma1.jpeg" alt="image" width={421.38}   height={537.59} 
  className='object-cover absolute rounded-tl-[128.99px] rounded-br-[128.99px] ' />
  <div className='ml-[10px] mr-[10px] mt-[7px] w-[500px] h-[390px] border-2 rounded-tl-[128.99px] 
  rounded-br-[128.99px] border-[#FFFFFF] Z-10 relative'>

  </div>
</div>
       </div>
       </div>
       </div>
      
       
  )
}
export default Hero
