(function() {
    'use strict';

    var app = angular.module('minecraftFinestApp.controllers', []);

    app.controller('GameServiceAPI', ['$scope', 'gameServiceAPIFactory', function($scope, gameServiceAPIFactory) {
        $scope.allUsers = [];

        gameServiceAPIFactory.getAllOnlinePlayers().success(function(data) {
            $scope.allUsers = data;
        });
    }]);
})();
