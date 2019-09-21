const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Llamar http://localhost:3000/user');
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});

app.get('/user', (req, res) => {
    const user = require('../userJson/user.json');
    res.json(user);
});