//Code for typewriter effect
(function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
})(this, function () {
  return function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = s[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var s = {};
    return e.m = t, e.c = s, e.p = "", e(0)
  }([function (t, e, s) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e
      }
    }(),
      r = s(1),
      o = s(3),
      a = function () {
        function t(e, s) {
          n(this, t), r.initializer.load(this, s, e), this.begin()
        }
        return i(t, [{
          key: "toggle",
          value: function () {
            this.pause.status ? this.start() : this.stop()
          }
        }, {
          key: "stop",
          value: function () {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
          }
        }, {
          key: "start",
          value: function () {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
          }
        }, {
          key: "destroy",
          value: function () {
            this.reset(!1), this.options.onDestroy(this)
          }
        }, {
          key: "reset",
          value: function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
          }
        }, {
          key: "begin",
          value: function () {
            var t = this;
            this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, this.startDelay)
          }
        }, {
          key: "typewrite",
          value: function (t, e) {
            var s = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var n = this.humanizer(this.typeSpeed),
              i = 1;
            return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
              e = o.htmlParser.typeHtmlChars(t, e, s);
              var n = 0,
                r = t.substr(e);
              if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                var a = 1;
                r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
              }
              if ("`" === r.charAt(0)) {
                for (;
                  "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                var u = t.substring(0, e),
                  l = t.substring(u.length + 1, e + i),
                  c = t.substring(e + i + 1);
                t = u + l + c, i--
              }
              s.timeout = setTimeout(function () {
                s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
              }, n)
            }, n))
          }
        }, {
          key: "keepTyping",
          value: function (t, e, s) {
            0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
            var n = t.substr(0, e);
            this.replaceText(n), this.typewrite(t, e)
          }
        }, {
          key: "doneTyping",
          value: function (t, e) {
            var s = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              s.backspace(t, e)
            }, this.backDelay))
          }
        }, {
          key: "backspace",
          value: function (t, e) {
            var s = this;
            if (this.pause.status === !0) return void this.setPauseStatus(t, e, !1);
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var n = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              e = o.htmlParser.backSpaceHtmlChars(t, e, s);
              var n = t.substr(0, e);
              if (s.replaceText(n), s.smartBackspace) {
                var i = s.strings[s.arrayPos + 1];
                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
              }
              e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
            }, n)
          }
        }, {
          key: "complete",
          value: function () {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
          }
        }, {
          key: "setPauseStatus",
          value: function (t, e, s) {
            this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
          }
        }, {
          key: "toggleBlinking",
          value: function (t) {
            this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
          }
        }, {
          key: "humanizer",
          value: function (t) {
            return Math.round(Math.random() * t / 2) + t
          }
        }, {
          key: "shuffleStringsIfNeeded",
          value: function () {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5
            }))
          }
        }, {
          key: "initFadeOut",
          value: function () {
            var t = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
            }, this.fadeOutDelay)
          }
        }, {
          key: "replaceText",
          value: function (t) {
            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
          }
        }, {
          key: "bindFocusEvents",
          value: function () {
            var t = this;
            this.isInput && (this.el.addEventListener("focus", function (e) {
              t.stop()
            }), this.el.addEventListener("blur", function (e) {
              t.el.value && 0 !== t.el.value.length || t.start()
            }))
          }
        }, {
          key: "insertCursor",
          value: function () {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
          }
        }]), t
      }();
    e["default"] = a, t.exports = e["default"]
  }, function (t, e, s) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e];
        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
      }
      return t
    },
      o = function () {
        function t(t, e) {
          for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function (e, s, n) {
          return s && t(e.prototype, s), n && t(e, n), e
        }
      }(),
      a = s(2),
      u = n(a),
      l = function () {
        function t() {
          i(this, t)
        }
        return o(t, [{
          key: "load",
          value: function (t, e, s) {
            if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
              return t.trim()
            }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
              t.strings = [], t.stringsElement.style.display = "none";
              var n = Array.prototype.slice.apply(t.stringsElement.children),
                i = n.length;
              if (i)
                for (var o = 0; o < i; o += 1) {
                  var a = n[o];
                  t.strings.push(a.innerHTML.trim())
                }
            }
            t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0
            }, t.typingComplete = !1;
            for (var o in t.strings) t.sequence[o] = o;
            t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
          }
        }, {
          key: "getCurrentElContent",
          value: function (t) {
            var e = "";
            return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
          }
        }, {
          key: "appendAnimationCss",
          value: function (t) {
            var e = "data-typed-js-css";
            if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
              var s = document.createElement("style");
              s.type = "text/css", s.setAttribute(e, !0);
              var n = "";
              t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
            }
          }
        }]), t
      }();
    e["default"] = l;
    var c = new l;
    e.initializer = c
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function (t) { },
      onComplete: function (t) { },
      preStringTyped: function (t, e) { },
      onStringTyped: function (t, e) { },
      onLastStringBackspaced: function (t) { },
      onTypingPaused: function (t, e) { },
      onTypingResumed: function (t, e) { },
      onReset: function (t) { },
      onStop: function (t, e) { },
      onStart: function (t, e) { },
      onDestroy: function (t) { }
    };
    e["default"] = s, t.exports = e["default"]
  }, function (t, e) {
    "use strict";

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e
      }
    }(),
      i = function () {
        function t() {
          s(this, t)
        }
        return n(t, [{
          key: "typeHtmlChars",
          value: function (t, e, s) {
            if ("html" !== s.contentType) return e;
            var n = t.substr(e).charAt(0);
            if ("<" === n || "&" === n) {
              var i = "";
              for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
              e++
            }
            return e
          }
        }, {
          key: "backSpaceHtmlChars",
          value: function (t, e, s) {
            if ("html" !== s.contentType) return e;
            var n = t.substr(e).charAt(0);
            if (">" === n || ";" === n) {
              var i = "";
              for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
              e--
            }
            return e
          }
        }]), t
      }();
    e["default"] = i;
    var r = new i;
    e.htmlParser = r
  }])
});
//Code for typewriter effect

(function () {
  // var content = document.createElement("script");
  // content.src = "//cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js";
  // document.head.appendChild(content);

  function createTest_2006() {
    document.body.classList.add('spz-2007');

    waitForElm('.css-nu3kba-MuiList-root-Header-headerMenuCtas').then(function () {
      waitForElm('.css-1a48d2a-TabsQuotes-outerContainer .swiper.swiper-3d').then(function () {
        appendHomeHeroContent();
      });

      // Add class 'safari' on body if browser is safari
      if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari');
      }
    });
  }

  function appendHomeHeroContent() {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload';
    waitForElm('.css-3db0n2-HeroHomepage-hero').then(function () {
      // insert element anchors cta
      if (document.querySelectorAll('.hero-banner-section').length == 0) {
        document.querySelector('.css-3db0n2-HeroHomepage-hero').insertAdjacentHTML('afterend', `
        <div class="hero-banner-section">
          <div class="hero-banner-container container">
          <div class="hero-copy"> 
            <h2><span class="blue-text">Automate</span> and <span class="blue-text">Accelerate</span> <br>  <span class="typing">
          </span></h2> 
            <p>Drata automates your compliance journey from start to audit-ready and beyond and provides support from the security and compliance experts who built it.</p> 
          </div>
          <div class="checkbox-section">
            <h6>What frameworks are you interested in? </h6> 
            <div class="checkboxes"> 
              <div class="check-box">
                <label class="custom-check">
                  <img src="${astUrl}/v1698933833/drata/2006/soc_2.svg" alt="SOC 2">
                  <p>SOC 2</p>
                  <input class="spz-input" type="checkbox" value="SOC 2">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1699516610/drata/2006/iso.svg" alt="ISO 27001"><p>ISO 27001</p>
              <input class="spz-input" type="checkbox" value="ISO 27001"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/pci_1.svg" alt="PCI DSS"><p>PCI DSS</p>
              <input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/hipaa.svg" alt="HIPAA"><p>HIPAA</p>
              <input class="spz-input" type="checkbox" value="HIPAA"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/gdpr.svg" alt="GDPR"><p>GDPR</p>
              <input class="spz-input" type="checkbox" value="GDPR"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/custom_frameworks.svg" alt="Other"><p>Other</p>
              <input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label></div>
              </div>
              <div class="btn-section"><button class="get-started-cta">Get Started <img src="${astUrl}/v1698933833/drata/2006/arrow_icon.svg" alt="Arrow"></button></div>
              </div></div></div>
              <div class="hero-img-section"> <div class="img-container"><picture>
              <source media="(max-width: 767px)" srcset="${astUrl}/f_auto/drata/2006/360.webp">
              <source media="(min-width: 768px)" srcset="${astUrl}/f_auto/drata/2006/1440.webp">
              <source media="(min-width: 1900px)" srcset="${astUrl}/f_auto/drata/2006/1920.webp">
              <source srcset="${astUrl}/f_auto/drata/2006/1440.png" type="image/png">
              <img src="${astUrl}/f_auto/drata/2006/360.webp" alt="Drata Dashboard">
            </picture></div></div>
        <div class="social-pr-section">
            <!-- <div class="container"> -->
            <h2 class="sp-title">
              Join the thousands of companies that trust Drata
            </h2>
            <div class="sp-logo-group dis-flex justify-content-between">
              <div class="sp-marquee">
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="${astUrl}/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearco.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"
                  />
                </div>
                <!-- Repeat -->
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="${astUrl}/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img src="${astUrl}/v1698933833/drata/2006/clearco.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"/>
                </div>
              </div>
            </div>
          `);
      }
    });

    // content.onload = function () {
    waitForElm('.typing').then(function () {
      if (!document.querySelector('.typed-cursor')) {
        if (window.innerWidth >= 528) {
          var typed = new Typed(".typing", {
            startDelay: 1000,
            strings: ["", "SOC2 Compliance", "^1000 ISO 27001 Certification", "^1000 HIPAA Compliance", "^1000 GDPR Compliance"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
          })
        }
        else {
          var typed = new Typed(".typing", {
            startDelay: 1000,
            strings: ["", "SOC2 <br>Compliance", "^1000 ISO 27001 <br>Certification", "^1000 HIPAA <br>Compliance", "^1000 GDPR <br>Compliance"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
          })
        }
      }
    });
    // };
  }

  function demoChecked() {
    waitForElm('.hs_demo_product_of_interest .input .MuiFormControlLabel-label').then(function () {

      if (document.querySelector('.MuiFormControlLabel-label')) {
        document.querySelectorAll('.hs_demo_product_of_interest .input .hs-form-checkbox-display').forEach(function (checkbox) {
          let checkValue = checkbox.querySelector('span').textContent;
          let isCookiePresent = getCookie(checkValue);

          if (isCookiePresent) {
            checkbox.querySelector('input').checked = true;

            let secondCheck = checkbox.querySelector('input').getAttribute('id');

            document.querySelector('.MuiFormControlLabel-labelPlacementEnd ' + ' #' + secondCheck).checked = true;
            document.querySelector('.MuiFormControlLabel-labelPlacementEnd ' + ' #' + secondCheck).closest('label').click();

            //delete cookie
            deleteCookie(checkValue);
          }
        });

        // if (document.querySelector('.spz-2007 main') && document.querySelectorAll('.spz-2007 main input[name="cro_test_1"]').length == 0) {
        //   document.querySelector('.spz-2007 main').insertAdjacentHTML("beforeend", '<input type="hidden" name="cro_test_1" value="#2006_Hero_Redesign">'); s
        //   document.querySelector('.spz-2007 main').insertAdjacentHTML("beforeend", '<input type="hidden" name="cro_test_2" value="Variant">');
        // }
      }
    });
  }

  function removeTest() {
    document.body.classList.remove("spz-2007");
  }

  history.pushState = (function (f) {
    return function pushState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.replaceState);
  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });
  window.addEventListener('locationchange', function () {
    removeTest();

    url = location.href;
    urlCheck(url);
  });
  var url = location.href;
  urlCheck(url);

  function urlCheck(url) {
    var targetTestURL = 'https://drata.com/';
    if (isSameUrl(url, targetTestURL, true)) {
      createTest_2006();
    }
    else if (window.location.pathname.indexOf("/demo") > -1) {
      demoChecked();
    }
    else {
      removeTest();
    }
  }

  // isSameUrl Parameters
  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
      currentUrl.slice(0, currentUrl.indexOf("#")) :
      currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
      specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
      specifiedUrl;
    if (includeQueryParams)
      currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
  }

  function waitForElm(selector) {
    return new Promise(function (resolve) {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(function (mutations) {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
  }

  //set a cookie using js
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + "path=/";
  }

  //get a cookie using js
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //delete cookie using js
  function deleteCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  //window onclick check target class
  window.onclick = function (event) {
    if (event.target.className == "spz-input") {
      if (event.target.checked) {
        event.target.closest('.custom-check').classList.add('checked');
      }
      else {
        event.target.closest('.custom-check').classList.remove('checked');
      }
    }

    if (event.target.className == "get-started-cta") {
      document.querySelectorAll('.checkboxes input').forEach(function (elem) {
        if (elem.checked) {
          setCookie(elem.value, 1);
        }
      });

      document.querySelector('a[href="/demo"]').click();
    }
  }
})();