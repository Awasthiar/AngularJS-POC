angular.module('Hero_App',['ui.router','ngStorage'])
.config(function($stateProvider,$urlRouterProvider){
//redirect to login state if any other url is hit
$urlRouterProvider.otherwise('/');
//redirects to login form
 $stateProvider.state('login',{
    url:'/',
    templateUrl:'Views/loginForm.html',
    controller:"loginCtrl",
    resolve:{
        routingresolve:function($q,$localStorage){
            var deferred = $q.defer();
            if(typeof $localStorage.role === "undefined"){
                deferred.resolve();
            }
            else{
                deferred.reject();
            }
            return deferred.promise;
        }
    }
})

//view that opens on successful login     
 .state('home',{
     url:'/home',
     templateUrl: 'Views/home.html',
     controller:"homeCtrl",
     resolve:{
         routingresolve: function($q,$localStorage){
             var deferred = $q.defer();
             if(typeof $localStorage.role !== "undefined"){
                deferred.resolve();
            }
            else{
                deferred.reject();
            }
            return deferred.promise;
   
         }
     }
 })
  
 .state('home.dashboard',{
     url:'/dashboard',
     templateUrl:'Views/dashboard.html',
     controller:'dashboardCtrl',
     resolve:{
        routingresolve: function($q,$localStorage){
            var deferred = $q.defer();
            if(typeof $localStorage.role !== "undefined" && $localStorage.role=='admin'){
               deferred.resolve();
           }
           else{
               deferred.reject();
           }
           return deferred.promise;
  
        }
    }
 })
//nested view
 .state('home.heroeslist',{
     url:'/heroeslist',
     templateUrl:'Views/heroesList.html',
     controller:'heroesListCtrl',
     resolve:{
        routingresolve: function($q,$localStorage){
            var deferred = $q.defer();
            if(typeof $localStorage.role !== "undefined"){
               deferred.resolve();
           }
           else{
               deferred.reject();
           }
           return deferred.promise;
  
        }
    }
 })
//this view is only available to an admin
 .state('home.herodetail',{
     url:'herodetail/:userid/:username',
     templateUrl:'Views/heroDetail.html',
     controller:'heroDetailCtrl',
     resolve:{
         routingresolve:function($q,$localStorage){
             var deferred = $q.defer();
             if($localStorage.role === "admin"){
                 deferred.resolve();
             }
             else{
                 deferred.reject();
                 }
             return deferred.promise;    
         }
     }
 });
 
});
   


    