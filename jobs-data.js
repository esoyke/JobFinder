var mongoose = require('mongoose');
var Promise = require("bluebird");

var Job = mongoose.model('Job');

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}
exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function(){
    return findJobs({}).then(function(collection){
        if(collection.length === 0 ) {
            return Promise.map(jobs, function(job){
                return createJob(job);
            })                        
        }
    })
}

var jobs = [
        {title: 'Cook', description: 'You will be cooking stuff'},
        {title: 'Waiter', description: 'You will be waiting'},
        {title: 'Assassin', description: 'You will KILL!'},
        {title: 'CEO', description: 'You will try to appear smart'}
    ];