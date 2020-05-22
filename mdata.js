var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn= mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate:Number,
    totalHour:Number,
  });
  employeeSchema.methods.totalSalary= function(){
    console.log("Total income of employee: Rs. " + this.hourlyrate * this.totalHour);
};

  var employeeModel = mongoose.model('employee', employeeSchema);

  var employees = new employeeModel({name:'test',
email:'test@abc.com',
etype:'hourly',
hourlyrate:50,
totalHour:50,
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
    employees.save(function(err,res){
  if (err)throw error;
  console.log(res);
  conn.close();
    });

 });

