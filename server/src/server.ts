import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response)=>{
    const users = [
        {name: 'Taynara', age: 25},
        {name: 'Felipe', age: 25},

    ]
    return response.json(users);
})


app.listen(3333);