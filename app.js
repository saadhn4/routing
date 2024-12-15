import express from "express";
import adminsRouter from "./controllers/admins/index.js";
import foodsRouter from "./controllers/food/index.js";
import usersRouter from "./controllers/users/index.js";

const app = express();
const PORT = 5002;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "hello world" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.use("/adminsapi", adminsRouter);
app.use("/foodsapi", foodsRouter);
app.use("/usersapi", usersRouter);

app.listen(PORT, () => {
  console.log(`server is up and running at ${PORT}`);
});
