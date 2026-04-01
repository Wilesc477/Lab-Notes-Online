import { Extension } from '@tiptap/core'

export const ExperimentDescription = Extension.create({
    name: 'experimentDescription',

    addCommands() {
        return {
            insertDescription:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: 'doc',
                            content: [
                                {
                                    type: 'heading',
                                    attrs: { level: 2 },
                                    content: [{ type: 'text', text: 'Experiment Description' }],
                                },
                                {
                                    type: 'heading',
                                    attrs: { level: 3 },
                                    content: [{ type: 'text', text: 'Chemicals Used' }]
                                },
                                {
                                    type: 'bulletList',
                                    content: [
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Chemical 1:' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Chemical 2:' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Chemical 3:' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'heading',
                                    attrs: { level: 3 },
                                    content: [{ type: 'text', text: 'New Techniques' }]
                                },
                                {
                                    type: 'bulletList',
                                    content: [
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Technique 1' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Technique 2' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Technique 3' }],
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