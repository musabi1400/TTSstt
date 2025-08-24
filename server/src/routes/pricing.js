const express = require('express');

const router = express.Router();

const plans = [
  {
    name: 'free',
    price: 0,
    ttsChars: 10000,
    sttMinutes: 15,
    voices: '5 basic voices',
    api: false,
    cloning: false,
    support: 'community forums'
  },
  {
    name: 'basic',
    price: 99,
    ttsChars: 200000,
    sttMinutes: 300,
    voices: '50+ professional voices',
    api: true,
    cloning: false,
    support: 'email'
  },
  {
    name: 'pro',
    price: 299,
    ttsChars: 1000000,
    sttMinutes: 1000,
    voices: '100+ hyper-realistic voices',
    api: true,
    cloning: true,
    support: 'live chat'
  }
];

router.get('/', (req, res) => {
  res.json(plans);
});

module.exports = router;
