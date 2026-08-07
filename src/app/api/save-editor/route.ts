/*
Internal API for saving and loading database content
Note: Database objects are potentially undefined and should be addressed in production
*/
import { NextResponse } from "next/server"
import { db } from "@/lib/index"
import { usersTable, notebooksTable } from "@/lib/db/schema"
import { auth } from "@/auth"
import { eq, and } from "drizzle-orm"

// get editor content from database
export async function GET(request: Request) {
    const session = await auth()
    if (!session?.user?.name) {
        return NextResponse.json({ status: 401 })
    }
    const user = String(session.user.name)
    const id = (await db.select().from(usersTable).where(eq(usersTable.username, user))).at(0).id
    const title = String(request.headers.get('title'))
    if (title == "null") {
        return NextResponse.json({ message: "undefined" }, { status: 500 })
    }
    const message = (await db.select().from(notebooksTable).where(and(eq(notebooksTable.authorId, id), eq(notebooksTable.title, title)))).at(0)?.content
    console.log("Loaded Content:", message);
    return NextResponse.json({ message: message }, { status: 200 })
}
// save editor content to database
export async function POST(request: Request) {
    const session = await auth()
    if (!session?.user?.name) {
        return NextResponse.json({ status: 401 })
    }
    const user = String(session.user.name)

    const id = (await db.select().from(usersTable).where(eq(usersTable.username, user))).at(0).id
    const { title, content } = await request.json()
    const existing = await db.select().from(notebooksTable).where(and(eq(notebooksTable.title, title), eq(notebooksTable.authorId, id)))
    //console.log("Saved Content:", content)
    if (existing.length > 0) {
        await db.update(notebooksTable).set({ content }).where(and(eq(notebooksTable.title, title), eq(notebooksTable.authorId, id)))
    }
    else {
        await db.insert(notebooksTable).values({
            title: title,
            content: content,
            authorId: id
        })
    }

    return NextResponse.json({ status: 200 })
}