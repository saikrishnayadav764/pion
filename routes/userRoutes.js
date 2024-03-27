/**
 * @swagger
 * /account/balance:
 *   get:
 *     summary: Getting the Ethereum account balance
 *     description: Retrieving the balance of a specified Ethereum account
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: Ethereum address to retrieve the balance for
 *     responses:
 *       200:
 *         description: Successful balance retrieval
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 address:
 *                   type: string
 *                   description: Ethereum address
 *                 balance:
 *                   type: string
 *                   description: Ethereum account balance in ether
 *       400:
 *         description: Invalid Ethereum address provided
 *       500:
 *         description: Internal server error
 */

const express = require("express");
const router = express.Router();
const { Web3 } = require("web3");
const verifyToken = require("../middleware/verifyToken");
// Initializing web3 with the provider URL

const web3 = new Web3(
  "https://mainnet.infura.io/v3/f2f8377f1c534e3ca6895fdfea912704"
);

router.get("/balance", verifyToken, async (req, res) => {
  try {
    const { address } = req.query;

    // Validating Ethereum address format
    if (!web3.utils.isAddress(address)) {
      return res.status(400).json({ message: "Invalid Ethereum address" });
    }

    // Retrieving balance
    const balance = await web3.eth.getBalance(address);

    // Converting balance from wei to ether
    const etherBalance = web3.utils.fromWei(balance, "ether");

    res.json({ address, balance: etherBalance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
