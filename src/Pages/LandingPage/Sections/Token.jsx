import React from 'react'
import yeild from '../../../assets/yeild.png'
import gov from '../../../assets/gov.png'
import pro from '../../../assets/pro.png'
import reward from '../../../assets/reward.png'
import token from '../../../assets/benztoken.png'
import bg1 from '../../../assets/Vector1.png'
import bg2 from '../../../assets/Vector2.png'

function Token() {
  const feature = [
    { 
      id: 1, 
      img: yeild, 
      name: (<>Yield farming <br /> reward</>),
   },
   { 
    id:2, 
      img: gov, 
      name: (<>Reward for <br /> liquidity providers</>), 
    },
    { 
      id:3, 
      img: pro, 
      name: 'Governance token', 
    },
    { 
      id:4, 
      img: reward, 
      name: (<>BenzSwap protocol <br /> transaction fee</>), 
    }
  ]
  return (
     <div className='lg:px-[12rem] px-[2rem] py-[5rem] bg-[#1a1d21] text-white relative'>
      <img src={bg2} alt="" className='absolute top-0  right-8 w-[1000px]' />
      <img src={bg1} alt="" className='absolute top-[-100px] left-8 w-[1000px]' />
      
      <div className="header text-center m-auto flex flex-col justify-center items-center">
        <h2 className='text-3xl font-bold'>The $BENZ <span className='text-[#0193FA]'>Token</span></h2>
        <p className='my-[25px] lg:w-[600px] w-[90%]'>
          $BENZ token is the native token of the BenzSwap protocol. 
          It will serve as the utility token that powers 
          everyactivities within the BenzSwap protocol
        </p>
      </div>
      <div className="gradient-border-box grid lg:grid-cols-3 grid-cols-2 gap-7 gap-y-[3rem] lg:p-20 p-5 bg-[#212226] rounded-2xl align-top items-start">
      {feature.map(item => (
        <div key={item.id} className="body lg:w-[450px] w-[100%] h-[13rem] flex flex-col justify-evenly">
          <div className="">
            <img src={item.img} alt=""  className="img bg-[#52585c] lg:w-[80px] w-[50px] lg:p-5 p-2 rounded-full"/>
            <h3 className='lg:text-xl text-base font-semibold my-3'>{item.name}</h3>
          </div>

          <div className="">
            <button className='lg:p-2 p-1 lg:px-6 px-2 rounded-lg border-[1px] lg:text-base text-sm font-semibold border-[#0193FA] hover:transition-[0.8s] hover:bg-[#0193FA] hover:scale-[1.1] relative'>Learn More</button>
          </div>
        </div>
        
      ))}
      <div className="lg:w-[400px] hidden lg:block">
        <img src={token} alt="" className='' />
      </div>
      </div>
      
    </div>
  )
}

export default Token