import Form from 'next/form'
import HomeButton from "../components/HomeButton"
export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Form action="" className="bg-base-200 h-3/4 w-1/4 text-center">
                <h1 className="text-4xl font-bold mt-4 mb-4">Login</h1>
                <HomeButton />
                <input type="text" name="username" placeholder="username" className="w-full text-center mt-4" required />
                <input type="text" name="password" placeholder="password" className="w-full text-center mt-4" required />
                <button type="submit" className="btn mt-4">Submit</button>
            </Form>
        </div>
    )
}

