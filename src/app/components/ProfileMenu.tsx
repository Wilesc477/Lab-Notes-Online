/*
Profile dropdown on dashboard page
only features logout option; may be expanded to allow for user specific customization or account deletion later
*/
import Link from 'next/link'
import React from "react"
import { signOut } from "@/auth"

const ProfileMenu = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
                <div className="rounded-full">Profile</div>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                    <form action={async () => {
                        "use server"
                        await signOut({
                            redirectTo: "/"
                        })
                    }}
                    >
                        <button type="submit">Logout</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default ProfileMenu