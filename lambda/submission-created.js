!(function (e, t) {
  for (var r in t) e[r] = t[r];
})(
  exports,
  (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 44))
    );
  })([
    function (e, t, r) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var n = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              n[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, n)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var r,
                s,
                a = (function (e) {
                  if (null == e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                u = 1;
              u < arguments.length;
              u++
            ) {
              for (var c in (r = Object(arguments[u])))
                o.call(r, c) && (a[c] = r[c]);
              if (n) {
                s = n(r);
                for (var f = 0; f < s.length; f++)
                  i.call(r, s[f]) && (a[s[f]] = r[s[f]]);
              }
            }
            return a;
          };
    },
    function (e, t) {
      e.exports = require("util");
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(17),
        s = r(18),
        a = r(47),
        u = r(21),
        c = r(12),
        f = r(19),
        l = (function (e) {
          function t(r, n, o) {
            var i = e.call(this) || this;
            switch (
              ((i.syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              (i._parentSubscription = null),
              arguments.length)
            ) {
              case 0:
                i.destination = s.empty;
                break;
              case 1:
                if (!r) {
                  i.destination = s.empty;
                  break;
                }
                if ("object" == typeof r) {
                  r instanceof t
                    ? ((i.syncErrorThrowable = r.syncErrorThrowable),
                      (i.destination = r),
                      r.add(i))
                    : ((i.syncErrorThrowable = !0),
                      (i.destination = new p(i, r)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new p(i, r, n, o));
            }
            return i;
          }
          return (
            o(t, e),
            (t.prototype[u.rxSubscriber] = function () {
              return this;
            }),
            (t.create = function (e, r, n) {
              var o = new t(e, r, n);
              return (o.syncErrorThrowable = !1), o;
            }),
            (t.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var e = this._parent,
                t = this._parents;
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = e),
                (this._parents = t),
                (this._parentSubscription = null),
                this
              );
            }),
            t
          );
        })(a.Subscription);
      t.Subscriber = l;
      var p = (function (e) {
        function t(t, r, n, o) {
          var a,
            u = e.call(this) || this;
          u._parentSubscriber = t;
          var c = u;
          return (
            i.isFunction(r)
              ? (a = r)
              : r &&
                ((a = r.next),
                (n = r.error),
                (o = r.complete),
                r !== s.empty &&
                  ((c = Object.create(r)),
                  i.isFunction(c.unsubscribe) && u.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = u.unsubscribe.bind(u)))),
            (u._context = c),
            (u._next = a),
            (u._error = n),
            (u._complete = o),
            u
          );
        }
        return (
          o(t, e),
          (t.prototype.next = function (e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              c.config.useDeprecatedSynchronousErrorHandling &&
              t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function (e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                r = c.config.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                r && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable)
                r
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                  : f.hostReportError(e),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), r)) throw e;
                f.hostReportError(e);
              }
            }
          }),
          (t.prototype.complete = function () {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var r = function () {
                  return e._complete.call(e._context);
                };
                c.config.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, r), this.unsubscribe())
                  : (this.__tryOrUnsub(r), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function (e, t) {
            try {
              e.call(this._context, t);
            } catch (e) {
              if (
                (this.unsubscribe(),
                c.config.useDeprecatedSynchronousErrorHandling)
              )
                throw e;
              f.hostReportError(e);
            }
          }),
          (t.prototype.__tryOrSetError = function (e, t, r) {
            if (!c.config.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              t.call(this._context, r);
            } catch (t) {
              return c.config.useDeprecatedSynchronousErrorHandling
                ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0), !0)
                : (f.hostReportError(t), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              e.unsubscribe();
          }),
          t
        );
      })(l);
      t.SafeSubscriber = p;
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o = ["image", "file"],
        i = ["before", "after", "replace"];
      (t.dataset = function (e) {
        if (!/^[-\w]{1,128}$/.test(e))
          throw new Error(
            "Datasets can only contain lowercase characters, numbers, underscores and dashes"
          );
      }),
        (t.projectId = function (e) {
          if (!/^[-a-z0-9]+$/i.test(e))
            throw new Error(
              "`projectId` can only contain only a-z, 0-9 and dashes"
            );
        }),
        (t.validateAssetType = function (e) {
          if (-1 === o.indexOf(e))
            throw new Error(
              "Invalid asset type: "
                .concat(e, ". Must be one of ")
                .concat(o.join(", "))
            );
        }),
        (t.validateObject = function (e, t) {
          if (null === t || "object" !== n(t) || Array.isArray(t))
            throw new Error("".concat(e, "() takes an object of properties"));
        }),
        (t.requireDocumentId = function (e, r) {
          if (!r._id)
            throw new Error(
              "".concat(
                e,
                '() requires that the document contains an ID ("_id" property)'
              )
            );
          t.validateDocumentId(e, r._id);
        }),
        (t.validateDocumentId = function (e, t) {
          if ("string" != typeof t || !/^[a-z0-9_.-]+$/i.test(t))
            throw new Error(
              "".concat(e, '(): "').concat(t, '" is not a valid document ID')
            );
        }),
        (t.validateInsert = function (e, t, r) {
          var n = "insert(at, selector, items)";
          if (-1 === i.indexOf(e)) {
            var o = i
              .map(function (e) {
                return '"'.concat(e, '"');
              })
              .join(", ");
            throw new Error(
              ""
                .concat(n, ' takes an "at"-argument which is one of: ')
                .concat(o)
            );
          }
          if ("string" != typeof t)
            throw new Error(
              "".concat(
                n,
                ' takes a "selector"-argument which must be a string'
              )
            );
          if (!Array.isArray(r))
            throw new Error(
              "".concat(n, ' takes an "items"-argument which must be an array')
            );
        }),
        (t.hasDataset = function (e) {
          if (!e.gradientMode && !e.dataset)
            throw new Error("`dataset` must be provided to perform queries");
          return e.dataset || "";
        });
    },
    function (e, t, r) {
      try {
        var n = r(1);
        if ("function" != typeof n.inherits) throw "";
        e.exports = n.inherits;
      } catch (t) {
        e.exports = r(106);
      }
    },
    function (e, t, r) {
      "use strict";
      var n = r(10),
        o =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = l;
      var i = r(6);
      i.inherits = r(4);
      var s = r(36),
        a = r(39);
      i.inherits(l, s);
      for (var u = o(a.prototype), c = 0; c < u.length; c++) {
        var f = u[c];
        l.prototype[f] || (l.prototype[f] = a.prototype[f]);
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        s.call(this, e),
          a.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once("end", p);
      }
      function p() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this);
      }
      function d(e) {
        e.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(l.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        }),
        (l.prototype._destroy = function (e, t) {
          this.push(null), this.end(), n.nextTick(t, e);
        });
    },
    function (e, t) {
      function r(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e);
      }),
        (t.isBoolean = function (e) {
          return "boolean" == typeof e;
        }),
        (t.isNull = function (e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = function (e) {
          return "number" == typeof e;
        }),
        (t.isString = function (e) {
          return "string" == typeof e;
        }),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = function (e) {
          return void 0 === e;
        }),
        (t.isRegExp = function (e) {
          return "[object RegExp]" === r(e);
        }),
        (t.isObject = function (e) {
          return "object" == typeof e && null !== e;
        }),
        (t.isDate = function (e) {
          return "[object Date]" === r(e);
        }),
        (t.isError = function (e) {
          return "[object Error]" === r(e) || e instanceof Error;
        }),
        (t.isFunction = function (e) {
          return "function" == typeof e;
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = Buffer.isBuffer);
    },
    function (e, t, r) {
      t.filter = r(46).filter;
    },
    function (e, t, r) {
      t.map = r(52).map;
    },
    function (e, t) {
      e.exports = require("stream");
    },
    function (e, t, r) {
      "use strict";
      !process.version ||
      0 === process.version.indexOf("v0.") ||
      (0 === process.version.indexOf("v1.") &&
        0 !== process.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function (e, t, r, n) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                i,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return process.nextTick(e);
                case 2:
                  return process.nextTick(function () {
                    e.call(null, t);
                  });
                case 3:
                  return process.nextTick(function () {
                    e.call(null, t, r);
                  });
                case 4:
                  return process.nextTick(function () {
                    e.call(null, t, r, n);
                  });
                default:
                  for (o = new Array(s - 1), i = 0; i < o.length; )
                    o[i++] = arguments[i];
                  return process.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          })
        : (e.exports = process);
    },
    function (e, t, r) {
      var n = r(105),
        o = n.Buffer;
      function i(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function s(e, t, r) {
        return o(e, t, r);
      }
      o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
        ? (e.exports = n)
        : (i(n, t), (t.Buffer = s)),
        i(o, s),
        (s.from = function (e, t, r) {
          if ("number" == typeof e)
            throw new TypeError("Argument must not be a number");
          return o(e, t, r);
        }),
        (s.alloc = function (e, t, r) {
          if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
          var n = o(e);
          return (
            void 0 !== t
              ? "string" == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (e) {
          if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
          return o(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          if ("number" != typeof e)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(e);
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = !1;
      t.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            var t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            n &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          n = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return n;
        },
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = r(53),
        i = r(0),
        s = r(22),
        a = r(3),
        u = a.validateObject,
        c = a.validateInsert;
      function f(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        (this.selection = e), (this.operations = i({}, t)), (this.client = r);
      }
      i(f.prototype, {
        clone: function () {
          return new f(this.selection, i({}, this.operations), this.client);
        },
        merge: function (e) {
          u("merge", e);
          var t = new Error().stack
            .toString()
            .split("\n")
            .filter(function (e) {
              return e.trim();
            })
            .slice(2);
          return (
            console.warn(
              'The "merge" patch has been deprecated and will be removed in the future\n'.concat(
                t.join("\n")
              )
            ),
            this._assign("merge", o(this.operations.merge || {}, e))
          );
        },
        set: function (e) {
          return this._assign("set", e);
        },
        diffMatchPatch: function (e) {
          return u("diffMatchPatch", e), this._assign("diffMatchPatch", e);
        },
        unset: function (e) {
          if (!Array.isArray(e))
            throw new Error(
              "unset(attrs) takes an array of attributes to unset, non-array given"
            );
          return (this.operations = i({}, this.operations, { unset: e })), this;
        },
        setIfMissing: function (e) {
          return this._assign("setIfMissing", e);
        },
        replace: function (e) {
          return u("replace", e), this._set("set", { $: e });
        },
        inc: function (e) {
          return this._assign("inc", e);
        },
        dec: function (e) {
          return this._assign("dec", e);
        },
        insert: function (e, t, r) {
          var o;
          return (
            c(e, t, r),
            this._assign("insert", (n((o = {}), e, t), n(o, "items", r), o))
          );
        },
        append: function (e, t) {
          return this.insert("after", "".concat(e, "[-1]"), t);
        },
        prepend: function (e, t) {
          return this.insert("before", "".concat(e, "[0]"), t);
        },
        splice: function (e, t, r, n) {
          var o = t < 0 ? t - 1 : t,
            i = void 0 === r || -1 === r ? -1 : Math.max(0, t + r),
            s = o < 0 && i >= 0 ? "" : i,
            a = "".concat(e, "[").concat(o, ":").concat(s, "]");
          return this.insert("replace", a, n || []);
        },
        ifRevisionId: function (e) {
          return (this.operations.ifRevisionID = e), this;
        },
        serialize: function () {
          return i(s(this.selection), this.operations);
        },
        toJSON: function () {
          return this.serialize();
        },
        commit: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.client)
            throw new Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          var t = "string" == typeof this.selection,
            r = i({ returnFirst: t, returnDocuments: !0 }, e);
          return this.client.mutate({ patch: this.serialize() }, r);
        },
        reset: function () {
          return (this.operations = {}), this;
        },
        _set: function (e, t) {
          return this._assign(e, t, !1);
        },
        _assign: function (e, t) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return (
            u(e, t),
            (this.operations = i(
              {},
              this.operations,
              n({}, e, i({}, (r && this.operations[e]) || {}, t))
            )),
            this
          );
        },
      }),
        (e.exports = f);
    },
    function (e, t) {
      e.exports = require("url");
    },
    function (e, t) {
      e.exports = require("https");
    },
    function (e, t) {
      e.exports = require("http");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = function (e) {
          return "function" == typeof e;
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(12),
        o = r(19);
      t.empty = {
        closed: !0,
        next: function (e) {},
        error: function (e) {
          if (n.config.useDeprecatedSynchronousErrorHandling) throw e;
          o.hostReportError(e);
        },
        complete: function () {},
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hostReportError = function (e) {
          setTimeout(function () {
            throw e;
          });
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorObject = { e: {} });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.rxSubscriber =
          "function" == typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random()),
        (t.$$rxSubscriber = t.rxSubscriber);
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        if ("string" == typeof e || Array.isArray(e)) return { id: e };
        if (e && e.query) return { query: e.query };
        var t = [
          "* Document ID (<docId>)",
          "* Array of document IDs",
          "* Object containing `query`",
        ].join("\n");
        throw new Error("Unknown selection - must be one of:\n\n".concat(t));
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = r(0),
        i = r(3),
        s = r(13),
        a = { returnDocuments: !1 };
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0;
        (this.trxId = r), (this.operations = e), (this.client = t);
      }
      o(u.prototype, {
        clone: function () {
          return new u(this.operations.slice(0), this.client, this.trxId);
        },
        create: function (e) {
          return i.validateObject("create", e), this._add({ create: e });
        },
        createIfNotExists: function (e) {
          var t = "createIfNotExists";
          return (
            i.validateObject(t, e),
            i.requireDocumentId(t, e),
            this._add(n({}, t, e))
          );
        },
        createOrReplace: function (e) {
          var t = "createOrReplace";
          return (
            i.validateObject(t, e),
            i.requireDocumentId(t, e),
            this._add(n({}, t, e))
          );
        },
        delete: function (e) {
          return (
            i.validateDocumentId("delete", e), this._add({ delete: { id: e } })
          );
        },
        patch: function (e, t) {
          var r = "function" == typeof t;
          if (e instanceof s) return this._add({ patch: e.serialize() });
          if (r) {
            var n = t(new s(e, {}, this.client));
            if (!(n instanceof s))
              throw new Error(
                "function passed to `patch()` must return the patch"
              );
            return this._add({ patch: n.serialize() });
          }
          return this._add({ patch: o({ id: e }, t) });
        },
        transactionId: function (e) {
          return e ? ((this.trxId = e), this) : this.trxId;
        },
        serialize: function () {
          return this.operations.slice();
        },
        toJSON: function () {
          return this.serialize();
        },
        commit: function (e) {
          if (!this.client)
            throw new Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.client.mutate(
            this.serialize(),
            o({ transactionId: this.trxId }, a, e || {})
          );
        },
        reset: function () {
          return (this.operations = []), this;
        },
        _add: function (e) {
          return this.operations.push(e), this;
        },
      }),
        (e.exports = u);
    },
    function (e, t, r) {
      "use strict";
      var n = encodeURIComponent;
      e.exports = function (e) {
        var t = e.query,
          r = e.params,
          o = void 0 === r ? {} : r,
          i = e.options,
          s = void 0 === i ? {} : i,
          a = "?query=".concat(n(t)),
          u = Object.keys(o).reduce(function (e, t) {
            return ""
              .concat(e, "&")
              .concat(n("$".concat(t)), "=")
              .concat(n(JSON.stringify(o[t])));
          }, a);
        return Object.keys(s).reduce(function (e, t) {
          return s[t] ? "".concat(e, "&").concat(n(t), "=").concat(n(s[t])) : e;
        }, u);
      };
    },
    function (e, t, r) {
      e.exports = r(57);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(58),
        o = r(59),
        i = r(60),
        s = r(27),
        a = r(12),
        u = (function () {
          function e(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var r = new e();
              return (r.source = this), (r.operator = t), r;
            }),
            (e.prototype.subscribe = function (e, t, r) {
              var n = this.operator,
                i = o.toSubscriber(e, t, r);
              if (
                (n
                  ? n.call(i, this.source)
                  : i.add(
                      this.source ||
                        (a.config.useDeprecatedSynchronousErrorHandling &&
                          !i.syncErrorThrowable)
                        ? this._subscribe(i)
                        : this._trySubscribe(i)
                    ),
                a.config.useDeprecatedSynchronousErrorHandling &&
                  i.syncErrorThrowable &&
                  ((i.syncErrorThrowable = !1), i.syncErrorThrown))
              )
                throw i.syncErrorValue;
              return i;
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                a.config.useDeprecatedSynchronousErrorHandling &&
                  ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                  n.canReportError(e) ? e.error(t) : console.warn(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var r = this;
              return new (t = c(t))(function (t, n) {
                var o;
                o = r.subscribe(
                  function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      n(e), o && o.unsubscribe();
                    }
                  },
                  n,
                  t
                );
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t = this.source;
              return t && t.subscribe(e);
            }),
            (e.prototype[i.observable] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return 0 === e.length ? this : s.pipeFromArray(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = c(e))(function (e, r) {
                var n;
                t.subscribe(
                  function (e) {
                    return (n = e);
                  },
                  function (e) {
                    return r(e);
                  },
                  function () {
                    return e(n);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function c(e) {
        if ((e || (e = a.config.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      t.Observable = u;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(61);
      function o(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce(function (e, t) {
                  return t(e);
                }, t);
              }
          : n.noop;
      }
      (t.pipe = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return o(e);
      }),
        (t.pipeFromArray = o);
    },
    function (e, t, r) {
      "use strict";
      var n = r(72),
        o = r(73),
        i = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        a = [
          ["#", "hash"],
          ["?", "query"],
          function (e) {
            return e.replace("\\", "/");
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d+)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        u = { hash: 1, query: 1 };
      function c(e) {
        var t,
          r =
            ("undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {}
            ).location || {},
          n = {},
          o = typeof (e = e || r);
        if ("blob:" === e.protocol) n = new l(unescape(e.pathname), {});
        else if ("string" === o) for (t in ((n = new l(e, {})), u)) delete n[t];
        else if ("object" === o) {
          for (t in e) t in u || (n[t] = e[t]);
          void 0 === n.slashes && (n.slashes = s.test(e.href));
        }
        return n;
      }
      function f(e) {
        var t = i.exec(e);
        return {
          protocol: t[1] ? t[1].toLowerCase() : "",
          slashes: !!t[2],
          rest: t[3],
        };
      }
      function l(e, t, r) {
        if (!(this instanceof l)) return new l(e, t, r);
        var i,
          s,
          u,
          p,
          d,
          h,
          b = a.slice(),
          y = typeof t,
          g = this,
          m = 0;
        for (
          "object" !== y && "string" !== y && ((r = t), (t = null)),
            r && "function" != typeof r && (r = o.parse),
            t = c(t),
            i = !(s = f(e || "")).protocol && !s.slashes,
            g.slashes = s.slashes || (i && t.slashes),
            g.protocol = s.protocol || t.protocol || "",
            e = s.rest,
            s.slashes || (b[3] = [/(.*)/, "pathname"]);
          m < b.length;
          m++
        )
          "function" != typeof (p = b[m])
            ? ((u = p[0]),
              (h = p[1]),
              u != u
                ? (g[h] = e)
                : "string" == typeof u
                ? ~(d = e.indexOf(u)) &&
                  ("number" == typeof p[2]
                    ? ((g[h] = e.slice(0, d)), (e = e.slice(d + p[2])))
                    : ((g[h] = e.slice(d)), (e = e.slice(0, d))))
                : (d = u.exec(e)) && ((g[h] = d[1]), (e = e.slice(0, d.index))),
              (g[h] = g[h] || (i && p[3] && t[h]) || ""),
              p[4] && (g[h] = g[h].toLowerCase()))
            : (e = p(e));
        r && (g.query = r(g.query)),
          i &&
            t.slashes &&
            "/" !== g.pathname.charAt(0) &&
            ("" !== g.pathname || "" !== t.pathname) &&
            (g.pathname = (function (e, t) {
              for (
                var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  n = r.length,
                  o = r[n - 1],
                  i = !1,
                  s = 0;
                n--;

              )
                "." === r[n]
                  ? r.splice(n, 1)
                  : ".." === r[n]
                  ? (r.splice(n, 1), s++)
                  : s && (0 === n && (i = !0), r.splice(n, 1), s--);
              return (
                i && r.unshift(""),
                ("." !== o && ".." !== o) || r.push(""),
                r.join("/")
              );
            })(g.pathname, t.pathname)),
          n(g.port, g.protocol) || ((g.host = g.hostname), (g.port = "")),
          (g.username = g.password = ""),
          g.auth &&
            ((p = g.auth.split(":")),
            (g.username = p[0] || ""),
            (g.password = p[1] || "")),
          (g.origin =
            g.protocol && g.host && "file:" !== g.protocol
              ? g.protocol + "//" + g.host
              : "null"),
          (g.href = g.toString());
      }
      (l.prototype = {
        set: function (e, t, r) {
          var i = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (r || o.parse)(t)),
                (i[e] = t);
              break;
            case "port":
              (i[e] = t),
                n(t, i.protocol)
                  ? t && (i.host = i.hostname + ":" + t)
                  : ((i.host = i.hostname), (i[e] = ""));
              break;
            case "hostname":
              (i[e] = t), i.port && (t += ":" + i.port), (i.host = t);
              break;
            case "host":
              (i[e] = t),
                /:\d+$/.test(t)
                  ? ((t = t.split(":")),
                    (i.port = t.pop()),
                    (i.hostname = t.join(":")))
                  : ((i.hostname = t), (i.port = ""));
              break;
            case "protocol":
              (i.protocol = t.toLowerCase()), (i.slashes = !r);
              break;
            case "pathname":
            case "hash":
              if (t) {
                var s = "pathname" === e ? "/" : "#";
                i[e] = t.charAt(0) !== s ? s + t : t;
              } else i[e] = t;
              break;
            default:
              i[e] = t;
          }
          for (var u = 0; u < a.length; u++) {
            var c = a[u];
            c[4] && (i[c[1]] = i[c[1]].toLowerCase());
          }
          return (
            (i.origin =
              i.protocol && i.host && "file:" !== i.protocol
                ? i.protocol + "//" + i.host
                : "null"),
            (i.href = i.toString()),
            i
          );
        },
        toString: function (e) {
          (e && "function" == typeof e) || (e = o.stringify);
          var t,
            r = this,
            n = r.protocol;
          n && ":" !== n.charAt(n.length - 1) && (n += ":");
          var i = n + (r.slashes ? "//" : "");
          return (
            r.username &&
              ((i += r.username),
              r.password && (i += ":" + r.password),
              (i += "@")),
            (i += r.host + r.pathname),
            (t = "object" == typeof r.query ? e(r.query) : r.query) &&
              (i += "?" !== t.charAt(0) ? "?" + t : t),
            r.hash && (i += r.hash),
            i
          );
        },
      }),
        (l.extractProtocol = f),
        (l.location = c),
        (l.qs = o),
        (e.exports = l);
    },
    function (e, t) {
      e.exports = require("events");
    },
    function (e, t) {
      e.exports = function (e) {
        return "https://docs.sanity.io/help/" + e;
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t,
          r = !1;
        return function () {
          return r ? t : ((t = e.apply(void 0, arguments)), (r = !0), t);
        };
      };
    },
    function (e, t, r) {
      function n(e) {
        var r;
        function n() {
          if (n.enabled) {
            var e = n,
              o = +new Date(),
              i = o - (r || o);
            (e.diff = i), (e.prev = r), (e.curr = o), (r = o);
            for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
              s[a] = arguments[a];
            (s[0] = t.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O");
            var u = 0;
            (s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
              if ("%%" === r) return r;
              u++;
              var o = t.formatters[n];
              if ("function" == typeof o) {
                var i = s[u];
                (r = o.call(e, i)), s.splice(u, 1), u--;
              }
              return r;
            })),
              t.formatArgs.call(e, s),
              (n.log || t.log || console.log.bind(console)).apply(e, s);
          }
        }
        return (
          (n.namespace = e),
          (n.enabled = t.enabled(e)),
          (n.useColors = t.useColors()),
          (n.color = (function (e) {
            var r,
              n = 0;
            for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          })(e)),
          (n.destroy = o),
          "function" == typeof t.init && t.init(n),
          t.instances.push(n),
          n
        );
      }
      function o() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0);
      }
      ((t = e.exports = n.debug = n.default = n).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          var r;
          t.save(e), (t.names = []), (t.skips = []);
          var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = n.length;
          for (r = 0; r < o; r++)
            n[r] &&
              ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
          for (r = 0; r < t.instances.length; r++) {
            var i = t.instances[r];
            i.enabled = t.enabled(i.namespace);
          }
        }),
        (t.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          var r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(33)),
        (t.instances = []),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    function (e, t) {
      var r = 1e3,
        n = 60 * r,
        o = 60 * n,
        i = 24 * o,
        s = 365.25 * i;
      function a(e, t, r) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + r
            : Math.ceil(e / t) + " " + r + "s";
      }
      e.exports = function (e, t) {
        t = t || {};
        var u,
          c = typeof e;
        if ("string" === c && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var t =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return a * s;
              case "days":
              case "day":
              case "d":
                return a * i;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;
              default:
                return;
            }
          })(e);
        if ("number" === c && !1 === isNaN(e))
          return t.long
            ? a((u = e), i, "day") ||
                a(u, o, "hour") ||
                a(u, n, "minute") ||
                a(u, r, "second") ||
                u + " ms"
            : (function (e) {
                if (e >= i) return Math.round(e / i) + "d";
                if (e >= o) return Math.round(e / o) + "h";
                if (e >= n) return Math.round(e / n) + "m";
                if (e >= r) return Math.round(e / r) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    function (e, t) {
      e.exports = require("tty");
    },
    function (e, t, r) {
      var n = r(9);
      "disable" === process.env.READABLE_STREAM && n
        ? ((e.exports = n),
          ((t = e.exports = n.Readable).Readable = n.Readable),
          (t.Writable = n.Writable),
          (t.Duplex = n.Duplex),
          (t.Transform = n.Transform),
          (t.PassThrough = n.PassThrough),
          (t.Stream = n))
        : (((t = e.exports = r(36)).Stream = n || t),
          (t.Readable = t),
          (t.Writable = r(39)),
          (t.Duplex = r(5)),
          (t.Transform = r(41)),
          (t.PassThrough = r(109)));
    },
    function (e, t, r) {
      "use strict";
      var n = r(10);
      e.exports = m;
      var o,
        i = r(104);
      m.ReadableState = g;
      r(29).EventEmitter;
      var s = function (e, t) {
          return e.listeners(t).length;
        },
        a = r(37),
        u = r(11).Buffer,
        c = global.Uint8Array || function () {};
      var f = r(6);
      f.inherits = r(4);
      var l = r(1),
        p = void 0;
      p = l && l.debuglog ? l.debuglog("stream") : function () {};
      var d,
        h = r(107),
        b = r(38);
      f.inherits(m, a);
      var y = ["error", "close", "destroy", "pause", "resume"];
      function g(e, t) {
        e = e || {};
        var n = t instanceof (o = o || r(5));
        (this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
          s = e.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : n && (s || 0 === s) ? s : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new h()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (d || (d = r(40).StringDecoder),
            (this.decoder = new d(e.encoding)),
            (this.encoding = e.encoding));
      }
      function m(e) {
        if (((o = o || r(5)), !(this instanceof m))) return new m(e);
        (this._readableState = new g(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function v(e, t, r, n, o) {
        var i,
          s = e._readableState;
        null === t
          ? ((s.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var r = t.decoder.end();
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
              }
              (t.ended = !0), O(e);
            })(e, s))
          : (o ||
              (i = (function (e, t) {
                var r;
                (n = t),
                  u.isBuffer(n) ||
                    n instanceof c ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return r;
              })(s, t)),
            i
              ? e.emit("error", i)
              : s.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  s.objectMode ||
                  Object.getPrototypeOf(t) === u.prototype ||
                  (t = (function (e) {
                    return u.from(e);
                  })(t)),
                n
                  ? s.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : w(e, s, t, !0)
                  : s.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((t = s.decoder.write(t)),
                        s.objectMode || 0 !== t.length
                          ? w(e, s, t, !1)
                          : S(e, s))
                      : w(e, s, t, !1)))
              : n || (s.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(s);
      }
      function w(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", r), e.read(0))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && O(e)),
          S(e, t);
      }
      Object.defineProperty(m.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (m.prototype.destroy = b.destroy),
        (m.prototype._undestroy = b.undestroy),
        (m.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (m.prototype.push = function (e, t) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = u.from(e, t)), (t = "")),
                (r = !0)),
            v(this, e, t, !1, r)
          );
        }),
        (m.prototype.unshift = function (e) {
          return v(this, e, null, !0, !1);
        }),
        (m.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (m.prototype.setEncoding = function (e) {
          return (
            d || (d = r(40).StringDecoder),
            (this._readableState.decoder = new d(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      var _ = 8388608;
      function E(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= _
                    ? (e = _)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function O(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (p("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? n.nextTick(C, e) : C(e));
      }
      function C(e) {
        p("emit readable"), e.emit("readable"), T(e);
      }
      function S(e, t) {
        t.readingMore || ((t.readingMore = !0), n.nextTick(x, e, t));
      }
      function x(e, t) {
        for (
          var r = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (p("maybeReadMore read 0"), e.read(0), r !== t.length);

        )
          r = t.length;
        t.readingMore = !1;
      }
      function j(e) {
        p("readable nexttick read 0"), e.read(0);
      }
      function R(e, t) {
        t.reading || (p("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          T(e),
          t.flowing && !t.reading && e.read(0);
      }
      function T(e) {
        var t = e._readableState;
        for (p("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function k(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = (function (e, t, r) {
                  var n;
                  e < t.head.data.length
                    ? ((n = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (n =
                        e === t.head.data.length
                          ? t.shift()
                          : r
                          ? (function (e, t) {
                              var r = t.head,
                                n = 1,
                                o = r.data;
                              e -= o.length;
                              for (; (r = r.next); ) {
                                var i = r.data,
                                  s = e > i.length ? i.length : e;
                                if (
                                  (s === i.length
                                    ? (o += i)
                                    : (o += i.slice(0, e)),
                                  0 === (e -= s))
                                ) {
                                  s === i.length
                                    ? (++n,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = i.slice(s)));
                                  break;
                                }
                                ++n;
                              }
                              return (t.length -= n), o;
                            })(e, t)
                          : (function (e, t) {
                              var r = u.allocUnsafe(e),
                                n = t.head,
                                o = 1;
                              n.data.copy(r), (e -= n.data.length);
                              for (; (n = n.next); ) {
                                var i = n.data,
                                  s = e > i.length ? i.length : e;
                                if (
                                  (i.copy(r, r.length - e, 0, s),
                                  0 === (e -= s))
                                ) {
                                  s === i.length
                                    ? (++o,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = i.slice(s)));
                                  break;
                                }
                                ++o;
                              }
                              return (t.length -= o), r;
                            })(e, t));
                  return n;
                })(e, t.buffer, t.decoder)),
            r);
        var r;
      }
      function P(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), n.nextTick(I, t, e));
      }
      function I(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function A(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      (m.prototype.read = function (e) {
        p("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          r = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            p("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? P(this) : O(this),
            null
          );
        if (0 === (e = E(e, t)) && t.ended)
          return 0 === t.length && P(this), null;
        var n,
          o = t.needReadable;
        return (
          p("need readable", o),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            p("length less than watermark", (o = !0)),
          t.ended || t.reading
            ? p("reading or ended", (o = !1))
            : o &&
              (p("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = E(r, t))),
          null === (n = e > 0 ? k(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (m.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (m.prototype.pipe = function (e, t) {
          var r = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), p("pipe count=%d opts=%j", o.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr
              ? c
              : m;
          function u(t, n) {
            p("onunpipe"),
              t === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                p("cleanup"),
                e.removeListener("close", y),
                e.removeListener("finish", g),
                e.removeListener("drain", f),
                e.removeListener("error", b),
                e.removeListener("unpipe", u),
                r.removeListener("end", c),
                r.removeListener("end", m),
                r.removeListener("data", h),
                (l = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function c() {
            p("onend"), e.end();
          }
          o.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", u);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              p("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), T(e));
            };
          })(r);
          e.on("drain", f);
          var l = !1;
          var d = !1;
          function h(t) {
            p("ondata"),
              (d = !1),
              !1 !== e.write(t) ||
                d ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== A(o.pipes, e))) &&
                  !l &&
                  (p(
                    "false write response, pause",
                    r._readableState.awaitDrain
                  ),
                  r._readableState.awaitDrain++,
                  (d = !0)),
                r.pause());
          }
          function b(t) {
            p("onerror", t),
              m(),
              e.removeListener("error", b),
              0 === s(e, "error") && e.emit("error", t);
          }
          function y() {
            e.removeListener("finish", g), m();
          }
          function g() {
            p("onfinish"), e.removeListener("close", y), m();
          }
          function m() {
            p("unpipe"), r.unpipe(e);
          }
          return (
            r.on("data", h),
            (function (e, t, r) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? i(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, "error", b),
            e.once("close", y),
            e.once("finish", g),
            e.emit("pipe", r),
            o.flowing || (p("pipe resume"), r.resume()),
            e
          );
        }),
        (m.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return e && e !== t.pipes
              ? this
              : (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, r),
                this);
          if (!e) {
            var n = t.pipes,
              o = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var i = 0; i < o; i++) n[i].emit("unpipe", this, r);
            return this;
          }
          var s = A(t.pipes, e);
          return -1 === s
            ? this
            : (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r),
              this);
        }),
        (m.prototype.on = function (e, t) {
          var r = a.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var o = this._readableState;
            o.endEmitted ||
              o.readableListening ||
              ((o.readableListening = o.needReadable = !0),
              (o.emittedReadable = !1),
              o.reading ? o.length && O(this) : n.nextTick(j, this));
          }
          return r;
        }),
        (m.prototype.addListener = m.prototype.on),
        (m.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (p("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), n.nextTick(R, e, t));
              })(this, e)),
            this
          );
        }),
        (m.prototype.pause = function () {
          return (
            p("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (p("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (m.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1;
          for (var o in (e.on("end", function () {
            if ((p("wrapped end"), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (o) {
            (p("wrapped data"),
            r.decoder && (o = r.decoder.write(o)),
            r.objectMode && null == o) ||
              ((r.objectMode || (o && o.length)) &&
                (t.push(o) || ((n = !0), e.pause())));
          }),
          e))
            void 0 === this[o] &&
              "function" == typeof e[o] &&
              (this[o] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(o));
          for (var i = 0; i < y.length; i++)
            e.on(y[i], this.emit.bind(this, y[i]));
          return (
            (this._read = function (t) {
              p("wrapped _read", t), n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(m.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (m._fromList = k);
    },
    function (e, t, r) {
      e.exports = r(9);
    },
    function (e, t, r) {
      "use strict";
      var n = r(10);
      function o(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, t) {
          var r = this,
            i = this._readableState && this._readableState.destroyed,
            s = this._writableState && this._writableState.destroyed;
          return i || s
            ? (t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  n.nextTick(o, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !t && e
                  ? (n.nextTick(o, r, e),
                    r._writableState && (r._writableState.errorEmitted = !0))
                  : t && t(e);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(10);
      function o(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, r) {
              var n = e.entry;
              e.entry = null;
              for (; n; ) {
                var o = n.callback;
                t.pendingcb--, o(r), (n = n.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = y;
      var i,
        s =
          !process.browser &&
          ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1
            ? setImmediate
            : n.nextTick;
      y.WritableState = b;
      var a = r(6);
      a.inherits = r(4);
      var u = { deprecate: r(108) },
        c = r(37),
        f = r(11).Buffer,
        l = global.Uint8Array || function () {};
      var p,
        d = r(38);
      function h() {}
      function b(e, t) {
        (i = i || r(5)), (e = e || {});
        var a = t instanceof i;
        (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var u = e.highWaterMark,
          c = e.writableHighWaterMark,
          f = this.objectMode ? 16 : 16384;
        (this.highWaterMark = u || 0 === u ? u : a && (c || 0 === c) ? c : f),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var l = !1 === e.decodeStrings;
        (this.decodeStrings = !l),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var r = e._writableState,
                o = r.sync,
                i = r.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(r),
                t)
              )
                !(function (e, t, r, o, i) {
                  --t.pendingcb,
                    r
                      ? (n.nextTick(i, o),
                        n.nextTick(E, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", o))
                      : (i(o),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", o),
                        E(e, t));
                })(e, r, o, t, i);
              else {
                var a = w(r);
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  v(e, r),
                  o ? s(m, e, r, a, i) : m(e, r, a, i);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this));
      }
      function y(e) {
        if (((i = i || r(5)), !(p.call(y, this) || this instanceof i)))
          return new y(e);
        (this._writableState = new b(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          c.call(this);
      }
      function g(e, t, r, n, o, i, s) {
        (t.writelen = n),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          r ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite),
          (t.sync = !1);
      }
      function m(e, t, r, n) {
        r ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          n(),
          E(e, t);
      }
      function v(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            i = new Array(n),
            s = t.corkedRequestsFree;
          s.entry = r;
          for (var a = 0, u = !0; r; )
            (i[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1);
          (i.allBuffers = u),
            g(e, t, !0, t.length, i, "", s.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            s.next
              ? ((t.corkedRequestsFree = s.next), (s.next = null))
              : (t.corkedRequestsFree = new o(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var c = r.chunk,
              f = r.encoding,
              l = r.callback;
            if (
              (g(e, t, !1, t.objectMode ? 1 : c.length, c, f, l),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function w(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function _(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && e.emit("error", r),
            (t.prefinished = !0),
            e.emit("prefinish"),
            E(e, t);
        });
      }
      function E(e, t) {
        var r = w(t);
        return (
          r &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), n.nextTick(_, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          r
        );
      }
      a.inherits(y, c),
        (b.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(b.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(y, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!p.call(this, e) ||
                  (this === y && e && e._writableState instanceof b)
                );
              },
            }))
          : (p = function (e) {
              return e instanceof this;
            }),
        (y.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (y.prototype.write = function (e, t, r) {
          var o,
            i = this._writableState,
            s = !1,
            a = !i.objectMode && ((o = e), f.isBuffer(o) || o instanceof l);
          return (
            a &&
              !f.isBuffer(e) &&
              (e = (function (e) {
                return f.from(e);
              })(e)),
            "function" == typeof t && ((r = t), (t = null)),
            a ? (t = "buffer") : t || (t = i.defaultEncoding),
            "function" != typeof r && (r = h),
            i.ended
              ? (function (e, t) {
                  var r = new Error("write after end");
                  e.emit("error", r), n.nextTick(t, r);
                })(this, r)
              : (a ||
                  (function (e, t, r, o) {
                    var i = !0,
                      s = !1;
                    return (
                      null === r
                        ? (s = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof r ||
                          void 0 === r ||
                          t.objectMode ||
                          (s = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      s && (e.emit("error", s), n.nextTick(o, s), (i = !1)),
                      i
                    );
                  })(this, i, e, r)) &&
                (i.pendingcb++,
                (s = (function (e, t, r, n, o, i) {
                  if (!r) {
                    var s = (function (e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = f.from(t, r));
                      return t;
                    })(t, n, o);
                    n !== s && ((r = !0), (o = "buffer"), (n = s));
                  }
                  var a = t.objectMode ? 1 : n.length;
                  t.length += a;
                  var u = t.length < t.highWaterMark;
                  u || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: o,
                      isBuf: r,
                      callback: i,
                      next: null,
                    }),
                      c
                        ? (c.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else g(e, t, !1, a, n, o, i);
                  return u;
                })(this, i, a, e, t, r))),
            s
          );
        }),
        (y.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (y.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              v(this, e));
        }),
        (y.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(y.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (y.prototype._write = function (e, t, r) {
          r(new Error("_write() is not implemented"));
        }),
        (y.prototype._writev = null),
        (y.prototype.end = function (e, t, r) {
          var o = this._writableState;
          "function" == typeof e
            ? ((r = e), (e = null), (t = null))
            : "function" == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            o.corked && ((o.corked = 1), this.uncork()),
            o.ending ||
              o.finished ||
              (function (e, t, r) {
                (t.ending = !0),
                  E(e, t),
                  r && (t.finished ? n.nextTick(r) : e.once("finish", r));
                (t.ended = !0), (e.writable = !1);
              })(this, o, r);
        }),
        Object.defineProperty(y.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (y.prototype.destroy = d.destroy),
        (y.prototype._undestroy = d.undestroy),
        (y.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    },
    function (e, t, r) {
      "use strict";
      var n = r(11).Buffer,
        o =
          n.isEncoding ||
          function (e) {
            switch ((e = "" + e) && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function i(e) {
        var t;
        switch (
          ((this.encoding = (function (e) {
            var t = (function (e) {
              if (!e) return "utf8";
              for (var t; ; )
                switch (e) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return e;
                  default:
                    if (t) return;
                    (e = ("" + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ("string" != typeof t && (n.isEncoding === o || !o(e)))
              throw new Error("Unknown encoding: " + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = c), (t = 4);
            break;
          case "utf8":
            (this.fillLast = a), (t = 4);
            break;
          case "base64":
            (this.text = f), (this.end = l), (t = 3);
            break;
          default:
            return (this.write = p), void (this.end = d);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t));
      }
      function s(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function a(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function (e, t, r) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), "�";
            }
          })(this, e);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length));
      }
      function u(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString("utf16le", t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString("utf16le", t, e.length - 1)
        );
      }
      function c(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, r);
        }
        return t;
      }
      function f(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString("base64", t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString("base64", t, e.length - r));
      }
      function l(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed
          ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : t;
      }
      function p(e) {
        return e.toString(this.encoding);
      }
      function d(e) {
        return e && e.length ? this.write(e) : "";
      }
      (t.StringDecoder = i),
        (i.prototype.write = function (e) {
          if (0 === e.length) return "";
          var t, r;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || "";
        }),
        (i.prototype.end = function (e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + "�" : t;
        }),
        (i.prototype.text = function (e, t) {
          var r = (function (e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var o = s(t[n]);
            if (o >= 0) return o > 0 && (e.lastNeed = o - 1), o;
            if (--n < r || -2 === o) return 0;
            if ((o = s(t[n])) >= 0) return o > 0 && (e.lastNeed = o - 2), o;
            if (--n < r || -2 === o) return 0;
            if ((o = s(t[n])) >= 0)
              return o > 0 && (2 === o ? (o = 0) : (e.lastNeed = o - 3)), o;
            return 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString("utf8", t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
        }),
        (i.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    function (e, t, r) {
      "use strict";
      e.exports = s;
      var n = r(5),
        o = r(6);
      function i(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n)
          return this.emit(
            "error",
            new Error("write callback called multiple times")
          );
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var o = this._readableState;
        (o.reading = !1),
          (o.needReadable || o.length < o.highWaterMark) &&
            this._read(o.highWaterMark);
      }
      function s(e) {
        if (!(this instanceof s)) return new s(e);
        n.call(this, e),
          (this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" == typeof e.transform &&
              (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", a);
      }
      function a() {
        var e = this;
        "function" == typeof this._flush
          ? this._flush(function (t, r) {
              u(e, t, r);
            })
          : u(this, null, null);
      }
      function u(e, t, r) {
        if (t) return e.emit("error", t);
        if ((null != r && e.push(r), e._writableState.length))
          throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming)
          throw new Error("Calling transform done when still transforming");
        return e.push(null);
      }
      (o.inherits = r(4)),
        o.inherits(s, n),
        (s.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, e, t)
          );
        }),
        (s.prototype._transform = function (e, t, r) {
          throw new Error("_transform() is not implemented");
        }),
        (s.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var o = this._readableState;
            (n.needTransform || o.needReadable || o.length < o.highWaterMark) &&
              this._read(o.highWaterMark);
          }
        }),
        (s.prototype._read = function (e) {
          var t = this._transformState;
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0);
        }),
        (s.prototype._destroy = function (e, t) {
          var r = this;
          n.prototype._destroy.call(this, e, function (e) {
            t(e), r.emit("close");
          });
        });
    },
    function (e, t, r) {
      var n = r(111),
        o = r(113);
      e.exports = function (t, r) {
        if ("function" == typeof t) return e.exports(null, t);
        var i = (t = t || {}).length || 0,
          s = t.time || 0,
          a = t.drain || !1,
          u = t.transferred || 0,
          c = Date.now() + s,
          f = 0,
          l = o(t.speed || 5e3),
          p = Date.now(),
          d = {
            percentage: 0,
            transferred: u,
            length: i,
            remaining: i,
            eta: 0,
            runtime: 0,
          },
          h = function (e) {
            (d.delta = f),
              (d.percentage = e ? 100 : i ? (u / i) * 100 : 0),
              (d.speed = l(f)),
              (d.eta = Math.round(d.remaining / d.speed)),
              (d.runtime = parseInt((Date.now() - p) / 1e3)),
              (c = Date.now() + s),
              (f = 0),
              b.emit("progress", d);
          },
          b = n(
            t.objectMode ? { objectMode: !0, highWaterMark: 16 } : {},
            function (e, r, n) {
              var o = t.objectMode ? 1 : e.length;
              (u += o),
                (f += o),
                (d.transferred = u),
                (d.remaining = i >= u ? i - u : 0),
                Date.now() >= c && h(!1),
                n(null, e);
            },
            function (e) {
              h(!0), e();
            }
          ),
          y = function (e) {
            (i = e),
              (d.length = i),
              (d.remaining = i - d.transferred),
              b.emit("length", i);
          };
        return (
          (b.setLength = y),
          b.on("pipe", function (e) {
            if ("number" != typeof i)
              return e.readable && !e.writable && e.headers
                ? y(parseInt(e.headers["content-length"] || 0))
                : "number" == typeof e.length
                ? y(e.length)
                : void e.on("response", function (e) {
                    if (
                      e &&
                      e.headers &&
                      "gzip" !== e.headers["content-encoding"]
                    )
                      return e.headers["content-length"]
                        ? y(parseInt(e.headers["content-length"]))
                        : void 0;
                  });
          }),
          a && b.resume(),
          r && b.on("progress", r),
          (b.progress = function () {
            return (
              (d.speed = l(0)), (d.eta = Math.round(d.remaining / d.speed)), d
            );
          }),
          b
        );
      };
    },
    function (e, t, r) {
      var n;
      function o(e) {
        function r() {
          if (r.enabled) {
            var e = r,
              o = +new Date(),
              i = o - (n || o);
            (e.diff = i), (e.prev = n), (e.curr = o), (n = o);
            for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
              s[a] = arguments[a];
            (s[0] = t.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O");
            var u = 0;
            (s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
              if ("%%" === r) return r;
              u++;
              var o = t.formatters[n];
              if ("function" == typeof o) {
                var i = s[u];
                (r = o.call(e, i)), s.splice(u, 1), u--;
              }
              return r;
            })),
              t.formatArgs.call(e, s),
              (r.log || t.log || console.log.bind(console)).apply(e, s);
          }
        }
        return (
          (r.namespace = e),
          (r.enabled = t.enabled(e)),
          (r.useColors = t.useColors()),
          (r.color = (function (e) {
            var r,
              n = 0;
            for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          })(e)),
          "function" == typeof t.init && t.init(r),
          r
        );
      }
      ((t = e.exports = o.debug = o.default = o).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
              n = r.length,
              o = 0;
            o < n;
            o++
          )
            r[o] &&
              ("-" === (e = r[o].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(33)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    function (e, t, r) {
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      const o = r(45)({
        projectId: "kjuhkyb0",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      });
      t.handler = async function (e, t, r) {
        const { payload: i } = JSON.parse(e.body);
        await o.create(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                o.forEach(function (t) {
                  n(e, t, r[t]);
                });
            }
            return e;
          })({ _type: "submission.form" }, i)
        );
        r(null, { statusCode: 200 });
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(0),
        o = r(7).filter,
        i = r(8).map,
        s = r(13),
        a = r(23),
        u = r(55),
        c = r(76),
        f = r(77),
        l = r(78),
        p = r(80),
        d = r(81),
        h = r(82),
        b = r(139),
        y = r(140),
        g = y.defaultConfig,
        m = y.initConfig;
      function v() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
        if (!(this instanceof v)) return new v(e);
        if (
          (this.config(e),
          (this.assets = new l(this)),
          (this.datasets = new c(this)),
          (this.projects = new f(this)),
          (this.users = new p(this)),
          (this.auth = new d(this)),
          this.clientConfig.isPromiseAPI)
        ) {
          var t = n({}, this.clientConfig, { isPromiseAPI: !1 });
          this.observable = new v(t);
        }
      }
      n(v.prototype, u),
        n(v.prototype, {
          clone: function () {
            return new v(this.config());
          },
          config: function (e) {
            if (void 0 === e) return n({}, this.clientConfig);
            if (this.observable) {
              var t = n({}, e, { isPromiseAPI: !1 });
              this.observable.config(t);
            }
            return (this.clientConfig = m(e, this.clientConfig || {})), this;
          },
          getUrl: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ? this.clientConfig.cdnUrl
                : this.clientConfig.url;
            return "".concat(t, "/").concat(e.replace(/^\//, ""));
          },
          isPromiseAPI: function () {
            return this.clientConfig.isPromiseAPI;
          },
          _requestObservable: function (e) {
            var t = e.url || e.uri,
              r =
                this.clientConfig.useCdn &&
                ["GET", "HEAD"].indexOf(e.method || "GET") >= 0 &&
                0 === t.indexOf("/data/");
            return h(
              (function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                var o = t.reduce(function (e, t) {
                  return e || t.headers ? n(e || {}, t.headers || {}) : null;
                }, null);
                return n.apply(void 0, t.concat([o ? { headers: o } : {}]));
              })(b(this.clientConfig), e, { url: this.getUrl(t, r) }),
              this.clientConfig.requester
            );
          },
          request: function (e) {
            var t = this._requestObservable(e).pipe(
              o(function (e) {
                return "response" === e.type;
              }),
              i(function (e) {
                return e.body;
              })
            );
            return this.isPromiseAPI()
              ? (function (e) {
                  return e.toPromise();
                })(t)
              : t;
          },
        }),
        (v.Patch = s),
        (v.Transaction = a),
        (v.ClientError = h.ClientError),
        (v.ServerError = h.ServerError),
        (v.requester = h.defaultRequester),
        (e.exports = v);
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2);
      t.filter = function (e, t) {
        return function (r) {
          return r.lift(new s(e, t));
        };
      };
      var s = (function () {
          function e(e, t) {
            (this.predicate = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new a(e, this.predicate, this.thisArg));
            }),
            e
          );
        })(),
        a = (function (e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return (o.predicate = r), (o.thisArg = n), (o.count = 0), o;
          }
          return (
            o(t, e),
            (t.prototype._next = function (e) {
              var t;
              try {
                t = this.predicate.call(this.thisArg, e, this.count++);
              } catch (e) {
                return void this.destination.error(e);
              }
              t && this.destination.next(e);
            }),
            t
          );
        })(i.Subscriber);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(48),
        o = r(49),
        i = r(17),
        s = r(50),
        a = r(20),
        u = r(51),
        c = (function () {
          function e(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          var t;
          return (
            (e.prototype.unsubscribe = function () {
              var e,
                t = !1;
              if (!this.closed) {
                var r = this._parent,
                  c = this._parents,
                  l = this._unsubscribe,
                  p = this._subscriptions;
                (this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null);
                for (var d = -1, h = c ? c.length : 0; r; )
                  r.remove(this), (r = (++d < h && c[d]) || null);
                if (i.isFunction(l))
                  s.tryCatch(l).call(this) === a.errorObject &&
                    ((t = !0),
                    (e =
                      e ||
                      (a.errorObject.e instanceof u.UnsubscriptionError
                        ? f(a.errorObject.e.errors)
                        : [a.errorObject.e])));
                if (n.isArray(p))
                  for (d = -1, h = p.length; ++d < h; ) {
                    var b = p[d];
                    if (o.isObject(b))
                      if (s.tryCatch(b.unsubscribe).call(b) === a.errorObject) {
                        (t = !0), (e = e || []);
                        var y = a.errorObject.e;
                        y instanceof u.UnsubscriptionError
                          ? (e = e.concat(f(y.errors)))
                          : e.push(y);
                      }
                  }
                if (t) throw new u.UnsubscriptionError(e);
              }
            }),
            (e.prototype.add = function (t) {
              if (!t || t === e.EMPTY) return e.EMPTY;
              if (t === this) return this;
              var r = t;
              switch (typeof t) {
                case "function":
                  r = new e(t);
                case "object":
                  if (r.closed || "function" != typeof r.unsubscribe) return r;
                  if (this.closed) return r.unsubscribe(), r;
                  if ("function" != typeof r._addParent) {
                    var n = r;
                    (r = new e())._subscriptions = [n];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + t + " added to Subscription."
                  );
              }
              return (
                (this._subscriptions || (this._subscriptions = [])).push(r),
                r._addParent(this),
                r
              );
            }),
            (e.prototype.remove = function (e) {
              var t = this._subscriptions;
              if (t) {
                var r = t.indexOf(e);
                -1 !== r && t.splice(r, 1);
              }
            }),
            (e.prototype._addParent = function (e) {
              var t = this._parent,
                r = this._parents;
              t && t !== e
                ? r
                  ? -1 === r.indexOf(e) && r.push(e)
                  : (this._parents = [e])
                : (this._parent = e);
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })();
      function f(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof u.UnsubscriptionError ? t.errors : t);
        }, []);
      }
      t.Subscription = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isArray =
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isObject = function (e) {
          return null != e && "object" == typeof e;
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = r(20);
      function i() {
        try {
          return n.apply(this, arguments);
        } catch (e) {
          return (o.errorObject.e = e), o.errorObject;
        }
      }
      t.tryCatch = function (e) {
        return (n = e), i;
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          Error.call(this),
          (this.message = e
            ? e.length +
              " errors occurred during unsubscription:\n" +
              e
                .map(function (e, t) {
                  return t + 1 + ") " + e.toString();
                })
                .join("\n  ")
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = e),
          this
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (n.prototype = Object.create(Error.prototype)),
        (t.UnsubscriptionError = n);
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2);
      t.map = function (e, t) {
        return function (r) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return r.lift(new s(e, t));
        };
      };
      var s = (function () {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new a(e, this.project, this.thisArg));
          }),
          e
        );
      })();
      t.MapOperator = s;
      var a = (function (e) {
        function t(t, r, n) {
          var o = e.call(this, t) || this;
          return (o.project = r), (o.count = 0), (o.thisArg = n || o), o;
        }
        return (
          o(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(i.Subscriber);
    },
    function (e, t, r) {
      "use strict";
      var n = r(54),
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function s(e, t, r) {
        var i = t[r];
        if (null != i) {
          if (o.call(e, r) && (void 0 === e[r] || null === e[r]))
            throw new TypeError(
              "Cannot convert undefined or null to object (" + r + ")"
            );
          o.call(e, r) && n(i) ? (e[r] = a(Object(e[r]), t[r])) : (e[r] = i);
        }
      }
      function a(e, t) {
        if (e === t) return e;
        for (var r in (t = Object(t))) o.call(t, r) && s(e, t, r);
        if (Object.getOwnPropertySymbols)
          for (
            var n = Object.getOwnPropertySymbols(t), a = 0;
            a < n.length;
            a++
          )
            i.call(t, n[a]) && s(e, t, n[a]);
        return e;
      }
      e.exports = function (e) {
        e = (function (e) {
          if (null == e)
            throw new TypeError("Sources cannot be null or undefined");
          return Object(e);
        })(e);
        for (var t = 1; t < arguments.length; t++) a(e, arguments[t]);
        return e;
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t = typeof e;
        return null !== e && ("object" === t || "function" === t);
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = r(0),
        i = r(7).filter,
        s = r(8).map,
        a = r(3),
        u = r(22),
        c = r(24),
        f = r(23),
        l = r(13),
        p = r(56),
        d = function () {
          var e,
            t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return {
            returnIds: !0,
            returnDocuments:
              ((e = r.returnDocuments),
              (t = !0),
              !1 === e ? void 0 : void 0 === e ? t : e),
            visibility: r.visibility || "sync",
          };
        },
        h = function (e) {
          return "response" === e.type;
        },
        b = function (e) {
          return e.body;
        },
        y = function (e) {
          return e.toPromise();
        };
      e.exports = {
        listen: p,
        getDataUrl: function (e, t) {
          var r = this.clientConfig,
            n = r.gradientMode ? r.namespace : a.hasDataset(r),
            o = "/".concat(e, "/").concat(n),
            i = t ? "".concat(o, "/").concat(t) : o;
          return (
            this.clientConfig.gradientMode ? i : "/data".concat(i)
          ).replace(/\/($|\?)/, "$1");
        },
        fetch: function (e, t) {
          var r =
              !1 ===
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
              ).filterResponse
                ? function (e) {
                    return e;
                  }
                : function (e) {
                    return e.result;
                  },
            n = this._dataRequest("query", { query: e, params: t }).pipe(s(r));
          return this.isPromiseAPI() ? y(n) : n;
        },
        getDocument: function (e) {
          var t = { uri: this.getDataUrl("doc", e), json: !0 },
            r = this._requestObservable(t).pipe(
              i(h),
              s(function (e) {
                return e.body.documents && e.body.documents[0];
              })
            );
          return this.isPromiseAPI() ? y(r) : r;
        },
        create: function (e, t) {
          return this._create(e, "create", t);
        },
        createIfNotExists: function (e, t) {
          return (
            a.requireDocumentId("createIfNotExists", e),
            this._create(e, "createIfNotExists", t)
          );
        },
        createOrReplace: function (e, t) {
          return (
            a.requireDocumentId("createOrReplace", e),
            this._create(e, "createOrReplace", t)
          );
        },
        patch: function (e, t) {
          return new l(e, t, this);
        },
        delete: function (e, t) {
          return this.dataRequest(
            "mutate",
            { mutations: [{ delete: u(e) }] },
            t
          );
        },
        mutate: function (e, t) {
          var r = e instanceof l || e instanceof f ? e.serialize() : e,
            n = Array.isArray(r) ? r : [r],
            o = t && t.transactionId;
          return this.dataRequest(
            "mutate",
            { mutations: n, transactionId: o },
            t
          );
        },
        transaction: function (e) {
          return new f(e, this);
        },
        dataRequest: function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = this._dataRequest(e, t, r);
          return this.isPromiseAPI() ? y(n) : n;
        },
        _dataRequest: function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = "mutate" === e,
            a = !o && c(t),
            u = !o && a.length < 11264,
            f = u ? a : "",
            l = r.returnFirst,
            p = {
              method: u ? "GET" : "POST",
              uri: this.getDataUrl(e, f),
              json: !0,
              body: u ? void 0 : t,
              query: o && d(r),
            };
          return this._requestObservable(p).pipe(
            i(h),
            s(b),
            s(function (e) {
              if (!o) return e;
              var t = e.results || [];
              if (r.returnDocuments)
                return l
                  ? t[0] && t[0].document
                  : t.map(function (e) {
                      return e.document;
                    });
              var i = l ? "documentId" : "documentIds",
                s = l
                  ? t[0] && t[0].id
                  : t.map(function (e) {
                      return e.id;
                    });
              return n({ transactionId: e.transactionId, results: t }, i, s);
            })
          );
        },
        _create: function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = n({}, t, e),
            s = o({ returnFirst: !0, returnDocuments: !0 }, r);
          return this.dataRequest("mutate", { mutations: [i] }, s);
        },
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(0),
        o = r(25),
        i = r(69),
        s = r(74),
        a = r(75),
        u = r(24),
        c = r(30),
        f = r(31),
        l = [
          "Using token with listeners is not supported in browsers. ",
          "For more info, see ".concat(
            c("js-client-listener-tokens-browser"),
            "."
          ),
        ],
        p = f(function () {
          return console.warn(l.join(" "));
        }),
        d = Boolean("undefined" != typeof window && window.EventSource),
        h = d ? window.EventSource : i,
        b = ["includePreviousRevision", "includeResult"],
        y = { includeResult: !0 };
      function g(e) {
        try {
          var t = (e.data && JSON.parse(e.data)) || {};
          return n({ type: e.type }, t);
        } catch (e) {
          return e;
        }
      }
      e.exports = function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = a(r, y),
          i = s(n, b),
          c = u({ query: e, params: t, options: i }),
          f = this.clientConfig,
          l = f.url,
          m = f.token,
          v = f.withCredentials,
          w = "".concat(l).concat(this.getDataUrl("listen", c)),
          _ = n.events ? n.events : ["mutation"],
          E = -1 !== _.indexOf("reconnect");
        m && d && p();
        var O = {};
        return (
          (m || v) && (O.withCredentials = !0),
          m && (O.headers = { Authorization: "Bearer ".concat(m) }),
          new o(function (e) {
            var t,
              r = c(),
              n = !1;
            function o() {
              n ||
                (E && e.next({ type: "reconnect" }),
                n ||
                  (r.readyState === h.CLOSED &&
                    (u(), clearTimeout(t), (t = setTimeout(f, 100)))));
            }
            function i(t) {
              e.error(
                (function (e) {
                  if (e instanceof Error) return e;
                  var t = g(e);
                  return t instanceof Error
                    ? t
                    : new Error(
                        (function (e) {
                          if (!e.error)
                            return e.message || "Unknown listener error";
                          if (e.error.description) return e.error.description;
                          return "string" == typeof e.error
                            ? e.error
                            : JSON.stringify(e.error, null, 2);
                        })(t)
                      );
                })(t)
              );
            }
            function s(t) {
              var r = g(t);
              return r instanceof Error ? e.error(r) : e.next(r);
            }
            function a(t) {
              (n = !0), u(), e.complete();
            }
            function u() {
              r.removeEventListener("error", o, !1),
                r.removeEventListener("channelError", i, !1),
                r.removeEventListener("disconnect", a, !1),
                _.forEach(function (e) {
                  return r.removeEventListener(e, s, !1);
                }),
                r.close();
            }
            function c() {
              var e = new h(w, O);
              return (
                e.addEventListener("error", o, !1),
                e.addEventListener("channelError", i, !1),
                e.addEventListener("disconnect", a, !1),
                _.forEach(function (t) {
                  return e.addEventListener(t, s, !1);
                }),
                e
              );
            }
            function f() {
              r = c();
            }
            return function () {
              (n = !0), u();
            };
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(26).Observable,
        o = r(0),
        i = r(8).map,
        s = r(7).filter,
        a = r(62).reduce;
      function u() {
        n.apply(this, arguments);
      }
      function c(e, t) {
        var r = !1;
        return function () {
          return (
            r ||
              ((r = !0),
              console.warn(
                new Error(
                  "Calling observable."
                    .concat(
                      e,
                      "(...) is deprecated. Please use observable.pipe("
                    )
                    .concat(e, "(...)) instead")
                )
              )),
            this.pipe(t.apply(this, arguments))
          );
        };
      }
      (u.prototype = Object.create(o(Object.create(null), n.prototype))),
        Object.defineProperty(u.prototype, "constructor", {
          value: u,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        }),
        (u.prototype.lift = function (e) {
          var t = new u();
          return (t.source = this), (t.operator = e), t;
        }),
        (u.prototype.map = c("map", i)),
        (u.prototype.filter = c("filter", s)),
        (u.prototype.reduce = c("filter", a)),
        (e.exports = u);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2);
      t.canReportError = function (e) {
        for (; e; ) {
          var t = e,
            r = t.closed,
            o = t.destination,
            i = t.isStopped;
          if (r || i) return !1;
          e = o && o instanceof n.Subscriber ? o : null;
        }
        return !0;
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2),
        o = r(21),
        i = r(18);
      t.toSubscriber = function (e, t, r) {
        if (e) {
          if (e instanceof n.Subscriber) return e;
          if (e[o.rxSubscriber]) return e[o.rxSubscriber]();
        }
        return e || t || r
          ? new n.Subscriber(e, t, r)
          : new n.Subscriber(i.empty);
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.observable =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.noop = function () {});
    },
    function (e, t, r) {
      t.reduce = r(63).reduce;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(64),
        o = r(65),
        i = r(68),
        s = r(27);
      t.reduce = function (e, t) {
        return arguments.length >= 2
          ? function (r) {
              return s.pipe(
                n.scan(e, t),
                o.takeLast(1),
                i.defaultIfEmpty(t)
              )(r);
            }
          : function (t) {
              return s.pipe(
                n.scan(function (t, r, n) {
                  return e(t, r, n + 1);
                }),
                o.takeLast(1)
              )(t);
            };
      };
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2);
      t.scan = function (e, t) {
        var r = !1;
        return (
          arguments.length >= 2 && (r = !0),
          function (n) {
            return n.lift(new s(e, t, r));
          }
        );
      };
      var s = (function () {
          function e(e, t, r) {
            void 0 === r && (r = !1),
              (this.accumulator = e),
              (this.seed = t),
              (this.hasSeed = r);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(
                new a(e, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            e
          );
        })(),
        a = (function (e) {
          function t(t, r, n, o) {
            var i = e.call(this, t) || this;
            return (
              (i.accumulator = r),
              (i._seed = n),
              (i.hasSeed = o),
              (i.index = 0),
              i
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, "seed", {
              get: function () {
                return this._seed;
              },
              set: function (e) {
                (this.hasSeed = !0), (this._seed = e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._next = function (e) {
              if (this.hasSeed) return this._tryNext(e);
              (this.seed = e), this.destination.next(e);
            }),
            (t.prototype._tryNext = function (e) {
              var t,
                r = this.index++;
              try {
                t = this.accumulator(this.seed, e, r);
              } catch (e) {
                this.destination.error(e);
              }
              (this.seed = t), this.destination.next(t);
            }),
            t
          );
        })(i.Subscriber);
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2),
        s = r(66),
        a = r(67);
      t.takeLast = function (e) {
        return function (t) {
          return 0 === e ? a.empty() : t.lift(new u(e));
        };
      };
      var u = (function () {
          function e(e) {
            if (((this.total = e), this.total < 0))
              throw new s.ArgumentOutOfRangeError();
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new c(e, this.total));
            }),
            e
          );
        })(),
        c = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (n.total = r), (n.ring = new Array()), (n.count = 0), n;
          }
          return (
            o(t, e),
            (t.prototype._next = function (e) {
              var t = this.ring,
                r = this.total,
                n = this.count++;
              t.length < r ? t.push(e) : (t[n % r] = e);
            }),
            (t.prototype._complete = function () {
              var e = this.destination,
                t = this.count;
              if (t > 0)
                for (
                  var r = this.count >= this.total ? this.total : this.count,
                    n = this.ring,
                    o = 0;
                  o < r;
                  o++
                ) {
                  var i = t++ % r;
                  e.next(n[i]);
                }
              e.complete();
            }),
            t
          );
        })(i.Subscriber);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        return (
          Error.call(this),
          (this.message = "argument out of range"),
          (this.name = "ArgumentOutOfRangeError"),
          this
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (n.prototype = Object.create(Error.prototype)),
        (t.ArgumentOutOfRangeError = n);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(26);
      function o(e) {
        return new n.Observable(function (t) {
          return e.schedule(function () {
            return t.complete();
          });
        });
      }
      (t.EMPTY = new n.Observable(function (e) {
        return e.complete();
      })),
        (t.empty = function (e) {
          return e ? o(e) : t.EMPTY;
        }),
        (t.emptyScheduled = o);
    },
    function (e, t, r) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2);
      t.defaultIfEmpty = function (e) {
        return (
          void 0 === e && (e = null),
          function (t) {
            return t.lift(new s(e));
          }
        );
      };
      var s = (function () {
          function e(e) {
            this.defaultValue = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new a(e, this.defaultValue));
            }),
            e
          );
        })(),
        a = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (n.defaultValue = r), (n.isEmpty = !0), n;
          }
          return (
            o(t, e),
            (t.prototype._next = function (e) {
              (this.isEmpty = !1), this.destination.next(e);
            }),
            (t.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            t
          );
        })(i.Subscriber);
    },
    function (e, t, r) {
      e.exports = r(70);
    },
    function (e, t, r) {
      var n = r(71),
        o = r(14).parse,
        i = r(29),
        s = r(15),
        a = r(16),
        u = r(1),
        c = [
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "secureProtocol",
          "servername",
          "checkServerIdentity",
        ],
        f = [239, 187, 191],
        l = 58,
        p = 32,
        d = 10,
        h = 13;
      function b(e, t) {
        var r = b.CONNECTING;
        Object.defineProperty(this, "readyState", {
          get: function () {
            return r;
          },
        }),
          Object.defineProperty(this, "url", {
            get: function () {
              return e;
            },
          });
        var i,
          u = this;
        function m(t) {
          r !== b.CLOSED &&
            ((r = b.CONNECTING),
            S("error", new y("error", { message: t })),
            O && ((e = O), (O = null)),
            setTimeout(function () {
              r === b.CONNECTING && C();
            }, u.reconnectInterval));
        }
        u.reconnectInterval = 1e3;
        var v = "";
        t &&
          t.headers &&
          t.headers["Last-Event-ID"] &&
          ((v = t.headers["Last-Event-ID"]), delete t.headers["Last-Event-ID"]);
        var w = !1,
          _ = "",
          E = "",
          O = null;
        function C() {
          var n = o(e),
            p = "https:" === n.protocol;
          if (
            ((n.headers = {
              "Cache-Control": "no-cache",
              Accept: "text/event-stream",
            }),
            v && (n.headers["Last-Event-ID"] = v),
            t && t.headers)
          )
            for (var g in t.headers) {
              var _ = t.headers[g];
              _ && (n.headers[g] = _);
            }
          if (
            ((n.rejectUnauthorized = !(t && !t.rejectUnauthorized)),
            t && t.proxy)
          ) {
            var E = o(t.proxy);
            (p = "https:" === E.protocol),
              (n.protocol = p ? "https:" : "http:"),
              (n.path = e),
              (n.headers.Host = n.host),
              (n.hostname = E.hostname),
              (n.host = E.host),
              (n.port = E.port);
          }
          if (t && t.https)
            for (var j in t.https)
              if (-1 !== c.indexOf(j)) {
                var R = t.https[j];
                void 0 !== R && (n[j] = R);
              }
          t &&
            void 0 !== t.withCredentials &&
            (n.withCredentials = t.withCredentials),
            (i = (p ? s : a).request(n, function (t) {
              if (
                500 === t.statusCode ||
                502 === t.statusCode ||
                503 === t.statusCode ||
                504 === t.statusCode
              )
                return (
                  S(
                    "error",
                    new y("error", {
                      status: t.statusCode,
                      message: t.statusMessage,
                    })
                  ),
                  void m()
                );
              if (301 === t.statusCode || 307 === t.statusCode)
                return t.headers.location
                  ? (307 === t.statusCode && (O = e),
                    (e = t.headers.location),
                    void process.nextTick(C))
                  : void S(
                      "error",
                      new y("error", {
                        status: t.statusCode,
                        message: t.statusMessage,
                      })
                    );
              if (200 !== t.statusCode)
                return (
                  S(
                    "error",
                    new y("error", {
                      status: t.statusCode,
                      message: t.statusMessage,
                    })
                  ),
                  u.close()
                );
              (r = b.OPEN),
                t.on("close", function () {
                  t.removeAllListeners("close"),
                    t.removeAllListeners("end"),
                    m();
                }),
                t.on("end", function () {
                  t.removeAllListeners("close"),
                    t.removeAllListeners("end"),
                    m();
                }),
                S("open", new y("open"));
              var n,
                o = !0;
              t.on("data", function (e) {
                (n = n ? Buffer.concat([n, e]) : e),
                  o &&
                    (function (e) {
                      return f.every(function (t, r) {
                        return e[r] === t;
                      });
                    })(n) &&
                    (n = n.slice(f.length)),
                  (o = !1);
                for (var t = 0, r = n.length; t < r; ) {
                  w && (n[t] === d && ++t, (w = !1));
                  for (var i, s = -1, a = -1, u = t; s < 0 && u < r; ++u)
                    (i = n[u]) === l
                      ? a < 0 && (a = u - t)
                      : i === h
                      ? ((w = !0), (s = u - t))
                      : i === d && (s = u - t);
                  if (s < 0) break;
                  x(n, t, a, s), (t += s + 1);
                }
                t === r ? (n = void 0) : t > 0 && (n = n.slice(t));
              });
            })).on("error", function (e) {
              m(e.message);
            }),
            i.setNoDelay && i.setNoDelay(!0),
            i.end();
        }
        function S() {
          u.listeners(arguments[0]).length > 0 && u.emit.apply(u, arguments);
        }
        function x(t, r, o, i) {
          if (0 === i) {
            if (_.length > 0) {
              var s = E || "message";
              S(
                s,
                new g(s, { data: _.slice(0, -1), lastEventId: v, origin: n(e) })
              ),
                (_ = "");
            }
            E = void 0;
          } else if (o > 0) {
            var a = o < 0,
              c = 0,
              f = t.slice(r, r + (a ? i : o)).toString();
            r += c = a ? i : t[r + o + 1] !== p ? o + 1 : o + 2;
            var l = i - c,
              d = t.slice(r, r + l).toString();
            if ("data" === f) _ += d + "\n";
            else if ("event" === f) E = d;
            else if ("id" === f) v = d;
            else if ("retry" === f) {
              var h = parseInt(d, 10);
              Number.isNaN(h) || (u.reconnectInterval = h);
            }
          }
        }
        C(),
          (this._close = function () {
            r !== b.CLOSED &&
              ((r = b.CLOSED),
              i.abort && i.abort(),
              i.xhr && i.xhr.abort && i.xhr.abort());
          });
      }
      function y(e, t) {
        if (
          (Object.defineProperty(this, "type", {
            writable: !1,
            value: e,
            enumerable: !0,
          }),
          t)
        )
          for (var r in t)
            t.hasOwnProperty(r) &&
              Object.defineProperty(this, r, {
                writable: !1,
                value: t[r],
                enumerable: !0,
              });
      }
      function g(e, t) {
        for (var r in (Object.defineProperty(this, "type", {
          writable: !1,
          value: e,
          enumerable: !0,
        }),
        t))
          t.hasOwnProperty(r) &&
            Object.defineProperty(this, r, {
              writable: !1,
              value: t[r],
              enumerable: !0,
            });
      }
      (e.exports = b),
        u.inherits(b, i.EventEmitter),
        (b.prototype.constructor = b),
        ["open", "error", "message"].forEach(function (e) {
          Object.defineProperty(b.prototype, "on" + e, {
            get: function () {
              var t = this.listeners(e)[0];
              return t ? (t._listener ? t._listener : t) : void 0;
            },
            set: function (t) {
              this.removeAllListeners(e), this.addEventListener(e, t);
            },
          });
        }),
        Object.defineProperty(b, "CONNECTING", { enumerable: !0, value: 0 }),
        Object.defineProperty(b, "OPEN", { enumerable: !0, value: 1 }),
        Object.defineProperty(b, "CLOSED", { enumerable: !0, value: 2 }),
        (b.prototype.CONNECTING = 0),
        (b.prototype.OPEN = 1),
        (b.prototype.CLOSED = 2),
        (b.prototype.close = function () {
          this._close();
        }),
        (b.prototype.addEventListener = function (e, t) {
          "function" == typeof t && ((t._listener = t), this.on(e, t));
        }),
        (b.prototype.dispatchEvent = function (e) {
          if (!e.type) throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
          this.emit(e.type, e.detail);
        }),
        (b.prototype.removeEventListener = function (e, t) {
          "function" == typeof t &&
            ((t._listener = void 0), this.removeListener(e, t));
        });
    },
    function (e, t, r) {
      "use strict";
      var n = r(28);
      function o(e) {
        return (
          "string" == typeof e && (e = n(e)),
          e.protocol && e.hostname
            ? (e.protocol + "//" + e.host).toLowerCase()
            : "null"
        );
      }
      (o.same = function (e, t) {
        return o(e) === o(t);
      }),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        if (((t = t.split(":")[0]), !(e = +e))) return !1;
        switch (t) {
          case "http":
          case "ws":
            return 80 !== e;
          case "https":
          case "wss":
            return 443 !== e;
          case "ftp":
            return 21 !== e;
          case "gopher":
            return 70 !== e;
          case "file":
            return !1;
        }
        return 0 !== e;
      };
    },
    function (e, t, r) {
      "use strict";
      var n,
        o = Object.prototype.hasOwnProperty;
      function i(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      }
      (t.stringify = function (e, t) {
        t = t || "";
        var r,
          i,
          s = [];
        for (i in ("string" != typeof t && (t = "?"), e))
          o.call(e, i) &&
            ((r = e[i]) || (null !== r && r !== n && !isNaN(r)) || (r = ""),
            s.push(encodeURIComponent(i) + "=" + encodeURIComponent(r)));
        return s.length ? t + s.join("&") : "";
      }),
        (t.parse = function (e) {
          for (var t, r = /([^=?&]+)=?([^&]*)/g, n = {}; (t = r.exec(e)); ) {
            var o = i(t[1]),
              s = i(t[2]);
            o in n || (n[o] = s);
          }
          return n;
        });
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return t.reduce(function (t, r) {
          return void 0 === e[r] ? t : ((t[r] = e[r]), t);
        }, {});
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return Object.keys(t)
          .concat(Object.keys(e))
          .reduce(function (r, n) {
            return (r[n] = void 0 === e[n] ? t[n] : e[n]), r;
          }, {});
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(0),
        o = r(3);
      function i(e) {
        this.request = e.request.bind(e);
      }
      n(i.prototype, {
        create: function (e, t) {
          return this._modify("PUT", e, t);
        },
        edit: function (e, t) {
          return this._modify("PATCH", e, t);
        },
        delete: function (e) {
          return this._modify("DELETE", e);
        },
        list: function () {
          return this.request({ uri: "/datasets" });
        },
        _modify: function (e, t, r) {
          return (
            o.dataset(t),
            this.request({ method: e, uri: "/datasets/".concat(t), body: r })
          );
        },
      }),
        (e.exports = i);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        this.client = e;
      }
      r(0)(n.prototype, {
        list: function () {
          return this.client.request({ uri: "/projects" });
        },
        getById: function (e) {
          return this.client.request({ uri: "/projects/".concat(e) });
        },
      }),
        (e.exports = n);
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(n = (s = a.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var o = r(0),
        i = r(8).map,
        s = r(7).filter,
        a = r(79),
        u = r(3);
      function c(e) {
        this.client = e;
      }
      o(c.prototype, {
        upload: function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          u.validateAssetType(e);
          var n = r.extract || void 0;
          n && !n.length && (n = ["none"]);
          var a = u.hasDataset(this.client.clientConfig),
            c = "image" === e ? "images" : "files",
            f = (function (e, t) {
              return "undefined" != typeof window && t instanceof window.File
                ? o(
                    {
                      filename: !1 === e.preserveFilename ? void 0 : t.name,
                      contentType: t.type,
                    },
                    e
                  )
                : e;
            })(r, t),
            l = { label: f.label, filename: f.filename, meta: n },
            p = this.client._requestObservable({
              method: "POST",
              timeout: f.timeout || 0,
              uri: "/assets/".concat(c, "/").concat(a),
              headers: f.contentType ? { "Content-Type": f.contentType } : {},
              query: l,
              body: t,
            });
          return this.client.isPromiseAPI()
            ? p
                .pipe(
                  s(function (e) {
                    return "response" === e.type;
                  }),
                  i(function (e) {
                    return (
                      (t = e.body),
                      (r = t.document),
                      Object.defineProperty(r, "document", {
                        enumerable: !1,
                        get: function () {
                          return (
                            console.warn(
                              "The promise returned from client.asset.upload(...) now resolves with the asset document"
                            ),
                            r
                          );
                        },
                      }),
                      r
                    );
                    var t, r;
                  })
                )
                .toPromise()
            : p;
        },
        delete: function (e, t) {
          console.warn(
            "client.assets.delete() is deprecated, please use client.delete(<document-id>)"
          );
          var r = t || "";
          return (
            /^(image|file)-/.test(r)
              ? e._id && (r = e._id)
              : (r = "".concat(e, "-").concat(r)),
            u.hasDataset(this.client.clientConfig),
            this.client.delete(r)
          );
        },
        getImageUrl: function (e, t) {
          var r = e._ref || e;
          if ("string" != typeof r)
            throw new Error(
              "getImageUrl() needs either an object with a _ref, or a string with an asset document ID"
            );
          if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(r))
            throw new Error(
              'Unsupported asset ID "'.concat(
                r,
                '". URL generation only works for auto-generated IDs.'
              )
            );
          var o = n(r.split("-"), 4),
            i = o[1],
            s = o[2],
            c = o[3];
          u.hasDataset(this.client.clientConfig);
          var f = this.client.clientConfig,
            l = f.projectId,
            p = f.dataset,
            d = t ? a(t) : "";
          return "https://cdn.sanity.io/images/"
            .concat(l, "/")
            .concat(p, "/")
            .concat(i, "-")
            .concat(s, ".")
            .concat(c)
            .concat(d);
        },
      }),
        (e.exports = c);
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        for (var r in e)
          e.hasOwnProperty(r) &&
            t.push(
              ""
                .concat(encodeURIComponent(r), "=")
                .concat(encodeURIComponent(e[r]))
            );
        return t.length > 0 ? "?".concat(t.join("&")) : "";
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        this.client = e;
      }
      r(0)(n.prototype, {
        getById: function (e) {
          return this.client.request({ uri: "/users/".concat(e) });
        },
      }),
        (e.exports = n);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        this.client = e;
      }
      r(0)(n.prototype, {
        getLoginProviders: function () {
          return this.client.request({ uri: "/auth/providers" });
        },
        logout: function () {
          return this.client.request({ uri: "/auth/logout", method: "POST" });
        },
      }),
        (e.exports = n);
    },
    function (e, t, r) {
      "use strict";
      var n = r(83),
        o = r(0),
        i = r(117),
        s = r(119),
        a = r(122),
        u = r(123),
        c = r(25),
        f = r(125),
        l = f.ClientError,
        p = f.ServerError,
        d = {
          onResponse: function (e) {
            if (e.statusCode >= 500) throw new p(e);
            if (e.statusCode >= 400) throw new l(e);
            return e;
          },
        },
        h = n(r(127).concat([s(), a(), u(), d, i({ implementation: c })]));
      function b(e) {
        return (
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h
        )(o({ maxRedirects: 0 }, e));
      }
      (b.defaultRequester = h),
        (b.ClientError = l),
        (b.ServerError = p),
        (e.exports = b);
    },
    function (e, t, r) {
      e.exports = r(84);
    },
    function (e, t, r) {
      "use strict";
      const n = r(85),
        o = r(86),
        i = r(87),
        s = r(88),
        a = r(89),
        u = ["request", "response", "progress", "error", "abort"],
        c = [
          "processOptions",
          "validateOptions",
          "interceptRequest",
          "onRequest",
          "onResponse",
          "onError",
          "onReturn",
          "onHeaders",
        ];
      e.exports = function e() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        const r = [],
          f = c.reduce((e, t) => ((e[t] = e[t] || []), e), {
            processOptions: [i],
            validateOptions: [s],
          });
        function l(e) {
          const t = u.reduce((e, t) => ((e[t] = n()), e), {}),
            r = o(f),
            i = r("processOptions", e);
          r("validateOptions", i);
          const s = { options: i, channels: t, applyMiddleware: r };
          let c = null;
          const l = t.request.subscribe((e) => {
            c = a(e, (n, o) =>
              (function (e, n, o) {
                let i = e,
                  s = n;
                if (!i)
                  try {
                    s = r("onResponse", n, o);
                  } catch (e) {
                    (s = null), (i = e);
                  }
                (i = i && r("onError", i, o))
                  ? t.error.publish(i)
                  : s && t.response.publish(s);
              })(n, o, e)
            );
          });
          t.abort.subscribe(() => {
            l(), c && c.abort();
          });
          const p = r("onReturn", t, s);
          return p === t && t.request.publish(s), p;
        }
        return (
          (l.use = function (e) {
            if (!e)
              throw new Error(
                "Tried to add middleware that resolved to falsey value"
              );
            if ("function" == typeof e)
              throw new Error(
                "Tried to add middleware that was a function. It probably expects you to pass options to it."
              );
            if (e.onReturn && f.onReturn.length > 0)
              throw new Error(
                "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
              );
            return (
              c.forEach((t) => {
                e[t] && f[t].push(e[t]);
              }),
              r.push(e),
              l
            );
          }),
          (l.clone = function () {
            return e(r);
          }),
          t.forEach(l.use),
          l
        );
      };
    },
    function (e, t) {
      e.exports = function () {
        var e = [];
        return {
          subscribe: function (t) {
            return (
              e.push(t),
              function () {
                var r = e.indexOf(t);
                r > -1 && e.splice(r, 1);
              }
            );
          },
          publish: function () {
            for (var t = 0; t < e.length; t++) e[t].apply(null, arguments);
          },
        };
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = (e) => {
        return function (t, r) {
          for (
            var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            o[i - 2] = arguments[i];
          return e[t].reduce((e, t) => t.apply(void 0, [e].concat(o)), r);
        };
      };
    },
    function (e, t, r) {
      "use strict";
      const n = r(0),
        o = r(28),
        i =
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product,
        s = Object.prototype.hasOwnProperty,
        a = { timeout: i ? 6e4 : 12e4 };
      function u(e) {
        const t = [];
        for (const t in e) s.call(e, t) && r(t, e[t]);
        return t.length ? t.join("&") : "";
        function r(e, n) {
          Array.isArray(n)
            ? n.forEach((t) => r(e, t))
            : t.push([e, n].map(encodeURIComponent).join("="));
        }
      }
      e.exports = (e) => {
        const t = "string" == typeof e ? n({ url: e }, a) : n({}, a, e),
          r = o(t.url, {}, !0);
        return (
          (t.timeout = (function e(t) {
            if (!1 === t || 0 === t) return !1;
            if (t.connect || t.socket) return t;
            const r = Number(t);
            if (isNaN(r)) return e(a.timeout);
            return { connect: r, socket: r };
          })(t.timeout)),
          t.query &&
            (r.query = n(
              {},
              r.query,
              (function (e) {
                const t = {};
                for (const r in e) void 0 !== e[r] && (t[r] = e[r]);
                return t;
              })(t.query)
            )),
          (t.method =
            t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
          (t.url = r.toString(u)),
          t
        );
      };
    },
    function (e, t, r) {
      "use strict";
      const n = /^https?:\/\//i;
      e.exports = (e) => {
        if (!n.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = r(90);
    },
    function (e, t, r) {
      "use strict";
      const n = r(14),
        o = r(16),
        i = r(15),
        s = r(91),
        a = r(92),
        u = r(100),
        c = r(101),
        f = r(102),
        l = r(0),
        p = r(42),
        d = r(114);
      e.exports = (e, t) => {
        const r = e.options,
          h = l({}, n.parse(r.url)),
          b = c(r.body) ? "stream" : typeof r.body;
        if (
          "undefined" !== b &&
          "stream" !== b &&
          "string" !== b &&
          !Buffer.isBuffer(r.body)
        )
          throw new Error(
            `Request body must be a string, buffer or stream, got ${b}`
          );
        const y = {};
        r.bodySize
          ? (y["Content-Length"] = r.bodySize)
          : r.body &&
            Buffer.isBuffer(r.body) &&
            (y["Content-Length"] = r.body.length);
        let g = !1;
        const m = (e, r) => !g && t(e, r);
        e.channels.abort.subscribe(() => {
          g = !0;
        });
        const v = l(h, { method: r.method, headers: l({}, r.headers, y) }),
          w = e.applyMiddleware("interceptRequest", void 0, {
            adapter: "node",
            context: e,
          });
        if (w) {
          const e = setImmediate(m, null, w);
          return { abort: () => clearImmediate(e) };
        }
        let _ = "https:" === h.protocol ? i : o;
        0 !== r.maxRedirects &&
          ((_ = "https:" === h.protocol ? a.https : a.http),
          (v.maxRedirects = r.maxRedirects || 5));
        const E = _.request(v, (t) => {
          const n = "HEAD" !== v.method ? d(t) : t,
            o = e.applyMiddleware("onHeaders", n, {
              headers: t.headers,
              adapter: "node",
              context: e,
            });
          s(o, (e, o) => {
            if (e) return m(e);
            const i = r.rawBody ? o : o.toString(),
              s = ((e, t, r, n) => ({
                body: n,
                url: t,
                method: r,
                headers: e.headers,
                statusCode: e.statusCode,
                statusMessage: e.statusMessage,
              }))(n, t.responseUrl || r.url, v.method, i);
            return m(null, s);
          });
        });
        r.timeout && u(E, r.timeout), E.once("error", m);
        var O = (function (e) {
          if (!e.body) return {};
          const t = c(e.body),
            r = e.bodySize || (t ? null : Buffer.byteLength(e.body));
          if (!r) return t ? { bodyStream: e.body } : {};
          const n = p({ time: 16, length: r });
          return { bodyStream: (t ? e.body : f(e.body)).pipe(n), progress: n };
        })(r);
        const C = O.bodyStream,
          S = O.progress;
        return (
          e.applyMiddleware("onRequest", {
            options: r,
            adapter: "node",
            request: E,
            context: e,
            progress: S,
          }),
          C ? C.pipe(E) : E.end(r.body),
          { abort: () => E.abort() }
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        var r = [];
        e.on("data", function (e) {
          r.push(e);
        }),
          e.once("end", function () {
            t && t(null, Buffer.concat(r)), (t = null);
          }),
          e.once("error", function (e) {
            t && t(e), (t = null);
          });
      };
    },
    function (e, t, r) {
      var n = r(14),
        o = n.URL,
        i = r(16),
        s = r(15),
        a = r(93),
        u = r(9).Writable,
        c = r(94)("follow-redirects"),
        f = { GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0 },
        l = Object.create(null);
      function p(e, t) {
        u.call(this),
          (e.headers = e.headers || {}),
          (this._options = e),
          (this._ended = !1),
          (this._ending = !1),
          (this._redirectCount = 0),
          (this._redirects = []),
          (this._requestBodyLength = 0),
          (this._requestBodyBuffers = []),
          e.host && (e.hostname || (e.hostname = e.host), delete e.host),
          t && this.on("response", t);
        var r = this;
        if (
          ((this._onNativeResponse = function (e) {
            r._processResponse(e);
          }),
          !e.pathname && e.path)
        ) {
          var n = e.path.indexOf("?");
          n < 0
            ? (e.pathname = e.path)
            : ((e.pathname = e.path.substring(0, n)),
              (e.search = e.path.substring(n)));
        }
        this._performRequest();
      }
      function d(e) {
        var t = { maxRedirects: 21, maxBodyLength: 10485760 },
          r = {};
        return (
          Object.keys(e).forEach(function (i) {
            var s = i + ":",
              u = (r[s] = e[i]),
              f = (t[i] = Object.create(u));
            (f.request = function (e, i, u) {
              if ("string" == typeof e) {
                var f = e;
                try {
                  e = b(new o(f));
                } catch (t) {
                  e = n.parse(f);
                }
              } else
                o && e instanceof o
                  ? (e = b(e))
                  : ((u = i), (i = e), (e = { protocol: s }));
              return (
                "function" == typeof i && ((u = i), (i = null)),
                ((i = Object.assign(
                  {
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength,
                  },
                  e,
                  i
                )).nativeProtocols = r),
                a.equal(i.protocol, s, "protocol mismatch"),
                c("options", i),
                new p(i, u)
              );
            }),
              (f.get = function (e, t, r) {
                var n = f.request(e, t, r);
                return n.end(), n;
              });
          }),
          t
        );
      }
      function h() {}
      function b(e) {
        var t = {
          protocol: e.protocol,
          hostname: e.hostname.startsWith("[")
            ? e.hostname.slice(1, -1)
            : e.hostname,
          hash: e.hash,
          search: e.search,
          pathname: e.pathname,
          path: e.pathname + e.search,
          href: e.href,
        };
        return "" !== e.port && (t.port = Number(e.port)), t;
      }
      ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        l[e] = function (t) {
          this._redirectable.emit(e, t);
        };
      }),
        (p.prototype = Object.create(u.prototype)),
        (p.prototype.write = function (e, t, r) {
          if (this._ending) throw new Error("write after end");
          if (
            !("string" == typeof e || ("object" == typeof e && "length" in e))
          )
            throw new Error("data should be a string, Buffer or Uint8Array");
          "function" == typeof t && ((r = t), (t = null)),
            0 !== e.length
              ? this._requestBodyLength + e.length <=
                this._options.maxBodyLength
                ? ((this._requestBodyLength += e.length),
                  this._requestBodyBuffers.push({ data: e, encoding: t }),
                  this._currentRequest.write(e, t, r))
                : (this.emit(
                    "error",
                    new Error("Request body larger than maxBodyLength limit")
                  ),
                  this.abort())
              : r && r();
        }),
        (p.prototype.end = function (e, t, r) {
          if (
            ("function" == typeof e
              ? ((r = e), (e = t = null))
              : "function" == typeof t && ((r = t), (t = null)),
            e)
          ) {
            var n = this,
              o = this._currentRequest;
            this.write(e, t, function () {
              (n._ended = !0), o.end(null, null, r);
            }),
              (this._ending = !0);
          } else
            (this._ended = this._ending = !0),
              this._currentRequest.end(null, null, r);
        }),
        (p.prototype.setHeader = function (e, t) {
          (this._options.headers[e] = t), this._currentRequest.setHeader(e, t);
        }),
        (p.prototype.removeHeader = function (e) {
          delete this._options.headers[e], this._currentRequest.removeHeader(e);
        }),
        [
          "abort",
          "flushHeaders",
          "getHeader",
          "setNoDelay",
          "setSocketKeepAlive",
          "setTimeout",
        ].forEach(function (e) {
          p.prototype[e] = function (t, r) {
            return this._currentRequest[e](t, r);
          };
        }),
        ["aborted", "connection", "socket"].forEach(function (e) {
          Object.defineProperty(p.prototype, e, {
            get: function () {
              return this._currentRequest[e];
            },
          });
        }),
        (p.prototype._performRequest = function () {
          var e = this._options.protocol,
            t = this._options.nativeProtocols[e];
          if (t) {
            if (this._options.agents) {
              var r = e.substr(0, e.length - 1);
              this._options.agent = this._options.agents[r];
            }
            var o = (this._currentRequest = t.request(
              this._options,
              this._onNativeResponse
            ));
            for (var i in ((this._currentUrl = n.format(this._options)),
            (o._redirectable = this),
            l))
              i && o.on(i, l[i]);
            if (this._isRedirect) {
              var s = 0,
                a = this,
                u = this._requestBodyBuffers;
              !(function e(t) {
                if (o === a._currentRequest)
                  if (t) a.emit("error", t);
                  else if (s < u.length) {
                    var r = u[s++];
                    o.finished || o.write(r.data, r.encoding, e);
                  } else a._ended && o.end();
              })();
            }
          } else this.emit("error", new Error("Unsupported protocol " + e));
        }),
        (p.prototype._processResponse = function (e) {
          this._options.trackRedirects &&
            this._redirects.push({
              url: this._currentUrl,
              headers: e.headers,
              statusCode: e.statusCode,
            });
          var t = e.headers.location;
          if (
            t &&
            !1 !== this._options.followRedirects &&
            e.statusCode >= 300 &&
            e.statusCode < 400
          ) {
            if (
              (this._currentRequest.removeAllListeners(),
              this._currentRequest.on("error", h),
              this._currentRequest.abort(),
              ++this._redirectCount > this._options.maxRedirects)
            )
              return void this.emit(
                "error",
                new Error("Max redirects exceeded.")
              );
            var r,
              o = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in f))
              for (r in ((this._options.method = "GET"),
              (this._requestBodyBuffers = []),
              o))
                /^content-/i.test(r) && delete o[r];
            if (!this._isRedirect)
              for (r in o) /^host$/i.test(r) && delete o[r];
            var i = n.resolve(this._currentUrl, t);
            c("redirecting to", i),
              Object.assign(this._options, n.parse(i)),
              (this._isRedirect = !0),
              this._performRequest(),
              e.destroy();
          } else
            (e.responseUrl = this._currentUrl),
              (e.redirects = this._redirects),
              this.emit("response", e),
              (this._requestBodyBuffers = []);
        }),
        (e.exports = d({ http: i, https: s })),
        (e.exports.wrap = d);
    },
    function (e, t) {
      e.exports = require("assert");
    },
    function (e, t, r) {
      "undefined" == typeof process || "renderer" === process.type
        ? (e.exports = r(95))
        : (e.exports = r(96));
    },
    function (e, t, r) {
      function n() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return (
          !e &&
            "undefined" != typeof process &&
            "env" in process &&
            (e = process.env.DEBUG),
          e
        );
      }
      ((t = e.exports = r(32)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var r = this.useColors;
          if (
            ((e[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              e[0] +
              (r ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !r)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var o = 0,
            i = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (o++, "%c" === e && (i = o));
          }),
            e.splice(i, 0, n);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (e) {}
        }),
        (t.load = n),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          if (
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }),
        t.enable(n());
    },
    function (e, t, r) {
      var n = r(34),
        o = r(1);
      ((t = e.exports = r(32)).init = function (e) {
        e.inspectOpts = {};
        for (var r = Object.keys(t.inspectOpts), n = 0; n < r.length; n++)
          e.inspectOpts[r[n]] = t.inspectOpts[r[n]];
      }),
        (t.log = function () {
          return process.stderr.write(o.format.apply(o, arguments) + "\n");
        }),
        (t.formatArgs = function (e) {
          var r = this.namespace;
          if (this.useColors) {
            var n = this.color,
              o = "[3" + (n < 8 ? n : "8;5;" + n),
              i = "  " + o + ";1m" + r + " [0m";
            (e[0] = i + e[0].split("\n").join("\n" + i)),
              e.push(o + "m+" + t.humanize(this.diff) + "[0m");
          } else
            e[0] =
              (t.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") +
              r +
              " " +
              e[0];
        }),
        (t.save = function (e) {
          null == e ? delete process.env.DEBUG : (process.env.DEBUG = e);
        }),
        (t.load = s),
        (t.useColors = function () {
          return "colors" in t.inspectOpts
            ? Boolean(t.inspectOpts.colors)
            : n.isatty(process.stderr.fd);
        }),
        (t.colors = [6, 2, 3, 4, 5, 1]);
      try {
        var i = r(97);
        i &&
          i.level >= 2 &&
          (t.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
            63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
            113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
            197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
            214, 215, 220, 221,
          ]);
      } catch (e) {}
      function s() {
        return process.env.DEBUG;
      }
      (t.inspectOpts = Object.keys(process.env)
        .filter(function (e) {
          return /^debug_/i.test(e);
        })
        .reduce(function (e, t) {
          var r = t
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, function (e, t) {
                return t.toUpperCase();
              }),
            n = process.env[t];
          return (
            (n =
              !!/^(yes|on|true|enabled)$/i.test(n) ||
              (!/^(no|off|false|disabled)$/i.test(n) &&
                ("null" === n ? null : Number(n)))),
            (e[r] = n),
            e
          );
        }, {})),
        (t.formatters.o = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            o
              .inspect(e, this.inspectOpts)
              .split("\n")
              .map(function (e) {
                return e.trim();
              })
              .join(" ")
          );
        }),
        (t.formatters.O = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            o.inspect(e, this.inspectOpts)
          );
        }),
        t.enable(s());
    },
    function (e, t, r) {
      "use strict";
      const n = r(98),
        o = r(99),
        i = process.env;
      let s;
      function a(e) {
        return (function (e) {
          return (
            0 !== e && {
              level: e,
              hasBasic: !0,
              has256: e >= 2,
              has16m: e >= 3,
            }
          );
        })(
          (function (e) {
            if (!1 === s) return 0;
            if (o("color=16m") || o("color=full") || o("color=truecolor"))
              return 3;
            if (o("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return 0;
            const t = s ? 1 : 0;
            if ("win32" === process.platform) {
              const e = n.release().split(".");
              return Number(process.versions.node.split(".")[0]) >= 8 &&
                Number(e[0]) >= 10 &&
                Number(e[2]) >= 10586
                ? Number(e[2]) >= 14931
                  ? 3
                  : 2
                : 1;
            }
            if ("CI" in i)
              return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(
                (e) => e in i
              ) || "codeship" === i.CI_NAME
                ? 1
                : t;
            if ("TEAMCITY_VERSION" in i)
              return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION)
                ? 1
                : 0;
            if ("truecolor" === i.COLORTERM) return 3;
            if ("TERM_PROGRAM" in i) {
              const e = parseInt(
                (i.TERM_PROGRAM_VERSION || "").split(".")[0],
                10
              );
              switch (i.TERM_PROGRAM) {
                case "iTerm.app":
                  return e >= 3 ? 3 : 2;
                case "Apple_Terminal":
                  return 2;
              }
            }
            return /-256(color)?$/i.test(i.TERM)
              ? 2
              : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                  i.TERM
                )
              ? 1
              : "COLORTERM" in i
              ? 1
              : (i.TERM, t);
          })(e)
        );
      }
      o("no-color") || o("no-colors") || o("color=false")
        ? (s = !1)
        : (o("color") || o("colors") || o("color=true") || o("color=always")) &&
          (s = !0),
        "FORCE_COLOR" in i &&
          (s = 0 === i.FORCE_COLOR.length || 0 !== parseInt(i.FORCE_COLOR, 10)),
        (e.exports = {
          supportsColor: a,
          stdout: a(process.stdout),
          stderr: a(process.stderr),
        });
    },
    function (e, t) {
      e.exports = require("os");
    },
    function (e, t, r) {
      "use strict";
      e.exports = (e, t) => {
        t = t || process.argv;
        const r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
          n = t.indexOf(r + e),
          o = t.indexOf("--");
        return -1 !== n && (-1 === o || n < o);
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        if (e.timeoutTimer) return e;
        var r = isNaN(t) ? t : { socket: t, connect: t },
          n = e._headers ? " to " + e._headers.host : "";
        function o() {
          e.timeoutTimer &&
            (clearTimeout(e.timeoutTimer), (e.timeoutTimer = null));
        }
        function i() {
          o(),
            void 0 !== r.socket &&
              e.setTimeout(r.socket, function () {
                e.abort();
                var t = new Error("Socket timed out on request" + n);
                (t.code = "ESOCKETTIMEDOUT"), e.emit("error", t);
              });
        }
        return (
          void 0 !== r.connect &&
            (e.timeoutTimer = setTimeout(function () {
              e.abort();
              var t = new Error("Connection timed out on request" + n);
              (t.code = "ETIMEDOUT"), e.emit("error", t);
            }, r.connect)),
          e.on("socket", function (e) {
            e.connecting || e._connecting ? e.once("connect", i) : i();
          }),
          e.on("error", o)
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = (e.exports = function (e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.pipe
        );
      });
      (n.writable = function (e) {
        return (
          n(e) &&
          !1 !== e.writable &&
          "function" == typeof e._write &&
          "object" == typeof e._writableState
        );
      }),
        (n.readable = function (e) {
          return (
            n(e) &&
            !1 !== e.readable &&
            "function" == typeof e._read &&
            "object" == typeof e._readableState
          );
        }),
        (n.duplex = function (e) {
          return n.writable(e) && n.readable(e);
        }),
        (n.transform = function (e) {
          return (
            n.duplex(e) &&
            "function" == typeof e._transform &&
            "object" == typeof e._transformState
          );
        });
    },
    function (e, t, r) {
      "use strict";
      const n = r(103),
        o = r(110);
      (e.exports = (e) => {
        let t, r;
        function i(n) {
          const i =
            !(t = o((e = n)) ? e : null) &&
            e[Symbol.iterator] &&
            "string" != typeof e &&
            !Buffer.isBuffer(e);
          r = i ? e[Symbol.iterator]() : null;
        }
        return (
          Array.isArray(e) && (e = e.slice()),
          i(e),
          n(function n(o, s) {
            if (t) return void t.then(i).then(() => n.call(this, o, s), s);
            if (r) {
              const e = r.next();
              return void setImmediate(s, null, e.done ? null : e.value);
            }
            if (0 === e.length) return void setImmediate(s, null, null);
            const a = e.slice(0, o);
            (e = e.slice(o)), setImmediate(s, null, a);
          })
        );
      }),
        (e.exports.obj = (e) => {
          let t, r;
          function i(n) {
            (t = o((e = n)) ? e : null),
              (r = !t && e[Symbol.iterator] ? e[Symbol.iterator]() : null);
          }
          return (
            Array.isArray(e) && (e = e.slice()),
            i(e),
            n.obj(function n(o, s) {
              if (t) t.then(i).then(() => n.call(this, o, s), s);
              else if (r) {
                const e = r.next();
                setImmediate(s, null, e.done ? null : e.value);
              } else this.push(e), setImmediate(s, null, null);
            })
          );
        });
    },
    function (e, t, r) {
      var n = r(35).Readable,
        o = r(4);
      (e.exports = s),
        (s.ctor = a),
        (s.obj = function (e, t) {
          ("function" == typeof e || Array.isArray(e)) && ((t = e), (e = {}));
          return ((e = c(e)).objectMode = !0), (e.highWaterMark = 16), s(e, t);
        });
      var i = a();
      function s(e, t) {
        ("object" != typeof e || Array.isArray(e)) && ((t = e), (e = {}));
        var r,
          n = new i(e);
        return (
          (n._from = Array.isArray(t)
            ? ((r = (r = t).slice()),
              function (e, t) {
                var n = null,
                  o = r.length ? r.shift() : null;
                o instanceof Error && ((n = o), (o = null)), t(n, o);
              })
            : t || u),
          n
        );
      }
      function a(e, t) {
        function r(t) {
          if (!(this instanceof r)) return new r(t);
          (this._reading = !1),
            (this._callback = function (e, t) {
              if (o.destroyed) return;
              if (e) return o.destroy(e);
              if (null === t) return o.push(null);
              (o._reading = !1), o.push(t) && o._read(i);
            }),
            (this.destroyed = !1),
            n.call(this, t || e);
          var o = this,
            i = this._readableState.highWaterMark;
        }
        return (
          "function" == typeof e && ((t = e), (e = {})),
          (e = c(e)),
          o(r, n),
          (r.prototype._from = t || u),
          (r.prototype._read = function (e) {
            this._reading ||
              this.destroyed ||
              ((this._reading = !0), this._from(e, this._callback));
          }),
          (r.prototype.destroy = function (e) {
            if (!this.destroyed) {
              this.destroyed = !0;
              var t = this;
              process.nextTick(function () {
                e && t.emit("error", e), t.emit("close");
              });
            }
          }),
          r
        );
      }
      function u() {}
      function c(e) {
        return (e = e || {});
      }
    },
    function (e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == r.call(e);
        };
    },
    function (e, t) {
      e.exports = require("buffer");
    },
    function (e, t) {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (e.exports = function (e, t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          });
    },
    function (e, t, r) {
      "use strict";
      var n = r(11).Buffer,
        o = r(1);
      (e.exports = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (e.prototype.push = function (e) {
            var t = { data: e, next: null };
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (e.prototype.unshift = function (e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t),
              (this.head = t),
              ++this.length;
          }),
          (e.prototype.shift = function () {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (e.prototype.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (e.prototype.join = function (e) {
            if (0 === this.length) return "";
            for (var t = this.head, r = "" + t.data; (t = t.next); )
              r += e + t.data;
            return r;
          }),
          (e.prototype.concat = function (e) {
            if (0 === this.length) return n.alloc(0);
            if (1 === this.length) return this.head.data;
            for (
              var t, r, o, i = n.allocUnsafe(e >>> 0), s = this.head, a = 0;
              s;

            )
              (t = s.data),
                (r = i),
                (o = a),
                t.copy(r, o),
                (a += s.data.length),
                (s = s.next);
            return i;
          }),
          e
        );
      })()),
        o &&
          o.inspect &&
          o.inspect.custom &&
          (e.exports.prototype[o.inspect.custom] = function () {
            var e = o.inspect({ length: this.length });
            return this.constructor.name + " " + e;
          });
    },
    function (e, t, r) {
      e.exports = r(1).deprecate;
    },
    function (e, t, r) {
      "use strict";
      e.exports = i;
      var n = r(41),
        o = r(6);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e);
      }
      (o.inherits = r(4)),
        o.inherits(i, n),
        (i.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    function (e, t, r) {
      "use strict";
      e.exports = (e) =>
        e instanceof Promise ||
        (null !== e &&
          "object" == typeof e &&
          "function" == typeof e.then &&
          "function" == typeof e.catch);
    },
    function (e, t, r) {
      var n = r(35).Transform,
        o = r(1).inherits,
        i = r(112);
      function s(e) {
        n.call(this, e), (this._destroyed = !1);
      }
      function a(e, t, r) {
        r(null, e);
      }
      function u(e) {
        return function (t, r, n) {
          return (
            "function" == typeof t && ((n = r), (r = t), (t = {})),
            "function" != typeof r && (r = a),
            "function" != typeof n && (n = null),
            e(t, r, n)
          );
        };
      }
      o(s, n),
        (s.prototype.destroy = function (e) {
          if (!this._destroyed) {
            this._destroyed = !0;
            var t = this;
            process.nextTick(function () {
              e && t.emit("error", e), t.emit("close");
            });
          }
        }),
        (e.exports = u(function (e, t, r) {
          var n = new s(e);
          return (n._transform = t), r && (n._flush = r), n;
        })),
        (e.exports.ctor = u(function (e, t, r) {
          function n(t) {
            if (!(this instanceof n)) return new n(t);
            (this.options = i(e, t)), s.call(this, this.options);
          }
          return (
            o(n, s),
            (n.prototype._transform = t),
            r && (n.prototype._flush = r),
            n
          );
        })),
        (e.exports.obj = u(function (e, t, r) {
          var n = new s(i({ objectMode: !0, highWaterMark: 16 }, e));
          return (n._transform = t), r && (n._flush = r), n;
        }));
    },
    function (e, t) {
      e.exports = function () {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) r.call(n, o) && (e[o] = n[o]);
        }
        return e;
      };
      var r = Object.prototype.hasOwnProperty;
    },
    function (e, t) {
      var r = 1,
        n = setInterval(function () {
          r = (r + 1) & 65535;
        }, 250);
      n.unref && n.unref(),
        (e.exports = function (e) {
          var t = 4 * (e || 5),
            n = [0],
            o = 1,
            i = (r - 1) & 65535;
          return function (e) {
            var s = (r - i) & 65535;
            for (s > t && (s = t), i = r; s--; )
              o === t && (o = 0), (n[o] = n[0 === o ? t - 1 : o - 1]), o++;
            e && (n[o - 1] += e);
            var a = n[o - 1],
              u = n.length < t ? 0 : n[o === t ? 0 : o];
            return n.length < 4 ? a : (4 * (a - u)) / n.length;
          };
        });
    },
    function (e, t, r) {
      "use strict";
      const n = r(9).PassThrough,
        o = r(115),
        i = r(116);
      e.exports = (e) => {
        if (-1 === ["gzip", "deflate"].indexOf(e.headers["content-encoding"]))
          return e;
        const t = o.createUnzip(),
          r = new n();
        return (
          i(e, r),
          t.on("error", (e) => {
            "Z_BUF_ERROR" !== e.code ? r.emit("error", e) : r.end();
          }),
          e.pipe(t).pipe(r),
          r
        );
      };
    },
    function (e, t) {
      e.exports = require("zlib");
    },
    function (e, t, r) {
      "use strict";
      const n = [
        "destroy",
        "setTimeout",
        "socket",
        "headers",
        "trailers",
        "rawHeaders",
        "statusCode",
        "httpVersion",
        "httpVersionMinor",
        "httpVersionMajor",
        "rawTrailers",
        "statusMessage",
      ];
      e.exports = (e, t) => {
        const r = new Set(Object.keys(e).concat(n));
        for (const n of r)
          n in t || (t[n] = "function" == typeof e[n] ? e[n].bind(e) : e[n]);
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(118),
        o = r(0);
      e.exports = function () {
        var e =
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
            .implementation || n.Observable;
        if (!e)
          throw new Error(
            "`Observable` is not available in global scope, and no implementation was passed"
          );
        return {
          onReturn: function (t, r) {
            return new e(function (e) {
              return (
                t.error.subscribe(function (t) {
                  return e.error(t);
                }),
                t.progress.subscribe(function (t) {
                  return e.next(o({ type: "progress" }, t));
                }),
                t.response.subscribe(function (t) {
                  e.next(o({ type: "response" }, t)), e.complete();
                }),
                t.request.publish(r),
                function () {
                  return t.abort.publish();
                }
              );
            });
          },
        };
      };
    },
    function (e, t, r) {
      "use strict";
      "undefined" != typeof window
        ? (e.exports = window)
        : "undefined" != typeof global
        ? (e.exports = global)
        : "undefined" != typeof self
        ? (e.exports = self)
        : (e.exports = {});
    },
    function (e, t, r) {
      "use strict";
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = r(0),
        i = r(120),
        s = ["boolean", "string", "number"];
      e.exports = function () {
        return {
          processOptions: function (e) {
            var t,
              r = e.body;
            return r &&
              !("function" == typeof r.pipe) &&
              !(
                (t = r).constructor &&
                "function" == typeof t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              ) &&
              (-1 !== s.indexOf(void 0 === r ? "undefined" : n(r)) ||
                Array.isArray(r) ||
                i(r))
              ? o({}, e, {
                  body: JSON.stringify(e.body),
                  headers: o({}, e.headers, {
                    "Content-Type": "application/json",
                  }),
                })
              : e;
          },
        };
      };
    },
    function (e, t, r) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var n = r(121);
      function o(e) {
        return (
          !0 === n(e) && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      e.exports = function (e) {
        var t, r;
        return (
          !1 !== o(e) &&
          "function" == typeof (t = e.constructor) &&
          !1 !== o((r = t.prototype)) &&
          !1 !== r.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    function (e, t, r) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ e.exports = function (e) {
        return null != e && "object" == typeof e && !1 === Array.isArray(e);
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(0);
      function o(e) {
        try {
          return JSON.parse(e);
        } catch (e) {
          throw (
            ((e.message =
              "Failed to parsed response body as JSON: " + e.message),
            e)
          );
        }
      }
      e.exports = function (e) {
        return {
          onResponse: function (t) {
            var r = t.headers["content-type"] || "",
              i = (e && e.force) || -1 !== r.indexOf("application/json");
            return t.body && r && i ? n({}, t, { body: o(t.body) }) : t;
          },
          processOptions: function (e) {
            return n({}, e, {
              headers: n({ Accept: "application/json" }, e.headers),
            });
          },
        };
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = r(124);
    },
    function (e, t, r) {
      "use strict";
      var n = r(42);
      function o(e) {
        return function (t) {
          return {
            stage: e,
            percent: t.percentage,
            total: t.length,
            loaded: t.transferred,
            lengthComputable: !(0 === t.length && 0 === t.percentage),
          };
        };
      }
      e.exports = function () {
        return {
          onHeaders: function (e, t) {
            var r = n({ time: 16 }),
              i = o("download"),
              s = e.headers["content-length"],
              a = s && Number(s);
            return (
              !isNaN(a) && a > 0 && r.setLength(a),
              r.on("progress", function (e) {
                return t.context.channels.progress.publish(i(e));
              }),
              e.pipe(r)
            );
          },
          onRequest: function (e) {
            if (e.progress) {
              var t = o("upload");
              e.progress.on("progress", function (r) {
                return e.context.channels.progress.publish(t(r));
              });
            }
          },
        };
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(126),
        o = r(0);
      function i(e) {
        var t = a(e);
        i.super.call(this, t.message), o(this, t);
      }
      function s(e) {
        var t = a(e);
        s.super.call(this, t.message), o(this, t);
      }
      function a(e) {
        var t = e.body,
          r = { response: e, statusCode: e.statusCode, responseBody: u(t, e) };
        return t.error && t.message
          ? ((r.message = "".concat(t.error, " - ").concat(t.message)), r)
          : t.error && t.error.description
          ? ((r.message = t.error.description), (r.details = t.error), r)
          : ((r.message =
              t.error ||
              t.message ||
              (function (e) {
                var t = e.statusMessage ? " ".concat(e.statusMessage) : "";
                return ""
                  .concat(e.method, "-request to ")
                  .concat(e.url, " resulted in HTTP ")
                  .concat(e.statusCode)
                  .concat(t);
              })(e)),
            r);
      }
      function u(e, t) {
        return -1 !==
          (t.headers["content-type"] || "")
            .toLowerCase()
            .indexOf("application/json")
          ? JSON.stringify(e, null, 2)
          : e;
      }
      n(i), n(s), (t.ClientError = i), (t.ServerError = s);
    },
    function (e, t, r) {
      "use strict";
      var n = "undefined" != typeof Reflect ? Reflect.construct : void 0,
        o = Object.defineProperty,
        i = Error.captureStackTrace;
      function s(e) {
        void 0 !== e &&
          o(this, "message", { configurable: !0, value: e, writable: !0 });
        var t = this.constructor.name;
        void 0 !== t &&
          t !== this.name &&
          o(this, "name", { configurable: !0, value: t, writable: !0 }),
          i(this, this.constructor);
      }
      void 0 === i &&
        (i = function (e) {
          var t = new Error();
          o(e, "stack", {
            configurable: !0,
            get: function () {
              var e = t.stack;
              return (
                o(this, "stack", { configurable: !0, value: e, writable: !0 }),
                e
              );
            },
            set: function (t) {
              o(e, "stack", { configurable: !0, value: t, writable: !0 });
            },
          });
        }),
        (s.prototype = Object.create(Error.prototype, {
          constructor: { configurable: !0, value: s, writable: !0 },
        }));
      var a = (function () {
        function e(e, t) {
          return o(e, "name", { configurable: !0, value: t });
        }
        try {
          var t = function () {};
          if ((e(t, "foo"), "foo" === t.name)) return e;
        } catch (e) {}
      })();
      (e.exports = function (e, t) {
        if (null == t || t === Error) t = s;
        else if ("function" != typeof t)
          throw new TypeError("super_ should be a function");
        var r;
        if ("string" == typeof e)
          (r = e),
            (e =
              void 0 !== n
                ? function () {
                    return n(t, arguments, this.constructor);
                  }
                : function () {
                    t.apply(this, arguments);
                  }),
            void 0 !== a && (a(e, r), (r = void 0));
        else if ("function" != typeof e)
          throw new TypeError(
            "constructor should be either a string or a function"
          );
        e.super_ = e.super = t;
        var o = { constructor: { configurable: !0, value: e, writable: !0 } };
        return (
          void 0 !== r &&
            (o.name = { configurable: !0, value: r, writable: !0 }),
          (e.prototype = Object.create(t.prototype, o)),
          e
        );
      }).BaseError = s;
    },
    function (e, t, r) {
      "use strict";
      var n = r(128),
        o = r(131),
        i = r(137),
        s = r(138),
        a = [
          o({ verbose: !0, namespace: "sanity:client" }),
          i({ "User-Agent": "".concat(s.name, " ").concat(s.version) }),
          n({ maxRetries: 3 }),
        ];
      e.exports = a;
    },
    function (e, t, r) {
      "use strict";
      const n = r(0),
        o = r(129),
        i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.maxRetries || 5,
            r = e.retryDelay || s,
            i = e.shouldRetry || o;
          return {
            onError: (e, o) => {
              const s = o.options,
                a = s.maxRetries || t,
                u = s.shouldRetry || i,
                c = s.attemptNumber || 0;
              if (
                ((e) =>
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.pipe)(s.body)
              )
                return e;
              if (!u(e, c, s) || c >= a) return e;
              const f = n({}, o, {
                options: n({}, s, { attemptNumber: c + 1 }),
              });
              return (
                setTimeout(() => o.channels.request.publish(f), r(c)), null
              );
            },
          };
        };
      function s(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random();
      }
      (i.shouldRetry = o), (e.exports = i);
    },
    function (e, t, r) {
      "use strict";
      const n = r(130);
      e.exports = (e, t, r) =>
        ("GET" === r.method || "HEAD" === r.method) &&
        (!e.response || !e.response.statusCode) &&
        n(e);
    },
    function (e, t, r) {
      "use strict";
      var n = [
          "ETIMEDOUT",
          "ECONNRESET",
          "EADDRINUSE",
          "ESOCKETTIMEDOUT",
          "ECONNREFUSED",
          "EPIPE",
        ],
        o = [
          "ENOTFOUND",
          "ENETUNREACH",
          "UNABLE_TO_GET_ISSUER_CERT",
          "UNABLE_TO_GET_CRL",
          "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
          "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
          "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
          "CERT_SIGNATURE_FAILURE",
          "CRL_SIGNATURE_FAILURE",
          "CERT_NOT_YET_VALID",
          "CERT_HAS_EXPIRED",
          "CRL_NOT_YET_VALID",
          "CRL_HAS_EXPIRED",
          "ERROR_IN_CERT_NOT_BEFORE_FIELD",
          "ERROR_IN_CERT_NOT_AFTER_FIELD",
          "ERROR_IN_CRL_LAST_UPDATE_FIELD",
          "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
          "OUT_OF_MEM",
          "DEPTH_ZERO_SELF_SIGNED_CERT",
          "SELF_SIGNED_CERT_IN_CHAIN",
          "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
          "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
          "CERT_CHAIN_TOO_LONG",
          "CERT_REVOKED",
          "INVALID_CA",
          "PATH_LENGTH_EXCEEDED",
          "INVALID_PURPOSE",
          "CERT_UNTRUSTED",
          "CERT_REJECTED",
        ];
      e.exports = function (e) {
        return (
          !e || !e.code || -1 !== n.indexOf(e.code) || -1 === o.indexOf(e.code)
        );
      };
    },
    function (e, t, r) {
      "use strict";
      const n = r(132),
        o = ["Cookie", "Authorization"],
        i = Object.prototype.hasOwnProperty;
      e.exports = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.verbose,
          r = e.namespace || "get-it",
          s = n(r),
          a = e.log || s,
          u = a === s && !n.enabled(r);
        let c = 0;
        return {
          processOptions: (e) => ((e.requestId = e.requestId || ++c), e),
          onRequest: (r) => {
            if (u || !r) return r;
            const n = r.options;
            if (
              (a("[%s] HTTP %s %s", n.requestId, n.method, n.url),
              t &&
                n.body &&
                "string" == typeof n.body &&
                a("[%s] Request body: %s", n.requestId, n.body),
              t && n.headers)
            ) {
              const t =
                !1 === e.redactSensitiveHeaders
                  ? n.headers
                  : ((e, t) => {
                      const r = {};
                      for (const n in e)
                        i.call(e, n) &&
                          (r[n] = t.indexOf(n) > -1 ? "<redacted>" : e[n]);
                      return r;
                    })(n.headers, o);
              a(
                "[%s] Request headers: %s",
                n.requestId,
                JSON.stringify(t, null, 2)
              );
            }
            return r;
          },
          onResponse: (e, r) => {
            if (u || !e) return e;
            const n = r.options.requestId;
            return (
              a("[%s] Response code: %s %s", n, e.statusCode, e.statusMessage),
              t &&
                e.body &&
                a(
                  "[%s] Response body: %s",
                  n,
                  (function (e) {
                    return -1 !==
                      (e.headers["content-type"] || "")
                        .toLowerCase()
                        .indexOf("application/json")
                      ? (function (e) {
                          try {
                            const t = "string" == typeof e ? JSON.parse(e) : e;
                            return JSON.stringify(t, null, 2);
                          } catch (t) {
                            return e;
                          }
                        })(e.body)
                      : e.body;
                  })(e)
                ),
              e
            );
          },
          onError: (e, t) => {
            const r = t.options.requestId;
            return e
              ? (a("[%s] ERROR: %s", r, e.message), e)
              : (a(
                  "[%s] Error encountered, but handled by an earlier middleware",
                  r
                ),
                e);
          },
        };
      };
    },
    function (e, t, r) {
      "undefined" != typeof process && "renderer" === process.type
        ? (e.exports = r(133))
        : (e.exports = r(134));
    },
    function (e, t, r) {
      function n() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return (
          !e &&
            "undefined" != typeof process &&
            "env" in process &&
            (e = process.env.DEBUG),
          e
        );
      }
      ((t = e.exports = r(43)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var r = this.useColors;
          if (
            ((e[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              e[0] +
              (r ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !r)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var o = 0,
            i = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (o++, "%c" === e && (i = o));
          }),
            e.splice(i, 0, n);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (e) {}
        }),
        (t.load = n),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }),
        t.enable(n());
    },
    function (e, t, r) {
      var n = r(34),
        o = r(1);
      ((t = e.exports = r(43)).init = function (e) {
        e.inspectOpts = {};
        for (var r = Object.keys(t.inspectOpts), n = 0; n < r.length; n++)
          e.inspectOpts[r[n]] = t.inspectOpts[r[n]];
      }),
        (t.log = function () {
          return s.write(o.format.apply(o, arguments) + "\n");
        }),
        (t.formatArgs = function (e) {
          var r = this.namespace;
          if (this.useColors) {
            var n = this.color,
              o = "  [3" + n + ";1m" + r + " [0m";
            (e[0] = o + e[0].split("\n").join("\n" + o)),
              e.push("[3" + n + "m+" + t.humanize(this.diff) + "[0m");
          } else e[0] = new Date().toUTCString() + " " + r + " " + e[0];
        }),
        (t.save = function (e) {
          null == e ? delete process.env.DEBUG : (process.env.DEBUG = e);
        }),
        (t.load = a),
        (t.useColors = function () {
          return "colors" in t.inspectOpts
            ? Boolean(t.inspectOpts.colors)
            : n.isatty(i);
        }),
        (t.colors = [6, 2, 3, 4, 5, 1]),
        (t.inspectOpts = Object.keys(process.env)
          .filter(function (e) {
            return /^debug_/i.test(e);
          })
          .reduce(function (e, t) {
            var r = t
                .substring(6)
                .toLowerCase()
                .replace(/_([a-z])/g, function (e, t) {
                  return t.toUpperCase();
                }),
              n = process.env[t];
            return (
              (n =
                !!/^(yes|on|true|enabled)$/i.test(n) ||
                (!/^(no|off|false|disabled)$/i.test(n) &&
                  ("null" === n ? null : Number(n)))),
              (e[r] = n),
              e
            );
          }, {}));
      var i = parseInt(process.env.DEBUG_FD, 10) || 2;
      1 !== i &&
        2 !== i &&
        o.deprecate(function () {},
        "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
      var s =
        1 === i
          ? process.stdout
          : 2 === i
          ? process.stderr
          : (function (e) {
              var t;
              switch (process.binding("tty_wrap").guessHandleType(e)) {
                case "TTY":
                  ((t = new n.WriteStream(e))._type = "tty"),
                    t._handle && t._handle.unref && t._handle.unref();
                  break;
                case "FILE":
                  var o = r(135);
                  (t = new o.SyncWriteStream(e, { autoClose: !1 }))._type =
                    "fs";
                  break;
                case "PIPE":
                case "TCP":
                  var i = r(136);
                  ((t = new i.Socket({
                    fd: e,
                    readable: !1,
                    writable: !0,
                  })).readable = !1),
                    (t.read = null),
                    (t._type = "pipe"),
                    t._handle && t._handle.unref && t._handle.unref();
                  break;
                default:
                  throw new Error("Implement me. Unknown stream file type!");
              }
              return (t.fd = e), (t._isStdio = !0), t;
            })(i);
      function a() {
        return process.env.DEBUG;
      }
      (t.formatters.o = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o
            .inspect(e, this.inspectOpts)
            .split("\n")
            .map(function (e) {
              return e.trim();
            })
            .join(" ")
        );
      }),
        (t.formatters.O = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            o.inspect(e, this.inspectOpts)
          );
        }),
        t.enable(a());
    },
    function (e, t) {
      e.exports = require("fs");
    },
    function (e, t) {
      e.exports = require("net");
    },
    function (e, t, r) {
      "use strict";
      const n = r(0);
      e.exports = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
          processOptions: (r) => {
            const o = r.headers || {};
            return (r.headers = t.override ? n({}, o, e) : n({}, e, o)), r;
          },
        };
      };
    },
    function (e) {
      e.exports = {
        name: "@sanity/client",
        version: "0.140.0",
        description: "Client for retrieving data from Sanity",
        main: "lib/sanityClient.js",
        umd: "umd/sanityClient.min.js",
        unpkg: "umd/sanityClient.min.js",
        scripts: {
          analyze:
            "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify --full-paths -t envify -g uglifyify lib/sanityClient.js --standalone=SanityClient | discify --open",
          browserify:
            "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify -t envify -g uglifyify lib/sanityClient.js -o umd/sanityClient.js --standalone=SanityClient",
          build: "npm run browserify && npm run minify && npm run size",
          size: "node -r @babel/register src/scripts/print-bundle-size",
          clean: "rimraf lib coverage .nyc_output umd/*.js",
          coverage:
            "DEBUG=sanity NODE_ENV=test nyc --reporter=html --reporter=lcov --reporter=text npm test",
          minify:
            "terser -c -m -- umd/sanityClient.js > umd/sanityClient.min.js",
          prepublishOnly: "npm run build",
          test: "NODE_ENV=test tape -r @babel/register test/*.test.js",
        },
        browser: {
          "./src/http/nodeMiddleware.js": "./src/http/browserMiddleware.js",
          "./lib/http/nodeMiddleware.js": "./lib/http/browserMiddleware.js",
        },
        dependencies: {
          "@sanity/eventsource": "0.140.0",
          "@sanity/generate-help-url": "0.140.0",
          "@sanity/observable": "0.140.0",
          "deep-assign": "^2.0.0",
          "get-it": "^4.0.1",
          "make-error": "^1.3.0",
          "object-assign": "^4.1.1",
        },
        devDependencies: {
          boxen: "^1.3.0",
          browserify: "^14.3.0",
          chalk: "^2.3.0",
          disc: "^1.3.2",
          envify: "^4.0.0",
          "gzip-size": "^3.0.0",
          "hard-rejection": "^1.0.0",
          nock: "^9.0.5",
          nyc: "^11.0.3",
          "pretty-bytes": "^4.0.2",
          rimraf: "^2.6.2",
          "sse-channel": "^2.0.6",
          tape: "^4.8.0",
          terser: "^3.10.11",
          uglifyify: "^5.0.1",
        },
        repository: {
          type: "git",
          url: "git+https://github.com/sanity-io/sanity.git",
        },
        keywords: [
          "sanity",
          "cms",
          "headless",
          "realtime",
          "content",
          "client",
          "fetch",
          "api",
          "gradient",
        ],
        author: "Sanity.io <hello@sanity.io>",
        license: "MIT",
        bugs: { url: "https://github.com/sanity-io/sanity/issues" },
        homepage: "https://www.sanity.io/",
        nyc: {
          include: ["src/**/*.js"],
          require: ["@babel/register"],
          sourceMap: !1,
          instrument: !1,
        },
        gitHead: "230394c89b3d2adf36a922fe9dc189bb955122ce",
      };
    },
    function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t = {};
        return (
          e.token && (t.Authorization = "Bearer ".concat(e.token)),
          !e.useProjectHostname &&
            e.projectId &&
            (t["X-Sanity-Project-ID"] = e.projectId),
          {
            headers: t,
            timeout: "timeout" in e ? e.timeout : 3e4,
            json: !0,
            withCredentials: Boolean(e.token || e.withCredentials),
          }
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(30),
        o = r(0),
        i = r(3),
        s = r(31),
        a = {
          apiHost: "https://api.sanity.io",
          useProjectHostname: !0,
          gradientMode: !1,
          isPromiseAPI: !0,
        },
        u = ["localhost", "127.0.0.1", "0.0.0.0"],
        c = function (e) {
          return s(function () {
            return console.warn(e.join(" "));
          });
        },
        f = c([
          "You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and",
          "cheaper. Think about it! For more info, see ".concat(
            n("js-client-cdn-configuration"),
            "."
          ),
          "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating",
          "the client.",
        ]),
        l = c([
          "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
          "See ".concat(
            n("js-client-browser-token"),
            " for more information and how to hide this warning."
          ),
        ]),
        p = c([
          "You have set `useCdn` to `true` while also specifying a token. This is usually not what you",
          "want. The CDN cannot be used with an authorization token, since private data cannot be cached.",
          "See ".concat(n("js-client-usecdn-token"), " for more information."),
        ]);
      (t.defaultConfig = a),
        (t.initConfig = function (e, t) {
          var r = o({}, a, t, e),
            s = r.gradientMode,
            c = !s && r.useProjectHostname;
          if ("undefined" == typeof Promise) {
            var d = n("js-client-promise-polyfill");
            throw new Error(
              "No native Promise-implementation found, polyfill needed - see ".concat(
                d
              )
            );
          }
          if (s && !r.namespace)
            throw new Error(
              "Configuration must contain `namespace` when running in gradient mode"
            );
          if (c && !r.projectId)
            throw new Error("Configuration must contain `projectId`");
          var h =
              "undefined" != typeof window &&
              window.location &&
              window.location.hostname,
            b =
              h &&
              (function (e) {
                return -1 !== u.indexOf(e);
              })(window.location.hostname);
          if (
            (h && b && r.token && !0 !== r.ignoreBrowserTokenWarning
              ? l()
              : (!h || b) && r.useCdn && r.token
              ? p()
              : void 0 === r.useCdn && f(),
            c && i.projectId(r.projectId),
            !s && r.dataset && i.dataset(r.dataset, r.gradientMode),
            (r.isDefaultApi = r.apiHost === a.apiHost),
            (r.useCdn = Boolean(r.useCdn) && !r.token && !r.withCredentials),
            r.gradientMode)
          )
            (r.url = r.apiHost), (r.cdnUrl = r.apiHost);
          else {
            var y = r.apiHost.split("://", 2),
              g = y[0],
              m = y[1],
              v = r.isDefaultApi ? "apicdn.sanity.io" : m;
            r.useProjectHostname
              ? ((r.url = ""
                  .concat(g, "://")
                  .concat(r.projectId, ".")
                  .concat(m, "/v1")),
                (r.cdnUrl = ""
                  .concat(g, "://")
                  .concat(r.projectId, ".")
                  .concat(v, "/v1")))
              : ((r.url = "".concat(r.apiHost, "/v1")), (r.cdnUrl = r.url));
          }
          return r;
        });
    },
  ])
);
