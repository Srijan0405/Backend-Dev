//Create a route that accepts query parameters for filtering users by name.
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/users', (req, res) => {
    
    let name = req.query.name;
    const users = [
        {id: 1, name: "Sneha"},
        {id: 2, name: "Surbhi"},
        {id: 3, name: "Saumya"},
        {id: 4, name: "Devanshi"}
    ];

    let result = users.find((value) => value.name == name)
    res.send(result);
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

