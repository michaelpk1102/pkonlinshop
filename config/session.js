
const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session')

function createSessionStore(){
    const mongoDBStore = mongoDbStore(expressSession);

    const store = new mongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'PKOnlineShop',
        collection: 'session' 
    })
    return store;
}

function createSessionStoreConfig(){
    return {
    secret: 'super-secret',
    resave:false,
    saveUninitialized:false,
    store: createSessionStore(),
    cookie:{
        maxAge: 2 * 24 * 60 * 60 * 1000
    }
    };
}

module.exports = createSessionStoreConfig;