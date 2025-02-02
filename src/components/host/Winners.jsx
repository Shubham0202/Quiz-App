import React from 'react'

const Winners = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <div className="grid place-items-center">
                <h1 className='text-white font-bold text-4xl py-4'>Quizzeee</h1>
                <h2 className='bg-white w-fit px-4 py-2 rounded font-bold'>Quiz name</h2>
            </div>
            <div className="winners-bars px-4 sm:p-0 flex items-end justify-center gap-1">

                <div className="winner-bar w-full sm:w-auto flex items-center flex-col">
                    <div className="avatar w-10 h-10 border"></div>

                    <div className="bar shadow shadow-black bg-blue-800 px-2 py-4 rounded w-full sm:w-52 h-64 grid place-items-center text-white">
                        <div className="grid-protector text-center">
                            <div class="pentagon rotate-180 w-[80px] h-[80px] bg-gray-500 grid place-items-center"><span className='rotate-180 font-bold text-2xl'>2</span></div>
                            <p className="player-name text-2xl font-bold my-2">Shubh</p>
                            <p className="score font-bold">0</p>
                        </div>
                    </div>

                </div>
                <div className="winner-bar w-full sm:w-auto flex items-center flex-col">
                    <div className="avatar w-10 h-10 border"></div>

                    <div className="bar bg-blue-800 px-2 py-4 rounded w-full sm:w-52 h-80 grid place-items-center text-white">
                        <div className="grid-protector text-center">
                            <div class="pentagon rotate-180 w-[80px] h-[80px] bg-amber-500 grid place-items-center"><span className='rotate-180 font-bold text-2xl'>1</span></div>
                            <p className="player-name text-2xl font-bold my-2">Shubh</p>
                            <p className="score font-bold">0</p>
                        </div>
                    </div>

                </div>
                <div className="winner-bar w-full sm:w-auto flex items-center flex-col">
                    <div className="avatar w-10 h-10 border"></div>

                    <div className="bar bg-blue-800 px-2 py-4 rounded w-full sm:w-52 h-56 grid place-items-center text-white">
                        <div className="grid-protector text-center">
                            <div class="pentagon rotate-180 w-[80px] h-[80px] bg-orange-500 grid place-items-center"><span className='rotate-180 font-bold text-2xl'>3</span></div>
                            <p className="player-name text-2xl font-bold my-2">Shubh</p>
                            <p className="score font-bold">0</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Winners