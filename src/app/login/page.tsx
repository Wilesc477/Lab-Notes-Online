/*
Login page where users can login or be redirected to register a new account
Note: Due to form formatting there is an error when users enter information using enter key instead of pressing login button
Note: Page throws an error on invalid login information, would be best to instead show an error message
*/
import Form from 'next/form'
import HomeButton from "../components/HomeButton"
import { signIn, auth } from "@/auth"
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Login() {
    const session = await auth()
    if (session) {
        redirect("/dashboard")
    }

    async function handleSignIn(formdata: FormData) {
        "use server"
        const username = formdata.get("username") as string
        const password = formdata.get("password") as string
        const result = await signIn("credentials", {
            username,
            password,
            redirect: false,
        })

        if (result) {
            redirect("/dashboard")
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Form action={handleSignIn} className="bg-base-200 h-3/4 w-1/4 text-center">
                <h1 className="text-4xl font-bold mt-4 mb-4">Login</h1>
                <HomeButton />
                <input type="text" name="username" placeholder="Username" className="w-full text-center mt-4 border" required />
                <input type="password" name="password" placeholder="Password" className="w-full text-center mt-4 border" required />
                <button type="submit" className="btn btn-primary mt-4">Sign In</button>
                <Link className="btn btn-secondary mt-4" href="/register">Don't Have an account? Sign Up</Link>
            </Form>
        </div>
    )
}

