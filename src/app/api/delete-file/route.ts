import { NextResponse } from "next/server"
import { db } from "@/lib/index"
import { usersTable, notebooksTable } from "@/lib/db/schema"
import { auth } from "@/auth"
import { eq, and } from "drizzle-orm"

export async function POST(request: Request) {
    const session = await auth()
    if (!session?.user?.name) {
        return NextResponse.json({ status: 401 })
    }
    const user = String(session?.user.name)
    const id = (await db.select().from(usersTable).where(eq(usersTable.username, user))).at(0).id
    const { title } = await request.json()
    if (title == "null") {
        return NextResponse.json({ message: "undefined" }, { status: 500 })
    }
    await db.delete(notebooksTable).where(and(eq(notebooksTable.title, title), eq(notebooksTable.authorId, id)))
    return NextResponse.json({ status: 200 })
}