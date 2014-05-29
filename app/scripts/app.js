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
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
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
                'contentView@': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeController'
                }
            }
        }).state('root.test', {
            url: '/test',
            views: {
                'contentView@': {
                    templateUrl: 'views/test.html'
                }
            }
        }).state('root.store', {
            url: '/store',
            views: {
                'contentView@': {
                    templateUrl: 'views/store.html',
                    controller: 'StoreController'
                }
            }
        }).state('root.leaderboards', {
            url: '/leaderboards',
            views: {
                'contentView@': {
                    templateUrl: 'views/leaderboards.html'
                }
            }
        }).state('root.help', {
            url: '/help',
            views: {
                'contentView@': {
                    templateUrl: 'views/help.html'
                }
            }
        });

    }]);

})();