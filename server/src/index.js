const express = require('express');
const cors = require('cors');

const ttsRoute = require('./routes/tts');
const sttRoute = require('./routes/stt');
const pricingRoute = require('./routes/pricing');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tts', ttsRoute);
app.use('/api/stt', sttRoute);
app.use('/api/pricing', pricingRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
