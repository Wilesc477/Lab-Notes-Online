/*
TipTap Extension for Lab Safety Rules template
*/
import { Extension } from '@tiptap/core'

export const LabSafetyRules = Extension.create({
    name: 'labSafety',

    addCommands() {
        return {
            insertSafety:
                () =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: 'doc',
                            content: [
                                {
                                    type: 'heading',
                                    attrs: { level: 2 },
                                    content: [{ type: 'text', text: 'Lab Safety Rules' }],
                                },
                                {
                                    type: 'paragraph',
                                    content: [{
                                        type: 'text',
                                        text: 'Violations of the following lab rules may result in loss of points and/or dismissal from the experiment. Dismissal from the experiment results in zeros for all associated assignments, including the lab notebook and lab report.'
                                    }]
                                },
                                {
                                    type: 'orderedList',
                                    content: [
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Safety Rule 1' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Safety Rule 2' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'listItem',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [{ type: 'text', text: 'Safety Rule 3' }],
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