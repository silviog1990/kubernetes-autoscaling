import express from "express";
import { router as indexRouter } from "./routes/index";

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server listen to ${PORT}`);
});

app.use("/", indexRouter);
