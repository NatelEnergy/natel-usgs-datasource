///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['app/core/core_module'], function(exports_1) {
    var core_module_1;
    var FindUSGSSiteModal;
    function findUSGSSiteModalDirective() {
        return {
            restrict: 'E',
            templateUrl: 'public/plugins/natel-usgs-datasource/partials/find_site_modal.html',
            controller: FindUSGSSiteModal,
            bindToController: true,
            transclude: true,
            controllerAs: 'ctrl',
            scope: {
                target: '<',
                datasource: '<'
            }
        };
    }
    exports_1("findUSGSSiteModalDirective", findUSGSSiteModalDirective);
    return {
        setters:[
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            }],
        execute: function() {
            FindUSGSSiteModal = (function () {
                /** @ngInject */
                function FindUSGSSiteModal($scope, $rootScope, $injector, contextSrv) {
                    this.$scope = $scope;
                    this.$rootScope = $rootScope;
                    this.$injector = $injector;
                    this.contextSrv = contextSrv;
                    console.log("TODO... find USGS sites with", this);
                }
                FindUSGSSiteModal.prototype.onSave = function () {
                    console.log("TODO... update the site ID");
                    this.dismiss();
                };
                FindUSGSSiteModal.prototype.dismiss = function () {
                    this.$scope.$parent.dismiss();
                };
                return FindUSGSSiteModal;
            })();
            exports_1("default", FindUSGSSiteModal);
            core_module_1.default.directive('findUsgsSiteModal', findUSGSSiteModalDirective);
        }
    }
});
//# sourceMappingURL=find_site_modal.js.map