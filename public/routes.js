// ROUTES
dsconnectmongodb.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/mongodb', {
        templateUrl: 'pages/mongoDB.htm',
        controller: 'mongoDBController'
    })

    .when('/test', {
        templateUrl: 'pages/test.htm',
        controller: 'testController'
    })
    
});