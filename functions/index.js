const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

exports.payWithPaystack = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { email, amount } = req.body;

    try {
      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email,
          amount: amount * 100  // Convert Naira to Kobo
        },
        {
          headers: {
            Authorization: `Bearer sk_test_1bd796d042e7127bfc2f9d72fdfce11a8e9610cf`,
            "Content-Type": "application/json"
          }
        }
      );

      const { authorization_url } = response.data.data;
      res.status(200).json({ url: authorization_url });
    } catch (error) {
      console.error("Paystack error:", error.message);
      res.status(500).json({ error: "Payment initialization failed" });
    }
  });
});
