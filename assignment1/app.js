(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
    // $scope.message = "Angular is up";

    $scope.countLunchItems = function() {
      return 0;
    }

    $scope.getMessageForLunchItems = function(numItems) {
      if(numItems == 0) {
        return "Empty";

      } else if (numItems <= 3) {
        return "Enjoy!";

      } else if (numItems > 4) {
        return "TOO MUCH!";
      }
    }
    $scope.message = $scope.getMessageForLunchItems($scope.countLunchItems());

});

})();
