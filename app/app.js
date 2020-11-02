const express = require("express");
const bodyParser = require("body-parser");
// const Log = require("winston");
// const helmet = require("helmet");

const app = express();

app.get("/", (req, res) => {
    console.log("coucou");
    res.status(200).send("index"); // TODO: MUST ME FIXED
    //res.render ("index", { title: "Express" }); NOT WORKING
  });

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");


// app.use(helmet());
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, 'index.html')));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // Handle 404
// app.use((res) => res.sendStatus(404));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// app.get("/", (res) => {
//   console.log("Hi");
//   res.sendFile(__dirname.concat("/index.html"));
// })
module.exports = app;
