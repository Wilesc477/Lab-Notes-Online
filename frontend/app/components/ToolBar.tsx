import React from 'react'
import Image from 'next/image'

const ToolBar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100">
            {/* File Name*/}
            <div className="flex gap-4">
                <Image src="/Open-Book--Streamline-Flex.png" alt="Open Book" width={50} height={20} className="flex flex-none" />
                <p className="flex flex-none py-4">New Notebook</p>
            </div>
            {/* Tool Bar*/}
            <div className="flex justify-center h-10">
                <div className="bg-base-200 w-7/8 rounded-3xl"></div>
            </div>
        </div>

    )
}

export default ToolBar