const express = require('express');
const app = express();

function mutiply(a, c) {
  console.log('aaaaa');
  return a + c;
}
mutiply();
app.listen(3100, () => {
  console.log('server is running 121');
});
