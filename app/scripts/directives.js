(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.directives', []);

    /**
     * Use this fake directive to ensure the view always has access to the rootScope API.
     */
    app.directive('gameServiceApi', function() {
        return {
            restrict: 'E',
            controller: 'GameServiceAPI'
        };
    });

    app.directive('sidebarRight', function() {
        return {
            restrict: 'E',
            controller: 'SidebarController',
            templateUrl: '/views/sidebar_right.html'
        };
    });

    app.directive('minecraftUser', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/minecraft_user.html',
            scope: {
                username: '='
            }
        };
    });

    app.directive('minecraftHead', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/minecraft_head.html',
            scope: {
                username: '='
            }
        };
    });

    app.directive('topStats', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/top_stats.html',
            scope: {
                type: '='
            },
            controller: 'TopStatsController'
        };
    });

    app.directive('leaderboardsSpleef', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/leaderboard_spleef.html',
            scope: {
                type: '@',
                count: '@'
            },
            controller: 'LeaderboardController'
        };
    });

    app.directive('leaderboardsHalo', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/leaderboard_halo.html',
            scope: {
                type: '@',
                count: '@'
            },
            controller: 'LeaderboardController'
        };
    });

    app.directive('holderFix', function() {
        return {
            link: function(scope, element, attrs) {
                Holder.run({ images: element[0], nocss: true });
            }
        };
    });

})();
