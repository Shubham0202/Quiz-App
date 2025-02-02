import React from 'react'
import DownsideFunctionality from './DownsideFunctionality'

const Scoreboard = () => {
    return (
        <div className='h-screen flex justify-between flex-col'>

            <div className="flex items-center justify-center py-3">
                <h2 className="text-3xl px-4 py-2 bg-white rounded-lg w-fit">Scoreboard</h2>
            </div>
            {/* middle */}
            <div className="h-full grid place-items-center overflow-y-scroll">

                <div className="player-wrapper w-4/5">
                {/* player */}
                    <div className="player my-2 flex items-center justify-between bg-white m-2 rounded-lg px-4 py-2">

                        <div className="player-info flex items-center gap-2">
                            {/* avatar */}
                            <div className='text-5xl'>👻</div>
                            <h4 className=' font-semibold text-xl'>Shubham</h4>
                        </div>
                        <div className="score-strike flex items-center gap-2">
                            <div className="strike text-2xl">🔥</div>
                            <div className="score font-bold text-lg">985</div>
                        </div>

                    </div>
                {/* player end */}
                </div>

            </div>
            {/* end */}
           <DownsideFunctionality/>
        </div>
    )
}

export default Scoreboard