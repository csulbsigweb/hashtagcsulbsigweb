var hashtag = angular.module('hashtag', []);

hashtag.factory('Instagram', ['$http', function($http) {
  return {
    getHashtag: function(callback) {
      var endPoint = 'https://api.instagram.com/v1/tags/csulbsigweb/media/recent?client_id=36c08dbf4dc549d3b2f6ea5551dba2e1&callback=JSON_CALLBACK';

      $http.jsonp(endPoint).success(function(res) {
        callback(res.data);
      });
    }
  };
}]);

hashtag.controller('InstaControl', ['$scope', '$http', 'Instagram', function($scope, $http, Instagram) {
  $scope.pics = [];
  Instagram.getHashtag(function(data) {
    $scope.pics = data;
  });
}]);
