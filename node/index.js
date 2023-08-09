const express = require('express');
const app = express();


require('dotenv').config();
const db = require('./utils/db.js');


// app.use(express.json()); //body를 json 타입으로 convert 해준다
app.get('/', (req,res) => res.send('hello world'));

app.get('/api/v1.0/emps/', async (req, res, next) => {
    // console.log(req.query);
    const {query} = req;
    try{
        const fn = query ? db.finds : db.gets;
        const data = await fn.call(db, 'Emp', query);
        res.send(data);
    } catch(e) {
        res.status(500).send({errorCode: 500, errorMessage: e.message})
    }
});

app.get('/api/v1.0/emps/:id', async (req, res, next) => {
    // console.log(req.params);
    const {id} = req.params;
    try{
        const data = await db.get('Emp', id);
        res.send(data);
    } catch(e) {
        res.status(500).send({errorCode: 500, errorMessage: e.message})
    }
})

app.listen(8088, () => console.log('server started 8088..'))
