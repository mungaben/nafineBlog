import React from 'react'
import Hacks from './Hacks'
import Entertainment from './Entertainment'
import POlitics from './Politics'
import Business from './Business'
import Sports from './Sports'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='top-0 flex w-full transition delay-200 bg-red-600/70'>
            <div className='z-50 flex items-center justify-center mx-auto md:w-3/4 '>
                <div className='left-0 flex items-center justify-center p-2 pt-0 m-4 md:w-1/4 lg:text-5xl md:4xl '>
                    <Link href={'/'}>
                    
                    <h1 className=' font-Bold lg:tracking-widest md:mr-0 md:pr-0'>
                        NaFine
                    </h1>
                    </Link>
                  
                    {/* <div className=' lg:border-4 lg:border-slate-100/70 md:h-full bg-slate-200/70'>
     <br/>
                    </div> */}
                </div>
                <div className='w-full mx-auto '>

              
                <div className='overflow-hidden sm:flex'>
                    <div className='mt-10 rounded-lg md:ml-4 md:mt-0 md:p-4 hover:bg-slate-200/60'>
                        <Hacks/>
                    </div>
                    <div className='rounded-lg md:p-4 hover:bg-slate-200/60'>
                        <Entertainment/>
                    </div>
                    <div className='rounded-lg md:p-4 hover:bg-slate-200/60'>
                        <POlitics/>
                    </div>
                    <div className='rounded-lg md:p-4 hover:bg-slate-200/60'>
                        <Business/>
                    </div>
                    <div className='rounded-lg md:p-4 hover:bg-slate-200/60'>
                        <Sports/>
                    </div>

                </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar