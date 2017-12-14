///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['lodash', 'app/plugins/sdk', './css/query-editor.css!', './query'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lodash_1, sdk_1, query_1;
    var USGSDatasourceQueryCtrl;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (_1) {},
            function (query_1_1) {
                query_1 = query_1_1;
            }],
        execute: function() {
            USGSDatasourceQueryCtrl = (function (_super) {
                __extends(USGSDatasourceQueryCtrl, _super);
                function USGSDatasourceQueryCtrl($scope, $rootScope, $injector, uiSegmentSrv) {
                    _super.call(this, $scope, $injector);
                    this.$scope = $scope;
                    this.$rootScope = $rootScope;
                    this.$injector = $injector;
                    this.uiSegmentSrv = uiSegmentSrv;
                    var refresh = false;
                    if (lodash_1.default.isNil(this.target.query)) {
                        this.target.query = '&sites=01646500&service=iv';
                        refresh = true;
                    }
                    this.query = new query_1.default(this.target);
                    this.validateArgsAndCheckInfo();
                    if (refresh) {
                        this.panelCtrl.refresh();
                    }
                }
                USGSDatasourceQueryCtrl.prototype.doSitePopup = function () {
                    var scope = this.$scope.$new(true);
                    scope.target = this.target;
                    scope.datasource = this.datasource;
                    this.$rootScope.appEvent('show-modal', {
                        templateHtml: '<find-usgs-site-modal target="target" datasource="datasource"></find-usgs-site-modal>',
                        scope: scope
                    });
                };
                USGSDatasourceQueryCtrl.prototype.toggleSeries = function (series) {
                    var show = this.target.args.show;
                    if (this.isSelected(series)) {
                        lodash_1.default.unset(show, series.key);
                    }
                    else {
                        if (!show) {
                            this.target.args.show = show = {};
                        }
                        show[series.key] = '';
                    }
                    this.onChangeInternal();
                };
                USGSDatasourceQueryCtrl.prototype.isSelected = function (series) {
                    return (lodash_1.default.hasIn(this.target.args, 'show.' + series.key));
                };
                USGSDatasourceQueryCtrl.prototype.toggleEditorMode = function () {
                    this.target.rawQuery = !this.target.rawQuery;
                };
                USGSDatasourceQueryCtrl.prototype.onChangeQuery = function () {
                    this.target.args = this.query.parse(this.target.query);
                    this.validateArgsAndCheckInfo(true);
                };
                USGSDatasourceQueryCtrl.prototype.onChangeInternal = function () {
                    this.validateArgsAndCheckInfo(true);
                };
                USGSDatasourceQueryCtrl.prototype.validateArgsAndCheckInfo = function (doRefresh) {
                    var _this = this;
                    if (doRefresh === void 0) { doRefresh = false; }
                    // Pick the params and Stats from the keys
                    var args = this.target.args;
                    // Just in case
                    lodash_1.default.unset(args, 'parameterCd');
                    lodash_1.default.unset(args, 'statCd');
                    // Get the parameter and stats code from the 
                    if (args.show) {
                        if (lodash_1.default.size(args.show) > 0) {
                            lodash_1.default.forEach(args.show, function (v, k) {
                                var ids = k.split('_');
                                if (ids.length > 1) {
                                    var val = ids[1];
                                    if (args.parameterCd == null) {
                                        args.parameterCd = [val];
                                    }
                                    else if (!lodash_1.default.includes(args.parameterCd, val)) {
                                        args.parameterCd.push(val);
                                    }
                                }
                                if (ids.length > 2) {
                                    var val = ids[2];
                                    if (args.statCd == null) {
                                        args.statCd = [val];
                                    }
                                    else if (!lodash_1.default.includes(args.statCd, val)) {
                                        args.statCd.push(val);
                                    }
                                }
                            });
                        }
                        else {
                            lodash_1.default.unset(args, 'show');
                        }
                    }
                    var key = args.service + '@' + args.sites;
                    if (this.key != key) {
                        this.key = key;
                        var url = 'https://waterservices.usgs.gov/nwis/' + args.service + '/service/?format=rdb&sites=' + args.sites;
                        return this.datasource.backendSrv.datasourceRequest({
                            url: url,
                            method: 'GET'
                        }).then(function (result) {
                            var lines = result.data.split('\n');
                            _this.info = _this.datasource.readRDB(lines, false, null);
                            // Make sure the values exist
                            if (args.show) {
                                var clean = {};
                                lodash_1.default.forEach(args.show, function (v, k) {
                                    lodash_1.default.forEach(_this.info.series, function (s) {
                                        if (k === s.key) {
                                            clean[k] = v;
                                            return false;
                                        }
                                    });
                                });
                                if (lodash_1.default.size(clean) > 0) {
                                    args.show = clean;
                                }
                                else {
                                    lodash_1.default.unset(args, 'show');
                                }
                            }
                            if (doRefresh) {
                                _this.target.query = _this.query.argsToQueryString(args);
                                _this.panelCtrl.refresh();
                            }
                        });
                    }
                    else if (doRefresh) {
                        this.target.query = this.query.argsToQueryString(args);
                        this.panelCtrl.refresh(); // Asks the panel to refresh data.
                    }
                };
                USGSDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
                return USGSDatasourceQueryCtrl;
            })(sdk_1.QueryCtrl);
            exports_1("USGSDatasourceQueryCtrl", USGSDatasourceQueryCtrl);
        }
    }
});
//# sourceMappingURL=query_ctrl.js.map