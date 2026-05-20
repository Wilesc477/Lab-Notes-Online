import Form from 'next/form'
import HomeButton from "../components/HomeButton"
import { signIn, auth } from "@/auth"
import { redirect } from 'next/navigation'
import { db } from "@/lib/index"
import { usersTable } from '@/lib/db/schema'
import bcrypt from "bcrypt"

export default async function Login() {
    const session = await auth()
    if (session) {
        redirect("/dashboard")
    }

    async function handleRegister(formdata: FormData) {
        "use server"
        const username = formdata.get("username") as string
        const password = formdata.get("password") as string
        const passhash = await bcrypt.hash(password, 5)
        await db.insert(usersTable).values({
            username: username,
            password: passhash
        })
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
            <Form action={handleRegister} className="bg-base-200 h-3/4 w-1/4 text-center">
                <h1 className="text-4xl font-bold mt-4 mb-4">Register</h1>
                <HomeButton />
                <input type="text" name="username" placeholder="Username" className="w-full text-center mt-4 border" required />
                <input type="password" name="password" placeholder="Password" className="w-full text-center mt-4 border" required />
                <button type="submit" className="btn btn-primary mt-4">Register</button>
            </Form>
        </div>
    )
}

