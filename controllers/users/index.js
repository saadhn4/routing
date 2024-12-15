import express from "express";

const router = express.Router();

router.get("/allusers", (req, res) => {
  try {
    res.status(200).json({ users: 1 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
