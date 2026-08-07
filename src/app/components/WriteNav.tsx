/*
Reusable button that navigates to the notebook editing page
*/
"use client"
import Link from 'next/link'
import React from 'react'

const WriteNav = () => {
    return (
        <Link href="/write">
            <button className="btn btn-primary btn-ghost">New Notebook</button>
        </Link>
    )
}

export default WriteNav