//loginController----
angular.module("Hero_App")
.controller('loginCtrl',['$scope','$rootScope','$state','$localStorage',function($scope,$rootScope,$state,$localStorage){
    $scope.validate = function(isvalid){
        if(isvalid){
//if logged in as admin
        if ($scope.loginemail == "admin@jungleworks.com" && $scope.loginpassword == "123456")
        {
          $localStorage.role="admin";
          $state.go('home');
        }
//if logged in as user
        else if ($scope.loginemail == "user@jungleworks.com" && $scope.loginpassword == "123456")
        {
            $localStorage.role="user";
            $state.go('home');
        }
    }
}

}]);
