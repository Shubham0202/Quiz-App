import { Award, ChevronDown, ChevronLeft, MessageCircleQuestion, Shapes, TimerIcon } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { context } from '../../../context/QuizContextProvider'

const Right = () => {
    const {windowSize} = useContext(context);
    const rightVisibleRef = useRef(null);
    function mobileRightHidder() {
        const pxValue = 215;
        if (rightVisibleRef.current.getAttribute('style') == `transform: translate(${pxValue}px);`)
            rightVisibleRef.current.style = `transform:translate(0px)`
        else
            rightVisibleRef.current.style = `transform:translate(${pxValue}px)`
    }

    useEffect(() => {
        function handleResize() {
            if (windowSize >= 1024)
                rightVisibleRef.current.removeAttribute('style');

        }
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize])

    return (
        <div ref={rightVisibleRef} className='absolute transition-all duration-200 lg:relative right-0 top-0 h-full lg:w-96 bg-white p-3 flex flex-col justify-between'>
            <ChevronLeft onClick={mobileRightHidder} className='lg:hidden absolute top-1/2 -left-14 translate-x-1/2 translate-y-1/2 w-10 h-10 rounded bg-white' />
            <div>
                <div className="block mb-2">

                    <div className="flex gap-1 mb-2">
                        <MessageCircleQuestion />
                        <h3 className='font-bold text-nowrap'>Question type</h3>
                    </div>
                    <div className="border-2 hover:border-black transition-all duration-200 px-2 py-2 rounded flex items-center justify-between">
                        <div className="flex gap-1">
                            <Shapes />
                            <p className='font-semibold'>Quiz</p>
                        </div>
                        <ChevronDown />
                    </div>
                </div>

                <div className="block mb-2">

                    <div className="flex gap-1 mb-2">
                        <TimerIcon />
                        <h3 className='font-bold text-nowrap'>Time limit</h3>
                    </div>
                    <div className="border-2 hover:border-black transition-all duration-200 px-2 py-2 rounded flex items-center justify-between">
                        <div className="flex gap-1">

                            <p className='font-semibold text-nowrap'>20 seconds</p>
                        </div>
                        <ChevronDown />
                    </div>
                </div>
                <div className="block mb-2">

                    <div className="flex gap-1 mb-2">
                        <Award />
                        <h3 className='font-bold text-nowrap'>Points</h3>
                    </div>
                    <div className="border-2 hover:border-black transition-all duration-200 px-2 py-2 rounded flex items-center justify-between">
                        <div className="flex gap-1">

                            <p className='font-semibold'>Standard</p>
                        </div>
                        <ChevronDown />
                    </div>
                </div>
                <div className="block">

                    <div className="flex gap-1 mb-2">
                        <MessageCircleQuestion />
                        <h3 className='font-bold text-nowrap'>Answer option</h3>
                    </div>
                    <div className="border-2 hover:border-black transition-all duration-200 px-2 py-2 rounded flex items-center justify-between">
                        <div className="flex gap-1">

                            <p className='font-semibold'>Single</p>
                        </div>
                        <ChevronDown />
                    </div>
                </div>
            </div>
            <div className='p-2 flex items-center justify-center gap-2'>
                <button className='px-4 py-2 rounded hover:text-white transition-all duration-200 hover:bg-red-400'>Delete</button>
                <button className='px-3 py-2 rounded hover:text-white transition-all duration-200 border hover:bg-slate-500'>Duplicate</button>
            </div>

        </div>


    )
}

export default Right