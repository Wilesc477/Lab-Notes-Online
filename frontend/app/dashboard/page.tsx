import NavBar from "../components/NavBarDash"

export default function Dashboard() {
    return (
        <main>
            <NavBar />
            <div className=" flex justify-center bg-base-100 min-h-screen">
                <h2 className="text-2xl m-4">No Notebooks</h2>
            </div>
        </main >
    );
}
