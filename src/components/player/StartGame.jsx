import React from 'react'
import { Link } from 'react-router-dom'

const StartGame = ({placeholderName="Game PIN",buttonName="Enter",redirectionLink='/join'}) => {
 
    return (
        <div className='grid place-items-center h-screen '>
            <div className="wrapper w-full sm:w-auto">

                <h2 className="font-bold text-5xl text-center text-white">Quizee</h2>

                <div className="inputComponent mt-6 bg-white px-5 py-6 rounded-lg w-full sm:w-96 border-4">
                    <input type="text" placeholder={`${placeholderName}`} className="inputField w-full mb-4 px-4 py-3 rounded border-2 hover:border-gray-500 transition-all duration-200" />
                    <Link to={redirectionLink} className="startButton block text-center cursor-default sm:cursor-pointer text-white font-semibold bg-slate-800 w-full px-4 py-3 rounded transition-all duration-200">{buttonName}</Link>
                </div>

            </div>
        </div>
    )
}

export default StartGame
