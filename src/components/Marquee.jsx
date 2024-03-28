import React from 'react'
import '../App.css'
import Brands from './Brands'

export default function Marguee() {
    return (
        <>
            {/* Start block */}
            <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16  ">
                    <div className="dark:text-gray-400 whitespace-nowrap marquee h-10 gap-8">
                        <div className='marqueeone mr-8 grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6'>
                            <Brands />
                        </div>
                        <div className='marqueetwo grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6'>
                            <Brands />
                        </div>
                        <div className='marqueethree grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6'>
                            <Brands />
                        </div>
                        <div className='marqueefour grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6'>
                            <Brands />
                        </div>
                    </div>
                </div>
            </section>
            {/* End block */}
        </>
    )
}
