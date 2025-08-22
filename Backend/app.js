import express from "express";
import { nanoid } from "nanoid";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/create", (req, res) => {
  const { url } = req.body;

  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 5000");
});
