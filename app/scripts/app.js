(function() {
    'use strict';

    angular.module('minecraftFinestApp', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'minecraftFinestApp.services',
        'minecraftFinestApp.directives',
        'minecraftFinestApp.controllers'
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('root', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'headerController'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'footerController'
                }
            }
        }).state('root.home', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeController'
                }
            }
        }).state('root.test', {
            url: '/test',
            views: {
                'container@': {
                    templateUrl: 'views/test.html',
                    controller: 'GameServiceAPI',
                    controllerAs: 'api'
                }
            }
        }).state('root.store', {
            url: '/store',
            views: {
                'container@': {
                    templateUrl: 'views/store.html',
                    controller: 'StoreController'
                }
            }
        }).state('root.leaderboards', {
            url: '/leaderboards',
            views: {
                'container@': {
                    templateUrl: 'views/leaderboards.html'
                }
            }
        }).state('root.help', {
            url: '/help',
            views: {
                'container@': {
                    templateUrl: 'views/help.html'
                }
            }
        });

    }]);

})();