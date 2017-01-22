(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //$scope.dishes = angular.element(document.querySelector('#lunch-menu'));
  $scope.lunchMessage = "";
  $scope.dishes="";

  $scope.checkLunch = function () {
    var mesaj = checkLunchMsg($scope.dishes);
    $scope.lunchMessage = mesaj;
  };

  function checkLunchMsg(lunch){
    var msg ="";
    if (lunch !=="" && typeof lunch === 'string') {
      var arrayLunch = lunch.split(',');
      var noOfItems = arrayLunch.length;
      if (noOfItems <= 3) {
          msg="Enjoy!";

      } else {
          msg="Too much!";
      }

    } else {
        msg="Please enter data first";
    }
   return msg;
}}

})();
