const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SECRET = 'dev-secret'; // replace for production


router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);


    db.run(
        'INSERT INTO users (username, password_hash) VALUES (?, ?)',
        [username, hash],
        function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ id: this.lastID, username });
        }
    );
});


router.post('/login', (req, res) => {
    const { username, password } = req.body;


    db.get(
        'SELECT * FROM users WHERE username = ?',
        [username],
        async (err, user) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!user) return res.status(401).json({ error: 'Invalid credentials' });


            const match = await bcrypt.compare(password, user.password_hash);
            if (!match) return res.status(401).json({ error: 'Invalid credentials' });


            const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
            res.json({ token });
        }
    );
});


module.exports = router;