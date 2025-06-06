const router = require("express").Router();
const isAuthenticated = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, (req, res) => {
  console.log("-----------Logged in User Details----------------", req.user);

  res.status(200).json([
    {
      name: "Television",
      price: 10000,
    },
    {
      name: "samsung",
      price: 120000,
    },
    {
      name: "HP Laptop",
      price: 69000,
    },
  ]);
});

module.exports = router;
