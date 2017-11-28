///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import moment from 'moment';
import USGSQuery from './query';

// From: https://help.waterdata.usgs.gov/tz
const _MSPH = 60*60*1000;
const TZ_OFFSETS = { 
  'GMT':      0,
  'UTC':      0,
  'WET':      0,

  'ACST':   9.5 * _MSPH,
  'ACSST': 10.5 * _MSPH,
  'AEST':    10 * _MSPH,
  'AESST':   11 * _MSPH,
  'AFT':    4.5 * _MSPH,
  'AKST':    -9 * _MSPH,
  'AKDT':    -8 * _MSPH,
  'AST':     -4 * _MSPH,
  'ADT':     -3 * _MSPH,
  'AWST':     8 * _MSPH,
  'AWSST':    9 * _MSPH,
  'BT':       3 * _MSPH,
  'CAST':   9.5 * _MSPH,
  'CADT':  10.5 * _MSPH,
  'CCT':      8 * _MSPH,
  'CET':      1 * _MSPH,
  'CETDST':   2 * _MSPH,
  'CST':     -6 * _MSPH,
  'CDT':     -5 * _MSPH,
  'DNT':      1 * _MSPH,
  'DST':      1 * _MSPH,
  'EAST':    10 * _MSPH,
  'EASST':   11 * _MSPH,
  'EET':      2 * _MSPH,
  'EETDST':   3 * _MSPH,
  'EST':     -5 * _MSPH,
  'EDT':     -4 * _MSPH,
  'FST':      1 * _MSPH,
  'FWT':      2 * _MSPH,
  'BST':      1 * _MSPH,
  'GST':     10 * _MSPH,
  'HST':    -10 * _MSPH,
  'HDT':     -9 * _MSPH,
  'IDLE':    12 * _MSPH,
  'IDLW':   -12 * _MSPH,
  'IST':      2 * _MSPH,
  'IT':     3.5 * _MSPH,
  'JST':      9 * _MSPH,
  'JT':     7.5 * _MSPH,
  'KST':      9 * _MSPH,
  'LIGT':    10 * _MSPH,
  'MET':      1 * _MSPH,
  'METDST':   2 * _MSPH,
  'MEWT':     1 * _MSPH,
  'MEST':     2 * _MSPH,
  'MEZ':      1 * _MSPH,
  'MST':     -7 * _MSPH,
  'MDT':     -6 * _MSPH,
  'MT':     8.5 * _MSPH,
  'NFT':   -3.5 * _MSPH,
  'NDT':   -2.5 * _MSPH,
  'NOR':      1 * _MSPH,
  'NST':   -3.5 * _MSPH,
  'NZST':    12 * _MSPH,
  'NZDT':    13 * _MSPH,
  'NZT':     12 * _MSPH,
  'PST':     -8 * _MSPH,
  'PDT':     -7 * _MSPH,
  'SAT':    9.5 * _MSPH,
  'SADT':  10.5 * _MSPH,
  'SET':      1 * _MSPH,
  'SWT':      1 * _MSPH,
  'SST':      2 * _MSPH,
  'WAST':     7 * _MSPH,
  'WADT':     8 * _MSPH,
  'WAT':     -1 * _MSPH,
  'WETDST':   1 * _MSPH,
  'WST':      8 * _MSPH,
  'WDT':      9 * _MSPH,
  'ZP-11':  -11 * _MSPH,
  'ZP-2':    -2 * _MSPH,
  'ZP-3':    -3 * _MSPH,
  'ZP11':    11 * _MSPH,
  'ZP4':      4 * _MSPH,
  'ZP5':      5 * _MSPH,
  'ZP6':      6 * _MSPH
 };



export class USGSDatasource {
  id: number;
  name: string;
  url: string;

  /** @ngInject */
  constructor(instanceSettings, private $q, private backendSrv, private templateSrv) {
    this.id = instanceSettings.id;
    this.name = instanceSettings.name;

    // Really just for the display in Plugins Page
    this.url = 'https://waterservices.usgs.gov/'
  }
  
  query(options) {
   // console.log( "QUERY", options );
    let dataIntervalMS = 15*60*1000  * 2;
    let fmt = 'YYYY-MM-DDTHH:mm:00[Z]'; // UTC without seconds
    var isDV = false;

    var target = options.targets[0];
    var args = target.args;
    if(!args || !_.has(args, 'sites')) {
      throw { message: 'Missing USGS Site Selection' };
//    return this.q.when( { data: [] } );
    }

    if(!_.has(args, 'service')) {
      args.service = 'iv';
    }

    var url = 'https://waterservices.usgs.gov/nwis/';
    if(target.args.service === 'dv' || options.intervalMs > 3000000) {
      url += 'dv/service/?format=rdb';
      dataIntervalMS = 24*60*60*1000;
      fmt = 'YYYY-MM-DD';
      isDV = true;
    }
    else {
      url += 'iv/service/?format=rdb';
    }

    let from = options.range.from.subtract( dataIntervalMS, 'ms' );
    url += '&startDT=' +  from.utc().format(fmt);
    if( "now" != options.rangeRaw.to ) {
      let to = options.range.to.add( dataIntervalMS + (6000), 'ms' );
      url += '&endDT=' +  to.utc().format(fmt);
    }

    url += '&sites=' + target.args.sites;

    if(target.args.parameterCd) {
      url += '&parameterCd=' + target.args.parameterCd.join();
    }

    if(target.args.statCd && isDV) {
      url += '&statCd=' + target.args.statCd.join();
    }

    return this.backendSrv.datasourceRequest({
      url: url,
      method: 'GET'
    }).then( result => {
      var lines = result.data.split('\n');
      var info = this.readRDB(lines, true, args.show );

     // console.log( "TO Timeseries", info );

      var res = { data: [] };
      _.forEach(info.series, series => {
        res.data.push( series );
      });
      return res;
    });
  }


  readRDB( lines, asGrafanaSeries, show ) {
    var rdb: any = {};
    rdb.series = [];

    let idx = 0;
    var i = 1;
    var line = lines[i];
    while( i<lines.length && !line.startsWith('# Data for')) {
      line = lines[++i];
    }
    if(i>= lines.length) {
      return; // did not find anything
    }

    line = lines[++i];
    if(line != null) {
      line = line.substring(2).trim();
      
      idx = line.indexOf(' ');
      rdb.agency = line.substring(0,idx);

      idx = line.indexOf(' ', idx+1);
      rdb.site = line.substring(idx+1);
    }
    console.log( 'READ', rdb.site, asGrafanaSeries );

    while( i<lines.length && !line.startsWith('# Data provided')) {
      line = lines[++i];
    }

    idx = line.lastIndexOf(' ');
    rdb.siteID = line.substring(idx+1).trim();

    line = lines[++i];


    idx = line.indexOf('Description');
    let headers = line.substring(2,idx).match(/[^ ]+/g);

    line = lines[++i];
    var idToField = {};
    while( i<lines.length && line.startsWith('#  ')) {
      var vals = line.substring(2,idx).match(/[^ ]+/g);
      var s: any = {};
      for(var j=0; j<headers.length; j++) {
        s[headers[j]] = vals[j];
      }
      s.Description = line.substring(idx).trim();
      if(asGrafanaSeries) {
        s.datapoints = [];
      }
      else {
        s.values = [];
      }

      s.key = s.TS_ID + '_' + s.Parameter;
      if(_.has(s, 'Statistic')) {
        s.key += '_' + s.Statistic;
      }

      // Set the display value
      let alias = '';
      if(show == null || _.has(show, s.key)) {
        if(show != null) {
          alias = show[s.key];
        }
        if(!alias || alias.length==0) {
          s.target = s.Description;
        }
        else {
          s.target = alias;
        }
        idToField[s.key] = s;
        rdb.series.push( s );
      }

      line = lines[++i];
    }

    // Read to the end of the header
    while( i<lines.length && line.startsWith('#')) {
      line = lines[++i];
    }

    var parts = line.split('\t');
    for(var j=0; j<parts.length; j++) {
      if(_.has(idToField, parts[j])) {
        idToField[parts[j]].index = j;
      }
    }
    rdb.dates = [];
    var hasTZ = 'tz_cd' === parts[3];

    i++; i++; // skip the line about size
    while( i<lines.length) {
      line = lines[i++];
      if(line.length > 5) {
        parts = line.split('\t')

        // agency = parts[0];
        // site = parts[0];
        let date = parts[2];
        var d = 0;
        if(hasTZ) {
          let tz = parts[3];
          let off = TZ_OFFSETS[tz];
          d = moment.utc( date ).valueOf() - off;
        }
        else {
          d = moment( date ).valueOf(); // local time/  TODO, should be in the TZ of the site
        }
        rdb.dates.push( d );

        for(var j=0; j<rdb.series.length; j++) {
          var s = rdb.series[j];
          var val = parts[s.index];
          if(val && val.length > 0) {
            val = parseFloat(val);
          }
          else {
            val = null;
          }
          if(asGrafanaSeries) {
            s.datapoints.push( [val, d] );
          }
          else {
            s.values.push(val);
          }
        }
      }
    }
    return rdb;
  }

  testDatasource() {
    return this.backendSrv.datasourceRequest({
      url: 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01646500&parameterCd=00060&siteStatus=all',
      method: 'GET'
    }).then(response => {
      if (response.status === 200) {
        return { status: "success", message: "Data source is working", title: "Success" };
      }
    });
  }

  annotationQuery(options) {
    throw new Error("Annotation Support not implemented yet.");
  }

  metricFindQuery(query: string) {
    throw new Error("Template Variable Support not implemented yet.");
  }
}
