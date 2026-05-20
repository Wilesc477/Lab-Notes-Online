import NavBar from "../components/NavBarDash"
import Link from "next/link"
import { eq } from "drizzle-orm"
import { db } from '@/lib/index'
import { notebooksTable, usersTable } from "@/lib/db/schema"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"
import ListNotebooks from "../components/listNotebooks"

export default async function Dashboard() {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }
    const name = session.user.name as string;
    const user = (await db.select().from(usersTable).where(eq(usersTable.username, name))).at(0);
    const notebooks = await db.select().from(notebooksTable).where(eq(notebooksTable.authorId, user.id))
    return (
        <main>
            <div className="w-screen">
                <NavBar />
                <div className="flex flex-col justify-center bg-base-100 min-h-screen max-w-full">
                    <h1 className="flex justify-center text-2xl m-4">{user.username}'s Notebooks</h1>
                    <ul className="grid grid-cols-3 gap-4 justify-items-center">
                        <ListNotebooks notebooks={notebooks} />
                    </ul>
                </div>
            </div>
        </main >
    );
}
