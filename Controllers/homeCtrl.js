angular.module('Hero_App')
.controller('homeCtrl',['$scope','$rootScope','$state','$localStorage',function($scope,$rootScope,$state,$localStorage){
$scope.showdashboard=function(){
    if($localStorage.role=='admin')
    return true;
    else
    return false;
}
$scope.logout=function(){
    delete $localStorage.role;
    $state.go('login');
}
if($localStorage.role=='admin')
$state.go('home.dashboard');
else
$state.go('home.heroeslist');
}]);