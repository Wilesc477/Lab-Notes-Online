import '@tiptap/core'

declare module 'tiptap-pagination-breaks';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        drawing: {
            setDrawing: () => ReturnType
        }

        tableOfContents: {
            insertTable: () => ReturnType
        }

        labSafety: {
            insertSafety: () => ReturnType
        }

        experimentDescription: {
            insertDescription: () => ReturnType
        }

        summarySteps: {
            insertSummary: () => ReturnType
        }
    }
}