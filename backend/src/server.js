import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

app.use(express.json());

app.listen(ENV.PORT);