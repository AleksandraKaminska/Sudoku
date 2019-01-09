!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  function n(e, t) {
      var n = (t = t || Z).createElement("script");
      n.text = e,
      t.head.appendChild(n).parentNode.removeChild(n)
  }
  function r(e) {
      var t = !!e && "length"in e && e.length
        , n = se.type(e);
      return "function" !== n && !se.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  function i(e, t, n) {
      if (se.isFunction(t))
          return se.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n
          });
      if (t.nodeType)
          return se.grep(e, function(e) {
              return e === t !== n
          });
      if ("string" == typeof t) {
          if (pe.test(t))
              return se.filter(t, e, n);
          t = se.filter(t, e)
      }
      return se.grep(e, function(e) {
          return K.call(t, e) > -1 !== n && 1 === e.nodeType
      })
  }
  function o(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; )
          ;
      return e
  }
  function s(e) {
      return e
  }
  function u(e) {
      throw e
  }
  function a(e, t, n) {
      var r;
      try {
          e && se.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && se.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
      } catch (e) {
          n.call(void 0, e)
      }
  }
  function c() {
      Z.removeEventListener("DOMContentLoaded", c),
      e.removeEventListener("load", c),
      se.ready()
  }
  function l() {
      this.expando = se.expando + l.uid++
  }
  function f(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(Te, "-$&").toLowerCase(),
          "string" == typeof (n = e.getAttribute(r))) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? JSON.parse(n) : n)
              } catch (e) {}
              Ae.set(e, t, n)
          } else
              n = void 0;
      return n
  }
  function d(e, t, n, r) {
      var i, o = 1, s = 20, u = r ? function() {
          return r.cur()
      }
      : function() {
          return se.css(e, t, "")
      }
      , a = u(), c = n && n[3] || (se.cssNumber[t] ? "" : "px"), l = (se.cssNumber[t] || "px" !== c && +a) && Ee.exec(se.css(e, t));
      if (l && l[3] !== c) {
          c = c || l[3],
          n = n || [],
          l = +a || 1;
          do {
              l /= o = o || ".5",
              se.style(e, t, l + c)
          } while (o !== (o = u() / a) && 1 !== o && --s)
      }
      return n && (l = +l || +a || 0,
      i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
      r && (r.unit = c,
      r.start = l,
      r.end = i)),
      i
  }
  function M(e) {
      var t, n = e.ownerDocument, r = e.nodeName, i = ke[r];
      return i || (t = n.body.appendChild(n.createElement(r)),
      i = se.css(t, "display"),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      ke[r] = i,
      i)
  }
  function L(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style && (n = r.style.display,
          t ? ("none" === n && (i[o] = me.get(r, "display") || null,
          i[o] || (r.style.display = "")),
          "" === r.style.display && Oe(r) && (i[o] = M(r))) : "none" !== n && (i[o] = "none",
          me.set(r, "display", n)));
      for (o = 0; o < s; o++)
          null != i[o] && (e[o].style.display = i[o]);
      return e
  }
  function w(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && se.nodeName(e, t) ? se.merge([e], n) : n
  }
  function p(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
  }
  function h(e, t, n, r, i) {
      for (var o, s, u, a, c, l, f = t.createDocumentFragment(), d = [], M = 0, L = e.length; M < L; M++)
          if ((o = e[M]) || 0 === o)
              if ("object" === se.type(o))
                  se.merge(d, o.nodeType ? [o] : o);
              else if (Pe.test(o)) {
                  for (s = s || f.appendChild(t.createElement("div")),
                  u = (Ue.exec(o) || ["", ""])[1].toLowerCase(),
                  a = _e[u] || _e._default,
                  s.innerHTML = a[1] + se.htmlPrefilter(o) + a[2],
                  l = a[0]; l--; )
                      s = s.lastChild;
                  se.merge(d, s.childNodes),
                  (s = f.firstChild).textContent = ""
              } else
                  d.push(t.createTextNode(o));
      for (f.textContent = "",
      M = 0; o = d[M++]; )
          if (r && se.inArray(o, r) > -1)
              i && i.push(o);
          else if (c = se.contains(o.ownerDocument, o),
          s = w(f.appendChild(o), "script"),
          c && p(s),
          n)
              for (l = 0; o = s[l++]; )
                  Qe.test(o.type || "") && n.push(o);
      return f
  }
  function y() {
      return !0
  }
  function D() {
      return !1
  }
  function j() {
      try {
          return Z.activeElement
      } catch (e) {}
  }
  function g(e, t, n, r, i, o) {
      var s, u;
      if ("object" == typeof t) {
          "string" != typeof n && (r = r || n,
          n = void 0);
          for (u in t)
              g(e, u, n, r, t[u], o);
          return e
      }
      if (null == r && null == i ? (i = n,
      r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
      r = void 0) : (i = r,
      r = n,
      n = void 0)),
      !1 === i)
          i = D;
      else if (!i)
          return e;
      return 1 === o && (s = i,
      (i = function(e) {
          return se().off(e),
          s.apply(this, arguments)
      }
      ).guid = s.guid || (s.guid = se.guid++)),
      e.each(function() {
          se.event.add(this, t, i, r, n)
      })
  }
  function C(e, t) {
      return se.nodeName(e, "table") && se.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
  }
  function N(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }
  function v(e) {
      var t = Ze.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }
  function x(e, t) {
      var n, r, i, o, s, u, a, c;
      if (1 === t.nodeType) {
          if (me.hasData(e) && (o = me.access(e),
          s = me.set(t, o),
          c = o.events)) {
              delete s.handle,
              s.events = {};
              for (i in c)
                  for (n = 0,
                  r = c[i].length; n < r; n++)
                      se.event.add(t, i, c[i][n])
          }
          Ae.hasData(e) && (u = Ae.access(e),
          a = se.extend({}, u),
          Ae.set(t, a))
      }
  }
  function m(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ye.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }
  function A(e, t, r, i) {
      t = X.apply([], t);
      var o, s, u, a, c, l, f = 0, d = e.length, M = d - 1, L = t[0], p = se.isFunction(L);
      if (p || d > 1 && "string" == typeof L && !oe.checkClone && qe.test(L))
          return e.each(function(n) {
              var o = e.eq(n);
              p && (t[0] = L.call(this, n, o.html())),
              A(o, t, r, i)
          });
      if (d && (o = h(t, e[0].ownerDocument, !1, e, i),
      s = o.firstChild,
      1 === o.childNodes.length && (o = s),
      s || i)) {
          for (a = (u = se.map(w(o, "script"), N)).length; f < d; f++)
              c = o,
              f !== M && (c = se.clone(c, !0, !0),
              a && se.merge(u, w(c, "script"))),
              r.call(e[f], c, f);
          if (a)
              for (l = u[u.length - 1].ownerDocument,
              se.map(u, v),
              f = 0; f < a; f++)
                  c = u[f],
                  Qe.test(c.type || "") && !me.access(c, "globalEval") && se.contains(l, c) && (c.src ? se._evalUrl && se._evalUrl(c.src) : n(c.textContent.replace(Ge, ""), l))
      }
      return e
  }
  function S(e, t, n) {
      for (var r, i = t ? se.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || se.cleanData(w(r)),
          r.parentNode && (n && se.contains(r.ownerDocument, r) && p(w(r, "script")),
          r.parentNode.removeChild(r));
      return e
  }
  function T(e, t, n) {
      var r, i, o, s, u = e.style;
      return (n = n || Ve(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se.contains(e.ownerDocument, e) || (s = se.style(e, t)),
      !oe.pixelMarginRight() && Xe.test(s) && Je.test(t) && (r = u.width,
      i = u.minWidth,
      o = u.maxWidth,
      u.minWidth = u.maxWidth = u.width = s,
      s = n.width,
      u.width = r,
      u.minWidth = i,
      u.maxWidth = o)),
      void 0 !== s ? s + "" : s
  }
  function b(e, t) {
      return {
          get: function() {
              if (!e())
                  return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  function E(e) {
      if (e in rt)
          return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
          if ((e = nt[n] + t)in rt)
              return e
  }
  function I(e, t, n) {
      var r = Ee.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function O(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
          "margin" === n && (s += se.css(e, n + Ie[o], !0, i)),
          r ? ("content" === n && (s -= se.css(e, "padding" + Ie[o], !0, i)),
          "margin" !== n && (s -= se.css(e, "border" + Ie[o] + "Width", !0, i))) : (s += se.css(e, "padding" + Ie[o], !0, i),
          "padding" !== n && (s += se.css(e, "border" + Ie[o] + "Width", !0, i)));
      return s
  }
  function z(e, t, n) {
      var r, i = !0, o = Ve(e), s = "border-box" === se.css(e, "boxSizing", !1, o);
      if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
      r <= 0 || null == r) {
          if (((r = T(e, t, o)) < 0 || null == r) && (r = e.style[t]),
          Xe.test(r))
              return r;
          i = s && (oe.boxSizingReliable() || r === e.style[t]),
          r = parseFloat(r) || 0
      }
      return r + O(e, t, n || (s ? "border" : "content"), i, o) + "px"
  }
  function k(e, t, n, r, i) {
      return new k.prototype.init(e,t,n,r,i)
  }
  function Y() {
      ot && (e.requestAnimationFrame(Y),
      se.fx.tick())
  }
  function U() {
      return e.setTimeout(function() {
          it = void 0
      }),
      it = se.now()
  }
  function Q(e, t) {
      var n, r = 0, i = {
          height: e
      };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = Ie[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e),
      i
  }
  function _(e, t, n) {
      for (var r, i = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, s = i.length; o < s; o++)
          if (r = i[o].call(n, t, e))
              return r
  }
  function P(e, t, n) {
      var r, i, o = 0, s = P.prefilters.length, u = se.Deferred().always(function() {
          delete a.elem
      }), a = function() {
          if (i)
              return !1;
          for (var t = it || U(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
              c.tweens[o].run(r);
          return u.notifyWith(e, [c, r, n]),
          r < 1 && s ? n : (u.resolveWith(e, [c]),
          !1)
      }, c = u.promise({
          elem: e,
          props: se.extend({}, t),
          opts: se.extend(!0, {
              specialEasing: {},
              easing: se.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: it || U(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
              var r = se.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(r),
              r
          },
          stop: function(t) {
              var n = 0
                , r = t ? c.tweens.length : 0;
              if (i)
                  return this;
              for (i = !0; n < r; n++)
                  c.tweens[n].run(1);
              return t ? (u.notifyWith(e, [c, 1, 0]),
              u.resolveWith(e, [c, t])) : u.rejectWith(e, [c, t]),
              this
          }
      }), l = c.props;
      for (!function(e, t) {
          var n, r, i, o, s;
          for (n in e)
              if (r = se.camelCase(n),
              i = t[r],
              o = e[n],
              se.isArray(o) && (i = o[1],
              o = e[n] = o[0]),
              n !== r && (e[r] = o,
              delete e[n]),
              (s = se.cssHooks[r]) && "expand"in s) {
                  o = s.expand(o),
                  delete e[r];
                  for (n in o)
                      n in e || (e[n] = o[n],
                      t[n] = i)
              } else
                  t[r] = i
      }(l, c.opts.specialEasing); o < s; o++)
          if (r = P.prefilters[o].call(c, e, l, c.opts))
              return se.isFunction(r.stop) && (se._queueHooks(c.elem, c.opts.queue).stop = se.proxy(r.stop, r)),
              r;
      return se.map(l, _, c),
      se.isFunction(c.opts.start) && c.opts.start.call(e, c),
      se.fx.timer(se.extend(a, {
          elem: e,
          anim: c,
          queue: c.opts.queue
      })),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function W(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }
  function H(e, t, n, r) {
      var i;
      if (se.isArray(t))
          se.each(t, function(t, i) {
              n || Dt.test(e) ? r(e, i) : H(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
          });
      else if (n || "object" !== se.type(t))
          r(e, t);
      else
          for (i in t)
              H(e + "[" + i + "]", t[i], n, r)
  }
  function R(e) {
      return function(t, n) {
          "string" != typeof t && (n = t,
          t = "*");
          var r, i = 0, o = t.toLowerCase().match(ge) || [];
          if (se.isFunction(n))
              for (; r = o[i++]; )
                  "+" === r[0] ? (r = r.slice(1) || "*",
                  (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }
  function B(e, t, n, r) {
      function i(u) {
          var a;
          return o[u] = !0,
          se.each(e[u] || [], function(e, u) {
              var c = u(t, n, r);
              return "string" != typeof c || s || o[c] ? s ? !(a = c) : void 0 : (t.dataTypes.unshift(c),
              i(c),
              !1)
          }),
          a
      }
      var o = {}
        , s = e === bt;
      return i(t.dataTypes[0]) || !o["*"] && i("*")
  }
  function F(e, t) {
      var n, r, i = se.ajaxSettings.flatOptions || {};
      for (n in t)
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && se.extend(!0, e, r),
      e
  }
  function $(e) {
      return se.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var q = []
    , Z = e.document
    , G = Object.getPrototypeOf
    , J = q.slice
    , X = q.concat
    , V = q.push
    , K = q.indexOf
    , ee = {}
    , te = ee.toString
    , ne = ee.hasOwnProperty
    , re = ne.toString
    , ie = re.call(Object)
    , oe = {}
    , se = function(e, t) {
      return new se.fn.init(e,t)
  }
    , ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , ae = /^-ms-/
    , ce = /-([a-z])/g
    , le = function(e, t) {
      return t.toUpperCase()
  };
  se.fn = se.prototype = {
      jquery: "3.1.0",
      constructor: se,
      length: 0,
      toArray: function() {
          return J.call(this)
      },
      get: function(e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : J.call(this)
      },
      pushStack: function(e) {
          var t = se.merge(this.constructor(), e);
          return t.prevObject = this,
          t
      },
      each: function(e) {
          return se.each(this, e)
      },
      map: function(e) {
          return this.pushStack(se.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(J.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: V,
      sort: q.sort,
      splice: q.splice
  },
  se.extend = se.fn.extend = function() {
      var e, t, n, r, i, o, s = arguments[0] || {}, u = 1, a = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s,
      s = arguments[u] || {},
      u++),
      "object" == typeof s || se.isFunction(s) || (s = {}),
      u === a && (s = this,
      u--); u < a; u++)
          if (null != (e = arguments[u]))
              for (t in e)
                  n = s[t],
                  s !== (r = e[t]) && (c && r && (se.isPlainObject(r) || (i = se.isArray(r))) ? (i ? (i = !1,
                  o = n && se.isArray(n) ? n : []) : o = n && se.isPlainObject(n) ? n : {},
                  s[t] = se.extend(c, o, r)) : void 0 !== r && (s[t] = r));
      return s
  }
  ,
  se.extend({
      expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === se.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
          return null != e && e === e.window
      },
      isNumeric: function(e) {
          var t = se.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      },
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== te.call(e)) && (!(t = G(e)) || "function" == typeof (n = ne.call(t, "constructor") && t.constructor) && re.call(n) === ie)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          n(e)
      },
      camelCase: function(e) {
          return e.replace(ae, "ms-").replace(ce, le)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
          var n, i = 0;
          if (r(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                  ;
          else
              for (i in e)
                  if (!1 === t.call(e[i], i, e[i]))
                      break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(ue, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (r(Object(e)) ? se.merge(n, "string" == typeof e ? [e] : e) : V.call(n, e)),
          n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : K.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
          return e.length = i,
          e
      },
      grep: function(e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
          return r
      },
      map: function(e, t, n) {
          var i, o, s = 0, u = [];
          if (r(e))
              for (i = e.length; s < i; s++)
                  null != (o = t(e[s], s, n)) && u.push(o);
          else
              for (s in e)
                  null != (o = t(e[s], s, n)) && u.push(o);
          return X.apply([], u)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, r, i;
          if ("string" == typeof t && (n = e[t],
          t = e,
          e = n),
          se.isFunction(e))
              return r = J.call(arguments, 2),
              i = function() {
                  return e.apply(t || this, r.concat(J.call(arguments)))
              }
              ,
              i.guid = e.guid = e.guid || se.guid++,
              i
      },
      now: Date.now,
      support: oe
  }),
  "function" == typeof Symbol && (se.fn[Symbol.iterator] = q[Symbol.iterator]),
  se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      ee["[object " + t + "]"] = t.toLowerCase()
  });
  var fe = function(e) {
      function t(e, t, n, r) {
          var i, o, s, u, a, c, l, d = t && t.ownerDocument, L = t ? t.nodeType : 9;
          if (n = n || [],
          "string" != typeof e || !e || 1 !== L && 9 !== L && 11 !== L)
              return n;
          if (!r && ((t ? t.ownerDocument || t : _) !== E && b(t),
          t = t || E,
          O)) {
              if (11 !== L && (a = we.exec(e)))
                  if (i = a[1]) {
                      if (9 === L) {
                          if (!(s = t.getElementById(i)))
                              return n;
                          if (s.id === i)
                              return n.push(s),
                              n
                      } else if (d && (s = d.getElementById(i)) && U(t, s) && s.id === i)
                          return n.push(s),
                          n
                  } else {
                      if (a[2])
                          return J.apply(n, t.getElementsByTagName(e)),
                          n;
                      if ((i = a[3]) && j.getElementsByClassName && t.getElementsByClassName)
                          return J.apply(n, t.getElementsByClassName(i)),
                          n
                  }
              if (j.qsa && !B[e + " "] && (!z || !z.test(e))) {
                  if (1 !== L)
                      d = t,
                      l = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      for ((u = t.getAttribute("id")) ? u = u.replace(De, je) : t.setAttribute("id", u = Q),
                      o = (c = v(e)).length; o--; )
                          c[o] = "#" + u + " " + M(c[o]);
                      l = c.join(","),
                      d = pe.test(e) && f(t.parentNode) || t
                  }
                  if (l)
                      try {
                          return J.apply(n, d.querySelectorAll(l)),
                          n
                      } catch (e) {} finally {
                          u === Q && t.removeAttribute("id")
                      }
              }
          }
          return m(e.replace(oe, "$1"), t, n, r)
      }
      function n() {
          function e(n, r) {
              return t.push(n + " ") > g.cacheLength && delete e[t.shift()],
              e[n + " "] = r
          }
          var t = [];
          return e
      }
      function r(e) {
          return e[Q] = !0,
          e
      }
      function i(e) {
          var t = E.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function o(e, t) {
          for (var n = e.split("|"), r = n.length; r--; )
              g.attrHandle[n[r]] = t
      }
      function s(e, t) {
          var n = t && e
            , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r)
              return r;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function u(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }
      function a(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }
      function c(e) {
          return function(t) {
              return "label"in t && t.disabled === e || "form"in t && t.disabled === e || "form"in t && !1 === t.disabled && (t.isDisabled === e || t.isDisabled !== !e && ("label"in t || !Ce(t)) !== e)
          }
      }
      function l(e) {
          return r(function(t) {
              return t = +t,
              r(function(n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                      n[i = o[s]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }
      function f(e) {
          return e && void 0 !== e.getElementsByTagName && e
      }
      function d() {}
      function M(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++)
              r += e[t].value;
          return r
      }
      function L(e, t, n) {
          var r = t.dir
            , i = t.next
            , o = i || r
            , s = n && "parentNode" === o
            , u = W++;
          return t.first ? function(t, n, i) {
              for (; t = t[r]; )
                  if (1 === t.nodeType || s)
                      return e(t, n, i)
          }
          : function(t, n, a) {
              var c, l, f, d = [P, u];
              if (a) {
                  for (; t = t[r]; )
                      if ((1 === t.nodeType || s) && e(t, n, a))
                          return !0
              } else
                  for (; t = t[r]; )
                      if (1 === t.nodeType || s)
                          if (f = t[Q] || (t[Q] = {}),
                          l = f[t.uniqueID] || (f[t.uniqueID] = {}),
                          i && i === t.nodeName.toLowerCase())
                              t = t[r] || t;
                          else {
                              if ((c = l[o]) && c[0] === P && c[1] === u)
                                  return d[2] = c[2];
                              if (l[o] = d,
                              d[2] = e(t, n, a))
                                  return !0
                          }
          }
      }
      function w(e) {
          return e.length > 1 ? function(t, n, r) {
              for (var i = e.length; i--; )
                  if (!e[i](t, n, r))
                      return !1;
              return !0
          }
          : e[0]
      }
      function p(e, t, n, r, i) {
          for (var o, s = [], u = 0, a = e.length, c = null != t; u < a; u++)
              (o = e[u]) && (n && !n(o, r, i) || (s.push(o),
              c && t.push(u)));
          return s
      }
      function h(e, n, i, o, s, u) {
          return o && !o[Q] && (o = h(o)),
          s && !s[Q] && (s = h(s, u)),
          r(function(r, u, a, c) {
              var l, f, d, M = [], L = [], w = u.length, h = r || function(e, n, r) {
                  for (var i = 0, o = n.length; i < o; i++)
                      t(e, n[i], r);
                  return r
              }(n || "*", a.nodeType ? [a] : a, []), y = !e || !r && n ? h : p(h, M, e, a, c), D = i ? s || (r ? e : w || o) ? [] : u : y;
              if (i && i(y, D, a, c),
              o)
                  for (l = p(D, L),
                  o(l, [], a, c),
                  f = l.length; f--; )
                      (d = l[f]) && (D[L[f]] = !(y[L[f]] = d));
              if (r) {
                  if (s || e) {
                      if (s) {
                          for (l = [],
                          f = D.length; f--; )
                              (d = D[f]) && l.push(y[f] = d);
                          s(null, D = [], l, c)
                      }
                      for (f = D.length; f--; )
                          (d = D[f]) && (l = s ? V(r, d) : M[f]) > -1 && (r[l] = !(u[l] = d))
                  }
              } else
                  D = p(D === u ? D.splice(w, D.length) : D),
                  s ? s(null, u, D, c) : J.apply(u, D)
          })
      }
      function y(e) {
          for (var t, n, r, i = e.length, o = g.relative[e[0].type], s = o || g.relative[" "], u = o ? 1 : 0, a = L(function(e) {
              return e === t
          }, s, !0), c = L(function(e) {
              return V(t, e) > -1
          }, s, !0), l = [function(e, n, r) {
              var i = !o && (r || n !== A) || ((t = n).nodeType ? a(e, n, r) : c(e, n, r));
              return t = null,
              i
          }
          ]; u < i; u++)
              if (n = g.relative[e[u].type])
                  l = [L(w(l), n)];
              else {
                  if ((n = g.filter[e[u].type].apply(null, e[u].matches))[Q]) {
                      for (r = ++u; r < i && !g.relative[e[r].type]; r++)
                          ;
                      return h(u > 1 && w(l), u > 1 && M(e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : ""
                      })).replace(oe, "$1"), n, u < r && y(e.slice(u, r)), r < i && y(e = e.slice(r)), r < i && M(e))
                  }
                  l.push(n)
              }
          return w(l)
      }
      var D, j, g, C, N, v, x, m, A, S, T, b, E, I, O, z, k, Y, U, Q = "sizzle" + 1 * new Date, _ = e.document, P = 0, W = 0, H = n(), R = n(), B = n(), F = function(e, t) {
          return e === t && (T = !0),
          0
      }, $ = {}.hasOwnProperty, q = [], Z = q.pop, G = q.push, J = q.push, X = q.slice, V = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+","g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), se = new RegExp("^" + ee + "*," + ee + "*"), ue = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ae = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(re), le = new RegExp("^" + te + "$"), fe = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
          bool: new RegExp("^(?:" + K + ")$","i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
      }, de = /^(?:input|select|textarea|button)$/i, Me = /^h\d$/i, Le = /^[^{]+\{\s*\[native \w/, we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pe = /[+~]/, he = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, De = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, je = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, ge = function() {
          b()
      }, Ce = L(function(e) {
          return !0 === e.disabled
      }, {
          dir: "parentNode",
          next: "legend"
      });
      try {
          J.apply(q = X.call(_.childNodes), _.childNodes),
          q[_.childNodes.length].nodeType
      } catch (e) {
          J = {
              apply: q.length ? function(e, t) {
                  G.apply(e, X.call(t))
              }
              : function(e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++]; )
                      ;
                  e.length = n - 1
              }
          }
      }
      j = t.support = {},
      N = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }
      ,
      b = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : _;
          return r !== E && 9 === r.nodeType && r.documentElement ? (E = r,
          I = E.documentElement,
          O = !N(E),
          _ !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ge, !1) : n.attachEvent && n.attachEvent("onunload", ge)),
          j.attributes = i(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          j.getElementsByTagName = i(function(e) {
              return e.appendChild(E.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          j.getElementsByClassName = Le.test(E.getElementsByClassName),
          j.getById = i(function(e) {
              return I.appendChild(e).id = Q,
              !E.getElementsByName || !E.getElementsByName(Q).length
          }),
          j.getById ? (g.find.ID = function(e, t) {
              if (void 0 !== t.getElementById && O) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }
          ,
          g.filter.ID = function(e) {
              var t = e.replace(he, ye);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ) : (delete g.find.ID,
          g.filter.ID = function(e) {
              var t = e.replace(he, ye);
              return function(e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }
          ),
          g.find.TAG = j.getElementsByTagName ? function(e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : j.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, r = [], i = 0, o = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = o[i++]; )
                      1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }
          ,
          g.find.CLASS = j.getElementsByClassName && function(e, t) {
              if (void 0 !== t.getElementsByClassName && O)
                  return t.getElementsByClassName(e)
          }
          ,
          k = [],
          z = [],
          (j.qsa = Le.test(E.querySelectorAll)) && (i(function(e) {
              I.appendChild(e).innerHTML = "<a id='" + Q + "'></a><select id='" + Q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
              e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + ee + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || z.push("\\[" + ee + "*(?:value|" + K + ")"),
              e.querySelectorAll("[id~=" + Q + "-]").length || z.push("~="),
              e.querySelectorAll(":checked").length || z.push(":checked"),
              e.querySelectorAll("a#" + Q + "+*").length || z.push(".#.+[+~]")
          }),
          i(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = E.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && z.push("name" + ee + "*[*^$|!~]?="),
              2 !== e.querySelectorAll(":enabled").length && z.push(":enabled", ":disabled"),
              I.appendChild(e).disabled = !0,
              2 !== e.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              z.push(",.*:")
          })),
          (j.matchesSelector = Le.test(Y = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function(e) {
              j.disconnectedMatch = Y.call(e, "*"),
              Y.call(e, "[s!='']:x"),
              k.push("!=", re)
          }),
          z = z.length && new RegExp(z.join("|")),
          k = k.length && new RegExp(k.join("|")),
          t = Le.test(I.compareDocumentPosition),
          U = t || Le.test(I.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          F = t ? function(e, t) {
              if (e === t)
                  return T = !0,
                  0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !j.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === _ && U(_, e) ? -1 : t === E || t.ownerDocument === _ && U(_, t) ? 1 : S ? V(S, e) - V(S, t) : 0 : 4 & n ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return T = !0,
                  0;
              var n, r = 0, i = e.parentNode, o = t.parentNode, u = [e], a = [t];
              if (!i || !o)
                  return e === E ? -1 : t === E ? 1 : i ? -1 : o ? 1 : S ? V(S, e) - V(S, t) : 0;
              if (i === o)
                  return s(e, t);
              for (n = e; n = n.parentNode; )
                  u.unshift(n);
              for (n = t; n = n.parentNode; )
                  a.unshift(n);
              for (; u[r] === a[r]; )
                  r++;
              return r ? s(u[r], a[r]) : u[r] === _ ? -1 : a[r] === _ ? 1 : 0
          }
          ,
          E) : E
      }
      ,
      t.matches = function(e, n) {
          return t(e, null, null, n)
      }
      ,
      t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== E && b(e),
          n = n.replace(ae, "='$1']"),
          j.matchesSelector && O && !B[n + " "] && (!k || !k.test(n)) && (!z || !z.test(n)))
              try {
                  var r = Y.call(e, n);
                  if (r || j.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return r
              } catch (e) {}
          return t(n, E, null, [e]).length > 0
      }
      ,
      t.contains = function(e, t) {
          return (e.ownerDocument || e) !== E && b(e),
          U(e, t)
      }
      ,
      t.attr = function(e, t) {
          (e.ownerDocument || e) !== E && b(e);
          var n = g.attrHandle[t.toLowerCase()]
            , r = n && $.call(g.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
          return void 0 !== r ? r : j.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }
      ,
      t.escape = function(e) {
          return (e + "").replace(De, je)
      }
      ,
      t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      t.uniqueSort = function(e) {
          var t, n = [], r = 0, i = 0;
          if (T = !j.detectDuplicates,
          S = !j.sortStable && e.slice(0),
          e.sort(F),
          T) {
              for (; t = e[i++]; )
                  t === e[i] && (r = n.push(i));
              for (; r--; )
                  e.splice(n[r], 1)
          }
          return S = null,
          e
      }
      ,
      C = t.getText = function(e) {
          var t, n = "", r = 0, i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += C(e)
              } else if (3 === i || 4 === i)
                  return e.nodeValue
          } else
              for (; t = e[r++]; )
                  n += C(t);
          return n
      }
      ,
      (g = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(he, ye),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(he, ye),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = v(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                  e[2] = n.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(he, ye).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = H[e + " "];
                  return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && H(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, n, r) {
                  return function(i) {
                      var o = t.attr(i, e);
                      return null == o ? "!=" === n : !n || (o += "",
                      "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3)
                    , s = "last" !== e.slice(-4)
                    , u = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, n, a) {
                      var c, l, f, d, M, L, w = o !== s ? "nextSibling" : "previousSibling", p = t.parentNode, h = u && t.nodeName.toLowerCase(), y = !a && !u, D = !1;
                      if (p) {
                          if (o) {
                              for (; w; ) {
                                  for (d = t; d = d[w]; )
                                      if (u ? d.nodeName.toLowerCase() === h : 1 === d.nodeType)
                                          return !1;
                                  L = w = "only" === e && !L && "nextSibling"
                              }
                              return !0
                          }
                          if (L = [s ? p.firstChild : p.lastChild],
                          s && y) {
                              for (D = (M = (c = (l = (f = (d = p)[Q] || (d[Q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === P && c[1]) && c[2],
                              d = M && p.childNodes[M]; d = ++M && d && d[w] || (D = M = 0) || L.pop(); )
                                  if (1 === d.nodeType && ++D && d === t) {
                                      l[e] = [P, M, D];
                                      break
                                  }
                          } else if (y && (D = M = (c = (l = (f = (d = t)[Q] || (d[Q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === P && c[1]),
                          !1 === D)
                              for (; (d = ++M && d && d[w] || (D = M = 0) || L.pop()) && ((u ? d.nodeName.toLowerCase() !== h : 1 !== d.nodeType) || !++D || (y && ((l = (f = d[Q] || (d[Q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [P, D]),
                              d !== t)); )
                                  ;
                          return (D -= i) === r || D % r == 0 && D / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var i, o = g.pseudos[e] || g.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return o[Q] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                  g.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                      for (var r, i = o(e, n), s = i.length; s--; )
                          e[r = V(e, i[s])] = !(t[r] = i[s])
                  }) : function(e) {
                      return o(e, 0, i)
                  }
                  ) : o
              }
          },
          pseudos: {
              not: r(function(e) {
                  var t = []
                    , n = []
                    , i = x(e.replace(oe, "$1"));
                  return i[Q] ? r(function(e, t, n, r) {
                      for (var o, s = i(e, null, r, []), u = e.length; u--; )
                          (o = s[u]) && (e[u] = !(t[u] = o))
                  }) : function(e, r, o) {
                      return t[0] = e,
                      i(t, null, o, n),
                      t[0] = null,
                      !n.pop()
                  }
              }),
              has: r(function(e) {
                  return function(n) {
                      return t(e, n).length > 0
                  }
              }),
              contains: r(function(e) {
                  return e = e.replace(he, ye),
                  function(t) {
                      return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                  }
              }),
              lang: r(function(e) {
                  return le.test(e || "") || t.error("unsupported lang: " + e),
                  e = e.replace(he, ye).toLowerCase(),
                  function(t) {
                      var n;
                      do {
                          if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                  }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === I
              },
              focus: function(e) {
                  return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: c(!1),
              disabled: c(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !g.pseudos.empty(e)
              },
              header: function(e) {
                  return Me.test(e.nodeName)
              },
              input: function(e) {
                  return de.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: l(function() {
                  return [0]
              }),
              last: l(function(e, t) {
                  return [t - 1]
              }),
              eq: l(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: l(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: l(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: l(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; )
                      e.push(r);
                  return e
              }),
              gt: l(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; )
                      e.push(r);
                  return e
              })
          }
      }).pseudos.nth = g.pseudos.eq;
      for (D in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          g.pseudos[D] = u(D);
      for (D in {
          submit: !0,
          reset: !0
      })
          g.pseudos[D] = a(D);
      return d.prototype = g.filters = g.pseudos,
      g.setFilters = new d,
      v = t.tokenize = function(e, n) {
          var r, i, o, s, u, a, c, l = R[e + " "];
          if (l)
              return n ? 0 : l.slice(0);
          for (u = e,
          a = [],
          c = g.preFilter; u; ) {
              r && !(i = se.exec(u)) || (i && (u = u.slice(i[0].length) || u),
              a.push(o = [])),
              r = !1,
              (i = ue.exec(u)) && (r = i.shift(),
              o.push({
                  value: r,
                  type: i[0].replace(oe, " ")
              }),
              u = u.slice(r.length));
              for (s in g.filter)
                  !(i = fe[s].exec(u)) || c[s] && !(i = c[s](i)) || (r = i.shift(),
                  o.push({
                      value: r,
                      type: s,
                      matches: i
                  }),
                  u = u.slice(r.length));
              if (!r)
                  break
          }
          return n ? u.length : u ? t.error(e) : R(e, a).slice(0)
      }
      ,
      x = t.compile = function(e, n) {
          var i, o = [], s = [], u = B[e + " "];
          if (!u) {
              for (n || (n = v(e)),
              i = n.length; i--; )
                  (u = y(n[i]))[Q] ? o.push(u) : s.push(u);
              (u = B(e, function(e, n) {
                  var i = n.length > 0
                    , o = e.length > 0
                    , s = function(r, s, u, a, c) {
                      var l, f, d, M = 0, L = "0", w = r && [], h = [], y = A, D = r || o && g.find.TAG("*", c), j = P += null == y ? 1 : Math.random() || .1, C = D.length;
                      for (c && (A = s === E || s || c); L !== C && null != (l = D[L]); L++) {
                          if (o && l) {
                              for (f = 0,
                              s || l.ownerDocument === E || (b(l),
                              u = !O); d = e[f++]; )
                                  if (d(l, s || E, u)) {
                                      a.push(l);
                                      break
                                  }
                              c && (P = j)
                          }
                          i && ((l = !d && l) && M--,
                          r && w.push(l))
                      }
                      if (M += L,
                      i && L !== M) {
                          for (f = 0; d = n[f++]; )
                              d(w, h, s, u);
                          if (r) {
                              if (M > 0)
                                  for (; L--; )
                                      w[L] || h[L] || (h[L] = Z.call(a));
                              h = p(h)
                          }
                          J.apply(a, h),
                          c && !r && h.length > 0 && M + n.length > 1 && t.uniqueSort(a)
                      }
                      return c && (P = j,
                      A = y),
                      w
                  };
                  return i ? r(s) : s
              }(s, o))).selector = e
          }
          return u
      }
      ,
      m = t.select = function(e, t, n, r) {
          var i, o, s, u, a, c = "function" == typeof e && e, l = !r && v(e = c.selector || e);
          if (n = n || [],
          1 === l.length) {
              if ((o = l[0] = l[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && j.getById && 9 === t.nodeType && O && g.relative[o[1].type]) {
                  if (!(t = (g.find.ID(s.matches[0].replace(he, ye), t) || [])[0]))
                      return n;
                  c && (t = t.parentNode),
                  e = e.slice(o.shift().value.length)
              }
              for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
              !g.relative[u = s.type]); )
                  if ((a = g.find[u]) && (r = a(s.matches[0].replace(he, ye), pe.test(o[0].type) && f(t.parentNode) || t))) {
                      if (o.splice(i, 1),
                      !(e = r.length && M(o)))
                          return J.apply(n, r),
                          n;
                      break
                  }
          }
          return (c || x(e, l))(r, t, !O, n, !t || pe.test(e) && f(t.parentNode) || t),
          n
      }
      ,
      j.sortStable = Q.split("").sort(F).join("") === Q,
      j.detectDuplicates = !!T,
      b(),
      j.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
      }),
      i(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      j.attributes && i(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      i(function(e) {
          return null == e.getAttribute("disabled")
      }) || o(K, function(e, t, n) {
          var r;
          if (!n)
              return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }),
      t
  }(e);
  se.find = fe,
  se.expr = fe.selectors,
  se.expr[":"] = se.expr.pseudos,
  se.uniqueSort = se.unique = fe.uniqueSort,
  se.text = fe.getText,
  se.isXMLDoc = fe.isXML,
  se.contains = fe.contains,
  se.escapeSelector = fe.escape;
  var de = function(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
              if (i && se(e).is(n))
                  break;
              r.push(e)
          }
      return r
  }
    , Me = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
      return n
  }
    , Le = se.expr.match.needsContext
    , we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
    , pe = /^.[^:#\[\.,]*$/;
  se.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType ? se.find.matchesSelector(r, e) ? [r] : [] : se.find.matches(e, se.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  se.fn.extend({
      find: function(e) {
          var t, n, r = this.length, i = this;
          if ("string" != typeof e)
              return this.pushStack(se(e).filter(function() {
                  for (t = 0; t < r; t++)
                      if (se.contains(i[t], this))
                          return !0
              }));
          for (n = this.pushStack([]),
          t = 0; t < r; t++)
              se.find(e, i[t], n);
          return r > 1 ? se.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(i(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(i(this, e || [], !0))
      },
      is: function(e) {
          return !!i(this, "string" == typeof e && Le.test(e) ? se(e) : e || [], !1).length
      }
  });
  var he, ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (se.fn.init = function(e, t, n) {
      var r, i;
      if (!e)
          return this;
      if (n = n || he,
      "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ye.exec(e)) || !r[1] && t)
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
              if (t = t instanceof se ? t[0] : t,
              se.merge(this, se.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
              we.test(r[1]) && se.isPlainObject(t))
                  for (r in t)
                      se.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this
          }
          return (i = Z.getElementById(r[2])) && (this[0] = i,
          this.length = 1),
          this
      }
      return e.nodeType ? (this[0] = e,
      this.length = 1,
      this) : se.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(se) : se.makeArray(e, this)
  }
  ).prototype = se.fn,
  he = se(Z);
  var De = /^(?:parents|prev(?:Until|All))/
    , je = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  se.fn.extend({
      has: function(e) {
          var t = se(e, this)
            , n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (se.contains(this, t[e]))
                      return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0, i = this.length, o = [], s = "string" != typeof e && se(e);
          if (!Le.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && se.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      }
          return this.pushStack(o.length > 1 ? se.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? K.call(se(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(se.uniqueSort(se.merge(this.get(), se(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }),
  se.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return de(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return de(e, "parentNode", n)
      },
      next: function(e) {
          return o(e, "nextSibling")
      },
      prev: function(e) {
          return o(e, "previousSibling")
      },
      nextAll: function(e) {
          return de(e, "nextSibling")
      },
      prevAll: function(e) {
          return de(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return de(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return de(e, "previousSibling", n)
      },
      siblings: function(e) {
          return Me((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return Me(e.firstChild)
      },
      contents: function(e) {
          return e.contentDocument || se.merge([], e.childNodes)
      }
  }, function(e, t) {
      se.fn[e] = function(n, r) {
          var i = se.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = se.filter(r, i)),
          this.length > 1 && (je[e] || se.uniqueSort(i),
          De.test(e) && i.reverse()),
          this.pushStack(i)
      }
  });
  var ge = /\S+/g;
  se.Callbacks = function(e) {
      e = "string" == typeof e ? function(e) {
          var t = {};
          return se.each(e.match(ge) || [], function(e, n) {
              t[n] = !0
          }),
          t
      }(e) : se.extend({}, e);
      var t, n, r, i, o = [], s = [], u = -1, a = function() {
          for (i = e.once,
          r = t = !0; s.length; u = -1)
              for (n = s.shift(); ++u < o.length; )
                  !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length,
                  n = !1);
          e.memory || (n = !1),
          t = !1,
          i && (o = n ? [] : "")
      }, c = {
          add: function() {
              return o && (n && !t && (u = o.length - 1,
              s.push(n)),
              function t(n) {
                  se.each(n, function(n, r) {
                      se.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== se.type(r) && t(r)
                  })
              }(arguments),
              n && !t && a()),
              this
          },
          remove: function() {
              return se.each(arguments, function(e, t) {
                  for (var n; (n = se.inArray(t, o, n)) > -1; )
                      o.splice(n, 1),
                      n <= u && u--
              }),
              this
          },
          has: function(e) {
              return e ? se.inArray(e, o) > -1 : o.length > 0
          },
          empty: function() {
              return o && (o = []),
              this
          },
          disable: function() {
              return i = s = [],
              o = n = "",
              this
          },
          disabled: function() {
              return !o
          },
          lock: function() {
              return i = s = [],
              n || t || (o = n = ""),
              this
          },
          locked: function() {
              return !!i
          },
          fireWith: function(e, n) {
              return i || (n = [e, (n = n || []).slice ? n.slice() : n],
              s.push(n),
              t || a()),
              this
          },
          fire: function() {
              return c.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!r
          }
      };
      return c
  }
  ,
  se.extend({
      Deferred: function(t) {
          var n = [["notify", "progress", se.Callbacks("memory"), se.Callbacks("memory"), 2], ["resolve", "done", se.Callbacks("once memory"), se.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", se.Callbacks("once memory"), se.Callbacks("once memory"), 1, "rejected"]]
            , r = "pending"
            , i = {
              state: function() {
                  return r
              },
              always: function() {
                  return o.done(arguments).fail(arguments),
                  this
              },
              catch: function(e) {
                  return i.then(null, e)
              },
              pipe: function() {
                  var e = arguments;
                  return se.Deferred(function(t) {
                      se.each(n, function(n, r) {
                          var i = se.isFunction(e[r[4]]) && e[r[4]];
                          o[r[1]](function() {
                              var e = i && i.apply(this, arguments);
                              e && se.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              then: function(t, r, i) {
                  function o(t, n, r, i) {
                      return function() {
                          var c = this
                            , l = arguments
                            , f = function() {
                              var e, f;
                              if (!(t < a)) {
                                  if ((e = r.apply(c, l)) === n.promise())
                                      throw new TypeError("Thenable self-resolution");
                                  f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                  se.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++,
                                  f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (c = void 0,
                                  l = [e]),
                                  (i || n.resolveWith)(c, l))
                              }
                          }
                            , d = i ? f : function() {
                              try {
                                  f()
                              } catch (e) {
                                  se.Deferred.exceptionHook && se.Deferred.exceptionHook(e, d.stackTrace),
                                  t + 1 >= a && (r !== u && (c = void 0,
                                  l = [e]),
                                  n.rejectWith(c, l))
                              }
                          }
                          ;
                          t ? d() : (se.Deferred.getStackHook && (d.stackTrace = se.Deferred.getStackHook()),
                          e.setTimeout(d))
                      }
                  }
                  var a = 0;
                  return se.Deferred(function(e) {
                      n[0][3].add(o(0, e, se.isFunction(i) ? i : s, e.notifyWith)),
                      n[1][3].add(o(0, e, se.isFunction(t) ? t : s)),
                      n[2][3].add(o(0, e, se.isFunction(r) ? r : u))
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? se.extend(e, i) : i
              }
          }
            , o = {};
          return se.each(n, function(e, t) {
              var s = t[2]
                , u = t[5];
              i[t[1]] = s.add,
              u && s.add(function() {
                  r = u
              }, n[3 - e][2].disable, n[0][2].lock),
              s.add(t[3].fire),
              o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                  this
              }
              ,
              o[t[0] + "With"] = s.fireWith
          }),
          i.promise(o),
          t && t.call(o, o),
          o
      },
      when: function(e) {
          var t = arguments.length
            , n = t
            , r = Array(n)
            , i = J.call(arguments)
            , o = se.Deferred()
            , s = function(e) {
              return function(n) {
                  r[e] = this,
                  i[e] = arguments.length > 1 ? J.call(arguments) : n,
                  --t || o.resolveWith(r, i)
              }
          };
          if (t <= 1 && (a(e, o.done(s(n)).resolve, o.reject),
          "pending" === o.state() || se.isFunction(i[n] && i[n].then)))
              return o.then();
          for (; n--; )
              a(i[n], s(n), o.reject);
          return o.promise()
      }
  });
  var Ce = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  se.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && Ce.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }
  ,
  se.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  }
  ;
  var Ne = se.Deferred();
  se.fn.ready = function(e) {
      return Ne.then(e).catch(function(e) {
          se.readyException(e)
      }),
      this
  }
  ,
  se.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? se.readyWait++ : se.ready(!0)
      },
      ready: function(e) {
          (!0 === e ? --se.readyWait : se.isReady) || (se.isReady = !0,
          !0 !== e && --se.readyWait > 0 || Ne.resolveWith(Z, [se]))
      }
  }),
  se.ready.then = Ne.then,
  "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(se.ready) : (Z.addEventListener("DOMContentLoaded", c),
  e.addEventListener("load", c));
  var ve = function(e, t, n, r, i, o, s) {
      var u = 0
        , a = e.length
        , c = null == n;
      if ("object" === se.type(n)) {
          i = !0;
          for (u in n)
              ve(e, t, u, n[u], !0, o, s)
      } else if (void 0 !== r && (i = !0,
      se.isFunction(r) || (s = !0),
      c && (s ? (t.call(e, r),
      t = null) : (c = t,
      t = function(e, t, n) {
          return c.call(se(e), n)
      }
      )),
      t))
          for (; u < a; u++)
              t(e[u], n, s ? r : r.call(e[u], u, t(e[u], n)));
      return i ? e : c ? t.call(e) : a ? t(e[0], n) : o
  }
    , xe = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  l.uid = 1,
  l.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {},
          xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))),
          t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t)
              i[se.camelCase(t)] = n;
          else
              for (r in t)
                  i[se.camelCase(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][se.camelCase(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
          void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
              if (void 0 !== t) {
                  n = (t = se.isArray(t) ? t.map(se.camelCase) : (t = se.camelCase(t))in r ? [t] : t.match(ge) || []).length;
                  for (; n--; )
                      delete r[t[n]]
              }
              (void 0 === t || se.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !se.isEmptyObject(t)
      }
  };
  var me = new l
    , Ae = new l
    , Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , Te = /[A-Z]/g;
  se.extend({
      hasData: function(e) {
          return Ae.hasData(e) || me.hasData(e)
      },
      data: function(e, t, n) {
          return Ae.access(e, t, n)
      },
      removeData: function(e, t) {
          Ae.remove(e, t)
      },
      _data: function(e, t, n) {
          return me.access(e, t, n)
      },
      _removeData: function(e, t) {
          me.remove(e, t)
      }
  }),
  se.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0], s = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (i = Ae.get(o),
              1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
                  for (n = s.length; n--; )
                      s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = se.camelCase(r.slice(5)),
                      f(o, r, i[r]));
                  me.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              Ae.set(this, e)
          }) : ve(this, function(t) {
              var n;
              if (o && void 0 === t) {
                  if (void 0 !== (n = Ae.get(o, e)))
                      return n;
                  if (void 0 !== (n = f(o, e)))
                      return n
              } else
                  this.each(function() {
                      Ae.set(this, e, t)
                  })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              Ae.remove(this, e)
          })
      }
  }),
  se.extend({
      queue: function(e, t, n) {
          var r;
          if (e)
              return t = (t || "fx") + "queue",
              r = me.get(e, t),
              n && (!r || se.isArray(n) ? r = me.access(e, t, se.makeArray(n)) : r.push(n)),
              r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = se.queue(e, t)
            , r = n.length
            , i = n.shift()
            , o = se._queueHooks(e, t)
            , s = function() {
              se.dequeue(e, t)
          };
          "inprogress" === i && (i = n.shift(),
          r--),
          i && ("fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(e, s, o)),
          !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return me.get(e, n) || me.access(e, n, {
              empty: se.Callbacks("once memory").add(function() {
                  me.remove(e, [t + "queue", n])
              })
          })
      }
  }),
  se.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          n--),
          arguments.length < n ? se.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = se.queue(this, e, t);
              se._queueHooks(this, e),
              "fx" === e && "inprogress" !== n[0] && se.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              se.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1, i = se.Deferred(), o = this, s = this.length, u = function() {
              --r || i.resolveWith(o, [o])
          };
          for ("string" != typeof e && (t = e,
          e = void 0),
          e = e || "fx"; s--; )
              (n = me.get(o[s], e + "queueHooks")) && n.empty && (r++,
              n.empty.add(u));
          return u(),
          i.promise(t)
      }
  });
  var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , Ee = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$","i")
    , Ie = ["Top", "Right", "Bottom", "Left"]
    , Oe = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se.contains(e.ownerDocument, e) && "none" === se.css(e, "display")
  }
    , ze = function(e, t, n, r) {
      var i, o, s = {};
      for (o in t)
          s[o] = e.style[o],
          e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
          e.style[o] = s[o];
      return i
  }
    , ke = {};
  se.fn.extend({
      show: function() {
          return L(this, !0)
      },
      hide: function() {
          return L(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              Oe(this) ? se(this).show() : se(this).hide()
          })
      }
  });
  var Ye = /^(?:checkbox|radio)$/i
    , Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
    , Qe = /^$|\/(?:java|ecma)script/i
    , _e = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  _e.optgroup = _e.option,
  _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
  _e.th = _e.td;
  var Pe = /<|&#?\w+;/;
  !function() {
      var e = Z.createDocumentFragment().appendChild(Z.createElement("div"))
        , t = Z.createElement("input");
      t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      oe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
      e.innerHTML = "<textarea>x</textarea>",
      oe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var We = Z.documentElement
    , He = /^key/
    , Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , Be = /^([^.]*)(?:\.(.+)|)/;
  se.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, s, u, a, c, l, f, d, M, L, w, p = me.get(e);
          if (p)
              for (n.handler && (n = (o = n).handler,
              i = o.selector),
              i && se.find.matchesSelector(We, i),
              n.guid || (n.guid = se.guid++),
              (a = p.events) || (a = p.events = {}),
              (s = p.handle) || (s = p.handle = function(t) {
                  return void 0 !== se && se.event.triggered !== t.type ? se.event.dispatch.apply(e, arguments) : void 0
              }
              ),
              c = (t = (t || "").match(ge) || [""]).length; c--; )
                  M = w = (u = Be.exec(t[c]) || [])[1],
                  L = (u[2] || "").split(".").sort(),
                  M && (f = se.event.special[M] || {},
                  M = (i ? f.delegateType : f.bindType) || M,
                  f = se.event.special[M] || {},
                  l = se.extend({
                      type: M,
                      origType: w,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && se.expr.match.needsContext.test(i),
                      namespace: L.join(".")
                  }, o),
                  (d = a[M]) || ((d = a[M] = []).delegateCount = 0,
                  f.setup && !1 !== f.setup.call(e, r, L, s) || e.addEventListener && e.addEventListener(M, s)),
                  f.add && (f.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                  se.event.global[M] = !0)
      },
      remove: function(e, t, n, r, i) {
          var o, s, u, a, c, l, f, d, M, L, w, p = me.hasData(e) && me.get(e);
          if (p && (a = p.events)) {
              for (c = (t = (t || "").match(ge) || [""]).length; c--; )
                  if (u = Be.exec(t[c]) || [],
                  M = w = u[1],
                  L = (u[2] || "").split(".").sort(),
                  M) {
                      for (f = se.event.special[M] || {},
                      d = a[M = (r ? f.delegateType : f.bindType) || M] || [],
                      u = u[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      s = o = d.length; o--; )
                          l = d[o],
                          !i && w !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1),
                          l.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, l));
                      s && !d.length && (f.teardown && !1 !== f.teardown.call(e, L, p.handle) || se.removeEvent(e, M, p.handle),
                      delete a[M])
                  } else
                      for (M in a)
                          se.event.remove(e, M + t[c], n, r, !0);
              se.isEmptyObject(a) && me.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t, n, r, i, o, s, u = se.event.fix(e), a = new Array(arguments.length), c = (me.get(this, "events") || {})[u.type] || [], l = se.event.special[u.type] || {};
          for (a[0] = u,
          t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
          if (u.delegateTarget = this,
          !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
              for (s = se.event.handlers.call(this, u, c),
              t = 0; (i = s[t++]) && !u.isPropagationStopped(); )
                  for (u.currentTarget = i.elem,
                  n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                      u.rnamespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                      u.data = o.data,
                      void 0 !== (r = ((se.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (u.result = r) && (u.preventDefault(),
                      u.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, u),
              u.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, s = [], u = t.delegateCount, a = e.target;
          if (u && a.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
              for (; a !== this; a = a.parentNode || this)
                  if (1 === a.nodeType && (!0 !== a.disabled || "click" !== e.type)) {
                      for (r = [],
                      n = 0; n < u; n++)
                          void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? se(i, this).index(a) > -1 : se.find(i, this, null, [a]).length),
                          r[i] && r.push(o);
                      r.length && s.push({
                          elem: a,
                          handlers: r
                      })
                  }
          return u < t.length && s.push({
              elem: this,
              handlers: t.slice(u)
          }),
          s
      },
      addProp: function(e, t) {
          Object.defineProperty(se.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: se.isFunction(t) ? function() {
                  if (this.originalEvent)
                      return t(this.originalEvent)
              }
              : function() {
                  if (this.originalEvent)
                      return this.originalEvent[e]
              }
              ,
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[se.expando] ? e : new se.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== j() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === j() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && se.nodeName(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(e) {
                  return se.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  },
  se.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }
  ,
  se.Event = function(e, t) {
      if (!(this instanceof se.Event))
          return new se.Event(e,t);
      e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : D,
      this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
      this.currentTarget = e.currentTarget,
      this.relatedTarget = e.relatedTarget) : this.type = e,
      t && se.extend(this, t),
      this.timeStamp = e && e.timeStamp || se.now(),
      this[se.expando] = !0
  }
  ,
  se.Event.prototype = {
      constructor: se.Event,
      isDefaultPrevented: D,
      isPropagationStopped: D,
      isImmediatePropagationStopped: D,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = y,
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = y,
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = y,
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  se.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && He.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Re.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, se.event.addProp),
  se.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = e.relatedTarget, i = e.handleObj;
              return r && (r === this || se.contains(this, r)) || (e.type = i.origType,
              n = i.handler.apply(this, arguments),
              e.type = t),
              n
          }
      }
  }),
  se.fn.extend({
      on: function(e, t, n, r) {
          return g(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return g(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
              return r = e.handleObj,
              se(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
              this;
          if ("object" == typeof e) {
              for (i in e)
                  this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t,
          t = void 0),
          !1 === n && (n = D),
          this.each(function() {
              se.event.remove(this, e, n, t)
          })
      }
  });
  var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , $e = /<script|<style|<link/i
    , qe = /checked\s*(?:[^=]|=\s*.checked.)/i
    , Ze = /^true\/(.*)/
    , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  se.extend({
      htmlPrefilter: function(e) {
          return e.replace(Fe, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var r, i, o, s, u = e.cloneNode(!0), a = se.contains(e.ownerDocument, e);
          if (!(oe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || se.isXMLDoc(e)))
              for (s = w(u),
              r = 0,
              i = (o = w(e)).length; r < i; r++)
                  m(o[r], s[r]);
          if (t)
              if (n)
                  for (o = o || w(e),
                  s = s || w(u),
                  r = 0,
                  i = o.length; r < i; r++)
                      x(o[r], s[r]);
              else
                  x(e, u);
          return (s = w(u, "script")).length > 0 && p(s, !a && w(e, "script")),
          u
      },
      cleanData: function(e) {
          for (var t, n, r, i = se.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (xe(n)) {
                  if (t = n[me.expando]) {
                      if (t.events)
                          for (r in t.events)
                              i[r] ? se.event.remove(n, r) : se.removeEvent(n, r, t.handle);
                      n[me.expando] = void 0
                  }
                  n[Ae.expando] && (n[Ae.expando] = void 0)
              }
      }
  }),
  se.fn.extend({
      detach: function(e) {
          return S(this, e, !0)
      },
      remove: function(e) {
          return S(this, e)
      },
      text: function(e) {
          return ve(this, function(e) {
              return void 0 === e ? se.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return A(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  C(this, e).appendChild(e)
              }
          })
      },
      prepend: function() {
          return A(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = C(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return A(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return A(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (se.cleanData(w(e, !1)),
              e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e,
          t = null == t ? e : t,
          this.map(function() {
              return se.clone(this, e, t)
          })
      },
      html: function(e) {
          return ve(this, function(e) {
              var t = this[0] || {}
                , n = 0
                , r = this.length;
              if (void 0 === e && 1 === t.nodeType)
                  return t.innerHTML;
              if ("string" == typeof e && !$e.test(e) && !_e[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = se.htmlPrefilter(e);
                  try {
                      for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType && (se.cleanData(w(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return A(this, arguments, function(t) {
              var n = this.parentNode;
              se.inArray(this, e) < 0 && (se.cleanData(w(this)),
              n && n.replaceChild(t, this))
          }, e)
      }
  }),
  se.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      se.fn[e] = function(e) {
          for (var n, r = [], i = se(e), o = i.length - 1, s = 0; s <= o; s++)
              n = s === o ? this : this.clone(!0),
              se(i[s])[t](n),
              V.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var Je = /^margin/
    , Xe = new RegExp("^(" + be + ")(?!px)[a-z%]+$","i")
    , Ve = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e),
      n.getComputedStyle(t)
  };
  !function() {
      function t() {
          if (u) {
              u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
              u.innerHTML = "",
              We.appendChild(s);
              var t = e.getComputedStyle(u);
              n = "1%" !== t.top,
              o = "2px" === t.marginLeft,
              r = "4px" === t.width,
              u.style.marginRight = "50%",
              i = "4px" === t.marginRight,
              We.removeChild(s),
              u = null
          }
      }
      var n, r, i, o, s = Z.createElement("div"), u = Z.createElement("div");
      u.style && (u.style.backgroundClip = "content-box",
      u.cloneNode(!0).style.backgroundClip = "",
      oe.clearCloneStyle = "content-box" === u.style.backgroundClip,
      s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
      s.appendChild(u),
      se.extend(oe, {
          pixelPosition: function() {
              return t(),
              n
          },
          boxSizingReliable: function() {
              return t(),
              r
          },
          pixelMarginRight: function() {
              return t(),
              i
          },
          reliableMarginLeft: function() {
              return t(),
              o
          }
      }))
  }();
  var Ke = /^(none|table(?!-c[ea]).+)/
    , et = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , tt = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , nt = ["Webkit", "Moz", "ms"]
    , rt = Z.createElement("div").style;
  se.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = T(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          float: "cssFloat"
      },
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, s, u = se.camelCase(t), a = e.style;
              if (t = se.cssProps[u] || (se.cssProps[u] = E(u) || u),
              s = se.cssHooks[t] || se.cssHooks[u],
              void 0 === n)
                  return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : a[t];
              "string" == (o = typeof n) && (i = Ee.exec(n)) && i[1] && (n = d(e, t, i),
              o = "number"),
              null != n && n == n && ("number" === o && (n += i && i[3] || (se.cssNumber[u] ? "" : "px")),
              oe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"),
              s && "set"in s && void 0 === (n = s.set(e, n, r)) || (a[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, s, u = se.camelCase(t);
          return t = se.cssProps[u] || (se.cssProps[u] = E(u) || u),
          (s = se.cssHooks[t] || se.cssHooks[u]) && "get"in s && (i = s.get(e, !0, n)),
          void 0 === i && (i = T(e, t, r)),
          "normal" === i && t in tt && (i = tt[t]),
          "" === n || n ? (o = parseFloat(i),
          !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }),
  se.each(["height", "width"], function(e, t) {
      se.cssHooks[t] = {
          get: function(e, n, r) {
              if (n)
                  return !Ke.test(se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, r) : ze(e, et, function() {
                      return z(e, t, r)
                  })
          },
          set: function(e, n, r) {
              var i, o = r && Ve(e), s = r && O(e, t, r, "border-box" === se.css(e, "boxSizing", !1, o), o);
              return s && (i = Ee.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
              n = se.css(e, t)),
              I(0, n, s)
          }
      }
  }),
  se.cssHooks.marginLeft = b(oe.reliableMarginLeft, function(e, t) {
      if (t)
          return (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
              marginLeft: 0
          }, function() {
              return e.getBoundingClientRect().left
          })) + "px"
  }),
  se.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      se.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                  i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      },
      Je.test(e) || (se.cssHooks[e + t].set = I)
  }),
  se.fn.extend({
      css: function(e, t) {
          return ve(this, function(e, t, n) {
              var r, i, o = {}, s = 0;
              if (se.isArray(t)) {
                  for (r = Ve(e),
                  i = t.length; s < i; s++)
                      o[t[s]] = se.css(e, t[s], !1, r);
                  return o
              }
              return void 0 !== n ? se.style(e, t, n) : se.css(e, t)
          }, e, t, arguments.length > 1)
      }
  }),
  se.Tween = k,
  (k.prototype = {
      constructor: k,
      init: function(e, t, n, r, i, o) {
          this.elem = e,
          this.prop = n,
          this.easing = i || se.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = r,
          this.unit = o || (se.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = k.propHooks[this.prop];
          return e && e.get ? e.get(this) : k.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = k.propHooks[this.prop];
          return this.options.duration ? this.pos = t = se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : k.propHooks._default.set(this),
          this
      }
  }).init.prototype = k.prototype,
  (k.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = se.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              se.fx.step[e.prop] ? se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[se.cssProps[e.prop]] && !se.cssHooks[e.prop] ? e.elem[e.prop] = e.now : se.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  }).scrollTop = k.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  se.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  },
  se.fx = k.prototype.init,
  se.fx.step = {};
  var it, ot, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
  se.Animation = se.extend(P, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return d(n.elem, e, Ee.exec(t), n),
              n
          }
          ]
      },
      tweener: function(e, t) {
          se.isFunction(e) ? (t = e,
          e = ["*"]) : e = e.match(ge);
          for (var n, r = 0, i = e.length; r < i; r++)
              n = e[r],
              P.tweeners[n] = P.tweeners[n] || [],
              P.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
          var r, i, o, s, u, a, c, l, f = "width"in t || "height"in t, d = this, M = {}, w = e.style, p = e.nodeType && Oe(e), h = me.get(e, "fxshow");
          n.queue || (null == (s = se._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
          u = s.empty.fire,
          s.empty.fire = function() {
              s.unqueued || u()
          }
          ),
          s.unqueued++,
          d.always(function() {
              d.always(function() {
                  s.unqueued--,
                  se.queue(e, "fx").length || s.empty.fire()
              })
          }));
          for (r in t)
              if (i = t[r],
              st.test(i)) {
                  if (delete t[r],
                  o = o || "toggle" === i,
                  i === (p ? "hide" : "show")) {
                      if ("show" !== i || !h || void 0 === h[r])
                          continue;
                      p = !0
                  }
                  M[r] = h && h[r] || se.style(e, r)
              }
          if ((a = !se.isEmptyObject(t)) || !se.isEmptyObject(M)) {
              f && 1 === e.nodeType && (n.overflow = [w.overflow, w.overflowX, w.overflowY],
              null == (c = h && h.display) && (c = me.get(e, "display")),
              "none" === (l = se.css(e, "display")) && (c ? l = c : (L([e], !0),
              c = e.style.display || c,
              l = se.css(e, "display"),
              L([e]))),
              ("inline" === l || "inline-block" === l && null != c) && "none" === se.css(e, "float") && (a || (d.done(function() {
                  w.display = c
              }),
              null == c && (l = w.display,
              c = "none" === l ? "" : l)),
              w.display = "inline-block")),
              n.overflow && (w.overflow = "hidden",
              d.always(function() {
                  w.overflow = n.overflow[0],
                  w.overflowX = n.overflow[1],
                  w.overflowY = n.overflow[2]
              })),
              a = !1;
              for (r in M)
                  a || (h ? "hidden"in h && (p = h.hidden) : h = me.access(e, "fxshow", {
                      display: c
                  }),
                  o && (h.hidden = !p),
                  p && L([e], !0),
                  d.done(function() {
                      p || L([e]),
                      me.remove(e, "fxshow");
                      for (r in M)
                          se.style(e, r, M[r])
                  })),
                  a = _(p ? h[r] : 0, r, d),
                  r in h || (h[r] = a.start,
                  p && (a.end = a.start,
                  a.start = 0))
          }
      }
      ],
      prefilter: function(e, t) {
          t ? P.prefilters.unshift(e) : P.prefilters.push(e)
      }
  }),
  se.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? se.extend({}, e) : {
          complete: n || !n && t || se.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !se.isFunction(t) && t
      };
      return se.fx.off || Z.hidden ? r.duration = 0 : r.duration = "number" == typeof r.duration ? r.duration : r.duration in se.fx.speeds ? se.fx.speeds[r.duration] : se.fx.speeds._default,
      null != r.queue && !0 !== r.queue || (r.queue = "fx"),
      r.old = r.complete,
      r.complete = function() {
          se.isFunction(r.old) && r.old.call(this),
          r.queue && se.dequeue(this, r.queue)
      }
      ,
      r
  }
  ,
  se.fn.extend({
      fadeTo: function(e, t, n, r) {
          return this.filter(Oe).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, r)
      },
      animate: function(e, t, n, r) {
          var i = se.isEmptyObject(e)
            , o = se.speed(t, n, r)
            , s = function() {
              var t = P(this, se.extend({}, e), o);
              (i || me.get(this, "finish")) && t.stop(!0)
          };
          return s.finish = s,
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
          var r = function(e) {
              var t = e.stop;
              delete e.stop,
              t(n)
          };
          return "string" != typeof e && (n = t,
          t = e,
          e = void 0),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
              var t = !0
                , i = null != e && e + "queueHooks"
                , o = se.timers
                , s = me.get(this);
              if (i)
                  s[i] && s[i].stop && r(s[i]);
              else
                  for (i in s)
                      s[i] && s[i].stop && ut.test(i) && r(s[i]);
              for (i = o.length; i--; )
                  o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                  t = !1,
                  o.splice(i, 1));
              !t && n || se.dequeue(this, e)
          })
      },
      finish: function(e) {
          return !1 !== e && (e = e || "fx"),
          this.each(function() {
              var t, n = me.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = se.timers, s = r ? r.length : 0;
              for (n.finish = !0,
              se.queue(this, e, []),
              i && i.stop && i.stop.call(this, !0),
              t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                  o.splice(t, 1));
              for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
          })
      }
  }),
  se.each(["toggle", "show", "hide"], function(e, t) {
      var n = se.fn[t];
      se.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, r, i)
      }
  }),
  se.each({
      slideDown: Q("show"),
      slideUp: Q("hide"),
      slideToggle: Q("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      se.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
      }
  }),
  se.timers = [],
  se.fx.tick = function() {
      var e, t = 0, n = se.timers;
      for (it = se.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || se.fx.stop(),
      it = void 0
  }
  ,
  se.fx.timer = function(e) {
      se.timers.push(e),
      e() ? se.fx.start() : se.timers.pop()
  }
  ,
  se.fx.interval = 13,
  se.fx.start = function() {
      ot || (ot = e.requestAnimationFrame ? e.requestAnimationFrame(Y) : e.setInterval(se.fx.tick, se.fx.interval))
  }
  ,
  se.fx.stop = function() {
      e.cancelAnimationFrame ? e.cancelAnimationFrame(ot) : e.clearInterval(ot),
      ot = null
  }
  ,
  se.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  se.fn.delay = function(t, n) {
      return t = se.fx ? se.fx.speeds[t] || t : t,
      n = n || "fx",
      this.queue(n, function(n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function() {
              e.clearTimeout(i)
          }
      })
  }
  ,
  function() {
      var e = Z.createElement("input")
        , t = Z.createElement("select").appendChild(Z.createElement("option"));
      e.type = "checkbox",
      oe.checkOn = "" !== e.value,
      oe.optSelected = t.selected,
      (e = Z.createElement("input")).value = "t",
      e.type = "radio",
      oe.radioValue = "t" === e.value
  }();
  var at, ct = se.expr.attrHandle;
  se.fn.extend({
      attr: function(e, t) {
          return ve(this, se.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              se.removeAttr(this, e)
          })
      }
  }),
  se.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute ? se.prop(e, t, n) : (1 === o && se.isXMLDoc(e) || (i = se.attrHooks[t.toLowerCase()] || (se.expr.match.bool.test(t) ? at : void 0)),
              void 0 !== n ? null === n ? void se.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
              n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = se.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!oe.radioValue && "radio" === t && se.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0, i = t && t.match(ge);
          if (i && 1 === e.nodeType)
              for (; n = i[r++]; )
                  e.removeAttribute(n)
      }
  }),
  at = {
      set: function(e, t, n) {
          return !1 === t ? se.removeAttr(e, n) : e.setAttribute(n, n),
          n
      }
  },
  se.each(se.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ct[t] || se.find.attr;
      ct[t] = function(e, t, r) {
          var i, o, s = t.toLowerCase();
          return r || (o = ct[s],
          ct[s] = i,
          i = null != n(e, t, r) ? s : null,
          ct[s] = o),
          i
      }
  });
  var lt = /^(?:input|select|textarea|button)$/i
    , ft = /^(?:a|area)$/i;
  se.fn.extend({
      prop: function(e, t) {
          return ve(this, se.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[se.propFix[e] || e]
          })
      }
  }),
  se.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return 1 === o && se.isXMLDoc(e) || (t = se.propFix[t] || t,
              i = se.propHooks[t]),
              void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = se.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : lt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }),
  oe.optSelected || (se.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex,
          null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex)
      }
  }),
  se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      se.propFix[this.toLowerCase()] = this
  });
  var dt = /[\t\r\n\f]/g;
  se.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, s, u, a = 0;
          if (se.isFunction(e))
              return this.each(function(t) {
                  se(this).addClass(e.call(this, t, W(this)))
              });
          if ("string" == typeof e && e)
              for (t = e.match(ge) || []; n = this[a++]; )
                  if (i = W(n),
                  r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                      for (s = 0; o = t[s++]; )
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (u = se.trim(r)) && n.setAttribute("class", u)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, s, u, a = 0;
          if (se.isFunction(e))
              return this.each(function(t) {
                  se(this).removeClass(e.call(this, t, W(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ("string" == typeof e && e)
              for (t = e.match(ge) || []; n = this[a++]; )
                  if (i = W(n),
                  r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                      for (s = 0; o = t[s++]; )
                          for (; r.indexOf(" " + o + " ") > -1; )
                              r = r.replace(" " + o + " ", " ");
                      i !== (u = se.trim(r)) && n.setAttribute("class", u)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : se.isFunction(e) ? this.each(function(n) {
              se(this).toggleClass(e.call(this, n, W(this), t), t)
          }) : this.each(function() {
              var t, r, i, o;
              if ("string" === n)
                  for (r = 0,
                  i = se(this),
                  o = e.match(ge) || []; t = o[r++]; )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else
                  void 0 !== e && "boolean" !== n || ((t = W(this)) && me.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : me.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++]; )
              if (1 === n.nodeType && (" " + W(n) + " ").replace(dt, " ").indexOf(t) > -1)
                  return !0;
          return !1
      }
  });
  var Mt = /\r/g
    , Lt = /[\x20\t\r\n\f]+/g;
  se.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0];
          if (arguments.length)
              return r = se.isFunction(e),
              this.each(function(n) {
                  var i;
                  1 === this.nodeType && (null == (i = r ? e.call(this, n, se(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : se.isArray(i) && (i = se.map(i, function(e) {
                      return null == e ? "" : e + ""
                  })),
                  (t = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
              });
          if (i)
              return (t = se.valHooks[i.type] || se.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Mt, "") : null == n ? "" : n
      }
  }),
  se.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = se.find.attr(e, "value");
                  return null != t ? t : se.trim(se.text(e)).replace(Lt, " ")
              }
          },
          select: {
              get: function(e) {
                  for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, s = o ? null : [], u = o ? i + 1 : r.length, a = i < 0 ? u : o ? i : 0; a < u; a++)
                      if (((n = r[a]).selected || a === i) && !n.disabled && (!n.parentNode.disabled || !se.nodeName(n.parentNode, "optgroup"))) {
                          if (t = se(n).val(),
                          o)
                              return t;
                          s.push(t)
                      }
                  return s
              },
              set: function(e, t) {
                  for (var n, r, i = e.options, o = se.makeArray(t), s = i.length; s--; )
                      ((r = i[s]).selected = se.inArray(se.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1),
                  o
              }
          }
      }
  }),
  se.each(["radio", "checkbox"], function() {
      se.valHooks[this] = {
          set: function(e, t) {
              if (se.isArray(t))
                  return e.checked = se.inArray(se(e).val(), t) > -1
          }
      },
      oe.checkOn || (se.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  });
  var wt = /^(?:focusinfocus|focusoutblur)$/;
  se.extend(se.event, {
      trigger: function(t, n, r, i) {
          var o, s, u, a, c, l, f, d = [r || Z], M = ne.call(t, "type") ? t.type : t, L = ne.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = u = r = r || Z,
          3 !== r.nodeType && 8 !== r.nodeType && !wt.test(M + se.event.triggered) && (M.indexOf(".") > -1 && (M = (L = M.split(".")).shift(),
          L.sort()),
          c = M.indexOf(":") < 0 && "on" + M,
          t = t[se.expando] ? t : new se.Event(M,"object" == typeof t && t),
          t.isTrigger = i ? 2 : 3,
          t.namespace = L.join("."),
          t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = void 0,
          t.target || (t.target = r),
          n = null == n ? [t] : se.makeArray(n, [t]),
          f = se.event.special[M] || {},
          i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
              if (!i && !f.noBubble && !se.isWindow(r)) {
                  for (a = f.delegateType || M,
                  wt.test(a + M) || (s = s.parentNode); s; s = s.parentNode)
                      d.push(s),
                      u = s;
                  u === (r.ownerDocument || Z) && d.push(u.defaultView || u.parentWindow || e)
              }
              for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
                  t.type = o > 1 ? a : f.bindType || M,
                  (l = (me.get(s, "events") || {})[t.type] && me.get(s, "handle")) && l.apply(s, n),
                  (l = c && s[c]) && l.apply && xe(s) && (t.result = l.apply(s, n),
                  !1 === t.result && t.preventDefault());
              return t.type = M,
              i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !xe(r) || c && se.isFunction(r[M]) && !se.isWindow(r) && ((u = r[c]) && (r[c] = null),
              se.event.triggered = M,
              r[M](),
              se.event.triggered = void 0,
              u && (r[c] = u)),
              t.result
          }
      },
      simulate: function(e, t, n) {
          var r = se.extend(new se.Event, n, {
              type: e,
              isSimulated: !0
          });
          se.event.trigger(r, null, t)
      }
  }),
  se.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              se.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
              return se.event.trigger(e, t, n, !0)
      }
  }),
  se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      se.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }),
  se.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }),
  oe.focusin = "onfocusin"in e,
  oe.focusin || se.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          se.event.simulate(t, e.target, se.event.fix(e))
      };
      se.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this
                , i = me.access(r, t);
              i || r.addEventListener(e, n, !0),
              me.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this
                , i = me.access(r, t) - 1;
              i ? me.access(r, t, i) : (r.removeEventListener(e, n, !0),
              me.remove(r, t))
          }
      }
  });
  var pt = e.location
    , ht = se.now()
    , yt = /\?/;
  se.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t)
          return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + t),
      n
  }
  ;
  var Dt = /\[\]$/
    , jt = /\r?\n/g
    , gt = /^(?:submit|button|image|reset|file)$/i
    , Ct = /^(?:input|select|textarea|keygen)/i;
  se.param = function(e, t) {
      var n, r = [], i = function(e, t) {
          var n = se.isFunction(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
      if (se.isArray(e) || e.jquery && !se.isPlainObject(e))
          se.each(e, function() {
              i(this.name, this.value)
          });
      else
          for (n in e)
              H(n, e[n], t, i);
      return r.join("&")
  }
  ,
  se.fn.extend({
      serialize: function() {
          return se.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = se.prop(this, "elements");
              return e ? se.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !se(this).is(":disabled") && Ct.test(this.nodeName) && !gt.test(e) && (this.checked || !Ye.test(e))
          }).map(function(e, t) {
              var n = se(this).val();
              return null == n ? null : se.isArray(n) ? se.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(jt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(jt, "\r\n")
              }
          }).get()
      }
  });
  var Nt = /%20/g
    , vt = /#.*$/
    , xt = /([?&])_=[^&]*/
    , mt = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , At = /^(?:GET|HEAD)$/
    , St = /^\/\//
    , Tt = {}
    , bt = {}
    , Et = "*/".concat("*")
    , It = Z.createElement("a");
  It.href = pt.href,
  se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: pt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Et,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": se.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? F(F(e, se.ajaxSettings), t) : F(se.ajaxSettings, e)
      },
      ajaxPrefilter: R(Tt),
      ajaxTransport: R(bt),
      ajax: function(t, n) {
          function r(t, n, r, u) {
              var c, d, M, j, g, C = n;
              l || (l = !0,
              a && e.clearTimeout(a),
              i = void 0,
              s = u || "",
              N.readyState = t > 0 ? 4 : 0,
              c = t >= 200 && t < 300 || 304 === t,
              r && (j = function(e, t, n) {
                  for (var r, i, o, s, u = e.contents, a = e.dataTypes; "*" === a[0]; )
                      a.shift(),
                      void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                      for (i in u)
                          if (u[i] && u[i].test(r)) {
                              a.unshift(i);
                              break
                          }
                  if (a[0]in n)
                      o = a[0];
                  else {
                      for (i in n) {
                          if (!a[0] || e.converters[i + " " + a[0]]) {
                              o = i;
                              break
                          }
                          s || (s = i)
                      }
                      o = o || s
                  }
                  if (o)
                      return o !== a[0] && a.unshift(o),
                      n[o]
              }(L, N, r)),
              j = function(e, t, n, r) {
                  var i, o, s, u, a, c = {}, l = e.dataTypes.slice();
                  if (l[1])
                      for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                  for (o = l.shift(); o; )
                      if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      a = o,
                      o = l.shift())
                          if ("*" === o)
                              o = a;
                          else if ("*" !== a && a !== o) {
                              if (!(s = c[a + " " + o] || c["* " + o]))
                                  for (i in c)
                                      if ((u = i.split(" "))[1] === o && (s = c[a + " " + u[0]] || c["* " + u[0]])) {
                                          !0 === s ? s = c[i] : !0 !== c[i] && (o = u[0],
                                          l.unshift(u[1]));
                                          break
                                      }
                              if (!0 !== s)
                                  if (s && e.throws)
                                      t = s(t);
                                  else
                                      try {
                                          t = s(t)
                                      } catch (e) {
                                          return {
                                              state: "parsererror",
                                              error: s ? e : "No conversion from " + a + " to " + o
                                          }
                                      }
                          }
                  return {
                      state: "success",
                      data: t
                  }
              }(L, j, N, c),
              c ? (L.ifModified && ((g = N.getResponseHeader("Last-Modified")) && (se.lastModified[o] = g),
              (g = N.getResponseHeader("etag")) && (se.etag[o] = g)),
              204 === t || "HEAD" === L.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = j.state,
              d = j.data,
              c = !(M = j.error))) : (M = C,
              !t && C || (C = "error",
              t < 0 && (t = 0))),
              N.status = t,
              N.statusText = (n || C) + "",
              c ? h.resolveWith(w, [d, C, N]) : h.rejectWith(w, [N, C, M]),
              N.statusCode(D),
              D = void 0,
              f && p.trigger(c ? "ajaxSuccess" : "ajaxError", [N, L, c ? d : M]),
              y.fireWith(w, [N, C]),
              f && (p.trigger("ajaxComplete", [N, L]),
              --se.active || se.event.trigger("ajaxStop")))
          }
          "object" == typeof t && (n = t,
          t = void 0),
          n = n || {};
          var i, o, s, u, a, c, l, f, d, M, L = se.ajaxSetup({}, n), w = L.context || L, p = L.context && (w.nodeType || w.jquery) ? se(w) : se.event, h = se.Deferred(), y = se.Callbacks("once memory"), D = L.statusCode || {}, j = {}, g = {}, C = "canceled", N = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (l) {
                      if (!u)
                          for (u = {}; t = mt.exec(s); )
                              u[t[1].toLowerCase()] = t[2];
                      t = u[e.toLowerCase()]
                  }
                  return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                  return l ? s : null
              },
              setRequestHeader: function(e, t) {
                  return null == l && (e = g[e.toLowerCase()] = g[e.toLowerCase()] || e,
                  j[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return null == l && (L.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (l)
                          N.always(e[N.status]);
                      else
                          for (t in e)
                              D[t] = [D[t], e[t]];
                  return this
              },
              abort: function(e) {
                  var t = e || C;
                  return i && i.abort(t),
                  r(0, t),
                  this
              }
          };
          if (h.promise(N),
          L.url = ((t || L.url || pt.href) + "").replace(St, pt.protocol + "//"),
          L.type = n.method || n.type || L.method || L.type,
          L.dataTypes = (L.dataType || "*").toLowerCase().match(ge) || [""],
          null == L.crossDomain) {
              c = Z.createElement("a");
              try {
                  c.href = L.url,
                  c.href = c.href,
                  L.crossDomain = It.protocol + "//" + It.host != c.protocol + "//" + c.host
              } catch (e) {
                  L.crossDomain = !0
              }
          }
          if (L.data && L.processData && "string" != typeof L.data && (L.data = se.param(L.data, L.traditional)),
          B(Tt, L, n, N),
          l)
              return N;
          (f = se.event && L.global) && 0 == se.active++ && se.event.trigger("ajaxStart"),
          L.type = L.type.toUpperCase(),
          L.hasContent = !At.test(L.type),
          o = L.url.replace(vt, ""),
          L.hasContent ? L.data && L.processData && 0 === (L.contentType || "").indexOf("application/x-www-form-urlencoded") && (L.data = L.data.replace(Nt, "+")) : (M = L.url.slice(o.length),
          L.data && (o += (yt.test(o) ? "&" : "?") + L.data,
          delete L.data),
          !1 === L.cache && (o = o.replace(xt, ""),
          M = (yt.test(o) ? "&" : "?") + "_=" + ht++ + M),
          L.url = o + M),
          L.ifModified && (se.lastModified[o] && N.setRequestHeader("If-Modified-Since", se.lastModified[o]),
          se.etag[o] && N.setRequestHeader("If-None-Match", se.etag[o])),
          (L.data && L.hasContent && !1 !== L.contentType || n.contentType) && N.setRequestHeader("Content-Type", L.contentType),
          N.setRequestHeader("Accept", L.dataTypes[0] && L.accepts[L.dataTypes[0]] ? L.accepts[L.dataTypes[0]] + ("*" !== L.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : L.accepts["*"]);
          for (d in L.headers)
              N.setRequestHeader(d, L.headers[d]);
          if (L.beforeSend && (!1 === L.beforeSend.call(w, N, L) || l))
              return N.abort();
          if (C = "abort",
          y.add(L.complete),
          N.done(L.success),
          N.fail(L.error),
          i = B(bt, L, n, N)) {
              if (N.readyState = 1,
              f && p.trigger("ajaxSend", [N, L]),
              l)
                  return N;
              L.async && L.timeout > 0 && (a = e.setTimeout(function() {
                  N.abort("timeout")
              }, L.timeout));
              try {
                  l = !1,
                  i.send(j, r)
              } catch (e) {
                  if (l)
                      throw e;
                  r(-1, e)
              }
          } else
              r(-1, "No Transport");
          return N
      },
      getJSON: function(e, t, n) {
          return se.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return se.get(e, void 0, t, "script")
      }
  }),
  se.each(["get", "post"], function(e, t) {
      se[t] = function(e, n, r, i) {
          return se.isFunction(n) && (i = i || r,
          r = n,
          n = void 0),
          se.ajax(se.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          }, se.isPlainObject(e) && e))
      }
  }),
  se._evalUrl = function(e) {
      return se.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
      })
  }
  ,
  se.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (se.isFunction(e) && (e = e.call(this[0])),
          t = se(e, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && t.insertBefore(this[0]),
          t.map(function() {
              for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
              return e
          }).append(this)),
          this
      },
      wrapInner: function(e) {
          return se.isFunction(e) ? this.each(function(t) {
              se(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = se(this)
                , n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = se.isFunction(e);
          return this.each(function(n) {
              se(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              se(this).replaceWith(this.childNodes)
          }),
          this
      }
  }),
  se.expr.pseudos.hidden = function(e) {
      return !se.expr.pseudos.visible(e)
  }
  ,
  se.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }
  ,
  se.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (e) {}
  }
  ;
  var Ot = {
      0: 200,
      1223: 204
  }
    , zt = se.ajaxSettings.xhr();
  oe.cors = !!zt && "withCredentials"in zt,
  oe.ajax = zt = !!zt,
  se.ajaxTransport(function(t) {
      var n, r;
      if (oe.cors || zt && !t.crossDomain)
          return {
              send: function(i, o) {
                  var s, u = t.xhr();
                  if (u.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                      for (s in t.xhrFields)
                          u[s] = t.xhrFields[s];
                  t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType),
                  t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                  for (s in i)
                      u.setRequestHeader(s, i[s]);
                  n = function(e) {
                      return function() {
                          n && (n = r = u.onload = u.onerror = u.onabort = u.onreadystatechange = null,
                          "abort" === e ? u.abort() : "error" === e ? "number" != typeof u.status ? o(0, "error") : o(u.status, u.statusText) : o(Ot[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
                              binary: u.response
                          } : {
                              text: u.responseText
                          }, u.getAllResponseHeaders()))
                      }
                  }
                  ,
                  u.onload = n(),
                  r = u.onerror = n("error"),
                  void 0 !== u.onabort ? u.onabort = r : u.onreadystatechange = function() {
                      4 === u.readyState && e.setTimeout(function() {
                          n && r()
                      })
                  }
                  ,
                  n = n("abort");
                  try {
                      u.send(t.hasContent && t.data || null)
                  } catch (e) {
                      if (n)
                          throw e
                  }
              },
              abort: function() {
                  n && n()
              }
          }
  }),
  se.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }),
  se.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return se.globalEval(e),
              e
          }
      }
  }),
  se.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
  }),
  se.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(r, i) {
                  t = se("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(),
                      n = null,
                      e && i("error" === e.type ? 404 : 200, e.type)
                  }
                  ),
                  Z.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var kt = []
    , Yt = /(=)\?(?=&|$)|\?\?/;
  se.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = kt.pop() || se.expando + "_" + ht++;
          return this[e] = !0,
          e
      }
  }),
  se.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, s, u = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
      if (u || "jsonp" === t.dataTypes[0])
          return i = t.jsonpCallback = se.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          u ? t[u] = t[u].replace(Yt, "$1" + i) : !1 !== t.jsonp && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          t.converters["script json"] = function() {
              return s || se.error(i + " was not called"),
              s[0]
          }
          ,
          t.dataTypes[0] = "json",
          o = e[i],
          e[i] = function() {
              s = arguments
          }
          ,
          r.always(function() {
              void 0 === o ? se(e).removeProp(i) : e[i] = o,
              t[i] && (t.jsonpCallback = n.jsonpCallback,
              kt.push(i)),
              s && se.isFunction(o) && o(s[0]),
              s = o = void 0
          }),
          "script"
  }),
  oe.createHTMLDocument = function() {
      var e = Z.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>",
      2 === e.childNodes.length
  }(),
  se.parseHTML = function(e, t, n) {
      if ("string" != typeof e)
          return [];
      "boolean" == typeof t && (n = t,
      t = !1);
      var r, i, o;
      return t || (oe.createHTMLDocument ? ((r = (t = Z.implementation.createHTMLDocument("")).createElement("base")).href = Z.location.href,
      t.head.appendChild(r)) : t = Z),
      i = we.exec(e),
      o = !n && [],
      i ? [t.createElement(i[1])] : (i = h([e], t, o),
      o && o.length && se(o).remove(),
      se.merge([], i.childNodes))
  }
  ,
  se.fn.load = function(e, t, n) {
      var r, i, o, s = this, u = e.indexOf(" ");
      return u > -1 && (r = se.trim(e.slice(u)),
      e = e.slice(0, u)),
      se.isFunction(t) ? (n = t,
      t = void 0) : t && "object" == typeof t && (i = "POST"),
      s.length > 0 && se.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments,
          s.html(r ? se("<div>").append(se.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
          s.each(function() {
              n.apply(this, o || [e.responseText, t, e])
          })
      }
      ),
      this
  }
  ,
  se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      se.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  se.expr.pseudos.animated = function(e) {
      return se.grep(se.timers, function(t) {
          return e === t.elem
      }).length
  }
  ,
  se.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, s, u, a, c = se.css(e, "position"), l = se(e), f = {};
          "static" === c && (e.style.position = "relative"),
          u = l.offset(),
          o = se.css(e, "top"),
          a = se.css(e, "left"),
          ("absolute" === c || "fixed" === c) && (o + a).indexOf("auto") > -1 ? (s = (r = l.position()).top,
          i = r.left) : (s = parseFloat(o) || 0,
          i = parseFloat(a) || 0),
          se.isFunction(t) && (t = t.call(e, n, se.extend({}, u))),
          null != t.top && (f.top = t.top - u.top + s),
          null != t.left && (f.left = t.left - u.left + i),
          "using"in t ? t.using.call(e, f) : l.css(f)
      }
  },
  se.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return void 0 === e ? this : this.each(function(t) {
                  se.offset.setOffset(this, e, t)
              });
          var t, n, r, i, o = this[0];
          if (o)
              return o.getClientRects().length ? (r = o.getBoundingClientRect()).width || r.height ? (i = o.ownerDocument,
              n = $(i),
              t = i.documentElement,
              {
                  top: r.top + n.pageYOffset - t.clientTop,
                  left: r.left + n.pageXOffset - t.clientLeft
              }) : r : {
                  top: 0,
                  left: 0
              }
      },
      position: function() {
          if (this[0]) {
              var e, t, n = this[0], r = {
                  top: 0,
                  left: 0
              };
              return "fixed" === se.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
              t = this.offset(),
              se.nodeName(e[0], "html") || (r = e.offset()),
              r = {
                  top: r.top + se.css(e[0], "borderTopWidth", !0),
                  left: r.left + se.css(e[0], "borderLeftWidth", !0)
              }),
              {
                  top: t.top - r.top - se.css(n, "marginTop", !0),
                  left: t.left - r.left - se.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent; e && "static" === se.css(e, "position"); )
                  e = e.offsetParent;
              return e || We
          })
      }
  }),
  se.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var n = "pageYOffset" === t;
      se.fn[e] = function(r) {
          return ve(this, function(e, r, i) {
              var o = $(e);
              if (void 0 === i)
                  return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
      }
  }),
  se.each(["top", "left"], function(e, t) {
      se.cssHooks[t] = b(oe.pixelPosition, function(e, n) {
          if (n)
              return n = T(e, t),
              Xe.test(n) ? se(e).position()[t] + "px" : n
      })
  }),
  se.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      se.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          se.fn[r] = function(i, o) {
              var s = arguments.length && (n || "boolean" != typeof i)
                , u = n || (!0 === i || !0 === o ? "margin" : "border");
              return ve(this, function(t, n, i) {
                  var o;
                  return se.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                  Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? se.css(t, n, u) : se.style(t, n, i, u)
              }, t, s ? i : void 0, s)
          }
      })
  }),
  se.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }),
  se.parseJSON = JSON.parse,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return se
  });
  var Ut = e.jQuery
    , Qt = e.$;
  return se.noConflict = function(t) {
      return e.$ === se && (e.$ = Qt),
      t && e.jQuery === se && (e.jQuery = Ut),
      se
  }
  ,
  t || (e.jQuery = e.$ = se),
  se
}),
function(e, t, n) {
  function r(e, t) {
      return typeof e === t
  }
  function i() {
      return "function" != typeof t.createElement ? t.createElement(arguments[0]) : l ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }
  var o = []
    , s = []
    , u = {
      _version: "3.5.0",
      _config: {
          classPrefix: "modernizr-",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
          var n = this;
          setTimeout(function() {
              t(n[e])
          }, 0)
      },
      addTest: function(e, t, n) {
          s.push({
              name: e,
              fn: t,
              options: n
          })
      },
      addAsyncTest: function(e) {
          s.push({
              name: null,
              fn: e
          })
      }
  }
    , a = function() {};
  a.prototype = u,
  a = new a;
  var c = t.documentElement
    , l = "svg" === c.nodeName.toLowerCase()
    , f = u._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  u._prefixes = f;
  var d = u.testStyles = function(e, n, r, o) {
      var s, u, a, f, d = i("div"), M = function() {
          var e = t.body;
          return e || ((e = i(l ? "svg" : "body")).fake = !0),
          e
      }();
      if (parseInt(r, 10))
          for (; r--; )
              (a = i("div")).id = o ? o[r] : "modernizr" + (r + 1),
              d.appendChild(a);
      return s = i("style"),
      s.type = "text/css",
      s.id = "smodernizr",
      (M.fake ? M : d).appendChild(s),
      M.appendChild(d),
      s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)),
      d.id = "modernizr",
      M.fake && (M.style.background = "",
      M.style.overflow = "hidden",
      f = c.style.overflow,
      c.style.overflow = "hidden",
      c.appendChild(M)),
      u = n(d, e),
      M.fake ? (M.parentNode.removeChild(M),
      c.style.overflow = f,
      c.offsetHeight) : d.parentNode.removeChild(d),
      !!u
  }
  ;
  a.addTest("touchevents", function() {
      var n;
      if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
          n = !0;
      else {
          var r = ["@media (", f.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
          d(r, function(e) {
              n = 9 === e.offsetTop
          })
      }
      return n
  }),
  function() {
      var e, t, n, i, u, c;
      for (var l in s)
          if (s.hasOwnProperty(l)) {
              if (e = [],
              (t = s[l]).name && (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
                  for (n = 0; n < t.options.aliases.length; n++)
                      e.push(t.options.aliases[n].toLowerCase());
              for (i = r(t.fn, "function") ? t.fn() : t.fn,
              u = 0; u < e.length; u++)
                  1 === (c = e[u].split(".")).length ? a[c[0]] = i : (!a[c[0]] || a[c[0]]instanceof Boolean || (a[c[0]] = new Boolean(a[c[0]])),
                  a[c[0]][c[1]] = i),
                  o.push((i ? "" : "no-") + c.join("-"))
          }
  }(),
  function(e) {
      var t = c.className
        , n = a._config.classPrefix || "";
      if (l && (t = t.baseVal),
      a._config.enableJSClass) {
          var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
          t = t.replace(r, "$1" + n + "js$2")
      }
      a._config.enableClasses && (t += " " + n + e.join(" " + n),
      l ? c.className.baseVal = t : c.className = t)
  }(o),
  delete u.addTest,
  delete u.addAsyncTest;
  for (var M = 0; M < a._q.length; M++)
      a._q[M]();
  e.Modernizr = a
}(window, document),
function(e) {
  "use strict";
  function t(t) {
      t && 3 === t.which || (e(r).remove(),
      e(i).each(function() {
          var r = e(this)
            , i = n(r)
            , o = {
              relatedTarget: this
          };
          i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", o)),
          t.isDefaultPrevented() || (r.attr("aria-expanded", "false"),
          i.removeClass("open").trigger("hidden.bs.dropdown", o)))
      }))
  }
  function n(t) {
      var n = t.attr("data-target");
      n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var r = n && e(n);
      return r && r.length ? r : t.parent()
  }
  var r = ".dropdown-backdrop"
    , i = '[data-toggle="dropdown"]'
    , o = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
  };
  o.VERSION = "3.3.4",
  o.prototype.toggle = function(r) {
      var i = e(this);
      if (!i.is(".disabled, :disabled")) {
          var o = n(i)
            , s = o.hasClass("open");
          if (t(),
          !s) {
              "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
              var u = {
                  relatedTarget: this
              };
              if (o.trigger(r = e.Event("show.bs.dropdown", u)),
              r.isDefaultPrevented())
                  return;
              i.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger("shown.bs.dropdown", u)
          }
          return !1
      }
  }
  ,
  o.prototype.keydown = function(t) {
      if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
          var r = e(this);
          if (t.preventDefault(),
          t.stopPropagation(),
          !r.is(".disabled, :disabled")) {
              var o = n(r)
                , s = o.hasClass("open");
              if (!s && 27 != t.which || s && 27 == t.which)
                  return 27 == t.which && o.find(i).trigger("focus"),
                  r.trigger("click");
              var u = " li:not(.disabled):visible a"
                , a = o.find('[role="menu"]' + u + ', [role="listbox"]' + u);
              if (a.length) {
                  var c = a.index(t.target);
                  38 == t.which && c > 0 && c--,
                  40 == t.which && c < a.length - 1 && c++,
                  ~c || (c = 0),
                  a.eq(c).trigger("focus")
              }
          }
      }
  }
  ;
  var s = e.fn.dropdown;
  e.fn.dropdown = function(t) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.dropdown");
          r || n.data("bs.dropdown", r = new o(this)),
          "string" == typeof t && r[t].call(n)
      })
  }
  ,
  e.fn.dropdown.Constructor = o,
  e.fn.dropdown.noConflict = function() {
      return e.fn.dropdown = s,
      this
  }
  ,
  e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
      e.stopPropagation()
  }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
}(jQuery),
function(e) {
  "use strict";
  function t(t, r) {
      return this.each(function() {
          var i = e(this)
            , o = i.data("bs.modal")
            , s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
          o || i.data("bs.modal", o = new n(this,s)),
          "string" == typeof t ? o[t](r) : s.show && o.show(r)
      })
  }
  var n = function(t, n) {
      this.options = n,
      this.$body = e(document.body),
      this.$element = e(t),
      this.$dialog = this.$element.find(".modal-dialog"),
      this.$backdrop = null,
      this.isShown = null,
      this.originalBodyPad = null,
      this.scrollbarWidth = 0,
      this.ignoreBackdropClick = !1,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
      }, this))
  };
  n.VERSION = "3.3.4",
  n.TRANSITION_DURATION = 300,
  n.BACKDROP_TRANSITION_DURATION = 150,
  n.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  },
  n.prototype.toggle = function(e) {
      return this.isShown ? this.hide() : this.show(e)
  }
  ,
  n.prototype.show = function(t) {
      var r = this
        , i = e.Event("show.bs.modal", {
          relatedTarget: t
      });
      this.$element.trigger(i),
      this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
      this.checkScrollbar(),
      this.setScrollbar(),
      this.$body.addClass("modal-open"),
      this.escape(),
      this.resize(),
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
      this.$dialog.on("mousedown.dismiss.bs.modal", function() {
          r.$element.one("mouseup.dismiss.bs.modal", function(t) {
              e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
          })
      }),
      this.backdrop(function() {
          var i = e.support.transition && r.$element.hasClass("fade");
          r.$element.parent().length || r.$element.appendTo(r.$body),
          r.$element.show().scrollTop(0),
          r.adjustDialog(),
          i && r.$element[0].offsetWidth,
          r.$element.addClass("in").attr("aria-hidden", !1),
          r.enforceFocus();
          var o = e.Event("shown.bs.modal", {
              relatedTarget: t
          });
          i ? r.$dialog.one("bsTransitionEnd", function() {
              r.$element.trigger("focus").trigger(o)
          }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
      }))
  }
  ,
  n.prototype.hide = function(t) {
      t && t.preventDefault(),
      t = e.Event("hide.bs.modal"),
      this.$element.trigger(t),
      this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
      this.escape(),
      this.resize(),
      e(document).off("focusin.bs.modal"),
      this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
      this.$dialog.off("mousedown.dismiss.bs.modal"),
      e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }
  ,
  n.prototype.enforceFocus = function() {
      e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
          this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
      }, this))
  }
  ,
  n.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
          27 == e.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }
  ,
  n.prototype.resize = function() {
      this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
  }
  ,
  n.prototype.hideModal = function() {
      var e = this;
      this.$element.hide(),
      this.backdrop(function() {
          e.$body.removeClass("modal-open"),
          e.resetAdjustments(),
          e.resetScrollbar(),
          e.$element.trigger("hidden.bs.modal")
      })
  }
  ,
  n.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(),
      this.$backdrop = null
  }
  ,
  n.prototype.backdrop = function(t) {
      var r = this
        , i = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
          var o = e.support.transition && i;
          if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body),
          this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
              this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
          }, this)),
          o && this.$backdrop[0].offsetWidth,
          this.$backdrop.addClass("in"),
          !t)
              return;
          o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
      } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function() {
              r.removeBackdrop(),
              t && t()
          };
          e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
      } else
          t && t()
  }
  ,
  n.prototype.handleUpdate = function() {
      this.adjustDialog()
  }
  ,
  n.prototype.adjustDialog = function() {
      var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
      })
  }
  ,
  n.prototype.resetAdjustments = function() {
      this.$element.css({
          paddingLeft: "",
          paddingRight: ""
      })
  }
  ,
  n.prototype.checkScrollbar = function() {
      var e = window.innerWidth;
      if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < e,
      this.scrollbarWidth = this.measureScrollbar()
  }
  ,
  n.prototype.setScrollbar = function() {
      var e = parseInt(this.$body.css("padding-right") || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || "",
      this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
  }
  ,
  n.prototype.resetScrollbar = function() {
      this.$body.css("padding-right", this.originalBodyPad)
  }
  ,
  n.prototype.measureScrollbar = function() {
      var e = document.createElement("div");
      e.className = "modal-scrollbar-measure",
      this.$body.append(e);
      var t = e.offsetWidth - e.clientWidth;
      return this.$body[0].removeChild(e),
      t
  }
  ;
  var r = e.fn.modal;
  e.fn.modal = t,
  e.fn.modal.Constructor = n,
  e.fn.modal.noConflict = function() {
      return e.fn.modal = r,
      this
  }
  ,
  e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
      var r = e(this)
        , i = r.attr("href")
        , o = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
        , s = o.data("bs.modal") ? "toggle" : e.extend({
          remote: !/#/.test(i) && i
      }, o.data(), r.data());
      r.is("a") && n.preventDefault(),
      o.one("show.bs.modal", function(e) {
          e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
              r.is(":visible") && r.trigger("focus")
          })
      }),
      t.call(o, s, this)
  })
}(jQuery),
function(e) {
  "use strict";
  e.fn.emulateTransitionEnd = function(t) {
      var n = !1
        , r = this;
      e(this).one("bsTransitionEnd", function() {
          n = !0
      });
      return setTimeout(function() {
          n || e(r).trigger(e.support.transition.end)
      }, t),
      this
  }
  ,
  e(function() {
      e.support.transition = function() {
          var e = document.createElement("bootstrap")
            , t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend"
          };
          for (var n in t)
              if (void 0 !== e.style[n])
                  return {
                      end: t[n]
                  };
          return !1
      }(),
      e.support.transition && (e.event.special.bsTransitionEnd = {
          bindType: e.support.transition.end,
          delegateType: e.support.transition.end,
          handle: function(t) {
              if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments)
          }
      })
  })
}(jQuery),
function() {
  "use strict";
  function e(e) {
      return new Promise(function(t, n) {
          var r = new Image;
          r.src = e,
          r.onload = function() {
              return t(r)
          }
          ,
          r.onerror = function(e) {
              return n(e)
          }
      }
      )
  }
  function t(e, t) {
      return t = {
          exports: {}
      },
      e(t, t.exports),
      t.exports
  }
  function n(e) {
      if ("string" == typeof e)
          return e;
      if (st(e))
          return ot(e, n) + "";
      if (Re(e))
          return ct ? ct.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -ut ? "-0" : t
  }
  function r(e, t) {
      for (var n = [], r = new Array(10), i = 0, o = t.length; i < o; i++) {
          var s = t[i]
            , u = e[s].number;
          null != u && (null != r[u] ? (-1 === n.indexOf(r[u]) && n.push(r[u]),
          n.push(s)) : r[u] = s)
      }
      return n
  }
  function i(e) {
      for (var t = [], n = 0; n < 9; n++)
          r(e, St(n)).forEach(function(n) {
              return t[n] = e[n].number
          }),
          r(e, Tt(n)).forEach(function(n) {
              return t[n] = e[n].number
          }),
          r(e, bt(n)).forEach(function(n) {
              return t[n] = e[n].number
          });
      return t
  }
  function o(e) {
      return function(e) {
          for (var t = 0; t < 81; t++)
              if (Ct(e[t]))
                  return !1;
          return !0
      }(e) && 0 === i(e).length
  }
  function s() {
      var e = document.getElementById("sudokuBoard")
        , t = e.parentNode
        , n = t.clientWidth * window.devicePixelRatio
        , r = t.clientHeight * window.devicePixelRatio;
      return e.width = n,
      e.height = r,
      [n, r]
  }
  function u() {
      var e = document.getElementById("sudokuBoard")
        , t = e.width
        , n = e.height
        , r = t - 2 * Et
        , i = n - 2 * Et;
      return {
          canvas: e,
          w: t,
          h: n,
          iw: r,
          ih: i,
          s: Math.min(r, i),
          x: Et + (t < n ? 0 : (t - n) / 2),
          y: Et + (t > n ? 0 : (n - t) / 2)
      }
  }
  function a(e, t, n, r) {
      e.translate(t, n),
      r(),
      e.translate(-t, -n)
  }
  function c(e, t) {
      e.lineWidth = t * window.devicePixelRatio
  }
  function l(e, t) {
      var n = Math.floor(e / 9);
      return {
          x: (e - 9 * n) * t,
          y: n * t
      }
  }
  function f() {
      return performance.now()
  }
  function d(e, t, n, r, i) {
      var o = l(r, n)
        , s = o.x
        , u = o.y;
      a(t, s, u, function() {
          t.fillStyle = function(e) {
              var t = l(e, 1 / 3)
                , n = t.x
                , r = t.y;
              return (3 * Math.floor(r) + Math.floor(n)) % 2 ? Ot : It
          }(r),
          t.fillRect(Qt * n, _t * n, Pt * n, Wt * n),
          t.globalAlpha = i,
          t.drawImage(e.get(Ut, n, n), 0, 0, n, n),
          t.globalAlpha = 1
      })
  }
  function M(e, t) {
      var n = u()
        , r = n.canvas
        , o = n.w
        , s = n.h
        , d = n.s
        , M = n.x
        , h = n.y
        , y = t.board
        , D = t.cursor
        , j = r.getContext("2d");
      j.fillStyle = It,
      j.fillRect(0, 0, o, s),
      a(j, M, h, function() {
          var t = d / 9;
          !function(e, t) {
              e.fillStyle = Ot,
              e.fillRect(3 * t, 0, 3 * t, 3 * t),
              e.fillRect(0 * t, 3 * t, 3 * t, 3 * t),
              e.fillRect(6 * t, 3 * t, 3 * t, 3 * t),
              e.fillRect(3 * t, 6 * t, 3 * t, 3 * t)
          }(j, t),
          function(e, t, n, r) {
              r.forEach(function(r, i) {
                  var o = l(i, n)
                    , s = o.x
                    , u = o.y;
                  a(t, s, u, function() {
                      return function(e, t, n, r) {
                          Nt(r) ? t.drawImage(e.get(r.number - 1, n, n), 0, 0, n, n) : vt(r) ? t.drawImage(e.get(r.number + 8, n, n), 0, 0, n, n) : Ct(r) && function(e, t, n, r) {
                              var i = n / 3;
                              r.forEach(function(n, r) {
                                  if (Ft || n) {
                                      var o = Math.floor(r / 3)
                                        , s = r - 3 * o;
                                      t.globalAlpha = n ? 1 : .05;
                                      t.drawImage(e.get(r + 9, 1.1 * i, 1.1 * i), s * i - (s - 1) * i * .1 - i * (1.1 - 1) / 2, o * i - (o - 1) * i * .1 - i * (1.1 - 1) / 2, 1.1 * i, 1.1 * i),
                                      t.globalAlpha = 1
                                  }
                              })
                          }(e, t, n, r.notes)
                      }(e, t, n, r)
                  })
              })
          }(e, j, t, y),
          function(e, t) {
              c(e, 1);
              for (var n = 0; n < 10; n++)
                  L(e, t, n, zt);
              for (var r = 0; r < 10; r++)
                  w(e, t, r, zt);
              for (var i = 3; i < 9; i += 3)
                  L(e, t, i, kt);
              for (var o = 3; o < 9; o += 3)
                  w(e, t, o, kt)
          }(j, t),
          function(e) {
              var t = f();
              et(81).forEach(function(n) {
                  Rt[n].currentOpacity = 0,
                  Rt[n].errorObject !== e[n] && (Rt[n].errorObject = e[n],
                  Rt[n].startTime = t)
              })
          }(i(y)),
          null != D && function(e, t, n) {
              var r = Math.floor(n / 9);
              a(e, (n - 9 * r) * t, r * t, function() {
                  e.beginPath(),
                  e.rect(0, 0, t, t),
                  e.strokeStyle = Yt,
                  c(e, 3),
                  e.lineJoin = "round",
                  e.stroke()
              })
          }(j, t, D)
      }),
      function(e) {
          var t = e.board
            , n = e.cursor
            , r = e.noteMode
            , i = Array.prototype.slice.call(document.querySelectorAll("#sudoku .button"));
          if (p(i[9], r),
          null == n || Nt(t[n]))
              i.slice(0, 9).forEach(function(e) {
                  return p(e, null)
              });
          else if (r) {
              var o = t[n].notes;
              i.slice(0, 9).forEach(function(e, t) {
                  p(e, o[t])
              })
          } else
              i.slice(0, 9).forEach(function(e, r) {
                  p(e, r + 1 === t[n].number)
              })
      }(t)
  }
  function L(e, t, n, r) {
      e.beginPath(),
      e.strokeStyle = r,
      e.moveTo(Math.floor(n * t), 0),
      e.lineTo(Math.floor(n * t), Math.floor(9 * t)),
      e.stroke()
  }
  function w(e, t, n, r) {
      e.beginPath(),
      e.strokeStyle = r,
      e.moveTo(0, Math.floor(n * t)),
      e.lineTo(Math.floor(9 * t), Math.floor(n * t)),
      e.stroke()
  }
  function p(e, t) {
      function n(e, t) {
          t ? r.add(e) : r.remove(e)
      }
      var r = e.classList;
      n("selectedButton", !0 === t),
      n("unselectedButton", !1 === t),
      n("disabledButton", null == t)
  }
  function h(e) {
      if ("string" != typeof e)
          throw new TypeError("boards.makeBoard() takes a string argument, got " + (void 0 === e ? "undefined" : le(e)));
      if (!yn[e])
          throw new TypeError('boards.makeBoard() invalid string argument "' + e + '"');
      var t = yn[e]
        , n = Math.floor(Math.random() * t.length)
        , r = function(e) {
          var t = function(e) {
              for (var t = et(0, e), n = e - 1; n > 0; n--) {
                  var r = Math.floor(Math.random() * n)
                    , i = t[n];
                  t[n] = t[r],
                  t[r] = i
              }
              return t.map(function(e) {
                  return e + 1
              })
          }(9)
            , n = gn(e, t)
            , r = !1
            , i = !1;
          Math.random() > .5 && (n = D(n, vn),
          r = !0);
          Math.random() > .5 && (n = D(n, Nn),
          i = !0);
          for (var o = Math.floor(4 * Math.random()), s = 0; s < o; s++)
              n = D(n, Cn);
          return {
              board: n,
              transforms: {
                  mirrorVertical: r,
                  mirrorHorizontal: i,
                  rotations: o,
                  transposeTable: t
              }
          }
      }(mt(t[n]));
      return {
          board: r.board,
          generatedFrom: {
              level: e,
              index: n,
              transforms: r.transforms
          }
      }
  }
  function y(e) {
      for (var t = Array(81), n = 0; n < 81; n++) {
          var r = jn(n)
            , i = r.x
            , o = r.y;
          t[n] = e(i, o)
      }
      return t
  }
  function D(e, t) {
      for (var n = Array(81), r = 0; r < 81; r++)
          n[t[r]] = e[r];
      return n
  }
  function j(e, t, n, r, i) {
      var o = -1
        , s = e.length;
      for (n || (n = On),
      i || (i = []); ++o < s; ) {
          var u = e[o];
          t > 0 && n(u) ? t > 1 ? j(u, t - 1, n, r, i) : xn(i, u) : r || (i[i.length] = u)
      }
      return i
  }
  function g(e) {
      var t = -1
        , n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1])
      }
  }
  function C(e) {
      var t = -1
        , n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1])
      }
  }
  function N(e) {
      var t = -1
        , n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1])
      }
  }
  function v(e) {
      var t = this.__data__ = new Hn(e);
      this.size = t.size
  }
  function x(e) {
      var t = -1
        , n = null == e ? 0 : e.length;
      for (this.__data__ = new mr; ++t < n; )
          this.add(e[t])
  }
  function m(e, t, n, r, i) {
      return e === t || (null == e || null == t || !We(e) && !We(t) ? e != e && t != t : qi(e, t, n, r, m, i))
  }
  function A(e, t) {
      if ("function" != typeof e || null != t && "function" != typeof t)
          throw new TypeError(oo);
      var n = function n() {
          var r = arguments
            , i = t ? t.apply(this, r) : r[0]
            , o = n.cache;
          if (o.has(i))
              return o.get(i);
          var s = e.apply(this, r);
          return n.cache = o.set(i, s) || o,
          s
      };
      return n.cache = new (A.Cache || mr),
      n
  }
  function S() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo
        , t = arguments[1];
      switch (t.type) {
      case $t:
          var n = h(t.level)
            , r = n.board
            , i = n.generatedFrom;
          return fe({}, Yo, {
              board: r,
              generatedFrom: i
          });
      case Zt:
          return Nt(e.board[t.index]) ? e : fe({}, e, {
              cursor: t.index
          });
      case tn:
          return null == e.cursor || Nt(e.board[e.cursor]) ? e : fe({}, e, {
              board: At(e.board, e.cursor, Dt(e.board[e.cursor]))
          });
      case Kt:
          if (e.cursor === t.cell) {
              if (Ct(e.board[e.cursor]))
                  return fe({}, e, {
                      board: At(e.board, e.cursor, jt(e.board[e.cursor], t.note))
                  })
          } else if (!Nt(e.board[t.cell]))
              return fe({}, e, {
                  cursor: t.cell
              });
          return e;
      case fn:
          return fe({}, e, {
              noteMode: !0
          });
      case dn:
          return fe({}, e, {
              noteMode: !1
          });
      case Mn:
          return fe({}, e, {
              noteMode: !e.noteMode
          });
      case Jt:
          return null == e.cursor || Nt(e.board[e.cursor]) ? e : fe({}, e, {
              board: At(e.board, e.cursor, yt(e.board[e.cursor], t.number))
          });
      case Xt:
          return null == e.cursor || Nt(e.board[e.cursor]) ? e : e.noteMode && !t.invertMode || !e.noteMode && t.invertMode ? fe({}, e, {
              board: At(e.board, e.cursor, Dt(jt(e.board[e.cursor], t.number)))
          }) : fe({}, e, {
              board: At(e.board, e.cursor, yt(e.board[e.cursor], t.number))
          });
      case wn:
          return null == e.cursor || Nt(e.board[e.cursor]) ? e : e.noteMode ? fe({}, e, {
              board: At(e.board, e.cursor, Dt(jt(e.board[e.cursor], t.number)))
          }) : e.board[e.cursor].number === t.number ? fe({}, e, {
              board: At(e.board, e.cursor, Dt(e.board[e.cursor]))
          }) : fe({}, e, {
              board: At(e.board, e.cursor, yt(e.board[e.cursor], t.number))
          });
      case an:
          return e.cursor !== t.index ? fe({}, e, {
              cursor: t.index
          }) : fe({}, e, {
              board: At(e.board, t.index, jt(e.board[t.index], t.noteIndex))
          });
      case cn:
          return fe({}, e, {
              board: At(e.board, e.cursor, gt(e.board[e.cursor]))
          });
      case un:
          return null == e.cursor ? fe({}, e, {
              cursor: 0
          }) : fe({}, e, {
              cursor: e.cursor % 9 == 8 ? e.cursor - 8 : e.cursor + 1
          });
      case sn:
          return null == e.cursor ? fe({}, e, {
              cursor: 8
          }) : fe({}, e, {
              cursor: e.cursor % 9 == 0 ? e.cursor + 8 : e.cursor - 1
          });
      case rn:
          return null == e.cursor ? fe({}, e, {
              cursor: 72
          }) : fe({}, e, {
              cursor: e.cursor < 9 ? e.cursor + 72 : e.cursor - 9
          });
      case on:
          return null == e.cursor ? fe({}, e, {
              cursor: 0
          }) : fe({}, e, {
              cursor: e.cursor >= 72 ? e.cursor - 72 : e.cursor + 9
          });
      case hn:
          return fe({}, e, {
              board: function(e) {
                  function t(e, n) {
                      if (n >= 81)
                          return [e];
                      if (Nt(e[n]))
                          return t(e, n + 1);
                      var r = et(1, 10).map(function(t) {
                          return At(e, n, pt(t))
                      }).filter(zo);
                      return Oo(r, function(e) {
                          return t(e, n + 1)
                      })
                  }
                  return t(e, 0)
              }(e.board)[0]
          });
      default:
          return e
      }
  }
  function T() {
      var e = document.querySelectorAll("ins.adsbygoogle");
      if (2 != e.length)
          throw new Error("Unexpected number of ad units! Expected 2, found " + e.length);
      var t = de(e, 2)
        , n = t[0]
        , r = t[1];
      window.adsbygoogle = window.adsbygoogle || [],
      n.parentNode.removeChild(n),
      r.clientWidth < 120 ? r.parentNode.removeChild(r) : window.adsbygoogle.push({})
  }
  function b(e) {
      return null == e ? void 0 === e ? $o : Fo : qo && qo in Object(e) ? function(e) {
          var t = Wo.call(e, Ro)
            , n = e[Ro];
          try {
              e[Ro] = void 0;
              var r = !0
          } catch (e) {}
          var i = Ho.call(e);
          return r && (t ? e[Ro] = n : delete e[Ro]),
          i
      }(e) : function(e) {
          return Bo.call(e)
      }(e)
  }
  function E(e) {
      if (!function(e) {
          return null != e && "object" == (void 0 === e ? "undefined" : le(e))
      }(e) || b(e) != Go)
          return !1;
      var t = Zo(e);
      if (null === t)
          return !0;
      var n = Ko.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n instanceof n && Vo.call(n) == es
  }
  function I(e, t, n) {
      function r() {
          f === l && (f = l.slice())
      }
      function i() {
          return c
      }
      function o(e) {
          if ("function" != typeof e)
              throw new Error("Expected listener to be a function.");
          var t = !0;
          return r(),
          f.push(e),
          function() {
              if (t) {
                  t = !1,
                  r();
                  var n = f.indexOf(e);
                  f.splice(n, 1)
              }
          }
      }
      function s(e) {
          if (!E(e))
              throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          if (void 0 === e.type)
              throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          if (d)
              throw new Error("Reducers may not dispatch actions.");
          try {
              d = !0,
              c = a(c, e)
          } finally {
              d = !1
          }
          for (var t = l = f, n = 0; n < t.length; n++) {
              (0,
              t[n])()
          }
          return e
      }
      var u;
      if ("function" == typeof t && void 0 === n && (n = t,
      t = void 0),
      void 0 !== n) {
          if ("function" != typeof n)
              throw new Error("Expected the enhancer to be a function.");
          return n(I)(e, t)
      }
      if ("function" != typeof e)
          throw new Error("Expected the reducer to be a function.");
      var a = e
        , c = t
        , l = []
        , f = l
        , d = !1;
      return s({
          type: ns.INIT
      }),
      u = {
          dispatch: s,
          subscribe: o,
          getState: i,
          replaceReducer: function(e) {
              if ("function" != typeof e)
                  throw new Error("Expected the nextReducer to be a function.");
              a = e,
              s({
                  type: ns.INIT
              })
          }
      },
      u[ts] = function() {
          var e, t = o;
          return e = {
              subscribe: function(e) {
                  function n() {
                      e.next && e.next(i())
                  }
                  if ("object" !== (void 0 === e ? "undefined" : le(e)))
                      throw new TypeError("Expected the observer to be an object.");
                  return n(),
                  {
                      unsubscribe: t(n)
                  }
              }
          },
          e[ts] = function() {
              return this
          }
          ,
          e
      }
      ,
      u
  }
  function O(e, t, n, r, i) {
      function c() {
          p = !1,
          w && (w = !1,
          n(t, L.getState())),
          function(e) {
              var t = u()
                , n = t.canvas
                , r = t.s
                , i = t.x
                , o = t.y
                , s = r / 9
                , c = n.getContext("2d")
                , l = !1
                , M = f();
              return a(c, i, o, function() {
                  Rt.forEach(function(t, n) {
                      var r = void 0;
                      if (null == t.errorObject)
                          r = 0;
                      else {
                          var i = Math.max(Math.min((M - t.startTime) / Ht, 1), 0);
                          r = Math.max(0, 2 * i - 1),
                          1 !== i && (l = !0)
                      }
                      r !== t.currentOpacity && (t.currentOpacity = r,
                      d(e, c, s, n, r))
                  })
              }),
              l
          }(t) && l()
      }
      function l() {
          p || (p = !0,
          window.requestAnimationFrame(c))
      }
      function M() {
          w = !0,
          l()
      }
      var L = I(e, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      window.sudoku = L;
      var w = !0
        , p = !1;
      M(),
      L.subscribe(M),
      i(L),
      window.addEventListener("resize", function() {
          t.invalidate(),
          s(),
          w = !0,
          M()
      }),
      L.subscribe(function() {
          o(L.getState().board) && ($("#win-modal").modal(),
          $("#win-modal").one("hidden.bs.modal", function() {
              L.dispatch(qt(window.difficulty))
          }))
      }),
      window.addEventListener("beforeunload", function(e) {
          if (!function(e) {
              for (var t = 0; t < 81; t++)
                  if (vt(e[t]))
                      return !1;
              return !0
          }(L.getState().board))
              return e.returnValue = "Do you want to abandon your game?",
              e.returnValue
      })
  }
  function z(e, t) {
      var n = u()
        , r = n.x
        , i = n.y
        , o = n.s
        , s = (e * window.devicePixelRatio - r) / o
        , a = (t * window.devicePixelRatio - i) / o;
      if (s < 0 || a < 0 || s > 1 || a > 1)
          return {
              cell: null,
              note: null
          };
      var c = Math.floor(9 * s)
        , l = Math.floor(9 * a)
        , f = Math.floor(3 * (9 * s - c));
      return {
          cell: 9 * l + c,
          note: 3 * Math.floor(3 * (9 * a - l)) + f
      }
  }
  function k(e) {
      null != is && e.preventDefault()
  }
  function Y(e, t, n) {
      e.dispatch(pn(t))
  }
  function U(e, t) {
      e.dispatch(Ln())
  }
  function Q(e) {
      var t = document.getElementById("sudokuBoard");
      t.addEventListener("click", function(e, t) {
          var n = z(t.offsetX, t.offsetY)
            , r = n.cell
            , i = n.note;
          null != r && null != i && e.dispatch(en(r, i + 1))
      }
      .bind(null, e)),
      t.addEventListener("touchstart", function(e, t) {
          var n = t.target.getBoundingClientRect()
            , r = n.x
            , i = n.y
            , o = t.touches[0]
            , s = z(o.clientX - r, o.clientY - i).cell;
          null != (is = s) && e.dispatch(Gt(is))
      }
      .bind(null, e)),
      t.addEventListener("touchend", k);
      var n = Array.prototype.slice.call(document.querySelectorAll("#sudoku .button"));
      n.slice(0, 9).forEach(function(t, n) {
          t.addEventListener("click", Y.bind(null, e, n + 1)),
          t.addEventListener("touchstart", function(e, t, n) {
              n.preventDefault(),
              Y(e, t)
          }
          .bind(null, e, n + 1))
      }),
      n[9].addEventListener("click", U.bind(null, e)),
      n[9].addEventListener("touchstart", function(e, t) {
          t.preventDefault(),
          U(e)
      }
      .bind(null, e))
  }
  var _ = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuOTIsMjguNDl2MS40MUgxNS40VjI4LjQ5bDQuMS0uODNxMC0xLjEyLDAtMi4yMlYxMi4wN2wtMi44Mi4zMnYtMS42bDYuODUtMS42M0wyNCw5LjQ1LDIzLjg5LDE0VjI1LjQzcTAsMS4xLDAsMi4yMloiLz48L3N2Zz4="
    , P = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjguNjUsMjYuMDV2My44NEgxNC44NlYyNy4yNGw0LjM4LTQuNTFhMjEuMTIsMjEuMTIsMCwwLDAsMy4yMy00LjEsNy43OCw3Ljc4LDAsMCwwLDEuMDYtMy45LDQuNjcsNC42NywwLDAsMC0uOS0zLDMuMjYsMy4yNiwwLDAsMC0yLjY5LTEuMUgxOS42MWExLjE3LDEuMTcsMCwwLDAtLjM3LjA2TDE4LjgsMTIuODRBNC4wOSw0LjA5LDAsMCwxLDE3LjksMTVhMS44NiwxLjg2LDAsMCwxLTEuMzEuNTQsMi4wNSwyLjA1LDAsMCwxLTEuMTUtLjM0LDIuMjksMi4yOSwwLDAsMS0uOC0wLjkxLDQuODQsNC44NCwwLDAsMSwuNTktMi4zLDQuODksNC44OSwwLDAsMSwxLjUyLTEuNjUsNyw3LDAsMCwxLDIuMjEtMUExMC44MiwxMC44MiwwLDAsMSwyMS42NSw5YTguMzksOC4zOSwwLDAsMSwzLC40Niw1LjY1LDUuNjUsMCwwLDEsMiwxLjIsNC40Myw0LjQzLDAsMCwxLDEuMDksMS42NkE1LjQzLDUuNDMsMCwwLDEsMjgsMTQuMThhNS44NSw1Ljg1LDAsMCwxLS40OCwyLjQyLDkuNjYsOS42NiwwLDAsMS0xLjM5LDIuMTgsMjIuNiwyMi42LDAsMCwxLTIuMjYsMi4zMnEtMS4zNCwxLjIyLTMsMi44NUwxOC42LDI2LjA1aDEwWiIvPjwvc3ZnPg=="
    , W = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuMDgsMTIuOWEzLjA5LDMuMDksMCwwLDEtLjc4LDEuNzEsMS43MywxLjczLDAsMCwxLTEuMTcuNDYsMi4yMywyLjIzLDAsMCwxLTItMS4xNSw0Ljg5LDQuODksMCwwLDEsLjU5LTIuMjEsNC43Niw0Ljc2LDAsMCwxLDEuMzgtMS41NCw1Ljg0LDUuODQsMCwwLDEsMi0uOUE5LjE1LDkuMTUsMCwwLDEsMjEuNDIsOWExMCwxMCwwLDAsMSwyLjkuMzgsNi4zNCw2LjM0LDAsMCwxLDIuMTMsMS4wNyw0LjQzLDQuNDMsMCwwLDEsMS4zLDEuNjMsNC44Miw0LjgyLDAsMCwxLC40MywyQTQuMzYsNC4zNiwwLDAsMSwyNywxNy4yN2E3LDcsMCwwLDEtMy4zLDEuODEsNy4xOCw3LjE4LDAsMCwxLDMuOTIsMS43Niw0LjksNC45LDAsMCwxLDEuMzMsMy42NSw1LjU3LDUuNTcsMCwwLDEtLjUsMi4zNEE1LjA5LDUuMDksMCwwLDEsMjcsMjguNjlhNy4yMSw3LjIxLDAsMCwxLTIuNDYsMS4yMywxMiwxMiwwLDAsMS0zLjQ0LjQ1LDkuODMsOS44MywwLDAsMS0yLjctLjM1LDYuNjUsNi42NSwwLDAsMS0yLjExLTEsNC40NSw0LjQ1LDAsMCwxLTEuODctMy43NCwxLjcyLDEuNzIsMCwwLDEsLjgtMS4wN0EyLjQ1LDIuNDUsMCwwLDEsMTYuMjQsMjRhMiwyLDAsMCwxLDEuMzYuNSwzLjQ5LDMuNDksMCwwLDEsLjgyLDJsMC4zMiwyLjE4YTQuODgsNC44OCwwLDAsMCwxLjE4LjEzLDQuNDMsNC40MywwLDAsMCwzLjMtMS4xNCw0LjY3LDQuNjcsMCwwLDAsMS4xMi0zLjQxLDQuNTQsNC41NCwwLDAsMC0xLTMsMy44NywzLjg3LDAsMCwwLTMuMTQtMS4xNUgxOC43VjE4LjMxaDEuMjVhMy44OCwzLjg4LDAsMCwwLDMtMSw0LjIsNC4yLDAsMCwwLC45LTIuOTMsNC4xMSw0LjExLDAsMCwwLS44OC0yLjgyLDMuMTEsMy4xMSwwLDAsMC0yLjQ1LTFsLTAuNDYsMC0wLjUsMFoiLz48L3N2Zz4="
    , H = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjkuNTUgMjQuOTNoLTMuMDd2NWgtMy44OHYtNWgtOC44NnYtMi41NWw5Ljc2LTEzLjIyaDN2MTIuNjFoMy4wN3YzLjE3em0tNi45NS0zLjE2di04LjYxbC02LjIgOC42MWg2LjJ6Ii8+PC9zdmc+"
    , R = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguMjgsMTcuMzJBMTQuNzcsMTQuNzcsMCwwLDEsMjEuNDIsMTdhMTAuNTEsMTAuNTEsMCwwLDEsMi45NC40LDYuNzIsNi43MiwwLDAsMSwyLjM4LDEuMjIsNS44Nyw1Ljg3LDAsMCwxLDEuNiwyLDYuNjIsNi42MiwwLDAsMSwuNTksMi45LDYuNiw2LjYsMCwwLDEtLjYxLDIuOSw2LjIzLDYuMjMsMCwwLDEtMS42OCwyLjE0LDcuMzMsNy4zMywwLDAsMS0yLjUzLDEuMzMsMTAuNywxMC43LDAsMCwxLTMuMTUuNDVBOS4xNCw5LjE0LDAsMCwxLDE4LjMyLDMwYTYuNzEsNi43MSwwLDAsMS0yLjEtMSw1LDUsMCwwLDEtMS4zOC0xLjUyLDMuNjcsMy42NywwLDAsMS0uNS0xLjg2LDIuNDQsMi40NCwwLDAsMSwuNzQtMS4zLDEuODcsMS44NywwLDAsMSwxLjI1LS40MywxLjc4LDEuNzgsMCwwLDEsMS4yOC41MywzLjc3LDMuNzcsMCwwLDEsLjgsMmwwLjMyLDJhNiw2LDAsMCwwLDEuODIuMzIsMy4yNywzLjI3LDAsMCwwLDIuODMtMS40Miw2LjMyLDYuMzIsMCwwLDAsMS0zLjczLDQuODMsNC44MywwLDAsMC0xLTMuMiwzLjc0LDMuNzQsMCwwLDAtMy0xLjE4LDE0LjU0LDE0LjU0LDAsMCwwLTEuNi4xLDE1LjgxLDE1LjgxLDAsMCwwLTEuNi4yNkwxNi4yNywxOWwwLjY3LTkuNTdoMTEuM3YzLjg0SDE4LjU3WiIvPjwvc3ZnPg=="
    , B = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuMjQsMTAuMjFhMTAuNiwxMC42LDAsMCwwLTMuNTcsMS4yOCwxMC43MywxMC43MywwLDAsMC0yLjUxLDJBOS4zOCw5LjM4LDAsMCwwLDE5LjU2LDE2YTExLjI3LDExLjI3LDAsMCwwLS44LDIuNTlBNi41OSw2LjU5LDAsMCwxLDIzLDE3LjE5YTYsNiwwLDAsMSw0LjYyLDEuNjYsNi40NCw2LjQ0LDAsMCwxLDEuNTUsNC41OCw3LjU4LDcuNTgsMCwwLDEtLjU2LDNBNS45NCw1Ljk0LDAsMCwxLDI3LDI4LjYxYTYuNzgsNi43OCwwLDAsMS0yLjM0LDEuMzEsOS4xOCw5LjE4LDAsMCwxLTIuOTEuNDUsNy43NCw3Ljc0LDAsMCwxLTMuMTctLjYyQTYuNzIsNi43MiwwLDAsMSwxNi4yLDI4YTcuOTQsNy45NCwwLDAsMS0xLjUyLTIuODJBMTIuNTYsMTIuNTYsMCwwLDEsMTUsMTcuMWExMi4wNiwxMi4wNiwwLDAsMSwyLjQ1LTQsMTMuNjksMTMuNjksMCwwLDEsNC0zLDE0LjQsMTQuNCwwLDAsMSw1LjU4LTEuMzlaTTIyLjA2LDI4Ljc3YTIuMjgsMi4yOCwwLDAsMCwyLTEuMjIsNi45Miw2LjkyLDAsMCwwLC43Ny0zLjY1QTUuOTEsNS45MSwwLDAsMCwyNCwyMC4zNGEyLjc5LDIuNzksMCwwLDAtMi4zNC0xLjA3LDMuOSwzLjksMCwwLDAtMS41LjMsNi45Miw2LjkyLDAsMCwwLTEuNS44OCwxNiwxNiwwLDAsMCwxLDYuMzJRMjAuNTYsMjguNzgsMjIuMDYsMjguNzdaIi8+PC9zdmc+"
    , F = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjguNjksOS40OHYyLjI0TDIxLjI5LDI5Ljg5aC00TDE3LDI5LjU3bDguNTQtMTYuMjZIMTUuMjFWOS40OEgyOC42OVoiLz48L3N2Zz4="
    , q = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjQuNDksMTguNmExMC43MywxMC43MywwLDAsMSwzLjIzLDIuNTQsNSw1LDAsMCwxLDEuMDksMy4yMiw1LjQyLDUuNDIsMCwwLDEtMS45NCw0LjQyLDguMDYsOC4wNiwwLDAsMS01LjMsMS42LDEyLjE4LDEyLjE4LDAsMCwxLTIuODgtLjMyLDYuNyw2LjcsMCwwLDEtMi4yNC0xQTQuNjksNC42OSwwLDAsMSwxNSwyNy41MWE0LjM1LDQuMzUsMCwwLDEtLjUzLTIuMTYsNC43Miw0LjcyLDAsMCwxLDEuMDktMy4xNyw5LDksMCwwLDEsMy0yLjIxLDcuNjcsNy42NywwLDAsMS0yLjQzLTIuNDUsNS42MSw1LjYxLDAsMCwxLS44LTIuOSw1LjEzLDUuMTMsMCwwLDEsLjU0LTIuNDIsNS40Miw1LjQyLDAsMCwxLDEuNDYtMS43Niw2LjQyLDYuNDIsMCwwLDEsMi4xLTEuMDlBOC4zNyw4LjM3LDAsMCwxLDIxLjkzLDlhNy40Niw3LjQ2LDAsMCwxLDIuNC4zNyw1Ljc1LDUuNzUsMCwwLDEsMS44NywxLDQuNjgsNC42OCwwLDAsMSwxLjIyLDEuNTQsNC4xOSw0LjE5LDAsMCwxLC40MywxLjg3LDQuNTQsNC41NCwwLDAsMS0uNzIsMi40MkE4LjE3LDguMTcsMCwwLDEsMjQuNDksMTguNlpNMjEuNTgsMjguNzdhMy43MiwzLjcyLDAsMCwwLDEuNDktLjI3LDMsMywwLDAsMCwxLjA2LS43NSwzLjExLDMuMTEsMCwwLDAsLjY0LTEuMSw0LjEsNC4xLDAsMCwwLC4yMS0xLjMsMywzLDAsMCwwLS4yMi0xLjIsMy4wOCwzLjA4LDAsMCwwLS43OC0xQTkuMjQsOS4yNCwwLDAsMCwyMi40NiwyMnEtMC45NC0uNTYtMi4zOC0xLjIzYTQuOTIsNC45MiwwLDAsMC0xLjU0LDEuODIsNiw2LDAsMCwwLS40OCwyLjUzLDMuNDQsMy40NCwwLDAsMCwxLDIuNjlBMy41OCwzLjU4LDAsMCwwLDIxLjU4LDI4Ljc3Wk0yMS44NCwxMC42YTMsMywwLDAsMC0yLjA4Ljc3LDIuNzYsMi43NiwwLDAsMC0uODYsMi4xOCwzLjM0LDMuMzQsMCwwLDAsLjE2LDEsMi45MSwyLjkxLDAsMCwwLC42MSwxLDYuNyw2LjcsMCwwLDAsMS4yLDEsMTMuNjEsMTMuNjEsMCwwLDAsMiwxLjEsNS40Myw1LjQzLDAsMCwwLDEuMzgtMS44Nyw1LjE3LDUuMTcsMCwwLDAsLjM4LTIsMy42NCwzLjY0LDAsMCwwLS43NC0yLjQzQTIuNTEsMi41MSwwLDAsMCwyMS44NCwxMC42WiIvPjwvc3ZnPg=="
    , Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMzMsMjguODdhMTUuMzUsMTUuMzUsMCwwLDAsMy4zLTEuMzEsMTAuMTksMTAuMTksMCwwLDAsMi4zMi0xLjczLDcuMTgsNy4xOCwwLDAsMCwxLjQ3LTIuMTYsMTEuNTksMTEuNTksMCwwLDAsLjc4LTIuNjEsNi41OSw2LjU5LDAsMCwxLTMuNDYuODZBOC4zNiw4LjM2LDAsMCwxLDE4LDIxLjUxYTUuNzYsNS43NiwwLDAsMS0yLjA4LTEuMjIsNS4zMyw1LjMzLDAsMCwxLTEuMzMtMiw2Ljg4LDYuODgsMCwwLDEtLjQ2LTIuNTksNi40NCw2LjQ0LDAsMCwxLDIuMS00LjgzLDcuMjMsNy4yMywwLDAsMSwyLjI5LTEuNDFBNy41OSw3LjU5LDAsMCwxLDIxLjMyLDlhOCw4LDAsMCwxLDMuMjUuNjJBNi42Myw2LjYzLDAsMCwxLDI3LDExLjM4YTcuNTcsNy41NywwLDAsMSwxLjQ3LDIuNzcsMTIuNTQsMTIuNTQsMCwwLDEsLjUsMy42NSwxMS42OSwxMS42OSwwLDAsMS0xLDQuNzcsMTIsMTIsMCwwLDEtMi42MiwzLjc5QTEzLjUsMTMuNSwwLDAsMSwyMS40NSwyOWExNi42OSwxNi42OSwwLDAsMS00LjgsMS4zM1ptNS41NC05YTUuMjgsNS4yOCwwLDAsMCwxLjIyLS4xNiw0LjU4LDQuNTgsMCwwLDAsMS4zNC0uNThxMC0uNDIsMC0wLjgyVjE3LjQ4YTEyLjQ5LDEyLjQ5LDAsMCwwLS44Mi01LjIyLDIuNDgsMi40OCwwLDAsMC0yLjIyLTEuNjYsMi41NSwyLjU1LDAsMCwwLTIsMS4xMiw1Ljc1LDUuNzUsMCwwLDAtLjg4LDMuNTUsNS4zMiw1LjMyLDAsMCwwLC45NCwzLjU0QTMuMDcsMy4wNywwLDAsMCwyMS44NywxOS44OFoiLz48L3N2Zz4="
    , G = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIsMTkuNDdRMjIsMjAsMjIsMjAuOTJ0MC4xNiwycTAuMDksMS4xMS4yLDIuMjh0MC4yMSwyLjEycTAuMTEsMSwuMTcsMS41OGMwLDAuNDIuMDcsMC42NCwwLjA3LDAuNjZhMC42NywwLjY3LDAsMCwxLS4yLjUsMSwxLDAsMCwxLS41NS4yNSwwLjc1LDAuNzUsMCwwLDEtLjUxLTAuMTksMC43LDAuNywwLDAsMS0uMjQtMC40OEE2Ljc4LDYuNzgsMCwwLDEsMjEuMjUsMjlxLTAuMDctLjY0LTAuMTYtMS42MXQtMC4yLTIuMTJxLTAuMTEtMS4xNS0uMi0yLjI1dC0wLjE2LTJxLTAuMDctLjk0LTAuMDctMS40NywwLS43Mi0wLjA1LTEuNzl0LTAuMTMtMi4yMnEtMC4wOC0xLjE1LS4yLTIuMjh0LTAuMjMtMS45M2wtMSwuNzJMMTgsMTIuNTksMTcuMzgsMTNsLTAuMjQuMTlhMC42MiwwLjYyLDAsMCwxLS40Ni4xOSwwLjY4LDAuNjgsMCwwLDEtLjU2LTAuMjcsMC42NSwwLjY1LDAsMCwxLS4xOS0wLjQ4LDAuNzMsMC43MywwLDAsMSwuMjEtMC41NGwwLjM1LS4yOCwwLjgyLS42MiwxLjExLS44UTE5LDEwLDE5LjY4LDkuNTZhMC43OCwwLjc4LDAsMCwxLC44MywwLDAuNzksMC43OSwwLDAsMSwuNDMuMTksMC43MiwwLjcyLDAsMCwxLC4yNC40LDIwLjA5LDIwLjA5LDAsMCwxLC4yOSwycTAuMTMsMS4yNS4yNCwyLjYxdDAuMTcsMi42NFEyMiwxOC42OSwyMiwxOS40N1oiIGZpbGw9IiMxYTFhZTYiLz48L3N2Zz4="
    , J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuMzQsMjlhMC44LDAuOCwwLDAsMSwuNTkuOTEsMC42NiwwLjY2LDAsMCwxLS4yOS40MywxLDEsMCwwLDEtLjYyLjEzbC0xLjIzLS4xOXEtMC41OS0uMDgtMS40My0wLjE1VDIyLjUsMzBIMjIuMTJxLTEsMC0yLjA2LjA3dC0xLjg5LjE1bC0xLjQxLjE1LTAuNjIuMDdIMTUuNjFhMC43MSwwLjcxLDAsMCwxLS41NC0wLjIzLDAuNzQsMC43NCwwLDAsMS0uMjEtMC41MiwxMC45MSwxMC45MSwwLDAsMSwuNjMtMy44QTguMjEsOC4yMSwwLDAsMSwxNy4zOCwyM2ExMS40OSwxMS40OSwwLDAsMSwxLjcxLTEuNDFMMjEsMjAuMzhxMC44My0uNTEsMS42MS0xYTEwLjI5LDEwLjI5LDAsMCwwLDEuMzctMS4wOCw1LjMyLDUuMzIsMCwwLDAsMS0xLjE5LDIuNjcsMi42NywwLDAsMCwuMzYtMS4zNSwxMy40NiwxMy40NiwwLDAsMC0uMDgtMS41MSw0LjE0LDQuMTQsMCwwLDAtLjM3LTEuMzMsMy4yMiwzLjIyLDAsMCwwLS44OC0xLjEsNS41NCw1LjU0LDAsMCwwLTEuNjMtLjg2LDcuODcsNy44NywwLDAsMC0xLS4zMSw0LjA3LDQuMDcsMCwwLDAtLjg0LTAuMDksNC42NSw0LjY1LDAsMCwwLTEuMTguMTZxLTAuNjIuMTYtMS41NSwwLjQ2YTIuODMsMi44MywwLDAsMC0xLjEyLjY2LDUuMiw1LjIsMCwwLDAtLjc1LjksNi4zOCw2LjM4LDAsMCwwLS41OSwxLjE1LDAuODMsMC44MywwLDAsMS0uOTQuNTFBMC43MywwLjczLDAsMCwxLDEzLjg4LDE0YTAuOTIsMC45MiwwLDAsMS0uMDktMC42M0EzLjc5LDMuNzksMCwwLDEsMTQsMTIuODhhNS4zNyw1LjM3LDAsMCwxLC42LTEuMDksNyw3LDAsMCwxLDEuMDgtMS4yMSw0LjI3LDQuMjcsMCwwLDEsMS42My0uOVExOC4yMyw5LjQsMTksOS4yMkE2LjE5LDYuMTksMCwwLDEsMjAuNDEsOWE2LDYsMCwwLDEsMS4wOC4xMSwxMCwxMCwwLDAsMSwxLjMuMzUsNi4xNCw2LjE0LDAsMCwxLDIuMjksMS4zLDUuMDYsNS4wNiwwLDAsMSwxLjE4LDEuNjUsNS41Miw1LjUyLDAsMCwxLC40MywxLjczYzAsMC41OC4wNywxLjA5LDAuMDcsMS41NGE0LDQsMCwwLDEtLjQzLDEuODgsNi4yLDYuMiwwLDAsMS0xLjE0LDEuNTQsMTAuNjQsMTAuNjQsMCwwLDEtMS42MSwxLjMxbC0xLjgxLDEuMTlMMjAsMjIuODJhMTAuMzMsMTAuMzMsMCwwLDAtMS41OCwxLjI5QTYuMzgsNi4zOCwwLDAsMCwxNywyNi4xN2E4LjM0LDguMzQsMCwwLDAtLjU5LDIuNzNsMS0uMDksMS4zOS0uMTNxMC43OC0uMDcsMS42NS0wLjExdDEuNzUsMGgwLjM4YTI4LjI4LDI4LjI4LDAsMCwxLDMuNDguMjVaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , X = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEuMzQsMTYuNjNhNy4zNSw3LjM1LDAsMCwxLDEuNTcuNDIsOC4zOSw4LjM5LDAsMCwxLDEuMy42NCw4LjI4LDguMjgsMCwwLDEsMS4wNi43Niw3Ljg1LDcuODUsMCwwLDEsLjgyLjgsNy42LDcuNiwwLDAsMSwxLjU0LDIuNDQsNi4zLDYuMywwLDAsMSwuNDcsMi4xMnYwLjMybC0wLjA1LjRxLTAuMDguNy0uMjEsMS40OWE0LjM3LDQuMzcsMCwwLDEtLjU5LDEuNTRBNS4xMiw1LjEyLDAsMCwxLDI1LjkxLDI5YTcuMjMsNy4yMywwLDAsMS0yLjQsMS4wOSwxMi4wNywxMi4wNywwLDAsMS0xLjQxLjMxLDgsOCwwLDAsMS0xLjE3LjA5LDcuMzUsNy4zNSwwLDAsMS0xLjY1LS4xOXEtMC44Mi0uMTktMS45NC0wLjQ4YTQuNjQsNC42NCwwLDAsMS0xLjc4LS44Niw2LjU2LDYuNTYsMCwwLDEtMS4xOS0xLjIxLDUuNDYsNS40NiwwLDAsMS0uNjctMS4xNCw1LjIxLDUuMjEsMCwwLDEtLjI0LTAuNjYsMC42NCwwLjY0LDAsMCwxLC4xNi0wLjQzLDEuMjcsMS4yNywwLDAsMSwuNTktMC4zMiwwLjc4LDAuNzgsMCwwLDEsLjQ0LjEzLDAuNywwLjcsMCwwLDEsLjI4LjM4LDQuNDEsNC40MSwwLDAsMCwuNjQsMS4xMyw1LjI5LDUuMjksMCwwLDAsLjkuOSwzLjYyLDMuNjIsMCwwLDAsMS4zMy42NnExLDAuMywxLjc0LjQ0YTYuNjgsNi42OCwwLDAsMCwxLjM5LjE1LDguNTYsOC41NiwwLDAsMCwyLjE3LS4zNSw2LDYsMCwwLDAsMS44MS0uNzgsMy40MSwzLjQxLDAsMCwwLDEtMSwzLjI5LDMuMjksMCwwLDAsLjQ0LTEuMThxMC4xMS0uNjMuMTktMS4yN2wwLjA1LS41NmE0Ljc4LDQuNzgsMCwwLDAtLjM3LTEuNTgsNi4xNiw2LjE2LDAsMCwwLTEuMjYtMiw3LjgsNy44LDAsMCwwLS44Mi0wLjgsNS41OCw1LjU4LDAsMCwwLTEuMS0uNzIsNi44Niw2Ljg2LDAsMCwwLTEuNDEtLjUyQTcsNywwLDAsMCwxOS45LDE4bC0wLjEzLDAtMC4yOS0uMTMtMC4yMS0uMTlhMC4yMywwLjIzLDAsMCwwLDAtLjA3bC0wLjA3LS4yYTAuMDksMC4wOSwwLDAsMSwwLS4wN3MwLS4xLDAtMC4yM2EwLjIyLDAuMjIsMCwwLDEsMC0uMDcsMi4xNywyLjE3LDAsMCwxLC4xMi0wLjIzbDAuODctMS4xNXEwLjUtLjY0LDEuMDYtMS4zNHQxLjI5LTEuNTlxMC42NC0uODIsMS4xMy0xLjQ5bC0xLjMtLjA5cS0wLjc0LDAtMS42MiwwLTEsMC0yLjE0LjA4bC0yLC4xNnEtMC45Mi4wOC0xLjUzLDAuMTZsLTAuNjYuMDhhMC43LDAuNywwLDAsMS0uNS0wLjE5LDAuOTEsMC45MSwwLDAsMS0uMjUtMC41NiwwLjY4LDAuNjgsMCwwLDEsLjE3LTAuNDgsMC44MiwwLjgyLDAsMCwxLC40Ny0wLjI0TDE0LjkzLDEwbDEuNTMtLjE3cTAuOTItLjA5LDItMC4xN3QyLjIyLS4wOHExLjMxLDAsMi4zMi4wOHQxLjYyLDAuMTZhMC42NSwwLjY1LDAsMCwxLC40My0wLjEzLDEuMSwxLjEsMCwwLDEsLjM4LjA4bDAuMTIsMC4xMWEwLjYxLDAuNjEsMCwwLDEsLjEyLjEzLDAuOCwwLjgsMCwwLDEsLjQ2LjgzLDAuNzQsMC43NCwwLDAsMS0uODMuNTlxLTAuNDguNzItMS4yNywxLjc0dC0xLjY1LDIuMDZMMjEuODUsMTZaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , V = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjYuNjUsMjFhMC43NSwwLjc1LDAsMCwxLS4yOSwxLjQ3bC0wLjI3LS4wNWMtMC4xNiwwLS4zOS0wLjA3LTAuNy0wLjExcTAuMDgsMS4xNS4yLDIuNDJUMjUuODIsMjdxMC4xMSwxLjA2LjE5LDEuNzhjMC4wNSwwLjQ4LjA4LDAuNzQsMC4wOCwwLjc4YTAuNywwLjcsMCwwLDEtLjE5LjUsMC45MiwwLjkyLDAsMCwxLS41Ni4yNSwwLjcsMC43LDAsMCwxLS41LTAuMTksMC43MiwwLjcyLDAsMCwxLS4yMy0wLjQ4cTAtLjA4LTAuMDgtMC44NFQyNC4zMywyN3EtMC4xMi0xLjEtLjI0LTIuMzhsLTAuMjMtMi40NC0xLS4wNS0xLjEsMHEtMSwwLTIuMTQuMDhsLTIsLjE3LTEuNTQuMTctMC43LjA4YTAuNzMsMC43MywwLDAsMS0uNzUtMC43NXEwLS44My0wLjA3LTIuMDlUMTQuNCwxNy4xNXEtMC4xMS0xLjMzLS4yNC0yLjUzdC0wLjI3LTEuOTNhMC43NywwLjc3LDAsMCwxLC43NS0wLjc1LDAuNjksMC42OSwwLDAsMSwuNDcuMTcsMC43NywwLjc3LDAsMCwxLC4yNS40NHEwLjEzLDAuNjQuMjUsMS43MXQwLjIxLDIuMjZxMC4wOSwxLjE5LjE3LDIuMzdUMTYuMTIsMjFsMS4xLS4xMywxLjQxLS4xNXEwLjc2LS4wNywxLjU4LTAuMTF0MS41OSwwcTEuMSwwLDIsLjA4LDAtLjM3LDAtMC42N1YxOS40N3EwLS44My0wLjA3LTIuMDlUMjMuNDksMTQuOHEtMC4xMS0xLjMzLS4yNC0yLjUzVDIzLDEwLjMzYTAuNzEsMC43MSwwLDAsMSwuMTktMC40OCwwLjg4LDAuODgsMCwwLDEsLjU2LTAuMjcsMC43MywwLjczLDAsMCwxLC40Ny4xNiwwLjcxLDAuNzEsMCwwLDEsLjI1LjQzcTAuMTYsMC43NS4yOSwyVDI1LDE0Ljc4cTAuMTEsMS4zNy4xNywyLjY0dDAuMDcsMmMwLDAuMTQsMCwuMzMsMCwwLjU1czAsMC40NywwLC43NGwxLDAuMTVaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , K = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuODYsMTdhNS41LDUuNSwwLDAsMSwyLDEsNyw3LDAsMCwxLDEuNDYsMS42Miw3LjcxLDcuNzEsMCwwLDEsLjksMS45LDYuMjcsNi4yNywwLDAsMSwuMzEsMS44NXYwLjI0YTAuODUsMC44NSwwLDAsMSwwLC4yMWwwLDAuNHEtMC4wOC43LS4yMSwxLjQ5YTQuNTMsNC41MywwLDAsMS0uNTgsMS41NCw1LDUsMCwwLDEtMS4zLDEuNDEsNy4xLDcuMSwwLDAsMS0yLjMzLDEuMDgsMTEuMzksMTEuMzksMCwwLDEtMS4zNS4zMSw3LjQyLDcuNDIsMCwwLDEtMS4xNC4wOUE2LjcyLDYuNzIsMCwwLDEsMjAsMzBsLTEuOS0uNDhhNC40MSw0LjQxLDAsMCwxLTEuNzMtLjg2LDYuNDIsNi40MiwwLDAsMS0xLjgxLTIuMzYsNC44OSw0Ljg5LDAsMCwxLS4yNC0wLjY0LDAuNjYsMC42NiwwLDAsMSwuMTctMC40NCwxLjEyLDEuMTIsMCwwLDEsLjU4LTAuMzEsMC43OCwwLjc4LDAsMCwxLC40NC4xMywwLjcsMC43LDAsMCwxLC4yOC4zOEwxNiwyNS43NGEzLjMzLDMuMzMsMCwwLDAsLjQ3Ljc5LDUuNzIsNS43MiwwLDAsMCwuODYuODgsMy4zNywzLjM3LDAsMCwwLDEuMjcuNjZxMSwwLjMsMS43LjQ0YTYuMjUsNi4yNSwwLDAsMCwxLjMzLjE1LDcuOTEsNy45MSwwLDAsMCwyLjA5LS4zNSw1LjY1LDUuNjUsMCwwLDAsMS43NS0uNzgsMy4zMywzLjMzLDAsMCwwLDEtMSwzLjQ1LDMuNDUsMCwwLDAsLjQzLTEuMThxMC4xMS0uNjMuMTktMS4yN2wwLjA1LS40VjIzLjQxYTUsNSwwLDAsMC0uMjEtMS4zMyw2LDYsMCwwLDAtLjY2LTEuNDksNS44LDUuOCwwLDAsMC0xLjEzLTEuMzMsMy44NywzLjg3LDAsMCwwLTEuNTktLjg0LDguMTksOC4xOSwwLDAsMC0xLjMzLS4yNywxMS45LDExLjksMCwwLDAtMS4zOC0uMDgsMTMuMzMsMTMuMzMsMCwwLDAtMi42Ny4yNSwxMS41NywxMS41NywwLDAsMC0yLC41NSwwLjUsMC41LDAsMCwxLS4yNy4wNUgxNS43MmwtMC4yOSwwYTAuNjksMC42OSwwLDAsMS0uNTEtMC4yMSwwLjgsMC44LDAsMCwxLS4yNC0wLjUxcS0wLjA1LS44LTAuMTItMS43MXQtMC4xNS0xLjhxLTAuMDgtLjg4LTAuMTctMS42N1QxNCwxMS43YTEsMSwwLDAsMSwuMDctMC4zNkEyLjMzLDIuMzMsMCwwLDEsMTQuMywxMWEwLjY5LDAuNjksMCwwLDEsLjE3LTAuNDcsMC43OSwwLjc5LDAsMCwxLC40Ny0wLjI1bDAuNjMtLjA4TDE3LDEwcTAuODgtLjA5LDItMC4xN3QyLjEzLS4wOGEyMy40NiwyMy40NiwwLDAsMSwzLjM0LjE5bDEuMywwLjE5YTAuNjUsMC42NSwwLDAsMSwuNDMuMjksMSwxLDAsMCwxLC4xMy42MiwwLjc1LDAuNzUsMCwwLDEtLjg4LjU2bC0xLjE5LS4xN2EyMi4xNywyMi4xNywwLDAsMC0zLjEyLS4xN3EtMC44LDAtMS42NS4wNWwtMS42MS4xMi0xLjM4LjEzLTEsLjEycTAuMDgsMC40OC4xNywxLjEzdDAuMTYsMS4zOXEwLjA3LDAuNzUuMTMsMS41NXQwLjEyLDEuNThhMTQsMTQsMCwwLDEsMi4wNi0uNTEsMTQuNjksMTQuNjksMCwwLDEsMi41Ny0uMjEsMTMsMTMsMCwwLDEsMS41NS4wOUExMC42LDEwLjYsMCwwLDEsMjMuODYsMTdaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , ee = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUuOSwxN2E2LjI3LDYuMjcsMCwwLDEsMS43NCwxLDYsNiwwLDAsMSwxLjIzLDEuNDMsNi40LDYuNCwwLDAsMSwuNzIsMS43QTcuMDgsNy4wOCwwLDAsMSwyOS44NCwyM2E3LjU2LDcuNTYsMCwwLDEtLjI3LDIsNi44NSw2Ljg1LDAsMCwxLS44MiwxLjg1LDcuMiw3LjIsMCwwLDEtMS4zNCwxLjU3LDYuNDUsNi40NSwwLDAsMS0xLjg0LDEuMTNBNy44LDcuOCwwLDAsMSwyNCwzMGE5LjE3LDkuMTcsMCwwLDEtMS42Mi4xNSw4LjQ0LDguNDQsMCwwLDEtMy4yMy0uNjMsNi45Myw2LjkzLDAsMCwxLTIuNjctMS45NEE4LjU1LDguNTUsMCwwLDEsMTUuMzUsMjYsMTAuODQsMTAuODQsMCwwLDEsMTQuNTksMjQsMTMuMDcsMTMuMDcsMCwwLDEsMTQuMTYsMjJhMTYuNjUsMTYuNjUsMCwwLDEtLjEzLTIuMSwxNC43OSwxNC43OSwwLDAsMSwuMjQtMi43MywxMiwxMiwwLDAsMSwuNjQtMi4zNiw3LjY3LDcuNjcsMCwwLDEsMS4xMS0yLDYuNTgsNi41OCwwLDAsMSwxLjY1LTEuNDksNy41Niw3LjU2LDAsMCwxLDIuMjUtLjk0LDExLDExLDAsMCwxLDEuMTgtLjIsMTAuNDgsMTAuNDgsMCwwLDEsMS4xOC0uMDcsNy40OSw3LjQ5LDAsMCwxLDMsLjYzLDUuMzUsNS4zNSwwLDAsMSwyLjM3LDIuMSwwLjYzLDAuNjMsMCwwLDEtLjEyLjlBMC44NywwLjg3LDAsMCwxLDI3LDE0YTAuNzIsMC43MiwwLDAsMS0uNjItMC4zNUEzLjkzLDMuOTMsMCwwLDAsMjQuNiwxMmE2LDYsMCwwLDAtMi4zNC0uNDcsNyw3LDAsMCwwLTIuNzEuNTQsNS41OSw1LjU5LDAsMCwwLTIuOTEsMi40OCw2Ljk0LDYuOTQsMCwwLDAtLjcxLDEuNzgsMTIuMDgsMTIuMDgsMCwwLDAtLjMyLDJxMCwwLjMyLDAsLjY3dDAsMC43MlYyMC4yYTYuMSw2LjEsMCwwLDEsMS4yNS0xLjYyLDcuMTgsNy4xOCwwLDAsMSwxLjcxLTEuMTgsOS4wOCw5LjA4LDAsMCwxLDItLjcxLDkuNzQsOS43NCwwLDAsMSwyLjE0LS4yNCw5LjIxLDkuMjEsMCwwLDEsMS42Ni4xNUE4LjM5LDguMzksMCwwLDEsMjUuOSwxN1pNMjUuMzYsMjhhNiw2LDAsMCwwLDIuMjItMS45NCw0Ljc1LDQuNzUsMCwwLDAsLjgtMi43Miw1LjA4LDUuMDgsMCwwLDAsMC0uNjRjMC0uMjEtMC4wNi0wLjQzLTAuMDktMC42NEE1LjgsNS44LDAsMCwwLDI3LDE5LjU4YTQuNTgsNC41OCwwLDAsMC0yLjM4LTEuNDIsOC4xOSw4LjE5LDAsMCwwLTEuODgtLjIxLDkuMjksOS4yOSwwLDAsMC0yLjEzLjI1LDYuNTUsNi41NSwwLDAsMC0yLC44LDUuMTMsNS4xMywwLDAsMC0xLjQ3LDEuMzcsMy43LDMuNywwLDAsMC0uNjcsMS45NCwwLjcsMC43LDAsMCwxLS4yMS40NywwLjkxLDAuOTEsMCwwLDEtLjQuMjMsOS42MSw5LjYxLDAsMCwwLC43MiwyLjE3LDUuNDQsNS40NCwwLDAsMCwxLjI5LDEuNzRBNyw3LDAsMCwwLDIwLDI4LjI2YTYuNjMsNi42MywwLDAsMCwyLjQ5LjQ4QTYsNiwwLDAsMCwyNCwyOC41Nyw1LjkzLDUuOTMsMCwwLDAsMjUuMzYsMjhaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , te = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUuNDUsMTAuMDlhMC44NiwwLjg2LDAsMCwxLC41OSwxcS0wLjEzLjc4LS40NiwyVDI0Ljg2LDE1LjZxLTAuNCwxLjMtLjgsMi40OVQyMy4zOSwyMHEtMC4xOS40OC0uNDcsMS4zOHQtMC42LDJxLTAuMzIsMS4wNy0uNjMsMi4xOHQtMC41OCwycS0wLjI3LjkxLS40MywxLjV0LTAuMTYuNjJhMC42NiwwLjY2LDAsMCwxLS4yOC40LDEsMSwwLDAsMS0uNjMuMTMsMC44LDAuOCwwLDAsMS0uNC0wLjMxLDEsMSwwLDAsMS0uMTMtMC42M2wwLjItLjdMMTkuNywyN3EwLjI1LS45Mi41OC0ybDAuNjMtMi4xN3EwLjMxLTEuMDYuNTktMlQyMiwxOS40N3EwLjI3LS43LjYyLTEuNzR0MC42OC0yLjE3cTAuMzQtMS4xMi42NC0yLjIydDAuNS0xLjg4cS0wLjU2LS4wOC0xLjU0LTAuMTZ0LTIuMjYtLjA4cS0xLDAtMi4xNC4wOGwtMiwuMTZxLTAuOTMuMDgtMS41NCwwLjE2bC0wLjY3LjA4YTAuNzEsMC43MSwwLDAsMS0uNDgtMC4xOUEwLjg4LDAuODgsMCwwLDEsMTMuNSwxMWEwLjY5LDAuNjksMCwwLDEsLjE3LTAuNDcsMC43OSwwLjc5LDAsMCwxLC40Ny0wLjI1bDAuNjctLjA4TDE2LjM1LDEwcTAuOTItLjA5LDItMC4xN3QyLjIyLS4wOGEyNS4zOSwyNS4zOSwwLDAsMSwzLjQ3LjE5WiIgZmlsbD0iIzFhMWFlNiIvPjwvc3ZnPg=="
    , ne = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUuNDcsMTguODNhNi4xNiw2LjE2LDAsMCwxLDEuNjcsMSw3LDcsMCwwLDEsMS4yNSwxLjM0LDYsNiwwLDAsMSwuNzgsMS41LDQuNDUsNC40NSwwLDAsMSwuMjcsMS40NXYwLjMycTAsMC42Mi0uMDksMS4zMWEzLjU2LDMuNTYsMCwwLDEtLjQ2LDEuMzksNC41MSw0LjUxLDAsMCwxLTEuMTksMS4zMyw3LjUzLDcuNTMsMCwwLDEtMi4yOCwxLjExLDEzLjY0LDEzLjY0LDAsMCwxLTEuNjIuNDMsNy42Miw3LjYyLDAsMCwxLTEuNDEuMTNBOC44NCw4Ljg0LDAsMCwxLDIxLDMwbC0xLjYzLS4yNGE1LjIxLDUuMjEsMCwwLDEtMi0uNzJBNiw2LDAsMCwxLDE2LDI3Ljc5YTYuNzYsNi43NiwwLDAsMS0xLTEuNjEsOC4xNCw4LjE0LDAsMCwxLS41NC0xLjczLDIuNjMsMi42MywwLDAsMSwwLS4yOWMwLS4xMSwwLTAuMjEsMC0wLjMyYTQuMTksNC4xOSwwLDAsMSwxLjEtMi43MUE2LjY0LDYuNjQsMCwwLDEsMTgsMTkuMjNhNC40Niw0LjQ2LDAsMCwxLTEuMTktLjc2LDUuNDQsNS40NCwwLDAsMS0uOS0xLDYuMjEsNi4yMSwwLDAsMS0uNjItMS4xOEE2LjMzLDYuMzMsMCwwLDEsMTUsMTVhMC43MSwwLjcxLDAsMCwxLS4wNS0wLjI3VjE0LjQ5YTMuNjcsMy42NywwLDAsMSwuOTEtMi4zMyw2LjIzLDYuMjMsMCwwLDEsMi40Ny0xLjc1LDguNjMsOC42MywwLDAsMSwzLjMyLS42Myw3LDcsMCwwLDEsLjc1LDBsMC43OCwwLjA5YTQuODksNC44OSwwLDAsMSwxLjkuNjgsNS44Myw1LjgzLDAsMCwxLDEuNDEsMS4yMiw1LjU2LDUuNTYsMCwwLDEsLjg4LDEuNDYsMy44NSwzLjg1LDAsMCwxLC4zMSwxLjQzVjE1YTguNzYsOC43NiwwLDAsMS0uMDUuOTIsMy41OSwzLjU5LDAsMCwxLS4yNywxLDMuOCwzLjgsMCwwLDEtLjY0LDFBNC4yNyw0LjI3LDAsMCwxLDI1LjQ3LDE4LjgzWk0yNy45MywyNGEzLDMsMCwwLDAtLjI1LTEuMDcsNC41NCw0LjU0LDAsMCwwLS43Ni0xLjI1LDUuNTYsNS41NiwwLDAsMC0xLjI2LTEuMDhBNC41Myw0LjUzLDAsMCwwLDIzLjkyLDIwbC0wLjgyLS4wOC0wLjgyLDBhOC43Niw4Ljc2LDAsMCwwLTMuMjUuNTksNS42NCw1LjY0LDAsMCwwLTIuMzQsMS42MywyLjg1LDIuODUsMCwwLDAtLjc1LDEuNzksMS40NCwxLjQ0LDAsMCwwLDAsLjMyLDcsNywwLDAsMCwuNDIsMS4zNCw1LjA1LDUuMDUsMCwwLDAsLjc1LDEuMjUsNC44Miw0LjgyLDAsMCwwLDEuMSwxLDMuNywzLjcsMCwwLDAsMS40OS41NWwxLjUsMC4yM2E3LjcyLDcuNzIsMCwwLDAsMS4xOC4wOSw1Ljg5LDUuODksMCwwLDAsMS4xOC0uMTJxMC41OS0uMTIsMS4zOS0wLjM2YTYsNiwwLDAsMCwxLjY5LS43OCwzLjE2LDMuMTYsMCwwLDAsLjg3LTAuOSwyLjU0LDIuNTQsMCwwLDAsLjM1LTEsOC40Nyw4LjQ3LDAsMCwwLC4wNy0xLjA4VjI0Wk0xNi40NywxNC43M2E1LjgyLDUuODIsMCwwLDAsLjMzLDEuMDksNC40Niw0LjQ2LDAsMCwwLC41OSwxLDMuNTUsMy41NSwwLDAsMCwuODcuOCwzLDMsMCwwLDAsMS4yMS40NHEwLjcyLDAuMTMsMS4yMy4xOWE5LjEsOS4xLDAsMCwwLDEsLjA1LDUuODQsNS44NCwwLDAsMCwxLS4wOCw3LjUzLDcuNTMsMCwwLDAsMS4xMy0uMjksNS40Nyw1LjQ3LDAsMCwwLDEuMzctLjYzLDIuNDQsMi40NCwwLDAsMCwuNzEtMC43MSwxLjg1LDEuODUsMCwwLDAsLjI3LTAuNzlxMC0uNDIuMDctMC44N1YxNC42MmEyLjQzLDIuNDMsMCwwLDAtLjItMC44NiwzLjUsMy41LDAsMCwwLS42Mi0xLDQuNjgsNC42OCwwLDAsMC0xLS44NywzLjY4LDMuNjgsMCwwLDAtMS40MS0uNTJsLTAuNjgtLjA4LTAuNjYsMGE3LjA4LDcuMDgsMCwwLDAtMi42NS40OEE0LjU4LDQuNTgsMCwwLDAsMTcsMTMuMSwyLjI4LDIuMjgsMCwwLDAsMTYuNDcsMTQuNzNaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , re = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguMjYsMTAuNzZhNy43NSw3Ljc1LDAsMCwxLDEuNDktLjM5LDkuODMsOS44MywwLDAsMSwxLjU0LS4xMiw4LjY1LDguNjUsMCwwLDEsMy4yNi42Myw3LjM0LDcuMzQsMCwwLDEsMi43NSwxLjk0LDgsOCwwLDAsMSwxLjExLDEuNjIsMTEuNDIsMTEuNDIsMCwwLDEsLjc4LDEuODksMTIsMTIsMCwwLDEsLjQ0LDIsMTYuMzMsMTYuMzMsMCwwLDEsLjEzLDIuMDljMCwwLjU3LDAsMS4xMy0uMDgsMS42NmExMC44NywxMC44NywwLDAsMS0uMjcsMS41NSw4Ljg2LDguODYsMCwwLDEtMiw0LDYuODksNi44OSwwLDAsMS0zLjk0LDIuMTJxLTAuNTQuMTEtMSwuMTZhMTAuMTYsMTAuMTYsMCwwLDEtMSwuMDUsNy44NCw3Ljg0LDAsMCwxLTMuMTEtLjYyLDUuNTUsNS41NSwwLDAsMS0yLjQ0LTIuMDksMC43NiwwLjc2LDAsMCwxLS4xMy0wLjQsMC42MSwwLjYxLDAsMCwxLC4yNS0wLjUsMC44NywwLjg3LDAsMCwxLC41NS0wLjIsMC43LDAuNywwLDAsMSwuNjIuMzJBNCw0LDAsMCwwLDE5LDI4LjE0YTYuMjMsNi4yMywwLDAsMCwyLjQuNDcsNy40MSw3LjQxLDAsMCwwLDEuNDYtLjE1QTcuOTQsNy45NCwwLDAsMCwyNC4yOSwyOGE1LjQsNS40LDAsMCwwLDEuNjktMSw1Ljc4LDUuNzgsMCwwLDAsMS4xNy0xLjQyLDYuODEsNi44MSwwLDAsMCwuNzEtMS43NCwxMS41MiwxMS41MiwwLDAsMCwuMzItMnEwLS4zMiwwLTAuNjZWMjAuMTFBNS4yNiw1LjI2LDAsMCwxLDI3LDIxLjc1YTcuNTIsNy41MiwwLDAsMS0xLjc0LDEuMTcsOS4zMiw5LjMyLDAsMCwxLTIsLjcxLDEwLjA4LDEwLjA4LDAsMCwxLTIuMTguMjQsOC41OSw4LjU5LDAsMCwxLTMuNDYtLjcsNi4xNCw2LjE0LDAsMCwxLTIuODctMi41MSw2LjcyLDYuNzIsMCwwLDEtLjk0LTMuNDIsNyw3LDAsMCwxLC4yOS0yLDYuNzUsNi43NSwwLDAsMSwuODctMS44NSw3LDcsMCwwLDEsMS40Mi0xLjU0QTYuNzIsNi43MiwwLDAsMSwxOC4yNiwxMC43NlptOSw3LjI5YTAuNywwLjcsMCwwLDEsLjIxLTAuNDcsMC45MiwwLjkyLDAsMCwxLC40LTAuMjMsOS4yOCw5LjI4LDAsMCwwLS43Mi0yLjEyLDUuNTUsNS41NSwwLDAsMC0xLjI5LTEuNzEsNy43Myw3LjczLDAsMCwwLTIuMi0xLjM0LDYuNTgsNi41OCwwLDAsMC01LDAsNi4wNyw2LjA3LDAsMCwwLTIuNTMsMS45Myw0LjY0LDQuNjQsMCwwLDAtMSwyLjg3LDQuNTUsNC41NSwwLDAsMCwwLC42cTAsMC4zMS4wOSwwLjYzQTUuNDMsNS40MywwLDAsMCwxNi42LDIwLjcsNC44LDQuOCwwLDAsMCwxOSwyMi4xYTQuNjMsNC42MywwLDAsMCwuOTQuMTdjMC4zMiwwLC42NiwwLDEsMGE5Ljc4LDkuNzgsMCwwLDAsMi4xMy0uMjQsNi44Niw2Ljg2LDAsMCwwLDItLjc2QTUsNSwwLDAsMCwyNi41OCwyMCwzLjU2LDMuNTYsMCwwLDAsMjcuMjYsMTguMDVaIiBmaWxsPSIjMWExYWU2Ii8+PC9zdmc+"
    , ie = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO3N0cm9rZTojZDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6Mi41cHg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJtOS42NSA2Ni4wNWMzLjc5IDAgMy43OSA2IDcuNTggNnMzLjc5LTYgNy41OC02IDMuNzkgNiA3LjU4IDYgMy43OS02IDcuNTktNiAzLjc5IDYgNy41OSA2IDMuNzktNiA3LjU5LTYgMy44IDYgNy41OSA2IDMuOC02IDcuNTktNiIvPjwvc3ZnPg=="
    , oe = Math.ceil
    , se = Math.max
    , ue = function(e, t, n, r) {
      for (var i = -1, o = se(oe((t - e) / (n || 1)), 0), s = Array(o); o--; )
          s[r ? o : ++i] = e,
          e += n;
      return s
  }
    , ae = function(e, t) {
      return e === t || e != e && t != t
  }
    , ce = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
    , le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
  }
  : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }
    , fe = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
    , de = function() {
      return function(e, t) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, t) {
                  var n = []
                    , r = !0
                    , i = !1
                    , o = void 0;
                  try {
                      for (var s, u = e[Symbol.iterator](); !(r = (s = u.next()).done) && (n.push(s.value),
                      !t || n.length !== t); r = !0)
                          ;
                  } catch (e) {
                      i = !0,
                      o = e
                  } finally {
                      try {
                          !r && u.return && u.return()
                      } finally {
                          if (i)
                              throw o
                      }
                  }
                  return n
              }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
  }()
    , Me = "object" == le(ce) && ce && ce.Object === Object && ce
    , Le = "object" == ("undefined" == typeof self ? "undefined" : le(self)) && self && self.Object === Object && self
    , we = Me || Le || Function("return this")()
    , pe = we.Symbol
    , he = Object.prototype
    , ye = he.hasOwnProperty
    , De = he.toString
    , je = pe ? pe.toStringTag : void 0
    , ge = function(e) {
      var t = ye.call(e, je)
        , n = e[je];
      try {
          e[je] = void 0;
          var r = !0
      } catch (e) {}
      var i = De.call(e);
      return r && (t ? e[je] = n : delete e[je]),
      i
  }
    , Ce = Object.prototype.toString
    , Ne = function(e) {
      return Ce.call(e)
  }
    , ve = "[object Null]"
    , xe = "[object Undefined]"
    , me = pe ? pe.toStringTag : void 0
    , Ae = function(e) {
      return null == e ? void 0 === e ? xe : ve : me && me in Object(e) ? ge(e) : Ne(e)
  }
    , Se = function(e) {
      var t = void 0 === e ? "undefined" : le(e);
      return null != e && ("object" == t || "function" == t)
  }
    , Te = "[object AsyncFunction]"
    , be = "[object Function]"
    , Ee = "[object GeneratorFunction]"
    , Ie = "[object Proxy]"
    , Oe = function(e) {
      if (!Se(e))
          return !1;
      var t = Ae(e);
      return t == be || t == Ee || t == Te || t == Ie
  }
    , ze = 9007199254740991
    , ke = function(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ze
  }
    , Ye = function(e) {
      return null != e && ke(e.length) && !Oe(e)
  }
    , Ue = 9007199254740991
    , Qe = /^(?:0|[1-9]\d*)$/
    , _e = function(e, t) {
      return !!(t = null == t ? Ue : t) && ("number" == typeof e || Qe.test(e)) && e > -1 && e % 1 == 0 && e < t
  }
    , Pe = function(e, t, n) {
      if (!Se(n))
          return !1;
      var r = void 0 === t ? "undefined" : le(t);
      return !!("number" == r ? Ye(n) && _e(t, n.length) : "string" == r && t in n) && ae(n[t], e)
  }
    , We = function(e) {
      return null != e && "object" == (void 0 === e ? "undefined" : le(e))
  }
    , He = "[object Symbol]"
    , Re = function(e) {
      return "symbol" == (void 0 === e ? "undefined" : le(e)) || We(e) && Ae(e) == He
  }
    , Be = NaN
    , Fe = /^\s+|\s+$/g
    , $e = /^[-+]0x[0-9a-f]+$/i
    , qe = /^0b[01]+$/i
    , Ze = /^0o[0-7]+$/i
    , Ge = parseInt
    , Je = function(e) {
      if ("number" == typeof e)
          return e;
      if (Re(e))
          return Be;
      if (Se(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = Se(t) ? t + "" : t
      }
      if ("string" != typeof e)
          return 0 === e ? e : +e;
      e = e.replace(Fe, "");
      var n = qe.test(e);
      return n || Ze.test(e) ? Ge(e.slice(2), n ? 2 : 8) : $e.test(e) ? Be : +e
  }
    , Xe = 1 / 0
    , Ve = 1.7976931348623157e308
    , Ke = function(e) {
      if (!e)
          return 0 === e ? e : 0;
      if ((e = Je(e)) === Xe || e === -Xe)
          return (e < 0 ? -1 : 1) * Ve;
      return e == e ? e : 0
  }
    , et = function(e) {
      return function(t, n, r) {
          return r && "number" != typeof r && Pe(t, n, r) && (n = r = void 0),
          t = Ke(t),
          void 0 === n ? (n = t,
          t = 0) : n = Ke(n),
          r = void 0 === r ? t < n ? 1 : -1 : Ke(r),
          ue(t, n, r, e)
      }
  }()
    , tt = 9007199254740991
    , nt = Math.floor
    , rt = function(e, t) {
      var n = "";
      if (!e || t < 1 || t > tt)
          return n;
      do {
          t % 2 && (n += e),
          (t = nt(t / 2)) && (e += e)
      } while (t);return n
  }
    , it = function(e) {
      var t = Ke(e)
        , n = t % 1;
      return t == t ? n ? t - n : t : 0
  }
    , ot = function(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
          i[n] = t(e[n], n, e);
      return i
  }
    , st = Array.isArray
    , ut = 1 / 0
    , at = pe ? pe.prototype : void 0
    , ct = at ? at.toString : void 0
    , lt = n
    , ft = function(e) {
      return null == e ? "" : lt(e)
  }
    , dt = function(e, t, n) {
      return t = (n ? Pe(e, t, n) : void 0 === t) ? 1 : it(t),
      rt(ft(e), t)
  }
    , Mt = [!1, !1, !1, !1, !1, !1, !1, !1, !1]
    , Lt = {
      fixed: !1,
      number: null,
      notes: Mt
  }
    , wt = function(e) {
      return {
          fixed: !0,
          number: e,
          notes: Mt
      }
  }
    , pt = function(e) {
      return {
          fixed: !1,
          number: e,
          notes: Mt
      }
  }
    , ht = function(e) {
      if (!e || " " === e)
          return Lt;
      var t = e.charCodeAt(0);
      if (t >= 48 && t < 58)
          return wt(t - 48);
      throw new Error('Unexpected character: "' + e + '"')
  }
    , yt = function(e, t) {
      return fe({}, e, {
          number: t
      })
  }
    , Dt = function(e) {
      return fe({}, e, {
          number: null
      })
  }
    , jt = function(e, t) {
      var n = [].concat(function(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
              return n
          }
          return Array.from(e)
      }(e.notes))
        , r = t - 1;
      return n[r] = !n[r],
      fe({}, e, {
          notes: n
      })
  }
    , gt = function(e) {
      return fe({}, e, {
          notes: Mt
      })
  }
    , Ct = function(e) {
      return null === e.number
  }
    , Nt = function(e) {
      return !Ct(e) && !0 === e.fixed
  }
    , vt = function(e) {
      return !Ct(e) && !1 === e.fixed
  }
    , xt = function(e) {
      return "" + e + dt(" ", 9 - e.length)
  }
    , mt = function(e) {
      return e.slice(1).split("\n").map(xt).join("").slice(0, 81).split("").map(ht)
  }
    , At = function(e, t, n) {
      var r = function(e) {
          return e.slice()
      }(e);
      return r[t] = n,
      r
  }
    , St = function(e) {
      return et(9 * e, 9 * e + 9)
  }
    , Tt = function(e) {
      return et(e, 81, 9)
  }
    , bt = function(e) {
      for (var t = 27 * (e / 3 | 0) + e % 3 * 3, n = [], r = t; r < t + 27; r += 9)
          for (var i = 0; i < 3; i++)
              n.push(r + i);
      return n
  }
    , Et = 4
    , It = "#fff"
    , Ot = "hsl(240, 30%, 95%)"
    , zt = "#ccc"
    , kt = "#444"
    , Yt = "hsl(240, 60%, 50%)"
    , Ut = 18
    , Qt = .05
    , _t = .78
    , Pt = .9
    , Wt = .15
    , Ht = 2e3
    , Rt = et(81).map(function() {
      return {
          errorObject: null,
          startTime: null,
          currentOpacity: 0
      }
  })
    , Bt = window.matchMedia("(any-pointer:coarse), (any-pointer:fine), (any-pointer:none)").matches
    , Ft = window.matchMedia("(any-pointer: fine)").matches || !Bt
    , $t = "NEW_GAME"
    , qt = function(e) {
      return {
          type: $t,
          level: e
      }
  }
    , Zt = "SET_CURSOR"
    , Gt = function(e) {
      return {
          type: Zt,
          index: e
      }
  }
    , Jt = "SET_NUMBER"
    , Xt = "SET_NUMBER_OR_NOTE"
    , Vt = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return {
          type: Xt,
          number: e,
          invertMode: t
      }
  }
    , Kt = "CLICK"
    , en = function(e, t) {
      return {
          type: Kt,
          cell: e,
          note: t
      }
  }
    , tn = "CLEAR_CELL"
    , nn = function() {
      return {
          type: tn
      }
  }
    , rn = "CURSOR_UP"
    , on = "CURSOR_DOWN"
    , sn = "CURSOR_LEFT"
    , un = "CURSOR_RIGHT"
    , an = "TOGGLE_NOTE"
    , cn = "CLEAR_NOTES"
    , ln = function() {
      return {
          type: cn
      }
  }
    , fn = "NOTE_MODE"
    , dn = "NUMBER_MODE"
    , Mn = "TOGGLE_MODE"
    , Ln = function() {
      return {
          type: Mn
      }
  }
    , wn = "TOGGLE_NUMBER"
    , pn = function(e) {
      return {
          type: wn,
          number: e
      }
  }
    , hn = "SOLVE"
    , yn = {
      easy: ["\n4   7   6\n 3 8  2\n6  4  39\n5  29 8\n   7 8\n  7 56  3\n 45  1  9\n  8  4 3\n2   3   8", "\n9  73  6\n4 2   9\n7  25   8\n  76 8\n 9  4  2\n   3 25\n2   61  9\n  5   7 4\n 1  87  2", "\n5  2  9\n  9 46 8\n3    751\n 5  6  4\n   354\n 6  9  3\n 318    7\n 7 61 2\n  5  9  3", "\n2      6\n 7 81 4\n846  9\n71    24\n   134\n 64    91\n   4  739\n  9 67 2\n 3      4", "\n3 4   8 6\n  78 93\n 2 6  1\n 9145 63\n    2  1\n 48 3\n   38  2\n     7\n  519   3", "\n8       1\n 21 7   5\n 9  8  27\n   627\n7658 3\n4   15 86\n9 4   652\n    9 1\n 7   63", "\n  253\n     83 6\n 1  4 5 8\n1  8   75\n  59176\n79   6 14\n521\n 69   13\n        9", "\n2 6 7\n1    5824\n98 4  617\n 2 54\n   39 7\n  78 1569\n    832\n  2 541\n7     4 5"],
      medium: ["\n8   59\n  23 65 8\n 1  24\n7 4   29\n\n 26   1 5\n   59  1\n6 51 83\n   46   9", "\n  9  5  4\n 82 74  3\n 45 6  2\n5 6    3\n\n 1    9 6\n 5  8 19\n8  49 67\n6  2  3", "\n   26\n56  7   1\n     19 6\n  4  67\n27 815 49\n  84  5\n7 51\n1   3  75\n    54", "\n 8 2  93\n    19 6\n  53 4\n     36\n 547 132\n  76\n   9 81\n 2 16\n 16  7 5", "\n        3\n  5  68\n  693\n9    3 82\n2 8   746\n   7\n81   247\n   47 6\n     5", "\n    4   9\n56 9\n8 1   4\n1 3   8\n    7\n982 1  4\n 2  9  7\n   6 2  8\n   8   2", "\n 27  65\n\n1   3  24\n7  46 95\n      3\n 51\n2    74 1\n9   2\n   64   3", "\n  8  3\n 56  78\n7       3\n 84   2\n 9    6 8\n   1  35\n6  48\n   52 1\n     9"],
      hard: ["\n 643  9 2\n1 7\n8 9 2   6\n  6  9\n  58 24\n   6  5\n7   4 6 9\n      2 4\n4 8  635", "\n 9 41 6 3\n     7 91\n    8 4\n 1 3   8\n3 4   9 2\n 5   1 4\n  1 7\n58 1\n9 7 38 5", "\n 261 8  9\n     2\n   46  5\n8 2    47\n  42 59\n15    2 8\n 6  94\n   8\n3  5 687", "\n 17  6\n43  91\n8 5 47\n 7  5  8\n  1 8 2\n 4  6  1\n   43 6 7\n   97  21\n   6  39", "\n8 1\n4     937\n  3 6\n  7    43\n6  9 3  8\n   6 7\n     1 6\n  23 8 5\n  85", "\n\n    4   6\n 3   28 5\n 6  17 53\n 4    2\n 75     1\n9  1  36\n   47 9\n684 9", "\n       7\n5 7 4   8\n   8   41\n     8\n8  251\n  9 7  3\n4 6\n 28 1   6\n 9 6 2  7", "\n       4\n3   8  2\n 4 9  3\n6    9 1\n  1\n   72 9 3\n 6 8    1\n    3   5\n 7  6 83"],
      nightmare: ["\n7      9\n 623\n 59  162\n9    3\n2 61795 8\n   6    9\n 782  95\n     481\n 2      6", "\n 19 24  6\n8  1    3\n     6  5\n6 1  2 3\n3   6   8\n 9 8  4 2\n1  5\n9    7  1\n4  61 35", "\n2   84  1\n  6 9\n   1 7  6\n4 7  8\n 623 958\n   7  4 2\n9  4 6\n    5 3\n6  83   9", "\n 9  835 6\n   1 249\n     9  1\n    6  42\n  8 7 9\n96  3\n8  4\n 293 7\n6 482  3", "\n 38    95\n        7\n1  3 84 2\n    37\n 9 6\n      8\n   1\n42      3\n 7659", "\n    9   8\n 8 1 4 79\n 2 7    4\n      1\n   2 18\n  1 6\n57 6\n     3 9\n4 8   6 3", "\n62     4\n1    3\n   28 7\n   9   65\n      3\n8 7\n    2 8\n3 21\n 5   619", "\n54    6 1\n6  78 9\n73   6\n  1\n    7   2\n   8 9\n2      4\n  654 19\n      5 6"]
  }
    , Dn = function(e, t) {
      return 9 * t + e
  }
    , jn = function(e) {
      return {
          x: e % 9,
          y: Math.floor(e / 9)
      }
  }
    , gn = function(e, t) {
      return e.map(function(e) {
          return Nt(e) ? wt(t[e.number - 1]) : e
      })
  }
    , Cn = y(function(e, t) {
      return Dn(8 - t, e)
  })
    , Nn = y(function(e, t) {
      return Dn(8 - e, t)
  })
    , vn = y(function(e, t) {
      return Dn(e, 8 - t)
  })
    , xn = function(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; )
          e[i + n] = t[n];
      return e
  }
    , mn = "[object Arguments]"
    , An = function(e) {
      return We(e) && Ae(e) == mn
  }
    , Sn = Object.prototype
    , Tn = Sn.hasOwnProperty
    , bn = Sn.propertyIsEnumerable
    , En = An(function() {
      return arguments
  }()) ? An : function(e) {
      return We(e) && Tn.call(e, "callee") && !bn.call(e, "callee")
  }
    , In = pe ? pe.isConcatSpreadable : void 0
    , On = function(e) {
      return st(e) || En(e) || !!(In && e && e[In])
  }
    , zn = j
    , kn = function() {
      this.__data__ = [],
      this.size = 0
  }
    , Yn = function(e, t) {
      for (var n = e.length; n--; )
          if (ae(e[n][0], t))
              return n;
      return -1
  }
    , Un = Array.prototype.splice
    , Qn = function(e) {
      var t = this.__data__
        , n = Yn(t, e);
      return !(n < 0 || (n == t.length - 1 ? t.pop() : Un.call(t, n, 1),
      --this.size,
      0))
  }
    , _n = function(e) {
      var t = this.__data__
        , n = Yn(t, e);
      return n < 0 ? void 0 : t[n][1]
  }
    , Pn = function(e) {
      return Yn(this.__data__, e) > -1
  }
    , Wn = function(e, t) {
      var n = this.__data__
        , r = Yn(n, e);
      return r < 0 ? (++this.size,
      n.push([e, t])) : n[r][1] = t,
      this
  };
  g.prototype.clear = kn,
  g.prototype.delete = Qn,
  g.prototype.get = _n,
  g.prototype.has = Pn,
  g.prototype.set = Wn;
  var Hn = g
    , Rn = function() {
      this.__data__ = new Hn,
      this.size = 0
  }
    , Bn = function(e) {
      var t = this.__data__
        , n = t.delete(e);
      return this.size = t.size,
      n
  }
    , Fn = function(e) {
      return this.__data__.get(e)
  }
    , $n = function(e) {
      return this.__data__.has(e)
  }
    , qn = we["__core-js_shared__"]
    , Zn = function() {
      var e = /[^.]+$/.exec(qn && qn.keys && qn.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : ""
  }()
    , Gn = function(e) {
      return !!Zn && Zn in e
  }
    , Jn = Function.prototype.toString
    , Xn = function(e) {
      if (null != e) {
          try {
              return Jn.call(e)
          } catch (e) {}
          try {
              return e + ""
          } catch (e) {}
      }
      return ""
  }
    , Vn = /^\[object .+?Constructor\]$/
    , Kn = Function.prototype
    , er = Object.prototype
    , tr = Kn.toString
    , nr = er.hasOwnProperty
    , rr = RegExp("^" + tr.call(nr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
    , ir = function(e) {
      return !(!Se(e) || Gn(e)) && (Oe(e) ? rr : Vn).test(Xn(e))
  }
    , or = function(e, t) {
      return null == e ? void 0 : e[t]
  }
    , sr = function(e, t) {
      var n = or(e, t);
      return ir(n) ? n : void 0
  }
    , ur = sr(we, "Map")
    , ar = sr(Object, "create")
    , cr = function() {
      this.__data__ = ar ? ar(null) : {},
      this.size = 0
  }
    , lr = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0,
      t
  }
    , fr = "__lodash_hash_undefined__"
    , dr = Object.prototype.hasOwnProperty
    , Mr = function(e) {
      var t = this.__data__;
      if (ar) {
          var n = t[e];
          return n === fr ? void 0 : n
      }
      return dr.call(t, e) ? t[e] : void 0
  }
    , Lr = Object.prototype.hasOwnProperty
    , wr = function(e) {
      var t = this.__data__;
      return ar ? void 0 !== t[e] : Lr.call(t, e)
  }
    , pr = "__lodash_hash_undefined__"
    , hr = function(e, t) {
      var n = this.__data__;
      return this.size += this.has(e) ? 0 : 1,
      n[e] = ar && void 0 === t ? pr : t,
      this
  };
  C.prototype.clear = cr,
  C.prototype.delete = lr,
  C.prototype.get = Mr,
  C.prototype.has = wr,
  C.prototype.set = hr;
  var yr = C
    , Dr = function() {
      this.size = 0,
      this.__data__ = {
          hash: new yr,
          map: new (ur || Hn),
          string: new yr
      }
  }
    , jr = function(e) {
      var t = void 0 === e ? "undefined" : le(e);
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
  }
    , gr = function(e, t) {
      var n = e.__data__;
      return jr(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
  }
    , Cr = function(e) {
      var t = gr(this, e).delete(e);
      return this.size -= t ? 1 : 0,
      t
  }
    , Nr = function(e) {
      return gr(this, e).get(e)
  }
    , vr = function(e) {
      return gr(this, e).has(e)
  }
    , xr = function(e, t) {
      var n = gr(this, e)
        , r = n.size;
      return n.set(e, t),
      this.size += n.size == r ? 0 : 1,
      this
  };
  N.prototype.clear = Dr,
  N.prototype.delete = Cr,
  N.prototype.get = Nr,
  N.prototype.has = vr,
  N.prototype.set = xr;
  var mr = N
    , Ar = 200
    , Sr = function(e, t) {
      var n = this.__data__;
      if (n instanceof Hn) {
          var r = n.__data__;
          if (!ur || r.length < Ar - 1)
              return r.push([e, t]),
              this.size = ++n.size,
              this;
          n = this.__data__ = new mr(r)
      }
      return n.set(e, t),
      this.size = n.size,
      this
  };
  v.prototype.clear = Rn,
  v.prototype.delete = Bn,
  v.prototype.get = Fn,
  v.prototype.has = $n,
  v.prototype.set = Sr;
  var Tr = v
    , br = "__lodash_hash_undefined__"
    , Er = function(e) {
      return this.__data__.set(e, br),
      this
  }
    , Ir = function(e) {
      return this.__data__.has(e)
  };
  x.prototype.add = x.prototype.push = Er,
  x.prototype.has = Ir;
  var Or = x
    , zr = function(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e))
              return !0;
      return !1
  }
    , kr = function(e, t) {
      return e.has(t)
  }
    , Yr = 1
    , Ur = 2
    , Qr = function(e, t, n, r, i, o) {
      var s = n & Yr
        , u = e.length
        , a = t.length;
      if (u != a && !(s && a > u))
          return !1;
      var c = o.get(e);
      if (c && o.get(t))
          return c == t;
      var l = -1
        , f = !0
        , d = n & Ur ? new Or : void 0;
      for (o.set(e, t),
      o.set(t, e); ++l < u; ) {
          var M = e[l]
            , L = t[l];
          if (r)
              var w = s ? r(L, M, l, t, e, o) : r(M, L, l, e, t, o);
          if (void 0 !== w) {
              if (w)
                  continue;
              f = !1;
              break
          }
          if (d) {
              if (!zr(t, function(e, t) {
                  if (!kr(d, t) && (M === e || i(M, e, n, r, o)))
                      return d.push(t)
              })) {
                  f = !1;
                  break
              }
          } else if (M !== L && !i(M, L, n, r, o)) {
              f = !1;
              break
          }
      }
      return o.delete(e),
      o.delete(t),
      f
  }
    , _r = we.Uint8Array
    , Pr = function(e) {
      var t = -1
        , n = Array(e.size);
      return e.forEach(function(e, r) {
          n[++t] = [r, e]
      }),
      n
  }
    , Wr = function(e) {
      var t = -1
        , n = Array(e.size);
      return e.forEach(function(e) {
          n[++t] = e
      }),
      n
  }
    , Hr = 1
    , Rr = 2
    , Br = "[object Boolean]"
    , Fr = "[object Date]"
    , $r = "[object Error]"
    , qr = "[object Map]"
    , Zr = "[object Number]"
    , Gr = "[object RegExp]"
    , Jr = "[object Set]"
    , Xr = "[object String]"
    , Vr = "[object Symbol]"
    , Kr = "[object ArrayBuffer]"
    , ei = "[object DataView]"
    , ti = pe ? pe.prototype : void 0
    , ni = ti ? ti.valueOf : void 0
    , ri = function(e, t, n, r, i, o, s) {
      switch (n) {
      case ei:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
          e = e.buffer,
          t = t.buffer;
      case Kr:
          return !(e.byteLength != t.byteLength || !o(new _r(e), new _r(t)));
      case Br:
      case Fr:
      case Zr:
          return ae(+e, +t);
      case $r:
          return e.name == t.name && e.message == t.message;
      case Gr:
      case Xr:
          return e == t + "";
      case qr:
          var u = Pr;
      case Jr:
          var a = r & Hr;
          if (u || (u = Wr),
          e.size != t.size && !a)
              return !1;
          var c = s.get(e);
          if (c)
              return c == t;
          r |= Rr,
          s.set(e, t);
          var l = Qr(u(e), u(t), r, i, o, s);
          return s.delete(e),
          l;
      case Vr:
          if (ni)
              return ni.call(e) == ni.call(t)
      }
      return !1
  }
    , ii = function(e, t, n) {
      var r = t(e);
      return st(e) ? r : xn(r, n(e))
  }
    , oi = function(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
          var s = e[n];
          t(s, n, e) && (o[i++] = s)
      }
      return o
  }
    , si = function() {
      return []
  }
    , ui = Object.prototype.propertyIsEnumerable
    , ai = Object.getOwnPropertySymbols
    , ci = ai ? function(e) {
      return null == e ? [] : (e = Object(e),
      oi(ai(e), function(t) {
          return ui.call(e, t)
      }))
  }
  : si
    , li = function(e, t) {
      for (var n = -1, r = Array(e); ++n < e; )
          r[n] = t(n);
      return r
  }
    , fi = function() {
      return !1
  }
    , di = t(function(e, t) {
      var n = t && !t.nodeType && t
        , r = n && e && !e.nodeType && e
        , i = r && r.exports === n ? we.Buffer : void 0
        , o = (i ? i.isBuffer : void 0) || fi;
      e.exports = o
  })
    , Mi = {};
  Mi["[object Float32Array]"] = Mi["[object Float64Array]"] = Mi["[object Int8Array]"] = Mi["[object Int16Array]"] = Mi["[object Int32Array]"] = Mi["[object Uint8Array]"] = Mi["[object Uint8ClampedArray]"] = Mi["[object Uint16Array]"] = Mi["[object Uint32Array]"] = !0,
  Mi["[object Arguments]"] = Mi["[object Array]"] = Mi["[object ArrayBuffer]"] = Mi["[object Boolean]"] = Mi["[object DataView]"] = Mi["[object Date]"] = Mi["[object Error]"] = Mi["[object Function]"] = Mi["[object Map]"] = Mi["[object Number]"] = Mi["[object Object]"] = Mi["[object RegExp]"] = Mi["[object Set]"] = Mi["[object String]"] = Mi["[object WeakMap]"] = !1;
  var Li = function(e) {
      return We(e) && ke(e.length) && !!Mi[Ae(e)]
  }
    , wi = function(e) {
      return function(t) {
          return e(t)
      }
  }
    , pi = t(function(e, t) {
      var n = t && !t.nodeType && t
        , r = n && e && !e.nodeType && e
        , i = r && r.exports === n && Me.process
        , o = function() {
          try {
              return i && i.binding && i.binding("util")
          } catch (e) {}
      }();
      e.exports = o
  })
    , hi = pi && pi.isTypedArray
    , yi = hi ? wi(hi) : Li
    , Di = Object.prototype.hasOwnProperty
    , ji = function(e, t) {
      var n = st(e)
        , r = !n && En(e)
        , i = !n && !r && di(e)
        , o = !n && !r && !i && yi(e)
        , s = n || r || i || o
        , u = s ? li(e.length, String) : []
        , a = u.length;
      for (var c in e)
          !t && !Di.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || _e(c, a)) || u.push(c);
      return u
  }
    , gi = Object.prototype
    , Ci = function(e) {
      var t = e && e.constructor;
      return e === ("function" == typeof t && t.prototype || gi)
  }
    , Ni = function(e, t) {
      return function(n) {
          return e(t(n))
      }
  }(Object.keys, Object)
    , vi = Object.prototype.hasOwnProperty
    , xi = function(e) {
      if (!Ci(e))
          return Ni(e);
      var t = [];
      for (var n in Object(e))
          vi.call(e, n) && "constructor" != n && t.push(n);
      return t
  }
    , mi = function(e) {
      return Ye(e) ? ji(e) : xi(e)
  }
    , Ai = function(e) {
      return ii(e, mi, ci)
  }
    , Si = 1
    , Ti = Object.prototype.hasOwnProperty
    , bi = function(e, t, n, r, i, o) {
      var s = n & Si
        , u = Ai(e)
        , a = u.length;
      if (a != Ai(t).length && !s)
          return !1;
      for (var c = a; c--; ) {
          var l = u[c];
          if (!(s ? l in t : Ti.call(t, l)))
              return !1
      }
      var f = o.get(e);
      if (f && o.get(t))
          return f == t;
      var d = !0;
      o.set(e, t),
      o.set(t, e);
      for (var M = s; ++c < a; ) {
          var L = e[l = u[c]]
            , w = t[l];
          if (r)
              var p = s ? r(w, L, l, t, e, o) : r(L, w, l, e, t, o);
          if (!(void 0 === p ? L === w || i(L, w, n, r, o) : p)) {
              d = !1;
              break
          }
          M || (M = "constructor" == l)
      }
      if (d && !M) {
          var h = e.constructor
            , y = t.constructor;
          h != y && "constructor"in e && "constructor"in t && !("function" == typeof h && h instanceof h && "function" == typeof y && y instanceof y) && (d = !1)
      }
      return o.delete(e),
      o.delete(t),
      d
  }
    , Ei = sr(we, "DataView")
    , Ii = sr(we, "Promise")
    , Oi = sr(we, "Set")
    , zi = sr(we, "WeakMap")
    , ki = Xn(Ei)
    , Yi = Xn(ur)
    , Ui = Xn(Ii)
    , Qi = Xn(Oi)
    , _i = Xn(zi)
    , Pi = Ae;
  (Ei && "[object DataView]" != Pi(new Ei(new ArrayBuffer(1))) || ur && "[object Map]" != Pi(new ur) || Ii && "[object Promise]" != Pi(Ii.resolve()) || Oi && "[object Set]" != Pi(new Oi) || zi && "[object WeakMap]" != Pi(new zi)) && (Pi = function(e) {
      var t = Ae(e)
        , n = "[object Object]" == t ? e.constructor : void 0
        , r = n ? Xn(n) : "";
      if (r)
          switch (r) {
          case ki:
              return "[object DataView]";
          case Yi:
              return "[object Map]";
          case Ui:
              return "[object Promise]";
          case Qi:
              return "[object Set]";
          case _i:
              return "[object WeakMap]"
          }
      return t
  }
  );
  var Wi = Pi
    , Hi = 1
    , Ri = "[object Arguments]"
    , Bi = "[object Array]"
    , Fi = "[object Object]"
    , $i = Object.prototype.hasOwnProperty
    , qi = function(e, t, n, r, i, o) {
      var s = st(e)
        , u = st(t)
        , a = s ? Bi : Wi(e)
        , c = u ? Bi : Wi(t)
        , l = (a = a == Ri ? Fi : a) == Fi
        , f = (c = c == Ri ? Fi : c) == Fi
        , d = a == c;
      if (d && di(e)) {
          if (!di(t))
              return !1;
          s = !0,
          l = !1
      }
      if (d && !l)
          return o || (o = new Tr),
          s || yi(e) ? Qr(e, t, n, r, i, o) : ri(e, t, a, n, r, i, o);
      if (!(n & Hi)) {
          var M = l && $i.call(e, "__wrapped__")
            , L = f && $i.call(t, "__wrapped__");
          if (M || L) {
              var w = M ? e.value() : e
                , p = L ? t.value() : t;
              return o || (o = new Tr),
              i(w, p, n, r, o)
          }
      }
      return !!d && (o || (o = new Tr),
      bi(e, t, n, r, i, o))
  }
    , Zi = m
    , Gi = 1
    , Ji = 2
    , Xi = function(e, t, n, r) {
      var i = n.length
        , o = i
        , s = !r;
      if (null == e)
          return !o;
      for (e = Object(e); i--; ) {
          var u = n[i];
          if (s && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
              return !1
      }
      for (; ++i < o; ) {
          var a = (u = n[i])[0]
            , c = e[a]
            , l = u[1];
          if (s && u[2]) {
              if (void 0 === c && !(a in e))
                  return !1
          } else {
              var f = new Tr;
              if (r)
                  var d = r(c, l, a, e, t, f);
              if (!(void 0 === d ? Zi(l, c, Gi | Ji, r, f) : d))
                  return !1
          }
      }
      return !0
  }
    , Vi = function(e) {
      return e == e && !Se(e)
  }
    , Ki = function(e) {
      for (var t = mi(e), n = t.length; n--; ) {
          var r = t[n]
            , i = e[r];
          t[n] = [r, i, Vi(i)]
      }
      return t
  }
    , eo = function(e, t) {
      return function(n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n))
      }
  }
    , to = function(e) {
      var t = Ki(e);
      return 1 == t.length && t[0][2] ? eo(t[0][0], t[0][1]) : function(n) {
          return n === e || Xi(n, e, t)
      }
  }
    , no = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
    , ro = /^\w*$/
    , io = function(e, t) {
      if (st(e))
          return !1;
      var n = void 0 === e ? "undefined" : le(e);
      return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Re(e)) || ro.test(e) || !no.test(e) || null != t && e in Object(t)
  }
    , oo = "Expected a function";
  A.Cache = mr;
  var so = A
    , uo = 500
    , ao = /^\./
    , co = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    , lo = /\\(\\)?/g
    , fo = function(e) {
      var t = so(e, function(e) {
          return n.size === uo && n.clear(),
          e
      })
        , n = t.cache;
      return t
  }(function(e) {
      var t = [];
      return ao.test(e) && t.push(""),
      e.replace(co, function(e, n, r, i) {
          t.push(r ? i.replace(lo, "$1") : n || e)
      }),
      t
  })
    , Mo = function(e, t) {
      return st(e) ? e : io(e, t) ? [e] : fo(ft(e))
  }
    , Lo = 1 / 0
    , wo = function(e) {
      if ("string" == typeof e || Re(e))
          return e;
      var t = e + "";
      return "0" == t && 1 / e == -Lo ? "-0" : t
  }
    , po = function(e, t) {
      for (var n = 0, r = (t = Mo(t, e)).length; null != e && n < r; )
          e = e[wo(t[n++])];
      return n && n == r ? e : void 0
  }
    , ho = function(e, t, n) {
      var r = null == e ? void 0 : po(e, t);
      return void 0 === r ? n : r
  }
    , yo = function(e, t) {
      return null != e && t in Object(e)
  }
    , Do = function(e, t, n) {
      for (var r = -1, i = (t = Mo(t, e)).length, o = !1; ++r < i; ) {
          var s = wo(t[r]);
          if (!(o = null != e && n(e, s)))
              break;
          e = e[s]
      }
      return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && ke(i) && _e(s, i) && (st(e) || En(e))
  }
    , jo = function(e, t) {
      return null != e && Do(e, t, yo)
  }
    , go = 1
    , Co = 2
    , No = function(e, t) {
      return io(e) && Vi(t) ? eo(wo(e), t) : function(n) {
          var r = ho(n, e);
          return void 0 === r && r === t ? jo(n, e) : Zi(t, r, go | Co)
      }
  }
    , vo = function(e) {
      return e
  }
    , xo = function(e) {
      return function(t) {
          return null == t ? void 0 : t[e]
      }
  }
    , mo = function(e) {
      return function(t) {
          return po(t, e)
      }
  }
    , Ao = function(e) {
      return io(e) ? xo(wo(e)) : mo(e)
  }
    , So = function(e) {
      return "function" == typeof e ? e : null == e ? vo : "object" == (void 0 === e ? "undefined" : le(e)) ? st(e) ? No(e[0], e[1]) : to(e) : Ao(e)
  }
    , To = function(e) {
      return function(t, n, r) {
          for (var i = -1, o = Object(t), s = r(t), u = s.length; u--; ) {
              var a = s[e ? u : ++i];
              if (!1 === n(o[a], a, o))
                  break
          }
          return t
      }
  }()
    , bo = function(e, t) {
      return function(n, r) {
          if (null == n)
              return n;
          if (!Ye(n))
              return e(n, r);
          for (var i = n.length, o = t ? i : -1, s = Object(n); (t ? o-- : ++o < i) && !1 !== r(s[o], o, s); )
              ;
          return n
      }
  }(function(e, t) {
      return e && To(e, t, mi)
  })
    , Eo = function(e, t) {
      var n = -1
        , r = Ye(e) ? Array(e.length) : [];
      return bo(e, function(e, i, o) {
          r[++n] = t(e, i, o)
      }),
      r
  }
    , Io = function(e, t) {
      return (st(e) ? ot : Eo)(e, So(t, 3))
  }
    , Oo = function(e, t) {
      return zn(Io(e, t), 1)
  }
    , zo = function(e) {
      return 0 === i(e).length
  }
    , ko = h(window.difficulty || "easy")
    , Yo = {
      board: ko.board,
      generatedFrom: ko.generatedFrom,
      cursor: null,
      noteMode: !1
  }
    , Uo = "object" == ("undefined" == typeof global ? "undefined" : le(global)) && global && global.Object === Object && global
    , Qo = "object" == ("undefined" == typeof self ? "undefined" : le(self)) && self && self.Object === Object && self
    , _o = (Uo || Qo || Function("return this")()).Symbol
    , Po = Object.prototype
    , Wo = Po.hasOwnProperty
    , Ho = Po.toString
    , Ro = _o ? _o.toStringTag : void 0
    , Bo = Object.prototype.toString
    , Fo = "[object Null]"
    , $o = "[object Undefined]"
    , qo = _o ? _o.toStringTag : void 0
    , Zo = function(e, t) {
      return function(n) {
          return e(t(n))
      }
  }(Object.getPrototypeOf, Object)
    , Go = "[object Object]"
    , Jo = Function.prototype
    , Xo = Object.prototype
    , Vo = Jo.toString
    , Ko = Xo.hasOwnProperty
    , es = Vo.call(Object)
    , ts = function(e) {
      var t, n = e.Symbol;
      return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
      n.observable = t) : t = "@@observable",
      t
  }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")())
    , ns = {
      INIT: "@@redux/INIT"
  }
    , rs = {
      37: function() {
          return {
              type: sn
          }
      },
      38: function() {
          return {
              type: rn
          }
      },
      39: function() {
          return {
              type: un
          }
      },
      40: function() {
          return {
              type: on
          }
      },
      32: nn,
      8: nn,
      46: nn,
      27: function() {
          return {
              type: dn
          }
      },
      78: Ln
  }
    , is = null
    , os = Promise.all([_, P, W, H, R, B, F, q, Z, G, J, X, V, K, ee, te, ne, re, ie].map(e)).then(function(e) {
      return {
          entries: {},
          assets: e,
          get: function(e, t, n) {
              var r = function(e, t, n) {
                  return e + "-" + Math.round(t) + "-" + Math.round(n)
              }(e, t, n);
              if (this.entries[r])
                  return this.entries[r];
              var i = function(e, t, n) {
                  var r = document.createElement("canvas");
                  return r.width = t,
                  r.height = n,
                  r.getContext("2d").drawImage(e, 0, 0, t, n),
                  r
              }(this.assets[e], t, n);
              return this.entries[r] = i,
              i
          },
          invalidate: function() {
              this.entries = {}
          }
      }
  });
  $(function() {
      os.then(function(e) {
          setTimeout(T, 1),
          s(),
          O(S, e, M, document.getElementById("sudoku"), function(e) {
              !function(e) {
                  document.addEventListener("keydown", function(t) {
                      !function(e) {
                          return !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                      }(t) ? function(e) {
                          return !0 === e.shiftKey && !e.metaKey && !e.altKey && !e.ctrlKey
                      }(t) && (t.keyCode > 48 && t.keyCode < 58 && (t.preventDefault(),
                      e.dispatch(Vt(t.keyCode - 48, !0))),
                      32 !== t.keyCode && 8 !== t.keyCode && 46 !== t.keyCode || (t.preventDefault(),
                      e.dispatch(ln()))) : (t.keyCode > 48 && t.keyCode < 58 && (t.preventDefault(),
                      e.dispatch(Vt(t.keyCode - 48))),
                      rs[t.keyCode] && (t.preventDefault(),
                      e.dispatch(rs[t.keyCode]())))
                  })
              }(e),
              Q(e)
          })
      })
  })
}();
//# sourceMappingURL=sudoku-99430e1c7cbb2d64f3cccde1d4f5bc5d.map
