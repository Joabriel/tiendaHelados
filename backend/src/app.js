import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(res.sendFile(path.join(__dirname, 'public', '../frontend/Tienda Online.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
