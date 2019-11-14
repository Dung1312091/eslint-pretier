const express = require("express");
const app = express();
function mutiply(a,c) {
  return a + c;
}
mutiply();
app.listen(3100, ()=>{
  console.log("server is running");
});