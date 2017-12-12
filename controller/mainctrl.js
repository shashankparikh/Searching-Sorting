var myapp = angular.module("app",['ui.bootstrap'])
.controller("maincntrl",function($scope){
 
  // BUTTONS ======================
  
  // define some random object
  $scope.sortType = 'fish'; // set the default sort type
  $scope.sortReverse = false; // set the default sort order
  $scope.sortFish = ''; // set the default search/filter term

 
 $scope.sushi = [
{name : 'shashank' , fish : 'qwerty' , rate : '23'},
{name : 'parikh' , fish : 'sgdff' , rate : '230'},
{name : 'bits' , fish : 'qy' , rate : '123'},
{name : 'bittu' , fish : 'rty' , rate : '2'},
{name : 'cooldude' , fish : 'qwty' , rate : '3'}

 ];


});