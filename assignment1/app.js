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
            var style = {};

            if(dishes[0] == "") {
                message = "Please enter data first";
                style.color = "red";
            }
            else if(dishes.length <= 1 && dishes.length <= 3) {
                message = "Enjoy!"
                style.color = "green";
            }
            else {
                message = "TOO MUCH!";
                style.color = "red";
            }

            $scope.message = message;
            $scope.messageStyle = style;
        }

  }

})();
