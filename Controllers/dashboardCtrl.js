//controller to fetch list of users from api's
angular.module('Hero_App')
.controller('dashboardCtrl',['$scope','$state','$localStorage','getapihit',function($scope,$state,$localStorage,getapihit){
              var apipromise = getapihit.getrequest('https://reqres.in/api/users?page=1');
              apipromise.then(function successCallback(response){
//saving http resonse object as a $scope variable 
              $scope.heroesdata=response.data.data;
     
              apipromise = getapihit.getrequest('https://reqres.in/api/users?page=2');
              apipromise.then(function successCallback(response){
               var heroes=response.data.data;
               $scope.heroesdata.push(heroes[0]);

              }, function errorCallback(response){

         });
        },function errorCallback(response){

     });

 
 }]);