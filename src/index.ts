import express, { Request, Response } from 'express';
import cors from 'cors';
import { env } from '../env';
const PORT = env.PORT;
import db from './config/dbConfig';

const app = express();
app.use(cors());
app.use(express.json());
db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Db connection working")
});
app.listen(PORT, () => {
    console.log("servidor rodando na porta ", + PORT)
})



