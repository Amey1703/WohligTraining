import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDoc = YAML.load("./swagger.yaml");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

let users = [
  { id: 1, name: "John Wick", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Jim Brown", email: "jim@example.com" },
];

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  try {
    if (users.length > 0) {
      res
        .status(200)
        .json({ succes: true, message: "Users found!", users: users });
    }
  } catch (error) {
    res.status(404).json({ succes: false, message: "User not available" });
  }
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const found = users.find((user) => user.id === userId);
  if (found) {
    return res
      .status(200)
      .json({ succes: true, message: "User found", found: found });
  } else {
    res
      .status(404)
      .json({ succes: false, message: `User of Id ${userId} not found.` });
  }
});

app.post("/users", (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ succes: false, message: "Forgot to enter name/email" });
    }

    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
    };
    users.push(newUser);
    res
      .status(201)
      .json({ succes: true, message: "User created", user: newUser });
  } catch (error) {
    res.status(404).json({ succes: false, message: "Something went wrong" });
  }
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const found = users.find((user) => user.id === userId);
  if (!found) {
    return res
      .status(404)
      .json({ succes: false, message: `User of Id ${userId} not found.` });
  }

  const updatedUser = req.body;
  users = users.map((user) =>
    user.id === userId ? { ...user, ...updatedUser } : user
  );

  res
    .status(200)
    .json({ succes: true, message: "User updated", user: updatedUser });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const found = users.some(user => user.id === userId)

    if(found){
        const foundmember = users.filter(user => user.id !== userId)
        res.status(203).json({success: true, message: "User deleted", data: foundmember})
    }else{
        res.status(400).json({success: false, error: `No member with the id of ${userId}`})
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
