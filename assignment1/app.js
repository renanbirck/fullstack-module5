(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
    // $scope.message = "Angular is up";

    $scope.checkIfTooMuch = function () {
      $scope.message = $scope.getMessageForLunchItems($scope.countLunchItems());

    }

    $scope.countLunchItems = function() {

      var dishes = $scope.dishes;
      console.log(dishes)
      if(dishes === undefined || dishes === null) {
        return 0;
      }

      dishes = dishes + ''; // force dishes into a string

      if(dishes === "") {
        return 0;
      }
      
      dishes = dishes.split(',');
      console.log(dishes);
      return dishes.length;

    }

    $scope.getMessageForLunchItems = function(numItems) {
      if(numItems == 0) {
        return "Please enter data first";

      } else if (numItems <= 3) {
        return "Enjoy!";

      } else if (numItems > 4) {
        return "TOO MUCH!";
      }
    }



});

})();