const express = require("express");
const bodyParser = require("body-parser");                                            //importing express
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html");
                                                            //sends entire HTML FILE
});
app.post("/", function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1+n2;
  res.send("Answer is "+result);
});



// app.get("/about",function(req, res){
//   res.send("<h1>Dennis Thomas</h1><p>This is a portfolio</p>");// about page
// });
//
//
// app.get("/shape ai",function(req, res){
//   res.send("<h1>Shape Ai</h1><p>This is a portfolio</p>");//some random page
// });


app.listen(3000,function(){
  console.log("Server has started on port 3000")
});                                    // listenning to port no:3000//
