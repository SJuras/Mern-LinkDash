const Express = require("express");
const app = Express();


// server setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
