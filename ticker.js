/* Funded Ledger deals bar: a scrolling strip at the top of every page.
   Only firms with a LIVE affiliate link (see affiliate/links.md). Text is limited to facts we have confirmed:
   a code is shown only where links.md lists one; no prices or discount amounts. Edit DEALS to change it. */
(function () {
  if (document.getElementById("fl-deals-bar")) return;
  var DEALS = [
    { n: "FundedNext", t: "Use code LEDGER", u: "/go/fundednext.html", c: "#34d399" },
    { n: "Earn2Trade", t: "Use code LEDGER", u: "/go/earn2trade.html", c: "#22b8cf" },
    { n: "Alpha Futures", t: "View offer", u: "/go/alphafutures.html", c: "#fbbf24" },
    { n: "TradeDay", t: "View offer", u: "/go/tradeday.html", c: "#a78bfa" },
    { n: "FTMO", t: "View offer", u: "/go/ftmo.html", c: "#fb7185" },
    { n: "E8 Markets", t: "Use code A39608C1", u: "/go/e8markets.html", c: "#34d399" },
    { n: "FXIFY", t: "View offer", u: "/go/fxify.html", c: "#22b8cf" },
    { n: "FundingPips", t: "View offer", u: "/go/fundingpips.html", c: "#fbbf24" },
    { n: "Maven Trading", t: "View offer", u: "/go/maven.html", c: "#a78bfa" }
  ];
  var css = "\
#fl-deals-bar{position:relative;z-index:30;display:flex;align-items:stretch;height:46px;background:#0f151c;border-bottom:1px solid #233040;font:600 14px/1 Inter,system-ui,sans-serif;color:#e8edf3;overflow:hidden}\
#fl-deals-bar .fl-lbl{flex:0 0 auto;display:flex;align-items:center;gap:8px;padding:0 14px;background:#18222d;border-right:1px solid #233040;white-space:nowrap;z-index:2}\
#fl-deals-bar .fl-lbl b{color:#34d399;letter-spacing:.04em;text-transform:uppercase;font-size:12px}\
#fl-deals-bar .fl-lbl a{color:#8494a5;font-weight:600;font-size:12px;text-decoration:underline;text-underline-offset:3px}\
#fl-deals-bar .fl-lbl a:hover{color:#e8edf3}\
#fl-deals-bar .fl-view{position:relative;flex:1 1 auto;min-width:0;overflow:hidden}\
#fl-deals-bar .fl-view:before,#fl-deals-bar .fl-view:after{content:'';position:absolute;top:0;bottom:0;width:40px;z-index:1;pointer-events:none}\
#fl-deals-bar .fl-view:before{left:0;background:linear-gradient(90deg,#0f151c,transparent)}\
#fl-deals-bar .fl-view:after{right:0;background:linear-gradient(270deg,#0f151c,transparent)}\
#fl-deals-bar .fl-track{display:flex;align-items:center;height:100%;width:max-content;animation:fl-scroll 48s linear infinite}\
#fl-deals-bar:hover .fl-track,#fl-deals-bar:focus-within .fl-track{animation-play-state:paused}\
#fl-deals-bar .fl-chip{display:inline-flex;align-items:center;gap:9px;margin:0 8px;padding:7px 14px 7px 8px;border:1px solid #2f3f52;border-radius:99px;background:#131b24;color:#e8edf3;text-decoration:none;white-space:nowrap}\
#fl-deals-bar .fl-chip:hover{border-color:#34d399;background:#18222d}\
#fl-deals-bar .fl-dot{width:24px;height:24px;border-radius:99px;display:inline-flex;align-items:center;justify-content:center;color:#052016;font-weight:800;font-size:12px}\
#fl-deals-bar .fl-t{color:#34d399;font-weight:700}\
#fl-deals-bar .fl-go{color:#8494a5;font-weight:600}\
@keyframes fl-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\
@media (max-width:640px){#fl-deals-bar{height:44px}#fl-deals-bar .fl-lbl b{display:none}#fl-deals-bar .fl-lbl{padding:0 10px}}\
@media (prefers-reduced-motion:reduce){#fl-deals-bar .fl-track{animation:none}#fl-deals-bar .fl-view{overflow-x:auto}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  function chips() {
    return DEALS.map(function (d) {
      return '<a class="fl-chip" href="' + d.u + '" rel="sponsored nofollow noopener" aria-label="' + d.n + ': ' + d.t + '">' +
        '<span class="fl-dot" style="background:' + d.c + '">' + d.n.charAt(0) + '</span><span>' + d.n + '</span>' +
        '<span class="fl-t">' + d.t + '</span><span class="fl-go">→</span></a>';
    }).join("");
  }
  var bar = document.createElement("section");
  bar.id = "fl-deals-bar"; bar.setAttribute("aria-label", "Prop firm offers (affiliate links)");
  bar.innerHTML = '<div class="fl-lbl"><b>Prop firm deals</b><a href="/affiliate-disclosure.html">Affiliate disclosure</a></div>' +
    '<div class="fl-view"><div class="fl-track">' + chips() + chips().replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ') + '</div></div>';
  document.body.insertBefore(bar, document.body.firstChild);
})();
