import express, { NextFunction } from "express";
import { engine } from 'express-handlebars';
import { createServer } from "node:http";
import { Server } from "socket.io"
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

const DEBUG = process.env.NODE_ENV !== "production";
const MANIFEST: Record<string, any> = DEBUG ? {} : JSON.parse(fs.readFileSync("static/.vite/manifest.json").toString())

const app = express();
const server = createServer(app);
const io = new Server(server);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('msg', (data) => {
    const currentTime = new Date().toLocaleTimeString();
    if (data.message) {
      data.timestamp = currentTime
      io.emit('message', data);
    }
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

if (!DEBUG) {
  app.use(express.static('static'));
} else {
  app.use((req, res, next) => {
    if (req.url.includes(".")) {
      res.redirect(`${process.env.ASSET_URL}${req.url}`)
    } else {
      next();
    }
  });
}


console.log(MANIFEST);
app.get("/", (req, res) => {
  res.render('index', {
    debug: DEBUG,
    jsBundle: DEBUG ? "" : MANIFEST["src/main.jsx"]["file"],
    cssBundle: DEBUG ? "" : MANIFEST["src/main.jsx"]["css"][0],
    assetUrl: process.env.ASSET_URL || "http://localhost:5173",
    layout: false
  });
});

app.post("/auth", (req, res) => {
  var request = req.body
  var username = request['uname']
  var password = request['pass']

  console.log(password)
  res.send({
    "response": "authentication"
  });
})

server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.ASSET_URL?.split(":5173")[0]}:${process.env.PORT}...`);
});




