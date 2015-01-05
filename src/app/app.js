'use strict';

angular.module('myApp', ['elif'])
  .controller('AppCtrl', ['$scope', function($scope) {
    $scope.present = 'foo';
    $scope.notPresent = null;
  }])
  .directive('widget', [function() {
    return {
      restrict: 'E',
      scope: {
        widgetToShow: '='
      },
      //templateUrl: '/app/_widget.tpl.html',
      template: '<div><div ng-if="widgetToShow">Widget is here!</div><div ng-else>Widget is missing!</div></div>',
      controller: [function() {

      }]
    }
  }]);
;