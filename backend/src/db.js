const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = path.resolve(__dirname, '../../database/notebook.db');
const db = new sqlite3.Database(dbPath);


// Initialize tables
const init = () => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password_hash TEXT
    );`);


    db.run(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    body TEXT,
    timestamp TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
    );`);
};


init();


module.exports = db; 
