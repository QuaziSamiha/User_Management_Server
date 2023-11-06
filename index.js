const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware adding
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    userName: "John Doe",
    userEmail: "john@example.com",
  },
  {
    id: 2,
    userName: "Jane Smith",
    userEmail: "jane@example.com",
  },
  {
    id: 3,
    userName: "Bob Johnson",
    userEmail: "bob@example.com",
  },
];

app.get("./", (req, res) => {
  res.send("User Management Server is running");
});

// all users fetched from server-------------------
app.get("/users", (req, res) => {
  res.send(users);
});

// new user added to server----------------------
app.post("/users", (req, res) => {
  // console.log(req);
  // console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is running one PORT: ${port}`);
});
