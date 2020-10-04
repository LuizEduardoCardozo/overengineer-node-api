import express, { json } from 'express';
import router from './routes/index';

const app = express();

app.use( json() );
app.use( router );

export default app;
