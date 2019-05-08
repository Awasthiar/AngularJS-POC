//posthit api on submitting heroDetail
angular.module('Hero_App')
.service('postapihit',function($http){
    this.postrequest=function(username,userjob){
        
        var posthit=$http({
            method:'POST',
            url:'https://reqres.in/api/users',
            data:{
                name:username,
                job:userjob
            }
        });
        return posthit;
    }
});