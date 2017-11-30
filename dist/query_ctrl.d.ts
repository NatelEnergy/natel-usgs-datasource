/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import USGSQuery from './query';
export declare class USGSDatasourceQueryCtrl extends QueryCtrl {
    private $scope;
    private $rootScope;
    private $injector;
    private uiSegmentSrv;
    static templateUrl: string;
    query: USGSQuery;
    key: string;
    info: any;
    constructor($scope: any, $rootScope: any, $injector: any, uiSegmentSrv: any);
    doSitePopup(): void;
    toggleSeries(series: any): void;
    isSelected(series: any): any;
    toggleEditorMode(): void;
    onChangeQuery(): void;
    onChangeInternal(): void;
    validateArgsAndCheckInfo(doRefresh?: boolean): any;
}
