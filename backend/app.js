import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend/')));

app.get('/', (req, res) => {
    res.sendFile('Tienda Online.html', { root: path.join(__dirname, '../frontend') });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
