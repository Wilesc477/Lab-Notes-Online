import ToolBar from "../components/ToolBar"

const Write = () => {
    return (
        <div>
            <ToolBar />
            {/* Page editor */}
            <div className="flex justify-center h-screen pt-6" id="Document">
                <textarea className="bg-base-300 border border-base-300 rounded-md focus:outline-none focus:border-accent w-1/2" placeholder="Start Writing..." />
            </div>
        </div>
    )
}

export default Write