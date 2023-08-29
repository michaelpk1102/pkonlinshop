const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session')

const createSessionConfig = require('./config/session');

const authRoutes = require('./routes/auth.routes')
const productsRoutes = require('./routes/products.routes')
const baseRoutes = require('./routes/base.routes')
const adminRoutes = require('./routes/admin')

const app = express();
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-tokeb')
const handleErrorsMiddleware = require('./middlewares/error-handler')
const checkAuthStatusMiddle = require('./middlewares/check-auth');
const port = 3220;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

const sessionConfig = createSessionConfig();


app.use(expressSession(sessionConfig))
app.use(checkAuthStatusMiddle)
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(authRoutes)
app.use(productsRoutes)
app.use(baseRoutes)
app.use('admin',adminRoutes)
app.use(handleErrorsMiddleware)

db.connectToDatabase().then(function(){
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
      });; 
}).catch(function(error){
    console.log('Failed to connect to the database')
    console.log(error);
});
