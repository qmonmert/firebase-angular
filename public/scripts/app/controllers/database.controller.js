(function() {
    'use strict';
    
    angular.module('FirebaseAngularApp').controller('DatabaseCtrl', DatabaseCtrl);

    DatabaseCtrl.$inject = ['$scope'];

    /* @ngInject */
    function DatabaseCtrl($scope) {

        var _self = this;

        var rootRef = firebase.database().ref();
        
        _self.items = [];
        _self.addItem = addItem;
        _self.updateItem = updateItem;
        _self.removeItem = removeItem;
        _self.newTextItem = '';
        
        rootRef.child("items").on("value", function(snapshot) {
            console.info('--> On value : ' + snapshot.val());
            setItems(snapshot.val());
        });
        
        function setItems(items) {
            _self.items = [];
            for (var key in items) {
                items[key].key = key;
                _self.items.push(items[key]);
            }
        }
        
        function addItem(value) {
            var newPostKey = rootRef.child('items').push().key;
            var item = { text: value };
            var updates = {};
            updates['/items/' + newPostKey] = item;
            rootRef.update(updates);
            _self.newTextItem = '';
        }
        
        function updateItem(key, value) {
            var item = { text: value };
            var updates = {};
            updates['/items/' + key] = item;
            rootRef.update(updates);
        }
        
        function removeItem(key) {
            var newPostKey = rootRef.child('items/' + key).remove();
        }
        
        // INIT
        
        function _init() {
            // Init items
            rootRef.child("items").on("value", function(snapshot) {
                console.info('--> Init : ' + snapshot.val());
                setItems(snapshot.val());
                $scope.$applyAsync();
            });
        }
        
        _init();
        
    }
    
})();
