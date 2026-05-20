ALTER TABLE `notebooks` RENAME TO `notebooksTable`;--> statement-breakpoint
ALTER TABLE `users` RENAME TO `usersTable`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_notebooksTable` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP),
	`author_id` integer,
	FOREIGN KEY (`author_id`) REFERENCES `usersTable`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_notebooksTable`("id", "title", "content", "createdAt", "updatedAt", "author_id") SELECT "id", "title", "content", "createdAt", "updatedAt", "author_id" FROM `notebooksTable`;--> statement-breakpoint
DROP TABLE `notebooksTable`;--> statement-breakpoint
ALTER TABLE `__new_notebooksTable` RENAME TO `notebooksTable`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
DROP INDEX `users_username_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `usersTable_username_unique` ON `usersTable` (`username`);--> statement-breakpoint
DROP VIEW `notebook_view`;--> statement-breakpoint
DROP VIEW `user_view`;--> statement-breakpoint
CREATE VIEW `notebook_view` AS select "id", "title", "content", "createdAt", "updatedAt", "author_id" from "notebooksTable";--> statement-breakpoint
CREATE VIEW `user_view` AS select "id", "username", "password" from "usersTable";