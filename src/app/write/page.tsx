/*
Page that renders TipTap Editor
*/
import NotebookPage from "../components/editorComponents/NotebookPage"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Write() {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }

    return (
        <div>
            {/* Page editor */}
            < NotebookPage />
        </div>
    )
}