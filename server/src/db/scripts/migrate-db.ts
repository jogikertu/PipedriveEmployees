import getKnexInstance from "../knex";

async function migrateDatabase() {
  const knexInstance = getKnexInstance();
  // Drop tables before migrating data to reset db to initial state on every startup
  await knexInstance.migrate.down();
  await knexInstance.migrate.up();

  console.log("✅ Database migrated");
  process.exit(0);
}

migrateDatabase();
