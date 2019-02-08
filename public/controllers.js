// CONTROLLERS

dsconnectmongodb.controller('testController', ['$scope', '$http', function($scope, $http) {
    $scope.testapi = function() {
    	var getApiPath = '/api/test';
    	$http.get(getApiPath)
    	.success(function (response) {
            console.log(response);
            $scope.response = response;
    	})
    	.error(function (data, status) {
			console.log(data);

		}); 
    };
}]);

dsconnectmongodb.controller('homeController', ['$scope', function($scope) {
    
}]);

dsconnectmongodb.controller('mongoDBController', ['$scope', '$http', function($scope, $http) {
	$scope.uname = 'jadoe'	;
	$scope.getuser = function(uname) {
		var getApiPath = '/api/users/' + uname;
		console.log("Test: " + getApiPath);
    	$http.get(getApiPath)
    	.success(function (response) {
            console.log(response);
            $scope.response = response;
    	})
    	.error(function (data, status) {
			console.log(data);

		}); 
    };
}]);