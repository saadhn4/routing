import express from "express";

const router = express.Router();

router.get("/alladmins", (req, res) => {
  try {
    res.status(200).json({ admin: 1 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
