require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { UserModel } = require("./model/UserModel");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(" MongoDB Connection Error:", err);
  });


app.get("/addHoldings", async (req, res) => {
  try {
    const count = await HoldingModel.countDocuments();

    if (count > 0) {
      return res.send("Holdings already exist.");
    }

    const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 3,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "HINDUNILVR",
        qty: 1,
        avg: 2335.85,
        price: 2417.4,
        net: "+3.49%",
        day: "+0.21%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
      },
      {
        name: "ITC",
        qty: 5,
        avg: 202.0,
        price: 207.9,
        net: "+2.92%",
        day: "+0.80%",
      },
      {
        name: "KPITTECH",
        qty: 5,
        avg: 250.3,
        price: 266.45,
        net: "+6.45%",
        day: "+3.54%",
      },
      {
        name: "M&M",
        qty: 2,
        avg: 809.9,
        price: 779.8,
        net: "-3.72%",
        day: "-0.01%",
      },
      {
        name: "RELIANCE",
        qty: 1,
        avg: 2193.7,
        price: 2112.4,
        net: "-3.71%",
        day: "+1.44%",
      },
      {
        name: "SBIN",
        qty: 4,
        avg: 324.35,
        price: 430.2,
        net: "+32.63%",
        day: "-0.34%",
      },
      {
        name: "SGBMAY29",
        qty: 2,
        avg: 4727.0,
        price: 4719.0,
        net: "-0.17%",
        day: "+0.15%",
      },
      {
        name: "TATAPOWER",
        qty: 5,
        avg: 104.2,
        price: 124.15,
        net: "+19.15%",
        day: "-0.24%",
      },
      {
        name: "TCS",
        qty: 1,
        avg: 3041.7,
        price: 3194.8,
        net: "+5.03%",
        day: "-0.25%",
      },
      {
        name: "WIPRO",
        qty: 4,
        avg: 489.3,
        price: 577.75,
        net: "+18.08%",
        day: "+0.32%",
      },
    ];

    await HoldingModel.insertMany(tempHoldings);

    res.send("Holdings added successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding holdings");
  }
});



app.get("/addPositions", async (req, res) => {
  try {
    const count = await PositionModel.countDocuments();

    if (count > 0) {
      return res.send("Positions already exist.");
    }

    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    await PositionModel.insertMany(tempPositions);

    res.send("Positions added successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding positions");
  }
});


app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving order");
  }
});
app.get("/deleteHoldings", async (req, res) => {
  try {
    await HoldingModel.deleteMany({});
    res.send("All holdings deleted!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting holdings");
  }
});

app.post("/api/auth/signup", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "Signup Successful",
      token,
      user,
    });
  } catch (err) {
    console.error("Signup Error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});