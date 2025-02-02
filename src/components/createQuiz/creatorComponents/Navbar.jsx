import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-white flex items-center justify-between px-3 py-2'>
            <div className="flex items-center gap-2">
                <h2 className="web-name font-bold text-2xl">Quizeee</h2>
                <div className="title-quiz-setting flex items-center border-2 w-fit px-2 rounded">
                    <input className='py-2 outline-none' type="text" placeholder='Enter Quiz title' />
                    <Link to={'settings'}>
                    <button className='bg-gray-100 px-2 py-1 rounded font-semibold'>Settings</button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-blue-400 text-white px-4 py-2 rounded font-semibold">🎨Themes</button>
                <div className="">
                    <button className="mr-2 bg-red-100 hover:bg-red-500 hover:text-white transition-all duration-200 px-6 py-2 rounded font-semibold">Exit</button>
                    <button className="bg-green-100 hover:bg-green-500 hover:text-white transition-all duration-200 px-6 py-2 rounded font-semibold">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar