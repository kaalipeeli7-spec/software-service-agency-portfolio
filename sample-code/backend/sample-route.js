import express from 'express';
const router = express.Router();

// Dummy Example
router.get('/status', (req, res) => {
  res.json({ service: 'ok', time: new Date() });
});

export default router;
