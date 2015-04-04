var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(error, collection){
        if(collection.length === 0 ) {
            Job.create({title: 'Cook', description: 'You will be cooking stuff'});
            Job.create({title: 'Waiter', description: 'You will be waiting'});
            Job.create({title: 'Assassin', description: 'You will KILL!'});
            Job.create({title: 'CEO', description: 'You will try to appear smart'});                        
        }
    })
}