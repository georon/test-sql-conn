import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

(async () => {
    try {
        dotenv.config();
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'testdb',
            password: process.env.DB_PASSWORD as string
        });

        const [results, fields] = await connection.execute(
            'SELECT * FROM `testtbl` WHERE `active` = ?',
            [1]
        );

        console.log(results);
        console.log(fields);
        await connection.end();
    } catch (err) {
        console.log(err);
    }
})();