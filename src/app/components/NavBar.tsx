/*
Navigation bar used on Home Page
*/
import Link from 'next/link'
import WriteNav from "./WriteNav"
import LoginBtn from "./LoginBtn"
import React from 'react'

const NavBar = () => {
    return (
        <div id="NavBar" className="navbar bg-base-200 shadow-sm">
            {/* Nav to write page*/}
            <div className="navbar-start">
                <WriteNav />
            </div>

            {/* Website Title*/}
            <div className="navbar-center">
                <h1 className="text-5xl font-bold">Lab Notes+</h1>
            </div>

            {/* Register / Login */}
            <div className="navbar-end">
                <LoginBtn />
            </div>
        </div>
    )
}

export default NavBar