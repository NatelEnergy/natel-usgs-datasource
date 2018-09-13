///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';

export default class USGSQuery {
  constructor(public target) {
    if (target && _.isEmpty(target.args)) {
      target.args = this.parse(target.query);
    }
  }

  parse(query) {
    var args = {};
    if (query) {
      _.forEach(query.split('&'), s => {
        let idx = s.indexOf('=');
        let k = s.substring(0, idx);
        let v = s.substring(idx + 1);

        if (k.length > 0 && v.length > 0) {
          if (
            k === 'parameterCd' ||
            k === 'statCd' ||
            k === 'tsid' ||
            k === 'sites' ||
            k == 'keys'
          ) {
            v = v.split(',');
          }

          args[k] = v;
        }
      });
    }
    return args;
  }

  argsToQueryString(args) {
    var spec = '';
    _.forEach(args, (v, k) => {
      if (v != null && v.length > 0) {
        spec += '&' + k + '=';
        if (_.isArray(v)) {
          spec += v.join();
        } else {
          spec += v;
        }
      }
    });
    return spec;
  }
}
