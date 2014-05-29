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
        $log.warn("Writing: " + mockUserList.length);
        $httpBackend.whenGET('/api/online_count').respond('' + mockUserList.length);
        $httpBackend.whenGET('/api/total_players_count').respond('' + (mockUserList.length * 2));
        $httpBackend.whenGET('/api/server_status').respond(serverStatus);
        $httpBackend.whenGET('/api/user/Notch').respond(minecraftUser);
        $httpBackend.whenGET('/api/leaderboards').respond([]);
    }]);
})();
