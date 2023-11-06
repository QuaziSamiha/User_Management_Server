const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("User Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  //   console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is running on PORT: ${port}`);
});
