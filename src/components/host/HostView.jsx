import React from 'react'
import DownsideFunctionality from './DownsideFunctionality'
import AnswerBricks from './AnswerBricks'
import CurrentQuestionResponses from './CurrentQuestionResponses'
import AnswersResponsesPoll from './AnswersResponsesPoll'
import BooleanBricks from './BooleanBricks'

const HostView = () => {
    return (
        <div className='h-screen flex justify-between flex-col'>
            {/* first */}
            <div className="flex items-center justify-between gap-3 p-3">

                <div className="empty"></div>

                <div className="quiz bg-transparent-white rounded px-6 py-2 flex items-center gap-2">
                    <p className='font-bold text-lg'>
                        Seriously private browsing. Firefox automatically blocks 2000+ online trackers from collecting information about what you do online.
                    </p>
                </div>
                <button className='bg-transparent-white font-semibold px-4 py-2 rounded'>Next</button>
            </div>
            {/* middle */}
            <div className="h-full grid place-items-center overflow-y-scroll">

                <div className="player-wrapper w-full px-6">
                    {/* components */}
                    {/* <CurrentQuestionResponses/> */}
                    <AnswersResponsesPoll/>
                </div>

            </div>
            {/* end */}
            <div className="end">
                {/* <AnswerBricks/> */}
                <BooleanBricks/>
                <DownsideFunctionality />
            </div>
        </div>
    )
}

export default HostView