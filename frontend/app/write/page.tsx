import ToolBar from "../components/ToolBar"
import NotebookPage from "../components/NotebookPage"

const Write = () => {
    return (
        <div>
            <ToolBar />
            {/* Page editor */}
            <div className="flex justify-center h-screen pt-6">
                <NotebookPage />
            </div>
        </div>
    )
}

export default Write