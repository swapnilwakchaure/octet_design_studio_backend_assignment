// import required npm packages
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)


// import local files
const { connection } = require('./connection/db.connect');
const { authenticate } = require('./middleware/authenticate');
const { authRoute } = require('./routes/auth.route');
const { jobRoute } = require('./routes/job.route');


// set up the app structure
const app = express();
app.use(express.json());
app.use(cors());


// build the routes
app.get('/', (request, response) => {
    const query = request.query;

    response.send('welcome to octet design studio backend assignment');
});

// import all job related routes here
app.use('/auth', authRoute);
app.use(authenticate);
// if user is authenticate then and then only user can visit to the jobroute
app.use('/jobs', jobRoute);


// run the server on port
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log(`something went wrong: ${error}`);
    }
});
