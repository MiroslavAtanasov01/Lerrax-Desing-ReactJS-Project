module.exports = {
    development: {
        port: process.env.PORT,
        databaseUrl: process.env.DATABASE_URL,
        cookie: process.env.COOKIE
    },
    production: {}
};