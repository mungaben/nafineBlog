import React from 'react'
import { mission,ourValues,Commitment} from '@/components/Aboutuscont'

const About = () => {
    const OurMission={
        title:'Mission',
        text:mission[0]
    
    }
    const ourCommitment={
        title:Commitment.title,
        text:Commitment.commitment
    
    }
    const ourValue={
        title:ourValues.title,
        text:ourValues.values
    }
  return (
    <div className=' mt-20 flex-col w-3/5 mx-auto mb-48  h-auto  justify-between space-y-10'>
     <div className=' '>
        {/* ourmission */}
        <div  className=' flex font-bold m-2 '>
            <h1>
                <span>
                    {OurMission.title}
                </span>
            </h1>
        </div>
        <div className=' tracking-wide text-[20px] text-transparent bg-clip-text  font-medium bg-gradient-to-br from-[#010101]/90 via-[#014]/50 to-[#0101010]/40 '>
            <p>
                {OurMission.text}
            </p>
        </div>
     </div>
     <div>
        {/* ourcommitment */}
        <div className=' flex font-bold m-2 '>
            <h1>
                <span>
                    {ourCommitment.title}
                </span>
            </h1>
        </div>
        <div className=' text-[20px]  text-transparent bg-clip-text  font-medium bg-gradient-to-br  from-[#010101]/90 via-[#014]/50 to-[#0101010]/40 '>
            <p>
                {ourCommitment.text}
            </p>
        </div>
     </div>
     <div>
        {/* ourvalue */}
        <div className=' flex font-bold m-2 '>
            <h1>
                <span>
                    {ourValue.title}
                </span>
            </h1>
        </div>
        <div className='text-[20px] text-transparent bg-clip-text  font-medium bg-gradient-to-br from-[#010101]/90 via-[#014]/50 to-[#0101010]/40 '>
            <p>
                {ourValue.text}
            </p>
        </div>
     </div>
     <div>
    <h1>
        <span>
           FAQ
        </span>
    </h1>
    <div className=''>
        <p>
            
        </p>
    </div>
     </div>



    </div>
  )
}

export default About