const express = require("express");
const compression = require("compression");

const { join } = require("path");
const fetch = require("isomorphic-unfetch");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 8793;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const GOOGLE_API_KEY = "AIzaSyDv4sjY05F3Zj4BAojAS3e0tJwwN5WU4BM";

app.prepare().then(() => {
  const server = express();
  
  if (!dev) {
    server.use(compression());
  }

  server.get("/service-worker.js", (req, res) => {
    const filePath = join(__dirname, ".next", req.path);
    return res.sendFile(filePath);
  });

  server.get("/geocode", async (req, res) => {
    const r = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
        req.query.address
      }&key=${GOOGLE_API_KEY}`
    );
    const data = await r.json();
    res.json(
      data.results.map(r => ({
        latitude: r.geometry.location.lat,
        longitude: r.geometry.location.lng
      }))
    );
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
