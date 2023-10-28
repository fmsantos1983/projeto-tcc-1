import express from "express";
import connectToDb from "./database/db.js";
import dotenv from "dotenv";

import routes from "./routes/routes.js";

dotenv.config();

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const path = require('path');

connectToDb();
const app = express();
const port = 30000;

app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => 
  console.log('SERVIDOR INICIADO em http://localhost:30000')    
);

