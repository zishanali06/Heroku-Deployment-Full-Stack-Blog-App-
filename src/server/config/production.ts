export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_SCHEMA,
        password: process.env.DB_PASS,
        connectionLimit: process.env.DB_CONNECTIONLIMIT
    },
    auth: {
        secret: process.env.SECRET
    },
    stripe: {
        secretapi: process.env.STRIPEAPI
    },
    mailgun: {
        api: process.env.MAILGUNAPI,
        domain: process.env.MAILGUNDOMAIN
    }
}