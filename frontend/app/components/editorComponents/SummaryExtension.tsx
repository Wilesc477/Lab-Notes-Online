import { Extension } from '@tiptap/core'

export const SummarySteps = Extension.create({
    name: 'summarySteps',

    addCommands() {
        return {
            insertSummary:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: 'doc',
                            content: [
                                {
                                    type: 'heading',
                                    attrs: { level: 2 },
                                    content: [{ type: 'text', text: 'Summary Steps' }],
                                },
                                {
                                    type: 'orderedList',
                                    content: [
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Step 1' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Step 2:' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Step 3:' }],
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