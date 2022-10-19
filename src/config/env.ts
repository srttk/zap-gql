const schema = {
  type: "object",
  required: ["DATABASE_URL", "PORT"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
    DATABASE_URL: {
      type: "string",
      default: "",
    },
    SERVER_ID: {
      type: "string",
      default: "local",
    },
  },
};

export const envOptions = {
  confKey: "config",
  dotenv: true,
  schema: schema,
  data: process.env,
};

export type ConfigType = {
  PORT: number;
  DATABASE_URL: string;
  SERVER_ID: string;
};
