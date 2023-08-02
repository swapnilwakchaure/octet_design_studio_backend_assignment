const mongoose = require('mongoose');



const jobSchema = mongoose.Schema();



const JobModel = mongoose.model('job', jobSchema);



module.exports = { JobModel };