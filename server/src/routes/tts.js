const express = require('express');
const googleTTS = require('google-tts-api');

const router = express.Router();

router.post('/', async (req, res) => {
  const { text, lang } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'text is required' });
  }
  try {
    const url = await googleTTS.getAudioUrl(text, {
      lang: lang || 'ar',
      slow: false,
      host: 'https://translate.google.com',
    });
    res.json({ url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'TTS failed' });
  }
});

module.exports = router;
