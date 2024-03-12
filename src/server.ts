'use strict'

import express, { Express, Request, Response} from "express";
import dotenv from "dotenv";

import { notFound } from "../middleware/404";
import { serverError } from "../middleware/500";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript");
})

app.use("*", notFound);
app.use(serverError);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})

