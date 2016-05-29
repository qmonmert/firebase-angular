(function() {
    'use strict';
    
    angular.module('FirebaseAngularApp').controller('StorageCtrl', StorageCtrl);

    StorageCtrl.$inject = ['$scope'];

    /* @ngInject */
    function StorageCtrl($scope) {

        var _self = this;

        var storageRef = firebase.storage().ref();
        
        _self.upload = upload;
        _self.fileModel;
        _self.urlFile;
        
        function upload() {
            debugger;
            var file = _self.fileModel;
            var metadata = {
                'contentType': file.type
            };
            var uploadTask = storageRef.child('files/' + file.name).put(file, metadata);
            uploadTask.on('state_changed', null, function(error) {
                console.info('--> Upload : error');
            }, function() {
                console.log('--> Upload : success');
                _self.urlFile = uploadTask.snapshot.metadata.downloadURLs[0];
                $scope.$apply();
            });
        }
        
    }
    
})();
