import { Config } from "./config.type";

const appConfig: Config = {
  nest: {
    port: 4000,
  },

  cors: {
    enabled: true,
  },

  swagger: {
    enabled: true,
    title: "MY NEST API",
    description: "MY NEST API DOCUMENTATION",
    version: "1.5",
    path: "/api",
  },

  security: {
    expiresIn: "12h",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
    JWT_ACCESS_SECRET: "JWT_ACCESS_SECRET",
  },
};

export default (): Config => appConfig;
