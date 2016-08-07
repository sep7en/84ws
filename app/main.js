var app = angular.module('efapp', []);
	app.controller('searchController', function($scope) {
    
    $scope.searchNow=function(query){
    	alert('Sorry. this function don\'t work now, but maybe soon.')
    };

    $scope.searchLucky=function(query){
    	var w = window.open('http://www.wikihow.com/Improve-Your-Luck','_blank');
    	w.focus();
    };

    $scope.searchParanoid=function(query){
    	var b = location.hostname;
    	var w = window.open('http://www.nytimes.com/imagepages/2005/10/10/opinion/1010opart.html','_blank');
    	w.focus();
    };

});