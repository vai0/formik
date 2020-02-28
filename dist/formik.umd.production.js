!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], e)
    : e(((t = t || self).Formik = {}), t.React);
})(this, function (t, e) {
  'use strict';
  var r = 'default' in e ? e.default : e,
    n = function (t, e) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
  function o(t, e) {
    function r() {
      this.constructor = t;
    }
    n(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  }
  var i = function () {
    return (i =
      Object.assign ||
      function (t) {
        for (var e, r = 1, n = arguments.length; r < n; r++)
          for (var o in (e = arguments[r]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
  function a(t, e) {
    var r = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        e.indexOf(n) < 0 &&
        (r[n] = t[n]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
        e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
    }
    return r;
  }
  var u = Array.isArray,
    s = Object.keys,
    c = Object.prototype.hasOwnProperty,
    l = 'undefined' != typeof Element;
  var p = function (t, e) {
      try {
        return (function t(e, r) {
          if (e === r) return !0;
          if (e && r && 'object' == typeof e && 'object' == typeof r) {
            var n,
              o,
              i,
              a = u(e),
              p = u(r);
            if (a && p) {
              if ((o = e.length) != r.length) return !1;
              for (n = o; 0 != n--; ) if (!t(e[n], r[n])) return !1;
              return !0;
            }
            if (a != p) return !1;
            var f = e instanceof Date,
              d = r instanceof Date;
            if (f != d) return !1;
            if (f && d) return e.getTime() == r.getTime();
            var h = e instanceof RegExp,
              v = r instanceof RegExp;
            if (h != v) return !1;
            if (h && v) return e.toString() == r.toString();
            var m = s(e);
            if ((o = m.length) !== s(r).length) return !1;
            for (n = o; 0 != n--; ) if (!c.call(r, m[n])) return !1;
            if (l && e instanceof Element && r instanceof Element)
              return e === r;
            for (n = o; 0 != n--; )
              if (!(('_owner' === (i = m[n]) && e.$$typeof) || t(e[i], r[i])))
                return !1;
            return !0;
          }
          return e != e && r != r;
        })(t, e);
      } catch (t) {
        if (
          (t.message && t.message.match(/stack|recursion/i)) ||
          -2146828260 === t.number
        )
          return (
            console.warn(
              'Warning: react-fast-compare does not handle circular references.',
              t.name,
              t.message
            ),
            !1
          );
        throw t;
      }
    },
    f = function (t) {
      return (
        (function (t) {
          return !!t && 'object' == typeof t;
        })(t) &&
        !(function (t) {
          var e = Object.prototype.toString.call(t);
          return (
            '[object RegExp]' === e ||
            '[object Date]' === e ||
            (function (t) {
              return t.$$typeof === d;
            })(t)
          );
        })(t)
      );
    };
  var d =
    'function' == typeof Symbol && Symbol.for
      ? Symbol.for('react.element')
      : 60103;
  function h(t, e) {
    return !1 !== e.clone && e.isMergeableObject(t)
      ? m(Array.isArray(t) ? [] : {}, t, e)
      : t;
  }
  function v(t, e, r) {
    return t.concat(e).map(function (t) {
      return h(t, r);
    });
  }
  function m(t, e, r) {
    ((r = r || {}).arrayMerge = r.arrayMerge || v),
      (r.isMergeableObject = r.isMergeableObject || f);
    var n = Array.isArray(e);
    return n === Array.isArray(t)
      ? n
        ? r.arrayMerge(t, e, r)
        : (function (t, e, r) {
            var n = {};
            return (
              r.isMergeableObject(t) &&
                Object.keys(t).forEach(function (e) {
                  n[e] = h(t[e], r);
                }),
              Object.keys(e).forEach(function (o) {
                n[o] =
                  r.isMergeableObject(e[o]) && t[o]
                    ? m(t[o], e[o], r)
                    : h(e[o], r);
              }),
              n
            );
          })(t, e, r)
      : h(e, r);
  }
  m.all = function (t, e) {
    if (!Array.isArray(t)) throw new Error('first argument should be an array');
    return t.reduce(function (t, r) {
      return m(t, r, e);
    }, {});
  };
  var y = m,
    b = {
      childContextTypes: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    g = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    j = Object.defineProperty,
    _ = Object.getOwnPropertyNames,
    O = Object.getOwnPropertySymbols,
    S = Object.getOwnPropertyDescriptor,
    F = Object.getPrototypeOf,
    w = F && F(Object);
  var k = function t(e, r, n) {
      if ('string' != typeof r) {
        if (w) {
          var o = F(r);
          o && o !== w && t(e, o, n);
        }
        var i = _(r);
        O && (i = i.concat(O(r)));
        for (var a = 0; a < i.length; ++a) {
          var u = i[a];
          if (!(b[u] || g[u] || (n && n[u]))) {
            var s = S(r, u);
            try {
              j(e, u, s);
            } catch (t) {}
          }
        }
        return e;
      }
      return e;
    },
    A =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {};
  function E(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, 'default')
      ? t.default
      : t;
  }
  function P(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var C = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  function V() {}
  function x() {}
  x.resetWarningCache = V;
  var T = P(function (t) {
      t.exports = (function () {
        function t(t, e, r, n, o, i) {
          if (i !== C) {
            var a = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((a.name = 'Invariant Violation'), a);
          }
        }
        function e() {
          return t;
        }
        t.isRequired = t;
        var r = {
          array: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: x,
          resetWarningCache: V,
        };
        return (r.PropTypes = r), r;
      })();
    }),
    M = '__global_unique_id__',
    R = function () {
      return (A[M] = (A[M] || 0) + 1);
    };
  function U(t) {
    return function () {
      return t;
    };
  }
  var B = function () {};
  (B.thatReturns = U),
    (B.thatReturnsFalse = U(!1)),
    (B.thatReturnsTrue = U(!0)),
    (B.thatReturnsNull = U(null)),
    (B.thatReturnsThis = function () {
      return this;
    }),
    (B.thatReturnsArgument = function (t) {
      return t;
    });
  var D = B,
    I = P(function (t, e) {
      e.__esModule = !0;
      i(r);
      var n = i(T),
        o = i(R);
      i(D);
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function u(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function s(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var c = 1073741823;
      (e.default = function (t, e) {
        var i,
          l,
          p = '__create-react-context-' + (0, o.default)() + '__',
          f = (function (t) {
            function r() {
              var e, n, o, i;
              a(this, r);
              for (var s = arguments.length, c = Array(s), l = 0; l < s; l++)
                c[l] = arguments[l];
              return (
                (e = n = u(this, t.call.apply(t, [this].concat(c)))),
                (n.emitter =
                  ((o = n.props.value),
                  (i = []),
                  {
                    on: function (t) {
                      i.push(t);
                    },
                    off: function (t) {
                      i = i.filter(function (e) {
                        return e !== t;
                      });
                    },
                    get: function () {
                      return o;
                    },
                    set: function (t, e) {
                      (o = t),
                        i.forEach(function (t) {
                          return t(o, e);
                        });
                    },
                  })),
                u(n, e)
              );
            }
            return (
              s(r, t),
              (r.prototype.getChildContext = function () {
                var t;
                return ((t = {})[p] = this.emitter), t;
              }),
              (r.prototype.componentWillReceiveProps = function (t) {
                if (this.props.value !== t.value) {
                  var r = this.props.value,
                    n = t.value,
                    o = void 0;
                  (
                    (i = r) === (a = n)
                      ? 0 !== i || 1 / i == 1 / a
                      : i != i && a != a
                  )
                    ? (o = 0)
                    : ((o = 'function' == typeof e ? e(r, n) : c),
                      0 != (o |= 0) && this.emitter.set(t.value, o));
                }
                var i, a;
              }),
              (r.prototype.render = function () {
                return this.props.children;
              }),
              r
            );
          })(r.Component);
        f.childContextTypes = (((i = {})[p] = n.default.object.isRequired), i);
        var d = (function (e) {
          function r() {
            var t, n;
            a(this, r);
            for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
            return (
              (t = n = u(this, e.call.apply(e, [this].concat(i)))),
              (n.state = { value: n.getValue() }),
              (n.onUpdate = function (t, e) {
                0 != ((0 | n.observedBits) & e) &&
                  n.setState({ value: n.getValue() });
              }),
              u(n, t)
            );
          }
          return (
            s(r, e),
            (r.prototype.componentWillReceiveProps = function (t) {
              var e = t.observedBits;
              this.observedBits = null == e ? c : e;
            }),
            (r.prototype.componentDidMount = function () {
              this.context[p] && this.context[p].on(this.onUpdate);
              var t = this.props.observedBits;
              this.observedBits = null == t ? c : t;
            }),
            (r.prototype.componentWillUnmount = function () {
              this.context[p] && this.context[p].off(this.onUpdate);
            }),
            (r.prototype.getValue = function () {
              return this.context[p] ? this.context[p].get() : t;
            }),
            (r.prototype.render = function () {
              return ((t = this.props.children), Array.isArray(t) ? t[0] : t)(
                this.state.value
              );
              var t;
            }),
            r
          );
        })(r.Component);
        return (
          (d.contextTypes = (((l = {})[p] = n.default.object), l)),
          { Provider: f, Consumer: d }
        );
      }),
        (t.exports = e.default);
    });
  E(I);
  var z,
    N = (z = E(
      P(function (t, e) {
        e.__esModule = !0;
        var n = i(r),
          o = i(I);
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        (e.default = n.default.createContext || o.default),
          (t.exports = e.default);
      })
    )({})).Provider,
    W = z.Consumer;
  function L(t) {
    var r = function (r) {
        return e.createElement(W, null, function (n) {
          return e.createElement(t, i({}, r, { formik: n }));
        });
      },
      n =
        t.displayName ||
        t.name ||
        (t.constructor && t.constructor.name) ||
        'Component';
    return (
      (r.WrappedComponent = t),
      (r.displayName = 'FormikConnect(' + n + ')'),
      k(r, t)
    );
  }
  var $ = Array.isArray,
    q =
      'object' == typeof global && global && global.Object === Object && global,
    Y = 'object' == typeof self && self && self.Object === Object && self,
    H = q || Y || Function('return this')(),
    G = H.Symbol,
    J = Object.prototype,
    K = J.hasOwnProperty,
    Q = J.toString,
    X = G ? G.toStringTag : void 0;
  var Z = Object.prototype.toString;
  var tt = '[object Null]',
    et = '[object Undefined]',
    rt = G ? G.toStringTag : void 0;
  function nt(t) {
    return null == t
      ? void 0 === t
        ? et
        : tt
      : rt && rt in Object(t)
      ? (function (t) {
          var e = K.call(t, X),
            r = t[X];
          try {
            t[X] = void 0;
            var n = !0;
          } catch (t) {}
          var o = Q.call(t);
          return n && (e ? (t[X] = r) : delete t[X]), o;
        })(t)
      : (function (t) {
          return Z.call(t);
        })(t);
  }
  function ot(t) {
    return null != t && 'object' == typeof t;
  }
  var it = '[object Symbol]';
  function at(t) {
    return 'symbol' == typeof t || (ot(t) && nt(t) == it);
  }
  var ut = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    st = /^\w*$/;
  function ct(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  }
  var lt = '[object AsyncFunction]',
    pt = '[object Function]',
    ft = '[object GeneratorFunction]',
    dt = '[object Proxy]';
  function ht(t) {
    if (!ct(t)) return !1;
    var e = nt(t);
    return e == pt || e == ft || e == lt || e == dt;
  }
  var vt,
    mt = H['__core-js_shared__'],
    yt = (vt = /[^.]+$/.exec((mt && mt.keys && mt.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + vt
      : '';
  var bt = Function.prototype.toString;
  function gt(t) {
    if (null != t) {
      try {
        return bt.call(t);
      } catch (t) {}
      try {
        return t + '';
      } catch (t) {}
    }
    return '';
  }
  var jt = /^\[object .+?Constructor\]$/,
    _t = Function.prototype,
    Ot = Object.prototype,
    St = RegExp(
      '^' +
        _t.toString
          .call(Ot.hasOwnProperty)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function Ft(t) {
    return (
      !(!ct(t) || ((e = t), yt && yt in e)) && (ht(t) ? St : jt).test(gt(t))
    );
    var e;
  }
  function wt(t, e) {
    var r = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Ft(r) ? r : void 0;
  }
  var kt = wt(Object, 'create');
  var At = '__lodash_hash_undefined__',
    Et = Object.prototype.hasOwnProperty;
  var Pt = Object.prototype.hasOwnProperty;
  var Ct = '__lodash_hash_undefined__';
  function Vt(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function xt(t, e) {
    return t === e || (t != t && e != e);
  }
  function Tt(t, e) {
    for (var r = t.length; r--; ) if (xt(t[r][0], e)) return r;
    return -1;
  }
  (Vt.prototype.clear = function () {
    (this.__data__ = kt ? kt(null) : {}), (this.size = 0);
  }),
    (Vt.prototype.delete = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }),
    (Vt.prototype.get = function (t) {
      var e = this.__data__;
      if (kt) {
        var r = e[t];
        return r === At ? void 0 : r;
      }
      return Et.call(e, t) ? e[t] : void 0;
    }),
    (Vt.prototype.has = function (t) {
      var e = this.__data__;
      return kt ? void 0 !== e[t] : Pt.call(e, t);
    }),
    (Vt.prototype.set = function (t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = kt && void 0 === e ? Ct : e),
        this
      );
    });
  var Mt = Array.prototype.splice;
  function Rt(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (Rt.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
  }),
    (Rt.prototype.delete = function (t) {
      var e = this.__data__,
        r = Tt(e, t);
      return !(
        r < 0 ||
        (r == e.length - 1 ? e.pop() : Mt.call(e, r, 1), --this.size, 0)
      );
    }),
    (Rt.prototype.get = function (t) {
      var e = this.__data__,
        r = Tt(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (Rt.prototype.has = function (t) {
      return Tt(this.__data__, t) > -1;
    }),
    (Rt.prototype.set = function (t, e) {
      var r = this.__data__,
        n = Tt(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    });
  var Ut = wt(H, 'Map');
  function Bt(t, e) {
    var r,
      n,
      o = t.__data__;
    return (
      'string' == (n = typeof (r = e)) ||
      'number' == n ||
      'symbol' == n ||
      'boolean' == n
        ? '__proto__' !== r
        : null === r
    )
      ? o['string' == typeof e ? 'string' : 'hash']
      : o.map;
  }
  function Dt(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (Dt.prototype.clear = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Vt(),
        map: new (Ut || Rt)(),
        string: new Vt(),
      });
  }),
    (Dt.prototype.delete = function (t) {
      var e = Bt(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }),
    (Dt.prototype.get = function (t) {
      return Bt(this, t).get(t);
    }),
    (Dt.prototype.has = function (t) {
      return Bt(this, t).has(t);
    }),
    (Dt.prototype.set = function (t, e) {
      var r = Bt(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    });
  var It = 'Expected a function';
  function zt(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e))
      throw new TypeError(It);
    var r = function () {
      var n = arguments,
        o = e ? e.apply(this, n) : n[0],
        i = r.cache;
      if (i.has(o)) return i.get(o);
      var a = t.apply(this, n);
      return (r.cache = i.set(o, a) || i), a;
    };
    return (r.cache = new (zt.Cache || Dt)()), r;
  }
  zt.Cache = Dt;
  var Nt = 500;
  var Wt,
    Lt,
    $t,
    qt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Yt = /\\(\\)?/g,
    Ht =
      ((Wt = function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(''),
          t.replace(qt, function (t, r, n, o) {
            e.push(n ? o.replace(Yt, '$1') : r || t);
          }),
          e
        );
      }),
      (Lt = zt(Wt, function (t) {
        return $t.size === Nt && $t.clear(), t;
      })),
      ($t = Lt.cache),
      Lt);
  function Gt(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
      o[r] = e(t[r], r, t);
    return o;
  }
  var Jt = 1 / 0,
    Kt = G ? G.prototype : void 0,
    Qt = Kt ? Kt.toString : void 0;
  function Xt(t) {
    if ('string' == typeof t) return t;
    if ($(t)) return Gt(t, Xt) + '';
    if (at(t)) return Qt ? Qt.call(t) : '';
    var e = t + '';
    return '0' == e && 1 / t == -Jt ? '-0' : e;
  }
  function Zt(t) {
    return null == t ? '' : Xt(t);
  }
  function te(t, e) {
    return $(t)
      ? t
      : (function (t, e) {
          if ($(t)) return !1;
          var r = typeof t;
          return (
            !(
              'number' != r &&
              'symbol' != r &&
              'boolean' != r &&
              null != t &&
              !at(t)
            ) ||
            st.test(t) ||
            !ut.test(t) ||
            (null != e && t in Object(e))
          );
        })(t, e)
      ? [t]
      : Ht(Zt(t));
  }
  var ee = 1 / 0;
  function re(t) {
    if ('string' == typeof t || at(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -ee ? '-0' : e;
  }
  function ne(t, e, r) {
    var n =
      null == t
        ? void 0
        : (function (t, e) {
            for (var r = 0, n = (e = te(e, t)).length; null != t && r < n; )
              t = t[re(e[r++])];
            return r && r == n ? t : void 0;
          })(t, e);
    return void 0 === n ? r : n;
  }
  var oe = 200;
  function ie(t) {
    var e = (this.__data__ = new Rt(t));
    this.size = e.size;
  }
  (ie.prototype.clear = function () {
    (this.__data__ = new Rt()), (this.size = 0);
  }),
    (ie.prototype.delete = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }),
    (ie.prototype.get = function (t) {
      return this.__data__.get(t);
    }),
    (ie.prototype.has = function (t) {
      return this.__data__.has(t);
    }),
    (ie.prototype.set = function (t, e) {
      var r = this.__data__;
      if (r instanceof Rt) {
        var n = r.__data__;
        if (!Ut || n.length < oe - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new Dt(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    });
  var ae = (function () {
    try {
      var t = wt(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (t) {}
  })();
  function ue(t, e, r) {
    '__proto__' == e && ae
      ? ae(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (t[e] = r);
  }
  var se = Object.prototype.hasOwnProperty;
  function ce(t, e, r) {
    var n = t[e];
    (se.call(t, e) && xt(n, r) && (void 0 !== r || e in t)) || ue(t, e, r);
  }
  function le(t, e, r, n) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = e.length; ++i < a; ) {
      var u = e[i],
        s = n ? n(r[u], t[u], u, r, t) : void 0;
      void 0 === s && (s = t[u]), o ? ue(r, u, s) : ce(r, u, s);
    }
    return r;
  }
  var pe = '[object Arguments]';
  function fe(t) {
    return ot(t) && nt(t) == pe;
  }
  var de = Object.prototype,
    he = de.hasOwnProperty,
    ve = de.propertyIsEnumerable,
    me = fe(
      (function () {
        return arguments;
      })()
    )
      ? fe
      : function (t) {
          return ot(t) && he.call(t, 'callee') && !ve.call(t, 'callee');
        };
  var ye = 'object' == typeof t && t && !t.nodeType && t,
    be =
      ye && 'object' == typeof module && module && !module.nodeType && module,
    ge = be && be.exports === ye ? H.Buffer : void 0,
    je =
      (ge ? ge.isBuffer : void 0) ||
      function () {
        return !1;
      },
    _e = 9007199254740991,
    Oe = /^(?:0|[1-9]\d*)$/;
  function Se(t, e) {
    var r = typeof t;
    return (
      !!(e = null == e ? _e : e) &&
      ('number' == r || ('symbol' != r && Oe.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  }
  var Fe = 9007199254740991;
  function we(t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Fe;
  }
  var ke = {};
  function Ae(t) {
    return function (e) {
      return t(e);
    };
  }
  (ke['[object Float32Array]'] = ke['[object Float64Array]'] = ke[
    '[object Int8Array]'
  ] = ke['[object Int16Array]'] = ke['[object Int32Array]'] = ke[
    '[object Uint8Array]'
  ] = ke['[object Uint8ClampedArray]'] = ke['[object Uint16Array]'] = ke[
    '[object Uint32Array]'
  ] = !0),
    (ke['[object Arguments]'] = ke['[object Array]'] = ke[
      '[object ArrayBuffer]'
    ] = ke['[object Boolean]'] = ke['[object DataView]'] = ke[
      '[object Date]'
    ] = ke['[object Error]'] = ke['[object Function]'] = ke[
      '[object Map]'
    ] = ke['[object Number]'] = ke['[object Object]'] = ke[
      '[object RegExp]'
    ] = ke['[object Set]'] = ke['[object String]'] = ke[
      '[object WeakMap]'
    ] = !1);
  var Ee = 'object' == typeof t && t && !t.nodeType && t,
    Pe =
      Ee && 'object' == typeof module && module && !module.nodeType && module,
    Ce = Pe && Pe.exports === Ee && q.process,
    Ve = (function () {
      try {
        var t = Pe && Pe.require && Pe.require('util').types;
        return t || (Ce && Ce.binding && Ce.binding('util'));
      } catch (t) {}
    })(),
    xe = Ve && Ve.isTypedArray,
    Te = xe
      ? Ae(xe)
      : function (t) {
          return ot(t) && we(t.length) && !!ke[nt(t)];
        },
    Me = Object.prototype.hasOwnProperty;
  function Re(t, e) {
    var r = $(t),
      n = !r && me(t),
      o = !r && !n && je(t),
      i = !r && !n && !o && Te(t),
      a = r || n || o || i,
      u = a
        ? (function (t, e) {
            for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
            return n;
          })(t.length, String)
        : [],
      s = u.length;
    for (var c in t)
      (!e && !Me.call(t, c)) ||
        (a &&
          ('length' == c ||
            (o && ('offset' == c || 'parent' == c)) ||
            (i && ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
            Se(c, s))) ||
        u.push(c);
    return u;
  }
  var Ue = Object.prototype;
  function Be(t) {
    var e = t && t.constructor;
    return t === (('function' == typeof e && e.prototype) || Ue);
  }
  function De(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  var Ie = De(Object.keys, Object),
    ze = Object.prototype.hasOwnProperty;
  function Ne(t) {
    return null != t && we(t.length) && !ht(t);
  }
  function We(t) {
    return Ne(t)
      ? Re(t)
      : (function (t) {
          if (!Be(t)) return Ie(t);
          var e = [];
          for (var r in Object(t))
            ze.call(t, r) && 'constructor' != r && e.push(r);
          return e;
        })(t);
  }
  var Le = Object.prototype.hasOwnProperty;
  function $e(t) {
    if (!ct(t))
      return (function (t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      })(t);
    var e = Be(t),
      r = [];
    for (var n in t) ('constructor' != n || (!e && Le.call(t, n))) && r.push(n);
    return r;
  }
  function qe(t) {
    return Ne(t) ? Re(t, !0) : $e(t);
  }
  var Ye = 'object' == typeof t && t && !t.nodeType && t,
    He =
      Ye && 'object' == typeof module && module && !module.nodeType && module,
    Ge = He && He.exports === Ye ? H.Buffer : void 0,
    Je = Ge ? Ge.allocUnsafe : void 0;
  function Ke(t, e) {
    var r = -1,
      n = t.length;
    for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
    return e;
  }
  function Qe() {
    return [];
  }
  var Xe = Object.prototype.propertyIsEnumerable,
    Ze = Object.getOwnPropertySymbols,
    tr = Ze
      ? function (t) {
          return null == t
            ? []
            : ((t = Object(t)),
              (function (t, e) {
                for (
                  var r = -1, n = null == t ? 0 : t.length, o = 0, i = [];
                  ++r < n;

                ) {
                  var a = t[r];
                  e(a, r, t) && (i[o++] = a);
                }
                return i;
              })(Ze(t), function (e) {
                return Xe.call(t, e);
              }));
        }
      : Qe;
  function er(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  var rr = De(Object.getPrototypeOf, Object),
    nr = Object.getOwnPropertySymbols
      ? function (t) {
          for (var e = []; t; ) er(e, tr(t)), (t = rr(t));
          return e;
        }
      : Qe;
  function or(t, e, r) {
    var n = e(t);
    return $(t) ? n : er(n, r(t));
  }
  function ir(t) {
    return or(t, We, tr);
  }
  function ar(t) {
    return or(t, qe, nr);
  }
  var ur = wt(H, 'DataView'),
    sr = wt(H, 'Promise'),
    cr = wt(H, 'Set'),
    lr = wt(H, 'WeakMap'),
    pr = gt(ur),
    fr = gt(Ut),
    dr = gt(sr),
    hr = gt(cr),
    vr = gt(lr),
    mr = nt;
  ((ur && '[object DataView]' != mr(new ur(new ArrayBuffer(1)))) ||
    (Ut && '[object Map]' != mr(new Ut())) ||
    (sr && '[object Promise]' != mr(sr.resolve())) ||
    (cr && '[object Set]' != mr(new cr())) ||
    (lr && '[object WeakMap]' != mr(new lr()))) &&
    (mr = function (t) {
      var e = nt(t),
        r = '[object Object]' == e ? t.constructor : void 0,
        n = r ? gt(r) : '';
      if (n)
        switch (n) {
          case pr:
            return '[object DataView]';
          case fr:
            return '[object Map]';
          case dr:
            return '[object Promise]';
          case hr:
            return '[object Set]';
          case vr:
            return '[object WeakMap]';
        }
      return e;
    });
  var yr = mr,
    br = Object.prototype.hasOwnProperty;
  var gr = H.Uint8Array;
  function jr(t) {
    var e = new t.constructor(t.byteLength);
    return new gr(e).set(new gr(t)), e;
  }
  var _r = /\w*$/;
  var Or = G ? G.prototype : void 0,
    Sr = Or ? Or.valueOf : void 0;
  var Fr = '[object Boolean]',
    wr = '[object Date]',
    kr = '[object Map]',
    Ar = '[object Number]',
    Er = '[object RegExp]',
    Pr = '[object Set]',
    Cr = '[object String]',
    Vr = '[object Symbol]',
    xr = '[object ArrayBuffer]',
    Tr = '[object DataView]',
    Mr = '[object Float32Array]',
    Rr = '[object Float64Array]',
    Ur = '[object Int8Array]',
    Br = '[object Int16Array]',
    Dr = '[object Int32Array]',
    Ir = '[object Uint8Array]',
    zr = '[object Uint8ClampedArray]',
    Nr = '[object Uint16Array]',
    Wr = '[object Uint32Array]';
  function Lr(t, e, r) {
    var n,
      o,
      i,
      a = t.constructor;
    switch (e) {
      case xr:
        return jr(t);
      case Fr:
      case wr:
        return new a(+t);
      case Tr:
        return (function (t, e) {
          var r = e ? jr(t.buffer) : t.buffer;
          return new t.constructor(r, t.byteOffset, t.byteLength);
        })(t, r);
      case Mr:
      case Rr:
      case Ur:
      case Br:
      case Dr:
      case Ir:
      case zr:
      case Nr:
      case Wr:
        return (function (t, e) {
          var r = e ? jr(t.buffer) : t.buffer;
          return new t.constructor(r, t.byteOffset, t.length);
        })(t, r);
      case kr:
        return new a();
      case Ar:
      case Cr:
        return new a(t);
      case Er:
        return (
          ((i = new (o = t).constructor(o.source, _r.exec(o))).lastIndex =
            o.lastIndex),
          i
        );
      case Pr:
        return new a();
      case Vr:
        return (n = t), Sr ? Object(Sr.call(n)) : {};
    }
  }
  var $r = Object.create,
    qr = (function () {
      function t() {}
      return function (e) {
        if (!ct(e)) return {};
        if ($r) return $r(e);
        t.prototype = e;
        var r = new t();
        return (t.prototype = void 0), r;
      };
    })();
  var Yr = '[object Map]';
  var Hr = Ve && Ve.isMap,
    Gr = Hr
      ? Ae(Hr)
      : function (t) {
          return ot(t) && yr(t) == Yr;
        },
    Jr = '[object Set]';
  var Kr = Ve && Ve.isSet,
    Qr = Kr
      ? Ae(Kr)
      : function (t) {
          return ot(t) && yr(t) == Jr;
        },
    Xr = 1,
    Zr = 2,
    tn = 4,
    en = '[object Arguments]',
    rn = '[object Function]',
    nn = '[object GeneratorFunction]',
    on = '[object Object]',
    an = {};
  function un(t, e, r, n, o, i) {
    var a,
      u = e & Xr,
      s = e & Zr,
      c = e & tn;
    if ((r && (a = o ? r(t, n, o, i) : r(t)), void 0 !== a)) return a;
    if (!ct(t)) return t;
    var l = $(t);
    if (l) {
      if (
        ((a = (function (t) {
          var e = t.length,
            r = new t.constructor(e);
          return (
            e &&
              'string' == typeof t[0] &&
              br.call(t, 'index') &&
              ((r.index = t.index), (r.input = t.input)),
            r
          );
        })(t)),
        !u)
      )
        return Ke(t, a);
    } else {
      var p = yr(t),
        f = p == rn || p == nn;
      if (je(t))
        return (function (t, e) {
          if (e) return t.slice();
          var r = t.length,
            n = Je ? Je(r) : new t.constructor(r);
          return t.copy(n), n;
        })(t, u);
      if (p == on || p == en || (f && !o)) {
        if (
          ((a =
            s || f
              ? {}
              : (function (t) {
                  return 'function' != typeof t.constructor || Be(t)
                    ? {}
                    : qr(rr(t));
                })(t)),
          !u)
        )
          return s
            ? (function (t, e) {
                return le(t, nr(t), e);
              })(
                t,
                (function (t, e) {
                  return t && le(e, qe(e), t);
                })(a, t)
              )
            : (function (t, e) {
                return le(t, tr(t), e);
              })(
                t,
                (function (t, e) {
                  return t && le(e, We(e), t);
                })(a, t)
              );
      } else {
        if (!an[p]) return o ? t : {};
        a = Lr(t, p, u);
      }
    }
    i || (i = new ie());
    var d = i.get(t);
    if (d) return d;
    if ((i.set(t, a), Qr(t)))
      return (
        t.forEach(function (n) {
          a.add(un(n, e, r, n, t, i));
        }),
        a
      );
    if (Gr(t))
      return (
        t.forEach(function (n, o) {
          a.set(o, un(n, e, r, o, t, i));
        }),
        a
      );
    var h = c ? (s ? ar : ir) : s ? keysIn : We,
      v = l ? void 0 : h(t);
    return (
      (function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length;
          ++r < n && !1 !== e(t[r], r, t);

        );
      })(v || t, function (n, o) {
        v && (n = t[(o = n)]), ce(a, o, un(n, e, r, o, t, i));
      }),
      a
    );
  }
  (an[en] = an['[object Array]'] = an['[object ArrayBuffer]'] = an[
    '[object DataView]'
  ] = an['[object Boolean]'] = an['[object Date]'] = an[
    '[object Float32Array]'
  ] = an['[object Float64Array]'] = an['[object Int8Array]'] = an[
    '[object Int16Array]'
  ] = an['[object Int32Array]'] = an['[object Map]'] = an[
    '[object Number]'
  ] = an[on] = an['[object RegExp]'] = an['[object Set]'] = an[
    '[object String]'
  ] = an['[object Symbol]'] = an['[object Uint8Array]'] = an[
    '[object Uint8ClampedArray]'
  ] = an['[object Uint16Array]'] = an['[object Uint32Array]'] = !0),
    (an['[object Error]'] = an[rn] = an['[object WeakMap]'] = !1);
  var sn = 1,
    cn = 4;
  function ln(t) {
    return un(t, sn | cn);
  }
  function pn(t) {
    return $(t) ? Gt(t, re) : at(t) ? [t] : Ke(Ht(Zt(t)));
  }
  function fn(t, e, r, n) {
    void 0 === n && (n = 0);
    for (var o = pn(e); t && n < o.length; ) t = t[o[n++]];
    return void 0 === t ? r : t;
  }
  function dn(t, e, r) {
    for (var n = {}, o = n, a = 0, u = pn(e); a < u.length - 1; a++) {
      var s = u[a],
        c = fn(t, u.slice(0, a + 1));
      if (o[s]) o = o[s];
      else if (c) o = o[s] = ln(c);
      else {
        var l = u[a + 1];
        o = o[s] = yn(l) && Number(l) >= 0 ? [] : {};
      }
    }
    if ((0 === a ? t : o)[u[a]] === r) return t;
    void 0 === r ? delete o[u[a]] : (o[u[a]] = r);
    var p = i({}, t, n);
    return 0 === a && void 0 === r && delete p[u[a]], p;
  }
  function hn(t, e, r, n) {
    void 0 === r && (r = new WeakMap()), void 0 === n && (n = {});
    for (var o = 0, i = Object.keys(t); o < i.length; o++) {
      var a = i[o],
        u = t[a];
      mn(u)
        ? r.get(u) ||
          (r.set(u, !0), (n[a] = Array.isArray(u) ? [] : {}), hn(u, e, r, n[a]))
        : (n[a] = e);
    }
    return n;
  }
  var vn = function (t) {
      return 'function' == typeof t;
    },
    mn = function (t) {
      return null !== t && 'object' == typeof t;
    },
    yn = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    bn = function (t) {
      return '[object String]' === Object.prototype.toString.call(t);
    },
    gn = function (t) {
      return t != t;
    },
    jn = function (t) {
      return 0 === e.Children.count(t);
    },
    _n = function (t) {
      return mn(t) && vn(t.then);
    },
    On = function (t) {
      return t && mn(t) && mn(t.target);
    };
  function Sn(t) {
    var e = !1;
    return [
      new Promise(function (r, n) {
        t.then(
          function (t) {
            return e ? n({ isCanceled: !0 }) : r(t);
          },
          function (t) {
            return n(e ? { isCanceled: !0 } : t);
          }
        );
      }),
      function () {
        e = !0;
      },
    ];
  }
  var Fn = (function (t) {
    function r(e) {
      var r = t.call(this, e) || this;
      return (
        (r.hcCache = {}),
        (r.hbCache = {}),
        (r.registerField = function (t, e) {
          r.fields[t] = e;
        }),
        (r.unregisterField = function (t) {
          delete r.fields[t];
        }),
        (r.setErrors = function (t) {
          r.setState({ errors: t });
        }),
        (r.setTouched = function (t) {
          r.setState({ touched: t }, function () {
            r.props.validateOnBlur && r.runValidations(r.state.values);
          });
        }),
        (r.setValues = function (t) {
          r.setState({ values: t }, function () {
            r.props.validateOnChange && r.runValidations(t);
          });
        }),
        (r.setStatus = function (t) {
          r.setState({ status: t });
        }),
        (r.setError = function (t) {
          r.setState({ error: t });
        }),
        (r.setSubmitting = function (t) {
          r.didMount && r.setState({ isSubmitting: t });
        }),
        (r.validateField = function (t) {
          return (
            r.setState({ isValidating: !0 }),
            r
              .runSingleFieldLevelValidation(t, fn(r.state.values, t))
              .then(function (e) {
                return (
                  r.didMount &&
                    r.setState({
                      errors: dn(r.state.errors, t, e),
                      isValidating: !1,
                    }),
                  e
                );
              })
          );
        }),
        (r.runSingleFieldLevelValidation = function (t, e) {
          return new Promise(function (n) {
            return n(r.fields[t].props.validate(e));
          }).then(
            function (t) {
              return t;
            },
            function (t) {
              return t;
            }
          );
        }),
        (r.runValidationSchema = function (t) {
          return new Promise(function (e) {
            var n = r.props.validationSchema,
              o = vn(n) ? n() : n;
            kn(t, o).then(
              function () {
                e({});
              },
              function (t) {
                e(wn(t));
              }
            );
          });
        }),
        (r.runValidations = function (t) {
          void 0 === t && (t = r.state.values), r.validator && r.validator();
          var e = Sn(
              Promise.all([
                r.runFieldLevelValidations(t),
                r.props.validationSchema ? r.runValidationSchema(t) : {},
                r.props.validate ? r.runValidateHandler(t) : {},
              ]).then(function (t) {
                return y.all([t[0], t[1], t[2]], { arrayMerge: An });
              })
            ),
            n = e[0];
          return (
            (r.validator = e[1]),
            n
              .then(function (t) {
                return (
                  r.didMount &&
                    r.setState(function (e) {
                      return p(e.errors, t) ? null : { errors: t };
                    }),
                  t
                );
              })
              .catch(function (t) {
                return t;
              })
          );
        }),
        (r.handleChange = function (t) {
          var e = function (t, e) {
            var n,
              o = e;
            if (On(t)) {
              var a = t;
              a.persist && a.persist();
              var u = a.target,
                s = u.type,
                c = u.name,
                l = u.checked;
              if (
                ((o = e || c || u.id),
                (n = a.target.value),
                /number|range/.test(s))
              ) {
                var p = parseFloat(a.target.value);
                n = gn(p) ? '' : p;
              }
              /checkbox/.test(s) && (n = l);
            } else n = t;
            o &&
              r.setState(
                function (t) {
                  return i({}, t, { values: dn(t.values, o, n) });
                },
                function () {
                  r.props.validateOnChange &&
                    r.runValidations(dn(r.state.values, o, n));
                }
              );
          };
          if (bn(t)) {
            var n = t;
            return (
              vn(r.hcCache[n]) ||
                (r.hcCache[n] = function (t) {
                  return e(t, n);
                }),
              r.hcCache[n]
            );
          }
          e(t);
        }),
        (r.setFieldValue = function (t, e, n) {
          void 0 === n && (n = !0),
            r.didMount &&
              r.setState(
                function (r) {
                  return i({}, r, { values: dn(r.values, t, e) });
                },
                function () {
                  r.props.validateOnChange &&
                    n &&
                    r.runValidations(r.state.values);
                }
              );
        }),
        (r.handleSubmit = function (t) {
          t && t.preventDefault && t.preventDefault(), r.submitForm();
        }),
        (r.submitForm = function () {
          return (
            r.setState(function (t) {
              return {
                touched: hn(t.values, !0),
                isSubmitting: !0,
                isValidating: !0,
                submitCount: t.submitCount + 1,
              };
            }),
            r.runValidations(r.state.values).then(function (t) {
              r.didMount && r.setState({ isValidating: !1 }),
                0 === Object.keys(t).length
                  ? r.executeSubmit()
                  : r.didMount && r.setState({ isSubmitting: !1 });
            })
          );
        }),
        (r.executeSubmit = function () {
          r.props.onSubmit(r.state.values, r.getFormikActions());
        }),
        (r.handleBlur = function (t) {
          var e = function (t, e) {
            var n = e;
            if (On(t)) {
              var o = t;
              o.persist && o.persist();
              var i = o.target,
                a = i.name;
              n = a || i.id;
            }
            r.setState(function (t) {
              return { touched: dn(t.touched, n, !0) };
            }),
              r.props.validateOnBlur &&
                r.runValidations(r.state.values).then(function (t) {
                  r.props.onBlur && n && r.props.onBlur(n, !ne(t, n));
                });
          };
          if (bn(t)) {
            var n = t;
            return (
              vn(r.hbCache[n]) ||
                (r.hbCache[n] = function (t) {
                  return e(t, n);
                }),
              r.hbCache[n]
            );
          }
          e(t);
        }),
        (r.setFieldTouched = function (t, e, n) {
          void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            r.setState(
              function (r) {
                return i({}, r, { touched: dn(r.touched, t, e) });
              },
              function () {
                r.props.validateOnBlur && n && r.runValidations(r.state.values);
              }
            );
        }),
        (r.setFieldError = function (t, e) {
          r.setState(function (r) {
            return i({}, r, { errors: dn(r.errors, t, e) });
          });
        }),
        (r.resetForm = function (t) {
          var e = t && t.values ? t.values : r.props.initialValues,
            n = t && t.errors ? t.errors : r.props.initialErrors || {};
          (r.initialValues = e),
            (r.initialErrors = n),
            r.setState({
              isSubmitting: !1,
              isValidating: !1,
              errors: n,
              touched: {},
              error: void 0,
              status: r.props.initialStatus,
              values: e,
              submitCount: 0,
            });
        }),
        (r.handleReset = function () {
          if (r.props.onReset) {
            var t = r.props.onReset(r.state.values, r.getFormikActions());
            _n(t) ? t.then(r.resetForm) : r.resetForm();
          } else r.resetForm();
        }),
        (r.setFormikState = function (t, e) {
          return r.setState(t, e);
        }),
        (r.validateForm = function (t) {
          return (
            r.setState({ isValidating: !0 }),
            r.runValidations(t).then(function (t) {
              return r.didMount && r.setState({ isValidating: !1 }), t;
            })
          );
        }),
        (r.getFormikActions = function () {
          return {
            resetForm: r.resetForm,
            submitForm: r.submitForm,
            validateForm: r.validateForm,
            validateField: r.validateField,
            setError: r.setError,
            setErrors: r.setErrors,
            setFieldError: r.setFieldError,
            setFieldTouched: r.setFieldTouched,
            setFieldValue: r.setFieldValue,
            setStatus: r.setStatus,
            setSubmitting: r.setSubmitting,
            setTouched: r.setTouched,
            setValues: r.setValues,
            setFormikState: r.setFormikState,
          };
        }),
        (r.getFormikComputedProps = function () {
          var t = r.props.isInitialValid,
            e = !p(r.initialValues, r.state.values);
          return {
            dirty: e,
            isValid: e
              ? r.state.errors && 0 === Object.keys(r.state.errors).length
              : !1 !== t && vn(t)
              ? t(r.props)
              : t,
            initialValues: r.initialValues,
            initialErrors: r.initialErrors,
          };
        }),
        (r.getFormikBag = function () {
          return i(
            {},
            r.state,
            r.getFormikActions(),
            r.getFormikComputedProps(),
            {
              registerField: r.registerField,
              unregisterField: r.unregisterField,
              handleBlur: r.handleBlur,
              handleChange: r.handleChange,
              handleReset: r.handleReset,
              handleSubmit: r.handleSubmit,
              validateOnChange: r.props.validateOnChange,
              validateOnBlur: r.props.validateOnBlur,
            }
          );
        }),
        (r.getFormikContext = function () {
          return i({}, r.getFormikBag(), {
            validationSchema: r.props.validationSchema,
            validate: r.props.validate,
            initialValues: r.initialValues,
          });
        }),
        (r.state = {
          values: e.initialValues || {},
          errors: e.initialErrors || {},
          touched: {},
          isSubmitting: !1,
          isValidating: !1,
          submitCount: 0,
          status: e.initialStatus,
        }),
        (r.didMount = !1),
        (r.fields = {}),
        (r.initialValues = e.initialValues || {}),
        (r.initialErrors = e.initialErrors || {}),
        r
      );
    }
    return (
      o(r, t),
      (r.prototype.componentDidMount = function () {
        this.didMount = !0;
      }),
      (r.prototype.componentWillUnmount = function () {
        (this.didMount = !1), this.validator && this.validator();
      }),
      (r.prototype.componentDidUpdate = function (t) {
        this.props.enableReinitialize &&
          !p(t.initialValues, this.props.initialValues) &&
          ((this.initialValues = this.props.initialValues), this.resetForm());
      }),
      (r.prototype.runFieldLevelValidations = function (t) {
        var e = this,
          r = Object.keys(this.fields).filter(function (t) {
            return (
              e.fields &&
              e.fields[t] &&
              e.fields[t].props.validate &&
              vn(e.fields[t].props.validate)
            );
          }),
          n =
            r.length > 0
              ? r.map(function (r) {
                  return e.runSingleFieldLevelValidation(r, fn(t, r));
                })
              : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')];
        return Promise.all(n).then(function (t) {
          return t.reduce(function (t, e, n) {
            return 'DO_NOT_DELETE_YOU_WILL_BE_FIRED' === e
              ? t
              : (e && (t = dn(t, r[n], e)), t);
          }, {});
        });
      }),
      (r.prototype.runValidateHandler = function (t) {
        var e = this;
        return new Promise(function (r) {
          var n = e.props.validate(t);
          void 0 === n
            ? r({})
            : _n(n)
            ? n.then(
                function () {
                  r({});
                },
                function (t) {
                  r(t);
                }
              )
            : r(n);
        });
      }),
      (r.prototype.render = function () {
        var t = this.props,
          r = t.component,
          n = t.render,
          o = t.children,
          i = this.getFormikBag(),
          a = this.getFormikContext();
        return e.createElement(
          N,
          { value: a },
          r
            ? e.createElement(r, i)
            : n
            ? n(i)
            : o
            ? vn(o)
              ? o(i)
              : jn(o)
              ? null
              : e.Children.only(o)
            : null
        );
      }),
      (r.defaultProps = {
        validateOnChange: !0,
        validateOnBlur: !0,
        isInitialValid: !1,
        enableReinitialize: !1,
      }),
      r
    );
  })(e.Component);
  function wn(t) {
    var e = {};
    if (0 === t.inner.length) return dn(e, t.path, t.message);
    for (var r = 0, n = t.inner; r < n.length; r++) {
      var o = n[r];
      e[o.path] || (e = dn(e, o.path, o.message));
    }
    return e;
  }
  function kn(t, e, r, n) {
    void 0 === r && (r = !1), void 0 === n && (n = {});
    var o = {};
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var a = String(i);
        o[a] = '' !== t[a] ? t[a] : void 0;
      }
    return e[r ? 'validateSync' : 'validate'](o, {
      abortEarly: !1,
      context: n,
    });
  }
  function An(t, e, r) {
    var n = t.slice();
    return (
      e.forEach(function (e, o) {
        if (void 0 === n[o]) {
          var i = !1 !== r.clone && r.isMergeableObject(e);
          n[o] = i ? y(Array.isArray(e) ? [] : {}, e, r) : e;
        } else r.isMergeableObject(e) ? (n[o] = y(t[o], e, r)) : -1 === t.indexOf(e) && n.push(e);
      }),
      n
    );
  }
  var En = L(
      (function (t) {
        function r(e) {
          var r = t.call(this, e) || this;
          return r;
        }
        return (
          o(r, t),
          (r.prototype.componentDidMount = function () {
            this.props.formik.registerField(this.props.name, this);
          }),
          (r.prototype.componentDidUpdate = function (t) {
            this.props.name !== t.name &&
              (this.props.formik.unregisterField(t.name),
              this.props.formik.registerField(this.props.name, this)),
              this.props.validate !== t.validate &&
                this.props.formik.registerField(this.props.name, this);
          }),
          (r.prototype.componentWillUnmount = function () {
            this.props.formik.unregisterField(this.props.name);
          }),
          (r.prototype.render = function () {
            var t = this.props,
              r = t.name,
              n = t.render,
              o = t.children,
              u = t.component,
              s = void 0 === u ? 'input' : u,
              c = t.formik,
              l = a(t, [
                'validate',
                'name',
                'render',
                'children',
                'component',
                'formik',
              ]),
              p = a(c, ['validate', 'validationSchema']),
              f = {
                value:
                  'radio' === l.type || 'checkbox' === l.type
                    ? l.value
                    : fn(c.values, r),
                name: r,
                onChange: c.handleChange,
                onBlur: c.handleBlur,
              },
              d = { field: f, form: p };
            if (n) return n(d);
            if (vn(o)) return o(d);
            if ('string' == typeof s) {
              var h = l.innerRef,
                v = a(l, ['innerRef']);
              return e.createElement(s, i({ ref: h }, f, v, { children: o }));
            }
            return e.createElement(s, i({}, d, l, { children: o }));
          }),
          r
        );
      })(e.Component)
    ),
    Pn = L(function (t) {
      var r = t.formik,
        n = r.handleReset,
        o = r.handleSubmit,
        u = a(t, ['formik']);
      return e.createElement('form', i({ onReset: n, onSubmit: o }, u));
    });
  Pn.displayName = 'Form';
  var Cn = function (t, e, r) {
      var n = (t || []).slice(),
        o = n[e];
      return n.splice(e, 1), n.splice(r, 0, o), n;
    },
    Vn = function (t, e, r) {
      var n = (t || []).slice(),
        o = n[e];
      return (n[e] = n[r]), (n[r] = o), n;
    },
    xn = function (t, e, r) {
      var n = (t || []).slice();
      return n.splice(e, 0, r), n;
    },
    Tn = function (t, e, r) {
      var n = (t || []).slice();
      return (n[e] = r), n;
    },
    Mn = L(
      (function (t) {
        function r(e) {
          var r = t.call(this, e) || this;
          return (
            (r.updateArrayField = function (t, e, n) {
              var o = r.props,
                a = o.name,
                u = o.validateOnChange,
                s = o.formik,
                c = s.validateForm;
              (0, s.setFormikState)(
                function (r) {
                  var o = 'function' == typeof n ? n : t,
                    u = 'function' == typeof e ? e : t;
                  return i({}, r, {
                    values: dn(r.values, a, t(fn(r.values, a))),
                    errors: n ? dn(r.errors, a, o(fn(r.errors, a))) : r.errors,
                    touched: e
                      ? dn(r.touched, a, u(fn(r.touched, a)))
                      : r.touched,
                  });
                },
                function () {
                  u && c();
                }
              );
            }),
            (r.push = function (t) {
              return r.updateArrayField(
                function (e) {
                  return (e || []).concat([ln(t)]);
                },
                !1,
                !1
              );
            }),
            (r.handlePush = function (t) {
              return function () {
                return r.push(t);
              };
            }),
            (r.swap = function (t, e) {
              return r.updateArrayField(
                function (r) {
                  return Vn(r, t, e);
                },
                !0,
                !0
              );
            }),
            (r.handleSwap = function (t, e) {
              return function () {
                return r.swap(t, e);
              };
            }),
            (r.move = function (t, e) {
              return r.updateArrayField(
                function (r) {
                  return Cn(r, t, e);
                },
                !0,
                !0
              );
            }),
            (r.handleMove = function (t, e) {
              return function () {
                return r.move(t, e);
              };
            }),
            (r.insert = function (t, e) {
              return r.updateArrayField(
                function (r) {
                  return xn(r, t, e);
                },
                function (e) {
                  return xn(e, t, null);
                },
                function (e) {
                  return xn(e, t, null);
                }
              );
            }),
            (r.handleInsert = function (t, e) {
              return function () {
                return r.insert(t, e);
              };
            }),
            (r.replace = function (t, e) {
              return r.updateArrayField(
                function (r) {
                  return Tn(r, t, e);
                },
                !1,
                !1
              );
            }),
            (r.handleReplace = function (t, e) {
              return function () {
                return r.replace(t, e);
              };
            }),
            (r.unshift = function (t) {
              var e = -1;
              return (
                r.updateArrayField(
                  function (r) {
                    var n = r ? [t].concat(r) : [t];
                    return e < 0 && (e = n.length), n;
                  },
                  function (t) {
                    var r = t ? [null].concat(t) : [null];
                    return e < 0 && (e = r.length), r;
                  },
                  function (t) {
                    var r = t ? [null].concat(t) : [null];
                    return e < 0 && (e = r.length), r;
                  }
                ),
                e
              );
            }),
            (r.handleUnshift = function (t) {
              return function () {
                return r.unshift(t);
              };
            }),
            (r.handleRemove = function (t) {
              return function () {
                return r.remove(t);
              };
            }),
            (r.handlePop = function () {
              return function () {
                return r.pop();
              };
            }),
            (r.remove = r.remove.bind(r)),
            (r.pop = r.pop.bind(r)),
            r
          );
        }
        return (
          o(r, t),
          (r.prototype.remove = function (t) {
            var e;
            return (
              this.updateArrayField(
                function (r) {
                  var n = r ? r.slice() : [];
                  return e || (e = n[t]), vn(n.splice) && n.splice(t, 1), n;
                },
                !0,
                !0
              ),
              e
            );
          }),
          (r.prototype.pop = function () {
            var t;
            return (
              this.updateArrayField(
                function (e) {
                  var r = e;
                  return t || (t = r && r.pop && r.pop()), r;
                },
                !0,
                !0
              ),
              t
            );
          }),
          (r.prototype.render = function () {
            var t = {
                push: this.push,
                pop: this.pop,
                swap: this.swap,
                move: this.move,
                insert: this.insert,
                replace: this.replace,
                unshift: this.unshift,
                remove: this.remove,
                handlePush: this.handlePush,
                handlePop: this.handlePop,
                handleSwap: this.handleSwap,
                handleMove: this.handleMove,
                handleInsert: this.handleInsert,
                handleReplace: this.handleReplace,
                handleUnshift: this.handleUnshift,
                handleRemove: this.handleRemove,
              },
              r = this.props,
              n = r.component,
              o = r.render,
              u = r.children,
              s = r.name,
              c = r.formik,
              l = a(c, ['validate', 'validationSchema']),
              p = i({}, t, { form: l, name: s });
            return n
              ? e.createElement(n, p)
              : o
              ? o(p)
              : u
              ? 'function' == typeof u
                ? u(p)
                : jn(u)
                ? null
                : e.Children.only(u)
              : null;
          }),
          (r.defaultProps = { validateOnChange: !0 }),
          r
        );
      })(e.Component)
    ),
    Rn = L(
      (function (t) {
        function r(e) {
          var r = t.call(this, e) || this;
          return r;
        }
        return (
          o(r, t),
          (r.prototype.shouldComponentUpdate = function (t) {
            return this.props.shouldUpdate
              ? this.props.shouldUpdate(t, this.props)
              : fn(this.props.formik.values, this.props.name) !==
                  fn(t.formik.values, this.props.name) ||
                  fn(this.props.formik.errors, this.props.name) !==
                    fn(t.formik.errors, this.props.name) ||
                  fn(this.props.formik.touched, this.props.name) !==
                    fn(t.formik.touched, this.props.name) ||
                  Object.keys(this.props).length !== Object.keys(t).length ||
                  this.props.formik.isSubmitting !== t.formik.isSubmitting;
          }),
          (r.prototype.componentDidMount = function () {
            this.props.formik.registerField(this.props.name, this);
          }),
          (r.prototype.componentDidUpdate = function (t) {
            this.props.name !== t.name &&
              (this.props.formik.unregisterField(t.name),
              this.props.formik.registerField(this.props.name, this)),
              this.props.validate !== t.validate &&
                this.props.formik.registerField(this.props.name, this);
          }),
          (r.prototype.componentWillUnmount = function () {
            this.props.formik.unregisterField(this.props.name);
          }),
          (r.prototype.render = function () {
            var t = this.props,
              r = t.name,
              n = t.render,
              o = t.children,
              u = t.component,
              s = void 0 === u ? 'input' : u,
              c = t.formik,
              l = a(t, [
                'validate',
                'name',
                'render',
                'children',
                'component',
                'formik',
                'shouldUpdate',
              ]),
              p = a(c, ['validate', 'validationSchema']),
              f = {
                value:
                  'radio' === l.type || 'checkbox' === l.type
                    ? l.value
                    : fn(c.values, r),
                name: r,
                onChange: c.handleChange,
                onBlur: c.handleBlur,
              },
              d = { field: f, form: p };
            if (n) return n(d);
            if (vn(o)) return o(d);
            if ('string' == typeof s) {
              var h = l.innerRef,
                v = a(l, ['innerRef']);
              return e.createElement(s, i({ ref: h }, f, v, { children: o }));
            }
            return e.createElement(s, i({}, d, l, { children: o }));
          }),
          r
        );
      })(e.Component)
    );
  (t.ErrorMessage = L(
    (function (t) {
      function r() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(r, t),
        (r.prototype.shouldComponentUpdate = function (t) {
          return (
            fn(this.props.formik.errors, this.props.name) !==
              fn(t.formik.errors, this.props.name) ||
            fn(this.props.formik.touched, this.props.name) !==
              fn(t.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(t).length
          );
        }),
        (r.prototype.render = function () {
          var t = this.props,
            r = t.component,
            n = t.formik,
            o = t.render,
            i = t.children,
            u = t.name,
            s = a(t, ['component', 'formik', 'render', 'children', 'name']),
            c = fn(n.touched, u),
            l = fn(n.errors, u);
          return c && l
            ? o
              ? vn(o)
                ? o(l)
                : null
              : i
              ? vn(i)
                ? i(l)
                : null
              : r
              ? e.createElement(r, s, l)
              : l
            : null;
        }),
        r
      );
    })(e.Component)
  )),
    (t.FastField = Rn),
    (t.Field = En),
    (t.FieldArray = Mn),
    (t.Form = Pn),
    (t.Formik = Fn),
    (t.FormikConsumer = W),
    (t.FormikProvider = N),
    (t.connect = L),
    (t.getActiveElement = function (t) {
      if (
        void 0 ===
        (t = t || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    }),
    (t.getIn = fn),
    (t.insert = xn),
    (t.isEmptyChildren = jn),
    (t.isFunction = vn),
    (t.isInputEvent = On),
    (t.isInteger = yn),
    (t.isNaN = gn),
    (t.isObject = mn),
    (t.isPromise = _n),
    (t.isString = bn),
    (t.makeCancelable = Sn),
    (t.move = Cn),
    (t.replace = Tn),
    (t.setIn = dn),
    (t.setNestedObjectValues = hn),
    (t.swap = Vn),
    (t.validateYupSchema = kn),
    (t.withFormik = function (t) {
      var r = t.mapPropsToValues,
        n =
          void 0 === r
            ? function (t) {
                var e = {};
                for (var r in t)
                  t.hasOwnProperty(r) &&
                    'function' != typeof t[r] &&
                    (e[r] = t[r]);
                return e;
              }
            : r,
        u = a(t, ['mapPropsToValues']);
      return function (t) {
        var r =
            t.displayName ||
            t.name ||
            (t.constructor && t.constructor.name) ||
            'Component',
          s = (function (s) {
            function c() {
              var r = (null !== s && s.apply(this, arguments)) || this;
              return (
                (r.validate = function (t) {
                  return u.validate(t, r.props);
                }),
                (r.validationSchema = function () {
                  return vn(u.validationSchema)
                    ? u.validationSchema(r.props)
                    : u.validationSchema;
                }),
                (r.handleSubmit = function (t, e) {
                  return u.handleSubmit(t, i({}, e, { props: r.props }));
                }),
                (r.renderFormComponent = function (n) {
                  return e.createElement(t, i({}, r.props, n));
                }),
                r
              );
            }
            return (
              o(c, s),
              (c.prototype.render = function () {
                var t = this.props,
                  r = a(t, ['children']);
                return e.createElement(
                  Fn,
                  i({}, r, u, {
                    validate: u.validate && this.validate,
                    validationSchema:
                      u.validationSchema && this.validationSchema,
                    initialValues: n(this.props),
                    initialStatus:
                      u.mapPropsToStatus && u.mapPropsToStatus(this.props),
                    initialErrors:
                      u.mapPropsToErrors && u.mapPropsToErrors(this.props),
                    onSubmit: this.handleSubmit,
                    render: this.renderFormComponent,
                  })
                );
              }),
              (c.displayName = 'WithFormik(' + r + ')'),
              c
            );
          })(e.Component);
        return k(s, t);
      };
    }),
    (t.yupToFormErrors = wn),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=formik.umd.production.js.map
