angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
	//nothing yet
})

.controller('MainCtrl', function($scope) {})

.controller('CategoriesCtrl', function($scope, Chats, Categories) {
  $scope.categories = Categories.all();
})

.controller('CategoryCtrl', function($scope, $stateParams, Categories) {
  $scope.products = Categories.get($stateParams.category);
})

.controller("ProductCtrl", function($scope, $stateParams, Categories){
  $scope.product = Categories.getProduct($stateParams.category, $stateParams.productId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
