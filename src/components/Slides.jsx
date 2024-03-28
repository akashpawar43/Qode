import React, { useState } from 'react'


export default function Slides({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
    return (
        <div className=' flex flex-row justify-center items-center h-full'>
            <button onClick={prevSlide} className=' text-2xl text-white flex items-center rounded-full p-2 bg-purple-400 h-8 text-center'>{"<"}</button>
            <img className=" px-1 w-[80%] mb-4 rounded-lg lg:mb-0 lg:flex max-h-full" src={images[currentSlide]} alt={`feature image ${currentSlide + 1}`} />
            <button onClick={nextSlide} className=' text-2xl text-white flex items-center rounded-full p-2 bg-purple-400 h-8 text-center '>{">"}</button>
        </div>
    )
}
