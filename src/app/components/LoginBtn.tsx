"use client"
import Link from 'next/link'
import React from "react"

const ProfileMenu = () => {
    return (
        <div className="dropdown dropdown-end">
            <Link href="/login">
                <div tabIndex={0} role="button" className="btn">
                    <div className="rounded-full">Register/Login</div>
                </div>
            </Link>
        </div>
    )
}

export default ProfileMenu