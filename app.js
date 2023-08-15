const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session')

const createSessionStoreConfig = require('./config/session');

const authRoutes = require('./routes/auth.routes')

const app = express();
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-tokeb')
const handleErrorsMiddleware = require('./middlewares/error-handler')
const port = 3004;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

const sessionConfig = createSessionStoreConfig()


app.use(expressSession(sessionConfig))
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(authRoutes)
app.use(handleErrorsMiddleware)

db.connectToDatabase().then(function(){
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
      });; 
}).catch(function(error){
    console.log('Failed to connect to the database')
    console.log(error);
});
