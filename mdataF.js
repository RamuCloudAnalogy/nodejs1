var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employe', {useNewUrlParser: true, useUnifiedTopology: true});
var conn= mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate:Number,
    totalHour:Number,
  });
  //employeeSchema.methods.totalSalary= function(){
    //console.log("Total income of employee: Rs. " + this.hourlyrate * this.totalHour);
//};

  var employeeModel = mongoose.model('employee', employeeSchema);

  var employees = new employeeModel({name:'ram',
email:'dalli.ramu@cloudanalogy.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,
});

employees.total=employees.totalSalary();

conn.on("connnected",function(){
    console.log("connected successfully")
});

conn.on("Disconncted",function(){
    console.log("Disconnected successfully")
});

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    employeeModel.find({},function(err,data){
        if(err)throw error;
        console.log(data);
        conn.close();
    });

    
 });

 conn.once('open', function() {
    employeeModel.findById({_id:"5ec7474061458e09d8efc1d9"},function(err,data){
        if(err)throw error;
        console.log(data);
        conn.close();
    });

 });