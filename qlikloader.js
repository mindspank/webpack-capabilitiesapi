const Promise = require('bluebird');
module.exports = (function() {
    return new Promise(function(resolve, reject) {
        
        /**
         * Using the script loader to execute requirejs in global scope.
         */
        require(['script!./require'], function() {
            window.require.config({
                baseUrl: 'https://branch.qlik.com/resources'
            });
            
            /**
             * This will load the js/qlik module using requirejs
             * In this case we aren't bundeling it but instead loading it straight from the Qlik Server.
             */
            window.require(['js/qlik'], function(qlik) {
                /**
                 * The Qlik module has been loaded and we resolve the promise with it.
                 */
                resolve(qlik);
            })
            
        });
        
    })
})();