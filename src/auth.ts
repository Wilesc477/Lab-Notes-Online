/*
defines authorization and password hashing used in application
Note: Currently OAuth credentials are used but should be switched to email verification or other more secure means in production
*/
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/index"
import { usersTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"
import bcrypt from 'bcrypt'

const credentialsSchema = z.object({
    username: z.string(),
    password: z.string(),
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                username: {
                    type: "text",
                    label: "username",
                },
                password: {
                    type: "password",
                    label: "password"
                },
            },
            authorize: async (credentials) => {
                console.log("Incoming credentials:", credentials)

                const parsed = credentialsSchema.safeParse(credentials)
                if (!parsed.success) {
                    console.log("Validation failed")
                    return null
                }

                const { username, password } = parsed.data
                const users = (await db.select().from(usersTable).where(eq(usersTable.username, username)));
                console.log("DB result:", users)
                const user = users[0]
                if (!user) {
                    console.log("User not found")
                    return null
                }

                const match = await bcrypt.compare(password, user.password)
                if (!match) {
                    console.log("Password mismatch")
                    return null
                }

                console.log("Login success")
                return {
                    id: user.id.toString(),
                    name: user.username,
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    }
})