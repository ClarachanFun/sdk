import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.listen(3001, () => {
  console.log("API running on :3001");
});
