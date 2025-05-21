import j, { useState as qe, useEffect as Oe, useCallback as Se, useContext as ht, useReducer as xt, useMemo as Be, forwardRef as mt, useRef as Le, useImperativeHandle as bt } from "react";
import m, { css as gt, createGlobalStyle as vt } from "styled-components";
function wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oe = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function jt() {
  if (Ae) return Q;
  Ae = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, c, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      u = {};
      for (var p in c)
        p !== "key" && (u[p] = c[p]);
    } else u = c;
    return c = u.ref, {
      $$typeof: e,
      type: n,
      key: f,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return Q.Fragment = t, Q.jsx = r, Q.jsxs = r, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Et() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === W ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case F:
          return "Fragment";
        case R:
          return "Profiler";
        case Z:
          return "StrictMode";
        case C:
          return "Suspense";
        case $:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case _:
            return "Portal";
          case z:
            return (i.displayName || "Context") + ".Provider";
          case S:
            return (i._context.displayName || "Context") + ".Consumer";
          case B:
            var d = i.render;
            return i = i.displayName, i || (i = d.displayName || d.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case K:
            return d = i.displayName || null, d !== null ? d : e(i.type) || "Memo";
          case N:
            d = i._payload, i = i._init;
            try {
              return e(i(d));
            } catch {
            }
        }
      return null;
    }
    function t(i) {
      return "" + i;
    }
    function r(i) {
      try {
        t(i);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var v = d.error, E = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(i);
      }
    }
    function n(i) {
      if (i === F) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === N)
        return "<...>";
      try {
        var d = e(i);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var i = Y.A;
      return i === null ? null : i.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(i) {
      if (ne.call(i, "key")) {
        var d = Object.getOwnPropertyDescriptor(i, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function p(i, d) {
      function v() {
        a || (a = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: v,
        configurable: !0
      });
    }
    function x() {
      var i = e(this.type);
      return l[i] || (l[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function g(i, d, v, E, G, A, xe, me) {
      return v = A.ref, i = {
        $$typeof: k,
        type: i,
        key: d,
        props: A,
        _owner: G
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function b(i, d, v, E, G, A, xe, me) {
      var y = d.children;
      if (y !== void 0)
        if (E)
          if (he(y)) {
            for (E = 0; E < y.length; E++)
              P(y[E]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(y);
      if (ne.call(d, "key")) {
        y = e(i);
        var V = Object.keys(d).filter(function(pt) {
          return pt !== "key";
        });
        E = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", w[y + E] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          y,
          V,
          y
        ), w[y + E] = !0);
      }
      if (y = null, v !== void 0 && (r(v), y = "" + v), f(d) && (r(d.key), y = "" + d.key), "key" in d) {
        v = {};
        for (var be in d)
          be !== "key" && (v[be] = d[be]);
      } else v = d;
      return y && p(
        v,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), g(
        i,
        y,
        A,
        G,
        c(),
        v,
        xe,
        me
      );
    }
    function P(i) {
      typeof i == "object" && i !== null && i.$$typeof === k && i._store && (i._store.validated = 1);
    }
    var O = j, k = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), z = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), Y = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, he = Array.isArray, s = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var a, l = {}, h = O["react-stack-bottom-frame"].bind(
      O,
      u
    )(), T = s(n(u)), w = {};
    ee.Fragment = F, ee.jsx = function(i, d, v, E, G) {
      var A = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return b(
        i,
        d,
        v,
        !1,
        E,
        G,
        A ? Error("react-stack-top-frame") : h,
        A ? s(n(i)) : T
      );
    }, ee.jsxs = function(i, d, v, E, G) {
      var A = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return b(
        i,
        d,
        v,
        !0,
        E,
        G,
        A ? Error("react-stack-top-frame") : h,
        A ? s(n(i)) : T
      );
    };
  }()), ee;
}
var Ie;
function yt() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? oe.exports = jt() : oe.exports = Et()), oe.exports;
}
var o = yt();
const q = new Audio("/audio/tetris.mp3");
q.loop = !0;
q.volume = 0.8;
let ie = !1, Me = !1;
const Ee = /* @__PURE__ */ new Set(), De = () => Ee.forEach((e) => e());
function Ve() {
  const [, e] = qe(0);
  Oe(() => {
    const n = () => e((c) => c + 1);
    return Ee.add(n), () => {
      Ee.delete(n);
    };
  }, []);
  const t = Se(() => {
    ie ? q.pause() : q.play().catch(() => {
    }), ie = !ie, De();
  }, []), r = Se(() => {
    q.muted = !q.muted, Me = q.muted, De();
  }, []);
  return { isPlaying: ie, isMuted: Me, togglePlay: t, toggleMute: r };
}
var Je = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ze = j.createContext && /* @__PURE__ */ j.createContext(Je), Pt = ["attr", "size", "title"];
function Ot(e, t) {
  if (e == null) return {};
  var r = kt(e, t), n, c;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (c = 0; c < u.length; c++)
      n = u[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kt(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ue.apply(this, arguments);
}
function $e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $e(Object(r), !0).forEach(function(n) {
      Tt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tt(e, t, r) {
  return t = Ct(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ct(e) {
  var t = _t(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _t(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xe(e) {
  return e && e.map((t, r) => /* @__PURE__ */ j.createElement(t.tag, de({
    key: r
  }, t.attr), Xe(t.child)));
}
function Ze(e) {
  return (t) => /* @__PURE__ */ j.createElement(Rt, ue({
    attr: de({}, e.attr)
  }, t), Xe(e.child));
}
function Rt(e) {
  var t = (r) => {
    var {
      attr: n,
      size: c,
      title: u
    } = e, f = Ot(e, Pt), p = c || r.size || "1em", x;
    return r.className && (x = r.className), e.className && (x = (x ? x + " " : "") + e.className), /* @__PURE__ */ j.createElement("svg", ue({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, f, {
      className: x,
      style: de(de({
        color: e.color || r.color
      }, r.style), e.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && /* @__PURE__ */ j.createElement("title", null, u), e.children);
  };
  return ze !== void 0 ? /* @__PURE__ */ j.createElement(ze.Consumer, null, (r) => t(r)) : t(Je);
}
function St(e) {
  return Ze({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z" }, child: [] }] })(e);
}
function Lt(e) {
  return Ze({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" }, child: [] }] })(e);
}
const At = m.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
`, Qe = gt`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  font-size: 18px;
`, Nt = m.div`
  ${Qe};
  pointer-events: none; /* reserve room for a hidden play button */
`, It = m.button.attrs({
  type: "button"
})`
  ${Qe};
  background: #28203e;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3a2c5b;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: #28203e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 107, 198, 0.3);
    border-color: rgba(16, 16, 31, 0.3);
  }
`, Mt = ({
  disabled: e = !1
}) => {
  const { isMuted: t, toggleMute: r } = Ve();
  return /* @__PURE__ */ o.jsxs(At, { children: [
    /* @__PURE__ */ o.jsx(Nt, {}),
    /* @__PURE__ */ o.jsx(
      It,
      {
        "data-testid": "audio-toggle",
        onClick: () => {
          e || r();
        },
        disabled: e,
        title: t ? "Un-mute" : "Mute",
        children: t ? /* @__PURE__ */ o.jsx(St, {}) : /* @__PURE__ */ o.jsx(Lt, {})
      }
    )
  ] });
}, H = {
  // dimensions in "cells"
  GAME_WIDTH: 10,
  GAME_HEIGHT: 20,
  BLOCK_WIDTH: 4,
  BLOCK_HEIGHT: 4,
  ROTATION_COUNT: 4
}, Dt = ["I", "J", "L", "O", "S", "T", "Z"], et = (e) => e >= 0 && e < H.ROTATION_COUNT, ke = (e) => {
  switch (e) {
    case "I":
      return [
        [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0]
        ],
        [
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0]
        ],
        [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0]
        ]
      ];
    case "J":
      return [
        [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0]
        ]
      ];
    case "L":
      return [
        [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 0, 1, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      ];
    case "O":
      return [
        [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      ];
    case "S":
      return [
        [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0]
        ]
      ];
    case "T":
      return [
        [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ]
      ];
    case "Z":
      return [
        [
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        [
          [0, 0, 1, 0],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ]
      ];
    default: {
      const t = e;
      throw new Error(`Unhandled color case: ${t}`);
    }
  }
}, tt = (e) => {
  switch (e) {
    case "I":
      return "piece-i";
    case "J":
      return "piece-j";
    case "L":
      return "piece-l";
    case "O":
      return "piece-o";
    case "S":
      return "piece-s";
    case "T":
      return "piece-t";
    case "Z":
      return "piece-z";
    case "ghost":
      return "piece-preview";
    default: {
      const t = e;
      throw new Error(`Unhandled piece case: ${t}`);
    }
  }
}, { GAME_HEIGHT: rt, GAME_WIDTH: nt } = H, Ge = ({ x: e, y: t }) => `${e},${t}`;
function zt() {
  const e = new Array(rt);
  for (let t = 0; t < e.length; t++)
    e[t] = ot();
  return e;
}
function ot() {
  return new Array(nt).fill(null);
}
const ye = (e, t, r = !1) => {
  const { piece: n, rotation: c, position: u } = t, f = ke(n)[c];
  if (!f)
    throw new Error(
      `Unexpected: no rotation ${c} found to piece ${n}`
    );
  const p = f.reduce(
    (b, P, O) => b.concat(
      P.map(
        (k, _) => k ? { x: _ + u.x, y: O + u.y } : !1
      )
    ),
    []
  ), x = new Set(
    p.map((b) => b ? Ge(b) : "").filter(Boolean)
  ), g = r ? "ghost" : n;
  return e.map(
    (b, P) => b.map((O, k) => x.has(Ge({ x: k, y: P })) ? g : O)
  );
};
function $t(e, t) {
  return ye(e, t);
}
function Ue(e) {
  const t = [], r = [];
  let n = 0;
  for (let c = 0; c < e.length; c++)
    Gt(e[c]) ? (t.push(c), n++) : r.push(e[c]);
  for (; r.length < e.length; )
    r.unshift(ot());
  return [r, t, n];
}
function Gt(e) {
  for (let t = 0; t < e.length; t++)
    if (!e[t]) return !1;
  return !0;
}
function fe(e, t) {
  const { piece: r, rotation: n, position: c } = t, u = ke(r)[n];
  for (let f = 0; f < H.BLOCK_WIDTH; f++)
    for (let p = 0; p < H.BLOCK_HEIGHT; p++) {
      const x = u[p][f], g = f + c.x, b = p + c.y;
      if (x)
        if (g >= 0 && g < nt && b < rt) {
          if (!e[b] || e[b][g])
            return !1;
        } else
          return !1;
    }
  return !0;
}
function it(e) {
  if (!e) throw new Error("assertion failed");
}
function re(e) {
  return function(t, r) {
    const n = e(r);
    if (fe(t, n))
      return n;
  };
}
const Ut = re((e) => {
  const t = {
    ...e.position,
    x: e.position.x - 1
  };
  return { ...e, position: t };
}), Ht = re((e) => {
  const t = {
    ...e.position,
    x: e.position.x + 1
  };
  return { ...e, position: t };
}), He = re((e) => {
  const t = {
    ...e.position,
    y: e.position.y + 1
  };
  return { ...e, position: t };
}), Ft = re((e) => {
  const t = ((e.rotation ?? 0) + 1) % H.ROTATION_COUNT;
  return it(et(t)), { ...e, rotation: t };
}), Kt = re(
  (e) => {
    let t = (e.rotation ?? 0) - 1;
    return t < 0 && (t += H.ROTATION_COUNT), it(et(t)), { ...e, rotation: t };
  }
);
function st(e, t) {
  const r = { ...t.position };
  for (; fe(e, { ...t, position: r }); )
    r.y += 1;
  return r.y -= 1, { ...t, position: r };
}
function ct() {
  const e = Dt.slice();
  for (let t = e.length - 1; t > 0; t--) {
    const r = Math.floor(Math.random() * (t + 1)), n = e[t];
    e[t] = e[r], e[r] = n;
  }
  return e;
}
function Wt(e) {
  return at({
    minimumLength: e,
    queue: [],
    bucket: ct()
  });
}
function Te(e) {
  if (e.queue.length === 0)
    throw new Error("Cannot getNext from an empty queue");
  const t = e.queue[0], r = e.queue.slice(1), n = at({
    minimumLength: e.minimumLength,
    queue: r,
    bucket: e.bucket
  });
  return { piece: t, queue: n };
}
function at(e) {
  const { minimumLength: t } = e, r = e.queue.slice();
  let n = e.bucket.slice();
  for (; r.length < t; ) {
    n.length === 0 && (n = ct());
    const c = n.shift();
    r.push(c);
  }
  return {
    minimumLength: t,
    queue: r,
    bucket: n
  };
}
function Yt(e) {
  return e.every(Boolean);
}
const qt = (e) => Math.floor(e.lines / 10) + 1, Bt = (e, t) => {
  var r;
  switch (t) {
    case "RESTART":
      return _e();
    case "PAUSE":
      return e.state === "PLAYING" ? { ...e, state: "PAUSED" } : e;
    case "RESUME":
      return e.state === "PAUSED" ? { ...e, state: "PLAYING" } : e;
    case "TOGGLE_PAUSE":
      return e.state === "PLAYING" ? { ...e, state: "PAUSED" } : e.state === "PAUSED" ? { ...e, state: "PLAYING" } : e;
    case "HARD_DROP":
      if (e.state !== "PLAYING") return e;
      const n = st(e.matrix, e.piece);
      return ge({ ...e, piece: n });
    case "MOVE_DOWN":
      if (e.state !== "PLAYING") return e;
      if (e.pendingClear) {
        const [x, , g] = Ue(e.matrix);
        return Pe(
          { ...e, matrix: x },
          x,
          g
        );
      }
      const c = J(He, e);
      return c.piece === e.piece ? ge(c) : c;
    case "TICK":
      if (e.state !== "PLAYING" && !e.pendingClear) return e;
      if (e.pendingClear) {
        const [x, , g] = Ue(e.matrix);
        return Pe(
          { ...e, matrix: x },
          x,
          g
        );
      }
      const u = J(He, e);
      return u.piece === e.piece ? ge(u) : u;
    case "MOVE_LEFT":
      return J(Ut, e);
    case "MOVE_RIGHT":
      return J(Ht, e);
    case "FLIP_CLOCKWISE":
      return J(Ft, e);
    case "FLIP_COUNTERCLOCKWISE":
      return J(Kt, e);
    case "HOLD":
      if (e.state !== "PLAYING" || e.heldPiece && !e.heldPiece.available || e.heldPiece && !fe(e.matrix, {
        ...e.piece,
        piece: e.heldPiece.piece
      }))
        return e;
      const f = Te(e.queue), p = ((r = e.heldPiece) == null ? void 0 : r.piece) ?? f.piece;
      return {
        ...e,
        heldPiece: { piece: e.piece.piece, available: !1 },
        piece: Ce(p),
        queue: p === f.piece ? f.queue : e.queue
      };
    default:
      throw new Error(`Unhandled action: ${t}`);
  }
};
function Vt(e) {
  return e.reduce((t, r, n) => (Yt(r) && t.push(n), t), []);
}
function Pe(e, t, r) {
  const n = Te(e.queue), c = Ce(n.piece);
  return {
    ...e,
    state: fe(t, c) ? e.state : "LOST",
    matrix: t,
    piece: c,
    heldPiece: e.heldPiece ? { ...e.heldPiece, available: !0 } : void 0,
    queue: n.queue,
    lines: e.lines + r,
    points: e.points + Jt(r),
    justCleared: [],
    pendingClear: !1
  };
}
const ge = (e) => {
  const t = $t(e.matrix, e.piece), r = Vt(t);
  return r.length > 0 ? {
    ...e,
    matrix: t,
    justCleared: r,
    pendingClear: !0
  } : Pe(e, t, 0);
}, Fe = 100, Jt = (e) => e === 4 ? Fe * 10 : e * Fe, Xt = {
  x: H.GAME_WIDTH / 2 - H.BLOCK_WIDTH / 2,
  y: 0
}, Ce = (e) => ({
  position: Xt,
  piece: e,
  rotation: 0
}), J = (e, t) => {
  if (t.state !== "PLAYING") return t;
  const r = e(t.matrix, t.piece);
  return r ? { ...t, piece: r } : t;
}, _e = () => {
  const e = Wt(5), t = Te(e);
  return {
    state: "PAUSED",
    points: 0,
    lines: 0,
    matrix: zt(),
    piece: Ce(t.piece),
    heldPiece: void 0,
    queue: t.queue
  };
};
function Zt(e) {
  let t = e.matrix;
  return t = ye(t, st(e.matrix, e.piece), !0), ye(t, e.piece);
}
const pe = j.createContext(_e()), Qt = m.div`
  display: grid;
  gap: 0;
`, lt = ({ piece: e }) => {
  var c;
  const t = j.useMemo(() => {
    const u = (e == null ? void 0 : e.rotation) ?? 0;
    return (e ? ke(e.piece)[u] : void 0) ?? [
      // fallback 4×4 zeroes
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
  }, [e]), r = ((c = t[0]) == null ? void 0 : c.length) ?? 0, n = t.length;
  return /* @__PURE__ */ o.jsx(
    Qt,
    {
      style: {
        gridTemplateColumns: `repeat(${r}, var(--preview-size))`,
        gridTemplateRows: `repeat(${n}, var(--preview-size))`
      },
      className: "piece-view",
      children: t.flatMap(
        (u, f) => u.map((p, x) => {
          const b = [
            "game-block",
            p === 1 && e ? tt(e.piece) : "",
            e ? "piece-preview" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ o.jsx("div", { className: b }, `${f}-${x}`);
        })
      )
    }
  );
};
function er() {
  const { heldPiece: e } = j.useContext(pe), t = e != null && e.piece ? { piece: e.piece, rotation: 0 } : void 0;
  return /* @__PURE__ */ o.jsx(lt, { piece: t });
}
const tr = m.div`
  /* base block */
  width: var(--block-size);
  height: var(--block-size);
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;

  /* if preview (small queue), shrink it */
  ${({ preview: e }) => e && `
      width: var(--preview-size);
      height: var(--preview-size);
    `}

  /* ghost styling */
  ${({ ghost: e }) => e && `
      background-color: rgba(255,255,255,0.1);
      border: 1px dashed rgba(255,255,255,0.15);
      border-radius: 4px;
    `}

  /* cleared-line animation */
  ${({ clearing: e }) => e && `
      animation: flashOut 200ms ease-in-out forwards;
    `}
`;
function ve({
  ghost: e,
  clearing: t,
  preview: r,
  className: n,
  ...c
}) {
  return /* @__PURE__ */ o.jsx(
    tr,
    {
      ghost: e,
      clearing: t,
      preview: r,
      className: n,
      ...c
    }
  );
}
const rr = m.div`
  display: grid;
`;
function nr() {
  var u;
  const e = ht(pe), t = Zt(e), r = e.justCleared ?? [], n = ((u = t[0]) == null ? void 0 : u.length) ?? 0, c = t.length;
  return /* @__PURE__ */ o.jsx(
    rr,
    {
      "data-testid": "gameboard",
      style: {
        gridTemplateColumns: `repeat(${n}, var(--block-size))`,
        gridTemplateRows: `repeat(${c}, var(--block-size))`
      },
      children: t.flatMap(
        (f, p) => f.map((x, g) => {
          const b = r.includes(p);
          if (x === null)
            return /* @__PURE__ */ o.jsx(ve, { clearing: b }, `${p}-${g}`);
          if (x === "ghost")
            return /* @__PURE__ */ o.jsx(
              ve,
              {
                ghost: !0,
                clearing: b,
                className: "ghost"
              },
              `${p}-${g}`
            );
          const P = tt(x);
          return /* @__PURE__ */ o.jsx(
            ve,
            {
              className: P,
              clearing: b
            },
            `${p}-${g}`
          );
        })
      )
    }
  );
}
function or() {
  const { queue: e } = j.useContext(pe);
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        // ← stack vertically
        gap: "0.5rem"
        // adjust to taste
      },
      children: e.queue.map((t, r) => {
        const n = { piece: t, rotation: 0 };
        return /* @__PURE__ */ o.jsx(lt, { piece: n }, r);
      })
    }
  );
}
var ae = { exports: {} }, ir = ae.exports, Ke;
function sr() {
  return Ke || (Ke = 1, function(e) {
    (function(t) {
      var r, n = {}, c = { 16: !1, 18: !1, 17: !1, 91: !1 }, u = "all", f = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        command: 91
      }, p = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        delete: 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220
      }, x = function(s) {
        return p[s] || s.toUpperCase().charCodeAt(0);
      }, g = [];
      for (r = 1; r < 20; r++) p["f" + r] = 111 + r;
      function b(s, a) {
        for (var l = s.length; l--; ) if (s[l] === a) return l;
        return -1;
      }
      function P(s, a) {
        if (s.length != a.length) return !1;
        for (var l = 0; l < s.length; l++)
          if (s[l] !== a[l]) return !1;
        return !0;
      }
      var O = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey"
      };
      function k(s) {
        for (r in c) c[r] = s[O[r]];
      }
      function _(s) {
        var a, l, h, T, w, i;
        if (a = s.keyCode, b(g, a) == -1 && g.push(a), (a == 93 || a == 224) && (a = 91), a in c) {
          c[a] = !0;
          for (h in f) f[h] == a && (R[h] = !0);
          return;
        }
        if (k(s), !!R.filter.call(this, s) && a in n) {
          for (i = K(), T = 0; T < n[a].length; T++)
            if (l = n[a][T], l.scope == i || l.scope == "all") {
              w = l.mods.length > 0;
              for (h in c)
                (!c[h] && b(l.mods, +h) > -1 || c[h] && b(l.mods, +h) == -1) && (w = !1);
              (l.mods.length == 0 && !c[16] && !c[18] && !c[17] && !c[91] || w) && l.method(s, l) === !1 && (s.preventDefault ? s.preventDefault() : s.returnValue = !1, s.stopPropagation && s.stopPropagation(), s.cancelBubble && (s.cancelBubble = !0));
            }
        }
      }
      function F(s) {
        var a = s.keyCode, l, h = b(g, a);
        if (h >= 0 && g.splice(h, 1), (a == 93 || a == 224) && (a = 91), a in c) {
          c[a] = !1;
          for (l in f) f[l] == a && (R[l] = !1);
        }
      }
      function Z() {
        for (r in c) c[r] = !1;
        for (r in f) R[r] = !1;
      }
      function R(s, a, l) {
        var h, T;
        h = L(s), l === void 0 && (l = a, a = "all");
        for (var w = 0; w < h.length; w++)
          T = [], s = h[w].split("+"), s.length > 1 && (T = W(s), s = [s[s.length - 1]]), s = s[0], s = x(s), s in n || (n[s] = []), n[s].push({ shortcut: h[w], scope: a, method: l, key: h[w], mods: T });
      }
      function S(s, a) {
        var l, h, T = [], w, i, d;
        for (l = L(s), i = 0; i < l.length; i++) {
          if (h = l[i].split("+"), h.length > 1 && (T = W(h), s = h[h.length - 1]), s = x(s), a === void 0 && (a = K()), !n[s])
            return;
          for (w = 0; w < n[s].length; w++)
            d = n[s][w], d.scope === a && P(d.mods, T) && (n[s][w] = {});
        }
      }
      function z(s) {
        return typeof s == "string" && (s = x(s)), b(g, s) != -1;
      }
      function B() {
        return g.slice(0);
      }
      function C(s) {
        var a = (s.target || s.srcElement).tagName;
        return !(a == "INPUT" || a == "SELECT" || a == "TEXTAREA");
      }
      for (r in f) R[r] = !1;
      function $(s) {
        u = s || "all";
      }
      function K() {
        return u || "all";
      }
      function N(s) {
        var a, l, h;
        for (a in n)
          for (l = n[a], h = 0; h < l.length; )
            l[h].scope === s ? l.splice(h, 1) : h++;
      }
      function L(s) {
        var a;
        return s = s.replace(/\s/g, ""), a = s.split(","), a[a.length - 1] == "" && (a[a.length - 2] += ","), a;
      }
      function W(s) {
        for (var a = s.slice(0, s.length - 1), l = 0; l < a.length; l++)
          a[l] = f[a[l]];
        return a;
      }
      function Y(s, a, l) {
        s.addEventListener ? s.addEventListener(a, l, !1) : s.attachEvent && s.attachEvent("on" + a, function() {
          l(window.event);
        });
      }
      Y(document, "keydown", function(s) {
        _(s);
      }), Y(document, "keyup", F), Y(window, "focus", Z);
      var ne = t.key;
      function he() {
        var s = t.key;
        return t.key = ne, s;
      }
      t.key = R, t.key.setScope = $, t.key.getScope = K, t.key.deleteScope = N, t.key.filter = C, t.key.isPressed = z, t.key.getPressedKeyCodes = B, t.key.noConflict = he, t.key.unbind = S, e.exports = R;
    })(ir);
  }(ae)), ae.exports;
}
var cr = sr();
const We = /* @__PURE__ */ wt(cr), X = [];
let te = !1;
function ut(e) {
  e.shiftKey && !te && (te = !0, X.forEach((t) => t()));
}
function dt(e) {
  !e.shiftKey && te && (te = !1);
}
function ar() {
  document.addEventListener("keydown", ut), document.addEventListener("keyup", dt);
}
function lr() {
  document.removeEventListener("keydown", ut), document.removeEventListener("keyup", dt), te = !1, X.length = 0;
}
function ur(e) {
  X.includes(e) || X.push(e);
}
function dr(e) {
  const t = X.indexOf(e);
  t !== -1 && X.splice(t, 1);
}
function fr(e) {
  Oe(() => (ar(), ur(e), () => {
    dr(e), lr();
  }), [e]);
}
function pr(e, t) {
  fr(() => {
    const r = e.shift;
    r && t(r);
  }), j.useEffect(() => {
    const r = {};
    for (const [n, c] of Object.entries(e)) {
      if (n === "shift") continue;
      const u = () => t(c);
      r[n] = u, We(n, u);
    }
    return () => {
      for (const n of Object.keys(r))
        We.unbind(n);
    };
  }, [e, t]);
}
function hr() {
  const [e, t] = xt(Bt, _e()), r = qt(e);
  return Oe(() => {
    if (e.state !== "PLAYING")
      return;
    const n = Math.pow(0.8 - (r - 1) * 7e-3, r - 1) * 1e3, c = window.setInterval(() => t("TICK"), n);
    return () => window.clearInterval(c);
  }, [e.state, r]), Be(() => ({ game: e, dispatch: t, level: r }), [e, t, r]);
}
const xr = {
  down: "MOVE_DOWN",
  left: "MOVE_LEFT",
  right: "MOVE_RIGHT",
  space: "HARD_DROP",
  z: "FLIP_COUNTERCLOCKWISE",
  x: "FLIP_CLOCKWISE",
  up: "FLIP_CLOCKWISE",
  p: "TOGGLE_PAUSE",
  c: "HOLD",
  shift: "HOLD"
};
function mr(e) {
  const { game: t, dispatch: r, level: n } = hr(), [c, u] = qe(e.credits ?? 9999), f = e.manageCredits !== !1;
  pr(e.keyboardControls ?? xr, r);
  const p = Be(
    () => ({
      pause: () => r("PAUSE"),
      resume: () => {
        f ? c > 0 && (u((x) => x - 1), r("RESUME")) : r("RESUME");
      },
      hold: () => r("HOLD"),
      hardDrop: () => r("HARD_DROP"),
      moveDown: () => r("MOVE_DOWN"),
      moveLeft: () => r("MOVE_LEFT"),
      moveRight: () => r("MOVE_RIGHT"),
      flipClockwise: () => r("FLIP_CLOCKWISE"),
      flipCounterclockwise: () => r("FLIP_COUNTERCLOCKWISE"),
      restart: () => r("RESTART")
    }),
    [r, c, f]
  );
  return /* @__PURE__ */ o.jsx(pe.Provider, { value: t, children: e.children({
    HeldPiece: er,
    Gameboard: nr,
    PieceQueue: or,
    points: t.points,
    linesCleared: t.lines,
    level: n,
    state: t.state,
    controller: p,
    credits: c
  }) });
}
const br = m.div`
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-weight: 300;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 13, 31, 0.95);
`, gr = m.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`, vr = m.div`
  margin: 24px auto 0;
  width: 100%;
  padding: 0 1rem;
`, wr = m.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  transform: translateX(-5%);
`, ft = m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`, jr = m(ft)`
  flex: 1;
  max-width: 200px;
`, Er = m(ft)`
  flex-shrink: 0;
  width: clamp(180px, 50vw, 240px);
`, yr = m.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15%;
  flex: 1;
  max-width: 280px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`, Ye = m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  /* panel title */
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 600;

    /* 4.55 : 1 contrast on the #1e192a / #211b30 cards */
    color: #c4c8ff;

    margin: 0;
  }
`, Pr = m.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`, Or = m.span`
  font-family: 'Courier New', monospace;
  font-size: clamp(20px, 5vw, 36px);
  min-width: 4ch;
  text-align: right;
  display: inline-block;
`, se = ({ children: e, count: t = 4, ...r }) => {
  let n = e.toString();
  for (; n.length < t; ) n = `0${n}`;
  return /* @__PURE__ */ o.jsx(Or, { ...r, children: n });
}, le = m.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`, kr = m.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(16px, 2vw, 24px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.6);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
`, ce = m.p`
  margin: 0;
  padding-top: 2px;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  text-transform: uppercase;

  color: #e2e4ff;
`, U = m.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem;
`, Tr = ({
  credits: e,
  points: t,
  linesCleared: r,
  level: n
}) => /* @__PURE__ */ o.jsxs(kr, { children: [
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(ce, { children: "Credits" }) }),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(se, { children: e }) }),
  /* @__PURE__ */ o.jsx(le, {}),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(ce, { children: "Points" }) }),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(se, { "data-testid": "score", children: t }) }),
  /* @__PURE__ */ o.jsx(le, {}),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(ce, { children: "Lines" }) }),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(se, { children: r }) }),
  /* @__PURE__ */ o.jsx(le, {}),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(ce, { children: "Level" }) }),
  /* @__PURE__ */ o.jsx(U, { children: /* @__PURE__ */ o.jsx(se, { children: n }) })
] }), Re = m.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 19, 44, 0.95);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`, Cr = m(Re)`
  background: rgba(63, 129, 28, 0.5);
`, _r = m(Re)`
  background: rgba(176, 32, 32, 0.9);
  box-shadow: 0 0 16px rgba(176, 32, 32, 0.5);
`, we = m.h2`
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #f0f0f0;
`, je = m.button.attrs({
  type: "button"
})`
  margin-top: 24px;
  padding: 0.5rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 3vw, 24px);
  border-radius: 6px;
  background: #28203e;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background: #3a2c5b;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 107, 198, 0.3);
    border-color: rgba(16, 16, 31, 0.3);
  }
`, Rr = m.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(14px, 2vw, 18px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.4);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
  min-width: 220px;
`, Sr = m.p`
  margin: 0;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
  text-transform: uppercase;
  color: #aaa;
`, I = m.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`, M = m.span`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: rgba(201, 205, 209, 0.85);
  min-width: 70px;
  text-align: left;
`, D = m.span`
  color: #ddd;
  text-align: left;
  flex: 1;
`, Lr = () => /* @__PURE__ */ o.jsxs(Rr, { children: [
  /* @__PURE__ */ o.jsx(Sr, { children: "Controls" }),
  /* @__PURE__ */ o.jsx(le, {}),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "← →" }),
    /* @__PURE__ */ o.jsx(D, { children: "Move left / right" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "↓" }),
    /* @__PURE__ */ o.jsx(D, { children: "Soft drop" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "↑" }),
    /* @__PURE__ */ o.jsx(D, { children: "Rotate →" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "Z" }),
    /* @__PURE__ */ o.jsx(D, { children: "Rotate ←" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "Space" }),
    /* @__PURE__ */ o.jsx(D, { children: "Hard drop" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "Shift" }),
    /* @__PURE__ */ o.jsx(D, { children: "Hold piece" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "P" }),
    /* @__PURE__ */ o.jsx(D, { children: "Pause / Resume" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "M" }),
    /* @__PURE__ */ o.jsx(D, { children: "Toggle sound" })
  ] }),
  /* @__PURE__ */ o.jsxs(I, { children: [
    /* @__PURE__ */ o.jsx(M, { children: "Enter" }),
    /* @__PURE__ */ o.jsx(D, { children: "Start / Restart" })
  ] })
] });
class Ar extends j.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.error("🧨 ErrorBoundary caught an error:", t, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ o.jsxs(
      "div",
      {
        style: {
          color: "#fff",
          background: "#2a1e3a",
          padding: "1rem",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "480px",
          margin: "2rem auto"
        },
        children: [
          /* @__PURE__ */ o.jsx("h2", { children: "Something went wrong in the Tetris engine." }),
          /* @__PURE__ */ o.jsx("p", { children: "Try reloading or restarting the game." })
        ]
      }
    ) : this.props.children;
  }
}
const Nr = vt`
  /* —————————————————————————————
     Variables & resets from tetris.css
  ————————————————————————————— */
  :root {
    --block-size: clamp(14px, 4vw, 28px);
    --preview-size: clamp(12px, 3vw, 18px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #120d1f;
    color: #f0f0f0;
  }

  /* —————————————————————————————
     Game-board / preview block styles
  ————————————————————————————— */
  .game-block {
    margin: 0;
    aspect-ratio: 1/1;
    padding: 0;
    width: var(--block-size);
    height: var(--block-size);
    border: 0.1px solid rgba(65, 52, 78, 0.35);
    background-color: rgba(27, 19, 44, 0.18);
    border-radius: 4px;
  }

  .piece-view {
    margin-bottom: 12px;
  }
  .piece-view:first-child {
    margin-top: 4px;
  }
  .piece-view .game-block {
    width: var(--preview-size);
    height: var(--preview-size);
  }

  /* —————————————————————————————
     Tetromino colors
  ————————————————————————————— */
  .piece-i { background-color: #42c8f4; }
  .piece-j { background-color: #5d9bf5; }
  .piece-l { background-color: #f2b63c; }
  .piece-o { background-color: #e7d84b; }
  .piece-s { background-color: #84d686; }
  .piece-t { background-color: #bb84e8; }
  .piece-z { background-color: #f36f6f; }

  /* —————————————————————————————
     Cleared-line flash animation
  ————————————————————————————— */
  @keyframes flashOut {
    0%   { background-color: #ffffff; opacity: 1; }
    100% { background-color: transparent; opacity: 0.3; }
  }
  .cleared-line {
    animation: flashOut 200ms ease-in-out forwards;
  }
`, Ir = mt(
  ({
    credits: e,
    manageCredits: t,
    showModals: r = !0,
    soundEnabled: n = !0,
    showControlsLegend: c = !0,
    onGameOver: u,
    onScoreChange: f,
    onLevelChange: p
  }, x) => {
    const { isMuted: g, isPlaying: b, toggleMute: P, togglePlay: O } = Ve(), k = Le(), _ = Le(!1);
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(Nr, {}),
      /* @__PURE__ */ o.jsx(br, { children: /* @__PURE__ */ o.jsx(gr, { children: /* @__PURE__ */ o.jsxs(vr, { "data-testid": "tetris2-root", children: [
        n && /* @__PURE__ */ o.jsx(Mt, {}),
        /* @__PURE__ */ o.jsx(Ar, { children: /* @__PURE__ */ o.jsx(mr, { credits: e, manageCredits: t, children: ({
          Gameboard: F,
          HeldPiece: Z,
          PieceQueue: R,
          controller: S,
          points: z,
          linesCleared: B,
          state: C,
          level: $,
          credits: K
        }) => {
          const N = () => {
            !b && n && O(), g && n && P(), S.resume(), _.current = !0;
          };
          return k.current = N, bt(x, () => ({
            start: () => {
              var L;
              return (L = k.current) == null ? void 0 : L.call(k);
            },
            restart: () => S.restart()
          })), j.useEffect(() => {
            f == null || f(z);
          }, [z]), j.useEffect(() => {
            p == null || p($);
          }, [$]), j.useEffect(() => {
            C === "LOST" && (u == null || u());
          }, [C]), k.current = N, j.useEffect(() => {
            const L = (W) => {
              W.key === "Enter" && (C === "PAUSED" && _.current ? S.resume() : C === "LOST" && r ? (S.restart(), _.current = !1, !b && n && O(), g && n && P()) : !_.current && C === "PAUSED" && r && N()), W.key.toLowerCase() === "m" && P();
            };
            return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
          }, [C, S, n, g, b]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsxs(
              wr,
              {
                style: { opacity: C === "PLAYING" ? 1 : 0.5 },
                children: [
                  /* @__PURE__ */ o.jsxs(yr, { children: [
                    /* @__PURE__ */ o.jsx(
                      Tr,
                      {
                        credits: K,
                        points: z,
                        linesCleared: B,
                        level: $
                      }
                    ),
                    /* @__PURE__ */ o.jsxs(Ye, { children: [
                      /* @__PURE__ */ o.jsx("h1", { children: "HOLD" }),
                      /* @__PURE__ */ o.jsx(Z, {})
                    ] })
                  ] }),
                  /* @__PURE__ */ o.jsx(Er, { children: /* @__PURE__ */ o.jsx(F, {}) }),
                  /* @__PURE__ */ o.jsx(jr, { children: /* @__PURE__ */ o.jsxs(Ye, { children: [
                    /* @__PURE__ */ o.jsx("h1", { children: "NEXT" }),
                    /* @__PURE__ */ o.jsx(R, {})
                  ] }) })
                ]
              }
            ),
            c && /* @__PURE__ */ o.jsx(Pr, { children: /* @__PURE__ */ o.jsx(Lr, {}) }),
            r && C === "PAUSED" && (_.current ? /* @__PURE__ */ o.jsxs(Re, { children: [
              /* @__PURE__ */ o.jsx(we, { children: "Paused" }),
              " ",
              /* @__PURE__ */ o.jsx(
                je,
                {
                  "data-testid": "resume-btn",
                  onClick: S.resume,
                  children: "Resume"
                }
              )
            ] }) : /* @__PURE__ */ o.jsxs(Cr, { children: [
              /* @__PURE__ */ o.jsx(we, { children: "Start Game" }),
              " ",
              /* @__PURE__ */ o.jsx(
                je,
                {
                  "data-testid": "start-btn",
                  onClick: N,
                  children: "Play"
                }
              )
            ] })),
            r && C === "LOST" && /* @__PURE__ */ o.jsxs(_r, { "data-testid": "popup-gameover", children: [
              /* @__PURE__ */ o.jsx(we, { children: "Game Over" }),
              /* @__PURE__ */ o.jsxs(
                "div",
                {
                  style: {
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "clamp(14px, 2vw, 26px)",
                    color: "#ddd"
                  },
                  children: [
                    /* @__PURE__ */ o.jsxs("p", { children: [
                      /* @__PURE__ */ o.jsx("strong", { children: "Level:" }),
                      " ",
                      $
                    ] }),
                    /* @__PURE__ */ o.jsxs("p", { children: [
                      /* @__PURE__ */ o.jsx("strong", { children: "Lines:" }),
                      " ",
                      B
                    ] }),
                    /* @__PURE__ */ o.jsxs("p", { children: [
                      /* @__PURE__ */ o.jsx("strong", { children: "Points:" }),
                      " ",
                      z
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsx(
                je,
                {
                  "data-testid": "restart-btn",
                  onClick: () => {
                    S.restart(), _.current = !1, !b && n && O(), g && n && P();
                  },
                  children: "Restart"
                }
              )
            ] })
          ] });
        } }) })
      ] }) }) })
    ] });
  }
);
Ir.displayName = "Tetris2";
export {
  Ir as Tetris2
};
