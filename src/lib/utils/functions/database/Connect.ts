import { AccountSecurity, Developer, ModerationSetting, Roles } from "#lib/utils";
import { DataSource } from "typeorm";

/**
 * The typeORM database setup
 */
export const Database = new DataSource({
	type: "sqlite",
	database: "./storage/database.sqlite",
	entities: [AccountSecurity, Developer, ModerationSetting, Roles],
	logging: false,
	synchronize: true
});

/**
 * Connects to the TypeORM database (sqlite)
 * @returns {Promise<DataSource>} The TypeORM data source
 */
export const Connect = async (): Promise<DataSource> => await Database.initialize();
