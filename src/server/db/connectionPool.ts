import { Pool } from 'pg';

const createConnectionPool = (): Pool => {
    const user = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const port = Number(process.env.DB_PORT);

    if (!user || !password || !host || !port) {
        throw new Error('Missing database connection information! Cannot create connection pool');
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const sslConfig = isProduction ? {
        ca: process.env.DB_CACERT || require('fs').readFileSync('ca-certificate-database.crt', 'utf8')
    } : false;

    return new Pool({
        host,
        user,
        password,
        port,
        database: 'fpl',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        ssl: sslConfig
    });
};

export { createConnectionPool };
