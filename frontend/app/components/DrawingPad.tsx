"use client"
import React, { useRef, useEffect, useState } from 'react';

const DrawingPad = () => {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            setContext(ctx);
            // Set initial canvas properties (width, height, background)
            canvas.width = window.innerWidth * 0.8;
            canvas.height = window.innerHeight * 0.7;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, []);

    // Implement drawing event handlers (mousedown, mousemove, mouseup)
    const startDrawing = (e) => {
        setIsDrawing(true);
        if (context) {
            context.beginPath();
            context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
    };

    const draw = (e) => {
        if (!isDrawing || !context) return;
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        if (context) {
            context.closePath();
        }
    };

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            style={{ border: '1px solid black' }}
        />
    );
};

export default DrawingPad;