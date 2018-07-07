var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var userRoutes = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
var config_secret = require('../config/DB');
var User = require('../models/User');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens 
var VerifyToken = require('../middleware/authentication');


 /* =================== Add User ============================*/
   userRoutes.route('/user/add').post(function (req, res,next) {
   var user = new User(req.body);
   pwd = req.body.password;
   var hashpass = bcrypt.hashSync(pwd, saltRounds);
    user.name  = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = hashpass;
    User.addList(user,(err, user) => {
        if(err) {
            res.json({success: false, message: 'Failed to add new user.'});

        }
         else if(user) {
            res.json({success:true, message: "User Added Successfully"});
        }
        else
            res.json({success:false,message: "Not added successfully"});
	  })  
  });
  
 /* =================== Check  User Email  ============================*/
 userRoutes.route('/user/user_email').post(function (req, res,next) {
   var user = new User(req.body);
   email  = req.body.email;
   var query = { 'email': email };
    User.find(query,function(err, result) {
    if (err) throw err;
	  if(result.length >0){
			 //res.json({success:true, message: "Email Already Used."});
			  res.status(200).send({ success: true, message: 'Email Already Used.' });

	    }else{
             res.json({success:false,message: ""});
		}			  
    });
});


 


 /* =================== Login function  ============================*/
 userRoutes.route('/user/checklogin').post(function (req, res) {
   var user = new User(req.body);
   pwd = req.body.password;
   email  = req.body.email;
   var query = { 'email': email };
    User.find(query,function(err, result) {
    if (err) throw err;
	  if(result.length >0){
			if(bcrypt.compareSync(pwd, result[0].password)){
	
				    const payload = {
					  email: result[0].email, 
					  id: result[0]._id 
					 };
					 /* create Token  */
					 var token = jwt.sign(payload, config_secret.secret, {
						  expiresIn: "15d" 
						}); 

						// return the information including token as JSON
						res.json({ success: true,message: 'Login Succ	essfully',token:token });

				     //return res.redirect('/index');
				 
			}else{
				  res.json({success: false, message: 'Password is not correct'});
			}
	    }else{
			  res.json({success: false, message: 'Email is not correct'}); 
			  //res.status(400).send("Email is not correct ");
		}		
	  
    });
}); 

 /* =================== User list   ============================*/
userRoutes.route('/users').get(VerifyToken,function (req, res) {
	
   var query = { '_id': req.userId };
   User.find(query, function (err, userData) {
	   
	if(err){
      console.log(err);
    }
    else {
      res.json(userData);
    }

   });  
	
 /*  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
      //res.json(users);
    }
      }); */
//}
//else {
   //   res.redirect('/login');
//}
	

});

// Defined edit route
userRoutes.route('/user/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

 /* =================== Update user  ============================*/
userRoutes.route('/user/update/:id').post(function (req, res) {
   User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name  = req.body.name;
      user.phone = req.body.phone;
      user.email = req.body.email;
      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

 /* =================== Delete user  ============================*/
userRoutes.route('/user/delete/:id').get(function (req, res) {
   User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;