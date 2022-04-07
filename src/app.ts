import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello, world!' });
})

console.log('Servidor rodando tranquilo')

app.listen(3333);

module.exports = app;