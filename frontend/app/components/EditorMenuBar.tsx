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

    return (
        <div className="control-group">
            <div className="button-group">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={`${editorState.isBold ? 'is-active' : ''} btn`}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={`${editorState.isItalic ? 'is-active' : ''} btn`}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={`${editorState.isStrike ? 'is-active' : ''} btn`}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={`${editorState.isCode ? 'is-active' : ''} btn`}
                >
                    Code
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>Clear marks</button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>Clear nodes</button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`${editorState.isParagraph ? 'is-active' : ''} btn`}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`${editorState.isHeading1 ? 'is-active' : ''}btn`}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`${editorState.isHeading2 ? 'is-active' : ''} btn`}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`${editorState.isHeading3 ? 'is-active' : ''} btn`}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={`${editorState.isHeading4 ? 'is-active' : ''} btn`}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={`${editorState.isHeading5 ? 'is-active' : ''} btn`}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={`${editorState.isHeading6 ? 'is-active' : ''} btn`}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${editorState.isBulletList ? 'is-active' : ''} btn`}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${editorState.isOrderedList ? 'is-active' : ''} btn`}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`${editorState.isCodeBlock ? 'is-active' : ''} btn`}
                >
                    Code block
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`${editorState.isBlockquote ? 'is-active' : ''} btn`}
                >
                    Blockquote
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="btn">Horizontal rule</button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()} className="btn">Hard break</button>
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo} className="btn">
                    Undo
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo} className="btn">
                    Redo
                </button>
            </div>
        </div>
    )
}