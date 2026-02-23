import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://cdn.pixabay.com/photo/2016/09/16/19/12/atom-1674878_1280.png" alt="Placeholder Image" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center max-w-md">
            <h2 className="text-4xl font-bold">
              Fast lab notebooks
            </h2>
            <p className="py-6">
              Sign in to create new lab notebooks or access saved lab notebooks
            </p>
          </div>
        </div>
      </div>
    </main >
  );
}
