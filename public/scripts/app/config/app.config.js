(function() {
    'use strict';
    
    // Config
    angular.module('FirebaseAngularApp').config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /* @ngInject */
    function Config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('database', {
                url: '/',
                templateUrl: '/views/database.html',
                controller: 'DatabaseCtrl',
                controllerAs: 'databaseCtrl'
            }).state('authentication', {
                url: '/authentication',
                templateUrl: '/views/authentication.html',
                controller: 'AuthenticationCtrl',
                controllerAs: 'authenticationCtrl'
            }).state('storage', {
                url: '/storage',
                templateUrl: '/views/storage.html',
                controller: 'StorageCtrl',
                controllerAs: 'storageCtrl'
            });

    }
    
})();