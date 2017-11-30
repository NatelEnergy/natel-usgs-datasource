///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(["lodash"], function(exports_1) {
    var lodash_1;
    var USGSQuery;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            USGSQuery = (function () {
                function USGSQuery(target) {
                    this.target = target;
                    if (target && lodash_1.default.isEmpty(target.args)) {
                        target.args = this.parse(target.query);
                    }
                }
                USGSQuery.prototype.parse = function (query) {
                    var args = {};
                    if (query) {
                        lodash_1.default.forEach(query.split('&'), function (s) {
                            var idx = s.indexOf('=');
                            var k = s.substring(0, idx);
                            var v = s.substring(idx + 1);
                            if (k.length > 0 && v.length > 0) {
                                if (k === 'parameterCd' || k === 'statCd' || k === 'tsid' || k === 'sites' || k == 'keys') {
                                    v = v.split(',');
                                }
                                args[k] = v;
                            }
                        });
                    }
                    return args;
                };
                USGSQuery.prototype.argsToQueryString = function (args) {
                    var spec = "";
                    lodash_1.default.forEach(args, function (v, k) {
                        if (v != null && v.length > 0) {
                            spec += '&' + k + '=';
                            if (lodash_1.default.isArray(v)) {
                                spec += v.join();
                            }
                            else {
                                spec += v;
                            }
                        }
                    });
                    return spec;
                };
                return USGSQuery;
            })();
            exports_1("default", USGSQuery);
        }
    }
});
//# sourceMappingURL=query.js.map