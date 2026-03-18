"use client"
import Link from 'next/link'
import React from "react"

const ProfileMenu = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
                <div className="rounded-full">W</div>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><Link href="/">Logout</Link></li>
            </ul>
        </div>
    )
}

export default ProfileMenu