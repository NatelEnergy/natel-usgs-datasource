/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class USGSDatasource {
    private instanceSettings;
    private $q;
    private backendSrv;
    private templateSrv;
    id: number;
    name: string;
    url: string;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    query(options: any): any;
    readRDB(lines: any, asGrafanaSeries: any, show: any): any;
    testDatasource(): any;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): void;
}
