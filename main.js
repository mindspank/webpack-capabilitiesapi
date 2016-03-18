const Qlik = require('./qlikloader');
const config = require('./qlikconfig');

Qlik.then(function(q) {
   
    q.setOnError(function(error) {
        console.log(error)
    })
   
    var app = q.openApp('3f3a866b-238f-4d1a-8aeb-81e97756af7a', config);   
    console.log(app)
   
})