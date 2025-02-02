import React from 'react'
import SelectAvatar from './SelectAvatar'

const Instructions = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <div className="grid-protector flex items-center flex-col justify-center">
                    {/* when SelectAvatar component is activate add -top-28 into avatar class */}
                <div className="avatar relative border w-20 h-20 rounded">
                    <div className="avatar-img"></div>
                    <div className="edit-icon absolute -top-2 -right-2 w-5 h-5 border"></div>
                </div>
                <div className="player-name text-3xl text-white font-bold my-4">Shubh</div>
                <p className="msg text-white text-xl font-semibold">You're in! See your nickname on screen ?</p>
            </div>
            {/* <SelectAvatar/> */}
        </div>
    )
}

export default Instructions