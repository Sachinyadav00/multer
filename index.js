const express = require("express");
const cookieParser = require("cookie-parser");

const dbConnection = require("./server");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on PORT  : ${process.env.PORT}`);
});
