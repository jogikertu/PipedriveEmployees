import knex from "knex";
import fileKnexConfigs from "../../../knexConfig";
//"../../../../knexConfig";

type envType = "development" | "production";
const env = (process.env.ENVIRONMENT as envType) ?? "development";

async function createDatabase() {
  const knexConfig = fileKnexConfigs[env];
  const dbName = knexConfig.connection.database;
  knexConfig.connection.database = undefined;

  const knexInstance = knex(knexConfig);

  // Check if the database exists
  const exists = await knexInstance
    .select(knexInstance.raw("SCHEMA_NAME"))
    .from("information_schema.SCHEMATA")
    .where("SCHEMA_NAME", dbName);

  if (exists.length === 0) {
    // If database doesn't exist, create it
    await knexInstance.raw(`CREATE DATABASE ${dbName}`);
    console.log("✅ Database created");
  } else {
    console.log("❌ Database already exists");
  }

  process.exit(0);
}

createDatabase();
