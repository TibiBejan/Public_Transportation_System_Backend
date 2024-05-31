export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    postgres: {
      host: process.env.POSTGRES_DATABASE_HOST,
      port: parseInt(process.env.POSTGRES_DATABASE_PORT) || 5432,
      database: process.env.POSTGRES_DATABASE_NAME,
      user: process.env.POSTGRES_DATABASE_USER,
      password: process.env.POSTGRES_DATABASE_PASSWORD,
      synchronize: process.env.POSTGRES_DATABASE_SYNCHRONIZE,
    },
  },
});
