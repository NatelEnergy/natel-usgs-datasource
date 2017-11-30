System.register(['./datasource', './query_ctrl'], function(exports_1) {
    var datasource_1, query_ctrl_1;
    var USGSConfigCtrl, USGSQueryOptionsCtrl;
    return {
        setters:[
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            }],
        execute: function() {
            USGSConfigCtrl = (function () {
                function USGSConfigCtrl() {
                }
                USGSConfigCtrl.templateUrl = 'partials/config.html';
                return USGSConfigCtrl;
            })();
            USGSQueryOptionsCtrl = (function () {
                function USGSQueryOptionsCtrl() {
                }
                USGSQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
                return USGSQueryOptionsCtrl;
            })();
            exports_1("Datasource", datasource_1.default);
            exports_1("QueryCtrl", query_ctrl_1.USGSDatasourceQueryCtrl);
            exports_1("ConfigCtrl", USGSConfigCtrl);
            exports_1("QueryOptionsCtrl", USGSQueryOptionsCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map