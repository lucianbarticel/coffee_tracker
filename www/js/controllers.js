angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
	//nothing yet
	$scope.addIcon = false;
})

.controller('MainCtrl', function($scope) {
})

.controller('CategoriesCtrl', function($scope, Chats, Categories) {
  $scope.categories = Categories.all();
})

.controller('CategoryCtrl', function($scope, $stateParams, Categories) {
  $scope.products = Categories.get($stateParams.category);
  $scope.category = $stateParams.category;
})

.controller("CalculatorCtrl", function($scope, $stateParams, Categories){
  $scope.product = Categories.getProduct($stateParams.category, $stateParams.productId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
