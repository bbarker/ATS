////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2024-06-22:
// ATS3-XANADU/srcgen2/xats2js/srcgen1
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

'use strict';

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
let XATSTOP0 = undefined
//
////////////////////////////////////////////////////////////////////////.
//
let XATSINT0 = (i0) => i0
let XATSINT1 = (i0) => i0
//
let XATSBTF0 = (b0) => b0
let XATSBOOL = (b0) => b0
//
let XATSFLT0 = (f0) => f0
let XATSFLT1 = (f0) => f0
/*
let XATSSFLT = (sf) => sf
let XATSDFLT = (df) => df
*/
let XATSSTR0 = (cs) => cs
let XATSSTRN = (cs) => cs
//
let XATSCNUL = (  ) => (0)
let XATSCHR1 = (  ) => (0)
//
let XATSCHR0 =
    (ch) => ch.charCodeAt(0)
let XATSCHAR =
    (ch) => ch.charCodeAt(0)
let XATSCHR2 =
    (ch) => ch.charCodeAt(0)
//
let XATSCHR3 = (ch) => {
    var c1 // current one
    c1 = ch.charCodeAt(1)
    if (c1 < 48||c1 > 55)
    {
      return c1 ; // ascii
    } else {
	var i1 = 2;
	var d1 = (c1 - 48);
	while (i1 < ch.length) {
	    c1 = ch.charCodeAt(i1);
	    if (c1===39) // SQUOTE=39
	    {
		return d1; // ascii
	    } else {
		d1 = 8*d1 + (c1 - 48)
	    }
	}
	return d1 ; // ascii code of [ch]
    }
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX: this is historic:
let XATSVAR0 = () => [null]
let XATSVAR1 = (init) => [init]
let XATSFLAT = (addr) => addr[0]
*/
////////////////////////////////////////////////////////////////////////.

let XATSDAPP = (dapp) => dapp
let XATSCAPP = (_, capp) => capp
let XATSCAST = (_, args) => args[0]

////////////////////////////////////////////////////////////////////////.
//
let XATSPCON =
  (pcon, argi) => pcon[argi+1]
//
let XATSPFLT = (pflt) => pflt
let XATSPROJ = (proj) => proj
let XATSP0RJ = (p0rj) => p0rj
let XATSP1RJ = (_, p1rj) => p1rj
let XATSP1CN = (_, p1cn) => p1cn
//
////////////////////////////////////////////////////////////////////////.
//
let XATSTRCD = (knd0) => knd0
//
let XATSTUP0 = (tpl0) => tpl0
let XATSTUP1 = (knd0, tpl1) => tpl1
let XATSRCD2 = (knd0, rcd2) => rcd2
//
////////////////////////////////////////////////////////////////////////.
//
let XATSROOT = (x) => [0, x]
let XATSLPFT = (i, x) => [1+0, x, i]
let XATSLPBX = (i, x) => [1+1, x, i]
let XATSLPCN = (i, x) => [1+2, x, i+1]
//
let XATSVAR0 = (    ) => XATSROOT([null])
let XATSVAR1 = (init) => XATSROOT([init])
//
let XATSADDR = (addr) => addr // HX: no-op
let XATSFLAT = (addr) => XATS000_lvget(addr)
//
////////////////////////////////////////////////////////////////////////.
//
let XATSCTAG = (_, t) => t
//
let XATS000_inteq = (x, y) => (x===y)
let XATS000_btfeq = (x, y) => (x===y)
let XATS000_chreq = (x, y) => (x===y)
//
let XATS000_streq = (x, y) => (x == y)
//
let XATS000_ctgeq = (v, t) => (v[0] == t)
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_nil()
{
  return XATSCAPP("optn_nil", [0])
}
function
XATS2JS_optn_cons(x0)
{
  return XATSCAPP("optn_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_nil()
{
  return XATSCAPP("list_nil", [0])
}
function
XATS2JS_list_cons(x0, xs)
{
  return XATSCAPP("list_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_vt_nil()
{
  return XATSCAPP("optn_vt_nil", [0])
}
function
XATS2JS_optn_vt_cons(x0)
{
  return XATSCAPP("optn_vt_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_vt_nil()
{
  return XATSCAPP("list_vt_nil", [0])
}
function
XATS2JS_list_vt_cons(x0, xs)
{
  return XATSCAPP("list_vt_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

let XATS000_cfail = function()
  {
    throw new Error("XATS000_cfail");
  }

let XATS000_patck = function(pck)
  {
    if (!pck) {
      throw new Error("XATS000_patck");
    } // end-of-[if]
  }

////////////////////////////////////////////////////////////////////////.

let XATS000_fold = (pcon) => null
let XATS000_free = (pcon) => null

////////////////////////////////////////////////////////////////////////.
//
let XATS000_dp2tr =
  (p2tr) => XATS000_lvget(p2tr)
//
let XATS000_l0azy = function(lfun)
{
  return [0, lfun]
}
let XATS000_dl0az = function(l0az)
{
  if (l0az[0] > 0) {
    l0az[0] += 1; return l0az[1]
  } else {
    let res = l0az[1]()
    l0az[0] = 0+1; l0az[1] = res; return res
  }
}
//
let XATS000_l1azy = (lfun) => lfun
let XATS000_dl1az = (l1az) => l1az(1)
//
let XATS000_assgn =
  (lval, rval) => XATS000_lvset(lval, rval)
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_ftset =
  function(tpl0, idx1, rval)
  {
    let tpl1 = tpl0.slice();
    tpl1[idx1] = rval; return tpl1
  }
//
let XATS000_lvget = function(lval)
  {
    let ctag = lval[0]
    if (ctag === 0)
      return lval[1][0]
    if (ctag === 1+0)
      return XATS000_lvget(lval[1])[lval[2]]
    if (ctag === 1+1)
      return lval[1][lval[2]]
    if (ctag === 1+2)
      return lval[1][lval[2]]
  }
//
let XATS000_lvset = function(lval, rval)
  {
    let ctag = lval[0]
    if (ctag === 0) return ( lval[1][0] = rval )
    if (ctag === 1+0)
    {
      return XATS000_lvset
	(lval[1], XATS000_ftset(XATS000_lvget(lval[1]), lval[2], rval))
    }
    if (ctag === 1+1) return ( lval[1][lval[2]] = rval )
    if (ctag === 1+2) return ( lval[1][lval[2]] = rval )
  }
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_raise = (xcon) => { throw(xcon) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
the end of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_js1emit.js]
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Fri Jan 16 11:47:37 PM EST 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_precats.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Fri Jan 16 11:31:07 PM EST 2026
// LCSRCsome1(precats.dats)@(1291(line=30,offs=1)--1332(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(UN);G1Estr(T_STRN1_clsd("prelude/SATS/unsfx00.sats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats));...)))
// I1Dextern(LCSRCsome1(precats.dats)@(1958(line=80,offs=1)--2028(line=85,offs=29)))
// LCSRCsome1(precats.dats)@(1966(line=81,offs=1)--2028(line=85,offs=29))
// I1FUNDCL
// XATS2JS_optn_nilq_1969
  // FJARGdarg($list(I1BNDcons(I1TNM(1);I0Pvar(xs(3));$list(@(xs(3),I1Vtnm(I1TNM(1)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2029(line=86,offs=1)--2118(line=90,offs=43)))
let XATS2JS_optn_nilq = function (arg1) { // impl
  let jsxtnm2 = arg1
  // I1CMP:start
  let jsxtnm5 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(3);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm3 = jsxtnm2
      jsxtnm5 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(4);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm4 = jsxtnm2
      jsxtnm5 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm5
  return jsxtnm5
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2122(line=92,offs=1)--2193(line=97,offs=29)))
// LCSRCsome1(precats.dats)@(2130(line=93,offs=1)--2193(line=97,offs=29))
// I1FUNDCL
// XATS2JS_optn_consq_2133
  // FJARGdarg($list(I1BNDcons(I1TNM(6);I0Pvar(xs(6));$list(@(xs(6),I1Vtnm(I1TNM(6)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2194(line=98,offs=1)--2286(line=102,offs=45)))
let XATS2JS_optn_consq = function (arg1) { // impl
  let jsxtnm7 = arg1
  // I1CMP:start
  let jsxtnm10 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(8);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm8 = jsxtnm7
      jsxtnm10 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(9);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm9 = jsxtnm7
      jsxtnm10 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm10
  return jsxtnm10
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2313(line=106,offs=1)--2386(line=111,offs=28)))
// LCSRCsome1(precats.dats)@(2321(line=107,offs=1)--2386(line=111,offs=28))
// I1FUNDCL
// XATS2JS_optn_head$raw_2324
  // FJARGdarg($list(I1BNDcons(I1TNM(11);I0Pvar(xs(9));$list(@(xs(9),I1Vtnm(I1TNM(11)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2387(line=112,offs=1)--2460(line=115,offs=35)))
let XATS2JS_optn_head$raw = function (arg1) { // impl
  let jsxtnm12 = arg1
  // I1CMP:start
  let jsxtnm14 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(13);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(11))));$list(@(x0(11),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(13));0)))))
    if (XATS000_ctgeq(jsxtnm12, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm13 = jsxtnm12
      jsxtnm14 = XATSP1CN("optn_cons", jsxtnm13[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm14
  return jsxtnm14
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2464(line=117,offs=1)--2539(line=122,offs=28)))
// LCSRCsome1(precats.dats)@(2472(line=118,offs=1)--2539(line=122,offs=28))
// I1FUNDCL
// XATS2JS_optn_uncons$raw_2475
  // FJARGdarg($list(I1BNDcons(I1TNM(15);I0Pvar(xs(13));$list(@(xs(13),I1Vtnm(I1TNM(15)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_uncons$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2540(line=123,offs=1)--2615(line=126,offs=35)))
let XATS2JS_optn_uncons$raw = function (arg1) { // impl
  let jsxtnm16 = arg1
  // I1CMP:start
  let jsxtnm18 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(17);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(15))));$list(@(x0(15),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(17));0)))))
    if (XATS000_ctgeq(jsxtnm16, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm17 = jsxtnm16
      jsxtnm18 = XATSP1CN("optn_cons", jsxtnm17[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm18
  return jsxtnm18
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3007(line=159,offs=1)--3077(line=164,offs=29)))
// LCSRCsome1(precats.dats)@(3015(line=160,offs=1)--3077(line=164,offs=29))
// I1FUNDCL
// XATS2JS_list_nilq_3018
  // FJARGdarg($list(I1BNDcons(I1TNM(19);I0Pvar(xs(17));$list(@(xs(17),I1Vtnm(I1TNM(19)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3078(line=165,offs=1)--3167(line=169,offs=43)))
let XATS2JS_list_nilq = function (arg1) { // impl
  let jsxtnm20 = arg1
  // I1CMP:start
  let jsxtnm23 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(21);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm21 = jsxtnm20
      jsxtnm23 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(22);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm22 = jsxtnm20
      jsxtnm23 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm23
  return jsxtnm23
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3171(line=171,offs=1)--3242(line=176,offs=29)))
// LCSRCsome1(precats.dats)@(3179(line=172,offs=1)--3242(line=176,offs=29))
// I1FUNDCL
// XATS2JS_list_consq_3182
  // FJARGdarg($list(I1BNDcons(I1TNM(24);I0Pvar(xs(20));$list(@(xs(20),I1Vtnm(I1TNM(24)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3243(line=177,offs=1)--3335(line=181,offs=45)))
let XATS2JS_list_consq = function (arg1) { // impl
  let jsxtnm25 = arg1
  // I1CMP:start
  let jsxtnm28 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(26);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm26 = jsxtnm25
      jsxtnm28 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(27);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm27 = jsxtnm25
      jsxtnm28 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm28
  return jsxtnm28
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3362(line=185,offs=1)--3435(line=190,offs=28)))
// LCSRCsome1(precats.dats)@(3370(line=186,offs=1)--3435(line=190,offs=28))
// I1FUNDCL
// XATS2JS_list_head$raw_3373
  // FJARGdarg($list(I1BNDcons(I1TNM(29);I0Pvar(xs(23));$list(@(xs(23),I1Vtnm(I1TNM(29)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3436(line=191,offs=1)--3513(line=194,offs=39)))
let XATS2JS_list_head$raw = function (arg1) { // impl
  let jsxtnm30 = arg1
  // I1CMP:start
  let jsxtnm32 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(31);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(25)),I0Pvar(xs(26))));$list(@(x1(25),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));0)),@(xs(26),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));1)))))
    if (XATS000_ctgeq(jsxtnm30, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm31 = jsxtnm30
      jsxtnm32 = XATSP1CN("list_cons", jsxtnm31[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm32
  return jsxtnm32
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3560(line=199,offs=1)--3638(line=204,offs=32)))
// LCSRCsome1(precats.dats)@(3568(line=200,offs=1)--3638(line=204,offs=32))
// I1FUNDCL
// XATS2JS_lazy_make_f0un_3571
  // FJARGdarg($list(I1BNDcons(I1TNM(33);I0Pvar(f0(28));$list(@(f0(28),I1Vtnm(I1TNM(33)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3639(line=205,offs=1)--3688(line=206,offs=41)))
let XATS2JS_lazy_make_f0un = function (arg1) { // impl
  let jsxtnm34 = arg1
  // I1CMP:start
  let jsxtnm36 = XATS000_l0azy(function () { // l0azy
    // I1CMP:start
    let jsxtnm35 = XATSDAPP(jsxtnm34())
    // I1CMP:return:jsxtnm35
    return jsxtnm35
  }) // endfun(l0azy)
  // I1CMP:return:jsxtnm36
  return jsxtnm36
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3735(line=211,offs=1)--3805(line=215,offs=32)))
// LCSRCsome1(precats.dats)@(3743(line=212,offs=1)--3805(line=215,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nil_3746
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3806(line=216,offs=1)--3852(line=217,offs=38)))
let XATS2JS_strmcon_nil = function () { // impl
  // I1CMP:start
  let jsxtnm37 = XATSCAPP("strmcon_nil", [0])
  // I1CMP:return:jsxtnm37
  return jsxtnm37
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3856(line=219,offs=1)--3946(line=224,offs=38)))
// LCSRCsome1(precats.dats)@(3864(line=220,offs=1)--3946(line=224,offs=38))
// I1FUNDCL
// XATS2JS_strmcon_cons_3867
  // FJARGdarg($list(I1BNDcons(I1TNM(38);I0Pvar(x1(32));$list(@(x1(32),I1Vtnm(I1TNM(38))))),I1BNDcons(I1TNM(39);I0Pvar(xs(33));$list(@(xs(33),I1Vtnm(I1TNM(39)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3947(line=225,offs=1)--4005(line=226,offs=50)))
let XATS2JS_strmcon_cons = function (arg1, arg2) { // impl
  let jsxtnm40 = arg1
  let jsxtnm41 = arg2
  // I1CMP:start
  let jsxtnm42 = XATSCAPP("strmcon_cons", [1, jsxtnm40, jsxtnm41])
  // I1CMP:return:jsxtnm42
  return jsxtnm42
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4009(line=228,offs=1)--4099(line=233,offs=38)))
// LCSRCsome1(precats.dats)@(4017(line=229,offs=1)--4099(line=233,offs=38))
// I1FUNDCL
// XATS2JS_strxcon_cons_4020
  // FJARGdarg($list(I1BNDcons(I1TNM(43);I0Pvar(x1(37));$list(@(x1(37),I1Vtnm(I1TNM(43))))),I1BNDcons(I1TNM(44);I0Pvar(xs(38));$list(@(xs(38),I1Vtnm(I1TNM(44)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4100(line=234,offs=1)--4158(line=235,offs=50)))
let XATS2JS_strxcon_cons = function (arg1, arg2) { // impl
  let jsxtnm45 = arg1
  let jsxtnm46 = arg2
  // I1CMP:start
  let jsxtnm47 = XATSCAPP("strxcon_cons", [0, jsxtnm45, jsxtnm46])
  // I1CMP:return:jsxtnm47
  return jsxtnm47
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4185(line=239,offs=1)--4261(line=244,offs=32)))
// LCSRCsome1(precats.dats)@(4193(line=240,offs=1)--4261(line=244,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nilq_4196
  // FJARGdarg($list(I1BNDcons(I1TNM(48);I0Pvar(xs(42));$list(@(xs(42),I1Vtnm(I1TNM(48)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4262(line=245,offs=1)--4360(line=249,offs=49)))
let XATS2JS_strmcon_nilq = function (arg1) { // impl
  let jsxtnm49 = arg1
  // I1CMP:start
  let jsxtnm52 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(50);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm50 = jsxtnm49
      jsxtnm52 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(51);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm51 = jsxtnm49
      jsxtnm52 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm52
  return jsxtnm52
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4364(line=251,offs=1)--4441(line=256,offs=32)))
// LCSRCsome1(precats.dats)@(4372(line=252,offs=1)--4441(line=256,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_consq_4375
  // FJARGdarg($list(I1BNDcons(I1TNM(53);I0Pvar(xs(45));$list(@(xs(45),I1Vtnm(I1TNM(53)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4442(line=257,offs=1)--4543(line=261,offs=51)))
let XATS2JS_strmcon_consq = function (arg1) { // impl
  let jsxtnm54 = arg1
  // I1CMP:start
  let jsxtnm57 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(55);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm55 = jsxtnm54
      jsxtnm57 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(56);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm56 = jsxtnm54
      jsxtnm57 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm57
  return jsxtnm57
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4570(line=265,offs=1)--4649(line=270,offs=31)))
// LCSRCsome1(precats.dats)@(4578(line=266,offs=1)--4649(line=270,offs=31))
// I1FUNDCL
// XATS2JS_strmcon_head$raw_4581
  // FJARGdarg($list(I1BNDcons(I1TNM(58);I0Pvar(xs(48));$list(@(xs(48),I1Vtnm(I1TNM(58)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4650(line=271,offs=1)--4733(line=274,offs=42)))
let XATS2JS_strmcon_head$raw = function (arg1) { // impl
  let jsxtnm59 = arg1
  // I1CMP:start
  let jsxtnm61 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(60);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(50)),I0Pvar(xs(51))));$list(@(x1(50),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));0)),@(xs(51),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));1)))))
    if (XATS000_ctgeq(jsxtnm59, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm60 = jsxtnm59
      jsxtnm61 = XATSP1CN("strmcon_cons", jsxtnm60[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm61
  return jsxtnm61
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4737(line=276,offs=1)--4820(line=281,offs=35)))
// LCSRCsome1(precats.dats)@(4745(line=277,offs=1)--4820(line=281,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_tail$raw_4748
  // FJARGdarg($list(I1BNDcons(I1TNM(62);I0Pvar(xs(53));$list(@(xs(53),I1Vtnm(I1TNM(62)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4821(line=282,offs=1)--4904(line=285,offs=42)))
let XATS2JS_strmcon_tail$raw = function (arg1) { // impl
  let jsxtnm63 = arg1
  // I1CMP:start
  let jsxtnm65 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(64);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(55)),I0Pvar(xs(56))));$list(@(x1(55),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));0)),@(xs(56),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));1)))))
    if (XATS000_ctgeq(jsxtnm63, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm64 = jsxtnm63
      jsxtnm65 = XATSP1CN("strmcon_cons", jsxtnm64[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm65
  return jsxtnm65
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4931(line=289,offs=1)--5032(line=297,offs=31)))
// LCSRCsome1(precats.dats)@(4939(line=290,offs=1)--5032(line=297,offs=31))
// I1FUNDCL
// XATS2JS_strxcon_head$raw_4964
  // FJARGdarg($list(I1BNDcons(I1TNM(66);I0Pvar(xs(58));$list(@(xs(58),I1Vtnm(I1TNM(66)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5033(line=298,offs=1)--5116(line=301,offs=42)))
let XATS2JS_strxcon_head$raw = function (arg1) { // impl
  let jsxtnm67 = arg1
  // I1CMP:start
  let jsxtnm69 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(68);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(60)),I0Pvar(xs(61))));$list(@(x1(60),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));0)),@(xs(61),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));1)))))
    if (XATS000_ctgeq(jsxtnm67, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm68 = jsxtnm67
      jsxtnm69 = XATSP1CN("strxcon_cons", jsxtnm68[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm69
  return jsxtnm69
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5120(line=303,offs=1)--5225(line=311,offs=35)))
// LCSRCsome1(precats.dats)@(5128(line=304,offs=1)--5225(line=311,offs=35))
// I1FUNDCL
// XATS2JS_strxcon_tail$raw_5153
  // FJARGdarg($list(I1BNDcons(I1TNM(70);I0Pvar(xs(63));$list(@(xs(63),I1Vtnm(I1TNM(70)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5226(line=312,offs=1)--5309(line=315,offs=42)))
let XATS2JS_strxcon_tail$raw = function (arg1) { // impl
  let jsxtnm71 = arg1
  // I1CMP:start
  let jsxtnm73 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(72);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(65)),I0Pvar(xs(66))));$list(@(x1(65),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));0)),@(xs(66),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));1)))))
    if (XATS000_ctgeq(jsxtnm71, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm72 = jsxtnm71
      jsxtnm73 = XATSP1CN("strxcon_cons", jsxtnm72[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm73
  return jsxtnm73
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5767(line=352,offs=1)--5845(line=357,offs=32)))
// LCSRCsome1(precats.dats)@(5775(line=353,offs=1)--5845(line=357,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_nilq1_5778
  // FJARGdarg($list(I1BNDcons(I1TNM(74);I0Pvar(xs(68));$list(@(xs(68),I1Vtnm(I1TNM(74)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5846(line=358,offs=1)--5942(line=362,offs=46)))
let XATS2JS_optn_vt_nilq1 = function (arg1) { // impl
  let jsxtnm75 = arg1
  // I1CMP:start
  let jsxtnm78 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(76);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm76 = jsxtnm75
      jsxtnm78 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(77);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(70))));$list(@(x0(70),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(77));0)))))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm77 = jsxtnm75
      jsxtnm78 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm78
  return jsxtnm78
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5946(line=364,offs=1)--6025(line=369,offs=32)))
// LCSRCsome1(precats.dats)@(5954(line=365,offs=1)--6025(line=369,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_consq1_5957
  // FJARGdarg($list(I1BNDcons(I1TNM(79);I0Pvar(xs(72));$list(@(xs(72),I1Vtnm(I1TNM(79)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6026(line=370,offs=1)--6125(line=374,offs=48)))
let XATS2JS_optn_vt_consq1 = function (arg1) { // impl
  let jsxtnm80 = arg1
  // I1CMP:start
  let jsxtnm83 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(81);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm81 = jsxtnm80
      jsxtnm83 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(82);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(74))));$list(@(x0(74),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(82));0)))))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm82 = jsxtnm80
      jsxtnm83 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm83
  return jsxtnm83
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6152(line=378,offs=1)--6232(line=383,offs=31)))
// LCSRCsome1(precats.dats)@(6160(line=379,offs=1)--6232(line=383,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_head$raw0_6163
  // FJARGdarg($list(I1BNDcons(I1TNM(84);I0Pvar(xs(76));$list(@(xs(76),I1Vtnm(I1TNM(84)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_head$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6233(line=384,offs=1)--6314(line=387,offs=39)))
let XATS2JS_optn_vt_head$raw0 = function (arg1) { // impl
  let jsxtnm85 = arg1
  // I1CMP:start
  let jsxtnm87 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(86);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(78)))));$list(@(x0(78),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(86));0)))))
    if (XATS000_ctgeq(jsxtnm85, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm86 = jsxtnm85
      jsxtnm87 = XATSP1CN("optn_vt_cons", jsxtnm86[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm87
  return jsxtnm87
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6318(line=389,offs=1)--6400(line=394,offs=31)))
// LCSRCsome1(precats.dats)@(6326(line=390,offs=1)--6400(line=394,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_uncons$raw0_6329
  // FJARGdarg($list(I1BNDcons(I1TNM(88);I0Pvar(xs(80));$list(@(xs(80),I1Vtnm(I1TNM(88)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_uncons$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6401(line=395,offs=1)--6484(line=398,offs=39)))
let XATS2JS_optn_vt_uncons$raw0 = function (arg1) { // impl
  let jsxtnm89 = arg1
  // I1CMP:start
  let jsxtnm91 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(90);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(82)))));$list(@(x0(82),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(90));0)))))
    if (XATS000_ctgeq(jsxtnm89, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm90 = jsxtnm89
      jsxtnm91 = XATSP1CN("optn_vt_cons", jsxtnm90[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm91
  return jsxtnm91
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6903(line=431,offs=1)--6981(line=436,offs=32)))
// LCSRCsome1(precats.dats)@(6911(line=432,offs=1)--6981(line=436,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_nilq1_6914
  // FJARGdarg($list(I1BNDcons(I1TNM(92);I0Pvar(xs(84));$list(@(xs(84),I1Vtnm(I1TNM(92)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6982(line=437,offs=1)--7078(line=441,offs=46)))
let XATS2JS_list_vt_nilq1 = function (arg1) { // impl
  let jsxtnm93 = arg1
  // I1CMP:start
  let jsxtnm96 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(94);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm94 = jsxtnm93
      jsxtnm96 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(95);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm95 = jsxtnm93
      jsxtnm96 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm96
  return jsxtnm96
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7082(line=443,offs=1)--7161(line=448,offs=32)))
// LCSRCsome1(precats.dats)@(7090(line=444,offs=1)--7161(line=448,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_consq1_7093
  // FJARGdarg($list(I1BNDcons(I1TNM(97);I0Pvar(xs(87));$list(@(xs(87),I1Vtnm(I1TNM(97)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7162(line=449,offs=1)--7261(line=453,offs=48)))
let XATS2JS_list_vt_consq1 = function (arg1) { // impl
  let jsxtnm98 = arg1
  // I1CMP:start
  let jsxtnm101 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(99);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm99 = jsxtnm98
      jsxtnm101 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(100);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm100 = jsxtnm98
      jsxtnm101 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm101
  return jsxtnm101
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7288(line=457,offs=1)--7368(line=462,offs=31)))
// LCSRCsome1(precats.dats)@(7296(line=458,offs=1)--7368(line=462,offs=31))
// I1FUNDCL
// XATS2JS_list_vt_head$raw1_7299
  // FJARGdarg($list(I1BNDcons(I1TNM(102);I0Pvar(xs(90));$list(@(xs(90),I1Vtnm(I1TNM(102)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7369(line=463,offs=1)--7509(line=472,offs=42)))
let XATS2JS_list_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm103 = arg1
  // I1CMP:start
  let jsxtnm109 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(104);I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(92)),I0Pvar(xs(93))));$list(@(x1(92),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));0)),@(xs(93),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));1)))))
    if (XATS000_ctgeq(jsxtnm103, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm104 = jsxtnm103
      let jsxtnm108 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7459(line=471,offs=1)--7484(line=472,offs=17)))
        // I1VALDCL
        let jsxtnm106
        let jsxtnm105 = XATSCAST("datacopy_1720", [XATSP1CN("list_vt_cons", jsxtnm104[0+1])])
        jsxtnm106 = jsxtnm105
        XATS000_patck(true)
        let jsxtnm107 = XATSCAST("enlinear_1756", [jsxtnm106])
        jsxtnm108 = jsxtnm107
      } // endlet
      jsxtnm109 = jsxtnm108
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm109
  return jsxtnm109
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7513(line=474,offs=1)--7601(line=479,offs=38)))
// LCSRCsome1(precats.dats)@(7521(line=475,offs=1)--7601(line=479,offs=38))
// I1FUNDCL
// XATS2JS_list_vt_tail$raw0_7524
  // FJARGdarg($list(I1BNDcons(I1TNM(110);I0Pvar(xs(96));$list(@(xs(96),I1Vtnm(I1TNM(110)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7602(line=480,offs=1)--7732(line=487,offs=43)))
let XATS2JS_list_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm111 = arg1
  // I1CMP:start
  let jsxtnm116 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(112);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(98)),I0Pvar(xs(99)))));$list(@(x1(98),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));0)),@(xs(99),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));1)))))
    if (XATS000_ctgeq(jsxtnm111, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm112 = jsxtnm111
      let jsxtnm115 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7696(line=487,offs=7)--7721(line=487,offs=32)))
        // I1VALDCL
        let jsxtnm114
        let jsxtnm113 = XATSCAST("delinear_1667", [XATSP1CN("list_vt_cons", jsxtnm112[0+1])])
        jsxtnm114 = jsxtnm113
        XATS000_patck(true)
        jsxtnm115 = XATSP1CN("list_vt_cons", jsxtnm112[1+1])
      } // endlet
      jsxtnm116 = jsxtnm115
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm116
  return jsxtnm116
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7779(line=492,offs=1)--7855(line=497,offs=31)))
// LCSRCsome1(precats.dats)@(7787(line=493,offs=1)--7855(line=497,offs=31))
// I1FUNDCL
// XATS2JS_lazy_vt_eval_7790
  // FJARGdarg($list(I1BNDcons(I1TNM(117);I0Pvar(lz(102));$list(@(lz(102),I1Vtnm(I1TNM(117)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_eval);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7856(line=498,offs=1)--7901(line=499,offs=37)))
let XATS2JS_lazy_vt_eval = function (arg1) { // impl
  let jsxtnm118 = arg1
  // I1CMP:start
  let jsxtnm119 = XATS000_dl1az(jsxtnm118)
  // I1CMP:return:jsxtnm119
  return jsxtnm119
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7905(line=501,offs=1)--7982(line=506,offs=32)))
// LCSRCsome1(precats.dats)@(7913(line=502,offs=1)--7982(line=506,offs=32))
// I1FUNDCL
// XATS2JS_lazy_vt_free_7916
  // FJARGdarg($list(I1BNDcons(I1TNM(120);I0Pvar(lz(105));$list(@(lz(105),I1Vtnm(I1TNM(120)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_free);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7983(line=507,offs=1)--8028(line=508,offs=37)))
let XATS2JS_lazy_vt_free = function (arg1) { // impl
  let jsxtnm121 = arg1
  // I1CMP:start
  XATS000_free(jsxtnm121)
  // I1CMP:return:[]
  return []
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8055(line=512,offs=1)--8139(line=517,offs=35)))
// LCSRCsome1(precats.dats)@(8063(line=513,offs=1)--8139(line=517,offs=35))
// I1FUNDCL
// XATS2JS_lazy_vt_make_f0un_8066
  // FJARGdarg($list(I1BNDcons(I1TNM(122);I0Pvar(f0(108));$list(@(f0(108),I1Vtnm(I1TNM(122)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8140(line=518,offs=1)--8193(line=519,offs=45)))
let XATS2JS_lazy_vt_make_f0un = function (arg1) { // impl
  let jsxtnm123 = arg1
  // I1CMP:start
  let jsxtnm125 = XATS000_l1azy(function (tlaz) { // l1azy
    // I1CMP:start
    let jsxtnm124 = XATSDAPP(jsxtnm123())
    // I1CMP:return:jsxtnm124
    return jsxtnm124
  }) // endfun(l1azy)
  // I1CMP:return:jsxtnm125
  return jsxtnm125
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8240(line=524,offs=1)--8316(line=528,offs=35)))
// LCSRCsome1(precats.dats)@(8248(line=525,offs=1)--8316(line=528,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nil_8251
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8317(line=529,offs=1)--8369(line=530,offs=44)))
let XATS2JS_strmcon_vt_nil = function () { // impl
  // I1CMP:start
  let jsxtnm126 = XATSCAPP("strmcon_vt_nil", [0])
  // I1CMP:return:jsxtnm126
  return jsxtnm126
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8373(line=532,offs=1)--8472(line=537,offs=44)))
// LCSRCsome1(precats.dats)@(8381(line=533,offs=1)--8472(line=537,offs=44))
// I1FUNDCL
// XATS2JS_strmcon_vt_cons_8384
  // FJARGdarg($list(I1BNDcons(I1TNM(127);I0Pvar(x1(112));$list(@(x1(112),I1Vtnm(I1TNM(127))))),I1BNDcons(I1TNM(128);I0Pvar(xs(113));$list(@(xs(113),I1Vtnm(I1TNM(128)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8473(line=538,offs=1)--8537(line=539,offs=56)))
let XATS2JS_strmcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm129 = arg1
  let jsxtnm130 = arg2
  // I1CMP:start
  let jsxtnm131 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm129, jsxtnm130])
  // I1CMP:return:jsxtnm131
  return jsxtnm131
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8541(line=541,offs=1)--8640(line=546,offs=44)))
// LCSRCsome1(precats.dats)@(8549(line=542,offs=1)--8640(line=546,offs=44))
// I1FUNDCL
// XATS2JS_strxcon_vt_cons_8552
  // FJARGdarg($list(I1BNDcons(I1TNM(132);I0Pvar(x1(117));$list(@(x1(117),I1Vtnm(I1TNM(132))))),I1BNDcons(I1TNM(133);I0Pvar(xs(118));$list(@(xs(118),I1Vtnm(I1TNM(133)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8641(line=547,offs=1)--8705(line=548,offs=56)))
let XATS2JS_strxcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm134 = arg1
  let jsxtnm135 = arg2
  // I1CMP:start
  let jsxtnm136 = XATSCAPP("strxcon_vt_cons", [0, jsxtnm134, jsxtnm135])
  // I1CMP:return:jsxtnm136
  return jsxtnm136
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8732(line=552,offs=1)--8816(line=557,offs=35)))
// LCSRCsome1(precats.dats)@(8740(line=553,offs=1)--8816(line=557,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nilq1_8743
  // FJARGdarg($list(I1BNDcons(I1TNM(137);I0Pvar(xs(122));$list(@(xs(122),I1Vtnm(I1TNM(137)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8817(line=558,offs=1)--8921(line=562,offs=51)))
let XATS2JS_strmcon_vt_nilq1 = function (arg1) { // impl
  let jsxtnm138 = arg1
  // I1CMP:start
  let jsxtnm141 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(139);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm139 = jsxtnm138
      jsxtnm141 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(140);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm140 = jsxtnm138
      jsxtnm141 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm141
  return jsxtnm141
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8925(line=564,offs=1)--9010(line=569,offs=35)))
// LCSRCsome1(precats.dats)@(8933(line=565,offs=1)--9010(line=569,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_consq1_8936
  // FJARGdarg($list(I1BNDcons(I1TNM(142);I0Pvar(xs(125));$list(@(xs(125),I1Vtnm(I1TNM(142)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9011(line=570,offs=1)--9118(line=574,offs=53)))
let XATS2JS_strmcon_vt_consq1 = function (arg1) { // impl
  let jsxtnm143 = arg1
  // I1CMP:start
  let jsxtnm146 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(144);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm144 = jsxtnm143
      jsxtnm146 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(145);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm145 = jsxtnm143
      jsxtnm146 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm146
  return jsxtnm146
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9145(line=578,offs=1)--9232(line=583,offs=34)))
// LCSRCsome1(precats.dats)@(9153(line=579,offs=1)--9232(line=583,offs=34))
// I1FUNDCL
// XATS2JS_strmcon_vt_head$raw1_9156
  // FJARGdarg($list(I1BNDcons(I1TNM(147);I0Pvar(xs(128));$list(@(xs(128),I1Vtnm(I1TNM(147)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9233(line=584,offs=1)--9382(line=593,offs=42)))
let XATS2JS_strmcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm148 = arg1
  // I1CMP:start
  let jsxtnm154 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(149);I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(130)),I0Pvar(xs(131))));$list(@(x1(130),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));0)),@(xs(131),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));1)))))
    if (XATS000_ctgeq(jsxtnm148, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm149 = jsxtnm148
      let jsxtnm153 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9332(line=592,offs=1)--9357(line=593,offs=17)))
        // I1VALDCL
        let jsxtnm151
        let jsxtnm150 = XATSCAST("datacopy_1720", [XATSP1CN("strmcon_vt_cons", jsxtnm149[0+1])])
        jsxtnm151 = jsxtnm150
        XATS000_patck(true)
        let jsxtnm152 = XATSCAST("enlinear_1756", [jsxtnm151])
        jsxtnm153 = jsxtnm152
      } // endlet
      jsxtnm154 = jsxtnm153
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm154
  return jsxtnm154
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9386(line=595,offs=1)--9480(line=600,offs=41)))
// LCSRCsome1(precats.dats)@(9394(line=596,offs=1)--9480(line=600,offs=41))
// I1FUNDCL
// XATS2JS_strmcon_vt_tail$raw0_9397
  // FJARGdarg($list(I1BNDcons(I1TNM(155);I0Pvar(xs(134));$list(@(xs(134),I1Vtnm(I1TNM(155)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9481(line=601,offs=1)--9620(line=608,offs=43)))
let XATS2JS_strmcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm156 = arg1
  // I1CMP:start
  let jsxtnm161 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(157);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(136)),I0Pvar(xs(137)))));$list(@(x1(136),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));0)),@(xs(137),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));1)))))
    if (XATS000_ctgeq(jsxtnm156, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm157 = jsxtnm156
      let jsxtnm160 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9584(line=608,offs=7)--9609(line=608,offs=32)))
        // I1VALDCL
        let jsxtnm159
        let jsxtnm158 = XATSCAST("delinear_1667", [XATSP1CN("strmcon_vt_cons", jsxtnm157[0+1])])
        jsxtnm159 = jsxtnm158
        XATS000_patck(true)
        jsxtnm160 = XATSP1CN("strmcon_vt_cons", jsxtnm157[1+1])
      } // endlet
      jsxtnm161 = jsxtnm160
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm161
  return jsxtnm161
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9669(line=615,offs=1)--9756(line=620,offs=34)))
// LCSRCsome1(precats.dats)@(9677(line=616,offs=1)--9756(line=620,offs=34))
// I1FUNDCL
// XATS2JS_strxcon_vt_head$raw1_9680
  // FJARGdarg($list(I1BNDcons(I1TNM(162);I0Pvar(xs(140));$list(@(xs(140),I1Vtnm(I1TNM(162)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9757(line=621,offs=1)--9906(line=630,offs=42)))
let XATS2JS_strxcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm163 = arg1
  // I1CMP:start
  let jsxtnm169 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(164);I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(142)),I0Pvar(xs(143))));$list(@(x1(142),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));0)),@(xs(143),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));1)))))
    if (XATS000_ctgeq(jsxtnm163, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm164 = jsxtnm163
      let jsxtnm168 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9856(line=629,offs=1)--9881(line=630,offs=17)))
        // I1VALDCL
        let jsxtnm166
        let jsxtnm165 = XATSCAST("datacopy_1720", [XATSP1CN("strxcon_vt_cons", jsxtnm164[0+1])])
        jsxtnm166 = jsxtnm165
        XATS000_patck(true)
        let jsxtnm167 = XATSCAST("enlinear_1756", [jsxtnm166])
        jsxtnm168 = jsxtnm167
      } // endlet
      jsxtnm169 = jsxtnm168
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm169
  return jsxtnm169
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9932(line=635,offs=1)--10026(line=640,offs=41)))
// LCSRCsome1(precats.dats)@(9940(line=636,offs=1)--10026(line=640,offs=41))
// I1FUNDCL
// XATS2JS_strxcon_vt_tail$raw0_9943
  // FJARGdarg($list(I1BNDcons(I1TNM(170);I0Pvar(xs(146));$list(@(xs(146),I1Vtnm(I1TNM(170)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(10027(line=641,offs=1)--10166(line=648,offs=43)))
let XATS2JS_strxcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm171 = arg1
  // I1CMP:start
  let jsxtnm176 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(172);I0Pfree(I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(148)),I0Pvar(xs(149)))));$list(@(x1(148),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));0)),@(xs(149),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));1)))))
    if (XATS000_ctgeq(jsxtnm171, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm172 = jsxtnm171
      let jsxtnm175 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(10130(line=648,offs=7)--10155(line=648,offs=32)))
        // I1VALDCL
        let jsxtnm174
        let jsxtnm173 = XATSCAST("delinear_1667", [XATSP1CN("strxcon_vt_cons", jsxtnm172[0+1])])
        jsxtnm174 = jsxtnm173
        XATS000_patck(true)
        jsxtnm175 = XATSP1CN("strxcon_vt_cons", jsxtnm172[1+1])
      } // endlet
      jsxtnm176 = jsxtnm175
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm176
  return jsxtnm176
} // endfun(impl)
// LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1));D3Cnone0()))
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Fri Jan 16 11:47:37 PM EST 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_prelude.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 05 Sep 2024 11:21:07 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_console_log
  (x0)
{
  return console.log(x0) // HX: void
}
//
////////////////////////////////////////////////////////////////////////.
//
const
XATS2JS_the_print_store = [] // HX: for prints?
//
const
XATS2JS_the_prout_store = [] // HX: for general output
//
const
XATS2JS_the_prerr_store = [] // HX: for reporting errors
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_the_print_store_clear
  ( /*void*/ )
{
  XATS2JS_the_print_store.length = 0; return
}
//
function
XATS2JS_the_print_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_print_store.join("")
  XATS2JS_the_print_store.length = 0; return cs
}
//
function
XATS2JS_the_prout_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prout_store.join("")
  XATS2JS_the_prout_store.length = 0; return cs
}
//
function
XATS2JS_the_prerr_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prerr_store.join("")
  XATS2JS_the_prerr_store.length = 0; return cs
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_xtop000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 09:31:27 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_g_tostr
  ( obj )
{
  return String(obj) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_sint$parse$fwork
  (rep0, work)
{
  let i0 = parseInt(rep0)
  if (!isNaN(i0)) { work(i0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_dflt$parse$fwork
  (rep0, work)
{
  let f0 = parseFloat(rep0)
  if (!isNaN(f0)) { work(f0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gbas000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Sep 20 09:05:02 AM EDT 2024
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_assert$errmsg
  (cond, emsg)
{
  if (!cond) {
    throw new Error("XATS2JS_bool_assert$errmsg: emsg = " + emsg)
  } ; return // HX: void is returned!
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gdbg000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 04:27:52 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_neg
  ( i1 )
{
  return ( -i1 ) // HX: neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_lt$sint
  (i1, i2)
{
  return (i1 < i2) // HX: lt
}
function
XATS2JS_sint_gt$sint
  (i1, i2)
{
  return (i1 > i2) // HX: gt
}
//
function
XATS2JS_sint_lte$sint
  (i1, i2)
{
  return (i1 <= i2) // HX: lte
}
function
XATS2JS_sint_gte$sint
  (i1, i2)
{
  return (i1 >= i2) // HX: gte
}
//
function
XATS2JS_sint_eq$sint
  (i1, i2)
{
  return (i1 === i2) // HX: equal
}
function
XATS2JS_sint_neq$sint
  (i1, i2)
{
  return (i1 !== i2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_add$sint
  (i1, i2)
{
  return (i1 + i2) // HX: add
}
//
function
XATS2JS_sint_sub$sint
  (i1, i2)
{
  return (i1 - i2) // HX: sub
}
//
function
XATS2JS_sint_mul$sint
  (i1, i2)
{
  return (i1 * i2) // HX: mul
}
//
function
XATS2JS_sint_div$sint
  (i1, i2)
{
  return Math.trunc(i1 / i2)
}
//
function
XATS2JS_sint_mod$sint
  (i1, i2)
{
  return (i1 % i2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_print
  ( i0 )
{
  let cs = i0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2025-09-27:
// for unsigned ints
// Sat Sep 27 12:38:38 PM EDT 2025
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_uint_print
  ( u0 )
{
  let cs = u0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_to$uint
  ( i0 )
{
  if (i0>=0)
  {
    return i0 // i0>=0
  } else {
    throw new Error("XATS2JS_sint_to$uint: i0 = " + i0.toString())
  } // end of [if(i0>=0)]
}
function
XATS2JS_uint_to$sint
  ( u0 )
{
  if (u0>=0)
  {
    return u0 // always?
  } else {
    throw new Error("XATS2JS_uint_to$sint: u0 = " + u0.toString())
  } // end of [if(u0>=0)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gint000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:07:38 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_lt
  (b1, b2)
{
  return (b1 < b2) // HX: lt
}
function
XATS2JS_bool_gt
  (b1, b2)
{
  return (b1 > b2) // HX: gt
}
//
function
XATS2JS_bool_lte
  (b1, b2)
{
  return (b1 <= b2) // HX: lte
}
function
XATS2JS_bool_gte
  (b1, b2)
{
  return (b1 >= b2) // HX: gte
}
//
function
XATS2JS_bool_eq
  (b1, b2)
{
  return (b1 === b2) // HX: equal
}
function
XATS2JS_bool_neq
  (b1, b2)
{
  return (b1 !== b2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_bool000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:08:01 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_lt
  (c1, c2)
{
  return (c1 < c2) // HX: lt
}
function
XATS2JS_char_gt
  (c1, c2)
{
  return (c1 > c2) // HX: gt
}
//
function
XATS2JS_char_lte
  (c1, c2)
{
  return (c1 <= c2) // HX: lte
}
function
XATS2JS_char_gte
  (c1, c2)
{
  return (c1 >= c2) // HX: gte
}
//
function
XATS2JS_char_eq
  (c1, c2)
{
  return (c1 === c2) // HX: equal
}
function
XATS2JS_char_neq
  (c1, c2)
{
  return (c1 !== c2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_add$sint
  (c1, i2)
{
  let c2 = c1+i2
  return (c2%256) // HX: char=int8
}
//
function
XATS2JS_char_sub$char
  (c1, c2)
{
  return (c1 - c2) // HX: char=int8
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_print
  ( c0 )
{
  let cs = String.fromCharCode(c0)
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-01-10:
Taken from gavinz
Sun Jan 19 01:11:19 AM EST 2025
*/
function
XATS2JS_char_make_sint( i0 ) { return i0 }
//
/*
HX-2026-01-15:
Thu Jan 15 06:47:03 PM EST 2026
*/
function
XATS2JS_sint_make_char( ch ) { return ch }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_char000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 06:14:11 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_neg
  ( df )
{
  return ( -df ) //HX:neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_abs
  ( df )
{
  if (df >= 0.0)
    return df
  else
    return (-df) //HX:abs
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_sqrt
  ( df )
{
  return Math.sqrt(  df  )
}
//
function
XATS2JS_dflt_cbrt
  ( df )
{
  return Math.cbrt(  df  )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_lt$dflt
  (f1, f2)
{
  return (f1 < f2) // HX: lt
}
function
XATS2JS_dflt_gt$dflt
  (f1, f2)
{
  return (f1 > f2) // HX: gt
}
//
function
XATS2JS_dflt_lte$dflt
  (f1, f2)
{
  return (f1 <= f2) // HX: lte
}
function
XATS2JS_dflt_gte$dflt
  (f1, f2)
{
  return (f1 >= f2) // HX: gte
}
//
function
XATS2JS_dflt_eq$dflt
  (f1, f2)
{
  return (f1 === f2) // HX: eq
}
function
XATS2JS_dflt_neq$dflt
  (f1, f2)
{
  return (f1 !== f2) // HX: neq
}
//
/*
HX-2025-12-13:
Sat Dec 13 05:19:31 PM EST 2025
*/
//
function
XATS2JS_dflt_cmp$dflt
  (f1, f2)
{
  if (f1 < f2)
    return (-1) // lt
  else // f1 >= f2
    return (f1 > f2 ? 1 : 0)
  // HX: end-of-if( f1 < f2 )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_add$dflt
  (f1, f2)
{
  return (f1 + f2) // HX: add
}
//
function
XATS2JS_dflt_sub$dflt
  (f1, f2)
{
  return (f1 - f2) // HX: sub
}
//
//
function
XATS2JS_dflt_mul$dflt
  (f1, f2)
{
  return (f1 * f2) // HX: mul
}
//
function
XATS2JS_dflt_div$dflt
  (f1, f2)
{
  return (f1 / f2) // HX: div
}
//
function
XATS2JS_dflt_mod$dflt
  (f1, f2)
{
  return (f1 % f2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_ceil
  ( df )
{
  return Math.ceil(df) // (1.2) = 2
}
function
XATS2JS_dflt_floor
  ( df )
{
  return Math.floor(df) // (1.2) = 1
}
function
XATS2JS_dflt_round
  ( df )
{
  // HX: (1.2) = 1 // (1.5) = 2
  return Math.round(df) // (-1.5) = 1
}
function
XATS2JS_dflt_trunc
  ( df )
{
  // HX: (1.2) = 1 // (1.9) = 1
  return Math.trunc(df) // (-1.2) = -1
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_print
  ( f0 )
{
  let cs = f0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gflt000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri 16 Aug 2024 05:26:45 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_cmp
  (x1, x2)
{
  var df
  var i0 = 0
  var n1 = x1.length;
  var n2 = x2.length;
  var n0 =
  (n1 <= n2) ? n1 : n2;
  while (i0 < n0) {
    df =
    x1.charCodeAt(i0)
    -
    x2.charCodeAt(i0)
    if (df !== 0) return df;
    i0 = (  i0 + 1  )
  }
  return (      n1 - n2      );
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_length
  (cs)
{
  return cs.length // HX: field
}
function
XATS000_strn_length
  (cs)
{
  return cs.length // HX: field
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_get$at$raw
  (cs, i0)
{
  return cs.charCodeAt(i0) // HX: ascii
}
function
XATS000_strn_get$at$raw
  (cs, i0)
{
  return XATS2JS_strn_get$at$raw(cs, i0)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_fmake_fwork
  (fwork)
{
  var cs = []
  fwork((ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_fwork
  (fwork)
{
  return XATS2JS_strn_fmake_fwork(fwork)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS000_strn_print
  ( cs )
{
  return XATS2JS_strn_print(cs)
}
function
XATS2JS_strn_print
  ( cs )
{
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-04-26:
Sat Apr 26 08:48:02 PM EDT 2025
*/
//
function
XATS2JS_strn_fmake_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
function
XATS2JS_strn_fmake1_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake_env$fwork(env, fwork)
}
function
XATS000_strn_fmake1_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake1_env$fwork(env, fwork)
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_foritm0$f1un
  (xs, work)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      work(x1)
      xs = XATS2JS_list_vt_tail$raw0(xs)
    }
  }
  return // XATS2JS_list_vt_foritm0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_forall0$f1un
  (xs, test, free)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      if (test(x1)) {
        xs = XATS2JS_list_vt_tail$raw0(xs)
      } else {
        xs = XATS2JS_list_vt_tail$raw0(xs)
        XATS2JS_list_vt_foritm0$f1un(xs, free); return false
      }
    }
  }
  return true // XATS2JS_list_vt_forall0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_list000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX: It is yet to be populated!
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_optn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_forall0$f1un
  (fxs, test)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    if (nilq1(cxs))
    {
      break;
    } else {
      let x01 =
        XATS2JS_strmcon_vt_head$raw1(cxs)
      if (test(x01))
      {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      } else {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
        XATS2JS_lazy_vt_free(fxs); return false
      }
    }
  }
  return true // XATS2JS_strm_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strmcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strmcon_vt_filter0$f1un
  (cxs, test, free)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    if (nilq1(cxs))
    {
      return XATS2JS_strmcon_vt_nil()
    } else {
      let x01 = XATS2JS_strmcon_vt_head$raw1(cxs)
      let fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      if (test(x01)) {
        return XATS2JS_strmcon_vt_cons(x01, XATS2JS_strm_vt_filter0$f1un(fxs, test, free))
      } else {
        free(x01);
        cxs = XATS2JS_lazy_vt_eval(fxs); continue;
      }
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strm000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Wed Jan 14 01:17:42 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_forall0$f1un
  (fxs, test)
{
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    let x01 =
      XATS2JS_strxcon_vt_head$raw1(cxs)
    if (test(x01))
    {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    } else {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
      XATS2JS_lazy_vt_free(fxs); return false
    }
  }
  return true // XATS2JS_strx_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strxcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strxcon_vt_filter0$f1un
  (cxs, test, free)
{
  while (1) {
    let x01 = XATS2JS_strxcon_vt_head$raw1(cxs)
    let fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    if (test(x01)) {
      return XATS2JS_strxcon_vt_cons(x01, XATS2JS_strx_vt_filter0$f1un(fxs, test, free))
    } else {
      free(x01);
      cxs = XATS2JS_lazy_vt_eval(fxs); continue;
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strx000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 12 Aug 2024 09:36:59 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a0rf_lget
  ( A0 )
{
  return A0[0]
}
function
XATS2JS_a0rf_lset
  (A0, x1)
{
  A0[0] = x1; return
}
//
function
XATS2JS_a0rf_make_1val
  ( x0 )
{
  return [x0] // HX: singleton
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1rf_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1rf_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
function
XATS2JS_a1rf_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0=[x0, x0, ..., x0]
}
//
function
XATS2JS_a1rf_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axrf000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 15 Aug 2024 01:42:20 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_length
  ( A0 )
{
  return A0.length
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1sz_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX-2024-09-06:
Fri 06 Sep 2024 04:18:38 PM EDT
*/
//
function
XATS2JS_a1sz_make_none
  ( n0 )
{
  var A0 = new Array(n0)
  return A0 // HX: A0 = [?, ..., ?]
}
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2024-08-15:
Thu 15 Aug 2024 01:50:45 PM EDT
*/
//
function
XATS2JS_a1sz_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0 = [x0, ..., x0]
}
//
function
XATS2JS_a1sz_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_fmake_fwork
  (fwork)
{
  var A0 = []
  fwork((x0) => {A0.push(x0);return}); return A0
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axsz000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// I1Dinclude(LCSRCsome1(collatz.dats)@(314(line=15,offs=1)--365(line=17,offs=33)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/pre2026.sats";24));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/SATS/pre2026.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/VT/pre2026_vt.sats";30));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/SATS/VT/pre2026_vt.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/i1range.sats";32));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/SATS/i1range.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/trec000.sats";32));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/SATS/trec000.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/strm000_vt.sats";38));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/SATS/VT/strm000_vt.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(1785(line=64,offs=1)--1832(line=65,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/trec000_vt.sats";38));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/SATS/VT/trec000_vt.sats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(collatz.dats)@(409(line=21,offs=1)--450(line=22,offs=33)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(244(line=17,offs=1)--291(line=19,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(292(line=20,offs=1)--339(line=22,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(340(line=23,offs=1)--387(line=25,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(414(line=29,offs=1)--461(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(488(line=35,offs=1)--541(line=37,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(542(line=38,offs=1)--595(line=40,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(767(line=51,offs=1)--807(line=51,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(854(line=56,offs=1)--894(line=56,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1038(line=65,offs=1)--1078(line=65,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1079(line=66,offs=1)--1119(line=66,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1120(line=67,offs=1)--1160(line=67,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1164(line=69,offs=1)--1204(line=69,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1205(line=70,offs=1)--1245(line=70,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1246(line=71,offs=1)--1286(line=71,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1290(line=73,offs=1)--1330(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gasq000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1331(line=74,offs=1)--1371(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gasq001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1372(line=75,offs=1)--1412(line=75,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq002.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gasq002.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1416(line=77,offs=1)--1456(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gmap000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1457(line=78,offs=1)--1497(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gmap001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1501(line=80,offs=1)--1541(line=80,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1542(line=81,offs=1)--1582(line=81,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1583(line=82,offs=1)--1623(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1650(line=86,offs=1)--1690(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1691(line=87,offs=1)--1731(line=87,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/char000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1732(line=88,offs=1)--1772(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1773(line=89,offs=1)--1813(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1814(line=90,offs=1)--1854(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1881(line=94,offs=1)--1921(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1922(line=95,offs=1)--1962(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(1989(line=99,offs=1)--2029(line=99,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2030(line=100,offs=1)--2070(line=100,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2071(line=101,offs=1)--2111(line=101,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2112(line=102,offs=1)--2152(line=102,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2153(line=103,offs=1)--2193(line=103,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/asrt000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/asrt000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2194(line=104,offs=1)--2234(line=104,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2235(line=105,offs=1)--2275(line=105,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2276(line=106,offs=1)--2316(line=106,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2317(line=107,offs=1)--2357(line=107,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/list000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2358(line=108,offs=1)--2398(line=108,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/list001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2399(line=109,offs=1)--2439(line=109,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/list002.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2440(line=110,offs=1)--2480(line=110,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/lsrt000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/lsrt000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2481(line=111,offs=1)--2521(line=111,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2522(line=112,offs=1)--2562(line=112,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2563(line=113,offs=1)--2603(line=113,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2604(line=114,offs=1)--2644(line=114,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strm001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2645(line=115,offs=1)--2685(line=115,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2686(line=116,offs=1)--2726(line=116,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx001.dats";27)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strx001.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2773(line=121,offs=1)--2818(line=121,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2822(line=123,offs=1)--2867(line=123,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2868(line=124,offs=1)--2913(line=124,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2917(line=126,offs=1)--2962(line=126,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(2963(line=127,offs=1)--3008(line=127,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3012(line=129,offs=1)--3057(line=129,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3061(line=131,offs=1)--3106(line=131,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3107(line=132,offs=1)--3152(line=132,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3196(line=136,offs=1)--3242(line=136,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3243(line=137,offs=1)--3289(line=137,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3290(line=138,offs=1)--3336(line=138,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3337(line=139,offs=1)--3383(line=139,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3384(line=140,offs=1)--3430(line=140,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3431(line=141,offs=1)--3477(line=141,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3478(line=142,offs=1)--3524(line=142,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3525(line=143,offs=1)--3571(line=143,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gasq000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3572(line=144,offs=1)--3618(line=144,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gasq001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3619(line=145,offs=1)--3665(line=145,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3686(line=147,offs=1)--3732(line=147,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3756(line=150,offs=1)--3802(line=150,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3803(line=151,offs=1)--3849(line=151,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3850(line=152,offs=1)--3896(line=152,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3900(line=154,offs=1)--3946(line=154,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3947(line=155,offs=1)--3993(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(3994(line=156,offs=1)--4040(line=156,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/lsrt000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/lsrt000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4041(line=157,offs=1)--4087(line=157,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4088(line=158,offs=1)--4134(line=158,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4138(line=160,offs=1)--4184(line=160,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4185(line=161,offs=1)--4231(line=161,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4232(line=162,offs=1)--4278(line=162,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4279(line=163,offs=1)--4325(line=163,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4326(line=164,offs=1)--4372(line=164,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4543(line=175,offs=1)--4589(line=175,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(collatz.dats)@(451(line=23,offs=1)--502(line=25,offs=33)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/pre2026.dats";24));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/DATS/pre2026.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/VT/pre2026_vt.dats";30));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/DATS/VT/pre2026_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/i1range.dats";32));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/DATS/i1range.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/trec000.dats";32));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/DATS/trec000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/VT/trec000_vt.dats";38));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/pre2026/DATS/VT/trec000_vt.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(collatz.dats)@(503(line=26,offs=1)--547(line=27,offs=36)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/list000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/list000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/optn000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/optn000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(901(line=54,offs=1)--949(line=55,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strm000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strm000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(950(line=56,offs=1)--998(line=57,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strx000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strx000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(1045(line=62,offs=1)--1093(line=63,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(1094(line=64,offs=1)--1142(line=65,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1));D3Cnone0()))
// I1Dfundclist(LCSRCsome1(collatz.dats)@(697(line=35,offs=1)--776(line=42,offs=2)))
// I1FUNDCL
function collatz_step_700(arg1)
{ // fun
  let jsxtnm1 = arg1
  // I1CMP:start
  // LCSRCsome1(collatz.dats)@(744(line=39,offs=11)--745(line=39,offs=12))
  // I0Etapq(I0Ecst(sint_eq$sint(916)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2165(line=91,offs=1)--2177(line=91,offs=13))));$list(T2JAG($list())))
  // T1IMPallx(sint_eq$sint(916);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(1942(line=84,offs=1)--2103(line=96,offs=2)))
  // T1IMPallx(sint_eq$sint(916)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_eq$sint(916);$list()))))
  let jsxtnm8 = function (arg1, arg2) { // timp: sint_eq$sint(916)
    let jsxtnm2 = arg1
    let jsxtnm3 = arg2
    // I1CMP:start
    let jsxtnm7 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2030(line=92,offs=1)--2101(line=95,offs=39)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2038(line=93,offs=1)--2101(line=95,offs=39))
      // I1FUNDCL
      // XATS2JS_sint_eq$sint_2041
        // FJARGdarg($list(I1BNDcons(I1TNM(4);I0Pvar(i1(4979));$list(@(i1(4979),I1Vtnm(I1TNM(4))))),I1BNDcons(I1TNM(5);I0Pvar(i2(4980));$list(@(i2(4980),I1Vtnm(I1TNM(5)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_eq$sint);G1Nlist($list())) // I1CMP:return
      let jsxtnm6 = XATSDAPP(XATS2JS_sint_eq$sint(jsxtnm2, jsxtnm3))
      jsxtnm7 = jsxtnm6
    } // endlet
    // I1CMP:return:jsxtnm7
    return jsxtnm7
  } // endtimp(sint_eq$sint(916))
  // LCSRCsome1(collatz.dats)@(740(line=39,offs=7)--741(line=39,offs=8))
  // I0Etapq(I0Ecst(sint_mod$sint(925)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(3076(line=143,offs=1)--3089(line=143,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(sint_mod$sint(925);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3349(line=201,offs=1)--3513(line=213,offs=2)))
  // T1IMPallx(sint_mod$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_mod$sint(925);$list()))))
  let jsxtnm15 = function (arg1, arg2) { // timp: sint_mod$sint(925)
    let jsxtnm9 = arg1
    let jsxtnm10 = arg2
    // I1CMP:start
    let jsxtnm14 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3439(line=209,offs=1)--3511(line=212,offs=39)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3447(line=210,offs=1)--3511(line=212,offs=39))
      // I1FUNDCL
      // XATS2JS_sint_mod$sint_3450
        // FJARGdarg($list(I1BNDcons(I1TNM(11);I0Pvar(i1(5019));$list(@(i1(5019),I1Vtnm(I1TNM(11))))),I1BNDcons(I1TNM(12);I0Pvar(i2(5020));$list(@(i2(5020),I1Vtnm(I1TNM(12)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_mod$sint);G1Nlist($list())) // I1CMP:return
      let jsxtnm13 = XATSDAPP(XATS2JS_sint_mod$sint(jsxtnm9, jsxtnm10))
      jsxtnm14 = jsxtnm13
    } // endlet
    // I1CMP:return:jsxtnm14
    return jsxtnm14
  } // endtimp(sint_mod$sint(925))
  let jsxtnm16 = XATSDAPP(jsxtnm15(jsxtnm1, XATSINT1(2)))
  let jsxtnm17 = XATSDAPP(jsxtnm8(jsxtnm16, XATSINT1(0)))
  let jsxtnm42 // ift
  if (jsxtnm17) // ift
  {
    // LCSRCsome1(collatz.dats)@(756(line=40,offs=8)--757(line=40,offs=9))
    // I0Etapq(I0Ecst(sint_div$sint(924)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(3011(line=139,offs=1)--3024(line=139,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(sint_div$sint(924);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3181(line=187,offs=1)--3345(line=199,offs=2)))
    // T1IMPallx(sint_div$sint(924)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_div$sint(924);$list()))))
    let jsxtnm24 = function (arg1, arg2) { // timp: sint_div$sint(924)
      let jsxtnm18 = arg1
      let jsxtnm19 = arg2
      // I1CMP:start
      let jsxtnm23 // let
      { // let
        // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3271(line=195,offs=1)--3343(line=198,offs=39)))
        // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3279(line=196,offs=1)--3343(line=198,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_div$sint_3282
          // FJARGdarg($list(I1BNDcons(I1TNM(20);I0Pvar(i1(5014));$list(@(i1(5014),I1Vtnm(I1TNM(20))))),I1BNDcons(I1TNM(21);I0Pvar(i2(5015));$list(@(i2(5015),I1Vtnm(I1TNM(21)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_div$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm22 = XATSDAPP(XATS2JS_sint_div$sint(jsxtnm18, jsxtnm19))
        jsxtnm23 = jsxtnm22
      } // endlet
      // I1CMP:return:jsxtnm23
      return jsxtnm23
    } // endtimp(sint_div$sint(924))
    let jsxtnm25 = XATSDAPP(jsxtnm24(jsxtnm1, XATSINT1(2)))
    jsxtnm42 = jsxtnm25
  } else {
    // LCSRCsome1(collatz.dats)@(771(line=41,offs=12)--772(line=41,offs=13))
    // I0Etapq(I0Ecst(sint_add$sint(921)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(sint_add$sint(921);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
    // T1IMPallx(sint_add$sint(921)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(921);$list()))))
    let jsxtnm32 = function (arg1, arg2) { // timp: sint_add$sint(921)
      let jsxtnm26 = arg1
      let jsxtnm27 = arg2
      // I1CMP:start
      let jsxtnm31 // let
      { // let
        // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
        // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_add$sint_2778
          // FJARGdarg($list(I1BNDcons(I1TNM(28);I0Pvar(i1(4999));$list(@(i1(4999),I1Vtnm(I1TNM(28))))),I1BNDcons(I1TNM(29);I0Pvar(i2(5000));$list(@(i2(5000),I1Vtnm(I1TNM(29)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm30 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm26, jsxtnm27))
        jsxtnm31 = jsxtnm30
      } // endlet
      // I1CMP:return:jsxtnm31
      return jsxtnm31
    } // endtimp(sint_add$sint(921))
    // LCSRCsome1(collatz.dats)@(767(line=41,offs=8)--768(line=41,offs=9))
    // I0Etapq(I0Ecst(sint_mul$sint(923)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2946(line=135,offs=1)--2959(line=135,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(sint_mul$sint(923);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3013(line=173,offs=1)--3177(line=185,offs=2)))
    // T1IMPallx(sint_mul$sint(923)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_mul$sint(923);$list()))))
    let jsxtnm39 = function (arg1, arg2) { // timp: sint_mul$sint(923)
      let jsxtnm33 = arg1
      let jsxtnm34 = arg2
      // I1CMP:start
      let jsxtnm38 // let
      { // let
        // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3103(line=181,offs=1)--3175(line=184,offs=39)))
        // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3111(line=182,offs=1)--3175(line=184,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_mul$sint_3114
          // FJARGdarg($list(I1BNDcons(I1TNM(35);I0Pvar(i1(5009));$list(@(i1(5009),I1Vtnm(I1TNM(35))))),I1BNDcons(I1TNM(36);I0Pvar(i2(5010));$list(@(i2(5010),I1Vtnm(I1TNM(36)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_mul$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm37 = XATSDAPP(XATS2JS_sint_mul$sint(jsxtnm33, jsxtnm34))
        jsxtnm38 = jsxtnm37
      } // endlet
      // I1CMP:return:jsxtnm38
      return jsxtnm38
    } // endtimp(sint_mul$sint(923))
    let jsxtnm40 = XATSDAPP(jsxtnm39(XATSINT1(3), jsxtnm1))
    let jsxtnm41 = XATSDAPP(jsxtnm32(jsxtnm40, XATSINT1(1)))
    jsxtnm42 = jsxtnm41
  } // end(if)
  // I1CMP:return:jsxtnm42
  return jsxtnm42
} // endfun(collatz_step_700)
// LCSRCsome1(collatz.dats)@(944(line=50,offs=1)--982(line=51,offs=30))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(collatz_result;S2Etrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);S2Ecst(sint)),S2LAB(LABint(1);S2Ecst(sint))))))))
// I1Dfundclist(LCSRCsome1(collatz.dats)@(1101(line=56,offs=1)--1292(line=69,offs=2)))
// I1FUNDCL
function collatz_count_1104(arg1)
{ // fun
  let jsxtnm43 = arg1
  // I1CMP:start
  let jsxtnm67 // let
  { // let
    // I1Dfundclist(LCSRCsome1(collatz.dats)@(1171(line=62,offs=1)--1290(line=68,offs=2)))
    // I1FUNDCL
    function loop_1174(arg1, arg2)
    { // fun
      let jsxtnm44 = arg1
      let jsxtnm45 = arg2
      // I1CMP:start
      // LCSRCsome1(collatz.dats)@(1222(line=65,offs=10)--1224(line=65,offs=12))
      // I0Etapq(I0Ecst(sint_lte$sint(917)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2344(line=100,offs=1)--2357(line=100,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(sint_lte$sint(917);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2130(line=100,offs=1)--2294(line=112,offs=2)))
      // T1IMPallx(sint_lte$sint(917)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lte$sint(917);$list()))))
      let jsxtnm52 = function (arg1, arg2) { // timp: sint_lte$sint(917)
        let jsxtnm46 = arg1
        let jsxtnm47 = arg2
        // I1CMP:start
        let jsxtnm51 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2220(line=108,offs=1)--2292(line=111,offs=39)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2228(line=109,offs=1)--2292(line=111,offs=39))
          // I1FUNDCL
          // XATS2JS_sint_lte$sint_2231
            // FJARGdarg($list(I1BNDcons(I1TNM(48);I0Pvar(i1(4984));$list(@(i1(4984),I1Vtnm(I1TNM(48))))),I1BNDcons(I1TNM(49);I0Pvar(i2(4985));$list(@(i2(4985),I1Vtnm(I1TNM(49)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lte$sint);G1Nlist($list())) // I1CMP:return
          let jsxtnm50 = XATSDAPP(XATS2JS_sint_lte$sint(jsxtnm46, jsxtnm47))
          jsxtnm51 = jsxtnm50
        } // endlet
        // I1CMP:return:jsxtnm51
        return jsxtnm51
      } // endtimp(sint_lte$sint(917))
      let jsxtnm53 = XATSDAPP(jsxtnm52(jsxtnm44, XATSINT1(1)))
      let jsxtnm65 // ift
      if (jsxtnm53) // ift
      {
        let jsxtnm54 = XATSTUP1(XATSTRCD(0), [jsxtnm45, jsxtnm44])
        jsxtnm65 = jsxtnm54
      } else {
        let jsxtnm55 = XATSDAPP(collatz_step_700(jsxtnm44))
        // LCSRCsome1(collatz.dats)@(1284(line=67,offs=37)--1285(line=67,offs=38))
        // I0Etapq(I0Ecst(sint_add$sint(921)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
        // T1IMPallx(sint_add$sint(921);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
        // T1IMPallx(sint_add$sint(921)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(921);$list()))))
        let jsxtnm62 = function (arg1, arg2) { // timp: sint_add$sint(921)
          let jsxtnm56 = arg1
          let jsxtnm57 = arg2
          // I1CMP:start
          let jsxtnm61 // let
          { // let
            // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
            // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
            // I1FUNDCL
            // XATS2JS_sint_add$sint_2778
              // FJARGdarg($list(I1BNDcons(I1TNM(58);I0Pvar(i1(4999));$list(@(i1(4999),I1Vtnm(I1TNM(58))))),I1BNDcons(I1TNM(59);I0Pvar(i2(5000));$list(@(i2(5000),I1Vtnm(I1TNM(59)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
            let jsxtnm60 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm56, jsxtnm57))
            jsxtnm61 = jsxtnm60
          } // endlet
          // I1CMP:return:jsxtnm61
          return jsxtnm61
        } // endtimp(sint_add$sint(921))
        let jsxtnm63 = XATSDAPP(jsxtnm62(jsxtnm45, XATSINT1(1)))
        let jsxtnm64 = XATSDAPP(loop_1174(jsxtnm55, jsxtnm63))
        jsxtnm65 = jsxtnm64
      } // end(if)
      // I1CMP:return:jsxtnm65
      return jsxtnm65
    } // endfun(loop_1174)
    let jsxtnm66 = XATSDAPP(loop_1174(jsxtnm43, XATSINT1(0)))
    jsxtnm67 = jsxtnm66
  } // endlet
  // I1CMP:return:jsxtnm67
  return jsxtnm67
} // endfun(collatz_count_1104)
// I1Dfundclist(LCSRCsome1(collatz.dats)@(1469(line=77,offs=1)--1725(line=94,offs=2)))
// I1FUNDCL
function collatz_trace_1472(arg1)
{ // fun
  let jsxtnm68 = arg1
  // I1CMP:start
  let jsxtnm158 // let
  { // let
    // I1Dfundclist(LCSRCsome1(collatz.dats)@(1539(line=83,offs=1)--1723(line=93,offs=2)))
    // I1FUNDCL
    function loop_1542(arg1, arg2)
    { // fun
      let jsxtnm69 = arg1
      let jsxtnm70 = arg2
      // I1CMP:start
      let jsxtnm156 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(collatz.dats)@(1587(line=87,offs=3)--1632(line=87,offs=48)))
        // I1VALDCL
        let jsxtnm135
        // LCSRCsome1(collatz.dats)@(1596(line=87,offs=12)--1604(line=87,offs=20))
        // I0Etapq(I0Ecst(gs_println_a4(809)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13918(line=908,offs=1)--13931(line=908,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
        // T1IMPallx(gs_println_a4(809);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26470(line=1604,offs=1)--26614(line=1613,offs=59)))
        // T1IMPallx(gs_println_a4(809)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6998],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6999],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[7000],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7001],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a4(809);$list(@(x0[2531],T2Pvar(x0[6998])),@(x1[2532],T2Pvar(x1[6999])),@(x2[2533],T2Pvar(x2[7000])),@(x3[2534],T2Pvar(x3[7001])))))))
        let jsxtnm133 = function (arg1, arg2, arg3, arg4) { // timp: gs_println_a4(809)
          let jsxtnm71 = arg1
          let jsxtnm72 = arg2
          let jsxtnm73 = arg3
          let jsxtnm74 = arg4
          // I1CMP:start
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26558(line=1613,offs=3)--26569(line=1613,offs=14))
          // I0Etapq(I0Ecst(gs_print_a4(796)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11925(line=761,offs=1)--11936(line=761,offs=12))));$list(T2JAG($list(T2Pvar(x0[6998]))),T2JAG($list(T2Pvar(x1[6999]))),T2JAG($list(T2Pvar(x2[7000]))),T2JAG($list(T2Pvar(x3[7001])))))
          // T1IMPallx(gs_print_a4(796);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21602(line=1332,offs=1)--21862(line=1348,offs=4)))
          // T1IMPallx(gs_print_a4(796)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6920],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6921],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[6922],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6923],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a4(796);$list(@(x0[2453],T2Pvar(x0[6920])),@(x1[2454],T2Pvar(x1[6921])),@(x2[2455],T2Pvar(x2[6922])),@(x3[2456],T2Pvar(x3[6923])))))))
          let jsxtnm124 = function (arg1, arg2, arg3, arg4) { // timp: gs_print_a4(796)
            let jsxtnm75 = arg1
            let jsxtnm76 = arg2
            let jsxtnm77 = arg3
            let jsxtnm78 = arg4
            // I1CMP:start
            let jsxtnm123 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21688(line=1341,offs=1)--21711(line=1342,offs=15)))
              // I1VALDCL
              let jsxtnm82
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21697(line=1342,offs=1)--21709(line=1342,offs=13))
              // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
              // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
              let jsxtnm80 = function () { // timp: gs_print$beg(789)
                // I1CMP:start
                let jsxtnm79 = XATSTUP0([])
                // I1CMP:return:jsxtnm79
                return jsxtnm79
              } // endtimp(gs_print$beg(789))
              let jsxtnm81 = XATSDAPP(jsxtnm80())
              jsxtnm82 = jsxtnm81
              XATS000_patck(true)
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21724(line=1344,offs=3)--21731(line=1344,offs=10))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6920])))))
              // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
              let jsxtnm88
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
              // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
              // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
              let jsxtnm87 = function (arg1) { // timp: strn_print(1025)
                let jsxtnm83 = arg1
                // I1CMP:start
                let jsxtnm86 // let
                { // let
                  // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                  // I1FUNDCL
                  // XATS2JS_strn_print_2202
                    // FJARGdarg($list(I1BNDcons(I1TNM(84);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(84)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                  let jsxtnm85 = XATSDAPP(XATS2JS_strn_print(jsxtnm83))
                  jsxtnm86 = jsxtnm85
                } // endlet
                // I1CMP:return:jsxtnm86
                return jsxtnm86
              } // endtimp(strn_print(1025))
              jsxtnm88 = jsxtnm87
              let jsxtnm89 = XATSDAPP(jsxtnm88(jsxtnm75))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21741(line=1344,offs=20)--21753(line=1344,offs=32))
              // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
              // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
              let jsxtnm91 = function () { // timp: gs_print$sep(790)
                // I1CMP:start
                let jsxtnm90 = XATSTUP0([])
                // I1CMP:return:jsxtnm90
                return jsxtnm90
              } // endtimp(gs_print$sep(790))
              let jsxtnm92 = XATSDAPP(jsxtnm91())
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21758(line=1345,offs=3)--21765(line=1345,offs=10))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6921])))))
              // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
              let jsxtnm98
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
              // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
              // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
              let jsxtnm97 = function (arg1) { // timp: sint_print(909)
                let jsxtnm93 = arg1
                // I1CMP:start
                let jsxtnm96 // let
                { // let
                  // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
                  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
                  // I1FUNDCL
                  // XATS2JS_sint_print_3707
                    // FJARGdarg($list(I1BNDcons(I1TNM(94);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(94)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
                  let jsxtnm95 = XATSDAPP(XATS2JS_sint_print(jsxtnm93))
                  jsxtnm96 = jsxtnm95
                } // endlet
                // I1CMP:return:jsxtnm96
                return jsxtnm96
              } // endtimp(sint_print(909))
              jsxtnm98 = jsxtnm97
              let jsxtnm99 = XATSDAPP(jsxtnm98(jsxtnm76))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21775(line=1345,offs=20)--21787(line=1345,offs=32))
              // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
              // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
              let jsxtnm101 = function () { // timp: gs_print$sep(790)
                // I1CMP:start
                let jsxtnm100 = XATSTUP0([])
                // I1CMP:return:jsxtnm100
                return jsxtnm100
              } // endtimp(gs_print$sep(790))
              let jsxtnm102 = XATSDAPP(jsxtnm101())
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21792(line=1346,offs=3)--21799(line=1346,offs=10))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6922])))))
              // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
              let jsxtnm108
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
              // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
              // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
              let jsxtnm107 = function (arg1) { // timp: strn_print(1025)
                let jsxtnm103 = arg1
                // I1CMP:start
                let jsxtnm106 // let
                { // let
                  // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                  // I1FUNDCL
                  // XATS2JS_strn_print_2202
                    // FJARGdarg($list(I1BNDcons(I1TNM(104);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(104)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                  let jsxtnm105 = XATSDAPP(XATS2JS_strn_print(jsxtnm103))
                  jsxtnm106 = jsxtnm105
                } // endlet
                // I1CMP:return:jsxtnm106
                return jsxtnm106
              } // endtimp(strn_print(1025))
              jsxtnm108 = jsxtnm107
              let jsxtnm109 = XATSDAPP(jsxtnm108(jsxtnm77))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21809(line=1346,offs=20)--21821(line=1346,offs=32))
              // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
              // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
              let jsxtnm111 = function () { // timp: gs_print$sep(790)
                // I1CMP:start
                let jsxtnm110 = XATSTUP0([])
                // I1CMP:return:jsxtnm110
                return jsxtnm110
              } // endtimp(gs_print$sep(790))
              let jsxtnm112 = XATSDAPP(jsxtnm111())
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21826(line=1347,offs=3)--21833(line=1347,offs=10))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6923])))))
              // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
              let jsxtnm118
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
              // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
              // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
              let jsxtnm117 = function (arg1) { // timp: sint_print(909)
                let jsxtnm113 = arg1
                // I1CMP:start
                let jsxtnm116 // let
                { // let
                  // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
                  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
                  // I1FUNDCL
                  // XATS2JS_sint_print_3707
                    // FJARGdarg($list(I1BNDcons(I1TNM(114);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(114)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
                  let jsxtnm115 = XATSDAPP(XATS2JS_sint_print(jsxtnm113))
                  jsxtnm116 = jsxtnm115
                } // endlet
                // I1CMP:return:jsxtnm116
                return jsxtnm116
              } // endtimp(sint_print(909))
              jsxtnm118 = jsxtnm117
              let jsxtnm119 = XATSDAPP(jsxtnm118(jsxtnm78))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21843(line=1347,offs=20)--21855(line=1347,offs=32))
              // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
              // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
              let jsxtnm121 = function () { // timp: gs_print$end(791)
                // I1CMP:start
                let jsxtnm120 = XATSTUP0([])
                // I1CMP:return:jsxtnm120
                return jsxtnm120
              } // endtimp(gs_print$end(791))
              let jsxtnm122 = XATSDAPP(jsxtnm121())
              jsxtnm123 = jsxtnm122
            } // endlet
            // I1CMP:return:jsxtnm123
            return jsxtnm123
          } // endtimp(gs_print_a4(796))
          let jsxtnm125 = XATSDAPP(jsxtnm124(jsxtnm71, jsxtnm72, jsxtnm73, jsxtnm74))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26600(line=1613,offs=45)--26607(line=1613,offs=52))
          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
          let jsxtnm131
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
          // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
          // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
          let jsxtnm130 = function (arg1) { // timp: strn_print(1025)
            let jsxtnm126 = arg1
            // I1CMP:start
            let jsxtnm129 // let
            { // let
              // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
              // I1FUNDCL
              // XATS2JS_strn_print_2202
                // FJARGdarg($list(I1BNDcons(I1TNM(127);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(127)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
              let jsxtnm128 = XATSDAPP(XATS2JS_strn_print(jsxtnm126))
              jsxtnm129 = jsxtnm128
            } // endlet
            // I1CMP:return:jsxtnm129
            return jsxtnm129
          } // endtimp(strn_print(1025))
          jsxtnm131 = jsxtnm130
          let jsxtnm132 = XATSDAPP(jsxtnm131(XATSSTRN("\n")))
          // I1CMP:return:jsxtnm132
          return jsxtnm132
        } // endtimp(gs_println_a4(809))
        let jsxtnm134 = XATSDAPP(jsxtnm133(XATSSTRN("Step "), jsxtnm70, XATSSTRN(": "), jsxtnm69))
        jsxtnm135 = jsxtnm134
        XATS000_patck(true)
        // LCSRCsome1(collatz.dats)@(1647(line=89,offs=12)--1649(line=89,offs=14))
        // I0Etapq(I0Ecst(sint_lte$sint(917)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2344(line=100,offs=1)--2357(line=100,offs=14))));$list(T2JAG($list())))
        // T1IMPallx(sint_lte$sint(917);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2130(line=100,offs=1)--2294(line=112,offs=2)))
        // T1IMPallx(sint_lte$sint(917)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lte$sint(917);$list()))))
        let jsxtnm142 = function (arg1, arg2) { // timp: sint_lte$sint(917)
          let jsxtnm136 = arg1
          let jsxtnm137 = arg2
          // I1CMP:start
          let jsxtnm141 // let
          { // let
            // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2220(line=108,offs=1)--2292(line=111,offs=39)))
            // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2228(line=109,offs=1)--2292(line=111,offs=39))
            // I1FUNDCL
            // XATS2JS_sint_lte$sint_2231
              // FJARGdarg($list(I1BNDcons(I1TNM(138);I0Pvar(i1(4984));$list(@(i1(4984),I1Vtnm(I1TNM(138))))),I1BNDcons(I1TNM(139);I0Pvar(i2(4985));$list(@(i2(4985),I1Vtnm(I1TNM(139)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lte$sint);G1Nlist($list())) // I1CMP:return
            let jsxtnm140 = XATSDAPP(XATS2JS_sint_lte$sint(jsxtnm136, jsxtnm137))
            jsxtnm141 = jsxtnm140
          } // endlet
          // I1CMP:return:jsxtnm141
          return jsxtnm141
        } // endtimp(sint_lte$sint(917))
        let jsxtnm143 = XATSDAPP(jsxtnm142(jsxtnm69, XATSINT1(1)))
        let jsxtnm155 // ift
        if (jsxtnm143) // ift
        {
          let jsxtnm144 = XATSTUP1(XATSTRCD(0), [jsxtnm70, jsxtnm69])
          jsxtnm155 = jsxtnm144
        } else {
          let jsxtnm145 = XATSDAPP(collatz_step_700(jsxtnm69))
          // LCSRCsome1(collatz.dats)@(1713(line=91,offs=39)--1714(line=91,offs=40))
          // I0Etapq(I0Ecst(sint_add$sint(921)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
          // T1IMPallx(sint_add$sint(921);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
          // T1IMPallx(sint_add$sint(921)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(921);$list()))))
          let jsxtnm152 = function (arg1, arg2) { // timp: sint_add$sint(921)
            let jsxtnm146 = arg1
            let jsxtnm147 = arg2
            // I1CMP:start
            let jsxtnm151 // let
            { // let
              // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
              // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
              // I1FUNDCL
              // XATS2JS_sint_add$sint_2778
                // FJARGdarg($list(I1BNDcons(I1TNM(148);I0Pvar(i1(4999));$list(@(i1(4999),I1Vtnm(I1TNM(148))))),I1BNDcons(I1TNM(149);I0Pvar(i2(5000));$list(@(i2(5000),I1Vtnm(I1TNM(149)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
              let jsxtnm150 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm146, jsxtnm147))
              jsxtnm151 = jsxtnm150
            } // endlet
            // I1CMP:return:jsxtnm151
            return jsxtnm151
          } // endtimp(sint_add$sint(921))
          let jsxtnm153 = XATSDAPP(jsxtnm152(jsxtnm70, XATSINT1(1)))
          let jsxtnm154 = XATSDAPP(loop_1542(jsxtnm145, jsxtnm153))
          jsxtnm155 = jsxtnm154
        } // end(if)
        jsxtnm156 = jsxtnm155
      } // endlet
      // I1CMP:return:jsxtnm156
      return jsxtnm156
    } // endfun(loop_1542)
    let jsxtnm157 = XATSDAPP(loop_1542(jsxtnm68, XATSINT1(0)))
    jsxtnm158 = jsxtnm157
  } // endlet
  // I1CMP:return:jsxtnm158
  return jsxtnm158
} // endfun(collatz_trace_1472)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(1792(line=101,offs=1)--1848(line=101,offs=57)))
// I1VALDCL
let jsxtnm187
// LCSRCsome1(collatz.dats)@(1801(line=101,offs=10)--1809(line=101,offs=18))
// I0Etapq(I0Ecst(gs_println_a1(806)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a1(806);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
// T1IMPallx(gs_println_a1(806)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6992],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(806);$list(@(x0[2525],T2Pvar(x0[6992])))))))
let jsxtnm185 = function (arg1) { // timp: gs_println_a1(806)
  let jsxtnm159 = arg1
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
  // I0Etapq(I0Ecst(gs_print_a1(793)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6992])))))
  // T1IMPallx(gs_print_a1(793);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
  // T1IMPallx(gs_print_a1(793)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(793);$list(@(x0[2447],T2Pvar(x0[6914])))))))
  let jsxtnm176 = function (arg1) { // timp: gs_print_a1(793)
    let jsxtnm160 = arg1
    // I1CMP:start
    let jsxtnm175 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
      // I1VALDCL
      let jsxtnm164
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm162 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm161 = XATSTUP0([])
        // I1CMP:return:jsxtnm161
        return jsxtnm161
      } // endtimp(gs_print$beg(789))
      let jsxtnm163 = XATSDAPP(jsxtnm162())
      jsxtnm164 = jsxtnm163
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6914])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm170
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm169 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm165 = arg1
        // I1CMP:start
        let jsxtnm168 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(166);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(166)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm167 = XATSDAPP(XATS2JS_strn_print(jsxtnm165))
          jsxtnm168 = jsxtnm167
        } // endlet
        // I1CMP:return:jsxtnm168
        return jsxtnm168
      } // endtimp(strn_print(1025))
      jsxtnm170 = jsxtnm169
      let jsxtnm171 = XATSDAPP(jsxtnm170(jsxtnm160))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm173 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm172 = XATSTUP0([])
        // I1CMP:return:jsxtnm172
        return jsxtnm172
      } // endtimp(gs_print$end(791))
      let jsxtnm174 = XATSDAPP(jsxtnm173())
      jsxtnm175 = jsxtnm174
    } // endlet
    // I1CMP:return:jsxtnm175
    return jsxtnm175
  } // endtimp(gs_print_a1(793))
  let jsxtnm177 = XATSDAPP(jsxtnm176(jsxtnm159))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm183
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm182 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm178 = arg1
    // I1CMP:start
    let jsxtnm181 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(179);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(179)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm180 = XATSDAPP(XATS2JS_strn_print(jsxtnm178))
      jsxtnm181 = jsxtnm180
    } // endlet
    // I1CMP:return:jsxtnm181
    return jsxtnm181
  } // endtimp(strn_print(1025))
  jsxtnm183 = jsxtnm182
  let jsxtnm184 = XATSDAPP(jsxtnm183(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm184
  return jsxtnm184
} // endtimp(gs_println_a1(806))
let jsxtnm186 = XATSDAPP(jsxtnm185(XATSSTRN("=== Collatz Step Function Tests ===")))
jsxtnm187 = jsxtnm186
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(1849(line=102,offs=1)--1905(line=102,offs=57)))
// I1VALDCL
let jsxtnm229
// LCSRCsome1(collatz.dats)@(1858(line=102,offs=10)--1866(line=102,offs=18))
// I0Etapq(I0Ecst(gs_println_a2(807)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13791(line=896,offs=1)--13804(line=896,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(gs_println_a2(807);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26238(line=1586,offs=1)--26339(line=1592,offs=45)))
// T1IMPallx(gs_println_a2(807)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6993],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6994],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a2(807);$list(@(x0[2526],T2Pvar(x0[6993])),@(x1[2527],T2Pvar(x1[6994])))))))
let jsxtnm226 = function (arg1, arg2) { // timp: gs_println_a2(807)
  let jsxtnm188 = arg1
  let jsxtnm189 = arg2
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26297(line=1592,offs=3)--26308(line=1592,offs=14))
  // I0Etapq(I0Ecst(gs_print_a2(794)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11802(line=749,offs=1)--11813(line=749,offs=12))));$list(T2JAG($list(T2Pvar(x0[6993]))),T2JAG($list(T2Pvar(x1[6994])))))
  // T1IMPallx(gs_print_a2(794);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21155(line=1303,offs=1)--21318(line=1314,offs=4)))
  // T1IMPallx(gs_print_a2(794)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6915],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6916],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a2(794);$list(@(x0[2448],T2Pvar(x0[6915])),@(x1[2449],T2Pvar(x1[6916])))))))
  let jsxtnm217 = function (arg1, arg2) { // timp: gs_print_a2(794)
    let jsxtnm190 = arg1
    let jsxtnm191 = arg2
    // I1CMP:start
    let jsxtnm216 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21212(line=1309,offs=1)--21235(line=1310,offs=15)))
      // I1VALDCL
      let jsxtnm195
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21221(line=1310,offs=1)--21233(line=1310,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm193 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm192 = XATSTUP0([])
        // I1CMP:return:jsxtnm192
        return jsxtnm192
      } // endtimp(gs_print$beg(789))
      let jsxtnm194 = XATSDAPP(jsxtnm193())
      jsxtnm195 = jsxtnm194
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21248(line=1312,offs=3)--21255(line=1312,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6915])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm201
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm200 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm196 = arg1
        // I1CMP:start
        let jsxtnm199 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(197);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(197)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm198 = XATSDAPP(XATS2JS_strn_print(jsxtnm196))
          jsxtnm199 = jsxtnm198
        } // endlet
        // I1CMP:return:jsxtnm199
        return jsxtnm199
      } // endtimp(strn_print(1025))
      jsxtnm201 = jsxtnm200
      let jsxtnm202 = XATSDAPP(jsxtnm201(jsxtnm190))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21265(line=1312,offs=20)--21277(line=1312,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm204 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm203 = XATSTUP0([])
        // I1CMP:return:jsxtnm203
        return jsxtnm203
      } // endtimp(gs_print$sep(790))
      let jsxtnm205 = XATSDAPP(jsxtnm204())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21282(line=1313,offs=3)--21289(line=1313,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6916])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm211
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm210 = function (arg1) { // timp: sint_print(909)
        let jsxtnm206 = arg1
        // I1CMP:start
        let jsxtnm209 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(207);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(207)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm208 = XATSDAPP(XATS2JS_sint_print(jsxtnm206))
          jsxtnm209 = jsxtnm208
        } // endlet
        // I1CMP:return:jsxtnm209
        return jsxtnm209
      } // endtimp(sint_print(909))
      jsxtnm211 = jsxtnm210
      let jsxtnm212 = XATSDAPP(jsxtnm211(jsxtnm191))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21299(line=1313,offs=20)--21311(line=1313,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm214 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm213 = XATSTUP0([])
        // I1CMP:return:jsxtnm213
        return jsxtnm213
      } // endtimp(gs_print$end(791))
      let jsxtnm215 = XATSDAPP(jsxtnm214())
      jsxtnm216 = jsxtnm215
    } // endlet
    // I1CMP:return:jsxtnm216
    return jsxtnm216
  } // endtimp(gs_print_a2(794))
  let jsxtnm218 = XATSDAPP(jsxtnm217(jsxtnm188, jsxtnm189))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26325(line=1592,offs=31)--26332(line=1592,offs=38))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm224
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm223 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm219 = arg1
    // I1CMP:start
    let jsxtnm222 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(220);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(220)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm221 = XATSDAPP(XATS2JS_strn_print(jsxtnm219))
      jsxtnm222 = jsxtnm221
    } // endlet
    // I1CMP:return:jsxtnm222
    return jsxtnm222
  } // endtimp(strn_print(1025))
  jsxtnm224 = jsxtnm223
  let jsxtnm225 = XATSDAPP(jsxtnm224(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm225
  return jsxtnm225
} // endtimp(gs_println_a2(807))
let jsxtnm227 = XATSDAPP(collatz_step_700(XATSINT1(6)))
let jsxtnm228 = XATSDAPP(jsxtnm226(XATSSTRN("collatz_step(6) = "), jsxtnm227))
jsxtnm229 = jsxtnm228
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(1926(line=103,offs=1)--1982(line=103,offs=57)))
// I1VALDCL
let jsxtnm271
// LCSRCsome1(collatz.dats)@(1935(line=103,offs=10)--1943(line=103,offs=18))
// I0Etapq(I0Ecst(gs_println_a2(807)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13791(line=896,offs=1)--13804(line=896,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(gs_println_a2(807);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26238(line=1586,offs=1)--26339(line=1592,offs=45)))
// T1IMPallx(gs_println_a2(807)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6993],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6994],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a2(807);$list(@(x0[2526],T2Pvar(x0[6993])),@(x1[2527],T2Pvar(x1[6994])))))))
let jsxtnm268 = function (arg1, arg2) { // timp: gs_println_a2(807)
  let jsxtnm230 = arg1
  let jsxtnm231 = arg2
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26297(line=1592,offs=3)--26308(line=1592,offs=14))
  // I0Etapq(I0Ecst(gs_print_a2(794)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11802(line=749,offs=1)--11813(line=749,offs=12))));$list(T2JAG($list(T2Pvar(x0[6993]))),T2JAG($list(T2Pvar(x1[6994])))))
  // T1IMPallx(gs_print_a2(794);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21155(line=1303,offs=1)--21318(line=1314,offs=4)))
  // T1IMPallx(gs_print_a2(794)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6915],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6916],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a2(794);$list(@(x0[2448],T2Pvar(x0[6915])),@(x1[2449],T2Pvar(x1[6916])))))))
  let jsxtnm259 = function (arg1, arg2) { // timp: gs_print_a2(794)
    let jsxtnm232 = arg1
    let jsxtnm233 = arg2
    // I1CMP:start
    let jsxtnm258 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21212(line=1309,offs=1)--21235(line=1310,offs=15)))
      // I1VALDCL
      let jsxtnm237
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21221(line=1310,offs=1)--21233(line=1310,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm235 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm234 = XATSTUP0([])
        // I1CMP:return:jsxtnm234
        return jsxtnm234
      } // endtimp(gs_print$beg(789))
      let jsxtnm236 = XATSDAPP(jsxtnm235())
      jsxtnm237 = jsxtnm236
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21248(line=1312,offs=3)--21255(line=1312,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6915])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm243
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm242 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm238 = arg1
        // I1CMP:start
        let jsxtnm241 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(239);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(239)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm240 = XATSDAPP(XATS2JS_strn_print(jsxtnm238))
          jsxtnm241 = jsxtnm240
        } // endlet
        // I1CMP:return:jsxtnm241
        return jsxtnm241
      } // endtimp(strn_print(1025))
      jsxtnm243 = jsxtnm242
      let jsxtnm244 = XATSDAPP(jsxtnm243(jsxtnm232))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21265(line=1312,offs=20)--21277(line=1312,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm246 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm245 = XATSTUP0([])
        // I1CMP:return:jsxtnm245
        return jsxtnm245
      } // endtimp(gs_print$sep(790))
      let jsxtnm247 = XATSDAPP(jsxtnm246())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21282(line=1313,offs=3)--21289(line=1313,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6916])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm253
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm252 = function (arg1) { // timp: sint_print(909)
        let jsxtnm248 = arg1
        // I1CMP:start
        let jsxtnm251 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(249);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(249)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm250 = XATSDAPP(XATS2JS_sint_print(jsxtnm248))
          jsxtnm251 = jsxtnm250
        } // endlet
        // I1CMP:return:jsxtnm251
        return jsxtnm251
      } // endtimp(sint_print(909))
      jsxtnm253 = jsxtnm252
      let jsxtnm254 = XATSDAPP(jsxtnm253(jsxtnm233))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21299(line=1313,offs=20)--21311(line=1313,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm256 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm255 = XATSTUP0([])
        // I1CMP:return:jsxtnm255
        return jsxtnm255
      } // endtimp(gs_print$end(791))
      let jsxtnm257 = XATSDAPP(jsxtnm256())
      jsxtnm258 = jsxtnm257
    } // endlet
    // I1CMP:return:jsxtnm258
    return jsxtnm258
  } // endtimp(gs_print_a2(794))
  let jsxtnm260 = XATSDAPP(jsxtnm259(jsxtnm230, jsxtnm231))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26325(line=1592,offs=31)--26332(line=1592,offs=38))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm266
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm265 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm261 = arg1
    // I1CMP:start
    let jsxtnm264 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(262);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(262)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm263 = XATSDAPP(XATS2JS_strn_print(jsxtnm261))
      jsxtnm264 = jsxtnm263
    } // endlet
    // I1CMP:return:jsxtnm264
    return jsxtnm264
  } // endtimp(strn_print(1025))
  jsxtnm266 = jsxtnm265
  let jsxtnm267 = XATSDAPP(jsxtnm266(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm267
  return jsxtnm267
} // endtimp(gs_println_a2(807))
let jsxtnm269 = XATSDAPP(collatz_step_700(XATSINT1(7)))
let jsxtnm270 = XATSDAPP(jsxtnm268(XATSSTRN("collatz_step(7) = "), jsxtnm269))
jsxtnm271 = jsxtnm270
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2003(line=104,offs=1)--2059(line=104,offs=57)))
// I1VALDCL
let jsxtnm313
// LCSRCsome1(collatz.dats)@(2012(line=104,offs=10)--2020(line=104,offs=18))
// I0Etapq(I0Ecst(gs_println_a2(807)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13791(line=896,offs=1)--13804(line=896,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(gs_println_a2(807);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26238(line=1586,offs=1)--26339(line=1592,offs=45)))
// T1IMPallx(gs_println_a2(807)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6993],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6994],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a2(807);$list(@(x0[2526],T2Pvar(x0[6993])),@(x1[2527],T2Pvar(x1[6994])))))))
let jsxtnm310 = function (arg1, arg2) { // timp: gs_println_a2(807)
  let jsxtnm272 = arg1
  let jsxtnm273 = arg2
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26297(line=1592,offs=3)--26308(line=1592,offs=14))
  // I0Etapq(I0Ecst(gs_print_a2(794)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11802(line=749,offs=1)--11813(line=749,offs=12))));$list(T2JAG($list(T2Pvar(x0[6993]))),T2JAG($list(T2Pvar(x1[6994])))))
  // T1IMPallx(gs_print_a2(794);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21155(line=1303,offs=1)--21318(line=1314,offs=4)))
  // T1IMPallx(gs_print_a2(794)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6915],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6916],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a2(794);$list(@(x0[2448],T2Pvar(x0[6915])),@(x1[2449],T2Pvar(x1[6916])))))))
  let jsxtnm301 = function (arg1, arg2) { // timp: gs_print_a2(794)
    let jsxtnm274 = arg1
    let jsxtnm275 = arg2
    // I1CMP:start
    let jsxtnm300 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21212(line=1309,offs=1)--21235(line=1310,offs=15)))
      // I1VALDCL
      let jsxtnm279
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21221(line=1310,offs=1)--21233(line=1310,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm277 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm276 = XATSTUP0([])
        // I1CMP:return:jsxtnm276
        return jsxtnm276
      } // endtimp(gs_print$beg(789))
      let jsxtnm278 = XATSDAPP(jsxtnm277())
      jsxtnm279 = jsxtnm278
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21248(line=1312,offs=3)--21255(line=1312,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6915])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm285
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm284 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm280 = arg1
        // I1CMP:start
        let jsxtnm283 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(281);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(281)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm282 = XATSDAPP(XATS2JS_strn_print(jsxtnm280))
          jsxtnm283 = jsxtnm282
        } // endlet
        // I1CMP:return:jsxtnm283
        return jsxtnm283
      } // endtimp(strn_print(1025))
      jsxtnm285 = jsxtnm284
      let jsxtnm286 = XATSDAPP(jsxtnm285(jsxtnm274))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21265(line=1312,offs=20)--21277(line=1312,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm288 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm287 = XATSTUP0([])
        // I1CMP:return:jsxtnm287
        return jsxtnm287
      } // endtimp(gs_print$sep(790))
      let jsxtnm289 = XATSDAPP(jsxtnm288())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21282(line=1313,offs=3)--21289(line=1313,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6916])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm295
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm294 = function (arg1) { // timp: sint_print(909)
        let jsxtnm290 = arg1
        // I1CMP:start
        let jsxtnm293 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(291);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(291)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm292 = XATSDAPP(XATS2JS_sint_print(jsxtnm290))
          jsxtnm293 = jsxtnm292
        } // endlet
        // I1CMP:return:jsxtnm293
        return jsxtnm293
      } // endtimp(sint_print(909))
      jsxtnm295 = jsxtnm294
      let jsxtnm296 = XATSDAPP(jsxtnm295(jsxtnm275))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21299(line=1313,offs=20)--21311(line=1313,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm298 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm297 = XATSTUP0([])
        // I1CMP:return:jsxtnm297
        return jsxtnm297
      } // endtimp(gs_print$end(791))
      let jsxtnm299 = XATSDAPP(jsxtnm298())
      jsxtnm300 = jsxtnm299
    } // endlet
    // I1CMP:return:jsxtnm300
    return jsxtnm300
  } // endtimp(gs_print_a2(794))
  let jsxtnm302 = XATSDAPP(jsxtnm301(jsxtnm272, jsxtnm273))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26325(line=1592,offs=31)--26332(line=1592,offs=38))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm308
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm307 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm303 = arg1
    // I1CMP:start
    let jsxtnm306 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(304);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(304)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm305 = XATSDAPP(XATS2JS_strn_print(jsxtnm303))
      jsxtnm306 = jsxtnm305
    } // endlet
    // I1CMP:return:jsxtnm306
    return jsxtnm306
  } // endtimp(strn_print(1025))
  jsxtnm308 = jsxtnm307
  let jsxtnm309 = XATSDAPP(jsxtnm308(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm309
  return jsxtnm309
} // endtimp(gs_println_a2(807))
let jsxtnm311 = XATSDAPP(collatz_step_700(XATSINT1(1)))
let jsxtnm312 = XATSDAPP(jsxtnm310(XATSSTRN("collatz_step(1) = "), jsxtnm311))
jsxtnm313 = jsxtnm312
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2082(line=106,offs=1)--2103(line=106,offs=22)))
// I1VALDCL
let jsxtnm342
// LCSRCsome1(collatz.dats)@(2091(line=106,offs=10)--2099(line=106,offs=18))
// I0Etapq(I0Ecst(gs_println_a1(806)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a1(806);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
// T1IMPallx(gs_println_a1(806)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6992],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(806);$list(@(x0[2525],T2Pvar(x0[6992])))))))
let jsxtnm340 = function (arg1) { // timp: gs_println_a1(806)
  let jsxtnm314 = arg1
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
  // I0Etapq(I0Ecst(gs_print_a1(793)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6992])))))
  // T1IMPallx(gs_print_a1(793);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
  // T1IMPallx(gs_print_a1(793)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(793);$list(@(x0[2447],T2Pvar(x0[6914])))))))
  let jsxtnm331 = function (arg1) { // timp: gs_print_a1(793)
    let jsxtnm315 = arg1
    // I1CMP:start
    let jsxtnm330 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
      // I1VALDCL
      let jsxtnm319
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm317 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm316 = XATSTUP0([])
        // I1CMP:return:jsxtnm316
        return jsxtnm316
      } // endtimp(gs_print$beg(789))
      let jsxtnm318 = XATSDAPP(jsxtnm317())
      jsxtnm319 = jsxtnm318
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6914])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm325
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm324 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm320 = arg1
        // I1CMP:start
        let jsxtnm323 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(321);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(321)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm322 = XATSDAPP(XATS2JS_strn_print(jsxtnm320))
          jsxtnm323 = jsxtnm322
        } // endlet
        // I1CMP:return:jsxtnm323
        return jsxtnm323
      } // endtimp(strn_print(1025))
      jsxtnm325 = jsxtnm324
      let jsxtnm326 = XATSDAPP(jsxtnm325(jsxtnm315))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm328 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm327 = XATSTUP0([])
        // I1CMP:return:jsxtnm327
        return jsxtnm327
      } // endtimp(gs_print$end(791))
      let jsxtnm329 = XATSDAPP(jsxtnm328())
      jsxtnm330 = jsxtnm329
    } // endlet
    // I1CMP:return:jsxtnm330
    return jsxtnm330
  } // endtimp(gs_print_a1(793))
  let jsxtnm332 = XATSDAPP(jsxtnm331(jsxtnm314))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm338
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm337 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm333 = arg1
    // I1CMP:start
    let jsxtnm336 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(334);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(334)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm335 = XATSDAPP(XATS2JS_strn_print(jsxtnm333))
      jsxtnm336 = jsxtnm335
    } // endlet
    // I1CMP:return:jsxtnm336
    return jsxtnm336
  } // endtimp(strn_print(1025))
  jsxtnm338 = jsxtnm337
  let jsxtnm339 = XATSDAPP(jsxtnm338(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm339
  return jsxtnm339
} // endtimp(gs_println_a1(806))
let jsxtnm341 = XATSDAPP(jsxtnm340(XATSSTRN("")))
jsxtnm342 = jsxtnm341
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2104(line=107,offs=1)--2152(line=107,offs=49)))
// I1VALDCL
let jsxtnm371
// LCSRCsome1(collatz.dats)@(2113(line=107,offs=10)--2121(line=107,offs=18))
// I0Etapq(I0Ecst(gs_println_a1(806)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a1(806);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
// T1IMPallx(gs_println_a1(806)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6992],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(806);$list(@(x0[2525],T2Pvar(x0[6992])))))))
let jsxtnm369 = function (arg1) { // timp: gs_println_a1(806)
  let jsxtnm343 = arg1
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
  // I0Etapq(I0Ecst(gs_print_a1(793)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6992])))))
  // T1IMPallx(gs_print_a1(793);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
  // T1IMPallx(gs_print_a1(793)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(793);$list(@(x0[2447],T2Pvar(x0[6914])))))))
  let jsxtnm360 = function (arg1) { // timp: gs_print_a1(793)
    let jsxtnm344 = arg1
    // I1CMP:start
    let jsxtnm359 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
      // I1VALDCL
      let jsxtnm348
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm346 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm345 = XATSTUP0([])
        // I1CMP:return:jsxtnm345
        return jsxtnm345
      } // endtimp(gs_print$beg(789))
      let jsxtnm347 = XATSDAPP(jsxtnm346())
      jsxtnm348 = jsxtnm347
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6914])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm354
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm353 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm349 = arg1
        // I1CMP:start
        let jsxtnm352 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(350);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(350)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm351 = XATSDAPP(XATS2JS_strn_print(jsxtnm349))
          jsxtnm352 = jsxtnm351
        } // endlet
        // I1CMP:return:jsxtnm352
        return jsxtnm352
      } // endtimp(strn_print(1025))
      jsxtnm354 = jsxtnm353
      let jsxtnm355 = XATSDAPP(jsxtnm354(jsxtnm344))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm357 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm356 = XATSTUP0([])
        // I1CMP:return:jsxtnm356
        return jsxtnm356
      } // endtimp(gs_print$end(791))
      let jsxtnm358 = XATSDAPP(jsxtnm357())
      jsxtnm359 = jsxtnm358
    } // endlet
    // I1CMP:return:jsxtnm359
    return jsxtnm359
  } // endtimp(gs_print_a1(793))
  let jsxtnm361 = XATSDAPP(jsxtnm360(jsxtnm343))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm367
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm366 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm362 = arg1
    // I1CMP:start
    let jsxtnm365 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(363);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(363)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm364 = XATSDAPP(XATS2JS_strn_print(jsxtnm362))
      jsxtnm365 = jsxtnm364
    } // endlet
    // I1CMP:return:jsxtnm365
    return jsxtnm365
  } // endtimp(strn_print(1025))
  jsxtnm367 = jsxtnm366
  let jsxtnm368 = XATSDAPP(jsxtnm367(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm368
  return jsxtnm368
} // endtimp(gs_println_a1(806))
let jsxtnm370 = XATSDAPP(jsxtnm369(XATSSTRN("=== Collatz Count Tests ===")))
jsxtnm371 = jsxtnm370
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2156(line=109,offs=1)--2186(line=109,offs=31)))
// I1VALDCL
let jsxtnm373
let jsxtnm372 = XATSDAPP(collatz_count_1104(XATSINT1(6)))
jsxtnm373 = jsxtnm372
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2187(line=110,offs=1)--2261(line=110,offs=75)))
// I1VALDCL
let jsxtnm452
// LCSRCsome1(collatz.dats)@(2196(line=110,offs=10)--2204(line=110,offs=18))
// I0Etapq(I0Ecst(gs_println_a5(810)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(14001(line=916,offs=1)--14014(line=916,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a5(810);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26618(line=1615,offs=1)--26783(line=1625,offs=66)))
// T1IMPallx(gs_println_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7002],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7003],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[7004],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7005],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[7006],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a5(810);$list(@(x0[2535],T2Pvar(x0[7002])),@(x1[2536],T2Pvar(x1[7003])),@(x2[2537],T2Pvar(x2[7004])),@(x3[2538],T2Pvar(x3[7005])),@(x4[2539],T2Pvar(x4[7006])))))))
let jsxtnm448 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_println_a5(810)
  let jsxtnm374 = arg1
  let jsxtnm375 = arg2
  let jsxtnm376 = arg3
  let jsxtnm377 = arg4
  let jsxtnm378 = arg5
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26720(line=1625,offs=3)--26731(line=1625,offs=14))
  // I0Etapq(I0Ecst(gs_print_a5(797)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Pvar(x0[7002]))),T2JAG($list(T2Pvar(x1[7003]))),T2JAG($list(T2Pvar(x2[7004]))),T2JAG($list(T2Pvar(x3[7005]))),T2JAG($list(T2Pvar(x4[7006])))))
  // T1IMPallx(gs_print_a5(797);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
  // T1IMPallx(gs_print_a5(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6924],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6925],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[6926],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6927],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[6928],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(797);$list(@(x0[2457],T2Pvar(x0[6924])),@(x1[2458],T2Pvar(x1[6925])),@(x2[2459],T2Pvar(x2[6926])),@(x3[2460],T2Pvar(x3[6927])),@(x4[2461],T2Pvar(x4[6928])))))))
  let jsxtnm439 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(797)
    let jsxtnm379 = arg1
    let jsxtnm380 = arg2
    let jsxtnm381 = arg3
    let jsxtnm382 = arg4
    let jsxtnm383 = arg5
    // I1CMP:start
    let jsxtnm438 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
      // I1VALDCL
      let jsxtnm387
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm385 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm384 = XATSTUP0([])
        // I1CMP:return:jsxtnm384
        return jsxtnm384
      } // endtimp(gs_print$beg(789))
      let jsxtnm386 = XATSDAPP(jsxtnm385())
      jsxtnm387 = jsxtnm386
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6924])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm393
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm392 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm388 = arg1
        // I1CMP:start
        let jsxtnm391 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(389);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(389)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm390 = XATSDAPP(XATS2JS_strn_print(jsxtnm388))
          jsxtnm391 = jsxtnm390
        } // endlet
        // I1CMP:return:jsxtnm391
        return jsxtnm391
      } // endtimp(strn_print(1025))
      jsxtnm393 = jsxtnm392
      let jsxtnm394 = XATSDAPP(jsxtnm393(jsxtnm379))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm396 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm395 = XATSTUP0([])
        // I1CMP:return:jsxtnm395
        return jsxtnm395
      } // endtimp(gs_print$sep(790))
      let jsxtnm397 = XATSDAPP(jsxtnm396())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6925])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm403
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm402 = function (arg1) { // timp: sint_print(909)
        let jsxtnm398 = arg1
        // I1CMP:start
        let jsxtnm401 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(399);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(399)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm400 = XATSDAPP(XATS2JS_sint_print(jsxtnm398))
          jsxtnm401 = jsxtnm400
        } // endlet
        // I1CMP:return:jsxtnm401
        return jsxtnm401
      } // endtimp(sint_print(909))
      jsxtnm403 = jsxtnm402
      let jsxtnm404 = XATSDAPP(jsxtnm403(jsxtnm380))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm406 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm405 = XATSTUP0([])
        // I1CMP:return:jsxtnm405
        return jsxtnm405
      } // endtimp(gs_print$sep(790))
      let jsxtnm407 = XATSDAPP(jsxtnm406())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6926])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm413
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm412 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm408 = arg1
        // I1CMP:start
        let jsxtnm411 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(409);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(409)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm410 = XATSDAPP(XATS2JS_strn_print(jsxtnm408))
          jsxtnm411 = jsxtnm410
        } // endlet
        // I1CMP:return:jsxtnm411
        return jsxtnm411
      } // endtimp(strn_print(1025))
      jsxtnm413 = jsxtnm412
      let jsxtnm414 = XATSDAPP(jsxtnm413(jsxtnm381))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm416 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm415 = XATSTUP0([])
        // I1CMP:return:jsxtnm415
        return jsxtnm415
      } // endtimp(gs_print$sep(790))
      let jsxtnm417 = XATSDAPP(jsxtnm416())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6927])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm423
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm422 = function (arg1) { // timp: sint_print(909)
        let jsxtnm418 = arg1
        // I1CMP:start
        let jsxtnm421 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(419);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(419)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm420 = XATSDAPP(XATS2JS_sint_print(jsxtnm418))
          jsxtnm421 = jsxtnm420
        } // endlet
        // I1CMP:return:jsxtnm421
        return jsxtnm421
      } // endtimp(sint_print(909))
      jsxtnm423 = jsxtnm422
      let jsxtnm424 = XATSDAPP(jsxtnm423(jsxtnm382))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm426 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm425 = XATSTUP0([])
        // I1CMP:return:jsxtnm425
        return jsxtnm425
      } // endtimp(gs_print$sep(790))
      let jsxtnm427 = XATSDAPP(jsxtnm426())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6928])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm433
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm432 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm428 = arg1
        // I1CMP:start
        let jsxtnm431 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(429);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(429)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm430 = XATSDAPP(XATS2JS_strn_print(jsxtnm428))
          jsxtnm431 = jsxtnm430
        } // endlet
        // I1CMP:return:jsxtnm431
        return jsxtnm431
      } // endtimp(strn_print(1025))
      jsxtnm433 = jsxtnm432
      let jsxtnm434 = XATSDAPP(jsxtnm433(jsxtnm383))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm436 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm435 = XATSTUP0([])
        // I1CMP:return:jsxtnm435
        return jsxtnm435
      } // endtimp(gs_print$end(791))
      let jsxtnm437 = XATSDAPP(jsxtnm436())
      jsxtnm438 = jsxtnm437
    } // endlet
    // I1CMP:return:jsxtnm438
    return jsxtnm438
  } // endtimp(gs_print_a5(797))
  let jsxtnm440 = XATSDAPP(jsxtnm439(jsxtnm374, jsxtnm375, jsxtnm376, jsxtnm377, jsxtnm378))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26769(line=1625,offs=52)--26776(line=1625,offs=59))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm446
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm445 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm441 = arg1
    // I1CMP:start
    let jsxtnm444 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(442);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(442)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm443 = XATSDAPP(XATS2JS_strn_print(jsxtnm441))
      jsxtnm444 = jsxtnm443
    } // endlet
    // I1CMP:return:jsxtnm444
    return jsxtnm444
  } // endtimp(strn_print(1025))
  jsxtnm446 = jsxtnm445
  let jsxtnm447 = XATSDAPP(jsxtnm446(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm447
  return jsxtnm447
} // endtimp(gs_println_a5(810))
let jsxtnm449 = XATSPFLT(jsxtnm373[0])
let jsxtnm450 = XATSPFLT(jsxtnm373[1])
let jsxtnm451 = XATSDAPP(jsxtnm448(XATSSTRN("collatz_count(6) = ("), jsxtnm449, XATSSTRN(", "), jsxtnm450, XATSSTRN(")")))
jsxtnm452 = jsxtnm451
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2265(line=112,offs=1)--2295(line=112,offs=31)))
// I1VALDCL
let jsxtnm454
let jsxtnm453 = XATSDAPP(collatz_count_1104(XATSINT1(7)))
jsxtnm454 = jsxtnm453
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2296(line=113,offs=1)--2370(line=113,offs=75)))
// I1VALDCL
let jsxtnm533
// LCSRCsome1(collatz.dats)@(2305(line=113,offs=10)--2313(line=113,offs=18))
// I0Etapq(I0Ecst(gs_println_a5(810)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(14001(line=916,offs=1)--14014(line=916,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a5(810);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26618(line=1615,offs=1)--26783(line=1625,offs=66)))
// T1IMPallx(gs_println_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7002],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7003],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[7004],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7005],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[7006],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a5(810);$list(@(x0[2535],T2Pvar(x0[7002])),@(x1[2536],T2Pvar(x1[7003])),@(x2[2537],T2Pvar(x2[7004])),@(x3[2538],T2Pvar(x3[7005])),@(x4[2539],T2Pvar(x4[7006])))))))
let jsxtnm529 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_println_a5(810)
  let jsxtnm455 = arg1
  let jsxtnm456 = arg2
  let jsxtnm457 = arg3
  let jsxtnm458 = arg4
  let jsxtnm459 = arg5
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26720(line=1625,offs=3)--26731(line=1625,offs=14))
  // I0Etapq(I0Ecst(gs_print_a5(797)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Pvar(x0[7002]))),T2JAG($list(T2Pvar(x1[7003]))),T2JAG($list(T2Pvar(x2[7004]))),T2JAG($list(T2Pvar(x3[7005]))),T2JAG($list(T2Pvar(x4[7006])))))
  // T1IMPallx(gs_print_a5(797);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
  // T1IMPallx(gs_print_a5(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6924],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6925],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[6926],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6927],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[6928],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(797);$list(@(x0[2457],T2Pvar(x0[6924])),@(x1[2458],T2Pvar(x1[6925])),@(x2[2459],T2Pvar(x2[6926])),@(x3[2460],T2Pvar(x3[6927])),@(x4[2461],T2Pvar(x4[6928])))))))
  let jsxtnm520 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(797)
    let jsxtnm460 = arg1
    let jsxtnm461 = arg2
    let jsxtnm462 = arg3
    let jsxtnm463 = arg4
    let jsxtnm464 = arg5
    // I1CMP:start
    let jsxtnm519 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
      // I1VALDCL
      let jsxtnm468
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm466 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm465 = XATSTUP0([])
        // I1CMP:return:jsxtnm465
        return jsxtnm465
      } // endtimp(gs_print$beg(789))
      let jsxtnm467 = XATSDAPP(jsxtnm466())
      jsxtnm468 = jsxtnm467
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6924])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm474
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm473 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm469 = arg1
        // I1CMP:start
        let jsxtnm472 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(470);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(470)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm471 = XATSDAPP(XATS2JS_strn_print(jsxtnm469))
          jsxtnm472 = jsxtnm471
        } // endlet
        // I1CMP:return:jsxtnm472
        return jsxtnm472
      } // endtimp(strn_print(1025))
      jsxtnm474 = jsxtnm473
      let jsxtnm475 = XATSDAPP(jsxtnm474(jsxtnm460))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm477 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm476 = XATSTUP0([])
        // I1CMP:return:jsxtnm476
        return jsxtnm476
      } // endtimp(gs_print$sep(790))
      let jsxtnm478 = XATSDAPP(jsxtnm477())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6925])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm484
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm483 = function (arg1) { // timp: sint_print(909)
        let jsxtnm479 = arg1
        // I1CMP:start
        let jsxtnm482 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(480);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(480)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm481 = XATSDAPP(XATS2JS_sint_print(jsxtnm479))
          jsxtnm482 = jsxtnm481
        } // endlet
        // I1CMP:return:jsxtnm482
        return jsxtnm482
      } // endtimp(sint_print(909))
      jsxtnm484 = jsxtnm483
      let jsxtnm485 = XATSDAPP(jsxtnm484(jsxtnm461))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm487 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm486 = XATSTUP0([])
        // I1CMP:return:jsxtnm486
        return jsxtnm486
      } // endtimp(gs_print$sep(790))
      let jsxtnm488 = XATSDAPP(jsxtnm487())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6926])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm494
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm493 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm489 = arg1
        // I1CMP:start
        let jsxtnm492 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(490);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(490)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm491 = XATSDAPP(XATS2JS_strn_print(jsxtnm489))
          jsxtnm492 = jsxtnm491
        } // endlet
        // I1CMP:return:jsxtnm492
        return jsxtnm492
      } // endtimp(strn_print(1025))
      jsxtnm494 = jsxtnm493
      let jsxtnm495 = XATSDAPP(jsxtnm494(jsxtnm462))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm497 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm496 = XATSTUP0([])
        // I1CMP:return:jsxtnm496
        return jsxtnm496
      } // endtimp(gs_print$sep(790))
      let jsxtnm498 = XATSDAPP(jsxtnm497())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6927])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm504
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm503 = function (arg1) { // timp: sint_print(909)
        let jsxtnm499 = arg1
        // I1CMP:start
        let jsxtnm502 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(500);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(500)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm501 = XATSDAPP(XATS2JS_sint_print(jsxtnm499))
          jsxtnm502 = jsxtnm501
        } // endlet
        // I1CMP:return:jsxtnm502
        return jsxtnm502
      } // endtimp(sint_print(909))
      jsxtnm504 = jsxtnm503
      let jsxtnm505 = XATSDAPP(jsxtnm504(jsxtnm463))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm507 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm506 = XATSTUP0([])
        // I1CMP:return:jsxtnm506
        return jsxtnm506
      } // endtimp(gs_print$sep(790))
      let jsxtnm508 = XATSDAPP(jsxtnm507())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6928])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm514
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm513 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm509 = arg1
        // I1CMP:start
        let jsxtnm512 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(510);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(510)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm511 = XATSDAPP(XATS2JS_strn_print(jsxtnm509))
          jsxtnm512 = jsxtnm511
        } // endlet
        // I1CMP:return:jsxtnm512
        return jsxtnm512
      } // endtimp(strn_print(1025))
      jsxtnm514 = jsxtnm513
      let jsxtnm515 = XATSDAPP(jsxtnm514(jsxtnm464))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm517 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm516 = XATSTUP0([])
        // I1CMP:return:jsxtnm516
        return jsxtnm516
      } // endtimp(gs_print$end(791))
      let jsxtnm518 = XATSDAPP(jsxtnm517())
      jsxtnm519 = jsxtnm518
    } // endlet
    // I1CMP:return:jsxtnm519
    return jsxtnm519
  } // endtimp(gs_print_a5(797))
  let jsxtnm521 = XATSDAPP(jsxtnm520(jsxtnm455, jsxtnm456, jsxtnm457, jsxtnm458, jsxtnm459))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26769(line=1625,offs=52)--26776(line=1625,offs=59))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm527
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm526 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm522 = arg1
    // I1CMP:start
    let jsxtnm525 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(523);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(523)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm524 = XATSDAPP(XATS2JS_strn_print(jsxtnm522))
      jsxtnm525 = jsxtnm524
    } // endlet
    // I1CMP:return:jsxtnm525
    return jsxtnm525
  } // endtimp(strn_print(1025))
  jsxtnm527 = jsxtnm526
  let jsxtnm528 = XATSDAPP(jsxtnm527(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm528
  return jsxtnm528
} // endtimp(gs_println_a5(810))
let jsxtnm530 = XATSPFLT(jsxtnm454[0])
let jsxtnm531 = XATSPFLT(jsxtnm454[1])
let jsxtnm532 = XATSDAPP(jsxtnm529(XATSSTRN("collatz_count(7) = ("), jsxtnm530, XATSSTRN(", "), jsxtnm531, XATSSTRN(")")))
jsxtnm533 = jsxtnm532
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2374(line=115,offs=1)--2406(line=115,offs=33)))
// I1VALDCL
let jsxtnm535
let jsxtnm534 = XATSDAPP(collatz_count_1104(XATSINT1(27)))
jsxtnm535 = jsxtnm534
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2407(line=116,offs=1)--2484(line=116,offs=78)))
// I1VALDCL
let jsxtnm614
// LCSRCsome1(collatz.dats)@(2416(line=116,offs=10)--2424(line=116,offs=18))
// I0Etapq(I0Ecst(gs_println_a5(810)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(14001(line=916,offs=1)--14014(line=916,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a5(810);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26618(line=1615,offs=1)--26783(line=1625,offs=66)))
// T1IMPallx(gs_println_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7002],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7003],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[7004],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7005],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[7006],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a5(810);$list(@(x0[2535],T2Pvar(x0[7002])),@(x1[2536],T2Pvar(x1[7003])),@(x2[2537],T2Pvar(x2[7004])),@(x3[2538],T2Pvar(x3[7005])),@(x4[2539],T2Pvar(x4[7006])))))))
let jsxtnm610 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_println_a5(810)
  let jsxtnm536 = arg1
  let jsxtnm537 = arg2
  let jsxtnm538 = arg3
  let jsxtnm539 = arg4
  let jsxtnm540 = arg5
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26720(line=1625,offs=3)--26731(line=1625,offs=14))
  // I0Etapq(I0Ecst(gs_print_a5(797)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Pvar(x0[7002]))),T2JAG($list(T2Pvar(x1[7003]))),T2JAG($list(T2Pvar(x2[7004]))),T2JAG($list(T2Pvar(x3[7005]))),T2JAG($list(T2Pvar(x4[7006])))))
  // T1IMPallx(gs_print_a5(797);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
  // T1IMPallx(gs_print_a5(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6924],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6925],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[6926],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6927],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x4[6928],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(797);$list(@(x0[2457],T2Pvar(x0[6924])),@(x1[2458],T2Pvar(x1[6925])),@(x2[2459],T2Pvar(x2[6926])),@(x3[2460],T2Pvar(x3[6927])),@(x4[2461],T2Pvar(x4[6928])))))))
  let jsxtnm601 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(797)
    let jsxtnm541 = arg1
    let jsxtnm542 = arg2
    let jsxtnm543 = arg3
    let jsxtnm544 = arg4
    let jsxtnm545 = arg5
    // I1CMP:start
    let jsxtnm600 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
      // I1VALDCL
      let jsxtnm549
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm547 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm546 = XATSTUP0([])
        // I1CMP:return:jsxtnm546
        return jsxtnm546
      } // endtimp(gs_print$beg(789))
      let jsxtnm548 = XATSDAPP(jsxtnm547())
      jsxtnm549 = jsxtnm548
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6924])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm555
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm554 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm550 = arg1
        // I1CMP:start
        let jsxtnm553 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(551);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(551)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm552 = XATSDAPP(XATS2JS_strn_print(jsxtnm550))
          jsxtnm553 = jsxtnm552
        } // endlet
        // I1CMP:return:jsxtnm553
        return jsxtnm553
      } // endtimp(strn_print(1025))
      jsxtnm555 = jsxtnm554
      let jsxtnm556 = XATSDAPP(jsxtnm555(jsxtnm541))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm558 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm557 = XATSTUP0([])
        // I1CMP:return:jsxtnm557
        return jsxtnm557
      } // endtimp(gs_print$sep(790))
      let jsxtnm559 = XATSDAPP(jsxtnm558())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6925])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm565
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm564 = function (arg1) { // timp: sint_print(909)
        let jsxtnm560 = arg1
        // I1CMP:start
        let jsxtnm563 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(561);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(561)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm562 = XATSDAPP(XATS2JS_sint_print(jsxtnm560))
          jsxtnm563 = jsxtnm562
        } // endlet
        // I1CMP:return:jsxtnm563
        return jsxtnm563
      } // endtimp(sint_print(909))
      jsxtnm565 = jsxtnm564
      let jsxtnm566 = XATSDAPP(jsxtnm565(jsxtnm542))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm568 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm567 = XATSTUP0([])
        // I1CMP:return:jsxtnm567
        return jsxtnm567
      } // endtimp(gs_print$sep(790))
      let jsxtnm569 = XATSDAPP(jsxtnm568())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6926])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm575
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm574 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm570 = arg1
        // I1CMP:start
        let jsxtnm573 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(571);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(571)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm572 = XATSDAPP(XATS2JS_strn_print(jsxtnm570))
          jsxtnm573 = jsxtnm572
        } // endlet
        // I1CMP:return:jsxtnm573
        return jsxtnm573
      } // endtimp(strn_print(1025))
      jsxtnm575 = jsxtnm574
      let jsxtnm576 = XATSDAPP(jsxtnm575(jsxtnm543))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm578 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm577 = XATSTUP0([])
        // I1CMP:return:jsxtnm577
        return jsxtnm577
      } // endtimp(gs_print$sep(790))
      let jsxtnm579 = XATSDAPP(jsxtnm578())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6927])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm585
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm584 = function (arg1) { // timp: sint_print(909)
        let jsxtnm580 = arg1
        // I1CMP:start
        let jsxtnm583 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(581);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(581)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm582 = XATSDAPP(XATS2JS_sint_print(jsxtnm580))
          jsxtnm583 = jsxtnm582
        } // endlet
        // I1CMP:return:jsxtnm583
        return jsxtnm583
      } // endtimp(sint_print(909))
      jsxtnm585 = jsxtnm584
      let jsxtnm586 = XATSDAPP(jsxtnm585(jsxtnm544))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm588 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm587 = XATSTUP0([])
        // I1CMP:return:jsxtnm587
        return jsxtnm587
      } // endtimp(gs_print$sep(790))
      let jsxtnm589 = XATSDAPP(jsxtnm588())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6928])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm595
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm594 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm590 = arg1
        // I1CMP:start
        let jsxtnm593 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(591);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(591)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm592 = XATSDAPP(XATS2JS_strn_print(jsxtnm590))
          jsxtnm593 = jsxtnm592
        } // endlet
        // I1CMP:return:jsxtnm593
        return jsxtnm593
      } // endtimp(strn_print(1025))
      jsxtnm595 = jsxtnm594
      let jsxtnm596 = XATSDAPP(jsxtnm595(jsxtnm545))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm598 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm597 = XATSTUP0([])
        // I1CMP:return:jsxtnm597
        return jsxtnm597
      } // endtimp(gs_print$end(791))
      let jsxtnm599 = XATSDAPP(jsxtnm598())
      jsxtnm600 = jsxtnm599
    } // endlet
    // I1CMP:return:jsxtnm600
    return jsxtnm600
  } // endtimp(gs_print_a5(797))
  let jsxtnm602 = XATSDAPP(jsxtnm601(jsxtnm536, jsxtnm537, jsxtnm538, jsxtnm539, jsxtnm540))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26769(line=1625,offs=52)--26776(line=1625,offs=59))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm608
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm607 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm603 = arg1
    // I1CMP:start
    let jsxtnm606 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(604);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(604)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm605 = XATSDAPP(XATS2JS_strn_print(jsxtnm603))
      jsxtnm606 = jsxtnm605
    } // endlet
    // I1CMP:return:jsxtnm606
    return jsxtnm606
  } // endtimp(strn_print(1025))
  jsxtnm608 = jsxtnm607
  let jsxtnm609 = XATSDAPP(jsxtnm608(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm609
  return jsxtnm609
} // endtimp(gs_println_a5(810))
let jsxtnm611 = XATSPFLT(jsxtnm535[0])
let jsxtnm612 = XATSPFLT(jsxtnm535[1])
let jsxtnm613 = XATSDAPP(jsxtnm610(XATSSTRN("collatz_count(27) = ("), jsxtnm611, XATSSTRN(", "), jsxtnm612, XATSSTRN(")")))
jsxtnm614 = jsxtnm613
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2488(line=118,offs=1)--2509(line=118,offs=22)))
// I1VALDCL
let jsxtnm643
// LCSRCsome1(collatz.dats)@(2497(line=118,offs=10)--2505(line=118,offs=18))
// I0Etapq(I0Ecst(gs_println_a1(806)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a1(806);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
// T1IMPallx(gs_println_a1(806)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6992],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(806);$list(@(x0[2525],T2Pvar(x0[6992])))))))
let jsxtnm641 = function (arg1) { // timp: gs_println_a1(806)
  let jsxtnm615 = arg1
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
  // I0Etapq(I0Ecst(gs_print_a1(793)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6992])))))
  // T1IMPallx(gs_print_a1(793);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
  // T1IMPallx(gs_print_a1(793)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(793);$list(@(x0[2447],T2Pvar(x0[6914])))))))
  let jsxtnm632 = function (arg1) { // timp: gs_print_a1(793)
    let jsxtnm616 = arg1
    // I1CMP:start
    let jsxtnm631 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
      // I1VALDCL
      let jsxtnm620
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm618 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm617 = XATSTUP0([])
        // I1CMP:return:jsxtnm617
        return jsxtnm617
      } // endtimp(gs_print$beg(789))
      let jsxtnm619 = XATSDAPP(jsxtnm618())
      jsxtnm620 = jsxtnm619
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6914])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm626
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm625 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm621 = arg1
        // I1CMP:start
        let jsxtnm624 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(622);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(622)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm623 = XATSDAPP(XATS2JS_strn_print(jsxtnm621))
          jsxtnm624 = jsxtnm623
        } // endlet
        // I1CMP:return:jsxtnm624
        return jsxtnm624
      } // endtimp(strn_print(1025))
      jsxtnm626 = jsxtnm625
      let jsxtnm627 = XATSDAPP(jsxtnm626(jsxtnm616))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm629 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm628 = XATSTUP0([])
        // I1CMP:return:jsxtnm628
        return jsxtnm628
      } // endtimp(gs_print$end(791))
      let jsxtnm630 = XATSDAPP(jsxtnm629())
      jsxtnm631 = jsxtnm630
    } // endlet
    // I1CMP:return:jsxtnm631
    return jsxtnm631
  } // endtimp(gs_print_a1(793))
  let jsxtnm633 = XATSDAPP(jsxtnm632(jsxtnm615))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm639
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm638 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm634 = arg1
    // I1CMP:start
    let jsxtnm637 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(635);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(635)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm636 = XATSDAPP(XATS2JS_strn_print(jsxtnm634))
      jsxtnm637 = jsxtnm636
    } // endlet
    // I1CMP:return:jsxtnm637
    return jsxtnm637
  } // endtimp(strn_print(1025))
  jsxtnm639 = jsxtnm638
  let jsxtnm640 = XATSDAPP(jsxtnm639(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm640
  return jsxtnm640
} // endtimp(gs_println_a1(806))
let jsxtnm642 = XATSDAPP(jsxtnm641(XATSSTRN("")))
jsxtnm643 = jsxtnm642
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2510(line=119,offs=1)--2560(line=119,offs=51)))
// I1VALDCL
let jsxtnm672
// LCSRCsome1(collatz.dats)@(2519(line=119,offs=10)--2527(line=119,offs=18))
// I0Etapq(I0Ecst(gs_println_a1(806)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_println_a1(806);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
// T1IMPallx(gs_println_a1(806)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6992],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(806);$list(@(x0[2525],T2Pvar(x0[6992])))))))
let jsxtnm670 = function (arg1) { // timp: gs_println_a1(806)
  let jsxtnm644 = arg1
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
  // I0Etapq(I0Ecst(gs_print_a1(793)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6992])))))
  // T1IMPallx(gs_print_a1(793);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
  // T1IMPallx(gs_print_a1(793)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(793);$list(@(x0[2447],T2Pvar(x0[6914])))))))
  let jsxtnm661 = function (arg1) { // timp: gs_print_a1(793)
    let jsxtnm645 = arg1
    // I1CMP:start
    let jsxtnm660 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
      // I1VALDCL
      let jsxtnm649
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm647 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm646 = XATSTUP0([])
        // I1CMP:return:jsxtnm646
        return jsxtnm646
      } // endtimp(gs_print$beg(789))
      let jsxtnm648 = XATSDAPP(jsxtnm647())
      jsxtnm649 = jsxtnm648
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6914])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm655
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm654 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm650 = arg1
        // I1CMP:start
        let jsxtnm653 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(651);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(651)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm652 = XATSDAPP(XATS2JS_strn_print(jsxtnm650))
          jsxtnm653 = jsxtnm652
        } // endlet
        // I1CMP:return:jsxtnm653
        return jsxtnm653
      } // endtimp(strn_print(1025))
      jsxtnm655 = jsxtnm654
      let jsxtnm656 = XATSDAPP(jsxtnm655(jsxtnm645))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm658 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm657 = XATSTUP0([])
        // I1CMP:return:jsxtnm657
        return jsxtnm657
      } // endtimp(gs_print$end(791))
      let jsxtnm659 = XATSDAPP(jsxtnm658())
      jsxtnm660 = jsxtnm659
    } // endlet
    // I1CMP:return:jsxtnm660
    return jsxtnm660
  } // endtimp(gs_print_a1(793))
  let jsxtnm662 = XATSDAPP(jsxtnm661(jsxtnm644))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm668
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm667 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm663 = arg1
    // I1CMP:start
    let jsxtnm666 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(664);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(664)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm665 = XATSDAPP(XATS2JS_strn_print(jsxtnm663))
      jsxtnm666 = jsxtnm665
    } // endlet
    // I1CMP:return:jsxtnm666
    return jsxtnm666
  } // endtimp(strn_print(1025))
  jsxtnm668 = jsxtnm667
  let jsxtnm669 = XATSDAPP(jsxtnm668(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm669
  return jsxtnm669
} // endtimp(gs_println_a1(806))
let jsxtnm671 = XATSDAPP(jsxtnm670(XATSSTRN("=== Collatz Trace for n=6 ===")))
jsxtnm672 = jsxtnm671
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2561(line=120,offs=1)--2590(line=120,offs=30)))
// I1VALDCL
let jsxtnm674
let jsxtnm673 = XATSDAPP(collatz_trace_1472(XATSINT1(6)))
jsxtnm674 = jsxtnm673
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2591(line=121,offs=1)--2640(line=121,offs=50)))
// I1VALDCL
let jsxtnm716
// LCSRCsome1(collatz.dats)@(2600(line=121,offs=10)--2608(line=121,offs=18))
// I0Etapq(I0Ecst(gs_println_a2(807)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(13791(line=896,offs=1)--13804(line=896,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(gs_println_a2(807);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26238(line=1586,offs=1)--26339(line=1592,offs=45)))
// T1IMPallx(gs_println_a2(807)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6993],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6994],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a2(807);$list(@(x0[2526],T2Pvar(x0[6993])),@(x1[2527],T2Pvar(x1[6994])))))))
let jsxtnm713 = function (arg1, arg2) { // timp: gs_println_a2(807)
  let jsxtnm675 = arg1
  let jsxtnm676 = arg2
  // I1CMP:start
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26297(line=1592,offs=3)--26308(line=1592,offs=14))
  // I0Etapq(I0Ecst(gs_print_a2(794)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11802(line=749,offs=1)--11813(line=749,offs=12))));$list(T2JAG($list(T2Pvar(x0[6993]))),T2JAG($list(T2Pvar(x1[6994])))))
  // T1IMPallx(gs_print_a2(794);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21155(line=1303,offs=1)--21318(line=1314,offs=4)))
  // T1IMPallx(gs_print_a2(794)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6915],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6916],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a2(794);$list(@(x0[2448],T2Pvar(x0[6915])),@(x1[2449],T2Pvar(x1[6916])))))))
  let jsxtnm704 = function (arg1, arg2) { // timp: gs_print_a2(794)
    let jsxtnm677 = arg1
    let jsxtnm678 = arg2
    // I1CMP:start
    let jsxtnm703 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21212(line=1309,offs=1)--21235(line=1310,offs=15)))
      // I1VALDCL
      let jsxtnm682
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21221(line=1310,offs=1)--21233(line=1310,offs=13))
      // I0Etapq(I0Ecst(gs_print$beg(789)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$beg(789);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
      // T1IMPallx(gs_print$beg(789)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(789);$list()))))
      let jsxtnm680 = function () { // timp: gs_print$beg(789)
        // I1CMP:start
        let jsxtnm679 = XATSTUP0([])
        // I1CMP:return:jsxtnm679
        return jsxtnm679
      } // endtimp(gs_print$beg(789))
      let jsxtnm681 = XATSDAPP(jsxtnm680())
      jsxtnm682 = jsxtnm681
      XATS000_patck(true)
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21248(line=1312,offs=3)--21255(line=1312,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6915])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
      let jsxtnm688
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
      // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
      // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
      let jsxtnm687 = function (arg1) { // timp: strn_print(1025)
        let jsxtnm683 = arg1
        // I1CMP:start
        let jsxtnm686 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
          // I1FUNDCL
          // XATS2JS_strn_print_2202
            // FJARGdarg($list(I1BNDcons(I1TNM(684);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(684)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm685 = XATSDAPP(XATS2JS_strn_print(jsxtnm683))
          jsxtnm686 = jsxtnm685
        } // endlet
        // I1CMP:return:jsxtnm686
        return jsxtnm686
      } // endtimp(strn_print(1025))
      jsxtnm688 = jsxtnm687
      let jsxtnm689 = XATSDAPP(jsxtnm688(jsxtnm677))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21265(line=1312,offs=20)--21277(line=1312,offs=32))
      // I0Etapq(I0Ecst(gs_print$sep(790)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$sep(790);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
      // T1IMPallx(gs_print$sep(790)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(790);$list()))))
      let jsxtnm691 = function () { // timp: gs_print$sep(790)
        // I1CMP:start
        let jsxtnm690 = XATSTUP0([])
        // I1CMP:return:jsxtnm690
        return jsxtnm690
      } // endtimp(gs_print$sep(790))
      let jsxtnm692 = XATSDAPP(jsxtnm691())
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21282(line=1313,offs=3)--21289(line=1313,offs=10))
      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6916])))))
      // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
      let jsxtnm698
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
      // I0Etapq(I0Ecst(sint_print(909)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(sint_print(909);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
      // T1IMPallx(sint_print(909)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(909);$list()))))
      let jsxtnm697 = function (arg1) { // timp: sint_print(909)
        let jsxtnm693 = arg1
        // I1CMP:start
        let jsxtnm696 // let
        { // let
          // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
          // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
          // I1FUNDCL
          // XATS2JS_sint_print_3707
            // FJARGdarg($list(I1BNDcons(I1TNM(694);I0Pvar(i0(5023));$list(@(i0(5023),I1Vtnm(I1TNM(694)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
          let jsxtnm695 = XATSDAPP(XATS2JS_sint_print(jsxtnm693))
          jsxtnm696 = jsxtnm695
        } // endlet
        // I1CMP:return:jsxtnm696
        return jsxtnm696
      } // endtimp(sint_print(909))
      jsxtnm698 = jsxtnm697
      let jsxtnm699 = XATSDAPP(jsxtnm698(jsxtnm678))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(21299(line=1313,offs=20)--21311(line=1313,offs=32))
      // I0Etapq(I0Ecst(gs_print$end(791)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(gs_print$end(791);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
      // T1IMPallx(gs_print$end(791)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(791);$list()))))
      let jsxtnm701 = function () { // timp: gs_print$end(791)
        // I1CMP:start
        let jsxtnm700 = XATSTUP0([])
        // I1CMP:return:jsxtnm700
        return jsxtnm700
      } // endtimp(gs_print$end(791))
      let jsxtnm702 = XATSDAPP(jsxtnm701())
      jsxtnm703 = jsxtnm702
    } // endlet
    // I1CMP:return:jsxtnm703
    return jsxtnm703
  } // endtimp(gs_print_a2(794))
  let jsxtnm705 = XATSDAPP(jsxtnm704(jsxtnm675, jsxtnm676))
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/gsyn000.dats)@(26325(line=1592,offs=31)--26332(line=1592,offs=38))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
  // T1IMPallx(g_print(39);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
  let jsxtnm711
  // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1025)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1025);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
  // T1IMPallx(strn_print(1025)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1025);$list()))))
  let jsxtnm710 = function (arg1) { // timp: strn_print(1025)
    let jsxtnm706 = arg1
    // I1CMP:start
    let jsxtnm709 // let
    { // let
      // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
      // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
      // I1FUNDCL
      // XATS2JS_strn_print_2202
        // FJARGdarg($list(I1BNDcons(I1TNM(707);I0Pvar(cs(5159));$list(@(cs(5159),I1Vtnm(I1TNM(707)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
      let jsxtnm708 = XATSDAPP(XATS2JS_strn_print(jsxtnm706))
      jsxtnm709 = jsxtnm708
    } // endlet
    // I1CMP:return:jsxtnm709
    return jsxtnm709
  } // endtimp(strn_print(1025))
  jsxtnm711 = jsxtnm710
  let jsxtnm712 = XATSDAPP(jsxtnm711(XATSSTRN("\n")))
  // I1CMP:return:jsxtnm712
  return jsxtnm712
} // endtimp(gs_println_a2(807))
let jsxtnm714 = XATSPFLT(jsxtnm674[0])
let jsxtnm715 = XATSDAPP(jsxtnm713(XATSSTRN("Total iterations: "), jsxtnm714))
jsxtnm716 = jsxtnm715
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(collatz.dats)@(2687(line=126,offs=1)--2740(line=126,offs=54)))
// I1VALDCL
let jsxtnm727
// LCSRCsome1(collatz.dats)@(2696(line=126,offs=10)--2707(line=126,offs=21))
// I0Etapq(I0Ecst(console_log(2592)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1544(line=50,offs=1)--1555(line=50,offs=12))));$list(T2JAG($list())))
// T1IMPallx(console_log(2592);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1581(line=53,offs=1)--1730(line=65,offs=2)))
// T1IMPallx(console_log(2592)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(console_log(2592);$list()))))
let jsxtnm721 = function (arg1) { // timp: console_log(2592)
  let jsxtnm717 = arg1
  // I1CMP:start
  let jsxtnm720 // let
  { // let
    // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1663(line=61,offs=1)--1728(line=64,offs=34)))
    // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1671(line=62,offs=1)--1728(line=64,offs=34))
    // I1FUNDCL
    // XATS2JS_console_log_1674
      // FJARGdarg($list(I1BNDcons(I1TNM(718);I0Pvar(x0(4851));$list(@(x0(4851),I1Vtnm(I1TNM(718)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_console_log);G1Nlist($list())) // I1CMP:return
    let jsxtnm719 = XATSDAPP(XATS2JS_console_log(jsxtnm717))
    jsxtnm720 = jsxtnm719
  } // endlet
  // I1CMP:return:jsxtnm720
  return jsxtnm720
} // endtimp(console_log(2592))
// LCSRCsome1(collatz.dats)@(2708(line=126,offs=22)--2729(line=126,offs=43))
// I0Etapq(I0Ecst(the_print_store_flush(2595)(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1836(line=76,offs=1)--1857(line=76,offs=22))));$list(T2JAG($list())))
// T1IMPallx(the_print_store_flush(2595);LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(1998(line=87,offs=1)--2171(line=98,offs=2)))
// T1IMPallx(the_print_store_flush(2595)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(the_print_store_flush(2595);$list()))))
let jsxtnm724 = function () { // timp: the_print_store_flush(2595)
  // I1CMP:start
  let jsxtnm723 // let
  { // let
    // I1Dextern(LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(2108(line=95,offs=1)--2169(line=97,offs=50)))
    // LCSRCsome1(/nix/store/z46aj7zwq1fvkrshjf04kp9qm4jk12np-source/prelude/DATS/CATS/JS/xtop000.dats)@(2116(line=96,offs=1)--2169(line=97,offs=50))
    // I1FUNDCL
    // XATS2JS_the_print_store_flush_2119
      // FJARGdarg($list())
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_the_print_store_flush);G1Nlist($list())) // I1CMP:return
    let jsxtnm722 = XATSDAPP(XATS2JS_the_print_store_flush())
    jsxtnm723 = jsxtnm722
  } // endlet
  // I1CMP:return:jsxtnm723
  return jsxtnm723
} // endtimp(the_print_store_flush(2595))
let jsxtnm725 = XATSDAPP(jsxtnm724())
let jsxtnm726 = XATSDAPP(jsxtnm721(jsxtnm725))
jsxtnm727 = jsxtnm726
XATS000_patck(true)
// LCSRCsome1(collatz.dats)@(2941(line=134,offs=1)--2941(line=134,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(collatz.dats)@(2941(line=134,offs=1)--2941(line=134,offs=1));D3Cnone0()))
