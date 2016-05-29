(function() {
    'use strict';

    // Module
    angular.module('FirebaseAngularApp', ['firebase', 'ui.router', 'file-model']);

    // Run
    angular.module('FirebaseAngularApp').run(Run);

    Run.$inject = [];

    /* @ngInject */
    function Run() {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA2n9YUORKUMW2P-2vkhrc6R6X-NkGmaZY",
            authDomain: "popping-fire-9851.firebaseapp.com",
            databaseURL: "https://popping-fire-9851.firebaseio.com",
            storageBucket: "popping-fire-9851.appspot.com",
        };
        firebase.initializeApp(config);
        
    }  

})();