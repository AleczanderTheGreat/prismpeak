const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/donate', (req, res) => {
    const { name, email, amount, gcashNumber } = req.body;

    // Here, you would integrate with GCash's API to process the payment
    // For now, we'll just simulate a successful payment

    console.log(`Processing donation from ${name} (${email}) for amount ${amount} with GCash number ${gcashNumber}`);

    // Simulate success response
    res.json({ success: true });

    // If there's an error, you can send a failure response
    // res.json({ success: false, message: 'Payment processing failed' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
