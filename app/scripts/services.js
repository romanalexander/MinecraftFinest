(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.services', []);

    app.factory('gameServiceAPIFactory', ['$http', function($http) {
        return {
            getGames: function() {
                return $http.get('/api/games');
            },
            /**
             * Retreives an array of online users.
             * @param count (optional) Count of players to pull. Defaults to 100.
             * @returns {HttpPromise}
             */
            getAllOnlinePlayers: function(count) {
                count = count || 100;
                return $http.get('/api/users', {'params': {'count': count}});
            },
            /**
             * Returns a single value representing a number of all online users.
             * @returns {HttpPromise}
             */
            getAllOnlinePlayersCount: function() {
                return $http.get('/api/online_count');
            },
            getTotalPlayersCount: function() {
                return $http.get('/api/total_players_count');
            },
            getServerStatus: function() {
                return $http.get('/api/server_status');
            },
            getTopStats: function(id) {
                return $http.get('/api/top_stats/' + id);

            }
        };
    }]);

    app.factory('MinecraftUser', ['$resource', function($resource) {
        return $resource('/api/users/:userName');
    }]);

    app.factory('Leaderboard', ['$resource', function($resource) {
        return $resource('/api/leaderboards/:id');
    }]);

    app.factory('storeAPIFactory', ['$http', function($http) {
        return {
            getAllProducts: function() {
                return $http.get('/api/store/products');
            }
        };
    }]);

})();
