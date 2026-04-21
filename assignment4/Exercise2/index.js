const express = require('express');
const app = express();

app.use((req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const timeTaken = Date.now() - startTime;
        console.log(`Response time: ${timeTaken} ms`);
    });

    next();
});

app.get('/test', (req, res) => {
    res.send('Testing');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});