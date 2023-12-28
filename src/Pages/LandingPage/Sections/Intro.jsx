import React from 'react'
import dollar from '../../../assets/dollar.png'
import liquidity from '../../../assets/liquidity.png'
import growth from '../../../assets/growth.png'
import down from '../../../assets/down.png'
import bg1 from '../../../assets/Vector1.png'
import bg2 from '../../../assets/Vector2.png'

function Intro() {
  const feature = [
    { 
      id:1, 
      img: dollar, 
      name: 'Unlimited token swap', 
      description: 'BenzSwap protocol will allow users to swap one token for another through the use of automated liquidity pools powered by the Benzswap Protocol smart contracts.'
   },
   { 
    id:2, 
      img: liquidity, 
      name: 'Liquidity Pools', 
      description: 'Liquidity pools are created when two different tokens are added in equal amount  on the benzswap exchange to allow them to be traded against each other.'
    },
    { 
      id:3, 
      img: growth, 
      name: 'Yield Farming Activities', 
      description: 'BenzSwap protocol will allow for yield farming activities that will allow users to earn the exchange native token when they stake their liquidity Provider tokens.'
    },
    { 
      id:4, 
      img: down, 
      name: 'Unlimited token swap', 
      description: 'Benzswap will be built on the Polygon chain therefore transaction fees experienced will be low compared to other blockchains available.'
    },
    { 
      id:5, 
      img: growth, 
      name: 'Smart Trade AI', 
      description: 'Benzswap as an all inclusive decentralized exchange has made trading easy and fast for newbies in the crypto and Web3 industry through Smart Trade AI. Users can complete transactions just by interacting with the Smart Trade AI.'
    },
    { 
      id:6, 
      img: liquidity, 
      name: 'Smart Predict', 
      description: 'In our continuous quest to redefine decentralized finance, we are proud to present Smart Predict AI, a revolutionary addition to the BenzSwap ecosystem. Smart Predict AI harnesses the power of artificial intelligence to provide users with predictive insights into the dynamic cryptocurrency market.'
    },
    {
      id: 7,
      img: dollar,
      name: 'P2P',
      description: "P2P trading on BenzSwap allows users to directly interact with one another, eliminating the need for intermediary entities and providing a more seamless, trustless, and secure trading experience."
    }
  ]
  return (
     <div className='lg:px-[8rem] px-2 py-[5rem] bg-[#1a1d21] text-white relative overflow-x-hidden'>
      <img src={bg2} alt="" className='absolute top-0  right-8 w-[1000px]' />
      {/* <img src={bg1} alt="" className='absolute top-[-100px] left-8 w-[1000px]' /> */}
      
      <div className="header text-center m-auto flex flex-col justify-center items-center">
        <h2 className='text-3xl font-bold'>Introducing <span className='text-[#0193FA]'>BENZSWAP</span></h2>
        <p className='my-[25px] lg:w-[600px] w-[80%]'>
          BenzSwap Protocol is dedicated to enhancing your trading 
          experience by introducing an innovative solution - the 
          Smart Trade AI. In a dynamic and ever-evolving 
          cryptocurrency market, trading can be both exhilarating 
          and challenging. With the Smart Trade AI, we're introducing 
          a powerful tool designed to simplify and elevate your 
          trading journey.
        </p>
      </div>
      <div className="gradient-border-box2 grid lg:grid-cols-2 place-items-center gap-12 gap-y-[4rem] lg:p-20 p-0 bg-[#212226] rounded-2xl">
      {feature.map(item => (
        <div key={item.id} className="body token lg:w-[450px] w-[90%]">
          <img src={item.img} alt=""  className="img bg-[#52585c] lg:w-[80px] w-[50px] lg:p-5 p-2 rounded-full"/>
          <h3 className='text-xl font-semibold my-3'>{item.name}</h3>
          <p>{item.description}</p>
          <button className='p-2 px-6 rounded-lg border-[1px] font-semibold my-5 border-[#0193FA] hover:transition-[0.8s] hover:bg-[#0193FA] hover:scale-[1.1] relative'>Learn More</button>
        </div>
        
      ))}
      </div>
      
    </div>
  )
}

export default Intro