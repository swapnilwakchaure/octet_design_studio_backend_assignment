require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

const { connection } = require('./connection/db.connect');
const { jobRoute } = require('./routes/job.route');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    const query = request.query;

    response.send('welcome to octet design studio backend assignment');
});

app.use('/jobs', jobRoute);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log(`something went wrong: ${error}`);
    }
});
