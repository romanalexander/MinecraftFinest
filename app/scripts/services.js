(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.services', []);

    app.factory('GameServiceAPIFactory', ['$http', function($http) {
        return {
            getAllOnlinePlayers: function(count, page) {
                return $http.get('/api/users', {'params': {'count': count, 'page': page}});
            },
            getServerStatus: function() {
                return $http.get('/api/server_status');
            }
        };
    }]);

    app.factory('MinecraftUser', ['$resource', function($resource) {
        return $resource('/api/user/:user');
    }]);

})();
