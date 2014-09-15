var hashtag = angular.module('hashtag', []);

hashtag.directive('hashtagGallery', function(Instagram, $compile){
 
  var directive = {
    replace : true,
    compile: function compile(tElement, tAttrs, linker) {
        var ng$ = angular.element;
        var holder = ng$(tElement).html('');

        return {
          pre: function preLink($scope, iElement, iAttrs, controller) {  

            linker($scope, function(clone){
              var template = "";
              for (var i = clone.length - 1; i >= 0; i--) {
                  template += clone[i].innerHTML || '';
              };

              var repeater = ng$('<div ng-repeat="image in images"></div>')
              repeater.append(template);
              repeater = $compile(repeater)($scope);
              holder.append(repeater);
            });

            // Add different services here

            var hashtag = iAttrs.hashtag;
            var key     = iAttrs.instagramKey;
            Instagram.getHashtag(hashtag, key,function(data) {
              $scope.images = data;
            });

          },
          post: function postLink($scope, iElement, iAttrs, controller) {  

          }
        }
    },
    template: '<div><div ng-transclude></div></div>',
    transclude: 'element',
    restrict: 'E', 
    scope: true
  };

  return directive;
});

hashtag.factory('Instagram', ['$http', function($http) {
  return {
    getHashtag: function(tag, key, callback) {
      var endPoint = 'https://api.instagram.com/v1/tags/$tag/media/recent?client_id=$key&callback=JSON_CALLBACK'
              .replace('$tag', tag)
              .replace('$key', key);

      $http.jsonp(endPoint).success(function(res) {
        callback(res.data);
      });
    }
  };
}]);