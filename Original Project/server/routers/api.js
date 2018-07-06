var app = require('express')();

//var Book = require('../models/bookModel');
var mongo = require('mongodb').MongoClient;
//mongoose.Promise = global.Promise;
//mongo.connect("mongodb://localhost:27017/booktest");
//var db = mongo.connection;
/*
app.get('/allproducts', function(req, res) {
    mongo.connect("mongodb://localhost:27017/onlinecart",function(err,db){
        if(err) throw err;
        console.log("mongo is connected");
        db.collection('register').find({}).toArray( function(err, sample) {
            if(err) throw err;
    //console.log(data[1]);
            res.send(sample);
        });
    });

    
});

    var id = req.query.bookId;

    Book.find({ _id: id }, function(err, book) {
        if(err) thr

app.delete('/book', function(req, res) {
    var bookId = req.query.bookId;
    console.log(bookId)

    Book.findByIdAndRemove(bookId, function(err, book) {
        if(err) {
            console.log(err);
            res.send({
                success: false,
                message: "The request was not completed. Book with id " + book._id + " is not successfully deleted"
            });
        } else {
            res.send({
                success: true,
                message: "Book successfully deleted",
                id: book._id
            });
        }
    });
  mongo.connect("mongodb://loc
});
*/
app.post('/signup', function(req, res) {
    //var userName=req.body.userName;
    //var pw=req.body.pw;
    //var age=req.body.age;

    var obj={fname:req.body.fname,lname:req.body.lname,email:req.body.email,gender:req.body.gender,mobno:req.body.mobno,uname:req.body.uname,password:req.body.password,cpassword:req.body.cpassword,paddress:req.body.paddress};
   console.log(obj);
  mongo.connect("mongodb://localhost:27017/onlinecart",function(err,db){

    if(err) throw err;
    db.collection('register').insert(obj,function(err,res){
        if(err)
        console.log.apply(err);
        console.log("successfully registered");
        

    })
    res.send("registered");
    });
    });


   app.post('/signin', function(req, res) {
       console.log(req.body);
        var userName=req.body.uname;
        var pw=req.body.password;
                
      mongo.connect("mongodb://localhost:27017/onlinecart",function(err,db){

                if(!err)
                {
                    db.collection('register').find({uname:userName,password:pw}).toArray(function(err,result){
                        console.log(req.body);                                                                                                                                  
                        console.log(result);
                        if(err||result.length<=0)
                        {
                         res.status(400).json("not Successful login");
                         console.log('invalid user');
                        
                        }
                        else
                        {
                            res.status(200).json("Successful login");
                        console.log(" successful login");
                        }
                    })


                }
    })
})
    

module.exports = app;











