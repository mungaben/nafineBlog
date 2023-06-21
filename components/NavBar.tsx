import React from 'react'
import Hacks from './Hacks'
import Entertainment from './Entertainment'
import POlitics from './Politics'
import Business from './Business'
import Sports from './Sports'

const NavBar = () => {
    return (
        <nav className='fixed flex w-full md:mt-10  bg-red-600/70 transition delay-200'>
            <div className='z-50 flex items-center justify-center mx-auto md:w-3/4  '>
                <div className='left-0 flex items-center justify-center p-2 pt-0 md:w-1/4 lg:text-5xl md:4xl    m-4 '>
                    <h1 className=' font-Bold lg:tracking-widest   md:mr-0 md:pr-0  '>
                        NaFine
                    </h1>
                    {/* <div className=' lg:border-4 lg:border-slate-100/70 md:h-full   bg-slate-200/70 '>
     <br/>
                    </div> */}
                </div>
                <div className='flex flex-col items-start    pt-2 md:w-3/4 md:flex-row md:ml-10  text-center border-l-4 border-slate-200/70   '>
                    <div className='md:ml-4 mt-10 md:mt-0   md:p-4  hover:bg-slate-200/60 rounded-lg'>
                        <Hacks/>
                    </div>
                    <div className='md:p-4 hover:bg-slate-200/60 rounded-lg'>
                        <Entertainment/>
                    </div>
                    <div className='md:p-4 hover:bg-slate-200/60 rounded-lg'>
                        <POlitics/>
                    </div>
                    <div className='md:p-4 hover:bg-slate-200/60 rounded-lg'>
                        <Business/>
                    </div>
                    <div className='md:p-4 hover:bg-slate-200/60 rounded-lg'>
                        <Sports/>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default NavBar