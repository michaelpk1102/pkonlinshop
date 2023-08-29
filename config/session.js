
const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session')

function createSessionStore(){
    const mongoDBStore = mongoDbStore(expressSession);

    const store = new mongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'PKOnlineShop',
        collection: 'sessions' 
    })
    return store;
}

function createSessionConfig(){
    return {
    secret: 'super-secret',
    resave:false,
    saveUninitialized:true,
    store: createSessionStore(),
    cookie:{
        maxAge: 2 * 24 * 60 * 60 * 1000
    }
    };
}

module.exports = createSessionConfig;