(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.controllers', []);

    app.controller('HeaderController', ['$scope', function($scope) {
        $scope.links = [
            {name: 'Home', sref: 'root.home'},
            {name: 'Games', sref: 'root.games'},
            {name: 'Forums', href: '/forum/'},
            {name: 'Debug Root', sref: 'root.test'},
            {name: 'Store', sref: 'root.store'},
            {name: 'Leaderboards', sref: 'root.leaderboards'},
            {name: 'Help/Support', sref: 'root.help'}
        ];
    }]);

    app.controller('FooterController', ['$scope', function($scope) {
        $scope.currentDate = new Date();
    }]);

    app.controller('HomeController', ['$scope', 'gameServiceAPIFactory', function($scope, gameServiceAPIFactory) {
        gameServiceAPIFactory.getGames().success(function(data) {
            $scope.games = data;
        });
    }]);

    app.controller('SidebarController', ['$scope', function($scope) {

    }]);

    app.controller('UserDetailsController', ['$scope', '$stateParams', 'MinecraftUser', function($scope, $stateParams, MinecraftUser) {
        var user = MinecraftUser.get({userName: $stateParams.userName}, function() { // Bind by new object in case of refactoring.
            $scope.user = user;
        });
    }]);

    app.controller('StoreController', ['$scope', 'storeAPIFactory', function($scope, storeAPIFactory) {
        storeAPIFactory.getAllProducts().success(function(data) {
            $scope.products = data;
        });
    }]);

    app.controller('GameServiceAPI', ['$rootScope', 'gameServiceAPIFactory', '$interval', function($rootScope, gameServiceAPIFactory, $interval) {
        $rootScope.onlineUsers = [];
        $rootScope.onlineUserCount = 0;
        $rootScope.totalUserCount = 0;
        $rootScope.serverStatus = {};
        $rootScope.leaderboardData = {};

        // TODO: Make this better looking?
        // Set up initial data load
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

        // Refresh that content later
        $interval(function() {
            gameServiceAPIFactory.getAllOnlinePlayers().success(function(data) {
                $rootScope.onlineUsers = data;
            });
        }, 300000);
        $interval(function() {
            gameServiceAPIFactory.getAllOnlinePlayersCount().success(function(data) {
                $rootScope.onlineUserCount = data;
            });
        }, 30000);
        $interval(function() {
            gameServiceAPIFactory.getTotalPlayersCount().success(function(data) {
                $rootScope.totalUserCount = data;
            });
        }, 300000);
        $interval(function() {
            gameServiceAPIFactory.getServerStatus().success(function(data) {
                $rootScope.serverStatus = data;
            });
        }, 15000);
        $interval(function() {
            gameServiceAPIFactory.getLeaderboards().success(function(data) {
                $rootScope.leaderboardData = data;
            });
        }, 300000);
    }]);

    app.controller('LeaderboardController', ['$scope', function($scope) {

    }]);
})();
