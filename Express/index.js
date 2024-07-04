import express from "express";
import path from "path";
import url from "url";
import {engine} from "express-handlebars";
import apiRoutes from "./routes/api/api.js";
import { members } from "./Members.js";
// import {logger} from './middleware/logger.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars middleware
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const filePath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filePath);

// Static folder
app.use(express.static(path.join(__dirname + "public")));

// Api routes
app.use("/api/members", apiRoutes);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Members App",
    members,
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
