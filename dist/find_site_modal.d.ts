/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class FindUSGSSiteModal {
    private $scope;
    private $rootScope;
    private $injector;
    private contextSrv;
    /** @ngInject */
    constructor($scope: any, $rootScope: any, $injector: any, contextSrv: any);
    onSave(): void;
    dismiss(): void;
}
export declare function findUSGSSiteModalDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof FindUSGSSiteModal;
    bindToController: boolean;
    transclude: boolean;
    controllerAs: string;
    scope: {
        target: string;
        datasource: string;
    };
};
