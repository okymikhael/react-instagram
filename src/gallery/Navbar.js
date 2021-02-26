import React, { Component } from 'react'
import Direct from './Direct'
import Logo from './Logo'
import Search from './Search'

function Navbar() {
    return (
        <div className="w-full px-36 flex flex-wrap justify-around bg-white items-center border-b-2 h-16">
            <Logo/>
            <Search/>
            <Direct />
        </div>
    )
}

export default Navbar