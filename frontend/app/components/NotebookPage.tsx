'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
        },
        content: '<p>Start Typing...</p>',
        injectCSS: false,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose bg-base-300 border border-base-200 rounded-md focus:outline-none focus:border-accent w-screen min-h-screen h-auto'
            }
        }
    })
    return <EditorContent editor={editor} />
}


const NotebookPage = () => {
    return (
        <textarea className="bg-base-300 border border-base-300 rounded-md focus:outline-none focus:border-accent w-1/2" />
    )
}

export default Editor