const Qlik = require('./qlikloader');

Qlik.then(function(q) {
    // Fetch the current open app;
    var app = q.currApp();
    console.log('From other file', app)
    
})