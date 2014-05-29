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
            templateUrl: 'views/sidebar_right.html'
        };
    });

    app.directive('minecraftHead', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/minecraft_head.html',
            scope: {
                username: '=username'
            }
        };
    });

})();
