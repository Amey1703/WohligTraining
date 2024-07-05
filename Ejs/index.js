import express from "express";
import path from "path";
import url from "url";

const port = process.env.PORT || 4000;

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const siteName = "Adidas";
  const searchText = "Search Now";
  const list = ["Products", "Carrers", "Upcoming Events", "New Launch"];
  const cards = [
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content. Like this.",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content. Like this.",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content. Like this.",
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content. Like this.",
    },
  ];

  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    list: list,
    cards: cards,
  });
});

app.get("/blog/:slug", (req, res) => {
  const blogTitle = "Adidas why & how?";
  const blogContent = "It is the best brand for Sports";
  res.sendFile("templates/about.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
