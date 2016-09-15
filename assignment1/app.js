(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
LunchCheckController.$inject = ['$scope']


    function LunchCheckController ($scope) {
        $scope.dishes = ""

        $scope.checkIfTooMuch = function () {
            var dishes = $scope.dishes.split(',');
            var message = "";

            if(dishes[0] == "") message = "Please enter data first";
            else if(dishes.length <= 1 && dishes.length <= 3) message = "Enjoy!"
            else message = "TOO MUCH!";

            $scope.message = message;
        }

  }

})();
