const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

const users = require('../userJson/user.json');

app.get('/', (req, res) => {
    res.send('Llamar http://localhost:3000/user');
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});

app.get('/user', (req, res) => {
    res.json(users);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(item => item.id == id)
    res.json({...user });
});