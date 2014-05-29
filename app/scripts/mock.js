(function() {
    'use strict';

    var mockUserList = [
        'Notch',
        'Nayuta',
        'Onis_Luck'
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
        $httpBackend.whenGET('/api/users').respond(mockUserList);
    }]);
})();
