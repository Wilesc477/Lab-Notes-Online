'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import HomeButton from "./HomeButton"


const ToolBar = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="sticky top-0 z-50 bg-base-100">
            {/* File Name*/}
            <div className="flex gap-4">
                <HomeButton />
                <div>
                    <input id="notebook-name" type="text" value={name} onChange={handleChange} placeholder="New Notebook" />
                </div>
            </div>
            {/* Tool Bar*/}
            <div className="flex justify-center h-10">
                <div className="bg-base-200 w-7/8 rounded-3xl"></div>
            </div>
        </div>

    )
}

export default ToolBar