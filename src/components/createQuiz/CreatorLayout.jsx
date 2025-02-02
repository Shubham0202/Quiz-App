import React from 'react'
import { Outlet } from 'react-router-dom'

const creatorLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default creatorLayout