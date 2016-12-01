/**
 * Created by EddieM on 30/11/2016.
 */
(function () {
    "use strict";
    angular
        .module('app')
        .controller('home.controller',home);
    home.$inject = ['$state'];
    function home($state) {
        var vm = this;
        vm.next = next;
        
        function next() {
            $state.go('page');
        }
    }
})();