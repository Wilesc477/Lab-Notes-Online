'use client'
import './EditorStyles.module.scss'
import { TextStyleKit } from '@TipTap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import type { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { MenuBar } from './EditorMenuBar'
import HomeButton from "./HomeButton"

const extensions = [TextStyleKit, StarterKit]

const NotebookEditor = () => {
    const editor = useEditor({
        extensions: extensions,
        injectCSS: false,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
        },
        editorProps: {
            attributes: {
                class: 'prose bg-base-300 border border-base-200 rounded-md focus:outline-none focus:border-accent w-[816px] h-[1056px]'
            }
        }
    })
    if (!editor) {
        return null;
    }
    return (
        <>
            <ToolBar editor={editor} />
            <div className="flex justify-center pt-6">
                <EditorContent editor={editor} />
            </div>
        </>
    )
}

const ToolBar = ({ editor }: { editor: Editor }) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="sticky top-0 z-50 bg-base-100">
            {/* File Name*/}
            <div className="flex gap-4">
                <HomeButton />
                <div>
                    <input id="notebook-name" type="text" value={name} onChange={handleChange} placeholder="New Notebook" />
                </div>
            </div>
            {/* Tool Bar*/}
            <div className="flex justify-center h-10">
                <div className="bg-base-200 w-7/8 rounded-3xl">
                    <MenuBar editor={editor} />
                </div>
            </div>
        </div>

    )
}

export default NotebookEditor