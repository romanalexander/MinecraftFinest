(function() {
    'use strict';

    var mockUserList = [
        'Notch',
        'Nayuta',
        'Onis_Luck',
        'mrbaconbitts',
        'MrBlahblah',
        'MrDragonBreath',
        'MrPumpkinMuffins',
        'MrSquirrelMan',
        'Mr_Boomer337',
        'MR_RANDOM999',
        'Mr_SneakyFace',
        'Mr_Sterling',
        'msbrun02',
        'mtndrew1',
        'Muddha',
        'MuffinOfFun',
        'MuffinSpankz',
        'murderrr',
        'murdock99',
        'myers121',
        'mylimo7',
        'myminecraftnow',
        'mysticmock',
        'Mystronghold',
        'M_Boogie_C',
        'nacho30',
        'nanderson17',
        'Narcisism',
        'Navia',
        'nbc0711',
        'NeilYoung',
        'nemaster203',
        'nerdnut',
        'nerraj',
        'nevermines',
        'newmatt003',
        'Nexun',
        'ngennaro',
        'NICFREAK5577',
        'nicilbar',
        'Nick_O_Shlas',
        'Nighthawk354',
        'NightmareV',
        'Nikkisweety',
        'ninjaboy6728',
        'NinjaElite71',
        'nleroy',
        'nobrain98',
        'NoglasticNinja',
        'noisymanray',
        'nolarboot',
        'noob_cat',
        'Noproblembrah',
        'Noresha',
        'nosnarbo',
        'novak189',
        'nr88hg',
        'nubkia',
        'Nyntoku',
        'Nzgbjunior',
        'obfalcons',
        'ObiWanHoshizaki',
        'ogot101',
        'ojpnobeast',
        'oK9power',
        'Old_Ninja',
        'OllyWilliams',
        'oMasterCole',
        'omegasnab1',
        'Omega_Haxors',
        'oOoCodeName2',
        'ooveNoIVIooJR',
        'otic123454321',
        'owning254',
        'ozzyoverlord',
        'Palegreenpants',
        'Pantupino',
        'passiontiger74',
        'Pastabob',
        'patrick60316',
        'patsteirer',
        'payton18',
        'paznos6',
        'pbuelo',
        'PenguinKnight303',
        'permit101',
        'pfcwelch',
        'PhalseFire',
        'Phifft',
        'phil235',
        'philit',
        'PhilVegas',
        'PhreshMatt',
        'Pie2608',
        'pieman35333',
        'pikmin259',
        'pilot23456',
        'PinballWizardxX',
        'Pishe',
        'pjt0620',
        'plaunier',
        'plgxdark',
        'Poedew',
        'Pog_',
        'pomi44',
        'ponderius25',
        'poopypoopman',
        'porky9441',
        'posidanvzeus',
        'possesor1',
        'potassium0',
        'potassiumxthree',
        'POTATO_TOT',
        'Pozzumgee',
        'pres_rufus',
        'Preven',
        'Primordium',
        'prodigy901',
        'prophet19',
        'psychicmuffinpop',
        'pugsy',
        'PunisheR2404',
        'pwn78',
        'qentropy',
        'quinnstrong',
        'Quixoticus',
        'qzr31',
        'R0nBurgandy',
        'Rackshatta',
        'radioactivkitten',
        'Raid4Kill',
        'rakonei',
        'Random_NPC',
        'raphfireball99',
        'Rappin_Cubian',
        'Razgriz_Legend',
        'rcfreek13',
        'rctamura',
        'Reapergirl2',
        'RecycledVomit',
        'reddgirl27',
        'remsat10',
        'RhosID',
        'Rickbox',
        'riskwarlord',
        'ritzfizz',
        'rmckinstry_601',
        'robberbandit',
        'robertsar',
        'RobMayor',
        'Rob_25',
        'roetheverett',
        'rokitchikin',
        'rolf108',
        'roscoepig',
        'Rosdower',
        'Rubber_Duckies',
        'rube99',
        'Ryan6338',
        'ryancup',
        'Ryanorocks',
        'r_ninja14',
        'S4INT',
        'sac3nt3r',
        'SacredAssassin',
        'Sadderday',
        'saggyclamburger',
        'SaintsGamingPUB',
        'samlen',
        'samodexter',
        'Samrith',
        'Samuri_Bake_Pie',
        'sandieman100',
        'SannamWOOT',
        'saromon50',
        'Sasuke7677',
        'sasxxsnip3rxx',
        'Sayomie555',
        'Scarlet_wizard',
        'sccrfreak9',
        'scoobysnakcers',
        'SCORPION222',
        'scottbmx17',
        'scottish1900',
        'Scythe_001',
        'sdog180',
        'seanpr',
        'seaofnarum',
        'sebastianse3',
        'SecureUmbra',
        'Selastrovious',
        'seniorl',
        'SergeantCarew',
        'SergeMonster',
        'SergioXSigala',
        'seth6815',
        'sethallery',
        'Seventhcircle72',
        'sexymamegoma',
        'shadowtype',
        'shadowwarrior567',
        'shaerobbo',
        'Shake_NN_Blake',
        'shane2k3',
        'Sharitoncr18',
        'shoogax12',
        'shooterbooth',
        'Shotsfired',
        'shujaatali',
        'Sicknos',
        'Sidain',
        'Silentcricket',
        'SilverShadeFox',
        'SimplePancake',
        'SimplyGabriele',
        'simsiam',
        'sinisterevil',
        'Sir_Wyvernos',
        'sithlord28',
        'skatefallen',
        'skaterdjdude',
        'sKiLLxSn1p3z',
        'SkronyDog',
        'SkyXI',
        'SLanshe88',
        'Slic3man',
        'slingray120',
        'slong85',
        'Slurth',
        'Smartness',
        'SmDFrylock',
        'smileyface0',
        'Smiley_Riley12',
        'smokingoldenace',
        'SmplstcBllistic',
        'sneakysockpuppet',
        'snipermn12',
        'SnowBirds',
        'soar851',
        'SoDScoper',
        'soldger',
        'Sollomon666',
        'SolomonDeLugo',
        'Soonica',
        'soramiku',
        'Sostratus',
        'Sourful',
        'southsfan123',
        'SOZman794',
        'Spacewolf78',
        'spalo',
        'SpazmaticSniper',
        'SpecOps298',
        'spider333',
        'Spinningbullet',
        'SPIT_skatesnot1',
        'SpottedSnail',
        'sprite8182',
        'spwkiller',
        'spydermonkeyx',
        'SrgWallopy',
        'srs13',
        'Srsbizns',
        'stacey0811',
        'StalkerExecutor',
        'stanglemeir',
        'STaSHZILLA420',
        'SteveTech',
        'Steviewonder3',
        'stiason',
        'stokesinman',
        'Strange_One',
        'Striker211',
        'Sultan_Mogroka',
        'Sunew',
        'sungetsu',
        'Sunnyside193',
        'Sunshine3_14',
        'Sup3rtaco',
        'superdelux',
        'Superdoug',
        'superjohnsonusa',
        'supermedinita',
        'supersizefries',
        'superspike54',
        'superstar277',
        'SupraCl0ne',
        'SurgingRage',
        'susitsu',
        'swiftpaw95',
        'Syrix85',
        'Syronan',
        'systempain',
        'TACOMANPRO',
        'Tacticalspy',
        'tailgater',
        'Tails48685',
        'tankenator1',
        'Tanker808',
        'tardreted',
        'Targus65',
        'Tatekei',
        'TauFirewarrior',
        'Tavorrik',
        'tcassel9898',
        'TehTeNdEnCiEs',
        'tenshispawn',
        'terrorist_109',
        'tesla2000',
        'tgy320',
        'Th1Alchemyst',
        'tharcon',
        'thatspercy',
        'TheAmazingTwix',
        'TheBladerSL',
        'thebrowns',
        'TheCars',
        'thecatman23',
        'theelement6',
        'TheFirstHuman',
        'TheFornicator',
        'TheFunkyBones',
        'TheIMightyPotato',
        'thejamesx00',
        'TheJawn',
        'TheJayPack',
        'TheKoruptor',
        'TheM1NER',
        'Themanq57',
        'TheMightyAnony'
    ];

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
        },
        {
            productId: 4,
            productName: "Minecraft Cats",
            productDescription: "Get your own ocelot.",
            price: 50.00,
            images: {
                thumb: 'http://placekitten.com/300/206'
            }
        },
        {
            productId: 5,
            productName: "VIF",
            productDescription: "Very important feline.",
            price: 1000.00,
            images: {
                thumb: 'http://placekitten.com/300/205'
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
        $httpBackend.whenGET('/api/users?count=100').respond(function(method, url, data, headers) {
            function getRandomSubarray(arr, size) {
                var shuffled = arr.slice(0), i = arr.length, temp, index;
                while(i--) {
                    index = Math.floor((i + 1) * Math.random());
                    temp = shuffled[index];
                    shuffled[index] = shuffled[i];
                    shuffled[i] = temp;
                }
                return shuffled.slice(0, size);
            }

            return [200, getRandomSubarray(mockUserList, 100), {}];
        });
        $httpBackend.whenGET('/api/online_count').respond(function(method, url, data, headers) {
            return [200, Math.floor((Math.random() * 100) + 10), {}];
        });
        $httpBackend.whenGET('/api/total_players_count').respond(500); // Lifetime player count
        $httpBackend.whenGET('/api/server_status').respond(function(method, url, data, headers) {
                var serverList = [
                    {
                        name: 'World 1',
                        onlineCount: Math.floor(Math.random() * 50) + 1,
                        totalLoad: 50
                    },
                    {
                        name: 'World 2',
                        onlineCount: Math.floor(Math.random() * 50) + 1,
                        totalLoad: 50
                    }
                ];
                return [200, serverList, {}];
            }
        );
        $httpBackend.whenGET(/\/api\/users\/.+/).respond(function(method, url, data, headers) {
            var idx = url.lastIndexOf('/');
            var userName = url.substr(idx);
            userName = userName.replace('/', ''); // Little bit of hacking for the mocks. Won't be in production anyway.
            var minecraftUser = {
                username: userName,
                minigame_records: [
                    {
                        name: 'TNT Run',
                        wins: Math.floor(Math.random() * 50) + 1,
                        losses: Math.floor(Math.random() * 100) + 1
                    },
                    {
                        name: 'Attack of the Dead',
                        wins: Math.floor(Math.random() * 50) + 1,
                        losses: Math.floor(Math.random() * 100) + 1
                    }
                ]
            };

            return [200, minecraftUser, {}];
        });
        $httpBackend.whenGET('/api/games').respond(function(method, url, data, headers) {
            return [200, mockGameList, {}];
        });
        $httpBackend.whenGET('/api/leaderboards').respond([]);
        $httpBackend.whenGET('/api/store/products').respond(mockProductList);
    }]);
})();
