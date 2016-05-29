(function() {
    'use strict';
    
    angular.module('FirebaseAngularApp').controller('AuthenticationCtrl', AuthenticationCtrl);

    AuthenticationCtrl.$inject = ['$scope'];

    /* @ngInject */
    function AuthenticationCtrl($scope) {

        var _self = this;
        
        var provider = new firebase.auth.TwitterAuthProvider();
        
        _self.user = firebase.auth().currentUser; 
        _self.username = '';
        _self.loginWithTwitter = loginWithTwitter;
        _self.logoutWithTwitter = logoutWithTwitter;
        
        function loginWithTwitter() {
            firebase.auth().signInWithRedirect(provider);
        }
        
        function logoutWithTwitter() {
            firebase.auth().signOut().then(function() {
                console.info('--> Logout : success');
                _self.user = null;
                $scope.$applyAsync();
            }, function(error) {
                console.info('--> Logout : error');
            });
        }
        
        // INIT
        
        function _init() {
            // Redirect after authentication
            firebase.auth().getRedirectResult().then(function(result) {
                console.info('--> Get redirect : success');
                _self.user = result.user;
                _self.username = _self.user.providerData[0].displayName;
                $scope.$apply();
            }).catch(function(error) {
                console.info('--> Get redirect : error');
            });
        }
        
        _init();
        
    }
    
})();
