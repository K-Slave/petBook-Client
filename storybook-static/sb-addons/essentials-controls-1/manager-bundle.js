try {
  var l2 = Object.create;
  var Pa = Object.defineProperty;
  var c2 = Object.getOwnPropertyDescriptor;
  var p2 = Object.getOwnPropertyNames;
  var d2 = Object.getPrototypeOf,
    f2 = Object.prototype.hasOwnProperty;
  var Ar = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var Ze = (e, t) => () => (e && (t = e((e = 0))), t);
  var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Hu = (e, t) => {
      for (var r in t) Pa(e, r, { get: t[r], enumerable: !0 });
    },
    h2 = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of p2(t))
          !f2.call(e, a) &&
            a !== r &&
            Pa(e, a, {
              get: () => t[a],
              enumerable: !(n = c2(t, a)) || n.enumerable,
            });
      return e;
    };
  var he = (e, t, r) => (
    (r = e != null ? l2(d2(e)) : {}),
    h2(
      t || !e || !e.__esModule
        ? Pa(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var l = Ze(() => {});
  var c = Ze(() => {});
  var p = Ze(() => {});
  var m,
    cn,
    et,
    Gu,
    F7,
    S7,
    w7,
    Wu,
    B7,
    ye,
    Er,
    ka,
    T7,
    O7,
    _7,
    P7,
    Vu,
    R7,
    me,
    qe,
    I7,
    ge,
    k7,
    Ku,
    it,
    N7,
    Fe,
    oe,
    j7,
    It = Ze(() => {
      l();
      c();
      p();
      (m = __REACT__),
        ({
          Children: cn,
          Component: et,
          Fragment: Gu,
          Profiler: F7,
          PureComponent: S7,
          StrictMode: w7,
          Suspense: Wu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: B7,
          cloneElement: ye,
          createContext: Er,
          createElement: ka,
          createFactory: T7,
          createRef: O7,
          forwardRef: _7,
          isValidElement: P7,
          lazy: Vu,
          memo: R7,
          useCallback: me,
          useContext: qe,
          useDebugValue: I7,
          useEffect: ge,
          useImperativeHandle: k7,
          useLayoutEffect: Ku,
          useMemo: it,
          useReducer: N7,
          useRef: Fe,
          useState: oe,
          version: j7,
        } = __REACT__);
    });
  var Zu = {};
  Hu(Zu, {
    A: () => g2,
    ActionBar: () => qa,
    AddonPanel: () => La,
    Badge: () => b2,
    Bar: () => A2,
    Blockquote: () => E2,
    Button: () => v2,
    Code: () => $a,
    DL: () => D2,
    Div: () => C2,
    DocumentWrapper: () => x2,
    ErrorFormatter: () => Ua,
    FlexBar: () => za,
    Form: () => Oe,
    H1: () => F2,
    H2: () => Ha,
    H3: () => Ga,
    H4: () => S2,
    H5: () => w2,
    H6: () => B2,
    HR: () => T2,
    IconButton: () => Et,
    IconButtonSkeleton: () => Wa,
    Icons: () => _e,
    Img: () => O2,
    LI: () => _2,
    Link: () => vr,
    ListItem: () => P2,
    Loader: () => Va,
    OL: () => R2,
    P: () => I2,
    Placeholder: () => k2,
    Pre: () => N2,
    ResetWrapper: () => Ka,
    ScrollArea: () => j2,
    Separator: () => M2,
    Spaced: () => q2,
    Span: () => L2,
    StorybookIcon: () => $2,
    StorybookLogo: () => U2,
    Symbols: () => z2,
    SyntaxHighlighter: () => pn,
    TT: () => H2,
    TabBar: () => G2,
    TabButton: () => W2,
    TabWrapper: () => V2,
    Table: () => K2,
    Tabs: () => Y2,
    TabsState: () => Ya,
    TooltipLinkList: () => J2,
    TooltipMessage: () => X2,
    TooltipNote: () => Ja,
    UL: () => Q2,
    WithTooltip: () => dn,
    WithTooltipPure: () => Xa,
    Zoom: () => Qa,
    codeCommon: () => kt,
    components: () => Za,
    createCopyToClipboardFunction: () => Z2,
    default: () => m2,
    getStoryHref: () => eo,
    icons: () => e1,
    interleaveSeparators: () => t1,
    nameSpaceClassNames: () => to,
    resetComponents: () => r1,
    withReset: () => Nt,
  });
  var m2,
    g2,
    qa,
    La,
    b2,
    A2,
    E2,
    v2,
    $a,
    D2,
    C2,
    x2,
    Ua,
    za,
    Oe,
    F2,
    Ha,
    Ga,
    S2,
    w2,
    B2,
    T2,
    Et,
    Wa,
    _e,
    O2,
    _2,
    vr,
    P2,
    Va,
    R2,
    I2,
    k2,
    N2,
    Ka,
    j2,
    M2,
    q2,
    L2,
    $2,
    U2,
    z2,
    pn,
    H2,
    G2,
    W2,
    V2,
    K2,
    Y2,
    Ya,
    J2,
    X2,
    Ja,
    Q2,
    dn,
    Xa,
    Qa,
    kt,
    Za,
    Z2,
    eo,
    e1,
    t1,
    to,
    r1,
    Nt,
    Dr = Ze(() => {
      l();
      c();
      p();
      (m2 = __STORYBOOKCOMPONENTS__),
        ({
          A: g2,
          ActionBar: qa,
          AddonPanel: La,
          Badge: b2,
          Bar: A2,
          Blockquote: E2,
          Button: v2,
          Code: $a,
          DL: D2,
          Div: C2,
          DocumentWrapper: x2,
          ErrorFormatter: Ua,
          FlexBar: za,
          Form: Oe,
          H1: F2,
          H2: Ha,
          H3: Ga,
          H4: S2,
          H5: w2,
          H6: B2,
          HR: T2,
          IconButton: Et,
          IconButtonSkeleton: Wa,
          Icons: _e,
          Img: O2,
          LI: _2,
          Link: vr,
          ListItem: P2,
          Loader: Va,
          OL: R2,
          P: I2,
          Placeholder: k2,
          Pre: N2,
          ResetWrapper: Ka,
          ScrollArea: j2,
          Separator: M2,
          Spaced: q2,
          Span: L2,
          StorybookIcon: $2,
          StorybookLogo: U2,
          Symbols: z2,
          SyntaxHighlighter: pn,
          TT: H2,
          TabBar: G2,
          TabButton: W2,
          TabWrapper: V2,
          Table: K2,
          Tabs: Y2,
          TabsState: Ya,
          TooltipLinkList: J2,
          TooltipMessage: X2,
          TooltipNote: Ja,
          UL: Q2,
          WithTooltip: dn,
          WithTooltipPure: Xa,
          Zoom: Qa,
          codeCommon: kt,
          components: Za,
          createCopyToClipboardFunction: Z2,
          getStoryHref: eo,
          icons: e1,
          interleaveSeparators: t1,
          nameSpaceClassNames: to,
          resetComponents: r1,
          withReset: Nt,
        } = __STORYBOOKCOMPONENTS__);
    });
  var Pe,
    Cr,
    ro = Ze(() => {
      l();
      c();
      p();
      (Pe = (e) => `control-${e.replace(/\s+/g, "-")}`),
        (Cr = (e) => `set-${e.replace(/\s+/g, "-")}`);
    });
  var Dk,
    Ck,
    xk,
    Fk,
    es,
    Sk,
    wk,
    ts,
    Bk,
    Tk,
    Ok,
    _k,
    Pk,
    Rk,
    n1,
    rs,
    Ik,
    kk,
    Nk,
    jk,
    q,
    no,
    Mk,
    ns,
    qk,
    ao = Ze(() => {
      l();
      c();
      p();
      (Dk = __STORYBOOKTHEMING__),
        ({
          CacheProvider: Ck,
          ClassNames: xk,
          Global: Fk,
          ThemeProvider: es,
          background: Sk,
          color: wk,
          convert: ts,
          create: Bk,
          createCache: Tk,
          createGlobal: Ok,
          createReset: _k,
          css: Pk,
          darken: Rk,
          ensure: n1,
          ignoreSsrWarning: rs,
          isPropValid: Ik,
          jsx: kk,
          keyframes: Nk,
          lighten: jk,
          styled: q,
          themes: no,
          typography: Mk,
          useTheme: ns,
          withTheme: qk,
        } = __STORYBOOKTHEMING__);
    });
  var yo = S((uj, cs) => {
    l();
    c();
    p();
    function U1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    cs.exports = U1;
  });
  var ds = S((pj, ps) => {
    l();
    c();
    p();
    function z1() {
      (this.__data__ = []), (this.size = 0);
    }
    ps.exports = z1;
  });
  var hn = S((yj, fs) => {
    l();
    c();
    p();
    function H1(e, t) {
      return e === t || (e !== e && t !== t);
    }
    fs.exports = H1;
  });
  var Br = S((Aj, hs) => {
    l();
    c();
    p();
    var G1 = hn();
    function W1(e, t) {
      for (var r = e.length; r--; ) if (G1(e[r][0], t)) return r;
      return -1;
    }
    hs.exports = W1;
  });
  var ms = S((Cj, ys) => {
    l();
    c();
    p();
    var V1 = Br(),
      K1 = Array.prototype,
      Y1 = K1.splice;
    function J1(e) {
      var t = this.__data__,
        r = V1(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Y1.call(t, r, 1), --this.size, !0;
    }
    ys.exports = J1;
  });
  var bs = S((wj, gs) => {
    l();
    c();
    p();
    var X1 = Br();
    function Q1(e) {
      var t = this.__data__,
        r = X1(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    gs.exports = Q1;
  });
  var Es = S((_j, As) => {
    l();
    c();
    p();
    var Z1 = Br();
    function eb(e) {
      return Z1(this.__data__, e) > -1;
    }
    As.exports = eb;
  });
  var Ds = S((kj, vs) => {
    l();
    c();
    p();
    var tb = Br();
    function rb(e, t) {
      var r = this.__data__,
        n = tb(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    vs.exports = rb;
  });
  var Tr = S((qj, Cs) => {
    l();
    c();
    p();
    var nb = ds(),
      ab = ms(),
      ob = bs(),
      ib = Es(),
      ub = Ds();
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = nb;
    Lt.prototype.delete = ab;
    Lt.prototype.get = ob;
    Lt.prototype.has = ib;
    Lt.prototype.set = ub;
    Cs.exports = Lt;
  });
  var Fs = S((zj, xs) => {
    l();
    c();
    p();
    var sb = Tr();
    function lb() {
      (this.__data__ = new sb()), (this.size = 0);
    }
    xs.exports = lb;
  });
  var ws = S((Vj, Ss) => {
    l();
    c();
    p();
    function cb(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Ss.exports = cb;
  });
  var Ts = S((Xj, Bs) => {
    l();
    c();
    p();
    function pb(e) {
      return this.__data__.get(e);
    }
    Bs.exports = pb;
  });
  var _s = S((tM, Os) => {
    l();
    c();
    p();
    function db(e) {
      return this.__data__.has(e);
    }
    Os.exports = db;
  });
  var mo = S((oM, Ps) => {
    l();
    c();
    p();
    var fb =
      typeof window == "object" && window && window.Object === Object && window;
    Ps.exports = fb;
  });
  var Le = S((lM, Rs) => {
    l();
    c();
    p();
    var hb = mo(),
      yb = typeof self == "object" && self && self.Object === Object && self,
      mb = hb || yb || Function("return this")();
    Rs.exports = mb;
  });
  var Dt = S((fM, Is) => {
    l();
    c();
    p();
    var gb = Le(),
      bb = gb.Symbol;
    Is.exports = bb;
  });
  var Ms = S((gM, js) => {
    l();
    c();
    p();
    var ks = Dt(),
      Ns = Object.prototype,
      Ab = Ns.hasOwnProperty,
      Eb = Ns.toString,
      Or = ks ? ks.toStringTag : void 0;
    function vb(e) {
      var t = Ab.call(e, Or),
        r = e[Or];
      try {
        e[Or] = void 0;
        var n = !0;
      } catch {}
      var a = Eb.call(e);
      return n && (t ? (e[Or] = r) : delete e[Or]), a;
    }
    js.exports = vb;
  });
  var Ls = S((vM, qs) => {
    l();
    c();
    p();
    var Db = Object.prototype,
      Cb = Db.toString;
    function xb(e) {
      return Cb.call(e);
    }
    qs.exports = xb;
  });
  var Ct = S((FM, zs) => {
    l();
    c();
    p();
    var $s = Dt(),
      Fb = Ms(),
      Sb = Ls(),
      wb = "[object Null]",
      Bb = "[object Undefined]",
      Us = $s ? $s.toStringTag : void 0;
    function Tb(e) {
      return e == null
        ? e === void 0
          ? Bb
          : wb
        : Us && Us in Object(e)
        ? Fb(e)
        : Sb(e);
    }
    zs.exports = Tb;
  });
  var Ge = S((TM, Hs) => {
    l();
    c();
    p();
    function Ob(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Hs.exports = Ob;
  });
  var go = S((RM, Gs) => {
    l();
    c();
    p();
    var _b = Ct(),
      Pb = Ge(),
      Rb = "[object AsyncFunction]",
      Ib = "[object Function]",
      kb = "[object GeneratorFunction]",
      Nb = "[object Proxy]";
    function jb(e) {
      if (!Pb(e)) return !1;
      var t = _b(e);
      return t == Ib || t == kb || t == Rb || t == Nb;
    }
    Gs.exports = jb;
  });
  var Vs = S((jM, Ws) => {
    l();
    c();
    p();
    var Mb = Le(),
      qb = Mb["__core-js_shared__"];
    Ws.exports = qb;
  });
  var Js = S(($M, Ys) => {
    l();
    c();
    p();
    var bo = Vs(),
      Ks = (function () {
        var e = /[^.]+$/.exec((bo && bo.keys && bo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Lb(e) {
      return !!Ks && Ks in e;
    }
    Ys.exports = Lb;
  });
  var Ao = S((GM, Xs) => {
    l();
    c();
    p();
    var $b = Function.prototype,
      Ub = $b.toString;
    function zb(e) {
      if (e != null) {
        try {
          return Ub.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Xs.exports = zb;
  });
  var Zs = S((YM, Qs) => {
    l();
    c();
    p();
    var Hb = go(),
      Gb = Js(),
      Wb = Ge(),
      Vb = Ao(),
      Kb = /[\\^$.*+?()[\]{}|]/g,
      Yb = /^\[object .+?Constructor\]$/,
      Jb = Function.prototype,
      Xb = Object.prototype,
      Qb = Jb.toString,
      Zb = Xb.hasOwnProperty,
      eA = RegExp(
        "^" +
          Qb.call(Zb)
            .replace(Kb, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function tA(e) {
      if (!Wb(e) || Gb(e)) return !1;
      var t = Hb(e) ? eA : Yb;
      return t.test(Vb(e));
    }
    Qs.exports = tA;
  });
  var tl = S((ZM, el) => {
    l();
    c();
    p();
    function rA(e, t) {
      return e?.[t];
    }
    el.exports = rA;
  });
  var ct = S((nq, rl) => {
    l();
    c();
    p();
    var nA = Zs(),
      aA = tl();
    function oA(e, t) {
      var r = aA(e, t);
      return nA(r) ? r : void 0;
    }
    rl.exports = oA;
  });
  var yn = S((uq, nl) => {
    l();
    c();
    p();
    var iA = ct(),
      uA = Le(),
      sA = iA(uA, "Map");
    nl.exports = sA;
  });
  var _r = S((pq, al) => {
    l();
    c();
    p();
    var lA = ct(),
      cA = lA(Object, "create");
    al.exports = cA;
  });
  var ul = S((yq, il) => {
    l();
    c();
    p();
    var ol = _r();
    function pA() {
      (this.__data__ = ol ? ol(null) : {}), (this.size = 0);
    }
    il.exports = pA;
  });
  var ll = S((Aq, sl) => {
    l();
    c();
    p();
    function dA(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    sl.exports = dA;
  });
  var pl = S((Cq, cl) => {
    l();
    c();
    p();
    var fA = _r(),
      hA = "__lodash_hash_undefined__",
      yA = Object.prototype,
      mA = yA.hasOwnProperty;
    function gA(e) {
      var t = this.__data__;
      if (fA) {
        var r = t[e];
        return r === hA ? void 0 : r;
      }
      return mA.call(t, e) ? t[e] : void 0;
    }
    cl.exports = gA;
  });
  var fl = S((wq, dl) => {
    l();
    c();
    p();
    var bA = _r(),
      AA = Object.prototype,
      EA = AA.hasOwnProperty;
    function vA(e) {
      var t = this.__data__;
      return bA ? t[e] !== void 0 : EA.call(t, e);
    }
    dl.exports = vA;
  });
  var yl = S((_q, hl) => {
    l();
    c();
    p();
    var DA = _r(),
      CA = "__lodash_hash_undefined__";
    function xA(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = DA && t === void 0 ? CA : t),
        this
      );
    }
    hl.exports = xA;
  });
  var gl = S((kq, ml) => {
    l();
    c();
    p();
    var FA = ul(),
      SA = ll(),
      wA = pl(),
      BA = fl(),
      TA = yl();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = FA;
    $t.prototype.delete = SA;
    $t.prototype.get = wA;
    $t.prototype.has = BA;
    $t.prototype.set = TA;
    ml.exports = $t;
  });
  var El = S((qq, Al) => {
    l();
    c();
    p();
    var bl = gl(),
      OA = Tr(),
      _A = yn();
    function PA() {
      (this.size = 0),
        (this.__data__ = {
          hash: new bl(),
          map: new (_A || OA)(),
          string: new bl(),
        });
    }
    Al.exports = PA;
  });
  var Dl = S((zq, vl) => {
    l();
    c();
    p();
    function RA(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    vl.exports = RA;
  });
  var Pr = S((Vq, Cl) => {
    l();
    c();
    p();
    var IA = Dl();
    function kA(e, t) {
      var r = e.__data__;
      return IA(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Cl.exports = kA;
  });
  var Fl = S((Xq, xl) => {
    l();
    c();
    p();
    var NA = Pr();
    function jA(e) {
      var t = NA(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    xl.exports = jA;
  });
  var wl = S((tL, Sl) => {
    l();
    c();
    p();
    var MA = Pr();
    function qA(e) {
      return MA(this, e).get(e);
    }
    Sl.exports = qA;
  });
  var Tl = S((oL, Bl) => {
    l();
    c();
    p();
    var LA = Pr();
    function $A(e) {
      return LA(this, e).has(e);
    }
    Bl.exports = $A;
  });
  var _l = S((lL, Ol) => {
    l();
    c();
    p();
    var UA = Pr();
    function zA(e, t) {
      var r = UA(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Ol.exports = zA;
  });
  var mn = S((fL, Pl) => {
    l();
    c();
    p();
    var HA = El(),
      GA = Fl(),
      WA = wl(),
      VA = Tl(),
      KA = _l();
    function Ut(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ut.prototype.clear = HA;
    Ut.prototype.delete = GA;
    Ut.prototype.get = WA;
    Ut.prototype.has = VA;
    Ut.prototype.set = KA;
    Pl.exports = Ut;
  });
  var Il = S((gL, Rl) => {
    l();
    c();
    p();
    var YA = Tr(),
      JA = yn(),
      XA = mn(),
      QA = 200;
    function ZA(e, t) {
      var r = this.__data__;
      if (r instanceof YA) {
        var n = r.__data__;
        if (!JA || n.length < QA - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new XA(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Rl.exports = ZA;
  });
  var gn = S((vL, kl) => {
    l();
    c();
    p();
    var eE = Tr(),
      tE = Fs(),
      rE = ws(),
      nE = Ts(),
      aE = _s(),
      oE = Il();
    function zt(e) {
      var t = (this.__data__ = new eE(e));
      this.size = t.size;
    }
    zt.prototype.clear = tE;
    zt.prototype.delete = rE;
    zt.prototype.get = nE;
    zt.prototype.has = aE;
    zt.prototype.set = oE;
    kl.exports = zt;
  });
  var jl = S((FL, Nl) => {
    l();
    c();
    p();
    var iE = "__lodash_hash_undefined__";
    function uE(e) {
      return this.__data__.set(e, iE), this;
    }
    Nl.exports = uE;
  });
  var ql = S((TL, Ml) => {
    l();
    c();
    p();
    function sE(e) {
      return this.__data__.has(e);
    }
    Ml.exports = sE;
  });
  var Eo = S((RL, Ll) => {
    l();
    c();
    p();
    var lE = mn(),
      cE = jl(),
      pE = ql();
    function bn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new lE(); ++t < r; ) this.add(e[t]);
    }
    bn.prototype.add = bn.prototype.push = cE;
    bn.prototype.has = pE;
    Ll.exports = bn;
  });
  var Ul = S((jL, $l) => {
    l();
    c();
    p();
    function dE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    $l.exports = dE;
  });
  var vo = S(($L, zl) => {
    l();
    c();
    p();
    function fE(e, t) {
      return e.has(t);
    }
    zl.exports = fE;
  });
  var Do = S((GL, Hl) => {
    l();
    c();
    p();
    var hE = Eo(),
      yE = Ul(),
      mE = vo(),
      gE = 1,
      bE = 2;
    function AE(e, t, r, n, a, o) {
      var i = r & gE,
        u = e.length,
        s = t.length;
      if (u != s && !(i && s > u)) return !1;
      var d = o.get(e),
        g = o.get(t);
      if (d && g) return d == t && g == e;
      var E = -1,
        y = !0,
        h = r & bE ? new hE() : void 0;
      for (o.set(e, t), o.set(t, e); ++E < u; ) {
        var A = e[E],
          b = t[E];
        if (n) var x = i ? n(b, A, E, t, e, o) : n(A, b, E, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          y = !1;
          break;
        }
        if (h) {
          if (
            !yE(t, function (F, R) {
              if (!mE(h, R) && (A === F || a(A, F, r, n, o))) return h.push(R);
            })
          ) {
            y = !1;
            break;
          }
        } else if (!(A === b || a(A, b, r, n, o))) {
          y = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), y;
    }
    Hl.exports = AE;
  });
  var Co = S((YL, Gl) => {
    l();
    c();
    p();
    var EE = Le(),
      vE = EE.Uint8Array;
    Gl.exports = vE;
  });
  var Vl = S((ZL, Wl) => {
    l();
    c();
    p();
    function DE(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    Wl.exports = DE;
  });
  var An = S((n$, Kl) => {
    l();
    c();
    p();
    function CE(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Kl.exports = CE;
  });
  var Zl = S((u$, Ql) => {
    l();
    c();
    p();
    var Yl = Dt(),
      Jl = Co(),
      xE = hn(),
      FE = Do(),
      SE = Vl(),
      wE = An(),
      BE = 1,
      TE = 2,
      OE = "[object Boolean]",
      _E = "[object Date]",
      PE = "[object Error]",
      RE = "[object Map]",
      IE = "[object Number]",
      kE = "[object RegExp]",
      NE = "[object Set]",
      jE = "[object String]",
      ME = "[object Symbol]",
      qE = "[object ArrayBuffer]",
      LE = "[object DataView]",
      Xl = Yl ? Yl.prototype : void 0,
      xo = Xl ? Xl.valueOf : void 0;
    function $E(e, t, r, n, a, o, i) {
      switch (r) {
        case LE:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case qE:
          return !(e.byteLength != t.byteLength || !o(new Jl(e), new Jl(t)));
        case OE:
        case _E:
        case IE:
          return xE(+e, +t);
        case PE:
          return e.name == t.name && e.message == t.message;
        case kE:
        case jE:
          return e == t + "";
        case RE:
          var u = SE;
        case NE:
          var s = n & BE;
          if ((u || (u = wE), e.size != t.size && !s)) return !1;
          var d = i.get(e);
          if (d) return d == t;
          (n |= TE), i.set(e, t);
          var g = FE(u(e), u(t), n, a, o, i);
          return i.delete(e), g;
        case ME:
          if (xo) return xo.call(e) == xo.call(t);
      }
      return !1;
    }
    Ql.exports = $E;
  });
  var En = S((p$, ec) => {
    l();
    c();
    p();
    function UE(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    ec.exports = UE;
  });
  var We = S((y$, tc) => {
    l();
    c();
    p();
    var zE = Array.isArray;
    tc.exports = zE;
  });
  var Fo = S((A$, rc) => {
    l();
    c();
    p();
    var HE = En(),
      GE = We();
    function WE(e, t, r) {
      var n = t(e);
      return GE(e) ? n : HE(n, r(e));
    }
    rc.exports = WE;
  });
  var ac = S((C$, nc) => {
    l();
    c();
    p();
    function VE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var i = e[r];
        t(i, r, e) && (o[a++] = i);
      }
      return o;
    }
    nc.exports = VE;
  });
  var So = S((w$, oc) => {
    l();
    c();
    p();
    function KE() {
      return [];
    }
    oc.exports = KE;
  });
  var vn = S((_$, uc) => {
    l();
    c();
    p();
    var YE = ac(),
      JE = So(),
      XE = Object.prototype,
      QE = XE.propertyIsEnumerable,
      ic = Object.getOwnPropertySymbols,
      ZE = ic
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                YE(ic(e), function (t) {
                  return QE.call(e, t);
                }));
          }
        : JE;
    uc.exports = ZE;
  });
  var lc = S((k$, sc) => {
    l();
    c();
    p();
    function ev(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    sc.exports = ev;
  });
  var rt = S((q$, cc) => {
    l();
    c();
    p();
    function tv(e) {
      return e != null && typeof e == "object";
    }
    cc.exports = tv;
  });
  var dc = S((z$, pc) => {
    l();
    c();
    p();
    var rv = Ct(),
      nv = rt(),
      av = "[object Arguments]";
    function ov(e) {
      return nv(e) && rv(e) == av;
    }
    pc.exports = ov;
  });
  var Dn = S((V$, yc) => {
    l();
    c();
    p();
    var fc = dc(),
      iv = rt(),
      hc = Object.prototype,
      uv = hc.hasOwnProperty,
      sv = hc.propertyIsEnumerable,
      lv = fc(
        (function () {
          return arguments;
        })()
      )
        ? fc
        : function (e) {
            return iv(e) && uv.call(e, "callee") && !sv.call(e, "callee");
          };
    yc.exports = lv;
  });
  var gc = S((X$, mc) => {
    l();
    c();
    p();
    function cv() {
      return !1;
    }
    mc.exports = cv;
  });
  var Cn = S((Rr, Ht) => {
    l();
    c();
    p();
    var pv = Le(),
      dv = gc(),
      Ec = typeof Rr == "object" && Rr && !Rr.nodeType && Rr,
      bc = Ec && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
      fv = bc && bc.exports === Ec,
      Ac = fv ? pv.Buffer : void 0,
      hv = Ac ? Ac.isBuffer : void 0,
      yv = hv || dv;
    Ht.exports = yv;
  });
  var xn = S((aU, vc) => {
    l();
    c();
    p();
    var mv = 9007199254740991,
      gv = /^(?:0|[1-9]\d*)$/;
    function bv(e, t) {
      var r = typeof e;
      return (
        (t = t ?? mv),
        !!t &&
          (r == "number" || (r != "symbol" && gv.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    vc.exports = bv;
  });
  var Fn = S((sU, Dc) => {
    l();
    c();
    p();
    var Av = 9007199254740991;
    function Ev(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Av;
    }
    Dc.exports = Ev;
  });
  var xc = S((dU, Cc) => {
    l();
    c();
    p();
    var vv = Ct(),
      Dv = Fn(),
      Cv = rt(),
      xv = "[object Arguments]",
      Fv = "[object Array]",
      Sv = "[object Boolean]",
      wv = "[object Date]",
      Bv = "[object Error]",
      Tv = "[object Function]",
      Ov = "[object Map]",
      _v = "[object Number]",
      Pv = "[object Object]",
      Rv = "[object RegExp]",
      Iv = "[object Set]",
      kv = "[object String]",
      Nv = "[object WeakMap]",
      jv = "[object ArrayBuffer]",
      Mv = "[object DataView]",
      qv = "[object Float32Array]",
      Lv = "[object Float64Array]",
      $v = "[object Int8Array]",
      Uv = "[object Int16Array]",
      zv = "[object Int32Array]",
      Hv = "[object Uint8Array]",
      Gv = "[object Uint8ClampedArray]",
      Wv = "[object Uint16Array]",
      Vv = "[object Uint32Array]",
      pe = {};
    pe[qv] =
      pe[Lv] =
      pe[$v] =
      pe[Uv] =
      pe[zv] =
      pe[Hv] =
      pe[Gv] =
      pe[Wv] =
      pe[Vv] =
        !0;
    pe[xv] =
      pe[Fv] =
      pe[jv] =
      pe[Sv] =
      pe[Mv] =
      pe[wv] =
      pe[Bv] =
      pe[Tv] =
      pe[Ov] =
      pe[_v] =
      pe[Pv] =
      pe[Rv] =
      pe[Iv] =
      pe[kv] =
      pe[Nv] =
        !1;
    function Kv(e) {
      return Cv(e) && Dv(e.length) && !!pe[vv(e)];
    }
    Cc.exports = Kv;
  });
  var Sn = S((mU, Fc) => {
    l();
    c();
    p();
    function Yv(e) {
      return function (t) {
        return e(t);
      };
    }
    Fc.exports = Yv;
  });
  var wn = S((Ir, Gt) => {
    l();
    c();
    p();
    var Jv = mo(),
      Sc = typeof Ir == "object" && Ir && !Ir.nodeType && Ir,
      kr = Sc && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
      Xv = kr && kr.exports === Sc,
      wo = Xv && Jv.process,
      Qv = (function () {
        try {
          var e = kr && kr.require && kr.require("util").types;
          return e || (wo && wo.binding && wo.binding("util"));
        } catch {}
      })();
    Gt.exports = Qv;
  });
  var Bo = S((CU, Tc) => {
    l();
    c();
    p();
    var Zv = xc(),
      eD = Sn(),
      wc = wn(),
      Bc = wc && wc.isTypedArray,
      tD = Bc ? eD(Bc) : Zv;
    Tc.exports = tD;
  });
  var To = S((wU, Oc) => {
    l();
    c();
    p();
    var rD = lc(),
      nD = Dn(),
      aD = We(),
      oD = Cn(),
      iD = xn(),
      uD = Bo(),
      sD = Object.prototype,
      lD = sD.hasOwnProperty;
    function cD(e, t) {
      var r = aD(e),
        n = !r && nD(e),
        a = !r && !n && oD(e),
        o = !r && !n && !a && uD(e),
        i = r || n || a || o,
        u = i ? rD(e.length, String) : [],
        s = u.length;
      for (var d in e)
        (t || lD.call(e, d)) &&
          !(
            i &&
            (d == "length" ||
              (a && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              iD(d, s))
          ) &&
          u.push(d);
      return u;
    }
    Oc.exports = cD;
  });
  var Bn = S((_U, _c) => {
    l();
    c();
    p();
    var pD = Object.prototype;
    function dD(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || pD;
      return e === r;
    }
    _c.exports = dD;
  });
  var Oo = S((kU, Pc) => {
    l();
    c();
    p();
    function fD(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Pc.exports = fD;
  });
  var Ic = S((qU, Rc) => {
    l();
    c();
    p();
    var hD = Oo(),
      yD = hD(Object.keys, Object);
    Rc.exports = yD;
  });
  var Nc = S((zU, kc) => {
    l();
    c();
    p();
    var mD = Bn(),
      gD = Ic(),
      bD = Object.prototype,
      AD = bD.hasOwnProperty;
    function ED(e) {
      if (!mD(e)) return gD(e);
      var t = [];
      for (var r in Object(e)) AD.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    kc.exports = ED;
  });
  var _o = S((VU, jc) => {
    l();
    c();
    p();
    var vD = go(),
      DD = Fn();
    function CD(e) {
      return e != null && DD(e.length) && !vD(e);
    }
    jc.exports = CD;
  });
  var Wt = S((XU, Mc) => {
    l();
    c();
    p();
    var xD = To(),
      FD = Nc(),
      SD = _o();
    function wD(e) {
      return SD(e) ? xD(e) : FD(e);
    }
    Mc.exports = wD;
  });
  var Po = S((tz, qc) => {
    l();
    c();
    p();
    var BD = Fo(),
      TD = vn(),
      OD = Wt();
    function _D(e) {
      return BD(e, OD, TD);
    }
    qc.exports = _D;
  });
  var Uc = S((oz, $c) => {
    l();
    c();
    p();
    var Lc = Po(),
      PD = 1,
      RD = Object.prototype,
      ID = RD.hasOwnProperty;
    function kD(e, t, r, n, a, o) {
      var i = r & PD,
        u = Lc(e),
        s = u.length,
        d = Lc(t),
        g = d.length;
      if (s != g && !i) return !1;
      for (var E = s; E--; ) {
        var y = u[E];
        if (!(i ? y in t : ID.call(t, y))) return !1;
      }
      var h = o.get(e),
        A = o.get(t);
      if (h && A) return h == t && A == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var x = i; ++E < s; ) {
        y = u[E];
        var F = e[y],
          R = t[y];
        if (n) var N = i ? n(R, F, y, t, e, o) : n(F, R, y, e, t, o);
        if (!(N === void 0 ? F === R || a(F, R, r, n, o) : N)) {
          b = !1;
          break;
        }
        x || (x = y == "constructor");
      }
      if (b && !x) {
        var L = e.constructor,
          w = t.constructor;
        L != w &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof w == "function" &&
            w instanceof w
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    $c.exports = kD;
  });
  var Hc = S((lz, zc) => {
    l();
    c();
    p();
    var ND = ct(),
      jD = Le(),
      MD = ND(jD, "DataView");
    zc.exports = MD;
  });
  var Wc = S((fz, Gc) => {
    l();
    c();
    p();
    var qD = ct(),
      LD = Le(),
      $D = qD(LD, "Promise");
    Gc.exports = $D;
  });
  var Ro = S((gz, Vc) => {
    l();
    c();
    p();
    var UD = ct(),
      zD = Le(),
      HD = UD(zD, "Set");
    Vc.exports = HD;
  });
  var Yc = S((vz, Kc) => {
    l();
    c();
    p();
    var GD = ct(),
      WD = Le(),
      VD = GD(WD, "WeakMap");
    Kc.exports = VD;
  });
  var Nr = S((Fz, rp) => {
    l();
    c();
    p();
    var Io = Hc(),
      ko = yn(),
      No = Wc(),
      jo = Ro(),
      Mo = Yc(),
      tp = Ct(),
      Vt = Ao(),
      Jc = "[object Map]",
      KD = "[object Object]",
      Xc = "[object Promise]",
      Qc = "[object Set]",
      Zc = "[object WeakMap]",
      ep = "[object DataView]",
      YD = Vt(Io),
      JD = Vt(ko),
      XD = Vt(No),
      QD = Vt(jo),
      ZD = Vt(Mo),
      xt = tp;
    ((Io && xt(new Io(new ArrayBuffer(1))) != ep) ||
      (ko && xt(new ko()) != Jc) ||
      (No && xt(No.resolve()) != Xc) ||
      (jo && xt(new jo()) != Qc) ||
      (Mo && xt(new Mo()) != Zc)) &&
      (xt = function (e) {
        var t = tp(e),
          r = t == KD ? e.constructor : void 0,
          n = r ? Vt(r) : "";
        if (n)
          switch (n) {
            case YD:
              return ep;
            case JD:
              return Jc;
            case XD:
              return Xc;
            case QD:
              return Qc;
            case ZD:
              return Zc;
          }
        return t;
      });
    rp.exports = xt;
  });
  var cp = S((Tz, lp) => {
    l();
    c();
    p();
    var qo = gn(),
      eC = Do(),
      tC = Zl(),
      rC = Uc(),
      np = Nr(),
      ap = We(),
      op = Cn(),
      nC = Bo(),
      aC = 1,
      ip = "[object Arguments]",
      up = "[object Array]",
      Tn = "[object Object]",
      oC = Object.prototype,
      sp = oC.hasOwnProperty;
    function iC(e, t, r, n, a, o) {
      var i = ap(e),
        u = ap(t),
        s = i ? up : np(e),
        d = u ? up : np(t);
      (s = s == ip ? Tn : s), (d = d == ip ? Tn : d);
      var g = s == Tn,
        E = d == Tn,
        y = s == d;
      if (y && op(e)) {
        if (!op(t)) return !1;
        (i = !0), (g = !1);
      }
      if (y && !g)
        return (
          o || (o = new qo()),
          i || nC(e) ? eC(e, t, r, n, a, o) : tC(e, t, s, r, n, a, o)
        );
      if (!(r & aC)) {
        var h = g && sp.call(e, "__wrapped__"),
          A = E && sp.call(t, "__wrapped__");
        if (h || A) {
          var b = h ? e.value() : e,
            x = A ? t.value() : t;
          return o || (o = new qo()), a(b, x, r, n, o);
        }
      }
      return y ? (o || (o = new qo()), rC(e, t, r, n, a, o)) : !1;
    }
    lp.exports = iC;
  });
  var Lo = S((Rz, fp) => {
    l();
    c();
    p();
    var uC = cp(),
      pp = rt();
    function dp(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!pp(e) && !pp(t))
        ? e !== e && t !== t
        : uC(e, t, r, n, dp, a);
    }
    fp.exports = dp;
  });
  var yp = S((jz, hp) => {
    l();
    c();
    p();
    var sC = gn(),
      lC = Lo(),
      cC = 1,
      pC = 2;
    function dC(e, t, r, n) {
      var a = r.length,
        o = a,
        i = !n;
      if (e == null) return !o;
      for (e = Object(e); a--; ) {
        var u = r[a];
        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++a < o; ) {
        u = r[a];
        var s = u[0],
          d = e[s],
          g = u[1];
        if (i && u[2]) {
          if (d === void 0 && !(s in e)) return !1;
        } else {
          var E = new sC();
          if (n) var y = n(d, g, s, e, t, E);
          if (!(y === void 0 ? lC(g, d, cC | pC, n, E) : y)) return !1;
        }
      }
      return !0;
    }
    hp.exports = dC;
  });
  var $o = S(($z, mp) => {
    l();
    c();
    p();
    var fC = Ge();
    function hC(e) {
      return e === e && !fC(e);
    }
    mp.exports = hC;
  });
  var bp = S((Gz, gp) => {
    l();
    c();
    p();
    var yC = $o(),
      mC = Wt();
    function gC(e) {
      for (var t = mC(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, yC(a)];
      }
      return t;
    }
    gp.exports = gC;
  });
  var Uo = S((Yz, Ap) => {
    l();
    c();
    p();
    function bC(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Ap.exports = bC;
  });
  var vp = S((Zz, Ep) => {
    l();
    c();
    p();
    var AC = yp(),
      EC = bp(),
      vC = Uo();
    function DC(e) {
      var t = EC(e);
      return t.length == 1 && t[0][2]
        ? vC(t[0][0], t[0][1])
        : function (r) {
            return r === e || AC(r, e, t);
          };
    }
    Ep.exports = DC;
  });
  var jr = S((nH, Dp) => {
    l();
    c();
    p();
    var CC = Ct(),
      xC = rt(),
      FC = "[object Symbol]";
    function SC(e) {
      return typeof e == "symbol" || (xC(e) && CC(e) == FC);
    }
    Dp.exports = SC;
  });
  var On = S((uH, Cp) => {
    l();
    c();
    p();
    var wC = We(),
      BC = jr(),
      TC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      OC = /^\w*$/;
    function _C(e, t) {
      if (wC(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        BC(e)
        ? !0
        : OC.test(e) || !TC.test(e) || (t != null && e in Object(t));
    }
    Cp.exports = _C;
  });
  var Sp = S((pH, Fp) => {
    l();
    c();
    p();
    var xp = mn(),
      PC = "Expected a function";
    function zo(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(PC);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (zo.Cache || xp)()), r;
    }
    zo.Cache = xp;
    Fp.exports = zo;
  });
  var Bp = S((yH, wp) => {
    l();
    c();
    p();
    var RC = Sp(),
      IC = 500;
    function kC(e) {
      var t = RC(e, function (n) {
          return r.size === IC && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    wp.exports = kC;
  });
  var Op = S((AH, Tp) => {
    l();
    c();
    p();
    var NC = Bp(),
      jC =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      MC = /\\(\\)?/g,
      qC = NC(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(jC, function (r, n, a, o) {
            t.push(a ? o.replace(MC, "$1") : n || r);
          }),
          t
        );
      });
    Tp.exports = qC;
  });
  var Np = S((CH, kp) => {
    l();
    c();
    p();
    var _p = Dt(),
      LC = yo(),
      $C = We(),
      UC = jr(),
      zC = 1 / 0,
      Pp = _p ? _p.prototype : void 0,
      Rp = Pp ? Pp.toString : void 0;
    function Ip(e) {
      if (typeof e == "string") return e;
      if ($C(e)) return LC(e, Ip) + "";
      if (UC(e)) return Rp ? Rp.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -zC ? "-0" : t;
    }
    kp.exports = Ip;
  });
  var Mp = S((wH, jp) => {
    l();
    c();
    p();
    var HC = Np();
    function GC(e) {
      return e == null ? "" : HC(e);
    }
    jp.exports = GC;
  });
  var Mr = S((_H, qp) => {
    l();
    c();
    p();
    var WC = We(),
      VC = On(),
      KC = Op(),
      YC = Mp();
    function JC(e, t) {
      return WC(e) ? e : VC(e, t) ? [e] : KC(YC(e));
    }
    qp.exports = JC;
  });
  var Kt = S((kH, Lp) => {
    l();
    c();
    p();
    var XC = jr(),
      QC = 1 / 0;
    function ZC(e) {
      if (typeof e == "string" || XC(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -QC ? "-0" : t;
    }
    Lp.exports = ZC;
  });
  var _n = S((qH, $p) => {
    l();
    c();
    p();
    var ex = Mr(),
      tx = Kt();
    function rx(e, t) {
      t = ex(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[tx(t[r++])];
      return r && r == n ? e : void 0;
    }
    $p.exports = rx;
  });
  var zp = S((zH, Up) => {
    l();
    c();
    p();
    var nx = _n();
    function ax(e, t, r) {
      var n = e == null ? void 0 : nx(e, t);
      return n === void 0 ? r : n;
    }
    Up.exports = ax;
  });
  var Gp = S((VH, Hp) => {
    l();
    c();
    p();
    function ox(e, t) {
      return e != null && t in Object(e);
    }
    Hp.exports = ox;
  });
  var Vp = S((XH, Wp) => {
    l();
    c();
    p();
    var ix = Mr(),
      ux = Dn(),
      sx = We(),
      lx = xn(),
      cx = Fn(),
      px = Kt();
    function dx(e, t, r) {
      t = ix(t, e);
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = px(t[n]);
        if (!(o = e != null && r(e, i))) break;
        e = e[i];
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && cx(a) && lx(i, a) && (sx(e) || ux(e)));
    }
    Wp.exports = dx;
  });
  var Ho = S((tG, Kp) => {
    l();
    c();
    p();
    var fx = Gp(),
      hx = Vp();
    function yx(e, t) {
      return e != null && hx(e, t, fx);
    }
    Kp.exports = yx;
  });
  var Jp = S((oG, Yp) => {
    l();
    c();
    p();
    var mx = Lo(),
      gx = zp(),
      bx = Ho(),
      Ax = On(),
      Ex = $o(),
      vx = Uo(),
      Dx = Kt(),
      Cx = 1,
      xx = 2;
    function Fx(e, t) {
      return Ax(e) && Ex(t)
        ? vx(Dx(e), t)
        : function (r) {
            var n = gx(r, e);
            return n === void 0 && n === t ? bx(r, e) : mx(t, n, Cx | xx);
          };
    }
    Yp.exports = Fx;
  });
  var Go = S((lG, Xp) => {
    l();
    c();
    p();
    function Sx(e) {
      return e;
    }
    Xp.exports = Sx;
  });
  var Zp = S((fG, Qp) => {
    l();
    c();
    p();
    function wx(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Qp.exports = wx;
  });
  var td = S((gG, ed) => {
    l();
    c();
    p();
    var Bx = _n();
    function Tx(e) {
      return function (t) {
        return Bx(t, e);
      };
    }
    ed.exports = Tx;
  });
  var nd = S((vG, rd) => {
    l();
    c();
    p();
    var Ox = Zp(),
      _x = td(),
      Px = On(),
      Rx = Kt();
    function Ix(e) {
      return Px(e) ? Ox(Rx(e)) : _x(e);
    }
    rd.exports = Ix;
  });
  var Wo = S((FG, ad) => {
    l();
    c();
    p();
    var kx = vp(),
      Nx = Jp(),
      jx = Go(),
      Mx = We(),
      qx = nd();
    function Lx(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? jx
        : typeof e == "object"
        ? Mx(e)
          ? Nx(e[0], e[1])
          : kx(e)
        : qx(e);
    }
    ad.exports = Lx;
  });
  var Vo = S((TG, od) => {
    l();
    c();
    p();
    var $x = ct(),
      Ux = (function () {
        try {
          var e = $x(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    od.exports = Ux;
  });
  var Pn = S((RG, ud) => {
    l();
    c();
    p();
    var id = Vo();
    function zx(e, t, r) {
      t == "__proto__" && id
        ? id(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    ud.exports = zx;
  });
  var Rn = S((jG, sd) => {
    l();
    c();
    p();
    var Hx = Pn(),
      Gx = hn(),
      Wx = Object.prototype,
      Vx = Wx.hasOwnProperty;
    function Kx(e, t, r) {
      var n = e[t];
      (!(Vx.call(e, t) && Gx(n, r)) || (r === void 0 && !(t in e))) &&
        Hx(e, t, r);
    }
    sd.exports = Kx;
  });
  var pd = S(($G, cd) => {
    l();
    c();
    p();
    var Yx = Rn(),
      Jx = Mr(),
      Xx = xn(),
      ld = Ge(),
      Qx = Kt();
    function Zx(e, t, r, n) {
      if (!ld(e)) return e;
      t = Jx(t, e);
      for (var a = -1, o = t.length, i = o - 1, u = e; u != null && ++a < o; ) {
        var s = Qx(t[a]),
          d = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (a != i) {
          var g = u[s];
          (d = n ? n(g, s, u) : void 0),
            d === void 0 && (d = ld(g) ? g : Xx(t[a + 1]) ? [] : {});
        }
        Yx(u, s, d), (u = u[s]);
      }
      return e;
    }
    cd.exports = Zx;
  });
  var Ko = S((GG, dd) => {
    l();
    c();
    p();
    var eF = _n(),
      tF = pd(),
      rF = Mr();
    function nF(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var i = t[n],
          u = eF(e, i);
        r(u, i) && tF(o, rF(i, e), u);
      }
      return o;
    }
    dd.exports = nF;
  });
  var In = S((YG, fd) => {
    l();
    c();
    p();
    var aF = Oo(),
      oF = aF(Object.getPrototypeOf, Object);
    fd.exports = oF;
  });
  var Yo = S((ZG, hd) => {
    l();
    c();
    p();
    var iF = En(),
      uF = In(),
      sF = vn(),
      lF = So(),
      cF = Object.getOwnPropertySymbols,
      pF = cF
        ? function (e) {
            for (var t = []; e; ) iF(t, sF(e)), (e = uF(e));
            return t;
          }
        : lF;
    hd.exports = pF;
  });
  var md = S((nW, yd) => {
    l();
    c();
    p();
    function dF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    yd.exports = dF;
  });
  var bd = S((uW, gd) => {
    l();
    c();
    p();
    var fF = Ge(),
      hF = Bn(),
      yF = md(),
      mF = Object.prototype,
      gF = mF.hasOwnProperty;
    function bF(e) {
      if (!fF(e)) return yF(e);
      var t = hF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !gF.call(e, n))) || r.push(n);
      return r;
    }
    gd.exports = bF;
  });
  var kn = S((pW, Ad) => {
    l();
    c();
    p();
    var AF = To(),
      EF = bd(),
      vF = _o();
    function DF(e) {
      return vF(e) ? AF(e, !0) : EF(e);
    }
    Ad.exports = DF;
  });
  var Jo = S((yW, Ed) => {
    l();
    c();
    p();
    var CF = Fo(),
      xF = Yo(),
      FF = kn();
    function SF(e) {
      return CF(e, FF, xF);
    }
    Ed.exports = SF;
  });
  var Xo = S((AW, vd) => {
    l();
    c();
    p();
    var wF = yo(),
      BF = Wo(),
      TF = Ko(),
      OF = Jo();
    function _F(e, t) {
      if (e == null) return {};
      var r = wF(OF(e), function (n) {
        return [n];
      });
      return (
        (t = BF(t)),
        TF(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    vd.exports = _F;
  });
  var Mn = S((Jd, si) => {
    l();
    c();
    p();
    (function (e) {
      if (typeof Jd == "object" && typeof si < "u") si.exports = e();
      else if (typeof define == "function" && define.amd) define([], e);
      else {
        var t;
        typeof window < "u" || typeof window < "u"
          ? (t = window)
          : typeof self < "u"
          ? (t = self)
          : (t = this),
          (t.memoizerific = e());
      }
    })(function () {
      var e, t, r;
      return (function n(a, o, i) {
        function u(g, E) {
          if (!o[g]) {
            if (!a[g]) {
              var y = typeof Ar == "function" && Ar;
              if (!E && y) return y(g, !0);
              if (s) return s(g, !0);
              var h = new Error("Cannot find module '" + g + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            }
            var A = (o[g] = { exports: {} });
            a[g][0].call(
              A.exports,
              function (b) {
                var x = a[g][1][b];
                return u(x || b);
              },
              A,
              A.exports,
              n,
              a,
              o,
              i
            );
          }
          return o[g].exports;
        }
        for (var s = typeof Ar == "function" && Ar, d = 0; d < i.length; d++)
          u(i[d]);
        return u;
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map != "function" || i) {
                  var u = n("./similar");
                  return new u();
                } else return new Map();
              };
            },
            { "./similar": 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (i.prototype.get = function (u) {
                var s;
                if (this.lastItem && this.isEqual(this.lastItem.key, u))
                  return this.lastItem.val;
                if (((s = this.indexOf(u)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val;
              }),
                (i.prototype.set = function (u, s) {
                  var d;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? ((this.lastItem.val = s), this)
                    : ((d = this.indexOf(u)),
                      d >= 0
                        ? ((this.lastItem = this.list[d]),
                          (this.list[d].val = s),
                          this)
                        : ((this.lastItem = { key: u, val: s }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (i.prototype.delete = function (u) {
                  var s;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, u) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(u)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0];
                }),
                (i.prototype.has = function (u) {
                  var s;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? !0
                    : ((s = this.indexOf(u)),
                      s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                }),
                (i.prototype.forEach = function (u, s) {
                  var d;
                  for (d = 0; d < this.size; d++)
                    u.call(s || this, this.list[d].val, this.list[d].key, this);
                }),
                (i.prototype.indexOf = function (u) {
                  var s;
                  for (s = 0; s < this.size; s++)
                    if (this.isEqual(this.list[s].key, u)) return s;
                  return -1;
                }),
                (i.prototype.isEqual = function (u, s) {
                  return u === s || (u !== u && s !== s);
                }),
                (a.exports = i);
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var i = n("map-or-similar");
              a.exports = function (g) {
                var E = new i(!1),
                  y = [];
                return function (h) {
                  var A = function () {
                    var b = E,
                      x,
                      F,
                      R = arguments.length - 1,
                      N = Array(R + 1),
                      L = !0,
                      w;
                    if ((A.numArgs || A.numArgs === 0) && A.numArgs !== R + 1)
                      throw new Error(
                        "Memoizerific functions should always be called with the same number of arguments"
                      );
                    for (w = 0; w < R; w++) {
                      if (
                        ((N[w] = { cacheItem: b, arg: arguments[w] }),
                        b.has(arguments[w]))
                      ) {
                        b = b.get(arguments[w]);
                        continue;
                      }
                      (L = !1),
                        (x = new i(!1)),
                        b.set(arguments[w], x),
                        (b = x);
                    }
                    return (
                      L &&
                        (b.has(arguments[R])
                          ? (F = b.get(arguments[R]))
                          : (L = !1)),
                      L ||
                        ((F = h.apply(null, arguments)),
                        b.set(arguments[R], F)),
                      g > 0 &&
                        ((N[R] = { cacheItem: b, arg: arguments[R] }),
                        L ? u(y, N) : y.push(N),
                        y.length > g && s(y.shift())),
                      (A.wasMemoized = L),
                      (A.numArgs = R + 1),
                      F
                    );
                  };
                  return (
                    (A.limit = g),
                    (A.wasMemoized = !1),
                    (A.cache = E),
                    (A.lru = y),
                    A
                  );
                };
              };
              function u(g, E) {
                var y = g.length,
                  h = E.length,
                  A,
                  b,
                  x;
                for (b = 0; b < y; b++) {
                  for (A = !0, x = 0; x < h; x++)
                    if (!d(g[b][x].arg, E[x].arg)) {
                      A = !1;
                      break;
                    }
                  if (A) break;
                }
                g.push(g.splice(b, 1)[0]);
              }
              function s(g) {
                var E = g.length,
                  y = g[E - 1],
                  h,
                  A;
                for (
                  y.cacheItem.delete(y.arg), A = E - 2;
                  A >= 0 &&
                  ((y = g[A]), (h = y.cacheItem.get(y.arg)), !h || !h.size);
                  A--
                )
                  y.cacheItem.delete(y.arg);
              }
              function d(g, E) {
                return g === E || (g !== g && E !== E);
              }
            },
            { "map-or-similar": 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  });
  var Qd = S((LW, Xd) => {
    l();
    c();
    p();
    function WS(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Xd.exports = WS;
  });
  var ef = S((HW, Zd) => {
    l();
    c();
    p();
    function VS(e) {
      return e !== e;
    }
    Zd.exports = VS;
  });
  var rf = S((KW, tf) => {
    l();
    c();
    p();
    function KS(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    tf.exports = KS;
  });
  var af = S((QW, nf) => {
    l();
    c();
    p();
    var YS = Qd(),
      JS = ef(),
      XS = rf();
    function QS(e, t, r) {
      return t === t ? XS(e, t, r) : YS(e, JS, r);
    }
    nf.exports = QS;
  });
  var uf = S((rV, of) => {
    l();
    c();
    p();
    var ZS = af();
    function ew(e, t) {
      var r = e == null ? 0 : e.length;
      return !!r && ZS(e, t, 0) > -1;
    }
    of.exports = ew;
  });
  var lf = S((iV, sf) => {
    l();
    c();
    p();
    function tw(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0;
      return !1;
    }
    sf.exports = tw;
  });
  var pf = S((cV, cf) => {
    l();
    c();
    p();
    function rw() {}
    cf.exports = rw;
  });
  var ff = S((hV, df) => {
    l();
    c();
    p();
    var li = Ro(),
      nw = pf(),
      aw = An(),
      ow = 1 / 0,
      iw =
        li && 1 / aw(new li([, -0]))[1] == ow
          ? function (e) {
              return new li(e);
            }
          : nw;
    df.exports = iw;
  });
  var yf = S((bV, hf) => {
    l();
    c();
    p();
    var uw = Eo(),
      sw = uf(),
      lw = lf(),
      cw = vo(),
      pw = ff(),
      dw = An(),
      fw = 200;
    function hw(e, t, r) {
      var n = -1,
        a = sw,
        o = e.length,
        i = !0,
        u = [],
        s = u;
      if (r) (i = !1), (a = lw);
      else if (o >= fw) {
        var d = t ? null : pw(e);
        if (d) return dw(d);
        (i = !1), (a = cw), (s = new uw());
      } else s = t ? [] : u;
      e: for (; ++n < o; ) {
        var g = e[n],
          E = t ? t(g) : g;
        if (((g = r || g !== 0 ? g : 0), i && E === E)) {
          for (var y = s.length; y--; ) if (s[y] === E) continue e;
          t && s.push(E), u.push(g);
        } else a(s, E, r) || (s !== u && s.push(E), u.push(g));
      }
      return u;
    }
    hf.exports = hw;
  });
  var gf = S((DV, mf) => {
    l();
    c();
    p();
    var yw = yf();
    function mw(e) {
      return e && e.length ? yw(e) : [];
    }
    mf.exports = mw;
  });
  var Af = S((SV, bf) => {
    l();
    c();
    p();
    function gw(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    bf.exports = gw;
  });
  var Lr = S((OV, Ef) => {
    l();
    c();
    p();
    var bw = Rn(),
      Aw = Pn();
    function Ew(e, t, r, n) {
      var a = !r;
      r || (r = {});
      for (var o = -1, i = t.length; ++o < i; ) {
        var u = t[o],
          s = n ? n(r[u], e[u], u, r, e) : void 0;
        s === void 0 && (s = e[u]), a ? Aw(r, u, s) : bw(r, u, s);
      }
      return r;
    }
    Ef.exports = Ew;
  });
  var Df = S((IV, vf) => {
    l();
    c();
    p();
    var vw = Lr(),
      Dw = Wt();
    function Cw(e, t) {
      return e && vw(t, Dw(t), e);
    }
    vf.exports = Cw;
  });
  var xf = S((MV, Cf) => {
    l();
    c();
    p();
    var xw = Lr(),
      Fw = kn();
    function Sw(e, t) {
      return e && xw(t, Fw(t), e);
    }
    Cf.exports = Sw;
  });
  var Tf = S(($r, Jt) => {
    l();
    c();
    p();
    var ww = Le(),
      Bf = typeof $r == "object" && $r && !$r.nodeType && $r,
      Ff = Bf && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      Bw = Ff && Ff.exports === Bf,
      Sf = Bw ? ww.Buffer : void 0,
      wf = Sf ? Sf.allocUnsafe : void 0;
    function Tw(e, t) {
      if (t) return e.slice();
      var r = e.length,
        n = wf ? wf(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    Jt.exports = Tw;
  });
  var _f = S((GV, Of) => {
    l();
    c();
    p();
    function Ow(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Of.exports = Ow;
  });
  var Rf = S((YV, Pf) => {
    l();
    c();
    p();
    var _w = Lr(),
      Pw = vn();
    function Rw(e, t) {
      return _w(e, Pw(e), t);
    }
    Pf.exports = Rw;
  });
  var kf = S((ZV, If) => {
    l();
    c();
    p();
    var Iw = Lr(),
      kw = Yo();
    function Nw(e, t) {
      return Iw(e, kw(e), t);
    }
    If.exports = Nw;
  });
  var jf = S((nK, Nf) => {
    l();
    c();
    p();
    var jw = Object.prototype,
      Mw = jw.hasOwnProperty;
    function qw(e) {
      var t = e.length,
        r = new e.constructor(t);
      return (
        t &&
          typeof e[0] == "string" &&
          Mw.call(e, "index") &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    }
    Nf.exports = qw;
  });
  var qn = S((uK, qf) => {
    l();
    c();
    p();
    var Mf = Co();
    function Lw(e) {
      var t = new e.constructor(e.byteLength);
      return new Mf(t).set(new Mf(e)), t;
    }
    qf.exports = Lw;
  });
  var $f = S((pK, Lf) => {
    l();
    c();
    p();
    var $w = qn();
    function Uw(e, t) {
      var r = t ? $w(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    Lf.exports = Uw;
  });
  var zf = S((yK, Uf) => {
    l();
    c();
    p();
    var zw = /\w*$/;
    function Hw(e) {
      var t = new e.constructor(e.source, zw.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    Uf.exports = Hw;
  });
  var Kf = S((AK, Vf) => {
    l();
    c();
    p();
    var Hf = Dt(),
      Gf = Hf ? Hf.prototype : void 0,
      Wf = Gf ? Gf.valueOf : void 0;
    function Gw(e) {
      return Wf ? Object(Wf.call(e)) : {};
    }
    Vf.exports = Gw;
  });
  var Jf = S((CK, Yf) => {
    l();
    c();
    p();
    var Ww = qn();
    function Vw(e, t) {
      var r = t ? Ww(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    Yf.exports = Vw;
  });
  var Qf = S((wK, Xf) => {
    l();
    c();
    p();
    var Kw = qn(),
      Yw = $f(),
      Jw = zf(),
      Xw = Kf(),
      Qw = Jf(),
      Zw = "[object Boolean]",
      e5 = "[object Date]",
      t5 = "[object Map]",
      r5 = "[object Number]",
      n5 = "[object RegExp]",
      a5 = "[object Set]",
      o5 = "[object String]",
      i5 = "[object Symbol]",
      u5 = "[object ArrayBuffer]",
      s5 = "[object DataView]",
      l5 = "[object Float32Array]",
      c5 = "[object Float64Array]",
      p5 = "[object Int8Array]",
      d5 = "[object Int16Array]",
      f5 = "[object Int32Array]",
      h5 = "[object Uint8Array]",
      y5 = "[object Uint8ClampedArray]",
      m5 = "[object Uint16Array]",
      g5 = "[object Uint32Array]";
    function b5(e, t, r) {
      var n = e.constructor;
      switch (t) {
        case u5:
          return Kw(e);
        case Zw:
        case e5:
          return new n(+e);
        case s5:
          return Yw(e, r);
        case l5:
        case c5:
        case p5:
        case d5:
        case f5:
        case h5:
        case y5:
        case m5:
        case g5:
          return Qw(e, r);
        case t5:
          return new n();
        case r5:
        case o5:
          return new n(e);
        case n5:
          return Jw(e);
        case a5:
          return new n();
        case i5:
          return Xw(e);
      }
    }
    Xf.exports = b5;
  });
  var t0 = S((_K, e0) => {
    l();
    c();
    p();
    var A5 = Ge(),
      Zf = Object.create,
      E5 = (function () {
        function e() {}
        return function (t) {
          if (!A5(t)) return {};
          if (Zf) return Zf(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    e0.exports = E5;
  });
  var n0 = S((kK, r0) => {
    l();
    c();
    p();
    var v5 = t0(),
      D5 = In(),
      C5 = Bn();
    function x5(e) {
      return typeof e.constructor == "function" && !C5(e) ? v5(D5(e)) : {};
    }
    r0.exports = x5;
  });
  var o0 = S((qK, a0) => {
    l();
    c();
    p();
    var F5 = Nr(),
      S5 = rt(),
      w5 = "[object Map]";
    function B5(e) {
      return S5(e) && F5(e) == w5;
    }
    a0.exports = B5;
  });
  var l0 = S((zK, s0) => {
    l();
    c();
    p();
    var T5 = o0(),
      O5 = Sn(),
      i0 = wn(),
      u0 = i0 && i0.isMap,
      _5 = u0 ? O5(u0) : T5;
    s0.exports = _5;
  });
  var p0 = S((VK, c0) => {
    l();
    c();
    p();
    var P5 = Nr(),
      R5 = rt(),
      I5 = "[object Set]";
    function k5(e) {
      return R5(e) && P5(e) == I5;
    }
    c0.exports = k5;
  });
  var y0 = S((XK, h0) => {
    l();
    c();
    p();
    var N5 = p0(),
      j5 = Sn(),
      d0 = wn(),
      f0 = d0 && d0.isSet,
      M5 = f0 ? j5(f0) : N5;
    h0.exports = M5;
  });
  var E0 = S((tY, A0) => {
    l();
    c();
    p();
    var q5 = gn(),
      L5 = Af(),
      $5 = Rn(),
      U5 = Df(),
      z5 = xf(),
      H5 = Tf(),
      G5 = _f(),
      W5 = Rf(),
      V5 = kf(),
      K5 = Po(),
      Y5 = Jo(),
      J5 = Nr(),
      X5 = jf(),
      Q5 = Qf(),
      Z5 = n0(),
      e3 = We(),
      t3 = Cn(),
      r3 = l0(),
      n3 = Ge(),
      a3 = y0(),
      o3 = Wt(),
      i3 = kn(),
      u3 = 1,
      s3 = 2,
      l3 = 4,
      m0 = "[object Arguments]",
      c3 = "[object Array]",
      p3 = "[object Boolean]",
      d3 = "[object Date]",
      f3 = "[object Error]",
      g0 = "[object Function]",
      h3 = "[object GeneratorFunction]",
      y3 = "[object Map]",
      m3 = "[object Number]",
      b0 = "[object Object]",
      g3 = "[object RegExp]",
      b3 = "[object Set]",
      A3 = "[object String]",
      E3 = "[object Symbol]",
      v3 = "[object WeakMap]",
      D3 = "[object ArrayBuffer]",
      C3 = "[object DataView]",
      x3 = "[object Float32Array]",
      F3 = "[object Float64Array]",
      S3 = "[object Int8Array]",
      w3 = "[object Int16Array]",
      B3 = "[object Int32Array]",
      T3 = "[object Uint8Array]",
      O3 = "[object Uint8ClampedArray]",
      _3 = "[object Uint16Array]",
      P3 = "[object Uint32Array]",
      ce = {};
    ce[m0] =
      ce[c3] =
      ce[D3] =
      ce[C3] =
      ce[p3] =
      ce[d3] =
      ce[x3] =
      ce[F3] =
      ce[S3] =
      ce[w3] =
      ce[B3] =
      ce[y3] =
      ce[m3] =
      ce[b0] =
      ce[g3] =
      ce[b3] =
      ce[A3] =
      ce[E3] =
      ce[T3] =
      ce[O3] =
      ce[_3] =
      ce[P3] =
        !0;
    ce[f3] = ce[g0] = ce[v3] = !1;
    function Ln(e, t, r, n, a, o) {
      var i,
        u = t & u3,
        s = t & s3,
        d = t & l3;
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
      if (!n3(e)) return e;
      var g = e3(e);
      if (g) {
        if (((i = X5(e)), !u)) return G5(e, i);
      } else {
        var E = J5(e),
          y = E == g0 || E == h3;
        if (t3(e)) return H5(e, u);
        if (E == b0 || E == m0 || (y && !a)) {
          if (((i = s || y ? {} : Z5(e)), !u))
            return s ? V5(e, z5(i, e)) : W5(e, U5(i, e));
        } else {
          if (!ce[E]) return a ? e : {};
          i = Q5(e, E, u);
        }
      }
      o || (o = new q5());
      var h = o.get(e);
      if (h) return h;
      o.set(e, i),
        a3(e)
          ? e.forEach(function (x) {
              i.add(Ln(x, t, r, x, e, o));
            })
          : r3(e) &&
            e.forEach(function (x, F) {
              i.set(F, Ln(x, t, r, F, e, o));
            });
      var A = d ? (s ? Y5 : K5) : s ? i3 : o3,
        b = g ? void 0 : A(e);
      return (
        L5(b || e, function (x, F) {
          b && ((F = x), (x = e[F])), $5(i, F, Ln(x, t, r, F, e, o));
        }),
        i
      );
    }
    A0.exports = Ln;
  });
  var D0 = S((oY, v0) => {
    l();
    c();
    p();
    var R3 = E0(),
      I3 = 1,
      k3 = 4;
    function N3(e) {
      return R3(e, I3 | k3);
    }
    v0.exports = N3;
  });
  var _0 = S((NY, O0) => {
    l();
    c();
    p();
    function hB(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
          var s = i[e ? u : ++a];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    O0.exports = hB;
  });
  var R0 = S((LY, P0) => {
    l();
    c();
    p();
    var yB = _0(),
      mB = yB();
    P0.exports = mB;
  });
  var k0 = S((HY, I0) => {
    l();
    c();
    p();
    var gB = R0(),
      bB = Wt();
    function AB(e, t) {
      return e && gB(e, t, bB);
    }
    I0.exports = AB;
  });
  var Vn = S((KY, N0) => {
    l();
    c();
    p();
    var EB = Pn(),
      vB = k0(),
      DB = Wo();
    function CB(e, t) {
      var r = {};
      return (
        (t = DB(t, 3)),
        vB(e, function (n, a, o) {
          EB(r, a, t(n, a, o));
        }),
        r
      );
    }
    N0.exports = CB;
  });
  var M0 = S((QY, j0) => {
    l();
    c();
    p();
    var xB = Ko(),
      FB = Ho();
    function SB(e, t) {
      return xB(e, t, function (r, n) {
        return FB(e, n);
      });
    }
    j0.exports = SB;
  });
  var U0 = S((rJ, $0) => {
    l();
    c();
    p();
    var q0 = Dt(),
      wB = Dn(),
      BB = We(),
      L0 = q0 ? q0.isConcatSpreadable : void 0;
    function TB(e) {
      return BB(e) || wB(e) || !!(L0 && e && e[L0]);
    }
    $0.exports = TB;
  });
  var G0 = S((iJ, H0) => {
    l();
    c();
    p();
    var OB = En(),
      _B = U0();
    function z0(e, t, r, n, a) {
      var o = -1,
        i = e.length;
      for (r || (r = _B), a || (a = []); ++o < i; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? z0(u, t - 1, r, n, a)
            : OB(a, u)
          : n || (a[a.length] = u);
      }
      return a;
    }
    H0.exports = z0;
  });
  var V0 = S((cJ, W0) => {
    l();
    c();
    p();
    var PB = G0();
    function RB(e) {
      var t = e == null ? 0 : e.length;
      return t ? PB(e, 1) : [];
    }
    W0.exports = RB;
  });
  var Y0 = S((hJ, K0) => {
    l();
    c();
    p();
    function IB(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    K0.exports = IB;
  });
  var Q0 = S((bJ, X0) => {
    l();
    c();
    p();
    var kB = Y0(),
      J0 = Math.max;
    function NB(e, t, r) {
      return (
        (t = J0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = J0(n.length - t, 0), i = Array(o);
            ++a < o;

          )
            i[a] = n[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
          return (u[t] = r(i)), kB(e, this, u);
        }
      );
    }
    X0.exports = NB;
  });
  var eh = S((DJ, Z0) => {
    l();
    c();
    p();
    function jB(e) {
      return function () {
        return e;
      };
    }
    Z0.exports = jB;
  });
  var nh = S((SJ, rh) => {
    l();
    c();
    p();
    var MB = eh(),
      th = Vo(),
      qB = Go(),
      LB = th
        ? function (e, t) {
            return th(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: MB(t),
              writable: !0,
            });
          }
        : qB;
    rh.exports = LB;
  });
  var oh = S((OJ, ah) => {
    l();
    c();
    p();
    var $B = 800,
      UB = 16,
      zB = Date.now;
    function HB(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = zB(),
          a = UB - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= $B) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ah.exports = HB;
  });
  var uh = S((IJ, ih) => {
    l();
    c();
    p();
    var GB = nh(),
      WB = oh(),
      VB = WB(GB);
    ih.exports = VB;
  });
  var lh = S((MJ, sh) => {
    l();
    c();
    p();
    var KB = V0(),
      YB = Q0(),
      JB = uh();
    function XB(e) {
      return JB(YB(e, void 0, KB), e + "");
    }
    sh.exports = XB;
  });
  var ph = S((UJ, ch) => {
    l();
    c();
    p();
    var QB = M0(),
      ZB = lh(),
      e8 = ZB(function (e, t) {
        return e == null ? {} : QB(e, t);
      });
    ch.exports = e8;
  });
  var Yn = S((WJ, gh) => {
    "use strict";
    l();
    c();
    p();
    function Kn(e) {
      return Array.prototype.slice.apply(e);
    }
    var yh = "pending",
      dh = "resolved",
      fh = "rejected";
    function ne(e) {
      (this.status = yh),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(
            this,
            this._continueWith.bind(this),
            this._failWith.bind(this)
          );
    }
    function Ur(e) {
      return e && typeof e.then == "function";
    }
    function t8(e) {
      return e;
    }
    ne.prototype = {
      then: function (e, t) {
        var r = ne.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            );
          if (t)
            try {
              var n = t(this._error);
              return Ur(n)
                ? (this._chainPromiseData(n, r), r)
                : ne.resolve(n)._setParent(this);
            } catch (a) {
              return ne.reject(a)._setParent(this);
            }
          return ne.reject(this._error)._setParent(this);
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        );
      },
      catch: function (e) {
        if (this._isResolved()) return ne.resolve(this._data)._setParent(this);
        var t = ne.unresolved()._setParent(this);
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        );
      },
      finally: function (e) {
        var t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = t8);
            var o = e(n);
            return Ur(o)
              ? o.then(function () {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then(function (n) {
          return r(n);
        }).catch(function (n) {
          return r(null, n);
        });
      },
      pause: function () {
        return (this._paused = !0), this;
      },
      resume: function () {
        var e = this._findFirstPaused();
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        );
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent: function (e) {
        if (this._parent) throw new Error("parent already set");
        return (this._parent = e), this;
      },
      _continueWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending();
        });
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused;
        });
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this;
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (o) {
                n.promise.reject(o);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this;
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  r._handleResolutionError(o, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            Ur(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this;
        return e
          .then(function (r) {
            (t._data = r), t._runResolutions();
          })
          .catch(function (r) {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult: function (e, t) {
        Ur(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r);
        }).catch(function (r) {
          t.reject(r);
        });
      },
      _setResolved: function () {
        (this.status = dh), this._paused || this._runResolutions();
      },
      _setRejected: function () {
        (this.status = fh), this._paused || this._runRejections();
      },
      _isPending: function () {
        return this.status === yh;
      },
      _isResolved: function () {
        return this.status === dh;
      },
      _isRejected: function () {
        return this.status === fh;
      },
    };
    ne.resolve = function (e) {
      return new ne(function (t, r) {
        Ur(e)
          ? e
              .then(function (n) {
                t(n);
              })
              .catch(function (n) {
                r(n);
              })
          : t(e);
      });
    };
    ne.reject = function (e) {
      return new ne(function (t, r) {
        r(e);
      });
    };
    ne.unresolved = function () {
      return new ne(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    ne.all = function () {
      var e = Kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n);
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), r(s));
                };
              e.forEach(function (s, d) {
                ne.resolve(s)
                  .then(function (g) {
                    (n[d] = g), (a += 1), o();
                  })
                  .catch(function (g) {
                    u(g);
                  });
              });
            })
          : ne.resolve([])
      );
    };
    function hh(e) {
      return typeof window < "u" && "AggregateError" in window
        ? new window.AggregateError(e)
        : { errors: e };
    }
    ne.any = function () {
      var e = Kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(hh(n));
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), t(s));
                };
              e.forEach(function (s, d) {
                ne.resolve(s)
                  .then(function (g) {
                    u(g);
                  })
                  .catch(function (g) {
                    (n[d] = g), (a += 1), o();
                  });
              });
            })
          : ne.reject(hh([]))
      );
    };
    ne.allSettled = function () {
      var e = Kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  (n += 1), n === e.length && t(r);
                };
              e.forEach(function (o, i) {
                ne.resolve(o)
                  .then(function (u) {
                    (r[i] = { status: "fulfilled", value: u }), a();
                  })
                  .catch(function (u) {
                    (r[i] = { status: "rejected", reason: u }), a();
                  });
              });
            })
          : ne.resolve([])
      );
    };
    if (Promise === ne)
      throw new Error(
        "Please use SynchronousPromise.installGlobally() to install globally"
      );
    var mh = Promise;
    ne.installGlobally = function (e) {
      if (Promise === ne) return e;
      var t = r8(e);
      return (Promise = ne), t;
    };
    ne.uninstallGlobally = function () {
      Promise === ne && (Promise = mh);
    };
    function r8(e) {
      if (typeof e > "u" || e.__patched) return e;
      var t = e;
      return (
        (e = function () {
          var r = mh;
          t.apply(this, Kn(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    gh.exports = { SynchronousPromise: ne };
  });
  var di = S((aX, Ah) => {
    l();
    c();
    p();
    var n8 = Ct(),
      a8 = In(),
      o8 = rt(),
      i8 = "[object Object]",
      u8 = Function.prototype,
      s8 = Object.prototype,
      bh = u8.toString,
      l8 = s8.hasOwnProperty,
      c8 = bh.call(Object);
    function p8(e) {
      if (!o8(e) || n8(e) != i8) return !1;
      var t = a8(e);
      if (t === null) return !0;
      var r = l8.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && bh.call(r) == c8;
    }
    Ah.exports = p8;
  });
  var vh = S((sX, Eh) => {
    l();
    c();
    p();
    Eh.exports = d8;
    function d8(e, t) {
      if (fi("noDeprecation")) return e;
      var r = !1;
      function n() {
        if (!r) {
          if (fi("throwDeprecation")) throw new Error(t);
          fi("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function fi(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      var t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === "true";
    }
  });
  var Bh = S((BX, wh) => {
    "use strict";
    l();
    c();
    p();
    wh.exports = function () {
      if (
        typeof Symbol != "function" ||
        typeof Object.getOwnPropertySymbols != "function"
      )
        return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var t = {},
        r = Symbol("test"),
        n = Object(r);
      if (
        typeof r == "string" ||
        Object.prototype.toString.call(r) !== "[object Symbol]" ||
        Object.prototype.toString.call(n) !== "[object Symbol]"
      )
        return !1;
      var a = 42;
      t[r] = a;
      for (r in t) return !1;
      if (
        (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1;
      var o = Object.getOwnPropertySymbols(t);
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(t, r);
        if (i.value !== a || i.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  var gi = S((PX, Oh) => {
    "use strict";
    l();
    c();
    p();
    var Th = typeof Symbol < "u" && Symbol,
      T8 = Bh();
    Oh.exports = function () {
      return typeof Th != "function" ||
        typeof Symbol != "function" ||
        typeof Th("foo") != "symbol" ||
        typeof Symbol("bar") != "symbol"
        ? !1
        : T8();
    };
  });
  var Ph = S((NX, _h) => {
    "use strict";
    l();
    c();
    p();
    var O8 = "Function.prototype.bind called on incompatible ",
      bi = Array.prototype.slice,
      _8 = Object.prototype.toString,
      P8 = "[object Function]";
    _h.exports = function (t) {
      var r = this;
      if (typeof r != "function" || _8.call(r) !== P8)
        throw new TypeError(O8 + r);
      for (
        var n = bi.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var g = r.apply(this, n.concat(bi.call(arguments)));
              return Object(g) === g ? g : this;
            } else return r.apply(t, n.concat(bi.call(arguments)));
          },
          i = Math.max(0, r.length - n.length),
          u = [],
          s = 0;
        s < i;
        s++
      )
        u.push("$" + s);
      if (
        ((a = Function(
          "binder",
          "return function (" +
            u.join(",") +
            "){ return binder.apply(this,arguments); }"
        )(o)),
        r.prototype)
      ) {
        var d = function () {};
        (d.prototype = r.prototype),
          (a.prototype = new d()),
          (d.prototype = null);
      }
      return a;
    };
  });
  var Wr = S((LX, Rh) => {
    "use strict";
    l();
    c();
    p();
    var R8 = Ph();
    Rh.exports = Function.prototype.bind || R8;
  });
  var Ai = S((HX, Ih) => {
    "use strict";
    l();
    c();
    p();
    var I8 = Wr();
    Ih.exports = I8.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var qh = S((KX, Mh) => {
    "use strict";
    l();
    c();
    p();
    var te,
      Vr = SyntaxError,
      jh = Function,
      er = TypeError,
      Ei = function (e) {
        try {
          return jh('"use strict"; return (' + e + ").constructor;")();
        } catch {}
      },
      wt = Object.getOwnPropertyDescriptor;
    if (wt)
      try {
        wt({}, "");
      } catch {
        wt = null;
      }
    var vi = function () {
        throw new er();
      },
      k8 = wt
        ? (function () {
            try {
              return arguments.callee, vi;
            } catch {
              try {
                return wt(arguments, "callee").get;
              } catch {
                return vi;
              }
            }
          })()
        : vi,
      Qt = gi()(),
      ft =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__;
        },
      Zt = {},
      N8 = typeof Uint8Array > "u" ? te : ft(Uint8Array),
      tr = {
        "%AggregateError%": typeof AggregateError > "u" ? te : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? te : ArrayBuffer,
        "%ArrayIteratorPrototype%": Qt ? ft([][Symbol.iterator]()) : te,
        "%AsyncFromSyncIteratorPrototype%": te,
        "%AsyncFunction%": Zt,
        "%AsyncGenerator%": Zt,
        "%AsyncGeneratorFunction%": Zt,
        "%AsyncIteratorPrototype%": Zt,
        "%Atomics%": typeof Atomics > "u" ? te : Atomics,
        "%BigInt%": typeof BigInt > "u" ? te : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? te : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? te : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? te : Float64Array,
        "%FinalizationRegistry%":
          typeof FinalizationRegistry > "u" ? te : FinalizationRegistry,
        "%Function%": jh,
        "%GeneratorFunction%": Zt,
        "%Int8Array%": typeof Int8Array > "u" ? te : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? te : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? te : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Qt ? ft(ft([][Symbol.iterator]())) : te,
        "%JSON%": typeof JSON == "object" ? JSON : te,
        "%Map%": typeof Map > "u" ? te : Map,
        "%MapIteratorPrototype%":
          typeof Map > "u" || !Qt ? te : ft(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? te : Promise,
        "%Proxy%": typeof Proxy > "u" ? te : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? te : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? te : Set,
        "%SetIteratorPrototype%":
          typeof Set > "u" || !Qt ? te : ft(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%":
          typeof SharedArrayBuffer > "u" ? te : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Qt ? ft(""[Symbol.iterator]()) : te,
        "%Symbol%": Qt ? Symbol : te,
        "%SyntaxError%": Vr,
        "%ThrowTypeError%": k8,
        "%TypedArray%": N8,
        "%TypeError%": er,
        "%Uint8Array%": typeof Uint8Array > "u" ? te : Uint8Array,
        "%Uint8ClampedArray%":
          typeof Uint8ClampedArray > "u" ? te : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? te : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? te : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? te : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? te : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? te : WeakSet,
      },
      j8 = function e(t) {
        var r;
        if (t === "%AsyncFunction%") r = Ei("async function () {}");
        else if (t === "%GeneratorFunction%") r = Ei("function* () {}");
        else if (t === "%AsyncGeneratorFunction%")
          r = Ei("async function* () {}");
        else if (t === "%AsyncGenerator%") {
          var n = e("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if (t === "%AsyncIteratorPrototype%") {
          var a = e("%AsyncGenerator%");
          a && (r = ft(a.prototype));
        }
        return (tr[t] = r), r;
      },
      kh = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      ra = Wr(),
      ea = Ai(),
      M8 = ra.call(Function.call, Array.prototype.concat),
      q8 = ra.call(Function.apply, Array.prototype.splice),
      Nh = ra.call(Function.call, String.prototype.replace),
      ta = ra.call(Function.call, String.prototype.slice),
      L8 =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      $8 = /\\(\\)?/g,
      U8 = function (t) {
        var r = ta(t, 0, 1),
          n = ta(t, -1);
        if (r === "%" && n !== "%")
          throw new Vr("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%")
          throw new Vr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return (
          Nh(t, L8, function (o, i, u, s) {
            a[a.length] = u ? Nh(s, $8, "$1") : i || o;
          }),
          a
        );
      },
      z8 = function (t, r) {
        var n = t,
          a;
        if ((ea(kh, n) && ((a = kh[n]), (n = "%" + a[0] + "%")), ea(tr, n))) {
          var o = tr[n];
          if ((o === Zt && (o = j8(n)), typeof o > "u" && !r))
            throw new er(
              "intrinsic " +
                t +
                " exists, but is not available. Please file an issue!"
            );
          return { alias: a, name: n, value: o };
        }
        throw new Vr("intrinsic " + t + " does not exist!");
      };
    Mh.exports = function (t, r) {
      if (typeof t != "string" || t.length === 0)
        throw new er("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof r != "boolean")
        throw new er('"allowMissing" argument must be a boolean');
      var n = U8(t),
        a = n.length > 0 ? n[0] : "",
        o = z8("%" + a + "%", r),
        i = o.name,
        u = o.value,
        s = !1,
        d = o.alias;
      d && ((a = d[0]), q8(n, M8([0, 1], d)));
      for (var g = 1, E = !0; g < n.length; g += 1) {
        var y = n[g],
          h = ta(y, 0, 1),
          A = ta(y, -1);
        if (
          (h === '"' ||
            h === "'" ||
            h === "`" ||
            A === '"' ||
            A === "'" ||
            A === "`") &&
          h !== A
        )
          throw new Vr("property names with quotes must have matching quotes");
        if (
          ((y === "constructor" || !E) && (s = !0),
          (a += "." + y),
          (i = "%" + a + "%"),
          ea(tr, i))
        )
          u = tr[i];
        else if (u != null) {
          if (!(y in u)) {
            if (!r)
              throw new er(
                "base intrinsic for " +
                  t +
                  " exists, but the property is not available."
              );
            return;
          }
          if (wt && g + 1 >= n.length) {
            var b = wt(u, y);
            (E = !!b),
              E && "get" in b && !("originalValue" in b.get)
                ? (u = b.get)
                : (u = u[y]);
          } else (E = ea(u, y)), (u = u[y]);
          E && !s && (tr[i] = u);
        }
      }
      return u;
    };
  });
  var xi = S((QX, zh) => {
    "use strict";
    l();
    c();
    p();
    var re,
      Kr = SyntaxError,
      Uh = Function,
      ar = TypeError,
      Di = function (e) {
        try {
          return Uh('"use strict"; return (' + e + ").constructor;")();
        } catch {}
      },
      Bt = Object.getOwnPropertyDescriptor;
    if (Bt)
      try {
        Bt({}, "");
      } catch {
        Bt = null;
      }
    var Ci = function () {
        throw new ar();
      },
      H8 = Bt
        ? (function () {
            try {
              return arguments.callee, Ci;
            } catch {
              try {
                return Bt(arguments, "callee").get;
              } catch {
                return Ci;
              }
            }
          })()
        : Ci,
      rr = gi()(),
      ht =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__;
        },
      nr = {},
      G8 = typeof Uint8Array > "u" ? re : ht(Uint8Array),
      or = {
        "%AggregateError%": typeof AggregateError > "u" ? re : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? re : ArrayBuffer,
        "%ArrayIteratorPrototype%": rr ? ht([][Symbol.iterator]()) : re,
        "%AsyncFromSyncIteratorPrototype%": re,
        "%AsyncFunction%": nr,
        "%AsyncGenerator%": nr,
        "%AsyncGeneratorFunction%": nr,
        "%AsyncIteratorPrototype%": nr,
        "%Atomics%": typeof Atomics > "u" ? re : Atomics,
        "%BigInt%": typeof BigInt > "u" ? re : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? re : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? re : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? re : Float64Array,
        "%FinalizationRegistry%":
          typeof FinalizationRegistry > "u" ? re : FinalizationRegistry,
        "%Function%": Uh,
        "%GeneratorFunction%": nr,
        "%Int8Array%": typeof Int8Array > "u" ? re : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? re : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? re : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": rr ? ht(ht([][Symbol.iterator]())) : re,
        "%JSON%": typeof JSON == "object" ? JSON : re,
        "%Map%": typeof Map > "u" ? re : Map,
        "%MapIteratorPrototype%":
          typeof Map > "u" || !rr ? re : ht(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? re : Promise,
        "%Proxy%": typeof Proxy > "u" ? re : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? re : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? re : Set,
        "%SetIteratorPrototype%":
          typeof Set > "u" || !rr ? re : ht(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%":
          typeof SharedArrayBuffer > "u" ? re : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": rr ? ht(""[Symbol.iterator]()) : re,
        "%Symbol%": rr ? Symbol : re,
        "%SyntaxError%": Kr,
        "%ThrowTypeError%": H8,
        "%TypedArray%": G8,
        "%TypeError%": ar,
        "%Uint8Array%": typeof Uint8Array > "u" ? re : Uint8Array,
        "%Uint8ClampedArray%":
          typeof Uint8ClampedArray > "u" ? re : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? re : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? re : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? re : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? re : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? re : WeakSet,
      },
      W8 = function e(t) {
        var r;
        if (t === "%AsyncFunction%") r = Di("async function () {}");
        else if (t === "%GeneratorFunction%") r = Di("function* () {}");
        else if (t === "%AsyncGeneratorFunction%")
          r = Di("async function* () {}");
        else if (t === "%AsyncGenerator%") {
          var n = e("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if (t === "%AsyncIteratorPrototype%") {
          var a = e("%AsyncGenerator%");
          a && (r = ht(a.prototype));
        }
        return (or[t] = r), r;
      },
      Lh = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      oa = Wr(),
      na = Ai(),
      V8 = oa.call(Function.call, Array.prototype.concat),
      K8 = oa.call(Function.apply, Array.prototype.splice),
      $h = oa.call(Function.call, String.prototype.replace),
      aa = oa.call(Function.call, String.prototype.slice),
      Y8 =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      J8 = /\\(\\)?/g,
      X8 = function (t) {
        var r = aa(t, 0, 1),
          n = aa(t, -1);
        if (r === "%" && n !== "%")
          throw new Kr("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%")
          throw new Kr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return (
          $h(t, Y8, function (o, i, u, s) {
            a[a.length] = u ? $h(s, J8, "$1") : i || o;
          }),
          a
        );
      },
      Q8 = function (t, r) {
        var n = t,
          a;
        if ((na(Lh, n) && ((a = Lh[n]), (n = "%" + a[0] + "%")), na(or, n))) {
          var o = or[n];
          if ((o === nr && (o = W8(n)), typeof o > "u" && !r))
            throw new ar(
              "intrinsic " +
                t +
                " exists, but is not available. Please file an issue!"
            );
          return { alias: a, name: n, value: o };
        }
        throw new Kr("intrinsic " + t + " does not exist!");
      };
    zh.exports = function (t, r) {
      if (typeof t != "string" || t.length === 0)
        throw new ar("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof r != "boolean")
        throw new ar('"allowMissing" argument must be a boolean');
      var n = X8(t),
        a = n.length > 0 ? n[0] : "",
        o = Q8("%" + a + "%", r),
        i = o.name,
        u = o.value,
        s = !1,
        d = o.alias;
      d && ((a = d[0]), K8(n, V8([0, 1], d)));
      for (var g = 1, E = !0; g < n.length; g += 1) {
        var y = n[g],
          h = aa(y, 0, 1),
          A = aa(y, -1);
        if (
          (h === '"' ||
            h === "'" ||
            h === "`" ||
            A === '"' ||
            A === "'" ||
            A === "`") &&
          h !== A
        )
          throw new Kr("property names with quotes must have matching quotes");
        if (
          ((y === "constructor" || !E) && (s = !0),
          (a += "." + y),
          (i = "%" + a + "%"),
          na(or, i))
        )
          u = or[i];
        else if (u != null) {
          if (!(y in u)) {
            if (!r)
              throw new ar(
                "base intrinsic for " +
                  t +
                  " exists, but the property is not available."
              );
            return;
          }
          if (Bt && g + 1 >= n.length) {
            var b = Bt(u, y);
            (E = !!b),
              E && "get" in b && !("originalValue" in b.get)
                ? (u = b.get)
                : (u = u[y]);
          } else (E = na(u, y)), (u = u[y]);
          E && !s && (or[i] = u);
        }
      }
      return u;
    };
  });
  var Yh = S((rQ, ia) => {
    "use strict";
    l();
    c();
    p();
    var Fi = Wr(),
      ir = xi(),
      Wh = ir("%Function.prototype.apply%"),
      Vh = ir("%Function.prototype.call%"),
      Kh = ir("%Reflect.apply%", !0) || Fi.call(Vh, Wh),
      Hh = ir("%Object.getOwnPropertyDescriptor%", !0),
      Tt = ir("%Object.defineProperty%", !0),
      Z8 = ir("%Math.max%");
    if (Tt)
      try {
        Tt({}, "a", { value: 1 });
      } catch {
        Tt = null;
      }
    ia.exports = function (t) {
      var r = Kh(Fi, Vh, arguments);
      if (Hh && Tt) {
        var n = Hh(r, "length");
        n.configurable &&
          Tt(r, "length", {
            value: 1 + Z8(0, t.length - (arguments.length - 1)),
          });
      }
      return r;
    };
    var Gh = function () {
      return Kh(Fi, Wh, arguments);
    };
    Tt ? Tt(ia.exports, "apply", { value: Gh }) : (ia.exports.apply = Gh);
  });
  var Zh = S((iQ, Qh) => {
    "use strict";
    l();
    c();
    p();
    var Jh = xi(),
      Xh = Yh(),
      eT = Xh(Jh("String.prototype.indexOf"));
    Qh.exports = function (t, r) {
      var n = Jh(t, !!r);
      return typeof n == "function" && eT(t, ".prototype.") > -1 ? Xh(n) : n;
    };
  });
  var ey = S(() => {
    l();
    c();
    p();
  });
  var yy = S((yQ, hy) => {
    l();
    c();
    p();
    var Ni = typeof Map == "function" && Map.prototype,
      Si =
        Object.getOwnPropertyDescriptor && Ni
          ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
          : null,
      sa = Ni && Si && typeof Si.get == "function" ? Si.get : null,
      tT = Ni && Map.prototype.forEach,
      ji = typeof Set == "function" && Set.prototype,
      wi =
        Object.getOwnPropertyDescriptor && ji
          ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
          : null,
      la = ji && wi && typeof wi.get == "function" ? wi.get : null,
      rT = ji && Set.prototype.forEach,
      nT = typeof WeakMap == "function" && WeakMap.prototype,
      Jr = nT ? WeakMap.prototype.has : null,
      aT = typeof WeakSet == "function" && WeakSet.prototype,
      Xr = aT ? WeakSet.prototype.has : null,
      oT = typeof WeakRef == "function" && WeakRef.prototype,
      ty = oT ? WeakRef.prototype.deref : null,
      iT = Boolean.prototype.valueOf,
      uT = Object.prototype.toString,
      sT = Function.prototype.toString,
      lT = String.prototype.match,
      Mi = String.prototype.slice,
      mt = String.prototype.replace,
      cT = String.prototype.toUpperCase,
      ry = String.prototype.toLowerCase,
      sy = RegExp.prototype.test,
      ny = Array.prototype.concat,
      Ke = Array.prototype.join,
      pT = Array.prototype.slice,
      ay = Math.floor,
      Pi = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
      Bi = Object.getOwnPropertySymbols,
      Ri =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? Symbol.prototype.toString
          : null,
      ur = typeof Symbol == "function" && typeof Symbol.iterator == "object",
      we =
        typeof Symbol == "function" &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === ur || "symbol")
          ? Symbol.toStringTag
          : null,
      ly = Object.prototype.propertyIsEnumerable,
      oy =
        (typeof Reflect == "function"
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__;
            }
          : null);
    function iy(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        sy.call(/e/, t)
      )
        return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e == "number") {
        var n = e < 0 ? -ay(-e) : ay(e);
        if (n !== e) {
          var a = String(n),
            o = Mi.call(t, a.length + 1);
          return (
            mt.call(a, r, "$&_") +
            "." +
            mt.call(mt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
          );
        }
      }
      return mt.call(t, r, "$&_");
    }
    var Ti = ey().custom,
      Oi = Ti && py(Ti) ? Ti : null;
    hy.exports = function e(t, r, n, a) {
      var o = r || {};
      if (
        yt(o, "quoteStyle") &&
        o.quoteStyle !== "single" &&
        o.quoteStyle !== "double"
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        yt(o, "maxStringLength") &&
        (typeof o.maxStringLength == "number"
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        );
      var i = yt(o, "customInspect") ? o.customInspect : !0;
      if (typeof i != "boolean" && i !== "symbol")
        throw new TypeError(
          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
        );
      if (
        yt(o, "indent") &&
        o.indent !== null &&
        o.indent !== "	" &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        );
      if (yt(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        );
      var u = o.numericSeparator;
      if (typeof t > "u") return "undefined";
      if (t === null) return "null";
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "string") return fy(t, o);
      if (typeof t == "number") {
        if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
        var s = String(t);
        return u ? iy(t, s) : s;
      }
      if (typeof t == "bigint") {
        var d = String(t) + "n";
        return u ? iy(t, d) : d;
      }
      var g = typeof o.depth > "u" ? 5 : o.depth;
      if ((typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object"))
        return Ii(t) ? "[Array]" : "[Object]";
      var E = OT(o, n);
      if (typeof a > "u") a = [];
      else if (dy(a, t) >= 0) return "[Circular]";
      function y(Y, _, T) {
        if ((_ && ((a = pT.call(a)), a.push(_)), T)) {
          var j = { depth: o.depth };
          return (
            yt(o, "quoteStyle") && (j.quoteStyle = o.quoteStyle),
            e(Y, j, n + 1, a)
          );
        }
        return e(Y, o, n + 1, a);
      }
      if (typeof t == "function") {
        var h = vT(t),
          A = ua(t, y);
        return (
          "[Function" +
          (h ? ": " + h : " (anonymous)") +
          "]" +
          (A.length > 0 ? " { " + Ke.call(A, ", ") + " }" : "")
        );
      }
      if (py(t)) {
        var b = ur
          ? mt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
          : Ri.call(t);
        return typeof t == "object" && !ur ? Yr(b) : b;
      }
      if (wT(t)) {
        for (
          var x = "<" + ry.call(String(t.nodeName)),
            F = t.attributes || [],
            R = 0;
          R < F.length;
          R++
        )
          x += " " + F[R].name + "=" + cy(dT(F[R].value), "double", o);
        return (
          (x += ">"),
          t.childNodes && t.childNodes.length && (x += "..."),
          (x += "</" + ry.call(String(t.nodeName)) + ">"),
          x
        );
      }
      if (Ii(t)) {
        if (t.length === 0) return "[]";
        var N = ua(t, y);
        return E && !TT(N)
          ? "[" + ki(N, E) + "]"
          : "[ " + Ke.call(N, ", ") + " ]";
      }
      if (yT(t)) {
        var L = ua(t, y);
        return "cause" in t && !ly.call(t, "cause")
          ? "{ [" +
              String(t) +
              "] " +
              Ke.call(ny.call("[cause]: " + y(t.cause), L), ", ") +
              " }"
          : L.length === 0
          ? "[" + String(t) + "]"
          : "{ [" + String(t) + "] " + Ke.call(L, ", ") + " }";
      }
      if (typeof t == "object" && i) {
        if (Oi && typeof t[Oi] == "function") return t[Oi]();
        if (i !== "symbol" && typeof t.inspect == "function")
          return t.inspect();
      }
      if (DT(t)) {
        var w = [];
        return (
          tT.call(t, function (Y, _) {
            w.push(y(_, t, !0) + " => " + y(Y, t));
          }),
          uy("Map", sa.call(t), w, E)
        );
      }
      if (FT(t)) {
        var M = [];
        return (
          rT.call(t, function (Y) {
            M.push(y(Y, t));
          }),
          uy("Set", la.call(t), M, E)
        );
      }
      if (CT(t)) return _i("WeakMap");
      if (ST(t)) return _i("WeakSet");
      if (xT(t)) return _i("WeakRef");
      if (gT(t)) return Yr(y(Number(t)));
      if (AT(t)) return Yr(y(Pi.call(t)));
      if (bT(t)) return Yr(iT.call(t));
      if (mT(t)) return Yr(y(String(t)));
      if (!fT(t) && !hT(t)) {
        var I = ua(t, y),
          U = oy
            ? oy(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          V = t instanceof Object ? "" : "null prototype",
          z =
            !U && we && Object(t) === t && we in t
              ? Mi.call(gt(t), 8, -1)
              : V
              ? "Object"
              : "",
          ae =
            U || typeof t.constructor != "function"
              ? ""
              : t.constructor.name
              ? t.constructor.name + " "
              : "",
          Q =
            ae +
            (z || V
              ? "[" + Ke.call(ny.call([], z || [], V || []), ": ") + "] "
              : "");
        return I.length === 0
          ? Q + "{}"
          : E
          ? Q + "{" + ki(I, E) + "}"
          : Q + "{ " + Ke.call(I, ", ") + " }";
      }
      return String(t);
    };
    function cy(e, t, r) {
      var n = (r.quoteStyle || t) === "double" ? '"' : "'";
      return n + e + n;
    }
    function dT(e) {
      return mt.call(String(e), /"/g, "&quot;");
    }
    function Ii(e) {
      return (
        gt(e) === "[object Array]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function fT(e) {
      return (
        gt(e) === "[object Date]" && (!we || !(typeof e == "object" && we in e))
      );
    }
    function hT(e) {
      return (
        gt(e) === "[object RegExp]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function yT(e) {
      return (
        gt(e) === "[object Error]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function mT(e) {
      return (
        gt(e) === "[object String]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function gT(e) {
      return (
        gt(e) === "[object Number]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function bT(e) {
      return (
        gt(e) === "[object Boolean]" &&
        (!we || !(typeof e == "object" && we in e))
      );
    }
    function py(e) {
      if (ur) return e && typeof e == "object" && e instanceof Symbol;
      if (typeof e == "symbol") return !0;
      if (!e || typeof e != "object" || !Ri) return !1;
      try {
        return Ri.call(e), !0;
      } catch {}
      return !1;
    }
    function AT(e) {
      if (!e || typeof e != "object" || !Pi) return !1;
      try {
        return Pi.call(e), !0;
      } catch {}
      return !1;
    }
    var ET =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function yt(e, t) {
      return ET.call(e, t);
    }
    function gt(e) {
      return uT.call(e);
    }
    function vT(e) {
      if (e.name) return e.name;
      var t = lT.call(sT.call(e), /^function\s*([\w$]+)/);
      return t ? t[1] : null;
    }
    function dy(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    function DT(e) {
      if (!sa || !e || typeof e != "object") return !1;
      try {
        sa.call(e);
        try {
          la.call(e);
        } catch {
          return !0;
        }
        return e instanceof Map;
      } catch {}
      return !1;
    }
    function CT(e) {
      if (!Jr || !e || typeof e != "object") return !1;
      try {
        Jr.call(e, Jr);
        try {
          Xr.call(e, Xr);
        } catch {
          return !0;
        }
        return e instanceof WeakMap;
      } catch {}
      return !1;
    }
    function xT(e) {
      if (!ty || !e || typeof e != "object") return !1;
      try {
        return ty.call(e), !0;
      } catch {}
      return !1;
    }
    function FT(e) {
      if (!la || !e || typeof e != "object") return !1;
      try {
        la.call(e);
        try {
          sa.call(e);
        } catch {
          return !0;
        }
        return e instanceof Set;
      } catch {}
      return !1;
    }
    function ST(e) {
      if (!Xr || !e || typeof e != "object") return !1;
      try {
        Xr.call(e, Xr);
        try {
          Jr.call(e, Jr);
        } catch {
          return !0;
        }
        return e instanceof WeakSet;
      } catch {}
      return !1;
    }
    function wT(e) {
      return !e || typeof e != "object"
        ? !1
        : typeof HTMLElement < "u" && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
    }
    function fy(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return fy(Mi.call(e, 0, t.maxStringLength), t) + n;
      }
      var a = mt.call(mt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, BT);
      return cy(a, "single", t);
    }
    function BT(e) {
      var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
      return r
        ? "\\" + r
        : "\\x" + (t < 16 ? "0" : "") + cT.call(t.toString(16));
    }
    function Yr(e) {
      return "Object(" + e + ")";
    }
    function _i(e) {
      return e + " { ? }";
    }
    function uy(e, t, r, n) {
      var a = n ? ki(r, n) : Ke.call(r, ", ");
      return e + " (" + t + ") {" + a + "}";
    }
    function TT(e) {
      for (var t = 0; t < e.length; t++)
        if (
          dy(
            e[t],
            `
`
          ) >= 0
        )
          return !1;
      return !0;
    }
    function OT(e, t) {
      var r;
      if (e.indent === "	") r = "	";
      else if (typeof e.indent == "number" && e.indent > 0)
        r = Ke.call(Array(e.indent + 1), " ");
      else return null;
      return { base: r, prev: Ke.call(Array(t + 1), r) };
    }
    function ki(e, t) {
      if (e.length === 0) return "";
      var r =
        `
` +
        t.prev +
        t.base;
      return (
        r +
        Ke.call(e, "," + r) +
        `
` +
        t.prev
      );
    }
    function ua(e, t) {
      var r = Ii(e),
        n = [];
      if (r) {
        n.length = e.length;
        for (var a = 0; a < e.length; a++) n[a] = yt(e, a) ? t(e[a], e) : "";
      }
      var o = typeof Bi == "function" ? Bi(e) : [],
        i;
      if (ur) {
        i = {};
        for (var u = 0; u < o.length; u++) i["$" + o[u]] = o[u];
      }
      for (var s in e)
        yt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (ur && i["$" + s] instanceof Symbol) ||
            (sy.call(/[^\w$]/, s)
              ? n.push(t(s, e) + ": " + t(e[s], e))
              : n.push(s + ": " + t(e[s], e))));
      if (typeof Bi == "function")
        for (var d = 0; d < o.length; d++)
          ly.call(e, o[d]) && n.push("[" + t(o[d]) + "]: " + t(e[o[d]], e));
      return n;
    }
  });
  var $i = S((AQ, my) => {
    "use strict";
    l();
    c();
    p();
    var qi = qh(),
      sr = Zh(),
      _T = yy(),
      PT = qi("%TypeError%"),
      ca = qi("%WeakMap%", !0),
      pa = qi("%Map%", !0),
      RT = sr("WeakMap.prototype.get", !0),
      IT = sr("WeakMap.prototype.set", !0),
      kT = sr("WeakMap.prototype.has", !0),
      NT = sr("Map.prototype.get", !0),
      jT = sr("Map.prototype.set", !0),
      MT = sr("Map.prototype.has", !0),
      Li = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t)
            return (r.next = n.next), (n.next = e.next), (e.next = n), n;
      },
      qT = function (e, t) {
        var r = Li(e, t);
        return r && r.value;
      },
      LT = function (e, t, r) {
        var n = Li(e, t);
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
      },
      $T = function (e, t) {
        return !!Li(e, t);
      };
    my.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o))
              throw new PT("Side channel does not contain " + _T(o));
          },
          get: function (o) {
            if (ca && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return RT(t, o);
            } else if (pa) {
              if (r) return NT(r, o);
            } else if (n) return qT(n, o);
          },
          has: function (o) {
            if (ca && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return kT(t, o);
            } else if (pa) {
              if (r) return MT(r, o);
            } else if (n) return $T(n, o);
            return !1;
          },
          set: function (o, i) {
            ca && o && (typeof o == "object" || typeof o == "function")
              ? (t || (t = new ca()), IT(t, o, i))
              : pa
              ? (r || (r = new pa()), jT(r, o, i))
              : (n || (n = { key: {}, next: null }), LT(n, o, i));
          },
        };
      return a;
    };
  });
  var da = S((CQ, gy) => {
    "use strict";
    l();
    c();
    p();
    var UT = String.prototype.replace,
      zT = /%20/g,
      Ui = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    gy.exports = {
      default: Ui.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return UT.call(e, zT, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: Ui.RFC1738,
      RFC3986: Ui.RFC3986,
    };
  });
  var Hi = S((wQ, Ay) => {
    "use strict";
    l();
    c();
    p();
    var HT = da(),
      zi = Object.prototype.hasOwnProperty,
      Ot = Array.isArray,
      Ye = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      GT = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop];
          if (Ot(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < "u" && a.push(n[o]);
            r.obj[r.prop] = a;
          }
        }
      },
      by = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < "u" && (n[a] = t[a]);
        return n;
      },
      WT = function e(t, r, n) {
        if (!r) return t;
        if (typeof r != "object") {
          if (Ot(t)) t.push(r);
          else if (t && typeof t == "object")
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !zi.call(Object.prototype, r)) &&
              (t[r] = !0);
          else return [t, r];
          return t;
        }
        if (!t || typeof t != "object") return [t].concat(r);
        var a = t;
        return (
          Ot(t) && !Ot(r) && (a = by(t, n)),
          Ot(t) && Ot(r)
            ? (r.forEach(function (o, i) {
                if (zi.call(t, i)) {
                  var u = t[i];
                  u && typeof u == "object" && o && typeof o == "object"
                    ? (t[i] = e(u, o, n))
                    : t.push(o);
                } else t[i] = o;
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var u = r[i];
                return zi.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
              }, a)
        );
      },
      VT = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n;
        }, t);
      },
      KT = function (e, t, r) {
        var n = e.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n);
        } catch {
          return n;
        }
      },
      YT = function (t, r, n, a, o) {
        if (t.length === 0) return t;
        var i = t;
        if (
          (typeof t == "symbol"
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != "string" && (i = String(t)),
          n === "iso-8859-1")
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (g) {
            return "%26%23" + parseInt(g.slice(2), 16) + "%3B";
          });
        for (var u = "", s = 0; s < i.length; ++s) {
          var d = i.charCodeAt(s);
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === HT.RFC1738 && (d === 40 || d === 41))
          ) {
            u += i.charAt(s);
            continue;
          }
          if (d < 128) {
            u = u + Ye[d];
            continue;
          }
          if (d < 2048) {
            u = u + (Ye[192 | (d >> 6)] + Ye[128 | (d & 63)]);
            continue;
          }
          if (d < 55296 || d >= 57344) {
            u =
              u +
              (Ye[224 | (d >> 12)] +
                Ye[128 | ((d >> 6) & 63)] +
                Ye[128 | (d & 63)]);
            continue;
          }
          (s += 1),
            (d = 65536 + (((d & 1023) << 10) | (i.charCodeAt(s) & 1023))),
            (u +=
              Ye[240 | (d >> 18)] +
              Ye[128 | ((d >> 12) & 63)] +
              Ye[128 | ((d >> 6) & 63)] +
              Ye[128 | (d & 63)]);
        }
        return u;
      },
      JT = function (t) {
        for (
          var r = [{ obj: { o: t }, prop: "o" }], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
            s < u.length;
            ++s
          ) {
            var d = u[s],
              g = i[d];
            typeof g == "object" &&
              g !== null &&
              n.indexOf(g) === -1 &&
              (r.push({ obj: i, prop: d }), n.push(g));
          }
        return GT(r), t;
      },
      XT = function (t) {
        return Object.prototype.toString.call(t) === "[object RegExp]";
      },
      QT = function (t) {
        return !t || typeof t != "object"
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
      },
      ZT = function (t, r) {
        return [].concat(t, r);
      },
      eO = function (t, r) {
        if (Ot(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
          return n;
        }
        return r(t);
      };
    Ay.exports = {
      arrayToObject: by,
      assign: VT,
      combine: ZT,
      compact: JT,
      decode: KT,
      encode: YT,
      isBuffer: QT,
      isRegExp: XT,
      maybeMap: eO,
      merge: WT,
    };
  });
  var Fy = S((_Q, xy) => {
    "use strict";
    l();
    c();
    p();
    var Dy = $i(),
      fa = Hi(),
      Qr = da(),
      tO = Object.prototype.hasOwnProperty,
      Ey = {
        brackets: function (t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function (t, r) {
          return t + "[" + r + "]";
        },
        repeat: function (t) {
          return t;
        },
      },
      at = Array.isArray,
      rO = Array.prototype.push,
      Cy = function (e, t) {
        rO.apply(e, at(t) ? t : [t]);
      },
      nO = Date.prototype.toISOString,
      vy = Qr.default,
      Be = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: fa.encode,
        encodeValuesOnly: !1,
        format: vy,
        formatter: Qr.formatters[vy],
        indices: !1,
        serializeDate: function (t) {
          return nO.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      aO = function (t) {
        return (
          typeof t == "string" ||
          typeof t == "number" ||
          typeof t == "boolean" ||
          typeof t == "symbol" ||
          typeof t == "bigint"
        );
      },
      Gi = {},
      oO = function e(t, r, n, a, o, i, u, s, d, g, E, y, h, A, b, x) {
        for (
          var F = t, R = x, N = 0, L = !1;
          (R = R.get(Gi)) !== void 0 && !L;

        ) {
          var w = R.get(t);
          if (((N += 1), typeof w < "u")) {
            if (w === N) throw new RangeError("Cyclic object value");
            L = !0;
          }
          typeof R.get(Gi) > "u" && (N = 0);
        }
        if (
          (typeof s == "function"
            ? (F = s(r, F))
            : F instanceof Date
            ? (F = E(F))
            : n === "comma" &&
              at(F) &&
              (F = fa.maybeMap(F, function (j) {
                return j instanceof Date ? E(j) : j;
              })),
          F === null)
        ) {
          if (o) return u && !A ? u(r, Be.encoder, b, "key", y) : r;
          F = "";
        }
        if (aO(F) || fa.isBuffer(F)) {
          if (u) {
            var M = A ? r : u(r, Be.encoder, b, "key", y);
            return [h(M) + "=" + h(u(F, Be.encoder, b, "value", y))];
          }
          return [h(r) + "=" + h(String(F))];
        }
        var I = [];
        if (typeof F > "u") return I;
        var U;
        if (n === "comma" && at(F))
          A && u && (F = fa.maybeMap(F, u)),
            (U = [{ value: F.length > 0 ? F.join(",") || null : void 0 }]);
        else if (at(s)) U = s;
        else {
          var V = Object.keys(F);
          U = d ? V.sort(d) : V;
        }
        for (
          var z = a && at(F) && F.length === 1 ? r + "[]" : r, ae = 0;
          ae < U.length;
          ++ae
        ) {
          var Q = U[ae],
            Y = typeof Q == "object" && typeof Q.value < "u" ? Q.value : F[Q];
          if (!(i && Y === null)) {
            var _ = at(F)
              ? typeof n == "function"
                ? n(z, Q)
                : z
              : z + (g ? "." + Q : "[" + Q + "]");
            x.set(t, N);
            var T = Dy();
            T.set(Gi, x),
              Cy(
                I,
                e(
                  Y,
                  _,
                  n,
                  a,
                  o,
                  i,
                  n === "comma" && A && at(F) ? null : u,
                  s,
                  d,
                  g,
                  E,
                  y,
                  h,
                  A,
                  b,
                  T
                )
              );
          }
        }
        return I;
      },
      iO = function (t) {
        if (!t) return Be;
        if (
          t.encoder !== null &&
          typeof t.encoder < "u" &&
          typeof t.encoder != "function"
        )
          throw new TypeError("Encoder has to be a function.");
        var r = t.charset || Be.charset;
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var n = Qr.default;
        if (typeof t.format < "u") {
          if (!tO.call(Qr.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
          n = t.format;
        }
        var a = Qr.formatters[n],
          o = Be.filter;
        return (
          (typeof t.filter == "function" || at(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == "boolean"
                ? t.addQueryPrefix
                : Be.addQueryPrefix,
            allowDots: typeof t.allowDots > "u" ? Be.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == "boolean"
                ? t.charsetSentinel
                : Be.charsetSentinel,
            delimiter: typeof t.delimiter > "u" ? Be.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : Be.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : Be.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == "boolean"
                ? t.encodeValuesOnly
                : Be.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == "function"
                ? t.serializeDate
                : Be.serializeDate,
            skipNulls:
              typeof t.skipNulls == "boolean" ? t.skipNulls : Be.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == "boolean"
                ? t.strictNullHandling
                : Be.strictNullHandling,
          }
        );
      };
    xy.exports = function (e, t) {
      var r = e,
        n = iO(t),
        a,
        o;
      typeof n.filter == "function"
        ? ((o = n.filter), (r = o("", r)))
        : at(n.filter) && ((o = n.filter), (a = o));
      var i = [];
      if (typeof r != "object" || r === null) return "";
      var u;
      t && t.arrayFormat in Ey
        ? (u = t.arrayFormat)
        : t && "indices" in t
        ? (u = t.indices ? "indices" : "repeat")
        : (u = "indices");
      var s = Ey[u];
      if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var d = s === "comma" && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (var g = Dy(), E = 0; E < a.length; ++E) {
        var y = a[E];
        (n.skipNulls && r[y] === null) ||
          Cy(
            i,
            oO(
              r[y],
              y,
              s,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              g
            )
          );
      }
      var h = i.join(n.delimiter),
        A = n.addQueryPrefix === !0 ? "?" : "";
      return (
        n.charsetSentinel &&
          (n.charset === "iso-8859-1"
            ? (A += "utf8=%26%2310003%3B&")
            : (A += "utf8=%E2%9C%93&")),
        h.length > 0 ? A + h : ""
      );
    };
  });
  var By = S((kQ, wy) => {
    "use strict";
    l();
    c();
    p();
    var lr = Hi(),
      Wi = Object.prototype.hasOwnProperty,
      uO = Array.isArray,
      ve = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: lr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      sO = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10));
        });
      },
      Sy = function (e, t) {
        return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
          ? e.split(",")
          : e;
      },
      lO = "utf8=%26%2310003%3B",
      cO = "utf8=%E2%9C%93",
      pO = function (t, r) {
        var n = { __proto__: null },
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          u = -1,
          s,
          d = r.charset;
        if (r.charsetSentinel)
          for (s = 0; s < i.length; ++s)
            i[s].indexOf("utf8=") === 0 &&
              (i[s] === cO ? (d = "utf-8") : i[s] === lO && (d = "iso-8859-1"),
              (u = s),
              (s = i.length));
        for (s = 0; s < i.length; ++s)
          if (s !== u) {
            var g = i[s],
              E = g.indexOf("]="),
              y = E === -1 ? g.indexOf("=") : E + 1,
              h,
              A;
            y === -1
              ? ((h = r.decoder(g, ve.decoder, d, "key")),
                (A = r.strictNullHandling ? null : ""))
              : ((h = r.decoder(g.slice(0, y), ve.decoder, d, "key")),
                (A = lr.maybeMap(Sy(g.slice(y + 1), r), function (b) {
                  return r.decoder(b, ve.decoder, d, "value");
                }))),
              A &&
                r.interpretNumericEntities &&
                d === "iso-8859-1" &&
                (A = sO(A)),
              g.indexOf("[]=") > -1 && (A = uO(A) ? [A] : A),
              Wi.call(n, h) ? (n[h] = lr.combine(n[h], A)) : (n[h] = A);
          }
        return n;
      },
      dO = function (e, t, r, n) {
        for (var a = n ? t : Sy(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            u = e[o];
          if (u === "[]" && r.parseArrays) i = [].concat(a);
          else {
            i = r.plainObjects ? Object.create(null) : {};
            var s =
                u.charAt(0) === "[" && u.charAt(u.length - 1) === "]"
                  ? u.slice(1, -1)
                  : u,
              d = parseInt(s, 10);
            !r.parseArrays && s === ""
              ? (i = { 0: a })
              : !isNaN(d) &&
                u !== s &&
                String(d) === s &&
                d >= 0 &&
                r.parseArrays &&
                d <= r.arrayLimit
              ? ((i = []), (i[d] = a))
              : s !== "__proto__" && (i[s] = a);
          }
          a = i;
        }
        return a;
      },
      fO = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            i = /(\[[^[\]]*])/,
            u = /(\[[^[\]]*])/g,
            s = n.depth > 0 && i.exec(o),
            d = s ? o.slice(0, s.index) : o,
            g = [];
          if (d) {
            if (
              !n.plainObjects &&
              Wi.call(Object.prototype, d) &&
              !n.allowPrototypes
            )
              return;
            g.push(d);
          }
          for (
            var E = 0;
            n.depth > 0 && (s = u.exec(o)) !== null && E < n.depth;

          ) {
            if (
              ((E += 1),
              !n.plainObjects &&
                Wi.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            g.push(s[1]);
          }
          return s && g.push("[" + o.slice(s.index) + "]"), dO(g, r, n, a);
        }
      },
      hO = function (t) {
        if (!t) return ve;
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != "function"
        )
          throw new TypeError("Decoder has to be a function.");
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var r = typeof t.charset > "u" ? ve.charset : t.charset;
        return {
          allowDots: typeof t.allowDots > "u" ? ve.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == "boolean"
              ? t.allowPrototypes
              : ve.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == "boolean" ? t.allowSparse : ve.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == "number" ? t.arrayLimit : ve.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == "boolean"
              ? t.charsetSentinel
              : ve.charsetSentinel,
          comma: typeof t.comma == "boolean" ? t.comma : ve.comma,
          decoder: typeof t.decoder == "function" ? t.decoder : ve.decoder,
          delimiter:
            typeof t.delimiter == "string" || lr.isRegExp(t.delimiter)
              ? t.delimiter
              : ve.delimiter,
          depth:
            typeof t.depth == "number" || t.depth === !1 ? +t.depth : ve.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == "boolean"
              ? t.interpretNumericEntities
              : ve.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == "number"
              ? t.parameterLimit
              : ve.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == "boolean"
              ? t.plainObjects
              : ve.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == "boolean"
              ? t.strictNullHandling
              : ve.strictNullHandling,
        };
      };
    wy.exports = function (e, t) {
      var r = hO(t);
      if (e === "" || e === null || typeof e > "u")
        return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e == "string" ? pO(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var u = o[i],
          s = fO(u, n[u], r, typeof e == "string");
        a = lr.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : lr.compact(a);
    };
  });
  var Vi = S((qQ, Ty) => {
    "use strict";
    l();
    c();
    p();
    var yO = Fy(),
      mO = By(),
      gO = da();
    Ty.exports = { formats: gO, parse: mO, stringify: yO };
  });
  var ga = S((wZ, tm) => {
    "use strict";
    l();
    c();
    p();
    var E9 = String.prototype.replace,
      v9 = /%20/g,
      ru = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    tm.exports = {
      default: ru.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return E9.call(e, v9, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: ru.RFC1738,
      RFC3986: ru.RFC3986,
    };
  });
  var au = S((_Z, nm) => {
    "use strict";
    l();
    c();
    p();
    var D9 = ga(),
      nu = Object.prototype.hasOwnProperty,
      _t = Array.isArray,
      Je = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      C9 = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop];
          if (_t(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < "u" && a.push(n[o]);
            r.obj[r.prop] = a;
          }
        }
      },
      rm = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < "u" && (n[a] = t[a]);
        return n;
      },
      x9 = function e(t, r, n) {
        if (!r) return t;
        if (typeof r != "object") {
          if (_t(t)) t.push(r);
          else if (t && typeof t == "object")
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !nu.call(Object.prototype, r)) &&
              (t[r] = !0);
          else return [t, r];
          return t;
        }
        if (!t || typeof t != "object") return [t].concat(r);
        var a = t;
        return (
          _t(t) && !_t(r) && (a = rm(t, n)),
          _t(t) && _t(r)
            ? (r.forEach(function (o, i) {
                if (nu.call(t, i)) {
                  var u = t[i];
                  u && typeof u == "object" && o && typeof o == "object"
                    ? (t[i] = e(u, o, n))
                    : t.push(o);
                } else t[i] = o;
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var u = r[i];
                return nu.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
              }, a)
        );
      },
      F9 = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n;
        }, t);
      },
      S9 = function (e, t, r) {
        var n = e.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n);
        } catch {
          return n;
        }
      },
      w9 = function (t, r, n, a, o) {
        if (t.length === 0) return t;
        var i = t;
        if (
          (typeof t == "symbol"
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != "string" && (i = String(t)),
          n === "iso-8859-1")
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (g) {
            return "%26%23" + parseInt(g.slice(2), 16) + "%3B";
          });
        for (var u = "", s = 0; s < i.length; ++s) {
          var d = i.charCodeAt(s);
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === D9.RFC1738 && (d === 40 || d === 41))
          ) {
            u += i.charAt(s);
            continue;
          }
          if (d < 128) {
            u = u + Je[d];
            continue;
          }
          if (d < 2048) {
            u = u + (Je[192 | (d >> 6)] + Je[128 | (d & 63)]);
            continue;
          }
          if (d < 55296 || d >= 57344) {
            u =
              u +
              (Je[224 | (d >> 12)] +
                Je[128 | ((d >> 6) & 63)] +
                Je[128 | (d & 63)]);
            continue;
          }
          (s += 1),
            (d = 65536 + (((d & 1023) << 10) | (i.charCodeAt(s) & 1023))),
            (u +=
              Je[240 | (d >> 18)] +
              Je[128 | ((d >> 12) & 63)] +
              Je[128 | ((d >> 6) & 63)] +
              Je[128 | (d & 63)]);
        }
        return u;
      },
      B9 = function (t) {
        for (
          var r = [{ obj: { o: t }, prop: "o" }], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
            s < u.length;
            ++s
          ) {
            var d = u[s],
              g = i[d];
            typeof g == "object" &&
              g !== null &&
              n.indexOf(g) === -1 &&
              (r.push({ obj: i, prop: d }), n.push(g));
          }
        return C9(r), t;
      },
      T9 = function (t) {
        return Object.prototype.toString.call(t) === "[object RegExp]";
      },
      O9 = function (t) {
        return !t || typeof t != "object"
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
      },
      _9 = function (t, r) {
        return [].concat(t, r);
      },
      P9 = function (t, r) {
        if (_t(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
          return n;
        }
        return r(t);
      };
    nm.exports = {
      arrayToObject: rm,
      assign: F9,
      combine: _9,
      compact: B9,
      decode: S9,
      encode: w9,
      isBuffer: O9,
      isRegExp: T9,
      maybeMap: P9,
      merge: x9,
    };
  });
  var lm = S((kZ, sm) => {
    "use strict";
    l();
    c();
    p();
    var im = $i(),
      ba = au(),
      tn = ga(),
      R9 = Object.prototype.hasOwnProperty,
      am = {
        brackets: function (t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function (t, r) {
          return t + "[" + r + "]";
        },
        repeat: function (t) {
          return t;
        },
      },
      ot = Array.isArray,
      I9 = Array.prototype.push,
      um = function (e, t) {
        I9.apply(e, ot(t) ? t : [t]);
      },
      k9 = Date.prototype.toISOString,
      om = tn.default,
      Te = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: ba.encode,
        encodeValuesOnly: !1,
        format: om,
        formatter: tn.formatters[om],
        indices: !1,
        serializeDate: function (t) {
          return k9.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      N9 = function (t) {
        return (
          typeof t == "string" ||
          typeof t == "number" ||
          typeof t == "boolean" ||
          typeof t == "symbol" ||
          typeof t == "bigint"
        );
      },
      ou = {},
      j9 = function e(t, r, n, a, o, i, u, s, d, g, E, y, h, A, b, x) {
        for (
          var F = t, R = x, N = 0, L = !1;
          (R = R.get(ou)) !== void 0 && !L;

        ) {
          var w = R.get(t);
          if (((N += 1), typeof w < "u")) {
            if (w === N) throw new RangeError("Cyclic object value");
            L = !0;
          }
          typeof R.get(ou) > "u" && (N = 0);
        }
        if (
          (typeof s == "function"
            ? (F = s(r, F))
            : F instanceof Date
            ? (F = E(F))
            : n === "comma" &&
              ot(F) &&
              (F = ba.maybeMap(F, function (j) {
                return j instanceof Date ? E(j) : j;
              })),
          F === null)
        ) {
          if (o) return u && !A ? u(r, Te.encoder, b, "key", y) : r;
          F = "";
        }
        if (N9(F) || ba.isBuffer(F)) {
          if (u) {
            var M = A ? r : u(r, Te.encoder, b, "key", y);
            return [h(M) + "=" + h(u(F, Te.encoder, b, "value", y))];
          }
          return [h(r) + "=" + h(String(F))];
        }
        var I = [];
        if (typeof F > "u") return I;
        var U;
        if (n === "comma" && ot(F))
          A && u && (F = ba.maybeMap(F, u)),
            (U = [{ value: F.length > 0 ? F.join(",") || null : void 0 }]);
        else if (ot(s)) U = s;
        else {
          var V = Object.keys(F);
          U = d ? V.sort(d) : V;
        }
        for (
          var z = a && ot(F) && F.length === 1 ? r + "[]" : r, ae = 0;
          ae < U.length;
          ++ae
        ) {
          var Q = U[ae],
            Y = typeof Q == "object" && typeof Q.value < "u" ? Q.value : F[Q];
          if (!(i && Y === null)) {
            var _ = ot(F)
              ? typeof n == "function"
                ? n(z, Q)
                : z
              : z + (g ? "." + Q : "[" + Q + "]");
            x.set(t, N);
            var T = im();
            T.set(ou, x),
              um(
                I,
                e(
                  Y,
                  _,
                  n,
                  a,
                  o,
                  i,
                  n === "comma" && A && ot(F) ? null : u,
                  s,
                  d,
                  g,
                  E,
                  y,
                  h,
                  A,
                  b,
                  T
                )
              );
          }
        }
        return I;
      },
      M9 = function (t) {
        if (!t) return Te;
        if (
          t.encoder !== null &&
          typeof t.encoder < "u" &&
          typeof t.encoder != "function"
        )
          throw new TypeError("Encoder has to be a function.");
        var r = t.charset || Te.charset;
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var n = tn.default;
        if (typeof t.format < "u") {
          if (!R9.call(tn.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
          n = t.format;
        }
        var a = tn.formatters[n],
          o = Te.filter;
        return (
          (typeof t.filter == "function" || ot(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == "boolean"
                ? t.addQueryPrefix
                : Te.addQueryPrefix,
            allowDots: typeof t.allowDots > "u" ? Te.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == "boolean"
                ? t.charsetSentinel
                : Te.charsetSentinel,
            delimiter: typeof t.delimiter > "u" ? Te.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : Te.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : Te.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == "boolean"
                ? t.encodeValuesOnly
                : Te.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == "function"
                ? t.serializeDate
                : Te.serializeDate,
            skipNulls:
              typeof t.skipNulls == "boolean" ? t.skipNulls : Te.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == "boolean"
                ? t.strictNullHandling
                : Te.strictNullHandling,
          }
        );
      };
    sm.exports = function (e, t) {
      var r = e,
        n = M9(t),
        a,
        o;
      typeof n.filter == "function"
        ? ((o = n.filter), (r = o("", r)))
        : ot(n.filter) && ((o = n.filter), (a = o));
      var i = [];
      if (typeof r != "object" || r === null) return "";
      var u;
      t && t.arrayFormat in am
        ? (u = t.arrayFormat)
        : t && "indices" in t
        ? (u = t.indices ? "indices" : "repeat")
        : (u = "indices");
      var s = am[u];
      if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var d = s === "comma" && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (var g = im(), E = 0; E < a.length; ++E) {
        var y = a[E];
        (n.skipNulls && r[y] === null) ||
          um(
            i,
            j9(
              r[y],
              y,
              s,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              g
            )
          );
      }
      var h = i.join(n.delimiter),
        A = n.addQueryPrefix === !0 ? "?" : "";
      return (
        n.charsetSentinel &&
          (n.charset === "iso-8859-1"
            ? (A += "utf8=%26%2310003%3B&")
            : (A += "utf8=%E2%9C%93&")),
        h.length > 0 ? A + h : ""
      );
    };
  });
  var dm = S((qZ, pm) => {
    "use strict";
    l();
    c();
    p();
    var hr = au(),
      iu = Object.prototype.hasOwnProperty,
      q9 = Array.isArray,
      De = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: hr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      L9 = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10));
        });
      },
      cm = function (e, t) {
        return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
          ? e.split(",")
          : e;
      },
      $9 = "utf8=%26%2310003%3B",
      U9 = "utf8=%E2%9C%93",
      z9 = function (t, r) {
        var n = { __proto__: null },
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          u = -1,
          s,
          d = r.charset;
        if (r.charsetSentinel)
          for (s = 0; s < i.length; ++s)
            i[s].indexOf("utf8=") === 0 &&
              (i[s] === U9 ? (d = "utf-8") : i[s] === $9 && (d = "iso-8859-1"),
              (u = s),
              (s = i.length));
        for (s = 0; s < i.length; ++s)
          if (s !== u) {
            var g = i[s],
              E = g.indexOf("]="),
              y = E === -1 ? g.indexOf("=") : E + 1,
              h,
              A;
            y === -1
              ? ((h = r.decoder(g, De.decoder, d, "key")),
                (A = r.strictNullHandling ? null : ""))
              : ((h = r.decoder(g.slice(0, y), De.decoder, d, "key")),
                (A = hr.maybeMap(cm(g.slice(y + 1), r), function (b) {
                  return r.decoder(b, De.decoder, d, "value");
                }))),
              A &&
                r.interpretNumericEntities &&
                d === "iso-8859-1" &&
                (A = L9(A)),
              g.indexOf("[]=") > -1 && (A = q9(A) ? [A] : A),
              iu.call(n, h) ? (n[h] = hr.combine(n[h], A)) : (n[h] = A);
          }
        return n;
      },
      H9 = function (e, t, r, n) {
        for (var a = n ? t : cm(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            u = e[o];
          if (u === "[]" && r.parseArrays) i = [].concat(a);
          else {
            i = r.plainObjects ? Object.create(null) : {};
            var s =
                u.charAt(0) === "[" && u.charAt(u.length - 1) === "]"
                  ? u.slice(1, -1)
                  : u,
              d = parseInt(s, 10);
            !r.parseArrays && s === ""
              ? (i = { 0: a })
              : !isNaN(d) &&
                u !== s &&
                String(d) === s &&
                d >= 0 &&
                r.parseArrays &&
                d <= r.arrayLimit
              ? ((i = []), (i[d] = a))
              : s !== "__proto__" && (i[s] = a);
          }
          a = i;
        }
        return a;
      },
      G9 = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            i = /(\[[^[\]]*])/,
            u = /(\[[^[\]]*])/g,
            s = n.depth > 0 && i.exec(o),
            d = s ? o.slice(0, s.index) : o,
            g = [];
          if (d) {
            if (
              !n.plainObjects &&
              iu.call(Object.prototype, d) &&
              !n.allowPrototypes
            )
              return;
            g.push(d);
          }
          for (
            var E = 0;
            n.depth > 0 && (s = u.exec(o)) !== null && E < n.depth;

          ) {
            if (
              ((E += 1),
              !n.plainObjects &&
                iu.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            g.push(s[1]);
          }
          return s && g.push("[" + o.slice(s.index) + "]"), H9(g, r, n, a);
        }
      },
      W9 = function (t) {
        if (!t) return De;
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != "function"
        )
          throw new TypeError("Decoder has to be a function.");
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var r = typeof t.charset > "u" ? De.charset : t.charset;
        return {
          allowDots: typeof t.allowDots > "u" ? De.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == "boolean"
              ? t.allowPrototypes
              : De.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == "boolean" ? t.allowSparse : De.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == "number" ? t.arrayLimit : De.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == "boolean"
              ? t.charsetSentinel
              : De.charsetSentinel,
          comma: typeof t.comma == "boolean" ? t.comma : De.comma,
          decoder: typeof t.decoder == "function" ? t.decoder : De.decoder,
          delimiter:
            typeof t.delimiter == "string" || hr.isRegExp(t.delimiter)
              ? t.delimiter
              : De.delimiter,
          depth:
            typeof t.depth == "number" || t.depth === !1 ? +t.depth : De.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == "boolean"
              ? t.interpretNumericEntities
              : De.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == "number"
              ? t.parameterLimit
              : De.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == "boolean"
              ? t.plainObjects
              : De.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == "boolean"
              ? t.strictNullHandling
              : De.strictNullHandling,
        };
      };
    pm.exports = function (e, t) {
      var r = W9(t);
      if (e === "" || e === null || typeof e > "u")
        return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e == "string" ? z9(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var u = o[i],
          s = G9(u, n[u], r, typeof e == "string");
        a = hr.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : hr.compact(a);
    };
  });
  var hm = S((zZ, fm) => {
    "use strict";
    l();
    c();
    p();
    var V9 = lm(),
      K9 = dm(),
      Y9 = ga();
    fm.exports = { formats: Y9, parse: K9, stringify: V9 };
  });
  var mm = S((cte, ym) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      function e(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "ArrayExpression":
          case "AssignmentExpression":
          case "BinaryExpression":
          case "CallExpression":
          case "ConditionalExpression":
          case "FunctionExpression":
          case "Identifier":
          case "Literal":
          case "LogicalExpression":
          case "MemberExpression":
          case "NewExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ThisExpression":
          case "UnaryExpression":
          case "UpdateExpression":
            return !0;
        }
        return !1;
      }
      function t(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "DoWhileStatement":
          case "ForInStatement":
          case "ForStatement":
          case "WhileStatement":
            return !0;
        }
        return !1;
      }
      function r(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }
        return !1;
      }
      function n(i) {
        return r(i) || (i != null && i.type === "FunctionDeclaration");
      }
      function a(i) {
        switch (i.type) {
          case "IfStatement":
            return i.alternate != null ? i.alternate : i.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return i.body;
        }
        return null;
      }
      function o(i) {
        var u;
        if (i.type !== "IfStatement" || i.alternate == null) return !1;
        u = i.consequent;
        do {
          if (u.type === "IfStatement" && u.alternate == null) return !0;
          u = a(u);
        } while (u);
        return !1;
      }
      ym.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      };
    })();
  });
  var uu = S((hte, gm) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function i(x) {
        return 48 <= x && x <= 57;
      }
      function u(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        );
      }
      function s(x) {
        return x >= 48 && x <= 55;
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ];
      function d(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        );
      }
      function g(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function E(x) {
        if (x <= 65535) return String.fromCharCode(x);
        var F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          R = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return F + R;
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95;
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95;
      function y(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(E(x));
      }
      function h(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(E(x));
      }
      function A(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(E(x));
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(E(x));
      }
      gm.exports = {
        isDecimalDigit: i,
        isHexDigit: u,
        isOctalDigit: s,
        isWhiteSpace: d,
        isLineTerminator: g,
        isIdentifierStartES5: y,
        isIdentifierPartES5: h,
        isIdentifierStartES6: A,
        isIdentifierPartES6: b,
      };
    })();
  });
  var Am = S((bte, bm) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e = uu();
      function t(y) {
        switch (y) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "let":
            return !0;
          default:
            return !1;
        }
      }
      function r(y, h) {
        return !h && y === "yield" ? !1 : n(y, h);
      }
      function n(y, h) {
        if (h && t(y)) return !0;
        switch (y.length) {
          case 2:
            return y === "if" || y === "in" || y === "do";
          case 3:
            return y === "var" || y === "for" || y === "new" || y === "try";
          case 4:
            return (
              y === "this" ||
              y === "else" ||
              y === "case" ||
              y === "void" ||
              y === "with" ||
              y === "enum"
            );
          case 5:
            return (
              y === "while" ||
              y === "break" ||
              y === "catch" ||
              y === "throw" ||
              y === "const" ||
              y === "yield" ||
              y === "class" ||
              y === "super"
            );
          case 6:
            return (
              y === "return" ||
              y === "typeof" ||
              y === "delete" ||
              y === "switch" ||
              y === "export" ||
              y === "import"
            );
          case 7:
            return y === "default" || y === "finally" || y === "extends";
          case 8:
            return y === "function" || y === "continue" || y === "debugger";
          case 10:
            return y === "instanceof";
          default:
            return !1;
        }
      }
      function a(y, h) {
        return y === "null" || y === "true" || y === "false" || r(y, h);
      }
      function o(y, h) {
        return y === "null" || y === "true" || y === "false" || n(y, h);
      }
      function i(y) {
        return y === "eval" || y === "arguments";
      }
      function u(y) {
        var h, A, b;
        if (
          y.length === 0 ||
          ((b = y.charCodeAt(0)), !e.isIdentifierStartES5(b))
        )
          return !1;
        for (h = 1, A = y.length; h < A; ++h)
          if (((b = y.charCodeAt(h)), !e.isIdentifierPartES5(b))) return !1;
        return !0;
      }
      function s(y, h) {
        return (y - 55296) * 1024 + (h - 56320) + 65536;
      }
      function d(y) {
        var h, A, b, x, F;
        if (y.length === 0) return !1;
        for (F = e.isIdentifierStartES6, h = 0, A = y.length; h < A; ++h) {
          if (((b = y.charCodeAt(h)), 55296 <= b && b <= 56319)) {
            if (
              (++h,
              h >= A || ((x = y.charCodeAt(h)), !(56320 <= x && x <= 57343)))
            )
              return !1;
            b = s(b, x);
          }
          if (!F(b)) return !1;
          F = e.isIdentifierPartES6;
        }
        return !0;
      }
      function g(y, h) {
        return u(y) && !a(y, h);
      }
      function E(y, h) {
        return d(y) && !o(y, h);
      }
      bm.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: u,
        isIdentifierNameES6: d,
        isIdentifierES5: g,
        isIdentifierES6: E,
      };
    })();
  });
  var su = S((Aa) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      (Aa.ast = mm()), (Aa.code = uu()), (Aa.keyword = Am());
    })();
  });
  var Em = S((Ste, t4) => {
    t4.exports = {
      name: "doctrine",
      description: "JSDoc parser",
      homepage: "https://github.com/eslint/doctrine",
      main: "lib/doctrine.js",
      version: "3.0.0",
      engines: { node: ">=6.0.0" },
      directories: { lib: "./lib" },
      files: ["lib"],
      maintainers: [
        {
          name: "Nicholas C. Zakas",
          email: "nicholas+npm@nczconsulting.com",
          web: "https://www.nczonline.net",
        },
        {
          name: "Yusuke Suzuki",
          email: "utatane.tea@gmail.com",
          web: "https://github.com/Constellation",
        },
      ],
      repository: "eslint/doctrine",
      devDependencies: {
        coveralls: "^3.0.1",
        dateformat: "^1.0.11",
        eslint: "^1.10.3",
        "eslint-release": "^1.0.0",
        linefix: "^0.1.1",
        mocha: "^3.4.2",
        "npm-license": "^0.3.1",
        nyc: "^10.3.2",
        semver: "^5.0.3",
        shelljs: "^0.5.3",
        "shelljs-nodecli": "^0.1.1",
        should: "^5.0.1",
      },
      license: "Apache-2.0",
      scripts: {
        pretest: "npm run lint",
        test: "nyc mocha",
        coveralls: "nyc report --reporter=text-lcov | coveralls",
        lint: "eslint lib/",
        "generate-release": "eslint-generate-release",
        "generate-alpharelease": "eslint-generate-prerelease alpha",
        "generate-betarelease": "eslint-generate-prerelease beta",
        "generate-rcrelease": "eslint-generate-prerelease rc",
        "publish-release": "eslint-publish-release",
      },
      dependencies: { esutils: "^2.0.2" },
    };
  });
  var Dm = S((wte, vm) => {
    l();
    c();
    p();
    function r4(e, t) {
      if (!e) throw new Error(t || "unknown assertion error");
    }
    vm.exports = r4;
  });
  var lu = S((rn) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e;
      (e = Em().version), (rn.VERSION = e);
      function t(n) {
        (this.name = "DoctrineError"), (this.message = n);
      }
      (t.prototype = (function () {
        var n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        (rn.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      (rn.throwError = r), (rn.assert = Dm());
    })();
  });
  var Cm = S((nn) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o, i, u, s, d, g, E;
      (s = su()),
        (d = lu()),
        (e = {
          NullableLiteral: "NullableLiteral",
          AllLiteral: "AllLiteral",
          NullLiteral: "NullLiteral",
          UndefinedLiteral: "UndefinedLiteral",
          VoidLiteral: "VoidLiteral",
          UnionType: "UnionType",
          ArrayType: "ArrayType",
          RecordType: "RecordType",
          FieldType: "FieldType",
          FunctionType: "FunctionType",
          ParameterType: "ParameterType",
          RestType: "RestType",
          NonNullableType: "NonNullableType",
          OptionalType: "OptionalType",
          NullableType: "NullableType",
          NameExpression: "NameExpression",
          TypeApplication: "TypeApplication",
          StringLiteralType: "StringLiteralType",
          NumericLiteralType: "NumericLiteralType",
          BooleanLiteralType: "BooleanLiteralType",
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function y(B) {
        return (
          "><(){}[],:*|?!=".indexOf(String.fromCharCode(B)) === -1 &&
          !s.code.isWhiteSpace(B) &&
          !s.code.isLineTerminator(B)
        );
      }
      function h(B, P, k, O) {
        (this._previous = B),
          (this._index = P),
          (this._token = k),
          (this._value = O);
      }
      (h.prototype.restore = function () {
        (o = this._previous),
          (a = this._index),
          (i = this._token),
          (u = this._value);
      }),
        (h.save = function () {
          return new h(o, a, i, u);
        });
      function A(B, P) {
        return E && (B.range = [P[0] + g, P[1] + g]), B;
      }
      function b() {
        var B = r.charAt(a);
        return (a += 1), B;
      }
      function x(B) {
        var P,
          k,
          O,
          $ = 0;
        for (k = B === "u" ? 4 : 2, P = 0; P < k; ++P)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (O = b()),
              ($ = $ * 16 + "0123456789abcdef".indexOf(O.toLowerCase()));
          else return "";
        return String.fromCharCode($);
      }
      function F() {
        var B = "",
          P,
          k,
          O,
          $,
          H;
        for (P = r.charAt(a), ++a; a < n; )
          if (((k = b()), k === P)) {
            P = "";
            break;
          } else if (k === "\\")
            if (((k = b()), s.code.isLineTerminator(k.charCodeAt(0))))
              k === "\r" && r.charCodeAt(a) === 10 && ++a;
            else
              switch (k) {
                case "n":
                  B += `
`;
                  break;
                case "r":
                  B += "\r";
                  break;
                case "t":
                  B += "	";
                  break;
                case "u":
                case "x":
                  (H = a), ($ = x(k)), $ ? (B += $) : ((a = H), (B += k));
                  break;
                case "b":
                  B += "\b";
                  break;
                case "f":
                  B += "\f";
                  break;
                case "v":
                  B += "\v";
                  break;
                default:
                  s.code.isOctalDigit(k.charCodeAt(0))
                    ? ((O = "01234567".indexOf(k)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((O = O * 8 + "01234567".indexOf(b())),
                        "0123".indexOf(k) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (O = O * 8 + "01234567".indexOf(b()))),
                      (B += String.fromCharCode(O)))
                    : (B += k);
                  break;
              }
          else {
            if (s.code.isLineTerminator(k.charCodeAt(0))) break;
            B += k;
          }
        return P !== "" && d.throwError("unexpected quote"), (u = B), t.STRING;
      }
      function R() {
        var B, P;
        if (((B = ""), (P = r.charCodeAt(a)), P !== 46)) {
          if (((B = b()), (P = r.charCodeAt(a)), B === "0")) {
            if (P === 120 || P === 88) {
              for (
                B += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P));

              )
                B += b();
              return (
                B.length <= 2 && d.throwError("unexpected token"),
                a < n &&
                  ((P = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(P) &&
                    d.throwError("unexpected token")),
                (u = parseInt(B, 16)),
                t.NUMBER
              );
            }
            if (s.code.isOctalDigit(P)) {
              for (
                B += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P));

              )
                B += b();
              return (
                a < n &&
                  ((P = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(P) ||
                    s.code.isDecimalDigit(P)) &&
                    d.throwError("unexpected token")),
                (u = parseInt(B, 8)),
                t.NUMBER
              );
            }
            s.code.isDecimalDigit(P) && d.throwError("unexpected token");
          }
          for (; a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); )
            B += b();
        }
        if (P === 46)
          for (
            B += b();
            a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

          )
            B += b();
        if (P === 101 || P === 69)
          if (
            ((B += b()),
            (P = r.charCodeAt(a)),
            (P === 43 || P === 45) && (B += b()),
            (P = r.charCodeAt(a)),
            s.code.isDecimalDigit(P))
          )
            for (
              B += b();
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              B += b();
          else d.throwError("unexpected token");
        return (
          a < n &&
            ((P = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(P) && d.throwError("unexpected token")),
          (u = parseFloat(B)),
          t.NUMBER
        );
      }
      function N() {
        var B, P;
        for (u = b(); a < n && y(r.charCodeAt(a)); ) {
          if (((B = r.charCodeAt(a)), B === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((P = r.charCodeAt(a + 1)), P === 60)) break;
          }
          u += b();
        }
        return t.NAME;
      }
      function L() {
        var B;
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
        if (a >= n) return (i = t.EOF), i;
        switch (((B = r.charCodeAt(a)), B)) {
          case 39:
          case 34:
            return (i = F()), i;
          case 58:
            return b(), (i = t.COLON), i;
          case 44:
            return b(), (i = t.COMMA), i;
          case 40:
            return b(), (i = t.LPAREN), i;
          case 41:
            return b(), (i = t.RPAREN), i;
          case 91:
            return b(), (i = t.LBRACK), i;
          case 93:
            return b(), (i = t.RBRACK), i;
          case 123:
            return b(), (i = t.LBRACE), i;
          case 125:
            return b(), (i = t.RBRACE), i;
          case 46:
            if (a + 1 < n) {
              if (((B = r.charCodeAt(a + 1)), B === 60))
                return b(), b(), (i = t.DOT_LT), i;
              if (B === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return b(), b(), b(), (i = t.REST), i;
              if (s.code.isDecimalDigit(B)) return (i = R()), i;
            }
            return (i = t.ILLEGAL), i;
          case 60:
            return b(), (i = t.LT), i;
          case 62:
            return b(), (i = t.GT), i;
          case 42:
            return b(), (i = t.STAR), i;
          case 124:
            return b(), (i = t.PIPE), i;
          case 63:
            return b(), (i = t.QUESTION), i;
          case 33:
            return b(), (i = t.BANG), i;
          case 61:
            return b(), (i = t.EQUAL), i;
          case 45:
            return (i = R()), i;
          default:
            return s.code.isDecimalDigit(B)
              ? ((i = R()), i)
              : (d.assert(y(B)), (i = N()), i);
        }
      }
      function w(B, P) {
        d.assert(i === B, P || "consumed token not matched"), L();
      }
      function M(B, P) {
        i !== B && d.throwError(P || "unexpected token"), L();
      }
      function I() {
        var B,
          P = a - 1;
        if (
          (w(t.LPAREN, "UnionType should start with ("),
          (B = []),
          i !== t.RPAREN)
        )
          for (; B.push(K()), i !== t.RPAREN; ) M(t.PIPE);
        return (
          w(t.RPAREN, "UnionType should end with )"),
          A({ type: e.UnionType, elements: B }, [P, o])
        );
      }
      function U() {
        var B,
          P = a - 1,
          k;
        for (
          w(t.LBRACK, "ArrayType should start with ["), B = [];
          i !== t.RBRACK;

        ) {
          if (i === t.REST) {
            (k = a - 3),
              w(t.REST),
              B.push(A({ type: e.RestType, expression: K() }, [k, o]));
            break;
          } else B.push(K());
          i !== t.RBRACK && M(t.COMMA);
        }
        return M(t.RBRACK), A({ type: e.ArrayType, elements: B }, [P, o]);
      }
      function V() {
        var B = u;
        if (i === t.NAME || i === t.STRING) return L(), B;
        if (i === t.NUMBER) return w(t.NUMBER), String(B);
        d.throwError("unexpected token");
      }
      function z() {
        var B,
          P = o;
        return (
          (B = V()),
          i === t.COLON
            ? (w(t.COLON), A({ type: e.FieldType, key: B, value: K() }, [P, o]))
            : A({ type: e.FieldType, key: B, value: null }, [P, o])
        );
      }
      function ae() {
        var B,
          P = a - 1,
          k;
        if (
          (w(t.LBRACE, "RecordType should start with {"),
          (B = []),
          i === t.COMMA)
        )
          w(t.COMMA);
        else for (; i !== t.RBRACE; ) B.push(z()), i !== t.RBRACE && M(t.COMMA);
        return (
          (k = a), M(t.RBRACE), A({ type: e.RecordType, fields: B }, [P, k])
        );
      }
      function Q() {
        var B = u,
          P = a - B.length;
        return (
          M(t.NAME),
          i === t.COLON &&
            (B === "module" || B === "external" || B === "event") &&
            (w(t.COLON), (B += ":" + u), M(t.NAME)),
          A({ type: e.NameExpression, name: B }, [P, o])
        );
      }
      function Y() {
        var B = [];
        for (B.push(Z()); i === t.COMMA; ) w(t.COMMA), B.push(Z());
        return B;
      }
      function _() {
        var B,
          P,
          k = a - u.length;
        return (
          (B = Q()),
          i === t.DOT_LT || i === t.LT
            ? (L(),
              (P = Y()),
              M(t.GT),
              A({ type: e.TypeApplication, expression: B, applications: P }, [
                k,
                o,
              ]))
            : B
        );
      }
      function T() {
        return (
          w(t.COLON, "ResultType should start with :"),
          i === t.NAME && u === "void"
            ? (w(t.NAME), { type: e.VoidLiteral })
            : K()
        );
      }
      function j() {
        for (var B = [], P = !1, k, O = !1, $, H = a - 3, fe; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (O = !0)),
            ($ = o),
            (k = K()),
            k.type === e.NameExpression &&
              i === t.COLON &&
              ((fe = o - k.name.length),
              w(t.COLON),
              (k = A({ type: e.ParameterType, name: k.name, expression: K() }, [
                fe,
                o,
              ]))),
            i === t.EQUAL
              ? (w(t.EQUAL),
                (k = A({ type: e.OptionalType, expression: k }, [$, o])),
                (P = !0))
              : P && d.throwError("unexpected token"),
            O && (k = A({ type: e.RestType, expression: k }, [H, o])),
            B.push(k),
            i !== t.RPAREN && M(t.COMMA);
        return B;
      }
      function G() {
        var B,
          P,
          k,
          O,
          $,
          H = a - u.length;
        return (
          d.assert(
            i === t.NAME && u === "function",
            "FunctionType should start with 'function'"
          ),
          w(t.NAME),
          M(t.LPAREN),
          (B = !1),
          (k = []),
          (P = null),
          i !== t.RPAREN &&
            (i === t.NAME && (u === "this" || u === "new")
              ? ((B = u === "new"),
                w(t.NAME),
                M(t.COLON),
                (P = _()),
                i === t.COMMA && (w(t.COMMA), (k = j())))
              : (k = j())),
          M(t.RPAREN),
          (O = null),
          i === t.COLON && (O = T()),
          ($ = A({ type: e.FunctionType, params: k, result: O }, [H, o])),
          P && (($.this = P), B && ($.new = !0)),
          $
        );
      }
      function J() {
        var B, P;
        switch (i) {
          case t.STAR:
            return w(t.STAR), A({ type: e.AllLiteral }, [o - 1, o]);
          case t.LPAREN:
            return I();
          case t.LBRACK:
            return U();
          case t.LBRACE:
            return ae();
          case t.NAME:
            if (((P = a - u.length), u === "null"))
              return w(t.NAME), A({ type: e.NullLiteral }, [P, o]);
            if (u === "undefined")
              return w(t.NAME), A({ type: e.UndefinedLiteral }, [P, o]);
            if (u === "true" || u === "false")
              return (
                w(t.NAME),
                A({ type: e.BooleanLiteralType, value: u === "true" }, [P, o])
              );
            if (((B = h.save()), u === "function"))
              try {
                return G();
              } catch {
                B.restore();
              }
            return _();
          case t.STRING:
            return (
              L(),
              A({ type: e.StringLiteralType, value: u }, [o - u.length - 2, o])
            );
          case t.NUMBER:
            return (
              L(),
              A({ type: e.NumericLiteralType, value: u }, [
                o - String(u).length,
                o,
              ])
            );
          default:
            d.throwError("unexpected token");
        }
      }
      function K() {
        var B, P;
        return i === t.QUESTION
          ? ((P = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? A({ type: e.NullableLiteral }, [P, o])
              : A({ type: e.NullableType, expression: J(), prefix: !0 }, [
                  P,
                  o,
                ]))
          : i === t.BANG
          ? ((P = a - 1),
            w(t.BANG),
            A({ type: e.NonNullableType, expression: J(), prefix: !0 }, [P, o]))
          : ((P = o),
            (B = J()),
            i === t.BANG
              ? (w(t.BANG),
                A({ type: e.NonNullableType, expression: B, prefix: !1 }, [
                  P,
                  o,
                ]))
              : i === t.QUESTION
              ? (w(t.QUESTION),
                A({ type: e.NullableType, expression: B, prefix: !1 }, [P, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                M(
                  t.RBRACK,
                  "expected an array-style type declaration (" + u + "[])"
                ),
                A(
                  {
                    type: e.TypeApplication,
                    expression: A({ type: e.NameExpression, name: "Array" }, [
                      P,
                      o,
                    ]),
                    applications: [B],
                  },
                  [P, o]
                ))
              : B);
      }
      function Z() {
        var B, P;
        if (((B = K()), i !== t.PIPE)) return B;
        for (P = [B], w(t.PIPE); P.push(K()), i === t.PIPE; ) w(t.PIPE);
        return A({ type: e.UnionType, elements: P }, [0, a]);
      }
      function le() {
        var B;
        return i === t.REST
          ? (w(t.REST), A({ type: e.RestType, expression: Z() }, [0, a]))
          : ((B = Z()),
            i === t.EQUAL
              ? (w(t.EQUAL), A({ type: e.OptionalType, expression: B }, [0, a]))
              : B);
      }
      function Ie(B, P) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (E = P && P.range),
          (g = (P && P.startIndex) || 0),
          L(),
          (k = Z()),
          P && P.midstream
            ? { expression: k, index: o }
            : (i !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function ke(B, P) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (E = P && P.range),
          (g = (P && P.startIndex) || 0),
          L(),
          (k = le()),
          P && P.midstream
            ? { expression: k, index: o }
            : (i !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function X(B, P, k) {
        var O, $, H;
        switch (B.type) {
          case e.NullableLiteral:
            O = "?";
            break;
          case e.AllLiteral:
            O = "*";
            break;
          case e.NullLiteral:
            O = "null";
            break;
          case e.UndefinedLiteral:
            O = "undefined";
            break;
          case e.VoidLiteral:
            O = "void";
            break;
          case e.UnionType:
            for (
              k ? (O = "") : (O = "("), $ = 0, H = B.elements.length;
              $ < H;
              ++$
            )
              (O += X(B.elements[$], P)), $ + 1 !== H && (O += P ? "|" : " | ");
            k || (O += ")");
            break;
          case e.ArrayType:
            for (O = "[", $ = 0, H = B.elements.length; $ < H; ++$)
              (O += X(B.elements[$], P)), $ + 1 !== H && (O += P ? "," : ", ");
            O += "]";
            break;
          case e.RecordType:
            for (O = "{", $ = 0, H = B.fields.length; $ < H; ++$)
              (O += X(B.fields[$], P)), $ + 1 !== H && (O += P ? "," : ", ");
            O += "}";
            break;
          case e.FieldType:
            B.value
              ? (O = B.key + (P ? ":" : ": ") + X(B.value, P))
              : (O = B.key);
            break;
          case e.FunctionType:
            for (
              O = P ? "function(" : "function (",
                B.this &&
                  (B.new
                    ? (O += P ? "new:" : "new: ")
                    : (O += P ? "this:" : "this: "),
                  (O += X(B.this, P)),
                  B.params.length !== 0 && (O += P ? "," : ", ")),
                $ = 0,
                H = B.params.length;
              $ < H;
              ++$
            )
              (O += X(B.params[$], P)), $ + 1 !== H && (O += P ? "," : ", ");
            (O += ")"), B.result && (O += (P ? ":" : ": ") + X(B.result, P));
            break;
          case e.ParameterType:
            O = B.name + (P ? ":" : ": ") + X(B.expression, P);
            break;
          case e.RestType:
            (O = "..."), B.expression && (O += X(B.expression, P));
            break;
          case e.NonNullableType:
            B.prefix
              ? (O = "!" + X(B.expression, P))
              : (O = X(B.expression, P) + "!");
            break;
          case e.OptionalType:
            O = X(B.expression, P) + "=";
            break;
          case e.NullableType:
            B.prefix
              ? (O = "?" + X(B.expression, P))
              : (O = X(B.expression, P) + "?");
            break;
          case e.NameExpression:
            O = B.name;
            break;
          case e.TypeApplication:
            for (
              O = X(B.expression, P) + ".<", $ = 0, H = B.applications.length;
              $ < H;
              ++$
            )
              (O += X(B.applications[$], P)),
                $ + 1 !== H && (O += P ? "," : ", ");
            O += ">";
            break;
          case e.StringLiteralType:
            O = '"' + B.value + '"';
            break;
          case e.NumericLiteralType:
            O = String(B.value);
            break;
          case e.BooleanLiteralType:
            O = String(B.value);
            break;
          default:
            d.throwError("Unknown type " + B.type);
        }
        return O;
      }
      function Ue(B, P) {
        return P == null && (P = {}), X(B, P.compact, P.topLevel);
      }
      (nn.parseType = Ie),
        (nn.parseParamType = ke),
        (nn.stringify = Ue),
        (nn.Syntax = e);
    })();
  });
  var xm = S((Xe) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a;
      (n = su()), (e = Cm()), (t = lu());
      function o(w, M, I) {
        return w.slice(M, I);
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty;
        return function (I, U) {
          return w.call(I, U);
        };
      })();
      function i(w) {
        var M = {},
          I;
        for (I in w) w.hasOwnProperty(I) && (M[I] = w[I]);
        return M;
      }
      function u(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        );
      }
      function s(w) {
        return w === "param" || w === "argument" || w === "arg";
      }
      function d(w) {
        return w === "return" || w === "returns";
      }
      function g(w) {
        return w === "property" || w === "prop";
      }
      function E(w) {
        return (
          s(w) ||
          g(w) ||
          w === "alias" ||
          w === "this" ||
          w === "mixes" ||
          w === "requires"
        );
      }
      function y(w) {
        return E(w) || w === "const" || w === "constant";
      }
      function h(w) {
        return g(w) || s(w);
      }
      function A(w) {
        return g(w) || s(w);
      }
      function b(w) {
        return (
          s(w) ||
          d(w) ||
          w === "define" ||
          w === "enum" ||
          w === "implements" ||
          w === "this" ||
          w === "type" ||
          w === "typedef" ||
          g(w)
        );
      }
      function x(w) {
        return (
          b(w) ||
          w === "throws" ||
          w === "const" ||
          w === "constant" ||
          w === "namespace" ||
          w === "member" ||
          w === "var" ||
          w === "module" ||
          w === "constructor" ||
          w === "class" ||
          w === "extends" ||
          w === "augments" ||
          w === "public" ||
          w === "private" ||
          w === "protected"
        );
      }
      var F =
          "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
        R =
          "(" +
          F +
          "*(?:\\*" +
          F +
          `?)?)(.+|[\r
\u2028\u2029])`;
      function N(w) {
        return w
          .replace(/^\/\*\*?/, "")
          .replace(/\*\/$/, "")
          .replace(new RegExp(R, "g"), "$2")
          .replace(/\s*$/, "");
      }
      function L(w, M) {
        for (
          var I = w.replace(/^\/\*\*?/, ""), U = 0, V = new RegExp(R, "g"), z;
          (z = V.exec(I));

        )
          if (((U += z[1].length), z.index + z[0].length > M + U))
            return M + U + w.length - I.length;
        return w.replace(/\*\/$/, "").replace(/\s*$/, "").length;
      }
      (function (w) {
        var M, I, U, V, z, ae, Q, Y, _;
        function T() {
          var k = z.charCodeAt(I);
          return (
            (I += 1),
            n.code.isLineTerminator(k) &&
              !(k === 13 && z.charCodeAt(I) === 10) &&
              (U += 1),
            String.fromCharCode(k)
          );
        }
        function j() {
          var k = "";
          for (T(); I < V && u(z.charCodeAt(I)); ) k += T();
          return k;
        }
        function G() {
          var k,
            O,
            $ = I;
          for (O = !1; $ < V; ) {
            if (
              ((k = z.charCodeAt($)),
              n.code.isLineTerminator(k) &&
                !(k === 13 && z.charCodeAt($ + 1) === 10))
            )
              O = !0;
            else if (O) {
              if (k === 64) break;
              n.code.isWhiteSpace(k) || (O = !1);
            }
            $ += 1;
          }
          return $;
        }
        function J(k, O, $) {
          for (var H, fe, ie, se, Ee = !1; I < O; )
            if (((H = z.charCodeAt(I)), n.code.isWhiteSpace(H))) T();
            else if (H === 123) {
              T();
              break;
            } else {
              Ee = !0;
              break;
            }
          if (Ee) return null;
          for (fe = 1, ie = ""; I < O; )
            if (((H = z.charCodeAt(I)), n.code.isLineTerminator(H))) T();
            else {
              if (H === 125) {
                if (((fe -= 1), fe === 0)) {
                  T();
                  break;
                }
              } else H === 123 && (fe += 1);
              ie === "" && (se = I), (ie += T());
            }
          return fe !== 0
            ? t.throwError("Braces are not balanced")
            : A(k)
            ? e.parseParamType(ie, { startIndex: ke(se), range: $ })
            : e.parseType(ie, { startIndex: ke(se), range: $ });
        }
        function K(k) {
          var O;
          if (
            !n.code.isIdentifierStartES5(z.charCodeAt(I)) &&
            !z[I].match(/[0-9]/)
          )
            return null;
          for (O = T(); I < k && n.code.isIdentifierPartES5(z.charCodeAt(I)); )
            O += T();
          return O;
        }
        function Z(k) {
          for (
            ;
            I < k &&
            (n.code.isWhiteSpace(z.charCodeAt(I)) ||
              n.code.isLineTerminator(z.charCodeAt(I)));

          )
            T();
        }
        function le(k, O, $) {
          var H = "",
            fe,
            ie;
          if ((Z(k), I >= k)) return null;
          if (z.charCodeAt(I) === 91)
            if (O) (fe = !0), (H = T());
            else return null;
          if (((H += K(k)), $))
            for (
              z.charCodeAt(I) === 58 &&
                (H === "module" || H === "external" || H === "event") &&
                ((H += T()), (H += K(k))),
                z.charCodeAt(I) === 91 &&
                  z.charCodeAt(I + 1) === 93 &&
                  ((H += T()), (H += T()));
              z.charCodeAt(I) === 46 ||
              z.charCodeAt(I) === 47 ||
              z.charCodeAt(I) === 35 ||
              z.charCodeAt(I) === 45 ||
              z.charCodeAt(I) === 126;

            )
              (H += T()), (H += K(k));
          if (fe) {
            if ((Z(k), z.charCodeAt(I) === 61)) {
              (H += T()), Z(k);
              for (var se, Ee = 1; I < k; ) {
                if (
                  ((se = z.charCodeAt(I)),
                  n.code.isWhiteSpace(se) &&
                    (ie || (Z(k), (se = z.charCodeAt(I)))),
                  se === 39 && (ie ? ie === "'" && (ie = "") : (ie = "'")),
                  se === 34 && (ie ? ie === '"' && (ie = "") : (ie = '"')),
                  se === 91)
                )
                  Ee++;
                else if (se === 93 && --Ee === 0) break;
                H += T();
              }
            }
            if ((Z(k), I >= k || z.charCodeAt(I) !== 93)) return null;
            H += T();
          }
          return H;
        }
        function Ie() {
          for (; I < V && z.charCodeAt(I) !== 64; ) T();
          return I >= V ? !1 : (t.assert(z.charCodeAt(I) === 64), !0);
        }
        function ke(k) {
          return z === ae ? k : L(ae, k);
        }
        function X(k, O) {
          (this._options = k),
            (this._title = O.toLowerCase()),
            (this._tag = { title: O, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = U),
            (this._first = I - O.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (X.prototype.addError = function (O) {
          var $ = Array.prototype.slice.call(arguments, 1),
            H = O.replace(/%(\d)/g, function (fe, ie) {
              return (
                t.assert(ie < $.length, "Message reference must be in range"),
                $[ie]
              );
            });
          return (
            this._tag.errors || (this._tag.errors = []),
            _ && t.throwError(H),
            this._tag.errors.push(H),
            Q
          );
        }),
          (X.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = J(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !s(this._title) &&
                    !d(this._title) &&
                    !this.addError("Missing or invalid tag type"))
                )
                  return !1;
              } catch (k) {
                if (((this._tag.type = null), !this.addError(k.message)))
                  return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = J(
                  this._title,
                  this._last,
                  this._options.range
                );
              } catch {}
            return !0;
          }),
          (X.prototype._parseNamePath = function (k) {
            var O;
            return (
              (O = le(this._last, Y && A(this._title), !0)),
              !O && !k && !this.addError("Missing or invalid tag name")
                ? !1
                : ((this._tag.name = O), !0)
            );
          }),
          (X.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (X.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (X.prototype.parseName = function () {
            var k, O;
            if (y(this._title))
              if (
                ((this._tag.name = le(
                  this._last,
                  Y && A(this._title),
                  h(this._title)
                )),
                this._tag.name)
              )
                (O = this._tag.name),
                  O.charAt(0) === "[" &&
                    O.charAt(O.length - 1) === "]" &&
                    ((k = O.substring(1, O.length - 1).split("=")),
                    k.length > 1 && (this._tag.default = k.slice(1).join("=")),
                    (this._tag.name = k[0]),
                    this._tag.type &&
                      this._tag.type.type !== "OptionalType" &&
                      (this._tag.type = {
                        type: "OptionalType",
                        expression: this._tag.type,
                      }));
              else {
                if (!E(this._title)) return !0;
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null);
                else if (!this.addError("Missing or invalid tag name"))
                  return !1;
              }
            return !0;
          }),
          (X.prototype.parseDescription = function () {
            var O = o(z, I, this._last).trim();
            return (
              O &&
                (/^-\s+/.test(O) && (O = O.substring(2)),
                (this._tag.description = O)),
              !0
            );
          }),
          (X.prototype.parseCaption = function () {
            var O = o(z, I, this._last).trim(),
              $ = "<caption>",
              H = "</caption>",
              fe = O.indexOf($),
              ie = O.indexOf(H);
            return (
              fe >= 0 && ie >= 0
                ? ((this._tag.caption = O.substring(fe + $.length, ie).trim()),
                  (this._tag.description = O.substring(ie + H.length).trim()))
                : (this._tag.description = O),
              !0
            );
          }),
          (X.prototype.parseKind = function () {
            var O, $;
            return (
              ($ = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (O = o(z, I, this._last).trim()),
              (this._tag.kind = O),
              !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
            );
          }),
          (X.prototype.parseAccess = function () {
            var O;
            return (
              (O = o(z, I, this._last).trim()),
              (this._tag.access = O),
              !(
                O !== "private" &&
                O !== "protected" &&
                O !== "public" &&
                !this.addError("Invalid access name '%0'", O)
              )
            );
          }),
          (X.prototype.parseThis = function () {
            var O = o(z, I, this._last).trim();
            if (O && O.charAt(0) === "{") {
              var $ = this.parseType();
              return ($ && this._tag.type.type === "NameExpression") ||
                this._tag.type.type === "UnionType"
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError("Invalid name for this");
            } else return this.parseNamePath();
          }),
          (X.prototype.parseVariation = function () {
            var O, $;
            return (
              ($ = o(z, I, this._last).trim()),
              (O = parseFloat($, 10)),
              (this._tag.variation = O),
              !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
            );
          }),
          (X.prototype.ensureEnd = function () {
            var k = o(z, I, this._last).trim();
            return !(k && !this.addError("Unknown content '%0'", k));
          }),
          (X.prototype.epilogue = function () {
            var O;
            return (
              (O = this._tag.description),
              !(
                A(this._title) &&
                !this._tag.type &&
                O &&
                O.charAt(0) === "[" &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !Y && !this.addError("Missing or invalid tag name"))
              )
            );
          }),
          (M = {
            access: ["parseAccess"],
            alias: ["parseNamePath", "ensureEnd"],
            augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
            constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
            class: ["parseType", "parseNamePathOptional", "ensureEnd"],
            extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
            example: ["parseCaption"],
            deprecated: ["parseDescription"],
            global: ["ensureEnd"],
            inner: ["ensureEnd"],
            instance: ["ensureEnd"],
            kind: ["parseKind"],
            mixes: ["parseNamePath", "ensureEnd"],
            mixin: ["parseNamePathOptional", "ensureEnd"],
            member: ["parseType", "parseNamePathOptional", "ensureEnd"],
            method: ["parseNamePathOptional", "ensureEnd"],
            module: ["parseType", "parseNamePathOptional", "ensureEnd"],
            func: ["parseNamePathOptional", "ensureEnd"],
            function: ["parseNamePathOptional", "ensureEnd"],
            var: ["parseType", "parseNamePathOptional", "ensureEnd"],
            name: ["parseNamePath", "ensureEnd"],
            namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
            private: ["parseType", "parseDescription"],
            protected: ["parseType", "parseDescription"],
            public: ["parseType", "parseDescription"],
            readonly: ["ensureEnd"],
            requires: ["parseNamePath", "ensureEnd"],
            since: ["parseDescription"],
            static: ["ensureEnd"],
            summary: ["parseDescription"],
            this: ["parseThis", "ensureEnd"],
            todo: ["parseDescription"],
            typedef: ["parseType", "parseNamePathOptional"],
            variation: ["parseVariation"],
            version: ["parseDescription"],
          }),
          (X.prototype.parse = function () {
            var O, $, H, fe;
            if (!this._title && !this.addError("Missing or invalid title"))
              return null;
            for (
              this._last = G(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    z.slice(0, this._last).replace(/\s*$/, "").length,
                  ].map(ke)),
                a(M, this._title)
                  ? (H = M[this._title])
                  : (H = [
                      "parseType",
                      "parseName",
                      "parseDescription",
                      "epilogue",
                    ]),
                O = 0,
                $ = H.length;
              O < $;
              ++O
            )
              if (((fe = H[O]), !this[fe]())) return null;
            return this._tag;
          });
        function Ue(k) {
          var O, $, H;
          if (!Ie()) return null;
          for (O = j(), $ = new X(k, O), H = $.parse(); I < $._last; ) T();
          return H;
        }
        function B(k) {
          var O = "",
            $,
            H;
          for (H = !0; I < V && (($ = z.charCodeAt(I)), !(H && $ === 64)); )
            n.code.isLineTerminator($)
              ? (H = !0)
              : H && !n.code.isWhiteSpace($) && (H = !1),
              (O += T());
          return k ? O : O.trim();
        }
        function P(k, O) {
          var $ = [],
            H,
            fe,
            ie,
            se,
            Ee;
          if (
            (O === void 0 && (O = {}),
            typeof O.unwrap == "boolean" && O.unwrap ? (z = N(k)) : (z = k),
            (ae = k),
            O.tags)
          )
            if (Array.isArray(O.tags))
              for (ie = {}, se = 0, Ee = O.tags.length; se < Ee; se++)
                typeof O.tags[se] == "string"
                  ? (ie[O.tags[se]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + O.tags);
            else t.throwError('Invalid "tags" parameter: ' + O.tags);
          for (
            V = z.length,
              I = 0,
              U = 0,
              Q = O.recoverable,
              Y = O.sloppy,
              _ = O.strict,
              fe = B(O.preserveWhitespace);
            (H = Ue(O)), !!H;

          )
            (!ie || ie.hasOwnProperty(H.title)) && $.push(H);
          return { description: fe, tags: $ };
        }
        w.parse = P;
      })((r = {})),
        (Xe.version = t.VERSION),
        (Xe.parse = r.parse),
        (Xe.parseType = e.parseType),
        (Xe.parseParamType = e.parseParamType),
        (Xe.unwrapComment = N),
        (Xe.Syntax = i(e.Syntax)),
        (Xe.Error = t.DoctrineError),
        (Xe.type = {
          Syntax: Xe.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  function Pt() {
    return (Pt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function hu(e, t) {
    if (e == null) return {};
    var r,
      n,
      a = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function cu(e) {
    var t = Fe(e),
      r = Fe(function (n) {
        t.current && t.current(n);
      });
    return (t.current = e), r.current;
  }
  function Nm(e, t, r) {
    var n = cu(r),
      a = oe(function () {
        return e.toHsva(t);
      }),
      o = a[0],
      i = a[1],
      u = Fe({ color: t, hsva: o });
    ge(
      function () {
        if (!e.equal(t, u.current.color)) {
          var d = e.toHsva(t);
          (u.current = { hsva: d, color: t }), i(d);
        }
      },
      [t, e]
    ),
      ge(
        function () {
          var d;
          Im(o, u.current.hsva) ||
            e.equal((d = e.fromHsva(o)), u.current.color) ||
            ((u.current = { hsva: o, color: d }), n(d));
        },
        [o, e, n]
      );
    var s = me(function (d) {
      i(function (g) {
        return Object.assign({}, g, d);
      });
    }, []);
    return [o, s];
  }
  var yr,
    on,
    pu,
    Sm,
    wm,
    yu,
    un,
    mu,
    Ce,
    u4,
    s4,
    du,
    l4,
    c4,
    p4,
    d4,
    Tm,
    fu,
    Da,
    Om,
    f4,
    va,
    h4,
    _m,
    Pm,
    Rm,
    Im,
    km,
    y4,
    m4,
    g4,
    b4,
    Bm,
    jm,
    A4,
    E4,
    Mm,
    v4,
    qm,
    D4,
    Lm,
    C4,
    $m,
    Um = Ze(() => {
      l();
      c();
      p();
      It();
      (yr = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        );
      }),
        (on = function (e) {
          return "touches" in e;
        }),
        (pu = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        }),
        (Sm = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = on(t)
              ? (function (o, i) {
                  for (var u = 0; u < o.length; u++)
                    if (o[u].identifier === i) return o[u];
                  return o[0];
                })(t.touches, r)
              : t;
          return {
            left: yr((a.pageX - (n.left + pu(e).pageXOffset)) / n.width),
            top: yr((a.pageY - (n.top + pu(e).pageYOffset)) / n.height),
          };
        }),
        (wm = function (e) {
          !on(e) && e.preventDefault();
        }),
        (yu = m.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = hu(e, ["onMove", "onKey"]),
            a = Fe(null),
            o = cu(t),
            i = cu(r),
            u = Fe(null),
            s = Fe(!1),
            d = it(
              function () {
                var h = function (x) {
                    wm(x),
                      (on(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? o(Sm(a.current, x, u.current))
                        : b(!1);
                  },
                  A = function () {
                    return b(!1);
                  };
                function b(x) {
                  var F = s.current,
                    R = pu(a.current),
                    N = x ? R.addEventListener : R.removeEventListener;
                  N(F ? "touchmove" : "mousemove", h),
                    N(F ? "touchend" : "mouseup", A);
                }
                return [
                  function (x) {
                    var F = x.nativeEvent,
                      R = a.current;
                    if (
                      R &&
                      (wm(F),
                      !(function (L, w) {
                        return w && !on(L);
                      })(F, s.current) && R)
                    ) {
                      if (on(F)) {
                        s.current = !0;
                        var N = F.changedTouches || [];
                        N.length && (u.current = N[0].identifier);
                      }
                      R.focus(), o(Sm(R, F, u.current)), b(!0);
                    }
                  },
                  function (x) {
                    var F = x.which || x.keyCode;
                    F < 37 ||
                      F > 40 ||
                      (x.preventDefault(),
                      i({
                        left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                        top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                      }));
                  },
                  b,
                ];
              },
              [i, o]
            ),
            g = d[0],
            E = d[1],
            y = d[2];
          return (
            ge(
              function () {
                return y;
              },
              [y]
            ),
            m.createElement(
              "div",
              Pt({}, n, {
                onTouchStart: g,
                onMouseDown: g,
                className: "react-colorful__interactive",
                ref: a,
                onKeyDown: E,
                tabIndex: 0,
                role: "slider",
              })
            )
          );
        })),
        (un = function (e) {
          return e.filter(Boolean).join(" ");
        }),
        (mu = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = un(["react-colorful__pointer", e.className]);
          return m.createElement(
            "div",
            {
              className: o,
              style: { top: 100 * a + "%", left: 100 * r + "%" },
            },
            m.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: t },
            })
          );
        }),
        (Ce = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          );
        }),
        (u4 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (s4 = function (e) {
          return _m(du(e));
        }),
        (du = function (e) {
          return (
            e[0] === "#" && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? Ce(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? Ce(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          );
        }),
        (l4 = function (e, t) {
          return t === void 0 && (t = "deg"), Number(e) * (u4[t] || 1);
        }),
        (c4 = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? p4({
                h: l4(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (p4 = function (e) {
          var t = e.s,
            r = e.l;
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          };
        }),
        (d4 = function (e) {
          return h4(Om(e));
        }),
        (Tm = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100;
          return {
            h: Ce(e.h),
            s: Ce(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0
            ),
            l: Ce(a / 2),
            a: Ce(n, 2),
          };
        }),
        (fu = function (e) {
          var t = Tm(e);
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        }),
        (Da = function (e) {
          var t = Tm(e);
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        }),
        (Om = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a;
          (t = (t / 360) * 6), (r /= 100), (n /= 100);
          var o = Math.floor(t),
            i = n * (1 - r),
            u = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            d = o % 6;
          return {
            r: Ce(255 * [n, u, i, i, s, n][d]),
            g: Ce(255 * [s, n, n, u, i, i][d]),
            b: Ce(255 * [i, i, s, n, n, u][d]),
            a: Ce(a, 2),
          };
        }),
        (f4 = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? _m({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (va = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? "0" + t : t;
        }),
        (h4 = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? va(Ce(255 * a)) : "";
          return "#" + va(t) + va(r) + va(n) + o;
        }),
        (_m = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            i = o - Math.min(t, r, n),
            u = i
              ? o === t
                ? (r - n) / i
                : o === r
                ? 2 + (n - t) / i
                : 4 + (t - r) / i
              : 0;
          return {
            h: Ce(60 * (u < 0 ? u + 6 : u)),
            s: Ce(o ? (i / o) * 100 : 0),
            v: Ce((o / 255) * 100),
            a,
          };
        }),
        (Pm = m.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = un(["react-colorful__hue", e.className]);
          return m.createElement(
            "div",
            { className: n },
            m.createElement(
              yu,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left });
                },
                onKey: function (a) {
                  r({ h: yr(t + 360 * a.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": Ce(t),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              m.createElement(mu, {
                className: "react-colorful__hue-pointer",
                left: t / 360,
                color: fu({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          );
        })),
        (Rm = m.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: fu({ h: t.h, s: 100, v: 100, a: 1 }) };
          return m.createElement(
            "div",
            { className: "react-colorful__saturation", style: n },
            m.createElement(
              yu,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top });
                },
                onKey: function (a) {
                  r({
                    s: yr(t.s + 100 * a.left, 0, 100),
                    v: yr(t.v - 100 * a.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " + Ce(t.s) + "%, Brightness " + Ce(t.v) + "%",
              },
              m.createElement(mu, {
                className: "react-colorful__saturation-pointer",
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: fu(t),
              })
            )
          );
        })),
        (Im = function (e, t) {
          if (e === t) return !0;
          for (var r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }),
        (km = function (e, t) {
          return e.replace(/\s/g, "") === t.replace(/\s/g, "");
        }),
        (y4 = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Im(du(e), du(t));
        });
      (g4 = typeof window < "u" ? Ku : ge),
        (b4 = function () {
          return (
            m4 || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0)
          );
        }),
        (Bm = new Map()),
        (jm = function (e) {
          g4(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !Bm.has(t)) {
              var r = t.createElement("style");
              (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Bm.set(t, r);
              var n = b4();
              n && r.setAttribute("nonce", n), t.head.appendChild(r);
            }
          }, []);
        }),
        (A4 = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = hu(e, ["className", "colorModel", "color", "onChange"]),
            u = Fe(null);
          jm(u);
          var s = Nm(r, a, o),
            d = s[0],
            g = s[1],
            E = un(["react-colorful", t]);
          return m.createElement(
            "div",
            Pt({}, i, { ref: u, className: E }),
            m.createElement(Rm, { hsva: d, onChange: g }),
            m.createElement(Pm, {
              hue: d.h,
              onChange: g,
              className: "react-colorful__last-control",
            })
          );
        }),
        (E4 = {
          defaultColor: "000",
          toHsva: s4,
          fromHsva: function (e) {
            return d4({ h: e.h, s: e.s, v: e.v, a: 1 });
          },
          equal: y4,
        }),
        (Mm = function (e) {
          return m.createElement(A4, Pt({}, e, { colorModel: E4 }));
        }),
        (v4 = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                "linear-gradient(90deg, " +
                Da(Object.assign({}, r, { a: 0 })) +
                ", " +
                Da(Object.assign({}, r, { a: 1 })) +
                ")",
            },
            o = un(["react-colorful__alpha", t]),
            i = Ce(100 * r.a);
          return m.createElement(
            "div",
            { className: o },
            m.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: a,
            }),
            m.createElement(
              yu,
              {
                onMove: function (u) {
                  n({ a: u.left });
                },
                onKey: function (u) {
                  n({ a: yr(r.a + u.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": i + "%",
                "aria-valuenow": i,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              m.createElement(mu, {
                className: "react-colorful__alpha-pointer",
                left: r.a,
                color: Da(r),
              })
            )
          );
        }),
        (qm = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = hu(e, ["className", "colorModel", "color", "onChange"]),
            u = Fe(null);
          jm(u);
          var s = Nm(r, a, o),
            d = s[0],
            g = s[1],
            E = un(["react-colorful", t]);
          return m.createElement(
            "div",
            Pt({}, i, { ref: u, className: E }),
            m.createElement(Rm, { hsva: d, onChange: g }),
            m.createElement(Pm, { hue: d.h, onChange: g }),
            m.createElement(v4, {
              hsva: d,
              onChange: g,
              className: "react-colorful__last-control",
            })
          );
        }),
        (D4 = {
          defaultColor: "hsla(0, 0%, 0%, 1)",
          toHsva: c4,
          fromHsva: Da,
          equal: km,
        }),
        (Lm = function (e) {
          return m.createElement(qm, Pt({}, e, { colorModel: D4 }));
        }),
        (C4 = {
          defaultColor: "rgba(0, 0, 0, 1)",
          toHsva: f4,
          fromHsva: function (e) {
            var t = Om(e);
            return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
          },
          equal: km,
        }),
        ($m = function (e) {
          return m.createElement(qm, Pt({}, e, { colorModel: C4 }));
        });
    });
  var Hm = S((ere, zm) => {
    "use strict";
    l();
    c();
    p();
    zm.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  var gu = S((are, Wm) => {
    l();
    c();
    p();
    var sn = Hm(),
      Gm = {};
    for (let e of Object.keys(sn)) Gm[sn[e]] = e;
    var W = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    };
    Wm.exports = W;
    for (let e of Object.keys(W)) {
      if (!("channels" in W[e]))
        throw new Error("missing channels property: " + e);
      if (!("labels" in W[e]))
        throw new Error("missing channel labels property: " + e);
      if (W[e].labels.length !== W[e].channels)
        throw new Error("channel and label counts mismatch: " + e);
      let { channels: t, labels: r } = W[e];
      delete W[e].channels,
        delete W[e].labels,
        Object.defineProperty(W[e], "channels", { value: t }),
        Object.defineProperty(W[e], "labels", { value: r });
    }
    W.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        i = o - a,
        u,
        s;
      o === a
        ? (u = 0)
        : t === o
        ? (u = (r - n) / i)
        : r === o
        ? (u = 2 + (n - t) / i)
        : n === o && (u = 4 + (t - r) / i),
        (u = Math.min(u * 60, 360)),
        u < 0 && (u += 360);
      let d = (a + o) / 2;
      return (
        o === a
          ? (s = 0)
          : d <= 0.5
          ? (s = i / (o + a))
          : (s = i / (2 - o - a)),
        [u, s * 100, d * 100]
      );
    };
    W.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        i = e[0] / 255,
        u = e[1] / 255,
        s = e[2] / 255,
        d = Math.max(i, u, s),
        g = d - Math.min(i, u, s),
        E = function (y) {
          return (d - y) / 6 / g + 1 / 2;
        };
      return (
        g === 0
          ? ((a = 0), (o = 0))
          : ((o = g / d),
            (t = E(i)),
            (r = E(u)),
            (n = E(s)),
            i === d
              ? (a = n - r)
              : u === d
              ? (a = 1 / 3 + t - n)
              : s === d && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, d * 100]
      );
    };
    W.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = W.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n));
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      );
    };
    W.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        i = (1 - r - a) / (1 - a) || 0,
        u = (1 - n - a) / (1 - a) || 0;
      return [o * 100, i * 100, u * 100, a * 100];
    };
    function x4(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    W.rgb.keyword = function (e) {
      let t = Gm[e];
      if (t) return t;
      let r = 1 / 0,
        n;
      for (let a of Object.keys(sn)) {
        let o = sn[a],
          i = x4(e, o);
        i < r && ((r = i), (n = a));
      }
      return n;
    };
    W.keyword.rgb = function (e) {
      return sn[e];
    };
    W.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        i = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, o * 100, i * 100];
    };
    W.rgb.lab = function (e) {
      let t = W.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      let o = 116 * n - 16,
        i = 500 * (r - n),
        u = 200 * (n - a);
      return [o, i, u];
    };
    W.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      if (r === 0) return (i = n * 255), [i, i, i];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      let u = 2 * n - a,
        s = [0, 0, 0];
      for (let d = 0; d < 3; d++)
        (o = t + (1 / 3) * -(d - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = u + (a - u) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = u + (a - u) * (2 / 3 - o) * 6)
            : (i = u),
          (s[d] = i * 255);
      return s;
    };
    W.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
      let i = (n + r) / 2,
        u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
      return [t, u * 100, i * 100];
    };
    W.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        i = 255 * n * (1 - r),
        u = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o));
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, i];
        case 1:
          return [u, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, u, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, u];
      }
    };
    W.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        i;
      i = (2 - r) * n;
      let u = (2 - r) * a;
      return (
        (o = r * a),
        (o /= u <= 1 ? u : 2 - u),
        (o = o || 0),
        (i /= 2),
        [t, o * 100, i * 100]
      );
    };
    W.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o;
      a > 1 && ((r /= a), (n /= a));
      let i = Math.floor(6 * t),
        u = 1 - n;
      (o = 6 * t - i), i & 1 && (o = 1 - o);
      let s = r + o * (u - r),
        d,
        g,
        E;
      switch (i) {
        default:
        case 6:
        case 0:
          (d = u), (g = s), (E = r);
          break;
        case 1:
          (d = s), (g = u), (E = r);
          break;
        case 2:
          (d = r), (g = u), (E = s);
          break;
        case 3:
          (d = r), (g = s), (E = u);
          break;
        case 4:
          (d = s), (g = r), (E = u);
          break;
        case 5:
          (d = u), (g = r), (E = s);
          break;
      }
      return [d * 255, g * 255, E * 255];
    };
    W.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        i = 1 - Math.min(1, r * (1 - a) + a),
        u = 1 - Math.min(1, n * (1 - a) + a);
      return [o * 255, i * 255, u * 255];
    };
    W.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      );
    };
    W.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      let a = 116 * r - 16,
        o = 500 * (t - r),
        i = 200 * (r - n);
      return [a, o, i];
    };
    W.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        i;
      (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
      let u = o ** 3,
        s = a ** 3,
        d = i ** 3;
      return (
        (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (i = d > 0.008856 ? d : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      );
    };
    W.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      let i = Math.sqrt(r * r + n * n);
      return [t, i, a];
    };
    W.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        i = r * Math.sin(a);
      return [t, o, i];
    };
    W.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? W.rgb.hsv(e)[2] : t;
      if (((o = Math.round(o / 50)), o === 0)) return 30;
      let i =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255));
      return o === 2 && (i += 60), i;
    };
    W.hsv.ansi16 = function (e) {
      return W.rgb.ansi16(W.hsv.rgb(e), e[2]);
    };
    W.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5);
    };
    W.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255;
      return [n, a, o];
    };
    W.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8;
        return [o, o, o];
      }
      e -= 16;
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    W.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return "000000".substring(r.length) + r;
    };
    W.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split("")
          .map((u) => u + u)
          .join(""));
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255;
      return [a, o, i];
    };
    W.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        i = a - o,
        u,
        s;
      return (
        i < 1 ? (u = o / (1 - i)) : (u = 0),
        i <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / i) % 6)
          : a === r
          ? (s = 2 + (n - t) / i)
          : (s = 4 + (t - r) / i),
        (s /= 6),
        (s %= 1),
        [s * 360, i * 100, u * 100]
      );
    };
    W.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        i = o % 1,
        u = 1 - i,
        s = 0;
      switch (Math.floor(o)) {
        case 0:
          (a[0] = 1), (a[1] = i), (a[2] = 0);
          break;
        case 1:
          (a[0] = u), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = i);
          break;
        case 3:
          (a[0] = 0), (a[1] = u), (a[2] = 1);
          break;
        case 4:
          (a[0] = i), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = u);
      }
      return (
        (s = (1 - r) * n),
        [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
      );
    };
    W.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    W.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0;
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      );
    };
    W.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    W.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0;
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
    };
    W.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    W.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    W.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    W.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    W.gray.hsv = W.gray.hsl;
    W.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    W.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    W.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    W.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    };
    W.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  var Km = S((sre, Vm) => {
    l();
    c();
    p();
    var Ca = gu();
    function F4() {
      let e = {},
        t = Object.keys(Ca);
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function S4(e) {
      let t = F4(),
        r = [e];
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(Ca[n]);
        for (let o = a.length, i = 0; i < o; i++) {
          let u = a[i],
            s = t[u];
          s.distance === -1 &&
            ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
        }
      }
      return t;
    }
    function w4(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function B4(e, t) {
      let r = [t[e].parent, e],
        n = Ca[t[e].parent][e],
        a = t[e].parent;
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = w4(Ca[t[a].parent][a], n)),
          (a = t[a].parent);
      return (n.conversion = r), n;
    }
    Vm.exports = function (e) {
      let t = S4(e),
        r = {},
        n = Object.keys(t);
      for (let a = n.length, o = 0; o < a; o++) {
        let i = n[o];
        t[i].parent !== null && (r[i] = B4(i, t));
      }
      return r;
    };
  });
  var Jm = S((dre, Ym) => {
    l();
    c();
    p();
    var bu = gu(),
      T4 = Km(),
      mr = {},
      O4 = Object.keys(bu);
    function _4(e) {
      let t = function (...r) {
        let n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    function P4(e) {
      let t = function (...r) {
        let n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        let a = e(r);
        if (typeof a == "object")
          for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
        return a;
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    O4.forEach((e) => {
      (mr[e] = {}),
        Object.defineProperty(mr[e], "channels", { value: bu[e].channels }),
        Object.defineProperty(mr[e], "labels", { value: bu[e].labels });
      let t = T4(e);
      Object.keys(t).forEach((n) => {
        let a = t[n];
        (mr[e][n] = P4(a)), (mr[e][n].raw = _4(a));
      });
    });
    Ym.exports = mr;
  });
  var Qm = S((mre, Xm) => {
    l();
    c();
    p();
    var R4 = Le(),
      I4 = function () {
        return R4.Date.now();
      };
    Xm.exports = I4;
  });
  var eg = S((Ere, Zm) => {
    l();
    c();
    p();
    var k4 = /\s/;
    function N4(e) {
      for (var t = e.length; t-- && k4.test(e.charAt(t)); );
      return t;
    }
    Zm.exports = N4;
  });
  var rg = S((xre, tg) => {
    l();
    c();
    p();
    var j4 = eg(),
      M4 = /^\s+/;
    function q4(e) {
      return e && e.slice(0, j4(e) + 1).replace(M4, "");
    }
    tg.exports = q4;
  });
  var ig = S((Bre, og) => {
    l();
    c();
    p();
    var L4 = rg(),
      ng = Ge(),
      $4 = jr(),
      ag = 0 / 0,
      U4 = /^[-+]0x[0-9a-f]+$/i,
      z4 = /^0b[01]+$/i,
      H4 = /^0o[0-7]+$/i,
      G4 = parseInt;
    function W4(e) {
      if (typeof e == "number") return e;
      if ($4(e)) return ag;
      if (ng(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = ng(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = L4(e);
      var r = z4.test(e);
      return r || H4.test(e) ? G4(e.slice(2), r ? 2 : 8) : U4.test(e) ? ag : +e;
    }
    og.exports = W4;
  });
  var lg = S((Pre, sg) => {
    l();
    c();
    p();
    var V4 = Ge(),
      Au = Qm(),
      ug = ig(),
      K4 = "Expected a function",
      Y4 = Math.max,
      J4 = Math.min;
    function X4(e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        s,
        d = 0,
        g = !1,
        E = !1,
        y = !0;
      if (typeof e != "function") throw new TypeError(K4);
      (t = ug(t) || 0),
        V4(r) &&
          ((g = !!r.leading),
          (E = "maxWait" in r),
          (o = E ? Y4(ug(r.maxWait) || 0, t) : o),
          (y = "trailing" in r ? !!r.trailing : y));
      function h(M) {
        var I = n,
          U = a;
        return (n = a = void 0), (d = M), (i = e.apply(U, I)), i;
      }
      function A(M) {
        return (d = M), (u = setTimeout(F, t)), g ? h(M) : i;
      }
      function b(M) {
        var I = M - s,
          U = M - d,
          V = t - I;
        return E ? J4(V, o - U) : V;
      }
      function x(M) {
        var I = M - s,
          U = M - d;
        return s === void 0 || I >= t || I < 0 || (E && U >= o);
      }
      function F() {
        var M = Au();
        if (x(M)) return R(M);
        u = setTimeout(F, b(M));
      }
      function R(M) {
        return (u = void 0), y && n ? h(M) : ((n = a = void 0), i);
      }
      function N() {
        u !== void 0 && clearTimeout(u), (d = 0), (n = s = a = u = void 0);
      }
      function L() {
        return u === void 0 ? i : R(Au());
      }
      function w() {
        var M = Au(),
          I = x(M);
        if (((n = arguments), (a = this), (s = M), I)) {
          if (u === void 0) return A(s);
          if (E) return clearTimeout(u), (u = setTimeout(F, t)), h(s);
        }
        return u === void 0 && (u = setTimeout(F, t)), i;
      }
      return (w.cancel = N), (w.flush = L), w;
    }
    sg.exports = X4;
  });
  var pg = S((Nre, cg) => {
    l();
    c();
    p();
    var Q4 = lg(),
      Z4 = Ge(),
      eP = "Expected a function";
    function tP(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(eP);
      return (
        Z4(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (a = "trailing" in r ? !!r.trailing : a)),
        Q4(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    cg.exports = tP;
  });
  var gg = {};
  Hu(gg, { ColorControl: () => mg, default: () => AP });
  var Me,
    hg,
    rP,
    nP,
    aP,
    oP,
    iP,
    uP,
    sP,
    dg,
    lP,
    cP,
    yg,
    xa,
    pP,
    dP,
    fP,
    Eu,
    hP,
    yP,
    Fa,
    fg,
    gr,
    mP,
    gP,
    Sa,
    bP,
    mg,
    AP,
    bg = Ze(() => {
      l();
      c();
      p();
      ro();
      It();
      Um();
      (Me = he(Jm(), 1)), (hg = he(pg(), 1));
      ao();
      Dr();
      (rP = q.div({ position: "relative", maxWidth: 250 })),
        (nP = q(dn)({ position: "absolute", zIndex: 1, top: 4, left: 4 })),
        (aP = q.div({
          width: 200,
          margin: 5,
          ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
          ".react-colorful__hue": {
            boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)",
          },
          ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
        })),
        (oP = q(Ja)(({ theme: e }) => ({
          fontFamily: e.typography.fonts.base,
        }))),
        (iP = q.div({
          display: "grid",
          gridTemplateColumns: "repeat(9, 16px)",
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (uP = q.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (sP = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (dg = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${sP}, linear-gradient(#fff, #fff)`;
          return m.createElement(uP, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: o },
          });
        }),
        (lP = q(Oe.Input)(({ theme: e }) => ({
          width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: "border-box",
          fontFamily: e.typography.fonts.base,
        }))),
        (cP = q(_e)(({ theme: e }) => ({
          position: "absolute",
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: "border-box",
          cursor: "pointer",
          color: e.input.color,
        }))),
        (yg = ((e) => ((e.RGB = "rgb"), (e.HSL = "hsl"), (e.HEX = "hex"), e))(
          yg || {}
        )),
        (xa = Object.values(yg)),
        (pP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (dP =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (fP =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (Eu = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (hP = /^\s*#?([0-9a-f]{3})\s*$/i),
        (yP = { hex: Mm, rgb: $m, hsl: Lm }),
        (Fa = {
          hex: "transparent",
          rgb: "rgba(0, 0, 0, 0)",
          hsl: "hsla(0, 0%, 0%, 0)",
        }),
        (fg = (e) => {
          let t = e?.match(pP);
          if (!t) return [0, 0, 0, 1];
          let [, r, n, a, o = 1] = t;
          return [r, n, a, o].map(Number);
        }),
        (gr = (e) => {
          if (!e) return;
          let t = !0;
          if (dP.test(e)) {
            let [i, u, s, d] = fg(e),
              [g, E, y] = Me.default.rgb.hsl([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Me.default.rgb.keyword([i, u, s]),
              colorSpace: "rgb",
              rgb: e,
              hsl: `hsla(${g}, ${E}%, ${y}%, ${d})`,
              hex: `#${Me.default.rgb.hex([i, u, s]).toLowerCase()}`,
            };
          }
          if (fP.test(e)) {
            let [i, u, s, d] = fg(e),
              [g, E, y] = Me.default.hsl.rgb([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Me.default.hsl.keyword([i, u, s]),
              colorSpace: "hsl",
              rgb: `rgba(${g}, ${E}, ${y}, ${d})`,
              hsl: e,
              hex: `#${Me.default.hsl.hex([i, u, s]).toLowerCase()}`,
            };
          }
          let r = e.replace("#", ""),
            n = Me.default.keyword.rgb(r) || Me.default.hex.rgb(r),
            a = Me.default.rgb.hsl(n),
            o = e;
          if (
            (/[^#a-f0-9]/i.test(e) ? (o = r) : Eu.test(e) && (o = `#${r}`),
            o.startsWith("#"))
          )
            t = Eu.test(o);
          else
            try {
              Me.default.keyword.hex(o);
            } catch {
              t = !1;
            }
          return {
            valid: t,
            value: o,
            keyword: Me.default.rgb.keyword(n),
            colorSpace: "hex",
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          };
        }),
        (mP = (e, t, r) => {
          if (!e || !t?.valid) return Fa[r];
          if (r !== "hex") return t?.[r] || Fa[r];
          if (!t.hex.startsWith("#"))
            try {
              return `#${Me.default.keyword.hex(t.hex)}`;
            } catch {
              return Fa.hex;
            }
          let n = t.hex.match(hP);
          if (!n) return Eu.test(t.hex) ? t.hex : Fa.hex;
          let [a, o, i] = n[1].split("");
          return `#${a}${a}${o}${o}${i}${i}`;
        }),
        (gP = (e, t) => {
          let [r, n] = oe(e || ""),
            [a, o] = oe(() => gr(r)),
            [i, u] = oe(a?.colorSpace || "hex");
          ge(() => {
            let E = e || "",
              y = gr(E);
            n(E), o(y), u(y?.colorSpace || "hex");
          }, [e]);
          let s = it(() => mP(r, a, i).toLowerCase(), [r, a, i]),
            d = me(
              (E) => {
                let y = gr(E),
                  h = y?.value || E || "";
                n(h),
                  h === "" && (o(void 0), t(void 0)),
                  y && (o(y), u(y.colorSpace), t(y.value));
              },
              [t]
            ),
            g = me(() => {
              let E = xa.indexOf(i) + 1;
              E >= xa.length && (E = 0), u(xa[E]);
              let y = a?.[xa[E]] || "";
              n(y), t(y);
            }, [a, i, t]);
          return {
            value: r,
            realValue: s,
            updateValue: d,
            color: a,
            colorSpace: i,
            cycleColorSpace: g,
          };
        }),
        (Sa = (e) => e.replace(/\s*/, "").toLowerCase()),
        (bP = (e, t, r) => {
          let [n, a] = oe(t?.valid ? [t] : []);
          ge(() => {
            t === void 0 && a([]);
          }, [t]);
          let o = it(
              () =>
                (e || [])
                  .map((u) =>
                    typeof u == "string"
                      ? gr(u)
                      : u.title
                      ? { ...gr(u.color), keyword: u.title }
                      : gr(u.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            i = me(
              (u) => {
                u?.valid &&
                  (o.some((s) => Sa(s[r]) === Sa(u[r])) ||
                    a((s) => s.concat(u)));
              },
              [r, o]
            );
          return { presets: o, addPreset: i };
        }),
        (mg = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: i = !1,
        }) => {
          let u = me((0, hg.default)(r, 200), [r]),
            {
              value: s,
              realValue: d,
              updateValue: g,
              color: E,
              colorSpace: y,
              cycleColorSpace: h,
            } = gP(t, u),
            { presets: A, addPreset: b } = bP(o, E, y),
            x = yP[y];
          return m.createElement(
            rP,
            null,
            m.createElement(
              nP,
              {
                startOpen: i,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(E),
                tooltip: m.createElement(
                  aP,
                  null,
                  m.createElement(x, {
                    color: d === "transparent" ? "#000000" : d,
                    onChange: g,
                    onFocus: n,
                    onBlur: a,
                  }),
                  A.length > 0 &&
                    m.createElement(
                      iP,
                      null,
                      A.map((F, R) =>
                        m.createElement(
                          dn,
                          {
                            key: `${F.value}-${R}`,
                            hasChrome: !1,
                            tooltip: m.createElement(oP, {
                              note: F.keyword || F.value,
                            }),
                          },
                          m.createElement(dg, {
                            value: F[y],
                            active: E && Sa(F[y]) === Sa(E[y]),
                            onClick: () => g(F.value),
                          })
                        )
                      )
                    )
                ),
              },
              m.createElement(dg, { value: d, style: { margin: 4 } })
            ),
            m.createElement(lP, {
              id: Pe(e),
              value: s,
              onChange: (F) => g(F.target.value),
              onFocus: (F) => F.target.select(),
              placeholder: "Choose color...",
            }),
            s ? m.createElement(cP, { icon: "markup", onClick: h }) : null
          );
        }),
        (AP = mg);
    });
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var Ra = "addon-controls",
    Ia = "controls";
  It();
  l();
  c();
  p();
  var $7 = __STORYBOOKAPI__,
    {
      ActiveTabs: U7,
      Consumer: z7,
      ManagerContext: H7,
      Provider: G7,
      addons: Na,
      combineParameters: W7,
      controlOrMetaKey: V7,
      controlOrMetaSymbol: K7,
      eventMatchesShortcut: Y7,
      eventToShortcut: J7,
      isMacLike: X7,
      isShortcutTaken: Q7,
      keyToSymbol: Z7,
      merge: ek,
      mockChannel: tk,
      optionOrAltSymbol: rk,
      shortcutMatchesShortcut: nk,
      shortcutToHumanString: ak,
      types: Yu,
      useAddonState: ok,
      useArgTypes: ja,
      useArgs: Ju,
      useChannel: ik,
      useGlobalTypes: uk,
      useGlobals: Xu,
      useParameter: Ma,
      useSharedState: sk,
      useStoryPrepared: lk,
      useStorybookApi: ck,
      useStorybookState: Qu,
    } = __STORYBOOKAPI__;
  Dr();
  l();
  c();
  p();
  ro();
  It();
  ao();
  Dr();
  l();
  c();
  p();
  l();
  c();
  p();
  function Se() {
    return (
      (Se = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Se.apply(this, arguments)
    );
  }
  l();
  c();
  p();
  function oo(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function tt(e, t) {
    return (
      (tt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      tt(e, t)
    );
  }
  function io(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      tt(e, t);
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function xr(e) {
    return (
      (xr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      xr(e)
    );
  }
  l();
  c();
  p();
  function uo(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function so() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function jt(e, t, r) {
    return (
      so()
        ? (jt = Reflect.construct.bind())
        : (jt = function (a, o, i) {
            var u = [null];
            u.push.apply(u, o);
            var s = Function.bind.apply(a, u),
              d = new s();
            return i && tt(d, i.prototype), d;
          }),
      jt.apply(null, arguments)
    );
  }
  function Fr(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (Fr = function (n) {
        if (n === null || !uo(n)) return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t < "u") {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return jt(n, arguments, xr(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          tt(a, n)
        );
      }),
      Fr(e)
    );
  }
  l();
  c();
  p();
  var Re = (function (e) {
    io(t, e);
    function t(r) {
      var n;
      if (!0)
        n =
          e.call(
            this,
            "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
              r +
              " for more information."
          ) || this;
      else for (var a, o, i; i < a; i++);
      return oo(n);
    }
    return t;
  })(Fr(Error));
  function as(e, t) {
    return e.substr(-t.length) === t;
  }
  var a1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function os(e) {
    if (typeof e != "string") return e;
    var t = e.match(a1);
    return t ? parseFloat(e) : e;
  }
  var o1 = function (t) {
      return function (r, n) {
        n === void 0 && (n = "16px");
        var a = r,
          o = n;
        if (typeof r == "string") {
          if (!as(r, "px")) throw new Re(69, t, r);
          a = os(r);
        }
        if (typeof n == "string") {
          if (!as(n, "px")) throw new Re(70, t, n);
          o = os(n);
        }
        if (typeof a == "string") throw new Re(71, r, t);
        if (typeof o == "string") throw new Re(72, n, t);
        return "" + a / o + t;
      };
    },
    us = o1,
    zN = us("em");
  var HN = us("rem");
  function lo(e) {
    return Math.round(e * 255);
  }
  function i1(e, t, r) {
    return lo(e) + "," + lo(t) + "," + lo(r);
  }
  function Sr(e, t, r, n) {
    if ((n === void 0 && (n = i1), t === 0)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      i = o * (1 - Math.abs((a % 2) - 1)),
      u = 0,
      s = 0,
      d = 0;
    a >= 0 && a < 1
      ? ((u = o), (s = i))
      : a >= 1 && a < 2
      ? ((u = i), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (d = i))
      : a >= 3 && a < 4
      ? ((s = i), (d = o))
      : a >= 4 && a < 5
      ? ((u = i), (d = o))
      : a >= 5 && a < 6 && ((u = o), (d = i));
    var g = r - o / 2,
      E = u + g,
      y = s + g,
      h = d + g;
    return n(E, y, h);
  }
  var is = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  };
  function u1(e) {
    if (typeof e != "string") return e;
    var t = e.toLowerCase();
    return is[t] ? "#" + is[t] : e;
  }
  var s1 = /^#[a-fA-F0-9]{6}$/,
    l1 = /^#[a-fA-F0-9]{8}$/,
    c1 = /^#[a-fA-F0-9]{3}$/,
    p1 = /^#[a-fA-F0-9]{4}$/,
    co = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    d1 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    f1 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    h1 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function Mt(e) {
    if (typeof e != "string") throw new Re(3);
    var t = u1(e);
    if (t.match(s1))
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
      };
    if (t.match(l1)) {
      var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(c1))
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
      };
    if (t.match(p1)) {
      var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var a = co.exec(t);
    if (a)
      return {
        red: parseInt("" + a[1], 10),
        green: parseInt("" + a[2], 10),
        blue: parseInt("" + a[3], 10),
      };
    var o = d1.exec(t.substring(0, 50));
    if (o)
      return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha:
          parseFloat("" + o[4]) > 1
            ? parseFloat("" + o[4]) / 100
            : parseFloat("" + o[4]),
      };
    var i = f1.exec(t);
    if (i) {
      var u = parseInt("" + i[1], 10),
        s = parseInt("" + i[2], 10) / 100,
        d = parseInt("" + i[3], 10) / 100,
        g = "rgb(" + Sr(u, s, d) + ")",
        E = co.exec(g);
      if (!E) throw new Re(4, t, g);
      return {
        red: parseInt("" + E[1], 10),
        green: parseInt("" + E[2], 10),
        blue: parseInt("" + E[3], 10),
      };
    }
    var y = h1.exec(t.substring(0, 50));
    if (y) {
      var h = parseInt("" + y[1], 10),
        A = parseInt("" + y[2], 10) / 100,
        b = parseInt("" + y[3], 10) / 100,
        x = "rgb(" + Sr(h, A, b) + ")",
        F = co.exec(x);
      if (!F) throw new Re(4, t, x);
      return {
        red: parseInt("" + F[1], 10),
        green: parseInt("" + F[2], 10),
        blue: parseInt("" + F[3], 10),
        alpha:
          parseFloat("" + y[4]) > 1
            ? parseFloat("" + y[4]) / 100
            : parseFloat("" + y[4]),
      };
    }
    throw new Re(5);
  }
  function y1(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      i = (a + o) / 2;
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i };
    var u,
      s = a - o,
      d = i > 0.5 ? s / (2 - a - o) : s / (a + o);
    switch (a) {
      case t:
        u = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        u = (n - t) / s + 2;
        break;
      default:
        u = (t - r) / s + 4;
        break;
    }
    return (
      (u *= 60),
      e.alpha !== void 0
        ? { hue: u, saturation: d, lightness: i, alpha: e.alpha }
        : { hue: u, saturation: d, lightness: i }
    );
  }
  function ut(e) {
    return y1(Mt(e));
  }
  var m1 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? "#" + t[1] + t[3] + t[5]
        : t;
    },
    fo = m1;
  function vt(e) {
    var t = e.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  function po(e) {
    return vt(Math.round(e * 255));
  }
  function g1(e, t, r) {
    return fo("#" + po(e) + po(t) + po(r));
  }
  function fn(e, t, r) {
    return Sr(e, t, r, g1);
  }
  function b1(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return fn(e, t, r);
    if (typeof e == "object" && t === void 0 && r === void 0)
      return fn(e.hue, e.saturation, e.lightness);
    throw new Re(1);
  }
  function A1(e, t, r, n) {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1 ? fn(e, t, r) : "rgba(" + Sr(e, t, r) + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? fn(e.hue, e.saturation, e.lightness)
        : "rgba(" + Sr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
    throw new Re(2);
  }
  function ho(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return fo("#" + vt(e) + vt(t) + vt(r));
    if (typeof e == "object" && t === void 0 && r === void 0)
      return fo("#" + vt(e.red) + vt(e.green) + vt(e.blue));
    throw new Re(6);
  }
  function ze(e, t, r, n) {
    if (typeof e == "string" && typeof t == "number") {
      var a = Mt(e);
      return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
    } else {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof r == "number" &&
        typeof n == "number"
      )
        return n >= 1
          ? ho(e, t, r)
          : "rgba(" + e + "," + t + "," + r + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? ho(e.red, e.green, e.blue)
          : "rgba(" +
              e.red +
              "," +
              e.green +
              "," +
              e.blue +
              "," +
              e.alpha +
              ")";
    }
    throw new Re(7);
  }
  var E1 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    v1 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        typeof t.alpha == "number"
      );
    },
    D1 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    C1 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        typeof t.alpha == "number"
      );
    };
  function st(e) {
    if (typeof e != "object") throw new Re(8);
    if (v1(e)) return ze(e);
    if (E1(e)) return ho(e);
    if (C1(e)) return A1(e);
    if (D1(e)) return b1(e);
    throw new Re(8);
  }
  function ss(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : ss(e, t, a);
    };
  }
  function Ne(e) {
    return ss(e, e.length, []);
  }
  function x1(e, t) {
    if (t === "transparent") return t;
    var r = ut(t);
    return st(Se({}, r, { hue: r.hue + parseFloat(e) }));
  }
  var GN = Ne(x1);
  function qt(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function F1(e, t) {
    if (t === "transparent") return t;
    var r = ut(t);
    return st(Se({}, r, { lightness: qt(0, 1, r.lightness - parseFloat(e)) }));
  }
  var S1 = Ne(F1),
    He = S1;
  function w1(e, t) {
    if (t === "transparent") return t;
    var r = ut(t);
    return st(
      Se({}, r, { saturation: qt(0, 1, r.saturation - parseFloat(e)) })
    );
  }
  var WN = Ne(w1);
  function B1(e, t) {
    if (t === "transparent") return t;
    var r = ut(t);
    return st(Se({}, r, { lightness: qt(0, 1, r.lightness + parseFloat(e)) }));
  }
  var T1 = Ne(B1),
    lt = T1;
  function O1(e, t, r) {
    if (t === "transparent") return r;
    if (r === "transparent") return t;
    if (e === 0) return r;
    var n = Mt(t),
      a = Se({}, n, { alpha: typeof n.alpha == "number" ? n.alpha : 1 }),
      o = Mt(r),
      i = Se({}, o, { alpha: typeof o.alpha == "number" ? o.alpha : 1 }),
      u = a.alpha - i.alpha,
      s = parseFloat(e) * 2 - 1,
      d = s * u === -1 ? s : s + u,
      g = 1 + s * u,
      E = (d / g + 1) / 2,
      y = 1 - E,
      h = {
        red: Math.floor(a.red * E + i.red * y),
        green: Math.floor(a.green * E + i.green * y),
        blue: Math.floor(a.blue * E + i.blue * y),
        alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
      };
    return ze(h);
  }
  var _1 = Ne(O1),
    ls = _1;
  function P1(e, t) {
    if (t === "transparent") return t;
    var r = Mt(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Se({}, r, { alpha: qt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return ze(a);
  }
  var R1 = Ne(P1),
    wr = R1;
  function I1(e, t) {
    if (t === "transparent") return t;
    var r = ut(t);
    return st(
      Se({}, r, { saturation: qt(0, 1, r.saturation + parseFloat(e)) })
    );
  }
  var VN = Ne(I1);
  function k1(e, t) {
    return t === "transparent" ? t : st(Se({}, ut(t), { hue: parseFloat(e) }));
  }
  var KN = Ne(k1);
  function N1(e, t) {
    return t === "transparent"
      ? t
      : st(Se({}, ut(t), { lightness: parseFloat(e) }));
  }
  var YN = Ne(N1);
  function j1(e, t) {
    return t === "transparent"
      ? t
      : st(Se({}, ut(t), { saturation: parseFloat(e) }));
  }
  var JN = Ne(j1);
  function M1(e, t) {
    return t === "transparent" ? t : ls(parseFloat(e), "rgb(0, 0, 0)", t);
  }
  var XN = Ne(M1);
  function q1(e, t) {
    return t === "transparent" ? t : ls(parseFloat(e), "rgb(255, 255, 255)", t);
  }
  var QN = Ne(q1);
  function L1(e, t) {
    if (t === "transparent") return t;
    var r = Mt(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Se({}, r, {
        alpha: qt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      });
    return ze(a);
  }
  var $1 = Ne(L1),
    de = $1;
  l();
  c();
  p();
  var ue = (() => {
    let e;
    return (
      typeof window < "u"
        ? (e = window)
        : typeof globalThis < "u"
        ? (e = globalThis)
        : typeof window < "u"
        ? (e = window)
        : typeof self < "u"
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  var Rg = he(Xo(), 1);
  l();
  c();
  p();
  var PF = Object.create,
    Cd = Object.defineProperty,
    RF = Object.getOwnPropertyDescriptor,
    IF = Object.getOwnPropertyNames,
    kF = Object.getPrototypeOf,
    NF = Object.prototype.hasOwnProperty,
    jF = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    MF = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of IF(t))
          !NF.call(e, a) &&
            a !== r &&
            Cd(e, a, {
              get: () => t[a],
              enumerable: !(n = RF(t, a)) || n.enumerable,
            });
      return e;
    },
    qF = (e, t, r) => (
      (r = e != null ? PF(kF(e)) : {}),
      MF(
        t || !e || !e.__esModule
          ? Cd(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    LF = jF((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
                }
              : Object.keys;
          return function (a, o) {
            return (function i(u, s, d) {
              var g,
                E,
                y,
                h = t.call(u),
                A = t.call(s);
              if (u === s) return !0;
              if (u == null || s == null) return !1;
              if (d.indexOf(u) > -1 && d.indexOf(s) > -1) return !0;
              if (
                (d.push(u, s),
                h != A ||
                  ((g = n(u)),
                  (E = n(s)),
                  g.length != E.length ||
                    g.some(function (b) {
                      return !i(u[b], s[b], d);
                    })))
              )
                return !1;
              switch (h.slice(8, -1)) {
                case "Symbol":
                  return u.valueOf() == s.valueOf();
                case "Date":
                case "Number":
                  return +u == +s || (+u != +u && +s != +s);
                case "RegExp":
                case "Function":
                case "String":
                case "Boolean":
                  return "" + u == "" + s;
                case "Set":
                case "Map":
                  (g = u.entries()), (E = s.entries());
                  do if (!i((y = g.next()).value, E.next().value, d)) return !1;
                  while (!y.done);
                  return !0;
                case "ArrayBuffer":
                  (u = new Uint8Array(u)), (s = new Uint8Array(s));
                case "DataView":
                  (u = new Uint8Array(u.buffer)),
                    (s = new Uint8Array(s.buffer));
                case "Float32Array":
                case "Float64Array":
                case "Int8Array":
                case "Int16Array":
                case "Int32Array":
                case "Uint8Array":
                case "Uint16Array":
                case "Uint32Array":
                case "Uint8ClampedArray":
                case "Arguments":
                case "Array":
                  if (u.length != s.length) return !1;
                  for (y = 0; y < u.length; y++)
                    if (
                      (y in u || y in s) &&
                      (y in u != y in s || !i(u[y], s[y], d))
                    )
                      return !1;
                  return !0;
                case "Object":
                  return i(r(u), r(s), d);
                default:
                  return !1;
              }
            })(a, o, []);
          };
        })());
    });
  var Dd = qF(LF()),
    xd = (e) => e.map((t) => typeof t < "u").filter(Boolean).length,
    $F = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e;
      if (xd([r, n, a, o]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`
        );
      if (typeof n < "u") return (0, Dd.isEqual)(t, n);
      if (typeof a < "u") return !(0, Dd.isEqual)(t, a);
      if (typeof r < "u") {
        let i = typeof t < "u";
        return r ? i : !i;
      }
      return typeof o > "u" || o ? !!t : !t;
    },
    Qo = (e, t, r) => {
      if (!e.if) return !0;
      let { arg: n, global: a } = e.if;
      if (xd([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
        );
      let o = n ? t[n] : r[a];
      return $F(e.if, o);
    };
  l();
  c();
  p();
  var wW = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: be,
      logger: $e,
      once: Nn,
      pretty: UF,
    } = __STORYBOOKCLIENTLOGGER__;
  l();
  c();
  p();
  It();
  function Ft() {
    return (
      (Ft =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      Ft.apply(this, arguments)
    );
  }
  var zF = ["children", "options"],
    Fd = [
      "allowFullScreen",
      "allowTransparency",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "cellPadding",
      "cellSpacing",
      "charSet",
      "className",
      "classId",
      "colSpan",
      "contentEditable",
      "contextMenu",
      "crossOrigin",
      "encType",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "hrefLang",
      "inputMode",
      "keyParams",
      "keyType",
      "marginHeight",
      "marginWidth",
      "maxLength",
      "mediaGroup",
      "minLength",
      "noValidate",
      "radioGroup",
      "readOnly",
      "rowSpan",
      "spellCheck",
      "srcDoc",
      "srcLang",
      "srcSet",
      "tabIndex",
      "useMap",
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
    Sd = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      nbsp: "\xA0",
      quot: "\u201C",
    },
    HF = ["style", "script"],
    GF =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    WF = /mailto:/i,
    VF = /\n{2,}$/,
    Pd = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    KF = /^ *> ?/gm,
    YF = /^ {2,}\n/,
    JF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    Rd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    Id = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    XF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    QF = /^(?:\n *)*\n/,
    ZF = /\r\n?/g,
    eS = /^\[\^([^\]]+)](:.*)\n/,
    tS = /^\[\^([^\]]+)]/,
    rS = /\f/g,
    nS = /^\s*?\[(x|\s)\]/,
    kd = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    Nd = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    ni =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    aS = /&([a-zA-Z]+);/g,
    jd = /^<!--[\s\S]*?(?:-->)/,
    oS = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    ai =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    iS = /^\{.*\}$/,
    uS = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    sS = /^<([^ >]+@[^ >]+)>/,
    lS = /^<([^ >]+:\/[^ >]+)>/,
    cS = /-([a-z])?/gi,
    Md = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    pS = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    dS = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    fS = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    hS = /(\[|\])/g,
    yS = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    mS = /\t/g,
    gS = /^ *\| */,
    bS = /(^ *\||\| *$)/g,
    AS = / *$/,
    ES = /^ *:-+: *$/,
    vS = /^ *:-+ *$/,
    DS = /^ *-+: *$/,
    CS =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    xS =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    FS = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    SS = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    wS = /^\\([^0-9A-Za-z\s])/,
    BS =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    TS = /^\n+/,
    OS = /^([ \t]*)/,
    _S = /\\([^\\])/g,
    wd = / *\n+$/,
    PS = /(?:^|\n)( *)$/,
    oi = "(?:\\d+\\.)",
    ii = "(?:[*+-])";
  function qd(e) {
    return "( *)(" + (e === 1 ? oi : ii) + ") +";
  }
  var Ld = qd(1),
    $d = qd(2);
  function Ud(e) {
    return new RegExp("^" + (e === 1 ? Ld : $d));
  }
  var RS = Ud(1),
    IS = Ud(2);
  function zd(e) {
    return new RegExp(
      "^" +
        (e === 1 ? Ld : $d) +
        "[^\\n]*(?:\\n(?!\\1" +
        (e === 1 ? oi : ii) +
        " )[^\\n]*)*(\\n|$)",
      "gm"
    );
  }
  var Hd = zd(1),
    Gd = zd(2);
  function Wd(e) {
    let t = e === 1 ? oi : ii;
    return new RegExp(
      "^( *)(" +
        t +
        ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
        t +
        " (?!" +
        t +
        " ))\\n*|\\s*\\n*$)"
    );
  }
  var Vd = Wd(1),
    Kd = Wd(2);
  function Bd(e, t) {
    let r = t === 1,
      n = r ? Vd : Kd,
      a = r ? Hd : Gd,
      o = r ? RS : IS;
    return {
      t(i, u, s) {
        let d = PS.exec(s);
        return d && (u.o || (!u._ && !u.u)) ? n.exec((i = d[1] + i)) : null;
      },
      i: ee.HIGH,
      l(i, u, s) {
        let d = r ? +i[2] : void 0,
          g = i[0]
            .replace(
              VF,
              `
`
            )
            .match(a),
          E = !1;
        return {
          p: g.map(function (y, h) {
            let A = o.exec(y)[0].length,
              b = new RegExp("^ {1," + A + "}", "gm"),
              x = y.replace(b, "").replace(o, ""),
              F = h === g.length - 1,
              R =
                x.indexOf(`

`) !== -1 ||
                (F && E);
            E = R;
            let N = s._,
              L = s.o,
              w;
            (s.o = !0),
              R
                ? ((s._ = !1),
                  (w = x.replace(
                    wd,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(wd, "")));
            let M = u(w, s);
            return (s._ = N), (s.o = L), M;
          }),
          m: r,
          g: d,
        };
      },
      h: (i, u, s) =>
        e(
          i.m ? "ol" : "ul",
          { key: s.k, start: i.g },
          i.p.map(function (d, g) {
            return e("li", { key: g }, u(d, s));
          })
        ),
    };
  }
  var kS = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    NS = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    Yd = [Pd, Rd, Id, kd, Nd, jd, Md, Hd, Vd, Gd, Kd],
    jS = [...Yd, /^[^\n]+(?:  \n|\n{2,})/, ni, ai];
  function MS(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
      .replace(/[çÇ]/g, "c")
      .replace(/[ðÐ]/g, "d")
      .replace(/[ÈÉÊËéèêë]/g, "e")
      .replace(/[ÏïÎîÍíÌì]/g, "i")
      .replace(/[Ññ]/g, "n")
      .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
      .replace(/[ÜüÛûÚúÙù]/g, "u")
      .replace(/[ŸÿÝý]/g, "y")
      .replace(/[^a-z0-9- ]/gi, "")
      .replace(/ /gi, "-")
      .toLowerCase();
  }
  function qS(e) {
    return DS.test(e)
      ? "right"
      : ES.test(e)
      ? "center"
      : vS.test(e)
      ? "left"
      : null;
  }
  function Td(e, t, r) {
    let n = r.v;
    r.v = !0;
    let a = t(e.trim(), r);
    r.v = n;
    let o = [[]];
    return (
      a.forEach(function (i, u) {
        i.type === "tableSeparator"
          ? u !== 0 && u !== a.length - 1 && o.push([])
          : (i.type !== "text" ||
              (a[u + 1] != null && a[u + 1].type !== "tableSeparator") ||
              (i.$ = i.$.replace(AS, "")),
            o[o.length - 1].push(i));
      }),
      o
    );
  }
  function LS(e, t, r) {
    r._ = !0;
    let n = Td(e[1], t, r),
      a = e[2].replace(bS, "").split("|").map(qS),
      o = (function (i, u, s) {
        return i
          .trim()
          .split(
            `
`
          )
          .map(function (d) {
            return Td(d, u, s);
          });
      })(e[3], t, r);
    return (r._ = !1), { S: a, A: o, L: n, type: "table" };
  }
  function Od(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] };
  }
  function pt(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null;
    };
  }
  function dt(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null;
    };
  }
  function nt(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t);
    };
  }
  function qr(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function $S(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = "";
    e.split(
      `
`
    ).every(
      (o) =>
        !Yd.some((i) => i.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    );
    let a = n.trimEnd();
    return a == "" ? null : [n, a];
  }
  function Yt(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, "")
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null;
    } catch {
      return null;
    }
    return e;
  }
  function _d(e) {
    return e.replace(_S, "$1");
  }
  function jn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !0), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function US(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !1), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function zS(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r
      )
    );
  }
  var Zo = (e, t, r) => ({ $: jn(t, e[1], r) });
  function ei() {
    return {};
  }
  function ti() {
    return null;
  }
  function HS(...e) {
    return e.filter(Boolean).join(" ");
  }
  function ri(e, t, r) {
    let n = e,
      a = t.split(".");
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  var ee;
  function GS(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || MS),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? Ft({}, Sd, t.namedCodesToUnicode)
        : Sd);
    let r = t.createElement || ka;
    function n(h, A, ...b) {
      let x = ri(t.overrides, `${h}.props`, {});
      return r(
        (function (F, R) {
          let N = ri(R, F);
          return N
            ? typeof N == "function" || (typeof N == "object" && "render" in N)
              ? N
              : ri(R, `${F}.component`, F)
            : F;
        })(h, t.overrides),
        Ft({}, A, x, { className: HS(A?.className, x.className) || void 0 }),
        ...b
      );
    }
    function a(h) {
      let A = !1;
      t.forceInline ? (A = !0) : t.forceBlock || (A = yS.test(h) === !1);
      let b = g(
        d(
          A
            ? h
            : `${h.trimEnd().replace(TS, "")}

`,
          { _: A }
        )
      );
      for (; typeof b[b.length - 1] == "string" && !b[b.length - 1].trim(); )
        b.pop();
      if (t.wrapper === null) return b;
      let x = t.wrapper || (A ? "span" : "div"),
        F;
      if (b.length > 1 || t.forceWrapper) F = b;
      else {
        if (b.length === 1)
          return (
            (F = b[0]),
            typeof F == "string" ? n("span", { key: "outer" }, F) : F
          );
        F = null;
      }
      return ka(x, { key: "outer" }, F);
    }
    function o(h) {
      let A = h.match(GF);
      return A
        ? A.reduce(function (b, x, F) {
            let R = x.indexOf("=");
            if (R !== -1) {
              let N = (function (I) {
                  return (
                    I.indexOf("-") !== -1 &&
                      I.match(oS) === null &&
                      (I = I.replace(cS, function (U, V) {
                        return V.toUpperCase();
                      })),
                    I
                  );
                })(x.slice(0, R)).trim(),
                L = (function (I) {
                  let U = I[0];
                  return (U === '"' || U === "'") &&
                    I.length >= 2 &&
                    I[I.length - 1] === U
                    ? I.slice(1, -1)
                    : I;
                })(x.slice(R + 1).trim()),
                w = Fd[N] || N,
                M = (b[w] = (function (I, U) {
                  return I === "style"
                    ? U.split(/;\s?/).reduce(function (V, z) {
                        let ae = z.slice(0, z.indexOf(":"));
                        return (
                          (V[
                            ae.replace(/(-[a-z])/g, (Q) => Q[1].toUpperCase())
                          ] = z.slice(ae.length + 1).trim()),
                          V
                        );
                      }, {})
                    : I === "href"
                    ? Yt(U)
                    : (U.match(iS) && (U = U.slice(1, U.length - 1)),
                      U === "true" || (U !== "false" && U));
                })(N, L));
              typeof M == "string" &&
                (ni.test(M) || ai.test(M)) &&
                (b[w] = ye(a(M.trim()), { key: F }));
            } else x !== "style" && (b[Fd[x] || x] = !0);
            return b;
          }, {})
        : null;
    }
    let i = [],
      u = {},
      s = {
        blockQuote: {
          t: nt(Pd),
          i: ee.HIGH,
          l: (h, A, b) => ({ $: A(h[0].replace(KF, ""), b) }),
          h: (h, A, b) => n("blockquote", { key: b.k }, A(h.$, b)),
        },
        breakLine: {
          t: qr(YF),
          i: ee.HIGH,
          l: ei,
          h: (h, A, b) => n("br", { key: b.k }),
        },
        breakThematic: {
          t: nt(JF),
          i: ee.HIGH,
          l: ei,
          h: (h, A, b) => n("hr", { key: b.k }),
        },
        codeBlock: {
          t: nt(Id),
          i: ee.MAX,
          l: (h) => ({
            $: h[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
            M: void 0,
          }),
          h: (h, A, b) =>
            n(
              "pre",
              { key: b.k },
              n(
                "code",
                Ft({}, h.I, { className: h.M ? `lang-${h.M}` : "" }),
                h.$
              )
            ),
        },
        codeFenced: {
          t: nt(Rd),
          i: ee.MAX,
          l: (h) => ({
            I: o(h[3] || ""),
            $: h[4],
            M: h[2] || void 0,
            type: "codeBlock",
          }),
        },
        codeInline: {
          t: dt(XF),
          i: ee.LOW,
          l: (h) => ({ $: h[2] }),
          h: (h, A, b) => n("code", { key: b.k }, h.$),
        },
        footnote: {
          t: nt(eS),
          i: ee.MAX,
          l: (h) => (i.push({ O: h[2], B: h[1] }), {}),
          h: ti,
        },
        footnoteReference: {
          t: pt(tS),
          i: ee.HIGH,
          l: (h) => ({ $: h[1], R: `#${t.slugify(h[1])}` }),
          h: (h, A, b) =>
            n("a", { key: b.k, href: Yt(h.R) }, n("sup", { key: b.k }, h.$)),
        },
        gfmTask: {
          t: pt(nS),
          i: ee.HIGH,
          l: (h) => ({ T: h[1].toLowerCase() === "x" }),
          h: (h, A, b) =>
            n("input", {
              checked: h.T,
              key: b.k,
              readOnly: !0,
              type: "checkbox",
            }),
        },
        heading: {
          t: nt(kd),
          i: ee.HIGH,
          l: (h, A, b) => ({
            $: jn(A, h[2], b),
            j: t.slugify(h[2]),
            C: h[1].length,
          }),
          h: (h, A, b) => n(`h${h.C}`, { id: h.j, key: b.k }, A(h.$, b)),
        },
        headingSetext: {
          t: nt(Nd),
          i: ee.MAX,
          l: (h, A, b) => ({
            $: jn(A, h[1], b),
            C: h[2] === "=" ? 1 : 2,
            type: "heading",
          }),
        },
        htmlComment: { t: qr(jd), i: ee.HIGH, l: () => ({}), h: ti },
        image: {
          t: dt(NS),
          i: ee.HIGH,
          l: (h) => ({ D: h[1], R: _d(h[2]), N: h[3] }),
          h: (h, A, b) =>
            n("img", {
              key: b.k,
              alt: h.D || void 0,
              title: h.N || void 0,
              src: Yt(h.R),
            }),
        },
        link: {
          t: pt(kS),
          i: ee.LOW,
          l: (h, A, b) => ({ $: US(A, h[1], b), R: _d(h[2]), N: h[3] }),
          h: (h, A, b) =>
            n("a", { key: b.k, href: Yt(h.R), title: h.N }, A(h.$, b)),
        },
        linkAngleBraceStyleDetector: {
          t: pt(lS),
          i: ee.MAX,
          l: (h) => ({ $: [{ $: h[1], type: "text" }], R: h[1], type: "link" }),
        },
        linkBareUrlDetector: {
          t: (h, A) => (A.Z ? null : pt(uS)(h, A)),
          i: ee.MAX,
          l: (h) => ({
            $: [{ $: h[1], type: "text" }],
            R: h[1],
            N: void 0,
            type: "link",
          }),
        },
        linkMailtoDetector: {
          t: pt(sS),
          i: ee.MAX,
          l(h) {
            let A = h[1],
              b = h[1];
            return (
              WF.test(b) || (b = "mailto:" + b),
              {
                $: [{ $: A.replace("mailto:", ""), type: "text" }],
                R: b,
                type: "link",
              }
            );
          },
        },
        orderedList: Bd(n, 1),
        unorderedList: Bd(n, 2),
        newlineCoalescer: {
          t: nt(QF),
          i: ee.LOW,
          l: ei,
          h: () => `
`,
        },
        paragraph: {
          t: $S,
          i: ee.LOW,
          l: Zo,
          h: (h, A, b) => n("p", { key: b.k }, A(h.$, b)),
        },
        ref: {
          t: pt(pS),
          i: ee.MAX,
          l: (h) => ((u[h[1]] = { R: h[2], N: h[4] }), {}),
          h: ti,
        },
        refImage: {
          t: dt(dS),
          i: ee.MAX,
          l: (h) => ({ D: h[1] || void 0, F: h[2] }),
          h: (h, A, b) =>
            n("img", {
              key: b.k,
              alt: h.D,
              src: Yt(u[h.F].R),
              title: u[h.F].N,
            }),
        },
        refLink: {
          t: pt(fS),
          i: ee.MAX,
          l: (h, A, b) => ({
            $: A(h[1], b),
            P: A(h[0].replace(hS, "\\$1"), b),
            F: h[2],
          }),
          h: (h, A, b) =>
            u[h.F]
              ? n(
                  "a",
                  { key: b.k, href: Yt(u[h.F].R), title: u[h.F].N },
                  A(h.$, b)
                )
              : n("span", { key: b.k }, A(h.P, b)),
        },
        table: {
          t: nt(Md),
          i: ee.HIGH,
          l: LS,
          h: (h, A, b) =>
            n(
              "table",
              { key: b.k },
              n(
                "thead",
                null,
                n(
                  "tr",
                  null,
                  h.L.map(function (x, F) {
                    return n("th", { key: F, style: Od(h, F) }, A(x, b));
                  })
                )
              ),
              n(
                "tbody",
                null,
                h.A.map(function (x, F) {
                  return n(
                    "tr",
                    { key: F },
                    x.map(function (R, N) {
                      return n("td", { key: N, style: Od(h, N) }, A(R, b));
                    })
                  );
                })
              )
            ),
        },
        tableSeparator: {
          t: function (h, A) {
            return A.v ? gS.exec(h) : null;
          },
          i: ee.HIGH,
          l: function () {
            return { type: "tableSeparator" };
          },
          h: () => " | ",
        },
        text: {
          t: qr(BS),
          i: ee.MIN,
          l: (h) => ({
            $: h[0].replace(aS, (A, b) =>
              t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : A
            ),
          }),
          h: (h) => h.$,
        },
        textBolded: {
          t: dt(CS),
          i: ee.MED,
          l: (h, A, b) => ({ $: A(h[2], b) }),
          h: (h, A, b) => n("strong", { key: b.k }, A(h.$, b)),
        },
        textEmphasized: {
          t: dt(xS),
          i: ee.LOW,
          l: (h, A, b) => ({ $: A(h[2], b) }),
          h: (h, A, b) => n("em", { key: b.k }, A(h.$, b)),
        },
        textEscaped: {
          t: dt(wS),
          i: ee.HIGH,
          l: (h) => ({ $: h[1], type: "text" }),
        },
        textMarked: {
          t: dt(FS),
          i: ee.LOW,
          l: Zo,
          h: (h, A, b) => n("mark", { key: b.k }, A(h.$, b)),
        },
        textStrikethroughed: {
          t: dt(SS),
          i: ee.LOW,
          l: Zo,
          h: (h, A, b) => n("del", { key: b.k }, A(h.$, b)),
        },
      };
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: qr(ni),
        i: ee.HIGH,
        l(h, A, b) {
          let [, x] = h[3].match(OS),
            F = new RegExp(`^${x}`, "gm"),
            R = h[3].replace(F, ""),
            N = ((L = R), jS.some((U) => U.test(L)) ? zS : jn);
          var L;
          let w = h[1].toLowerCase(),
            M = HF.indexOf(w) !== -1;
          b.Z = b.Z || w === "a";
          let I = M ? h[3] : N(A, R, b);
          return (b.Z = !1), { I: o(h[2]), $: I, G: M, H: M ? w : h[1] };
        },
        h: (h, A, b) => n(h.H, Ft({ key: b.k }, h.I), h.G ? h.$ : A(h.$, b)),
      }),
      (s.htmlSelfClosing = {
        t: qr(ai),
        i: ee.HIGH,
        l: (h) => ({ I: o(h[2] || ""), H: h[1] }),
        h: (h, A, b) => n(h.H, Ft({}, h.I, { key: b.k })),
      }));
    let d = (function (h) {
        let A = Object.keys(h);
        function b(x, F) {
          let R = [],
            N = "";
          for (; x; ) {
            let L = 0;
            for (; L < A.length; ) {
              let w = A[L],
                M = h[w],
                I = M.t(x, F, N);
              if (I) {
                let U = I[0];
                x = x.substring(U.length);
                let V = M.l(I, b, F);
                V.type == null && (V.type = w), R.push(V), (N = U);
                break;
              }
              L++;
            }
          }
          return R;
        }
        return (
          A.sort(function (x, F) {
            let R = h[x].i,
              N = h[F].i;
            return R !== N ? R - N : x < F ? -1 : 1;
          }),
          function (x, F) {
            return b(
              (function (R) {
                return R.replace(
                  ZF,
                  `
`
                )
                  .replace(rS, "")
                  .replace(mS, "    ");
              })(x),
              F
            );
          }
        );
      })(s),
      g =
        ((E = (function (h) {
          return function (A, b, x) {
            return h[A.type].h(A, b, x);
          };
        })(s)),
        function h(A, b = {}) {
          if (Array.isArray(A)) {
            let x = b.k,
              F = [],
              R = !1;
            for (let N = 0; N < A.length; N++) {
              b.k = N;
              let L = h(A[N], b),
                w = typeof L == "string";
              w && R ? (F[F.length - 1] += L) : L !== null && F.push(L),
                (R = w);
            }
            return (b.k = x), F;
          }
          return E(A, h, b);
        });
    var E;
    let y = a(e);
    return i.length
      ? n(
          "div",
          null,
          y,
          n(
            "footer",
            { key: "footer" },
            i.map(function (h) {
              return n(
                "div",
                { id: t.slugify(h.B), key: h.B },
                h.B,
                g(d(h.O, { _: !0 }))
              );
            })
          )
        )
      : y;
  }
  (function (e) {
    (e[(e.MAX = 0)] = "MAX"),
      (e[(e.HIGH = 1)] = "HIGH"),
      (e[(e.MED = 2)] = "MED"),
      (e[(e.LOW = 3)] = "LOW"),
      (e[(e.MIN = 4)] = "MIN");
  })(ee || (ee = {}));
  var ui = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {};
        var i,
          u,
          s = {},
          d = Object.keys(a);
        for (u = 0; u < d.length; u++)
          o.indexOf((i = d[u])) >= 0 || (s[i] = a[i]);
        return s;
      })(e, zF);
    return ye(GS(t, r), n);
  };
  var Ig = he(Mn(), 1),
    kg = he(gf(), 1),
    Ng = he(D0(), 1);
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var lY = __STORYBOOKCHANNELS__,
    { Channel: $n } = __STORYBOOKCHANNELS__;
  l();
  c();
  p();
  var hY = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: yY,
      CONFIG_ERROR: j3,
      CURRENT_STORY_WAS_SET: M3,
      DOCS_PREPARED: q3,
      DOCS_RENDERED: L3,
      FORCE_REMOUNT: $3,
      FORCE_RE_RENDER: ci,
      GLOBALS_UPDATED: Un,
      IGNORED_EXCEPTION: mY,
      NAVIGATE_URL: C0,
      PLAY_FUNCTION_THREW_EXCEPTION: U3,
      PRELOAD_ENTRIES: z3,
      PREVIEW_BUILDER_PROGRESS: gY,
      PREVIEW_KEYDOWN: H3,
      REGISTER_SUBSCRIPTION: bY,
      RESET_STORY_ARGS: zn,
      SELECT_STORY: AY,
      SET_CONFIG: EY,
      SET_CURRENT_STORY: G3,
      SET_GLOBALS: W3,
      SET_INDEX: V3,
      SET_STORIES: vY,
      SHARED_STATE_CHANGED: K3,
      SHARED_STATE_SET: Y3,
      STORIES_COLLAPSE_ALL: DY,
      STORIES_EXPAND_ALL: CY,
      STORY_ARGS_UPDATED: Hn,
      STORY_CHANGED: J3,
      STORY_ERRORED: X3,
      STORY_INDEX_INVALIDATED: Q3,
      STORY_MISSING: Z3,
      STORY_PREPARED: eB,
      STORY_RENDERED: x0,
      STORY_RENDER_PHASE_CHANGED: tB,
      STORY_SPECIFIED: rB,
      STORY_THREW_EXCEPTION: nB,
      STORY_UNCHANGED: aB,
      UPDATE_GLOBALS: F0,
      UPDATE_QUERY_PARAMS: oB,
      UPDATE_STORY_ARGS: Gn,
    } = __STORYBOOKCOREEVENTS__;
  var uB = Object.create,
    S0 = Object.defineProperty,
    sB = Object.getOwnPropertyDescriptor,
    w0 = Object.getOwnPropertyNames,
    lB = Object.getPrototypeOf,
    cB = Object.prototype.hasOwnProperty,
    Ve = (e, t) =>
      function () {
        return (
          t || (0, e[w0(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    pB = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of w0(t))
          !cB.call(e, a) &&
            a !== r &&
            S0(e, a, {
              get: () => t[a],
              enumerable: !(n = sB(t, a)) || n.enumerable,
            });
      return e;
    },
    B0 = (e, t, r) => (
      (r = e != null ? uB(lB(e)) : {}),
      pB(
        t || !e || !e.__esModule
          ? S0(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    );
  function T0() {
    let e = { setHandler: () => {}, send: () => {} };
    return new $n({ transport: e });
  }
  var dB = class {
      constructor() {
        (this.getChannel = () => {
          if (!this.channel) {
            let e = T0();
            return this.setChannel(e), e;
          }
          return this.channel;
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel)
              throw new Error("Accessing non-existent serverChannel");
            return this.serverChannel;
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            (this.channel = e), this.resolve();
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e;
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel());
          }));
      }
    },
    pi = "__STORYBOOK_ADDONS_PREVIEW";
  function fB() {
    return ue[pi] || (ue[pi] = new dB()), ue[pi];
  }
  var Wn = fB();
  var Ch = he(Mn(), 1),
    zr = he(Vn(), 1),
    x8 = he(ph(), 1),
    F8 = he(Yn(), 1);
  l();
  c();
  p();
  function Xt(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Array.from(typeof e == "string" ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var a = n.reduce(function (u, s) {
      var d = s.match(/\n([\t ]+|(?!\s).)/g);
      return d
        ? u.concat(
            d.map(function (g) {
              var E, y;
              return (y =
                (E = g.match(/[\t ]/g)) === null || E === void 0
                  ? void 0
                  : E.length) !== null && y !== void 0
                ? y
                : 0;
            })
          )
        : u;
    }, []);
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          "}",
        "g"
      );
      n = n.map(function (u) {
        return u.replace(
          o,
          `
`
        );
      });
    }
    n[0] = n[0].replace(/^\r?\n/, "");
    var i = n[0];
    return (
      t.forEach(function (u, s) {
        var d = i.match(/(?:^|\n)( *)$/),
          g = d ? d[1] : "",
          E = u;
        typeof u == "string" &&
          u.includes(`
`) &&
          (E = String(u)
            .split(
              `
`
            )
            .map(function (y, h) {
              return h === 0 ? y : "" + g + y;
            }).join(`
`)),
          (i += E + n[s + 1]);
      }),
      i
    );
  }
  var xe = Xt;
  l();
  c();
  p();
  var Zn = he(di(), 1);
  var xh = he(vh(), 1);
  var Fh = he(Xo(), 1);
  var AX = (0, Ch.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  );
  var EX = Symbol("incompatible");
  var vX = Symbol("Deeply equal");
  var S8 = Xt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    DX = (0, xh.default)(() => {}, S8);
  var St = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([i, u]) => {
            let s = a[i];
            Array.isArray(u) || typeof s > "u"
              ? (a[i] = u)
              : (0, Zn.default)(u) && (0, Zn.default)(s)
              ? (t[i] = !0)
              : typeof u < "u" && (a[i] = u);
          }),
          a
        ),
        {}
      );
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((i) => i[a])
          .filter((i) => typeof i < "u");
        o.every((i) => (0, Zn.default)(i))
          ? (n[a] = St(...o))
          : (n[a] = o[o.length - 1]);
      }),
      n
    );
  };
  var hi = (e, t, r) => {
      let n = typeof e;
      switch (n) {
        case "boolean":
        case "string":
        case "number":
        case "function":
        case "symbol":
          return { name: n };
      }
      return e
        ? r.has(e)
          ? ($e.warn(Xt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: "other", value: "cyclic object" })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: "array",
                  value:
                    e.length > 0
                      ? hi(e[0], t, new Set(r))
                      : { name: "other", value: "unknown" },
                }
              : {
                  name: "object",
                  value: (0, zr.default)(e, (a) => hi(a, t, new Set(r))),
                })
        : { name: "object", value: {} };
    },
    w8 = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, zr.default)(n, (i, u) => ({
          name: u,
          type: hi(i, `${t}.${u}`, new Set()),
        })),
        o = (0, zr.default)(r, (i, u) => ({ name: u }));
      return St(a, o, r);
    };
  w8.secondPass = !0;
  var Dh = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Gr = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, Fh.default)(e, (n, a) => {
            let o = n.name || a;
            return (!t || Dh(o, t)) && (!r || !Dh(o, r));
          }),
    B8 = (e, t, r) => {
      let { type: n, options: a } = e;
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name;
          if (o === "string") return { control: { type: "color" } };
          o !== "enum" &&
            $e.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`
            );
        }
        if (r.date && r.date.test(t)) return { control: { type: "date" } };
        switch (n.name) {
          case "array":
            return { control: { type: "object" } };
          case "boolean":
            return { control: { type: "boolean" } };
          case "string":
            return { control: { type: "text" } };
          case "number":
            return { control: { type: "number" } };
          case "enum": {
            let { value: o } = n;
            return {
              control: { type: o?.length <= 5 ? "radio" : "select" },
              options: o,
            };
          }
          case "function":
          case "symbol":
            return null;
          default:
            return { control: { type: a ? "select" : "object" } };
        }
      }
    },
    Sh = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: o = {},
          } = {},
        },
      } = e;
      if (!r) return t;
      let i = Gr(t, n, a),
        u = (0, zr.default)(i, (s, d) => s?.type && B8(s, d, o));
      return St(u, i);
    };
  Sh.secondPass = !0;
  function yi(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )();
    };
  }
  function Hr(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
  }
  function Jn(e, t, r = {}) {
    return Hr(e, t).reduce(
      (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
      []
    );
  }
  function Xn(e, t) {
    return Object.assign({}, ...Hr(e, t));
  }
  function Qn(e, t) {
    return Hr(e, t).pop();
  }
  function mi(e) {
    let t = Jn(e, "argTypesEnhancers"),
      r = Hr(e, "runStep");
    return {
      parameters: St(...Hr(e, "parameters")),
      decorators: Jn(e, "decorators", {
        reverseFileOrder: !(ue.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: Xn(e, "args"),
      argsEnhancers: Jn(e, "argsEnhancers"),
      argTypes: Xn(e, "argTypes"),
      argTypesEnhancers: [
        ...t.filter((n) => !n.secondPass),
        ...t.filter((n) => n.secondPass),
      ],
      globals: Xn(e, "globals"),
      globalTypes: Xn(e, "globalTypes"),
      loaders: Jn(e, "loaders"),
      render: Qn(e, "render"),
      renderToCanvas: Qn(e, "renderToCanvas"),
      renderToDOM: Qn(e, "renderToDOM"),
      applyDecorators: Qn(e, "applyDecorators"),
      runStep: yi(r),
    };
  }
  var CX = mi([]);
  var AO = he(Yn(), 1),
    EO = he(Vi(), 1);
  l();
  c();
  p();
  var DO = he(Yn(), 1);
  var CO = he(Vi(), 1),
    xO = he(di(), 1),
    Py = Ve({
      "../../node_modules/entities/lib/maps/entities.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      },
    }),
    FO = Ve({
      "../../node_modules/entities/lib/maps/legacy.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      },
    }),
    Ry = Ve({
      "../../node_modules/entities/lib/maps/xml.json"(e, t) {
        t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      },
    }),
    SO = Ve({
      "../../node_modules/entities/lib/maps/decode.json"(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      },
    }),
    wO = Ve({
      "../../node_modules/entities/lib/decode_codepoint.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = t(SO()),
          n =
            String.fromCodePoint ||
            function (o) {
              var i = "";
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (i += String.fromCharCode(o)),
                i
              );
            };
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? "\uFFFD"
            : (o in r.default && (o = r.default[o]), n(o));
        }
        e.default = a;
      },
    }),
    Oy = Ve({
      "../../node_modules/entities/lib/decode.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (g) {
            return g && g.__esModule ? g : { default: g };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(Py()),
          n = t(FO()),
          a = t(Ry()),
          o = t(wO()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
        function u(g) {
          var E = d(g);
          return function (y) {
            return String(y).replace(i, E);
          };
        }
        var s = function (g, E) {
          return g < E ? 1 : -1;
        };
        e.decodeHTML = (function () {
          for (
            var g = Object.keys(n.default).sort(s),
              E = Object.keys(r.default).sort(s),
              y = 0,
              h = 0;
            y < E.length;
            y++
          )
            g[h] === E[y] ? ((E[y] += ";?"), h++) : (E[y] += ";");
          var A = new RegExp(
              "&(?:" + E.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
              "g"
            ),
            b = d(r.default);
          function x(F) {
            return F.substr(-1) !== ";" && (F += ";"), b(F);
          }
          return function (F) {
            return String(F).replace(A, x);
          };
        })();
        function d(g) {
          return function (E) {
            if (E.charAt(1) === "#") {
              var y = E.charAt(2);
              return y === "X" || y === "x"
                ? o.default(parseInt(E.substr(3), 16))
                : o.default(parseInt(E.substr(2), 10));
            }
            return g[E.slice(1, -1)] || E;
          };
        }
      },
    }),
    _y = Ve({
      "../../node_modules/entities/lib/encode.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (R) {
            return R && R.__esModule ? R : { default: R };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0);
        var r = t(Ry()),
          n = s(r.default),
          a = d(n);
        e.encodeXML = F(n);
        var o = t(Py()),
          i = s(o.default),
          u = d(i);
        (e.encodeHTML = h(i, u)), (e.encodeNonAsciiHTML = F(i));
        function s(R) {
          return Object.keys(R)
            .sort()
            .reduce(function (N, L) {
              return (N[R[L]] = "&" + L + ";"), N;
            }, {});
        }
        function d(R) {
          for (
            var N = [], L = [], w = 0, M = Object.keys(R);
            w < M.length;
            w++
          ) {
            var I = M[w];
            I.length === 1 ? N.push("\\" + I) : L.push(I);
          }
          N.sort();
          for (var U = 0; U < N.length - 1; U++) {
            for (
              var V = U;
              V < N.length - 1 &&
              N[V].charCodeAt(1) + 1 === N[V + 1].charCodeAt(1);

            )
              V += 1;
            var z = 1 + V - U;
            z < 3 || N.splice(U, z, N[U] + "-" + N[V]);
          }
          return (
            L.unshift("[" + N.join("") + "]"), new RegExp(L.join("|"), "g")
          );
        }
        var g =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          E =
            String.prototype.codePointAt != null
              ? function (R) {
                  return R.codePointAt(0);
                }
              : function (R) {
                  return (
                    (R.charCodeAt(0) - 55296) * 1024 +
                    R.charCodeAt(1) -
                    56320 +
                    65536
                  );
                };
        function y(R) {
          return (
            "&#x" +
            (R.length > 1 ? E(R) : R.charCodeAt(0)).toString(16).toUpperCase() +
            ";"
          );
        }
        function h(R, N) {
          return function (L) {
            return L.replace(N, function (w) {
              return R[w];
            }).replace(g, y);
          };
        }
        var A = new RegExp(a.source + "|" + g.source, "g");
        function b(R) {
          return R.replace(A, y);
        }
        e.escape = b;
        function x(R) {
          return R.replace(a, y);
        }
        e.escapeUTF8 = x;
        function F(R) {
          return function (N) {
            return N.replace(A, function (L) {
              return R[L] || y(L);
            });
          };
        }
      },
    }),
    BO = Ve({
      "../../node_modules/entities/lib/index.js"(e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = Oy(),
          r = _y();
        function n(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTML)(s);
        }
        e.decode = n;
        function a(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
        }
        e.decodeStrict = a;
        function o(s, d) {
          return (!d || d <= 0 ? r.encodeXML : r.encodeHTML)(s);
        }
        e.encode = o;
        var i = _y();
        Object.defineProperty(e, "encodeXML", {
          enumerable: !0,
          get: function () {
            return i.encodeXML;
          },
        }),
          Object.defineProperty(e, "encodeHTML", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: function () {
              return i.encodeNonAsciiHTML;
            },
          }),
          Object.defineProperty(e, "escape", {
            enumerable: !0,
            get: function () {
              return i.escape;
            },
          }),
          Object.defineProperty(e, "escapeUTF8", {
            enumerable: !0,
            get: function () {
              return i.escapeUTF8;
            },
          }),
          Object.defineProperty(e, "encodeHTML4", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeHTML5", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          });
        var u = Oy();
        Object.defineProperty(e, "decodeXML", {
          enumerable: !0,
          get: function () {
            return u.decodeXML;
          },
        }),
          Object.defineProperty(e, "decodeHTML", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTMLStrict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML4", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML5", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML4Strict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML5Strict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeXMLStrict", {
            enumerable: !0,
            get: function () {
              return u.decodeXML;
            },
          });
      },
    }),
    TO = Ve({
      "../../node_modules/ansi-to-html/lib/ansi_to_html.js"(e, t) {
        function r(_, T) {
          if (!(_ instanceof T))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(_, T) {
          for (var j = 0; j < T.length; j++) {
            var G = T[j];
            (G.enumerable = G.enumerable || !1),
              (G.configurable = !0),
              "value" in G && (G.writable = !0),
              Object.defineProperty(_, G.key, G);
          }
        }
        function a(_, T, j) {
          return T && n(_.prototype, T), j && n(_, j), _;
        }
        function o(_) {
          if (typeof Symbol > "u" || _[Symbol.iterator] == null) {
            if (Array.isArray(_) || (_ = i(_))) {
              var T = 0,
                j = function () {};
              return {
                s: j,
                n: function () {
                  return T >= _.length
                    ? { done: !0 }
                    : { done: !1, value: _[T++] };
                },
                e: function (le) {
                  throw le;
                },
                f: j,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var G,
            J = !0,
            K = !1,
            Z;
          return {
            s: function () {
              G = _[Symbol.iterator]();
            },
            n: function () {
              var le = G.next();
              return (J = le.done), le;
            },
            e: function (le) {
              (K = !0), (Z = le);
            },
            f: function () {
              try {
                !J && G.return != null && G.return();
              } finally {
                if (K) throw Z;
              }
            },
          };
        }
        function i(_, T) {
          if (_) {
            if (typeof _ == "string") return u(_, T);
            var j = Object.prototype.toString.call(_).slice(8, -1);
            if (
              (j === "Object" && _.constructor && (j = _.constructor.name),
              j === "Map" || j === "Set")
            )
              return Array.from(j);
            if (
              j === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
            )
              return u(_, T);
          }
        }
        function u(_, T) {
          (T == null || T > _.length) && (T = _.length);
          for (var j = 0, G = new Array(T); j < T; j++) G[j] = _[j];
          return G;
        }
        var s = BO(),
          d = {
            fg: "#FFF",
            bg: "#000",
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: g(),
          };
        function g() {
          var _ = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            R(0, 5).forEach(function (T) {
              R(0, 5).forEach(function (j) {
                R(0, 5).forEach(function (G) {
                  return E(T, j, G, _);
                });
              });
            }),
            R(0, 23).forEach(function (T) {
              var j = T + 232,
                G = y(T * 10 + 8);
              _[j] = "#" + G + G + G;
            }),
            _
          );
        }
        function E(_, T, j, G) {
          var J = 16 + _ * 36 + T * 6 + j,
            K = _ > 0 ? _ * 40 + 55 : 0,
            Z = T > 0 ? T * 40 + 55 : 0,
            le = j > 0 ? j * 40 + 55 : 0;
          G[J] = h([K, Z, le]);
        }
        function y(_) {
          for (var T = _.toString(16); T.length < 2; ) T = "0" + T;
          return T;
        }
        function h(_) {
          var T = [],
            j = o(_),
            G;
          try {
            for (j.s(); !(G = j.n()).done; ) {
              var J = G.value;
              T.push(y(J));
            }
          } catch (K) {
            j.e(K);
          } finally {
            j.f();
          }
          return "#" + T.join("");
        }
        function A(_, T, j, G) {
          var J;
          return (
            T === "text"
              ? (J = w(j, G))
              : T === "display"
              ? (J = x(_, j, G))
              : T === "xterm256"
              ? (J = U(_, G.colors[j]))
              : T === "rgb" && (J = b(_, j)),
            J
          );
        }
        function b(_, T) {
          T = T.substring(2).slice(0, -1);
          var j = +T.substr(0, 2),
            G = T.substring(5).split(";"),
            J = G.map(function (K) {
              return ("0" + Number(K).toString(16)).substr(-2);
            }).join("");
          return I(_, (j === 38 ? "color:#" : "background-color:#") + J);
        }
        function x(_, T, j) {
          T = parseInt(T, 10);
          var G = {
              "-1": function () {
                return "<br/>";
              },
              0: function () {
                return _.length && F(_);
              },
              1: function () {
                return M(_, "b");
              },
              3: function () {
                return M(_, "i");
              },
              4: function () {
                return M(_, "u");
              },
              8: function () {
                return I(_, "display:none");
              },
              9: function () {
                return M(_, "strike");
              },
              22: function () {
                return I(
                  _,
                  "font-weight:normal;text-decoration:none;font-style:normal"
                );
              },
              23: function () {
                return z(_, "i");
              },
              24: function () {
                return z(_, "u");
              },
              39: function () {
                return U(_, j.fg);
              },
              49: function () {
                return V(_, j.bg);
              },
              53: function () {
                return I(_, "text-decoration:overline");
              },
            },
            J;
          return (
            G[T]
              ? (J = G[T]())
              : 4 < T && T < 7
              ? (J = M(_, "blink"))
              : 29 < T && T < 38
              ? (J = U(_, j.colors[T - 30]))
              : 39 < T && T < 48
              ? (J = V(_, j.colors[T - 40]))
              : 89 < T && T < 98
              ? (J = U(_, j.colors[8 + (T - 90)]))
              : 99 < T && T < 108 && (J = V(_, j.colors[8 + (T - 100)])),
            J
          );
        }
        function F(_) {
          var T = _.slice(0);
          return (
            (_.length = 0),
            T.reverse()
              .map(function (j) {
                return "</" + j + ">";
              })
              .join("")
          );
        }
        function R(_, T) {
          for (var j = [], G = _; G <= T; G++) j.push(G);
          return j;
        }
        function N(_) {
          return function (T) {
            return (_ === null || T.category !== _) && _ !== "all";
          };
        }
        function L(_) {
          _ = parseInt(_, 10);
          var T = null;
          return (
            _ === 0
              ? (T = "all")
              : _ === 1
              ? (T = "bold")
              : 2 < _ && _ < 5
              ? (T = "underline")
              : 4 < _ && _ < 7
              ? (T = "blink")
              : _ === 8
              ? (T = "hide")
              : _ === 9
              ? (T = "strike")
              : (29 < _ && _ < 38) || _ === 39 || (89 < _ && _ < 98)
              ? (T = "foreground-color")
              : ((39 < _ && _ < 48) || _ === 49 || (99 < _ && _ < 108)) &&
                (T = "background-color"),
            T
          );
        }
        function w(_, T) {
          return T.escapeXML ? s.encodeXML(_) : _;
        }
        function M(_, T, j) {
          return (
            j || (j = ""),
            _.push(T),
            "<".concat(T).concat(j ? ' style="'.concat(j, '"') : "", ">")
          );
        }
        function I(_, T) {
          return M(_, "span", T);
        }
        function U(_, T) {
          return M(_, "span", "color:" + T);
        }
        function V(_, T) {
          return M(_, "span", "background-color:" + T);
        }
        function z(_, T) {
          var j;
          if ((_.slice(-1)[0] === T && (j = _.pop()), j)) return "</" + T + ">";
        }
        function ae(_, T, j) {
          var G = !1,
            J = 3;
          function K() {
            return "";
          }
          function Z(se, Ee) {
            return j("xterm256", Ee), "";
          }
          function le(se) {
            return T.newline ? j("display", -1) : j("text", se), "";
          }
          function Ie(se, Ee) {
            (G = !0),
              Ee.trim().length === 0 && (Ee = "0"),
              (Ee = Ee.trimRight(";").split(";"));
            var ln = o(Ee),
              zu;
            try {
              for (ln.s(); !(zu = ln.n()).done; ) {
                var u2 = zu.value;
                j("display", u2);
              }
            } catch (s2) {
              ln.e(s2);
            } finally {
              ln.f();
            }
            return "";
          }
          function ke(se) {
            return j("text", se), "";
          }
          function X(se) {
            return j("rgb", se), "";
          }
          var Ue = [
            { pattern: /^\x08+/, sub: K },
            { pattern: /^\x1b\[[012]?K/, sub: K },
            { pattern: /^\x1b\[\(B/, sub: K },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: X },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: le },
            { pattern: /^\r+\n/, sub: le },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Ie },
            { pattern: /^\x1b\[\d?J/, sub: K },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: ke },
          ];
          function B(se, Ee) {
            (Ee > J && G) || ((G = !1), (_ = _.replace(se.pattern, se.sub)));
          }
          var P = [],
            k = _,
            O = k.length;
          e: for (; O > 0; ) {
            for (var $ = 0, H = 0, fe = Ue.length; H < fe; $ = ++H) {
              var ie = Ue[$];
              if ((B(ie, $), _.length !== O)) {
                O = _.length;
                continue e;
              }
            }
            if (_.length === O) break;
            P.push(0), (O = _.length);
          }
          return P;
        }
        function Q(_, T, j) {
          return (
            T !== "text" &&
              ((_ = _.filter(N(L(j)))),
              _.push({ token: T, data: j, category: L(j) })),
            _
          );
        }
        var Y = (function () {
          function _(T) {
            r(this, _),
              (T = T || {}),
              T.colors && (T.colors = Object.assign({}, d.colors, T.colors)),
              (this.options = Object.assign({}, d, T)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            a(_, [
              {
                key: "toHtml",
                value: function (T) {
                  var j = this;
                  T = typeof T == "string" ? [T] : T;
                  var G = this.stack,
                    J = this.options,
                    K = [];
                  return (
                    this.stickyStack.forEach(function (Z) {
                      var le = A(G, Z.token, Z.data, J);
                      le && K.push(le);
                    }),
                    ae(T.join(""), J, function (Z, le) {
                      var Ie = A(G, Z, le, J);
                      Ie && K.push(Ie),
                        J.stream && (j.stickyStack = Q(j.stickyStack, Z, le));
                    }),
                    G.length && K.push(F(G)),
                    K.join("")
                  );
                },
              },
            ]),
            _
          );
        })();
        t.exports = Y;
      },
    }),
    iZ = new Error("prepareAborted"),
    { AbortController: uZ } = globalThis;
  var { fetch: sZ } = ue;
  var { history: lZ, document: cZ } = ue;
  var OO = B0(TO()),
    { document: pZ } = ue;
  var _O = ((e) => (
    (e.MAIN = "MAIN"),
    (e.NOPREVIEW = "NOPREVIEW"),
    (e.PREPARING_STORY = "PREPARING_STORY"),
    (e.PREPARING_DOCS = "PREPARING_DOCS"),
    (e.ERROR = "ERROR"),
    e
  ))(_O || {});
  var dZ = new OO.default({ escapeXML: !0 });
  var { document: fZ } = ue;
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var PO = Object.create,
    Iy = Object.defineProperty,
    RO = Object.getOwnPropertyDescriptor,
    ky = Object.getOwnPropertyNames,
    IO = Object.getPrototypeOf,
    kO = Object.prototype.hasOwnProperty,
    je = (e, t) =>
      function () {
        return (
          t || (0, e[ky(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    NO = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of ky(t))
          !kO.call(e, a) &&
            a !== r &&
            Iy(e, a, {
              get: () => t[a],
              enumerable: !(n = RO(t, a)) || n.enumerable,
            });
      return e;
    },
    ha = (e, t, r) => (
      (r = e != null ? PO(IO(e)) : {}),
      NO(
        t || !e || !e.__esModule
          ? Iy(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    jO = [
      "bubbles",
      "cancelBubble",
      "cancelable",
      "composed",
      "currentTarget",
      "defaultPrevented",
      "eventPhase",
      "isTrusted",
      "returnValue",
      "srcElement",
      "target",
      "timeStamp",
      "type",
    ],
    MO = ["detail"];
  function Ny(e) {
    let t = jO
      .filter((r) => e[r] !== void 0)
      .reduce((r, n) => ({ ...r, [n]: e[n] }), {});
    return (
      e instanceof CustomEvent &&
        MO.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r];
        }),
      t
    );
  }
  var Xy = he(Mn(), 1),
    Uy = je({
      "node_modules/has-symbols/shams.js"(e, t) {
        "use strict";
        t.exports = function () {
          if (
            typeof Symbol != "function" ||
            typeof Object.getOwnPropertySymbols != "function"
          )
            return !1;
          if (typeof Symbol.iterator == "symbol") return !0;
          var n = {},
            a = Symbol("test"),
            o = Object(a);
          if (
            typeof a == "string" ||
            Object.prototype.toString.call(a) !== "[object Symbol]" ||
            Object.prototype.toString.call(o) !== "[object Symbol]"
          )
            return !1;
          var i = 42;
          n[a] = i;
          for (a in n) return !1;
          if (
            (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == "function" &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1;
          var u = Object.getOwnPropertySymbols(n);
          if (
            u.length !== 1 ||
            u[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1;
          if (typeof Object.getOwnPropertyDescriptor == "function") {
            var s = Object.getOwnPropertyDescriptor(n, a);
            if (s.value !== i || s.enumerable !== !0) return !1;
          }
          return !0;
        };
      },
    }),
    zy = je({
      "node_modules/has-symbols/index.js"(e, t) {
        "use strict";
        var r = typeof Symbol < "u" && Symbol,
          n = Uy();
        t.exports = function () {
          return typeof r != "function" ||
            typeof Symbol != "function" ||
            typeof r("foo") != "symbol" ||
            typeof Symbol("bar") != "symbol"
            ? !1
            : n();
        };
      },
    }),
    qO = je({
      "node_modules/function-bind/implementation.js"(e, t) {
        "use strict";
        var r = "Function.prototype.bind called on incompatible ",
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = "[object Function]";
        t.exports = function (u) {
          var s = this;
          if (typeof s != "function" || a.call(s) !== o)
            throw new TypeError(r + s);
          for (
            var d = n.call(arguments, 1),
              g,
              E = function () {
                if (this instanceof g) {
                  var x = s.apply(this, d.concat(n.call(arguments)));
                  return Object(x) === x ? x : this;
                } else return s.apply(u, d.concat(n.call(arguments)));
              },
              y = Math.max(0, s.length - d.length),
              h = [],
              A = 0;
            A < y;
            A++
          )
            h.push("$" + A);
          if (
            ((g = Function(
              "binder",
              "return function (" +
                h.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(E)),
            s.prototype)
          ) {
            var b = function () {};
            (b.prototype = s.prototype),
              (g.prototype = new b()),
              (b.prototype = null);
          }
          return g;
        };
      },
    }),
    Yi = je({
      "node_modules/function-bind/index.js"(e, t) {
        "use strict";
        var r = qO();
        t.exports = Function.prototype.bind || r;
      },
    }),
    LO = je({
      "node_modules/has/src/index.js"(e, t) {
        "use strict";
        var r = Yi();
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      },
    }),
    Hy = je({
      "node_modules/get-intrinsic/index.js"(e, t) {
        "use strict";
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (Q) {
            try {
              return a('"use strict"; return (' + Q + ").constructor;")();
            } catch {}
          },
          u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, "");
          } catch {
            u = null;
          }
        var s = function () {
            throw new o();
          },
          d = u
            ? (function () {
                try {
                  return arguments.callee, s;
                } catch {
                  try {
                    return u(arguments, "callee").get;
                  } catch {
                    return s;
                  }
                }
              })()
            : s,
          g = zy()(),
          E =
            Object.getPrototypeOf ||
            function (Q) {
              return Q.__proto__;
            },
          y = {},
          h = typeof Uint8Array > "u" ? r : E(Uint8Array),
          A = {
            "%AggregateError%":
              typeof AggregateError > "u" ? r : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
            "%ArrayIteratorPrototype%": g ? E([][Symbol.iterator]()) : r,
            "%AsyncFromSyncIteratorPrototype%": r,
            "%AsyncFunction%": y,
            "%AsyncGenerator%": y,
            "%AsyncGeneratorFunction%": y,
            "%AsyncIteratorPrototype%": y,
            "%Atomics%": typeof Atomics > "u" ? r : Atomics,
            "%BigInt%": typeof BigInt > "u" ? r : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? r : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
            "%FinalizationRegistry%":
              typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": y,
            "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": g ? E(E([][Symbol.iterator]())) : r,
            "%JSON%": typeof JSON == "object" ? JSON : r,
            "%Map%": typeof Map > "u" ? r : Map,
            "%MapIteratorPrototype%":
              typeof Map > "u" || !g ? r : E(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? r : Promise,
            "%Proxy%": typeof Proxy > "u" ? r : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? r : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? r : Set,
            "%SetIteratorPrototype%":
              typeof Set > "u" || !g ? r : E(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%":
              typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": g ? E(""[Symbol.iterator]()) : r,
            "%Symbol%": g ? Symbol : r,
            "%SyntaxError%": n,
            "%ThrowTypeError%": d,
            "%TypedArray%": h,
            "%TypeError%": o,
            "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
            "%Uint8ClampedArray%":
              typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
          },
          b = function Q(Y) {
            var _;
            if (Y === "%AsyncFunction%") _ = i("async function () {}");
            else if (Y === "%GeneratorFunction%") _ = i("function* () {}");
            else if (Y === "%AsyncGeneratorFunction%")
              _ = i("async function* () {}");
            else if (Y === "%AsyncGenerator%") {
              var T = Q("%AsyncGeneratorFunction%");
              T && (_ = T.prototype);
            } else if (Y === "%AsyncIteratorPrototype%") {
              var j = Q("%AsyncGenerator%");
              j && (_ = E(j.prototype));
            }
            return (A[Y] = _), _;
          },
          x = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          F = Yi(),
          R = LO(),
          N = F.call(Function.call, Array.prototype.concat),
          L = F.call(Function.apply, Array.prototype.splice),
          w = F.call(Function.call, String.prototype.replace),
          M = F.call(Function.call, String.prototype.slice),
          I = F.call(Function.call, RegExp.prototype.exec),
          U =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          V = /\\(\\)?/g,
          z = function (Y) {
            var _ = M(Y, 0, 1),
              T = M(Y, -1);
            if (_ === "%" && T !== "%")
              throw new n("invalid intrinsic syntax, expected closing `%`");
            if (T === "%" && _ !== "%")
              throw new n("invalid intrinsic syntax, expected opening `%`");
            var j = [];
            return (
              w(Y, U, function (G, J, K, Z) {
                j[j.length] = K ? w(Z, V, "$1") : J || G;
              }),
              j
            );
          },
          ae = function (Y, _) {
            var T = Y,
              j;
            if ((R(x, T) && ((j = x[T]), (T = "%" + j[0] + "%")), R(A, T))) {
              var G = A[T];
              if ((G === y && (G = b(T)), typeof G > "u" && !_))
                throw new o(
                  "intrinsic " +
                    Y +
                    " exists, but is not available. Please file an issue!"
                );
              return { alias: j, name: T, value: G };
            }
            throw new n("intrinsic " + Y + " does not exist!");
          };
        t.exports = function (Y, _) {
          if (typeof Y != "string" || Y.length === 0)
            throw new o("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && typeof _ != "boolean")
            throw new o('"allowMissing" argument must be a boolean');
          if (I(/^%?[^%]*%?$/, Y) === null)
            throw new n(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          var T = z(Y),
            j = T.length > 0 ? T[0] : "",
            G = ae("%" + j + "%", _),
            J = G.name,
            K = G.value,
            Z = !1,
            le = G.alias;
          le && ((j = le[0]), L(T, N([0, 1], le)));
          for (var Ie = 1, ke = !0; Ie < T.length; Ie += 1) {
            var X = T[Ie],
              Ue = M(X, 0, 1),
              B = M(X, -1);
            if (
              (Ue === '"' ||
                Ue === "'" ||
                Ue === "`" ||
                B === '"' ||
                B === "'" ||
                B === "`") &&
              Ue !== B
            )
              throw new n(
                "property names with quotes must have matching quotes"
              );
            if (
              ((X === "constructor" || !ke) && (Z = !0),
              (j += "." + X),
              (J = "%" + j + "%"),
              R(A, J))
            )
              K = A[J];
            else if (K != null) {
              if (!(X in K)) {
                if (!_)
                  throw new o(
                    "base intrinsic for " +
                      Y +
                      " exists, but the property is not available."
                  );
                return;
              }
              if (u && Ie + 1 >= T.length) {
                var P = u(K, X);
                (ke = !!P),
                  ke && "get" in P && !("originalValue" in P.get)
                    ? (K = P.get)
                    : (K = K[X]);
              } else (ke = R(K, X)), (K = K[X]);
              ke && !Z && (A[J] = K);
            }
          }
          return K;
        };
      },
    }),
    $O = je({
      "node_modules/call-bind/index.js"(e, t) {
        "use strict";
        var r = Yi(),
          n = Hy(),
          a = n("%Function.prototype.apply%"),
          o = n("%Function.prototype.call%"),
          i = n("%Reflect.apply%", !0) || r.call(o, a),
          u = n("%Object.getOwnPropertyDescriptor%", !0),
          s = n("%Object.defineProperty%", !0),
          d = n("%Math.max%");
        if (s)
          try {
            s({}, "a", { value: 1 });
          } catch {
            s = null;
          }
        t.exports = function (y) {
          var h = i(r, o, arguments);
          if (u && s) {
            var A = u(h, "length");
            A.configurable &&
              s(h, "length", {
                value: 1 + d(0, y.length - (arguments.length - 1)),
              });
          }
          return h;
        };
        var g = function () {
          return i(r, a, arguments);
        };
        s ? s(t.exports, "apply", { value: g }) : (t.exports.apply = g);
      },
    }),
    UO = je({
      "node_modules/call-bind/callBound.js"(e, t) {
        "use strict";
        var r = Hy(),
          n = $O(),
          a = n(r("String.prototype.indexOf"));
        t.exports = function (i, u) {
          var s = r(i, !!u);
          return typeof s == "function" && a(i, ".prototype.") > -1 ? n(s) : s;
        };
      },
    }),
    zO = je({
      "node_modules/has-tostringtag/shams.js"(e, t) {
        "use strict";
        var r = Uy();
        t.exports = function () {
          return r() && !!Symbol.toStringTag;
        };
      },
    }),
    HO = je({
      "node_modules/is-regex/index.js"(e, t) {
        "use strict";
        var r = UO(),
          n = zO()(),
          a,
          o,
          i,
          u;
        n &&
          ((a = r("Object.prototype.hasOwnProperty")),
          (o = r("RegExp.prototype.exec")),
          (i = {}),
          (s = function () {
            throw i;
          }),
          (u = { toString: s, valueOf: s }),
          typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
        var s,
          d = r("Object.prototype.toString"),
          g = Object.getOwnPropertyDescriptor,
          E = "[object RegExp]";
        t.exports = n
          ? function (h) {
              if (!h || typeof h != "object") return !1;
              var A = g(h, "lastIndex"),
                b = A && a(A, "value");
              if (!b) return !1;
              try {
                o(h, u);
              } catch (x) {
                return x === i;
              }
            }
          : function (h) {
              return !h || (typeof h != "object" && typeof h != "function")
                ? !1
                : d(h) === E;
            };
      },
    }),
    GO = je({
      "node_modules/is-function/index.js"(e, t) {
        t.exports = n;
        var r = Object.prototype.toString;
        function n(a) {
          if (!a) return !1;
          var o = r.call(a);
          return (
            o === "[object Function]" ||
            (typeof a == "function" && o !== "[object RegExp]") ||
            (typeof window < "u" &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          );
        }
      },
    }),
    WO = je({
      "node_modules/is-symbol/index.js"(e, t) {
        "use strict";
        var r = Object.prototype.toString,
          n = zy()();
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (s) {
              return typeof s.valueOf() != "symbol" ? !1 : o.test(a.call(s));
            }),
            (t.exports = function (s) {
              if (typeof s == "symbol") return !0;
              if (r.call(s) !== "[object Symbol]") return !1;
              try {
                return i(s);
              } catch {
                return !1;
              }
            }))
          : (t.exports = function (s) {
              return !1;
            });
        var a, o, i;
      },
    }),
    VO = ha(HO()),
    KO = ha(GO()),
    YO = ha(WO());
  function JO(e) {
    return e != null && typeof e == "object" && Array.isArray(e) === !1;
  }
  var XO =
      typeof window == "object" && window && window.Object === Object && window,
    QO = XO,
    ZO = typeof self == "object" && self && self.Object === Object && self,
    e_ = QO || ZO || Function("return this")(),
    Ji = e_,
    t_ = Ji.Symbol,
    cr = t_,
    Gy = Object.prototype,
    r_ = Gy.hasOwnProperty,
    n_ = Gy.toString,
    Zr = cr ? cr.toStringTag : void 0;
  function a_(e) {
    var t = r_.call(e, Zr),
      r = e[Zr];
    try {
      e[Zr] = void 0;
      var n = !0;
    } catch {}
    var a = n_.call(e);
    return n && (t ? (e[Zr] = r) : delete e[Zr]), a;
  }
  var o_ = a_,
    i_ = Object.prototype,
    u_ = i_.toString;
  function s_(e) {
    return u_.call(e);
  }
  var l_ = s_,
    c_ = "[object Null]",
    p_ = "[object Undefined]",
    jy = cr ? cr.toStringTag : void 0;
  function d_(e) {
    return e == null
      ? e === void 0
        ? p_
        : c_
      : jy && jy in Object(e)
      ? o_(e)
      : l_(e);
  }
  var Wy = d_;
  function f_(e) {
    return e != null && typeof e == "object";
  }
  var h_ = f_,
    y_ = "[object Symbol]";
  function m_(e) {
    return typeof e == "symbol" || (h_(e) && Wy(e) == y_);
  }
  var Xi = m_;
  function g_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  var b_ = g_,
    A_ = Array.isArray,
    Qi = A_,
    E_ = 1 / 0,
    My = cr ? cr.prototype : void 0,
    qy = My ? My.toString : void 0;
  function Vy(e) {
    if (typeof e == "string") return e;
    if (Qi(e)) return b_(e, Vy) + "";
    if (Xi(e)) return qy ? qy.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -E_ ? "-0" : t;
  }
  var v_ = Vy;
  function D_(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Ky = D_,
    C_ = "[object AsyncFunction]",
    x_ = "[object Function]",
    F_ = "[object GeneratorFunction]",
    S_ = "[object Proxy]";
  function w_(e) {
    if (!Ky(e)) return !1;
    var t = Wy(e);
    return t == x_ || t == F_ || t == C_ || t == S_;
  }
  var B_ = w_,
    T_ = Ji["__core-js_shared__"],
    Ki = T_,
    Ly = (function () {
      var e = /[^.]+$/.exec((Ki && Ki.keys && Ki.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function O_(e) {
    return !!Ly && Ly in e;
  }
  var __ = O_,
    P_ = Function.prototype,
    R_ = P_.toString;
  function I_(e) {
    if (e != null) {
      try {
        return R_.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var k_ = I_,
    N_ = /[\\^$.*+?()[\]{}|]/g,
    j_ = /^\[object .+?Constructor\]$/,
    M_ = Function.prototype,
    q_ = Object.prototype,
    L_ = M_.toString,
    $_ = q_.hasOwnProperty,
    U_ = RegExp(
      "^" +
        L_.call($_)
          .replace(N_, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function z_(e) {
    if (!Ky(e) || __(e)) return !1;
    var t = B_(e) ? U_ : j_;
    return t.test(k_(e));
  }
  var H_ = z_;
  function G_(e, t) {
    return e?.[t];
  }
  var W_ = G_;
  function V_(e, t) {
    var r = W_(e, t);
    return H_(r) ? r : void 0;
  }
  var Yy = V_;
  function K_(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Y_ = K_,
    J_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    X_ = /^\w*$/;
  function Q_(e, t) {
    if (Qi(e)) return !1;
    var r = typeof e;
    return r == "number" ||
      r == "symbol" ||
      r == "boolean" ||
      e == null ||
      Xi(e)
      ? !0
      : X_.test(e) || !J_.test(e) || (t != null && e in Object(t));
  }
  var Z_ = Q_,
    e6 = Yy(Object, "create"),
    en = e6;
  function t6() {
    (this.__data__ = en ? en(null) : {}), (this.size = 0);
  }
  var r6 = t6;
  function n6(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var a6 = n6,
    o6 = "__lodash_hash_undefined__",
    i6 = Object.prototype,
    u6 = i6.hasOwnProperty;
  function s6(e) {
    var t = this.__data__;
    if (en) {
      var r = t[e];
      return r === o6 ? void 0 : r;
    }
    return u6.call(t, e) ? t[e] : void 0;
  }
  var l6 = s6,
    c6 = Object.prototype,
    p6 = c6.hasOwnProperty;
  function d6(e) {
    var t = this.__data__;
    return en ? t[e] !== void 0 : p6.call(t, e);
  }
  var f6 = d6,
    h6 = "__lodash_hash_undefined__";
  function y6(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = en && t === void 0 ? h6 : t),
      this
    );
  }
  var m6 = y6;
  function pr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  pr.prototype.clear = r6;
  pr.prototype.delete = a6;
  pr.prototype.get = l6;
  pr.prototype.has = f6;
  pr.prototype.set = m6;
  var $y = pr;
  function g6() {
    (this.__data__ = []), (this.size = 0);
  }
  var b6 = g6;
  function A6(e, t) {
    for (var r = e.length; r--; ) if (Y_(e[r][0], t)) return r;
    return -1;
  }
  var ya = A6,
    E6 = Array.prototype,
    v6 = E6.splice;
  function D6(e) {
    var t = this.__data__,
      r = ya(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : v6.call(t, r, 1), --this.size, !0;
  }
  var C6 = D6;
  function x6(e) {
    var t = this.__data__,
      r = ya(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var F6 = x6;
  function S6(e) {
    return ya(this.__data__, e) > -1;
  }
  var w6 = S6;
  function B6(e, t) {
    var r = this.__data__,
      n = ya(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var T6 = B6;
  function dr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  dr.prototype.clear = b6;
  dr.prototype.delete = C6;
  dr.prototype.get = F6;
  dr.prototype.has = w6;
  dr.prototype.set = T6;
  var O6 = dr,
    _6 = Yy(Ji, "Map"),
    P6 = _6;
  function R6() {
    (this.size = 0),
      (this.__data__ = {
        hash: new $y(),
        map: new (P6 || O6)(),
        string: new $y(),
      });
  }
  var I6 = R6;
  function k6(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  var N6 = k6;
  function j6(e, t) {
    var r = e.__data__;
    return N6(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  var ma = j6;
  function M6(e) {
    var t = ma(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var q6 = M6;
  function L6(e) {
    return ma(this, e).get(e);
  }
  var $6 = L6;
  function U6(e) {
    return ma(this, e).has(e);
  }
  var z6 = U6;
  function H6(e, t) {
    var r = ma(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var G6 = H6;
  function fr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  fr.prototype.clear = I6;
  fr.prototype.delete = q6;
  fr.prototype.get = $6;
  fr.prototype.has = z6;
  fr.prototype.set = G6;
  var Jy = fr,
    W6 = "Expected a function";
  function Zi(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(W6);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (Zi.Cache || Jy)()), r;
  }
  Zi.Cache = Jy;
  var V6 = Zi,
    K6 = 500;
  function Y6(e) {
    var t = V6(e, function (n) {
        return r.size === K6 && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var J6 = Y6,
    X6 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Q6 = /\\(\\)?/g,
    Z6 = J6(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(X6, function (r, n, a, o) {
          t.push(a ? o.replace(Q6, "$1") : n || r);
        }),
        t
      );
    }),
    e9 = Z6;
  function t9(e) {
    return e == null ? "" : v_(e);
  }
  var r9 = t9;
  function n9(e, t) {
    return Qi(e) ? e : Z_(e, t) ? [e] : e9(r9(e));
  }
  var a9 = n9,
    o9 = 1 / 0;
  function i9(e) {
    if (typeof e == "string" || Xi(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -o9 ? "-0" : t;
  }
  var u9 = i9;
  function s9(e, t) {
    t = a9(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[u9(t[r++])];
    return r && r == n ? e : void 0;
  }
  var l9 = s9;
  function c9(e, t, r) {
    var n = e == null ? void 0 : l9(e, t);
    return n === void 0 ? r : n;
  }
  var p9 = c9,
    eu = JO,
    d9 = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = "";
      if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === "`"
              ? (t = e[i])
              : e[i] === "/" && e[i + 1] === "*"
              ? (r = !0)
              : e[i] === "/" && e[i + 1] === "/"
              ? (n = !0)
              : e[i] === "/" && e[i + 1] !== "/" && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== "\\") ||
                  (e[i] ===
                    `
` &&
                    t !== "`")) &&
                (t = null),
              a &&
                ((e[i] === "/" && e[i - 1] !== "\\") ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i]);
      else o = e;
      return o;
    },
    f9 = (0, Xy.default)(1e4)((e) => d9(e).replace(/\n\s*/g, "").trim()),
    h9 = function (t, r) {
      let n = r.slice(0, r.indexOf("{")),
        a = r.slice(r.indexOf("{"));
      if (n.includes("=>") || n.includes("function")) return r;
      let o = n;
      return (o = o.replace(t, "function")), o + a;
    },
    y9 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    Qy = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
  function Zy(e) {
    if (!eu(e)) return e;
    let t = e,
      r = !1;
    return (
      typeof Event < "u" && e instanceof Event && ((t = Ny(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a]);
        } catch {
          r = !0;
        }
        return n;
      }, {})),
      r ? t : e
    );
  }
  var m9 = function (t) {
      let r, n, a, o;
      return function (u, s) {
        try {
          if (u === "")
            return (
              (o = []), (r = new Map([[s, "[]"]])), (n = new Map()), (a = []), s
            );
          let d = n.get(this) || this;
          for (; a.length && d !== a[0]; ) a.shift(), o.pop();
          if (typeof s == "boolean") return s;
          if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
          if (s === null) return null;
          if (typeof s == "number")
            return s === -1 / 0
              ? "_-Infinity_"
              : s === 1 / 0
              ? "_Infinity_"
              : Number.isNaN(s)
              ? "_NaN_"
              : s;
          if (typeof s == "bigint") return `_bigint_${s.toString()}`;
          if (typeof s == "string")
            return y9.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
          if ((0, VO.default)(s))
            return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
          if ((0, KO.default)(s)) {
            if (!t.allowFunction) return;
            let { name: E } = s,
              y = s.toString();
            return y.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${E}|${(() => {}).toString()}`
              : `_function_${E}|${f9(h9(u, y))}`;
          }
          if ((0, YO.default)(s)) {
            if (!t.allowSymbol) return;
            let E = Symbol.keyFor(s);
            return E !== void 0
              ? `_gsymbol_${E}`
              : `_symbol_${s.toString().slice(7, -1)}`;
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
          if (s === this) return `_duplicate_${JSON.stringify(o)}`;
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return;
          let g = r.get(s);
          if (!g) {
            let E = Array.isArray(s) ? s : Zy(s);
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== "Object" &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(E, { "_constructor-name_": s.constructor.name });
              } catch {}
            return (
              o.push(u),
              a.unshift(E),
              r.set(s, JSON.stringify(o)),
              s !== E && n.set(s, E),
              E
            );
          }
          return `_duplicate_${g}`;
        } catch {
          return;
        }
      };
    },
    g9 = function reviver(options) {
      let refs = [],
        root;
      return function revive(key, value) {
        if (
          (key === "" &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = Qy(r) ? JSON.parse(r) : r.split(".");
              n.length === 0 ? (t[e] = root) : (t[e] = p9(root, n));
            })),
          key === "_constructor-name_")
        )
          return value;
        if (eu(value) && value["_constructor-name_"] && options.allowFunction) {
          let e = value["_constructor-name_"];
          if (e !== "Object") {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`
            )();
            Object.setPrototypeOf(value, new t());
          }
          return delete value["_constructor-name_"], value;
        }
        if (
          typeof value == "string" &&
          value.startsWith("_function_") &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
          if (!options.lazyEval) return eval(`(${sourceSanitized})`);
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`);
            return f(...args);
          };
          return (
            Object.defineProperty(result, "toString", {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, "name", { value: name }),
            result
          );
        }
        if (
          typeof value == "string" &&
          value.startsWith("_regexp_") &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
          return new RegExp(t, e);
        }
        return typeof value == "string" &&
          value.startsWith("_date_") &&
          options.allowDate
          ? new Date(value.replace("_date_", ""))
          : typeof value == "string" && value.startsWith("_duplicate_")
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ""),
            }),
            null)
          : typeof value == "string" &&
            value.startsWith("_symbol_") &&
            options.allowSymbol
          ? Symbol(value.replace("_symbol_", ""))
          : typeof value == "string" &&
            value.startsWith("_gsymbol_") &&
            options.allowSymbol
          ? Symbol.for(value.replace("_gsymbol_", ""))
          : typeof value == "string" && value === "_-Infinity_"
          ? -1 / 0
          : typeof value == "string" && value === "_Infinity_"
          ? 1 / 0
          : typeof value == "string" && value === "_NaN_"
          ? NaN
          : typeof value == "string" &&
            value.startsWith("_bigint_") &&
            typeof BigInt == "function"
          ? BigInt(value.replace("_bigint_", ""))
          : value;
      };
    },
    em = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    tu = (e, t = {}) => {
      let r = { ...em, ...t };
      return JSON.stringify(Zy(e), m9(r), t.space);
    },
    b9 = () => {
      let e = new Map();
      return function t(r) {
        eu(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === "_undefined_"
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a));
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === "_undefined_"
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n));
            });
      };
    },
    A9 = (e, t = {}) => {
      let r = { ...em, ...t },
        n = JSON.parse(e, g9(r));
      return b9()(n), n;
    };
  var J9 = he(hm(), 1),
    { document: XZ, location: QZ } = ue;
  var { FEATURES: pee } = ue;
  l();
  c();
  p();
  var jg = he(Vn(), 1);
  l();
  c();
  p();
  var n4 = he(Vn(), 1),
    a4 = he(xm(), 1);
  var o4 = ((e) => (
    (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown"),
    e
  ))(o4 || {});
  var Ea = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  var Fm = "storybook/docs",
    Hte = `${Fm}/panel`;
  var i4 = `${Fm}/snippet-rendered`,
    an = ((e) => (
      (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
    ))(an || {});
  var EP = q.div(Nt, ({ theme: e }) => ({
      backgroundColor:
        e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      margin: "25px 0 40px",
      color: de(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    Fu = (e) =>
      m.createElement(EP, {
        ...e,
        className: "docblock-emptyblock sb-unstyled",
      }),
    vP = q(pn)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: "19px",
      margin: "25px 0 40px",
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      "pre.prismjs": { padding: 20, background: "inherit" },
    })),
    DP = q.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      margin: "25px 0 40px",
      padding: "20px 20px 20px 22px",
    })),
    wa = q.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: "60%",
      [`&:first-child${rs}`]: { margin: 0 },
    })),
    CP = () =>
      m.createElement(
        DP,
        null,
        m.createElement(wa, null),
        m.createElement(wa, { style: { width: "80%" } }),
        m.createElement(wa, { style: { width: "30%" } }),
        m.createElement(wa, { style: { width: "80%" } })
      ),
    Ru = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: o,
      ...i
    }) => {
      if (e) return m.createElement(CP, null);
      if (t) return m.createElement(Fu, null, t);
      let u = m.createElement(
        vP,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: "docblock-source sb-unstyled",
          ...i,
        },
        n
      );
      if (typeof a > "u") return u;
      let s = a ? no.dark : no.light;
      return m.createElement(es, { theme: ts(s) }, u);
    };
  Ru.defaultProps = { format: !1 };
  var Ae = (e) =>
      `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    Iu = 600,
    cne = q.h1(Nt, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: "32px",
      [`@media (min-width: ${Iu}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: "36px",
        marginBottom: "16px",
      },
    })),
    pne = q.h2(Nt, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: "20px",
      borderBottom: "none",
      marginBottom: 15,
      [`@media (min-width: ${Iu}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: "28px",
        marginBottom: 24,
      },
      color: de(0.25, e.color.defaultText),
    })),
    dne = q.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          WebkitOverflowScrolling: "touch",
        },
        r = {
          margin: "20px 0 8px",
          padding: 0,
          cursor: "text",
          position: "relative",
          color: e.color.defaultText,
          "&:first-of-type": { marginTop: 0, paddingTop: 0 },
          "&:hover a.anchor": { textDecoration: "none" },
          "& code": { fontSize: "inherit" },
        },
        n = {
          lineHeight: 1,
          margin: "0 2px",
          padding: "3px 5px",
          whiteSpace: "nowrap",
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === "light"
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === "light"
              ? de(0.1, e.color.defaultText)
              : de(0.3, e.color.defaultText),
          backgroundColor:
            e.base === "light" ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: "100%",
        [Ae("a")]: {
          ...t,
          fontSize: "inherit",
          lineHeight: "24px",
          color: e.color.secondary,
          textDecoration: "none",
          "&.absent": { color: "#cc0000" },
          "&.anchor": {
            display: "block",
            paddingLeft: 30,
            marginLeft: -30,
            cursor: "pointer",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [Ae("blockquote")]: {
          ...t,
          margin: "16px 0",
          borderLeft: `4px solid ${e.color.medium}`,
          padding: "0 15px",
          color: e.color.dark,
          "& > :first-of-type": { marginTop: 0 },
          "& > :last-child": { marginBottom: 0 },
        },
        [Ae("div")]: t,
        [Ae("dl")]: {
          ...t,
          margin: "16px 0",
          padding: 0,
          "& dt": {
            fontSize: "14px",
            fontWeight: "bold",
            fontStyle: "italic",
            padding: 0,
            margin: "16px 0 4px",
          },
          "& dt:first-of-type": { padding: 0 },
          "& dt > :first-of-type": { marginTop: 0 },
          "& dt > :last-child": { marginBottom: 0 },
          "& dd": { margin: "0 0 16px", padding: "0 15px" },
          "& dd > :first-of-type": { marginTop: 0 },
          "& dd > :last-child": { marginBottom: 0 },
        },
        [Ae("h1")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ae("h2")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [Ae("h3")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ae("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [Ae("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [Ae("h6")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [Ae("hr")]: {
          border: "0 none",
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [Ae("img")]: { maxWidth: "100%" },
        [Ae("li")]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: "24px",
          "& + li": { marginTop: ".25em" },
          "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
          "& code": n,
        },
        [Ae("ol")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
        },
        [Ae("p")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          color: e.color.defaultText,
          "& code": n,
        },
        [Ae("pre")]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          lineHeight: "18px",
          padding: "11px 1rem",
          whiteSpace: "pre-wrap",
          color: "inherit",
          borderRadius: 3,
          margin: "1rem 0",
          "&:not(.prismjs)": {
            background: "transparent",
            border: "none",
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          "& pre, &.prismjs": {
            padding: 15,
            margin: 0,
            whiteSpace: "pre-wrap",
            color: "inherit",
            fontSize: "13px",
            lineHeight: "19px",
            code: { color: "inherit", fontSize: "inherit" },
          },
          "& code": { whiteSpace: "pre" },
          "& code, & tt": { border: "none" },
        },
        [Ae("span")]: {
          ...t,
          "&.frame": {
            display: "block",
            overflow: "hidden",
            "& > span": {
              border: `1px solid ${e.color.medium}`,
              display: "block",
              float: "left",
              overflow: "hidden",
              margin: "13px 0 0",
              padding: 7,
              width: "auto",
            },
            "& span img": { display: "block", float: "left" },
            "& span span": {
              clear: "both",
              color: e.color.darkest,
              display: "block",
              padding: "5px 0 0",
            },
          },
          "&.align-center": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px auto 0",
              textAlign: "center",
            },
            "& span img": { margin: "0 auto", textAlign: "center" },
          },
          "&.align-right": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px 0 0",
              textAlign: "right",
            },
            "& span img": { margin: 0, textAlign: "right" },
          },
          "&.float-left": {
            display: "block",
            marginRight: 13,
            overflow: "hidden",
            float: "left",
            "& span": { margin: "13px 0 0" },
          },
          "&.float-right": {
            display: "block",
            marginLeft: 13,
            overflow: "hidden",
            float: "right",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px auto 0",
              textAlign: "right",
            },
          },
        },
        [Ae("table")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          padding: 0,
          borderCollapse: "collapse",
          "& tr": {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          "& tr:nth-of-type(2n)": {
            backgroundColor:
              e.base === "dark" ? e.color.darker : e.color.lighter,
          },
          "& tr th": {
            fontWeight: "bold",
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr td": {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
          "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
        },
        [Ae("ul")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
          listStyle: "disc",
        },
      };
    }),
    fne = q.div(({ theme: e }) => ({
      background: e.background.content,
      display: "flex",
      justifyContent: "center",
      padding: "4rem 20px",
      minHeight: "100vh",
      boxSizing: "border-box",
      [`@media (min-width: ${Iu}px)`]: {},
    }));
  var Oa = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      border: `1px solid ${e.appBorderColor}`,
    }),
    xP = ({ zoom: e, resetZoom: t }) =>
      m.createElement(
        m.Fragment,
        null,
        m.createElement(
          Et,
          {
            key: "zoomin",
            onClick: (r) => {
              r.preventDefault(), e(0.8);
            },
            title: "Zoom in",
          },
          m.createElement(_e, { icon: "zoom" })
        ),
        m.createElement(
          Et,
          {
            key: "zoomout",
            onClick: (r) => {
              r.preventDefault(), e(1.25);
            },
            title: "Zoom out",
          },
          m.createElement(_e, { icon: "zoomout" })
        ),
        m.createElement(
          Et,
          {
            key: "zoomreset",
            onClick: (r) => {
              r.preventDefault(), t();
            },
            title: "Reset zoom",
          },
          m.createElement(_e, { icon: "zoomreset" })
        )
      ),
    FP = q(za)({
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      transition: "transform .2s linear",
    }),
    SP = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...o
    }) =>
      m.createElement(
        FP,
        { ...o },
        m.createElement(
          Gu,
          { key: "left" },
          e
            ? [1, 2, 3].map((i) => m.createElement(Wa, { key: i }))
            : m.createElement(xP, { zoom: n, resetZoom: a })
        )
      ),
    Mg = Er({ scale: 1 }),
    { window: wP } = ue,
    BP = class extends et {
      constructor() {
        super(...arguments), (this.iframe = null);
      }
      componentDidMount() {
        let { id: e } = this.props;
        this.iframe = wP.document.getElementById(e);
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e;
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: "top left",
            }),
          !1
        );
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e);
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...o
        } = this.props;
        return m.createElement("iframe", {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: "fullscreen" } : {}),
          loading: "lazy",
          ...o,
        });
      }
    },
    { PREVIEW_URL: TP } = ue,
    OP = TP || "iframe.html",
    Su = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
    _P = (e) => {
      let t = Fe(),
        [r, n] = oe(!0),
        [a, o] = oe(),
        {
          story: i,
          height: u,
          autoplay: s,
          forceInitialArgs: d,
          renderStoryToElement: g,
        } = e;
      ge(() => {
        if (!(i && t.current)) return () => {};
        let y = t.current,
          h = g(
            i,
            y,
            {
              showMain: () => {},
              showError: ({ title: A, description: b }) =>
                o(new Error(`${A} - ${b}`)),
              showException: (A) => o(A),
            },
            { autoplay: s, forceInitialArgs: d }
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => h());
          }
        );
      }, [s, g, i]);
      let E = "<span></span>";
      return a
        ? m.createElement("pre", null, m.createElement(Ua, { error: a }))
        : m.createElement(
            m.Fragment,
            null,
            u
              ? m.createElement(
                  "style",
                  null,
                  `#${Su(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && m.createElement(ku, null),
            m.createElement("div", {
              ref: t,
              id: `${Su(e)}-inner`,
              "data-name": i.name,
              dangerouslySetInnerHTML: { __html: E },
            })
          );
    },
    PP = ({ story: e, height: t = "500px" }) =>
      m.createElement(
        "div",
        { style: { width: "100%", height: t } },
        m.createElement(Mg.Consumer, null, ({ scale: r }) =>
          m.createElement(BP, {
            key: "iframe",
            id: `iframe--${e.id}`,
            title: e.name,
            src: eo(OP, e.id, { viewMode: "story" }),
            allowFullScreen: !0,
            scale: r,
            style: { width: "100%", height: "100%", border: "0 none" },
          })
        )
      ),
    RP = (e) => {
      let { inline: t } = e;
      return m.createElement(
        "div",
        {
          id: Su(e),
          className: "sb-story sb-unstyled",
          "data-story-block": "true",
        },
        t ? m.createElement(_P, { ...e }) : m.createElement(PP, { ...e })
      );
    },
    ku = () => m.createElement(Va, null),
    IP = q.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? "block" : "flex",
        position: "relative",
        flexWrap: "wrap",
        overflow: "auto",
        flexDirection: e ? "column" : "row",
        "& .innerZoomElementWrapper > *": e
          ? {
              width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
              display: "block",
            }
          : {
              maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
              display: "inline-block",
            },
      }),
      ({ layout: e = "padded" }) =>
        e === "centered" || e === "padded"
          ? {
              padding: "30px 20px",
              margin: -10,
              "& .innerZoomElementWrapper > *": {
                width: "auto",
                border: "10px solid transparent!important",
              },
            }
          : {},
      ({ layout: e = "padded" }) =>
        e === "centered"
          ? {
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? {
              ".innerZoomElementWrapper > *": {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {}
    ),
    Ag = q(Ru)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: "none",
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : He(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.85)"
            : He(0.05, e.background.content),
      },
    })),
    kP = q.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: "relative",
        overflow: "hidden",
        margin: "25px 0 40px",
        ...Oa(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        "h3 + &": { marginTop: "16px" },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    NP = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: "No code available",
              className: "docblock-code-toggle docblock-code-toggle--disabled",
              disabled: !0,
              onClick: () => r(!1),
            },
          };
        case t:
          return {
            source: m.createElement(Ag, { ...e, dark: !0 }),
            actionItem: {
              title: "Hide code",
              className: "docblock-code-toggle docblock-code-toggle--expanded",
              onClick: () => r(!1),
            },
          };
        default:
          return {
            source: m.createElement(Ag, { ...e, dark: !0 }),
            actionItem: {
              title: "Show code",
              className: "docblock-code-toggle",
              onClick: () => r(!0),
            },
          };
      }
    };
  function jP(e) {
    if (cn.count(e) === 1) {
      let t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  var MP = q(SP)({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 40,
    }),
    qP = q.div({ overflow: "hidden", position: "relative" }),
    wu = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: i = !1,
      additionalActions: u,
      className: s,
      layout: d = "padded",
      ...g
    }) => {
      let [E, y] = oe(i),
        { source: h, actionItem: A } = NP(a, E, y),
        [b, x] = oe(1),
        F = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
        R = a ? [A] : [],
        [N, L] = oe(u ? [...u] : []),
        w = [...R, ...N],
        { window: M } = ue,
        I = me(async (V) => {
          let { createCopyToClipboardFunction: z } =
            await Promise.resolve().then(() => (Dr(), Zu));
          z();
        }, []),
        U = (V) => {
          let z = M.getSelection();
          (z && z.type === "Range") ||
            (V.preventDefault(),
            N.filter((ae) => ae.title === "Copied").length === 0 &&
              I(h.props.code).then(() => {
                L([...N, { title: "Copied", onClick: () => {} }]),
                  M.setTimeout(
                    () => L(N.filter((ae) => ae.title !== "Copied")),
                    1500
                  );
              }));
        };
      return m.createElement(
        kP,
        { withSource: a, withToolbar: o, ...g, className: F.join(" ") },
        o &&
          m.createElement(MP, {
            isLoading: e,
            border: !0,
            zoom: (V) => x(b * V),
            resetZoom: () => x(1),
            storyId: jP(n),
            baseUrl: "./iframe.html",
          }),
        m.createElement(
          Mg.Provider,
          { value: { scale: b } },
          m.createElement(
            qP,
            { className: "docs-story", onCopyCapture: a && U },
            m.createElement(
              IP,
              { isColumn: t || !Array.isArray(n), columns: r, layout: d },
              m.createElement(
                Qa.Element,
                { scale: b },
                Array.isArray(n)
                  ? n.map((V, z) => m.createElement("div", { key: z }, V))
                  : m.createElement("div", null, n)
              )
            ),
            m.createElement(qa, { actionItems: w })
          )
        ),
        a && E && h
      );
    },
    LP = q(wu)(() => ({
      ".docs-story": { paddingTop: 32, paddingBottom: 40 },
    })),
    $P = () =>
      m.createElement(
        LP,
        { isLoading: !0, withToolbar: !0 },
        m.createElement(ku, null)
      ),
    UP = q.table(({ theme: e }) => ({
      "&&": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        border: "none",
        tr: { border: "none !important", background: "none" },
        "td, th": { padding: 0, border: "none", width: "auto!important" },
        marginTop: 0,
        marginBottom: 0,
        "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
        "th:last-of-type, td:last-of-type": { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: "none", border: "none" },
        code: kt({ theme: e }),
        div: { span: { fontWeight: "bold" } },
        "& code": {
          margin: 0,
          display: "inline-block",
          fontSize: e.typography.size.s1,
        },
      },
    })),
    zP = ({ tags: e }) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null;
      return !r && !a && !n
        ? null
        : m.createElement(
            m.Fragment,
            null,
            m.createElement(
              UP,
              null,
              m.createElement(
                "tbody",
                null,
                n &&
                  m.createElement(
                    "tr",
                    { key: "deprecated" },
                    m.createElement(
                      "td",
                      { colSpan: 2 },
                      m.createElement("strong", null, "Deprecated"),
                      ": ",
                      e.deprecated
                    )
                  ),
                r &&
                  t.map((o) =>
                    m.createElement(
                      "tr",
                      { key: o.name },
                      m.createElement(
                        "td",
                        null,
                        m.createElement("code", null, o.name)
                      ),
                      m.createElement("td", null, o.description)
                    )
                  ),
                a &&
                  m.createElement(
                    "tr",
                    { key: "returns" },
                    m.createElement(
                      "td",
                      null,
                      m.createElement("code", null, "Returns")
                    ),
                    m.createElement("td", null, e.returns.description)
                  )
              )
            )
          );
    },
    Bu = 8,
    Eg = q.div(({ isExpanded: e }) => ({
      display: "flex",
      flexDirection: e ? "column" : "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      marginBottom: "-4px",
      minWidth: 100,
    })),
    HP = q.span(kt, ({ theme: e, simple: t = !1 }) => ({
      flex: "0 0 auto",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: "break-word",
      whiteSpace: "normal",
      maxWidth: "100%",
      margin: 0,
      marginRight: "4px",
      marginBottom: "4px",
      paddingTop: "2px",
      paddingBottom: "2px",
      lineHeight: "13px",
      ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
    })),
    GP = q.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: "4px",
      background: "none",
      border: "none",
    })),
    WP = q.div(kt, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
    })),
    VP = q.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: "content-box",
      "& code": { padding: "0 !important" },
    })),
    KP = q(_e)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    YP = () => m.createElement("span", null, "-"),
    qg = ({ text: e, simple: t }) => m.createElement(HP, { simple: t }, e),
    JP = (0, Ig.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    }),
    XP = (e) => {
      if (!e) return [e];
      let t = e.split("|").map((r) => r.trim());
      return (0, kg.default)(t);
    },
    vg = (e, t = !0) => {
      let r = e;
      return (
        t || (r = e.slice(0, Bu)),
        r.map((n) => m.createElement(qg, { key: n, text: n === "" ? '""' : n }))
      );
    },
    QP = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = oe(!1),
        [i, u] = oe(t || !1);
      if (r == null) return null;
      let s = typeof r.toString == "function" ? r.toString() : r;
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return m.createElement(qg, { text: s });
        let d = XP(s),
          g = d.length;
        return g > Bu
          ? m.createElement(
              Eg,
              { isExpanded: i },
              vg(d, i),
              m.createElement(
                GP,
                { onClick: () => u(!i) },
                i ? "Show less..." : `Show ${g - Bu} more...`
              )
            )
          : m.createElement(Eg, null, vg(d));
      }
      return m.createElement(
        Xa,
        {
          closeOnOutsideClick: !0,
          placement: "bottom",
          visible: a,
          onVisibleChange: (d) => {
            o(d);
          },
          tooltip: m.createElement(
            VP,
            { width: JP(n) },
            m.createElement(pn, { language: "jsx", format: !1 }, n)
          ),
        },
        m.createElement(
          WP,
          { className: "sbdocs-expandable" },
          m.createElement("span", null, s),
          m.createElement(KP, { icon: a ? "arrowup" : "arrowdown" })
        )
      );
    },
    vu = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? m.createElement(YP, null)
        : m.createElement(QP, { value: e, initialExpandedArgs: t }),
    ZP = q.label(({ theme: e }) => ({
      lineHeight: "18px",
      alignItems: "center",
      marginBottom: 8,
      display: "inline-block",
      position: "relative",
      whiteSpace: "nowrap",
      background: e.boolean.background,
      borderRadius: "3em",
      padding: 1,
      input: {
        appearance: "none",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "3em",
        "&:focus": {
          outline: "none",
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: "center",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: "1",
        cursor: "pointer",
        display: "inline-block",
        padding: "7px 15px",
        transition: "all 100ms ease-out",
        userSelect: "none",
        borderRadius: "3em",
        color: de(0.5, e.color.defaultText),
        background: "transparent",
        "&:hover": {
          boxShadow: `${wr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        "&:active": {
          boxShadow: `${wr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: wr(1, e.appBorderColor),
        },
        "&:first-of-type": { paddingRight: 8 },
        "&:last-of-type": { paddingLeft: 8 },
      },
      "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === "light"
              ? `${wr(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: "7px 15px",
        },
    })),
    eR = (e) => e === "true",
    tR = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = me(() => r(!1), [r]);
      if (t === void 0)
        return m.createElement(
          Oe.Button,
          { id: Cr(e), onClick: o },
          "Set boolean"
        );
      let i = Pe(e),
        u = typeof t == "string" ? eR(t) : t;
      return m.createElement(
        ZP,
        { htmlFor: i, title: u ? "Change to false" : "Change to true" },
        m.createElement("input", {
          id: i,
          type: "checkbox",
          onChange: (s) => r(s.target.checked),
          checked: u,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        m.createElement("span", null, "False"),
        m.createElement("span", null, "True")
      );
    },
    rR = (e) => {
      let [t, r, n] = e.split("-"),
        a = new Date();
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      );
    },
    nR = (e) => {
      let [t, r] = e.split(":"),
        n = new Date();
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
    },
    aR = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2);
      return `${r}-${n}-${a}`;
    },
    oR = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2);
      return `${r}:${n}`;
    },
    iR = q.div(({ theme: e }) => ({
      flex: 1,
      display: "flex",
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        "&::-webkit-calendar-picker-indicator": {
          opacity: 0.5,
          height: 12,
          filter: e.base === "light" ? void 0 : "invert(1)",
        },
      },
      "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
      "input:last-of-type": { flexGrow: 3 },
    })),
    uR = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, i] = oe(!0),
        u = Fe(),
        s = Fe();
      ge(() => {
        o !== !1 &&
          (u && u.current && (u.current.value = aR(t)),
          s && s.current && (s.current.value = oR(t)));
      }, [t]);
      let d = (y) => {
          let h = rR(y.target.value),
            A = new Date(t);
          A.setFullYear(h.getFullYear(), h.getMonth(), h.getDate());
          let b = A.getTime();
          b && r(b), i(!!b);
        },
        g = (y) => {
          let h = nR(y.target.value),
            A = new Date(t);
          A.setHours(h.getHours()), A.setMinutes(h.getMinutes());
          let b = A.getTime();
          b && r(b), i(!!b);
        },
        E = Pe(e);
      return m.createElement(
        iR,
        null,
        m.createElement(Oe.Input, {
          type: "date",
          max: "9999-12-31",
          ref: u,
          id: `${E}-date`,
          name: `${E}-date`,
          onChange: d,
          onFocus: n,
          onBlur: a,
        }),
        m.createElement(Oe.Input, {
          type: "time",
          id: `${E}-time`,
          name: `${E}-time`,
          ref: s,
          onChange: g,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : m.createElement("div", null, "invalid")
      );
    },
    sR = q.label({ display: "flex" }),
    lR = (e) => {
      let t = parseFloat(e);
      return Number.isNaN(t) ? void 0 : t;
    };
  var cR = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: o,
      onBlur: i,
      onFocus: u,
    }) => {
      let [s, d] = oe(typeof t == "number" ? t : ""),
        [g, E] = oe(!1),
        [y, h] = oe(null),
        A = me(
          (F) => {
            d(F.target.value);
            let R = parseFloat(F.target.value);
            Number.isNaN(R)
              ? h(new Error(`'${F.target.value}' is not a number`))
              : (r(R), h(null));
          },
          [r, h]
        ),
        b = me(() => {
          d("0"), r(0), E(!0);
        }, [E]),
        x = Fe(null);
      return (
        ge(() => {
          g && x.current && x.current.select();
        }, [g]),
        ge(() => {
          s !== (typeof t == "number" ? t : "") && d(t);
        }, [t]),
        !g && t === void 0
          ? m.createElement(Oe.Button, { id: Cr(e), onClick: b }, "Set number")
          : m.createElement(
              sR,
              null,
              m.createElement(Oe.Input, {
                ref: x,
                id: Pe(e),
                type: "number",
                onChange: A,
                size: "flex",
                placeholder: "Edit number...",
                value: s,
                valid: y ? "error" : null,
                autoFocus: g,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: u,
                onBlur: i,
              })
            )
      );
    },
    Lg = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e);
      return r ? r[0] : void 0;
    },
    Tu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    $g = (e, t) => e && t && e.map((r) => t[r]),
    pR = q.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    dR = q.span({}),
    fR = q.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Dg = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          $e.warn(`Checkbox with no options: ${e}`),
          m.createElement(m.Fragment, null, "-")
        );
      let o = Tu(r, t),
        [i, u] = oe(o),
        s = (g) => {
          let E = g.target.value,
            y = [...i];
          y.includes(E) ? y.splice(y.indexOf(E), 1) : y.push(E),
            n($g(y, t)),
            u(y);
        };
      ge(() => {
        u(Tu(r, t));
      }, [r]);
      let d = Pe(e);
      return m.createElement(
        pR,
        { isInline: a },
        Object.keys(t).map((g, E) => {
          let y = `${d}-${E}`;
          return m.createElement(
            fR,
            { key: y, htmlFor: y },
            m.createElement("input", {
              type: "checkbox",
              id: y,
              name: y,
              value: g,
              onChange: s,
              checked: i?.includes(g),
            }),
            m.createElement(dR, null, g)
          );
        })
      );
    },
    hR = q.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    yR = q.span({}),
    mR = q.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Cg = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          $e.warn(`Radio with no options: ${e}`),
          m.createElement(m.Fragment, null, "-")
        );
      let o = Lg(r, t),
        i = Pe(e);
      return m.createElement(
        hR,
        { isInline: a },
        Object.keys(t).map((u, s) => {
          let d = `${i}-${s}`;
          return m.createElement(
            mR,
            { key: d, htmlFor: d },
            m.createElement("input", {
              type: "radio",
              id: d,
              name: d,
              value: u,
              onChange: (g) => n(t[g.currentTarget.value]),
              checked: u === o,
            }),
            m.createElement(yR, null, u)
          );
        })
      );
    },
    gR = {
      appearance: "none",
      border: "0 none",
      boxSizing: "inherit",
      display: " block",
      margin: " 0",
      background: "transparent",
      padding: 0,
      fontSize: "inherit",
      position: "relative",
    },
    Ug = q.select(({ theme: e }) => ({
      ...gR,
      boxSizing: "border-box",
      position: "relative",
      padding: "6px 10px",
      width: "100%",
      color: e.input.color || "inherit",
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: "20px",
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: "none",
      },
      "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
      "::placeholder": { color: e.textMutedColor },
      "&[multiple]": {
        overflow: "auto",
        padding: 0,
        option: {
          display: "block",
          padding: "6px 10px",
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    zg = q.span(({ theme: e }) => ({
      display: "inline-block",
      lineHeight: "normal",
      overflow: "hidden",
      position: "relative",
      verticalAlign: "top",
      width: "100%",
      svg: {
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
        height: "12px",
        marginTop: "-6px",
        right: "12px",
        top: "50%",
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    xg = "Choose option...",
    bR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          n(r[u.currentTarget.value]);
        },
        o = Lg(t, r) || xg,
        i = Pe(e);
      return m.createElement(
        zg,
        null,
        m.createElement(_e, { icon: "arrowdown" }),
        m.createElement(
          Ug,
          { id: i, value: o, onChange: a },
          m.createElement("option", { key: "no-selection", disabled: !0 }, xg),
          Object.keys(r).map((u) => m.createElement("option", { key: u }, u))
        )
      );
    },
    AR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          let s = Array.from(u.currentTarget.options)
            .filter((d) => d.selected)
            .map((d) => d.value);
          n($g(s, r));
        },
        o = Tu(t, r),
        i = Pe(e);
      return m.createElement(
        zg,
        null,
        m.createElement(
          Ug,
          { id: i, multiple: !0, value: o, onChange: a },
          Object.keys(r).map((u) => m.createElement("option", { key: u }, u))
        )
      );
    },
    Fg = (e) => {
      let { name: t, options: r } = e;
      return r
        ? e.isMulti
          ? m.createElement(AR, { ...e })
          : m.createElement(bR, { ...e })
        : ($e.warn(`Select with no options: ${t}`),
          m.createElement(m.Fragment, null, "-"));
    },
    ER = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    vR = {
      check: Dg,
      "inline-check": Dg,
      radio: Cg,
      "inline-radio": Cg,
      select: Fg,
      "multi-select": Fg,
    },
    br = (e) => {
      let { type: t = "select", labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? ER(n.options, r) : {},
          isInline: t.includes("inline"),
          isMulti: t.includes("multi"),
        },
        o = vR[t];
      if (o) return m.createElement(o, { ...a });
      throw new Error(`Unknown options type: ${t}`);
    },
    Nu = "value",
    DR = "key",
    CR = "Error",
    xR = "Object",
    FR = "Array",
    SR = "String",
    wR = "Number",
    BR = "Boolean",
    TR = "Date",
    OR = "Null",
    _R = "Undefined",
    PR = "Function",
    RR = "Symbol",
    Hg = "ADD_DELTA_TYPE",
    Gg = "REMOVE_DELTA_TYPE",
    Wg = "UPDATE_DELTA_TYPE";
  function At(e) {
    return e !== null &&
      typeof e == "object" &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == "function"
      ? "Iterable"
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function Vg(e, t) {
    let r = At(e),
      n = At(t);
    return (r === "Function" || n === "Function") && n !== r;
  }
  var ju = class extends et {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props;
      e && typeof e.focus == "function" && e.focus(),
        r && t && typeof t.focus == "function" && t.focus(),
        document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.props.handleCancel()));
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        { inputRefKey: o, inputRefValue: i } = this.state,
        u = {};
      if (!t) {
        if (!o.value) return;
        u.key = o.value;
      }
      (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
    }
    refInputKey(e) {
      this.state.inputRefKey = e;
    }
    refInputValue(e) {
      this.state.inputRefValue = e;
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: i,
        } = this.props,
        u = ye(r, { onClick: this.onSubmit }),
        s = ye(n, { onClick: e }),
        d = a(Nu, o, i),
        g = ye(d, { placeholder: "Value", ref: this.refInputValue }),
        E = null;
      if (!t) {
        let y = a(DR, o, i);
        E = ye(y, { placeholder: "Key", ref: this.refInputKey });
      }
      return m.createElement(
        "span",
        { className: "rejt-add-value-node" },
        E,
        g,
        s,
        u
      );
    }
  };
  ju.defaultProps = {
    onlyValue: !1,
    addButtonElement: m.createElement("button", null, "+"),
    cancelButtonElement: m.createElement("button", null, "c"),
  };
  var Kg = class extends et {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Gg };
            n.splice(e, 1), this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(u);
          })
          .catch(r.error);
      };
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          let i = [...t, e];
          this.setState({ data: i }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(r[r.length - 1], i),
            s({
              type: Hg,
              keyPath: r,
              deep: n,
              key: i.length - 1,
              newValue: e,
            });
        })
        .catch(o.error);
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: g } = this.props;
            d(i[i.length - 1], o),
              g({
                type: Wg,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r(void 0);
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: i,
          dataType: u,
          minusMenuElement: s,
        } = this.props,
        { minus: d, collapsed: g } = i(e, t, r, n, u),
        E = o(e, t, r, n, u),
        y = ye(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return m.createElement(
        "span",
        { className: "rejt-collapsed" },
        m.createElement(
          "span",
          {
            className: "rejt-collapsed-text",
            style: g,
            onClick: this.handleCollapseMode,
          },
          "[...] ",
          t.length,
          " ",
          t.length === 1 ? "item" : "items"
        ),
        !E && y
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: g,
          dataType: E,
          addButtonElement: y,
          cancelButtonElement: h,
          editButtonElement: A,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: R,
          beforeRemoveAction: N,
          beforeAddAction: L,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: V,
          delimiter: z,
          ul: ae,
          addForm: Q,
        } = g(e, t, r, n, E),
        Y = d(e, t, r, n, E),
        _ = ye(R, {
          onClick: this.handleAddMode,
          className: "rejt-plus-menu",
          style: V,
        }),
        T = ye(F, { onClick: u, className: "rejt-minus-menu", style: U }),
        j = !0,
        G = "[",
        J = "]";
      return m.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        m.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: z },
          G
        ),
        !a && _,
        m.createElement(
          "ul",
          { className: "rejt-not-collapsed-list", style: ae },
          t.map((K, Z) =>
            m.createElement(_a, {
              key: Z,
              name: `${Z}`,
              data: K,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: d,
              getStyle: g,
              addButtonElement: y,
              cancelButtonElement: h,
              editButtonElement: A,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: R,
              beforeRemoveAction: N,
              beforeAddAction: L,
              beforeUpdateAction: w,
              logger: M,
              onSubmitValueParser: I,
            })
          )
        ),
        !Y &&
          a &&
          m.createElement(
            "div",
            { className: "rejt-add-form", style: Q },
            m.createElement(ju, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: j,
              addButtonElement: y,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: z },
          J
        ),
        !Y && T
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = i(e, r, n, a, o);
      return m.createElement(
        "div",
        { className: "rejt-array-node" },
        m.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          m.createElement(
            "span",
            { className: "rejt-name", style: s.name },
            e,
            " :",
            " "
          )
        ),
        u
      );
    }
  };
  Kg.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement("span", null, " - "),
    plusMenuElement: m.createElement("span", null, " + "),
  };
  var Yg = class extends et {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          Vg(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: d,
          editButtonElement: g,
          cancelButtonElement: E,
          textareaElementGenerator: y,
          minusMenuElement: h,
          keyPath: A,
        } = this.props,
        b = d(e, i, n, a, s),
        x = null,
        F = null,
        R = u(e, i, n, a, s);
      if (r && !R) {
        let N = y(Nu, A, a, e, i, s),
          L = ye(g, { onClick: this.handleEdit }),
          w = ye(E, { onClick: this.handleCancelEdit }),
          M = ye(N, { ref: this.refInput, defaultValue: i });
        (x = m.createElement(
          "span",
          { className: "rejt-edit-form", style: b.editForm },
          M,
          " ",
          w,
          L
        )),
          (F = null);
      } else {
        x = m.createElement(
          "span",
          {
            className: "rejt-value",
            style: b.value,
            onClick: R ? null : this.handleEditMode,
          },
          t
        );
        let N = ye(h, {
          onClick: o,
          className: "rejt-minus-menu",
          style: b.minus,
        });
        F = R ? null : N;
      }
      return m.createElement(
        "li",
        { className: "rejt-function-value-node", style: b.li },
        m.createElement(
          "span",
          { className: "rejt-name", style: b.name },
          e,
          " :",
          " "
        ),
        x,
        F
      );
    }
  };
  Yg.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: m.createElement("button", null, "e"),
    cancelButtonElement: m.createElement("button", null, "c"),
    minusMenuElement: m.createElement("span", null, " - "),
  };
  var _a = class extends et {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: i,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: g,
          addButtonElement: E,
          cancelButtonElement: y,
          editButtonElement: h,
          inputElementGenerator: A,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: F,
          beforeRemoveAction: R,
          beforeAddAction: N,
          beforeUpdateAction: L,
          logger: w,
          onSubmitValueParser: M,
        } = this.props,
        I = () => !0,
        U = At(e);
      switch (U) {
        case CR:
          return m.createElement(Ou, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: I,
            dataType: U,
            getStyle: g,
            addButtonElement: E,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: N,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          });
        case xR:
          return m.createElement(Ou, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: g,
            addButtonElement: E,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: N,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          });
        case FR:
          return m.createElement(Kg, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: g,
            addButtonElement: E,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: R,
            beforeAddAction: N,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: M,
          });
        case SR:
          return m.createElement(bt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case wR:
          return m.createElement(bt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case BR:
          return m.createElement(bt, {
            name: t,
            value: e ? "true" : "false",
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case TR:
          return m.createElement(bt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case OR:
          return m.createElement(bt, {
            name: t,
            value: "null",
            originalValue: "null",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case _R:
          return m.createElement(bt, {
            name: t,
            value: "undefined",
            originalValue: "undefined",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case PR:
          return m.createElement(Yg, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case RR:
          return m.createElement(bt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: g,
            cancelButtonElement: y,
            editButtonElement: h,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        default:
          return null;
      }
    }
  };
  _a.defaultProps = { keyPath: [], deep: 0 };
  var Ou = class extends et {
    constructor(e) {
      super(e);
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: i } = this.props;
      o(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(n[n.length - 1], r),
            s({ type: Hg, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(i.error);
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Gg };
            delete n[e], this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(u);
          })
          .catch(r.error);
      };
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: g } = this.props;
            d(i[i.length - 1], o),
              g({
                type: Wg,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r();
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: i,
          getStyle: u,
          minusMenuElement: s,
        } = this.props,
        { minus: d, collapsed: g } = u(e, n, t, r, i),
        E = Object.getOwnPropertyNames(n),
        y = o(e, n, t, r, i),
        h = ye(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return m.createElement(
        "span",
        { className: "rejt-collapsed" },
        m.createElement(
          "span",
          {
            className: "rejt-collapsed-text",
            style: g,
            onClick: this.handleCollapseMode,
          },
          "{...}",
          " ",
          E.length,
          " ",
          E.length === 1 ? "key" : "keys"
        ),
        !y && h
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: g,
          dataType: E,
          addButtonElement: y,
          cancelButtonElement: h,
          editButtonElement: A,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: R,
          beforeRemoveAction: N,
          beforeAddAction: L,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: V,
          addForm: z,
          ul: ae,
          delimiter: Q,
        } = g(e, t, r, n, E),
        Y = Object.getOwnPropertyNames(t),
        _ = d(e, t, r, n, E),
        T = ye(R, {
          onClick: this.handleAddMode,
          className: "rejt-plus-menu",
          style: V,
        }),
        j = ye(F, { onClick: u, className: "rejt-minus-menu", style: U }),
        G = Y.map((Z) =>
          m.createElement(_a, {
            key: Z,
            name: Z,
            data: t[Z],
            keyPath: r,
            deep: a,
            isCollapsed: i,
            handleRemove: this.handleRemoveValue(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: d,
            getStyle: g,
            addButtonElement: y,
            cancelButtonElement: h,
            editButtonElement: A,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: R,
            beforeRemoveAction: N,
            beforeAddAction: L,
            beforeUpdateAction: w,
            logger: M,
            onSubmitValueParser: I,
          })
        ),
        J = "{",
        K = "}";
      return m.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        m.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: Q },
          J
        ),
        !_ && T,
        m.createElement(
          "ul",
          { className: "rejt-not-collapsed-list", style: ae },
          G
        ),
        !_ &&
          o &&
          m.createElement(
            "div",
            { className: "rejt-add-form", style: z },
            m.createElement(ju, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: y,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: Q },
          K
        ),
        !_ && j
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, i);
      return m.createElement(
        "div",
        { className: "rejt-object-node" },
        m.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          m.createElement(
            "span",
            { className: "rejt-name", style: s.name },
            e,
            " :",
            " "
          )
        ),
        u
      );
    }
  };
  Ou.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement("span", null, " - "),
    plusMenuElement: m.createElement("span", null, " + "),
  };
  var bt = class extends et {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          Vg(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: d,
          editButtonElement: g,
          cancelButtonElement: E,
          inputElementGenerator: y,
          minusMenuElement: h,
          keyPath: A,
        } = this.props,
        b = d(e, i, n, a, s),
        x = u(e, i, n, a, s),
        F = r && !x,
        R = y(Nu, A, a, e, i, s),
        N = ye(g, { onClick: this.handleEdit }),
        L = ye(E, { onClick: this.handleCancelEdit }),
        w = ye(R, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
        M = ye(h, { onClick: o, className: "rejt-minus-menu", style: b.minus });
      return m.createElement(
        "li",
        { className: "rejt-value-node", style: b.li },
        m.createElement(
          "span",
          { className: "rejt-name", style: b.name },
          e,
          " : "
        ),
        F
          ? m.createElement(
              "span",
              { className: "rejt-edit-form", style: b.editForm },
              w,
              " ",
              L,
              N
            )
          : m.createElement(
              "span",
              {
                className: "rejt-value",
                style: b.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !F && M
      );
    }
  };
  bt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: m.createElement("button", null, "e"),
    cancelButtonElement: m.createElement("button", null, "c"),
    minusMenuElement: m.createElement("span", null, " - "),
  };
  var IR = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    kR = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    NR = {
      minus: { color: "red" },
      editForm: {},
      value: { color: "#7bba3d" },
      li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
      name: { color: "#2287CD" },
    };
  function jR(e) {
    let t = e;
    if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  var Jg = class extends et {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null;
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }
    removeRoot() {
      this.onUpdate(null, null);
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: i,
          cancelButtonElement: u,
          editButtonElement: s,
          inputElement: d,
          textareaElement: g,
          minusMenuElement: E,
          plusMenuElement: y,
          beforeRemoveAction: h,
          beforeAddAction: A,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: F,
          fallback: R = null,
        } = this.props,
        N = At(e),
        L = a;
      At(a) === "Boolean" && (L = () => a);
      let w = d;
      d && At(d) !== "Function" && (w = () => d);
      let M = g;
      return (
        g && At(g) !== "Function" && (M = () => g),
        N === "Object" || N === "Array"
          ? m.createElement(
              "div",
              { className: "rejt-tree" },
              m.createElement(_a, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: L,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: u,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: M,
                minusMenuElement: E,
                plusMenuElement: y,
                handleRemove: this.removeRoot,
                beforeRemoveAction: h,
                beforeAddAction: A,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: F,
              })
            )
          : R
      );
    }
  };
  Jg.defaultProps = {
    rootName: "root",
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case "Object":
        case "Error":
          return IR;
        case "Array":
          return kR;
        default:
          return NR;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => jR(a),
    inputElement: () => m.createElement("input", null),
    textareaElement: () => m.createElement("textarea", null),
    fallback: null,
  };
  var { window: MR } = ue,
    qR = q.div(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
      ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
        { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
      ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
        { "& > svg": { opacity: 1 } },
      ".rejt-edit-form button": { display: "none" },
      ".rejt-add-form": { marginLeft: 10 },
      ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
      ".rejt-name": { lineHeight: "22px" },
      ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
      ".rejt-plus-menu": { marginLeft: 5 },
      ".rejt-object-node > span > *": { position: "relative", zIndex: 2 },
      ".rejt-object-node, .rejt-array-node": { position: "relative" },
      ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
        {
          content: '""',
          position: "absolute",
          top: 0,
          display: "block",
          width: "100%",
          marginLeft: "-1rem",
          padding: "0 4px 0 1rem",
          height: 22,
        },
      ".rejt-collapsed::before, .rejt-not-collapsed::before": {
        zIndex: 1,
        background: "transparent",
        borderRadius: 4,
        transition: "background 0.2s",
        pointerEvents: "none",
        opacity: 0.1,
      },
      ".rejt-object-node:hover, .rejt-array-node:hover": {
        "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
          background: e.color.secondary,
        },
      },
      ".rejt-collapsed::after, .rejt-not-collapsed::after": {
        content: '""',
        position: "absolute",
        display: "inline-block",
        pointerEvents: "none",
        width: 0,
        height: 0,
      },
      ".rejt-collapsed::after": {
        left: -8,
        top: 8,
        borderTop: "3px solid transparent",
        borderBottom: "3px solid transparent",
        borderLeft: "3px solid rgba(153,153,153,0.6)",
      },
      ".rejt-not-collapsed::after": {
        left: -10,
        top: 10,
        borderTop: "3px solid rgba(153,153,153,0.6)",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
      },
      ".rejt-value": {
        display: "inline-block",
        border: "1px solid transparent",
        borderRadius: 4,
        margin: "1px 0",
        padding: "0 4px",
        cursor: "text",
        color: e.color.defaultText,
      },
      ".rejt-value-node:hover > .rejt-value": {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    Du = q.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : "transparent",
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? "bold" : "normal",
      cursor: "pointer",
      order: t ? "initial" : 9,
    })),
    Sg = q(_e)(({ theme: e, icon: t, disabled: r }) => ({
      display: "inline-block",
      verticalAlign: "middle",
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? "not-allowed" : "pointer",
      color: e.textMutedColor,
      "&:hover": r
        ? {}
        : { color: t === "subtract" ? e.color.negative : e.color.ancillary },
      "svg + &": { marginLeft: 0 },
    })),
    wg = q.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : "1px 0",
      padding: "3px 4px",
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: "14px",
      width: t === "Key" ? 80 : 120,
      "&:focus": { border: `1px solid ${e.color.secondary}` },
    })),
    LR = q(Et)(({ theme: e }) => ({
      position: "absolute",
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: "0 3px",
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: "9px",
      fontWeight: "bold",
      textDecoration: "none",
      span: { marginLeft: 3, marginTop: 1 },
    })),
    $R = q(Oe.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: "7px 6px",
      fontFamily: e.typography.fonts.mono,
      fontSize: "12px",
      lineHeight: "18px",
      "&::placeholder": {
        fontFamily: e.typography.fonts.base,
        fontSize: "13px",
      },
      "&:placeholder-shown": { padding: "7px 10px" },
    })),
    UR = {
      bubbles: !0,
      cancelable: !0,
      key: "Enter",
      code: "Enter",
      keyCode: 13,
    },
    zR = (e) => {
      e.currentTarget.dispatchEvent(new MR.KeyboardEvent("keydown", UR));
    },
    HR = (e) => {
      e.currentTarget.select();
    },
    GR = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
      li: { outline: 0 },
    }),
    Bg = ({ name: e, value: t, onChange: r }) => {
      let n = ns(),
        a = it(() => t && (0, Ng.default)(t), [t]),
        o = a != null,
        [i, u] = oe(!o),
        [s, d] = oe(null),
        g = me(
          (x) => {
            try {
              x && r(JSON.parse(x)), d(void 0);
            } catch (F) {
              d(F);
            }
          },
          [r]
        ),
        [E, y] = oe(!1),
        h = me(() => {
          r({}), y(!0);
        }, [y]),
        A = Fe(null);
      if (
        (ge(() => {
          E && A.current && A.current.select();
        }, [E]),
        !o)
      )
        return m.createElement(
          Oe.Button,
          { id: Cr(e), onClick: h },
          "Set object"
        );
      let b = m.createElement($R, {
        ref: A,
        id: Pe(e),
        name: e,
        defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
        onBlur: (x) => g(x.target.value),
        placeholder: "Edit JSON string...",
        autoFocus: E,
        valid: s ? "error" : null,
      });
      return m.createElement(
        qR,
        null,
        ["Object", "Array"].includes(At(a)) &&
          m.createElement(
            LR,
            {
              href: "#",
              onClick: (x) => {
                x.preventDefault(), u((F) => !F);
              },
            },
            m.createElement(_e, { icon: i ? "eyeclose" : "eye" }),
            m.createElement("span", null, "RAW")
          ),
        i
          ? b
          : m.createElement(Jg, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: GR(n),
              cancelButtonElement: m.createElement(
                Du,
                { type: "button" },
                "Cancel"
              ),
              editButtonElement: m.createElement(
                Du,
                { type: "submit" },
                "Save"
              ),
              addButtonElement: m.createElement(
                Du,
                { type: "submit", primary: !0 },
                "Save"
              ),
              plusMenuElement: m.createElement(Sg, { icon: "add" }),
              minusMenuElement: m.createElement(Sg, { icon: "subtract" }),
              inputElement: (x, F, R, N) =>
                N
                  ? m.createElement(wg, { onFocus: HR, onBlur: zR })
                  : m.createElement(wg, null),
              fallback: b,
            })
      );
    },
    WR = q.input(({ theme: e, min: t, max: r, value: n }) => ({
      "&": {
        width: "100%",
        backgroundColor: "transparent",
        appearance: "none",
      },
      "&::-webkit-slider-runnable-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${He(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${He(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${lt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${lt(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
      },
      "&::-webkit-slider-thumb": {
        marginTop: "-6px",
        width: 16,
        height: 16,
        border: `1px solid ${ze(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${ze(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        appearance: "none",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${He(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&:focus": {
        outline: "none",
        "&::-webkit-slider-runnable-track": {
          borderColor: ze(e.color.secondary, 0.4),
        },
        "&::-webkit-slider-thumb": {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      "&::-moz-range-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${He(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${He(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${lt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${lt(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
        outline: "none",
      },
      "&::-moz-range-thumb": {
        width: 16,
        height: 16,
        border: `1px solid ${ze(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${ze(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${He(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&::-ms-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${He(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${He(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${lt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${lt(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: "transparent",
        width: "100%",
        height: "6px",
        cursor: "pointer",
      },
      "&::-ms-fill-lower": { borderRadius: 6 },
      "&::-ms-fill-upper": { borderRadius: 6 },
      "&::-ms-thumb": {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${ze(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: "grab",
        marginTop: 0,
      },
      "@supports (-ms-ime-align:auto)": {
        "input[type=range]": { margin: "0" },
      },
    })),
    Xg = q.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: "nowrap",
      fontFeatureSettings: "tnum",
      fontVariantNumeric: "tabular-nums",
    }),
    VR = q(Xg)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: "right",
      flexShrink: 0,
    })),
    KR = q.div({ display: "flex", alignItems: "center", width: "100%" });
  function YR(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  var JR = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: i,
      onFocus: u,
    }) => {
      let s = (E) => {
          r(lR(E.target.value));
        },
        d = t !== void 0,
        g = it(() => YR(o), [o]);
      return m.createElement(
        KR,
        null,
        m.createElement(Xg, null, n),
        m.createElement(WR, {
          id: Pe(e),
          type: "range",
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: u,
          onBlur: i,
        }),
        m.createElement(
          VR,
          { numberOFDecimalsPlaces: g, max: a },
          `${d ? t.toFixed(g) : "--"}`,
          " / ",
          a
        )
      );
    },
    XR = q.label({ display: "flex" }),
    QR = q.div(({ isMaxed: e }) => ({
      marginLeft: "0.75rem",
      paddingTop: "0.35rem",
      color: e ? "red" : void 0,
    })),
    ZR = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: o,
    }) => {
      let i = (E) => {
          r(E.target.value);
        },
        [u, s] = oe(!1),
        d = me(() => {
          r(""), s(!0);
        }, [s]);
      if (t === void 0)
        return m.createElement(
          Oe.Button,
          { id: Cr(e), onClick: d },
          "Set string"
        );
      let g = typeof t == "string";
      return m.createElement(
        XR,
        null,
        m.createElement(Oe.Textarea, {
          id: Pe(e),
          maxLength: o,
          onChange: i,
          size: "flex",
          placeholder: "Edit string...",
          autoFocus: u,
          valid: g ? null : "error",
          name: e,
          value: g ? t : "",
          onFocus: n,
          onBlur: a,
        }),
        o &&
          m.createElement(
            QR,
            { isMaxed: t?.length === o },
            t?.length ?? 0,
            " / ",
            o
          )
      );
    },
    eI = q(Oe.Input)({ padding: 10 });
  function tI(e) {
    e.forEach((t) => {
      t.startsWith("blob:") && URL.revokeObjectURL(t);
    });
  }
  var rI = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
      let a = Fe(null);
      function o(i) {
        if (!i.target.files) return;
        let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
        e(u), tI(n);
      }
      return (
        ge(() => {
          n == null && a.current && (a.current.value = null);
        }, [n, t]),
        m.createElement(eI, {
          ref: a,
          id: Pe(t),
          type: "file",
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: "flex",
        })
      );
    },
    nI = Vu(() => Promise.resolve().then(() => (bg(), gg))),
    aI = (e) =>
      m.createElement(
        Wu,
        { fallback: m.createElement("div", null) },
        m.createElement(nI, { ...e })
      ),
    oI = {
      array: Bg,
      object: Bg,
      boolean: tR,
      color: aI,
      date: uR,
      number: cR,
      check: br,
      "inline-check": br,
      radio: br,
      "inline-radio": br,
      select: br,
      "multi-select": br,
      range: JR,
      text: ZR,
      file: rI,
    },
    Tg = () => m.createElement(m.Fragment, null, "-"),
    iI = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [o, i] = oe(!1),
        [u, s] = oe({ value: t });
      ge(() => {
        o || s({ value: t });
      }, [o, t]);
      let d = me((A) => (s({ value: A }), r({ [n]: A }), A), [r, n]),
        g = me(() => i(!1), []),
        E = me(() => i(!0), []);
      if (!a || a.disable) return m.createElement(Tg, null);
      let y = {
          name: n,
          argType: e,
          value: u.value,
          onChange: d,
          onBlur: g,
          onFocus: E,
        },
        h = oI[a.type] || Tg;
      return m.createElement(h, { ...y, ...a, controlType: a.type });
    },
    uI = q.span({ fontWeight: "bold" }),
    sI = q.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: "help",
    })),
    lI = q.div(({ theme: e }) => ({
      "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
      code: {
        ...kt({ theme: e }),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      "& code": { margin: 0, display: "inline-block" },
      "& pre > code": { whiteSpace: "pre-wrap" },
    })),
    cI = q.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === "light"
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    pI = q.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === "light"
          ? de(0.1, e.color.defaultText)
          : de(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    dI = q.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? "40px !important" : "20px !important",
    })),
    Ba = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: o,
        } = e,
        { name: i, description: u } = t,
        s = t.table || {},
        d = s.type || t.type,
        g = s.defaultValue || t.defaultValue,
        E = t.type?.required,
        y = u != null && u !== "";
      return m.createElement(
        "tr",
        null,
        m.createElement(
          dI,
          { expandable: a },
          m.createElement(uI, null, i),
          E ? m.createElement(sI, { title: "Required" }, "*") : null
        ),
        n
          ? null
          : m.createElement(
              "td",
              null,
              y && m.createElement(lI, null, m.createElement(ui, null, u)),
              s.jsDocTags != null
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      pI,
                      { hasDescription: y },
                      m.createElement(vu, { value: d, initialExpandedArgs: o })
                    ),
                    m.createElement(zP, { tags: s.jsDocTags })
                  )
                : m.createElement(
                    cI,
                    { hasDescription: y },
                    m.createElement(vu, { value: d, initialExpandedArgs: o })
                  )
            ),
        n
          ? null
          : m.createElement(
              "td",
              null,
              m.createElement(vu, { value: g, initialExpandedArgs: o })
            ),
        r ? m.createElement("td", null, m.createElement(iI, { ...e })) : null
      );
    },
    fI = q(_e)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === "light"
          ? de(0.25, e.color.defaultText)
          : de(0.3, e.color.defaultText),
      border: "none",
      display: "inline-block",
    })),
    hI = q.span(({ theme: e }) => ({
      display: "flex",
      lineHeight: "20px",
      alignItems: "center",
    })),
    yI = q.td(({ theme: e }) => ({
      position: "relative",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === "light"
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      "& ~ td": { background: `${e.background.app} !important` },
    })),
    mI = q.td(({ theme: e }) => ({
      position: "relative",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    gI = q.td(() => ({ position: "relative" })),
    bI = q.tr(({ theme: e }) => ({
      "&:hover > td": {
        backgroundColor: `${lt(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: "row-resize",
      },
    })),
    Og = q.button(() => ({
      background: "none",
      border: "none",
      padding: "0",
      font: "inherit",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      color: "transparent",
      cursor: "row-resize !important",
    })),
    Cu = ({
      level: e = "section",
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, i] = oe(n),
        u = e === "subsection" ? mI : yI,
        s = r?.length || 0,
        d = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
        g = o ? "arrowdown" : "arrowright",
        E = `${o ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${
          s !== 1 ? "s" : ""
        }`;
      return m.createElement(
        m.Fragment,
        null,
        m.createElement(
          bI,
          { title: E },
          m.createElement(
            u,
            { colSpan: 1 },
            m.createElement(Og, { onClick: (y) => i(!o), tabIndex: 0 }, E),
            m.createElement(hI, null, m.createElement(fI, { icon: g }), t)
          ),
          m.createElement(
            gI,
            { colSpan: a - 1 },
            m.createElement(
              Og,
              {
                onClick: (y) => i(!o),
                tabIndex: -1,
                style: { outline: "none" },
              },
              E
            ),
            o ? null : d
          )
        ),
        o ? r : null
      );
    },
    AI = q.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        "&&": {
          borderSpacing: 0,
          color: e.color.defaultText,
          "td, th": {
            padding: 0,
            border: "none",
            verticalAlign: "top",
            textOverflow: "ellipsis",
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: "20px",
          textAlign: "left",
          width: "100%",
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          "thead th:first-of-type, td:first-of-type": { width: "25%" },
          "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
          "th:nth-of-type(2), td:nth-of-type(2)": {
            ...(t ? null : { width: "35%" }),
          },
          "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
          "th:last-of-type, td:last-of-type": {
            paddingRight: 20,
            ...(t ? null : { width: "25%" }),
          },
          th: {
            color:
              e.base === "light"
                ? de(0.25, e.color.defaultText)
                : de(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
            "&:last-of-type": { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === "light"
                      ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                      : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
                }),
            "> tr > *": {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  "> tr:first-of-type > *": {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:last-of-type > *": {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:first-of-type": {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:last-of-type": {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:first-of-type > td:first-of-type": {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  "> tr:first-of-type > td:last-of-type": {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:first-of-type": {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:last-of-type": {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              "th span, td span, td button": {
                display: "inline",
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: "transparent",
                boxShadow: "none",
                borderRadius: 0,
              },
            }
          : {}
    ),
    EI = q(Et)(({ theme: e }) => ({
      color: e.barTextColor,
      margin: "-4px -12px -4px 0",
    })),
    vI = q.span({ display: "flex", justifyContent: "space-between" }),
    DI = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    xu = (e) => ({
      key: e,
      name: "propertyName",
      description: "This is a short description",
      control: { type: "text" },
      table: {
        type: { summary: "summary" },
        defaultValue: { summary: "defaultValue" },
      },
    }),
    CI = { rows: { row1: xu("row1"), row2: xu("row2"), row3: xu("row3") } },
    xI = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
      if (!e) return r;
      Object.entries(e).forEach(([o, i]) => {
        let { category: u, subcategory: s } = i?.table || {};
        if (u) {
          let d = r.sections[u] || { ungrouped: [], subsections: {} };
          if (!s) d.ungrouped.push({ key: o, ...i });
          else {
            let g = d.subsections[s] || [];
            g.push({ key: o, ...i }), (d.subsections[s] = g);
          }
          r.sections[u] = d;
        } else if (s) {
          let d = r.ungroupedSubsections[s] || [];
          d.push({ key: o, ...i }), (r.ungroupedSubsections[s] = d);
        } else r.ungrouped.push({ key: o, ...i });
      });
      let n = DI[t],
        a = (o) =>
          n
            ? Object.keys(o).reduce((i, u) => ({ ...i, [u]: o[u].sort(n) }), {})
            : o;
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, i) => ({
            ...o,
            [i]: {
              ungrouped: r.sections[i].ungrouped.sort(n),
              subsections: a(r.sections[i].subsections),
            },
          }),
          {}
        ),
      };
    },
    FI = (e, t, r) => {
      try {
        return Qo(e, t, r);
      } catch (n) {
        return Nn.warn(n.message), !1;
      }
    },
    Rt = (e) => {
      if ("error" in e)
        return m.createElement(
          Fu,
          null,
          e.error,
          "\xA0",
          m.createElement(
            vr,
            {
              href: "http://storybook.js.org/docs/",
              target: "_blank",
              withArrow: !0,
            },
            "Read the docs"
          )
        );
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = "none",
        } = e,
        u = "isLoading" in e,
        { rows: s, args: d, globals: g } = "rows" in e ? e : CI,
        E = xI(
          (0, Rg.default)(
            s,
            (b) => !b?.table?.disable && FI(b, d || {}, g || {})
          ),
          i
        );
      if (
        E.ungrouped.length === 0 &&
        Object.entries(E.sections).length === 0 &&
        Object.entries(E.ungroupedSubsections).length === 0
      )
        return m.createElement(
          Fu,
          null,
          "No inputs found for this component.\xA0",
          m.createElement(
            vr,
            {
              href: "http://storybook.js.org/docs/",
              target: "_blank",
              withArrow: !0,
            },
            "Read the docs"
          )
        );
      let y = 1;
      t && (y += 1), n || (y += 2);
      let h = Object.keys(E.sections).length > 0,
        A = {
          updateArgs: t,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
        };
      return m.createElement(
        Ka,
        null,
        m.createElement(
          AI,
          {
            "aria-hidden": u,
            compact: n,
            inAddonPanel: a,
            isLoading: u,
            className: "docblock-argstable sb-unstyled",
          },
          m.createElement(
            "thead",
            { className: "docblock-argstable-head" },
            m.createElement(
              "tr",
              null,
              m.createElement(
                "th",
                null,
                m.createElement("span", null, "Name")
              ),
              n
                ? null
                : m.createElement(
                    "th",
                    null,
                    m.createElement("span", null, "Description")
                  ),
              n
                ? null
                : m.createElement(
                    "th",
                    null,
                    m.createElement("span", null, "Default")
                  ),
              t
                ? m.createElement(
                    "th",
                    null,
                    m.createElement(
                      vI,
                      null,
                      "Control",
                      " ",
                      !u &&
                        r &&
                        m.createElement(
                          EI,
                          { onClick: () => r(), title: "Reset controls" },
                          m.createElement(_e, {
                            icon: "undo",
                            "aria-hidden": !0,
                          })
                        )
                    )
                  )
                : null
            )
          ),
          m.createElement(
            "tbody",
            { className: "docblock-argstable-body" },
            E.ungrouped.map((b) =>
              m.createElement(Ba, {
                key: b.key,
                row: b,
                arg: d && d[b.key],
                ...A,
              })
            ),
            Object.entries(E.ungroupedSubsections).map(([b, x]) =>
              m.createElement(
                Cu,
                { key: b, label: b, level: "subsection", colSpan: y },
                x.map((F) =>
                  m.createElement(Ba, {
                    key: F.key,
                    row: F,
                    arg: d && d[F.key],
                    expandable: h,
                    ...A,
                  })
                )
              )
            ),
            Object.entries(E.sections).map(([b, x]) =>
              m.createElement(
                Cu,
                { key: b, label: b, level: "section", colSpan: y },
                x.ungrouped.map((F) =>
                  m.createElement(Ba, {
                    key: F.key,
                    row: F,
                    arg: d && d[F.key],
                    ...A,
                  })
                ),
                Object.entries(x.subsections).map(([F, R]) =>
                  m.createElement(
                    Cu,
                    { key: F, label: F, level: "subsection", colSpan: y },
                    R.map((N) =>
                      m.createElement(Ba, {
                        key: N.key,
                        row: N,
                        arg: d && d[N.key],
                        expandable: h,
                        ...A,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    },
    Qg = ({ tabs: e, ...t }) => {
      let r = Object.entries(e);
      return r.length === 1
        ? m.createElement(Rt, { ...r[0][1], ...t })
        : m.createElement(
            Ya,
            null,
            r.map((n) => {
              let [a, o] = n,
                i = `prop_table_div_${a}`;
              return m.createElement(
                "div",
                { key: i, id: i, title: a },
                ({ active: u }) =>
                  u
                    ? m.createElement(Rt, {
                        key: `prop_table_${a}`,
                        ...o,
                        ...t,
                      })
                    : null
              );
            })
          );
    },
    SI = q.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: "10px 15px",
      lineHeight: "20px",
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    Zg = () =>
      m.createElement(
        SI,
        null,
        "This story is not configured to handle controls.",
        " ",
        m.createElement(
          vr,
          {
            href: "https://storybook.js.org/docs/react/essentials/controls",
            target: "_blank",
            cancel: !1,
            withArrow: !0,
          },
          "Learn how to add controls"
        )
      ),
    hne = q.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === "light"
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    yne = q.div({
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    }),
    mne = q.div({
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      "&:not(:last-child)": { marginBottom: "1rem" },
    }),
    gne = q.div(Nt, ({ theme: e }) => ({
      ...Oa(e),
      margin: "25px 0 40px",
      padding: "30px 20px",
    }));
  var bne = q.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    Ane = q.div(({ theme: e }) => ({
      color:
        e.base === "light"
          ? de(0.2, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    Ene = q.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 }),
    vne = q.div(({ theme: e }) => ({
      flex: 1,
      textAlign: "center",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: "hidden",
      color:
        e.base === "light"
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
      "> div": {
        display: "inline-block",
        overflow: "hidden",
        maxWidth: "100%",
        textOverflow: "ellipsis",
      },
      span: { display: "block", marginTop: 2 },
    })),
    Dne = q.div({ display: "flex", flexDirection: "row" }),
    Cne = q.div(({ background: e }) => ({
      position: "relative",
      flex: 1,
      "&::before": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: e,
        content: '""',
      },
    })),
    xne = q.div(({ theme: e }) => ({
      ...Oa(e),
      display: "flex",
      flexDirection: "row",
      height: 50,
      marginBottom: 5,
      overflow: "hidden",
      backgroundColor: "white",
      backgroundImage:
        "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
      backgroundClip: "padding-box",
    })),
    Fne = q.div({
      display: "flex",
      flexDirection: "column",
      flex: 1,
      position: "relative",
      marginBottom: 30,
    }),
    Sne = q.div({ flex: 1, display: "flex", flexDirection: "row" }),
    wne = q.div({ display: "flex", alignItems: "flex-start" }),
    Bne = q.div({ flex: "0 0 30%" }),
    Tne = q.div({ flex: 1 }),
    One = q.div(({ theme: e }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === "light"
          ? de(0.4, e.color.defaultText)
          : de(0.6, e.color.defaultText),
    })),
    _ne = q.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: "20px",
      display: "flex",
      flexDirection: "column",
    }));
  var Pne = q.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    Rne = q.div(({ theme: e }) => ({
      ...Oa(e),
      overflow: "hidden",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      "> img, > svg": { width: 20, height: 20 },
    })),
    Ine = q.div({
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      flex: "0 1 calc(20% - 10px)",
      minWidth: 120,
      margin: "0px 10px 30px 0",
    }),
    kne = q.div({ display: "flex", flexFlow: "row wrap" });
  var wI = (e) => `anchor--${e}`,
    BI = ({ storyId: e, children: t }) =>
      m.createElement("div", { id: wI(e), className: "sb-anchor" }, t);
  ue &&
    ue.__DOCS_CONTEXT__ === void 0 &&
    ((ue.__DOCS_CONTEXT__ = Er(null)),
    (ue.__DOCS_CONTEXT__.displayName = "DocsContext"));
  var Qe = ue ? ue.__DOCS_CONTEXT__ : Er(null),
    Mu = (e, t) => qe(Qe).resolveOf(e, t);
  var qu = "^",
    TI = (e) =>
      e
        .split("-")
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(""),
    e2 = (e) => {
      if (e)
        return typeof e == "string"
          ? e.includes("-")
            ? TI(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
    };
  function t2(e, t) {
    let r = Lu([e], t);
    return r && r[0];
  }
  function Lu(e, t) {
    let [r, n] = oe({});
    return (
      ge(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a);
            n((i) => (i[a] === o ? i : { ...i, [a]: o }));
          })
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  var OI = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = oe(r.args);
      ge(() => {
        let u = (s) => {
          s.storyId === e && a(s.args);
        };
        return t.channel.on(Hn, u), () => t.channel.off(Hn, u);
      }, [e]);
      let o = me(
          (u) => t.channel.emit(Gn, { storyId: e, updatedArgs: u }),
          [e]
        ),
        i = me((u) => t.channel.emit(zn, { storyId: e, argNames: u }), [e]);
      return [n, o, i];
    },
    _I = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = oe(t.globals);
      return (
        ge(() => {
          let a = (o) => {
            n(o.globals);
          };
          return e.channel.on(Un, a), () => e.channel.off(Un, a);
        }, []),
        [r]
      );
    },
    r2 = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {};
      if (!a)
        throw new Error(
          "Args unsupported. See Args documentation for your framework."
        );
      let o = a(e);
      return (o = Gr(o, r, n)), o;
    },
    _g = (e) => e && [qu].includes(e),
    PI = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e;
      if (_g(r) || _g(n)) return t || null;
      if (!r) throw new Error("No component found.");
      return r;
    },
    _u = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, jg.default)(t, (i) => ({ rows: r2(i, r, n, a), sort: o })),
    }),
    RI = (e) => {
      let t = qe(Qe),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: i,
          exclude: u,
          sort: s,
        } = e;
      try {
        let d;
        switch (r) {
          case qu: {
            d = t.storyById().id;
            break;
          }
          default:
            d = t.storyIdByName(r);
        }
        let g = t2(d, t),
          [E, y, h] = OI(d, t),
          [A] = _I(t);
        if (!g)
          return m.createElement(Rt, {
            isLoading: !0,
            updateArgs: y,
            resetArgs: h,
          });
        let b = Gr(g.argTypes, i, u),
          x = e2(n) || "Story",
          F = {
            [x]: { rows: b, args: E, globals: A, updateArgs: y, resetArgs: h },
          },
          R = b && Object.values(b).find((N) => !!N?.control);
        if (
          (R || ((y = null), (h = null), (F = {})),
          n && (!R || o) && (F = _u(F, { [x]: n }, g.parameters, i, u)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              "Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components."
            );
          F = _u(F, a, g.parameters, i, u);
        }
        return m.createElement(Qg, { tabs: F, sort: s });
      } catch (d) {
        return m.createElement(Rt, { error: d.message });
      }
    },
    Pg = (e) => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        i = _u({}, t, o, r, n);
      return m.createElement(Qg, { tabs: i, sort: a });
    },
    II = (e) => {
      be(xe`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
      let t = qe(Qe),
        r,
        n,
        a;
      try {
        ({ parameters: r, component: n, subcomponents: a } = t.storyById());
      } catch {
        let { of: h } = e;
        if ("of" in e && h === void 0)
          throw new Error(
            "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
          );
        ({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(h, ["component"]));
      }
      let { include: o, exclude: i, components: u, sort: s } = e,
        { story: d } = e,
        g = s || r.controls?.sort,
        E = PI(e, n);
      if (d)
        return m.createElement(RI, {
          ...e,
          component: E,
          subcomponents: a,
          sort: g,
        });
      if (!u && !a) {
        let h;
        try {
          h = { rows: r2(E, r, o, i) };
        } catch (A) {
          h = { error: A.message };
        }
        return m.createElement(Rt, { ...h, sort: g });
      }
      if (u)
        return m.createElement(Pg, {
          ...e,
          components: u,
          sort: g,
          parameters: r,
        });
      let y = e2(E);
      return m.createElement(Pg, {
        ...e,
        components: { [y]: E, ...a },
        sort: g,
        parameters: r,
      });
    };
  II.defaultProps = { of: qu };
  function kI(e) {
    return tu(e);
  }
  var NI = Er({ sources: {} }),
    jI = "--unknown--";
  var MI = ((e) => (
      (e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e
    ))(MI || {}),
    qI = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
      return t.length === 0 ? "closed" : t[0];
    },
    LI = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e];
      return a?.[kI(t)] || a?.[jI] || { code: "" };
    },
    $I = ({
      snippet: e,
      storyContext: t,
      typeFromProps: r,
      transformFromProps: n,
    }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        i = r || o.type || an.AUTO;
      if (o.code !== void 0) return o.code;
      let u =
        i === an.DYNAMIC || (i === an.AUTO && e && a)
          ? e
          : o.originalSource || "";
      return (
        o.transformSource &&
          be(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          be(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          be(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(u, t) || u
      );
    },
    n2 = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = Lu(n, t),
        o = a,
        { of: i } = e;
      if ("of" in e && i === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      if (i) o = [t.resolveOf(i, ["story"]).story];
      else if (o.length === 0)
        try {
          o = [t.storyById()];
        } catch {}
      if (!a.every(Boolean))
        return { error: "Oh no! The source is not available.", state: "none" };
      let u = o[0]?.parameters?.docs?.source || {},
        { code: s } = e,
        d = e.format ?? u.format,
        g = e.language ?? u.language ?? "jsx",
        E = e.dark ?? u.dark ?? !1;
      s ||
        (s = o.map((h, A) => {
          if (!h) return "";
          let b = t.getStoryContext(h),
            x = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs,
            F = LI(h.id, x, r);
          return (
            A === 0 &&
              (d = F.format ?? h.parameters.docs?.source?.format ?? !1),
            $I({
              snippet: F.code,
              storyContext: { ...b, args: x },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          );
        }).join(`

`));
      let y = qI(o);
      return s
        ? { code: s, format: d, language: g, dark: E, state: y }
        : { error: "Oh no! The source is not available.", state: y };
    };
  var a2 = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e;
      if ("of" in e && n === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      if (r)
        return (
          be(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        );
      let { name: i } = e;
      return i
        ? (be(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(i))
        : (o &&
            be(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || "story", ["story"]).story.id);
    },
    UI = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {};
      if (a.disable) return null;
      let { inlineStories: i, iframeHeight: u } = a;
      typeof i < "u" &&
        be(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
      let s = e.inline ?? o.inline ?? i ?? !1;
      if (
        (typeof u < "u" &&
          be(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let g = e.height ?? o.height,
          E = e.autoplay ?? o.autoplay ?? !1;
        return {
          story: t,
          inline: !0,
          height: g,
          autoplay: E,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        };
      }
      let d = e.height ?? o.height ?? o.iframeHeight ?? u ?? "100px";
      return { story: t, inline: !1, height: d, primary: !!e.__primary };
    },
    zI = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = qe(Qe),
        r = a2(e, t),
        n = t2(r, t);
      if (!n) return m.createElement(ku, null);
      let a = UI(e, n, t);
      return a ? m.createElement(RP, { ...a }) : null;
    },
    HI = (
      { withSource: e, mdxSource: t, children: r, layout: n, ...a },
      o,
      i
    ) => {
      let u = cn
          .toArray(r)
          .filter((y) => y.props && (y.props.id || y.props.name || y.props.of))
          .map((y) => a2(y.props, o)),
        s = Lu(u, o),
        d = s.some((y) => !y),
        g = n2(
          {
            ...(t ? { code: decodeURI(t) } : { ids: u }),
            ...(a.of && { of: a.of }),
          },
          o,
          i
        );
      if (e === "none") return { isLoading: d, previewProps: a };
      let E = n;
      return (
        cn.forEach(r, (y) => {
          E || (E = y?.props?.parameters?.layout);
        }),
        s.forEach((y) => {
          E ||
            !y ||
            (E = y?.parameters.layout ?? y.parameters.docs?.canvas?.layout);
        }),
        {
          isLoading: d,
          previewProps: {
            ...a,
            layout: E ?? "padded",
            withSource: g,
            isExpanded: (e || g.state) === "open",
          },
        }
      );
    },
    GI = (e) => {
      let t = qe(Qe),
        r = qe(NI),
        { children: n, of: a, source: o } = e;
      if ("of" in e && a === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      let { isLoading: i, previewProps: u } = HI(e, t, r),
        s,
        d,
        g;
      try {
        ({ story: s } = Mu(a || "story", ["story"]));
      } catch (x) {
        n || (g = x);
      }
      try {
        d = n2({ ...o, ...(a && { of: a }) }, t, r);
      } catch (x) {
        n || (g = x);
      }
      if (g) throw g;
      if (
        (e.withSource &&
          be(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          be(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          be(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          be(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          i ? m.createElement($P, null) : m.createElement(wu, { ...u }, n)
        );
      let E =
          e.layout ??
          s.parameters.layout ??
          s.parameters.docs?.canvas?.layout ??
          "padded",
        y = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        h = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        A = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? "hidden",
        b = e.className ?? s.parameters.docs?.canvas?.className;
      return m.createElement(
        wu,
        {
          withSource: A === "none" ? void 0 : d,
          isExpanded: A === "shown",
          withToolbar: y,
          additionalActions: h,
          className: b,
          layout: E,
        },
        m.createElement(zI, {
          of: a || s.moduleExport,
          meta: e.meta,
          ...e.story,
        })
      );
    };
  var { document: o2 } = ue;
  var WI = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
      return m.createElement($a, null, t);
    let n = e && e.split("-");
    return m.createElement(Ru, {
      language: (n && n[1]) || "plaintext",
      format: !1,
      code: t,
      ...r,
    });
  };
  function $u(e, t) {
    e.channel.emit(C0, t);
  }
  var Pu = Za.a,
    VI = ({ hash: e, children: t }) => {
      let r = qe(Qe);
      return m.createElement(
        Pu,
        {
          href: e,
          target: "_self",
          onClick: (n) => {
            let a = e.substring(1);
            o2.getElementById(a) && $u(r, e);
          },
        },
        t
      );
    },
    KI = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        o = qe(Qe);
      if (t) {
        if (t.startsWith("#")) return m.createElement(VI, { hash: t }, n);
        if (r !== "_blank" && !t.startsWith("https://"))
          return m.createElement(
            Pu,
            {
              href: t,
              onClick: (i) => {
                i.button === 0 &&
                  !i.altKey &&
                  !i.ctrlKey &&
                  !i.metaKey &&
                  !i.shiftKey &&
                  (i.preventDefault(),
                  $u(o, i.currentTarget.getAttribute("href")));
              },
              target: r,
              ...a,
            },
            n
          );
      }
      return m.createElement(Pu, { ...e });
    },
    i2 = ["h1", "h2", "h3", "h4", "h5", "h6"],
    YI = i2.reduce(
      (e, t) => ({
        ...e,
        [t]: q(t)({
          "& svg": {
            position: "relative",
            top: "-0.1em",
            visibility: "hidden",
          },
          "&:hover svg": { visibility: "visible" },
        }),
      }),
      {}
    ),
    JI = q.a(() => ({
      float: "left",
      lineHeight: "inherit",
      paddingRight: "10px",
      marginLeft: "-24px",
      color: "inherit",
    })),
    XI = ({ as: e, id: t, children: r, ...n }) => {
      let a = qe(Qe),
        o = YI[e],
        i = `#${t}`;
      return m.createElement(
        o,
        { id: t, ...n },
        m.createElement(
          JI,
          {
            "aria-hidden": "true",
            href: i,
            tabIndex: -1,
            target: "_self",
            onClick: (u) => {
              o2.getElementById(t) && $u(a, i);
            },
          },
          m.createElement(_e, { icon: "link" })
        ),
        r
      );
    },
    Uu = (e) => {
      let { as: t, id: r, children: n, ...a } = e;
      if (r) return m.createElement(XI, { as: t, id: r, ...a }, n);
      let o = t,
        { as: i, ...u } = e;
      return m.createElement(o, { ...to(u, t) });
    },
    QI = i2.reduce(
      (e, t) => ({ ...e, [t]: (r) => m.createElement(Uu, { as: t, ...r }) }),
      {}
    ),
    ZI = (e) => {
      if (!e.children) return null;
      if (typeof e.children != "string")
        throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
      return m.createElement(ui, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: WI, a: KI, ...QI, ...e?.options?.overrides },
          ...e?.options,
        },
      });
    },
    e7 = ((e) => (
      (e.INFO = "info"),
      (e.NOTES = "notes"),
      (e.DOCGEN = "docgen"),
      (e.AUTO = "auto"),
      e
    ))(e7 || {}),
    Ta =
      "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
    t7 = (e) => e && (typeof e == "string" ? e : Ea(e.markdown) || Ea(e.text)),
    r7 = (e) => e && (typeof e == "string" ? e : Ea(e.text)),
    n7 = (e) => null,
    a7 = (e) => {
      switch (e.type) {
        case "story":
          return e.story.parameters.docs?.description?.story || null;
        case "meta": {
          let { parameters: t, component: r } = e.preparedMeta;
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          );
        }
        case "component": {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e;
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          );
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`
          );
      }
    },
    o7 = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n();
      if (r || t) return r || t;
      let { notes: i, info: u, docs: s } = o;
      (i || u) &&
        be(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Ta}`
        );
      let { extractComponentDescription: d = n7, description: g } = s || {},
        E = g?.component;
      if (E) return E;
      switch (e) {
        case "info":
          return r7(u);
        case "notes":
          return t7(i);
        case "docgen":
        case "auto":
        default:
          return d(a, { component: a, ...o });
      }
    },
    i7 = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e;
      if ("of" in e && t === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      let o = qe(Qe),
        i = Mu(t || "meta"),
        u;
      return (
        r || n || a ? (u = o7(e, o)) : (u = a7(i)),
        r &&
          be(`Manually specifying description type is deprecated. See ${Ta}`),
        n &&
          be(
            `The 'markdown' prop on the Description block is deprecated. See ${Ta}`
          ),
        a &&
          be(
            `The 'children' prop on the Description block is deprecated. See ${Ta}`
          ),
        u ? m.createElement(ZI, null, u) : null
      );
    },
    { document: Nne, window: jne } = ue;
  var u7 = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != "string") return m.createElement(Ga, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return m.createElement(Uu, { as: "h3", id: r }, e);
    },
    s7 = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: o } = Mu(e || "story", ["story"]),
        i = o.parameters.docs?.canvas?.withToolbar ?? r;
      return m.createElement(
        BI,
        { storyId: o.id },
        t &&
          m.createElement(
            m.Fragment,
            null,
            m.createElement(u7, null, o.name),
            m.createElement(i7, { of: e })
          ),
        m.createElement(GI, {
          of: e,
          withToolbar: i,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        })
      );
    };
  var l7 = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != "string") return m.createElement(Ha, null, e);
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return m.createElement(Uu, { as: "h2", id: n, ...r }, e);
    },
    c7 = q(l7)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: "16px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: e.textMutedColor,
      border: 0,
      marginBottom: "12px",
      "&:first-of-type": { marginTop: "56px" },
    })),
    p7 = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = qe(Qe),
        n = r().filter((a) => !a.parameters?.docs?.disable);
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : m.createElement(
              m.Fragment,
              null,
              m.createElement(c7, null, e),
              n.map(
                (a) =>
                  a &&
                  m.createElement(s7, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      );
    };
  p7.defaultProps = { title: "Stories" };
  var d7 = () => {
    let [e, t, r] = Ju(),
      [n] = Xu(),
      a = ja(),
      o = Ma("__isArgsStory", !1),
      {
        expanded: i,
        sort: u,
        presetColors: s,
        hideNoControlsWarning: d = !1,
      } = Ma(Ia, {}),
      { path: g } = Qu(),
      E = Object.values(a).some((A) => A?.control),
      y = !(E && o) && !d,
      h = Object.entries(a).reduce(
        (A, [b, x]) => (
          x?.control?.type !== "color" || x?.control?.presetColors
            ? (A[b] = x)
            : (A[b] = { ...x, control: { ...x.control, presetColors: s } }),
          A
        ),
        {}
      );
    return m.createElement(
      m.Fragment,
      null,
      y && m.createElement(Zg, null),
      m.createElement(Rt, {
        key: g,
        compact: !i && E,
        rows: h,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: u,
      })
    );
  };
  function f7() {
    let e = ja(),
      t = Object.values(e).filter(
        (n) => n?.control && !n?.table?.disable
      ).length,
      r = t === 0 ? "" : ` (${t})`;
    return m.createElement(m.Fragment, null, "Controls", r);
  }
  Na.register(Ra, (e) => {
    Na.addPanel(Ra, {
      title: m.createElement(f7, null),
      id: "controls",
      type: Yu.PANEL,
      paramKey: Ia,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData()
          ? null
          : m.createElement(
              La,
              { key: t, active: r },
              m.createElement(d7, null)
            ),
    });
  });
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.js.map
