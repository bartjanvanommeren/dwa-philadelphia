const express = require('express');
const path = require('path');

const app = express();

app.use('/static', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'static', req.path));
});

app.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    });

app.listen(3000, () => {
    console.log('Server started and listening to ::', 3000);
});
