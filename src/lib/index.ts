/*
Index page for Drizzle DB
Note: Database should be wiped for future testing and developement, most entries are invalid after implementing proper password hashing
*/
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { usersTable, notebooksTable, userView, notebooksView } from './db/schema';
import { sql } from "drizzle-orm"

export const db = drizzle(process.env.DATABASE_URL!);

// display db contents for testing
async function main() {

    const users = await db.select().from(usersTable);
    console.log('Getting all users ', users)

    const notebooks = await db.select().from(notebooksTable);
    console.log('Getting all notebooks', notebooks)

}

main()
