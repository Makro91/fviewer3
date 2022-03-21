<<<<<<< HEAD
const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/three/build"));
app.use(express.static("node_modules/three/examples/jsm/controls"));
app.use(express.static("node_modules/three/examples/jsm/loaders"));

app.listen(PORT);
console.log(PORT);
console.log("Listening port", PORT);
=======
const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/three/build"));
app.use(express.static("node_modules/three/examples/jsm/controls"));
app.use(express.static("node_modules/three/examples/jsm/loaders"));

app.listen(PORT);
console.log(PORT);
console.log("Listening port", PORT);
>>>>>>> f707a280dc18d77378ceab5e58c6dea4ea6042e2
