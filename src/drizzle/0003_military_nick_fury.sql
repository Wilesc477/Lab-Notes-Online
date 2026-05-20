ALTER TABLE `notebooks` ADD `createdAt` text DEFAULT (CURRENT_TIMESTAMP);--> statement-breakpoint
ALTER TABLE `notebooks` ADD `updatedAt` text DEFAULT (CURRENT_TIMESTAMP);