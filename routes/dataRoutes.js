/**
 * @swagger
 * /api/publicapi:
 *   get:
 *     summary: Get data from the public API
 *     description: Get data from a public API with optional filtering by category and limit
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of results to limit the response to
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter the results by
 *     responses:
 *       401:
 *         description: Unauthorized No token provided or Unauthorized Invalid token
 *       200:
 *         description: Successful operation
 */

const express = require("express");
const axios = require("axios");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router.get("/publicapi", verifyToken, async (req, res) => {
  try {
    const { limit, category } = req.query;
    let url = "https://api.publicapis.org/entries";

    if (category) {
      url = url + `?category=${category}`;
    }

    // Fetching data from the public API
    const response = await axios.get(url);

    // If limit is provided, slicing the results array to return only specified number of results
    let responseData = response.data;
    if (limit) {
      responseData.count = limit;
      responseData.entries = responseData.entries.slice(0, parseInt(limit)); // Slice the results array
    }

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
