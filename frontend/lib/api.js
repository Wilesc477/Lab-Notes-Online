const BASE = 'http://localhost:4000/api';


export const api = {
    async getNotes() {
        const res = await fetch(`${BASE}/notes`);
        return res.json();
    },
    async createNote(note) {
        const res = await fetch(`${BASE}/notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note),
        });
        return res.json();
    },
};