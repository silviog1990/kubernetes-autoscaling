import express, { Request, Response, NextFunction } from "express";
import os from "os";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  let r = 0;
  const iteration = 999999;
  for (let index = 0; index < iteration; index++) {
    // niente
    const n = Math.random() * 1000;
    r += Math.sqrt(n);
  }
  console.log(r);
  res.send(os.hostname());
});

export { router };
