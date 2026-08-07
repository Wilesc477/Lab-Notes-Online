/*
Modal used to create drawings for notebooks
*/
'use client'

import React, { useEffect, useRef, useState } from 'react'

export const CanvasModal = ({ initialImage, onClose, onSave }: any) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [drawing, setDrawing] = useState(false)
    const history = useRef<string[]>([])
    const historyStepRef = useRef(-1)

    const clearCanvas = () => {
        const ctx = canvasRef.current?.getContext('2d')
        ctx?.clearRect(0, 0, 400, 200)
        saveState()
    }

    const undoDraw = () => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (!canvas || !ctx) return
        if (historyStepRef.current <= 0) return
        historyStepRef.current--

        const img = new Image()
        img.src = history.current[historyStepRef.current]
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0)
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'

        // Load previous drawing
        if (initialImage) {
            const img = new Image()
            img.src = initialImage
            img.onload = () => {
                ctx.drawImage(img, 0, 0)

                saveState()
            }
        }
        else {
            saveState()
        }

    }, [])

    const saveState = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const data = canvas.toDataURL()
        history.current = history.current.slice(0, historyStepRef.current + 1)
        history.current.push(data)
        historyStepRef.current++
    }

    const startDraw = (e: any) => {
        setDrawing(true)
        draw(e)
    }

    const endDraw = () => {
        if (!drawing) return
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (ctx) {
            ctx.beginPath()
        }
        setDrawing(false)
        saveState()
    }

    const draw = (e: any) => {
        if (!drawing) return

        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!ctx || !canvas) return

        const rect = canvas.getBoundingClientRect()
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    }

    const handleSave = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const dataUrl = canvas.toDataURL()
        onSave(dataUrl)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-4 rounded shadow-lg">

                <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="border"
                    onMouseDown={startDraw}
                    onMouseUp={endDraw}
                    onMouseMove={draw}
                    onMouseLeave={endDraw}
                />

                <div className="flex justify-end gap-2 mt-2">
                    <button onClick={onClose} className="btn">
                        Cancel
                    </button>
                    <button onClick={undoDraw} className="btn">
                        Undo
                    </button>
                    <button onClick={clearCanvas} className="btn">
                        Clear
                    </button>
                    <button onClick={handleSave} className="btn btn-info">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}