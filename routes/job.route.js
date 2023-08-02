const express = require('express');
const { JobModel } = require('../models/job.model');



const jobRoute = express.Router();



jobRoute.get('/', async (request, response) => {
    const query = request.query;

    try {
        const job_data = await JobModel.find(query);
        response.send(job_data);
    } catch (error) {
        response.send({
            'message': 'something went wrong',
            'error': error
        });
    }
});



jobRoute.post('/add', async (request, response) => {
    const data = request.body;

    try {
        const add_data = new JobModel(data);
        await add_data.save();
        response.send({
            'message': 'job data successfully added'
        });
    } catch (error) {
        response.send({
            'message': 'something went wrong',
            'error': error
        });
    }
});


module.exports = { jobRoute };