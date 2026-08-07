/*
Content of TipTap Drawing Node
Creates and saves information from Modal
*/
'use client'

import { NodeViewWrapper } from '@tiptap/react'
import React, { useState } from 'react'
import { CanvasModal } from './CanvasModal'

export const DrawingNodeView = ({ node, updateAttributes }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <NodeViewWrapper contentEditable={false}>
            <div className="border p-2 w-[420px]">

                {/* Preview Canvas */}
                {node.attrs.data ? (
                    <img
                        src={node.attrs.data}
                        className="border bg-accent"
                        width={400}
                        height={200}
                    />
                ) : (
                    <div className="text-white">Click to draw</div>
                )}

                <button
                    onClick={() => setOpen(true)}
                    className="text-white mt-2 px-2 py-1 border rounded"
                >
                    {node.attrs.data ? 'Edit' : 'Draw'}
                </button>

                {open && (
                    <CanvasModal
                        initialImage={node.attrs.data}
                        onClose={() => setOpen(false)}
                        onSave={(dataUrl) => {
                            updateAttributes({ data: dataUrl })
                            setOpen(false)
                        }}
                    />
                )}
            </div>
        </NodeViewWrapper>
    )
}