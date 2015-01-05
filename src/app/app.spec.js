'use strict';

describe('widget', function() {
  beforeEach(module('elif'));
  beforeEach(module('myApp'));
  var $compile = null;
  var scope = null;

  beforeEach(inject(function(_$compile_, $rootScope) {
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  it('shows the widget if present', function() {
    scope.foo = 'bar';
    var html = '<widget widget-to-show="foo"></widget>';
    var element = angular.element(html);
    var linkFn = $compile(element);
    linkFn(scope);
    scope.$digest();

    expect(element.text()).toEqual('Widget is here!');
  });

  it('shows a warning if the widget is not present', function() {
    scope.foo = null;
    var html = '<widget widget-to-show="foo"></widget>';
    var element = angular.element(html);
    var linkFn = $compile(element);
    linkFn(scope);
    scope.$digest();

    expect(element.text()).toEqual('Widget is missing!');
  });
});