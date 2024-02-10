import express, { NextFunction } from "express";
import { engine } from 'express-handlebars';
import { createServer } from "node:http";
import fs from "fs";
import * as dotenv from "dotenv";
import * as admin from 'firebase-admin';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyBJdLYa4olp-Dfina4k-xmzXj0HUbm5hOQ",
  authDomain: "blasterhacks-4bafc.firebaseapp.com",
  projectId: "blasterhacks-4bafc",
  storageBucket: "blasterhacks-4bafc.appspot.com",
  messagingSenderId: "221887971719",
  appId: "1:221887971719:web:0429c692f85bd7c7d9d322",
  measurementId: "G-0MBSGDVNYY"
};

//const analytics = getAnalytics(app);

const DEBUG = process.env.NODE_ENV !== "production";
const MANIFEST: Record<string, any> = DEBUG ? {} : JSON.parse(fs.readFileSync("static/.vite/manifest.json").toString())

const app = express();
const server = createServer(app);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
});

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




