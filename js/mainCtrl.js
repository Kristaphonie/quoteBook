var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	$scope.dataObj = dataService.getData();

	$scope.addQuote = function () {
		var data = {text: $scope.quote, author: $scope.author}
		dataService.addData(data);
	}

	$scope.deleteData = function (quote) {
		dataService.removeData(quote);
	}
});