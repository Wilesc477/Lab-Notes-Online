const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
    db.all('SELECT * FROM notes', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});


router.post('/', (req, res) => {
    const { user_id, title, body } = req.body;
    const timestamp = new Date().toISOString();


    db.run(
        'INSERT INTO notes (user_id, title, body, timestamp) VALUES (?, ?, ?, ?)',
        [user_id, title, body, timestamp],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, user_id, title, body, timestamp });
        }
    );
});


module.exports = router;