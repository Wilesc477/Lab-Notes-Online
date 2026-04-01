'use client'
import { navigate } from '../actions'
import Form from 'next/form'
import HomeButton from "../components/HomeButton"
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter();
    const handleSubmit = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Form action={navigate} className="bg-base-200 h-3/4 w-1/4 text-center" onKeyDown={handleSubmit}>
                <h1 className="text-4xl font-bold mt-4 mb-4">Login</h1>
                <HomeButton />
                <input type="text" name="username" placeholder="username" className="w-full text-center mt-4 border" required />
                <input type="text" name="password" placeholder="password" className="w-full text-center mt-4 border" required />
                <button type="submit" className="btn mt-4">Submit</button>
            </Form>
        </div>
    )
}

