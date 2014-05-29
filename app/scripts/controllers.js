(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.controllers', []);

    app.controller('HeaderController', ['$scope', function($scope) {
        $scope.links = [
            {name: 'Debug Root',
                sref: 'root.test'}
        ];
    }]);

    app.controller('FooterController', ['$scope', function($scope) {
        $scope.currentDate = new Date();
    }]);

    app.controller('HomeController', ['$scope', 'gameServiceAPIFactory', function($scope, gameServiceAPIFactory) {
        gameServiceAPIFactory.getGamesCarousel().success(function(data) {
            $scope.games = data;
        });
    }]);

    app.controller('GameServiceAPI', ['$rootScope', 'gameServiceAPIFactory', function($rootScope, gameServiceAPIFactory) {
        $rootScope.onlineUsers = [];
        $rootScope.onlineUserCount = 0;
        $rootScope.totalUserCount = 0;
        $rootScope.serverStatus = {};
        $rootScope.leaderboardData = {};

        gameServiceAPIFactory.getAllOnlinePlayers().success(function(data) {
            $rootScope.onlineUsers = data;
        });
        gameServiceAPIFactory.getAllOnlinePlayersCount().success(function(data) {
            $rootScope.onlineUserCount = data;
        });
        gameServiceAPIFactory.getTotalPlayersCount().success(function(data) {
            $rootScope.totalUserCount = data;
        });
        gameServiceAPIFactory.getServerStatus().success(function(data) {
            $rootScope.serverStatus = data;
        });
        gameServiceAPIFactory.getLeaderboards().success(function(data) {
            $rootScope.leaderboardData = data;
        });
    }]);
})();
