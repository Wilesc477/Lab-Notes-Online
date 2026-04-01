import type { Editor } from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import React from 'react'
import { menuBarStateSelector } from './EditorMenuState'

export const MenuBar = ({ editor }: { editor: Editor | null }) => {

    if (!editor) {
        return null
    }

    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
    })

    const handleExportPDF = async () => {
        const html = editor.getHTML()

        const res = await fetch('/api/export-pdf', {
            method: 'POST',
            body: JSON.stringify({ html }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        let name = document.getElementById("notebook-name").value.trim()
        if (name == "") {
            name = "New Notebook"
        }
        a.download = `${name}`
        a.click()
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={`${editorState.isBold ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={`${editorState.isItalic ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={`${editorState.isStrike ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={`${editorState.isCode ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Code
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="btn btn-neutral">Clear marks</button>
                <button onClick={() => editor.chain().focus().clearNodes().run()} className="btn btn-neutral">Clear nodes</button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`${editorState.isParagraph ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`${editorState.isHeading1 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`${editorState.isHeading2 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`${editorState.isHeading3 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={`${editorState.isHeading4 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={`${editorState.isHeading5 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={`${editorState.isHeading6 ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${editorState.isBulletList ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${editorState.isOrderedList ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`${editorState.isCodeBlock ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Code block
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`${editorState.isBlockquote ? 'is-active btn-primary' : 'btn-neutral'} btn`}
                >
                    Blockquote
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="btn btn-neutral">Horizontal rule</button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()} className="btn btn-neutral">Hard break</button>
                <button onClick={() => editor.chain().focus().setDrawing().run()} className="btn btn-neutral">Notepad</button>
                <button onClick={() => editor.chain().focus().insertTable().run()} className="btn btn-neutral">fmt:Contents</button>
                <button onClick={() => editor.chain().focus().insertSafety().run()} className="btn btn-neutral">fmt:Safety</button>
                <button onClick={() => editor.chain().focus().insertDescription().run()} className="btn btn-neutral">fmt:Description</button>
                <button onClick={() => editor.chain().focus().insertSummary().run()} className="btn btn-neutral">fmt:Summary</button>
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo} className="btn btn-neutral">
                    Undo
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo} className="btn btn-neutral">
                    Redo
                </button>
                <button onClick={handleExportPDF} className="btn btn-neutral">
                    Export PDF
                </button>
            </div>
        </div>
    )
}