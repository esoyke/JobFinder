var express = require("express");
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res){
    jobsData.findJobs().then (function(collection){
        res.send(collection);
    });
});
app.get('*', function(req, res){
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://esoykeDev:mymongodev@ds061371.mongolab.com:61371/jobfinder')
.then(function(){
    console.log('connected to mongo!');
    //jobModel.seedJobs();
    jobsData.seedJobs();

});


app.listen(process.env.PORT, process.env.IP);