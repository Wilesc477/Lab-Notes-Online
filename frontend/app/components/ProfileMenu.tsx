"use client"
import Link from 'next/link'
import React from "react"

const ProfileMenu = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="rounded-full">C</div>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    )
}

export default ProfileMenu