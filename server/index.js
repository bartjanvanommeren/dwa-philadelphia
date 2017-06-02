const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/bartjanvanommeren/multi-minor-philadelphia.git/static', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'static', decodeURIComponent(req.path)));
});

app.route('/*')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    });

app.listen(port, () => {
    console.log('Server started and listening to ::', port);
});
