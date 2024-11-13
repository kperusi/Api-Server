const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  { id: 2, name: "Peter alice", email: "peter@yahoo.com" },
  { id: 3, name: "Jessica", email: "Jessica@example.com" },
  { id: 4, name: "Adamson", email: "adamson@example.com" },
];

app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {id:users.length+1,name:req.body.name,email:req.body.email};
  if(newUser && newUser.name && newUser.email){
      users.push(newUser);
      res.status(200).json({message:'user added successfully '})
  } else {
    res.status(404).json({message:'invalid user'});
  }




  res.json(`${newUser} added successfully`);
  
});
app.listen(port, (err, data) => {
  console.log(data);
});
