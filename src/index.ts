import { createApp } from "./app";

async function run() {
  const app = await createApp();

  await app.listen({
    port: app.config.PORT || 3000,
    host: "0.0.0.0",
  });
}

run()
  .then(() => {
    console.info(`Server started`);
  })
  .catch((e) => {
    console.info(`Error starting server !`);
    process.exit(1);
  });
