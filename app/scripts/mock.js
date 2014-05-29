(function() {
    'use strict';

    var mockUserList = [
        'Notch',
        'Nayuta',
        'Onis_Luck'
    ];

    var serverStatus = [
        {
            name: 'World 1',
            onlineCount: 1,
            totalLoad: 5
        },
        {
            name: 'World 2',
            onlineCount: 5,
            totalLoad: 10
        }
    ];

    var minecraftUser = {
        username: 'Notch',
        minigame_records: [
            {
                name: 'Minigame 1',
                wins: 1,
                losses: 2
            },
            {
                name: 'Minigame 2',
                wins: 2,
                losses: 1
            }
        ]
    };

    var mockGameList = [
        {
            id: 1,
            sref: '',
            name: 'Kitten Games',
            description: 'Play this minigame!',
            images: {
                thumb: 'http://placekitten.com/900/300',
                large: 'http://placekitten.com/900/300'
            },
            activeUsers: 100
        },
        {
            id: 2,
            sref: '',
            name: 'Draw Kittens',
            description: 'Play draw kittens!',
            images: {
                thumb: 'http://placekitten.com/901/300',
                large: 'http://placekitten.com/901/300'
            },
            activeUsers: 100
        }
    ];

    var mockProductList = [
        {
            productId: 1,
            productName: "Kittens!",
            productDescription: "Some minecraft kittens.",
            price: 5.00,
            images: {
                thumb: 'http://placekitten.com/300/200'
            }
        },
        {
            productId: 2,
            productName: "More Kittens!!",
            productDescription: "Get more kittens than usual.",
            price: 10.00,
            images: {
                thumb: 'http://placekitten.com/300/201'
            }
        },
        {
            productId: 3,
            productName: "Kitten Attack!!!",
            productDescription: "Hail to the kitten overlords.",
            price: 20.00,
            images: {
                thumb: 'http://placekitten.com/300/202'
            }
        }
    ];

    var app = angular.module('minecraftFinestApp');
    app.requires.push('ngMockE2E'); // Make sure we inject mock E2E backend during compilation time.
    app.run(['$httpBackend', '$log', function($httpBackend, $log) {
        $log.warn("WARNING: Do not put mock.js in production!");
        // Pass through all requests to static templates.
        $httpBackend.whenGET(/views/).passThrough();
        $httpBackend.whenGET(/styles/).passThrough();
        $httpBackend.whenGET(/scripts/).passThrough();
        $httpBackend.whenGET(/images/).passThrough();
        $httpBackend.whenGET(/fonts/).passThrough();

        // API responses.
        $httpBackend.whenGET('/api/users?count=100').respond(mockUserList);
        $httpBackend.whenGET('/api/online_count').respond('' + mockUserList.length);
        $httpBackend.whenGET('/api/total_players_count').respond('' + (mockUserList.length * 2));
        $httpBackend.whenGET('/api/server_status').respond(serverStatus);
        $httpBackend.whenGET('/api/user/Notch').respond(minecraftUser);
        $httpBackend.whenGET('/api/games').respond(mockGameList);
        $httpBackend.whenGET('/api/leaderboards').respond([]);
        $httpBackend.whenGET('/api/store/products').respond(mockProductList);
    }]);
})();
