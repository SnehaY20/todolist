require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
  
   
 
 res.render("list", {
  listTitle: day, newListItems: items
 });
 
});
app.post("/", function(req, res){

  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  
});
app.get("/work", function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});
app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.get("/about", function(req, res){
  res.render("about");
});
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
