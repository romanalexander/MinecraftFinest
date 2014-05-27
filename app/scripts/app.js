(function() {
    'use strict';

    angular.module('minecraftFinestApp', [
        'ui.router',
        'ngAnimate',
        'ngResource',
        'ngSanitize'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'static/templates/header.html',
                            controller: 'HeaderController'
                        },
                        'footer': {
                            templateUrl: 'static/templates/footer.html'
                        }
                    }
                });
        }]);
})();