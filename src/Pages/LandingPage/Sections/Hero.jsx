import React from 'react'

const Hero = () => {
  return (
    <div className='hero text-center '>
        <div className="innerHero flex flex-col lg:h-[100vh] lg-[60vh] lg:p-0 py-10 bg-[#1a1d21] justify-center items-center gap-2">
            <h3 className='text-white lg:text-xl text-base'>Welcome to Benszwap</h3>
            <h1 className='lg:text-[2.5rem] text-3xl text-white font-black lg:w-[500px] w-[300px]'>
              All inclusive Automated Market Marker & 
              <span className='text-[#0193FA]'> Decentralized</span> exchange.
            </h1>
            <p className='lg:w-[480px] w-[350px] text-sm lg:text-base text-white mb-6 mt-2'>seamlessly exchange tokens via smart contracts and without the need for a custodial wallet to hold assets of the users.</p>
            <div className="buttons flex gap-5">
                <a href="https://benzswap-testnet.netlify.app/swap"><button className='w-[150px] justify-center p-3 hover:transition-[0.8s] hover:scale-[1.1] flex items-center rounded-3xl text-white bg-[#0374ef]'>Launch App</button></a>
                <button className='w-[150px] justify-center p-3 hover:transition-[0.8s] hover:bg-[#0374ef]flex hover:bg-[#0374ef] hover:scale-[1.1] items-center rounded-3xl text-white bg-transparent border-[1px] border-[#0374ef]'>Explore</button>
            </div> 
        </div>
    </div>
  )
}

export default Hero