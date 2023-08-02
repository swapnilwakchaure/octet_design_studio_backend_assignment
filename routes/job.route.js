// install required dependencies
const express = require('express');
const { JobModel } = require('../models/job.model');
const data = require('../assets/data.json');


// create a job route for building crud app
const jobRoute = express.Router();


// ---------------- GET DATA OF JOB ROUTE ---------------- //
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


// ---------------- POST DATA OF JOB ROUTE ---------------- //
jobRoute.post('/addjobs', async (request, response) => {
    const { name, location, posted, status, applied, jobViews, daysLeft, premium, dateFormat } = request.body;
    // console.log('data: ',data);

    try {
        if (name && location && posted && status && applied && jobViews && daysLeft && dateFormat) {
            const add_data = new JobModel({
                name,
                location,
                posted,
                status,
                applied,
                jobViews,
                daysLeft,
                premium,
                dateFormat
            });
            await add_data.save();
            response.send({
                'message': 'job data successfully added',
                'data': data
            });
        } else {
            response.send({
                'message': 'All fields are required'
            })
        }
    } catch (error) {
        response.send({
            'message': 'something went wrong',
            'error': error
        });
    }
});


// ---------------- UPDATE DATA OF JOB ROUTE ---------------- //
jobRoute.patch("/update/:id", async (request, response) => {
    const ID = request.params.id;
    const payload = request.body;

    try {
        await JobModel.findByIdAndUpdate({ _id: ID }, payload);
        response.send({
            'message': `ob data of Id: ${ID} is successfully updated`
        });
    } catch (error) {
        response.send({
            'message': `Cannot able to update the job data of id: ${ID}`,
            'error': error
        });
    }
});


// ---------------- DELETE DATA OF JOB ROUTE ---------------- //
jobRoute.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await JobModel.findByIdAndDelete({ _id: ID });
        response.send({
            'message': `job data of id: ${ID} is successfully deleted from the database`
        });
    } catch (error) {
        response.send({
            'message': `Cannot able to delete the job data of id: ${ID}`,
            'error': error
        });
    }
});



// insert the data in one call
/*
const insertData = async () => {
    try {
        const docs = await JobModel.insertMany(data);
        return Promise.resolve(docs);
    } catch (error) {
        return Promise.reject(error);
    }
}

insertData()
    .then((res) => console.log('res: ', res))
    .catch((error) => console.log('error: ', error))
*/



// export it to use everywhere in our local file
module.exports = { jobRoute };