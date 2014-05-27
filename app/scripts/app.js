(function() {
    'use strict';

    angular.module('minecraftFinestApp', [
        'ui.router',
        'ngAnimate',
        'ngResource',
        'ngSanitize'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,

                    views: {
                        'header': {
                            templateUrl: 'views/header.html'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }
                })
                .state('root.home', {
                    url: '/',
                    views: {
                        'container@': {
                            templateUrl: 'views/home.html'
                        }
                    }
                });
        }]);
})();