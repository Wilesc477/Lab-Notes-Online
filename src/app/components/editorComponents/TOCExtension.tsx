import { Extension } from '@tiptap/core'

export const TableOfContents = Extension.create({
    name: 'tableOfContents',

    addCommands() {
        return {
            insertTable:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: 'doc',
                            content: [
                                {
                                    type: 'heading',
                                    attrs: { level: 2 },
                                    content: [{ type: 'text', text: 'Table of Contents' }],
                                },
                                {
                                    type: 'bulletList',
                                    content: [
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Lab Safety Rules' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Experiment Description' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Summary of Steps' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        })
                    },
        }
    },
})