const cool = require('cool-ascii-faces')
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      userRoutes = require('./routes/user'),
      albumRoutes = require('./routes/album'),
      VerifyToken = require("./middleware/authentication"); // middleware for doing authentication   
	 
var morgan      = require('morgan');	 
// Require Item model in our routes module
var User = require('./models/User');
var Album = require('./models/Album');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.set('superSecret', config.secret); // secret variable



//app.use(morgan('dev'));
app.use(cors());
//app.use(middleHandler);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;




app.use('/api',userRoutes,albumRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

