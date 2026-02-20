const express = require("express");
const router = express.Router();
const db = require("../config/db"); // your DB connection file

// POST /subscriber
router.post("/subscriber", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const sql = "INSERT INTO subscriber (email) VALUES (?)";

    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error("Insert Error:", err);
        return res.status(500).json({ error: err });
      }

      res.status(201).json({
        message: "Subscriber added successfully",
        id: result.insertId
      });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
