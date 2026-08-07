/*
Creates and Updates TipTap Editor Instance on Notebook Editor page
*/
'use client'
import './EditorStyles.module.scss'
import { TextStyleKit } from '@TipTap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import type { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { useSearchParams } from "next/navigation"
import { MenuBar } from './EditorMenuBar'
import HomeButton from "../HomeButton"
import { DrawingNode } from "./DrawingNode"
import { TableOfContents } from "./TOCExtension"
import { LabSafetyRules } from './SafetyExtension'
import { ExperimentDescription } from "./DescriptionExtension"
import { SummarySteps } from "./SummaryExtension"

const extensions = [TextStyleKit, StarterKit, DrawingNode, TableOfContents, LabSafetyRules, ExperimentDescription, SummarySteps]

const NotebookEditor = () => {
    const searchParams = useSearchParams()
    const title = searchParams.get("title")
    const [content, setContent] = useState('')

    const editor = useEditor({
        extensions: extensions,
        content: "",
        injectCSS: false,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: 'prose bg-base-300 border border-base-200 rounded-md focus:outline-none focus:border-accent w-[816px] overflow-hidden'
            }
        }
    })

    React.useEffect(() => {
        if (!editor || !title) return

        const fetchContent = async () => {
            const result = await fetch('/api/save-editor', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'title': String(title),
                }
            })

            const data = await result.json()
            console.log(typeof data.message)
            if (data.message) {
                editor.commands.setContent(data.message)
            }
        }

        fetchContent()
    }, [editor, title])

    if (!editor) {
        return null;
    }
    return (
        <>
            <ToolBar editor={editor} />
            <div className="flex justify-center pt-6 min-h-0">
                <EditorContent editor={editor} />
            </div>
        </>
    )
}

const ToolBar = ({ editor }: { editor: Editor }) => {
    const title = useSearchParams().get("title")
    const [name, setName] = useState(title || "");

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
            <div className="flex justify-center">
                <div className="bg-base-200 w-7/8 rounded-3xl">
                    <MenuBar editor={editor} />
                </div>
            </div>
        </div>

    )
}

export default NotebookEditor