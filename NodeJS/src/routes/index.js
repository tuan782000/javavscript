import express from "express";
import user from "./user.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("<h1>Hello</h1>");
});

// api user
router.use("/api/v1/user", user);
// api....

export default router;
