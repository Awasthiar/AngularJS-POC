angular.module('Hero_App')
.run(['$rootScope','$state','$localStorage',function($rootScope,$state,$localStorage){
        $rootScope.$on('$stateChangeError',function(event,toState,toParams,fromState,fromParams,error){
            if(toState.name == 'login'){
            $state.go('home');
        }
    
    });
}]);
