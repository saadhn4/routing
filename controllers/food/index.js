import express from "express";

const router = express.Router();

router.get("/allfoods", (req, res) => {
  try {
    res.status(200).json({ food: 1 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
