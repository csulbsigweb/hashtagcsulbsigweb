var hashtag = angular.module('hashtag');

hashtag.factory('instagram', function($scope, $http) {
  return {
    getPics: 1
  };
});

hashtag.controller('instaControl', function($scope, instagram) {
  $scope.something = instagram.getPics;
});
