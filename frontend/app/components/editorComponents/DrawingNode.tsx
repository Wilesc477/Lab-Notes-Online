import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { DrawingNodeView } from './DrawingNodeView'

export const DrawingNode = Node.create({
    name: 'drawing',

    group: 'block',
    atom: true,

    addAttributes() {
        return {
            data: {
                default: null,
            },
        }
    },

    parseHTML() {
        return [{ tag: 'img[src]' }]
    },
    /*
    parseHTML() {
        return [{ tag: 'drawing-node' }]
    },
    */

    renderHTML({ node }) {
        if (!node.attrs.data) {
            return ['div', { class: 'drawing-node-empty' }, '']
        }
        return [
            'img',
            {
                src: node.attrs.data,
                style: 'width:400px;height200px;border:1px solid #ccc;'
            }
        ]
    },
    /*
    renderHTML({ HTMLAttributes }) {
        return ['drawing-node', mergeAttributes(HTMLAttributes)]
    },
    */
    addCommands() {
        return {
            setDrawing:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: this.name,
                            attrs: { data: null },
                        })
                    },
        }
    },

    addNodeView() {
        return ReactNodeViewRenderer(DrawingNodeView)
    },
})
/*
export const DrawingNode = Node.create({
    name: 'drawing',

    group: 'block',
    atom: true, // behaves like a single unit

    addAttributes() {
        return {
            data: {
                default: null,
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'drawing-node',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['drawing-node', mergeAttributes(HTMLAttributes)]
    },

    addCommands() {
        return {
            setDrawing:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: this.name,
                        })
                    },
        }
    },

    addNodeView() {
        return ({ node }) => {
            const container = document.createElement('div')
            container.className = 'p-2 border rounded-md bg-white'

            const canvas = document.createElement('canvas')
            canvas.width = 400
            canvas.height = 200
            canvas.style.border = '1px solid black'

            // Simple drawing logic
            const ctx = canvas.getContext('2d')
            let drawing = false

            canvas.addEventListener('mousedown', () => (drawing = true))
            canvas.addEventListener('mouseup', () => (drawing = false))
            canvas.addEventListener('mousemove', (e) => {
                if (!drawing || !ctx) return

                ctx.lineWidth = 2
                ctx.lineCap = 'round'

                ctx.lineTo(e.offsetX, e.offsetY)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(e.offsetX, e.offsetY)
            })

            container.appendChild(canvas)

            return {
                dom: container,
            }
        }
    },
})
*/