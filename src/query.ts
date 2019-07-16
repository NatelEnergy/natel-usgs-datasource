import _ from 'lodash';

export default class USGSQuery {
  constructor(public target) {
    if (target && _.isEmpty(target.args)) {
      target.args = this.parse(target.query);
    }
  }

  parse(query) {
    const args = {};
    if (query) {
      _.forEach(query.split('&'), s => {
        const idx = s.indexOf('=');
        const k = s.substring(0, idx);
        let v = s.substring(idx + 1);

        if (k.length > 0 && v.length > 0) {
          if (k === 'parameterCd' || k === 'statCd' || k === 'tsid' || k === 'sites' || k === 'keys') {
            v = v.split(',');
          }

          args[k] = v;
        }
      });
    }
    return args;
  }

  argsToQueryString(args) {
    let spec = '';
    _.forEach(args, (v, k) => {
      if (v !== null && v.length > 0) {
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
