//service to hit APIs---getrequest using $http
angular.module('Hero_App')
.service('getapihit',function($http){
    this.getrequest=function(apiaddress){
        return $http.get(apiaddress);
    }
});