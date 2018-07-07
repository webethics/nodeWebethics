var fs = require('fs');
var nodemailer = require('nodemailer');

/* delete  file with file path */ 
exports.deleteFile =  (filePath) => {
		  //console.log(remove_path);
			return new Promise(function (resolve, reject) {
			   // var filePath = path.join(dir, file);
				fs.lstat(filePath, function (err, stats) {
					if (err) {
						return reject(err);
					}
					if (stats.isDirectory()) {
						resolve(deleteDirectory(filePath));
					} else {
						fs.unlink(filePath, function (err) {
							if (err) {
								return reject(err);
							}
							resolve();
						});
					}
				});
			  }); 
	    }
		
/*  delete allfiles from directory */
exports.deleteAllfiles = (dir) => {
		fs.readdir(dir, (err, files) => {
		  if (err) throw err;
		  for (const file of files) {
			  file_path  =  dir+'/'+file;
			fs.unlink(file_path, err => {
			  if (err) throw err;
			});
		  }
		});
	} 


/* delete  directory  */
 exports.deleteDirectory = (dir)=> {
			return new Promise(function (resolve, reject) {
				fs.access(dir, function (err) {
					if (err) {
						return reject(err);
					}
					fs.readdir(dir, function (err, files) {
						if (err) {
							return reject(err);
						}
						Promise.all(files.map(function (file) {
							return deleteFile(dir, file);
						})).then(function () {
							fs.rmdir(dir, function (err) {
								if (err) {
									return reject(err);
								}
								resolve();
							});
						}).catch(reject);
					});
				});
			});
		  } 
		  
/* *** Email SMTP setting *** */	
exports.send_email = (mailOptions)=> {
let transporter =	nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'php.hunt6@gmail.com',
    pass: 'TeamWebethics3!'
  }
});	 

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
	console.log('Email sent: ' + info.response);
  }
});

 
}
/* Read file for render the email template */ 
exports.readHTMLFile = (path, callback)=>{
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
}




