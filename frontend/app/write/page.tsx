
import NotebookPage from "../components/NotebookPage"
import { EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { MenuBar } from "../components/EditorMenuBar"
import dynamic from 'next/dynamic'



const Write = () => {
    return (
        <div>
            {/* Page editor */}
            < NotebookPage />
        </div>
    )
}

export default Write