import React from 'react'
import DrawingPad from "../components/DrawingPad"

const Draw = () => {
    return (
        <main>
            <h1 className="text-4xl text-center font-bold">Draw Page</h1>
            <div className="flex justify-center items-center h-screen">
                <DrawingPad />
            </div>
        </main>
    )
}

export default Draw