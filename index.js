import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({status: "ok"})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});