//controller to view hero details
angular.module('Hero_App')
.controller('heroDetailCtrl',['$scope','$state','$localStorage','$stateParams','postapihit',function($scope,$state,$localStorage,$stateParams,postapihit){
    $scope.id = $stateParams.userid;
    $scope.name=$stateParams.username;
    $scope.goback= function(){
        $state.go('home.dashboard');
    }
    $scope.validate = function(isvalid){
        if(isvalid){
            var apipromise=postapihit.postrequest($scope.name,$scope.job);
            apipromise.then(function successCallback(response){
             $state.go('home.dashboard');
            });
        }
    }
}]);