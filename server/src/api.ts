import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import routes from './routes';

const app = express();
// Application-Level Middleware

if (process.env.CORS_ENB === 'true') {
    app.use(
        cors({
            origin: true,
            credentials: true,
        }),
    );
} else {
    app.use(cors());
}

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use('/url', routes.url);

// Start
const PORT = Number(process.env.SERVER_PORT) || 4001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT} ${process.env.CLIENT_URL}`);
});
