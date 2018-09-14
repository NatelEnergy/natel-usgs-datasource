define(
  ['lodash', 'moment', 'app/core/utils/kbn', 'app/plugins/sdk', 'app/core/core_module'],
  function(e, t, r, n, o) {
    return (function(e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = {i: n, l: !1, exports: {}});
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
        }),
        (r.r = function(e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
            Object.defineProperty(e, '__esModule', {value: !0});
        }),
        (r.t = function(e, t) {
          if ((1 & t && (e = r(e)), 8 & t)) return e;
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, 'default', {enumerable: !0, value: e}),
            2 & t && 'string' != typeof e)
          )
            for (var o in e)
              r.d(
                n,
                o,
                function(t) {
                  return e[t];
                }.bind(null, o)
              );
          return n;
        }),
        (r.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default;
                }
              : function() {
                  return e;
                };
          return r.d(t, 'a', t), t;
        }),
        (r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ''),
        r((r.s = 2))
      );
    })([
      function(t, r) {
        t.exports = e;
      },
      function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var n = (function(e) {
            return e && e.__esModule ? e : {default: e};
          })(r(0)),
          o = (function() {
            function e(e) {
              (this.target = e),
                e && n.default.isEmpty(e.args) && (e.args = this.parse(e.query));
            }
            return (
              (e.prototype.parse = function(e) {
                var t = {};
                return (
                  e &&
                    n.default.forEach(e.split('&'), function(e) {
                      var r = e.indexOf('='),
                        n = e.substring(0, r),
                        o = e.substring(r + 1);
                      n.length > 0 &&
                        o.length > 0 &&
                        (('parameterCd' !== n &&
                          'statCd' !== n &&
                          'tsid' !== n &&
                          'sites' !== n &&
                          'keys' != n) ||
                          (o = o.split(',')),
                        (t[n] = o));
                    }),
                  t
                );
              }),
              (e.prototype.argsToQueryString = function(e) {
                var t = '';
                return (
                  n.default.forEach(e, function(e, r) {
                    null != e &&
                      e.length > 0 &&
                      ((t += '&' + r + '='),
                      n.default.isArray(e) ? (t += e.join()) : (t += e));
                  }),
                  t
                );
              }),
              e
            );
          })();
        t.default = o;
      },
      function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.QueryOptionsCtrl = t.ConfigCtrl = t.QueryCtrl = t.Datasource = void 0);
        var n = (function(e) {
            return e && e.__esModule ? e : {default: e};
          })(r(3)),
          o = r(6);
        r(13);
        var s = (function() {
            function e() {}
            return (e.templateUrl = 'partials/config.html'), e;
          })(),
          i = (function() {
            function e() {}
            return (e.templateUrl = 'partials/query.options.html'), e;
          })();
        (t.Datasource = n.default),
          (t.QueryCtrl = o.USGSDatasourceQueryCtrl),
          (t.ConfigCtrl = s),
          (t.QueryOptionsCtrl = i);
      },
      function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var n = a(r(0)),
          o = a(r(4)),
          s = a(r(1)),
          i = a(r(5));
        function a(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var u = {
            GMT: 0,
            UTC: 0,
            WET: 0,
            ACST: 342e5,
            ACSST: 378e5,
            AEST: 36e6,
            AESST: 396e5,
            AFT: 162e5,
            AKST: -324e5,
            AKDT: -288e5,
            AST: -144e5,
            ADT: -108e5,
            AWST: 288e5,
            AWSST: 324e5,
            BT: 108e5,
            CAST: 342e5,
            CADT: 378e5,
            CCT: 288e5,
            CET: 36e5,
            CETDST: 72e5,
            CST: -216e5,
            CDT: -18e6,
            DNT: 36e5,
            DST: 36e5,
            EAST: 36e6,
            EASST: 396e5,
            EET: 72e5,
            EETDST: 108e5,
            EST: -18e6,
            EDT: -144e5,
            FST: 36e5,
            FWT: 72e5,
            BST: 36e5,
            GST: 36e6,
            HST: -36e6,
            HDT: -324e5,
            IDLE: 432e5,
            IDLW: -432e5,
            IST: 72e5,
            IT: 126e5,
            JST: 324e5,
            JT: 27e6,
            KST: 324e5,
            LIGT: 36e6,
            MET: 36e5,
            METDST: 72e5,
            MEWT: 36e5,
            MEST: 72e5,
            MEZ: 36e5,
            MST: -252e5,
            MDT: -216e5,
            MT: 306e5,
            NFT: -126e5,
            NDT: -9e6,
            NOR: 36e5,
            NST: -126e5,
            NZST: 432e5,
            NZDT: 468e5,
            NZT: 432e5,
            PST: -288e5,
            PDT: -252e5,
            SAT: 342e5,
            SADT: 378e5,
            SET: 36e5,
            SWT: 36e5,
            SST: 72e5,
            WAST: 252e5,
            WADT: 288e5,
            WAT: -36e5,
            WETDST: 36e5,
            WST: 288e5,
            WDT: 324e5,
            'ZP-11': -396e5,
            'ZP-2': -72e5,
            'ZP-3': -108e5,
            ZP11: 396e5,
            ZP4: 144e5,
            ZP5: 18e6,
            ZP6: 216e5,
          },
          l = (function() {
            function e(e, t, r) {
              (this.$q = t),
                (this.backendSrv = r),
                (this.url = 'https://nwis.waterservices.usgs.gov/nwis/'),
                (this.maxIVinterval = 8e6),
                (this.id = e.id),
                (this.name = e.name);
              var n = e.jsonData || {};
              this.maxIVinterval = i.default.interval_to_ms(n.jsonData || '3h');
            }
            return (
              (e.$inject = ['instanceSettings', '$q', 'backendSrv']),
              (e.prototype.query = function(e) {
                var t = this,
                  r = 18e5,
                  o = 'YYYY-MM-DDTHH:mm:00[Z]',
                  i = !1;
                if (e.targets.length > 1)
                  return this.$q.reject({
                    message: 'USGS does not (yet) support multiple targets',
                  });
                var a = e.targets[0],
                  u = a.args;
                if (!u) {
                  var l = new s.default(a);
                  u = l.target.args;
                }
                if (!u || !n.default.has(u, 'sites'))
                  return this.$q.reject({message: 'Missing USGS Site Selection'});
                n.default.has(u, 'service') || (u.service = 'iv');
                var c = this.url,
                  f = e.intervalMs > this.maxIVinterval;
                return (
                  'dv' === a.args.service || f
                    ? ((c += 'dv/service/?format=rdb'),
                      (r = 864e5),
                      (o = 'YYYY-MM-DD'),
                      (i = !0))
                    : (c += 'iv/service/?format=rdb'),
                  (c +=
                    '&startDT=' +
                    e.range.from
                      .subtract(r, 'ms')
                      .utc()
                      .format(o)),
                  'now' != e.rangeRaw.to &&
                    (c +=
                      '&endDT=' +
                      e.range.to
                        .add(r + 6e3, 'ms')
                        .utc()
                        .format(o)),
                  (c += '&sites=' + a.args.sites),
                  a.args.parameterCd &&
                    (c += '&parameterCd=' + a.args.parameterCd.join()),
                  a.args.statCd && i && (c += '&statCd=' + a.args.statCd.join()),
                  this.backendSrv
                    .datasourceRequest({url: c, method: 'GET'})
                    .then(function(e) {
                      var r = e.data.split('\n');
                      return {data: t.readRDB(r, !0, u.show, f).series};
                    })
                );
              }),
              (e.prototype.readRDB = function(e, t, r, s) {
                void 0 === s && (s = !1);
                for (
                  var i = {series: []}, a = 0, l = 1, c = e[l];
                  l < e.length && !c.startsWith('# Data for');

                )
                  c = e[++l];
                if (!(l >= e.length)) {
                  for (
                    null != (c = e[++l]) &&
                    ((a = (c = c.substring(2).trim()).indexOf(' ')),
                    (i.agency = c.substring(0, a)),
                    (a = c.indexOf(' ', a + 1)),
                    (i.site = c.substring(a + 1)));
                    l < e.length && !c.startsWith('# Data provided');

                  )
                    c = e[++l];
                  (a = c.lastIndexOf(' ')),
                    (i.siteID = c.substring(a + 1).trim()),
                    (a = (c = e[++l]).indexOf('Description'));
                  var f = c.substring(2, a).match(/[^ ]+/g);
                  if (null != f) {
                    c = e[++l];
                    for (
                      var d = [], p = [], h = new Map();
                      l < e.length && c.startsWith('#  ');

                    ) {
                      var v = c.substring(2, a).match(/[^ ]+/g);
                      if (null != v) {
                        for (var g = {}, y = 0; y < f.length; y++) g[f[y]] = v[y];
                        (g.Description = c.substring(a).trim()),
                          t ? (g.datapoints = []) : (g.values = []),
                          (g.key = g.TS_ID + '_' + g.Parameter),
                          n.default.has(g, 'Statistic') && (g.key += '_' + g.Statistic);
                        var m = '';
                        null == r || n.default.has(r, g.key)
                          ? (null != r && (m = r[g.key]), i.series.push(g), p.push(g.key))
                          : d.push(g),
                          m && 0 != m.length
                            ? (g.target = m)
                            : (g.target = g.Description),
                          h.set(g.key, g),
                          (c = e[++l]);
                      }
                    }
                    if (s && d.length > 0) {
                      var S = n.default.keys(r);
                      n.default.pull(S, p),
                        n.default.forEach(S, function(e) {
                          var t = e.split('_')[1];
                          if (t) {
                            var o = new Map();
                            n.default.forEach(d, function(e) {
                              t === e.Parameter && e.Statistic && o.set(e.Statistic, e);
                            });
                            var s = o.get('00003');
                            if (!s && !(s = o.get('00001'))) {
                              var a = o.keys().next().value;
                              s = o.get(a);
                            }
                            if (s) {
                              var u = r[e];
                              u && (s.target = u),
                                i.series.push(s),
                                console.log('replace', e, 'with', s);
                            } else console.log('could not find field to use for', e, S);
                          } else console.warn('Did not find parameter for skipped field', e);
                        });
                    }
                    for (; l < e.length && c.startsWith('#'); ) c = e[++l];
                    var T = c.split('\t');
                    for (y = 0; y < T.length; y++) h.has(T[y]) && (h.get(T[y]).index = y);
                    i.dates = [];
                    var b = 'tz_cd' === T[3];
                    for (l++, l++; l < e.length; )
                      if ((c = e[l++]).length > 5) {
                        var w = (T = c.split('\t'))[2],
                          C = 0;
                        if (b) {
                          var D = T[3],
                            A = u[D];
                          C = o.default.utc(w).valueOf() - A;
                        } else C = (0, o.default)(w).valueOf();
                        for (i.dates.push(C), y = 0; y < i.series.length; y++) {
                          var E = T[(g = i.series[y]).index];
                          (E = E && E.length > 0 ? parseFloat(E) : null),
                            t ? g.datapoints.push([E, C]) : g.values.push(E);
                        }
                      }
                    return i;
                  }
                }
              }),
              (e.prototype.testDatasource = function() {
                var e = {
                  range: {from: (0, o.default)().add(-4, 'h')},
                  rangeRaw: {to: 'now'},
                  targets: [{query: '&sites=01646500&service=iv&parameterCd=00010'}],
                };
                return (
                  console.log('USGS TEST', this),
                  this.query(e)
                    .then(function(e) {
                      return {
                        status: 'success',
                        message: 'Data source is working',
                        title: 'Success',
                      };
                    })
                    .catch(function(e) {
                      console.log('Error Testing USGS', e);
                      var t = e;
                      return e.message && (t = e.message), {status: 'error', message: t};
                    })
                );
              }),
              (e.prototype.annotationQuery = function(e) {
                throw new Error('Annotation Support not implemented yet.');
              }),
              (e.prototype.metricFindQuery = function(e) {
                throw new Error(
                  'Template Variable Support not implemented yet. (metricFindQuery)'
                );
              }),
              e
            );
          })();
        t.default = l;
      },
      function(e, r) {
        e.exports = t;
      },
      function(e, t) {
        e.exports = r;
      },
      function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.USGSDatasourceQueryCtrl = void 0);
        var n = i(r(0)),
          o = r(7);
        r(8);
        var s = i(r(1));
        function i(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var a = (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              };
            return function(t, r) {
              function n() {
                this.constructor = t;
              }
              e(t, r),
                (t.prototype =
                  null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
            };
          })(),
          u = (function(e) {
            function t(t, r, o, i) {
              var a = e.call(this, t, o) || this;
              (a.$scope = t), (a.$rootScope = r), (a.$injector = o), (a.uiSegmentSrv = i);
              var u = !1;
              return (
                n.default.isNil(a.target.query) &&
                  ((a.target.query = '&sites=01646500&service=iv'), (u = !0)),
                (a.query = new s.default(a.target)),
                a.validateArgsAndCheckInfo(),
                u && a.panelCtrl.refresh(),
                a
              );
            }
            return (
              a(t, e),
              (t.$inject = ['$scope', '$rootScope', '$injector', 'uiSegmentSrv']),
              (t.prototype.doSitePopup = function() {
                var e = this.$scope.$new(!0);
                (e.target = this.target),
                  (e.datasource = this.datasource),
                  this.$rootScope.appEvent('show-modal', {
                    templateHtml:
                      '<find-usgs-site-modal target="target" datasource="datasource"></find-usgs-site-modal>',
                    scope: e,
                  });
              }),
              (t.prototype.toggleSeries = function(e) {
                var t = this.target.args.show;
                this.isSelected(e)
                  ? n.default.unset(t, e.key)
                  : (t || (this.target.args.show = t = {}), (t[e.key] = '')),
                  this.onChangeInternal();
              }),
              (t.prototype.isSelected = function(e) {
                return n.default.hasIn(this.target.args, 'show.' + e.key);
              }),
              (t.prototype.toggleEditorMode = function() {
                this.target.rawQuery = !this.target.rawQuery;
              }),
              (t.prototype.onChangeQuery = function() {
                (this.target.args = this.query.parse(this.target.query)),
                  this.validateArgsAndCheckInfo(!0);
              }),
              (t.prototype.onChangeInternal = function() {
                this.validateArgsAndCheckInfo(!0);
              }),
              (t.prototype.validateArgsAndCheckInfo = function(e) {
                var t = this;
                void 0 === e && (e = !1);
                var r = this.target.args;
                n.default.unset(r, 'parameterCd'),
                  n.default.unset(r, 'statCd'),
                  r.show &&
                    (n.default.size(r.show) > 0
                      ? n.default.forEach(r.show, function(e, t) {
                          var o = t.split('_');
                          if (o.length > 1) {
                            var s = o[1];
                            null == r.parameterCd
                              ? (r.parameterCd = [s])
                              : n.default.includes(r.parameterCd, s) ||
                                r.parameterCd.push(s);
                          }
                          o.length > 2 &&
                            ((s = o[2]),
                            null == r.statCd
                              ? (r.statCd = [s])
                              : n.default.includes(r.statCd, s) || r.statCd.push(s));
                        })
                      : n.default.unset(r, 'show'));
                var o = r.service + '@' + r.sites;
                if (this.key != o) {
                  this.key = o;
                  var s =
                    'https://waterservices.usgs.gov/nwis/' +
                    r.service +
                    '/service/?format=rdb&sites=' +
                    r.sites;
                  return this.datasource.backendSrv
                    .datasourceRequest({url: s, method: 'GET'})
                    .then(function(o) {
                      var s = o.data.split('\n');
                      if (((t.info = t.datasource.readRDB(s, !1, null)), r.show)) {
                        var i = {};
                        n.default.forEach(r.show, function(e, r) {
                          n.default.forEach(t.info.series, function(t) {
                            return r !== t.key || ((i[r] = e), !1);
                          });
                        }),
                          n.default.size(i) > 0
                            ? (r.show = i)
                            : n.default.unset(r, 'show');
                      }
                      e &&
                        ((t.target.query = t.query.argsToQueryString(r)),
                        t.panelCtrl.refresh());
                    });
                }
                e &&
                  ((this.target.query = this.query.argsToQueryString(r)),
                  this.panelCtrl.refresh());
              }),
              (t.templateUrl = 'partials/query.editor.html'),
              t
            );
          })(o.QueryCtrl);
        t.USGSDatasourceQueryCtrl = u;
      },
      function(e, t) {
        e.exports = n;
      },
      function(e, t, r) {
        var n = r(9);
        'string' == typeof n && (n = [[e.i, n, '']]);
        r(11)(n, {hmr: !0, transform: void 0, insertInto: void 0}),
          n.locals && (e.exports = n.locals);
      },
      function(e, t, r) {
        (e.exports = r(10)(!0)).push([
          e.i,
          '.generic-datasource-query-row .query-keyword {\r\n  width: 75px;\r\n}\r\n',
          '',
          {
            version: 3,
            sources: [
              'C:/workspace/grafana-plugins/natel-usgs-datasource/src/css/query-editor.css',
            ],
            names: [],
            mappings: 'AAAA;EACE,YAAY;CACb',
            file: 'query-editor.css',
            sourcesContent: [
              '.generic-datasource-query-row .query-keyword {\r\n  width: 75px;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]);
      },
      function(e, t) {
        e.exports = function(e) {
          var t = [];
          return (
            (t.toString = function() {
              return this.map(function(t) {
                var r = (function(e, t) {
                  var r = e[1] || '',
                    n = e[3];
                  if (!n) return r;
                  if (t && 'function' == typeof btoa) {
                    var o = (function(e) {
                        return (
                          '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
                          ' */'
                        );
                      })(n),
                      s = n.sources.map(function(e) {
                        return '/*# sourceURL=' + n.sourceRoot + e + ' */';
                      });
                    return [r]
                      .concat(s)
                      .concat([o])
                      .join('\n');
                  }
                  return [r].join('\n');
                })(t, e);
                return t[2] ? '@media ' + t[2] + '{' + r + '}' : r;
              }).join('');
            }),
            (t.i = function(e, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              for (var n = {}, o = 0; o < this.length; o++) {
                var s = this[o][0];
                'number' == typeof s && (n[s] = !0);
              }
              for (o = 0; o < e.length; o++) {
                var i = e[o];
                ('number' == typeof i[0] && n[i[0]]) ||
                  (r && !i[2]
                    ? (i[2] = r)
                    : r && (i[2] = '(' + i[2] + ') and (' + r + ')'),
                  t.push(i));
              }
            }),
            t
          );
        };
      },
      function(e, t, r) {
        var n = {},
          o = (function(e) {
            var t;
            return function() {
              return (
                void 0 === t &&
                  (t = function() {
                    return window && document && document.all && !window.atob;
                  }.apply(this, arguments)),
                t
              );
            };
          })(),
          s = (function(e) {
            var t = {};
            return function(e) {
              if ('function' == typeof e) return e();
              if (void 0 === t[e]) {
                var r = function(e) {
                  return document.querySelector(e);
                }.call(this, e);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                t[e] = r;
              }
              return t[e];
            };
          })(),
          i = null,
          a = 0,
          u = [],
          l = r(12);
        function c(e, t) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r],
              s = n[o.id];
            if (s) {
              s.refs++;
              for (var i = 0; i < s.parts.length; i++) s.parts[i](o.parts[i]);
              for (; i < o.parts.length; i++) s.parts.push(g(o.parts[i], t));
            } else {
              var a = [];
              for (i = 0; i < o.parts.length; i++) a.push(g(o.parts[i], t));
              n[o.id] = {id: o.id, refs: 1, parts: a};
            }
          }
        }
        function f(e, t) {
          for (var r = [], n = {}, o = 0; o < e.length; o++) {
            var s = e[o],
              i = t.base ? s[0] + t.base : s[0],
              a = {css: s[1], media: s[2], sourceMap: s[3]};
            n[i] ? n[i].parts.push(a) : r.push((n[i] = {id: i, parts: [a]}));
          }
          return r;
        }
        function d(e, t) {
          var r = s(e.insertInto);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var n = u[u.length - 1];
          if ('top' === e.insertAt)
            n
              ? n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t)
              : r.insertBefore(t, r.firstChild),
              u.push(t);
          else if ('bottom' === e.insertAt) r.appendChild(t);
          else {
            if ('object' != typeof e.insertAt || !e.insertAt.before)
              throw new Error(
                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
              );
            var o = s(e.insertInto + ' ' + e.insertAt.before);
            r.insertBefore(t, o);
          }
        }
        function p(e) {
          if (null === e.parentNode) return !1;
          e.parentNode.removeChild(e);
          var t = u.indexOf(e);
          t >= 0 && u.splice(t, 1);
        }
        function h(e) {
          var t = document.createElement('style');
          return (
            void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
            v(t, e.attrs),
            d(e, t),
            t
          );
        }
        function v(e, t) {
          Object.keys(t).forEach(function(r) {
            e.setAttribute(r, t[r]);
          });
        }
        function g(e, t) {
          var r, n, o, s;
          if (t.transform && e.css) {
            if (!(s = t.transform(e.css))) return function() {};
            e.css = s;
          }
          if (t.singleton) {
            var u = a++;
            (r = i || (i = h(t))),
              (n = m.bind(null, r, u, !1)),
              (o = m.bind(null, r, u, !0));
          } else
            e.sourceMap &&
            'function' == typeof URL &&
            'function' == typeof URL.createObjectURL &&
            'function' == typeof URL.revokeObjectURL &&
            'function' == typeof Blob &&
            'function' == typeof btoa
              ? ((r = (function(e) {
                  var t = document.createElement('link');
                  return (
                    void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                    (e.attrs.rel = 'stylesheet'),
                    v(t, e.attrs),
                    d(e, t),
                    t
                  );
                })(t)),
                (n = function(e, t, r) {
                  var n = r.css,
                    o = r.sourceMap,
                    s = void 0 === t.convertToAbsoluteUrls && o;
                  (t.convertToAbsoluteUrls || s) && (n = l(n)),
                    o &&
                      (n +=
                        '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                        ' */');
                  var i = new Blob([n], {type: 'text/css'}),
                    a = e.href;
                  (e.href = URL.createObjectURL(i)), a && URL.revokeObjectURL(a);
                }.bind(null, r, t)),
                (o = function() {
                  p(r), r.href && URL.revokeObjectURL(r.href);
                }))
              : ((r = h(t)),
                (n = function(e, t) {
                  var r = t.css,
                    n = t.media;
                  if ((n && e.setAttribute('media', n), e.styleSheet))
                    e.styleSheet.cssText = r;
                  else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                  }
                }.bind(null, r)),
                (o = function() {
                  p(r);
                }));
          return (
            n(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                  return;
                n((e = t));
              } else o();
            }
          );
        }
        e.exports = function(e, t) {
          if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
            throw new Error(
              'The style-loader cannot be used in a non-browser environment'
            );
          ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
            t.singleton || 'boolean' == typeof t.singleton || (t.singleton = o()),
            t.insertInto || (t.insertInto = 'head'),
            t.insertAt || (t.insertAt = 'bottom');
          var r = f(e, t);
          return (
            c(r, t),
            function(e) {
              for (var o = [], s = 0; s < r.length; s++) {
                var i = r[s];
                (a = n[i.id]).refs--, o.push(a);
              }
              for (e && c(f(e, t), t), s = 0; s < o.length; s++) {
                var a;
                if (0 === (a = o[s]).refs) {
                  for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                  delete n[a.id];
                }
              }
            }
          );
        };
        var y = (function() {
          var e = [];
          return function(t, r) {
            return (e[t] = r), e.filter(Boolean).join('\n');
          };
        })();
        function m(e, t, r, n) {
          var o = r ? '' : n.css;
          if (e.styleSheet) e.styleSheet.cssText = y(t, o);
          else {
            var s = document.createTextNode(o),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
          }
        }
      },
      function(e, t) {
        e.exports = function(e) {
          var t = 'undefined' != typeof window && window.location;
          if (!t) throw new Error('fixUrls requires window.location');
          if (!e || 'string' != typeof e) return e;
          var r = t.protocol + '//' + t.host,
            n = r + t.pathname.replace(/\/[^\/]*$/, '/');
          return e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function(e, t) {
              var o,
                s = t
                  .trim()
                  .replace(/^"(.*)"$/, function(e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function(e, t) {
                    return t;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)
                ? e
                : ((o =
                    0 === s.indexOf('//')
                      ? s
                      : 0 === s.indexOf('/') ? r + s : n + s.replace(/^\.\//, '')),
                  'url(' + JSON.stringify(o) + ')');
            }
          );
        };
      },
      function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.findUSGSSiteModalDirective = s);
        var n = (function(e) {
            return e && e.__esModule ? e : {default: e};
          })(r(14)),
          o = (function() {
            function e(e) {
              (this.$scope = e), console.log('TODO... find USGS sites with', this);
            }
            return (
              (e.$inject = ['$scope']),
              (e.prototype.onSave = function() {
                console.log('TODO... update the site ID'), this.dismiss();
              }),
              (e.prototype.dismiss = function() {
                this.$scope.$parent.dismiss();
              }),
              e
            );
          })();
        function s() {
          return {
            restrict: 'E',
            templateUrl:
              'public/plugins/natel-usgs-datasource/partials/find_site_modal.html',
            controller: o,
            bindToController: !0,
            transclude: !0,
            controllerAs: 'ctrl',
            scope: {target: '<', datasource: '<'},
          };
        }
        (t.default = o), n.default.directive('findUsgsSiteModal', s);
      },
      function(e, t) {
        e.exports = o;
      },
    ]);
  }
);
//# sourceMappingURL=module.js.map
