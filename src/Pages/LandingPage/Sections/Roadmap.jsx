import React from 'react'
import up from '../../../assets/roadup.png'
import down from '../../../assets/roaddown.png'
import bg1 from '../../../assets/Vector1.png'
import bg2 from '../../../assets/Vector2.png'

function Roadmap() {
  return (
    <div className='relative py-10 bg-[#1a1d21]'>
      <img src={bg2} alt="" className='absolute top-[-100px]  right-8 w-[1000px]' />
      <img src={bg1} alt="" className='absolute top-[-100px] left-8 w-[1000px]' />
      <div className="header text-center m-auto flex flex-col justify-center items-center">
        <h2 className='text-3xl text-white font-bold'>Benzswap <span className='text-[#0193FA]'>Roadmap</span></h2>
      </div>

      <div className="flex justify-center flex-col lg:flex-row item-center py-20 text-white">
        <div className="w-[350px] lg:h-[350px] lg:py-5 lg:mr-[-6px] lg:border-none border-[#dadada] border-b-[1px] item lg:m-0 m-auto py-12">
          <img src={up} className='mr-[-20px] hidden lg:block' alt="" />
          <div className="text-center lg:mt-[-100px] flex flex-col items-center gap-3">
            <h2 className='py-1 border-b-2 border-[#3dc6ee] text-xl font-bold'>Phase 1</h2>
            <ul>
              <li>Concept Creation</li>
              <li>Benzswap Branding Begins</li>
              <li>Benzswap Branding Finanlized</li>
              <li>Benzswap Social Media</li>
            </ul>
          </div>
        </div>
        <div className="w-[350px] lg:h-[350px] lg:py-5 mb-0 lg:justify-end lg:relative lg:border-none border-[#dadada] border-b-[1px] item lg:m-0 m-auto py-12">
          <img src={down} className='lg:absolute lg:bottom-0 hidden lg:block' alt="" />
          <div className="text-center lg:mt-[70px] flex flex-col items-center gap-3">
            <h2 className='py-1 border-b-2 border-[#3dc6ee] text-xl font-bold'>Phase 2</h2>
            <ul>
              <li>White Paper</li>
              <li>Pitch Deck</li>
              <li>Website Launch</li>
              <li>Platform/Smart Contract Definition</li>
            </ul>
          </div>
        </div>
        <div className="w-[350px] lg:h-[350px] py-5 lg:ml-[-6px] item lg:m-0 m-auto pb-10">
          <img src={up} alt="" className='hidden lg:block' />
          <div className="text-center lg:mt-[-100px] flex flex-col items-center gap-3">
            <h2 className='py-1 border-b-2 border-[#3dc6ee] text-xl font-bold'>Phase 3</h2>
            <ul>
              <li>BenzSwap Development Begins</li>
              <li>BenzSwap Testnet</li>
              <li>BenzSwap Goes Live</li>
              <li>Liquidity Mining Goes Live</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap