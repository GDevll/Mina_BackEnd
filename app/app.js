const express = require("express");
const bodyParser = require("body-parser");
// const Log = require("winston");
// const helmet = require("helmet");

const app = express();


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");


// app.use(helmet());

// app.use(express.static(path.join(__dirname, 'index.html')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Handle 404
app.use((res) => res.sendStatus(404));

// catch 404 and forward to error handler

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
