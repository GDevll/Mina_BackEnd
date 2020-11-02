const winston = require("winston");
const http = require("http");
const config = require("../config/config");

const Log = winston.createLogger({
  level: "info",
  color: "blue",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  Log.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      colors: winston.format.colorize(),
    }),
  );
}

const app = require("../app/app");

// eslint-disable-next-line prefer-destructuring
const port = config.main.port;
app.set("port", port);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello World!");
//   res.end();
// });
const server = http.createServer(app);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      Log.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      Log.error(`Port ${port} is already in use`);
      process.exit(1);
      break;

    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address()
  Log.info(`Listening on ${addr.addr}:${addr.port}`)
}

server.listen(port, config.main.listenOn);

server.on("error", onError);
server.on("listening", onListening);
