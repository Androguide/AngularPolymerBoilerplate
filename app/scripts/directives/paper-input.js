'use strict';

angular.module('Androguide').directive('paperInput', ['$parse', '$timeout', '$browser', function ($parse, $timeout, $browser) {
    
    return {
        restrict: 'E',
        require: '?ngModel',

        link: function postLink(scope, element, attrs) {

            var input = element[0];

            if (attrs.ngModel) {
                bindNgModel('ngModel', 'inputValue');
            }

            function bindNgModel(attrName, inputName) {
                var ngModelGet = $parse(attrs[attrName]);
                toInput(ngModelGet, attrs[attrName], inputName);
                toModel(ngModelGet, attrs[attrName], inputName);
            }

            function toInput(ngModelGet, attrName, inputName) {
                $timeout(function () {
                    input[inputName] = ngModelGet(scope);
                }, 350);

                var first = true;

                scope.$watch(attrName, function ngModelWatch() {
                    if (first) {
                        first = false;
                        return;
                    }
                    input[inputName] = ngModelGet(scope);
                });
            }

            function toModel(modelGet) {
                var ngModelSet = modelGet.assign;
                var timeout;

                var deferListener = function (ev) {
                    if (!timeout) {
                        timeout = $browser.defer(function () {
                            listener(ev);
                            timeout = null;
                        });
                    }
                };

                var listener = function (event) {
                    ngModelSet(scope, input.inputValue);
                    scope.$apply();
                };

                input.addEventListener('change', function (event) {
                    deferListener(event);
                });

                input.addEventListener('keydown', function (event) {
                    var key = event.keyCode;
                    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;
                    deferListener(event);
                });
            }
        }
    };
}]);