/*
Creates TipTap Node in Notebook Document
*/
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