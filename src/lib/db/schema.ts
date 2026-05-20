import { sqliteTable, text, sqliteView, integer, uniqueIndex } from "drizzle-orm/sqlite-core"
import { relations, sql } from 'drizzle-orm';

export const usersTable = sqliteTable("usersTable", {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
});

export const notebooksTable = sqliteTable("notebooksTable", {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    content: text('content', { mode: 'json' }).$type<string[]>(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
    authorId: integer('author_id').references(() => usersTable.id),
}, (table) => [
    uniqueIndex('userNotebook').on(table.authorId, table.title),
]);

export const usersRelations = relations(usersTable, ({ many }) => ({
    notebooksTable: many(notebooksTable),
}));

export const notebooksrelations = relations(notebooksTable, ({ one }) => ({
    author: one(usersTable, {
        fields: [notebooksTable.authorId],
        references: [usersTable.id],
    }),
}));

export const userView = sqliteView("user_view").as((qb) => qb.select().from(usersTable));
export const notebooksView = sqliteView("notebook_view").as((qb) => qb.select().from(notebooksTable));