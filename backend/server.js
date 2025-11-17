const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRouter = require('./src/routes/notes');
const authRouter = require('./src/routes/auth');
const db = require('./src/db');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/notes', notesRouter);
app.use('/api/auth', authRouter);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
