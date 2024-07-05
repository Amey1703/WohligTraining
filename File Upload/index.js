import path from "path";
import express from "express";
import multer from "multer";

const app = express();
// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
  // res.send('File Uploaded');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
