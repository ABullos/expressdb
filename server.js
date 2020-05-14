const express = require('express');
const app = express();
const _port =5500;
const db = require('./db');
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/users', async (req, res)=> {
    try {
        let result = await db.getALL();
        res.json(results);
    }
    catch (err) {
        res.send(err);
    }
})

app.post('/api/user', async(req, res)=> {
    try {
        let result = await db.insertData();
        res.send(results);
    }
    catch (err) {
        res.send(err);
    }
})
app.put('/api/update/:id', async(req,res) => {
    try {
        let result = await db.updatetData(req.params.id);
        res.send(results);
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(_port, (err) => {
    if(err) { throw err;}
    console.log(`Server running on ${_port}`);
})