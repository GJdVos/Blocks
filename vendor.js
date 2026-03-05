/*! For license information please see vendor.js.LICENSE.txt */
(self.webpackChunkflabbergast_web_2024 = self.webpackChunkflabbergast_web_2024 || []).push([
	[121], {
		714: function(t) {
			t.exports = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, "symbol" == typeof(s = function(t) {
							if ("object" != typeof t || null === t) return t;
							var e = t[Symbol.toPrimitive];
							if (void 0 !== e) {
								var i = e.call(t, "string");
								if ("object" != typeof i) return i;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return String(t)
						}(r.key)) ? s : String(s), r)
					}
					var s
				}

				function e(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), Object.defineProperty(e, "prototype", {
						writable: !1
					}), e
				}

				function i() {
					return i = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}, i.apply(this, arguments)
				}

				function r(t, e) {
					t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e)
				}

				function s(t) {
					return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, s(t)
				}

				function n(t, e) {
					return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, n(t, e)
				}

				function a() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}

				function o(t, e, i) {
					return o = a() ? Reflect.construct.bind() : function(t, e, i) {
						var r = [null];
						r.push.apply(r, e);
						var s = new(Function.bind.apply(t, r));
						return i && n(s, i.prototype), s
					}, o.apply(null, arguments)
				}

				function l(t) {
					var e = "function" == typeof Map ? new Map : void 0;
					return l = function(t) {
						if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
						if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, i)
						}

						function i() {
							return o(t, arguments, s(this).constructor)
						}
						return i.prototype = Object.create(t.prototype, {
							constructor: {
								value: i,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), n(i, t)
					}, l(t)
				}

				function h(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}
				var u, c = function() {
					this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0
				};
				! function(t) {
					t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
				}(u || (u = {}));
				var p = u.off,
					d = function() {
						function t(t) {
							this.t = void 0, this.t = t
						}
						t.getLevel = function() {
							return p
						}, t.setLevel = function(t) {
							return p = u[t]
						};
						var e = t.prototype;
						return e.error = function() {
							this.i(console.error, u.error, [].slice.call(arguments))
						}, e.warn = function() {
							this.i(console.warn, u.warning, [].slice.call(arguments))
						}, e.info = function() {
							this.i(console.info, u.info, [].slice.call(arguments))
						}, e.debug = function() {
							this.i(console.log, u.debug, [].slice.call(arguments))
						}, e.i = function(e, i, r) {
							i <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(r))
						}, t
					}();

				function f(t) {
					return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
				}

				function m(t) {
					return t && t.sensitive ? "" : "i"
				}
				var g = {
						container: "container",
						history: "history",
						namespace: "namespace",
						prefix: "data-barba",
						prevent: "prevent",
						wrapper: "wrapper"
					},
					v = function() {
						function t() {
							this.o = g, this.u = void 0, this.h = {
								after: null,
								before: null,
								parent: null
							}
						}
						var e = t.prototype;
						return e.toString = function(t) {
							return t.outerHTML
						}, e.toDocument = function(t) {
							return this.u || (this.u = new DOMParser), this.u.parseFromString(t, "text/html")
						}, e.toElement = function(t) {
							var e = document.createElement("div");
							return e.innerHTML = t, e
						}, e.getHtml = function(t) {
							return void 0 === t && (t = document), this.toString(t.documentElement)
						}, e.getWrapper = function(t) {
							return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
						}, e.getContainer = function(t) {
							return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
						}, e.removeContainer = function(t) {
							document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t))
						}, e.addContainer = function(t, e) {
							var i = this.getContainer() || this.h.before;
							i ? this.l(t, i) : this.h.after ? this.h.after.parentNode.insertBefore(t, this.h.after) : this.h.parent ? this.h.parent.appendChild(t) : e.appendChild(t)
						}, e.getSibling = function() {
							return this.h
						}, e.getNamespace = function(t) {
							void 0 === t && (t = document);
							var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
							return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
						}, e.getHref = function(t) {
							if (t.tagName && "a" === t.tagName.toLowerCase()) {
								if ("string" == typeof t.href) return t.href;
								var e = t.getAttribute("href") || t.getAttribute("xlink:href");
								if (e) return this.resolveUrl(e.baseVal || e)
							}
							return null
						}, e.resolveUrl = function() {
							var t = [].slice.call(arguments).length;
							if (0 === t) throw new Error("resolveUrl requires at least one argument; got none.");
							var e = document.createElement("base");
							if (e.href = arguments[0], 1 === t) return e.href;
							var i = document.getElementsByTagName("head")[0];
							i.insertBefore(e, i.firstChild);
							for (var r, s = document.createElement("a"), n = 1; n < t; n++) s.href = arguments[n], e.href = r = s.href;
							return i.removeChild(e), r
						}, e.l = function(t, e) {
							e.parentNode.insertBefore(t, e.nextSibling)
						}, e.v = function(t) {
							return this.h = {
								after: t.nextElementSibling,
								before: t.previousElementSibling,
								parent: t.parentElement
							}, this.h
						}, t
					}(),
					y = new v,
					D = function() {
						function t() {
							this.p = void 0, this.m = [], this.P = -1
						}
						var r = t.prototype;
						return r.init = function(t, e) {
							this.p = "barba";
							var i = {
								data: {},
								ns: e,
								scroll: {
									x: window.scrollX,
									y: window.scrollY
								},
								url: t
							};
							this.P = 0, this.m.push(i);
							var r = {
								from: this.p,
								index: this.P,
								states: [].concat(this.m)
							};
							window.history && window.history.replaceState(r, "", t)
						}, r.change = function(t, e, i) {
							if (i && i.state) {
								var r = i.state,
									s = r.index;
								e = this.g(this.P - s), this.replace(r.states), this.P = s
							} else this.add(t, e);
							return e
						}, r.add = function(t, e, i, r) {
							var s = null != i ? i : this.R(e),
								n = {
									data: null != r ? r : {},
									ns: "tmp",
									scroll: {
										x: window.scrollX,
										y: window.scrollY
									},
									url: t
								};
							switch (s) {
								case "push":
									this.P = this.size, this.m.push(n);
									break;
								case "replace":
									this.set(this.P, n)
							}
							var a = {
								from: this.p,
								index: this.P,
								states: [].concat(this.m)
							};
							switch (s) {
								case "push":
									window.history && window.history.pushState(a, "", t);
									break;
								case "replace":
									window.history && window.history.replaceState(a, "", t)
							}
						}, r.store = function(t, e) {
							var r = e || this.P,
								s = this.get(r);
							s.data = i({}, s.data, t), this.set(r, s);
							var n = {
								from: this.p,
								index: this.P,
								states: [].concat(this.m)
							};
							window.history.replaceState(n, "")
						}, r.update = function(t, e) {
							var r = e || this.P,
								s = i({}, this.get(r), t);
							this.set(r, s)
						}, r.remove = function(t) {
							t ? this.m.splice(t, 1) : this.m.pop(), this.P--
						}, r.clear = function() {
							this.m = [], this.P = -1
						}, r.replace = function(t) {
							this.m = t
						}, r.get = function(t) {
							return this.m[t]
						}, r.set = function(t, e) {
							return this.m[t] = e
						}, r.R = function(t) {
							var e = "push",
								i = t,
								r = g.prefix + "-" + g.history;
							return i.hasAttribute && i.hasAttribute(r) && (e = i.getAttribute(r)), e
						}, r.g = function(t) {
							return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
						}, e(t, [{
							key: "current",
							get: function() {
								return this.m[this.P]
							}
						}, {
							key: "previous",
							get: function() {
								return this.P < 1 ? null : this.m[this.P - 1]
							}
						}, {
							key: "size",
							get: function() {
								return this.m.length
							}
						}]), t
					}(),
					b = new D,
					_ = function(t, e) {
						try {
							var i = function() {
								if (!e.next.html) return Promise.resolve(t).then((function(t) {
									var i = e.next;
									if (t) {
										var r = y.toElement(t.html);
										i.namespace = y.getNamespace(r), i.container = y.getContainer(r), i.url = t.url, i.html = t.html, b.update({
											ns: i.namespace
										});
										var s = y.toDocument(t.html);
										document.title = s.title
									}
								}))
							}();
							return Promise.resolve(i && i.then ? i.then((function() {})) : void 0)
						} catch (t) {
							return Promise.reject(t)
						}
					},
					w = function t(e, i, r) {
						return e instanceof RegExp ? function(t, e) {
							if (!e) return t;
							for (var i = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, s = i.exec(t.source); s;) e.push({
								name: s[1] || r++,
								prefix: "",
								suffix: "",
								modifier: "",
								pattern: ""
							}), s = i.exec(t.source);
							return t
						}(e, i) : Array.isArray(e) ? function(e, i, r) {
							var s = e.map((function(e) {
								return t(e, i, r).source
							}));
							return new RegExp("(?:".concat(s.join("|"), ")"), m(r))
						}(e, i, r) : function(t, e, i) {
							return function(t, e, i) {
								void 0 === i && (i = {});
								for (var r = i.strict, s = void 0 !== r && r, n = i.start, a = void 0 === n || n, o = i.end, l = void 0 === o || o, h = i.encode, u = void 0 === h ? function(t) {
										return t
									} : h, c = i.delimiter, p = void 0 === c ? "/#?" : c, d = i.endsWith, g = "[".concat(f(void 0 === d ? "" : d), "]|$"), v = "[".concat(f(p), "]"), y = a ? "^" : "", D = 0, b = t; D < b.length; D++) {
									var _ = b[D];
									if ("string" == typeof _) y += f(u(_));
									else {
										var w = f(u(_.prefix)),
											x = f(u(_.suffix));
										if (_.pattern)
											if (e && e.push(_), w || x)
												if ("+" === _.modifier || "*" === _.modifier) {
													var C = "*" === _.modifier ? "?" : "";
													y += "(?:".concat(w, "((?:").concat(_.pattern, ")(?:").concat(x).concat(w, "(?:").concat(_.pattern, "))*)").concat(x, ")").concat(C)
												} else y += "(?:".concat(w, "(").concat(_.pattern, ")").concat(x, ")").concat(_.modifier);
										else y += "+" === _.modifier || "*" === _.modifier ? "((?:".concat(_.pattern, ")").concat(_.modifier, ")") : "(".concat(_.pattern, ")").concat(_.modifier);
										else y += "(?:".concat(w).concat(x, ")").concat(_.modifier)
									}
								}
								if (l) s || (y += "".concat(v, "?")), y += i.endsWith ? "(?=".concat(g, ")") : "$";
								else {
									var E = t[t.length - 1],
										T = "string" == typeof E ? v.indexOf(E[E.length - 1]) > -1 : void 0 === E;
									s || (y += "(?:".concat(v, "(?=").concat(g, "))?")), T || (y += "(?=".concat(v, "|").concat(g, ")"))
								}
								return new RegExp(y, m(i))
							}(function(t, e) {
								void 0 === e && (e = {});
								for (var i = function(t) {
										for (var e = [], i = 0; i < t.length;) {
											var r = t[i];
											if ("*" !== r && "+" !== r && "?" !== r)
												if ("\\" !== r)
													if ("{" !== r)
														if ("}" !== r)
															if (":" !== r)
																if ("(" !== r) e.push({
																	type: "CHAR",
																	index: i,
																	value: t[i++]
																});
																else {
																	var s = 1,
																		n = "";
																	if ("?" === t[o = i + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(o));
																	for (; o < t.length;)
																		if ("\\" !== t[o]) {
																			if (")" === t[o]) {
																				if (0 == --s) {
																					o++;
																					break
																				}
																			} else if ("(" === t[o] && (s++, "?" !== t[o + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(o));
																			n += t[o++]
																		} else n += t[o++] + t[o++];
																	if (s) throw new TypeError("Unbalanced pattern at ".concat(i));
																	if (!n) throw new TypeError("Missing pattern at ".concat(i));
																	e.push({
																		type: "PATTERN",
																		index: i,
																		value: n
																	}), i = o
																}
											else {
												for (var a = "", o = i + 1; o < t.length;) {
													var l = t.charCodeAt(o);
													if (!(l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || 95 === l)) break;
													a += t[o++]
												}
												if (!a) throw new TypeError("Missing parameter name at ".concat(i));
												e.push({
													type: "NAME",
													index: i,
													value: a
												}), i = o
											} else e.push({
												type: "CLOSE",
												index: i,
												value: t[i++]
											});
											else e.push({
												type: "OPEN",
												index: i,
												value: t[i++]
											});
											else e.push({
												type: "ESCAPED_CHAR",
												index: i++,
												value: t[i++]
											});
											else e.push({
												type: "MODIFIER",
												index: i,
												value: t[i++]
											})
										}
										return e.push({
											type: "END",
											index: i,
											value: ""
										}), e
									}(t), r = e.prefixes, s = void 0 === r ? "./" : r, n = "[^".concat(f(e.delimiter || "/#?"), "]+?"), a = [], o = 0, l = 0, h = "", u = function(t) {
										if (l < i.length && i[l].type === t) return i[l++].value
									}, c = function(t) {
										var e = u(t);
										if (void 0 !== e) return e;
										var r = i[l],
											s = r.index;
										throw new TypeError("Unexpected ".concat(r.type, " at ").concat(s, ", expected ").concat(t))
									}, p = function() {
										for (var t, e = ""; t = u("CHAR") || u("ESCAPED_CHAR");) e += t;
										return e
									}; l < i.length;) {
									var d = u("CHAR"),
										m = u("NAME"),
										g = u("PATTERN");
									if (m || g) - 1 === s.indexOf(y = d || "") && (h += y, y = ""), h && (a.push(h), h = ""), a.push({
										name: m || o++,
										prefix: y,
										suffix: "",
										pattern: g || n,
										modifier: u("MODIFIER") || ""
									});
									else {
										var v = d || u("ESCAPED_CHAR");
										if (v) h += v;
										else if (h && (a.push(h), h = ""), u("OPEN")) {
											var y = p(),
												D = u("NAME") || "",
												b = u("PATTERN") || "",
												_ = p();
											c("CLOSE"), a.push({
												name: D || (b ? o++ : ""),
												pattern: D && !b ? n : b,
												prefix: y,
												suffix: _,
												modifier: u("MODIFIER") || ""
											})
										} else c("END")
									}
								}
								return a
							}(t, i), e, i)
						}(e, i, r)
					},
					x = {
						__proto__: null,
						update: _,
						nextTick: function() {
							return new Promise((function(t) {
								window.requestAnimationFrame(t)
							}))
						},
						pathToRegexp: w
					},
					C = function() {
						return window.location.origin
					},
					E = function(t) {
						return void 0 === t && (t = window.location.href), T(t).port
					},
					T = function(t) {
						var e, i = t.match(/:\d+/);
						if (null === i) /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
						else {
							var r = i[0].substring(1);
							e = parseInt(r, 10)
						}
						var s, n = t.replace(C(), ""),
							a = {},
							o = n.indexOf("#");
						o >= 0 && (s = n.slice(o + 1), n = n.slice(0, o));
						var l = n.indexOf("?");
						return l >= 0 && (a = S(n.slice(l + 1)), n = n.slice(0, l)), {
							hash: s,
							path: n,
							port: e,
							query: a
						}
					},
					S = function(t) {
						return t.split("&").reduce((function(t, e) {
							var i = e.split("=");
							return t[i[0]] = i[1], t
						}), {})
					},
					k = function(t) {
						return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
					},
					P = {
						__proto__: null,
						getHref: function() {
							return window.location.href
						},
						getAbsoluteHref: function(t, e) {
							return void 0 === e && (e = document.baseURI), new URL(t, e).href
						},
						getOrigin: C,
						getPort: E,
						getPath: function(t) {
							return void 0 === t && (t = window.location.href), T(t).path
						},
						getQuery: function(t, e) {
							return void 0 === e && (e = !1), e ? JSON.stringify(T(t).query) : T(t).query
						},
						getHash: function(t) {
							return T(t).hash
						},
						parse: T,
						parseQuery: S,
						clean: k
					};

				function A(t, e, r, s, n) {
					return void 0 === e && (e = 2e3), new Promise((function(a, o) {
						var l = new XMLHttpRequest;
						l.onreadystatechange = function() {
							if (l.readyState === XMLHttpRequest.DONE)
								if (200 === l.status) {
									var e = "" !== l.responseURL && l.responseURL !== t ? l.responseURL : t;
									a({
										html: l.responseText,
										url: i({
											href: e
										}, T(e))
									}), s.update(t, {
										status: "fulfilled",
										target: e
									})
								} else if (l.status) {
								var n = {
									status: l.status,
									statusText: l.statusText
								};
								r(t, n), o(n), s.update(t, {
									status: "rejected"
								})
							}
						}, l.ontimeout = function() {
							var i = new Error("Timeout error [" + e + "]");
							r(t, i), o(i), s.update(t, {
								status: "rejected"
							})
						}, l.onerror = function() {
							var e = new Error("Fetch error");
							r(t, e), o(e), s.update(t, {
								status: "rejected"
							})
						}, l.open("GET", t), l.timeout = e, l.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), l.setRequestHeader("x-barba", "yes"), n.all().forEach((function(t, e) {
							l.setRequestHeader(e, t)
						})), l.send()
					}))
				}

				function M(t) {
					return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
				}

				function F(t, e) {
					return void 0 === e && (e = {}),
						function() {
							var i = arguments,
								r = !1,
								s = new Promise((function(s, n) {
									e.async = function() {
										return r = !0,
											function(t, e) {
												t ? n(t) : s(e)
											}
									};
									var a = t.apply(e, [].slice.call(i));
									r || (M(a) ? a.then(s, n) : s(a))
								}));
							return s
						}
				}
				var L = function(t) {
						function e() {
							var e;
							return (e = t.call(this) || this).logger = new d("@barba/core"), e.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], e.registered = new Map, e.init(), e
						}
						r(e, t);
						var i = e.prototype;
						return i.init = function() {
							var t = this;
							this.registered.clear(), this.all.forEach((function(e) {
								t[e] || (t[e] = function(i, r) {
									t.registered.has(e) || t.registered.set(e, new Set), t.registered.get(e).add({
										ctx: r || {},
										fn: i
									})
								})
							}))
						}, i.do = function(t) {
							var e = arguments,
								i = this;
							if (this.registered.has(t)) {
								var r = Promise.resolve();
								return this.registered.get(t).forEach((function(t) {
									r = r.then((function() {
										return F(t.fn, t.ctx).apply(void 0, [].slice.call(e, 1))
									}))
								})), r.catch((function(e) {
									i.logger.debug("Hook error [" + t + "]"), i.logger.error(e)
								}))
							}
							return Promise.resolve()
						}, i.clear = function() {
							var t = this;
							this.all.forEach((function(e) {
								delete t[e]
							})), this.init()
						}, i.help = function() {
							this.logger.info("Available hooks: " + this.all.join(","));
							var t = [];
							this.registered.forEach((function(e, i) {
								return t.push(i)
							})), this.logger.info("Registered hooks: " + t.join(","))
						}, e
					}(c),
					I = new L,
					O = function() {
						function t(t) {
							if (this.k = void 0, this.O = [], "boolean" == typeof t) this.k = t;
							else {
								var e = Array.isArray(t) ? t : [t];
								this.O = e.map((function(t) {
									return w(t)
								}))
							}
						}
						return t.prototype.checkHref = function(t) {
							if ("boolean" == typeof this.k) return this.k;
							var e = T(t).path;
							return this.O.some((function(t) {
								return null !== t.exec(e)
							}))
						}, t
					}(),
					R = function(t) {
						function e(e) {
							var i;
							return (i = t.call(this, e) || this).T = new Map, i
						}
						r(e, t);
						var s = e.prototype;
						return s.set = function(t, e, i, r, s) {
							return this.T.set(t, {
								action: i,
								request: e,
								status: r,
								target: null != s ? s : t
							}), {
								action: i,
								request: e,
								status: r,
								target: s
							}
						}, s.get = function(t) {
							return this.T.get(t)
						}, s.getRequest = function(t) {
							return this.T.get(t).request
						}, s.getAction = function(t) {
							return this.T.get(t).action
						}, s.getStatus = function(t) {
							return this.T.get(t).status
						}, s.getTarget = function(t) {
							return this.T.get(t).target
						}, s.has = function(t) {
							return !this.checkHref(t) && this.T.has(t)
						}, s.delete = function(t) {
							return this.T.delete(t)
						}, s.update = function(t, e) {
							var r = i({}, this.T.get(t), e);
							return this.T.set(t, r), r
						}, e
					}(O),
					B = function() {
						function t() {
							this.A = new Map
						}
						var e = t.prototype;
						return e.set = function(t, e) {
							return this.A.set(t, e), {
								name: e
							}
						}, e.get = function(t) {
							return this.A.get(t)
						}, e.all = function() {
							return this.A
						}, e.has = function(t) {
							return this.A.has(t)
						}, e.delete = function(t) {
							return this.A.delete(t)
						}, e.clear = function() {
							return this.A.clear()
						}, t
					}(),
					z = function() {
						return !window.history.pushState
					},
					N = function(t) {
						return !t.el || !t.href
					},
					V = function(t) {
						var e = t.event;
						return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
					},
					X = function(t) {
						var e = t.el;
						return e.hasAttribute("target") && "_blank" === e.target
					},
					Y = function(t) {
						var e = t.el;
						return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
					},
					H = function(t) {
						var e = t.el;
						return void 0 !== e.port && E() !== E(e.href)
					},
					j = function(t) {
						var e = t.el;
						return e.getAttribute && "string" == typeof e.getAttribute("download")
					},
					q = function(t) {
						return t.el.hasAttribute(g.prefix + "-" + g.prevent)
					},
					W = function(t) {
						return Boolean(t.el.closest("[" + g.prefix + "-" + g.prevent + '="all"]'))
					},
					G = function(t) {
						var e = t.href;
						return k(e) === k() && E(e) === E()
					},
					$ = function(t) {
						function e(e) {
							var i;
							return (i = t.call(this, e) || this).suite = [], i.tests = new Map, i.init(), i
						}
						r(e, t);
						var i = e.prototype;
						return i.init = function() {
							this.add("pushState", z), this.add("exists", N), this.add("newTab", V), this.add("blank", X), this.add("corsDomain", Y), this.add("corsPort", H), this.add("download", j), this.add("preventSelf", q), this.add("preventAll", W), this.add("sameUrl", G, !1)
						}, i.add = function(t, e, i) {
							void 0 === i && (i = !0), this.tests.set(t, e), i && this.suite.push(t)
						}, i.run = function(t, e, i, r) {
							return this.tests.get(t)({
								el: e,
								event: i,
								href: r
							})
						}, i.checkLink = function(t, e, i) {
							var r = this;
							return this.suite.some((function(s) {
								return r.run(s, t, e, i)
							}))
						}, e
					}(O),
					U = function(t) {
						function e(i, r) {
							var s;
							return void 0 === r && (r = "Barba error"), (s = t.call.apply(t, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, s.label = void 0, s.error = i, s.label = r, Error.captureStackTrace && Error.captureStackTrace(h(s), e), s.name = "BarbaError", s
						}
						return r(e, t), e
					}(l(Error)),
					K = function() {
						function t(t) {
							void 0 === t && (t = []), this.logger = new d("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{
								name: "namespace",
								type: "strings"
							}, {
								name: "custom",
								type: "function"
							}], t && (this.all = this.all.concat(t)), this.update()
						}
						var e = t.prototype;
						return e.add = function(t, e) {
							"rule" === t ? this.j.splice(e.position || 0, 0, e.value) : this.all.push(e), this.update()
						}, e.resolve = function(t, e) {
							var i = this;
							void 0 === e && (e = {});
							var r = e.once ? this.once : this.page;
							r = r.filter(e.self ? function(t) {
								return t.name && "self" === t.name
							} : function(t) {
								return !t.name || "self" !== t.name
							});
							var s = new Map,
								n = r.find((function(r) {
									var n = !0,
										a = {};
									return e.self && "self" === r.name ? (s.set(r, a), !0) : (i.j.reverse().forEach((function(e) {
										n && (n = i.M(r, e, t, a), r.from && r.to && (n = i.M(r, e, t, a, "from") && i.M(r, e, t, a, "to")), r.from && !r.to && (n = i.M(r, e, t, a, "from")), !r.from && r.to && (n = i.M(r, e, t, a, "to")))
									})), s.set(r, a), n)
								})),
								a = s.get(n),
								o = [];
							if (o.push(e.once ? "once" : "page"), e.self && o.push("self"), a) {
								var l, h = [n];
								Object.keys(a).length > 0 && h.push(a), (l = this.logger).info.apply(l, ["Transition found [" + o.join(",") + "]"].concat(h))
							} else this.logger.info("No transition found [" + o.join(",") + "]");
							return n
						}, e.update = function() {
							var t = this;
							this.all = this.all.map((function(e) {
								return t.N(e)
							})).sort((function(t, e) {
								return t.priority - e.priority
							})).reverse().map((function(t) {
								return delete t.priority, t
							})), this.page = this.all.filter((function(t) {
								return void 0 !== t.leave || void 0 !== t.enter
							})), this.once = this.all.filter((function(t) {
								return void 0 !== t.once
							}))
						}, e.M = function(t, e, i, r, s) {
							var n = !0,
								a = !1,
								o = t,
								l = e.name,
								h = l,
								u = l,
								c = l,
								p = s ? o[s] : o,
								d = "to" === s ? i.next : i.current;
							if (s ? p && p[l] : p[l]) {
								switch (e.type) {
									case "strings":
									default:
										var f = Array.isArray(p[h]) ? p[h] : [p[h]];
										d[h] && -1 !== f.indexOf(d[h]) && (a = !0), -1 === f.indexOf(d[h]) && (n = !1);
										break;
									case "object":
										var m = Array.isArray(p[u]) ? p[u] : [p[u]];
										d[u] ? (d[u].name && -1 !== m.indexOf(d[u].name) && (a = !0), -1 === m.indexOf(d[u].name) && (n = !1)) : n = !1;
										break;
									case "function":
										p[c](i) ? a = !0 : n = !1
								}
								a && (s ? (r[s] = r[s] || {}, r[s][l] = o[s][l]) : r[l] = o[l])
							}
							return n
						}, e.S = function(t, e, i) {
							var r = 0;
							return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (r += Math.pow(10, i), t.from && t.from[e] && (r += 1), t.to && t.to[e] && (r += 2)), r
						}, e.N = function(t) {
							var e = this;
							t.priority = 0;
							var i = 0;
							return this.j.forEach((function(r, s) {
								i += e.S(t, r.name, s + 1)
							})), t.priority = i, t
						}, t
					}();

				function J(t, e) {
					try {
						var i = t()
					} catch (t) {
						return e(t)
					}
					return i && i.then ? i.then(void 0, e) : i
				}
				var Z = function() {
						function t(t) {
							void 0 === t && (t = []), this.logger = new d("@barba/core"), this.store = void 0, this.C = !1, this.store = new K(t)
						}
						var i = t.prototype;
						return i.get = function(t, e) {
							return this.store.resolve(t, e)
						}, i.doOnce = function(t) {
							var e = t.data,
								i = t.transition;
							try {
								var r = function() {
										s.C = !1
									},
									s = this,
									n = i || {};
								s.C = !0;
								var a = J((function() {
									return Promise.resolve(s.L("beforeOnce", e, n)).then((function() {
										return Promise.resolve(s.once(e, n)).then((function() {
											return Promise.resolve(s.L("afterOnce", e, n)).then((function() {}))
										}))
									}))
								}), (function(t) {
									s.C = !1, s.logger.debug("Transition error [before/after/once]"), s.logger.error(t)
								}));
								return Promise.resolve(a && a.then ? a.then(r) : r())
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.doPage = function(t) {
							var e = t.data,
								i = t.transition,
								r = t.page,
								s = t.wrapper;
							try {
								var n = function(t) {
										a.C = !1
									},
									a = this,
									o = i || {},
									l = !0 === o.sync || !1;
								a.C = !0;
								var h = J((function() {
									function t() {
										return Promise.resolve(a.L("before", e, o)).then((function() {
											function t(t) {
												return Promise.resolve(a.remove(e)).then((function() {
													return Promise.resolve(a.L("after", e, o)).then((function() {}))
												}))
											}
											var i = function() {
												if (l) return J((function() {
													return Promise.resolve(a.add(e, s)).then((function() {
														return Promise.resolve(a.L("beforeLeave", e, o)).then((function() {
															return Promise.resolve(a.L("beforeEnter", e, o)).then((function() {
																return Promise.resolve(Promise.all([a.leave(e, o), a.enter(e, o)])).then((function() {
																	return Promise.resolve(a.L("afterLeave", e, o)).then((function() {
																		return Promise.resolve(a.L("afterEnter", e, o)).then((function() {}))
																	}))
																}))
															}))
														}))
													}))
												}), (function(t) {
													if (a.H(t)) throw new U(t, "Transition error [sync]")
												}));
												var t = function(t) {
														return J((function() {
															var t = function() {
																if (!1 !== i) return Promise.resolve(a.add(e, s)).then((function() {
																	return Promise.resolve(a.L("beforeEnter", e, o)).then((function() {
																		return Promise.resolve(a.enter(e, o, i)).then((function() {
																			return Promise.resolve(a.L("afterEnter", e, o)).then((function() {}))
																		}))
																	}))
																}))
															}();
															if (t && t.then) return t.then((function() {}))
														}), (function(t) {
															if (a.H(t)) throw new U(t, "Transition error [before/after/enter]")
														}))
													},
													i = !1,
													n = J((function() {
														return Promise.resolve(a.L("beforeLeave", e, o)).then((function() {
															return Promise.resolve(Promise.all([a.leave(e, o), _(r, e)]).then((function(t) {
																return t[0]
															}))).then((function(t) {
																return i = t, Promise.resolve(a.L("afterLeave", e, o)).then((function() {}))
															}))
														}))
													}), (function(t) {
														if (a.H(t)) throw new U(t, "Transition error [before/after/leave]")
													}));
												return n && n.then ? n.then(t) : t()
											}();
											return i && i.then ? i.then(t) : t()
										}))
									}
									var i = function() {
										if (l) return Promise.resolve(_(r, e)).then((function() {}))
									}();
									return i && i.then ? i.then(t) : t()
								}), (function(t) {
									if (a.C = !1, t.name && "BarbaError" === t.name) throw a.logger.debug(t.label), a.logger.error(t.error), t;
									throw a.logger.debug("Transition error [page]"), a.logger.error(t), t
								}));
								return Promise.resolve(h && h.then ? h.then(n) : n())
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.once = function(t, e) {
							try {
								return Promise.resolve(I.do("once", t, e)).then((function() {
									return e.once ? F(e.once, e)(t) : Promise.resolve()
								}))
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.leave = function(t, e) {
							try {
								return Promise.resolve(I.do("leave", t, e)).then((function() {
									return e.leave ? F(e.leave, e)(t) : Promise.resolve()
								}))
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.enter = function(t, e, i) {
							try {
								return Promise.resolve(I.do("enter", t, e)).then((function() {
									return e.enter ? F(e.enter, e)(t, i) : Promise.resolve()
								}))
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.add = function(t, e) {
							try {
								return y.addContainer(t.next.container, e), I.do("nextAdded", t), Promise.resolve()
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.remove = function(t) {
							try {
								return y.removeContainer(t.current.container), I.do("currentRemoved", t), Promise.resolve()
							} catch (t) {
								return Promise.reject(t)
							}
						}, i.H = function(t) {
							return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
						}, i.L = function(t, e, i) {
							try {
								return Promise.resolve(I.do(t, e, i)).then((function() {
									return i[t] ? F(i[t], i)(e) : Promise.resolve()
								}))
							} catch (t) {
								return Promise.reject(t)
							}
						}, e(t, [{
							key: "isRunning",
							get: function() {
								return this.C
							},
							set: function(t) {
								this.C = t
							}
						}, {
							key: "hasOnce",
							get: function() {
								return this.store.once.length > 0
							}
						}, {
							key: "hasSelf",
							get: function() {
								return this.store.all.some((function(t) {
									return "self" === t.name
								}))
							}
						}, {
							key: "shouldWait",
							get: function() {
								return this.store.all.some((function(t) {
									return t.to && !t.to.route || t.sync
								}))
							}
						}]), t
					}(),
					Q = function() {
						function t(t) {
							var e = this;
							this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function(t) {
								e.byNamespace.set(t.namespace, t)
							})), this.names.forEach((function(t) {
								I[t](e._(t))
							})))
						}
						return t.prototype._ = function(t) {
							var e = this;
							return function(i) {
								var r = t.match(/enter/i) ? i.next : i.current,
									s = e.byNamespace.get(r.namespace);
								return s && s[t] ? F(s[t], s)(i) : Promise.resolve()
							}
						}, t
					}();
				Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
					var e = this;
					do {
						if (e.matches(t)) return e;
						e = e.parentElement || e.parentNode
					} while (null !== e && 1 === e.nodeType);
					return null
				});
				var tt = {
						container: null,
						html: "",
						namespace: "",
						url: {
							hash: "",
							href: "",
							path: "",
							port: null,
							query: {}
						}
					},
					et = function() {
						function t() {
							this.version = "2.10.3", this.schemaPage = tt, this.Logger = d, this.logger = new d("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = I, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = y, this.helpers = x, this.history = b, this.request = A, this.url = P, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0
						}
						var r = t.prototype;
						return r.use = function(t, e) {
							var i = this.plugins;
							i.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e), i.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
						}, r.init = function(t) {
							var e = void 0 === t ? {} : t,
								r = e.transitions,
								s = void 0 === r ? [] : r,
								n = e.views,
								a = void 0 === n ? [] : n,
								o = e.schema,
								l = void 0 === o ? g : o,
								h = e.requestError,
								u = e.timeout,
								c = void 0 === u ? 2e3 : u,
								p = e.cacheIgnore,
								f = void 0 !== p && p,
								m = e.cacheFirstPage,
								v = void 0 !== m && m,
								y = e.prefetchIgnore,
								D = void 0 !== y && y,
								b = e.preventRunning,
								_ = void 0 !== b && b,
								w = e.prevent,
								x = void 0 === w ? null : w,
								C = e.debug,
								E = e.logLevel;
							if (d.setLevel(!0 === (void 0 !== C && C) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(l).forEach((function(t) {
									g[t] && (g[t] = l[t])
								})), this.B = h, this.timeout = c, this.cacheIgnore = f, this.cacheFirstPage = v, this.prefetchIgnore = D, this.preventRunning = _, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
							this.I();
							var T = this.data.current;
							if (!T.container) throw new Error("[@barba/core] No Barba container found");
							if (this.cache = new R(f), this.headers = new B, this.prevent = new $(D), this.transitions = new Z(s), this.views = new Q(a), null !== x) {
								if ("function" != typeof x) throw new Error("[@barba/core] Prevent should be a function");
								this.prevent.add("preventCustom", x)
							}
							this.history.init(T.url.href, T.namespace), v && this.cache.set(T.url.href, Promise.resolve({
								html: T.html,
								url: T.url
							}), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach((function(t) {
								return t.init()
							}));
							var S = this.data;
							S.trigger = "barba", S.next = S.current, S.current = i({}, this.schemaPage), this.hooks.do("ready", S), this.once(S), this.I()
						}, r.destroy = function() {
							this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = []
						}, r.force = function(t) {
							window.location.assign(t)
						}, r.go = function(t, e, i) {
							var r;
							if (void 0 === e && (e = "barba"), this.F = null, this.transitions.isRunning) this.force(t);
							else if (!(r = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(t, !0) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return e = this.history.change(this.cache.has(t) ? this.cache.get(t).target : t, e, i), i && (i.stopPropagation(), i.preventDefault()), this.page(t, e, null != i ? i : void 0, r)
						}, r.once = function(t) {
							try {
								var e = this;
								return Promise.resolve(e.hooks.do("beforeEnter", t)).then((function() {
									function i() {
										return Promise.resolve(e.hooks.do("afterEnter", t)).then((function() {}))
									}
									var r = function() {
										if (e.transitions.hasOnce) {
											var i = e.transitions.get(t, {
												once: !0
											});
											return Promise.resolve(e.transitions.doOnce({
												transition: i,
												data: t
											})).then((function() {}))
										}
									}();
									return r && r.then ? r.then(i) : i()
								}))
							} catch (t) {
								return Promise.reject(t)
							}
						}, r.page = function(t, e, r, s) {
							try {
								var n, a = function() {
										var t = o.data;
										return Promise.resolve(o.hooks.do("page", t)).then((function() {
											var e = function(e, i) {
												try {
													var r = (a = o.transitions.get(t, {
														once: !1,
														self: s
													}), Promise.resolve(o.transitions.doPage({
														data: t,
														page: n,
														transition: a,
														wrapper: o.q
													})).then((function() {
														o.I()
													})))
												} catch (t) {
													return i()
												}
												var a;
												return r && r.then ? r.then(void 0, i) : r
											}(0, (function() {
												0 === d.getLevel() && o.force(t.next.url.href)
											}));
											if (e && e.then) return e.then((function() {}))
										}))
									},
									o = this;
								if (o.data.next.url = i({
										href: t
									}, o.url.parse(t)), o.data.trigger = e, o.data.event = r, o.cache.has(t)) n = o.cache.update(t, {
									action: "click"
								}).request;
								else {
									var l = o.request(t, o.timeout, o.onRequestError.bind(o, e), o.cache, o.headers);
									l.then((function(i) {
										i.url.href !== t && o.history.add(i.url.href, e, "replace")
									})), n = o.cache.set(t, l, "click", "pending").request
								}
								var h = function() {
									if (o.transitions.shouldWait) return Promise.resolve(_(n, o.data)).then((function() {}))
								}();
								return Promise.resolve(h && h.then ? h.then(a) : a())
							} catch (t) {
								return Promise.reject(t)
							}
						}, r.onRequestError = function(t) {
							this.transitions.isRunning = !1;
							var e = [].slice.call(arguments, 1),
								i = e[0],
								r = e[1],
								s = this.cache.getAction(i);
							return this.cache.delete(i), this.B && !1 === this.B(t, s, i, r) || "click" === s && this.force(i), !1
						}, r.prefetch = function(t) {
							var e = this;
							t = this.url.getAbsoluteHref(t), this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch((function(t) {
								e.logger.error(t)
							})), "prefetch", "pending")
						}, r.G = function() {
							!0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X)
						}, r.J = function() {
							!0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X)
						}, r.U = function(t) {
							var e = this,
								i = this.W(t);
							if (i) {
								var r = this.url.getAbsoluteHref(this.dom.getHref(i));
								this.prevent.checkHref(r) || this.cache.has(r) || this.cache.set(r, this.request(r, this.timeout, this.onRequestError.bind(this, i), this.cache, this.headers).catch((function(t) {
									e.logger.error(t)
								})), "enter", "pending")
							}
						}, r.$ = function(t) {
							var e = this.W(t);
							if (e) {
								if (this.transitions.isRunning && this.preventRunning) return t.preventDefault(), void t.stopPropagation();
								this.F = t, this.go(this.dom.getHref(e), e, t)
							}
						}, r.X = function(t) {
							this.go(this.url.getHref(), "popstate", t)
						}, r.W = function(t) {
							for (var e = t.target; e && !this.dom.getHref(e);) e = e.parentNode;
							if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e
						}, r.I = function() {
							var t = this.url.getHref(),
								e = {
									container: this.dom.getContainer(),
									html: this.dom.getHtml(),
									namespace: this.dom.getNamespace(),
									url: i({
										href: t
									}, this.url.parse(t))
								};
							this.D = {
								current: e,
								event: void 0,
								next: i({}, this.schemaPage),
								trigger: void 0
							}, this.hooks.do("reset", this.data)
						}, e(t, [{
							key: "data",
							get: function() {
								return this.D
							}
						}, {
							key: "wrapper",
							get: function() {
								return this.q
							}
						}]), t
					}();
				return new et
			}()
		},
		71: function(t, e, i) {
			"use strict";
			i.d(e, {
				A: function() {
					return s
				}
			});
			var r = i(880);
			class s {
				constructor(t = ".js-accordion", e = {}) {
					this.defaults = Object.assign({}, {
						openingEase: "power3.out",
						closingEase: "power2.out",
						openDuration: .5,
						closeDuration: .3,
						openDelay: 0,
						closeDelay: 0,
						onOpenStart: () => {},
						onCloseStart: () => {},
						onOpenComplete: () => {},
						onCloseComplete: () => {}
					}, e), this.openingEase = this.defaults.openingEase, this.closingEase = this.defaults.closingEase, this.openDuration = this.defaults.openDuration, this.closeDuration = this.defaults.closeDuration, this.openDelay = this.defaults.openDelay, this.closeDelay = this.defaults.closeDelay, this.onOpenStart = this.defaults.onOpenStart, this.onCloseStart = this.defaults.onCloseStart, this.onOpenComplete = this.defaults.onOpenComplete, this.onCloseComplete = this.defaults.onCloseComplete, this.accordion = document.querySelectorAll(t), this.accordion.length > 0 && this.accordion.forEach((t => {
						const e = t.classList.contains("is-mono");
						this.initAccordion(t, e)
					}))
				}
				initAccordion(t, e) {
					if (t.classList.contains("is-initialed")) return;
					t.classList.add("is-initialed");
					t.querySelectorAll(".js-accordion-single").forEach((i => {
						this.accordionController(i, t, e)
					}))
				}
				accordionController(t, e, i) {
					let s = t.querySelector(".js-accordion-header");
					if (null == s && (s = t), null == s) throw new Error("'js-accordion-header' missing!");
					const n = t.querySelector(".js-accordion-panel");
					if (null == n) throw new Error("'js-accordion-panel' missing!");
					s.classList.contains("is-opened") || r.Ay.set(n, {
						height: 0
					}), s.addEventListener("click", (t => {
						t.preventDefault(), t.currentTarget.classList.contains("is-opened") ? this.closeAccordion(t.currentTarget, n, e) : this.openAccordion(t.currentTarget, n, e, i)
					}))
				}
				closeAccordion(t, e, i) {
					t.classList.remove("is-opened"), r.Ay.fromTo(e, {
						height: e.offsetHeight
					}, {
						duration: this.closeDuration,
						height: 0,
						delay: this.closeDelay,
						ease: this.closingEase,
						onStart: () => {
							this.onCloseStart(t, e)
						},
						onComplete: () => {
							this.onCloseComplete(t, e)
						}
					}), t.parentNode.classList.contains("js-accordion-single") && t.parentNode.classList.remove("is-opened"), this.haveActive(i)
				}
				openAccordion(t, e, i, s) {
					if (s) {
						const s = i.querySelectorAll(".js-accordion-single");
						for (let n = 0; n < s.length; n++) {
							const a = s[n].querySelector(".js-accordion-header"),
								o = s[n].querySelector(".js-accordion-panel");
							t !== a && (a.classList.remove("is-opened"), t.parentNode.classList.contains("js-accordion-single") && a.parentNode.classList.remove("is-opened"), "0px" !== o.style?.height && r.Ay.to(o, {
								duration: this.closeDuration,
								height: 0,
								delay: this.closeDelay,
								ease: this.closingEase,
								onStart: () => {
									this.onCloseStart(t, e)
								},
								onComplete: () => {
									this.haveActive(i), this.onCloseComplete(t, e)
								}
							}))
						}
					}
					t.classList.add("is-opened"), t.parentNode.classList.contains("js-accordion-single") && t.parentNode.classList.add("is-opened");
					let n = 0;
					r.Ay.set(e, {
						height: "auto",
						onComplete: () => {
							n = e.clientHeight, r.Ay.set(e, {
								height: 0,
								onComplete: () => {
									r.Ay.to(e, {
										duration: this.openDuration,
										height: n,
										ease: this.openingEase,
										delay: this.openDelay,
										onStart: () => {
											this.onOpenStart(t, e)
										},
										onComplete: () => {
											e.style.height = "auto", this.onOpenComplete(t, e)
										}
									})
								}
							})
						}
					})
				}
				haveActive(t) {
					t.querySelectorAll(".is-opened").length > 0 ? t.classList.add("have-active") : t.classList.remove("have-active")
				}
			}
		},
		929: function(t, e, i) {
			"use strict";
			i.d(e, {
				s: function() {
					return St
				}
			});
			var r = i(335);

			function s(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}
			var n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, b, _, w, x, C, E, T, S = 0,
				k = function() {
					return "undefined" != typeof window
				},
				P = function() {
					return n || k() && (n = window.gsap) && n.registerPlugin && n
				},
				A = function(t) {
					return "function" == typeof t
				},
				M = function(t) {
					return "object" == typeof t
				},
				F = function(t) {
					return void 0 === t
				},
				L = function() {
					return !1
				},
				I = "transform",
				O = "transformOrigin",
				R = function(t) {
					return Math.round(1e4 * t) / 1e4
				},
				B = Array.isArray,
				z = function(t, e) {
					var i = o.createElementNS ? o.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : o.createElement(t);
					return i.style ? i : o.createElement(t)
				},
				N = 180 / Math.PI,
				V = 1e20,
				X = new r.cA,
				Y = Date.now || function() {
					return (new Date).getTime()
				},
				H = [],
				j = {},
				q = 0,
				W = /^(?:a|input|textarea|button|select)$/i,
				G = 0,
				$ = {},
				U = {},
				K = function(t, e) {
					var i, r = {};
					for (i in t) r[i] = e ? t[i] * e : t[i];
					return r
				},
				J = function t(e, i) {
					for (var r, s = e.length; s--;) i ? e[s].style.touchAction = i : e[s].style.removeProperty("touch-action"), (r = e[s].children) && r.length && t(r, i)
				},
				Z = function() {
					return H.forEach((function(t) {
						return t()
					}))
				},
				Q = function() {
					return !H.length && n.ticker.remove(Z)
				},
				tt = function(t) {
					for (var e = H.length; e--;) H[e] === t && H.splice(e, 1);
					n.to(Q, {
						overwrite: !0,
						delay: 15,
						duration: 0,
						onComplete: Q,
						data: "_draggable"
					})
				},
				et = function(t, e, i, r) {
					if (t.addEventListener) {
						var s = v[e];
						r = r || (m ? {
							passive: !1
						} : null), t.addEventListener(s || e, i, r), s && e !== s && t.addEventListener(e, i, r)
					}
				},
				it = function(t, e, i, r) {
					if (t.removeEventListener) {
						var s = v[e];
						t.removeEventListener(s || e, i, r), s && e !== s && t.removeEventListener(e, i, r)
					}
				},
				rt = function(t) {
					t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
				},
				st = function t(e) {
					y = e.touches && S < e.touches.length, it(e.target, "touchend", t)
				},
				nt = function(t) {
					y = t.touches && S < t.touches.length, et(t.target, "touchend", st)
				},
				at = function(t) {
					return a.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
				},
				ot = function(t) {
					return a.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
				},
				lt = function t(e, i) {
					et(e, "scroll", i), ut(e.parentNode) || t(e.parentNode, i)
				},
				ht = function t(e, i) {
					it(e, "scroll", i), ut(e.parentNode) || t(e.parentNode, i)
				},
				ut = function(t) {
					return !(t && t !== l && 9 !== t.nodeType && t !== o.body && t !== a && t.nodeType && t.parentNode)
				},
				ct = function(t, e) {
					var i = "x" === e ? "Width" : "Height",
						r = "scroll" + i,
						s = "client" + i;
					return Math.max(0, ut(t) ? Math.max(l[r], h[r]) - (a["inner" + i] || l[s] || h[s]) : t[r] - t[s])
				},
				pt = function t(e, i) {
					var r = ct(e, "x"),
						s = ct(e, "y");
					ut(e) ? e = U : t(e.parentNode, i), e._gsMaxScrollX = r, e._gsMaxScrollY = s, i || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
				},
				dt = function(t, e, i) {
					var r = t.style;
					r && (F(r[e]) && (e = d(e, t) || e), null == i ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = i)
				},
				ft = function(t) {
					return a.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
				},
				mt = {},
				gt = function(t) {
					if (t === a) return mt.left = mt.top = 0, mt.width = mt.right = l.clientWidth || t.innerWidth || h.clientWidth || 0, mt.height = mt.bottom = (t.innerHeight || 0) - 20 < l.clientHeight ? l.clientHeight : t.innerHeight || h.clientHeight || 0, mt;
					var e = t.ownerDocument || o,
						i = F(t.pageX) ? t.nodeType || F(t.left) || F(t.top) ? f(t)[0].getBoundingClientRect() : t : {
							left: t.pageX - ot(e),
							top: t.pageY - at(e),
							right: t.pageX - ot(e) + 1,
							bottom: t.pageY - at(e) + 1
						};
					return F(i.right) && !F(i.width) ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : F(i.width) && (i = {
						width: i.right - i.left,
						height: i.bottom - i.top,
						right: i.right,
						left: i.left,
						bottom: i.bottom,
						top: i.top
					}), i
				},
				vt = function(t, e, i) {
					var r, s = t.vars,
						n = s[i],
						a = t._listeners[e];
					return A(n) && (r = n.apply(s.callbackScope || t, s[i + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (r = !1), r
				},
				yt = function(t, e) {
					var i, r, s, n = f(t)[0];
					return n.nodeType || n === a ? bt(n, e) : F(t.left) ? {
						left: r = t.min || t.minX || t.minRotation || 0,
						top: i = t.min || t.minY || 0,
						width: (t.max || t.maxX || t.maxRotation || 0) - r,
						height: (t.max || t.maxY || 0) - i
					} : (s = {
						x: 0,
						y: 0
					}, {
						left: t.left - s.x,
						top: t.top - s.y,
						width: t.width,
						height: t.height
					})
				},
				Dt = {},
				bt = function(t, e) {
					e = f(e)[0];
					var i, s, n, l, h, u, c, p, d, m, g, v, y, D = t.getBBox && t.ownerSVGElement,
						b = t.ownerDocument || o;
					if (t === a) n = at(b), s = (i = ot(b)) + (b.documentElement.clientWidth || t.innerWidth || b.body.clientWidth || 0), l = n + ((t.innerHeight || 0) - 20 < b.documentElement.clientHeight ? b.documentElement.clientHeight : t.innerHeight || b.body.clientHeight || 0);
					else {
						if (e === a || F(e)) return t.getBoundingClientRect();
						i = n = 0, D ? (g = (m = t.getBBox()).width, v = m.height) : (t.viewBox && (m = t.viewBox.baseVal) && (i = m.x || 0, n = m.y || 0, g = m.width, v = m.height), g || (m = "border-box" === (y = ft(t)).boxSizing, g = (parseFloat(y.width) || t.clientWidth || 0) + (m ? 0 : parseFloat(y.borderLeftWidth) + parseFloat(y.borderRightWidth)), v = (parseFloat(y.height) || t.clientHeight || 0) + (m ? 0 : parseFloat(y.borderTopWidth) + parseFloat(y.borderBottomWidth)))), s = g, l = v
					}
					return t === e ? {
						left: i,
						top: n,
						width: s - i,
						height: l - n
					} : (u = (h = (0, r.hK)(e, !0).multiply((0, r.hK)(t))).apply({
						x: i,
						y: n
					}), c = h.apply({
						x: s,
						y: n
					}), p = h.apply({
						x: s,
						y: l
					}), d = h.apply({
						x: i,
						y: l
					}), {
						left: i = Math.min(u.x, c.x, p.x, d.x),
						top: n = Math.min(u.y, c.y, p.y, d.y),
						width: Math.max(u.x, c.x, p.x, d.x) - i,
						height: Math.max(u.y, c.y, p.y, d.y) - n
					})
				},
				_t = function(t, e, i, r, s, n) {
					var a, o, l, h = {};
					if (e)
						if (1 !== s && e instanceof Array) {
							if (h.end = a = [], l = e.length, M(e[0]))
								for (o = 0; o < l; o++) a[o] = K(e[o], s);
							else
								for (o = 0; o < l; o++) a[o] = e[o] * s;
							i += 1.1, r -= 1.1
						} else A(e) ? h.end = function(i) {
							var r, n, a = e.call(t, i);
							if (1 !== s)
								if (M(a)) {
									for (n in r = {}, a) r[n] = a[n] * s;
									a = r
								} else a *= s;
							return a
						} : h.end = e;
					return (i || 0 === i) && (h.max = i), (r || 0 === r) && (h.min = r), n && (h.velocity = 0), h
				},
				wt = function t(e) {
					var i;
					return !(!e || !e.getAttribute || e === h) && (!("true" !== (i = e.getAttribute("data-clickable")) && ("false" === i || !W.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
				},
				xt = function(t, e) {
					for (var i, r = t.length; r--;)(i = t[r]).ondragstart = i.onselectstart = e ? null : L, n.set(i, {
						lazy: !0,
						userSelect: e ? "text" : "none"
					})
				},
				Ct = function t(e) {
					return "fixed" === ft(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
				},
				Et = function(t, e) {
					t = n.utils.toArray(t)[0], e = e || {};
					var i, r, s, a, o, l, h = document.createElement("div"),
						u = h.style,
						c = t.firstChild,
						p = 0,
						d = 0,
						f = t.scrollTop,
						m = t.scrollLeft,
						g = t.scrollWidth,
						v = t.scrollHeight,
						y = 0,
						D = 0,
						b = 0;
					E && !1 !== e.force3D ? (o = "translate3d(", l = "px,0px)") : I && (o = "translate(", l = "px)"), this.scrollTop = function(t, e) {
						if (!arguments.length) return -this.top();
						this.top(-t, e)
					}, this.scrollLeft = function(t, e) {
						if (!arguments.length) return -this.left();
						this.left(-t, e)
					}, this.left = function(i, r) {
						if (!arguments.length) return -(t.scrollLeft + d);
						var s = t.scrollLeft - m,
							a = d;
						if ((s > 2 || s < -2) && !r) return m = t.scrollLeft, n.killTweensOf(this, {
							left: 1,
							scrollLeft: 1
						}), this.left(-m), void(e.onKill && e.onKill());
						(i = -i) < 0 ? (d = i - .5 | 0, i = 0) : i > D ? (d = i - D | 0, i = D) : d = 0, (d || a) && (this._skip || (u[I] = o + -d + "px," + -p + l), d + y >= 0 && (u.paddingRight = d + y + "px")), t.scrollLeft = 0 | i, m = t.scrollLeft
					}, this.top = function(i, r) {
						if (!arguments.length) return -(t.scrollTop + p);
						var s = t.scrollTop - f,
							a = p;
						if ((s > 2 || s < -2) && !r) return f = t.scrollTop, n.killTweensOf(this, {
							top: 1,
							scrollTop: 1
						}), this.top(-f), void(e.onKill && e.onKill());
						(i = -i) < 0 ? (p = i - .5 | 0, i = 0) : i > b ? (p = i - b | 0, i = b) : p = 0, (p || a) && (this._skip || (u[I] = o + -d + "px," + -p + l)), t.scrollTop = 0 | i, f = t.scrollTop
					}, this.maxScrollTop = function() {
						return b
					}, this.maxScrollLeft = function() {
						return D
					}, this.disable = function() {
						for (c = h.firstChild; c;) a = c.nextSibling, t.appendChild(c), c = a;
						t === h.parentNode && t.removeChild(h)
					}, this.enable = function() {
						if ((c = t.firstChild) !== h) {
							for (; c;) a = c.nextSibling, h.appendChild(c), c = a;
							t.appendChild(h), this.calibrate()
						}
					}, this.calibrate = function(e) {
						var n, a, o, l = t.clientWidth === i;
						f = t.scrollTop, m = t.scrollLeft, l && t.clientHeight === r && h.offsetHeight === s && g === t.scrollWidth && v === t.scrollHeight && !e || ((p || d) && (a = this.left(), o = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), n = ft(t), l && !e || (u.display = "block", u.width = "auto", u.paddingRight = "0px", (y = Math.max(0, t.scrollWidth - t.clientWidth)) && (y += parseFloat(n.paddingLeft) + (T ? parseFloat(n.paddingRight) : 0))), u.display = "inline-block", u.position = "relative", u.overflow = "visible", u.verticalAlign = "top", u.boxSizing = "content-box", u.width = "100%", u.paddingRight = y + "px", T && (u.paddingBottom = n.paddingBottom), i = t.clientWidth, r = t.clientHeight, g = t.scrollWidth, v = t.scrollHeight, D = t.scrollWidth - i, b = t.scrollHeight - r, s = h.offsetHeight, u.display = "block", (a || o) && (this.left(a), this.top(o)))
					}, this.content = h, this.element = t, this._skip = !1, this.enable()
				},
				Tt = function(t) {
					if (k() && document.body) {
						var e = window && window.navigator;
						a = window, o = document, l = o.documentElement, h = o.body, u = z("div"), w = !!window.PointerEvent, (c = z("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", _ = "grab" === c.style.cursor ? "grab" : "move", D = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), g = "ontouchstart" in l && "orientation" in a || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), r = z("div"), s = z("div"), y = s.style, S = h, y.display = "inline-block", y.position = "relative", r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(s), S.appendChild(r), i = s.offsetHeight + 18 > r.scrollHeight, S.removeChild(r), T = i, v = function(t) {
							for (var e = t.split(","), i = (("onpointerdown" in u ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in u ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), r = {}, s = 4; --s > -1;) r[e[s]] = i[s], r[i[s]] = e[s];
							try {
								l.addEventListener("test", null, Object.defineProperty({}, "passive", {
									get: function() {
										m = 1
									}
								}))
							} catch (t) {}
							return r
						}("touchstart,touchmove,touchend,touchcancel"), et(o, "touchcancel", L), et(a, "touchmove", L), h && h.addEventListener("touchstart", L), et(o, "contextmenu", (function() {
							for (var t in j) j[t].isPressed && j[t].endDrag()
						})), n = p = P()
					}
					var i, r, s, y, S;
					n ? (b = n.plugins.inertia, x = n.core.context || function() {}, d = n.utils.checkPrefix, I = d(I), O = d(O), f = n.utils.toArray, C = n.core.getStyleSaver, E = !!d("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
				},
				St = function(t) {
					var e, i;

					function h(e, i) {
						var u;
						u = t.call(this) || this, p || Tt(1), e = f(e)[0], u.styles = C && C(e, "transform,left,top"), b || (b = n.plugins.inertia), u.vars = i = K(i || {}), u.target = e, u.x = u.y = u.rotation = 0, u.dragResistance = parseFloat(i.dragResistance) || 0, u.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0, u.lockAxis = i.lockAxis, u.autoScroll = i.autoScroll || 0, u.lockedAxis = null, u.allowEventDefault = !!i.allowEventDefault, n.getProperty(e, "x");
						var d, m, E, T, k, P, L, I, z, W, Q, st, ct, mt, bt, St, kt, Pt, At, Mt, Ft, Lt, It, Ot, Rt, Bt, zt, Nt, Vt, Xt, Yt, Ht, jt, qt = (i.type || "x,y").toLowerCase(),
							Wt = ~qt.indexOf("x") || ~qt.indexOf("y"),
							Gt = -1 !== qt.indexOf("rotation"),
							$t = Gt ? "rotation" : Wt ? "x" : "left",
							Ut = Wt ? "y" : "top",
							Kt = !(!~qt.indexOf("x") && !~qt.indexOf("left") && "scroll" !== qt),
							Jt = !(!~qt.indexOf("y") && !~qt.indexOf("top") && "scroll" !== qt),
							Zt = i.minimumMovement || 2,
							Qt = s(u),
							te = f(i.trigger || i.handle || e),
							ee = {},
							ie = 0,
							re = !1,
							se = i.autoScrollMarginTop || 40,
							ne = i.autoScrollMarginRight || 40,
							ae = i.autoScrollMarginBottom || 40,
							oe = i.autoScrollMarginLeft || 40,
							le = i.clickableTest || wt,
							he = 0,
							ue = e._gsap || n.core.getCache(e),
							ce = Ct(e),
							pe = function(t, i) {
								return parseFloat(ue.get(e, t, i))
							},
							de = e.ownerDocument || o,
							fe = function(t) {
								return rt(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
							},
							me = function t(i) {
								if (Qt.autoScroll && Qt.isDragging && (re || kt)) {
									var r, s, n, o, h, u, c, p, d = e,
										f = 15 * Qt.autoScroll;
									for (re = !1, U.scrollTop = null != a.pageYOffset ? a.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop, U.scrollLeft = null != a.pageXOffset ? a.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft, o = Qt.pointerX - U.scrollLeft, h = Qt.pointerY - U.scrollTop; d && !s;) r = (s = ut(d.parentNode)) ? U : d.parentNode, n = s ? {
										bottom: Math.max(l.clientHeight, a.innerHeight || 0),
										right: Math.max(l.clientWidth, a.innerWidth || 0),
										left: 0,
										top: 0
									} : r.getBoundingClientRect(), u = c = 0, Jt && ((p = r._gsMaxScrollY - r.scrollTop) < 0 ? c = p : h > n.bottom - ae && p ? (re = !0, c = Math.min(p, f * (1 - Math.max(0, n.bottom - h) / ae) | 0)) : h < n.top + se && r.scrollTop && (re = !0, c = -Math.min(r.scrollTop, f * (1 - Math.max(0, h - n.top) / se) | 0)), c && (r.scrollTop += c)), Kt && ((p = r._gsMaxScrollX - r.scrollLeft) < 0 ? u = p : o > n.right - ne && p ? (re = !0, u = Math.min(p, f * (1 - Math.max(0, n.right - o) / ne) | 0)) : o < n.left + oe && r.scrollLeft && (re = !0, u = -Math.min(r.scrollLeft, f * (1 - Math.max(0, o - n.left) / oe) | 0)), u && (r.scrollLeft += u)), s && (u || c) && (a.scrollTo(r.scrollLeft, r.scrollTop), ke(Qt.pointerX + u, Qt.pointerY + c)), d = r
								}
								if (kt) {
									var g = Qt.x,
										v = Qt.y;
									Gt ? (Qt.deltaX = g - parseFloat(ue.rotation), Qt.rotation = g, ue.rotation = g + "deg", ue.renderTransform(1, ue)) : m ? (Jt && (Qt.deltaY = v - m.top(), m.top(v)), Kt && (Qt.deltaX = g - m.left(), m.left(g))) : Wt ? (Jt && (Qt.deltaY = v - parseFloat(ue.y), ue.y = v + "px"), Kt && (Qt.deltaX = g - parseFloat(ue.x), ue.x = g + "px"), ue.renderTransform(1, ue)) : (Jt && (Qt.deltaY = v - parseFloat(e.style.top || 0), e.style.top = v + "px"), Kt && (Qt.deltaX = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !I || i || Nt || (Nt = !0, !1 === vt(Qt, "drag", "onDrag") && (Kt && (Qt.x -= Qt.deltaX), Jt && (Qt.y -= Qt.deltaY), t(!0)), Nt = !1)
								}
								kt = !1
							},
							ge = function(t, i) {
								var r, s, a = Qt.x,
									o = Qt.y;
								e._gsap || (ue = n.core.getCache(e)), ue.uncache && n.getProperty(e, "x"), Wt ? (Qt.x = parseFloat(ue.x), Qt.y = parseFloat(ue.y)) : Gt ? Qt.x = Qt.rotation = parseFloat(ue.rotation) : m ? (Qt.y = m.top(), Qt.x = m.left()) : (Qt.y = parseFloat(e.style.top || (s = ft(e)) && s.top) || 0, Qt.x = parseFloat(e.style.left || (s || {}).left) || 0), (At || Mt || Ft) && !i && (Qt.isDragging || Qt.isThrowing) && (Ft && ($.x = Qt.x, $.y = Qt.y, (r = Ft($)).x !== Qt.x && (Qt.x = r.x, kt = !0), r.y !== Qt.y && (Qt.y = r.y, kt = !0)), At && (r = At(Qt.x)) !== Qt.x && (Qt.x = r, Gt && (Qt.rotation = r), kt = !0), Mt && ((r = Mt(Qt.y)) !== Qt.y && (Qt.y = r), kt = !0)), kt && me(!0), t || (Qt.deltaX = Qt.x - a, Qt.deltaY = Qt.y - o, vt(Qt, "throwupdate", "onThrowUpdate"))
							},
							ve = function(t, e, i, r) {
								return null == e && (e = -V), null == i && (i = V), A(t) ? function(s) {
									var n = Qt.isPressed ? 1 - Qt.edgeResistance : 1;
									return t.call(Qt, (s > i ? i + (s - i) * n : s < e ? e + (s - e) * n : s) * r) * r
								} : B(t) ? function(r) {
									for (var s, n, a = t.length, o = 0, l = V; --a > -1;)(n = (s = t[a]) - r) < 0 && (n = -n), n < l && s >= e && s <= i && (o = a, l = n);
									return t[o]
								} : isNaN(t) ? function(t) {
									return t
								} : function() {
									return t * r
								}
							},
							ye = function() {
								var t, r, s, n;
								L = !1, m ? (m.calibrate(), Qt.minX = Q = -m.maxScrollLeft(), Qt.minY = ct = -m.maxScrollTop(), Qt.maxX = W = Qt.maxY = st = 0, L = !0) : i.bounds && (t = yt(i.bounds, e.parentNode), Gt ? (Qt.minX = Q = t.left, Qt.maxX = W = t.left + t.width, Qt.minY = ct = Qt.maxY = st = 0) : F(i.bounds.maxX) && F(i.bounds.maxY) ? (r = yt(e, e.parentNode), Qt.minX = Q = Math.round(pe($t, "px") + t.left - r.left), Qt.minY = ct = Math.round(pe(Ut, "px") + t.top - r.top), Qt.maxX = W = Math.round(Q + (t.width - r.width)), Qt.maxY = st = Math.round(ct + (t.height - r.height))) : (t = i.bounds, Qt.minX = Q = t.minX, Qt.minY = ct = t.minY, Qt.maxX = W = t.maxX, Qt.maxY = st = t.maxY), Q > W && (Qt.minX = W, Qt.maxX = W = Q, Q = Qt.minX), ct > st && (Qt.minY = st, Qt.maxY = st = ct, ct = Qt.minY), Gt && (Qt.minRotation = Q, Qt.maxRotation = W), L = !0), i.liveSnap && (s = !0 === i.liveSnap ? i.snap || {} : i.liveSnap, n = B(s) || A(s), Gt ? (At = ve(n ? s : s.rotation, Q, W, 1), Mt = null) : s.points ? Ft = function(t, e, i, r, s, n, a) {
									return n = n && n < V ? n * n : V, A(t) ? function(o) {
										var l, h, u, c = Qt.isPressed ? 1 - Qt.edgeResistance : 1,
											p = o.x,
											d = o.y;
										return o.x = p = p > i ? i + (p - i) * c : p < e ? e + (p - e) * c : p, o.y = d = d > s ? s + (d - s) * c : d < r ? r + (d - r) * c : d, (l = t.call(Qt, o)) !== o && (o.x = l.x, o.y = l.y), 1 !== a && (o.x *= a, o.y *= a), n < V && (h = o.x - p) * h + (u = o.y - d) * u > n && (o.x = p, o.y = d), o
									} : B(t) ? function(e) {
										for (var i, r, s, a, o = t.length, l = 0, h = V; --o > -1;)(a = (i = (s = t[o]).x - e.x) * i + (r = s.y - e.y) * r) < h && (l = o, h = a);
										return h <= n ? t[l] : e
									} : function(t) {
										return t
									}
								}(n ? s : s.points, Q, W, ct, st, s.radius, m ? -1 : 1) : (Kt && (At = ve(n ? s : s.x || s.left || s.scrollLeft, Q, W, m ? -1 : 1)), Jt && (Mt = ve(n ? s : s.y || s.top || s.scrollTop, ct, st, m ? -1 : 1))))
							},
							De = function() {
								Qt.isThrowing = !1, vt(Qt, "throwcomplete", "onThrowComplete")
							},
							be = function() {
								Qt.isThrowing = !1
							},
							_e = function(t, r) {
								var s, a, o, l;
								t && b ? (!0 === t && (s = i.snap || i.liveSnap || {}, a = B(s) || A(s), t = {
									resistance: (i.throwResistance || i.resistance || 1e3) / (Gt ? 10 : 1)
								}, Gt ? t.rotation = _t(Qt, a ? s : s.rotation, W, Q, 1, r) : (Kt && (t[$t] = _t(Qt, a ? s : s.points || s.x || s.left, W, Q, m ? -1 : 1, r || "x" === Qt.lockedAxis)), Jt && (t[Ut] = _t(Qt, a ? s : s.points || s.y || s.top, st, ct, m ? -1 : 1, r || "y" === Qt.lockedAxis)), (s.points || B(s) && M(s[0])) && (t.linkedProps = $t + "," + Ut, t.radius = s.radius))), Qt.isThrowing = !0, l = isNaN(i.overshootTolerance) ? 1 === i.edgeResistance ? 0 : 1 - Qt.edgeResistance + .2 : i.overshootTolerance, t.duration || (t.duration = {
									max: Math.max(i.minDuration || 0, "maxDuration" in i ? i.maxDuration : 2),
									min: isNaN(i.minDuration) ? 0 === l || M(t) && t.resistance > 1e3 ? 0 : .5 : i.minDuration,
									overshoot: l
								}), Qt.tween = o = n.to(m || e, {
									inertia: t,
									data: "_draggable",
									inherit: !1,
									onComplete: De,
									onInterrupt: be,
									onUpdate: i.fastMode ? vt : ge,
									onUpdateParams: i.fastMode ? [Qt, "onthrowupdate", "onThrowUpdate"] : s && s.radius ? [!1, !0] : []
								}), i.fastMode || (m && (m._skip = !0), o.render(1e9, !0, !0), ge(!0, !0), Qt.endX = Qt.x, Qt.endY = Qt.y, Gt && (Qt.endRotation = Qt.x), o.play(0), ge(!0, !0), m && (m._skip = !1))) : L && Qt.applyBounds()
							},
							we = function(t) {
								var i, s = Ot;
								Ot = (0, r.hK)(e.parentNode, !0), t && Qt.isPressed && !Ot.equals(s || new r.cA) && (i = s.inverse().apply({
									x: E,
									y: T
								}), Ot.apply(i, i), E = i.x, T = i.y), Ot.equals(X) && (Ot = null)
							},
							xe = function() {
								var t, i, s, n = 1 - Qt.edgeResistance,
									a = ce ? ot(de) : 0,
									o = ce ? at(de) : 0;
								Wt && (ue.x = pe($t, "px") + "px", ue.y = pe(Ut, "px") + "px", ue.renderTransform()), we(!1), Dt.x = Qt.pointerX - a, Dt.y = Qt.pointerY - o, Ot && Ot.apply(Dt, Dt), E = Dt.x, T = Dt.y, kt && (ke(Qt.pointerX, Qt.pointerY), me(!0)), Ht = (0, r.hK)(e), m ? (ye(), P = m.top(), k = m.left()) : (Ce() ? (ge(!0, !0), ye()) : Qt.applyBounds(), Gt ? (t = e.ownerSVGElement ? [ue.xOrigin - e.getBBox().x, ue.yOrigin - e.getBBox().y] : (ft(e)[O] || "0 0").split(" "), St = Qt.rotationOrigin = (0, r.hK)(e).apply({
									x: parseFloat(t[0]) || 0,
									y: parseFloat(t[1]) || 0
								}), ge(!0, !0), i = Qt.pointerX - St.x - a, s = St.y - Qt.pointerY + o, k = Qt.x, P = Qt.y = Math.atan2(s, i) * N) : (P = pe(Ut, "px"), k = pe($t, "px"))), L && n && (k > W ? k = W + (k - W) / n : k < Q && (k = Q - (Q - k) / n), Gt || (P > st ? P = st + (P - st) / n : P < ct && (P = ct - (ct - P) / n))), Qt.startX = k = R(k), Qt.startY = P = R(P)
							},
							Ce = function() {
								return Qt.tween && Qt.tween.isActive()
							},
							Ee = function() {
								!c.parentNode || Ce() || Qt.isDragging || c.parentNode.removeChild(c)
							},
							Te = function(t, r) {
								var s;
								if (!d || Qt.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || r) && Y() - he < 30 && v[Qt.pointerEvent.type]) Yt && t && d && rt(t);
								else {
									if (Rt = Ce(), jt = !1, Qt.pointerEvent = t, v[t.type] ? (It = ~t.type.indexOf("touch") ? t.currentTarget || t.target : de, et(It, "touchend", Pe), et(It, "touchmove", Se), et(It, "touchcancel", Pe), et(de, "touchstart", nt)) : (It = null, et(de, "mousemove", Se)), zt = null, w && It || (et(de, "mouseup", Pe), t && t.target && et(t.target, "mouseup", Pe)), Lt = le.call(Qt, t.target) && !1 === i.dragClickables && !r) return et(t.target, "change", Pe), vt(Qt, "pressInit", "onPressInit"), vt(Qt, "press", "onPress"), xt(te, !0), void(Yt = !1);
									var o;
									if (Bt = !(!It || Kt === Jt || !1 === Qt.vars.allowNativeTouchScrolling || Qt.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (Kt ? "y" : "x"), (Yt = !Bt && !Qt.allowEventDefault) && (rt(t), et(a, "touchforcechange", rt)), t.changedTouches ? (t = mt = t.changedTouches[0], bt = t.identifier) : t.pointerId ? bt = t.pointerId : mt = bt = null, S++, o = me, H.push(o), 1 === H.length && n.ticker.add(Z), T = Qt.pointerY = t.pageY, E = Qt.pointerX = t.pageX, vt(Qt, "pressInit", "onPressInit"), (Bt || Qt.autoScroll) && pt(e.parentNode), !e.parentNode || !Qt.autoScroll || m || Gt || !e.parentNode._gsMaxScrollX || c.parentNode || e.getBBox || (c.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(c)), xe(), Qt.tween && Qt.tween.kill(), Qt.isThrowing = !1, n.killTweensOf(m || e, ee, !0), m && n.killTweensOf(e, {
											scrollTo: 1
										}, !0), Qt.tween = Qt.lockedAxis = null, (i.zIndexBoost || !Gt && !m && !1 !== i.zIndexBoost) && (e.style.zIndex = h.zIndex++), Qt.isPressed = !0, I = !(!i.onDrag && !Qt._listeners.drag), z = !(!i.onMove && !Qt._listeners.move), !1 !== i.cursor || i.activeCursor)
										for (s = te.length; --s > -1;) n.set(te[s], {
											cursor: i.activeCursor || i.cursor || ("grab" === _ ? "grabbing" : _)
										});
									vt(Qt, "press", "onPress")
								}
							},
							Se = function(t) {
								var i, r, s, n, o, l, h = t;
								if (d && !y && Qt.isPressed && t) {
									if (Qt.pointerEvent = t, i = t.changedTouches) {
										if ((t = i[0]) !== mt && t.identifier !== bt) {
											for (n = i.length; --n > -1 && (t = i[n]).identifier !== bt && t.target !== e;);
											if (n < 0) return
										}
									} else if (t.pointerId && bt && t.pointerId !== bt) return;
									It && Bt && !zt && (Dt.x = t.pageX - (ce ? ot(de) : 0), Dt.y = t.pageY - (ce ? at(de) : 0), Ot && Ot.apply(Dt, Dt), r = Dt.x, s = Dt.y, ((o = Math.abs(r - E)) !== (l = Math.abs(s - T)) && (o > Zt || l > Zt) || D && Bt === zt) && (zt = o > l && Kt ? "x" : "y", Bt && zt !== Bt && et(a, "touchforcechange", rt), !1 !== Qt.vars.lockAxisOnTouchScroll && Kt && Jt && (Qt.lockedAxis = "x" === zt ? "y" : "x", A(Qt.vars.onLockAxis) && Qt.vars.onLockAxis.call(Qt, h)), D && Bt === zt)) ? Pe(h) : (Qt.allowEventDefault || Bt && (!zt || Bt === zt) || !1 === h.cancelable ? Yt && (Yt = !1) : (rt(h), Yt = !0), Qt.autoScroll && (re = !0), ke(t.pageX, t.pageY, z))
								} else Yt && t && d && rt(t)
							},
							ke = function(t, e, i) {
								var r, s, n, a, o, l, h = 1 - Qt.dragResistance,
									u = 1 - Qt.edgeResistance,
									c = Qt.pointerX,
									p = Qt.pointerY,
									d = P,
									f = Qt.x,
									m = Qt.y,
									g = Qt.endX,
									v = Qt.endY,
									y = Qt.endRotation,
									D = kt;
								Qt.pointerX = t, Qt.pointerY = e, ce && (t -= ot(de), e -= at(de)), Gt ? (a = Math.atan2(St.y - e, t - St.x) * N, (o = Qt.y - a) > 180 ? (P -= 360, Qt.y = a) : o < -180 && (P += 360, Qt.y = a), Qt.x !== k || Math.abs(P - a) > Zt ? (Qt.y = a, n = k + (P - a) * h) : n = k) : (Ot && (l = t * Ot.a + e * Ot.c + Ot.e, e = t * Ot.b + e * Ot.d + Ot.f, t = l), (s = e - T) < Zt && s > -Zt && (s = 0), (r = t - E) < Zt && r > -Zt && (r = 0), (Qt.lockAxis || Qt.lockedAxis) && (r || s) && ((l = Qt.lockedAxis) || (Qt.lockedAxis = l = Kt && Math.abs(r) > Math.abs(s) ? "y" : Jt ? "x" : null, l && A(Qt.vars.onLockAxis) && Qt.vars.onLockAxis.call(Qt, Qt.pointerEvent)), "y" === l ? s = 0 : "x" === l && (r = 0)), n = R(k + r * h), a = R(P + s * h)), (At || Mt || Ft) && (Qt.x !== n || Qt.y !== a && !Gt) && (Ft && ($.x = n, $.y = a, l = Ft($), n = R(l.x), a = R(l.y)), At && (n = R(At(n))), Mt && (a = R(Mt(a)))), L && (n > W ? n = W + Math.round((n - W) * u) : n < Q && (n = Q + Math.round((n - Q) * u)), Gt || (a > st ? a = Math.round(st + (a - st) * u) : a < ct && (a = Math.round(ct + (a - ct) * u)))), (Qt.x !== n || Qt.y !== a && !Gt) && (Gt ? (Qt.endRotation = Qt.x = Qt.endX = n, kt = !0) : (Jt && (Qt.y = Qt.endY = a, kt = !0), Kt && (Qt.x = Qt.endX = n, kt = !0)), i && !1 === vt(Qt, "move", "onMove") ? (Qt.pointerX = c, Qt.pointerY = p, P = d, Qt.x = f, Qt.y = m, Qt.endX = g, Qt.endY = v, Qt.endRotation = y, kt = D) : !Qt.isDragging && Qt.isPressed && (Qt.isDragging = jt = !0, vt(Qt, "dragstart", "onDragStart")))
							},
							Pe = function t(r, s) {
								if (d && Qt.isPressed && (!r || null == bt || s || !(r.pointerId && r.pointerId !== bt && r.target !== e || r.changedTouches && ! function(t, e) {
										for (var i = t.length; i--;)
											if (t[i].identifier === e) return !0
									}(r.changedTouches, bt)))) {
									Qt.isPressed = !1;
									var o, l, h, u, c, p = r,
										f = Qt.isDragging,
										m = Qt.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
										g = n.delayedCall(.001, Ee);
									if (It ? (it(It, "touchend", t), it(It, "touchmove", Se), it(It, "touchcancel", t), it(de, "touchstart", nt)) : it(de, "mousemove", Se), it(a, "touchforcechange", rt), w && It || (it(de, "mouseup", t), r && r.target && it(r.target, "mouseup", t)), kt = !1, f && (ie = G = Y(), Qt.isDragging = !1), tt(me), Lt && !m) return r && (it(r.target, "change", t), Qt.pointerEvent = p), xt(te, !1), vt(Qt, "release", "onRelease"), vt(Qt, "click", "onClick"), void(Lt = !1);
									for (l = te.length; --l > -1;) dt(te[l], "cursor", i.cursor || (!1 !== i.cursor ? _ : null));
									if (S--, r) {
										if ((o = r.changedTouches) && (r = o[0]) !== mt && r.identifier !== bt) {
											for (l = o.length; --l > -1 && (r = o[l]).identifier !== bt && r.target !== e;);
											if (l < 0 && !s) return
										}
										Qt.pointerEvent = p, Qt.pointerX = r.pageX, Qt.pointerY = r.pageY
									}
									return m && p ? (rt(p), Yt = !0, vt(Qt, "release", "onRelease")) : p && !f ? (Yt = !1, Rt && (i.snap || i.bounds) && _e(i.inertia || i.throwProps), vt(Qt, "release", "onRelease"), D && "touchmove" === p.type || -1 !== p.type.indexOf("cancel") || (vt(Qt, "click", "onClick"), Y() - he < 300 && vt(Qt, "doubleclick", "onDoubleClick"), u = p.target || e, he = Y(), c = function() {
										he === Vt || !Qt.enabled() || Qt.isPressed || p.defaultPrevented || (u.click ? u.click() : de.createEvent && ((h = de.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, a, 1, Qt.pointerEvent.screenX, Qt.pointerEvent.screenY, Qt.pointerX, Qt.pointerY, !1, !1, !1, !1, 0, null), u.dispatchEvent(h)))
									}, D || p.defaultPrevented || n.delayedCall(.05, c))) : (_e(i.inertia || i.throwProps), Qt.allowEventDefault || !p || !1 === i.dragClickables && le.call(Qt, p.target) || !f || Bt && (!zt || Bt !== zt) || !1 === p.cancelable ? Yt = !1 : (Yt = !0, rt(p)), vt(Qt, "release", "onRelease")), Ce() && g.duration(Qt.tween.duration()), f && vt(Qt, "dragend", "onDragEnd"), !0
								}
								Yt && r && d && rt(r)
							},
							Ae = function(t) {
								if (t && Qt.isDragging && !m) {
									var i = t.target || e.parentNode,
										r = i.scrollLeft - i._gsScrollX,
										s = i.scrollTop - i._gsScrollY;
									(r || s) && (Ot ? (E -= r * Ot.a + s * Ot.c, T -= s * Ot.d + r * Ot.b) : (E -= r, T -= s), i._gsScrollX += r, i._gsScrollY += s, ke(Qt.pointerX, Qt.pointerY))
								}
							},
							Me = function(t) {
								var e = Y(),
									i = e - he < 100,
									r = e - ie < 50,
									s = i && Vt === he,
									n = Qt.pointerEvent && Qt.pointerEvent.defaultPrevented,
									a = i && Xt === he,
									o = t.isTrusted || null == t.isTrusted && i && s;
								if ((s || r && !1 !== Qt.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), i && (!Qt.pointerEvent || !Qt.pointerEvent.defaultPrevented) && (!s || o && !a)) return o && s && (Xt = he), void(Vt = he);
								(Qt.isPressed || r || i) && (o && t.detail && i && !n || rt(t)), i || r || jt || (t && t.target && (Qt.pointerEvent = t), vt(Qt, "click", "onClick"))
							},
							Fe = function(t) {
								return Ot ? {
									x: t.x * Ot.a + t.y * Ot.c + Ot.e,
									y: t.x * Ot.b + t.y * Ot.d + Ot.f
								} : {
									x: t.x,
									y: t.y
								}
							};
						return (Pt = h.get(e)) && Pt.kill(), u.startDrag = function(t, i) {
							var r, s, n, a;
							Te(t || Qt.pointerEvent, !0), i && !Qt.hitTest(t || Qt.pointerEvent) && (r = gt(t || Qt.pointerEvent), s = gt(e), n = Fe({
								x: r.left + r.width / 2,
								y: r.top + r.height / 2
							}), a = Fe({
								x: s.left + s.width / 2,
								y: s.top + s.height / 2
							}), E -= n.x - a.x, T -= n.y - a.y), Qt.isDragging || (Qt.isDragging = jt = !0, vt(Qt, "dragstart", "onDragStart"))
						}, u.drag = Se, u.endDrag = function(t) {
							return Pe(t || Qt.pointerEvent, !0)
						}, u.timeSinceDrag = function() {
							return Qt.isDragging ? 0 : (Y() - ie) / 1e3
						}, u.timeSinceClick = function() {
							return (Y() - he) / 1e3
						}, u.hitTest = function(t, e) {
							return h.hitTest(Qt.target, t, e)
						}, u.getDirection = function(t, i) {
							var r, s, n, a, o, l, h = "velocity" === t && b ? t : M(t) && !Gt ? "element" : "start";
							return "element" === h && (o = gt(Qt.target), l = gt(t)), r = "start" === h ? Qt.x - k : "velocity" === h ? b.getVelocity(e, $t) : o.left + o.width / 2 - (l.left + l.width / 2), Gt ? r < 0 ? "counter-clockwise" : "clockwise" : (i = i || 2, s = "start" === h ? Qt.y - P : "velocity" === h ? b.getVelocity(e, Ut) : o.top + o.height / 2 - (l.top + l.height / 2), a = (n = Math.abs(r / s)) < 1 / i ? "" : r < 0 ? "left" : "right", n < i && ("" !== a && (a += "-"), a += s < 0 ? "up" : "down"), a)
						}, u.applyBounds = function(t, r) {
							var s, n, o, l, h, u;
							if (t && i.bounds !== t) return i.bounds = t, Qt.update(!0, r);
							if (ge(!0), ye(), L && !Ce()) {
								if (s = Qt.x, n = Qt.y, s > W ? s = W : s < Q && (s = Q), n > st ? n = st : n < ct && (n = ct), (Qt.x !== s || Qt.y !== n) && (o = !0, Qt.x = Qt.endX = s, Gt ? Qt.endRotation = s : Qt.y = Qt.endY = n, kt = !0, me(!0), Qt.autoScroll && !Qt.isDragging))
									for (pt(e.parentNode), l = e, U.scrollTop = null != a.pageYOffset ? a.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop, U.scrollLeft = null != a.pageXOffset ? a.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft; l && !u;) h = (u = ut(l.parentNode)) ? U : l.parentNode, Jt && h.scrollTop > h._gsMaxScrollY && (h.scrollTop = h._gsMaxScrollY), Kt && h.scrollLeft > h._gsMaxScrollX && (h.scrollLeft = h._gsMaxScrollX), l = h;
								Qt.isThrowing && (o || Qt.endX > W || Qt.endX < Q || Qt.endY > st || Qt.endY < ct) && _e(i.inertia || i.throwProps, o)
							}
							return Qt
						}, u.update = function(t, i, s) {
							if (i && Qt.isPressed) {
								var n = (0, r.hK)(e),
									a = Ht.apply({
										x: Qt.x - k,
										y: Qt.y - P
									}),
									o = (0, r.hK)(e.parentNode, !0);
								o.apply({
									x: n.e - a.x,
									y: n.f - a.y
								}, a), Qt.x -= a.x - o.e, Qt.y -= a.y - o.f, me(!0), xe()
							}
							var l = Qt.x,
								h = Qt.y;
							return we(!i), t ? Qt.applyBounds() : (kt && s && me(!0), ge(!0)), i && (ke(Qt.pointerX, Qt.pointerY), kt && me(!0)), Qt.isPressed && !i && (Kt && Math.abs(l - Qt.x) > .01 || Jt && Math.abs(h - Qt.y) > .01 && !Gt) && xe(), Qt.autoScroll && (pt(e.parentNode, Qt.isDragging), re = Qt.isDragging, me(!0), ht(e, Ae), lt(e, Ae)), Qt
						}, u.enable = function(t) {
							var r, s, a, o = {
								lazy: !0
							};
							if (!1 !== i.cursor && (o.cursor = i.cursor || _), n.utils.checkPrefix("touchCallout") && (o.touchCallout = "none"), "soft" !== t) {
								for (J(te, Kt === Jt ? "none" : i.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || i.allowEventDefault ? "manipulation" : Kt ? "pan-y" : "pan-x"), s = te.length; --s > -1;) a = te[s], w || et(a, "mousedown", Te), et(a, "touchstart", Te), et(a, "click", Me, !0), n.set(a, o), a.getBBox && a.ownerSVGElement && Kt !== Jt && n.set(a.ownerSVGElement, {
									touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : Kt ? "pan-y" : "pan-x"
								}), i.allowContextMenu || et(a, "contextmenu", fe);
								xt(te, !1)
							}
							return lt(e, Ae), d = !0, b && "soft" !== t && b.track(m || e, Wt ? "x,y" : Gt ? "rotation" : "top,left"), e._gsDragID = r = "d" + q++, j[r] = Qt, m && (m.enable(), m.element._gsDragID = r), (i.bounds || Gt) && xe(), i.bounds && Qt.applyBounds(), Qt
						}, u.disable = function(t) {
							for (var i, r = Qt.isDragging, s = te.length; --s > -1;) dt(te[s], "cursor", null);
							if ("soft" !== t) {
								for (J(te, null), s = te.length; --s > -1;) i = te[s], dt(i, "touchCallout", null), it(i, "mousedown", Te), it(i, "touchstart", Te), it(i, "click", Me, !0), it(i, "contextmenu", fe);
								xt(te, !0), It && (it(It, "touchcancel", Pe), it(It, "touchend", Pe), it(It, "touchmove", Se)), it(de, "mouseup", Pe), it(de, "mousemove", Se)
							}
							return ht(e, Ae), d = !1, b && "soft" !== t && (b.untrack(m || e, Wt ? "x,y" : Gt ? "rotation" : "top,left"), Qt.tween && Qt.tween.kill()), m && m.disable(), tt(me), Qt.isDragging = Qt.isPressed = Lt = !1, r && vt(Qt, "dragend", "onDragEnd"), Qt
						}, u.enabled = function(t, e) {
							return arguments.length ? t ? Qt.enable(e) : Qt.disable(e) : d
						}, u.kill = function() {
							return Qt.isThrowing = !1, Qt.tween && Qt.tween.kill(), Qt.disable(), n.set(te, {
								clearProps: "userSelect"
							}), delete j[e._gsDragID], Qt
						}, u.revert = function() {
							this.kill(), this.styles && this.styles.revert()
						}, ~qt.indexOf("scroll") && (m = u.scrollProxy = new Et(e, function(t, e) {
							for (var i in e) i in t || (t[i] = e[i]);
							return t
						}({
							onKill: function() {
								Qt.isPressed && Pe(null)
							}
						}, i)), e.style.overflowY = Jt && !g ? "auto" : "hidden", e.style.overflowX = Kt && !g ? "auto" : "hidden", e = m.content), Gt ? ee.rotation = 1 : (Kt && (ee[$t] = 1), Jt && (ee[Ut] = 1)), ue.force3D = !("force3D" in i) || i.force3D, x(s(u)), u.enable(), u
					}
					return i = t, (e = h).prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i, h.register = function(t) {
						n = t, Tt()
					}, h.create = function(t, e) {
						return p || Tt(!0), f(t).map((function(t) {
							return new h(t, e)
						}))
					}, h.get = function(t) {
						return j[(f(t)[0] || {})._gsDragID]
					}, h.timeSinceDrag = function() {
						return (Y() - G) / 1e3
					}, h.hitTest = function(t, e, i) {
						if (t === e) return !1;
						var r, s, n, a = gt(t),
							o = gt(e),
							l = a.top,
							h = a.left,
							u = a.right,
							c = a.bottom,
							p = a.width,
							d = a.height,
							f = o.left > u || o.right < h || o.top > c || o.bottom < l;
						return f || !i ? !f : (n = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, (r = {
							left: Math.max(h, o.left),
							top: Math.max(l, o.top)
						}).width = Math.min(u, o.right) - r.left, r.height = Math.min(c, o.bottom) - r.top, !(r.width < 0 || r.height < 0) && (n ? (i *= .01, (s = r.width * r.height) >= p * d * i || s >= o.width * o.height * i) : r.width > i && r.height > i))
					}, h
				}(function() {
					function t(t) {
						this._listeners = {}, this.target = t || this
					}
					var e = t.prototype;
					return e.addEventListener = function(t, e) {
						var i = this._listeners[t] || (this._listeners[t] = []);
						~i.indexOf(e) || i.push(e)
					}, e.removeEventListener = function(t, e) {
						var i = this._listeners[t],
							r = i && i.indexOf(e);
						r >= 0 && i.splice(r, 1)
					}, e.dispatchEvent = function(t) {
						var e, i = this;
						return (this._listeners[t] || []).forEach((function(r) {
							return !1 === r.call(i, {
								type: t,
								target: i.target
							}) && (e = !1)
						})), e
					}, t
				}());
			! function(t, e) {
				for (var i in e) i in t || (t[i] = e[i])
			}(St.prototype, {
				pointerX: 0,
				pointerY: 0,
				startX: 0,
				startY: 0,
				deltaX: 0,
				deltaY: 0,
				isDragging: !1,
				isPressed: !1
			}), St.zIndex = 1e3, St.version = "3.12.5", P() && n.registerPlugin(St)
		},
		863: function(t, e, i) {
			"use strict";
			i.d(e, {
				K: function() {
					return at
				}
			});
			var r, s, n, a, o, l, h, u, c = i(335),
				p = 1,
				d = function(t, e) {
					return t.actions.forEach((function(t) {
						return t.vars[e] && t.vars[e](t)
					}))
				},
				f = {},
				m = 180 / Math.PI,
				g = Math.PI / 180,
				v = {},
				y = {},
				D = {},
				b = function(t) {
					return "string" == typeof t ? t.split(" ").join("").split(",") : t
				},
				_ = b("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
				w = b("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
				x = function(t) {
					return r(t)[0] || console.warn("Element not found:", t)
				},
				C = function(t) {
					return Math.round(1e4 * t) / 1e4 || 0
				},
				E = function(t, e, i) {
					return t.forEach((function(t) {
						return t.classList[i](e)
					}))
				},
				T = {
					zIndex: 1,
					kill: 1,
					simple: 1,
					spin: 1,
					clearProps: 1,
					targets: 1,
					toggleClass: 1,
					onComplete: 1,
					onUpdate: 1,
					onInterrupt: 1,
					onStart: 1,
					delay: 1,
					repeat: 1,
					repeatDelay: 1,
					yoyo: 1,
					scale: 1,
					fade: 1,
					absolute: 1,
					props: 1,
					onEnter: 1,
					onLeave: 1,
					custom: 1,
					paused: 1,
					nested: 1,
					prune: 1,
					absoluteOnLeave: 1
				},
				S = {
					zIndex: 1,
					simple: 1,
					clearProps: 1,
					scale: 1,
					absolute: 1,
					fitChild: 1,
					getVars: 1,
					props: 1
				},
				k = function(t) {
					return t.replace(/([A-Z])/g, "-$1").toLowerCase()
				},
				P = function(t, e) {
					var i, r = {};
					for (i in t) e[i] || (r[i] = t[i]);
					return r
				},
				A = {},
				M = function(t) {
					var e = A[t] = b(t);
					return D[t] = e.concat(w), e
				},
				F = function t(e, i, r) {
					void 0 === r && (r = 0);
					for (var s = e.parentNode, n = 1e3 * Math.pow(10, r) * (i ? -1 : 1), a = i ? 900 * -n : 0; e;) a += n, e = e.previousSibling;
					return s ? a + t(s, i, r + 1) : a
				},
				L = function(t, e, i) {
					return t.forEach((function(t) {
						return t.d = F(i ? t.element : t.t, e)
					})), t.sort((function(t, e) {
						return t.d - e.d
					})), t
				},
				I = function(t, e) {
					for (var i, r, s = t.element.style, n = t.css = t.css || [], a = e.length; a--;) r = s[i = e[a]] || s.getPropertyValue(i), n.push(r ? i : y[i] || (y[i] = k(i)), r);
					return s
				},
				O = function(t) {
					var e = t.css,
						i = t.element.style,
						r = 0;
					for (t.cache.uncache = 1; r < e.length; r += 2) e[r + 1] ? i[e[r]] = e[r + 1] : i.removeProperty(e[r]);
					!e[e.indexOf("transform") + 1] && i.translate && (i.removeProperty("translate"), i.removeProperty("scale"), i.removeProperty("rotate"))
				},
				R = function(t, e) {
					t.forEach((function(t) {
						return t.a.cache.uncache = 1
					})), e || t.finalStates.forEach(O)
				},
				B = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
				z = function(t, e, i) {
					var r, s, a, o = t.element,
						h = t.width,
						u = t.height,
						p = t.uncache,
						d = t.getProp,
						f = o.style,
						m = 4;
					if ("object" != typeof e && (e = t), n && 1 !== i) return n._abs.push({
						t: o,
						b: t,
						a: t,
						sd: 0
					}), n._final.push((function() {
						return (t.cache.uncache = 1) && O(t)
					})), o;
					for (s = "none" === d("display"), t.isVisible && !s || (s && (I(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = h = t.width || e.width, t.height = u = t.height || e.height), I(t, B), a = window.getComputedStyle(o); m--;) f[B[m]] = a[B[m]];
					if (f.gridArea = "1 / 1 / 1 / 1", f.transition = "none", f.position = "absolute", f.width = h + "px", f.height = u + "px", f.top || (f.top = "0px"), f.left || (f.left = "0px"), p) r = new rt(o);
					else if ((r = P(t, v)).position = "absolute", t.simple) {
						var g = o.getBoundingClientRect();
						r.matrix = new c.cA(1, 0, 0, 1, g.left + (0, c.Mt)(), g.top + (0, c.eK)())
					} else r.matrix = (0, c.hK)(o, !1, !1, !0);
					return r = W(r, t, !0), t.x = l(r.x, .01), t.y = l(r.y, .01), o
				},
				N = function(t, e) {
					return !0 !== e && (e = r(e), t = t.filter((function(t) {
						if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
						t.t._gsap.renderTransform(1), t.b.isVisible && (t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px")
					}))), t
				},
				V = function(t) {
					return L(t, !0).forEach((function(t) {
						return (t.a.isVisible || t.b.isVisible) && z(t.sd < 0 ? t.b : t.a, t.b, 1)
					}))
				},
				X = function(t, e) {
					return e && t.idLookup[Y(e).id] || t.elementStates[0]
				},
				Y = function(t, e, i, r) {
					return t instanceof rt ? t : t instanceof it ? X(t, r) : new rt("string" == typeof t ? x(t) || console.warn(t + " not found") : t, e, i)
				},
				H = function(t, e) {
					var i, r = t.style || t;
					for (i in e) r[i] = e[i]
				},
				j = function(t) {
					return t.map((function(t) {
						return t.element
					}))
				},
				q = function(t, e, i) {
					return t && e.length && i.add(t(j(e), i, new it(e, 0, !0)), 0)
				},
				W = function(t, e, i, n, a, o) {
					var u, p, d, f, v, y, D, b = t.element,
						_ = t.cache,
						w = t.parent,
						x = t.x,
						E = t.y,
						T = e.width,
						S = e.height,
						k = e.scaleX,
						P = e.scaleY,
						A = e.rotation,
						M = e.bounds,
						F = o && h && h(b, "transform"),
						L = t,
						I = e.matrix,
						O = I.e,
						R = I.f,
						B = t.bounds.width !== M.width || t.bounds.height !== M.height || t.scaleX !== k || t.scaleY !== P || t.rotation !== A,
						z = !B && t.simple && e.simple && !a;
					return z || !w ? (k = P = 1, A = u = 0) : (v = function(t) {
						var e = t._gsap || s.core.getCache(t);
						return e.gmCache === s.ticker.frame ? e.gMatrix : (e.gmCache = s.ticker.frame, e.gMatrix = (0, c.hK)(t, !0, !1, !0))
					}(w), y = v.clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), A = C(Math.atan2(y.b, y.a) * m), u = C(Math.atan2(y.c, y.d) * m + A) % 360, k = Math.sqrt(Math.pow(y.a, 2) + Math.pow(y.b, 2)), P = Math.sqrt(Math.pow(y.c, 2) + Math.pow(y.d, 2)) * Math.cos(u * g), a && (a = r(a)[0], f = s.getProperty(a), D = a.getBBox && "function" == typeof a.getBBox && a.getBBox(), L = {
						scaleX: f("scaleX"),
						scaleY: f("scaleY"),
						width: D ? D.width : Math.ceil(parseFloat(f("width", "px"))),
						height: D ? D.height : parseFloat(f("height", "px"))
					}), _.rotation = A + "deg", _.skewX = u + "deg"), i ? (k *= T !== L.width && L.width ? T / L.width : 1, P *= S !== L.height && L.height ? S / L.height : 1, _.scaleX = k, _.scaleY = P) : (T = l(T * k / L.scaleX, 0), S = l(S * P / L.scaleY, 0), b.style.width = T + "px", b.style.height = S + "px"), n && H(b, e.props), z || !w ? (x += O - t.matrix.e, E += R - t.matrix.f) : B || w !== e.parent ? (_.renderTransform(1, _), y = (0, c.hK)(a || b, !1, !1, !0), p = v.apply({
						x: y.e,
						y: y.f
					}), x += (d = v.apply({
						x: O,
						y: R
					})).x - p.x, E += d.y - p.y) : (v.e = v.f = 0, x += (d = v.apply({
						x: O - t.matrix.e,
						y: R - t.matrix.f
					})).x, E += d.y), x = l(x, .02), E = l(E, .02), !o || o instanceof rt ? (_.x = x + "px", _.y = E + "px", _.renderTransform(1, _)) : F && F.revert(), o && (o.x = x, o.y = E, o.rotation = A, o.skewX = u, i ? (o.scaleX = k, o.scaleY = P) : (o.width = T, o.height = S)), o || _
				},
				G = function(t, e) {
					return t instanceof it ? t : new it(t, e)
				},
				$ = function(t, e, i) {
					var r = t.idLookup[i],
						s = t.alt[i];
					return !s.isVisible || (e.getElementState(s.element) || s).isVisible && r.isVisible ? r : s
				},
				U = [],
				K = "width,height,overflowX,overflowY".split(","),
				J = function(t) {
					if (t !== u) {
						var e = o.style,
							i = o.clientWidth === window.outerWidth,
							r = o.clientHeight === window.outerHeight,
							s = 4;
						if (t && (i || r)) {
							for (; s--;) U[s] = e[K[s]];
							i && (e.width = o.clientWidth + "px", e.overflowY = "hidden"), r && (e.height = o.clientHeight + "px", e.overflowX = "hidden"), u = t
						} else if (u) {
							for (; s--;) U[s] ? e[K[s]] = U[s] : e.removeProperty(k(K[s]));
							u = t
						}
					}
				},
				Z = function(t, e, i, r) {
					t instanceof it && e instanceof it || console.warn("Not a valid state object.");
					var a, o, l, h, u, p, d, f, m, g, v, y, b, x, C, k = i = i || {},
						F = k.clearProps,
						O = k.onEnter,
						B = k.onLeave,
						z = k.absolute,
						X = k.absoluteOnLeave,
						Y = k.custom,
						H = k.delay,
						j = k.paused,
						G = k.repeat,
						U = k.repeatDelay,
						K = k.yoyo,
						Z = k.toggleClass,
						Q = k.nested,
						et = k.zIndex,
						st = k.scale,
						nt = k.fade,
						at = k.stagger,
						ot = k.spin,
						lt = k.prune,
						ht = ("props" in i ? i : t).props,
						ut = P(i, T),
						ct = s.timeline({
							delay: H,
							paused: j,
							repeat: G,
							repeatDelay: U,
							yoyo: K,
							data: "isFlip"
						}),
						pt = ut,
						dt = [],
						ft = [],
						mt = [],
						gt = [],
						vt = !0 === ot ? 1 : ot || 0,
						yt = "function" == typeof ot ? ot : function() {
							return vt
						},
						Dt = t.interrupted || e.interrupted,
						bt = ct[1 !== r ? "to" : "from"];
					for (o in e.idLookup) v = e.alt[o] ? $(e, t, o) : e.idLookup[o], u = v.element, g = t.idLookup[o], t.alt[o] && u === g.element && (t.alt[o].isVisible || !v.isVisible) && (g = t.alt[o]), g ? (p = {
						t: u,
						b: g,
						a: v,
						sd: g.element === u ? 0 : v.isVisible ? 1 : -1
					}, mt.push(p), p.sd && (p.sd < 0 && (p.b = v, p.a = g), Dt && I(p.b, ht ? D[ht] : w), nt && mt.push(p.swap = {
						t: g.element,
						b: p.b,
						a: p.a,
						sd: -p.sd,
						swap: p
					})), u._flip = g.element._flip = n ? n.timeline : ct) : v.isVisible && (mt.push({
						t: u,
						b: P(v, {
							isVisible: 1
						}),
						a: v,
						sd: 0,
						entering: 1
					}), u._flip = n ? n.timeline : ct);
					(ht && (A[ht] || M(ht)).forEach((function(t) {
						return ut[t] = function(e) {
							return mt[e].a.props[t]
						}
					})), mt.finalStates = m = [], y = function() {
						for (L(mt), J(!0), h = 0; h < mt.length; h++) p = mt[h], b = p.a, x = p.b, !lt || b.isDifferent(x) || p.entering ? (u = p.t, Q && !(p.sd < 0) && h && (b.matrix = (0, c.hK)(u, !1, !1, !0)), x.isVisible && b.isVisible ? (p.sd < 0 ? (d = new rt(u, ht, t.simple), W(d, b, st, 0, 0, d), d.matrix = (0, c.hK)(u, !1, !1, !0), d.css = p.b.css, p.a = b = d, nt && (u.style.opacity = Dt ? x.opacity : b.opacity), at && gt.push(u)) : p.sd > 0 && nt && (u.style.opacity = Dt ? b.opacity - x.opacity : "0"), W(b, x, st, ht)) : x.isVisible !== b.isVisible && (x.isVisible ? b.isVisible || (x.css = b.css, ft.push(x), mt.splice(h--, 1), z && Q && W(b, x, st, ht)) : (b.isVisible && dt.push(b), mt.splice(h--, 1))), st || (u.style.maxWidth = Math.max(b.width, x.width) + "px", u.style.maxHeight = Math.max(b.height, x.height) + "px", u.style.minWidth = Math.min(b.width, x.width) + "px", u.style.minHeight = Math.min(b.height, x.height) + "px"), Q && Z && u.classList.add(Z)) : mt.splice(h--, 1), m.push(b);
						var e;
						if (Z && (e = m.map((function(t) {
								return t.element
							})), Q && e.forEach((function(t) {
								return t.classList.remove(Z)
							}))), J(!1), st ? (ut.scaleX = function(t) {
								return mt[t].a.scaleX
							}, ut.scaleY = function(t) {
								return mt[t].a.scaleY
							}) : (ut.width = function(t) {
								return mt[t].a.width + "px"
							}, ut.height = function(t) {
								return mt[t].a.height + "px"
							}, ut.autoRound = i.autoRound || !1), ut.x = function(t) {
								return mt[t].a.x + "px"
							}, ut.y = function(t) {
								return mt[t].a.y + "px"
							}, ut.rotation = function(t) {
								return mt[t].a.rotation + (ot ? 360 * yt(t, f[t], f) : 0)
							}, ut.skewX = function(t) {
								return mt[t].a.skewX
							}, f = mt.map((function(t) {
								return t.t
							})), (et || 0 === et) && (ut.modifiers = {
								zIndex: function() {
									return et
								}
							}, ut.zIndex = et, ut.immediateRender = !1 !== i.immediateRender), nt && (ut.opacity = function(t) {
								return mt[t].sd < 0 ? 0 : mt[t].sd > 0 ? mt[t].a.opacity : "+=0"
							}), gt.length) {
							at = s.utils.distribute(at);
							var r = f.slice(gt.length);
							ut.stagger = function(t, e) {
								return at(~gt.indexOf(e) ? f.indexOf(mt[t].swap.t) : t, e, r)
							}
						}
						if (_.forEach((function(t) {
								return i[t] && ct.eventCallback(t, i[t], i[t + "Params"])
							})), Y && f.length)
							for (o in pt = P(ut, T), "scale" in Y && (Y.scaleX = Y.scaleY = Y.scale, delete Y.scale), Y)(a = P(Y[o], S))[o] = ut[o], !("duration" in a) && "duration" in ut && (a.duration = ut.duration), a.stagger = ut.stagger, bt.call(ct, f, a, 0), delete pt[o];
						(f.length || ft.length || dt.length) && (Z && ct.add((function() {
							return E(e, Z, ct._zTime < 0 ? "remove" : "add")
						}), 0) && !j && E(e, Z, "add"), f.length && bt.call(ct, f, pt, 0)), q(O, dt, ct), q(B, ft, ct);
						var g = n && n.timeline;
						g && (g.add(ct, 0), n._final.push((function() {
							return R(mt, !F)
						}))), l = ct.duration(), ct.call((function() {
							var t = ct.time() >= l;
							t && !g && R(mt, !F), Z && E(e, Z, t ? "remove" : "add")
						}))
					}, X && (z = mt.filter((function(t) {
						return !t.sd && !t.a.isVisible && t.b.isVisible
					})).map((function(t) {
						return t.a.element
					}))), n) ? (z && (C = n._abs).push.apply(C, N(mt, z)), n._run.push(y)) : (z && V(N(mt, z)), y());
					var _t = n ? n.timeline : ct;
					return _t.revert = function() {
						return tt(_t, 1, 1)
					}, _t
				},
				Q = function t(e) {
					e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(t)
				},
				tt = function(t, e, i) {
					if (t && t.progress() < 1 && (!t.paused() || i)) return e && (Q(t), e < 2 && t.progress(1), t.kill()), !0
				},
				et = function(t) {
					for (var e, i = t.idLookup = {}, r = t.alt = {}, s = t.elementStates, n = s.length; n--;) i[(e = s[n]).id] ? r[e.id] = e : i[e.id] = e
				},
				it = function() {
					function t(t, e, i) {
						if (this.props = e && e.props, this.simple = !(!e || !e.simple), i) this.targets = j(t), this.elementStates = t, et(this);
						else {
							this.targets = r(t);
							var s = e && (!1 === e.kill || e.batch && !e.kill);
							n && !s && n._kill.push(this), this.update(s || !!n)
						}
					}
					var e = t.prototype;
					return e.update = function(t) {
						var e = this;
						return this.elementStates = this.targets.map((function(t) {
							return new rt(t, e.props, e.simple)
						})), et(this), this.interrupt(t), this.recordInlineStyles(), this
					}, e.clear = function() {
						return this.targets.length = this.elementStates.length = 0, et(this), this
					}, e.fit = function(t, e, i) {
						for (var r, s, n = L(this.elementStates.slice(0), !1, !0), a = (t || this).idLookup, o = 0; o < n.length; o++) r = n[o], i && (r.matrix = (0, c.hK)(r.element, !1, !1, !0)), (s = a[r.id]) && W(r, s, e, !0, 0, r), r.matrix = (0, c.hK)(r.element, !1, !1, !0);
						return this
					}, e.getProperty = function(t, e) {
						var i = this.getElementState(t) || v;
						return (e in i ? i : i.props || v)[e]
					}, e.add = function(t) {
						for (var e, i, r, s = t.targets.length, n = this.idLookup, a = this.alt; s--;)(r = n[(i = t.elementStates[s]).id]) && (i.element === r.element || a[i.id] && a[i.id].element === i.element) ? (e = this.elementStates.indexOf(i.element === r.element ? r : a[i.id]), this.targets.splice(e, 1, t.targets[s]), this.elementStates.splice(e, 1, i)) : (this.targets.push(t.targets[s]), this.elementStates.push(i));
						return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), et(this), this
					}, e.compare = function(t) {
						var e, i, r, s, n, a, o, l, h = t.idLookup,
							u = this.idLookup,
							c = [],
							p = [],
							d = [],
							f = [],
							m = [],
							g = t.alt,
							v = this.alt,
							y = function(t, e, i) {
								return (t.isVisible !== e.isVisible ? t.isVisible ? d : f : t.isVisible ? p : c).push(i) && m.push(i)
							},
							D = function(t, e, i) {
								return m.indexOf(i) < 0 && y(t, e, i)
							};
						for (r in h) n = g[r], a = v[r], s = (e = n ? $(t, this, r) : h[r]).element, i = u[r], a ? (l = i.isVisible || !a.isVisible && s === i.element ? i : a, (o = !n || e.isVisible || n.isVisible || l.element !== n.element ? e : n).isVisible && l.isVisible && o.element !== l.element ? ((o.isDifferent(l) ? p : c).push(o.element, l.element), m.push(o.element, l.element)) : y(o, l, o.element), n && o.element === n.element && (n = h[r]), D(o.element !== i.element && n ? n : o, i, i.element), D(n && n.element === a.element ? n : o, a, a.element), n && D(n, a.element === n.element ? a : i, n.element)) : (i ? i.isDifferent(e) ? y(e, i, s) : c.push(s) : d.push(s), n && D(n, i, n.element));
						for (r in u) h[r] || (f.push(u[r].element), v[r] && f.push(v[r].element));
						return {
							changed: p,
							unchanged: c,
							enter: d,
							leave: f
						}
					}, e.recordInlineStyles = function() {
						for (var t = D[this.props] || w, e = this.elementStates.length; e--;) I(this.elementStates[e], t)
					}, e.interrupt = function(t) {
						var e = this,
							i = [];
						this.targets.forEach((function(r) {
							var s = r._flip,
								n = tt(s, t ? 0 : 1);
							t && n && i.indexOf(s) < 0 && s.add((function() {
								return e.updateVisibility()
							})), n && i.push(s)
						})), !t && i.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!i.length)
					}, e.updateVisibility = function() {
						this.elementStates.forEach((function(t) {
							var e = t.element.getBoundingClientRect();
							t.isVisible = !!(e.width || e.height || e.top || e.left), t.uncache = 1
						}))
					}, e.getElementState = function(t) {
						return this.elementStates[this.targets.indexOf(x(t))]
					}, e.makeAbsolute = function() {
						return L(this.elementStates.slice(0), !0, !0).map(z)
					}, t
				}(),
				rt = function() {
					function t(t, e, i) {
						this.element = t, this.update(e, i)
					}
					var e = t.prototype;
					return e.isDifferent = function(t) {
						var e = this.bounds,
							i = t.bounds;
						return e.top !== i.top || e.left !== i.left || e.width !== i.width || e.height !== i.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props)
					}, e.update = function(t, e) {
						var i, r, n = this,
							a = n.element,
							o = s.getProperty(a),
							h = s.core.getCache(a),
							u = a.getBoundingClientRect(),
							d = a.getBBox && "function" == typeof a.getBBox && "svg" !== a.nodeName.toLowerCase() && a.getBBox(),
							f = e ? new c.cA(1, 0, 0, 1, u.left + (0, c.Mt)(), u.top + (0, c.eK)()) : (0, c.hK)(a, !1, !1, !0);
						n.getProp = o, n.element = a, n.id = ((r = (i = a).getAttribute("data-flip-id")) || i.setAttribute("data-flip-id", r = "auto-" + p++), r), n.matrix = f, n.cache = h, n.bounds = u, n.isVisible = !!(u.width || u.height || u.left || u.top), n.display = o("display"), n.position = o("position"), n.parent = a.parentNode, n.x = o("x"), n.y = o("y"), n.scaleX = h.scaleX, n.scaleY = h.scaleY, n.rotation = o("rotation"), n.skewX = o("skewX"), n.opacity = o("opacity"), n.width = d ? d.width : l(o("width", "px"), .04), n.height = d ? d.height : l(o("height", "px"), .04), t && function(t, e) {
							for (var i = s.getProperty(t.element, null, "native"), r = t.props = {}, n = e.length; n--;) r[e[n]] = (i(e[n]) + "").trim();
							r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0)
						}(n, A[t] || M(t)), n.ctm = a.getCTM && "svg" === a.nodeName.toLowerCase() && (0, c.KQ)(a).inverse(), n.simple = e || 1 === C(f.a) && !C(f.b) && !C(f.c) && 1 === C(f.d), n.uncache = 0
					}, t
				}(),
				st = function() {
					function t(t, e) {
						this.vars = t, this.batch = e, this.states = [], this.timeline = e.timeline
					}
					var e = t.prototype;
					return e.getStateById = function(t) {
						for (var e = this.states.length; e--;)
							if (this.states[e].idLookup[t]) return this.states[e]
					}, e.kill = function() {
						this.batch.remove(this)
					}, t
				}(),
				nt = function() {
					function t(t) {
						this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new it, this.timeline = s.timeline()
					}
					var e = t.prototype;
					return e.add = function(t) {
						var e = this.actions.filter((function(e) {
							return e.vars === t
						}));
						return e.length ? e[0] : (e = new st("function" == typeof t ? {
							animate: t
						} : t, this), this.actions.push(e), e)
					}, e.remove = function(t) {
						var e = this.actions.indexOf(t);
						return e >= 0 && this.actions.splice(e, 1), this
					}, e.getState = function(t) {
						var e = this,
							i = n,
							r = a;
						return n = this, this.state.clear(), this._kill.length = 0, this.actions.forEach((function(i) {
							i.vars.getState && (i.states.length = 0, a = i, i.state = i.vars.getState(i)), t && i.states.forEach((function(t) {
								return e.state.add(t)
							}))
						})), a = r, n = i, this.killConflicts(), this
					}, e.animate = function() {
						var t, e, i = this,
							r = n,
							s = this.timeline,
							a = this.actions.length;
						for (n = this, s.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach((function(t) {
								t.vars.animate && t.vars.animate(t);
								var e, i, r = t.vars.onEnter,
									s = t.vars.onLeave,
									n = t.targets;
								n && n.length && (r || s) && (e = new it, t.states.forEach((function(t) {
									return e.add(t)
								})), (i = e.compare(at.getState(n))).enter.length && r && r(i.enter), i.leave.length && s && s(i.leave))
							})), V(this._abs), this._run.forEach((function(t) {
								return t()
							})), e = s.duration(), t = this._final.slice(0), s.add((function() {
								e <= s.time() && (t.forEach((function(t) {
									return t()
								})), d(i, "onComplete"))
							})), n = r; a--;) this.actions[a].vars.once && this.actions[a].kill();
						return d(this, "onStart"), s.restart(), this
					}, e.loadState = function(t) {
						t || (t = function() {
							return 0
						});
						var e = [];
						return this.actions.forEach((function(i) {
							if (i.vars.loadState) {
								var r, s = function s(n) {
									n && (i.targets = n), ~(r = e.indexOf(s)) && (e.splice(r, 1), e.length || t())
								};
								e.push(s), i.vars.loadState(s)
							}
						})), e.length || t(), this
					}, e.setState = function() {
						return this.actions.forEach((function(t) {
							return t.targets = t.vars.setState && t.vars.setState(t)
						})), this
					}, e.killConflicts = function(t) {
						return this.state.interrupt(t), this._kill.forEach((function(e) {
							return e.interrupt(t)
						})), this
					}, e.run = function(t, e) {
						var i = this;
						return this !== n && (t || this.getState(e), this.loadState((function() {
							i._killed || (i.setState(), i.animate())
						}))), this
					}, e.clear = function(t) {
						this.state.clear(), t || (this.actions.length = 0)
					}, e.getStateById = function(t) {
						for (var e, i = this.actions.length; i--;)
							if (e = this.actions[i].getStateById(t)) return e;
						return this.state.idLookup[t] && this.state
					}, e.kill = function() {
						this._killed = 1, this.clear(), delete f[this.id]
					}, t
				}(),
				at = function() {
					function t() {}
					return t.getState = function(e, i) {
						var r = G(e, i);
						return a && a.states.push(r), i && i.batch && t.batch(i.batch).state.add(r), r
					}, t.from = function(t, e) {
						return "clearProps" in (e = e || {}) || (e.clearProps = !0), Z(t, G(e.targets || t.targets, {
							props: e.props || t.props,
							simple: e.simple,
							kill: !!e.kill
						}), e, -1)
					}, t.to = function(t, e) {
						return Z(t, G(e.targets || t.targets, {
							props: e.props || t.props,
							simple: e.simple,
							kill: !!e.kill
						}), e, 1)
					}, t.fromTo = function(t, e, i) {
						return Z(t, e, i)
					}, t.fit = function(t, e, i) {
						var r = i ? P(i, S) : {},
							n = i || r,
							a = n.absolute,
							o = n.scale,
							l = n.getVars,
							h = n.props,
							u = n.runBackwards,
							c = n.onComplete,
							p = n.simple,
							d = i && i.fitChild && x(i.fitChild),
							f = Y(e, h, p, t),
							m = Y(t, 0, p, f),
							g = h ? D[h] : w,
							v = s.context();
						return h && H(r, f.props), I(m, g), u && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
							O(m), c && c.apply(this, arguments)
						}), a && z(m, f), r = W(m, f, o || d, h, d, r.duration || l ? r : 0), v && !l && v.add((function() {
							return function() {
								return O(m)
							}
						})), l ? r : r.duration ? s.to(m.element, r) : null
					}, t.makeAbsolute = function(t, e) {
						return (t instanceof it ? t : new it(t, e)).makeAbsolute()
					}, t.batch = function(t) {
						return t || (t = "default"), f[t] || (f[t] = new nt(t))
					}, t.killFlipsOf = function(t, e) {
						(t instanceof it ? t.targets : r(t)).forEach((function(t) {
							return t && tt(t._flip, !1 !== e ? 1 : 2)
						}))
					}, t.isFlipping = function(e) {
						var i = t.getByTarget(e);
						return !!i && i.isActive()
					}, t.getByTarget = function(t) {
						return (x(t) || v)._flip
					}, t.getElementState = function(t, e) {
						return new rt(x(t), e)
					}, t.convertCoordinates = function(t, e, i) {
						var r = (0, c.hK)(e, !0, !0).multiply((0, c.hK)(t));
						return i ? r.apply(i) : r
					}, t.register = function(t) {
						if (o = "undefined" != typeof document && document.body) {
							s = t, (0, c.mk)(o), r = s.utils.toArray, h = s.core.getStyleSaver;
							var e = s.utils.snap(.1);
							l = function(t, i) {
								return e(parseFloat(t) + i)
							}
						}
					}, t
				}();
			at.version = "3.12.5", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(at)
		},
		423: function(t, e, i) {
			"use strict";
			i.d(e, {
				w6: function() {
					return Z
				}
			});
			var r, s, n, a, o, l, h, u, c = function() {
					return r || "undefined" != typeof window && (r = window.gsap)
				},
				p = {},
				d = function(t) {
					return u(t).id
				},
				f = function(t) {
					return p[d("string" == typeof t ? n(t)[0] : t)]
				},
				m = function(t) {
					var e, i = o;
					if (t - h >= .05)
						for (h = t; i;)((e = i.g(i.t, i.p)) !== i.v1 || t - i.t1 > .2) && (i.v2 = i.v1, i.v1 = e, i.t2 = i.t1, i.t1 = t), i = i._next
				},
				g = {
					deg: 360,
					rad: 2 * Math.PI
				},
				v = function() {
					(r = c()) && (n = r.utils.toArray, a = r.utils.getUnit, u = r.core.getCache, l = r.ticker, s = 1)
				},
				y = function(t, e, i, r) {
					this.t = t, this.p = e, this.g = t._gsap.get, this.rCap = g[i || a(this.g(t, e))], this.v1 = this.v2 = 0, this.t1 = this.t2 = l.time, r && (this._next = r, r._prev = this)
				},
				D = function() {
					function t(t, e) {
						s || v(), this.target = n(t)[0], p[d(this.target)] = this, this._props = {}, e && this.add(e)
					}
					t.register = function(t) {
						r = t, v()
					};
					var e = t.prototype;
					return e.get = function(t, e) {
						var i, r, s, n = this._props[t] || console.warn("Not tracking " + t + " velocity.");
						return i = parseFloat(e ? n.v1 : n.g(n.t, n.p)) - parseFloat(n.v2), (r = n.rCap) && (i %= r) !== i % (r / 2) && (i = i < 0 ? i + r : i - r), s = i / ((e ? n.t1 : l.time) - n.t2), Math.round(1e4 * s) / 1e4
					}, e.getAll = function() {
						var t, e = {},
							i = this._props;
						for (t in i) e[t] = this.get(t);
						return e
					}, e.isTracking = function(t) {
						return t in this._props
					}, e.add = function(t, e) {
						t in this._props || (o || (l.add(m), h = l.time), o = this._props[t] = new y(this.target, t, e, o))
					}, e.remove = function(t) {
						var e, i, r = this._props[t];
						r && (e = r._prev, i = r._next, e && (e._next = i), i ? i._prev = e : o === r && (l.remove(m), o = 0), delete this._props[t])
					}, e.kill = function(t) {
						for (var e in this._props) this.remove(e);
						t || delete p[d(this.target)]
					}, t.track = function(e, i, r) {
						s || v();
						for (var a, o, l = [], h = n(e), u = i.split(","), c = (r || "").split(","), p = h.length; p--;) {
							for (a = f(h[p]) || new t(h[p]), o = u.length; o--;) a.add(u[o], c[o] || c[0]);
							l.push(a)
						}
						return l
					}, t.untrack = function(t, e) {
						var i = (e || "").split(",");
						n(t).forEach((function(t) {
							var e = f(t);
							e && (i.length ? i.forEach((function(t) {
								return e.remove(t)
							})) : e.kill(1))
						}))
					}, t.isTracking = function(t, e) {
						var i = f(t);
						return i && i.isTracking(e)
					}, t.getVelocity = function(t, e) {
						var i = f(t);
						return i && i.isTracking(e) ? i.get(e) : console.warn("Not tracking velocity of " + e)
					}, t
				}();
			D.getByTarget = f, c() && r.registerPlugin(D);
			var b, _, w, x, C, E, T, S, k, P, A, M, F, L, I = D.getByTarget,
				O = function() {
					return b || "undefined" != typeof window && (b = window.gsap) && b.registerPlugin && b
				},
				R = function(t) {
					return "number" == typeof t
				},
				B = function(t) {
					return "object" == typeof t
				},
				z = function(t) {
					return "function" == typeof t
				},
				N = Array.isArray,
				V = function(t) {
					return t
				},
				X = 1e10,
				Y = function(t, e, i) {
					for (var r in e) r in t || r === i || (t[r] = e[r]);
					return t
				},
				H = function t(e) {
					var i, r, s = {};
					for (i in e) s[i] = B(r = e[i]) && !N(r) ? t(r) : r;
					return s
				},
				j = function(t, e, i, r, s) {
					var n, a, o, l, h = e.length,
						u = 0,
						c = X;
					if (B(t)) {
						for (; h--;) {
							for (o in n = e[h], a = 0, t) a += (l = n[o] - t[o]) * l;
							a < c && (u = h, c = a)
						}
						if ((s || X) < X && s < Math.sqrt(c)) return t
					} else
						for (; h--;)(a = (n = e[h]) - t) < 0 && (a = -a), a < c && n >= r && n <= i && (u = h, c = a);
					return e[u]
				},
				q = function(t, e, i, r, s, n, a) {
					if ("auto" === t.end) return t;
					var o, l, h = t.end;
					if (i = isNaN(i) ? X : i, r = isNaN(r) ? -X : r, B(e)) {
						if (o = e.calculated ? e : (z(h) ? h(e, a) : j(e, h, i, r, n)) || e, !e.calculated) {
							for (l in o) e[l] = o[l];
							e.calculated = !0
						}
						o = o[s]
					} else o = z(h) ? h(e, a) : N(h) ? j(e, h, i, r, n) : parseFloat(h);
					return o > i ? o = i : o < r && (o = r), {
						max: o,
						min: o,
						unitFactor: t.unitFactor
					}
				},
				W = function(t, e, i) {
					return isNaN(t[e]) ? i : +t[e]
				},
				G = function(t, e) {
					return .05 * e * t / P
				},
				$ = function(t, e, i) {
					return Math.abs((e - t) * P / i / .05)
				},
				U = {
					resistance: 1,
					checkpoint: 1,
					preventOvershoot: 1,
					linkedProps: 1,
					radius: 1,
					duration: 1
				},
				K = function(t, e, i, r) {
					if (e.linkedProps) {
						var s, n, a, o, l, h, u = e.linkedProps.split(","),
							c = {};
						for (s = 0; s < u.length; s++)(a = e[n = u[s]]) && (o = R(a.velocity) ? a.velocity : (l = l || I(t)) && l.isTracking(n) ? l.get(n) : 0, h = Math.abs(o / W(a, "resistance", r)), c[n] = parseFloat(i(t, n)) + G(o, h));
						return c
					}
				},
				J = function() {
					(b = O()) && (w = b.parseEase, x = b.utils.toArray, T = b.utils.getUnit, k = b.core.getCache, A = b.utils.clamp, F = b.core.getStyleSaver, L = b.core.reverting || function() {}, C = w("power3"), P = C(.05), S = b.core.PropTween, b.config({
						resistance: 100,
						unitFactors: {
							time: 1e3,
							totalTime: 1e3,
							progress: 1e3,
							totalProgress: 1e3
						}
					}), E = b.config(), b.registerPlugin(D), _ = 1)
				},
				Z = {
					version: "3.12.5",
					name: "inertia",
					register: function(t) {
						b = t, J()
					},
					init: function(t, e, i, r, s) {
						_ || J();
						var n = I(t);
						if ("auto" === e) {
							if (!n) return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
							e = n.getAll()
						}
						this.styles = F && "object" == typeof t.style && F(t), this.target = t, this.tween = i, M = e;
						var a, o, l, h, u, c, p, d, f, m = t._gsap,
							g = m.get,
							v = e.duration,
							y = B(v),
							D = e.preventOvershoot || y && 0 === v.overshoot,
							b = W(e, "resistance", E.resistance),
							w = R(v) ? v : function(t, e, i, r, s, n) {
								if (void 0 === i && (i = 10), void 0 === r && (r = .2), void 0 === s && (s = 1), void 0 === n && (n = 0), "string" == typeof t && (t = x(t)[0]), !t) return 0;
								var a, o, l, h, u, c, p, d, f, m, g = 0,
									v = X,
									y = e.inertia || e,
									D = k(t).get,
									b = W(y, "resistance", E.resistance);
								for (a in m = K(t, y, D, b), y) U[a] || (o = y[a], B(o) || ((d = d || I(t)) && d.isTracking(a) ? o = R(o) ? {
									velocity: o
								} : {
									velocity: d.get(a)
								} : (h = +o || 0, l = Math.abs(h / b))), B(o) && (h = R(o.velocity) ? o.velocity : (d = d || I(t)) && d.isTracking(a) ? d.get(a) : 0, l = A(r, i, Math.abs(h / W(o, "resistance", b))), c = (u = parseFloat(D(t, a)) || 0) + G(h, l), "end" in o && (o = q(o, m && a in m ? m : c, o.max, o.min, a, y.radius, h), n && (M === e && (M = y = H(e)), y[a] = Y(o, y[a], "end"))), "max" in o && c > +o.max + 1e-10 ? (f = o.unitFactor || E.unitFactors[a] || 1, (p = u > o.max && o.min !== o.max || h * f > -15 && h * f < 45 ? r + .1 * (i - r) : $(u, o.max, h)) + s < v && (v = p + s)) : "min" in o && c < +o.min - 1e-10 && (f = o.unitFactor || E.unitFactors[a] || 1, (p = u < o.min && o.min !== o.max || h * f > -45 && h * f < 15 ? r + .1 * (i - r) : $(u, o.min, h)) + s < v && (v = p + s)), p > g && (g = p)), l > g && (g = l));
								return g > v && (g = v), g > i ? i : g < r ? r : g
							}(t, e, y && v.max || 10, y && v.min || .2, y && "overshoot" in v ? +v.overshoot : D ? 0 : 1, !0);
						for (a in e = M, M = 0, f = K(t, e, g, b), e) U[a] || (o = e[a], z(o) && (o = o(r, t, s)), R(o) ? u = o : B(o) && !isNaN(o.velocity) ? u = +o.velocity : n && n.isTracking(a) ? u = n.get(a) : console.warn("ERROR: No velocity was defined for " + t + " property: " + a), c = G(u, w), d = 0, l = g(t, a), h = T(l), l = parseFloat(l), B(o) && (p = l + c, "end" in o && (o = q(o, f && a in f ? f : p, o.max, o.min, a, e.radius, u)), "max" in o && +o.max < p ? D || o.preventOvershoot ? c = o.max - l : d = o.max - l - c : "min" in o && +o.min > p && (D || o.preventOvershoot ? c = o.min - l : d = o.min - l - c)), this._props.push(a), this.styles && this.styles.save(a), this._pt = new S(this._pt, t, a, l, 0, V, 0, m.set(t, a, this)), this._pt.u = h || 0, this._pt.c1 = c, this._pt.c2 = d);
						return i.duration(w), 1
					},
					render: function(t, e) {
						var i, r = e._pt;
						if ((t = C(e.tween._time / e.tween._dur)) || !L())
							for (; r;) r.set(r.t, r.p, (i = r.s + r.c1 * t + r.c2 * t * t, Math.round(1e4 * i) / 1e4 + r.u), r.d, t), r = r._next;
						else e.styles.revert()
					}
				};
			"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(t) {
				return Z[t] = D[t]
			})), O() && b.registerPlugin(Z)
		},
		127: function(t, e, i) {
			"use strict";
			i.d(e, {
				C: function() {
					return f
				}
			});
			var r, s, n = i(422),
				a = function() {
					function t(t) {
						this.chars = (0, n.K6)(t), this.sets = [], this.length = 50;
						for (var e = 0; e < 20; e++) this.sets[e] = h(80, this.chars)
					}
					return t.prototype.grow = function(t) {
						for (var e = 0; e < 20; e++) this.sets[e] += h(t - this.length, this.chars);
						this.length = t
					}, t
				}(),
				o = function() {
					return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
				},
				l = /\s+/g,
				h = function(t, e) {
					for (var i = e.length, r = ""; --t > -1;) r += e[~~(Math.random() * i)];
					return r
				},
				u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
				c = u.toLowerCase(),
				p = {
					upperCase: new a(u),
					lowerCase: new a(c),
					upperAndLowerCase: new a(u + c)
				},
				d = function() {
					s = r = o()
				},
				f = {
					version: "3.12.5",
					name: "scrambleText",
					register: function(t, e, i) {
						r = t, d()
					},
					init: function(t, e, i, r, o) {
						if (s || d(), this.prop = "innerHTML" in t ? "innerHTML" : "textContent" in t ? "textContent" : 0, this.prop) {
							this.target = t, "object" != typeof e && (e = {
								text: e
							});
							var h, u, c, f, m = e.text || e.value || "",
								g = !1 !== e.trim,
								v = this;
							return v.delimiter = h = e.delimiter || "", v.original = (0, n.K6)((0, n.q4)(t).replace(l, " ").split("&nbsp;").join(""), h, g), "{original}" !== m && !0 !== m && null != m || (m = v.original.join(h)), v.text = (0, n.K6)((m || "").replace(l, " "), h, g), v.hasClass = !(!e.newClass && !e.oldClass), v.newClass = e.newClass, v.oldClass = e.oldClass, f = "" === h, v.textHasEmoji = f && !!v.text.emoji, v.charsHaveEmoji = !!e.chars && !!(0, n.K6)(e.chars).emoji, v.length = f ? v.original.length : v.original.join(h).length, v.lengthDif = (f ? v.text.length : v.text.join(h).length) - v.length, v.fillChar = e.fillChar || e.chars && ~e.chars.indexOf(" ") ? "&nbsp;" : "", v.charSet = c = p[e.chars || "upperCase"] || new a(e.chars), v.speed = .05 / (e.speed || 1), v.prevScrambleTime = 0, v.setIndex = 20 * Math.random() | 0, (u = v.length + Math.max(v.lengthDif, 0)) > c.length && c.grow(u), v.chars = c.sets[v.setIndex], v.revealDelay = e.revealDelay || 0, v.tweenLength = !1 !== e.tweenLength, v.tween = i, v.rightToLeft = !!e.rightToLeft, v._props.push("scrambleText", "text"), 1
						}
					},
					render: function(t, e) {
						var i, r, s, a, o, l, h, u, c, p, d, f = e.target,
							m = e.prop,
							g = e.text,
							v = e.delimiter,
							y = e.tween,
							D = e.prevScrambleTime,
							b = e.revealDelay,
							_ = e.setIndex,
							w = e.chars,
							x = e.charSet,
							C = e.length,
							E = e.textHasEmoji,
							T = e.charsHaveEmoji,
							S = e.lengthDif,
							k = e.tweenLength,
							P = e.oldClass,
							A = e.newClass,
							M = e.rightToLeft,
							F = e.fillChar,
							L = e.speed,
							I = e.original,
							O = e.hasClass,
							R = g.length,
							B = y._time,
							z = B - D;
						b && (y._from && (B = y._dur - B), t = 0 === B ? 0 : B < b ? 1e-6 : B === y._dur ? 1 : y._ease((B - b) / (y._dur - b))), t < 0 ? t = 0 : t > 1 && (t = 1), M && (t = 1 - t), i = ~~(t * R + .5), t ? ((z > L || z < -L) && (e.setIndex = _ = (_ + (19 * Math.random() | 0)) % 20, e.chars = x.sets[_], e.prevScrambleTime += z), a = w) : a = I.join(v), d = y._from ? t : 1 - t, p = C + (k ? y._from ? d * d * d : 1 - d * d * d : 1) * S, M ? 1 !== t || !y._from && "isFromStart" !== y.data ? (h = g.slice(i).join(v), s = T ? (0, n.K6)(a).slice(0, p - (E ? (0, n.K6)(h) : h).length + .5 | 0).join("") : a.substr(0, p - (E ? (0, n.K6)(h) : h).length + .5 | 0), a = h) : (s = "", a = I.join(v)) : (s = g.slice(0, i).join(v), r = (E ? (0, n.K6)(s) : s).length, a = T ? (0, n.K6)(a).slice(r, p + .5 | 0).join("") : a.substr(r, p - r + .5 | 0)), h = O ? ((o = (u = M ? P : A) && 0 !== i) ? "<span class='" + u + "'>" : "") + s + (o ? "</span>" : "") + ((l = (c = M ? A : P) && i !== R) ? "<span class='" + c + "'>" : "") + v + a + (l ? "</span>" : "") : s + v + a, f[m] = "&nbsp;" === F && ~h.indexOf("  ") ? h.split("  ").join("&nbsp;&nbsp;") : h
					}
				};
			f.emojiSafeSplit = n.K6, f.getText = n.q4, o() && r.registerPlugin(f)
		},
		571: function(t, e, i) {
			"use strict";
			i.d(e, {
				A: function() {
					return b
				}
			});
			var r, s, n, a, o, l, h, u, c = function() {
					return "undefined" != typeof window
				},
				p = function() {
					return r || c() && (r = window.gsap) && r.registerPlugin && r
				},
				d = function(t) {
					return "string" == typeof t
				},
				f = function(t) {
					return "function" == typeof t
				},
				m = function(t, e) {
					var i = "x" === e ? "Width" : "Height",
						r = "scroll" + i,
						s = "client" + i;
					return t === n || t === a || t === o ? Math.max(a[r], o[r]) - (n["inner" + i] || a[s] || o[s]) : t[r] - t["offset" + i]
				},
				g = function(t, e) {
					var i = "scroll" + ("x" === e ? "Left" : "Top");
					return t === n && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != a[i] ? a : o),
						function() {
							return t[i]
						}
				},
				v = function(t, e) {
					if (!(t = l(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
						x: 0,
						y: 0
					};
					var i = t.getBoundingClientRect(),
						r = !e || e === n || e === o,
						s = r ? {
							top: a.clientTop - (n.pageYOffset || a.scrollTop || o.scrollTop || 0),
							left: a.clientLeft - (n.pageXOffset || a.scrollLeft || o.scrollLeft || 0)
						} : e.getBoundingClientRect(),
						h = {
							x: i.left - s.left,
							y: i.top - s.top
						};
					return !r && e && (h.x += g(e, "x")(), h.y += g(e, "y")()), h
				},
				y = function(t, e, i, r, s) {
					return isNaN(t) || "object" == typeof t ? d(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - s : "max" === t ? m(e, i) - s : Math.min(m(e, i), v(t, e)[i] - s) : parseFloat(t) - s
				},
				D = function() {
					r = p(), c() && r && "undefined" != typeof document && document.body && (n = window, o = document.body, a = document.documentElement, l = r.utils.toArray, r.config({
						autoKillThreshold: 7
					}), h = r.config(), s = 1)
				},
				b = {
					version: "3.12.5",
					name: "scrollTo",
					rawVars: 1,
					register: function(t) {
						r = t, D()
					},
					init: function(t, e, i, a, o) {
						s || D();
						var l = this,
							h = r.getProperty(t, "scrollSnapType");
						l.isWin = t === n, l.target = t, l.tween = i, e = function(t, e, i, r) {
							if (f(t) && (t = t(e, i, r)), "object" != typeof t) return d(t) && "max" !== t && "=" !== t.charAt(1) ? {
								x: t,
								y: t
							} : {
								y: t
							};
							if (t.nodeType) return {
								y: t,
								x: t
							};
							var s, n = {};
							for (s in t) n[s] = "onAutoKill" !== s && f(t[s]) ? t[s](e, i, r) : t[s];
							return n
						}(e, a, t, o), l.vars = e, l.autoKill = !!e.autoKill, l.getX = g(t, "x"), l.getY = g(t, "y"), l.x = l.xPrev = l.getX(), l.y = l.yPrev = l.getY(), u || (u = r.core.globals().ScrollTrigger), "smooth" === r.getProperty(t, "scrollBehavior") && r.set(t, {
							scrollBehavior: "auto"
						}), h && "none" !== h && (l.snap = 1, l.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (l.add(l, "x", l.x, y(e.x, t, "x", l.x, e.offsetX || 0), a, o), l._props.push("scrollTo_x")) : l.skipX = 1, null != e.y ? (l.add(l, "y", l.y, y(e.y, t, "y", l.y, e.offsetY || 0), a, o), l._props.push("scrollTo_y")) : l.skipY = 1
					},
					render: function(t, e) {
						for (var i, r, s, a, o, l = e._pt, c = e.target, p = e.tween, d = e.autoKill, f = e.xPrev, g = e.yPrev, v = e.isWin, y = e.snap, D = e.snapInline; l;) l.r(t, l.d), l = l._next;
						i = v || !e.skipX ? e.getX() : f, s = (r = v || !e.skipY ? e.getY() : g) - g, a = i - f, o = h.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), d && (!e.skipX && (a > o || a < -o) && i < m(c, "x") && (e.skipX = 1), !e.skipY && (s > o || s < -o) && r < m(c, "y") && (e.skipY = 1), e.skipX && e.skipY && (p.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))), v ? n.scrollTo(e.skipX ? i : e.x, e.skipY ? r : e.y) : (e.skipY || (c.scrollTop = e.y), e.skipX || (c.scrollLeft = e.x)), !y || 1 !== t && 0 !== t || (r = c.scrollTop, i = c.scrollLeft, D ? c.style.scrollSnapType = D : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = i + 1, c.scrollTop = r, c.scrollLeft = i), e.xPrev = e.x, e.yPrev = e.y, u && u.update()
					},
					kill: function(t) {
						var e = "scrollTo" === t,
							i = this._props.indexOf(t);
						return (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1), i > -1 && this._props.splice(i, 1), !this._props.length
					}
				};
			b.max = m, b.getOffset = v, b.buildGetter = g, p() && r.registerPlugin(b)
		},
		575: function(t, e, i) {
			"use strict";

			function r(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			i.d(e, {
				u: function() {
					return li
				}
			});
			var s, n, a, o, l, h, u, c, p, d, f, m, g, v = function() {
					return s || "undefined" != typeof window && (s = window.gsap) && s.registerPlugin && s
				},
				y = 1,
				D = [],
				b = [],
				_ = [],
				w = Date.now,
				x = function(t, e) {
					return e
				},
				C = function(t, e) {
					return ~_.indexOf(t) && _[_.indexOf(t) + 1][e]
				},
				E = function(t) {
					return !!~d.indexOf(t)
				},
				T = function(t, e, i, r, s) {
					return t.addEventListener(e, i, {
						passive: !1 !== r,
						capture: !!s
					})
				},
				S = function(t, e, i, r) {
					return t.removeEventListener(e, i, !!r)
				},
				k = "scrollLeft",
				P = "scrollTop",
				A = function() {
					return f && f.isPressed || b.cache++
				},
				M = function(t, e) {
					var i = function i(r) {
						if (r || 0 === r) {
							y && (a.history.scrollRestoration = "manual");
							var s = f && f.isPressed;
							r = i.v = Math.round(r) || (f && f.iOS ? 1 : 0), t(r), i.cacheID = b.cache, s && x("ss", r)
						} else(e || b.cache !== i.cacheID || x("ref")) && (i.cacheID = b.cache, i.v = t());
						return i.v + i.offset
					};
					return i.offset = 0, t && i
				},
				F = {
					s: k,
					p: "left",
					p2: "Left",
					os: "right",
					os2: "Right",
					d: "width",
					d2: "Width",
					a: "x",
					sc: M((function(t) {
						return arguments.length ? a.scrollTo(t, L.sc()) : a.pageXOffset || o[k] || l[k] || h[k] || 0
					}))
				},
				L = {
					s: P,
					p: "top",
					p2: "Top",
					os: "bottom",
					os2: "Bottom",
					d: "height",
					d2: "Height",
					a: "y",
					op: F,
					sc: M((function(t) {
						return arguments.length ? a.scrollTo(F.sc(), t) : a.pageYOffset || o[P] || l[P] || h[P] || 0
					}))
				},
				I = function(t, e) {
					return (e && e._ctx && e._ctx.selector || s.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== s.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
				},
				O = function(t, e) {
					var i = e.s,
						r = e.sc;
					E(t) && (t = o.scrollingElement || l);
					var n = b.indexOf(t),
						a = r === L.sc ? 1 : 2;
					!~n && (n = b.push(t) - 1), b[n + a] || T(t, "scroll", A);
					var h = b[n + a],
						u = h || (b[n + a] = M(C(t, i), !0) || (E(t) ? r : M((function(e) {
							return arguments.length ? t[i] = e : t[i]
						}))));
					return u.target = t, h || (u.smooth = "smooth" === s.getProperty(t, "scrollBehavior")), u
				},
				R = function(t, e, i) {
					var r = t,
						s = t,
						n = w(),
						a = n,
						o = e || 50,
						l = Math.max(500, 3 * o),
						h = function(t, e) {
							var l = w();
							e || l - n > o ? (s = r, r = t, a = n, n = l) : i ? r += t : r = s + (t - s) / (l - a) * (n - a)
						};
					return {
						update: h,
						reset: function() {
							s = r = i ? 0 : r, a = n = 0
						},
						getVelocity: function(t) {
							var e = a,
								o = s,
								u = w();
							return (t || 0 === t) && t !== r && h(t), n === a || u - a > l ? 0 : (r + (i ? o : -o)) / ((i ? u : n) - e) * 1e3
						}
					}
				},
				B = function(t, e) {
					return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
				},
				z = function(t) {
					var e = Math.max.apply(Math, t),
						i = Math.min.apply(Math, t);
					return Math.abs(e) >= Math.abs(i) ? e : i
				},
				N = function() {
					var t, e, i, r;
					(p = s.core.globals().ScrollTrigger) && p.core && (t = p.core, e = t.bridge || {}, i = t._scrollers, r = t._proxies, i.push.apply(i, b), r.push.apply(r, _), b = i, _ = r, x = function(t, i) {
						return e[t](i)
					})
				},
				V = function(t) {
					return s = t || v(), !n && s && "undefined" != typeof document && document.body && (a = window, o = document, l = o.documentElement, h = o.body, d = [a, o, l, h], s.utils.clamp, g = s.core.context || function() {}, c = "onpointerenter" in h ? "pointer" : "mouse", u = X.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = X.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
						return y = 0
					}), 500), N(), n = 1), n
				};
			F.op = L, b.cache = 0;
			var X = function() {
				function t(t) {
					this.init(t)
				}
				var e, i, d;
				return t.prototype.init = function(t) {
					n || V(s) || console.warn("Please gsap.registerPlugin(Observer)"), p || N();
					var e = t.tolerance,
						i = t.dragMinimum,
						r = t.type,
						d = t.target,
						v = t.lineHeight,
						y = t.debounce,
						b = t.preventDefault,
						_ = t.onStop,
						x = t.onStopDelay,
						C = t.ignore,
						k = t.wheelSpeed,
						P = t.event,
						M = t.onDragStart,
						X = t.onDragEnd,
						Y = t.onDrag,
						H = t.onPress,
						j = t.onRelease,
						q = t.onRight,
						W = t.onLeft,
						G = t.onUp,
						$ = t.onDown,
						U = t.onChangeX,
						K = t.onChangeY,
						J = t.onChange,
						Z = t.onToggleX,
						Q = t.onToggleY,
						tt = t.onHover,
						et = t.onHoverEnd,
						it = t.onMove,
						rt = t.ignoreCheck,
						st = t.isNormalizer,
						nt = t.onGestureStart,
						at = t.onGestureEnd,
						ot = t.onWheel,
						lt = t.onEnable,
						ht = t.onDisable,
						ut = t.onClick,
						ct = t.scrollSpeed,
						pt = t.capture,
						dt = t.allowClicks,
						ft = t.lockAxis,
						mt = t.onLockAxis;
					this.target = d = I(d) || l, this.vars = t, C && (C = s.utils.toArray(C)), e = e || 1e-9, i = i || 0, k = k || 1, ct = ct || 1, r = r || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(a.getComputedStyle(h).lineHeight) || 22);
					var gt, vt, yt, Dt, bt, _t, wt, xt = this,
						Ct = 0,
						Et = 0,
						Tt = t.passive || !b,
						St = O(d, F),
						kt = O(d, L),
						Pt = St(),
						At = kt(),
						Mt = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === m[0],
						Ft = E(d),
						Lt = d.ownerDocument || o,
						It = [0, 0, 0],
						Ot = [0, 0, 0],
						Rt = 0,
						Bt = function() {
							return Rt = w()
						},
						zt = function(t, e) {
							return (xt.event = t) && C && ~C.indexOf(t.target) || e && Mt && "touch" !== t.pointerType || rt && rt(t, e)
						},
						Nt = function() {
							var t = xt.deltaX = z(It),
								i = xt.deltaY = z(Ot),
								r = Math.abs(t) >= e,
								s = Math.abs(i) >= e;
							J && (r || s) && J(xt, t, i, It, Ot), r && (q && xt.deltaX > 0 && q(xt), W && xt.deltaX < 0 && W(xt), U && U(xt), Z && xt.deltaX < 0 != Ct < 0 && Z(xt), Ct = xt.deltaX, It[0] = It[1] = It[2] = 0), s && ($ && xt.deltaY > 0 && $(xt), G && xt.deltaY < 0 && G(xt), K && K(xt), Q && xt.deltaY < 0 != Et < 0 && Q(xt), Et = xt.deltaY, Ot[0] = Ot[1] = Ot[2] = 0), (Dt || yt) && (it && it(xt), yt && (Y(xt), yt = !1), Dt = !1), _t && !(_t = !1) && mt && mt(xt), bt && (ot(xt), bt = !1), gt = 0
						},
						Vt = function(t, e, i) {
							It[i] += t, Ot[i] += e, xt._vx.update(t), xt._vy.update(e), y ? gt || (gt = requestAnimationFrame(Nt)) : Nt()
						},
						Xt = function(t, e) {
							ft && !wt && (xt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y", _t = !0), "y" !== wt && (It[2] += t, xt._vx.update(t, !0)), "x" !== wt && (Ot[2] += e, xt._vy.update(e, !0)), y ? gt || (gt = requestAnimationFrame(Nt)) : Nt()
						},
						Yt = function(t) {
							if (!zt(t, 1)) {
								var e = (t = B(t, b)).clientX,
									r = t.clientY,
									s = e - xt.x,
									n = r - xt.y,
									a = xt.isDragging;
								xt.x = e, xt.y = r, (a || Math.abs(xt.startX - e) >= i || Math.abs(xt.startY - r) >= i) && (Y && (yt = !0), a || (xt.isDragging = !0), Xt(s, n), a || M && M(xt))
							}
						},
						Ht = xt.onPress = function(t) {
							zt(t, 1) || t && t.button || (xt.axis = wt = null, vt.pause(), xt.isPressed = !0, t = B(t), Ct = Et = 0, xt.startX = xt.x = t.clientX, xt.startY = xt.y = t.clientY, xt._vx.reset(), xt._vy.reset(), T(st ? d : Lt, m[1], Yt, Tt, !0), xt.deltaX = xt.deltaY = 0, H && H(xt))
						},
						jt = xt.onRelease = function(t) {
							if (!zt(t, 1)) {
								S(st ? d : Lt, m[1], Yt, !0);
								var e = !isNaN(xt.y - xt.startY),
									i = xt.isDragging,
									r = i && (Math.abs(xt.x - xt.startX) > 3 || Math.abs(xt.y - xt.startY) > 3),
									n = B(t);
								!r && e && (xt._vx.reset(), xt._vy.reset(), b && dt && s.delayedCall(.08, (function() {
									if (w() - Rt > 300 && !t.defaultPrevented)
										if (t.target.click) t.target.click();
										else if (Lt.createEvent) {
										var e = Lt.createEvent("MouseEvents");
										e.initMouseEvent("click", !0, !0, a, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
									}
								}))), xt.isDragging = xt.isGesturing = xt.isPressed = !1, _ && i && !st && vt.restart(!0), X && i && X(xt), j && j(xt, r)
							}
						},
						qt = function(t) {
							return t.touches && t.touches.length > 1 && (xt.isGesturing = !0) && nt(t, xt.isDragging)
						},
						Wt = function() {
							return (xt.isGesturing = !1) || at(xt)
						},
						Gt = function(t) {
							if (!zt(t)) {
								var e = St(),
									i = kt();
								Vt((e - Pt) * ct, (i - At) * ct, 1), Pt = e, At = i, _ && vt.restart(!0)
							}
						},
						$t = function(t) {
							if (!zt(t)) {
								t = B(t, b), ot && (bt = !0);
								var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? a.innerHeight : 1) * k;
								Vt(t.deltaX * e, t.deltaY * e, 0), _ && !st && vt.restart(!0)
							}
						},
						Ut = function(t) {
							if (!zt(t)) {
								var e = t.clientX,
									i = t.clientY,
									r = e - xt.x,
									s = i - xt.y;
								xt.x = e, xt.y = i, Dt = !0, _ && vt.restart(!0), (r || s) && Xt(r, s)
							}
						},
						Kt = function(t) {
							xt.event = t, tt(xt)
						},
						Jt = function(t) {
							xt.event = t, et(xt)
						},
						Zt = function(t) {
							return zt(t) || B(t, b) && ut(xt)
						};
					vt = xt._dc = s.delayedCall(x || .25, (function() {
						xt._vx.reset(), xt._vy.reset(), vt.pause(), _ && _(xt)
					})).pause(), xt.deltaX = xt.deltaY = 0, xt._vx = R(0, 50, !0), xt._vy = R(0, 50, !0), xt.scrollX = St, xt.scrollY = kt, xt.isDragging = xt.isGesturing = xt.isPressed = !1, g(this), xt.enable = function(t) {
						return xt.isEnabled || (T(Ft ? Lt : d, "scroll", A), r.indexOf("scroll") >= 0 && T(Ft ? Lt : d, "scroll", Gt, Tt, pt), r.indexOf("wheel") >= 0 && T(d, "wheel", $t, Tt, pt), (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (T(d, m[0], Ht, Tt, pt), T(Lt, m[2], jt), T(Lt, m[3], jt), dt && T(d, "click", Bt, !0, !0), ut && T(d, "click", Zt), nt && T(Lt, "gesturestart", qt), at && T(Lt, "gestureend", Wt), tt && T(d, c + "enter", Kt), et && T(d, c + "leave", Jt), it && T(d, c + "move", Ut)), xt.isEnabled = !0, t && t.type && Ht(t), lt && lt(xt)), xt
					}, xt.disable = function() {
						xt.isEnabled && (D.filter((function(t) {
							return t !== xt && E(t.target)
						})).length || S(Ft ? Lt : d, "scroll", A), xt.isPressed && (xt._vx.reset(), xt._vy.reset(), S(st ? d : Lt, m[1], Yt, !0)), S(Ft ? Lt : d, "scroll", Gt, pt), S(d, "wheel", $t, pt), S(d, m[0], Ht, pt), S(Lt, m[2], jt), S(Lt, m[3], jt), S(d, "click", Bt, !0), S(d, "click", Zt), S(Lt, "gesturestart", qt), S(Lt, "gestureend", Wt), S(d, c + "enter", Kt), S(d, c + "leave", Jt), S(d, c + "move", Ut), xt.isEnabled = xt.isPressed = xt.isDragging = !1, ht && ht(xt))
					}, xt.kill = xt.revert = function() {
						xt.disable();
						var t = D.indexOf(xt);
						t >= 0 && D.splice(t, 1), f === xt && (f = 0)
					}, D.push(xt), st && E(d) && (f = xt), xt.enable(P)
				}, e = t, (i = [{
					key: "velocityX",
					get: function() {
						return this._vx.getVelocity()
					}
				}, {
					key: "velocityY",
					get: function() {
						return this._vy.getVelocity()
					}
				}]) && r(e.prototype, i), d && r(e, d), t
			}();
			X.version = "3.12.5", X.create = function(t) {
				return new X(t)
			}, X.register = V, X.getAll = function() {
				return D.slice()
			}, X.getById = function(t) {
				return D.filter((function(e) {
					return e.vars.id === t
				}))[0]
			}, v() && s.registerPlugin(X);
			var Y, H, j, q, W, G, $, U, K, J, Z, Q, tt, et, it, rt, st, nt, at, ot, lt, ht, ut, ct, pt, dt, ft, mt, gt, vt, yt, Dt, bt, _t, wt, xt, Ct, Et, Tt = 1,
				St = Date.now,
				kt = St(),
				Pt = 0,
				At = 0,
				Mt = function(t, e, i) {
					var r = qt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
					return i["_" + e + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t
				},
				Ft = function(t, e) {
					return !e || qt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
				},
				Lt = function t() {
					return At && requestAnimationFrame(t)
				},
				It = function() {
					return et = 1
				},
				Ot = function() {
					return et = 0
				},
				Rt = function(t) {
					return t
				},
				Bt = function(t) {
					return Math.round(1e5 * t) / 1e5 || 0
				},
				zt = function() {
					return "undefined" != typeof window
				},
				Nt = function() {
					return Y || zt() && (Y = window.gsap) && Y.registerPlugin && Y
				},
				Vt = function(t) {
					return !!~$.indexOf(t)
				},
				Xt = function(t) {
					return ("Height" === t ? yt : j["inner" + t]) || W["client" + t] || G["client" + t]
				},
				Yt = function(t) {
					return C(t, "getBoundingClientRect") || (Vt(t) ? function() {
						return ei.width = j.innerWidth, ei.height = yt, ei
					} : function() {
						return fe(t)
					})
				},
				Ht = function(t, e) {
					var i = e.s,
						r = e.d2,
						s = e.d,
						n = e.a;
					return Math.max(0, (i = "scroll" + r) && (n = C(t, i)) ? n() - Yt(t)()[s] : Vt(t) ? (W[i] || G[i]) - Xt(r) : t[i] - t["offset" + r])
				},
				jt = function(t, e) {
					for (var i = 0; i < at.length; i += 3)(!e || ~e.indexOf(at[i + 1])) && t(at[i], at[i + 1], at[i + 2])
				},
				qt = function(t) {
					return "string" == typeof t
				},
				Wt = function(t) {
					return "function" == typeof t
				},
				Gt = function(t) {
					return "number" == typeof t
				},
				$t = function(t) {
					return "object" == typeof t
				},
				Ut = function(t, e, i) {
					return t && t.progress(e ? 0 : 1) && i && t.pause()
				},
				Kt = function(t, e) {
					if (t.enabled) {
						var i = t._ctx ? t._ctx.add((function() {
							return e(t)
						})) : e(t);
						i && i.totalTime && (t.callbackAnimation = i)
					}
				},
				Jt = Math.abs,
				Zt = "left",
				Qt = "right",
				te = "bottom",
				ee = "width",
				ie = "height",
				re = "Right",
				se = "Left",
				ne = "Top",
				ae = "Bottom",
				oe = "padding",
				le = "margin",
				he = "Width",
				ue = "Height",
				ce = "px",
				pe = function(t) {
					return j.getComputedStyle(t)
				},
				de = function(t, e) {
					for (var i in e) i in t || (t[i] = e[i]);
					return t
				},
				fe = function(t, e) {
					var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== pe(t)[it] && Y.to(t, {
							x: 0,
							y: 0,
							xPercent: 0,
							yPercent: 0,
							rotation: 0,
							rotationX: 0,
							rotationY: 0,
							scale: 1,
							skewX: 0,
							skewY: 0
						}).progress(1),
						r = t.getBoundingClientRect();
					return i && i.progress(0).kill(), r
				},
				me = function(t, e) {
					var i = e.d2;
					return t["offset" + i] || t["client" + i] || 0
				},
				ge = function(t) {
					var e, i = [],
						r = t.labels,
						s = t.duration();
					for (e in r) i.push(r[e] / s);
					return i
				},
				ve = function(t) {
					var e = Y.utils.snap(t),
						i = Array.isArray(t) && t.slice(0).sort((function(t, e) {
							return t - e
						}));
					return i ? function(t, r, s) {
						var n;
						if (void 0 === s && (s = .001), !r) return e(t);
						if (r > 0) {
							for (t -= s, n = 0; n < i.length; n++)
								if (i[n] >= t) return i[n];
							return i[n - 1]
						}
						for (n = i.length, t += s; n--;)
							if (i[n] <= t) return i[n];
						return i[0]
					} : function(i, r, s) {
						void 0 === s && (s = .001);
						var n = e(i);
						return !r || Math.abs(n - i) < s || n - i < 0 == r < 0 ? n : e(r < 0 ? i - t : i + t)
					}
				},
				ye = function(t, e, i, r) {
					return i.split(",").forEach((function(i) {
						return t(e, i, r)
					}))
				},
				De = function(t, e, i, r, s) {
					return t.addEventListener(e, i, {
						passive: !r,
						capture: !!s
					})
				},
				be = function(t, e, i, r) {
					return t.removeEventListener(e, i, !!r)
				},
				_e = function(t, e, i) {
					(i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i))
				},
				we = {
					startColor: "green",
					endColor: "red",
					indent: 0,
					fontSize: "16px",
					fontWeight: "normal"
				},
				xe = {
					toggleActions: "play",
					anticipatePin: 0
				},
				Ce = {
					top: 0,
					left: 0,
					center: .5,
					bottom: 1,
					right: 1
				},
				Ee = function(t, e) {
					if (qt(t)) {
						var i = t.indexOf("="),
							r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
						~i && (t.indexOf("%") > i && (r *= e / 100), t = t.substr(0, i - 1)), t = r + (t in Ce ? Ce[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
					}
					return t
				},
				Te = function(t, e, i, r, s, n, a, o) {
					var l = s.startColor,
						h = s.endColor,
						u = s.fontSize,
						c = s.indent,
						p = s.fontWeight,
						d = q.createElement("div"),
						f = Vt(i) || "fixed" === C(i, "pinType"),
						m = -1 !== t.indexOf("scroller"),
						g = f ? G : i,
						v = -1 !== t.indexOf("start"),
						y = v ? l : h,
						D = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
					return D += "position:" + ((m || o) && f ? "fixed;" : "absolute;"), (m || o || !f) && (D += (r === L ? Qt : te) + ":" + (n + parseFloat(c)) + "px;"), a && (D += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = D, d.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d), d._offset = d["offset" + r.op.d2], Se(d, 0, r, v), d
				},
				Se = function(t, e, i, r) {
					var s = {
							display: "block"
						},
						n = i[r ? "os2" : "p2"],
						a = i[r ? "p2" : "os2"];
					t._isFlipped = r, s[i.a + "Percent"] = r ? -100 : 0, s[i.a] = r ? "1px" : 0, s["border" + n + he] = 1, s["border" + a + he] = 0, s[i.p] = e + "px", Y.set(t, s)
				},
				ke = [],
				Pe = {},
				Ae = function() {
					return St() - Pt > 34 && (wt || (wt = requestAnimationFrame($e)))
				},
				Me = function() {
					(!ut || !ut.isPressed || ut.startX > G.clientWidth) && (b.cache++, ut ? wt || (wt = requestAnimationFrame($e)) : $e(), Pt || Be("scrollStart"), Pt = St())
				},
				Fe = function() {
					dt = j.innerWidth, pt = j.innerHeight
				},
				Le = function() {
					b.cache++, !tt && !ht && !q.fullscreenElement && !q.webkitFullscreenElement && (!ct || dt !== j.innerWidth || Math.abs(j.innerHeight - pt) > .25 * j.innerHeight) && U.restart(!0)
				},
				Ie = {},
				Oe = [],
				Re = function t() {
					return be(li, "scrollEnd", t) || qe(!0)
				},
				Be = function(t) {
					return Ie[t] && Ie[t].map((function(t) {
						return t()
					})) || Oe
				},
				ze = [],
				Ne = function(t) {
					for (var e = 0; e < ze.length; e += 5)(!t || ze[e + 4] && ze[e + 4].query === t) && (ze[e].style.cssText = ze[e + 1], ze[e].getBBox && ze[e].setAttribute("transform", ze[e + 2] || ""), ze[e + 3].uncache = 1)
				},
				Ve = function(t, e) {
					var i;
					for (rt = 0; rt < ke.length; rt++) !(i = ke[rt]) || e && i._ctx !== e || (t ? i.kill(1) : i.revert(!0, !0));
					Dt = !0, e && Ne(e), e || Be("revert")
				},
				Xe = function(t, e) {
					b.cache++, (e || !xt) && b.forEach((function(t) {
						return Wt(t) && t.cacheID++ && (t.rec = 0)
					})), qt(t) && (j.history.scrollRestoration = gt = t)
				},
				Ye = 0,
				He = function() {
					G.appendChild(vt), yt = !ut && vt.offsetHeight || j.innerHeight, G.removeChild(vt)
				},
				je = function(t) {
					return K(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function(e) {
						return e.style.display = t ? "none" : "block"
					}))
				},
				qe = function(t, e) {
					if (!Pt || t || Dt) {
						He(), xt = li.isRefreshing = !0, b.forEach((function(t) {
							return Wt(t) && ++t.cacheID && (t.rec = t())
						}));
						var i = Be("refreshInit");
						ot && li.sort(), e || Ve(), b.forEach((function(t) {
							Wt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
						})), ke.slice(0).forEach((function(t) {
							return t.refresh()
						})), Dt = !1, ke.forEach((function(t) {
							if (t._subPinOffset && t.pin) {
								var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
									i = t.pin[e];
								t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - i), t.refresh()
							}
						})), bt = 1, je(!0), ke.forEach((function(t) {
							var e = Ht(t.scroller, t._dir),
								i = "max" === t.vars.end || t._endClamp && t.end > e,
								r = t._startClamp && t.start >= e;
							(i || r) && t.setPositions(r ? e - 1 : t.start, i ? Math.max(r ? e : t.start + 1, e) : t.end, !0)
						})), je(!1), bt = 0, i.forEach((function(t) {
							return t && t.render && t.render(-1)
						})), b.forEach((function(t) {
							Wt(t) && (t.smooth && requestAnimationFrame((function() {
								return t.target.style.scrollBehavior = "smooth"
							})), t.rec && t(t.rec))
						})), Xe(gt, 1), U.pause(), Ye++, xt = 2, $e(2), ke.forEach((function(t) {
							return Wt(t.vars.onRefresh) && t.vars.onRefresh(t)
						})), xt = li.isRefreshing = !1, Be("refresh")
					} else De(li, "scrollEnd", Re)
				},
				We = 0,
				Ge = 1,
				$e = function(t) {
					if (2 === t || !xt && !Dt) {
						li.isUpdating = !0, Et && Et.update(0);
						var e = ke.length,
							i = St(),
							r = i - kt >= 50,
							s = e && ke[0].scroll();
						if (Ge = We > s ? -1 : 1, xt || (We = s), r && (Pt && !et && i - Pt > 200 && (Pt = 0, Be("scrollEnd")), Z = kt, kt = i), Ge < 0) {
							for (rt = e; rt-- > 0;) ke[rt] && ke[rt].update(0, r);
							Ge = 1
						} else
							for (rt = 0; rt < e; rt++) ke[rt] && ke[rt].update(0, r);
						li.isUpdating = !1
					}
					wt = 0
				},
				Ue = [Zt, "top", te, Qt, le + ae, le + re, le + ne, le + se, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
				Ke = Ue.concat([ee, ie, "boxSizing", "max" + he, "max" + ue, "position", le, oe, oe + ne, oe + re, oe + ae, oe + se]),
				Je = function(t, e, i, r) {
					if (!t._gsap.swappedIn) {
						for (var s, n = Ue.length, a = e.style, o = t.style; n--;) a[s = Ue[n]] = i[s];
						a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o[te] = o[Qt] = "auto", a.flexBasis = i.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ee] = me(t, F) + ce, a[ie] = me(t, L) + ce, a[oe] = o[le] = o.top = o[Zt] = "0", Qe(r), o[ee] = o["max" + he] = i[ee], o[ie] = o["max" + ue] = i[ie], o[oe] = i[oe], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
					}
				},
				Ze = /([A-Z])/g,
				Qe = function(t) {
					if (t) {
						var e, i, r = t.t.style,
							s = t.length,
							n = 0;
						for ((t.t._gsap || Y.core.getCache(t.t)).uncache = 1; n < s; n += 2) i = t[n + 1], e = t[n], i ? r[e] = i : r[e] && r.removeProperty(e.replace(Ze, "-$1").toLowerCase())
					}
				},
				ti = function(t) {
					for (var e = Ke.length, i = t.style, r = [], s = 0; s < e; s++) r.push(Ke[s], i[Ke[s]]);
					return r.t = t, r
				},
				ei = {
					left: 0,
					top: 0
				},
				ii = function(t, e, i, r, s, n, a, o, l, h, u, c, p, d) {
					Wt(t) && (t = t(o)), qt(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? Ee("0" + t.substr(3), i) : 0));
					var f, m, g, v = p ? p.time() : 0;
					if (p && p.seek(0), isNaN(t) || (t = +t), Gt(t)) p && (t = Y.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, c, t)), a && Se(a, i, r, !0);
					else {
						Wt(e) && (e = e(o));
						var y, D, b, _, w = (t || "0").split(" ");
						g = I(e, o) || G, (y = fe(g) || {}) && (y.left || y.top) || "none" !== pe(g).display || (_ = g.style.display, g.style.display = "block", y = fe(g), _ ? g.style.display = _ : g.style.removeProperty("display")), D = Ee(w[0], y[r.d]), b = Ee(w[1] || "0", i), t = y[r.p] - l[r.p] - h + D + s - b, a && Se(a, b, r, i - b < 20 || a._isStart && b > 20), i -= i - b
					}
					if (d && (o[d] = t || -.001, t < 0 && (t = 0)), n) {
						var x = t + i,
							C = n._isStart;
						f = "scroll" + r.d2, Se(n, x, r, C && x > 20 || !C && (u ? Math.max(G[f], W[f]) : n.parentNode[f]) <= x + 1), u && (l = fe(a), u && (n.style[r.op.p] = l[r.op.p] - r.op.m - n._offset + ce))
					}
					return p && g && (f = fe(g), p.seek(c), m = fe(g), p._caScrollDist = f[r.p] - m[r.p], t = t / p._caScrollDist * c), p && p.seek(v), p ? t : Math.round(t)
				},
				ri = /(webkit|moz|length|cssText|inset)/i,
				si = function(t, e, i, r) {
					if (t.parentNode !== e) {
						var s, n, a = t.style;
						if (e === G) {
							for (s in t._stOrig = a.cssText, n = pe(t)) + s || ri.test(s) || !n[s] || "string" != typeof a[s] || "0" === s || (a[s] = n[s]);
							a.top = i, a.left = r
						} else a.cssText = t._stOrig;
						Y.core.getCache(t).uncache = 1, e.appendChild(t)
					}
				},
				ni = function(t, e, i) {
					var r = e,
						s = r;
					return function(e) {
						var n = Math.round(t());
						return n !== r && n !== s && Math.abs(n - r) > 3 && Math.abs(n - s) > 3 && (e = n, i && i()), s = r, r = e, e
					}
				},
				ai = function(t, e, i) {
					var r = {};
					r[e.p] = "+=" + i, Y.set(t, r)
				},
				oi = function(t, e) {
					var i = O(t, e),
						r = "_scroll" + e.p2,
						s = function e(s, n, a, o, l) {
							var h = e.tween,
								u = n.onComplete,
								c = {};
							a = a || i();
							var p = ni(i, a, (function() {
								h.kill(), e.tween = 0
							}));
							return l = o && l || 0, o = o || s - a, h && h.kill(), n[r] = s, n.inherit = !1, n.modifiers = c, c[r] = function() {
								return p(a + o * h.ratio + l * h.ratio * h.ratio)
							}, n.onUpdate = function() {
								b.cache++, e.tween && $e()
							}, n.onComplete = function() {
								e.tween = 0, u && u.call(h)
							}, h = e.tween = Y.to(t, n)
						};
					return t[r] = i, i.wheelHandler = function() {
						return s.tween && s.tween.kill() && (s.tween = 0)
					}, De(t, "wheel", i.wheelHandler), li.isTouch && De(t, "touchmove", i.wheelHandler), s
				},
				li = function() {
					function t(e, i) {
						H || t.register(Y) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), mt(this), this.init(e, i)
					}
					return t.prototype.init = function(e, i) {
						if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), At) {
							var r, s, n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, w, x, E, T, S, k, P, A, M, R, B, z, N, V, X, H, $, U, Q, it, st, nt, at, ht, ut, ct = e = de(qt(e) || Gt(e) || e.nodeType ? {
									trigger: e
								} : e, xe),
								pt = ct.onUpdate,
								dt = ct.toggleClass,
								ft = ct.id,
								mt = ct.onToggle,
								gt = ct.onRefresh,
								vt = ct.scrub,
								yt = ct.trigger,
								Dt = ct.pin,
								wt = ct.pinSpacing,
								kt = ct.invalidateOnRefresh,
								Lt = ct.anticipatePin,
								It = ct.onScrubComplete,
								Ot = ct.onSnapComplete,
								zt = ct.once,
								Nt = ct.snap,
								jt = ct.pinReparent,
								Zt = ct.pinSpacer,
								Qt = ct.containerAnimation,
								te = ct.fastScrollEnd,
								ye = ct.preventOverlaps,
								_e = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? F : L,
								Ce = !vt && 0 !== vt,
								Se = I(e.scroller || j),
								Ae = Y.core.getCache(Se),
								Fe = Vt(Se),
								Ie = "fixed" === ("pinType" in e ? e.pinType : C(Se, "pinType") || Fe && "fixed"),
								Oe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
								Be = Ce && e.toggleActions.split(" "),
								ze = "markers" in e ? e.markers : xe.markers,
								Ne = Fe ? 0 : parseFloat(pe(Se)["border" + _e.p2 + he]) || 0,
								Ve = this,
								Xe = e.onRefreshInit && function() {
									return e.onRefreshInit(Ve)
								},
								He = function(t, e, i) {
									var r = i.d,
										s = i.d2,
										n = i.a;
									return (n = C(t, "getBoundingClientRect")) ? function() {
										return n()[r]
									} : function() {
										return (e ? Xt(s) : t["client" + s]) || 0
									}
								}(Se, Fe, _e),
								je = function(t, e) {
									return !e || ~_.indexOf(t) ? Yt(t) : function() {
										return ei
									}
								}(Se, Fe),
								We = 0,
								$e = 0,
								Ue = 0,
								Ke = O(Se, _e);
							if (Ve._startClamp = Ve._endClamp = !1, Ve._dir = _e, Lt *= 45, Ve.scroller = Se, Ve.scroll = Qt ? Qt.time.bind(Qt) : Ke, a = Ke(), Ve.vars = e, i = i || e.animation, "refreshPriority" in e && (ot = 1, -9999 === e.refreshPriority && (Et = Ve)), Ae.tweenScroll = Ae.tweenScroll || {
									top: oi(Se, L),
									left: oi(Se, F)
								}, Ve.tweenTo = r = Ae.tweenScroll[_e.p], Ve.scrubDuration = function(t) {
									(H = Gt(t) && t) ? X ? X.duration(t) : X = Y.to(i, {
										ease: "expo",
										totalProgress: "+=0",
										inherit: !1,
										duration: H,
										paused: !0,
										onComplete: function() {
											return It && It(Ve)
										}
									}): (X && X.progress(1).kill(), X = 0)
								}, i && (i.vars.lazy = !1, i._initted && !Ve.isReverted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0), Ve.animation = i.pause(), i.scrollTrigger = Ve, Ve.scrubDuration(vt), N = 0, ft || (ft = i.vars.id)), Nt && ($t(Nt) && !Nt.push || (Nt = {
									snapTo: Nt
								}), "scrollBehavior" in G.style && Y.set(Fe ? [G, W] : Se, {
									scrollBehavior: "auto"
								}), b.forEach((function(t) {
									return Wt(t) && t.target === (Fe ? q.scrollingElement || W : Se) && (t.smooth = !1)
								})), n = Wt(Nt.snapTo) ? Nt.snapTo : "labels" === Nt.snapTo ? function(t) {
									return function(e) {
										return Y.utils.snap(ge(t), e)
									}
								}(i) : "labelsDirectional" === Nt.snapTo ? (at = i, function(t, e) {
									return ve(ge(at))(t, e.direction)
								}) : !1 !== Nt.directional ? function(t, e) {
									return ve(Nt.snapTo)(t, St() - $e < 500 ? 0 : e.direction)
								} : Y.utils.snap(Nt.snapTo), $ = Nt.duration || {
									min: .1,
									max: 2
								}, $ = $t($) ? J($.min, $.max) : J($, $), U = Y.delayedCall(Nt.delay || H / 2 || .1, (function() {
									var t = Ke(),
										e = St() - $e < 500,
										s = r.tween;
									if (!(e || Math.abs(Ve.getVelocity()) < 10) || s || et || We === t) Ve.isActive && We !== t && U.restart(!0);
									else {
										var a, o, u = (t - l) / g,
											c = i && !Ce ? i.totalProgress() : u,
											p = e ? 0 : (c - V) / (St() - Z) * 1e3 || 0,
											d = Y.utils.clamp(-u, 1 - u, Jt(p / 2) * p / .185),
											f = u + (!1 === Nt.inertia ? 0 : d),
											m = Nt,
											v = m.onStart,
											y = m.onInterrupt,
											D = m.onComplete;
										if (a = n(f, Ve), Gt(a) || (a = f), o = Math.round(l + a * g), t <= h && t >= l && o !== t) {
											if (s && !s._initted && s.data <= Jt(o - t)) return;
											!1 === Nt.inertia && (d = a - u), r(o, {
												duration: $(Jt(.185 * Math.max(Jt(f - c), Jt(a - c)) / p / .05 || 0)),
												ease: Nt.ease || "power3",
												data: Jt(o - t),
												onInterrupt: function() {
													return U.restart(!0) && y && y(Ve)
												},
												onComplete: function() {
													Ve.update(), We = Ke(), i && (X ? X.resetTo("totalProgress", a, i._tTime / i._tDur) : i.progress(a)), N = V = i && !Ce ? i.totalProgress() : Ve.progress, Ot && Ot(Ve), D && D(Ve)
												}
											}, t, d * g, o - t - d * g), v && v(Ve, r.tween)
										}
									}
								})).pause()), ft && (Pe[ft] = Ve), (nt = (yt = Ve.trigger = I(yt || !0 !== Dt && Dt)) && yt._gsap && yt._gsap.stRevert) && (nt = nt(Ve)), Dt = !0 === Dt ? yt : I(Dt), qt(dt) && (dt = {
									targets: yt,
									className: dt
								}), Dt && (!1 === wt || wt === le || (wt = !(!wt && Dt.parentNode && Dt.parentNode.style && "flex" === pe(Dt.parentNode).display) && oe), Ve.pin = Dt, (s = Y.core.getCache(Dt)).spacer ? v = s.pinState : (Zt && ((Zt = I(Zt)) && !Zt.nodeType && (Zt = Zt.current || Zt.nativeElement), s.spacerIsNative = !!Zt, Zt && (s.spacerState = ti(Zt))), s.spacer = w = Zt || q.createElement("div"), w.classList.add("pin-spacer"), ft && w.classList.add("pin-spacer-" + ft), s.pinState = v = ti(Dt)), !1 !== e.force3D && Y.set(Dt, {
									force3D: !0
								}), Ve.spacer = w = s.spacer, z = pe(Dt), P = z[wt + _e.os2], E = Y.getProperty(Dt), T = Y.quickSetter(Dt, _e.a, ce), Je(Dt, w, z), D = ti(Dt)), ze) {
								f = $t(ze) ? de(ze, we) : we, p = Te("scroller-start", ft, Se, _e, f, 0), d = Te("scroller-end", ft, Se, _e, f, 0, p), x = p["offset" + _e.op.d2];
								var Ze = I(C(Se, "content") || Se);
								u = this.markerStart = Te("start", ft, Ze, _e, f, x, 0, Qt), c = this.markerEnd = Te("end", ft, Ze, _e, f, x, 0, Qt), Qt && (st = Y.quickSetter([u, c], _e.a, ce)), Ie || _.length && !0 === C(Se, "fixedMarkers") || (ut = pe(ht = Fe ? G : Se).position, ht.style.position = "absolute" === ut || "fixed" === ut ? ut : "relative", Y.set([p, d], {
									force3D: !0
								}), M = Y.quickSetter(p, _e.a, ce), B = Y.quickSetter(d, _e.a, ce))
							}
							if (Qt) {
								var ri = Qt.vars.onUpdate,
									ni = Qt.vars.onUpdateParams;
								Qt.eventCallback("onUpdate", (function() {
									Ve.update(0, 0, 1), ri && ri.apply(Qt, ni || [])
								}))
							}
							if (Ve.previous = function() {
									return ke[ke.indexOf(Ve) - 1]
								}, Ve.next = function() {
									return ke[ke.indexOf(Ve) + 1]
								}, Ve.revert = function(t, e) {
									if (!e) return Ve.kill(!0);
									var r = !1 !== t || !Ve.enabled,
										s = tt;
									r !== Ve.isReverted && (r && (Q = Math.max(Ke(), Ve.scroll.rec || 0), Ue = Ve.progress, it = i && i.progress()), u && [u, c, p, d].forEach((function(t) {
										return t.style.display = r ? "none" : "block"
									})), r && (tt = Ve, Ve.update(r)), !Dt || jt && Ve.isActive || (r ? function(t, e, i) {
										Qe(i);
										var r = t._gsap;
										if (r.spacerIsNative) Qe(r.spacerState);
										else if (t._gsap.swappedIn) {
											var s = e.parentNode;
											s && (s.insertBefore(t, e), s.removeChild(e))
										}
										t._gsap.swappedIn = !1
									}(Dt, w, v) : Je(Dt, w, pe(Dt), A)), r || Ve.update(r), tt = s, Ve.isReverted = r)
								}, Ve.refresh = function(s, n, f, b) {
									if (!tt && Ve.enabled || n)
										if (Dt && s && Pt) De(t, "scrollEnd", Re);
										else {
											!xt && Xe && Xe(Ve), tt = Ve, r.tween && !f && (r.tween.kill(), r.tween = 0), X && X.pause(), kt && i && i.revert({
												kill: !1
											}).invalidate(), Ve.isReverted || Ve.revert(!0, !0), Ve._subPinOffset = !1;
											var _, x, C, T, P, M, B, z, N, V, H, j, $, K = He(),
												J = je(),
												Z = Qt ? Qt.duration() : Ht(Se, _e),
												et = g <= .01,
												rt = 0,
												st = b || 0,
												nt = $t(f) ? f.end : e.end,
												at = e.endTrigger || yt,
												ot = $t(f) ? f.start : e.start || (0 !== e.start && yt ? Dt ? "0 0" : "0 100%" : 0),
												ht = Ve.pinnedContainer = e.pinnedContainer && I(e.pinnedContainer, Ve),
												ut = yt && Math.max(0, ke.indexOf(Ve)) || 0,
												ct = ut;
											for (ze && $t(f) && (j = Y.getProperty(p, _e.p), $ = Y.getProperty(d, _e.p)); ct--;)(M = ke[ct]).end || M.refresh(0, 1) || (tt = Ve), !(B = M.pin) || B !== yt && B !== Dt && B !== ht || M.isReverted || (V || (V = []), V.unshift(M), M.revert(!0, !0)), M !== ke[ct] && (ut--, ct--);
											for (Wt(ot) && (ot = ot(Ve)), ot = Mt(ot, "start", Ve), l = ii(ot, yt, K, _e, Ke(), u, p, Ve, J, Ne, Ie, Z, Qt, Ve._startClamp && "_startClamp") || (Dt ? -.001 : 0), Wt(nt) && (nt = nt(Ve)), qt(nt) && !nt.indexOf("+=") && (~nt.indexOf(" ") ? nt = (qt(ot) ? ot.split(" ")[0] : "") + nt : (rt = Ee(nt.substr(2), K), nt = qt(ot) ? ot : (Qt ? Y.utils.mapRange(0, Qt.duration(), Qt.scrollTrigger.start, Qt.scrollTrigger.end, l) : l) + rt, at = yt)), nt = Mt(nt, "end", Ve), h = Math.max(l, ii(nt || (at ? "100% 0" : Z), at, K, _e, Ke() + rt, c, d, Ve, J, Ne, Ie, Z, Qt, Ve._endClamp && "_endClamp")) || -.001, rt = 0, ct = ut; ct--;)(B = (M = ke[ct]).pin) && M.start - M._pinPush <= l && !Qt && M.end > 0 && (_ = M.end - (Ve._startClamp ? Math.max(0, M.start) : M.start), (B === yt && M.start - M._pinPush < l || B === ht) && isNaN(ot) && (rt += _ * (1 - M.progress)), B === Dt && (st += _));
											if (l += rt, h += rt, Ve._startClamp && (Ve._startClamp += rt), Ve._endClamp && !xt && (Ve._endClamp = h || -.001, h = Math.min(h, Ht(Se, _e))), g = h - l || (l -= .01) && .001, et && (Ue = Y.utils.clamp(0, 1, Y.utils.normalize(l, h, Q))), Ve._pinPush = st, u && rt && ((_ = {})[_e.a] = "+=" + rt, ht && (_[_e.p] = "-=" + Ke()), Y.set([u, c], _)), !Dt || bt && Ve.end >= Ht(Se, _e)) {
												if (yt && Ke() && !Qt)
													for (x = yt.parentNode; x && x !== G;) x._pinOffset && (l -= x._pinOffset, h -= x._pinOffset), x = x.parentNode
											} else _ = pe(Dt), T = _e === L, C = Ke(), S = parseFloat(E(_e.a)) + st, !Z && h > 1 && (H = {
												style: H = (Fe ? q.scrollingElement || W : Se).style,
												value: H["overflow" + _e.a.toUpperCase()]
											}, Fe && "scroll" !== pe(G)["overflow" + _e.a.toUpperCase()] && (H.style["overflow" + _e.a.toUpperCase()] = "scroll")), Je(Dt, w, _), D = ti(Dt), x = fe(Dt, !0), z = Ie && O(Se, T ? F : L)(), wt ? ((A = [wt + _e.os2, g + st + ce]).t = w, (ct = wt === oe ? me(Dt, _e) + g + st : 0) && (A.push(_e.d, ct + ce), "auto" !== w.style.flexBasis && (w.style.flexBasis = ct + ce)), Qe(A), ht && ke.forEach((function(t) {
												t.pin === ht && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
											})), Ie && Ke(Q)) : (ct = me(Dt, _e)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = ct + ce), Ie && ((P = {
												top: x.top + (T ? C - l : z) + ce,
												left: x.left + (T ? z : C - l) + ce,
												boxSizing: "border-box",
												position: "fixed"
											})[ee] = P["max" + he] = Math.ceil(x.width) + ce, P[ie] = P["max" + ue] = Math.ceil(x.height) + ce, P[le] = P[le + ne] = P[le + re] = P[le + ae] = P[le + se] = "0", P[oe] = _[oe], P[oe + ne] = _[oe + ne], P[oe + re] = _[oe + re], P[oe + ae] = _[oe + ae], P[oe + se] = _[oe + se], y = function(t, e, i) {
												for (var r, s = [], n = t.length, a = i ? 8 : 0; a < n; a += 2) r = t[a], s.push(r, r in e ? e[r] : t[a + 1]);
												return s.t = t.t, s
											}(v, P, jt), xt && Ke(0)), i ? (N = i._initted, lt(1), i.render(i.duration(), !0, !0), k = E(_e.a) - S + g + st, R = Math.abs(g - k) > 1, Ie && R && y.splice(y.length - 2, 2), i.render(0, !0, !0), N || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), lt(0)) : k = g, H && (H.value ? H.style["overflow" + _e.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + _e.a));
											V && V.forEach((function(t) {
												return t.revert(!1, !0)
											})), Ve.start = l, Ve.end = h, a = o = xt ? Q : Ke(), Qt || xt || (a < Q && Ke(Q), Ve.scroll.rec = 0), Ve.revert(!1, !0), $e = St(), U && (We = -1, U.restart(!0)), tt = 0, i && Ce && (i._initted || it) && i.progress() !== it && i.progress(it || 0, !0).render(i.time(), !0, !0), (et || Ue !== Ve.progress || Qt || kt) && (i && !Ce && i.totalProgress(Qt && l < -.001 && !Ue ? Y.utils.normalize(l, h, 0) : Ue, !0), Ve.progress = et || (a - l) / g === Ue ? 0 : Ue), Dt && wt && (w._pinOffset = Math.round(Ve.progress * k)), X && X.invalidate(), isNaN(j) || (j -= Y.getProperty(p, _e.p), $ -= Y.getProperty(d, _e.p), ai(p, _e, j), ai(u, _e, j - (b || 0)), ai(d, _e, $), ai(c, _e, $ - (b || 0))), et && !xt && Ve.update(), !gt || xt || m || (m = !0, gt(Ve), m = !1)
										}
								}, Ve.getVelocity = function() {
									return (Ke() - o) / (St() - Z) * 1e3 || 0
								}, Ve.endAnimation = function() {
									Ut(Ve.callbackAnimation), i && (X ? X.progress(1) : i.paused() ? Ce || Ut(i, Ve.direction < 0, 1) : Ut(i, i.reversed()))
								}, Ve.labelToScroll = function(t) {
									return i && i.labels && (l || Ve.refresh() || l) + i.labels[t] / i.duration() * g || 0
								}, Ve.getTrailing = function(t) {
									var e = ke.indexOf(Ve),
										i = Ve.direction > 0 ? ke.slice(0, e).reverse() : ke.slice(e + 1);
									return (qt(t) ? i.filter((function(e) {
										return e.vars.preventOverlaps === t
									})) : i).filter((function(t) {
										return Ve.direction > 0 ? t.end <= l : t.start >= h
									}))
								}, Ve.update = function(t, e, s) {
									if (!Qt || s || t) {
										var n, u, c, d, f, m, v, b = !0 === xt ? Q : Ve.scroll(),
											_ = t ? 0 : (b - l) / g,
											x = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
											C = Ve.progress;
										if (e && (o = a, a = Qt ? Ke() : b, Nt && (V = N, N = i && !Ce ? i.totalProgress() : x)), Lt && Dt && !tt && !Tt && Pt && (!x && l < b + (b - o) / (St() - Z) * Lt ? x = 1e-4 : 1 === x && h > b + (b - o) / (St() - Z) * Lt && (x = .9999)), x !== C && Ve.enabled) {
											if (d = (f = (n = Ve.isActive = !!x && x < 1) !== (!!C && C < 1)) || !!x != !!C, Ve.direction = x > C ? 1 : -1, Ve.progress = x, d && !tt && (u = x && !C ? 0 : 1 === x ? 1 : 1 === C ? 2 : 3, Ce && (c = !f && "none" !== Be[u + 1] && Be[u + 1] || Be[u], v = i && ("complete" === c || "reset" === c || c in i))), ye && (f || v) && (v || vt || !i) && (Wt(ye) ? ye(Ve) : Ve.getTrailing(ye).forEach((function(t) {
													return t.endAnimation()
												}))), Ce || (!X || tt || Tt ? i && i.totalProgress(x, !(!tt || !$e && !t)) : (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo("totalProgress", x, i._tTime / i._tDur) : (X.vars.totalProgress = x, X.invalidate().restart()))), Dt)
												if (t && wt && (w.style[wt + _e.os2] = P), Ie) {
													if (d) {
														if (m = !t && x > C && h + 1 > b && b + 1 >= Ht(Se, _e), jt)
															if (t || !n && !m) si(Dt, w);
															else {
																var E = fe(Dt, !0),
																	A = b - l;
																si(Dt, G, E.top + (_e === L ? A : 0) + ce, E.left + (_e === L ? 0 : A) + ce)
															} Qe(n || m ? y : D), R && x < 1 && n || T(S + (1 !== x || m ? 0 : k))
													}
												} else T(Bt(S + k * x));
											Nt && !r.tween && !tt && !Tt && U.restart(!0), dt && (f || zt && x && (x < 1 || !_t)) && K(dt.targets).forEach((function(t) {
												return t.classList[n || zt ? "add" : "remove"](dt.className)
											})), pt && !Ce && !t && pt(Ve), d && !tt ? (Ce && (v && ("complete" === c ? i.pause().totalProgress(1) : "reset" === c ? i.restart(!0).pause() : "restart" === c ? i.restart(!0) : i[c]()), pt && pt(Ve)), !f && _t || (mt && f && Kt(Ve, mt), Oe[u] && Kt(Ve, Oe[u]), zt && (1 === x ? Ve.kill(!1, 1) : Oe[u] = 0), f || Oe[u = 1 === x ? 1 : 3] && Kt(Ve, Oe[u])), te && !n && Math.abs(Ve.getVelocity()) > (Gt(te) ? te : 2500) && (Ut(Ve.callbackAnimation), X ? X.progress(1) : Ut(i, "reverse" === c ? 1 : !x, 1))) : Ce && pt && !tt && pt(Ve)
										}
										if (B) {
											var F = Qt ? b / Qt.duration() * (Qt._caScrollDist || 0) : b;
											M(F + (p._isFlipped ? 1 : 0)), B(F)
										}
										st && st(-b / Qt.duration() * (Qt._caScrollDist || 0))
									}
								}, Ve.enable = function(e, i) {
									Ve.enabled || (Ve.enabled = !0, De(Se, "resize", Le), Fe || De(Se, "scroll", Me), Xe && De(t, "refreshInit", Xe), !1 !== e && (Ve.progress = Ue = 0, a = o = We = Ke()), !1 !== i && Ve.refresh())
								}, Ve.getTween = function(t) {
									return t && r ? r.tween : X
								}, Ve.setPositions = function(t, e, i, r) {
									if (Qt) {
										var s = Qt.scrollTrigger,
											n = Qt.duration(),
											a = s.end - s.start;
										t = s.start + a * t / n, e = s.start + a * e / n
									}
									Ve.refresh(!1, !1, {
										start: Ft(t, i && !!Ve._startClamp),
										end: Ft(e, i && !!Ve._endClamp)
									}, r), Ve.update()
								}, Ve.adjustPinSpacing = function(t) {
									if (A && t) {
										var e = A.indexOf(_e.d) + 1;
										A[e] = parseFloat(A[e]) + t + ce, A[1] = parseFloat(A[1]) + t + ce, Qe(A)
									}
								}, Ve.disable = function(e, i) {
									if (Ve.enabled && (!1 !== e && Ve.revert(!0, !0), Ve.enabled = Ve.isActive = !1, i || X && X.pause(), Q = 0, s && (s.uncache = 1), Xe && be(t, "refreshInit", Xe), U && (U.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Fe)) {
										for (var n = ke.length; n--;)
											if (ke[n].scroller === Se && ke[n] !== Ve) return;
										be(Se, "resize", Le), Fe || be(Se, "scroll", Me)
									}
								}, Ve.kill = function(t, r) {
									Ve.disable(t, r), X && !r && X.kill(), ft && delete Pe[ft];
									var n = ke.indexOf(Ve);
									n >= 0 && ke.splice(n, 1), n === rt && Ge > 0 && rt--, n = 0, ke.forEach((function(t) {
										return t.scroller === Ve.scroller && (n = 1)
									})), n || xt || (Ve.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.revert({
										kill: !1
									}), r || i.kill()), u && [u, c, p, d].forEach((function(t) {
										return t.parentNode && t.parentNode.removeChild(t)
									})), Et === Ve && (Et = 0), Dt && (s && (s.uncache = 1), n = 0, ke.forEach((function(t) {
										return t.pin === Dt && n++
									})), n || (s.spacer = 0)), e.onKill && e.onKill(Ve)
								}, ke.push(Ve), Ve.enable(!1, !1), nt && nt(Ve), i && i.add && !g) {
								var li = Ve.update;
								Ve.update = function() {
									Ve.update = li, l || h || Ve.refresh()
								}, Y.delayedCall(.01, Ve.update), g = .01, l = h = 0
							} else Ve.refresh();
							Dt && function() {
								if (Ct !== Ye) {
									var t = Ct = Ye;
									requestAnimationFrame((function() {
										return t === Ye && qe(!0)
									}))
								}
							}()
						} else this.update = this.refresh = this.kill = Rt
					}, t.register = function(e) {
						return H || (Y = e || Nt(), zt() && window.document && t.enable(), H = At), H
					}, t.defaults = function(t) {
						if (t)
							for (var e in t) xe[e] = t[e];
						return xe
					}, t.disable = function(t, e) {
						At = 0, ke.forEach((function(i) {
							return i[e ? "kill" : "disable"](t)
						})), be(j, "wheel", Me), be(q, "scroll", Me), clearInterval(Q), be(q, "touchcancel", Rt), be(G, "touchstart", Rt), ye(be, q, "pointerdown,touchstart,mousedown", It), ye(be, q, "pointerup,touchend,mouseup", Ot), U.kill(), jt(be);
						for (var i = 0; i < b.length; i += 3) _e(be, b[i], b[i + 1]), _e(be, b[i], b[i + 2])
					}, t.enable = function() {
						if (j = window, q = document, W = q.documentElement, G = q.body, Y && (K = Y.utils.toArray, J = Y.utils.clamp, mt = Y.core.context || Rt, lt = Y.core.suppressOverwrites || Rt, gt = j.history.scrollRestoration || "auto", We = j.pageYOffset, Y.core.globals("ScrollTrigger", t), G)) {
							At = 1, (vt = document.createElement("div")).style.height = "100vh", vt.style.position = "absolute", He(), Lt(), X.register(Y), t.isTouch = X.isTouch, ft = X.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ct = 1 === X.isTouch, De(j, "wheel", Me), $ = [j, q, W, G], Y.matchMedia ? (t.matchMedia = function(t) {
								var e, i = Y.matchMedia();
								for (e in t) i.add(e, t[e]);
								return i
							}, Y.addEventListener("matchMediaInit", (function() {
								return Ve()
							})), Y.addEventListener("matchMediaRevert", (function() {
								return Ne()
							})), Y.addEventListener("matchMedia", (function() {
								qe(0, 1), Be("matchMedia")
							})), Y.matchMedia("(orientation: portrait)", (function() {
								return Fe(), Fe
							}))) : console.warn("Requires GSAP 3.11.0 or later"), Fe(), De(q, "scroll", Me);
							var e, i, r = G.style,
								s = r.borderTopStyle,
								n = Y.core.Animation.prototype;
							for (n.revert || Object.defineProperty(n, "revert", {
									value: function() {
										return this.time(-.01, !0)
									}
								}), r.borderTopStyle = "solid", e = fe(G), L.m = Math.round(e.top + L.sc()) || 0, F.m = Math.round(e.left + F.sc()) || 0, s ? r.borderTopStyle = s : r.removeProperty("border-top-style"), Q = setInterval(Ae, 250), Y.delayedCall(.5, (function() {
									return Tt = 0
								})), De(q, "touchcancel", Rt), De(G, "touchstart", Rt), ye(De, q, "pointerdown,touchstart,mousedown", It), ye(De, q, "pointerup,touchend,mouseup", Ot), it = Y.utils.checkPrefix("transform"), Ke.push(it), H = St(), U = Y.delayedCall(.2, qe).pause(), at = [q, "visibilitychange", function() {
									var t = j.innerWidth,
										e = j.innerHeight;
									q.hidden ? (st = t, nt = e) : st === t && nt === e || Le()
								}, q, "DOMContentLoaded", qe, j, "load", qe, j, "resize", Le], jt(De), ke.forEach((function(t) {
									return t.enable(0, 1)
								})), i = 0; i < b.length; i += 3) _e(be, b[i], b[i + 1]), _e(be, b[i], b[i + 2])
						}
					}, t.config = function(e) {
						"limitCallbacks" in e && (_t = !!e.limitCallbacks);
						var i = e.syncInterval;
						i && clearInterval(Q) || (Q = i) && setInterval(Ae, i), "ignoreMobileResize" in e && (ct = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (jt(be) || jt(De, e.autoRefreshEvents || "none"), ht = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
					}, t.scrollerProxy = function(t, e) {
						var i = I(t),
							r = b.indexOf(i),
							s = Vt(i);
						~r && b.splice(r, s ? 6 : 2), e && (s ? _.unshift(j, e, G, e, W, e) : _.unshift(i, e))
					}, t.clearMatchMedia = function(t) {
						ke.forEach((function(e) {
							return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
						}))
					}, t.isInViewport = function(t, e, i) {
						var r = (qt(t) ? I(t) : t).getBoundingClientRect(),
							s = r[i ? ee : ie] * e || 0;
						return i ? r.right - s > 0 && r.left + s < j.innerWidth : r.bottom - s > 0 && r.top + s < j.innerHeight
					}, t.positionInViewport = function(t, e, i) {
						qt(t) && (t = I(t));
						var r = t.getBoundingClientRect(),
							s = r[i ? ee : ie],
							n = null == e ? s / 2 : e in Ce ? Ce[e] * s : ~e.indexOf("%") ? parseFloat(e) * s / 100 : parseFloat(e) || 0;
						return i ? (r.left + n) / j.innerWidth : (r.top + n) / j.innerHeight
					}, t.killAll = function(t) {
						if (ke.slice(0).forEach((function(t) {
								return "ScrollSmoother" !== t.vars.id && t.kill()
							})), !0 !== t) {
							var e = Ie.killAll || [];
							Ie = {}, e.forEach((function(t) {
								return t()
							}))
						}
					}, t
				}();
			li.version = "3.12.5", li.saveStyles = function(t) {
				return t ? K(t).forEach((function(t) {
					if (t && t.style) {
						var e = ze.indexOf(t);
						e >= 0 && ze.splice(e, 5), ze.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Y.core.getCache(t), mt())
					}
				})) : ze
			}, li.revert = function(t, e) {
				return Ve(!t, e)
			}, li.create = function(t, e) {
				return new li(t, e)
			}, li.refresh = function(t) {
				return t ? Le() : (H || li.register()) && qe(!0)
			}, li.update = function(t) {
				return ++b.cache && $e(!0 === t ? 2 : 0)
			}, li.clearScrollMemory = Xe, li.maxScroll = function(t, e) {
				return Ht(t, e ? F : L)
			}, li.getScrollFunc = function(t, e) {
				return O(I(t), e ? F : L)
			}, li.getById = function(t) {
				return Pe[t]
			}, li.getAll = function() {
				return ke.filter((function(t) {
					return "ScrollSmoother" !== t.vars.id
				}))
			}, li.isScrolling = function() {
				return !!Pt
			}, li.snapDirectional = ve, li.addEventListener = function(t, e) {
				var i = Ie[t] || (Ie[t] = []);
				~i.indexOf(e) || i.push(e)
			}, li.removeEventListener = function(t, e) {
				var i = Ie[t],
					r = i && i.indexOf(e);
				r >= 0 && i.splice(r, 1)
			}, li.batch = function(t, e) {
				var i, r = [],
					s = {},
					n = e.interval || .016,
					a = e.batchMax || 1e9,
					o = function(t, e) {
						var i = [],
							r = [],
							s = Y.delayedCall(n, (function() {
								e(i, r), i = [], r = []
							})).pause();
						return function(t) {
							i.length || s.restart(!0), i.push(t.trigger), r.push(t), a <= i.length && s.progress(1)
						}
					};
				for (i in e) s[i] = "on" === i.substr(0, 2) && Wt(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
				return Wt(a) && (a = a(), De(li, "refresh", (function() {
					return a = e.batchMax()
				}))), K(t).forEach((function(t) {
					var e = {};
					for (i in s) e[i] = s[i];
					e.trigger = t, r.push(li.create(e))
				})), r
			};
			var hi, ui = function(t, e, i, r) {
					return e > r ? t(r) : e < 0 && t(0), i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1
				},
				ci = function t(e, i) {
					!0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (X.isTouch ? " pinch-zoom" : "") : "none", e === W && t(G, i)
				},
				pi = {
					auto: 1,
					scroll: 1
				},
				di = function(t) {
					var e, i = t.event,
						r = t.target,
						s = t.axis,
						n = (i.changedTouches ? i.changedTouches[0] : i).target,
						a = n._gsap || Y.core.getCache(n),
						o = St();
					if (!a._isScrollT || o - a._isScrollT > 2e3) {
						for (; n && n !== G && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !pi[(e = pe(n)).overflowY] && !pi[e.overflowX]);) n = n.parentNode;
						a._isScroll = n && n !== r && !Vt(n) && (pi[(e = pe(n)).overflowY] || pi[e.overflowX]), a._isScrollT = o
					}(a._isScroll || "x" === s) && (i.stopPropagation(), i._gsapAllow = !0)
				},
				fi = function(t, e, i, r) {
					return X.create({
						target: t,
						capture: !0,
						debounce: !1,
						lockAxis: !0,
						type: e,
						onWheel: r = r && di,
						onPress: r,
						onDrag: r,
						onScroll: r,
						onEnable: function() {
							return i && De(q, X.eventTypes[0], gi, !1, !0)
						},
						onDisable: function() {
							return be(q, X.eventTypes[0], gi, !0)
						}
					})
				},
				mi = /(input|label|select|textarea)/i,
				gi = function(t) {
					var e = mi.test(t.target.tagName);
					(e || hi) && (t._gsapAllow = !0, hi = e)
				},
				vi = function(t) {
					$t(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
					var e, i, r, s, n, a, o, l, h = t,
						u = h.normalizeScrollX,
						c = h.momentum,
						p = h.allowNestedScroll,
						d = h.onRelease,
						f = I(t.target) || W,
						m = Y.core.globals().ScrollSmoother,
						g = m && m.get(),
						v = ft && (t.content && I(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
						y = O(f, L),
						D = O(f, F),
						_ = 1,
						w = (X.isTouch && j.visualViewport ? j.visualViewport.scale * j.visualViewport.width : j.outerWidth) / j.innerWidth,
						x = 0,
						C = Wt(c) ? function() {
							return c(e)
						} : function() {
							return c || 2.8
						},
						E = fi(f, t.type, !0, p),
						T = function() {
							return s = !1
						},
						S = Rt,
						k = Rt,
						P = function() {
							i = Ht(f, L), k = J(ft ? 1 : 0, i), u && (S = J(0, Ht(f, F))), r = Ye
						},
						A = function() {
							v._gsap.y = Bt(parseFloat(v._gsap.y) + y.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
						},
						M = function() {
							P(), n.isActive() && n.vars.scrollY > i && (y() > i ? n.progress(1) && y(i) : n.resetTo("scrollY", i))
						};
					return v && Y.set(v, {
						y: "+=0"
					}), t.ignoreCheck = function(t) {
						return ft && "touchmove" === t.type && function() {
							if (s) {
								requestAnimationFrame(T);
								var t = Bt(e.deltaY / 2),
									i = k(y.v - t);
								if (v && i !== y.v + y.offset) {
									y.offset = i - y.v;
									var r = Bt((parseFloat(v && v._gsap.y) || 0) - y.offset);
									v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", y.cacheID = b.cache, $e()
								}
								return !0
							}
							y.offset && A(), s = !0
						}() || _ > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
					}, t.onPress = function() {
						s = !1;
						var t = _;
						_ = Bt((j.visualViewport && j.visualViewport.scale || 1) / w), n.pause(), t !== _ && ci(f, _ > 1.01 || !u && "x"), a = D(), o = y(), P(), r = Ye
					}, t.onRelease = t.onGestureStart = function(t, e) {
						if (y.offset && A(), e) {
							b.cache++;
							var r, s, a = C();
							u && (s = (r = D()) + .05 * a * -t.velocityX / .227, a *= ui(D, r, s, Ht(f, F)), n.vars.scrollX = S(s)), s = (r = y()) + .05 * a * -t.velocityY / .227, a *= ui(y, r, s, Ht(f, L)), n.vars.scrollY = k(s), n.invalidate().duration(a).play(.01), (ft && n.vars.scrollY >= i || r >= i - 1) && Y.to({}, {
								onUpdate: M,
								duration: a
							})
						} else l.restart(!0);
						d && d(t)
					}, t.onWheel = function() {
						n._ts && n.pause(), St() - x > 1e3 && (r = 0, x = St())
					}, t.onChange = function(t, e, i, s, n) {
						if (Ye !== r && P(), e && u && D(S(s[2] === e ? a + (t.startX - t.x) : D() + e - s[1])), i) {
							y.offset && A();
							var l = n[2] === i,
								h = l ? o + t.startY - t.y : y() + i - n[1],
								c = k(h);
							l && h !== c && (o += c - h), y(c)
						}(i || e) && $e()
					}, t.onEnable = function() {
						ci(f, !u && "x"), li.addEventListener("refresh", M), De(j, "resize", M), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = D.smooth = !1), E.enable()
					}, t.onDisable = function() {
						ci(f, !0), be(j, "resize", M), li.removeEventListener("refresh", M), E.kill()
					}, t.lockAxis = !1 !== t.lockAxis, (e = new X(t)).iOS = ft, ft && !y() && y(1), ft && Y.ticker.add(Rt), l = e._dc, n = Y.to(e, {
						ease: "power4",
						paused: !0,
						inherit: !1,
						scrollX: u ? "+=0.1" : "+=0",
						scrollY: "+=0.1",
						modifiers: {
							scrollY: ni(y, y(), (function() {
								return n.pause()
							}))
						},
						onUpdate: $e,
						onComplete: l.vars.onComplete
					}), e
				};
			li.sort = function(t) {
				return ke.sort(t || function(t, e) {
					return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
				})
			}, li.observe = function(t) {
				return new X(t)
			}, li.normalizeScroll = function(t) {
				if (void 0 === t) return ut;
				if (!0 === t && ut) return ut.enable();
				if (!1 === t) return ut && ut.kill(), void(ut = t);
				var e = t instanceof X ? t : vi(t);
				return ut && ut.target === e.target && ut.kill(), Vt(e.target) && (ut = e), e
			}, li.core = {
				_getVelocityProp: R,
				_inputObserver: fi,
				_scrollers: b,
				_proxies: _,
				bridge: {
					ss: function() {
						Pt || Be("scrollStart"), Pt = St()
					},
					ref: function() {
						return tt
					}
				}
			}, Nt() && Y.registerPlugin(li)
		},
		373: function(t, e, i) {
			"use strict";
			i.d(e, {
				A: function() {
					return E
				}
			});
			var r, s, n, a, o, l, h = i(422),
				u = /(?:\r|\n|\t\t)/g,
				c = /(?:\s\s+)/g,
				p = String.fromCharCode(160),
				d = function(t) {
					r = document, s = window, (a = a || t || s.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (l = a.utils.toArray, o = a.core.context || function() {}, n = 1)
				},
				f = function(t) {
					return s.getComputedStyle(t)
				},
				m = function(t) {
					return "absolute" === t.position || !0 === t.absolute
				},
				g = function(t, e) {
					for (var i, r = e.length; --r > -1;)
						if (i = e[r], t.substr(0, i.length) === i) return i.length
				},
				v = function(t, e) {
					void 0 === t && (t = "");
					var i = ~t.indexOf("++"),
						r = 1;
					return i && (t = t.split("++").join("")),
						function() {
							return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
						}
				},
				y = function t(e, i, r) {
					var s = e.nodeType;
					if (1 === s || 9 === s || 11 === s)
						for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
					else 3 !== s && 4 !== s || (e.nodeValue = e.nodeValue.split(i).join(r))
				},
				D = function(t, e) {
					for (var i = e.length; --i > -1;) t.push(e[i])
				},
				b = function(t, e, i) {
					for (var r; t && t !== e;) {
						if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === i;
						t = t.parentNode || t._parent
					}
				},
				_ = function t(e) {
					var i, r, s = l(e.childNodes),
						n = s.length;
					for (i = 0; i < n; i++)(r = s[i])._isSplit ? t(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
				},
				w = function(t, e) {
					return parseFloat(e[t]) || 0
				},
				x = function(t, e, i, s, n, a, o) {
					var l, h, u, c, p, d, g, v, x, C, E, T, S = f(t),
						k = w("paddingLeft", S),
						P = -999,
						A = w("borderBottomWidth", S) + w("borderTopWidth", S),
						M = w("borderLeftWidth", S) + w("borderRightWidth", S),
						F = w("paddingTop", S) + w("paddingBottom", S),
						L = w("paddingLeft", S) + w("paddingRight", S),
						I = w("fontSize", S) * (e.lineThreshold || .2),
						O = S.textAlign,
						R = [],
						B = [],
						z = [],
						N = e.wordDelimiter || " ",
						V = e.tag ? e.tag : e.span ? "span" : "div",
						X = e.type || e.split || "chars,words,lines",
						Y = n && ~X.indexOf("lines") ? [] : null,
						H = ~X.indexOf("words"),
						j = ~X.indexOf("chars"),
						q = m(e),
						W = e.linesClass,
						G = ~(W || "").indexOf("++"),
						$ = [],
						U = "flex" === S.display,
						K = t.style.display;
					for (G && (W = W.split("++").join("")), U && (t.style.display = "block"), u = (h = t.getElementsByTagName("*")).length, p = [], l = 0; l < u; l++) p[l] = h[l];
					if (Y || q)
						for (l = 0; l < u; l++)((d = (c = p[l]).parentNode === t) || q || j && !H) && (T = c.offsetTop, Y && d && Math.abs(T - P) > I && ("BR" !== c.nodeName || 0 === l) && (g = [], Y.push(g), P = T), q && (c._x = c.offsetLeft, c._y = T, c._w = c.offsetWidth, c._h = c.offsetHeight), Y && ((c._isSplit && d || !j && d || H && d || !H && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (g.push(c), c._x -= k, b(c, t, N) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === l) && Y.push([])));
					for (l = 0; l < u; l++)
						if (d = (c = p[l]).parentNode === t, "BR" !== c.nodeName)
							if (q && (x = c.style, H || d || (c._x += c.parentNode._x, c._y += c.parentNode._y), x.left = c._x + "px", x.top = c._y + "px", x.position = "absolute", x.display = "block", x.width = c._w + 1 + "px", x.height = c._h + "px"), !H && j)
								if (c._isSplit)
									for (c._next = h = c.nextSibling, c.parentNode.appendChild(c); h && 3 === h.nodeType && " " === h.textContent;) c._next = h.nextSibling, c.parentNode.appendChild(h), h = h.nextSibling;
								else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && $.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), p.splice(l--, 1), u--) : d || (T = !c.nextSibling && b(c.parentNode, t, N), c.parentNode._parent && c.parentNode._parent.appendChild(c), T && c.parentNode.appendChild(r.createTextNode(" ")), "span" === V && (c.style.display = "inline"), R.push(c));
					else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? B.push(c) : j && !c._isSplit && ("span" === V && (c.style.display = "inline"), R.push(c));
					else Y || q ? (c.parentNode && c.parentNode.removeChild(c), p.splice(l--, 1), u--) : H || t.appendChild(c);
					for (l = $.length; --l > -1;) $[l].parentNode.removeChild($[l]);
					if (Y) {
						for (q && (C = r.createElement(V), t.appendChild(C), E = C.offsetWidth + "px", T = C.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(C)), x = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
						for (v = " " === N && (!q || !H && !j), l = 0; l < Y.length; l++) {
							for (g = Y[l], (C = r.createElement(V)).style.cssText = "display:block;text-align:" + O + ";position:" + (q ? "absolute;" : "relative;"), W && (C.className = W + (G ? l + 1 : "")), z.push(C), u = g.length, h = 0; h < u; h++) "BR" !== g[h].nodeName && (c = g[h], C.appendChild(c), v && c._wordEnd && C.appendChild(r.createTextNode(" ")), q && (0 === h && (C.style.top = c._y + "px", C.style.left = k + T + "px"), c.style.top = "0px", T && (c.style.left = c._x - T + "px")));
							0 === u ? C.innerHTML = "&nbsp;" : H || j || (_(C), y(C, String.fromCharCode(160), " ")), q && (C.style.width = E, C.style.height = c._h + "px"), t.appendChild(C)
						}
						t.style.cssText = x
					}
					q && (o > t.clientHeight && (t.style.height = o - F + "px", t.clientHeight < o && (t.style.height = o + A + "px")), a > t.clientWidth && (t.style.width = a - L + "px", t.clientWidth < a && (t.style.width = a + M + "px"))), U && (K ? t.style.display = K : t.style.removeProperty("display")), D(i, R), H && D(s, B), D(n, z)
				},
				C = function t(e, i, s, n) {
					var a, o, d = l(e.childNodes),
						v = d.length,
						D = m(i);
					if (3 !== e.nodeType || v > 1) {
						for (i.absolute = !1, a = 0; a < v; a++)(o = d[a])._next = o._isFirst = o._parent = o._wordEnd = null, (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (D && 3 !== o.nodeType && "inline" === f(o).display && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, t(o, i, s, n));
						return i.absolute = D, void(e._isSplit = !0)
					}! function(t, e, i, s) {
						var n, a, o, l, d, f, v, D, b = e.tag ? e.tag : e.span ? "span" : "div",
							_ = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
							w = m(e),
							x = e.wordDelimiter || " ",
							C = function(t) {
								return t === x || t === p && " " === x
							},
							E = " " !== x ? "" : w ? "&#173; " : " ",
							T = "</" + b + ">",
							S = 1,
							k = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : g : null,
							P = r.createElement("div"),
							A = t.parentNode;
						for (A.insertBefore(P, t), P.textContent = t.nodeValue, A.removeChild(t), t = P, v = -1 !== (n = (0, h.q4)(t)).indexOf("<"), !1 !== e.reduceWhiteSpace && (n = n.replace(c, " ").replace(u, "")), v && (n = n.split("<").join("{{LT}}")), d = n.length, a = (" " === n.charAt(0) ? E : "") + i(), o = 0; o < d; o++)
							if (f = n.charAt(o), k && (D = k(n.substr(o), e.specialChars))) f = n.substr(o, D || 1), a += _ && " " !== f ? s() + f + "</" + b + ">" : f, o += D - 1;
							else if (C(f) && !C(n.charAt(o - 1)) && o) {
							for (a += S ? T : "", S = 0; C(n.charAt(o + 1));) a += E, o++;
							o === d - 1 ? a += E : ")" !== n.charAt(o + 1) && (a += E + i(), S = 1)
						} else "{" === f && "{{LT}}" === n.substr(o, 6) ? (a += _ ? s() + "{{LT}}</" + b + ">" : "{{LT}}", o += 5) : f.charCodeAt(0) >= 55296 && f.charCodeAt(0) <= 56319 || n.charCodeAt(o + 1) >= 65024 && n.charCodeAt(o + 1) <= 65039 ? (l = ((n.substr(o, 12).split(h.u6) || [])[1] || "").length || 2, a += _ && " " !== f ? s() + n.substr(o, l) + "</" + b + ">" : n.substr(o, l), o += l - 1) : a += _ && " " !== f ? s() + f + "</" + b + ">" : f;
						t.outerHTML = a + (S ? T : ""), v && y(A, "{{LT}}", "<")
					}(e, i, s, n)
				},
				E = function() {
					function t(t, e) {
						n || d(), this.elements = l(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, o(this), this.split(e)
					}
					var e = t.prototype;
					return e.split = function(t) {
						this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
						for (var e, i, r, s = this.elements.length, n = t.tag ? t.tag : t.span ? "span" : "div", a = v(t.wordsClass, n), o = v(t.charsClass, n); --s > -1;) r = this.elements[s], this._originals[s] = {
							html: r.innerHTML,
							style: r.getAttribute("style")
						}, e = r.clientHeight, i = r.clientWidth, C(r, t, a, o), x(r, t, this.chars, this.words, this.lines, i, e);
						return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
					}, e.revert = function() {
						var t = this._originals;
						if (!t) throw "revert() call wasn't scoped properly.";
						return this.elements.forEach((function(e, i) {
							e.innerHTML = t[i].html, e.setAttribute("style", t[i].style)
						})), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
					}, t.create = function(e, i) {
						return new t(e, i)
					}, t
				}();
			E.version = "3.12.5", E.register = d
		},
		880: function(t, e, i) {
			"use strict";

			function r(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}

			function s(t, e) {
				t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
			}
			i.d(e, {
				Ay: function() {
					return Ur
				},
				os: function() {
					return Ur
				}
			});
			var n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, b, _, w = {
					autoSleep: 120,
					force3D: "auto",
					nullTargetWarn: 1,
					units: {
						lineHeight: ""
					}
				},
				x = {
					duration: .5,
					overwrite: !1,
					delay: 0
				},
				C = 1e8,
				E = 1e-8,
				T = 2 * Math.PI,
				S = T / 4,
				k = 0,
				P = Math.sqrt,
				A = Math.cos,
				M = Math.sin,
				F = function(t) {
					return "string" == typeof t
				},
				L = function(t) {
					return "function" == typeof t
				},
				I = function(t) {
					return "number" == typeof t
				},
				O = function(t) {
					return void 0 === t
				},
				R = function(t) {
					return "object" == typeof t
				},
				B = function(t) {
					return !1 !== t
				},
				z = function() {
					return "undefined" != typeof window
				},
				N = function(t) {
					return L(t) || F(t)
				},
				V = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
				X = Array.isArray,
				Y = /(?:-?\.?\d|\.)+/gi,
				H = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
				j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
				q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
				W = /[+-]=-?[.\d]+/,
				G = /[^,'"\[\]\s]+/gi,
				$ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
				U = {},
				K = {},
				J = function(t) {
					return (K = Tt(t, U)) && Si
				},
				Z = function(t, e) {
					return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
				},
				Q = function(t, e) {
					return !e && console.warn(t)
				},
				tt = function(t, e) {
					return t && (U[t] = e) && K && (K[t] = e) || U
				},
				et = function() {
					return 0
				},
				it = {
					suppressEvents: !0,
					isStart: !0,
					kill: !1
				},
				rt = {
					suppressEvents: !0,
					kill: !1
				},
				st = {
					suppressEvents: !0
				},
				nt = {},
				at = [],
				ot = {},
				lt = {},
				ht = {},
				ut = 30,
				ct = [],
				pt = "",
				dt = function(t) {
					var e, i, r = t[0];
					if (R(r) || L(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
						for (i = ct.length; i-- && !ct[i].targetTest(r););
						e = ct[i]
					}
					for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Xe(t[i], e))) || t.splice(i, 1);
					return t
				},
				ft = function(t) {
					return t._gsap || dt(se(t))[0]._gsap
				},
				mt = function(t, e, i) {
					return (i = t[e]) && L(i) ? t[e]() : O(i) && t.getAttribute && t.getAttribute(e) || i
				},
				gt = function(t, e) {
					return (t = t.split(",")).forEach(e) || t
				},
				vt = function(t) {
					return Math.round(1e5 * t) / 1e5 || 0
				},
				yt = function(t) {
					return Math.round(1e7 * t) / 1e7 || 0
				},
				Dt = function(t, e) {
					var i = e.charAt(0),
						r = parseFloat(e.substr(2));
					return t = parseFloat(t), "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
				},
				bt = function(t, e) {
					for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
					return r < i
				},
				_t = function() {
					var t, e, i = at.length,
						r = at.slice(0);
					for (ot = {}, at.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
				},
				wt = function(t, e, i, r) {
					at.length && !a && _t(), t.render(e, i, r || a && e < 0 && (t._initted || t._startAt)), at.length && !a && _t()
				},
				xt = function(t) {
					var e = parseFloat(t);
					return (e || 0 === e) && (t + "").match(G).length < 2 ? e : F(t) ? t.trim() : t
				},
				Ct = function(t) {
					return t
				},
				Et = function(t, e) {
					for (var i in e) i in t || (t[i] = e[i]);
					return t
				},
				Tt = function(t, e) {
					for (var i in e) t[i] = e[i];
					return t
				},
				St = function t(e, i) {
					for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = R(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
					return e
				},
				kt = function(t, e) {
					var i, r = {};
					for (i in t) i in e || (r[i] = t[i]);
					return r
				},
				Pt = function(t) {
					var e, i = t.parent || l,
						r = t.keyframes ? (e = X(t.keyframes), function(t, i) {
							for (var r in i) r in t || "duration" === r && e || "ease" === r || (t[r] = i[r])
						}) : Et;
					if (B(t.inherit))
						for (; i;) r(t, i.vars.defaults), i = i.parent || i._dp;
					return t
				},
				At = function(t, e, i, r, s) {
					void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
					var n, a = t[r];
					if (s)
						for (n = e[s]; a && a[s] > n;) a = a._prev;
					return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t, e
				},
				Mt = function(t, e, i, r) {
					void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
					var s = e._prev,
						n = e._next;
					s ? s._next = n : t[i] === e && (t[i] = n), n ? n._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
				},
				Ft = function(t, e) {
					t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
				},
				Lt = function(t, e) {
					if (t && (!e || e._end > t._dur || e._start < 0))
						for (var i = t; i;) i._dirty = 1, i = i.parent;
					return t
				},
				It = function(t, e, i, r) {
					return t._startAt && (a ? t._startAt.revert(rt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
				},
				Ot = function t(e) {
					return !e || e._ts && t(e.parent)
				},
				Rt = function(t) {
					return t._repeat ? Bt(t._tTime, t = t.duration() + t._rDelay) * t : 0
				},
				Bt = function(t, e) {
					var i = Math.floor(t /= e);
					return t && i === t ? i - 1 : i
				},
				zt = function(t, e) {
					return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
				},
				Nt = function(t) {
					return t._end = yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || E) || 0))
				},
				Vt = function(t, e) {
					var i = t._dp;
					return i && i.smoothChildTiming && t._ts && (t._start = yt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Nt(t), i._dirty || Lt(i, t)), t
				},
				Xt = function(t, e) {
					var i;
					if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = zt(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), i) - e._tTime > E) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
						if (t._dur < t.duration())
							for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
						t._zTime = -1e-8
					}
				},
				Yt = function(t, e, i, r) {
					return e.parent && Ft(e), e._start = yt((I(i) ? i : i || t !== l ? Kt(t, i, e) : t._time) + e._delay), e._end = yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), At(t, e, "_first", "_last", t._sort ? "_start" : 0), Wt(e) || (t._recent = e), r || Xt(t, e), t._ts < 0 && Vt(t, t._tTime), t
				},
				Ht = function(t, e) {
					return (U.ScrollTrigger || Z("scrollTrigger", e)) && U.ScrollTrigger.create(e, t)
				},
				jt = function(t, e, i, r, s) {
					return Ue(t, e, s), t._initted ? !i && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== ke.frame ? (at.push(t), t._lazy = [s, r], 1) : void 0 : 1
				},
				qt = function t(e) {
					var i = e.parent;
					return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
				},
				Wt = function(t) {
					var e = t.data;
					return "isFromStart" === e || "isStart" === e
				},
				Gt = function(t, e, i, r) {
					var s = t._repeat,
						n = yt(e) || 0,
						a = t._tTime / t._tDur;
					return a && !r && (t._time *= n / t._dur), t._dur = n, t._tDur = s ? s < 0 ? 1e10 : yt(n * (s + 1) + t._rDelay * s) : n, a > 0 && !r && Vt(t, t._tTime = t._tDur * a), t.parent && Nt(t), i || Lt(t.parent, t), t
				},
				$t = function(t) {
					return t instanceof He ? Lt(t) : Gt(t, t._dur)
				},
				Ut = {
					_start: 0,
					endTime: et,
					totalDuration: et
				},
				Kt = function t(e, i, r) {
					var s, n, a, o = e.labels,
						l = e._recent || Ut,
						h = e.duration() >= C ? l.endTime(!1) : e._dur;
					return F(i) && (isNaN(i) || i in o) ? (n = i.charAt(0), a = "%" === i.substr(-1), s = i.indexOf("="), "<" === n || ">" === n ? (s >= 0 && (i = i.replace(/=/, "")), ("<" === n ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (s < 0 ? l : r).totalDuration() / 100 : 1)) : s < 0 ? (i in o || (o[i] = h), o[i]) : (n = parseFloat(i.charAt(s - 1) + i.substr(s + 1)), a && r && (n = n / 100 * (X(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, i.substr(0, s - 1), r) + n : h + n)) : null == i ? h : +i
				},
				Jt = function(t, e, i) {
					var r, s, n = I(e[1]),
						a = (n ? 2 : 1) + (t < 2 ? 0 : 1),
						o = e[a];
					if (n && (o.duration = e[1]), o.parent = i, t) {
						for (r = o, s = i; s && !("immediateRender" in r);) r = s.vars.defaults || {}, s = B(s.vars.inherit) && s.parent;
						o.immediateRender = B(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
					}
					return new ti(e[0], o, e[a + 1])
				},
				Zt = function(t, e) {
					return t || 0 === t ? e(t) : e
				},
				Qt = function(t, e, i) {
					return i < t ? t : i > e ? e : i
				},
				te = function(t, e) {
					return F(t) && (e = $.exec(t)) ? e[1] : ""
				},
				ee = [].slice,
				ie = function(t, e) {
					return t && R(t) && "length" in t && (!e && !t.length || t.length - 1 in t && R(t[0])) && !t.nodeType && t !== h
				},
				re = function(t, e, i) {
					return void 0 === i && (i = []), t.forEach((function(t) {
						var r;
						return F(t) && !e || ie(t, 1) ? (r = i).push.apply(r, se(t)) : i.push(t)
					})) || i
				},
				se = function(t, e, i) {
					return o && !e && o.selector ? o.selector(t) : !F(t) || i || !u && Pe() ? X(t) ? re(t, i) : ie(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || c).querySelectorAll(t), 0)
				},
				ne = function(t) {
					return t = se(t)[0] || Q("Invalid scope") || {},
						function(e) {
							var i = t.current || t.nativeElement || t;
							return se(e, i.querySelectorAll ? i : i === t ? Q("Invalid scope") || c.createElement("div") : t)
						}
				},
				ae = function(t) {
					return t.sort((function() {
						return .5 - Math.random()
					}))
				},
				oe = function(t) {
					if (L(t)) return t;
					var e = R(t) ? t : {
							each: t
						},
						i = Re(e.ease),
						r = e.from || 0,
						s = parseFloat(e.base) || 0,
						n = {},
						a = r > 0 && r < 1,
						o = isNaN(r) || a,
						l = e.axis,
						h = r,
						u = r;
					return F(r) ? h = u = {
							center: .5,
							edges: .5,
							end: 1
						} [r] || 0 : !a && o && (h = r[0], u = r[1]),
						function(t, a, c) {
							var p, d, f, m, g, v, y, D, b, _ = (c || e).length,
								w = n[_];
							if (!w) {
								if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, C])[1])) {
									for (y = -C; y < (y = c[b++].getBoundingClientRect().left) && b < _;);
									b < _ && b--
								}
								for (w = n[_] = [], p = o ? Math.min(b, _) * h - .5 : r % b, d = b === C ? 0 : o ? _ * u / b - .5 : r / b | 0, y = 0, D = C, v = 0; v < _; v++) f = v % b - p, m = d - (v / b | 0), w[v] = g = l ? Math.abs("y" === l ? m : f) : P(f * f + m * m), g > y && (y = g), g < D && (D = g);
								"random" === r && ae(w), w.max = y - D, w.min = D, w.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : l ? "y" === l ? _ / b : b : Math.max(b, _ / b)) || 0) * ("edges" === r ? -1 : 1), w.b = _ < 0 ? s - _ : s, w.u = te(e.amount || e.each) || 0, i = i && _ < 0 ? Ie(i) : i
							}
							return _ = (w[t] - w.min) / w.max || 0, yt(w.b + (i ? i(_) : _) * w.v) + w.u
						}
				},
				le = function(t) {
					var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
					return function(i) {
						var r = yt(Math.round(parseFloat(i) / t) * t * e);
						return (r - r % 1) / e + (I(i) ? 0 : te(i))
					}
				},
				he = function(t, e) {
					var i, r, s = X(t);
					return !s && R(t) && (i = s = t.radius || C, t.values ? (t = se(t.values), (r = !I(t[0])) && (i *= i)) : t = le(t.increment)), Zt(e, s ? L(t) ? function(e) {
						return r = t(e), Math.abs(r - e) <= i ? r : e
					} : function(e) {
						for (var s, n, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), l = C, h = 0, u = t.length; u--;)(s = r ? (s = t[u].x - a) * s + (n = t[u].y - o) * n : Math.abs(t[u] - a)) < l && (l = s, h = u);
						return h = !i || l <= i ? t[h] : e, r || h === e || I(e) ? h : h + te(e)
					} : le(t))
				},
				ue = function(t, e, i, r) {
					return Zt(X(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
						return X(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
					}))
				},
				ce = function(t, e, i) {
					return Zt(i, (function(i) {
						return t[~~e(i)]
					}))
				},
				pe = function(t) {
					for (var e, i, r, s, n = 0, a = ""; ~(e = t.indexOf("random(", n));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? G : Y), a += t.substr(n, e - n) + ue(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), n = r + 1;
					return a + t.substr(n, t.length - n)
				},
				de = function(t, e, i, r, s) {
					var n = e - t,
						a = r - i;
					return Zt(s, (function(e) {
						return i + ((e - t) / n * a || 0)
					}))
				},
				fe = function(t, e, i) {
					var r, s, n, a = t.labels,
						o = C;
					for (r in a)(s = a[r] - e) < 0 == !!i && s && o > (s = Math.abs(s)) && (n = r, o = s);
					return n
				},
				me = function(t, e, i) {
					var r, s, n, a = t.vars,
						l = a[e],
						h = o,
						u = t._ctx;
					if (l) return r = a[e + "Params"], s = a.callbackScope || t, i && at.length && _t(), u && (o = u), n = r ? l.apply(s, r) : l.call(s), o = h, n
				},
				ge = function(t) {
					return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && me(t, "onInterrupt"), t
				},
				ve = [],
				ye = function(t) {
					if (t)
						if (t = !t.name && t.default || t, z() || t.headless) {
							var e = t.name,
								i = L(t),
								r = e && !i && t.init ? function() {
									this._props = []
								} : t,
								s = {
									init: et,
									render: hi,
									add: Ge,
									kill: ci,
									modifier: ui,
									rawVars: 0
								},
								n = {
									targetTest: 0,
									get: 0,
									getSetter: ni,
									aliases: {},
									register: 0
								};
							if (Pe(), t !== r) {
								if (lt[e]) return;
								Et(r, Et(kt(t, s), n)), Tt(r.prototype, Tt(s, kt(t, n))), lt[r.prop = e] = r, t.targetTest && (ct.push(r), nt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
							}
							tt(e, r), t.register && t.register(Si, r, fi)
						} else ve.push(t)
				},
				De = 255,
				be = {
					aqua: [0, De, De],
					lime: [0, De, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, De],
					navy: [0, 0, 128],
					white: [De, De, De],
					olive: [128, 128, 0],
					yellow: [De, De, 0],
					orange: [De, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [De, 0, 0],
					pink: [De, 192, 203],
					cyan: [0, De, De],
					transparent: [De, De, De, 0]
				},
				_e = function(t, e, i) {
					return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * De + .5 | 0
				},
				we = function(t, e, i) {
					var r, s, n, a, o, l, h, u, c, p, d = t ? I(t) ? [t >> 16, t >> 8 & De, t & De] : 0 : be.black;
					if (!d) {
						if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t]) d = be[t];
						else if ("#" === t.charAt(0)) {
							if (t.length < 6 && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & De, d & De, parseInt(t.substr(7), 16) / 255];
							d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & De, t & De]
						} else if ("hsl" === t.substr(0, 3))
							if (d = p = t.match(Y), e) {
								if (~t.indexOf("=")) return d = t.match(H), i && d.length < 4 && (d[3] = 1), d
							} else a = +d[0] % 360 / 360, o = +d[1] / 100, r = 2 * (l = +d[2] / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), d.length > 3 && (d[3] *= 1), d[0] = _e(a + 1 / 3, r, s), d[1] = _e(a, r, s), d[2] = _e(a - 1 / 3, r, s);
						else d = t.match(Y) || be.transparent;
						d = d.map(Number)
					}
					return e && !p && (r = d[0] / De, s = d[1] / De, n = d[2] / De, l = ((h = Math.max(r, s, n)) + (u = Math.min(r, s, n))) / 2, h === u ? a = o = 0 : (c = h - u, o = l > .5 ? c / (2 - h - u) : c / (h + u), a = h === r ? (s - n) / c + (s < n ? 6 : 0) : h === s ? (n - r) / c + 2 : (r - s) / c + 4, a *= 60), d[0] = ~~(a + .5), d[1] = ~~(100 * o + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d
				},
				xe = function(t) {
					var e = [],
						i = [],
						r = -1;
					return t.split(Ee).forEach((function(t) {
						var s = t.match(j) || [];
						e.push.apply(e, s), i.push(r += s.length + 1)
					})), e.c = i, e
				},
				Ce = function(t, e, i) {
					var r, s, n, a, o = "",
						l = (t + o).match(Ee),
						h = e ? "hsla(" : "rgba(",
						u = 0;
					if (!l) return t;
					if (l = l.map((function(t) {
							return (t = we(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
						})), i && (n = xe(t), (r = i.c).join(o) !== n.c.join(o)))
						for (a = (s = t.replace(Ee, "1").split(j)).length - 1; u < a; u++) o += s[u] + (~r.indexOf(u) ? l.shift() || h + "0,0,0,0)" : (n.length ? n : l.length ? l : i).shift());
					if (!s)
						for (a = (s = t.split(Ee)).length - 1; u < a; u++) o += s[u] + l[u];
					return o + s[a]
				},
				Ee = function() {
					var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
					for (t in be) e += "|" + t + "\\b";
					return new RegExp(e + ")", "gi")
				}(),
				Te = /hsl[a]?\(/,
				Se = function(t) {
					var e, i = t.join(" ");
					if (Ee.lastIndex = 0, Ee.test(i)) return e = Te.test(i), t[1] = Ce(t[1], e), t[0] = Ce(t[0], e, xe(t[1])), !0
				},
				ke = function() {
					var t, e, i, r, s, n, a = Date.now,
						o = 500,
						l = 33,
						d = a(),
						f = d,
						g = 1e3 / 240,
						v = g,
						y = [],
						D = function i(h) {
							var u, c, p, m, D = a() - f,
								b = !0 === h;
							if ((D > o || D < 0) && (d += D - l), ((u = (p = (f += D) - d) - v) > 0 || b) && (m = ++r.frame, s = p - 1e3 * r.time, r.time = p /= 1e3, v += u + (u >= g ? 4 : g - u), c = 1), b || (t = e(i)), c)
								for (n = 0; n < y.length; n++) y[n](p, s, m, h)
						};
					return r = {
						time: 0,
						frame: 0,
						tick: function() {
							D(!0)
						},
						deltaRatio: function(t) {
							return s / (1e3 / (t || 60))
						},
						wake: function() {
							p && (!u && z() && (h = u = window, c = h.document || {}, U.gsap = Si, (h.gsapVersions || (h.gsapVersions = [])).push(Si.version), J(K || h.GreenSockGlobals || !h.gsap && h || {}), ve.forEach(ye)), i = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && r.sleep(), e = i || function(t) {
								return setTimeout(t, v - 1e3 * r.time + 1 | 0)
							}, m = 1, D(2))
						},
						sleep: function() {
							(i ? cancelAnimationFrame : clearTimeout)(t), m = 0, e = et
						},
						lagSmoothing: function(t, e) {
							o = t || 1 / 0, l = Math.min(e || 33, o)
						},
						fps: function(t) {
							g = 1e3 / (t || 240), v = 1e3 * r.time + g
						},
						add: function(t, e, i) {
							var s = e ? function(e, i, n, a) {
								t(e, i, n, a), r.remove(s)
							} : t;
							return r.remove(t), y[i ? "unshift" : "push"](s), Pe(), s
						},
						remove: function(t, e) {
							~(e = y.indexOf(t)) && y.splice(e, 1) && n >= e && n--
						},
						_listeners: y
					}
				}(),
				Pe = function() {
					return !m && ke.wake()
				},
				Ae = {},
				Me = /^[\d.\-M][\d.\-,\s]/,
				Fe = /["']/g,
				Le = function(t) {
					for (var e, i, r, s = {}, n = t.substr(1, t.length - 3).split(":"), a = n[0], o = 1, l = n.length; o < l; o++) i = n[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[a] = isNaN(r) ? r.replace(Fe, "").trim() : +r, a = i.substr(e + 1).trim();
					return s
				},
				Ie = function(t) {
					return function(e) {
						return 1 - t(1 - e)
					}
				},
				Oe = function t(e, i) {
					for (var r, s = e._first; s;) s instanceof He ? t(s, i) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === i || (s.timeline ? t(s.timeline, i) : (r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = i)), s = s._next
				},
				Re = function(t, e) {
					return t && (L(t) ? t : Ae[t] || function(t) {
						var e, i, r, s, n = (t + "").split("("),
							a = Ae[n[0]];
						return a && n.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Le(n[1])] : (e = t, i = e.indexOf("(") + 1, r = e.indexOf(")"), s = e.indexOf("(", i), e.substring(i, ~s && s < r ? e.indexOf(")", r + 1) : r)).split(",").map(xt)) : Ae._CE && Me.test(t) ? Ae._CE("", t) : a
					}(t)) || e
				},
				Be = function(t, e, i, r) {
					void 0 === i && (i = function(t) {
						return 1 - e(1 - t)
					}), void 0 === r && (r = function(t) {
						return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
					});
					var s, n = {
						easeIn: e,
						easeOut: i,
						easeInOut: r
					};
					return gt(t, (function(t) {
						for (var e in Ae[t] = U[t] = n, Ae[s = t.toLowerCase()] = i, n) Ae[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ae[t + "." + e] = n[e]
					})), n
				},
				ze = function(t) {
					return function(e) {
						return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
					}
				},
				Ne = function t(e, i, r) {
					var s = i >= 1 ? i : 1,
						n = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
						a = n / T * (Math.asin(1 / s) || 0),
						o = function(t) {
							return 1 === t ? 1 : s * Math.pow(2, -10 * t) * M((t - a) * n) + 1
						},
						l = "out" === e ? o : "in" === e ? function(t) {
							return 1 - o(1 - t)
						} : ze(o);
					return n = T / n, l.config = function(i, r) {
						return t(e, i, r)
					}, l
				},
				Ve = function t(e, i) {
					void 0 === i && (i = 1.70158);
					var r = function(t) {
							return t ? --t * t * ((i + 1) * t + i) + 1 : 0
						},
						s = "out" === e ? r : "in" === e ? function(t) {
							return 1 - r(1 - t)
						} : ze(r);
					return s.config = function(i) {
						return t(e, i)
					}, s
				};
			gt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
				var i = e < 5 ? e + 1 : e;
				Be(t + ",Power" + (i - 1), e ? function(t) {
					return Math.pow(t, i)
				} : function(t) {
					return t
				}, (function(t) {
					return 1 - Math.pow(1 - t, i)
				}), (function(t) {
					return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
				}))
			})), Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn, Be("Elastic", Ne("in"), Ne("out"), Ne()), g = 7.5625, D = 2 * (y = 1 / (v = 2.75)), b = 2.5 * y, Be("Bounce", (function(t) {
				return 1 - _(1 - t)
			}), _ = function(t) {
				return t < y ? g * t * t : t < D ? g * Math.pow(t - 1.5 / v, 2) + .75 : t < b ? g * (t -= 2.25 / v) * t + .9375 : g * Math.pow(t - 2.625 / v, 2) + .984375
			}), Be("Expo", (function(t) {
				return t ? Math.pow(2, 10 * (t - 1)) : 0
			})), Be("Circ", (function(t) {
				return -(P(1 - t * t) - 1)
			})), Be("Sine", (function(t) {
				return 1 === t ? 1 : 1 - A(t * S)
			})), Be("Back", Ve("in"), Ve("out"), Ve()), Ae.SteppedEase = Ae.steps = U.SteppedEase = {
				config: function(t, e) {
					void 0 === t && (t = 1);
					var i = 1 / t,
						r = t + (e ? 0 : 1),
						s = e ? 1 : 0;
					return function(t) {
						return ((r * Qt(0, .99999999, t) | 0) + s) * i
					}
				}
			}, x.ease = Ae["quad.out"], gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
				return pt += t + "," + t + "Params,"
			}));
			var Xe = function(t, e) {
					this.id = k++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : ni
				},
				Ye = function() {
					function t(t) {
						this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), m || ke.wake()
					}
					var e = t.prototype;
					return e.delay = function(t) {
						return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
					}, e.duration = function(t) {
						return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
					}, e.totalDuration = function(t) {
						return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
					}, e.totalTime = function(t, e) {
						if (Pe(), !arguments.length) return this._tTime;
						var i = this._dp;
						if (i && i.smoothChildTiming && this._ts) {
							for (Vt(this, t), !i._dp || i.parent || Xt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
							!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Yt(this._dp, this, this._start - this._delay)
						}
						return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === E || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
					}, e.time = function(t, e) {
						return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
					}, e.totalProgress = function(t, e) {
						return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
					}, e.progress = function(t, e) {
						return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
					}, e.iteration = function(t, e) {
						var i = this.duration() + this._rDelay;
						return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Bt(this._tTime, i) + 1 : 1
					}, e.timeScale = function(t, e) {
						if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
						if (this._rts === t) return this;
						var i = this.parent && this._ts ? zt(this.parent._time, this) : this._tTime;
						return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Qt(-Math.abs(this._delay), this._tDur, i), !1 !== e), Nt(this),
							function(t) {
								for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
								return t
							}(this)
					}, e.paused = function(t) {
						return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== E && (this._tTime -= E)))), this) : this._ps
					}, e.startTime = function(t) {
						if (arguments.length) {
							this._start = t;
							var e = this.parent || this._dp;
							return e && (e._sort || !this.parent) && Yt(e, this, t - this._delay), this
						}
						return this._start
					}, e.endTime = function(t) {
						return this._start + (B(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
					}, e.rawTime = function(t) {
						var e = this.parent || this._dp;
						return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zt(e.rawTime(t), this) : this._tTime : this._tTime
					}, e.revert = function(t) {
						void 0 === t && (t = st);
						var e = a;
						return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
					}, e.globalTime = function(t) {
						for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (Math.abs(e._ts) || 1), e = e._dp;
						return !this.parent && this._sat ? this._sat.globalTime(t) : i
					}, e.repeat = function(t) {
						return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
					}, e.repeatDelay = function(t) {
						if (arguments.length) {
							var e = this._time;
							return this._rDelay = t, $t(this), e ? this.time(e) : this
						}
						return this._rDelay
					}, e.yoyo = function(t) {
						return arguments.length ? (this._yoyo = t, this) : this._yoyo
					}, e.seek = function(t, e) {
						return this.totalTime(Kt(this, t), B(e))
					}, e.restart = function(t, e) {
						return this.play().totalTime(t ? -this._delay : 0, B(e))
					}, e.play = function(t, e) {
						return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
					}, e.reverse = function(t, e) {
						return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
					}, e.pause = function(t, e) {
						return null != t && this.seek(t, e), this.paused(!0)
					}, e.resume = function() {
						return this.paused(!1)
					}, e.reversed = function(t) {
						return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
					}, e.invalidate = function() {
						return this._initted = this._act = 0, this._zTime = -1e-8, this
					}, e.isActive = function() {
						var t, e = this.parent || this._dp,
							i = this._start;
						return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - E))
					}, e.eventCallback = function(t, e, i) {
						var r = this.vars;
						return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
					}, e.then = function(t) {
						var e = this;
						return new Promise((function(i) {
							var r = L(t) ? t : Ct,
								s = function() {
									var t = e.then;
									e.then = null, L(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
								};
							e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
						}))
					}, e.kill = function() {
						ge(this)
					}, t
				}();
			Et(Ye.prototype, {
				_time: 0,
				_start: 0,
				_end: 0,
				_tTime: 0,
				_tDur: 0,
				_dirty: 0,
				_repeat: 0,
				_yoyo: !1,
				parent: null,
				_initted: !1,
				_rDelay: 0,
				_ts: 1,
				_dp: 0,
				ratio: 0,
				_zTime: -1e-8,
				_prom: 0,
				_ps: !1,
				_rts: 1
			});
			var He = function(t) {
				function e(e, i) {
					var s;
					return void 0 === e && (e = {}), (s = t.call(this, e) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = B(e.sortChildren), l && Yt(e.parent || l, r(s), i), e.reversed && s.reverse(), e.paused && s.paused(!0), e.scrollTrigger && Ht(r(s), e.scrollTrigger), s
				}
				s(e, t);
				var i = e.prototype;
				return i.to = function(t, e, i) {
					return Jt(0, arguments, this), this
				}, i.from = function(t, e, i) {
					return Jt(1, arguments, this), this
				}, i.fromTo = function(t, e, i, r) {
					return Jt(2, arguments, this), this
				}, i.set = function(t, e, i) {
					return e.duration = 0, e.parent = this, Pt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new ti(t, e, Kt(this, i), 1), this
				}, i.call = function(t, e, i) {
					return Yt(this, ti.delayedCall(0, t, e), i)
				}, i.staggerTo = function(t, e, i, r, s, n, a) {
					return i.duration = e, i.stagger = i.stagger || r, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new ti(t, i, Kt(this, s)), this
				}, i.staggerFrom = function(t, e, i, r, s, n, a) {
					return i.runBackwards = 1, Pt(i).immediateRender = B(i.immediateRender), this.staggerTo(t, e, i, r, s, n, a)
				}, i.staggerFromTo = function(t, e, i, r, s, n, a, o) {
					return r.startAt = i, Pt(r).immediateRender = B(r.immediateRender), this.staggerTo(t, e, r, s, n, a, o)
				}, i.render = function(t, e, i) {
					var r, s, n, o, h, u, c, p, d, f, m, g, v = this._time,
						y = this._dirty ? this.totalDuration() : this._tDur,
						D = this._dur,
						b = t <= 0 ? 0 : yt(t),
						_ = this._zTime < 0 != t < 0 && (this._initted || !D);
					if (this !== l && b > y && t >= 0 && (b = y), b !== this._tTime || i || _) {
						if (v !== this._time && D && (b += this._time - v, t += this._time - v), r = b, d = this._start, u = !(p = this._ts), _ && (D || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
							if (m = this._yoyo, h = D + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, i);
							if (r = yt(b % h), b === y ? (o = this._repeat, r = D) : ((o = ~~(b / h)) && o === b / h && (r = D, o--), r > D && (r = D)), f = Bt(this._tTime, h), !v && this._tTime && f !== o && this._tTime - f * h - this._dur <= 0 && (f = o), m && 1 & o && (r = D - r, g = 1), o !== f && !this._lock) {
								var w = m && 1 & f,
									x = w === (m && 1 & o);
								if (o < f && (w = !w), v = w ? 0 : b % D ? D : b, this._lock = 1, this.render(v || (g ? 0 : yt(o * h)), e, !D)._lock = 0, this._tTime = b, !e && this.parent && me(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
								if (D = this._dur, y = this._tDur, x && (this._lock = 2, v = w ? D : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
								Oe(this, g)
							}
						}
						if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, i) {
								var r;
								if (i > e)
									for (r = t._first; r && r._start <= i;) {
										if ("isPause" === r.data && r._start > e) return r;
										r = r._next
									} else
										for (r = t._last; r && r._start >= i;) {
											if ("isPause" === r.data && r._start < e) return r;
											r = r._prev
										}
							}(this, yt(v), yt(r)), c && (b -= r - (r = c._start))), this._tTime = b, this._time = r, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && r && !e && !o && (me(this, "onStart"), this._tTime !== b)) return this;
						if (r >= v && t >= 0)
							for (s = this._first; s;) {
								if (n = s._next, (s._act || r >= s._start) && s._ts && c !== s) {
									if (s.parent !== this) return this.render(t, e, i);
									if (s.render(s._ts > 0 ? (r - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (r - s._start) * s._ts, e, i), r !== this._time || !this._ts && !u) {
										c = 0, n && (b += this._zTime = -1e-8);
										break
									}
								}
								s = n
							} else {
								s = this._last;
								for (var C = t < 0 ? t : r; s;) {
									if (n = s._prev, (s._act || C <= s._end) && s._ts && c !== s) {
										if (s.parent !== this) return this.render(t, e, i);
										if (s.render(s._ts > 0 ? (C - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (C - s._start) * s._ts, e, i || a && (s._initted || s._startAt)), r !== this._time || !this._ts && !u) {
											c = 0, n && (b += this._zTime = C ? -1e-8 : E);
											break
										}
									}
									s = n
								}
							}
						if (c && !e && (this.pause(), c.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1, this._ts)) return this._start = d, Nt(this), this.render(t, e, i);
						this._onUpdate && !e && me(this, "onUpdate", !0), (b === y && this._tTime >= this.totalDuration() || !b && v) && (d !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !D) && (b === y && this._ts > 0 || !b && this._ts < 0) && Ft(this, 1), e || t < 0 && !v || !b && !v && y || (me(this, b === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())))
					}
					return this
				}, i.add = function(t, e) {
					var i = this;
					if (I(e) || (e = Kt(this, e, t)), !(t instanceof Ye)) {
						if (X(t)) return t.forEach((function(t) {
							return i.add(t, e)
						})), this;
						if (F(t)) return this.addLabel(t, e);
						if (!L(t)) return this;
						t = ti.delayedCall(0, t)
					}
					return this !== t ? Yt(this, t, e) : this
				}, i.getChildren = function(t, e, i, r) {
					void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -C);
					for (var s = [], n = this._first; n;) n._start >= r && (n instanceof ti ? e && s.push(n) : (i && s.push(n), t && s.push.apply(s, n.getChildren(!0, e, i)))), n = n._next;
					return s
				}, i.getById = function(t) {
					for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
						if (e[i].vars.id === t) return e[i]
				}, i.remove = function(t) {
					return F(t) ? this.removeLabel(t) : L(t) ? this.killTweensOf(t) : (Mt(this, t), t === this._recent && (this._recent = this._last), Lt(this))
				}, i.totalTime = function(e, i) {
					return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = yt(ke.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
				}, i.addLabel = function(t, e) {
					return this.labels[t] = Kt(this, e), this
				}, i.removeLabel = function(t) {
					return delete this.labels[t], this
				}, i.addPause = function(t, e, i) {
					var r = ti.delayedCall(0, e || et, i);
					return r.data = "isPause", this._hasPause = 1, Yt(this, r, Kt(this, t))
				}, i.removePause = function(t) {
					var e = this._first;
					for (t = Kt(this, t); e;) e._start === t && "isPause" === e.data && Ft(e), e = e._next
				}, i.killTweensOf = function(t, e, i) {
					for (var r = this.getTweensOf(t, i), s = r.length; s--;) je !== r[s] && r[s].kill(t, e);
					return this
				}, i.getTweensOf = function(t, e) {
					for (var i, r = [], s = se(t), n = this._first, a = I(e); n;) n instanceof ti ? bt(n._targets, s) && (a ? (!je || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && r.push(n) : (i = n.getTweensOf(s, e)).length && r.push.apply(r, i), n = n._next;
					return r
				}, i.tweenTo = function(t, e) {
					e = e || {};
					var i, r = this,
						s = Kt(r, t),
						n = e,
						a = n.startAt,
						o = n.onStart,
						l = n.onStartParams,
						h = n.immediateRender,
						u = ti.to(r, Et({
							ease: e.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: s,
							overwrite: "auto",
							duration: e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || E,
							onStart: function() {
								if (r.pause(), !i) {
									var t = e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale());
									u._dur !== t && Gt(u, t, 0, 1).render(u._time, !0, !0), i = 1
								}
								o && o.apply(u, l || [])
							}
						}, e));
					return h ? u.render(0) : u
				}, i.tweenFromTo = function(t, e, i) {
					return this.tweenTo(e, Et({
						startAt: {
							time: Kt(this, t)
						}
					}, i))
				}, i.recent = function() {
					return this._recent
				}, i.nextLabel = function(t) {
					return void 0 === t && (t = this._time), fe(this, Kt(this, t))
				}, i.previousLabel = function(t) {
					return void 0 === t && (t = this._time), fe(this, Kt(this, t), 1)
				}, i.currentLabel = function(t) {
					return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + E)
				}, i.shiftChildren = function(t, e, i) {
					void 0 === i && (i = 0);
					for (var r, s = this._first, n = this.labels; s;) s._start >= i && (s._start += t, s._end += t), s = s._next;
					if (e)
						for (r in n) n[r] >= i && (n[r] += t);
					return Lt(this)
				}, i.invalidate = function(e) {
					var i = this._first;
					for (this._lock = 0; i;) i.invalidate(e), i = i._next;
					return t.prototype.invalidate.call(this, e)
				}, i.clear = function(t) {
					void 0 === t && (t = !0);
					for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
					return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Lt(this)
				}, i.totalDuration = function(t) {
					var e, i, r, s = 0,
						n = this,
						a = n._last,
						o = C;
					if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
					if (n._dirty) {
						for (r = n.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, Yt(n, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (s -= i, (!r && !n._dp || r && r.smoothChildTiming) && (n._start += i / n._ts, n._time -= i, n._tTime -= i), n.shiftChildren(-i, !1, -Infinity), o = 0), a._end > s && a._ts && (s = a._end), a = e;
						Gt(n, n === l && n._time > s ? n._time : s, 1, 1), n._dirty = 0
					}
					return n._tDur
				}, e.updateRoot = function(t) {
					if (l._ts && (wt(l, zt(t, l)), d = ke.frame), ke.frame >= ut) {
						ut += w.autoSleep || 120;
						var e = l._first;
						if ((!e || !e._ts) && w.autoSleep && ke._listeners.length < 2) {
							for (; e && !e._ts;) e = e._next;
							e || ke.sleep()
						}
					}
				}, e
			}(Ye);
			Et(He.prototype, {
				_lock: 0,
				_hasPause: 0,
				_forcing: 0
			});
			var je, qe, We = function(t, e, i, r, s, n, a) {
					var o, l, h, u, c, p, d, f, m = new fi(this._pt, t, e, 0, 1, li, null, s),
						g = 0,
						v = 0;
					for (m.b = i, m.e = r, i += "", (d = ~(r += "").indexOf("random(")) && (r = pe(r)), n && (n(f = [i, r], t, e), i = f[0], r = f[1]), l = i.match(q) || []; o = q.exec(r);) u = o[0], c = r.substring(g, o.index), h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), u !== l[v++] && (p = parseFloat(l[v - 1]) || 0, m._pt = {
						_next: m._pt,
						p: c || 1 === v ? c : ",",
						s: p,
						c: "=" === u.charAt(1) ? Dt(p, u) - p : parseFloat(u) - p,
						m: h && h < 4 ? Math.round : 0
					}, g = q.lastIndex);
					return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = a, (W.test(r) || d) && (m.e = 0), this._pt = m, m
				},
				Ge = function(t, e, i, r, s, n, a, o, l, h) {
					L(r) && (r = r(s || 0, t, n));
					var u, c = t[e],
						p = "get" !== i ? i : L(c) ? l ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
						d = L(c) ? l ? ri : ii : ei;
					if (F(r) && (~r.indexOf("random(") && (r = pe(r)), "=" === r.charAt(1) && ((u = Dt(p, r) + (te(p) || 0)) || 0 === u) && (r = u)), !h || p !== r || qe) return isNaN(p * r) || "" === r ? (!c && !(e in t) && Z(e, r), We.call(this, t, e, p, r, d, o || w.stringFilter, l)) : (u = new fi(this._pt, t, e, +p || 0, r - (p || 0), "boolean" == typeof c ? oi : ai, 0, d), l && (u.fp = l), a && u.modifier(a, this, t), this._pt = u)
				},
				$e = function(t, e, i, r, s, n) {
					var a, o, l, h;
					if (lt[t] && !1 !== (a = new lt[t]).init(s, a.rawVars ? e[t] : function(t, e, i, r, s) {
							if (L(t) && (t = Je(t, s, e, i, r)), !R(t) || t.style && t.nodeType || X(t) || V(t)) return F(t) ? Je(t, s, e, i, r) : t;
							var n, a = {};
							for (n in t) a[n] = Je(t[n], s, e, i, r);
							return a
						}(e[t], r, s, n, i), i, r, n) && (i._pt = o = new fi(i._pt, s, t, 0, 1, a.render, a, 0, a.priority), i !== f))
						for (l = i._ptLookup[i._targets.indexOf(s)], h = a._props.length; h--;) l[a._props[h]] = o;
					return a
				},
				Ue = function t(e, i, r) {
					var s, o, h, u, c, p, d, f, m, g, v, y, D, b = e.vars,
						_ = b.ease,
						w = b.startAt,
						T = b.immediateRender,
						S = b.lazy,
						k = b.onUpdate,
						P = b.runBackwards,
						A = b.yoyoEase,
						M = b.keyframes,
						F = b.autoRevert,
						L = e._dur,
						I = e._startAt,
						O = e._targets,
						R = e.parent,
						z = R && "nested" === R.data ? R.vars.targets : O,
						N = "auto" === e._overwrite && !n,
						V = e.timeline;
					if (V && (!M || !_) && (_ = "none"), e._ease = Re(_, x.ease), e._yEase = A ? Ie(Re(!0 === A ? _ : A, x.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !V && !!b.runBackwards, !V || M && !b.stagger) {
						if (y = (f = O[0] ? ft(O[0]).harness : 0) && b[f.prop], s = kt(b, nt), I && (I._zTime < 0 && I.progress(1), i < 0 && P && T && !F ? I.render(-1, !0) : I.revert(P && L ? rt : it), I._lazy = 0), w) {
							if (Ft(e._startAt = ti.set(O, Et({
									data: "isStart",
									overwrite: !1,
									parent: R,
									immediateRender: !0,
									lazy: !I && B(S),
									startAt: null,
									delay: 0,
									onUpdate: k && function() {
										return me(e, "onUpdate")
									},
									stagger: 0
								}, w))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a || !T && !F) && e._startAt.revert(rt), T && L && i <= 0 && r <= 0) return void(i && (e._zTime = i))
						} else if (P && L && !I)
							if (i && (T = !1), h = Et({
									overwrite: !1,
									data: "isFromStart",
									lazy: T && !I && B(S),
									immediateRender: T,
									stagger: 0,
									parent: R
								}, s), y && (h[f.prop] = y), Ft(e._startAt = ti.set(O, h)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a ? e._startAt.revert(rt) : e._startAt.render(-1, !0)), e._zTime = i, T) {
								if (!i) return
							} else t(e._startAt, E, E);
						for (e._pt = e._ptCache = 0, S = L && B(S) || S && !L, o = 0; o < O.length; o++) {
							if (d = (c = O[o])._gsap || dt(O)[o]._gsap, e._ptLookup[o] = g = {}, ot[d.id] && at.length && _t(), v = z === O ? o : z.indexOf(c), f && !1 !== (m = new f).init(c, y || s, e, v, z) && (e._pt = u = new fi(e._pt, c, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function(t) {
									g[t] = u
								})), m.priority && (p = 1)), !f || y)
								for (h in s) lt[h] && (m = $e(h, s, e, v, c, z)) ? m.priority && (p = 1) : g[h] = u = Ge.call(e, c, h, "get", s[h], v, z, 0, b.stringFilter);
							e._op && e._op[o] && e.kill(c, e._op[o]), N && e._pt && (je = e, l.killTweensOf(c, g, e.globalTime(i)), D = !e.parent, je = 0), e._pt && S && (ot[d.id] = 1)
						}
						p && di(e), e._onInit && e._onInit(e)
					}
					e._onUpdate = k, e._initted = (!e._op || e._pt) && !D, M && i <= 0 && V.render(C, !0, !0)
				},
				Ke = function(t, e, i, r) {
					var s, n, a = e.ease || r || "power1.inOut";
					if (X(e)) n = i[t] || (i[t] = []), e.forEach((function(t, i) {
						return n.push({
							t: i / (e.length - 1) * 100,
							v: t,
							e: a
						})
					}));
					else
						for (s in e) n = i[s] || (i[s] = []), "ease" === s || n.push({
							t: parseFloat(t),
							v: e[s],
							e: a
						})
				},
				Je = function(t, e, i, r, s) {
					return L(t) ? t.call(e, i, r, s) : F(t) && ~t.indexOf("random(") ? pe(t) : t
				},
				Ze = pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
				Qe = {};
			gt(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
				return Qe[t] = 1
			}));
			var ti = function(t) {
				function e(e, i, s, a) {
					var o;
					"number" == typeof i && (s.duration = i, i = s, s = null);
					var h, u, c, p, d, f, m, g, v = (o = t.call(this, a ? i : Pt(i)) || this).vars,
						y = v.duration,
						D = v.delay,
						b = v.immediateRender,
						_ = v.stagger,
						x = v.overwrite,
						C = v.keyframes,
						E = v.defaults,
						T = v.scrollTrigger,
						S = v.yoyoEase,
						k = i.parent || l,
						P = (X(e) || V(e) ? I(e[0]) : "length" in i) ? [e] : se(e);
					if (o._targets = P.length ? dt(P) : Q("GSAP target " + e + " not found. https://gsap.com", !w.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, C || _ || N(y) || N(D)) {
						if (i = o.vars, (h = o.timeline = new He({
								data: "nested",
								defaults: E || {},
								targets: k && "nested" === k.data ? k.vars.targets : P
							})).kill(), h.parent = h._dp = r(o), h._start = 0, _ || N(y) || N(D)) {
							if (p = P.length, m = _ && oe(_), R(_))
								for (d in _) ~Ze.indexOf(d) && (g || (g = {}), g[d] = _[d]);
							for (u = 0; u < p; u++)(c = kt(i, Qe)).stagger = 0, S && (c.yoyoEase = S), g && Tt(c, g), f = P[u], c.duration = +Je(y, r(o), u, f, P), c.delay = (+Je(D, r(o), u, f, P) || 0) - o._delay, !_ && 1 === p && c.delay && (o._delay = D = c.delay, o._start += D, c.delay = 0), h.to(f, c, m ? m(u, f, P) : 0), h._ease = Ae.none;
							h.duration() ? y = D = 0 : o.timeline = 0
						} else if (C) {
							Pt(Et(h.vars.defaults, {
								ease: "none"
							})), h._ease = Re(C.ease || i.ease || "none");
							var A, M, F, L = 0;
							if (X(C)) C.forEach((function(t) {
								return h.to(P, t, ">")
							})), h.duration();
							else {
								for (d in c = {}, C) "ease" === d || "easeEach" === d || Ke(d, C[d], c, C.easeEach);
								for (d in c)
									for (A = c[d].sort((function(t, e) {
											return t.t - e.t
										})), L = 0, u = 0; u < A.length; u++)(F = {
										ease: (M = A[u]).e,
										duration: (M.t - (u ? A[u - 1].t : 0)) / 100 * y
									})[d] = M.v, h.to(P, F, L), L += F.duration;
								h.duration() < y && h.to({}, {
									duration: y - h.duration()
								})
							}
						}
						y || o.duration(y = h.duration())
					} else o.timeline = 0;
					return !0 !== x || n || (je = r(o), l.killTweensOf(P), je = 0), Yt(k, r(o), s), i.reversed && o.reverse(), i.paused && o.paused(!0), (b || !y && !C && o._start === yt(k._time) && B(b) && Ot(r(o)) && "nested" !== k.data) && (o._tTime = -1e-8, o.render(Math.max(0, -D) || 0)), T && Ht(r(o), T), o
				}
				s(e, t);
				var i = e.prototype;
				return i.render = function(t, e, i) {
					var r, s, n, o, l, h, u, c, p, d = this._time,
						f = this._tDur,
						m = this._dur,
						g = t < 0,
						v = t > f - E && !g ? f : t < E ? 0 : t;
					if (m) {
						if (v !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
							if (r = v, c = this.timeline, this._repeat) {
								if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
								if (r = yt(v % o), v === f ? (n = this._repeat, r = m) : ((n = ~~(v / o)) && n === yt(v / o) && (r = m, n--), r > m && (r = m)), (h = this._yoyo && 1 & n) && (p = this._yEase, r = m - r), l = Bt(this._tTime, o), r === d && !i && this._initted && n === l) return this._tTime = v, this;
								n !== l && (c && this._yEase && Oe(c, h), this.vars.repeatRefresh && !h && !this._lock && this._time !== o && this._initted && (this._lock = i = 1, this.render(yt(o * n), !0).invalidate()._lock = 0))
							}
							if (!this._initted) {
								if (jt(this, g ? t : r, i, e, v)) return this._tTime = 0, this;
								if (!(d === this._time || i && this.vars.repeatRefresh && n !== l)) return this;
								if (m !== this._dur) return this.render(t, e, i)
							}
							if (this._tTime = v, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (p || this._ease)(r / m), this._from && (this.ratio = u = 1 - u), r && !d && !e && !n && (me(this, "onStart"), this._tTime !== v)) return this;
							for (s = this._pt; s;) s.r(u, s.d), s = s._next;
							c && c.render(t < 0 ? t : c._dur * c._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && It(this, t, 0, i), me(this, "onUpdate")), this._repeat && n !== l && this.vars.onRepeat && !e && this.parent && me(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && It(this, t, 0, !0), (t || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ft(this, 1), e || g && !d || !(v || d || h) || (me(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
						}
					} else ! function(t, e, i, r) {
						var s, n, o, l = t.ratio,
							h = e < 0 || !e && (!t._start && qt(t) && (t._initted || !Wt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Wt(t)) ? 0 : 1,
							u = t._rDelay,
							c = 0;
						if (u && t._repeat && (c = Qt(0, t._tDur, e), n = Bt(c, u), t._yoyo && 1 & n && (h = 1 - h), n !== Bt(t._tTime, u) && (l = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== l || a || r || t._zTime === E || !e && t._zTime) {
							if (!t._initted && jt(t, e, r, i, c)) return;
							for (o = t._zTime, t._zTime = e || (i ? E : 0), i || (i = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = c, s = t._pt; s;) s.r(h, s.d), s = s._next;
							e < 0 && It(t, e, 0, !0), t._onUpdate && !i && me(t, "onUpdate"), c && t._repeat && !i && t.parent && me(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Ft(t, 1), i || a || (me(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
						} else t._zTime || (t._zTime = e)
					}(this, t, e, i);
					return this
				}, i.targets = function() {
					return this._targets
				}, i.invalidate = function(e) {
					return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
				}, i.resetTo = function(t, e, i, r, s) {
					m || ke.wake(), this._ts || this.play();
					var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
					return this._initted || Ue(this, n),
						function(t, e, i, r, s, n, a, o) {
							var l, h, u, c, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
							if (!p)
								for (p = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--;) {
									if ((l = u[c][e]) && l.d && l.d._pt)
										for (l = l.d._pt; l && l.p !== e && l.fp !== e;) l = l._next;
									if (!l) return qe = 1, t.vars[e] = "+=0", Ue(t, a), qe = 0, o ? Q(e + " not eligible for reset") : 1;
									p.push(l)
								}
							for (c = p.length; c--;)(l = (h = p[c])._pt || h).s = !r && 0 !== r || s ? l.s + (r || 0) + n * l.c : r, l.c = i - l.s, h.e && (h.e = vt(i) + te(h.e)), h.b && (h.b = l.s + te(h.b))
						}(this, t, e, i, r, this._ease(n / this._dur), n, s) ? this.resetTo(t, e, i, r, 1) : (Vt(this, 0), this.parent || At(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
				}, i.kill = function(t, e) {
					if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ge(this) : this;
					if (this.timeline) {
						var i = this.timeline.totalDuration();
						return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || ge(this), this.parent && i !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / i, 0, 1), this
					}
					var r, s, n, a, o, l, h, u = this._targets,
						c = t ? se(t) : u,
						p = this._ptLookup,
						d = this._pt;
					if ((!e || "all" === e) && function(t, e) {
							for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
							return i < 0
						}(u, c)) return "all" === e && (this._pt = 0), ge(this);
					for (r = this._op = this._op || [], "all" !== e && (F(e) && (o = {}, gt(e, (function(t) {
							return o[t] = 1
						})), e = o), e = function(t, e) {
							var i, r, s, n, a = t[0] ? ft(t[0]).harness : 0,
								o = a && a.aliases;
							if (!o) return e;
							for (r in i = Tt({}, e), o)
								if (r in i)
									for (s = (n = o[r].split(",")).length; s--;) i[n[s]] = i[r];
							return i
						}(u, e)), h = u.length; h--;)
						if (~c.indexOf(u[h]))
							for (o in s = p[h], "all" === e ? (r[h] = e, a = s, n = {}) : (n = r[h] = r[h] || {}, a = e), a)(l = s && s[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Mt(this, l, "_pt"), delete s[o]), "all" !== n && (n[o] = 1);
					return this._initted && !this._pt && d && ge(this), this
				}, e.to = function(t, i) {
					return new e(t, i, arguments[2])
				}, e.from = function(t, e) {
					return Jt(1, arguments)
				}, e.delayedCall = function(t, i, r, s) {
					return new e(i, 0, {
						immediateRender: !1,
						lazy: !1,
						overwrite: !1,
						delay: t,
						onComplete: i,
						onReverseComplete: i,
						onCompleteParams: r,
						onReverseCompleteParams: r,
						callbackScope: s
					})
				}, e.fromTo = function(t, e, i) {
					return Jt(2, arguments)
				}, e.set = function(t, i) {
					return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
				}, e.killTweensOf = function(t, e, i) {
					return l.killTweensOf(t, e, i)
				}, e
			}(Ye);
			Et(ti.prototype, {
				_targets: [],
				_lazy: 0,
				_startAt: 0,
				_op: 0,
				_onInit: 0
			}), gt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
				ti[t] = function() {
					var e = new He,
						i = ee.call(arguments, 0);
					return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
				}
			}));
			var ei = function(t, e, i) {
					return t[e] = i
				},
				ii = function(t, e, i) {
					return t[e](i)
				},
				ri = function(t, e, i, r) {
					return t[e](r.fp, i)
				},
				si = function(t, e, i) {
					return t.setAttribute(e, i)
				},
				ni = function(t, e) {
					return L(t[e]) ? ii : O(t[e]) && t.setAttribute ? si : ei
				},
				ai = function(t, e) {
					return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
				},
				oi = function(t, e) {
					return e.set(e.t, e.p, !!(e.s + e.c * t), e)
				},
				li = function(t, e) {
					var i = e._pt,
						r = "";
					if (!t && e.b) r = e.b;
					else if (1 === t && e.e) r = e.e;
					else {
						for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
						r += e.c
					}
					e.set(e.t, e.p, r, e)
				},
				hi = function(t, e) {
					for (var i = e._pt; i;) i.r(t, i.d), i = i._next
				},
				ui = function(t, e, i, r) {
					for (var s, n = this._pt; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
				},
				ci = function(t) {
					for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? Mt(this, r, "_pt") : r.dep || (e = 1), r = i;
					return !e
				},
				pi = function(t, e, i, r) {
					r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
				},
				di = function(t) {
					for (var e, i, r, s, n = t._pt; n;) {
						for (e = n._next, i = r; i && i.pr > n.pr;) i = i._next;
						(n._prev = i ? i._prev : s) ? n._prev._next = n: r = n, (n._next = i) ? i._prev = n : s = n, n = e
					}
					t._pt = r
				},
				fi = function() {
					function t(t, e, i, r, s, n, a, o, l) {
						this.t = e, this.s = r, this.c = s, this.p = i, this.r = n || ai, this.d = a || this, this.set = o || ei, this.pr = l || 0, this._next = t, t && (t._prev = this)
					}
					return t.prototype.modifier = function(t, e, i) {
						this.mSet = this.mSet || this.set, this.set = pi, this.m = t, this.mt = i, this.tween = e
					}, t
				}();
			gt(pt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
				return nt[t] = 1
			})), U.TweenMax = U.TweenLite = ti, U.TimelineLite = U.TimelineMax = He, l = new He({
				sortChildren: !1,
				defaults: x,
				autoRemoveChildren: !0,
				id: "root",
				smoothChildTiming: !0
			}), w.stringFilter = Se;
			var mi = [],
				gi = {},
				vi = [],
				yi = 0,
				Di = 0,
				bi = function(t) {
					return (gi[t] || vi).map((function(t) {
						return t()
					}))
				},
				_i = function() {
					var t = Date.now(),
						e = [];
					t - yi > 2 && (bi("matchMediaInit"), mi.forEach((function(t) {
						var i, r, s, n, a = t.queries,
							o = t.conditions;
						for (r in a)(i = h.matchMedia(a[r]).matches) && (s = 1), i !== o[r] && (o[r] = i, n = 1);
						n && (t.revert(), s && e.push(t))
					})), bi("matchMediaRevert"), e.forEach((function(t) {
						return t.onMatch(t, (function(e) {
							return t.add(null, e)
						}))
					})), yi = t, bi("matchMedia"))
				},
				wi = function() {
					function t(t, e) {
						this.selector = e && ne(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Di++, t && this.add(t)
					}
					var e = t.prototype;
					return e.add = function(t, e, i) {
						L(t) && (i = e, e = t, t = L);
						var r = this,
							s = function() {
								var t, s = o,
									n = r.selector;
								return s && s !== r && s.data.push(r), i && (r.selector = ne(i)), o = r, t = e.apply(r, arguments), L(t) && r._r.push(t), o = s, r.selector = n, r.isReverted = !1, t
							};
						return r.last = s, t === L ? s(r, (function(t) {
							return r.add(null, t)
						})) : t ? r[t] = s : s
					}, e.ignore = function(t) {
						var e = o;
						o = null, t(this), o = e
					}, e.getTweens = function() {
						var e = [];
						return this.data.forEach((function(i) {
							return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof ti && !(i.parent && "nested" === i.parent.data) && e.push(i)
						})), e
					}, e.clear = function() {
						this._r.length = this.data.length = 0
					}, e.kill = function(t, e) {
						var i = this;
						if (t ? function() {
								for (var e, r = i.getTweens(), s = i.data.length; s--;) "isFlip" === (e = i.data[s]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(t) {
									return r.splice(r.indexOf(t), 1)
								})));
								for (r.map((function(t) {
										return {
											g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
											t: t
										}
									})).sort((function(t, e) {
										return e.g - t.g || -1 / 0
									})).forEach((function(e) {
										return e.t.revert(t)
									})), s = i.data.length; s--;)(e = i.data[s]) instanceof He ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof ti) && e.revert && e.revert(t);
								i._r.forEach((function(e) {
									return e(t, i)
								})), i.isReverted = !0
							}() : this.data.forEach((function(t) {
								return t.kill && t.kill()
							})), this.clear(), e)
							for (var r = mi.length; r--;) mi[r].id === this.id && mi.splice(r, 1)
					}, e.revert = function(t) {
						this.kill(t || {})
					}, t
				}(),
				xi = function() {
					function t(t) {
						this.contexts = [], this.scope = t, o && o.data.push(this)
					}
					var e = t.prototype;
					return e.add = function(t, e, i) {
						R(t) || (t = {
							matches: t
						});
						var r, s, n, a = new wi(0, i || this.scope),
							l = a.conditions = {};
						for (s in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === s ? n = 1 : (r = h.matchMedia(t[s])) && (mi.indexOf(a) < 0 && mi.push(a), (l[s] = r.matches) && (n = 1), r.addListener ? r.addListener(_i) : r.addEventListener("change", _i));
						return n && e(a, (function(t) {
							return a.add(null, t)
						})), this
					}, e.revert = function(t) {
						this.kill(t || {})
					}, e.kill = function(t) {
						this.contexts.forEach((function(e) {
							return e.kill(t, !0)
						}))
					}, t
				}(),
				Ci = {
					registerPlugin: function() {
						for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
						e.forEach((function(t) {
							return ye(t)
						}))
					},
					timeline: function(t) {
						return new He(t)
					},
					getTweensOf: function(t, e) {
						return l.getTweensOf(t, e)
					},
					getProperty: function(t, e, i, r) {
						F(t) && (t = se(t)[0]);
						var s = ft(t || {}).get,
							n = i ? Ct : xt;
						return "native" === i && (i = ""), t ? e ? n((lt[e] && lt[e].get || s)(t, e, i, r)) : function(e, i, r) {
							return n((lt[e] && lt[e].get || s)(t, e, i, r))
						} : t
					},
					quickSetter: function(t, e, i) {
						if ((t = se(t)).length > 1) {
							var r = t.map((function(t) {
									return Si.quickSetter(t, e, i)
								})),
								s = r.length;
							return function(t) {
								for (var e = s; e--;) r[e](t)
							}
						}
						t = t[0] || {};
						var n = lt[e],
							a = ft(t),
							o = a.harness && (a.harness.aliases || {})[e] || e,
							l = n ? function(e) {
								var r = new n;
								f._pt = 0, r.init(t, i ? e + i : e, f, 0, [t]), r.render(1, r), f._pt && hi(1, f)
							} : a.set(t, o);
						return n ? l : function(e) {
							return l(t, o, i ? e + i : e, a, 1)
						}
					},
					quickTo: function(t, e, i) {
						var r, s = Si.to(t, Tt(((r = {})[e] = "+=0.1", r.paused = !0, r), i || {})),
							n = function(t, i, r) {
								return s.resetTo(e, t, i, r)
							};
						return n.tween = s, n
					},
					isTweening: function(t) {
						return l.getTweensOf(t, !0).length > 0
					},
					defaults: function(t) {
						return t && t.ease && (t.ease = Re(t.ease, x.ease)), St(x, t || {})
					},
					config: function(t) {
						return St(w, t || {})
					},
					registerEffect: function(t) {
						var e = t.name,
							i = t.effect,
							r = t.plugins,
							s = t.defaults,
							n = t.extendTimeline;
						(r || "").split(",").forEach((function(t) {
							return t && !lt[t] && !U[t] && Q(e + " effect requires " + t + " plugin.")
						})), ht[e] = function(t, e, r) {
							return i(se(t), Et(e || {}, s), r)
						}, n && (He.prototype[e] = function(t, i, r) {
							return this.add(ht[e](t, R(i) ? i : (r = i) && {}, this), r)
						})
					},
					registerEase: function(t, e) {
						Ae[t] = Re(e)
					},
					parseEase: function(t, e) {
						return arguments.length ? Re(t, e) : Ae
					},
					getById: function(t) {
						return l.getById(t)
					},
					exportRoot: function(t, e) {
						void 0 === t && (t = {});
						var i, r, s = new He(t);
						for (s.smoothChildTiming = B(t.smoothChildTiming), l.remove(s), s._dp = 0, s._time = s._tTime = l._time, i = l._first; i;) r = i._next, !e && !i._dur && i instanceof ti && i.vars.onComplete === i._targets[0] || Yt(s, i, i._start - i._delay), i = r;
						return Yt(l, s, 0), s
					},
					context: function(t, e) {
						return t ? new wi(t, e) : o
					},
					matchMedia: function(t) {
						return new xi(t)
					},
					matchMediaRefresh: function() {
						return mi.forEach((function(t) {
							var e, i, r = t.conditions;
							for (i in r) r[i] && (r[i] = !1, e = 1);
							e && t.revert()
						})) || _i()
					},
					addEventListener: function(t, e) {
						var i = gi[t] || (gi[t] = []);
						~i.indexOf(e) || i.push(e)
					},
					removeEventListener: function(t, e) {
						var i = gi[t],
							r = i && i.indexOf(e);
						r >= 0 && i.splice(r, 1)
					},
					utils: {
						wrap: function t(e, i, r) {
							var s = i - e;
							return X(e) ? ce(e, t(0, e.length), i) : Zt(r, (function(t) {
								return (s + (t - e) % s) % s + e
							}))
						},
						wrapYoyo: function t(e, i, r) {
							var s = i - e,
								n = 2 * s;
							return X(e) ? ce(e, t(0, e.length - 1), i) : Zt(r, (function(t) {
								return e + ((t = (n + (t - e) % n) % n || 0) > s ? n - t : t)
							}))
						},
						distribute: oe,
						random: ue,
						snap: he,
						normalize: function(t, e, i) {
							return de(t, e, 0, 1, i)
						},
						getUnit: te,
						clamp: function(t, e, i) {
							return Zt(i, (function(i) {
								return Qt(t, e, i)
							}))
						},
						splitColor: we,
						toArray: se,
						selector: ne,
						mapRange: de,
						pipe: function() {
							for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
							return function(t) {
								return e.reduce((function(t, e) {
									return e(t)
								}), t)
							}
						},
						unitize: function(t, e) {
							return function(i) {
								return t(parseFloat(i)) + (e || te(i))
							}
						},
						interpolate: function t(e, i, r, s) {
							var n = isNaN(e + i) ? 0 : function(t) {
								return (1 - t) * e + t * i
							};
							if (!n) {
								var a, o, l, h, u, c = F(e),
									p = {};
								if (!0 === r && (s = 1) && (r = null), c) e = {
									p: e
								}, i = {
									p: i
								};
								else if (X(e) && !X(i)) {
									for (l = [], h = e.length, u = h - 2, o = 1; o < h; o++) l.push(t(e[o - 1], e[o]));
									h--, n = function(t) {
										t *= h;
										var e = Math.min(u, ~~t);
										return l[e](t - e)
									}, r = i
								} else s || (e = Tt(X(e) ? [] : {}, e));
								if (!l) {
									for (a in i) Ge.call(p, e, a, "get", i[a]);
									n = function(t) {
										return hi(t, p) || (c ? e.p : e)
									}
								}
							}
							return Zt(r, n)
						},
						shuffle: ae
					},
					install: J,
					effects: ht,
					ticker: ke,
					updateRoot: He.updateRoot,
					plugins: lt,
					globalTimeline: l,
					core: {
						PropTween: fi,
						globals: tt,
						Tween: ti,
						Timeline: He,
						Animation: Ye,
						getCache: ft,
						_removeLinkedListItem: Mt,
						reverting: function() {
							return a
						},
						context: function(t) {
							return t && o && (o.data.push(t), t._ctx = o), o
						},
						suppressOverwrites: function(t) {
							return n = t
						}
					}
				};
			gt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
				return Ci[t] = ti[t]
			})), ke.add(He.updateRoot), f = Ci.to({}, {
				duration: 0
			});
			var Ei = function(t, e) {
					for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
					return i
				},
				Ti = function(t, e) {
					return {
						name: t,
						rawVars: 1,
						init: function(t, i, r) {
							r._onInit = function(t) {
								var r, s;
								if (F(i) && (r = {}, gt(i, (function(t) {
										return r[t] = 1
									})), i = r), e) {
									for (s in r = {}, i) r[s] = e(i[s]);
									i = r
								}! function(t, e) {
									var i, r, s, n = t._targets;
									for (i in e)
										for (r = n.length; r--;)(s = t._ptLookup[r][i]) && (s = s.d) && (s._pt && (s = Ei(s, i)), s && s.modifier && s.modifier(e[i], t, n[r], i))
								}(t, i)
							}
						}
					}
				},
				Si = Ci.registerPlugin({
					name: "attr",
					init: function(t, e, i, r, s) {
						var n, a, o;
						for (n in this.tween = i, e) o = t.getAttribute(n) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[n], r, s, 0, 0, n)).op = n, a.b = o, this._props.push(n)
					},
					render: function(t, e) {
						for (var i = e._pt; i;) a ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
					}
				}, {
					name: "endArray",
					init: function(t, e) {
						for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
					}
				}, Ti("roundProps", le), Ti("modifiers"), Ti("snap", he)) || Ci;
			ti.version = He.version = Si.version = "3.12.5", p = 1, z() && Pe();
			Ae.Power0, Ae.Power1, Ae.Power2, Ae.Power3, Ae.Power4, Ae.Linear, Ae.Quad, Ae.Cubic, Ae.Quart, Ae.Quint, Ae.Strong, Ae.Elastic, Ae.Back, Ae.SteppedEase, Ae.Bounce, Ae.Sine, Ae.Expo, Ae.Circ;
			var ki, Pi, Ai, Mi, Fi, Li, Ii, Oi, Ri = {},
				Bi = 180 / Math.PI,
				zi = Math.PI / 180,
				Ni = Math.atan2,
				Vi = /([A-Z])/g,
				Xi = /(left|right|width|margin|padding|x)/i,
				Yi = /[\s,\(]\S/,
				Hi = {
					autoAlpha: "opacity,visibility",
					scale: "scaleX,scaleY",
					alpha: "opacity"
				},
				ji = function(t, e) {
					return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
				},
				qi = function(t, e) {
					return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
				},
				Wi = function(t, e) {
					return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
				},
				Gi = function(t, e) {
					var i = e.s + e.c * t;
					e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
				},
				$i = function(t, e) {
					return e.set(e.t, e.p, t ? e.e : e.b, e)
				},
				Ui = function(t, e) {
					return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
				},
				Ki = function(t, e, i) {
					return t.style[e] = i
				},
				Ji = function(t, e, i) {
					return t.style.setProperty(e, i)
				},
				Zi = function(t, e, i) {
					return t._gsap[e] = i
				},
				Qi = function(t, e, i) {
					return t._gsap.scaleX = t._gsap.scaleY = i
				},
				tr = function(t, e, i, r, s) {
					var n = t._gsap;
					n.scaleX = n.scaleY = i, n.renderTransform(s, n)
				},
				er = function(t, e, i, r, s) {
					var n = t._gsap;
					n[e] = i, n.renderTransform(s, n)
				},
				ir = "transform",
				rr = ir + "Origin",
				sr = function t(e, i) {
					var r = this,
						s = this.target,
						n = s.style,
						a = s._gsap;
					if (e in Ri && n) {
						if (this.tfm = this.tfm || {}, "transform" === e) return Hi.transform.split(",").forEach((function(e) {
							return t.call(r, e, i)
						}));
						if (~(e = Hi[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
								return r.tfm[t] = wr(s, t)
							})) : this.tfm[e] = a.x ? a[e] : wr(s, e), e === rr && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(ir) >= 0) return;
						a.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(rr, i, "")), e = ir
					}(n || i) && this.props.push(e, i, n[e])
				},
				nr = function(t) {
					t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
				},
				ar = function() {
					var t, e, i = this.props,
						r = this.target,
						s = r.style,
						n = r._gsap;
					for (t = 0; t < i.length; t += 3) i[t + 1] ? r[i[t]] = i[t + 2] : i[t + 2] ? s[i[t]] = i[t + 2] : s.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Vi, "-$1").toLowerCase());
					if (this.tfm) {
						for (e in this.tfm) n[e] = this.tfm[e];
						n.svg && (n.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (t = Ii()) && t.isStart || s[ir] || (nr(s), n.zOrigin && s[rr] && (s[rr] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1)
					}
				},
				or = function(t, e) {
					var i = {
						target: t,
						props: [],
						revert: ar,
						save: sr
					};
					return t._gsap || Si.core.getCache(t), e && e.split(",").forEach((function(t) {
						return i.save(t)
					})), i
				},
				lr = function(t, e) {
					var i = Pi.createElementNS ? Pi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pi.createElement(t);
					return i && i.style ? i : Pi.createElement(t)
				},
				hr = function t(e, i, r) {
					var s = getComputedStyle(e);
					return s[i] || s.getPropertyValue(i.replace(Vi, "-$1").toLowerCase()) || s.getPropertyValue(i) || !r && t(e, cr(i) || i, 1) || ""
				},
				ur = "O,Moz,ms,Ms,Webkit".split(","),
				cr = function(t, e, i) {
					var r = (e || Fi).style,
						s = 5;
					if (t in r && !i) return t;
					for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(ur[s] + t in r););
					return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? ur[s] : "") + t
				},
				pr = function() {
					"undefined" != typeof window && window.document && (ki = window, Pi = ki.document, Ai = Pi.documentElement, Fi = lr("div") || {
						style: {}
					}, lr("div"), ir = cr(ir), rr = ir + "Origin", Fi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Oi = !!cr("perspective"), Ii = Si.core.reverting, Mi = 1)
				},
				dr = function t(e) {
					var i, r = lr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
						s = this.parentNode,
						n = this.nextSibling,
						a = this.style.cssText;
					if (Ai.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
						i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
					} catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
					return s && (n ? s.insertBefore(this, n) : s.appendChild(this)), Ai.removeChild(r), this.style.cssText = a, i
				},
				fr = function(t, e) {
					for (var i = e.length; i--;)
						if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
				},
				mr = function(t) {
					var e;
					try {
						e = t.getBBox()
					} catch (i) {
						e = dr.call(t, !0)
					}
					return e && (e.width || e.height) || t.getBBox === dr || (e = dr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
						x: +fr(t, ["x", "cx", "x1"]) || 0,
						y: +fr(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0
					}
				},
				gr = function(t) {
					return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !mr(t))
				},
				vr = function(t, e) {
					if (e) {
						var i, r = t.style;
						e in Ri && e !== rr && (e = ir), r.removeProperty ? ("ms" !== (i = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty("--" === i ? e : e.replace(Vi, "-$1").toLowerCase())) : r.removeAttribute(e)
					}
				},
				yr = function(t, e, i, r, s, n) {
					var a = new fi(t._pt, e, i, 0, 1, n ? Ui : $i);
					return t._pt = a, a.b = r, a.e = s, t._props.push(i), a
				},
				Dr = {
					deg: 1,
					rad: 1,
					turn: 1
				},
				br = {
					grid: 1,
					flex: 1
				},
				_r = function t(e, i, r, s) {
					var n, a, o, l, h = parseFloat(r) || 0,
						u = (r + "").trim().substr((h + "").length) || "px",
						c = Fi.style,
						p = Xi.test(i),
						d = "svg" === e.tagName.toLowerCase(),
						f = (d ? "client" : "offset") + (p ? "Width" : "Height"),
						m = 100,
						g = "px" === s,
						v = "%" === s;
					if (s === u || !h || Dr[s] || Dr[u]) return h;
					if ("px" !== u && !g && (h = t(e, i, r, "px")), l = e.getCTM && gr(e), (v || "%" === u) && (Ri[i] || ~i.indexOf("adius"))) return n = l ? e.getBBox()[p ? "width" : "height"] : e[f], vt(v ? h / n * m : h / 100 * n);
					if (c[p ? "width" : "height"] = m + (g ? u : s), a = ~i.indexOf("adius") || "em" === s && e.appendChild && !d ? e : e.parentNode, l && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Pi && a.appendChild || (a = Pi.body), (o = a._gsap) && v && o.width && p && o.time === ke.time && !o.uncache) return vt(h / o.width * m);
					if (!v || "height" !== i && "width" !== i)(v || "%" === u) && !br[hr(a, "display")] && (c.position = hr(e, "position")), a === e && (c.position = "static"), a.appendChild(Fi), n = Fi[f], a.removeChild(Fi), c.position = "absolute";
					else {
						var y = e.style[i];
						e.style[i] = m + s, n = e[f], y ? e.style[i] = y : vr(e, i)
					}
					return p && v && ((o = ft(a)).time = ke.time, o.width = a[f]), vt(g ? n * h / m : n && h ? m / n * h : 0)
				},
				wr = function(t, e, i, r) {
					var s;
					return Mi || pr(), e in Hi && "transform" !== e && ~(e = Hi[e]).indexOf(",") && (e = e.split(",")[0]), Ri[e] && "transform" !== e ? (s = Lr(t, r), s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : Ir(hr(t, rr)) + " " + s.zOrigin + "px") : (!(s = t.style[e]) || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = Tr[e] && Tr[e](t, e, i) || hr(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(s + "").trim().indexOf(" ") ? _r(t, e, s, i) + i : s
				},
				xr = function(t, e, i, r) {
					if (!i || "none" === i) {
						var s = cr(e, t, 1),
							n = s && hr(t, s, 1);
						n && n !== i ? (e = s, i = n) : "borderColor" === e && (i = hr(t, "borderTopColor"))
					}
					var a, o, l, h, u, c, p, d, f, m, g, v = new fi(this._pt, t.style, e, 0, 1, li),
						y = 0,
						D = 0;
					if (v.b = i, v.e = r, i += "", "auto" === (r += "") && (c = t.style[e], t.style[e] = r, r = hr(t, e) || r, c ? t.style[e] = c : vr(t, e)), Se(a = [i, r]), r = a[1], l = (i = a[0]).match(j) || [], (r.match(j) || []).length) {
						for (; o = j.exec(r);) p = o[0], f = r.substring(y, o.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), p !== (c = l[D++] || "") && (h = parseFloat(c) || 0, g = c.substr((h + "").length), "=" === p.charAt(1) && (p = Dt(h, p) + g), d = parseFloat(p), m = p.substr((d + "").length), y = j.lastIndex - m.length, m || (m = m || w.units[e] || g, y === r.length && (r += m, v.e += m)), g !== m && (h = _r(t, e, c, m) || 0), v._pt = {
							_next: v._pt,
							p: f || 1 === D ? f : ",",
							s: h,
							c: d - h,
							m: u && u < 4 || "zIndex" === e ? Math.round : 0
						});
						v.c = y < r.length ? r.substring(y, r.length) : ""
					} else v.r = "display" === e && "none" === r ? Ui : $i;
					return W.test(r) && (v.e = 0), this._pt = v, v
				},
				Cr = {
					top: "0%",
					bottom: "100%",
					left: "0%",
					right: "100%",
					center: "50%"
				},
				Er = function(t, e) {
					if (e.tween && e.tween._time === e.tween._dur) {
						var i, r, s, n = e.t,
							a = n.style,
							o = e.u,
							l = n._gsap;
						if ("all" === o || !0 === o) a.cssText = "", r = 1;
						else
							for (s = (o = o.split(",")).length; --s > -1;) i = o[s], Ri[i] && (r = 1, i = "transformOrigin" === i ? rr : ir), vr(n, i);
						r && (vr(n, ir), l && (l.svg && n.removeAttribute("transform"), Lr(n, 1), l.uncache = 1, nr(a)))
					}
				},
				Tr = {
					clearProps: function(t, e, i, r, s) {
						if ("isFromStart" !== s.data) {
							var n = t._pt = new fi(t._pt, e, i, 0, 0, Er);
							return n.u = r, n.pr = -10, n.tween = s, t._props.push(i), 1
						}
					}
				},
				Sr = [1, 0, 0, 1, 0, 0],
				kr = {},
				Pr = function(t) {
					return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
				},
				Ar = function(t) {
					var e = hr(t, ir);
					return Pr(e) ? Sr : e.substr(7).match(H).map(vt)
				},
				Mr = function(t, e) {
					var i, r, s, n, a = t._gsap || ft(t),
						o = t.style,
						l = Ar(t);
					return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? Sr : l : (l !== Sr || t.offsetParent || t === Ai || a.svg || (s = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, r = t.nextElementSibling, Ai.appendChild(t)), l = Ar(t), s ? o.display = s : vr(t, "display"), n && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : Ai.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
				},
				Fr = function(t, e, i, r, s, n) {
					var a, o, l, h = t._gsap,
						u = s || Mr(t, !0),
						c = h.xOrigin || 0,
						p = h.yOrigin || 0,
						d = h.xOffset || 0,
						f = h.yOffset || 0,
						m = u[0],
						g = u[1],
						v = u[2],
						y = u[3],
						D = u[4],
						b = u[5],
						_ = e.split(" "),
						w = parseFloat(_[0]) || 0,
						x = parseFloat(_[1]) || 0;
					i ? u !== Sr && (o = m * y - g * v) && (l = w * (-g / o) + x * (m / o) - (m * b - g * D) / o, w = w * (y / o) + x * (-v / o) + (v * b - y * D) / o, x = l) : (w = (a = mr(t)).x + (~_[0].indexOf("%") ? w / 100 * a.width : w), x = a.y + (~(_[1] || _[0]).indexOf("%") ? x / 100 * a.height : x)), r || !1 !== r && h.smooth ? (D = w - c, b = x - p, h.xOffset = d + (D * m + b * v) - D, h.yOffset = f + (D * g + b * y) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!r, h.origin = e, h.originIsAbsolute = !!i, t.style[rr] = "0px 0px", n && (yr(n, h, "xOrigin", c, w), yr(n, h, "yOrigin", p, x), yr(n, h, "xOffset", d, h.xOffset), yr(n, h, "yOffset", f, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
				},
				Lr = function(t, e) {
					var i = t._gsap || new Xe(t);
					if ("x" in i && !e && !i.uncache) return i;
					var r, s, n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, b, _, x, C, E, T, S, k, P, A, M, F, L, I, O, R = t.style,
						B = i.scaleX < 0,
						z = "px",
						N = "deg",
						V = getComputedStyle(t),
						X = hr(t, rr) || "0";
					return r = s = n = l = h = u = c = p = d = 0, a = o = 1, i.svg = !(!t.getCTM || !gr(t)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (R[ir] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[ir] ? V[ir] : "")), R.scale = R.rotate = R.translate = "none"), g = Mr(t, i.svg), i.svg && (i.uncache ? (k = t.getBBox(), X = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px", S = "") : S = !e && t.getAttribute("data-svg-origin"), Fr(t, S || X, !!S || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== Sr && (b = g[0], _ = g[1], x = g[2], C = g[3], r = E = g[4], s = T = g[5], 6 === g.length ? (a = Math.sqrt(b * b + _ * _), o = Math.sqrt(C * C + x * x), l = b || _ ? Ni(_, b) * Bi : 0, (c = x || C ? Ni(x, C) * Bi + l : 0) && (o *= Math.abs(Math.cos(c * zi))), i.svg && (r -= f - (f * b + m * x), s -= m - (f * _ + m * C))) : (O = g[6], L = g[7], A = g[8], M = g[9], F = g[10], I = g[11], r = g[12], s = g[13], n = g[14], h = (v = Ni(O, F)) * Bi, v && (S = E * (y = Math.cos(-v)) + A * (D = Math.sin(-v)), k = T * y + M * D, P = O * y + F * D, A = E * -D + A * y, M = T * -D + M * y, F = O * -D + F * y, I = L * -D + I * y, E = S, T = k, O = P), u = (v = Ni(-x, F)) * Bi, v && (y = Math.cos(-v), I = C * (D = Math.sin(-v)) + I * y, b = S = b * y - A * D, _ = k = _ * y - M * D, x = P = x * y - F * D), l = (v = Ni(_, b)) * Bi, v && (S = b * (y = Math.cos(v)) + _ * (D = Math.sin(v)), k = E * y + T * D, _ = _ * y - b * D, T = T * y - E * D, b = S, E = k), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, u = 180 - u), a = vt(Math.sqrt(b * b + _ * _ + x * x)), o = vt(Math.sqrt(T * T + O * O)), v = Ni(E, T), c = Math.abs(v) > 2e-4 ? v * Bi : 0, d = I ? 1 / (I < 0 ? -I : I) : 0), i.svg && (S = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Pr(hr(t, ir)), S && t.setAttribute("transform", S))), Math.abs(c) > 90 && Math.abs(c) < 270 && (B ? (a *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), e = e || i.uncache, i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + z, i.y = s - ((i.yPercent = s && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + z, i.z = n + z, i.scaleX = vt(a), i.scaleY = vt(o), i.rotation = vt(l) + N, i.rotationX = vt(h) + N, i.rotationY = vt(u) + N, i.skewX = c + N, i.skewY = p + N, i.transformPerspective = d + z, (i.zOrigin = parseFloat(X.split(" ")[2]) || !e && i.zOrigin || 0) && (R[rr] = Ir(X)), i.xOffset = i.yOffset = 0, i.force3D = w.force3D, i.renderTransform = i.svg ? Xr : Oi ? Vr : Rr, i.uncache = 0, i
				},
				Ir = function(t) {
					return (t = t.split(" "))[0] + " " + t[1]
				},
				Or = function(t, e, i) {
					var r = te(e);
					return vt(parseFloat(e) + parseFloat(_r(t, "x", i + "px", r))) + r
				},
				Rr = function(t, e) {
					e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Vr(t, e)
				},
				Br = "0deg",
				zr = "0px",
				Nr = ") ",
				Vr = function(t, e) {
					var i = e || this,
						r = i.xPercent,
						s = i.yPercent,
						n = i.x,
						a = i.y,
						o = i.z,
						l = i.rotation,
						h = i.rotationY,
						u = i.rotationX,
						c = i.skewX,
						p = i.skewY,
						d = i.scaleX,
						f = i.scaleY,
						m = i.transformPerspective,
						g = i.force3D,
						v = i.target,
						y = i.zOrigin,
						D = "",
						b = "auto" === g && t && 1 !== t || !0 === g;
					if (y && (u !== Br || h !== Br)) {
						var _, w = parseFloat(h) * zi,
							x = Math.sin(w),
							C = Math.cos(w);
						w = parseFloat(u) * zi, _ = Math.cos(w), n = Or(v, n, x * _ * -y), a = Or(v, a, -Math.sin(w) * -y), o = Or(v, o, C * _ * -y + y)
					}
					m !== zr && (D += "perspective(" + m + Nr), (r || s) && (D += "translate(" + r + "%, " + s + "%) "), (b || n !== zr || a !== zr || o !== zr) && (D += o !== zr || b ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + Nr), l !== Br && (D += "rotate(" + l + Nr), h !== Br && (D += "rotateY(" + h + Nr), u !== Br && (D += "rotateX(" + u + Nr), c === Br && p === Br || (D += "skew(" + c + ", " + p + Nr), 1 === d && 1 === f || (D += "scale(" + d + ", " + f + Nr), v.style[ir] = D || "translate(0, 0)"
				},
				Xr = function(t, e) {
					var i, r, s, n, a, o = e || this,
						l = o.xPercent,
						h = o.yPercent,
						u = o.x,
						c = o.y,
						p = o.rotation,
						d = o.skewX,
						f = o.skewY,
						m = o.scaleX,
						g = o.scaleY,
						v = o.target,
						y = o.xOrigin,
						D = o.yOrigin,
						b = o.xOffset,
						_ = o.yOffset,
						w = o.forceCSS,
						x = parseFloat(u),
						C = parseFloat(c);
					p = parseFloat(p), d = parseFloat(d), (f = parseFloat(f)) && (d += f = parseFloat(f), p += f), p || d ? (p *= zi, d *= zi, i = Math.cos(p) * m, r = Math.sin(p) * m, s = Math.sin(p - d) * -g, n = Math.cos(p - d) * g, d && (f *= zi, a = Math.tan(d - f), s *= a = Math.sqrt(1 + a * a), n *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), r *= a)), i = vt(i), r = vt(r), s = vt(s), n = vt(n)) : (i = m, n = g, r = s = 0), (x && !~(u + "").indexOf("px") || C && !~(c + "").indexOf("px")) && (x = _r(v, "x", u, "px"), C = _r(v, "y", c, "px")), (y || D || b || _) && (x = vt(x + y - (y * i + D * s) + b), C = vt(C + D - (y * r + D * n) + _)), (l || h) && (a = v.getBBox(), x = vt(x + l / 100 * a.width), C = vt(C + h / 100 * a.height)), a = "matrix(" + i + "," + r + "," + s + "," + n + "," + x + "," + C + ")", v.setAttribute("transform", a), w && (v.style[ir] = a)
				},
				Yr = function(t, e, i, r, s) {
					var n, a, o = 360,
						l = F(s),
						h = parseFloat(s) * (l && ~s.indexOf("rad") ? Bi : 1) - r,
						u = r + h + "deg";
					return l && ("short" === (n = s.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360), "cw" === n && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === n && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new fi(t._pt, e, i, r, h, qi), a.e = u, a.u = "deg", t._props.push(i), a
				},
				Hr = function(t, e) {
					for (var i in e) t[i] = e[i];
					return t
				},
				jr = function(t, e, i) {
					var r, s, n, a, o, l, h, u = Hr({}, i._gsap),
						c = i.style;
					for (s in u.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), c[ir] = e, r = Lr(i, 1), vr(i, ir), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[ir], c[ir] = e, r = Lr(i, 1), c[ir] = n), Ri)(n = u[s]) !== (a = r[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (o = te(n) !== (h = te(a)) ? _r(i, s, n, h) : parseFloat(n), l = parseFloat(a), t._pt = new fi(t._pt, r, s, o, l - o, ji), t._pt.u = h || 0, t._props.push(s));
					Hr(r, u)
				};
			gt("padding,margin,Width,Radius", (function(t, e) {
				var i = "Top",
					r = "Right",
					s = "Bottom",
					n = "Left",
					a = (e < 3 ? [i, r, s, n] : [i + n, i + r, s + r, s + n]).map((function(i) {
						return e < 2 ? t + i : "border" + i + t
					}));
				Tr[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
					var n, o;
					if (arguments.length < 4) return n = a.map((function(e) {
						return wr(t, e, i)
					})), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
					n = (r + "").split(" "), o = {}, a.forEach((function(t, e) {
						return o[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
					})), t.init(e, o, s)
				}
			}));
			var qr, Wr, Gr, $r = {
				name: "css",
				register: pr,
				targetTest: function(t) {
					return t.style && t.nodeType
				},
				init: function(t, e, i, r, s) {
					var n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, b, _, x, C, E, T = this._props,
						S = t.style,
						k = i.vars.startAt;
					for (c in Mi || pr(), this.styles = this.styles || or(t), b = this.styles.props, this.tween = i, e)
						if ("autoRound" !== c && (a = e[c], !lt[c] || !$e(c, e, i, r, t, s)))
							if (h = typeof a, u = Tr[c], "function" === h && (h = typeof(a = a.call(i, r, t, s))), "string" === h && ~a.indexOf("random(") && (a = pe(a)), u) u(this, t, c, a, i) && (D = 1);
							else if ("--" === c.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(c) + "").trim(), a += "", Ee.lastIndex = 0, Ee.test(n) || (p = te(n), d = te(a)), d ? p !== d && (n = _r(t, c, n, d) + d) : p && (a += p), this.add(S, "setProperty", n, a, r, s, 0, 0, c), T.push(c), b.push(c, 0, S[c]);
					else if ("undefined" !== h) {
						if (k && c in k ? (n = "function" == typeof k[c] ? k[c].call(i, r, t, s) : k[c], F(n) && ~n.indexOf("random(") && (n = pe(n)), te(n + "") || "auto" === n || (n += w.units[c] || te(wr(t, c)) || ""), "=" === (n + "").charAt(1) && (n = wr(t, c))) : n = wr(t, c), l = parseFloat(n), (f = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), c in Hi && ("autoAlpha" === c && (1 === l && "hidden" === wr(t, "visibility") && o && (l = 0), b.push("visibility", 0, S.visibility), yr(this, S, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = Hi[c]).indexOf(",") && (c = c.split(",")[0])), m = c in Ri)
							if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Lr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new fi(this._pt, S, ir, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new fi(this._pt, v, "scaleY", v.scaleY, (f ? Dt(v.scaleY, f + o) : o) - v.scaleY || 0, ji), this._pt.u = 0, T.push("scaleY", c), c += "X";
							else {
								if ("transformOrigin" === c) {
									b.push(rr, 0, S[rr]), x = void 0, C = void 0, E = void 0, x = (_ = a).split(" "), C = x[0], E = x[1] || "50%", "top" !== C && "bottom" !== C && "left" !== E && "right" !== E || (_ = C, C = E, E = _), x[0] = Cr[C] || C, x[1] = Cr[E] || E, a = x.join(" "), v.svg ? Fr(t, a, 0, y, 0, this) : ((d = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && yr(this, v, "zOrigin", v.zOrigin, d), yr(this, S, c, Ir(n), Ir(a)));
									continue
								}
								if ("svgOrigin" === c) {
									Fr(t, a, 1, y, 0, this);
									continue
								}
								if (c in kr) {
									Yr(this, v, c, l, f ? Dt(l, f + a) : a);
									continue
								}
								if ("smoothOrigin" === c) {
									yr(this, v, "smooth", v.smooth, a);
									continue
								}
								if ("force3D" === c) {
									v[c] = a;
									continue
								}
								if ("transform" === c) {
									jr(this, a, t);
									continue
								}
							}
						else c in S || (c = cr(c) || c);
						if (m || (o || 0 === o) && (l || 0 === l) && !Yi.test(a) && c in S) o || (o = 0), (p = (n + "").substr((l + "").length)) !== (d = te(a) || (c in w.units ? w.units[c] : p)) && (l = _r(t, c, n, d)), this._pt = new fi(this._pt, m ? v : S, c, l, (f ? Dt(l, f + o) : o) - l, m || "px" !== d && "zIndex" !== c || !1 === e.autoRound ? ji : Gi), this._pt.u = d || 0, p !== d && "%" !== d && (this._pt.b = n, this._pt.r = Wi);
						else if (c in S) xr.call(this, t, c, n, f ? f + a : a);
						else if (c in t) this.add(t, c, n || t[c], f ? f + a : a, r, s);
						else if ("parseTransform" !== c) {
							Z(c, a);
							continue
						}
						m || (c in S ? b.push(c, 0, S[c]) : b.push(c, 1, n || t[c])), T.push(c)
					}
					D && di(this)
				},
				render: function(t, e) {
					if (e.tween._time || !Ii())
						for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
					else e.styles.revert()
				},
				get: wr,
				aliases: Hi,
				getSetter: function(t, e, i) {
					var r = Hi[e];
					return r && r.indexOf(",") < 0 && (e = r), e in Ri && e !== rr && (t._gsap.x || wr(t, "x")) ? i && Li === i ? "scale" === e ? Qi : Zi : (Li = i || {}) && ("scale" === e ? tr : er) : t.style && !O(t.style[e]) ? Ki : ~e.indexOf("-") ? Ji : ni(t, e)
				},
				core: {
					_removeProperty: vr,
					_getMatrix: Mr
				}
			};
			Si.utils.checkPrefix = cr, Si.core.getStyleSaver = or, Gr = gt((qr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Wr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
				Ri[t] = 1
			})), gt(Wr, (function(t) {
				w.units[t] = "deg", kr[t] = 1
			})), Hi[Gr[13]] = qr + "," + Wr, gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
				var e = t.split(":");
				Hi[e[1]] = Gr[e[0]]
			})), gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
				w.units[t] = "px"
			})), Si.registerPlugin($r);
			var Ur = Si.registerPlugin($r) || Si;
			Ur.core.Tween
		},
		335: function(t, e, i) {
			"use strict";
			i.d(e, {
				KQ: function() {
					return x
				},
				Mt: function() {
					return D
				},
				cA: function() {
					return T
				},
				eK: function() {
					return y
				},
				hK: function() {
					return S
				},
				mk: function() {
					return f
				}
			});
			var r, s, n, a, o, l, h, u, c, p = "transform",
				d = p + "Origin",
				f = function(t) {
					var e = t.ownerDocument || t;
					!(p in t.style) && "msTransform" in t.style && (d = (p = "msTransform") + "Origin");
					for (; e.parentNode && (e = e.parentNode););
					if (s = window, h = new T, e) {
						r = e, n = e.documentElement, a = e.body, (u = r.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
						var i = e.createElement("div"),
							o = e.createElement("div"),
							l = e && (e.body || e.firstElementChild);
						l && l.appendChild && (l.appendChild(i), i.appendChild(o), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), c = o.offsetParent !== i, l.removeChild(i))
					}
					return e
				},
				m = function(t) {
					for (var e, i; t && t !== a;)(i = t._gsap) && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [i]), t = t.parentNode;
					return e
				},
				g = [],
				v = [],
				y = function() {
					return s.pageYOffset || r.scrollTop || n.scrollTop || a.scrollTop || 0
				},
				D = function() {
					return s.pageXOffset || r.scrollLeft || n.scrollLeft || a.scrollLeft || 0
				},
				b = function(t) {
					return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
				},
				_ = function t(e) {
					return "fixed" === s.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
				},
				w = function t(e, i) {
					if (e.parentNode && (r || f(e))) {
						var s = b(e),
							n = s ? s.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
							a = s ? i ? "rect" : "g" : "div",
							h = 2 !== i ? 0 : 100,
							u = 3 === i ? 100 : 0,
							c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
							p = r.createElementNS ? r.createElementNS(n.replace(/^https/, "http"), a) : r.createElement(a);
						return i && (s ? (l || (l = t(e)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + h + "," + u + ")"), l.appendChild(p)) : (o || ((o = t(e)).style.cssText = c), p.style.cssText = c + "width:0.1px;height:0.1px;top:" + u + "px;left:" + h + "px", o.appendChild(p))), p
					}
					throw "Need document and parent."
				},
				x = function(t) {
					var e, i = t.getCTM();
					return i || (e = t.style[p], t.style[p] = "none", t.appendChild(u), i = u.getCTM(), t.removeChild(u), e ? t.style[p] = e : t.style.removeProperty(p.replace(/([A-Z])/g, "-$1").toLowerCase())), i || h.clone()
				},
				C = function(t, e) {
					var i, r, n, a, u, f, m = b(t),
						y = t === m,
						D = m ? g : v,
						_ = t.parentNode;
					if (t === s) return t;
					if (D.length || D.push(w(t, 1), w(t, 2), w(t, 3)), i = m ? l : o, m) y ? (a = -(n = x(t)).e / n.a, u = -n.f / n.d, r = h) : t.getBBox ? (n = t.getBBox(), a = (r = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? r.numberOfItems > 1 ? function(t) {
						for (var e = new T, i = 0; i < t.numberOfItems; i++) e.multiply(t.getItem(i).matrix);
						return e
					}(r) : r.getItem(0).matrix : h).a * n.x + r.c * n.y, u = r.b * n.x + r.d * n.y) : (r = new T, a = u = 0), e && "g" === t.tagName.toLowerCase() && (a = u = 0), (y ? m : _).appendChild(i), i.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + a) + "," + (r.f + u) + ")");
					else {
						if (a = u = 0, c)
							for (r = t.offsetParent, n = t; n && (n = n.parentNode) && n !== r && n.parentNode;)(s.getComputedStyle(n)[p] + "").length > 4 && (a = n.offsetLeft, u = n.offsetTop, n = 0);
						if ("absolute" !== (f = s.getComputedStyle(t)).position && "fixed" !== f.position)
							for (r = t.offsetParent; _ && _ !== r;) a += _.scrollLeft || 0, u += _.scrollTop || 0, _ = _.parentNode;
						(n = i.style).top = t.offsetTop - u + "px", n.left = t.offsetLeft - a + "px", n[p] = f[p], n[d] = f[d], n.position = "fixed" === f.position ? "fixed" : "absolute", t.parentNode.appendChild(i)
					}
					return i
				},
				E = function(t, e, i, r, s, n, a) {
					return t.a = e, t.b = i, t.c = r, t.d = s, t.e = n, t.f = a, t
				},
				T = function() {
					function t(t, e, i, r, s, n) {
						void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === s && (s = 0), void 0 === n && (n = 0), E(this, t, e, i, r, s, n)
					}
					var e = t.prototype;
					return e.inverse = function() {
						var t = this.a,
							e = this.b,
							i = this.c,
							r = this.d,
							s = this.e,
							n = this.f,
							a = t * r - e * i || 1e-10;
						return E(this, r / a, -e / a, -i / a, t / a, (i * n - r * s) / a, -(t * n - e * s) / a)
					}, e.multiply = function(t) {
						var e = this.a,
							i = this.b,
							r = this.c,
							s = this.d,
							n = this.e,
							a = this.f,
							o = t.a,
							l = t.c,
							h = t.b,
							u = t.d,
							c = t.e,
							p = t.f;
						return E(this, o * e + h * r, o * i + h * s, l * e + u * r, l * i + u * s, n + c * e + p * r, a + c * i + p * s)
					}, e.clone = function() {
						return new t(this.a, this.b, this.c, this.d, this.e, this.f)
					}, e.equals = function(t) {
						var e = this.a,
							i = this.b,
							r = this.c,
							s = this.d,
							n = this.e,
							a = this.f;
						return e === t.a && i === t.b && r === t.c && s === t.d && n === t.e && a === t.f
					}, e.apply = function(t, e) {
						void 0 === e && (e = {});
						var i = t.x,
							r = t.y,
							s = this.a,
							n = this.b,
							a = this.c,
							o = this.d,
							l = this.e,
							h = this.f;
						return e.x = i * s + r * a + l || 0, e.y = i * n + r * o + h || 0, e
					}, t
				}();

			function S(t, e, i, s) {
				if (!t || !t.parentNode || (r || f(t)).documentElement === t) return new T;
				var n = m(t),
					a = b(t) ? g : v,
					o = C(t, i),
					l = a[0].getBoundingClientRect(),
					h = a[1].getBoundingClientRect(),
					u = a[2].getBoundingClientRect(),
					c = o.parentNode,
					p = !s && _(t),
					d = new T((h.left - l.left) / 100, (h.top - l.top) / 100, (u.left - l.left) / 100, (u.top - l.top) / 100, l.left + (p ? 0 : D()), l.top + (p ? 0 : y()));
				if (c.removeChild(o), n)
					for (l = n.length; l--;)(h = n[l]).scaleX = h.scaleY = 0, h.renderTransform(1, h);
				return e ? d.inverse() : d
			}
		},
		422: function(t, e, i) {
			"use strict";
			i.d(e, {
				K6: function() {
					return a
				},
				q4: function() {
					return n
				},
				u6: function() {
					return s
				}
			});
			var r = /(?:^\s+|\s+$)/g,
				s = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

			function n(t) {
				var e = t.nodeType,
					i = "";
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
				} else if (3 === e || 4 === e) return t.nodeValue;
				return i
			}

			function a(t, e, i, n) {
				if (t += "", i && (t = t.trim ? t.trim() : t.replace(r, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
				for (var a, o, l = [], h = t.length, u = 0; u < h; u++)((o = t.charAt(u)).charCodeAt(0) >= 55296 && o.charCodeAt(0) <= 56319 || t.charCodeAt(u + 1) >= 65024 && t.charCodeAt(u + 1) <= 65039) && (a = ((t.substr(u, 12).split(s) || [])[1] || "").length || 2, o = t.substr(u, a), l.emoji = 1, u += a - 1), l.push(">" === o ? "&gt;" : "<" === o ? "&lt;" : !n || " " !== o || " " !== t.charAt(u - 1) && " " !== t.charAt(u + 1) ? o : "&nbsp;");
				return l
			}
		},
		585: function(t, e) {
			"use strict";
			let i = "",
				r = !1;
			const s = -999999,
				n = () => i;

			function a(t) {
				return document.createElement(t)
			}

			function o(t, e) {
				var i, r, s = t.length;
				for (i = 0; i < s; i += 1)
					for (var n in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n])
			}

			function l(t) {
				function e() {}
				return e.prototype = t, e
			}
			const h = function() {
					function t(t) {
						this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
					}
					return t.prototype = {
							addAudio: function(t) {
								this.audios.push(t)
							},
							pause: function() {
								var t, e = this.audios.length;
								for (t = 0; t < e; t += 1) this.audios[t].pause()
							},
							resume: function() {
								var t, e = this.audios.length;
								for (t = 0; t < e; t += 1) this.audios[t].resume()
							},
							setRate: function(t) {
								var e, i = this.audios.length;
								for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
							},
							createAudio: function(t) {
								return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
									src: [t]
								}) : {
									isPlaying: !1,
									play: function() {
										this.isPlaying = !0
									},
									seek: function() {
										this.isPlaying = !1
									},
									playing: function() {},
									rate: function() {},
									setVolume: function() {}
								}
							},
							setAudioFactory: function(t) {
								this.audioFactory = t
							},
							setVolume: function(t) {
								this._volume = t, this._updateVolume()
							},
							mute: function() {
								this._isMuted = !0, this._updateVolume()
							},
							unmute: function() {
								this._isMuted = !1, this._updateVolume()
							},
							getVolume: function() {
								return this._volume
							},
							_updateVolume: function() {
								var t, e = this.audios.length;
								for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
							}
						},
						function() {
							return new t
						}
				}(),
				u = function() {
					function t(t, e) {
						var i, r = 0,
							s = [];
						switch (t) {
							case "int16":
							case "uint8c":
								i = 1;
								break;
							default:
								i = 1.1
						}
						for (r = 0; r < e; r += 1) s.push(i);
						return s
					}
					return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
						return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
					} : t
				}();

			function c(t) {
				return Array.apply(null, {
					length: t
				})
			}
			let p = !0,
				d = null,
				f = null,
				m = "";
			const g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			let v = !1;
			const y = Math.pow,
				D = Math.sqrt,
				b = Math.floor,
				_ = (Math.max, Math.min),
				w = {};
			! function() {
				var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
					i = e.length;
				for (t = 0; t < i; t += 1) w[e[t]] = Math[e[t]]
			}(), w.random = Math.random, w.abs = function(t) {
				if ("object" === typeof t && t.length) {
					var e, i = c(t.length),
						r = t.length;
					for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
					return i
				}
				return Math.abs(t)
			};
			let x = 150;
			const C = Math.PI / 180,
				E = .5519;

			function T(t) {
				v = !!t
			}

			function S(t, e, i, r) {
				this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
			}

			function k(t, e) {
				this.type = t, this.direction = e < 0 ? -1 : 1
			}

			function P(t, e, i, r) {
				this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
			}

			function A(t, e, i) {
				this.type = t, this.firstFrame = e, this.totalFrames = i
			}

			function M(t, e) {
				this.type = t, this.target = e
			}

			function F(t, e) {
				this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
			}

			function L(t) {
				this.type = "configError", this.nativeError = t
			}
			const I = (O = 0, function() {
				return m + "__lottie_element_" + (O += 1)
			});
			var O;

			function R(t, e, i) {
				var r, s, n, a, o, l, h, u;
				switch (l = i * (1 - e), h = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), u = i * (1 - (1 - o) * e), a % 6) {
					case 0:
						r = i, s = u, n = l;
						break;
					case 1:
						r = h, s = i, n = l;
						break;
					case 2:
						r = l, s = i, n = u;
						break;
					case 3:
						r = l, s = h, n = i;
						break;
					case 4:
						r = u, s = l, n = i;
						break;
					case 5:
						r = i, s = l, n = h
				}
				return [r, s, n]
			}

			function B(t, e, i) {
				var r, s = Math.max(t, e, i),
					n = Math.min(t, e, i),
					a = s - n,
					o = 0 === s ? 0 : a / s,
					l = s / 255;
				switch (s) {
					case n:
						r = 0;
						break;
					case t:
						r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
						break;
					case e:
						r = i - t + 2 * a, r /= 6 * a;
						break;
					case i:
						r = t - e + 4 * a, r /= 6 * a
				}
				return [r, o, l]
			}

			function z(t, e) {
				var i = B(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), R(i[0], i[1], i[2])
			}

			function N(t, e) {
				var i = B(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), R(i[0], i[1], i[2])
			}

			function V(t, e) {
				var i = B(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), R(i[0], i[1], i[2])
			}! function() {
				var t, e, i = [];
				for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e
			}();
			const X = () => d,
				Y = () => f,
				H = t => {
					x = t
				},
				j = () => x;

			function q(t) {
				return document.createElementNS("http://www.w3.org/2000/svg", t)
			}
			const W = function() {
					var t, e, i = 1,
						s = [],
						n = {
							onmessage: function() {},
							postMessage: function(e) {
								t({
									data: e
								})
							}
						},
						a = {
							postMessage: function(t) {
								n.onmessage({
									data: t
								})
							}
						};

					function o(e) {
						if (window.Worker && window.Blob && r) {
							var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
									type: "text/javascript"
								}),
								s = URL.createObjectURL(i);
							return new Worker(s)
						}
						return t = e, n
					}

					function l() {
						e || (e = o((function(t) {
							if (a.dataManager || (a.dataManager = function() {
									function t(s, n) {
										var a, o, l, h, u, p, d = s.length;
										for (o = 0; o < d; o += 1)
											if ("ks" in (a = s[o]) && !a.completed) {
												if (a.completed = !0, a.hasMask) {
													var f = a.masksProperties;
													for (h = f.length, l = 0; l < h; l += 1)
														if (f[l].pt.k.i) r(f[l].pt.k);
														else
															for (p = f[l].pt.k.length, u = 0; u < p; u += 1) f[l].pt.k[u].s && r(f[l].pt.k[u].s[0]), f[l].pt.k[u].e && r(f[l].pt.k[u].e[0])
												}
												0 === a.ty ? (a.layers = e(a.refId, n), t(a.layers, n)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && c(a)
											}
									}

									function e(t, e) {
										var i = function(t, e) {
											for (var i = 0, r = e.length; i < r;) {
												if (e[i].id === t) return e[i];
												i += 1
											}
											return null
										}(t, e);
										return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
									}

									function i(t) {
										var e, s, n;
										for (e = t.length - 1; e >= 0; e -= 1)
											if ("sh" === t[e].ty)
												if (t[e].ks.k.i) r(t[e].ks.k);
												else
													for (n = t[e].ks.k.length, s = 0; s < n; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
										else "gr" === t[e].ty && i(t[e].it)
									}

									function r(t) {
										var e, i = t.i.length;
										for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
									}

									function s(t, e) {
										var i = e ? e.split(".") : [100, 100, 100];
										return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
									}
									var n, a = function() {
											var t = [4, 4, 14];

											function e(t) {
												var e, i, r, s = t.length;
												for (e = 0; e < s; e += 1) 5 === t[e].ty && (r = void 0, r = (i = t[e]).t.d, i.t.d = {
													k: [{
														s: r,
														t: 0
													}]
												})
											}
											return function(i) {
												if (s(t, i.v) && (e(i.layers), i.assets)) {
													var r, n = i.assets.length;
													for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
												}
											}
										}(),
										o = (n = [4, 7, 99], function(t) {
											if (t.chars && !s(n, t.v)) {
												var e, r = t.chars.length;
												for (e = 0; e < r; e += 1) {
													var a = t.chars[e];
													a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														}
													}, t.chars[e].t || (a.data.shapes.push({
														ty: "no"
													}), a.data.shapes[0].it.push({
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														},
														sk: {
															k: 0,
															a: 0
														},
														sa: {
															k: 0,
															a: 0
														},
														ty: "tr"
													})))
												}
											}
										}),
										l = function() {
											var t = [5, 7, 15];

											function e(t) {
												var e, i, r = t.length;
												for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = void 0, "number" == typeof(i = t[e].t.p).a && (i.a = {
													a: 0,
													k: i.a
												}), "number" == typeof i.p && (i.p = {
													a: 0,
													k: i.p
												}), "number" == typeof i.r && (i.r = {
													a: 0,
													k: i.r
												}))
											}
											return function(i) {
												if (s(t, i.v) && (e(i.layers), i.assets)) {
													var r, n = i.assets.length;
													for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
												}
											}
										}(),
										h = function() {
											var t = [4, 1, 9];

											function e(t) {
												var i, r, s, n = t.length;
												for (i = 0; i < n; i += 1)
													if ("gr" === t[i].ty) e(t[i].it);
													else if ("fl" === t[i].ty || "st" === t[i].ty)
													if (t[i].c.k && t[i].c.k[0].i)
														for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
													else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
											}

											function i(t) {
												var i, r = t.length;
												for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
											}
											return function(e) {
												if (s(t, e.v) && (i(e.layers), e.assets)) {
													var r, n = e.assets.length;
													for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
												}
											}
										}(),
										u = function() {
											var t = [4, 4, 18];

											function e(t) {
												var i, r, s;
												for (i = t.length - 1; i >= 0; i -= 1)
													if ("sh" === t[i].ty)
														if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
														else
															for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
												else "gr" === t[i].ty && e(t[i].it)
											}

											function i(t) {
												var i, r, s, n, a, o, l = t.length;
												for (r = 0; r < l; r += 1) {
													if ((i = t[r]).hasMask) {
														var h = i.masksProperties;
														for (n = h.length, s = 0; s < n; s += 1)
															if (h[s].pt.k.i) h[s].pt.k.c = h[s].cl;
															else
																for (o = h[s].pt.k.length, a = 0; a < o; a += 1) h[s].pt.k[a].s && (h[s].pt.k[a].s[0].c = h[s].cl), h[s].pt.k[a].e && (h[s].pt.k[a].e[0].c = h[s].cl)
													}
													4 === i.ty && e(i.shapes)
												}
											}
											return function(e) {
												if (s(t, e.v) && (i(e.layers), e.assets)) {
													var r, n = e.assets.length;
													for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
												}
											}
										}();

									function c(t) {
										0 === t.t.a.length && t.t.p
									}
									var p = {
										completeData: function(i) {
											i.__complete || (h(i), a(i), o(i), l(i), u(i), t(i.layers, i.assets), function(i, r) {
												if (i) {
													var s = 0,
														n = i.length;
													for (s = 0; s < n; s += 1) 1 === i[s].t && (i[s].data.layers = e(i[s].data.refId, r), t(i[s].data.layers, r))
												}
											}(i.chars, i.assets), i.__complete = !0)
										}
									};
									return p.checkColors = h, p.checkChars = o, p.checkPathProperties = l, p.checkShapes = u, p.completeLayers = t, p
								}()), a.assetLoader || (a.assetLoader = function() {
									function t(t) {
										var e = t.getResponseHeader("content-type");
										return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
									}
									return {
										load: function(e, i, r, s) {
											var n, a = new XMLHttpRequest;
											try {
												a.responseType = "json"
											} catch (t) {}
											a.onreadystatechange = function() {
												if (4 === a.readyState)
													if (200 === a.status) n = t(a), r(n);
													else try {
														n = t(a), r(n)
													} catch (t) {
														s && s(t)
													}
											};
											try {
												a.open(["G", "E", "T"].join(""), e, !0)
											} catch (t) {
												a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
											}
											a.send()
										}
									}
								}()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
								a.dataManager.completeData(e), a.postMessage({
									id: t.data.id,
									payload: e,
									status: "success"
								})
							}), (function() {
								a.postMessage({
									id: t.data.id,
									status: "error"
								})
							}));
							else if ("complete" === t.data.type) {
								var e = t.data.animation;
								a.dataManager.completeData(e), a.postMessage({
									id: t.data.id,
									payload: e,
									status: "success"
								})
							} else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
								a.postMessage({
									id: t.data.id,
									payload: e,
									status: "success"
								})
							}), (function() {
								a.postMessage({
									id: t.data.id,
									status: "error"
								})
							}))
						})), e.onmessage = function(t) {
							var e = t.data,
								i = e.id,
								r = s[i];
							s[i] = null, "success" === e.status ? r.onComplete(e.payload) : r.onError && r.onError()
						})
					}

					function h(t, e) {
						var r = "processId_" + (i += 1);
						return s[r] = {
							onComplete: t,
							onError: e
						}, r
					}
					return {
						loadAnimation: function(t, i, r) {
							l();
							var s = h(i, r);
							e.postMessage({
								type: "loadAnimation",
								path: t,
								fullPath: window.location.origin + window.location.pathname,
								id: s
							})
						},
						loadData: function(t, i, r) {
							l();
							var s = h(i, r);
							e.postMessage({
								type: "loadData",
								path: t,
								fullPath: window.location.origin + window.location.pathname,
								id: s
							})
						},
						completeAnimation: function(t, i, r) {
							l();
							var s = h(i, r);
							e.postMessage({
								type: "complete",
								animation: t,
								id: s
							})
						}
					}
				}(),
				G = function() {
					var t = function() {
						var t = a("canvas");
						t.width = 1, t.height = 1;
						var e = t.getContext("2d");
						return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
					}();

					function e() {
						this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function i() {
						this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function r(t, e, i) {
						var r = "";
						if (t.e) r = t.p;
						else if (e) {
							var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
						} else r = i, r += t.u ? t.u : "", r += t.p;
						return r
					}

					function s(t) {
						var e = 0,
							i = setInterval(function() {
								(t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
							}.bind(this), 50)
					}

					function n(t) {
						var e = {
								assetData: t
							},
							i = r(t, this.assetsPath, this.path);
						return W.loadData(i, function(t) {
							e.img = t, this._footageLoaded()
						}.bind(this), function() {
							e.img = {}, this._footageLoaded()
						}.bind(this)), e
					}

					function o() {
						this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = n.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
					}
					return o.prototype = {
						loadAssets: function(t, e) {
							var i;
							this.imagesLoadedCb = e;
							var r = t.length;
							for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
						},
						setAssetsPath: function(t) {
							this.assetsPath = t || ""
						},
						setPath: function(t) {
							this.path = t || ""
						},
						loadedImages: function() {
							return this.totalImages === this.loadedAssets
						},
						loadedFootages: function() {
							return this.totalFootages === this.loadedFootagesCount
						},
						destroy: function() {
							this.imagesLoadedCb = null, this.images.length = 0
						},
						getAsset: function(t) {
							for (var e = 0, i = this.images.length; e < i;) {
								if (this.images[e].assetData === t) return this.images[e].img;
								e += 1
							}
							return null
						},
						createImgData: function(e) {
							var i = r(e, this.assetsPath, this.path),
								s = a("img");
							s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
								n.img = t, this._imageLoaded()
							}.bind(this), !1), s.src = i;
							var n = {
								img: s,
								assetData: e
							};
							return n
						},
						createImageData: function(e) {
							var i = r(e, this.assetsPath, this.path),
								s = q("image");
							g ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
								n.img = t, this._imageLoaded()
							}.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
							var n = {
								img: s,
								assetData: e
							};
							return n
						},
						imageLoaded: e,
						footageLoaded: i,
						setCacheType: function(t, e) {
							"svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
						}
					}, o
				}();

			function $() {}
			$.prototype = {
				triggerEvent: function(t, e) {
					if (this._cbs[t])
						for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
				},
				addEventListener: function(t, e) {
					return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
						function() {
							this.removeEventListener(t, e)
						}.bind(this)
				},
				removeEventListener: function(t, e) {
					if (e) {
						if (this._cbs[t]) {
							for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
							this._cbs[t].length || (this._cbs[t] = null)
						}
					} else this._cbs[t] = null
				}
			};
			const U = function() {
					function t(t) {
						for (var e, i = t.split("\r\n"), r = {}, s = 0, n = 0; n < i.length; n += 1) 2 === (e = i[n].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
						if (0 === s) throw new Error;
						return r
					}
					return function(e) {
						for (var i = [], r = 0; r < e.length; r += 1) {
							var s = e[r],
								n = {
									time: s.tm,
									duration: s.dr
								};
							try {
								n.payload = JSON.parse(e[r].cm)
							} catch (i) {
								try {
									n.payload = t(e[r].cm)
								} catch (t) {
									n.payload = {
										name: e[r].cm
									}
								}
							}
							i.push(n)
						}
						return i
					}
				}(),
				K = function() {
					function t(t) {
						this.compositions.push(t)
					}
					return function() {
						function e(t) {
							for (var e = 0, i = this.compositions.length; e < i;) {
								if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
								e += 1
							}
							return null
						}
						return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
					}
				}(),
				J = {};
			const Z = function() {
				this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = I(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = p, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = K(), this.imagePreloader = new G, this.audioController = h(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new S("drawnFrame", 0, 0, 0), this.expressionsPlugin = X()
			};
			o([$], Z), Z.prototype.setParams = function(t) {
				(t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
				var e = "svg";
				t.animType ? e = t.animType : t.renderer && (e = t.renderer);
				const i = J[e];
				this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), W.loadAnimation(t.path, this.configAnimation, this.onSetupError))
			}, Z.prototype.onSetupError = function() {
				this.trigger("data_failed")
			}, Z.prototype.setupAnimation = function(t) {
				W.completeAnimation(t, this.configAnimation)
			}, Z.prototype.setData = function(t, e) {
				e && "object" != typeof e && (e = JSON.parse(e));
				var i = {
						wrapper: t,
						animationData: e
					},
					r = t.attributes;
				i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : function() {
					if (J.canvas) return "canvas";
					for (const t in J)
						if (J[t]) return t;
					return ""
				}() || "canvas";
				var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
				"false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
				var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
				i.autoplay = "false" !== n, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
			}, Z.prototype.includeLayers = function(t) {
				t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
				var e, i, r = this.animationData.layers,
					s = r.length,
					n = t.layers,
					a = n.length;
				for (i = 0; i < a; i += 1)
					for (e = 0; e < s;) {
						if (r[e].id === n[i].id) {
							r[e] = n[i];
							break
						}
						e += 1
					}
				if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
					for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
				this.animationData.__complete = !1, W.completeAnimation(this.animationData, this.onSegmentComplete)
			}, Z.prototype.onSegmentComplete = function(t) {
				this.animationData = t;
				var e = X();
				e && e.initExpressions(this), this.loadNextSegment()
			}, Z.prototype.loadNextSegment = function() {
				var t = this.animationData.segments;
				if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
				var e = t.shift();
				this.timeCompleted = e.time * this.frameRate;
				var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
				this.segmentPos += 1, W.loadData(i, this.includeLayers.bind(this), function() {
					this.trigger("data_failed")
				}.bind(this))
			}, Z.prototype.loadSegments = function() {
				this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
			}, Z.prototype.imagesLoaded = function() {
				this.trigger("loaded_images"), this.checkLoaded()
			}, Z.prototype.preloadImages = function() {
				this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
			}, Z.prototype.configAnimation = function(t) {
				if (this.renderer) try {
					this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = U(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
				} catch (t) {
					this.triggerConfigError(t)
				}
			}, Z.prototype.waitForFontsLoaded = function() {
				this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
			}, Z.prototype.checkLoaded = function() {
				if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
					this.isLoaded = !0;
					var t = X();
					t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
						this.trigger("DOMLoaded")
					}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
				}
			}, Z.prototype.resize = function(t, e) {
				var i = "number" == typeof t ? t : void 0,
					r = "number" == typeof e ? e : void 0;
				this.renderer.updateContainerSize(i, r)
			}, Z.prototype.setSubframe = function(t) {
				this.isSubframeEnabled = !!t
			}, Z.prototype.gotoFrame = function() {
				this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
			}, Z.prototype.renderFrame = function() {
				if (!1 !== this.isLoaded && this.renderer) try {
					this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
				} catch (t) {
					this.triggerRenderFrameError(t)
				}
			}, Z.prototype.play = function(t) {
				t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
			}, Z.prototype.pause = function(t) {
				t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
			}, Z.prototype.togglePause = function(t) {
				t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
			}, Z.prototype.stop = function(t) {
				t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
			}, Z.prototype.getMarkerData = function(t) {
				for (var e, i = 0; i < this.markers.length; i += 1)
					if ((e = this.markers[i]).payload && e.payload.name === t) return e;
				return null
			}, Z.prototype.goToAndStop = function(t, e, i) {
				if (!i || this.name === i) {
					var r = Number(t);
					if (isNaN(r)) {
						var s = this.getMarkerData(t);
						s && this.goToAndStop(s.time, !0)
					} else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
					this.pause()
				}
			}, Z.prototype.goToAndPlay = function(t, e, i) {
				if (!i || this.name === i) {
					var r = Number(t);
					if (isNaN(r)) {
						var s = this.getMarkerData(t);
						s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
					} else this.goToAndStop(r, e, i);
					this.play()
				}
			}, Z.prototype.advanceTime = function(t) {
				if (!0 !== this.isPaused && !1 !== this.isLoaded) {
					var e = this.currentRawFrame + t * this.frameModifier,
						i = !1;
					e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
				}
			}, Z.prototype.adjustSegment = function(t, e) {
				this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
			}, Z.prototype.setSegment = function(t, e) {
				var i = -1;
				this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
			}, Z.prototype.playSegments = function(t, e) {
				if (e && (this.segments.length = 0), "object" == typeof t[0]) {
					var i, r = t.length;
					for (i = 0; i < r; i += 1) this.segments.push(t[i])
				} else this.segments.push(t);
				this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
			}, Z.prototype.resetSegments = function(t) {
				this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
			}, Z.prototype.checkSegments = function(t) {
				return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
			}, Z.prototype.destroy = function(t) {
				t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
			}, Z.prototype.setCurrentRawFrameValue = function(t) {
				this.currentRawFrame = t, this.gotoFrame()
			}, Z.prototype.setSpeed = function(t) {
				this.playSpeed = t, this.updaFrameModifier()
			}, Z.prototype.setDirection = function(t) {
				this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
			}, Z.prototype.setLoop = function(t) {
				this.loop = t
			}, Z.prototype.setVolume = function(t, e) {
				e && this.name !== e || this.audioController.setVolume(t)
			}, Z.prototype.getVolume = function() {
				return this.audioController.getVolume()
			}, Z.prototype.mute = function(t) {
				t && this.name !== t || this.audioController.mute()
			}, Z.prototype.unmute = function(t) {
				t && this.name !== t || this.audioController.unmute()
			}, Z.prototype.updaFrameModifier = function() {
				this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
			}, Z.prototype.getPath = function() {
				return this.path
			}, Z.prototype.getAssetsPath = function(t) {
				var e = "";
				if (t.e) e = t.p;
				else if (this.assetsPath) {
					var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
				} else e = this.path, e += t.u ? t.u : "", e += t.p;
				return e
			}, Z.prototype.getAssetData = function(t) {
				for (var e = 0, i = this.assets.length; e < i;) {
					if (t === this.assets[e].id) return this.assets[e];
					e += 1
				}
				return null
			}, Z.prototype.hide = function() {
				this.renderer.hide()
			}, Z.prototype.show = function() {
				this.renderer.show()
			}, Z.prototype.getDuration = function(t) {
				return t ? this.totalFrames : this.totalFrames / this.frameRate
			}, Z.prototype.updateDocumentData = function(t, e, i) {
				try {
					this.renderer.getElementByPath(t).updateDocumentData(e, i)
				} catch (t) {}
			}, Z.prototype.trigger = function(t) {
				if (this._cbs && this._cbs[t]) switch (t) {
					case "enterFrame":
						this.triggerEvent(t, new S(t, this.currentFrame, this.totalFrames, this.frameModifier));
						break;
					case "drawnFrame":
						this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
						break;
					case "loopComplete":
						this.triggerEvent(t, new P(t, this.loop, this.playCount, this.frameMult));
						break;
					case "complete":
						this.triggerEvent(t, new k(t, this.frameMult));
						break;
					case "segmentStart":
						this.triggerEvent(t, new A(t, this.firstFrame, this.totalFrames));
						break;
					case "destroy":
						this.triggerEvent(t, new M(t, this));
						break;
					default:
						this.triggerEvent(t)
				}
				"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new S(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new P(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new k(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new A(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new M(t, this))
			}, Z.prototype.triggerRenderFrameError = function(t) {
				var e = new F(t, this.currentFrame);
				this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
			}, Z.prototype.triggerConfigError = function(t) {
				var e = new L(t, this.currentFrame);
				this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
			};
			const Q = function() {
					var t = {},
						e = [],
						i = 0,
						r = 0,
						s = 0,
						n = !0,
						o = !1;

					function l(t) {
						for (var i = 0, s = t.target; i < r;) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || c()), i += 1
					}

					function h(t, i) {
						if (!t) return null;
						for (var s = 0; s < r;) {
							if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
							s += 1
						}
						var n = new Z;
						return p(n, t), n.setData(t, i), n
					}

					function u() {
						s += 1, m()
					}

					function c() {
						s -= 1
					}

					function p(t, i) {
						t.addEventListener("destroy", l), t.addEventListener("_active", u), t.addEventListener("_idle", c), e.push({
							elem: i,
							animation: t
						}), r += 1
					}

					function d(t) {
						var a, l = t - i;
						for (a = 0; a < r; a += 1) e[a].animation.advanceTime(l);
						i = t, s && !o ? window.requestAnimationFrame(d) : n = !0
					}

					function f(t) {
						i = t, window.requestAnimationFrame(d)
					}

					function m() {
						!o && s && n && (window.requestAnimationFrame(f), n = !1)
					}
					return t.registerAnimation = h, t.loadAnimation = function(t) {
						var e = new Z;
						return p(e, null), e.setParams(t), e
					}, t.setSpeed = function(t, i) {
						var s;
						for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
					}, t.setDirection = function(t, i) {
						var s;
						for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
					}, t.play = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.play(t)
					}, t.pause = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.pause(t)
					}, t.stop = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.stop(t)
					}, t.togglePause = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
					}, t.searchAnimations = function(t, e, i) {
						var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
							n = s.length;
						for (r = 0; r < n; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
						if (e && 0 === n) {
							i || (i = "svg");
							var o = document.getElementsByTagName("body")[0];
							o.innerText = "";
							var l = a("div");
							l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-bm-type", i), o.appendChild(l), h(l, t)
						}
					}, t.resize = function() {
						var t;
						for (t = 0; t < r; t += 1) e[t].animation.resize()
					}, t.goToAndStop = function(t, i, s) {
						var n;
						for (n = 0; n < r; n += 1) e[n].animation.goToAndStop(t, i, s)
					}, t.destroy = function(t) {
						var i;
						for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
					}, t.freeze = function() {
						o = !0
					}, t.unfreeze = function() {
						o = !1, m()
					}, t.setVolume = function(t, i) {
						var s;
						for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i)
					}, t.mute = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.mute(t)
					}, t.unmute = function(t) {
						var i;
						for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
					}, t.getRegisteredAnimations = function() {
						var t, i = e.length,
							r = [];
						for (t = 0; t < i; t += 1) r.push(e[t].animation);
						return r
					}, t
				}(),
				tt = function() {
					var t = {
							getBezierEasing: function(t, i, r, s, n) {
								var a = n || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
								if (e[a]) return e[a];
								var o = new u([t, i, r, s]);
								return e[a] = o, o
							}
						},
						e = {};
					var i = 11,
						r = 1 / (i - 1),
						s = "function" == typeof Float32Array;

					function n(t, e) {
						return 1 - 3 * e + 3 * t
					}

					function a(t, e) {
						return 3 * e - 6 * t
					}

					function o(t) {
						return 3 * t
					}

					function l(t, e, i) {
						return ((n(e, i) * t + a(e, i)) * t + o(e)) * t
					}

					function h(t, e, i) {
						return 3 * n(e, i) * t * t + 2 * a(e, i) * t + o(e)
					}

					function u(t) {
						this._p = t, this._mSampleValues = s ? new Float32Array(i) : new Array(i), this._precomputed = !1, this.get = this.get.bind(this)
					}
					return u.prototype = {
						get: function(t) {
							var e = this._p[0],
								i = this._p[1],
								r = this._p[2],
								s = this._p[3];
							return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), i, s)
						},
						_precompute: function() {
							var t = this._p[0],
								e = this._p[1],
								i = this._p[2],
								r = this._p[3];
							this._precomputed = !0, t === e && i === r || this._calcSampleValues()
						},
						_calcSampleValues: function() {
							for (var t = this._p[0], e = this._p[2], s = 0; s < i; ++s) this._mSampleValues[s] = l(s * r, t, e)
						},
						_getTForX: function(t) {
							for (var e = this._p[0], s = this._p[2], n = this._mSampleValues, a = 0, o = 1, u = i - 1; o !== u && n[o] <= t; ++o) a += r;
							var c = a + (t - n[--o]) / (n[o + 1] - n[o]) * r,
								p = h(c, e, s);
							return p >= .001 ? function(t, e, i, r) {
								for (var s = 0; s < 4; ++s) {
									var n = h(e, i, r);
									if (0 === n) return e;
									e -= (l(e, i, r) - t) / n
								}
								return e
							}(t, c, e, s) : 0 === p ? c : function(t, e, i, r, s) {
								var n, a, o = 0;
								do {
									(n = l(a = e + (i - e) / 2, r, s) - t) > 0 ? i = a : e = a
								} while (Math.abs(n) > 1e-7 && ++o < 10);
								return a
							}(t, a, a + r, e, s)
						}
					}, t
				}(),
				et = {
					double: function(t) {
						return t.concat(c(t.length))
					}
				},
				it = function(t, e, i) {
					var r = 0,
						s = t,
						n = c(s);
					return {
						newElement: function() {
							return r ? n[r -= 1] : e()
						},
						release: function(t) {
							r === s && (n = et.double(n), s *= 2), i && i(t), n[r] = t, r += 1
						}
					}
				},
				rt = it(8, (function() {
					return {
						addedLength: 0,
						percents: u("float32", j()),
						lengths: u("float32", j())
					}
				})),
				st = it(8, (function() {
					return {
						lengths: [],
						totalLength: 0
					}
				}), (function(t) {
					var e, i = t.lengths.length;
					for (e = 0; e < i; e += 1) rt.release(t.lengths[e]);
					t.lengths.length = 0
				}));
			const nt = function() {
				var t = Math;

				function e(t, e, i, r, s, n) {
					var a = t * r + e * s + i * n - s * r - n * t - i * e;
					return a > -.001 && a < .001
				}
				var i = function(t, e, i, r) {
					var s, n, a, o, l, h, u = j(),
						c = 0,
						p = [],
						d = [],
						f = rt.newElement();
					for (a = i.length, s = 0; s < u; s += 1) {
						for (l = s / (u - 1), h = 0, n = 0; n < a; n += 1) o = y(1 - l, 3) * t[n] + 3 * y(1 - l, 2) * l * i[n] + 3 * (1 - l) * y(l, 2) * r[n] + y(l, 3) * e[n], p[n] = o, null !== d[n] && (h += y(p[n] - d[n], 2)), d[n] = p[n];
						h && (c += h = D(h)), f.percents[s] = l, f.lengths[s] = c
					}
					return f.addedLength = c, f
				};

				function r(t) {
					this.segmentLength = 0, this.points = new Array(t)
				}

				function s(t, e) {
					this.partialLength = t, this.point = e
				}
				var n, a = (n = {}, function(t, i, a, o) {
					var l = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
					if (!n[l]) {
						var h, u, p, d, f, m, g, v = j(),
							b = 0,
							_ = null;
						2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (v = 2);
						var w = new r(v);
						for (p = a.length, h = 0; h < v; h += 1) {
							for (g = c(p), f = h / (v - 1), m = 0, u = 0; u < p; u += 1) d = y(1 - f, 3) * t[u] + 3 * y(1 - f, 2) * f * (t[u] + a[u]) + 3 * (1 - f) * y(f, 2) * (i[u] + o[u]) + y(f, 3) * i[u], g[u] = d, null !== _ && (m += y(g[u] - _[u], 2));
							b += m = D(m), w.points[h] = new s(m, g), _ = g
						}
						w.segmentLength = b, n[l] = w
					}
					return n[l]
				});

				function o(t, e) {
					var i = e.percents,
						r = e.lengths,
						s = i.length,
						n = b((s - 1) * t),
						a = t * e.addedLength,
						o = 0;
					if (n === s - 1 || 0 === n || a === r[n]) return i[n];
					for (var l = r[n] > a ? -1 : 1, h = !0; h;)
						if (r[n] <= a && r[n + 1] > a ? (o = (a - r[n]) / (r[n + 1] - r[n]), h = !1) : n += l, n < 0 || n >= s - 1) {
							if (n === s - 1) return i[n];
							h = !1
						} return i[n] + (i[n + 1] - i[n]) * o
				}
				var l = u("float32", 8);
				return {
					getSegmentsLength: function(t) {
						var e, r = st.newElement(),
							s = t.c,
							n = t.v,
							a = t.o,
							o = t.i,
							l = t._length,
							h = r.lengths,
							u = 0;
						for (e = 0; e < l - 1; e += 1) h[e] = i(n[e], n[e + 1], a[e], o[e + 1]), u += h[e].addedLength;
						return s && l && (h[e] = i(n[e], n[0], a[e], o[0]), u += h[e].addedLength), r.totalLength = u, r
					},
					getNewSegment: function(e, i, r, s, n, a, h) {
						n < 0 ? n = 0 : n > 1 && (n = 1);
						var u, c = o(n, h),
							p = o(a = a > 1 ? 1 : a, h),
							d = e.length,
							f = 1 - c,
							m = 1 - p,
							g = f * f * f,
							v = c * f * f * 3,
							y = c * c * f * 3,
							D = c * c * c,
							b = f * f * m,
							_ = c * f * m + f * c * m + f * f * p,
							w = c * c * m + f * c * p + c * f * p,
							x = c * c * p,
							C = f * m * m,
							E = c * m * m + f * p * m + f * m * p,
							T = c * p * m + f * p * p + c * m * p,
							S = c * p * p,
							k = m * m * m,
							P = p * m * m + m * p * m + m * m * p,
							A = p * p * m + m * p * p + p * m * p,
							M = p * p * p;
						for (u = 0; u < d; u += 1) l[4 * u] = t.round(1e3 * (g * e[u] + v * r[u] + y * s[u] + D * i[u])) / 1e3, l[4 * u + 1] = t.round(1e3 * (b * e[u] + _ * r[u] + w * s[u] + x * i[u])) / 1e3, l[4 * u + 2] = t.round(1e3 * (C * e[u] + E * r[u] + T * s[u] + S * i[u])) / 1e3, l[4 * u + 3] = t.round(1e3 * (k * e[u] + P * r[u] + A * s[u] + M * i[u])) / 1e3;
						return l
					},
					getPointInSegment: function(e, i, r, s, n, a) {
						var l = o(n, a),
							h = 1 - l;
						return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * r[0] + (l * l * h + h * l * l + l * h * l) * s[0] + l * l * l * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * r[1] + (l * l * h + h * l * l + l * h * l) * s[1] + l * l * l * i[1])) / 1e3]
					},
					buildBezierData: a,
					pointOnLine2D: e,
					pointOnLine3D: function(i, r, s, n, a, o, l, h, u) {
						if (0 === s && 0 === o && 0 === u) return e(i, r, n, a, l, h);
						var c, p = t.sqrt(t.pow(n - i, 2) + t.pow(a - r, 2) + t.pow(o - s, 2)),
							d = t.sqrt(t.pow(l - i, 2) + t.pow(h - r, 2) + t.pow(u - s, 2)),
							f = t.sqrt(t.pow(l - n, 2) + t.pow(h - a, 2) + t.pow(u - o, 2));
						return (c = p > d ? p > f ? p - d - f : f - d - p : f > d ? f - d - p : d - p - f) > -1e-4 && c < 1e-4
					}
				}
			}();
			var at = s,
				ot = Math.abs;

			function lt(t, e) {
				var i, r = this.offsetTime;
				"multidimensional" === this.propType && (i = u("float32", this.pv.length));
				for (var s, n, a, o, l, h, c, p, d, f = e.lastIndex, m = f, g = this.keyframes.length - 1, v = !0; v;) {
					if (s = this.keyframes[m], n = this.keyframes[m + 1], m === g - 1 && t >= n.t - r) {
						s.h && (s = n), f = 0;
						break
					}
					if (n.t - r > t) {
						f = m;
						break
					}
					m < g - 1 ? m += 1 : (f = 0, v = !1)
				}
				a = this.keyframesMetadata[m] || {};
				var y, D, b, _, w, x, E, T, S, k, P = n.t - r,
					A = s.t - r;
				if (s.to) {
					a.bezierData || (a.bezierData = nt.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
					var M = a.bezierData;
					if (t >= P || t < A) {
						var F = t >= P ? M.points.length - 1 : 0;
						for (l = M.points[F].point.length, o = 0; o < l; o += 1) i[o] = M.points[F].point[o]
					} else {
						a.__fnct ? d = a.__fnct : (d = tt.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, a.__fnct = d), h = d((t - A) / (P - A));
						var L, I = M.segmentLength * h,
							O = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
						for (p = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, v = !0, c = M.points.length; v;) {
							if (O += M.points[p].partialLength, 0 === I || 0 === h || p === M.points.length - 1) {
								for (l = M.points[p].point.length, o = 0; o < l; o += 1) i[o] = M.points[p].point[o];
								break
							}
							if (I >= O && I < O + M.points[p + 1].partialLength) {
								for (L = (I - O) / M.points[p + 1].partialLength, l = M.points[p].point.length, o = 0; o < l; o += 1) i[o] = M.points[p].point[o] + (M.points[p + 1].point[o] - M.points[p].point[o]) * L;
								break
							}
							p < c - 1 ? p += 1 : v = !1
						}
						e._lastPoint = p, e._lastAddedLength = O - M.points[p].partialLength, e._lastKeyframeIndex = m
					}
				} else {
					var R, B, z, N, V;
					if (g = s.s.length, y = n.s || s.e, this.sh && 1 !== s.h)
						if (t >= P) i[0] = y[0], i[1] = y[1], i[2] = y[2];
						else if (t <= A) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
					else {
						var X = ht(s.s),
							Y = ht(y);
						D = i, b = function(t, e, i) {
							var r, s, n, a, o, l = [],
								h = t[0],
								u = t[1],
								c = t[2],
								p = t[3],
								d = e[0],
								f = e[1],
								m = e[2],
								g = e[3];
							return (s = h * d + u * f + c * m + p * g) < 0 && (s = -s, d = -d, f = -f, m = -m, g = -g), 1 - s > 1e-6 ? (r = Math.acos(s), n = Math.sin(r), a = Math.sin((1 - i) * r) / n, o = Math.sin(i * r) / n) : (a = 1 - i, o = i), l[0] = a * h + o * d, l[1] = a * u + o * f, l[2] = a * c + o * m, l[3] = a * p + o * g, l
						}(X, Y, (t - A) / (P - A)), _ = b[0], w = b[1], x = b[2], E = b[3], T = Math.atan2(2 * w * E - 2 * _ * x, 1 - 2 * w * w - 2 * x * x), S = Math.asin(2 * _ * w + 2 * x * E), k = Math.atan2(2 * _ * E - 2 * w * x, 1 - 2 * _ * _ - 2 * x * x), D[0] = T / C, D[1] = S / C, D[2] = k / C
					} else
						for (m = 0; m < g; m += 1) 1 !== s.h && (t >= P ? h = 1 : t < A ? h = 0 : (s.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? d = a.__fnct[m] : (R = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], B = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], z = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], N = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], d = tt.getBezierEasing(R, B, z, N).get, a.__fnct[m] = d)) : a.__fnct ? d = a.__fnct : (R = s.o.x, B = s.o.y, z = s.i.x, N = s.i.y, d = tt.getBezierEasing(R, B, z, N).get, s.keyframeMetadata = d), h = d((t - A) / (P - A)))), y = n.s || s.e, V = 1 === s.h ? s.s[m] : s.s[m] + (y[m] - s.s[m]) * h, "multidimensional" === this.propType ? i[m] = V : i = V
				}
				return e.lastIndex = f, i
			}

			function ht(t) {
				var e = t[0] * C,
					i = t[1] * C,
					r = t[2] * C,
					s = Math.cos(e / 2),
					n = Math.cos(i / 2),
					a = Math.cos(r / 2),
					o = Math.sin(e / 2),
					l = Math.sin(i / 2),
					h = Math.sin(r / 2);
				return [o * l * a + s * n * h, o * n * a + s * l * h, s * l * a - o * n * h, s * n * a - o * l * h]
			}

			function ut() {
				var t = this.comp.renderedFrame - this.offsetTime,
					e = this.keyframes[0].t - this.offsetTime,
					i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
				if (!(t === this._caching.lastFrame || this._caching.lastFrame !== at && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
					this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
					var r = this.interpolateValue(t, this._caching);
					this.pv = r
				}
				return this._caching.lastFrame = t, this.pv
			}

			function ct(t) {
				var e;
				if ("unidimensional" === this.propType) e = t * this.mult, ot(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
				else
					for (var i = 0, r = this.v.length; i < r;) e = t[i] * this.mult, ot(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
			}

			function pt() {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
					if (this.lock) this.setVValue(this.pv);
					else {
						var t;
						this.lock = !0, this._mdf = this._isFirstFrame;
						var e = this.effectsSequence.length,
							i = this.kf ? this.pv : this.data.k;
						for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
						this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
			}

			function dt(t) {
				this.effectsSequence.push(t), this.container.addDynamicProperty(this)
			}

			function ft(t, e, i, r) {
				this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = pt, this.setVValue = ct, this.addEffect = dt
			}

			function mt(t, e, i, r) {
				var s;
				this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
				var n = e.k.length;
				for (this.v = u("float32", n), this.pv = u("float32", n), this.vel = u("float32", n), s = 0; s < n; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
				this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = pt, this.setVValue = ct, this.addEffect = dt
			}

			function gt(t, e, i, r) {
				this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
					lastFrame: at,
					lastIndex: 0,
					value: 0,
					_lastKeyframeIndex: -1
				}, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = at, this.pv = at, this._isFirstFrame = !0, this.getValue = pt, this.setVValue = ct, this.interpolateValue = lt, this.effectsSequence = [ut.bind(this)], this.addEffect = dt
			}

			function vt(t, e, i, r) {
				var s;
				this.propType = "multidimensional";
				var n, a, o, l, h = e.k.length;
				for (s = 0; s < h - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, a = e.k[s + 1].s, o = e.k[s].to, l = e.k[s].ti, (2 === n.length && (n[0] !== a[0] || n[1] !== a[1]) && nt.pointOnLine2D(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && nt.pointOnLine2D(n[0], n[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) || 3 === n.length && (n[0] !== a[0] || n[1] !== a[1] || n[2] !== a[2]) && nt.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && nt.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], a[0] + l[0], a[1] + l[1], a[2] + l[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === a[0] && n[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === n.length || n[2] === a[2] && 0 === o[2] && 0 === l[2]) && (e.k[s].to = null, e.k[s].ti = null));
				this.effectsSequence = [ut.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = pt, this.setVValue = ct, this.interpolateValue = lt, this.frameId = -1;
				var c = e.k[0].s.length;
				for (this.v = u("float32", c), this.pv = u("float32", c), s = 0; s < c; s += 1) this.v[s] = at, this.pv[s] = at;
				this._caching = {
					lastFrame: at,
					lastIndex: 0,
					value: u("float32", c)
				}, this.addEffect = dt
			}
			const yt = {
				getProp: function(t, e, i, r, s) {
					var n;
					if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
						if ("number" == typeof e.k[0]) n = new mt(t, e, r, s);
						else switch (i) {
							case 0:
								n = new gt(t, e, r, s);
								break;
							case 1:
								n = new vt(t, e, r, s)
						} else n = new ft(t, e, r, s);
					return n.effectsSequence.length && s.addDynamicProperty(n), n
				}
			};

			function Dt() {}
			Dt.prototype = {
				addDynamicProperty: function(t) {
					-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
				},
				iterateDynamicProperties: function() {
					var t;
					this._mdf = !1;
					var e = this.dynamicProperties.length;
					for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
				},
				initDynamicPropertyContainer: function(t) {
					this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
				}
			};
			const bt = it(8, (function() {
				return u("float32", 2)
			}));

			function _t() {
				this.c = !1, this._length = 0, this._maxLength = 8, this.v = c(this._maxLength), this.o = c(this._maxLength), this.i = c(this._maxLength)
			}
			_t.prototype.setPathData = function(t, e) {
				this.c = t, this.setLength(e);
				for (var i = 0; i < e;) this.v[i] = bt.newElement(), this.o[i] = bt.newElement(), this.i[i] = bt.newElement(), i += 1
			}, _t.prototype.setLength = function(t) {
				for (; this._maxLength < t;) this.doubleArrayLength();
				this._length = t
			}, _t.prototype.doubleArrayLength = function() {
				this.v = this.v.concat(c(this._maxLength)), this.i = this.i.concat(c(this._maxLength)), this.o = this.o.concat(c(this._maxLength)), this._maxLength *= 2
			}, _t.prototype.setXYAt = function(t, e, i, r, s) {
				var n;
				switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
					case "v":
						n = this.v;
						break;
					case "i":
						n = this.i;
						break;
					case "o":
						n = this.o;
						break;
					default:
						n = []
				}(!n[r] || n[r] && !s) && (n[r] = bt.newElement()), n[r][0] = t, n[r][1] = e
			}, _t.prototype.setTripleAt = function(t, e, i, r, s, n, a, o) {
				this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(s, n, "i", a, o)
			}, _t.prototype.reverse = function() {
				var t = new _t;
				t.setPathData(this.c, this._length);
				var e = this.v,
					i = this.o,
					r = this.i,
					s = 0;
				this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
				var n, a = this._length - 1,
					o = this._length;
				for (n = s; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], n, !1), a -= 1;
				return t
			}, _t.prototype.length = function() {
				return this._length
			};
			const wt = ((xt = it(4, (function() {
				return new _t
			}), (function(t) {
				var e, i = t._length;
				for (e = 0; e < i; e += 1) bt.release(t.v[e]), bt.release(t.i[e]), bt.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
				t._length = 0, t.c = !1
			}))).clone = function(t) {
				var e, i = xt.newElement(),
					r = void 0 === t._length ? t.v.length : t._length;
				for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
				return i
			}, xt);
			var xt;

			function Ct() {
				this._length = 0, this._maxLength = 4, this.shapes = c(this._maxLength)
			}
			Ct.prototype.addShape = function(t) {
				this._length === this._maxLength && (this.shapes = this.shapes.concat(c(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
			}, Ct.prototype.releaseShapes = function() {
				var t;
				for (t = 0; t < this._length; t += 1) wt.release(this.shapes[t]);
				this._length = 0
			};
			const Et = (Tt = {
				newShapeCollection: function() {
					return St ? Pt[St -= 1] : new Ct
				},
				release: function(t) {
					var e, i = t._length;
					for (e = 0; e < i; e += 1) wt.release(t.shapes[e]);
					t._length = 0, St === kt && (Pt = et.double(Pt), kt *= 2), Pt[St] = t, St += 1
				}
			}, St = 0, Pt = c(kt = 4), Tt);
			var Tt, St, kt, Pt;
			const At = function() {
					var t = -999999;

					function e(t, e, i) {
						var r, s, n, a, o, l, h, u, c, p = i.lastIndex,
							d = this.keyframes;
						if (t < d[0].t - this.offsetTime) r = d[0].s[0], n = !0, p = 0;
						else if (t >= d[d.length - 1].t - this.offsetTime) r = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], n = !0;
						else {
							for (var f, m, g, v = p, y = d.length - 1, D = !0; D && (f = d[v], !((m = d[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : D = !1;
							if (g = this.keyframesMetadata[v] || {}, p = v, !(n = 1 === f.h)) {
								if (t >= m.t - this.offsetTime) u = 1;
								else if (t < f.t - this.offsetTime) u = 0;
								else {
									var b;
									g.__fnct ? b = g.__fnct : (b = tt.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, g.__fnct = b), u = b((t - (f.t - this.offsetTime)) / (m.t - this.offsetTime - (f.t - this.offsetTime)))
								}
								s = m.s ? m.s[0] : f.e[0]
							}
							r = f.s[0]
						}
						for (l = e._length, h = r.i[0].length, i.lastIndex = p, a = 0; a < l; a += 1)
							for (o = 0; o < h; o += 1) c = n ? r.i[a][o] : r.i[a][o] + (s.i[a][o] - r.i[a][o]) * u, e.i[a][o] = c, c = n ? r.o[a][o] : r.o[a][o] + (s.o[a][o] - r.o[a][o]) * u, e.o[a][o] = c, c = n ? r.v[a][o] : r.v[a][o] + (s.v[a][o] - r.v[a][o]) * u, e.v[a][o] = c
					}

					function i() {
						var e = this.comp.renderedFrame - this.offsetTime,
							i = this.keyframes[0].t - this.offsetTime,
							r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
							s = this._caching.lastFrame;
						return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
					}

					function r() {
						this.paths = this.localShapeCollection
					}

					function s(t) {
						(function(t, e) {
							if (t._length !== e._length || t.c !== e.c) return !1;
							var i, r = t._length;
							for (i = 0; i < r; i += 1)
								if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
							return !0
						})(this.v, t) || (this.v = wt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
					}

					function n() {
						if (this.elem.globalData.frameId !== this.frameId)
							if (this.effectsSequence.length)
								if (this.lock) this.setVValue(this.pv);
								else {
									var t, e;
									this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
									var i = this.effectsSequence.length;
									for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
									this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
								}
						else this._mdf = !1
					}

					function a(t, e, i) {
						this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
						var s = 3 === i ? e.pt.k : e.ks.k;
						this.v = wt.clone(s), this.pv = wt.clone(this.v), this.localShapeCollection = Et.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
					}

					function l(t) {
						this.effectsSequence.push(t), this.container.addDynamicProperty(this)
					}

					function h(e, s, n) {
						this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
						var a = this.keyframes[0].s[0].i.length;
						this.v = wt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = wt.clone(this.v), this.localShapeCollection = Et.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
							lastFrame: t,
							lastIndex: 0
						}, this.effectsSequence = [i.bind(this)]
					}
					a.prototype.interpolateShape = e, a.prototype.getValue = n, a.prototype.setVValue = s, a.prototype.addEffect = l, h.prototype.getValue = n, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = l;
					var u = function() {
							var t = E;

							function e(t, e) {
								this.v = wt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Et.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = yt.getProp(t, e.p, 1, 0, this), this.s = yt.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
							}
							return e.prototype = {
								reset: r,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
								},
								convertEllToPath: function() {
									var e = this.p.v[0],
										i = this.p.v[1],
										r = this.s.v[0] / 2,
										s = this.s.v[1] / 2,
										n = 3 !== this.d,
										a = this.v;
									a.v[0][0] = e, a.v[0][1] = i - s, a.v[1][0] = n ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + s, a.v[3][0] = n ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = n ? e - r * t : e + r * t, a.i[0][1] = i - s, a.i[1][0] = n ? e + r : e - r, a.i[1][1] = i - s * t, a.i[2][0] = n ? e + r * t : e - r * t, a.i[2][1] = i + s, a.i[3][0] = n ? e - r : e + r, a.i[3][1] = i + s * t, a.o[0][0] = n ? e + r * t : e - r * t, a.o[0][1] = i - s, a.o[1][0] = n ? e + r : e - r, a.o[1][1] = i + s * t, a.o[2][0] = n ? e - r * t : e + r * t, a.o[2][1] = i + s, a.o[3][0] = n ? e - r : e + r, a.o[3][1] = i - s * t
								}
							}, o([Dt], e), e
						}(),
						c = function() {
							function t(t, e) {
								this.v = wt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = yt.getProp(t, e.ir, 0, 0, this), this.is = yt.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = yt.getProp(t, e.pt, 0, 0, this), this.p = yt.getProp(t, e.p, 1, 0, this), this.r = yt.getProp(t, e.r, 0, C, this), this.or = yt.getProp(t, e.or, 0, 0, this), this.os = yt.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Et.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
							}
							return t.prototype = {
								reset: r,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
								},
								convertStarToPath: function() {
									var t, e, i, r, s = 2 * Math.floor(this.pt.v),
										n = 2 * Math.PI / s,
										a = !0,
										o = this.or.v,
										l = this.ir.v,
										h = this.os.v,
										u = this.is.v,
										c = 2 * Math.PI * o / (2 * s),
										p = 2 * Math.PI * l / (2 * s),
										d = -Math.PI / 2;
									d += this.r.v;
									var f = 3 === this.data.d ? -1 : 1;
									for (this.v._length = 0, t = 0; t < s; t += 1) {
										i = a ? h : u, r = a ? c : p;
										var m = (e = a ? o : l) * Math.cos(d),
											g = e * Math.sin(d),
											v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
											y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
										m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * r * i * f, g - y * r * i * f, m + v * r * i * f, g + y * r * i * f, t, !0), a = !a, d += n * f
									}
								},
								convertPolygonToPath: function() {
									var t, e = Math.floor(this.pt.v),
										i = 2 * Math.PI / e,
										r = this.or.v,
										s = this.os.v,
										n = 2 * Math.PI * r / (4 * e),
										a = .5 * -Math.PI,
										o = 3 === this.data.d ? -1 : 1;
									for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
										var l = r * Math.cos(a),
											h = r * Math.sin(a),
											u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
											c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
										l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * n * s * o, h - c * n * s * o, l + u * n * s * o, h + c * n * s * o, t, !0), a += i * o
									}
									this.paths.length = 0, this.paths[0] = this.v
								}
							}, o([Dt], t), t
						}(),
						p = function() {
							function t(t, e) {
								this.v = wt.newElement(), this.v.c = !0, this.localShapeCollection = Et.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = yt.getProp(t, e.p, 1, 0, this), this.s = yt.getProp(t, e.s, 1, 0, this), this.r = yt.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
							}
							return t.prototype = {
								convertRectToPath: function() {
									var t = this.p.v[0],
										e = this.p.v[1],
										i = this.s.v[0] / 2,
										r = this.s.v[1] / 2,
										s = _(i, r, this.r.v),
										n = s * (1 - E);
									this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + n, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - n, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - n, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + n, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + n, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + n, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - n, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + n, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + n, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + n, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - n, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + n, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + n, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + n, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - n, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - n, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + n, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - n, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - n, e + r, t + i, e + r, 3, !0)))
								},
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
								},
								reset: r
							}, o([Dt], t), t
						}();
					var d = {
						getShapeProp: function(t, e, i) {
							var r;
							return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new a(t, e, i) : 5 === i ? r = new p(t, e) : 6 === i ? r = new u(t, e) : 7 === i && (r = new c(t, e)), r.k && t.addDynamicProperty(r), r
						},
						getConstructorFunction: function() {
							return a
						},
						getKeyframedConstructorFunction: function() {
							return h
						}
					};
					return d
				}(),
				Mt = function() {
					var t = Math.cos,
						e = Math.sin,
						i = Math.tan,
						r = Math.round;

					function s() {
						return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
					}

					function n(i) {
						if (0 === i) return this;
						var r = t(i),
							s = e(i);
						return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function a(i) {
						if (0 === i) return this;
						var r = t(i),
							s = e(i);
						return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
					}

					function o(i) {
						if (0 === i) return this;
						var r = t(i),
							s = e(i);
						return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
					}

					function l(i) {
						if (0 === i) return this;
						var r = t(i),
							s = e(i);
						return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function h(t, e) {
						return this._t(1, e, t, 1, 0, 0)
					}

					function c(t, e) {
						return this.shear(i(t), i(e))
					}

					function p(r, s) {
						var n = t(s),
							a = e(s);
						return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function d(t, e, i) {
						return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
					}

					function f(t, e, i, r, s, n, a, o, l, h, u, c, p, d, f, m) {
						return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = d, this.props[14] = f, this.props[15] = m, this
					}

					function m(t, e, i) {
						return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
					}

					function g(t, e, i, r, s, n, a, o, l, h, u, c, p, d, f, m) {
						var g = this.props;
						if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === n && 0 === a && 0 === o && 0 === l && 0 === h && 1 === u && 0 === c) return g[12] = g[12] * t + g[15] * p, g[13] = g[13] * n + g[15] * d, g[14] = g[14] * u + g[15] * f, g[15] *= m, this._identityCalculated = !1, this;
						var v = g[0],
							y = g[1],
							D = g[2],
							b = g[3],
							_ = g[4],
							w = g[5],
							x = g[6],
							C = g[7],
							E = g[8],
							T = g[9],
							S = g[10],
							k = g[11],
							P = g[12],
							A = g[13],
							M = g[14],
							F = g[15];
						return g[0] = v * t + y * s + D * l + b * p, g[1] = v * e + y * n + D * h + b * d, g[2] = v * i + y * a + D * u + b * f, g[3] = v * r + y * o + D * c + b * m, g[4] = _ * t + w * s + x * l + C * p, g[5] = _ * e + w * n + x * h + C * d, g[6] = _ * i + w * a + x * u + C * f, g[7] = _ * r + w * o + x * c + C * m, g[8] = E * t + T * s + S * l + k * p, g[9] = E * e + T * n + S * h + k * d, g[10] = E * i + T * a + S * u + k * f, g[11] = E * r + T * o + S * c + k * m, g[12] = P * t + A * s + M * l + F * p, g[13] = P * e + A * n + M * h + F * d, g[14] = P * i + A * a + M * u + F * f, g[15] = P * r + A * o + M * c + F * m, this._identityCalculated = !1, this
					}

					function v(t) {
						var e = t.props;
						return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
					}

					function y() {
						return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
					}

					function D(t) {
						for (var e = 0; e < 16;) {
							if (t.props[e] !== this.props[e]) return !1;
							e += 1
						}
						return !0
					}

					function b(t) {
						var e;
						for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
						return t
					}

					function _(t) {
						var e;
						for (e = 0; e < 16; e += 1) this.props[e] = t[e]
					}

					function w(t, e, i) {
						return {
							x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
							y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
							z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
						}
					}

					function x(t, e, i) {
						return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
					}

					function C(t, e, i) {
						return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
					}

					function E(t, e, i) {
						return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
					}

					function T() {
						var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
							e = this.props[5] / t,
							i = -this.props[1] / t,
							r = -this.props[4] / t,
							s = this.props[0] / t,
							n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
							a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
							o = new Mt;
						return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = n, o.props[13] = a, o
					}

					function S(t) {
						return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
					}

					function k(t) {
						var e, i = t.length,
							r = [];
						for (e = 0; e < i; e += 1) r[e] = S(t[e]);
						return r
					}

					function P(t, e, i) {
						var r = u("float32", 6);
						if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
						else {
							var s = this.props[0],
								n = this.props[1],
								a = this.props[4],
								o = this.props[5],
								l = this.props[12],
								h = this.props[13];
							r[0] = t[0] * s + t[1] * a + l, r[1] = t[0] * n + t[1] * o + h, r[2] = e[0] * s + e[1] * a + l, r[3] = e[0] * n + e[1] * o + h, r[4] = i[0] * s + i[1] * a + l, r[5] = i[0] * n + i[1] * o + h
						}
						return r
					}

					function A(t, e, i) {
						return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
					}

					function M(t, e) {
						if (this.isIdentity()) return t + "," + e;
						var i = this.props;
						return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
					}

					function F() {
						for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
						return i
					}

					function L(t) {
						return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
					}

					function I() {
						var t = this.props;
						return "matrix(" + L(t[0]) + "," + L(t[1]) + "," + L(t[4]) + "," + L(t[5]) + "," + L(t[12]) + "," + L(t[13]) + ")"
					}
					return function() {
						this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = p, this.shear = h, this.scale = d, this.setTransform = f, this.translate = m, this.transform = g, this.multiply = v, this.applyToPoint = w, this.applyToX = x, this.applyToY = C, this.applyToZ = E, this.applyToPointArray = A, this.applyToTriplePoints = P, this.applyToPointStringified = M, this.toCSS = F, this.to2dCSS = I, this.clone = b, this.cloneFromProps = _, this.equals = D, this.inversePoints = k, this.inversePoint = S, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = u("float32", 16), this.reset()
					}
				}(),
				Ft = {};
			var Lt = "__[STANDALONE]__";

			function It() {
				Q.searchAnimations()
			}
			Ft.play = Q.play, Ft.pause = Q.pause, Ft.setLocationHref = function(t) {
				i = t
			}, Ft.togglePause = Q.togglePause, Ft.setSpeed = Q.setSpeed, Ft.setDirection = Q.setDirection, Ft.stop = Q.stop, Ft.searchAnimations = It, Ft.registerAnimation = Q.registerAnimation, Ft.loadAnimation = function(t) {
				return Q.loadAnimation(t)
			}, Ft.setSubframeRendering = function(t) {
				(t => {
					p = !!t
				})(t)
			}, Ft.resize = Q.resize, Ft.goToAndStop = Q.goToAndStop, Ft.destroy = Q.destroy, Ft.setQuality = function(t) {
				if ("string" == typeof t) switch (t) {
					case "high":
						H(200);
						break;
					default:
					case "medium":
						H(50);
						break;
					case "low":
						H(10)
				} else !isNaN(t) && t > 1 && H(t);
				j() >= 50 ? T(!1) : T(!0)
			}, Ft.inBrowser = function() {
				return "undefined" != typeof navigator
			}, Ft.installPlugin = function(t, e) {
				"expressions" === t && (d = e)
			}, Ft.freeze = Q.freeze, Ft.unfreeze = Q.unfreeze, Ft.setVolume = Q.setVolume, Ft.mute = Q.mute, Ft.unmute = Q.unmute, Ft.getRegisteredAnimations = Q.getRegisteredAnimations, Ft.useWebWorker = t => {
				r = !!t
			}, Ft.setIDPrefix = function(t) {
				m = t
			}, Ft.__getFactory = function(t) {
				switch (t) {
					case "propertyFactory":
						return yt;
					case "shapePropertyFactory":
						return At;
					case "matrix":
						return Mt;
					default:
						return null
				}
			}, Ft.version = "[[BM_VERSION]]";
			var Ot = "";
			if (Lt) {
				var Rt = document.getElementsByTagName("script"),
					Bt = Rt[Rt.length - 1] || {
						src: ""
					};
				Ot = Bt.src ? Bt.src.replace(/^[^\?]+\??/, "") : "",
					function(t) {
						for (var e = Ot.split("&"), i = 0; i < e.length; i += 1) {
							var r = e[i].split("=");
							if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
						}
						return null
					}("renderer")
			}
			var zt = setInterval((function() {
				"complete" === document.readyState && (clearInterval(zt), It())
			}), 100);
			try {
				0
			} catch (t) {}
			const Nt = function() {
				var t = {},
					e = {};
				return t.registerModifier = function(t, i) {
					e[t] || (e[t] = i)
				}, t.getModifier = function(t, i, r) {
					return new e[t](i, r)
				}, t
			}();

			function Vt() {}

			function Xt() {}

			function Yt() {}
			Vt.prototype.initModifierProperties = function() {}, Vt.prototype.addShapeToModifier = function() {}, Vt.prototype.addShape = function(t) {
				if (!this.closed) {
					t.sh.container.addDynamicProperty(t.sh);
					var e = {
						shape: t.sh,
						data: t,
						localShapeCollection: Et.newShapeCollection()
					};
					this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
				}
			}, Vt.prototype.init = function(t, e) {
				this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = s, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, Vt.prototype.processKeys = function() {
				this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
			}, o([Dt], Vt), o([Vt], Xt), Xt.prototype.initModifierProperties = function(t, e) {
				this.s = yt.getProp(t, e.s, 0, .01, this), this.e = yt.getProp(t, e.e, 0, .01, this), this.o = yt.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
			}, Xt.prototype.addShapeToModifier = function(t) {
				t.pathsData = []
			}, Xt.prototype.calculateShapeEdges = function(t, e, i, r, s) {
				var n = [];
				e <= 1 ? n.push({
					s: t,
					e: e
				}) : t >= 1 ? n.push({
					s: t - 1,
					e: e - 1
				}) : (n.push({
					s: t,
					e: 1
				}), n.push({
					s: 0,
					e: e - 1
				}));
				var a, o, l = [],
					h = n.length;
				for (a = 0; a < h; a += 1) {
					var u, c;
					if (!((o = n[a]).e * s < r || o.s * s > r + i)) u = o.s * s <= r ? 0 : (o.s * s - r) / i, c = o.e * s >= r + i ? 1 : (o.e * s - r) / i, l.push([u, c])
				}
				return l.length || l.push([0, 0]), l
			}, Xt.prototype.releasePathsData = function(t) {
				var e, i = t.length;
				for (e = 0; e < i; e += 1) st.release(t[e]);
				return t.length = 0, t
			}, Xt.prototype.processShapes = function(t) {
				var e, i, r, s;
				if (this._mdf || t) {
					var n = this.o.v % 360 / 360;
					if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
						var a = e;
						e = i, i = a
					}
					e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
				} else e = this.sValue, i = this.eValue;
				var o, l, h, u, c, p = this.shapes.length,
					d = 0;
				if (i === e)
					for (s = 0; s < p; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
				else if (1 === i && 0 === e || 0 === i && 1 === e) {
					if (this._mdf)
						for (s = 0; s < p; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
				} else {
					var f, m, g = [];
					for (s = 0; s < p; s += 1)
						if ((f = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
							if (l = (r = f.shape.paths)._length, c = 0, !f.shape._mdf && f.pathsData.length) c = f.totalShapeLength;
							else {
								for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) u = nt.getSegmentsLength(r.shapes[o]), h.push(u), c += u.totalLength;
								f.totalShapeLength = c, f.pathsData = h
							}
							d += c, f.shape._mdf = !0
						} else f.shape.paths = f.localShapeCollection;
					var v, y = e,
						D = i,
						b = 0;
					for (s = p - 1; s >= 0; s -= 1)
						if ((f = this.shapes[s]).shape._mdf) {
							for ((m = f.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (v = this.calculateShapeEdges(e, i, f.totalShapeLength, b, d), b += f.totalShapeLength) : v = [
									[y, D]
								], l = v.length, o = 0; o < l; o += 1) {
								y = v[o][0], D = v[o][1], g.length = 0, D <= 1 ? g.push({
									s: f.totalShapeLength * y,
									e: f.totalShapeLength * D
								}) : y >= 1 ? g.push({
									s: f.totalShapeLength * (y - 1),
									e: f.totalShapeLength * (D - 1)
								}) : (g.push({
									s: f.totalShapeLength * y,
									e: f.totalShapeLength
								}), g.push({
									s: 0,
									e: f.totalShapeLength * (D - 1)
								}));
								var _ = this.addShapes(f, g[0]);
								if (g[0].s !== g[0].e) {
									if (g.length > 1)
										if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
											var w = _.pop();
											this.addPaths(_, m), _ = this.addShapes(f, g[1], w)
										} else this.addPaths(_, m), _ = this.addShapes(f, g[1]);
									this.addPaths(_, m)
								}
							}
							f.shape.paths = m
						}
				}
			}, Xt.prototype.addPaths = function(t, e) {
				var i, r = t.length;
				for (i = 0; i < r; i += 1) e.addShape(t[i])
			}, Xt.prototype.addSegment = function(t, e, i, r, s, n, a) {
				s.setXYAt(e[0], e[1], "o", n), s.setXYAt(i[0], i[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(r[0], r[1], "v", n + 1)
			}, Xt.prototype.addSegmentFromArray = function(t, e, i, r) {
				e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
			}, Xt.prototype.addShapes = function(t, e, i) {
				var r, s, n, a, o, l, h, u, c = t.pathsData,
					p = t.shape.paths.shapes,
					d = t.shape.paths._length,
					f = 0,
					m = [],
					g = !0;
				for (i ? (o = i._length, u = i._length) : (i = wt.newElement(), o = 0, u = 0), m.push(i), r = 0; r < d; r += 1) {
					for (l = c[r].lengths, i.c = p[r].c, n = p[r].c ? l.length : l.length + 1, s = 1; s < n; s += 1)
						if (f + (a = l[s - 1]).addedLength < e.s) f += a.addedLength, i.c = !1;
						else {
							if (f > e.e) {
								i.c = !1;
								break
							}
							e.s <= f && e.e >= f + a.addedLength ? (this.addSegment(p[r].v[s - 1], p[r].o[s - 1], p[r].i[s], p[r].v[s], i, o, g), g = !1) : (h = nt.getNewSegment(p[r].v[s - 1], p[r].v[s], p[r].o[s - 1], p[r].i[s], (e.s - f) / a.addedLength, (e.e - f) / a.addedLength, l[s - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1), f += a.addedLength, o += 1
						} if (p[r].c && l.length) {
						if (a = l[s - 1], f <= e.e) {
							var v = l[s - 1].addedLength;
							e.s <= f && e.e >= f + v ? (this.addSegment(p[r].v[s - 1], p[r].o[s - 1], p[r].i[0], p[r].v[0], i, o, g), g = !1) : (h = nt.getNewSegment(p[r].v[s - 1], p[r].v[0], p[r].o[s - 1], p[r].i[0], (e.s - f) / v, (e.e - f) / v, l[s - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1)
						} else i.c = !1;
						f += a.addedLength, o += 1
					}
					if (i._length && (i.setXYAt(i.v[u][0], i.v[u][1], "i", u), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), f > e.e) break;
					r < d - 1 && (i = wt.newElement(), g = !0, m.push(i), o = 0)
				}
				return m
			}, o([Vt], Yt), Yt.prototype.initModifierProperties = function(t, e) {
				this.getValue = this.processKeys, this.amount = yt.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
			}, Yt.prototype.processPath = function(t, e) {
				var i = e / 100,
					r = [0, 0],
					s = t._length,
					n = 0;
				for (n = 0; n < s; n += 1) r[0] += t.v[n][0], r[1] += t.v[n][1];
				r[0] /= s, r[1] /= s;
				var a, o, l, h, u, c, p = wt.newElement();
				for (p.c = t.c, n = 0; n < s; n += 1) a = t.v[n][0] + (r[0] - t.v[n][0]) * i, o = t.v[n][1] + (r[1] - t.v[n][1]) * i, l = t.o[n][0] + (r[0] - t.o[n][0]) * -i, h = t.o[n][1] + (r[1] - t.o[n][1]) * -i, u = t.i[n][0] + (r[0] - t.i[n][0]) * -i, c = t.i[n][1] + (r[1] - t.i[n][1]) * -i, p.setTripleAt(a, o, l, h, u, c, n);
				return p
			}, Yt.prototype.processShapes = function(t) {
				var e, i, r, s, n, a, o = this.shapes.length,
					l = this.amount.v;
				if (0 !== l)
					for (i = 0; i < o; i += 1) {
						if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
							for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], l));
						n.shape.paths = n.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			const Ht = function() {
				var t = [0, 0];

				function e(t, e, i) {
					if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Mt, this.pre = new Mt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = yt.getProp(t, e.p.x, 0, 0, this), this.py = yt.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = yt.getProp(t, e.p.z, 0, 0, this))) : this.p = yt.getProp(t, e.p || {
							k: [0, 0, 0]
						}, 1, 0, this), e.rx) {
						if (this.rx = yt.getProp(t, e.rx, 0, C, this), this.ry = yt.getProp(t, e.ry, 0, C, this), this.rz = yt.getProp(t, e.rz, 0, C, this), e.or.k[0].ti) {
							var r, s = e.or.k.length;
							for (r = 0; r < s; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
						}
						this.or = yt.getProp(t, e.or, 1, C, this), this.or.sh = !0
					} else this.r = yt.getProp(t, e.r || {
						k: 0
					}, 0, C, this);
					e.sk && (this.sk = yt.getProp(t, e.sk, 0, C, this), this.sa = yt.getProp(t, e.sa, 0, C, this)), this.a = yt.getProp(t, e.a || {
						k: [0, 0, 0]
					}, 1, 0, this), this.s = yt.getProp(t, e.s || {
						k: [100, 100, 100]
					}, 1, .01, this), e.o ? this.o = yt.getProp(t, e.o, 0, .01, t) : this.o = {
						_mdf: !1,
						v: 1
					}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
				}
				return e.prototype = {
					applyToMatrix: function(t) {
						var e = this._mdf;
						this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
					},
					getValue: function(e) {
						if (this.elem.globalData.frameId !== this.frameId) {
							if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
								var i;
								if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
									var r, s;
									if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
									else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
										r = [], s = [];
										var n = this.px,
											a = this.py;
										n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (r[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), s[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (r[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [n.pv, a.pv], s[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), s[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
									} else r = s = t;
									this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
								}
								this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							}
							this.frameId = this.elem.globalData.frameId
						}
					},
					precalculateMatrix: function() {
						if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
							if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
								if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
								this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
							}
							this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
						}
					},
					autoOrient: function() {}
				}, o([Dt], e), e.prototype.addDynamicProperty = function(t) {
					this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
				}, e.prototype._addDynamicProperty = Dt.prototype.addDynamicProperty, {
					getTransformProperty: function(t, i, r) {
						return new e(t, i, r)
					}
				}
			}();

			function jt() {}

			function qt() {}

			function Wt(t, e) {
				return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
			}

			function Gt(t) {
				return Math.abs(t) <= 1e-5
			}

			function $t(t, e, i) {
				return t * (1 - i) + e * i
			}

			function Ut(t, e, i) {
				return [$t(t[0], e[0], i), $t(t[1], e[1], i)]
			}

			function Kt(t, e, i, r) {
				return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
			}

			function Jt(t) {
				return new Zt(t, t, t, t, !1)
			}

			function Zt(t, e, i, r, s) {
				s && oe(t, e) && (e = Ut(t, r, 1 / 3)), s && oe(i, r) && (i = Ut(t, r, 2 / 3));
				var n = Kt(t[0], e[0], i[0], r[0]),
					a = Kt(t[1], e[1], i[1], r[1]);
				this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, r]
			}

			function Qt(t, e) {
				var i = t.points[0][e],
					r = t.points[t.points.length - 1][e];
				if (i > r) {
					var s = r;
					r = i, i = s
				}
				for (var n = function(t, e, i) {
						if (0 === t) return [];
						var r = e * e - 4 * t * i;
						if (r < 0) return [];
						var s = -e / (2 * t);
						if (0 === r) return [s];
						var n = Math.sqrt(r) / (2 * t);
						return [s - n, s + n]
					}(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1)
					if (n[a] > 0 && n[a] < 1) {
						var o = t.point(n[a])[e];
						o < i ? i = o : o > r && (r = o)
					} return {
					min: i,
					max: r
				}
			}

			function te(t, e, i) {
				var r = t.boundingBox();
				return {
					cx: r.cx,
					cy: r.cy,
					width: r.width,
					height: r.height,
					bez: t,
					t: (e + i) / 2,
					t1: e,
					t2: i
				}
			}

			function ee(t) {
				var e = t.bez.split(.5);
				return [te(e[0], t.t1, t.t), te(e[1], t.t, t.t2)]
			}

			function ie(t, e, i, r, s, n) {
				var a, o;
				if (a = t, o = e, 2 * Math.abs(a.cx - o.cx) < a.width + o.width && 2 * Math.abs(a.cy - o.cy) < a.height + o.height)
					if (i >= n || t.width <= r && t.height <= r && e.width <= r && e.height <= r) s.push([t.t, e.t]);
					else {
						var l = ee(t),
							h = ee(e);
						ie(l[0], h[0], i + 1, r, s, n), ie(l[0], h[1], i + 1, r, s, n), ie(l[1], h[0], i + 1, r, s, n), ie(l[1], h[1], i + 1, r, s, n)
					}
			}

			function re(t, e) {
				return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
			}

			function se(t, e, i, r) {
				var s = [t[0], t[1], 1],
					n = [e[0], e[1], 1],
					a = [i[0], i[1], 1],
					o = [r[0], r[1], 1],
					l = re(re(s, n), re(a, o));
				return Gt(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
			}

			function ne(t, e, i) {
				return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
			}

			function ae(t, e) {
				return Math.hypot(t[0] - e[0], t[1] - e[1])
			}

			function oe(t, e) {
				return Wt(t[0], e[0]) && Wt(t[1], e[1])
			}

			function le() {}

			function he(t, e, i, r, s, n, a) {
				var o = i - Math.PI / 2,
					l = i + Math.PI / 2,
					h = e[0] + Math.cos(i) * r * s,
					u = e[1] - Math.sin(i) * r * s;
				t.setTripleAt(h, u, h + Math.cos(o) * n, u - Math.sin(o) * n, h + Math.cos(l) * a, u - Math.sin(l) * a, t.length())
			}

			function ue(t, e) {
				var i, r, s, n, a = 0 === e ? t.length() - 1 : e - 1,
					o = (e + 1) % t.length(),
					l = t.v[a],
					h = t.v[o],
					u = (i = l, s = [(r = h)[0] - i[0], r[1] - i[1]], n = .5 * -Math.PI, [Math.cos(n) * s[0] - Math.sin(n) * s[1], Math.sin(n) * s[0] + Math.cos(n) * s[1]]);
				return Math.atan2(0, 1) - Math.atan2(u[1], u[0])
			}

			function ce(t, e, i, r, s, n, a) {
				var o = ue(e, i),
					l = e.v[i % e._length],
					h = e.v[0 === i ? e._length - 1 : i - 1],
					u = e.v[(i + 1) % e._length],
					c = 2 === n ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
					p = 2 === n ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
				he(t, e.v[i % e._length], o, a, r, p / (2 * (s + 1)), c / (2 * (s + 1)))
			}

			function pe(t, e, i, r, s, n) {
				for (var a = 0; a < r; a += 1) {
					var o = (a + 1) / (r + 1),
						l = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
						h = e.normalAngle(o);
					he(t, e.point(o), h, n, i, l / (2 * (r + 1)), l / (2 * (r + 1))), n = -n
				}
				return n
			}

			function de(t, e, i) {
				var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
				return [ne(t, r, i), ne(e, r, i)]
			}

			function fe(t, e) {
				var i, r, s, n, a, o, l;
				i = (l = de(t.points[0], t.points[1], e))[0], r = l[1], s = (l = de(t.points[1], t.points[2], e))[0], n = l[1], a = (l = de(t.points[2], t.points[3], e))[0], o = l[1];
				var h = se(i, r, s, n);
				null === h && (h = r);
				var u = se(a, o, s, n);
				return null === u && (u = a), new Zt(i, h, u, o)
			}

			function me(t, e, i, r, s) {
				var n = e.points[3],
					a = i.points[0];
				if (3 === r) return n;
				if (oe(n, a)) return n;
				if (2 === r) {
					var o = -e.tangentAngle(1),
						l = -i.tangentAngle(0) + Math.PI,
						h = se(n, ne(n, o + Math.PI / 2, 100), a, ne(a, o + Math.PI / 2, 100)),
						u = h ? ae(h, n) : ae(n, a) / 2,
						c = ne(n, o, 2 * u * E);
					return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = ne(a, l, 2 * u * E), t.setTripleAt(a[0], a[1], a[0], a[1], c[0], c[1], t.length()), a
				}
				var p = se(oe(n, e.points[2]) ? e.points[0] : e.points[2], n, a, oe(a, i.points[1]) ? i.points[3] : i.points[1]);
				return p && ae(p, n) < s ? (t.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], t.length()), p) : n
			}

			function ge(t, e) {
				const i = t.intersections(e);
				return i.length && Wt(i[0][0], 1) && i.shift(), i.length ? i[0] : null
			}

			function ve(t, e) {
				var i = t.slice(),
					r = e.slice(),
					s = ge(t[t.length - 1], e[0]);
				return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = ge(t[0], e[e.length - 1])) ? [
					[t[0].split(s[0])[0]],
					[e[e.length - 1].split(s[1])[1]]
				] : [i, r]
			}

			function ye(t, e) {
				var i, r, s, n, a = t.inflectionPoints();
				if (0 === a.length) return [fe(t, e)];
				if (1 === a.length || Wt(a[1], 1)) return i = (s = t.split(a[0]))[0], r = s[1], [fe(i, e), fe(r, e)];
				i = (s = t.split(a[0]))[0];
				var o = (a[1] - a[0]) / (1 - a[0]);
				return n = (s = s[1].split(o))[0], r = s[1], [fe(i, e), fe(n, e), fe(r, e)]
			}

			function De() {}

			function be(t) {
				for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, n = 0; n < s; n += 1) switch (e[n].toLowerCase()) {
					case "italic":
						r = "italic";
						break;
					case "bold":
						i = "700";
						break;
					case "black":
						i = "900";
						break;
					case "medium":
						i = "500";
						break;
					case "regular":
					case "normal":
						i = "400";
						break;
					case "light":
					case "thin":
						i = "200"
				}
				return {
					style: r,
					weight: t.fWeight || i
				}
			}
			o([Vt], jt), jt.prototype.initModifierProperties = function(t, e) {
				this.getValue = this.processKeys, this.c = yt.getProp(t, e.c, 0, null, this), this.o = yt.getProp(t, e.o, 0, null, this), this.tr = Ht.getTransformProperty(t, e.tr, this), this.so = yt.getProp(t, e.tr.so, 0, .01, this), this.eo = yt.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Mt, this.rMatrix = new Mt, this.sMatrix = new Mt, this.tMatrix = new Mt, this.matrix = new Mt
			}, jt.prototype.applyTransforms = function(t, e, i, r, s, n) {
				var a = n ? -1 : 1,
					o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
					l = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
				t.translate(r.p.v[0] * a * s, r.p.v[1] * a * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / l : l), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
			}, jt.prototype.init = function(t, e, i, r) {
				for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
				this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, jt.prototype.resetElements = function(t) {
				var e, i = t.length;
				for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
			}, jt.prototype.cloneElements = function(t) {
				var e = JSON.parse(JSON.stringify(t));
				return this.resetElements(e), e
			}, jt.prototype.changeGroupRender = function(t, e) {
				var i, r = t.length;
				for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
			}, jt.prototype.processShapes = function(t) {
				var e, i, r, s, n, a = !1;
				if (this._mdf || t) {
					var o, l = Math.ceil(this.c.v);
					if (this._groups.length < l) {
						for (; this._groups.length < l;) {
							var h = {
								it: this.cloneElements(this._elements),
								ty: "gr"
							};
							h.it.push({
								a: {
									a: 0,
									ix: 1,
									k: [0, 0]
								},
								nm: "Transform",
								o: {
									a: 0,
									ix: 7,
									k: 100
								},
								p: {
									a: 0,
									ix: 2,
									k: [0, 0]
								},
								r: {
									a: 1,
									ix: 6,
									k: [{
										s: 0,
										e: 0,
										t: 0
									}, {
										s: 0,
										e: 0,
										t: 1
									}]
								},
								s: {
									a: 0,
									ix: 3,
									k: [100, 100]
								},
								sa: {
									a: 0,
									ix: 5,
									k: 0
								},
								sk: {
									a: 0,
									ix: 4,
									k: 0
								},
								ty: "tr"
							}), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
						}
						this.elem.reloadShapes(), a = !0
					}
					for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
						if (o = n < l, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
							var u = this.elemsData[r].it,
								c = u[u.length - 1];
							0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
						}
						n += 1
					}
					this._currentCopies = l;
					var p = this.o.v,
						d = p % 1,
						f = p > 0 ? Math.floor(p) : Math.ceil(p),
						m = this.pMatrix.props,
						g = this.rMatrix.props,
						v = this.sMatrix.props;
					this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
					var y, D, b = 0;
					if (p > 0) {
						for (; b < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
					} else if (p < 0) {
						for (; b > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
					}
					for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, n = this._currentCopies; n;) {
						if (D = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== b) {
							for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < D; y += 1) i[y] = this.matrix.props[y];
							this.matrix.reset()
						} else
							for (this.matrix.reset(), y = 0; y < D; y += 1) i[y] = this.matrix.props[y];
						b += 1, n -= 1, r += s
					}
				} else
					for (n = this._currentCopies, r = 0, s = 1; n;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, r += s;
				return a
			}, jt.prototype.addShape = function() {}, o([Vt], qt), qt.prototype.initModifierProperties = function(t, e) {
				this.getValue = this.processKeys, this.rd = yt.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
			}, qt.prototype.processPath = function(t, e) {
				var i, r = wt.newElement();
				r.c = t.c;
				var s, n, a, o, l, h, u, c, p, d, f, m, g = t._length,
					v = 0;
				for (i = 0; i < g; i += 1) s = t.v[i], a = t.o[i], n = t.i[i], s[0] === a[0] && s[1] === a[1] && s[0] === n[0] && s[1] === n[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = f = s[0] + (o[0] - s[0]) * h, c = m = s[1] - (s[1] - o[1]) * h, p = u - (u - s[0]) * E, d = c - (c - s[1]) * E, r.setTripleAt(u, c, p, d, f, m, v), v += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = p = s[0] + (o[0] - s[0]) * h, c = d = s[1] + (o[1] - s[1]) * h, f = u - (u - s[0]) * E, m = c - (c - s[1]) * E, r.setTripleAt(u, c, p, d, f, m, v), v += 1) : (r.setTripleAt(s[0], s[1], a[0], a[1], n[0], n[1], v), v += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], v), v += 1);
				return r
			}, qt.prototype.processShapes = function(t) {
				var e, i, r, s, n, a, o = this.shapes.length,
					l = this.rd.v;
				if (0 !== l)
					for (i = 0; i < o; i += 1) {
						if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
							for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], l));
						n.shape.paths = n.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, Zt.prototype.point = function(t) {
				return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
			}, Zt.prototype.derivative = function(t) {
				return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
			}, Zt.prototype.tangentAngle = function(t) {
				var e = this.derivative(t);
				return Math.atan2(e[1], e[0])
			}, Zt.prototype.normalAngle = function(t) {
				var e = this.derivative(t);
				return Math.atan2(e[0], e[1])
			}, Zt.prototype.inflectionPoints = function() {
				var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
				if (Gt(t)) return [];
				var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
					i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
				if (i < 0) return [];
				var r = Math.sqrt(i);
				return Gt(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
					return t > 0 && t < 1
				}))
			}, Zt.prototype.split = function(t) {
				if (t <= 0) return [Jt(this.points[0]), this];
				if (t >= 1) return [this, Jt(this.points[this.points.length - 1])];
				var e = Ut(this.points[0], this.points[1], t),
					i = Ut(this.points[1], this.points[2], t),
					r = Ut(this.points[2], this.points[3], t),
					s = Ut(e, i, t),
					n = Ut(i, r, t),
					a = Ut(s, n, t);
				return [new Zt(this.points[0], e, s, a, !0), new Zt(a, n, r, this.points[3], !0)]
			}, Zt.prototype.bounds = function() {
				return {
					x: Qt(this, 0),
					y: Qt(this, 1)
				}
			}, Zt.prototype.boundingBox = function() {
				var t = this.bounds();
				return {
					left: t.x.min,
					right: t.x.max,
					top: t.y.min,
					bottom: t.y.max,
					width: t.x.max - t.x.min,
					height: t.y.max - t.y.min,
					cx: (t.x.max + t.x.min) / 2,
					cy: (t.y.max + t.y.min) / 2
				}
			}, Zt.prototype.intersections = function(t, e, i) {
				void 0 === e && (e = 2), void 0 === i && (i = 7);
				var r = [];
				return ie(te(this, 0, 1), te(t, 0, 1), 0, e, r, i), r
			}, Zt.shapeSegment = function(t, e) {
				var i = (e + 1) % t.length();
				return new Zt(t.v[e], t.o[e], t.i[i], t.v[i], !0)
			}, Zt.shapeSegmentInverted = function(t, e) {
				var i = (e + 1) % t.length();
				return new Zt(t.v[i], t.i[i], t.o[e], t.v[e], !0)
			}, o([Vt], le), le.prototype.initModifierProperties = function(t, e) {
				this.getValue = this.processKeys, this.amplitude = yt.getProp(t, e.s, 0, null, this), this.frequency = yt.getProp(t, e.r, 0, null, this), this.pointsType = yt.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
			}, le.prototype.processPath = function(t, e, i, r) {
				var s = t._length,
					n = wt.newElement();
				if (n.c = t.c, t.c || (s -= 1), 0 === s) return n;
				var a = -1,
					o = Zt.shapeSegment(t, 0);
				ce(n, t, 0, e, i, r, a);
				for (var l = 0; l < s; l += 1) a = pe(n, o, e, i, r, -a), o = l !== s - 1 || t.c ? Zt.shapeSegment(t, (l + 1) % s) : null, ce(n, t, l + 1, e, i, r, a);
				return n
			}, le.prototype.processShapes = function(t) {
				var e, i, r, s, n, a, o = this.shapes.length,
					l = this.amplitude.v,
					h = Math.max(0, Math.round(this.frequency.v)),
					u = this.pointsType.v;
				if (0 !== l)
					for (i = 0; i < o; i += 1) {
						if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
							for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], l, h, u));
						n.shape.paths = n.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, o([Vt], De), De.prototype.initModifierProperties = function(t, e) {
				this.getValue = this.processKeys, this.amount = yt.getProp(t, e.a, 0, null, this), this.miterLimit = yt.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
			}, De.prototype.processPath = function(t, e, i, r) {
				var s = wt.newElement();
				s.c = t.c;
				var n, a, o, l = t.length();
				t.c || (l -= 1);
				var h = [];
				for (n = 0; n < l; n += 1) o = Zt.shapeSegment(t, n), h.push(ye(o, e));
				if (!t.c)
					for (n = l - 1; n >= 0; n -= 1) o = Zt.shapeSegmentInverted(t, n), h.push(ye(o, e));
				h = function(t) {
					for (var e, i = 1; i < t.length; i += 1) e = ve(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
					return t.length > 1 && (e = ve(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
				}(h);
				var u = null,
					c = null;
				for (n = 0; n < h.length; n += 1) {
					var p = h[n];
					for (c && (u = me(s, c, p[0], i, r)), c = p[p.length - 1], a = 0; a < p.length; a += 1) o = p[a], u && oe(o.points[0], u) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), u = o.points[3]
				}
				return h.length && me(s, c, h[0][0], i, r), s
			}, De.prototype.processShapes = function(t) {
				var e, i, r, s, n, a, o = this.shapes.length,
					l = this.amount.v,
					h = this.miterLimit.v,
					u = this.lineJoin;
				if (0 !== l)
					for (i = 0; i < o; i += 1) {
						if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
							for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], l, u, h));
						n.shape.paths = n.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			const _e = function() {
				var t = {
						w: 0,
						size: 0,
						shapes: [],
						data: {
							shapes: []
						}
					},
					e = [];
				e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
				var i = 127988,
					r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

				function s(t, e) {
					var i = a("span");
					i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
					var r = a("span");
					r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
					var s = r.offsetWidth;
					return r.style.fontFamily = function(t) {
						var e, i = t.split(","),
							r = i.length,
							s = [];
						for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
						return s.join(",")
					}(t) + ", " + e, {
						node: r,
						w: s,
						parent: i
					}
				}

				function n(t, e) {
					var i, r = document.body && e ? "svg" : "canvas",
						s = be(t);
					if ("svg" === r) {
						var n = q("text");
						n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", s.style), n.setAttribute("font-weight", s.weight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), i = n
					} else {
						var a = new OffscreenCanvas(500, 500).getContext("2d");
						a.font = s.style + " " + s.weight + " 100px " + t.fFamily, i = a
					}
					return {
						measureText: function(t) {
							return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
						}
					}
				}

				function o(t) {
					var e = 0,
						i = t.charCodeAt(0);
					if (i >= 55296 && i <= 56319) {
						var r = t.charCodeAt(1);
						r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
					}
					return e
				}

				function l(t) {
					var e = o(t);
					return e >= 127462 && e <= 127487
				}
				var h = function() {
					this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
				};
				h.isModifier = function(t, e) {
					var i = t.toString(16) + e.toString(16);
					return -1 !== r.indexOf(i)
				}, h.isZeroWidthJoiner = function(t) {
					return 8205 === t
				}, h.isFlagEmoji = function(t) {
					return l(t.substr(0, 2)) && l(t.substr(2, 2))
				}, h.isRegionalCode = l, h.isCombinedCharacter = function(t) {
					return -1 !== e.indexOf(t)
				}, h.isRegionalFlag = function(t, e) {
					var r = o(t.substr(e, 2));
					if (r !== i) return !1;
					var s = 0;
					for (e += 2; s < 5;) {
						if ((r = o(t.substr(e, 2))) < 917601 || r > 917626) return !1;
						s += 1, e += 2
					}
					return 917631 === o(t.substr(e, 2))
				}, h.isVariationSelector = function(t) {
					return 65039 === t
				}, h.BLACK_FLAG_CODE_POINT = i;
				var u = {
					addChars: function(t) {
						if (t) {
							var e;
							this.chars || (this.chars = []);
							var i, r, s = t.length,
								n = this.chars.length;
							for (e = 0; e < s; e += 1) {
								for (i = 0, r = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
								r || (this.chars.push(t[e]), n += 1)
							}
						}
					},
					addFonts: function(t, e) {
						if (t) {
							if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
							if (!document.body) return this.isLoaded = !0, t.list.forEach((t => {
								t.helper = n(t), t.cache = {}
							})), void(this.fonts = t.list);
							var i, r = t.list,
								o = r.length,
								l = o;
							for (i = 0; i < o; i += 1) {
								var h, u, c = !0;
								if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
									if ("p" === r[i].fOrigin || 3 === r[i].origin) {
										if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (c = !1), c) {
											var p = a("style");
											p.setAttribute("f-forigin", r[i].fOrigin), p.setAttribute("f-origin", r[i].origin), p.setAttribute("f-family", r[i].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(p)
										}
									} else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
										for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), u = 0; u < h.length; u += 1) - 1 !== h[u].href.indexOf(r[i].fPath) && (c = !1);
										if (c) {
											var d = a("link");
											d.setAttribute("f-forigin", r[i].fOrigin), d.setAttribute("f-origin", r[i].origin), d.type = "text/css", d.rel = "stylesheet", d.href = r[i].fPath, document.body.appendChild(d)
										}
									} else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
										for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), u = 0; u < h.length; u += 1) r[i].fPath === h[u].src && (c = !1);
										if (c) {
											var f = a("link");
											f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[i].fPath), e.appendChild(f)
										}
									}
								} else r[i].loaded = !0, l -= 1;
								r[i].helper = n(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
							}
							0 === l ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
						} else this.isLoaded = !0
					},
					getCharData: function(e, i, r) {
						for (var s = 0, n = this.chars.length; s < n;) {
							if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
							s += 1
						}
						return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
					},
					getFontByName: function(t) {
						for (var e = 0, i = this.fonts.length; e < i;) {
							if (this.fonts[e].fName === t) return this.fonts[e];
							e += 1
						}
						return this.fonts[0]
					},
					measureText: function(t, e, i) {
						var r = this.getFontByName(e),
							s = t;
						if (!r.cache[s]) {
							var n = r.helper;
							if (" " === t) {
								var a = n.measureText("|" + t + "|"),
									o = n.measureText("||");
								r.cache[s] = (a - o) / 100
							} else r.cache[s] = n.measureText(t) / 100
						}
						return r.cache[s] * i
					},
					checkLoadedFonts: function() {
						var t, e, i, r = this.fonts.length,
							s = r;
						for (t = 0; t < r; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
						0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
					},
					setIsLoaded: function() {
						this.isLoaded = !0
					}
				};
				return h.prototype = u, h
			}();

			function we(t) {
				this.animationData = t
			}

			function xe() {}
			we.prototype.getProp = function(t) {
				return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
			}, xe.prototype = {
				initRenderable: function() {
					this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
				},
				addRenderableComponent: function(t) {
					-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
				},
				removeRenderableComponent: function(t) {
					-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
				},
				prepareRenderableFrame: function(t) {
					this.checkLayerLimits(t)
				},
				checkTransparency: function() {
					this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
				},
				checkLayerLimits: function(t) {
					this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
				},
				renderRenderable: function() {
					var t, e = this.renderableComponents.length;
					for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
				},
				sourceRectAtTime: function() {
					return {
						top: 0,
						left: 0,
						width: 100,
						height: 100
					}
				},
				getLayerSize: function() {
					return 5 === this.data.ty ? {
						w: this.data.textData.width,
						h: this.data.textData.height
					} : {
						w: this.data.width,
						h: this.data.height
					}
				}
			};
			const Ce = (Ee = {
				0: "source-over",
				1: "multiply",
				2: "screen",
				3: "overlay",
				4: "darken",
				5: "lighten",
				6: "color-dodge",
				7: "color-burn",
				8: "hard-light",
				9: "soft-light",
				10: "difference",
				11: "exclusion",
				12: "hue",
				13: "saturation",
				14: "color",
				15: "luminosity"
			}, function(t) {
				return Ee[t] || ""
			});
			var Ee;

			function Te(t, e, i) {
				this.p = yt.getProp(e, t.v, 0, 0, i)
			}

			function Se(t, e, i) {
				this.p = yt.getProp(e, t.v, 0, 0, i)
			}

			function ke(t, e, i) {
				this.p = yt.getProp(e, t.v, 1, 0, i)
			}

			function Pe(t, e, i) {
				this.p = yt.getProp(e, t.v, 1, 0, i)
			}

			function Ae(t, e, i) {
				this.p = yt.getProp(e, t.v, 0, 0, i)
			}

			function Me(t, e, i) {
				this.p = yt.getProp(e, t.v, 0, 0, i)
			}

			function Fe(t, e, i) {
				this.p = yt.getProp(e, t.v, 0, 0, i)
			}

			function Le() {
				this.p = {}
			}

			function Ie(t, e) {
				var i, r = t.ef || [];
				this.effectElements = [];
				var s, n = r.length;
				for (i = 0; i < n; i += 1) s = new Oe(r[i], e), this.effectElements.push(s)
			}

			function Oe(t, e) {
				this.init(t, e)
			}

			function Re() {}

			function Be() {}

			function ze(t, e, i) {
				this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
			}

			function Ne(t, e, i) {
				this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
				var r = this.globalData.getAssetsPath(this.assetData);
				this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? yt.getProp(this, t.tm, 0, e.frameRate, this) : {
					_placeholder: !0
				}, this.lv = yt.getProp(this, t.au && t.au.lv ? t.au.lv : {
					k: [100]
				}, 1, .01, this)
			}

			function Ve() {}
			o([Dt], Oe), Oe.prototype.getValue = Oe.prototype.iterateDynamicProperties, Oe.prototype.init = function(t, e) {
				var i;
				this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
				var r, s = this.data.ef.length,
					n = this.data.ef;
				for (i = 0; i < s; i += 1) {
					switch (r = null, n[i].ty) {
						case 0:
							r = new Te(n[i], e, this);
							break;
						case 1:
							r = new Se(n[i], e, this);
							break;
						case 2:
							r = new ke(n[i], e, this);
							break;
						case 3:
							r = new Pe(n[i], e, this);
							break;
						case 4:
						case 7:
							r = new Fe(n[i], e, this);
							break;
						case 10:
							r = new Ae(n[i], e, this);
							break;
						case 11:
							r = new Me(n[i], e, this);
							break;
						case 5:
							r = new Ie(n[i], e, this);
							break;
						default:
							r = new Le(n[i], e, this)
					}
					r && this.effectElements.push(r)
				}
			}, Re.prototype = {
				checkMasks: function() {
					if (!this.data.hasMask) return !1;
					for (var t = 0, e = this.data.masksProperties.length; t < e;) {
						if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
						t += 1
					}
					return !1
				},
				initExpressions: function() {
					const t = Y();
					if (!t) return;
					const e = t("layer"),
						i = t("effects"),
						r = t("shape"),
						s = t("text"),
						n = t("comp");
					this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
					var a = i.createEffectsInterface(this, this.layerInterface);
					this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
				},
				setBlendMode: function() {
					var t = Ce(this.data.bm);
					(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
				},
				initBaseData: function(t, e, i) {
					this.globalData = e, this.comp = i, this.data = t, this.layerId = I(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Ie(this.data, this, this.dynamicProperties)
				},
				getType: function() {
					return this.type
				},
				sourceRectAtTime: function() {}
			}, Be.prototype = {
				initFrame: function() {
					this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
				},
				prepareProperties: function(t, e) {
					var i, r = this.dynamicProperties.length;
					for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
				},
				addDynamicProperty: function(t) {
					-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
				}
			}, ze.prototype.prepareFrame = function() {}, o([xe, Re, Be], ze), ze.prototype.getBaseElement = function() {
				return null
			}, ze.prototype.renderFrame = function() {}, ze.prototype.destroy = function() {}, ze.prototype.initExpressions = function() {
				const t = Y();
				if (!t) return;
				const e = t("footage");
				this.layerInterface = e(this)
			}, ze.prototype.getFootageData = function() {
				return this.footageData
			}, Ne.prototype.prepareFrame = function(t) {
				if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
				else {
					var e = this.tm.v;
					this._currentTime = e
				}
				this._volume = this.lv.v[0];
				var i = this._volume * this._volumeMultiplier;
				this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
			}, o([xe, Re, Be], Ne), Ne.prototype.renderFrame = function() {
				this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
			}, Ne.prototype.show = function() {}, Ne.prototype.hide = function() {
				this.audio.pause(), this._isPlaying = !1
			}, Ne.prototype.pause = function() {
				this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
			}, Ne.prototype.resume = function() {
				this._canPlay = !0
			}, Ne.prototype.setRate = function(t) {
				this.audio.rate(t)
			}, Ne.prototype.volume = function(t) {
				this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
			}, Ne.prototype.getBaseElement = function() {
				return null
			}, Ne.prototype.destroy = function() {}, Ne.prototype.sourceRectAtTime = function() {}, Ne.prototype.initExpressions = function() {}, Ve.prototype.checkLayers = function(t) {
				var e, i, r = this.layers.length;
				for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
				this.checkPendingElements()
			}, Ve.prototype.createItem = function(t) {
				switch (t.ty) {
					case 2:
						return this.createImage(t);
					case 0:
						return this.createComp(t);
					case 1:
						return this.createSolid(t);
					case 3:
					default:
						return this.createNull(t);
					case 4:
						return this.createShape(t);
					case 5:
						return this.createText(t);
					case 6:
						return this.createAudio(t);
					case 13:
						return this.createCamera(t);
					case 15:
						return this.createFootage(t)
				}
			}, Ve.prototype.createCamera = function() {
				throw new Error("You're using a 3d camera. Try the html renderer.")
			}, Ve.prototype.createAudio = function(t) {
				return new Ne(t, this.globalData, this)
			}, Ve.prototype.createFootage = function(t) {
				return new ze(t, this.globalData, this)
			}, Ve.prototype.buildAllItems = function() {
				var t, e = this.layers.length;
				for (t = 0; t < e; t += 1) this.buildItem(t);
				this.checkPendingElements()
			}, Ve.prototype.includeLayers = function(t) {
				var e;
				this.completeLayers = !1;
				var i, r = t.length,
					s = this.layers.length;
				for (e = 0; e < r; e += 1)
					for (i = 0; i < s;) {
						if (this.layers[i].id === t[e].id) {
							this.layers[i] = t[e];
							break
						}
						i += 1
					}
			}, Ve.prototype.setProjectInterface = function(t) {
				this.globalData.projectInterface = t
			}, Ve.prototype.initItems = function() {
				this.globalData.progressiveLoad || this.buildAllItems()
			}, Ve.prototype.buildElementParenting = function(t, e, i) {
				for (var r = this.elements, s = this.layers, n = 0, a = s.length; n < a;) s[n].ind == e && (r[n] && !0 !== r[n] ? (i.push(r[n]), r[n].setAsParent(), void 0 !== s[n].parent ? this.buildElementParenting(t, s[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
			}, Ve.prototype.addPendingElement = function(t) {
				this.pendingElements.push(t)
			}, Ve.prototype.searchExtraCompositions = function(t) {
				var e, i = t.length;
				for (e = 0; e < i; e += 1)
					if (t[e].xt) {
						var r = this.createComp(t[e]);
						r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
					}
			}, Ve.prototype.getElementById = function(t) {
				var e, i = this.elements.length;
				for (e = 0; e < i; e += 1)
					if (this.elements[e].data.ind === t) return this.elements[e];
				return null
			}, Ve.prototype.getElementByPath = function(t) {
				var e, i = t.shift();
				if ("number" == typeof i) e = this.elements[i];
				else {
					var r, s = this.elements.length;
					for (r = 0; r < s; r += 1)
						if (this.elements[r].data.nm === i) {
							e = this.elements[r];
							break
						}
				}
				return 0 === t.length ? e : e.getElementByPath(t)
			}, Ve.prototype.setupGlobalData = function(t, e) {
				this.globalData.fontManager = new _e, this.globalData.slotManager = function(t) {
					return new we(t)
				}(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
					w: t.w,
					h: t.h
				}
			};
			var Xe = "transformEFfect";

			function Ye() {}

			function He(t, e, i) {
				this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
				var r, s, a = this.globalData.defs,
					o = this.masksProperties ? this.masksProperties.length : 0;
				this.viewData = c(o), this.solidPath = "";
				var l, h, u, p, d, f, m = this.masksProperties,
					g = 0,
					v = [],
					y = I(),
					D = "clipPath",
					b = "clip-path";
				for (r = 0; r < o; r += 1)
					if (("a" !== m[r].mode && "n" !== m[r].mode || m[r].inv || 100 !== m[r].o.k || m[r].o.x) && (D = "mask", b = "mask"), "s" !== m[r].mode && "i" !== m[r].mode || 0 !== g ? u = null : ((u = q("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), v.push(u)), s = q("path"), "n" === m[r].mode) this.viewData[r] = {
						op: yt.getProp(this.element, m[r].o, 0, .01, this.element),
						prop: At.getShapeProp(this.element, m[r], 3),
						elem: s,
						lastPath: ""
					}, a.appendChild(s);
					else {
						var _;
						if (g += 1, s.setAttribute("fill", "s" === m[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== m[r].x.k ? (D = "mask", b = "mask", f = yt.getProp(this.element, m[r].x, 0, null, this.element), _ = I(), (p = q("filter")).setAttribute("id", _), (d = q("feMorphology")).setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), p.appendChild(d), a.appendChild(p), s.setAttribute("stroke", "s" === m[r].mode ? "#000000" : "#ffffff")) : (d = null, f = null), this.storedData[r] = {
								elem: s,
								x: f,
								expan: d,
								lastPath: "",
								lastOperator: "",
								filterId: _,
								lastRadius: 0
							}, "i" === m[r].mode) {
							h = v.length;
							var w = q("g");
							for (l = 0; l < h; l += 1) w.appendChild(v[l]);
							var x = q("mask");
							x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + g), x.appendChild(s), a.appendChild(x), w.setAttribute("mask", "url(" + n() + "#" + y + "_" + g + ")"), v.length = 0, v.push(w)
						} else v.push(s);
						m[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
							elem: s,
							lastPath: "",
							op: yt.getProp(this.element, m[r].o, 0, .01, this.element),
							prop: At.getShapeProp(this.element, m[r], 3),
							invRect: u
						}, this.viewData[r].prop.k || this.drawPath(m[r], this.viewData[r].prop.v, this.viewData[r])
					} for (this.maskElement = q(D), o = v.length, r = 0; r < o; r += 1) this.maskElement.appendChild(v[r]);
				g > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(b, "url(" + n() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
			}
			Ye.prototype = {
				initTransform: function() {
					var t = new Mt;
					this.finalTransform = {
						mProp: this.data.ks ? Ht.getTransformProperty(this, this.data.ks, this) : {
							o: 0
						},
						_matMdf: !1,
						_localMatMdf: !1,
						_opMdf: !1,
						mat: t,
						localMat: t,
						localOpacity: 1
					}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
				},
				renderTransform: function() {
					if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
						var t, e = this.finalTransform.mat,
							i = 0,
							r = this.hierarchy.length;
						if (!this.finalTransform._matMdf)
							for (; i < r;) {
								if (this.hierarchy[i].finalTransform.mProp._mdf) {
									this.finalTransform._matMdf = !0;
									break
								}
								i += 1
							}
						if (this.finalTransform._matMdf)
							for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
					}
					this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
				},
				renderLocalTransform: function() {
					if (this.localTransforms) {
						var t = 0,
							e = this.localTransforms.length;
						if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
							for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
						if (this.finalTransform._localMatMdf) {
							var i = this.finalTransform.localMat;
							for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
								var r = this.localTransforms[t].matrix;
								i.multiply(r)
							}
							i.multiply(this.finalTransform.mat)
						}
						if (this.finalTransform._opMdf) {
							var s = this.finalTransform.localOpacity;
							for (t = 0; t < e; t += 1) s *= .01 * this.localTransforms[t].opacity;
							this.finalTransform.localOpacity = s
						}
					}
				},
				searchEffectTransforms: function() {
					if (this.renderableEffectsManager) {
						var t = this.renderableEffectsManager.getEffects(Xe);
						if (t.length) {
							this.localTransforms = [], this.finalTransform.localMat = new Mt;
							var e = 0,
								i = t.length;
							for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
						}
					}
				},
				globalToLocal: function(t) {
					var e = [];
					e.push(this.finalTransform);
					for (var i, r = !0, s = this.comp; r;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
					var n, a = e.length;
					for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
					return t
				},
				mHelper: new Mt
			}, He.prototype.getMaskProperty = function(t) {
				return this.viewData[t].prop
			}, He.prototype.renderFrame = function(t) {
				var e, i = this.element.finalTransform.mat,
					r = this.masksProperties.length;
				for (e = 0; e < r; e += 1)
					if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
						var s = this.storedData[e].expan;
						this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + n() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
					}
			}, He.prototype.getMaskelement = function() {
				return this.maskElement
			}, He.prototype.createLayerSolidPath = function() {
				var t = "M0,0 ";
				return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
			}, He.prototype.drawPath = function(t, e, i) {
				var r, s, n = " M" + e.v[0][0] + "," + e.v[0][1];
				for (s = e._length, r = 1; r < s; r += 1) n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
				if (e.c && s > 1 && (n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
					var a = "";
					i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
				}
			}, He.prototype.destroy = function() {
				this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
			};
			const je = function() {
					var t = {};
					return t.createFilter = function(t, e) {
						var i = q("filter");
						i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
						return i
					}, t.createAlphaToLuminanceFilter = function() {
						var t = q("feColorMatrix");
						return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
					}, t
				}(),
				qe = function() {
					var t = {
						maskType: !0,
						svgLumaHidden: !0,
						offscreenCanvas: "undefined" != typeof OffscreenCanvas
					};
					return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
				}();
			var We = {},
				Ge = "filter_result_";

			function $e(t) {
				var e, i, r = "SourceGraphic",
					s = t.data.ef ? t.data.ef.length : 0,
					a = I(),
					o = je.createFilter(a, !0),
					l = 0;
				for (this.filters = [], e = 0; e < s; e += 1) {
					i = null;
					var h = t.data.ef[e].ty;
					if (We[h]) i = new(0, We[h].effect)(o, t.effectsManager.effectElements[e], t, Ge + l, r), r = Ge + l, We[h].countsAsEffect && (l += 1);
					i && this.filters.push(i)
				}
				l && (t.globalData.defs.appendChild(o), t.layerElement.setAttribute("filter", "url(" + n() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
			}

			function Ue() {}

			function Ke() {}

			function Je() {}

			function Ze(t, e, i) {
				this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
					top: 0,
					left: 0,
					width: this.assetData.w,
					height: this.assetData.h
				}
			}

			function Qe(t, e) {
				this.elem = t, this.pos = e
			}

			function ti() {}
			$e.prototype.renderFrame = function(t) {
				var e, i = this.filters.length;
				for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
			}, $e.prototype.getEffects = function(t) {
				var e, i = this.filters.length,
					r = [];
				for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
				return r
			}, Ue.prototype = {
				initRendererElement: function() {
					this.layerElement = q("g")
				},
				createContainerElements: function() {
					this.matteElement = q("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
					var t = null;
					if (this.data.td) {
						this.matteMasks = {};
						var e = q("g");
						e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
					} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
					if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
						var i = q("clipPath"),
							r = q("path");
						r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
						var s = I();
						if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
							var a = q("g");
							a.setAttribute("clip-path", "url(" + n() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
						} else this.layerElement.setAttribute("clip-path", "url(" + n() + "#" + s + ")")
					}
					0 !== this.data.bm && this.setBlendMode()
				},
				renderElement: function() {
					this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
				},
				destroyBaseElement: function() {
					this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
				},
				getBaseElement: function() {
					return this.data.hd ? null : this.baseElement
				},
				createRenderableComponents: function() {
					this.maskManager = new He(this.data, this, this.globalData), this.renderableEffectsManager = new $e(this), this.searchEffectTransforms()
				},
				getMatte: function(t) {
					if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
						var e, i, r, s, a = this.layerId + "_" + t;
						if (1 === t || 3 === t) {
							var o = q("mask");
							o.setAttribute("id", a), o.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (r = q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(r), this.globalData.defs.appendChild(o), qe.maskType || 1 !== t || (o.setAttribute("mask-type", "luminance"), e = I(), i = je.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(je.createAlphaToLuminanceFilter()), (s = q("g")).appendChild(r), o.appendChild(s), s.setAttribute("filter", "url(" + n() + "#" + e + ")"))
						} else if (2 === t) {
							var l = q("mask");
							l.setAttribute("id", a), l.setAttribute("mask-type", "alpha");
							var h = q("g");
							l.appendChild(h), e = I(), i = je.createFilter(e);
							var u = q("feComponentTransfer");
							u.setAttribute("in", "SourceGraphic"), i.appendChild(u);
							var c = q("feFuncA");
							c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), u.appendChild(c), this.globalData.defs.appendChild(i);
							var p = q("rect");
							p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + n() + "#" + e + ")"), h.appendChild(p), (r = q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(r), qe.maskType || (l.setAttribute("mask-type", "luminance"), i.appendChild(je.createAlphaToLuminanceFilter()), s = q("g"), h.appendChild(p), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(l)
						}
						this.matteMasks[t] = a
					}
					return this.matteMasks[t]
				},
				setMatte: function(t) {
					this.matteElement && this.matteElement.setAttribute("mask", "url(" + n() + "#" + t + ")")
				}
			}, Ke.prototype = {
				initHierarchy: function() {
					this.hierarchy = [], this._isParent = !1, this.checkParenting()
				},
				setHierarchy: function(t) {
					this.hierarchy = t
				},
				setAsParent: function() {
					this._isParent = !0
				},
				checkParenting: function() {
					void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
				}
			}, o([xe, l({
				initElement: function(t, e, i) {
					this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
				},
				hide: function() {
					this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
				},
				show: function() {
					this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
				},
				renderInnerContent: function() {},
				prepareFrame: function(t) {
					this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
				},
				destroy: function() {
					this.innerElem = null, this.destroyBaseElement()
				}
			})], Je), o([Re, Ye, Ue, Ke, Be, Je], Ze), Ze.prototype.createContent = function() {
				var t = this.globalData.getAssetsPath(this.assetData);
				this.innerElem = q("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
			}, Ze.prototype.sourceRectAtTime = function() {
				return this.sourceRect
			}, ti.prototype = {
				addShapeToModifiers: function(t) {
					var e, i = this.shapeModifiers.length;
					for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
				},
				isShapeInAnimatedModifiers: function(t) {
					for (var e = this.shapeModifiers.length; 0 < e;)
						if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
					return !1
				},
				renderModifiers: function() {
					if (this.shapeModifiers.length) {
						var t, e = this.shapes.length;
						for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
						for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
					}
				},
				searchProcessedElement: function(t) {
					for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
						if (e[i].elem === t) return e[i].pos;
						i += 1
					}
					return 0
				},
				addProcessedElement: function(t, e) {
					for (var i = this.processedElements, r = i.length; r;)
						if (i[r -= 1].elem === t) return void(i[r].pos = e);
					i.push(new Qe(t, e))
				},
				prepareFrame: function(t) {
					this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
				}
			};
			const ei = {
					1: "butt",
					2: "round",
					3: "square"
				},
				ii = {
					1: "miter",
					2: "round",
					3: "bevel"
				};

			function ri(t, e, i) {
				this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
				for (var r = 0, s = t.length; r < s;) {
					if (t[r].mProps.dynamicProperties.length) {
						this._isAnimated = !0;
						break
					}
					r += 1
				}
			}

			function si(t, e) {
				this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = q("path"), this.msElem = null
			}

			function ni(t, e, i, r) {
				var s;
				this.elem = t, this.frameId = -1, this.dataProps = c(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = u("float32", e.length ? e.length - 1 : 0), this.dashoffset = u("float32", 1), this.initDynamicPropertyContainer(r);
				var n, a = e.length || 0;
				for (s = 0; s < a; s += 1) n = yt.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
					n: e[s].n,
					p: n
				};
				this.k || this.getValue(!0), this._isAnimated = this.k
			}

			function ai(t, e, i) {
				this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = yt.getProp(t, e.o, 0, .01, this), this.w = yt.getProp(t, e.w, 0, null, this), this.d = new ni(t, e.d || {}, "svg", this), this.c = yt.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
			}

			function oi(t, e, i) {
				this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = yt.getProp(t, e.o, 0, .01, this), this.c = yt.getProp(t, e.c, 1, 255, this), this.style = i
			}

			function li(t, e, i) {
				this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
			}

			function hi(t, e, i) {
				this.data = e, this.c = u("uint8c", 4 * e.p);
				var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
				this.o = u("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = yt.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
			}

			function ui(t, e, i) {
				this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
			}

			function ci(t, e, i) {
				this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = yt.getProp(t, e.w, 0, null, this), this.d = new ni(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
			}

			function pi() {
				this.it = [], this.prevViewData = [], this.gr = q("g")
			}

			function di(t, e, i) {
				this.transform = {
					mProps: t,
					op: e,
					container: i
				}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
			}
			ri.prototype.setAsAnimated = function() {
				this._isAnimated = !0
			}, si.prototype.reset = function() {
				this.d = "", this._mdf = !1
			}, ni.prototype.getValue = function(t) {
				if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
					var e = 0,
						i = this.dataProps.length;
					for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
				}
			}, o([Dt], ni), o([Dt], ai), o([Dt], oi), o([Dt], li), hi.prototype.comparePoints = function(t, e) {
				for (var i = 0, r = this.o.length / 2; i < r;) {
					if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
					i += 1
				}
				return !0
			}, hi.prototype.checkCollapsable = function() {
				if (this.o.length / 2 != this.c.length / 4) return !1;
				if (this.data.k.k[0].s)
					for (var t = 0, e = this.data.k.k.length; t < e;) {
						if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
						t += 1
					} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
				return !0
			}, hi.prototype.getValue = function(t) {
				if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
					var e, i, r, s = 4 * this.data.p;
					for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
					if (this.o.length)
						for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
					this._mdf = !t
				}
			}, o([Dt], hi), ui.prototype.initGradientData = function(t, e, i) {
				this.o = yt.getProp(t, e.o, 0, .01, this), this.s = yt.getProp(t, e.s, 1, null, this), this.e = yt.getProp(t, e.e, 1, null, this), this.h = yt.getProp(t, e.h || {
					k: 0
				}, 0, .01, this), this.a = yt.getProp(t, e.a || {
					k: 0
				}, 0, C, this), this.g = new hi(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
			}, ui.prototype.setGradientData = function(t, e) {
				var i = I(),
					r = q(1 === e.t ? "linearGradient" : "radialGradient");
				r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
				var s, a, o, l = [];
				for (o = 4 * e.g.p, a = 0; a < o; a += 4) s = q("stop"), r.appendChild(s), l.push(s);
				t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + n() + "#" + i + ")"), this.gf = r, this.cst = l
			}, ui.prototype.setGradientOpacity = function(t, e) {
				if (this.g._hasOpacity && !this.g._collapsable) {
					var i, r, s, a = q("mask"),
						o = q("path");
					a.appendChild(o);
					var l = I(),
						h = I();
					a.setAttribute("id", h);
					var u = q(1 === t.t ? "linearGradient" : "radialGradient");
					u.setAttribute("id", l), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
					var c = this.stops;
					for (r = 4 * t.g.p; r < s; r += 2)(i = q("stop")).setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(i), c.push(i);
					o.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + n() + "#" + l + ")"), "gs" === t.ty && (o.setAttribute("stroke-linecap", ei[t.lc || 2]), o.setAttribute("stroke-linejoin", ii[t.lj || 2]), 1 === t.lj && o.setAttribute("stroke-miterlimit", t.ml)), this.of = u, this.ms = a, this.ost = c, this.maskId = h, e.msElem = o
				}
			}, o([Dt], ui), o([ui, Dt], ci);
			const fi = function(t, e, i, r) {
					if (0 === e) return "";
					var s, n = t.o,
						a = t.i,
						o = t.v,
						l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
					for (s = 1; s < e; s += 1) l += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[s][0], a[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
					return i && e && (l += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
				},
				mi = function() {
					var t = new Mt,
						e = new Mt;

					function i(t, e, i) {
						(i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
					}

					function r() {}

					function s(i, r, s) {
						var n, a, o, l, h, u, c, p, d, f, m = r.styles.length,
							g = r.lvl;
						for (u = 0; u < m; u += 1) {
							if (l = r.sh._mdf || s, r.styles[u].lvl < g) {
								for (p = e.reset(), d = g - r.styles[u].lvl, f = r.transformers.length - 1; !l && d > 0;) l = r.transformers[f].mProps._mdf || l, d -= 1, f -= 1;
								if (l)
									for (d = g - r.styles[u].lvl, f = r.transformers.length - 1; d > 0;) p.multiply(r.transformers[f].mProps.v), d -= 1, f -= 1
							} else p = t;
							if (a = (c = r.sh.paths)._length, l) {
								for (o = "", n = 0; n < a; n += 1)(h = c.shapes[n]) && h._length && (o += fi(h, h._length, h.c, p));
								r.caches[u] = o
							} else o = r.caches[u];
							r.styles[u].d += !0 === i.hd ? "" : o, r.styles[u]._mdf = l || r.styles[u]._mdf
						}
					}

					function n(t, e, i) {
						var r = e.style;
						(e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + b(e.c.v[0]) + "," + b(e.c.v[1]) + "," + b(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
					}

					function a(t, e, i) {
						o(t, e, i), l(t, e, i)
					}

					function o(t, e, i) {
						var r, s, n, a, o, l = e.gf,
							h = e.g._hasOpacity,
							u = e.s.v,
							c = e.e.v;
						if (e.o._mdf || i) {
							var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
							e.style.pElem.setAttribute(p, e.o.v)
						}
						if (e.s._mdf || i) {
							var d = 1 === t.t ? "x1" : "cx",
								f = "x1" === d ? "y1" : "cy";
							l.setAttribute(d, u[0]), l.setAttribute(f, u[1]), h && !e.g._collapsable && (e.of.setAttribute(d, u[0]), e.of.setAttribute(f, u[1]))
						}
						if (e.g._cmdf || i) {
							r = e.cst;
							var m = e.g.c;
							for (n = r.length, s = 0; s < n; s += 1)(a = r[s]).setAttribute("offset", m[4 * s] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * s + 1] + "," + m[4 * s + 2] + "," + m[4 * s + 3] + ")")
						}
						if (h && (e.g._omdf || i)) {
							var g = e.g.o;
							for (n = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < n; s += 1) a = r[s], e.g._collapsable || a.setAttribute("offset", g[2 * s] + "%"), a.setAttribute("stop-opacity", g[2 * s + 1])
						}
						if (1 === t.t)(e.e._mdf || i) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
						else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
							o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
							var v = Math.atan2(c[1] - u[1], c[0] - u[0]),
								y = e.h.v;
							y >= 1 ? y = .99 : y <= -1 && (y = -.99);
							var D = o * y,
								b = Math.cos(v + e.a.v) * D + u[0],
								_ = Math.sin(v + e.a.v) * D + u[1];
							l.setAttribute("fx", b), l.setAttribute("fy", _), h && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _))
						}
					}

					function l(t, e, i) {
						var r = e.style,
							s = e.d;
						s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + b(e.c.v[0]) + "," + b(e.c.v[1]) + "," + b(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
					}
					return {
						createRenderFunction: function(t) {
							switch (t.ty) {
								case "fl":
									return n;
								case "gf":
									return o;
								case "gs":
									return a;
								case "st":
									return l;
								case "sh":
								case "el":
								case "rc":
								case "sr":
									return s;
								case "tr":
									return i;
								case "no":
									return r;
								default:
									return null
							}
						}
					}
				}();

			function gi(t, e, i) {
				this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
			}

			function vi(t, e, i, r, s, n) {
				this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = n, this._mdf = {
					o: !0,
					sw: !!e,
					sc: !!i,
					fc: !!r,
					m: !0,
					p: !0
				}
			}

			function yi(t, e) {
				this._frameId = s, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
					ascent: 0,
					boxWidth: this.defaultBoxWidth,
					f: "",
					fStyle: "",
					fWeight: "",
					fc: "",
					j: "",
					justifyOffset: "",
					l: [],
					lh: 0,
					lineWidths: [],
					ls: "",
					of: "",
					s: "",
					sc: "",
					sw: 0,
					t: 0,
					tr: 0,
					sz: 0,
					ps: null,
					fillColorAnim: !1,
					strokeColorAnim: !1,
					strokeWidthAnim: !1,
					yOffset: 0,
					finalSize: 0,
					finalText: [],
					finalLineHeight: 0,
					__complete: !1
				}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
			}
			o([Re, Ye, Ue, ti, Ke, Be, Je], gi), gi.prototype.initSecondaryElement = function() {}, gi.prototype.identityMatrix = new Mt, gi.prototype.buildExpressionInterface = function() {}, gi.prototype.createContent = function() {
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
			}, gi.prototype.filterUniqueShapes = function() {
				var t, e, i, r, s = this.shapes.length,
					n = this.stylesList.length,
					a = [],
					o = !1;
				for (i = 0; i < n; i += 1) {
					for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
					a.length > 1 && o && this.setShapesAsAnimated(a)
				}
			}, gi.prototype.setShapesAsAnimated = function(t) {
				var e, i = t.length;
				for (e = 0; e < i; e += 1) t[e].setAsAnimated()
			}, gi.prototype.createStyleElement = function(t, e) {
				var i, r = new si(t, e),
					s = r.pElem;
				if ("st" === t.ty) i = new ai(this, t, r);
				else if ("fl" === t.ty) i = new oi(this, t, r);
				else if ("gf" === t.ty || "gs" === t.ty) {
					i = new("gf" === t.ty ? ui : ci)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + n() + "#" + i.maskId + ")"))
				} else "no" === t.ty && (i = new li(this, t, r));
				return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", ei[t.lc || 2]), s.setAttribute("stroke-linejoin", ii[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = Ce(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
			}, gi.prototype.createGroupElement = function(t) {
				var e = new pi;
				return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = Ce(t.bm)), e
			}, gi.prototype.createTransformElement = function(t, e) {
				var i = Ht.getTransformProperty(this, t, this),
					r = new di(i, i.o, e);
				return this.addToAnimatedContents(t, r), r
			}, gi.prototype.createShapeElement = function(t, e, i) {
				var r = 4;
				"rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
				var s = new ri(e, i, At.getShapeProp(this, t, r, this));
				return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
			}, gi.prototype.addToAnimatedContents = function(t, e) {
				for (var i = 0, r = this.animatedContents.length; i < r;) {
					if (this.animatedContents[i].element === e) return;
					i += 1
				}
				this.animatedContents.push({
					fn: mi.createRenderFunction(t),
					element: e,
					data: t
				})
			}, gi.prototype.setElementStyles = function(t) {
				var e, i = t.styles,
					r = this.stylesList.length;
				for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
			}, gi.prototype.reloadShapes = function() {
				var t;
				this._isFirstFrame = !0;
				var e = this.itemsData.length;
				for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
				for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
				this.renderModifiers()
			}, gi.prototype.searchShapes = function(t, e, i, r, s, n, a) {
				var o, l, h, u, c, p, d = [].concat(n),
					f = t.length - 1,
					m = [],
					g = [];
				for (o = f; o >= 0; o -= 1) {
					if ((p = this.searchProcessedElement(t[o])) ? e[o] = i[p - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
					else if ("gr" === t[o].ty) {
						if (p)
							for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
						else e[o] = this.createGroupElement(t[o]);
						this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, d, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
					} else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], r)), u = e[o].transform, d.push(u)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], d, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (c = e[o]).closed = !1 : ((c = Nt.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" === t[o].ty && (p ? (c = e[o]).closed = !0 : (c = Nt.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), a = !1), g.push(c));
					this.addProcessedElement(t[o], o + 1)
				}
				for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
				for (f = g.length, o = 0; o < f; o += 1) g[o].closed = !0
			}, gi.prototype.renderInnerContent = function() {
				var t;
				this.renderModifiers();
				var e = this.stylesList.length;
				for (t = 0; t < e; t += 1) this.stylesList[t].reset();
				for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
			}, gi.prototype.renderShape = function() {
				var t, e, i = this.animatedContents.length;
				for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
			}, gi.prototype.destroy = function() {
				this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
			}, vi.prototype.update = function(t, e, i, r, s, n) {
				this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
				var a = !1;
				return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
			}, yi.prototype.defaultBoxWidth = [0, 0], yi.prototype.copyData = function(t, e) {
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
				return t
			}, yi.prototype.setCurrentData = function(t) {
				t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
			}, yi.prototype.searchProperty = function() {
				return this.searchKeyframes()
			}, yi.prototype.searchKeyframes = function() {
				return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
			}, yi.prototype.addEffect = function(t) {
				this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
			}, yi.prototype.getValue = function(t) {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
					this.currentData.t = this.data.d.k[this.keysIndex].s.t;
					var e = this.currentData,
						i = this.keysIndex;
					if (this.lock) this.setCurrentData(this.currentData);
					else {
						var r;
						this.lock = !0, this._mdf = !1;
						var s = this.effectsSequence.length,
							n = t || this.data.d.k[this.keysIndex].s;
						for (r = 0; r < s; r += 1) n = i !== this.keysIndex ? this.effectsSequence[r](n, n.t) : this.effectsSequence[r](this.currentData, n.t);
						e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
				}
			}, yi.prototype.getKeyframeValue = function() {
				for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
				return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
			}, yi.prototype.buildFinalText = function(t) {
				for (var e, i, r = [], s = 0, n = t.length, a = !1, o = !1, l = ""; s < n;) a = o, o = !1, e = t.charCodeAt(s), l = t.charAt(s), _e.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? _e.isRegionalFlag(t, s) ? l = t.substr(s, 14) : (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 && (_e.isModifier(e, i) ? (l = t.substr(s, 2), a = !0) : l = _e.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2)) : e > 56319 ? (i = t.charCodeAt(s + 1), _e.isVariationSelector(e) && (a = !0)) : _e.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (r[r.length - 1] += l, a = !1) : r.push(l), s += l.length;
				return r
			}, yi.prototype.completeTextData = function(t) {
				t.__complete = !0;
				var e, i, r, s, n, a, o, l = this.elem.globalData.fontManager,
					h = this.data,
					u = [],
					c = 0,
					p = h.m.g,
					d = 0,
					f = 0,
					m = 0,
					g = [],
					v = 0,
					y = 0,
					D = l.getFontByName(t.f),
					b = 0,
					_ = be(D);
				t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
				var w, x = t.tr / 1e3 * t.finalSize;
				if (t.sz)
					for (var C, E, T = !0, S = t.sz[0], k = t.sz[1]; T;) {
						C = 0, v = 0, i = (E = this.buildFinalText(t.t)).length, x = t.tr / 1e3 * t.finalSize;
						var P = -1;
						for (e = 0; e < i; e += 1) w = E[e].charCodeAt(0), r = !1, " " === E[e] ? P = e : 13 !== w && 3 !== w || (v = 0, r = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(E[e], D.fStyle, D.fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = l.measureText(E[e], t.f, t.finalSize), v + b > S && " " !== E[e] ? (-1 === P ? i += 1 : e = P, C += t.finalLineHeight || 1.2 * t.finalSize, E.splice(e, P === e ? 1 : 0, "\r"), P = -1, v = 0) : (v += b, v += x);
						C += D.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = E, i = t.finalText.length, T = !1)
					}
				v = -x, b = 0;
				var A, M = 0;
				for (e = 0; e < i; e += 1)
					if (r = !1, 13 === (w = (A = t.finalText[e]).charCodeAt(0)) || 3 === w ? (M = 0, g.push(v), y = v > y ? v : y, v = -2 * x, s = "", r = !0, m += 1) : s = A, l.chars ? (o = l.getCharData(A, D.fStyle, l.getFontByName(t.f).fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = l.measureText(s, t.f, t.finalSize), " " === A ? M += b + x : (v += b + x + M, M = 0), u.push({
							l: b,
							an: b,
							add: d,
							n: r,
							anIndexes: [],
							val: s,
							line: m,
							animatorJustifyOffset: 0
						}), 2 == p) {
						if (d += b, "" === s || " " === s || e === i - 1) {
							for ("" !== s && " " !== s || (d -= b); f <= e;) u[f].an = d, u[f].ind = c, u[f].extra = b, f += 1;
							c += 1, d = 0
						}
					} else if (3 == p) {
					if (d += b, "" === s || e === i - 1) {
						for ("" === s && (d -= b); f <= e;) u[f].an = d, u[f].ind = c, u[f].extra = b, f += 1;
						d = 0, c += 1
					}
				} else u[c].ind = c, u[c].extra = 0, c += 1;
				if (t.l = u, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
				else switch (t.boxWidth = y, t.j) {
					case 1:
						t.justifyOffset = -t.boxWidth;
						break;
					case 2:
						t.justifyOffset = -t.boxWidth / 2;
						break;
					default:
						t.justifyOffset = 0
				}
				t.lineWidths = g;
				var F, L, I, O, R = h.a;
				a = R.length;
				var B = [];
				for (n = 0; n < a; n += 1) {
					for ((F = R[n]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), O = 0, I = F.s.b, e = 0; e < i; e += 1)(L = u[e]).anIndexes[n] = O, (1 == I && "" !== L.val || 2 == I && "" !== L.val && " " !== L.val || 3 == I && (L.n || " " == L.val || e == i - 1) || 4 == I && (L.n || e == i - 1)) && (1 === F.s.rn && B.push(O), O += 1);
					h.a[n].s.totalChars = O;
					var z, N = -1;
					if (1 === F.s.rn)
						for (e = 0; e < i; e += 1) N != (L = u[e]).anIndexes[n] && (N = L.anIndexes[n], z = B.splice(Math.floor(Math.random() * B.length), 1)[0]), L.anIndexes[n] = z
				}
				t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = D.ascent * t.finalSize / 100
			}, yi.prototype.updateDocumentData = function(t, e) {
				e = void 0 === e ? this.keysIndex : e;
				var i = this.copyData({}, this.data.d.k[e].s);
				i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
			}, yi.prototype.recalculate = function(t) {
				var e = this.data.d.k[t].s;
				e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
			}, yi.prototype.canResizeFont = function(t) {
				this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			}, yi.prototype.setMinimumFontSize = function(t) {
				this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			};
			const Di = function() {
				var t = Math.max,
					e = Math.min,
					i = Math.floor;

				function r(t, e) {
					this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = yt.getProp(t, e.s || {
						k: 0
					}, 0, 0, this), this.e = "e" in e ? yt.getProp(t, e.e, 0, 0, this) : {
						v: 100
					}, this.o = yt.getProp(t, e.o || {
						k: 0
					}, 0, 0, this), this.xe = yt.getProp(t, e.xe || {
						k: 0
					}, 0, 0, this), this.ne = yt.getProp(t, e.ne || {
						k: 0
					}, 0, 0, this), this.sm = yt.getProp(t, e.sm || {
						k: 100
					}, 0, 0, this), this.a = yt.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
				}
				return r.prototype = {
					getMult: function(r) {
						this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
						var s = 0,
							n = 0,
							a = 1,
							o = 1;
						this.ne.v > 0 ? s = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
						var l = tt.getBezierEasing(s, n, a, o).get,
							h = 0,
							u = this.finalS,
							c = this.finalE,
							p = this.data.sh;
						if (2 === p) h = l(h = c === u ? r >= c ? 1 : 0 : t(0, e(.5 / (c - u) + (r - u) / (c - u), 1)));
						else if (3 === p) h = l(h = c === u ? r >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - u) + (r - u) / (c - u), 1)));
						else if (4 === p) c === u ? h = 0 : (h = t(0, e(.5 / (c - u) + (r - u) / (c - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
						else if (5 === p) {
							if (c === u) h = 0;
							else {
								var d = c - u,
									f = -d / 2 + (r = e(t(0, r + .5 - u), c - u)),
									m = d / 2;
								h = Math.sqrt(1 - f * f / (m * m))
							}
							h = l(h)
						} else 6 === p ? (c === u ? h = 0 : (r = e(t(0, r + .5 - u), c - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (c - u))) / 2), h = l(h)) : (r >= i(u) && (h = t(0, e(r - u < 0 ? e(c, 1) - (u - r) : c - r, 1))), h = l(h));
						if (100 !== this.sm.v) {
							var g = .01 * this.sm.v;
							0 === g && (g = 1e-8);
							var v = .5 - .5 * g;
							h < v ? h = 0 : (h = (h - v) / g) > 1 && (h = 1)
						}
						return h * this.a.v
					},
					getValue: function(t) {
						this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
						var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
							i = this.o.v / e,
							r = this.s.v / e + i,
							s = this.e.v / e + i;
						if (r > s) {
							var n = r;
							r = s, s = n
						}
						this.finalS = r, this.finalE = s
					}
				}, o([Dt], r), {
					getTextSelectorProp: function(t, e, i) {
						return new r(t, e, i)
					}
				}
			}();

			function bi(t, e, i) {
				var r = {
						propType: !1
					},
					s = yt.getProp,
					n = e.a;
				this.a = {
					r: n.r ? s(t, n.r, 0, C, i) : r,
					rx: n.rx ? s(t, n.rx, 0, C, i) : r,
					ry: n.ry ? s(t, n.ry, 0, C, i) : r,
					sk: n.sk ? s(t, n.sk, 0, C, i) : r,
					sa: n.sa ? s(t, n.sa, 0, C, i) : r,
					s: n.s ? s(t, n.s, 1, .01, i) : r,
					a: n.a ? s(t, n.a, 1, 0, i) : r,
					o: n.o ? s(t, n.o, 0, .01, i) : r,
					p: n.p ? s(t, n.p, 1, 0, i) : r,
					sw: n.sw ? s(t, n.sw, 0, 0, i) : r,
					sc: n.sc ? s(t, n.sc, 1, 0, i) : r,
					fc: n.fc ? s(t, n.fc, 1, 0, i) : r,
					fh: n.fh ? s(t, n.fh, 0, 0, i) : r,
					fs: n.fs ? s(t, n.fs, 0, .01, i) : r,
					fb: n.fb ? s(t, n.fb, 0, .01, i) : r,
					t: n.t ? s(t, n.t, 0, 0, i) : r
				}, this.s = Di.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
			}

			function _i(t, e, i) {
				this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = c(this._textData.a.length), this._pathData = {}, this._moreOptions = {
					alignment: {}
				}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
			}

			function wi() {}
			_i.prototype.searchProperties = function() {
				var t, e, i = this._textData.a.length,
					r = yt.getProp;
				for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new bi(this._elem, e, this);
				this._textData.p && "m" in this._textData.p ? (this._pathData = {
					a: r(this._elem, this._textData.p.a, 0, 0, this),
					f: r(this._elem, this._textData.p.f, 0, 0, this),
					l: r(this._elem, this._textData.p.l, 0, 0, this),
					r: r(this._elem, this._textData.p.r, 0, 0, this),
					p: r(this._elem, this._textData.p.p, 0, 0, this),
					m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
				}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
			}, _i.prototype.getMeasures = function(t, e) {
				if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
					this._isFirstFrame = !1;
					var i, r, s, n, a, o, l, h, u, c, p, d, f, m, g, v, y, D, b, _ = this._moreOptions.alignment.v,
						w = this._animatorsData,
						x = this._textData,
						C = this.mHelper,
						E = this._renderType,
						T = this.renderedLetters.length,
						S = t.l;
					if (this._hasMaskedPath) {
						if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
							var k, P = b.v;
							for (this._pathData.r.v && (P = P.reverse()), a = {
									tLength: 0,
									segments: []
								}, n = P._length - 1, v = 0, s = 0; s < n; s += 1) k = nt.buildBezierData(P.v[s], P.v[s + 1], [P.o[s][0] - P.v[s][0], P.o[s][1] - P.v[s][1]], [P.i[s + 1][0] - P.v[s + 1][0], P.i[s + 1][1] - P.v[s + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), v += k.segmentLength;
							s = n, b.v.c && (k = nt.buildBezierData(P.v[s], P.v[0], [P.o[s][0] - P.v[s][0], P.o[s][1] - P.v[s][1]], [P.i[0][0] - P.v[0][0], P.i[0][1] - P.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), v += k.segmentLength), this._pathData.pi = a
						}
						if (a = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, h = 0, u = !0, m = a.segments, o < 0 && b.v.c)
							for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (f = m[p = m.length - 1].points).length - 1; o < 0;) o += f[c].partialLength, (c -= 1) < 0 && (c = (f = m[p -= 1].points).length - 1);
						d = (f = m[p].points)[c - 1], g = (l = f[c]).partialLength
					}
					n = S.length, i = 0, r = 0;
					var A, M, F, L, I, O = 1.2 * t.finalSize * .714,
						R = !0;
					F = w.length;
					var B, X, Y, H, j, q, W, G, $, U, K, J, Z = -1,
						Q = o,
						tt = p,
						et = c,
						it = -1,
						rt = "",
						st = this.defaultPropsArray;
					if (2 === t.j || 1 === t.j) {
						var at = 0,
							ot = 0,
							lt = 2 === t.j ? -.5 : -1,
							ht = 0,
							ut = !0;
						for (s = 0; s < n; s += 1)
							if (S[s].n) {
								for (at && (at += ot); ht < s;) S[ht].animatorJustifyOffset = at, ht += 1;
								at = 0, ut = !0
							} else {
								for (M = 0; M < F; M += 1)(A = w[M].a).t.propType && (ut && 2 === t.j && (ot += A.t.v * lt), (I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars)).length ? at += A.t.v * I[0] * lt : at += A.t.v * I * lt);
								ut = !1
							} for (at && (at += ot); ht < s;) S[ht].animatorJustifyOffset = at, ht += 1
					}
					for (s = 0; s < n; s += 1) {
						if (C.reset(), H = 1, S[s].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = Q, R = !1, this._hasMaskedPath && (c = et, d = (f = m[p = tt].points)[c - 1], g = (l = f[c]).partialLength, h = 0), rt = "", K = "", $ = "", J = "", st = this.defaultPropsArray;
						else {
							if (this._hasMaskedPath) {
								if (it !== S[s].line) {
									switch (t.j) {
										case 1:
											o += v - t.lineWidths[S[s].line];
											break;
										case 2:
											o += (v - t.lineWidths[S[s].line]) / 2
									}
									it = S[s].line
								}
								Z !== S[s].ind && (S[Z] && (o += S[Z].extra), o += S[s].an / 2, Z = S[s].ind), o += _[0] * S[s].an * .005;
								var ct = 0;
								for (M = 0; M < F; M += 1)(A = w[M].a).p.propType && ((I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars)).length ? ct += A.p.v[0] * I[0] : ct += A.p.v[0] * I), A.a.propType && ((I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars)).length ? ct += A.a.v[0] * I[0] : ct += A.a.v[0] * I);
								for (u = !0, this._pathData.a.v && (o = .5 * S[0].an + (v - this._pathData.f.v - .5 * S[0].an - .5 * S[S.length - 1].an) * Z / (n - 1), o += this._pathData.f.v); u;) h + g >= o + ct || !f ? (y = (o + ct - h) / l.partialLength, X = d.point[0] + (l.point[0] - d.point[0]) * y, Y = d.point[1] + (l.point[1] - d.point[1]) * y, C.translate(-_[0] * S[s].an * .005, -_[1] * O * .01), u = !1) : f && (h += l.partialLength, (c += 1) >= f.length && (c = 0, m[p += 1] ? f = m[p].points : b.v.c ? (c = 0, f = m[p = 0].points) : (h -= l.partialLength, f = null)), f && (d = l, g = (l = f[c]).partialLength));
								B = S[s].an / 2 - S[s].add, C.translate(-B, 0, 0)
							} else B = S[s].an / 2 - S[s].add, C.translate(-B, 0, 0), C.translate(-_[0] * S[s].an * .005, -_[1] * O * .01, 0);
							for (M = 0; M < F; M += 1)(A = w[M].a).t.propType && (I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? I.length ? o += A.t.v * I[0] : o += A.t.v * I : I.length ? i += A.t.v * I[0] : i += A.t.v * I));
							for (t.strokeWidthAnim && (q = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < F; M += 1)(A = w[M].a).a.propType && ((I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars)).length ? C.translate(-A.a.v[0] * I[0], -A.a.v[1] * I[1], A.a.v[2] * I[2]) : C.translate(-A.a.v[0] * I, -A.a.v[1] * I, A.a.v[2] * I));
							for (M = 0; M < F; M += 1)(A = w[M].a).s.propType && ((I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars)).length ? C.scale(1 + (A.s.v[0] - 1) * I[0], 1 + (A.s.v[1] - 1) * I[1], 1) : C.scale(1 + (A.s.v[0] - 1) * I, 1 + (A.s.v[1] - 1) * I, 1));
							for (M = 0; M < F; M += 1) {
								if (A = w[M].a, I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars), A.sk.propType && (I.length ? C.skewFromAxis(-A.sk.v * I[0], A.sa.v * I[1]) : C.skewFromAxis(-A.sk.v * I, A.sa.v * I)), A.r.propType && (I.length ? C.rotateZ(-A.r.v * I[2]) : C.rotateZ(-A.r.v * I)), A.ry.propType && (I.length ? C.rotateY(A.ry.v * I[1]) : C.rotateY(A.ry.v * I)), A.rx.propType && (I.length ? C.rotateX(A.rx.v * I[0]) : C.rotateX(A.rx.v * I)), A.o.propType && (I.length ? H += (A.o.v * I[0] - H) * I[0] : H += (A.o.v * I - H) * I), t.strokeWidthAnim && A.sw.propType && (I.length ? q += A.sw.v * I[0] : q += A.sw.v * I), t.strokeColorAnim && A.sc.propType)
									for (G = 0; G < 3; G += 1) I.length ? j[G] += (A.sc.v[G] - j[G]) * I[0] : j[G] += (A.sc.v[G] - j[G]) * I;
								if (t.fillColorAnim && t.fc) {
									if (A.fc.propType)
										for (G = 0; G < 3; G += 1) I.length ? W[G] += (A.fc.v[G] - W[G]) * I[0] : W[G] += (A.fc.v[G] - W[G]) * I;
									A.fh.propType && (W = I.length ? V(W, A.fh.v * I[0]) : V(W, A.fh.v * I)), A.fs.propType && (W = I.length ? z(W, A.fs.v * I[0]) : z(W, A.fs.v * I)), A.fb.propType && (W = I.length ? N(W, A.fb.v * I[0]) : N(W, A.fb.v * I))
								}
							}
							for (M = 0; M < F; M += 1)(A = w[M].a).p.propType && (I = w[M].s.getMult(S[s].anIndexes[M], x.a[M].s.totalChars), this._hasMaskedPath ? I.length ? C.translate(0, A.p.v[1] * I[0], -A.p.v[2] * I[1]) : C.translate(0, A.p.v[1] * I, -A.p.v[2] * I) : I.length ? C.translate(A.p.v[0] * I[0], A.p.v[1] * I[1], -A.p.v[2] * I[2]) : C.translate(A.p.v[0] * I, A.p.v[1] * I, -A.p.v[2] * I));
							if (t.strokeWidthAnim && ($ = q < 0 ? 0 : q), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (K = "rgb(" + Math.round(255 * W[0]) + "," + Math.round(255 * W[1]) + "," + Math.round(255 * W[2]) + ")"), this._hasMaskedPath) {
								if (C.translate(0, -t.ls), C.translate(0, _[1] * O * .01 + r, 0), this._pathData.p.v) {
									D = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
									var pt = 180 * Math.atan(D) / Math.PI;
									l.point[0] < d.point[0] && (pt += 180), C.rotate(-pt * Math.PI / 180)
								}
								C.translate(X, Y, 0), o -= _[0] * S[s].an * .005, S[s + 1] && Z !== S[s + 1].ind && (o += S[s].an / 2, o += .001 * t.tr * t.finalSize)
							} else {
								switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
									case 1:
										C.translate(S[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[s].line]), 0, 0);
										break;
									case 2:
										C.translate(S[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[s].line]) / 2, 0, 0)
								}
								C.translate(0, -t.ls), C.translate(B, 0, 0), C.translate(_[0] * S[s].an * .005, _[1] * O * .01, 0), i += S[s].l + .001 * t.tr * t.finalSize
							}
							"html" === E ? rt = C.toCSS() : "svg" === E ? rt = C.to2dCSS() : st = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], J = H
						}
						T <= s ? (L = new vi(J, $, U, K, rt, st), this.renderedLetters.push(L), T += 1, this.lettersChangedFlag = !0) : (L = this.renderedLetters[s], this.lettersChangedFlag = L.update(J, $, U, K, rt, st) || this.lettersChangedFlag)
					}
				}
			}, _i.prototype.getValue = function() {
				this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
			}, _i.prototype.mHelper = new Mt, _i.prototype.defaultPropsArray = [], o([Dt], _i), wi.prototype.initElement = function(t, e, i) {
				this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new yi(this, t.t, this.dynamicProperties), this.textAnimator = new _i(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
			}, wi.prototype.prepareFrame = function(t) {
				this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
			}, wi.prototype.createPathShape = function(t, e) {
				var i, r, s = e.length,
					n = "";
				for (i = 0; i < s; i += 1) "sh" === e[i].ty && (r = e[i].ks.k, n += fi(r, r.i.length, !0, t));
				return n
			}, wi.prototype.updateDocumentData = function(t, e) {
				this.textProperty.updateDocumentData(t, e)
			}, wi.prototype.canResizeFont = function(t) {
				this.textProperty.canResizeFont(t)
			}, wi.prototype.setMinimumFontSize = function(t) {
				this.textProperty.setMinimumFontSize(t)
			}, wi.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
				switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
					case 1:
						e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
						break;
					case 2:
						e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
				}
				e.translate(r, s, 0)
			}, wi.prototype.buildColor = function(t) {
				return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
			}, wi.prototype.emptyProp = new vi, wi.prototype.destroy = function() {}, wi.prototype.validateText = function() {
				(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
			};
			var xi, Ci = {
				shapes: []
			};

			function Ei(t, e, i) {
				this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
			}

			function Ti(t, e, i) {
				this.initElement(t, e, i)
			}

			function Si(t, e, i) {
				this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
			}

			function ki() {}

			function Pi() {}

			function Ai(t, e, i) {
				this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? c(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? yt.getProp(this, t.tm, 0, e.frameRate, this) : {
					_placeholder: !0
				}
			}

			function Mi(t, e) {
				this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = q("svg");
				var i = "";
				if (e && e.title) {
					var r = q("title"),
						s = I();
					r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
				}
				if (e && e.description) {
					var n = q("desc"),
						a = I();
					n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
				}
				i && this.svgElement.setAttribute("aria-labelledby", i);
				var o = q("defs");
				this.svgElement.appendChild(o);
				var l = q("g");
				this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
					preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
					imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
					contentVisibility: e && e.contentVisibility || "visible",
					progressiveLoad: e && e.progressiveLoad || !1,
					hideOnTransparent: !(e && !1 === e.hideOnTransparent),
					viewBoxOnly: e && e.viewBoxOnly || !1,
					viewBoxSize: e && e.viewBoxSize || !1,
					className: e && e.className || "",
					id: e && e.id || "",
					focusable: e && e.focusable,
					filterSize: {
						width: e && e.filterSize && e.filterSize.width || "100%",
						height: e && e.filterSize && e.filterSize.height || "100%",
						x: e && e.filterSize && e.filterSize.x || "0%",
						y: e && e.filterSize && e.filterSize.y || "0%"
					},
					width: e && e.width,
					height: e && e.height,
					runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					defs: o,
					renderConfig: this.renderConfig
				}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
			}
			o([Re, Ye, Ue, Ke, Be, Je, wi], Ei), Ei.prototype.createContent = function() {
				this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = q("text"))
			}, Ei.prototype.buildTextContents = function(t) {
				for (var e = 0, i = t.length, r = [], s = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
				return r.push(s), r
			}, Ei.prototype.buildShapeData = function(t, e) {
				if (t.shapes && t.shapes.length) {
					var i = t.shapes[0];
					if (i.it) {
						var r = i.it[i.it.length - 1];
						r.s && (r.s.k[0] = e, r.s.k[1] = e)
					}
				}
				return t
			}, Ei.prototype.buildNewText = function() {
				var t, e;
				this.addDynamicProperty(this);
				var i = this.textProperty.currentData;
				this.renderedLetters = c(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
				var r = this.globalData.fontManager.getFontByName(i.f);
				if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
				else {
					this.layerElement.setAttribute("font-family", r.fFamily);
					var s = i.fWeight,
						n = i.fStyle;
					this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
				}
				this.layerElement.setAttribute("aria-label", i.t);
				var a, o = i.l || [],
					l = !!this.globalData.fontManager.chars;
				e = o.length;
				var h = this.mHelper,
					u = this.data.singleShape,
					p = 0,
					d = 0,
					f = !0,
					m = .001 * i.tr * i.finalSize;
				if (!u || l || i.sz) {
					var g, v = this.textSpans.length;
					for (t = 0; t < e; t += 1) {
						if (this.textSpans[t] || (this.textSpans[t] = {
								span: null,
								childSpan: null,
								glyph: null
							}), !l || !u || 0 === t) {
							if (a = v > t ? this.textSpans[t].span : q(l ? "g" : "text"), v <= t) {
								if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, l) {
									var y = q("g");
									a.appendChild(y), this.textSpans[t].childSpan = y
								}
								this.textSpans[t].span = a, this.layerElement.appendChild(a)
							}
							a.style.display = "inherit"
						}
						if (h.reset(), u && (o[t].n && (p = -m, d += i.yOffset, d += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, h, o[t].line, p, d), p += o[t].l || 0, p += m), l) {
							var D;
							if (1 === (g = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) D = new Ai(g.data, this.globalData, this);
							else {
								var b = Ci;
								g.data && g.data.shapes && (b = this.buildShapeData(g.data, i.finalSize)), D = new gi(b, this.globalData, this)
							}
							if (this.textSpans[t].glyph) {
								var _ = this.textSpans[t].glyph;
								this.textSpans[t].childSpan.removeChild(_.layerElement), _.destroy()
							}
							this.textSpans[t].glyph = D, D._debug = !0, D.prepareFrame(0), D.renderFrame(), this.textSpans[t].childSpan.appendChild(D.layerElement), 1 === g.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
						} else u && a.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
					}
					u && a && a.setAttribute("d", "")
				} else {
					var w = this.textContainer,
						x = "start";
					switch (i.j) {
						case 1:
							x = "end";
							break;
						case 2:
							x = "middle";
							break;
						default:
							x = "start"
					}
					w.setAttribute("text-anchor", x), w.setAttribute("letter-spacing", m);
					var C = this.buildTextContents(i.finalText);
					for (e = C.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || q("tspan")).textContent = C[t], a.setAttribute("x", 0), a.setAttribute("y", d), a.style.display = "inherit", w.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
						span: null,
						glyph: null
					}), this.textSpans[t].span = a, d += i.finalLineHeight;
					this.layerElement.appendChild(w)
				}
				for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
				this._sizeChanged = !0
			}, Ei.prototype.sourceRectAtTime = function() {
				if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
					this._sizeChanged = !1;
					var t = this.layerElement.getBBox();
					this.bbox = {
						top: t.y,
						left: t.x,
						width: t.width,
						height: t.height
					}
				}
				return this.bbox
			}, Ei.prototype.getValue = function() {
				var t, e, i = this.textSpans.length;
				for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
			}, Ei.prototype.renderInnerContent = function() {
				if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
					var t, e;
					this._sizeChanged = !0;
					var i, r, s, n = this.textAnimator.renderedLetters,
						a = this.textProperty.currentData.l;
					for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = n[t], r = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
				}
			}, o([Ze], Ti), Ti.prototype.createContent = function() {
				var t = q("rect");
				t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
			}, Si.prototype.prepareFrame = function(t) {
				this.prepareProperties(t, !0)
			}, Si.prototype.renderFrame = function() {}, Si.prototype.getBaseElement = function() {
				return null
			}, Si.prototype.destroy = function() {}, Si.prototype.sourceRectAtTime = function() {}, Si.prototype.hide = function() {}, o([Re, Ye, Ke, Be], Si), o([Ve], ki), ki.prototype.createNull = function(t) {
				return new Si(t, this.globalData, this)
			}, ki.prototype.createShape = function(t) {
				return new gi(t, this.globalData, this)
			}, ki.prototype.createText = function(t) {
				return new Ei(t, this.globalData, this)
			}, ki.prototype.createImage = function(t) {
				return new Ze(t, this.globalData, this)
			}, ki.prototype.createSolid = function(t) {
				return new Ti(t, this.globalData, this)
			}, ki.prototype.configAnimation = function(t) {
				this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
				var e = this.globalData.defs;
				this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
				var i = q("clipPath"),
					r = q("rect");
				r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
				var s = I();
				i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + n() + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = c(t.layers.length)
			}, ki.prototype.destroy = function() {
				var t;
				this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
				var e = this.layers ? this.layers.length : 0;
				for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
				this.elements.length = 0, this.destroyed = !0, this.animationItem = null
			}, ki.prototype.updateContainerSize = function() {}, ki.prototype.findIndexByInd = function(t) {
				var e = 0,
					i = this.layers.length;
				for (e = 0; e < i; e += 1)
					if (this.layers[e].ind === t) return e;
				return -1
			}, ki.prototype.buildItem = function(t) {
				var e = this.elements;
				if (!e[t] && 99 !== this.layers[t].ty) {
					e[t] = !0;
					var i = this.createItem(this.layers[t]);
					if (e[t] = i, X() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
						var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
						if (-1 === r) return;
						if (this.elements[r] && !0 !== this.elements[r]) {
							var s = e[r].getMatte(this.layers[t].tt);
							i.setMatte(s)
						} else this.buildItem(r), this.addPendingElement(i)
					}
				}
			}, ki.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) {
					var t = this.pendingElements.pop();
					if (t.checkParenting(), t.data.tt)
						for (var e = 0, i = this.elements.length; e < i;) {
							if (this.elements[e] === t) {
								var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
									s = this.elements[r].getMatte(this.layers[e].tt);
								t.setMatte(s);
								break
							}
							e += 1
						}
				}
			}, ki.prototype.renderFrame = function(t) {
				if (this.renderedFrame !== t && !this.destroyed) {
					var e;
					null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
					var i = this.layers.length;
					for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
					if (this.globalData._mdf)
						for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
				}
			}, ki.prototype.appendElementInPos = function(t, e) {
				var i = t.getBaseElement();
				if (i) {
					for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
					r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
				}
			}, ki.prototype.hide = function() {
				this.layerElement.style.display = "none"
			}, ki.prototype.show = function() {
				this.layerElement.style.display = "block"
			}, o([Re, Ye, Ke, Be, Je], Pi), Pi.prototype.initElement = function(t, e, i) {
				this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
			}, Pi.prototype.prepareFrame = function(t) {
				if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
					if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
					else {
						var e = this.tm.v;
						e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
					}
					var i, r = this.elements.length;
					for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
				}
			}, Pi.prototype.renderInnerContent = function() {
				var t, e = this.layers.length;
				for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
			}, Pi.prototype.setElements = function(t) {
				this.elements = t
			}, Pi.prototype.getElements = function() {
				return this.elements
			}, Pi.prototype.destroyElements = function() {
				var t, e = this.layers.length;
				for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
			}, Pi.prototype.destroy = function() {
				this.destroyElements(), this.destroyBaseElement()
			}, o([ki, Pi, Ue], Ai), Ai.prototype.createComp = function(t) {
				return new Ai(t, this.globalData, this)
			}, o([ki], Mi), Mi.prototype.createComp = function(t) {
				return new Ai(t, this.globalData, this)
			}, xi = Mi, J["svg"] = xi, Nt.registerModifier("tm", Xt), Nt.registerModifier("pb", Yt), Nt.registerModifier("rp", jt), Nt.registerModifier("rd", qt), Nt.registerModifier("zz", le), Nt.registerModifier("op", De), e.A = Ft
		},
		144: function(t) {
			t.exports = function() {
				"use strict";
				const t = "undefined" != typeof window,
					e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
					i = t && window.devicePixelRatio > 1,
					r = {
						elements_selector: ".lazy",
						container: e || t ? document : null,
						threshold: 300,
						thresholds: null,
						data_src: "src",
						data_srcset: "srcset",
						data_sizes: "sizes",
						data_bg: "bg",
						data_bg_hidpi: "bg-hidpi",
						data_bg_multi: "bg-multi",
						data_bg_multi_hidpi: "bg-multi-hidpi",
						data_bg_set: "bg-set",
						data_poster: "poster",
						class_applied: "applied",
						class_loading: "loading",
						class_loaded: "loaded",
						class_error: "error",
						class_entered: "entered",
						class_exited: "exited",
						unobserve_completed: !0,
						unobserve_entered: !1,
						cancel_on_exit: !0,
						callback_enter: null,
						callback_exit: null,
						callback_applied: null,
						callback_loading: null,
						callback_loaded: null,
						callback_error: null,
						callback_finish: null,
						callback_cancel: null,
						use_native: !1,
						restore_on_error: !1
					},
					s = t => Object.assign({}, r, t),
					n = function(t, e) {
						let i;
						const r = "LazyLoad::Initialized",
							s = new t(e);
						try {
							i = new CustomEvent(r, {
								detail: {
									instance: s
								}
							})
						} catch (t) {
							i = document.createEvent("CustomEvent"), i.initCustomEvent(r, !1, !1, {
								instance: s
							})
						}
						window.dispatchEvent(i)
					},
					a = "src",
					o = "srcset",
					l = "sizes",
					h = "poster",
					u = "llOriginalAttrs",
					c = "data",
					p = "loading",
					d = "loaded",
					f = "applied",
					m = "error",
					g = "native",
					v = "data-",
					y = "ll-status",
					D = (t, e) => t.getAttribute(v + e),
					b = t => D(t, y),
					_ = (t, e) => ((t, e, i) => {
						const r = v + e;
						null !== i ? t.setAttribute(r, i) : t.removeAttribute(r)
					})(t, y, e),
					w = t => _(t, null),
					x = t => null === b(t),
					C = t => b(t) === g,
					E = [p, d, f, m],
					T = (t, e, i, r) => {
						t && "function" == typeof t && (void 0 === r ? void 0 === i ? t(e) : t(e, i) : t(e, i, r))
					},
					S = (e, i) => {
						t && "" !== i && e.classList.add(i)
					},
					k = (e, i) => {
						t && "" !== i && e.classList.remove(i)
					},
					P = t => t.llTempImage,
					A = (t, e) => {
						if (!e) return;
						const i = e._observer;
						i && i.unobserve(t)
					},
					M = (t, e) => {
						t && (t.loadingCount += e)
					},
					F = (t, e) => {
						t && (t.toLoadCount = e)
					},
					L = t => {
						let e = [];
						for (let i, r = 0; i = t.children[r]; r += 1) "SOURCE" === i.tagName && e.push(i);
						return e
					},
					I = (t, e) => {
						const i = t.parentNode;
						i && "PICTURE" === i.tagName && L(i).forEach(e)
					},
					O = (t, e) => {
						L(t).forEach(e)
					},
					R = [a],
					B = [a, h],
					z = [a, o, l],
					N = [c],
					V = t => !!t[u],
					X = t => t[u],
					Y = t => delete t[u],
					H = (t, e) => {
						if (V(t)) return;
						const i = {};
						e.forEach((e => {
							i[e] = t.getAttribute(e)
						})), t[u] = i
					},
					j = (t, e) => {
						if (!V(t)) return;
						const i = X(t);
						e.forEach((e => {
							((t, e, i) => {
								i ? t.setAttribute(e, i) : t.removeAttribute(e)
							})(t, e, i[e])
						}))
					},
					q = (t, e, i) => {
						S(t, e.class_applied), _(t, f), i && (e.unobserve_completed && A(t, e), T(e.callback_applied, t, i))
					},
					W = (t, e, i) => {
						S(t, e.class_loading), _(t, p), i && (M(i, 1), T(e.callback_loading, t, i))
					},
					G = (t, e, i) => {
						i && t.setAttribute(e, i)
					},
					$ = (t, e) => {
						G(t, l, D(t, e.data_sizes)), G(t, o, D(t, e.data_srcset)), G(t, a, D(t, e.data_src))
					},
					U = {
						IMG: (t, e) => {
							I(t, (t => {
								H(t, z), $(t, e)
							})), H(t, z), $(t, e)
						},
						IFRAME: (t, e) => {
							H(t, R), G(t, a, D(t, e.data_src))
						},
						VIDEO: (t, e) => {
							O(t, (t => {
								H(t, R), G(t, a, D(t, e.data_src))
							})), H(t, B), G(t, h, D(t, e.data_poster)), G(t, a, D(t, e.data_src)), t.load()
						},
						OBJECT: (t, e) => {
							H(t, N), G(t, c, D(t, e.data_src))
						}
					},
					K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
					J = (t, e) => {
						!e || (t => t.loadingCount > 0)(e) || (t => t.toLoadCount > 0)(e) || T(t.callback_finish, e)
					},
					Z = (t, e, i) => {
						t.addEventListener(e, i), t.llEvLisnrs[e] = i
					},
					Q = (t, e, i) => {
						t.removeEventListener(e, i)
					},
					tt = t => !!t.llEvLisnrs,
					et = t => {
						if (!tt(t)) return;
						const e = t.llEvLisnrs;
						for (let i in e) {
							const r = e[i];
							Q(t, i, r)
						}
						delete t.llEvLisnrs
					},
					it = (t, e, i) => {
						(t => {
							delete t.llTempImage
						})(t), M(i, -1), (t => {
							t && (t.toLoadCount -= 1)
						})(i), k(t, e.class_loading), e.unobserve_completed && A(t, i)
					},
					rt = (t, e, i) => {
						const r = P(t) || t;
						tt(r) || ((t, e, i) => {
							tt(t) || (t.llEvLisnrs = {});
							const r = "VIDEO" === t.tagName ? "loadeddata" : "load";
							Z(t, r, e), Z(t, "error", i)
						})(r, (s => {
							((t, e, i, r) => {
								const s = C(e);
								it(e, i, r), S(e, i.class_loaded), _(e, d), T(i.callback_loaded, e, r), s || J(i, r)
							})(0, t, e, i), et(r)
						}), (s => {
							((t, e, i, r) => {
								const s = C(e);
								it(e, i, r), S(e, i.class_error), _(e, m), T(i.callback_error, e, r), i.restore_on_error && j(e, z), s || J(i, r)
							})(0, t, e, i), et(r)
						}))
					},
					st = (t, e, r) => {
						(t => K.indexOf(t.tagName) > -1)(t) ? ((t, e, i) => {
							rt(t, e, i), ((t, e, i) => {
								const r = U[t.tagName];
								r && (r(t, e), W(t, e, i))
							})(t, e, i)
						})(t, e, r) : ((t, e, r) => {
							(t => {
								t.llTempImage = document.createElement("IMG")
							})(t), rt(t, e, r), (t => {
								V(t) || (t[u] = {
									backgroundImage: t.style.backgroundImage
								})
							})(t), ((t, e, r) => {
								const s = D(t, e.data_bg),
									n = D(t, e.data_bg_hidpi),
									o = i && n ? n : s;
								o && (t.style.backgroundImage = `url("${o}")`, P(t).setAttribute(a, o), W(t, e, r))
							})(t, e, r), ((t, e, r) => {
								const s = D(t, e.data_bg_multi),
									n = D(t, e.data_bg_multi_hidpi),
									a = i && n ? n : s;
								a && (t.style.backgroundImage = a, q(t, e, r))
							})(t, e, r), ((t, e, i) => {
								const r = D(t, e.data_bg_set);
								if (!r) return;
								let s = r.split("|").map((t => `image-set(${t})`));
								t.style.backgroundImage = s.join(), q(t, e, i)
							})(t, e, r)
						})(t, e, r)
					},
					nt = t => {
						t.removeAttribute(a), t.removeAttribute(o), t.removeAttribute(l)
					},
					at = t => {
						I(t, (t => {
							j(t, z)
						})), j(t, z)
					},
					ot = {
						IMG: at,
						IFRAME: t => {
							j(t, R)
						},
						VIDEO: t => {
							O(t, (t => {
								j(t, R)
							})), j(t, B), t.load()
						},
						OBJECT: t => {
							j(t, N)
						}
					},
					lt = (t, e) => {
						(t => {
							const e = ot[t.tagName];
							e ? e(t) : (t => {
								if (!V(t)) return;
								const e = X(t);
								t.style.backgroundImage = e.backgroundImage
							})(t)
						})(t), ((t, e) => {
							x(t) || C(t) || (k(t, e.class_entered), k(t, e.class_exited), k(t, e.class_applied), k(t, e.class_loading), k(t, e.class_loaded), k(t, e.class_error))
						})(t, e), w(t), Y(t)
					},
					ht = ["IMG", "IFRAME", "VIDEO"],
					ut = t => t.use_native && "loading" in HTMLImageElement.prototype,
					ct = (t, e, i) => {
						t.forEach((t => (t => t.isIntersecting || t.intersectionRatio > 0)(t) ? ((t, e, i, r) => {
							const s = (t => E.indexOf(b(t)) >= 0)(t);
							_(t, "entered"), S(t, i.class_entered), k(t, i.class_exited), ((t, e, i) => {
								e.unobserve_entered && A(t, i)
							})(t, i, r), T(i.callback_enter, t, e, r), s || st(t, i, r)
						})(t.target, t, e, i) : ((t, e, i, r) => {
							x(t) || (S(t, i.class_exited), ((t, e, i, r) => {
								i.cancel_on_exit && (t => b(t) === p)(t) && "IMG" === t.tagName && (et(t), (t => {
									I(t, (t => {
										nt(t)
									})), nt(t)
								})(t), at(t), k(t, i.class_loading), M(r, -1), w(t), T(i.callback_cancel, t, e, r))
							})(t, e, i, r), T(i.callback_exit, t, e, r))
						})(t.target, t, e, i)))
					},
					pt = t => Array.prototype.slice.call(t),
					dt = t => t.container.querySelectorAll(t.elements_selector),
					ft = t => (t => b(t) === m)(t),
					mt = (t, e) => (t => pt(t).filter(x))(t || dt(e)),
					gt = function(e, i) {
						const r = s(e);
						this._settings = r, this.loadingCount = 0, ((t, e) => {
							ut(t) || (e._observer = new IntersectionObserver((i => {
								ct(i, t, e)
							}), (t => ({
								root: t.container === document ? null : t.container,
								rootMargin: t.thresholds || t.threshold + "px"
							}))(t)))
						})(r, this), ((e, i) => {
							t && (i._onlineHandler = () => {
								((t, e) => {
									var i;
									(i = dt(t), pt(i).filter(ft)).forEach((e => {
										k(e, t.class_error), w(e)
									})), e.update()
								})(e, i)
							}, window.addEventListener("online", i._onlineHandler))
						})(r, this), this.update(i)
					};
				return gt.prototype = {
					update: function(t) {
						const i = this._settings,
							r = mt(t, i);
						var s, n;
						F(this, r.length), e ? this.loadAll(r) : ut(i) ? ((t, e, i) => {
							t.forEach((t => {
								-1 !== ht.indexOf(t.tagName) && ((t, e, i) => {
									t.setAttribute("loading", "lazy"), rt(t, e, i), ((t, e) => {
										const i = U[t.tagName];
										i && i(t, e)
									})(t, e), _(t, g)
								})(t, e, i)
							})), F(i, 0)
						})(r, i, this) : (n = r, (t => {
							t.disconnect()
						})(s = this._observer), ((t, e) => {
							e.forEach((e => {
								t.observe(e)
							}))
						})(s, n))
					},
					destroy: function() {
						this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), dt(this._settings).forEach((t => {
							Y(t)
						})), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount
					},
					loadAll: function(t) {
						const e = this._settings;
						mt(t, e).forEach((t => {
							A(t, this), st(t, e, this)
						}))
					},
					restoreAll: function() {
						const t = this._settings;
						dt(t).forEach((e => {
							lt(e, t)
						}))
					}
				}, gt.load = (t, e) => {
					const i = s(e);
					st(t, i)
				}, gt.resetStatus = t => {
					w(t)
				}, t && ((t, e) => {
					if (e)
						if (e.length)
							for (let i, r = 0; i = e[r]; r += 1) n(t, i);
						else n(t, e)
				})(gt, window.lazyLoadOptions), gt
			}()
		},
		66: function(t, e, i) {
			"use strict";
			i.d(e, {
				A: function() {
					return u
				}
			});

			function r(t, e, i) {
				return Math.max(t, Math.min(e, i))
			}
			var s = class {
				isRunning = !1;
				value = 0;
				from = 0;
				to = 0;
				currentTime = 0;
				lerp;
				duration;
				easing;
				onUpdate;
				advance(t) {
					if (!this.isRunning) return;
					let e = !1;
					if (this.duration && this.easing) {
						this.currentTime += t;
						const i = r(0, this.currentTime / this.duration, 1);
						e = i >= 1;
						const s = e ? 1 : this.easing(i);
						this.value = this.from + (this.to - this.from) * s
					} else this.lerp ? (this.value = function(t, e, i, r) {
						return function(t, e, i) {
							return (1 - i) * t + i * e
						}(t, e, 1 - Math.exp(-i * r))
					}(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
					e && this.stop(), this.onUpdate?.(this.value, e)
				}
				stop() {
					this.isRunning = !1
				}
				fromTo(t, e, {
					lerp: i,
					duration: r,
					easing: s,
					onStart: n,
					onUpdate: a
				}) {
					this.from = this.value = t, this.to = e, this.lerp = i, this.duration = r, this.easing = s, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = a
				}
			};
			var n = class {
					constructor(t, e, {
						autoResize: i = !0,
						debounce: r = 250
					} = {}) {
						this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
							let i;
							return function(...r) {
								let s = this;
								clearTimeout(i), i = setTimeout((() => {
									i = void 0, t.apply(s, r)
								}), e)
							}
						}(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
					}
					width = 0;
					height = 0;
					scrollHeight = 0;
					scrollWidth = 0;
					debouncedResize;
					wrapperResizeObserver;
					contentResizeObserver;
					destroy() {
						this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
					}
					resize = () => {
						this.onWrapperResize(), this.onContentResize()
					};
					onWrapperResize = () => {
						this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
					};
					onContentResize = () => {
						this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
					};
					get limit() {
						return {
							x: this.scrollWidth - this.width,
							y: this.scrollHeight - this.height
						}
					}
				},
				a = class {
					events = {};
					emit(t, ...e) {
						let i = this.events[t] || [];
						for (let t = 0, r = i.length; t < r; t++) i[t]?.(...e)
					}
					on(t, e) {
						return this.events[t]?.push(e) || (this.events[t] = [e]), () => {
							this.events[t] = this.events[t]?.filter((t => e !== t))
						}
					}
					off(t, e) {
						this.events[t] = this.events[t]?.filter((t => e !== t))
					}
					destroy() {
						this.events = {}
					}
				},
				o = 100 / 6,
				l = {
					passive: !1
				},
				h = class {
					constructor(t, e = {
						wheelMultiplier: 1,
						touchMultiplier: 1
					}) {
						this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l)
					}
					touchStart = {
						x: 0,
						y: 0
					};
					lastDelta = {
						x: 0,
						y: 0
					};
					window = {
						width: 0,
						height: 0
					};
					emitter = new a;
					on(t, e) {
						return this.emitter.on(t, e)
					}
					destroy() {
						this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l)
					}
					onTouchStart = t => {
						const {
							clientX: e,
							clientY: i
						} = t.targetTouches ? t.targetTouches[0] : t;
						this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
							x: 0,
							y: 0
						}, this.emitter.emit("scroll", {
							deltaX: 0,
							deltaY: 0,
							event: t
						})
					};
					onTouchMove = t => {
						const {
							clientX: e,
							clientY: i
						} = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this.options.touchMultiplier, s = -(i - this.touchStart.y) * this.options.touchMultiplier;
						this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
							x: r,
							y: s
						}, this.emitter.emit("scroll", {
							deltaX: r,
							deltaY: s,
							event: t
						})
					};
					onTouchEnd = t => {
						this.emitter.emit("scroll", {
							deltaX: this.lastDelta.x,
							deltaY: this.lastDelta.y,
							event: t
						})
					};
					onWheel = t => {
						let {
							deltaX: e,
							deltaY: i,
							deltaMode: r
						} = t;
						e *= 1 === r ? o : 2 === r ? this.window.width : 1, i *= 1 === r ? o : 2 === r ? this.window.height : 1, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
							deltaX: e,
							deltaY: i,
							event: t
						})
					};
					onWindowResize = () => {
						this.window = {
							width: window.innerWidth,
							height: window.innerHeight
						}
					}
				},
				u = class {
					_isScrolling = !1;
					_isStopped = !1;
					_isLocked = !1;
					_preventNextNativeScrollEvent = !1;
					_resetVelocityTimeout = null;
					isTouching;
					time = 0;
					userData = {};
					lastVelocity = 0;
					velocity = 0;
					direction = 0;
					options;
					targetScroll;
					animatedScroll;
					animate = new s;
					emitter = new a;
					dimensions;
					virtualScroll;
					constructor({
						wrapper: t = window,
						content: e = document.documentElement,
						eventsTarget: i = t,
						smoothWheel: r = !0,
						syncTouch: s = !1,
						syncTouchLerp: a = .075,
						touchInertiaMultiplier: o = 35,
						duration: l,
						easing: u = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
						lerp: c = .1,
						infinite: p = !1,
						orientation: d = "vertical",
						gestureOrientation: f = "vertical",
						touchMultiplier: m = 1,
						wheelMultiplier: g = 1,
						autoResize: v = !0,
						prevent: y,
						virtualScroll: D,
						overscroll: b = !0,
						__experimental__naiveDimensions: _ = !1
					} = {}) {
						window.lenisVersion = "1.1.14", t && t !== document.documentElement && t !== document.body || (t = window), this.options = {
							wrapper: t,
							content: e,
							eventsTarget: i,
							smoothWheel: r,
							syncTouch: s,
							syncTouchLerp: a,
							touchInertiaMultiplier: o,
							duration: l,
							easing: u,
							lerp: c,
							infinite: p,
							gestureOrientation: f,
							orientation: d,
							touchMultiplier: m,
							wheelMultiplier: g,
							autoResize: v,
							prevent: y,
							virtualScroll: D,
							overscroll: b,
							__experimental__naiveDimensions: _
						}, this.dimensions = new n(t, e, {
							autoResize: v
						}), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new h(i, {
							touchMultiplier: m,
							wheelMultiplier: g
						}), this.virtualScroll.on("scroll", this.onVirtualScroll)
					}
					destroy() {
						this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName()
					}
					on(t, e) {
						return this.emitter.on(t, e)
					}
					off(t, e) {
						return this.emitter.off(t, e)
					}
					setScroll(t) {
						this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
					}
					onPointerDown = t => {
						1 === t.button && this.reset()
					};
					onVirtualScroll = t => {
						if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
						const {
							deltaX: e,
							deltaY: i,
							event: r
						} = t;
						if (this.emitter.emit("virtual-scroll", {
								deltaX: e,
								deltaY: i,
								event: r
							}), r.ctrlKey) return;
						if (r.lenisStopPropagation) return;
						const s = r.type.includes("touch"),
							n = r.type.includes("wheel");
						this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
						if (this.options.syncTouch && s && "touchstart" === r.type && !this.isStopped && !this.isLocked) return void this.reset();
						const a = 0 === e && 0 === i,
							o = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
						if (a || o) return;
						let l = r.composedPath();
						l = l.slice(0, l.indexOf(this.rootElement));
						const h = this.options.prevent;
						if (l.find((t => t instanceof HTMLElement && ("function" == typeof h && h?.(t) || t.hasAttribute?.("data-lenis-prevent") || s && t.hasAttribute?.("data-lenis-prevent-touch") || n && t.hasAttribute?.("data-lenis-prevent-wheel"))))) return;
						if (this.isStopped || this.isLocked) return void r.preventDefault();
						if (!(this.options.syncTouch && s || this.options.smoothWheel && n)) return this.isScrolling = "native", this.animate.stop(), void(r.lenisStopPropagation = !0);
						let u = i;
						"both" === this.options.gestureOrientation ? u = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (u = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (r.lenisStopPropagation = !0), r.preventDefault();
						const c = s && this.options.syncTouch,
							p = s && "touchend" === r.type && Math.abs(u) > 5;
						p && (u = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + u, {
							programmatic: !1,
							...c ? {
								lerp: p ? this.options.syncTouchLerp : 1
							} : {
								lerp: this.options.lerp,
								duration: this.options.duration,
								easing: this.options.easing
							}
						})
					};
					resize() {
						this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
					}
					emit() {
						this.emitter.emit("scroll", this)
					}
					onNativeScroll = () => {
						if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) this._preventNextNativeScrollEvent = !1;
						else if (!1 === this.isScrolling || "native" === this.isScrolling) {
							const t = this.animatedScroll;
							this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout((() => {
								this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
							}), 400))
						}
					};
					reset() {
						this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
					}
					start() {
						this.isStopped && (this.isStopped = !1, this.reset())
					}
					stop() {
						this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
					}
					raf(t) {
						const e = t - (this.time || t);
						this.time = t, this.animate.advance(.001 * e)
					}
					scrollTo(t, {
						offset: e = 0,
						immediate: i = !1,
						lock: s = !1,
						duration: n = this.options.duration,
						easing: a = this.options.easing,
						lerp: o = this.options.lerp,
						onStart: l,
						onComplete: h,
						force: u = !1,
						programmatic: c = !0,
						userData: p
					} = {}) {
						if (!this.isStopped && !this.isLocked || u) {
							if ("string" == typeof t && ["top", "left", "start"].includes(t)) t = 0;
							else if ("string" == typeof t && ["bottom", "right", "end"].includes(t)) t = this.limit;
							else {
								let i;
								if ("string" == typeof t ? i = document.querySelector(t) : t instanceof HTMLElement && t?.nodeType && (i = t), i) {
									if (this.options.wrapper !== window) {
										const t = this.rootElement.getBoundingClientRect();
										e -= this.isHorizontal ? t.left : t.top
									}
									const r = i.getBoundingClientRect();
									t = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
								}
							}
							if ("number" == typeof t) {
								if (t += e, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = r(0, t, this.limit), t === this.targetScroll) return l?.(this), void h?.(this);
								if (this.userData = p ?? {}, i) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), h?.(this), void(this.userData = {});
								c || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
									duration: n,
									easing: a,
									lerp: o,
									onStart: () => {
										s && (this.isLocked = !0), this.isScrolling = "smooth", l?.(this)
									},
									onUpdate: (t, e) => {
										this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), h?.(this), this.userData = {}, this.preventNextNativeScrollEvent())
									}
								})
							}
						}
					}
					preventNextNativeScrollEvent() {
						this._preventNextNativeScrollEvent = !0, requestAnimationFrame((() => {
							this._preventNextNativeScrollEvent = !1
						}))
					}
					get rootElement() {
						return this.options.wrapper === window ? document.documentElement : this.options.wrapper
					}
					get limit() {
						return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
					}
					get isHorizontal() {
						return "horizontal" === this.options.orientation
					}
					get actualScroll() {
						return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
					}
					get scroll() {
						return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
						var t, e
					}
					get progress() {
						return 0 === this.limit ? 1 : this.scroll / this.limit
					}
					get isScrolling() {
						return this._isScrolling
					}
					set isScrolling(t) {
						this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
					}
					get isStopped() {
						return this._isStopped
					}
					set isStopped(t) {
						this._isStopped !== t && (this._isStopped = t, this.updateClassName())
					}
					get isLocked() {
						return this._isLocked
					}
					set isLocked(t) {
						this._isLocked !== t && (this._isLocked = t, this.updateClassName())
					}
					get isSmooth() {
						return "smooth" === this.isScrolling
					}
					get className() {
						let t = "lenis";
						return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
					}
					updateClassName() {
						this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
					}
					cleanUpClassName() {
						this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
					}
				}
		},
		848: function(t, e, i) {
			"use strict";
			i.d(e, {
				dK: function() {
					return n
				}
			});
			i(375);
			var r = i(44);

			function s(t) {
				return void 0 === t && (t = ""), `.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
			}

			function n(t) {
				let {
					swiper: e,
					extendParams: i,
					on: n,
					emit: a
				} = t;
				const o = "swiper-pagination";
				let l;
				i({
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: t => t,
						formatFractionTotal: t => t,
						bulletClass: `${o}-bullet`,
						bulletActiveClass: `${o}-bullet-active`,
						modifierClass: `${o}-`,
						currentClass: `${o}-current`,
						totalClass: `${o}-total`,
						hiddenClass: `${o}-hidden`,
						progressbarFillClass: `${o}-progressbar-fill`,
						progressbarOppositeClass: `${o}-progressbar-opposite`,
						clickableClass: `${o}-clickable`,
						lockClass: `${o}-lock`,
						horizontalClass: `${o}-horizontal`,
						verticalClass: `${o}-vertical`,
						paginationDisabledClass: `${o}-disabled`
					}
				}), e.pagination = {
					el: null,
					bullets: []
				};
				let h = 0;

				function u() {
					return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
				}

				function c(t, i) {
					const {
						bulletActiveClass: r
					} = e.params.pagination;
					t && (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${r}-${i}`), (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${r}-${i}-${i}`))
				}

				function p(t) {
					const i = t.target.closest(s(e.params.pagination.bulletClass));
					if (!i) return;
					t.preventDefault();
					const n = (0, r.h)(i) * e.params.slidesPerGroup;
					if (e.params.loop) {
						if (e.realIndex === n) return;
						const t = (a = e.realIndex, o = n, l = e.slides.length, (o %= l) == 1 + (a %= l) ? "next" : o === a - 1 ? "previous" : void 0);
						"next" === t ? e.slideNext() : "previous" === t ? e.slidePrev() : e.slideToLoop(n)
					} else e.slideTo(n);
					var a, o, l
				}

				function d() {
					const t = e.rtl,
						i = e.params.pagination;
					if (u()) return;
					let n, o, p = e.pagination.el;
					p = (0, r.m)(p);
					const d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						f = e.params.loop ? Math.ceil(d / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? (o = e.previousRealIndex || 0, n = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (n = e.snapIndex, o = e.previousSnapIndex) : (o = e.previousIndex || 0, n = e.activeIndex || 0), "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
						const s = e.pagination.bullets;
						let a, u, d;
						if (i.dynamicBullets && (l = (0, r.f)(s[0], e.isHorizontal() ? "width" : "height", !0), p.forEach((t => {
								t.style[e.isHorizontal() ? "width" : "height"] = l * (i.dynamicMainBullets + 4) + "px"
							})), i.dynamicMainBullets > 1 && void 0 !== o && (h += n - (o || 0), h > i.dynamicMainBullets - 1 ? h = i.dynamicMainBullets - 1 : h < 0 && (h = 0)), a = Math.max(n - h, 0), u = a + (Math.min(s.length, i.dynamicMainBullets) - 1), d = (u + a) / 2), s.forEach((t => {
								const e = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t => `${i.bulletActiveClass}${t}`))].map((t => "string" == typeof t && t.includes(" ") ? t.split(" ") : t)).flat();
								t.classList.remove(...e)
							})), p.length > 1) s.forEach((t => {
							const s = (0, r.h)(t);
							s === n ? t.classList.add(...i.bulletActiveClass.split(" ")) : e.isElement && t.setAttribute("part", "bullet"), i.dynamicBullets && (s >= a && s <= u && t.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), s === a && c(t, "prev"), s === u && c(t, "next"))
						}));
						else {
							const t = s[n];
							if (t && t.classList.add(...i.bulletActiveClass.split(" ")), e.isElement && s.forEach(((t, e) => {
									t.setAttribute("part", e === n ? "bullet-active" : "bullet")
								})), i.dynamicBullets) {
								const t = s[a],
									e = s[u];
								for (let t = a; t <= u; t += 1) s[t] && s[t].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
								c(t, "prev"), c(e, "next")
							}
						}
						if (i.dynamicBullets) {
							const r = Math.min(s.length, i.dynamicMainBullets + 4),
								n = (l * r - l) / 2 - d * l,
								a = t ? "right" : "left";
							s.forEach((t => {
								t.style[e.isHorizontal() ? a : "top"] = `${n}px`
							}))
						}
					}
					p.forEach(((t, r) => {
						if ("fraction" === i.type && (t.querySelectorAll(s(i.currentClass)).forEach((t => {
								t.textContent = i.formatFractionCurrent(n + 1)
							})), t.querySelectorAll(s(i.totalClass)).forEach((t => {
								t.textContent = i.formatFractionTotal(f)
							}))), "progressbar" === i.type) {
							let r;
							r = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
							const a = (n + 1) / f;
							let o = 1,
								l = 1;
							"horizontal" === r ? o = a : l = a, t.querySelectorAll(s(i.progressbarFillClass)).forEach((t => {
								t.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, t.style.transitionDuration = `${e.params.speed}ms`
							}))
						}
						"custom" === i.type && i.renderCustom ? (t.innerHTML = i.renderCustom(e, n + 1, f), 0 === r && a("paginationRender", t)) : (0 === r && a("paginationRender", t), a("paginationUpdate", t)), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass)
					}))
				}

				function f() {
					const t = e.params.pagination;
					if (u()) return;
					const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
					let n = e.pagination.el;
					n = (0, r.m)(n);
					let o = "";
					if ("bullets" === t.type) {
						let r = e.params.loop ? Math.ceil(i / e.params.slidesPerGroup) : e.snapGrid.length;
						e.params.freeMode && e.params.freeMode.enabled && r > i && (r = i);
						for (let i = 0; i < r; i += 1) t.renderBullet ? o += t.renderBullet.call(e, i, t.bulletClass) : o += `<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`
					}
					"fraction" === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], n.forEach((i => {
						"custom" !== t.type && (i.innerHTML = o || ""), "bullets" === t.type && e.pagination.bullets.push(...i.querySelectorAll(s(t.bulletClass)))
					})), "custom" !== t.type && a("paginationRender", n[0])
				}

				function m() {
					e.params.pagination = function(t, e, i, s) {
						return t.params.createElements && Object.keys(s).forEach((n => {
							if (!i[n] && !0 === i.auto) {
								let a = (0, r.e)(t.el, `.${s[n]}`)[0];
								a || (a = (0, r.c)("div", s[n]), a.className = s[n], t.el.append(a)), i[n] = a, e[n] = a
							}
						})), i
					}(e, e.originalParams.pagination, e.params.pagination, {
						el: "swiper-pagination"
					});
					const t = e.params.pagination;
					if (!t.el) return;
					let i;
					"string" == typeof t.el && e.isElement && (i = e.el.querySelector(t.el)), i || "string" != typeof t.el || (i = [...document.querySelectorAll(t.el)]), i || (i = t.el), i && 0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(i) && i.length > 1 && (i = [...e.el.querySelectorAll(t.el)], i.length > 1 && (i = i.filter((t => (0, r.a)(t, ".swiper")[0] === e.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(e.pagination, {
						el: i
					}), i = (0, r.m)(i), i.forEach((i => {
						"bullets" === t.type && t.clickable && i.classList.add(...(t.clickableClass || "").split(" ")), i.classList.add(t.modifierClass + t.type), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.classList.add(`${t.modifierClass}${t.type}-dynamic`), h = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.classList.add(t.progressbarOppositeClass), t.clickable && i.addEventListener("click", p), e.enabled || i.classList.add(t.lockClass)
					})))
				}

				function g() {
					const t = e.params.pagination;
					if (u()) return;
					let i = e.pagination.el;
					i && (i = (0, r.m)(i), i.forEach((i => {
						i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (i.classList.remove(...(t.clickableClass || "").split(" ")), i.removeEventListener("click", p))
					}))), e.pagination.bullets && e.pagination.bullets.forEach((e => e.classList.remove(...t.bulletActiveClass.split(" "))))
				}
				n("changeDirection", (() => {
					if (!e.pagination || !e.pagination.el) return;
					const t = e.params.pagination;
					let {
						el: i
					} = e.pagination;
					i = (0, r.m)(i), i.forEach((i => {
						i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
					}))
				})), n("init", (() => {
					!1 === e.params.pagination.enabled ? v() : (m(), f(), d())
				})), n("activeIndexChange", (() => {
					void 0 === e.snapIndex && d()
				})), n("snapIndexChange", (() => {
					d()
				})), n("snapGridLengthChange", (() => {
					f(), d()
				})), n("destroy", (() => {
					g()
				})), n("enable disable", (() => {
					let {
						el: t
					} = e.pagination;
					t && (t = (0, r.m)(t), t.forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))))
				})), n("lock unlock", (() => {
					d()
				})), n("click", ((t, i) => {
					const s = i.target,
						n = (0, r.m)(e.pagination.el);
					if (e.params.pagination.el && e.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(e.params.pagination.bulletClass)) {
						if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl)) return;
						const t = n[0].classList.contains(e.params.pagination.hiddenClass);
						a(!0 === t ? "paginationShow" : "paginationHide"), n.forEach((t => t.classList.toggle(e.params.pagination.hiddenClass)))
					}
				}));
				const v = () => {
					e.el.classList.add(e.params.pagination.paginationDisabledClass);
					let {
						el: t
					} = e.pagination;
					t && (t = (0, r.m)(t), t.forEach((t => t.classList.add(e.params.pagination.paginationDisabledClass)))), g()
				};
				Object.assign(e.pagination, {
					enable: () => {
						e.el.classList.remove(e.params.pagination.paginationDisabledClass);
						let {
							el: t
						} = e.pagination;
						t && (t = (0, r.m)(t), t.forEach((t => t.classList.remove(e.params.pagination.paginationDisabledClass)))), m(), f(), d()
					},
					disable: v,
					render: f,
					update: d,
					init: m,
					destroy: g
				})
			}
		},
		375: function(t, e, i) {
			"use strict";

			function r(t) {
				return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
			}

			function s(t, e) {
				void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(e).forEach((i => {
					void 0 === t[i] ? t[i] = e[i] : r(e[i]) && r(t[i]) && Object.keys(e[i]).length > 0 && s(t[i], e[i])
				}))
			}
			i.d(e, {
				a: function() {
					return l
				},
				g: function() {
					return a
				}
			});
			const n = {
				body: {},
				addEventListener() {},
				removeEventListener() {},
				activeElement: {
					blur() {},
					nodeName: ""
				},
				querySelector() {
					return null
				},
				querySelectorAll() {
					return []
				},
				getElementById() {
					return null
				},
				createEvent() {
					return {
						initEvent() {}
					}
				},
				createElement() {
					return {
						children: [],
						childNodes: [],
						style: {},
						setAttribute() {},
						getElementsByTagName() {
							return []
						}
					}
				},
				createElementNS() {
					return {}
				},
				importNode() {
					return null
				},
				location: {
					hash: "",
					host: "",
					hostname: "",
					href: "",
					origin: "",
					pathname: "",
					protocol: "",
					search: ""
				}
			};

			function a() {
				const t = "undefined" != typeof document ? document : {};
				return s(t, n), t
			}
			const o = {
				document: n,
				navigator: {
					userAgent: ""
				},
				location: {
					hash: "",
					host: "",
					hostname: "",
					href: "",
					origin: "",
					pathname: "",
					protocol: "",
					search: ""
				},
				history: {
					replaceState() {},
					pushState() {},
					go() {},
					back() {}
				},
				CustomEvent: function() {
					return this
				},
				addEventListener() {},
				removeEventListener() {},
				getComputedStyle() {
					return {
						getPropertyValue() {
							return ""
						}
					}
				},
				Image() {},
				Date() {},
				screen: {},
				setTimeout() {},
				clearTimeout() {},
				matchMedia() {
					return {}
				},
				requestAnimationFrame(t) {
					return "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0)
				},
				cancelAnimationFrame(t) {
					"undefined" != typeof setTimeout && clearTimeout(t)
				}
			};

			function l() {
				const t = "undefined" != typeof window ? window : {};
				return s(t, o), t
			}
		},
		44: function(t, e, i) {
			"use strict";
			i.d(e, {
				a: function() {
					return b
				},
				c: function() {
					return m
				},
				d: function() {
					return a
				},
				e: function() {
					return p
				},
				f: function() {
					return _
				},
				h: function() {
					return D
				},
				j: function() {
					return o
				},
				m: function() {
					return w
				},
				n: function() {
					return n
				},
				p: function() {
					return y
				},
				q: function() {
					return v
				},
				r: function() {
					return g
				},
				s: function() {
					return u
				},
				t: function() {
					return c
				},
				u: function() {
					return f
				},
				v: function() {
					return d
				},
				w: function() {
					return h
				},
				x: function() {
					return s
				}
			});
			var r = i(375);

			function s(t) {
				const e = t;
				Object.keys(e).forEach((t => {
					try {
						e[t] = null
					} catch (t) {}
					try {
						delete e[t]
					} catch (t) {}
				}))
			}

			function n(t, e) {
				return void 0 === e && (e = 0), setTimeout(t, e)
			}

			function a() {
				return Date.now()
			}

			function o(t, e) {
				void 0 === e && (e = "x");
				const i = (0, r.a)();
				let s, n, a;
				const o = function(t) {
					const e = (0, r.a)();
					let i;
					return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
				}(t);
				return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((t => t.replace(",", "."))).join(", ")), a = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = a.toString().split(",")), "x" === e && (n = i.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === e && (n = i.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
			}

			function l(t) {
				return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
			}

			function h() {
				const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
					e = ["__proto__", "constructor", "prototype"];
				for (let r = 1; r < arguments.length; r += 1) {
					const s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
					if (null != s && (i = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
						const i = Object.keys(Object(s)).filter((t => e.indexOf(t) < 0));
						for (let e = 0, r = i.length; e < r; e += 1) {
							const r = i[e],
								n = Object.getOwnPropertyDescriptor(s, r);
							void 0 !== n && n.enumerable && (l(t[r]) && l(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : h(t[r], s[r]) : !l(t[r]) && l(s[r]) ? (t[r] = {}, s[r].__swiper__ ? t[r] = s[r] : h(t[r], s[r])) : t[r] = s[r])
						}
					}
				}
				var i;
				return t
			}

			function u(t, e, i) {
				t.style.setProperty(e, i)
			}

			function c(t) {
				let {
					swiper: e,
					targetPosition: i,
					side: s
				} = t;
				const n = (0, r.a)(),
					a = -e.translate;
				let o, l = null;
				const h = e.params.speed;
				e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
				const u = i > a ? "next" : "prev",
					c = (t, e) => "next" === u && t >= e || "prev" === u && t <= e,
					p = () => {
						o = (new Date).getTime(), null === l && (l = o);
						const t = Math.max(Math.min((o - l) / h, 1), 0),
							r = .5 - Math.cos(t * Math.PI) / 2;
						let u = a + r * (i - a);
						if (c(u, i) && (u = i), e.wrapperEl.scrollTo({
								[s]: u
							}), c(u, i)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
							e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
								[s]: u
							})
						})), void n.cancelAnimationFrame(e.cssModeFrameID);
						e.cssModeFrameID = n.requestAnimationFrame(p)
					};
				p()
			}

			function p(t, e) {
				void 0 === e && (e = "");
				const i = [...t.children];
				return t instanceof HTMLSlotElement && i.push(...t.assignedElements()), e ? i.filter((t => t.matches(e))) : i
			}

			function d(t, e) {
				const i = e.contains(t);
				if (!i && e instanceof HTMLSlotElement) {
					return [...e.assignedElements()].includes(t)
				}
				return i
			}

			function f(t) {
				try {
					return void console.warn(t)
				} catch (t) {}
			}

			function m(t, e) {
				void 0 === e && (e = []);
				const i = document.createElement(t);
				return i.classList.add(...Array.isArray(e) ? e : function(t) {
					return void 0 === t && (t = ""), t.trim().split(" ").filter((t => !!t.trim()))
				}(e)), i
			}

			function g(t, e) {
				const i = [];
				for (; t.previousElementSibling;) {
					const r = t.previousElementSibling;
					e ? r.matches(e) && i.push(r) : i.push(r), t = r
				}
				return i
			}

			function v(t, e) {
				const i = [];
				for (; t.nextElementSibling;) {
					const r = t.nextElementSibling;
					e ? r.matches(e) && i.push(r) : i.push(r), t = r
				}
				return i
			}

			function y(t, e) {
				return (0, r.a)().getComputedStyle(t, null).getPropertyValue(e)
			}

			function D(t) {
				let e, i = t;
				if (i) {
					for (e = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (e += 1);
					return e
				}
			}

			function b(t, e) {
				const i = [];
				let r = t.parentElement;
				for (; r;) e ? r.matches(e) && i.push(r) : i.push(r), r = r.parentElement;
				return i
			}

			function _(t, e, i) {
				const s = (0, r.a)();
				return i ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
			}

			function w(t) {
				return (Array.isArray(t) ? t : [t]).filter((t => !!t))
			}
		},
		236: function(t, e, i) {
			"use strict";
			i.d(e, {
				A: function() {
					return B
				}
			});
			var r = i(375),
				s = i(44);
			let n, a, o;

			function l() {
				return n || (n = function() {
					const t = (0, r.a)(),
						e = (0, r.g)();
					return {
						smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
						touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
					}
				}()), n
			}

			function h(t) {
				return void 0 === t && (t = {}), a || (a = function(t) {
					let {
						userAgent: e
					} = void 0 === t ? {} : t;
					const i = l(),
						s = (0, r.a)(),
						n = s.navigator.platform,
						a = e || s.navigator.userAgent,
						o = {
							ios: !1,
							android: !1
						},
						h = s.screen.width,
						u = s.screen.height,
						c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
					let p = a.match(/(iPad).*OS\s([\d_]+)/);
					const d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
						f = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						m = "Win32" === n;
					let g = "MacIntel" === n;
					return !p && g && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${h}x${u}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), g = !1), c && !m && (o.os = "android", o.android = !0), (p || f || d) && (o.os = "ios", o.ios = !0), o
				}(t)), a
			}

			function u() {
				return o || (o = function() {
					const t = (0, r.a)(),
						e = h();
					let i = !1;

					function s() {
						const e = t.navigator.userAgent.toLowerCase();
						return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
					}
					if (s()) {
						const e = String(t.navigator.userAgent);
						if (e.includes("Version/")) {
							const [t, r] = e.split("Version/")[1].split(" ")[0].split(".").map((t => Number(t)));
							i = t < 16 || 16 === t && r < 2
						}
					}
					const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
						a = s();
					return {
						isSafari: i || a,
						needPerspectiveFix: i,
						need3dFix: a || n && e.ios,
						isWebView: n
					}
				}()), o
			}
			var c = {
				on(t, e, i) {
					const r = this;
					if (!r.eventsListeners || r.destroyed) return r;
					if ("function" != typeof e) return r;
					const s = i ? "unshift" : "push";
					return t.split(" ").forEach((t => {
						r.eventsListeners[t] || (r.eventsListeners[t] = []), r.eventsListeners[t][s](e)
					})), r
				},
				once(t, e, i) {
					const r = this;
					if (!r.eventsListeners || r.destroyed) return r;
					if ("function" != typeof e) return r;

					function s() {
						r.off(t, s), s.__emitterProxy && delete s.__emitterProxy;
						for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
						e.apply(r, n)
					}
					return s.__emitterProxy = e, r.on(t, s, i)
				},
				onAny(t, e) {
					const i = this;
					if (!i.eventsListeners || i.destroyed) return i;
					if ("function" != typeof t) return i;
					const r = e ? "unshift" : "push";
					return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[r](t), i
				},
				offAny(t) {
					const e = this;
					if (!e.eventsListeners || e.destroyed) return e;
					if (!e.eventsAnyListeners) return e;
					const i = e.eventsAnyListeners.indexOf(t);
					return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
				},
				off(t, e) {
					const i = this;
					return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (t.split(" ").forEach((t => {
						void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach(((r, s) => {
							(r === e || r.__emitterProxy && r.__emitterProxy === e) && i.eventsListeners[t].splice(s, 1)
						}))
					})), i) : i
				},
				emit() {
					const t = this;
					if (!t.eventsListeners || t.destroyed) return t;
					if (!t.eventsListeners) return t;
					let e, i, r;
					for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
					"string" == typeof n[0] || Array.isArray(n[0]) ? (e = n[0], i = n.slice(1, n.length), r = t) : (e = n[0].events, i = n[0].data, r = n[0].context || t), i.unshift(r);
					return (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
						t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
							t.apply(r, [e, ...i])
						})), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
							t.apply(r, i)
						}))
					})), t
				}
			};
			const p = (t, e, i) => {
				e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
			};
			const d = (t, e, i) => {
				e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
			};
			const f = (t, e) => {
					if (!t || t.destroyed || !t.params) return;
					const i = e.closest(t.isElement ? "swiper-slide" : `.${t.params.slideClass}`);
					if (i) {
						let e = i.querySelector(`.${t.params.lazyPreloaderClass}`);
						!e && t.isElement && (i.shadowRoot ? e = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
							i.shadowRoot && (e = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), e && e.remove())
						}))), e && e.remove()
					}
				},
				m = (t, e) => {
					if (!t.slides[e]) return;
					const i = t.slides[e].querySelector('[loading="lazy"]');
					i && i.removeAttribute("loading")
				},
				g = t => {
					if (!t || t.destroyed || !t.params) return;
					let e = t.params.lazyPreloadPrevNext;
					const i = t.slides.length;
					if (!i || !e || e < 0) return;
					e = Math.min(e, i);
					const r = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
						s = t.activeIndex;
					if (t.params.grid && t.params.grid.rows > 1) {
						const i = s,
							n = [i - e];
						return n.push(...Array.from({
							length: e
						}).map(((t, e) => i + r + e))), void t.slides.forEach(((e, i) => {
							n.includes(e.column) && m(t, i)
						}))
					}
					const n = s + r - 1;
					if (t.params.rewind || t.params.loop)
						for (let r = s - e; r <= n + e; r += 1) {
							const e = (r % i + i) % i;
							(e < s || e > n) && m(t, e)
						} else
							for (let r = Math.max(s - e, 0); r <= Math.min(n + e, i - 1); r += 1) r !== s && (r > n || r < s) && m(t, r)
				};
			var v = {
				updateSize: function() {
					const t = this;
					let e, i;
					const r = t.el;
					e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : r.clientWidth, i = void 0 !== t.params.height && null !== t.params.height ? t.params.height : r.clientHeight, 0 === e && t.isHorizontal() || 0 === i && t.isVertical() || (e = e - parseInt((0, s.p)(r, "padding-left") || 0, 10) - parseInt((0, s.p)(r, "padding-right") || 0, 10), i = i - parseInt((0, s.p)(r, "padding-top") || 0, 10) - parseInt((0, s.p)(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
						width: e,
						height: i,
						size: t.isHorizontal() ? e : i
					}))
				},
				updateSlides: function() {
					const t = this;

					function e(e, i) {
						return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
					}
					const i = t.params,
						{
							wrapperEl: r,
							slidesEl: n,
							size: a,
							rtlTranslate: o,
							wrongRTL: l
						} = t,
						h = t.virtual && i.virtual.enabled,
						u = h ? t.virtual.slides.length : t.slides.length,
						c = (0, s.e)(n, `.${t.params.slideClass}, swiper-slide`),
						p = h ? t.virtual.slides.length : c.length;
					let d = [];
					const f = [],
						m = [];
					let g = i.slidesOffsetBefore;
					"function" == typeof g && (g = i.slidesOffsetBefore.call(t));
					let v = i.slidesOffsetAfter;
					"function" == typeof v && (v = i.slidesOffsetAfter.call(t));
					const y = t.snapGrid.length,
						D = t.slidesGrid.length;
					let b = i.spaceBetween,
						_ = -g,
						w = 0,
						x = 0;
					if (void 0 === a) return;
					"string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * a : "string" == typeof b && (b = parseFloat(b)), t.virtualSize = -b, c.forEach((t => {
						o ? t.style.marginLeft = "" : t.style.marginRight = "", t.style.marginBottom = "", t.style.marginTop = ""
					})), i.centeredSlides && i.cssMode && ((0, s.s)(r, "--swiper-centered-offset-before", ""), (0, s.s)(r, "--swiper-centered-offset-after", ""));
					const C = i.grid && i.grid.rows > 1 && t.grid;
					let E;
					C ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
					const T = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((t => void 0 !== i.breakpoints[t].slidesPerView)).length > 0;
					for (let r = 0; r < p; r += 1) {
						let n;
						if (E = 0, c[r] && (n = c[r]), C && t.grid.updateSlide(r, n, c), !c[r] || "none" !== (0, s.p)(n, "display")) {
							if ("auto" === i.slidesPerView) {
								T && (c[r].style[t.getDirectionLabel("width")] = "");
								const a = getComputedStyle(n),
									o = n.style.transform,
									l = n.style.webkitTransform;
								if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), i.roundLengths) E = t.isHorizontal() ? (0, s.f)(n, "width", !0) : (0, s.f)(n, "height", !0);
								else {
									const t = e(a, "width"),
										i = e(a, "padding-left"),
										r = e(a, "padding-right"),
										s = e(a, "margin-left"),
										o = e(a, "margin-right"),
										l = a.getPropertyValue("box-sizing");
									if (l && "border-box" === l) E = t + s + o;
									else {
										const {
											clientWidth: e,
											offsetWidth: a
										} = n;
										E = t + i + r + s + o + (a - e)
									}
								}
								o && (n.style.transform = o), l && (n.style.webkitTransform = l), i.roundLengths && (E = Math.floor(E))
							} else E = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), c[r] && (c[r].style[t.getDirectionLabel("width")] = `${E}px`);
							c[r] && (c[r].swiperSlideSize = E), m.push(E), i.centeredSlides ? (_ = _ + E / 2 + w / 2 + b, 0 === w && 0 !== r && (_ = _ - a / 2 - b), 0 === r && (_ = _ - a / 2 - b), Math.abs(_) < .001 && (_ = 0), i.roundLengths && (_ = Math.floor(_)), x % i.slidesPerGroup == 0 && d.push(_), f.push(_)) : (i.roundLengths && (_ = Math.floor(_)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && d.push(_), f.push(_), _ = _ + E + b), t.virtualSize += E + b, w = E, x += 1
						}
					}
					if (t.virtualSize = Math.max(t.virtualSize, a) + v, o && l && ("slide" === i.effect || "coverflow" === i.effect) && (r.style.width = `${t.virtualSize+b}px`), i.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+b}px`), C && t.grid.updateWrapperSize(E, d), !i.centeredSlides) {
						const e = [];
						for (let r = 0; r < d.length; r += 1) {
							let s = d[r];
							i.roundLengths && (s = Math.floor(s)), d[r] <= t.virtualSize - a && e.push(s)
						}
						d = e, Math.floor(t.virtualSize - a) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - a)
					}
					if (h && i.loop) {
						const e = m[0] + b;
						if (i.slidesPerGroup > 1) {
							const r = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
								s = e * i.slidesPerGroup;
							for (let t = 0; t < r; t += 1) d.push(d[d.length - 1] + s)
						}
						for (let r = 0; r < t.virtual.slidesBefore + t.virtual.slidesAfter; r += 1) 1 === i.slidesPerGroup && d.push(d[d.length - 1] + e), f.push(f[f.length - 1] + e), t.virtualSize += e
					}
					if (0 === d.length && (d = [0]), 0 !== b) {
						const e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
						c.filter(((t, e) => !(i.cssMode && !i.loop) || e !== c.length - 1)).forEach((t => {
							t.style[e] = `${b}px`
						}))
					}
					if (i.centeredSlides && i.centeredSlidesBounds) {
						let t = 0;
						m.forEach((e => {
							t += e + (b || 0)
						})), t -= b;
						const e = t > a ? t - a : 0;
						d = d.map((t => t <= 0 ? -g : t > e ? e + v : t))
					}
					if (i.centerInsufficientSlides) {
						let t = 0;
						m.forEach((e => {
							t += e + (b || 0)
						})), t -= b;
						const e = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
						if (t + e < a) {
							const i = (a - t - e) / 2;
							d.forEach(((t, e) => {
								d[e] = t - i
							})), f.forEach(((t, e) => {
								f[e] = t + i
							}))
						}
					}
					if (Object.assign(t, {
							slides: c,
							snapGrid: d,
							slidesGrid: f,
							slidesSizesGrid: m
						}), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
						(0, s.s)(r, "--swiper-centered-offset-before", -d[0] + "px"), (0, s.s)(r, "--swiper-centered-offset-after", t.size / 2 - m[m.length - 1] / 2 + "px");
						const e = -t.snapGrid[0],
							i = -t.slidesGrid[0];
						t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + i))
					}
					if (p !== u && t.emit("slidesLengthChange"), d.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== D && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !(h || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
						const e = `${i.containerModifierClass}backface-hidden`,
							r = t.el.classList.contains(e);
						p <= i.maxBackfaceHiddenSlides ? r || t.el.classList.add(e) : r && t.el.classList.remove(e)
					}
				},
				updateAutoHeight: function(t) {
					const e = this,
						i = [],
						r = e.virtual && e.params.virtual.enabled;
					let s, n = 0;
					"number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
					const a = t => r ? e.slides[e.getSlideIndexByData(t)] : e.slides[t];
					if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
						if (e.params.centeredSlides)(e.visibleSlides || []).forEach((t => {
							i.push(t)
						}));
						else
							for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
								const t = e.activeIndex + s;
								if (t > e.slides.length && !r) break;
								i.push(a(t))
							} else i.push(a(e.activeIndex));
					for (s = 0; s < i.length; s += 1)
						if (void 0 !== i[s]) {
							const t = i[s].offsetHeight;
							n = t > n ? t : n
						}(n || 0 === n) && (e.wrapperEl.style.height = `${n}px`)
				},
				updateSlidesOffset: function() {
					const t = this,
						e = t.slides,
						i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
					for (let r = 0; r < e.length; r += 1) e[r].swiperSlideOffset = (t.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - i - t.cssOverflowAdjustment()
				},
				updateSlidesProgress: function(t) {
					void 0 === t && (t = this && this.translate || 0);
					const e = this,
						i = e.params,
						{
							slides: r,
							rtlTranslate: s,
							snapGrid: n
						} = e;
					if (0 === r.length) return;
					void 0 === r[0].swiperSlideOffset && e.updateSlidesOffset();
					let a = -t;
					s && (a = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
					let o = i.spaceBetween;
					"string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : "string" == typeof o && (o = parseFloat(o));
					for (let t = 0; t < r.length; t += 1) {
						const l = r[t];
						let h = l.swiperSlideOffset;
						i.cssMode && i.centeredSlides && (h -= r[0].swiperSlideOffset);
						const u = (a + (i.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
							c = (a - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
							d = -(a - h),
							f = d + e.slidesSizesGrid[t],
							m = d >= 0 && d <= e.size - e.slidesSizesGrid[t],
							g = d >= 0 && d < e.size - 1 || f > 1 && f <= e.size || d <= 0 && f >= e.size;
						g && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(t)), p(l, g, i.slideVisibleClass), p(l, m, i.slideFullyVisibleClass), l.progress = s ? -u : u, l.originalProgress = s ? -c : c
					}
				},
				updateProgress: function(t) {
					const e = this;
					if (void 0 === t) {
						const i = e.rtlTranslate ? -1 : 1;
						t = e && e.translate && e.translate * i || 0
					}
					const i = e.params,
						r = e.maxTranslate() - e.minTranslate();
					let {
						progress: s,
						isBeginning: n,
						isEnd: a,
						progressLoop: o
					} = e;
					const l = n,
						h = a;
					if (0 === r) s = 0, n = !0, a = !0;
					else {
						s = (t - e.minTranslate()) / r;
						const i = Math.abs(t - e.minTranslate()) < 1,
							o = Math.abs(t - e.maxTranslate()) < 1;
						n = i || s <= 0, a = o || s >= 1, i && (s = 0), o && (s = 1)
					}
					if (i.loop) {
						const i = e.getSlideIndexByData(0),
							r = e.getSlideIndexByData(e.slides.length - 1),
							s = e.slidesGrid[i],
							n = e.slidesGrid[r],
							a = e.slidesGrid[e.slidesGrid.length - 1],
							l = Math.abs(t);
						o = l >= s ? (l - s) / a : (l + a - n) / a, o > 1 && (o -= 1)
					}
					Object.assign(e, {
						progress: s,
						progressLoop: o,
						isBeginning: n,
						isEnd: a
					}), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), n && !l && e.emit("reachBeginning toEdge"), a && !h && e.emit("reachEnd toEdge"), (l && !n || h && !a) && e.emit("fromEdge"), e.emit("progress", s)
				},
				updateSlidesClasses: function() {
					const t = this,
						{
							slides: e,
							params: i,
							slidesEl: r,
							activeIndex: n
						} = t,
						a = t.virtual && i.virtual.enabled,
						o = t.grid && i.grid && i.grid.rows > 1,
						l = t => (0, s.e)(r, `.${i.slideClass}${t}, swiper-slide${t}`)[0];
					let h, u, c;
					if (a)
						if (i.loop) {
							let e = n - t.virtual.slidesBefore;
							e < 0 && (e = t.virtual.slides.length + e), e >= t.virtual.slides.length && (e -= t.virtual.slides.length), h = l(`[data-swiper-slide-index="${e}"]`)
						} else h = l(`[data-swiper-slide-index="${n}"]`);
					else o ? (h = e.filter((t => t.column === n))[0], c = e.filter((t => t.column === n + 1))[0], u = e.filter((t => t.column === n - 1))[0]) : h = e[n];
					h && (o || (c = (0, s.q)(h, `.${i.slideClass}, swiper-slide`)[0], i.loop && !c && (c = e[0]), u = (0, s.r)(h, `.${i.slideClass}, swiper-slide`)[0], i.loop && 0 === !u && (u = e[e.length - 1]))), e.forEach((t => {
						d(t, t === h, i.slideActiveClass), d(t, t === c, i.slideNextClass), d(t, t === u, i.slidePrevClass)
					})), t.emitSlidesClasses()
				},
				updateActiveIndex: function(t) {
					const e = this,
						i = e.rtlTranslate ? e.translate : -e.translate,
						{
							snapGrid: r,
							params: s,
							activeIndex: n,
							realIndex: a,
							snapIndex: o
						} = e;
					let l, h = t;
					const u = t => {
						let i = t - e.virtual.slidesBefore;
						return i < 0 && (i = e.virtual.slides.length + i), i >= e.virtual.slides.length && (i -= e.virtual.slides.length), i
					};
					if (void 0 === h && (h = function(t) {
							const {
								slidesGrid: e,
								params: i
							} = t, r = t.rtlTranslate ? t.translate : -t.translate;
							let s;
							for (let t = 0; t < e.length; t += 1) void 0 !== e[t + 1] ? r >= e[t] && r < e[t + 1] - (e[t + 1] - e[t]) / 2 ? s = t : r >= e[t] && r < e[t + 1] && (s = t + 1) : r >= e[t] && (s = t);
							return i.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
						}(e)), r.indexOf(i) >= 0) l = r.indexOf(i);
					else {
						const t = Math.min(s.slidesPerGroupSkip, h);
						l = t + Math.floor((h - t) / s.slidesPerGroup)
					}
					if (l >= r.length && (l = r.length - 1), h === n && !e.params.loop) return void(l !== o && (e.snapIndex = l, e.emit("snapIndexChange")));
					if (h === n && e.params.loop && e.virtual && e.params.virtual.enabled) return void(e.realIndex = u(h));
					const c = e.grid && s.grid && s.grid.rows > 1;
					let p;
					if (e.virtual && s.virtual.enabled && s.loop) p = u(h);
					else if (c) {
						const t = e.slides.filter((t => t.column === h))[0];
						let i = parseInt(t.getAttribute("data-swiper-slide-index"), 10);
						Number.isNaN(i) && (i = Math.max(e.slides.indexOf(t), 0)), p = Math.floor(i / s.grid.rows)
					} else if (e.slides[h]) {
						const t = e.slides[h].getAttribute("data-swiper-slide-index");
						p = t ? parseInt(t, 10) : h
					} else p = h;
					Object.assign(e, {
						previousSnapIndex: o,
						snapIndex: l,
						previousRealIndex: a,
						realIndex: p,
						previousIndex: n,
						activeIndex: h
					}), e.initialized && g(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== p && e.emit("realIndexChange"), e.emit("slideChange"))
				},
				updateClickedSlide: function(t, e) {
					const i = this,
						r = i.params;
					let s = t.closest(`.${r.slideClass}, swiper-slide`);
					!s && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((t => {
						!s && t.matches && t.matches(`.${r.slideClass}, swiper-slide`) && (s = t)
					}));
					let n, a = !1;
					if (s)
						for (let t = 0; t < i.slides.length; t += 1)
							if (i.slides[t] === s) {
								a = !0, n = t;
								break
							} if (!s || !a) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
					i.clickedSlide = s, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = n, r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
				}
			};
			var y = {
				getTranslate: function(t) {
					void 0 === t && (t = this.isHorizontal() ? "x" : "y");
					const {
						params: e,
						rtlTranslate: i,
						translate: r,
						wrapperEl: n
					} = this;
					if (e.virtualTranslate) return i ? -r : r;
					if (e.cssMode) return r;
					let a = (0, s.j)(n, t);
					return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
				},
				setTranslate: function(t, e) {
					const i = this,
						{
							rtlTranslate: r,
							params: s,
							wrapperEl: n,
							progress: a
						} = i;
					let o, l = 0,
						h = 0;
					i.isHorizontal() ? l = r ? -t : t : h = t, s.roundLengths && (l = Math.floor(l), h = Math.floor(h)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : h, s.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -h : s.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : h -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${h}px, 0px)`);
					const u = i.maxTranslate() - i.minTranslate();
					o = 0 === u ? 0 : (t - i.minTranslate()) / u, o !== a && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
				},
				minTranslate: function() {
					return -this.snapGrid[0]
				},
				maxTranslate: function() {
					return -this.snapGrid[this.snapGrid.length - 1]
				},
				translateTo: function(t, e, i, r, n) {
					void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
					const a = this,
						{
							params: o,
							wrapperEl: l
						} = a;
					if (a.animating && o.preventInteractionOnTransition) return !1;
					const h = a.minTranslate(),
						u = a.maxTranslate();
					let c;
					if (c = r && t > h ? h : r && t < u ? u : t, a.updateProgress(c), o.cssMode) {
						const t = a.isHorizontal();
						if (0 === e) l[t ? "scrollLeft" : "scrollTop"] = -c;
						else {
							if (!a.support.smoothScroll) return (0, s.t)({
								swiper: a,
								targetPosition: -c,
								side: t ? "left" : "top"
							}), !0;
							l.scrollTo({
								[t ? "left" : "top"]: -c,
								behavior: "smooth"
							})
						}
						return !0
					}
					return 0 === e ? (a.setTransition(0), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionEnd"))) : (a.setTransition(e), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(t) {
						a && !a.destroyed && t.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, i && a.emit("transitionEnd"))
					}), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
				}
			};

			function D(t) {
				let {
					swiper: e,
					runCallbacks: i,
					direction: r,
					step: s
				} = t;
				const {
					activeIndex: n,
					previousIndex: a
				} = e;
				let o = r;
				if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), e.emit(`transition${s}`), i && n !== a) {
					if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
					e.emit(`slideChangeTransition${s}`), "next" === o ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
				}
			}
			var b = {
				slideTo: function(t, e, i, r, n) {
					void 0 === t && (t = 0), void 0 === i && (i = !0), "string" == typeof t && (t = parseInt(t, 10));
					const a = this;
					let o = t;
					o < 0 && (o = 0);
					const {
						params: l,
						snapGrid: h,
						slidesGrid: u,
						previousIndex: c,
						activeIndex: p,
						rtlTranslate: d,
						wrapperEl: f,
						enabled: m
					} = a;
					if (!m && !r && !n || a.destroyed || a.animating && l.preventInteractionOnTransition) return !1;
					void 0 === e && (e = a.params.speed);
					const g = Math.min(a.params.slidesPerGroupSkip, o);
					let v = g + Math.floor((o - g) / a.params.slidesPerGroup);
					v >= h.length && (v = h.length - 1);
					const y = -h[v];
					if (l.normalizeSlideIndex)
						for (let t = 0; t < u.length; t += 1) {
							const e = -Math.floor(100 * y),
								i = Math.floor(100 * u[t]),
								r = Math.floor(100 * u[t + 1]);
							void 0 !== u[t + 1] ? e >= i && e < r - (r - i) / 2 ? o = t : e >= i && e < r && (o = t + 1) : e >= i && (o = t)
						}
					if (a.initialized && o !== p) {
						if (!a.allowSlideNext && (d ? y > a.translate && y > a.minTranslate() : y < a.translate && y < a.minTranslate())) return !1;
						if (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (p || 0) !== o) return !1
					}
					let D;
					o !== (c || 0) && i && a.emit("beforeSlideChangeStart"), a.updateProgress(y), D = o > p ? "next" : o < p ? "prev" : "reset";
					const b = a.virtual && a.params.virtual.enabled;
					if (!(b && n) && (d && -y === a.translate || !d && y === a.translate)) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(y), "reset" !== D && (a.transitionStart(i, D), a.transitionEnd(i, D)), !1;
					if (l.cssMode) {
						const t = a.isHorizontal(),
							i = d ? y : -y;
						if (0 === e) b && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), b && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
							f[t ? "scrollLeft" : "scrollTop"] = i
						}))) : f[t ? "scrollLeft" : "scrollTop"] = i, b && requestAnimationFrame((() => {
							a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
						}));
						else {
							if (!a.support.smoothScroll) return (0, s.t)({
								swiper: a,
								targetPosition: i,
								side: t ? "left" : "top"
							}), !0;
							f.scrollTo({
								[t ? "left" : "top"]: i,
								behavior: "smooth"
							})
						}
						return !0
					}
					return a.setTransition(e), a.setTranslate(y), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", e, r), a.transitionStart(i, D), 0 === e ? a.transitionEnd(i, D) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(t) {
						a && !a.destroyed && t.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, D))
					}), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
				},
				slideToLoop: function(t, e, i, r) {
					if (void 0 === t && (t = 0), void 0 === i && (i = !0), "string" == typeof t) {
						t = parseInt(t, 10)
					}
					const s = this;
					if (s.destroyed) return;
					void 0 === e && (e = s.params.speed);
					const n = s.grid && s.params.grid && s.params.grid.rows > 1;
					let a = t;
					if (s.params.loop)
						if (s.virtual && s.params.virtual.enabled) a += s.virtual.slidesBefore;
						else {
							let t;
							if (n) {
								const e = a * s.params.grid.rows;
								t = s.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
							} else t = s.getSlideIndexByData(a);
							const e = n ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length,
								{
									centeredSlides: i
								} = s.params;
							let o = s.params.slidesPerView;
							"auto" === o ? o = s.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(s.params.slidesPerView, 10)), i && o % 2 == 0 && (o += 1));
							let l = e - t < o;
							if (i && (l = l || t < Math.ceil(o / 2)), r && i && "auto" !== s.params.slidesPerView && !n && (l = !1), l) {
								const r = i ? t < s.activeIndex ? "prev" : "next" : t - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
								s.loopFix({
									direction: r,
									slideTo: !0,
									activeSlideIndex: "next" === r ? t + 1 : t - e + 1,
									slideRealIndex: "next" === r ? s.realIndex : void 0
								})
							}
							if (n) {
								const t = a * s.params.grid.rows;
								a = s.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
							} else a = s.getSlideIndexByData(a)
						} return requestAnimationFrame((() => {
						s.slideTo(a, e, i, r)
					})), s
				},
				slideNext: function(t, e, i) {
					void 0 === e && (e = !0);
					const r = this,
						{
							enabled: s,
							params: n,
							animating: a
						} = r;
					if (!s || r.destroyed) return r;
					void 0 === t && (t = r.params.speed);
					let o = n.slidesPerGroup;
					"auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
					const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : o,
						h = r.virtual && n.virtual.enabled;
					if (n.loop) {
						if (a && !h && n.loopPreventsSliding) return !1;
						if (r.loopFix({
								direction: "next"
							}), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
							r.slideTo(r.activeIndex + l, t, e, i)
						})), !0
					}
					return n.rewind && r.isEnd ? r.slideTo(0, t, e, i) : r.slideTo(r.activeIndex + l, t, e, i)
				},
				slidePrev: function(t, e, i) {
					void 0 === e && (e = !0);
					const r = this,
						{
							params: s,
							snapGrid: n,
							slidesGrid: a,
							rtlTranslate: o,
							enabled: l,
							animating: h
						} = r;
					if (!l || r.destroyed) return r;
					void 0 === t && (t = r.params.speed);
					const u = r.virtual && s.virtual.enabled;
					if (s.loop) {
						if (h && !u && s.loopPreventsSliding) return !1;
						r.loopFix({
							direction: "prev"
						}), r._clientLeft = r.wrapperEl.clientLeft
					}

					function c(t) {
						return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
					}
					const p = c(o ? r.translate : -r.translate),
						d = n.map((t => c(t)));
					let f = n[d.indexOf(p) - 1];
					if (void 0 === f && s.cssMode) {
						let t;
						n.forEach(((e, i) => {
							p >= e && (t = i)
						})), void 0 !== t && (f = n[t > 0 ? t - 1 : t])
					}
					let m = 0;
					if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = r.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), s.rewind && r.isBeginning) {
						const s = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
						return r.slideTo(s, t, e, i)
					}
					return s.loop && 0 === r.activeIndex && s.cssMode ? (requestAnimationFrame((() => {
						r.slideTo(m, t, e, i)
					})), !0) : r.slideTo(m, t, e, i)
				},
				slideReset: function(t, e, i) {
					void 0 === e && (e = !0);
					const r = this;
					if (!r.destroyed) return void 0 === t && (t = r.params.speed), r.slideTo(r.activeIndex, t, e, i)
				},
				slideToClosest: function(t, e, i, r) {
					void 0 === e && (e = !0), void 0 === r && (r = .5);
					const s = this;
					if (s.destroyed) return;
					void 0 === t && (t = s.params.speed);
					let n = s.activeIndex;
					const a = Math.min(s.params.slidesPerGroupSkip, n),
						o = a + Math.floor((n - a) / s.params.slidesPerGroup),
						l = s.rtlTranslate ? s.translate : -s.translate;
					if (l >= s.snapGrid[o]) {
						const t = s.snapGrid[o];
						l - t > (s.snapGrid[o + 1] - t) * r && (n += s.params.slidesPerGroup)
					} else {
						const t = s.snapGrid[o - 1];
						l - t <= (s.snapGrid[o] - t) * r && (n -= s.params.slidesPerGroup)
					}
					return n = Math.max(n, 0), n = Math.min(n, s.slidesGrid.length - 1), s.slideTo(n, t, e, i)
				},
				slideToClickedSlide: function() {
					const t = this;
					if (t.destroyed) return;
					const {
						params: e,
						slidesEl: i
					} = t, r = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
					let n, a = t.clickedIndex;
					const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
					if (e.loop) {
						if (t.animating) return;
						n = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex((0, s.e)(i, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, s.n)((() => {
							t.slideTo(a)
						}))) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex((0, s.e)(i, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, s.n)((() => {
							t.slideTo(a)
						}))) : t.slideTo(a)
					} else t.slideTo(a)
				}
			};
			var _ = {
				loopCreate: function(t) {
					const e = this,
						{
							params: i,
							slidesEl: r
						} = e;
					if (!i.loop || e.virtual && e.params.virtual.enabled) return;
					const n = () => {
							(0, s.e)(r, `.${i.slideClass}, swiper-slide`).forEach(((t, e) => {
								t.setAttribute("data-swiper-slide-index", e)
							}))
						},
						a = e.grid && i.grid && i.grid.rows > 1,
						o = i.slidesPerGroup * (a ? i.grid.rows : 1),
						l = e.slides.length % o != 0,
						h = a && e.slides.length % i.grid.rows != 0,
						u = t => {
							for (let r = 0; r < t; r += 1) {
								const t = e.isElement ? (0, s.c)("swiper-slide", [i.slideBlankClass]) : (0, s.c)("div", [i.slideClass, i.slideBlankClass]);
								e.slidesEl.append(t)
							}
						};
					if (l) {
						if (i.loopAddBlankSlides) {
							u(o - e.slides.length % o), e.recalcSlides(), e.updateSlides()
						} else(0, s.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
						n()
					} else if (h) {
						if (i.loopAddBlankSlides) {
							u(i.grid.rows - e.slides.length % i.grid.rows), e.recalcSlides(), e.updateSlides()
						} else(0, s.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
						n()
					} else n();
					e.loopFix({
						slideRealIndex: t,
						direction: i.centeredSlides ? void 0 : "next"
					})
				},
				loopFix: function(t) {
					let {
						slideRealIndex: e,
						slideTo: i = !0,
						direction: r,
						setTranslate: n,
						activeSlideIndex: a,
						byController: o,
						byMousewheel: l
					} = void 0 === t ? {} : t;
					const h = this;
					if (!h.params.loop) return;
					h.emit("beforeLoopFix");
					const {
						slides: u,
						allowSlidePrev: c,
						allowSlideNext: p,
						slidesEl: d,
						params: f
					} = h, {
						centeredSlides: m
					} = f;
					if (h.allowSlidePrev = !0, h.allowSlideNext = !0, h.virtual && f.virtual.enabled) return i && (f.centeredSlides || 0 !== h.snapIndex ? f.centeredSlides && h.snapIndex < f.slidesPerView ? h.slideTo(h.virtual.slides.length + h.snapIndex, 0, !1, !0) : h.snapIndex === h.snapGrid.length - 1 && h.slideTo(h.virtual.slidesBefore, 0, !1, !0) : h.slideTo(h.virtual.slides.length, 0, !1, !0)), h.allowSlidePrev = c, h.allowSlideNext = p, void h.emit("loopFix");
					let g = f.slidesPerView;
					"auto" === g ? g = h.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
					const v = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
					let y = v;
					y % v != 0 && (y += v - y % v), y += f.loopAdditionalSlides, h.loopedSlides = y;
					const D = h.grid && f.grid && f.grid.rows > 1;
					u.length < g + y ? (0, s.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : D && "row" === f.grid.fill && (0, s.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
					const b = [],
						_ = [];
					let w = h.activeIndex;
					void 0 === a ? a = h.getSlideIndex(u.filter((t => t.classList.contains(f.slideActiveClass)))[0]) : w = a;
					const x = "next" === r || !r,
						C = "prev" === r || !r;
					let E = 0,
						T = 0;
					const S = D ? Math.ceil(u.length / f.grid.rows) : u.length,
						k = (D ? u[a].column : a) + (m && void 0 === n ? -g / 2 + .5 : 0);
					if (k < y) {
						E = Math.max(y - k, v);
						for (let t = 0; t < y - k; t += 1) {
							const e = t - Math.floor(t / S) * S;
							if (D) {
								const t = S - e - 1;
								for (let e = u.length - 1; e >= 0; e -= 1) u[e].column === t && b.push(e)
							} else b.push(S - e - 1)
						}
					} else if (k + g > S - y) {
						T = Math.max(k - (S - 2 * y), v);
						for (let t = 0; t < T; t += 1) {
							const e = t - Math.floor(t / S) * S;
							D ? u.forEach(((t, i) => {
								t.column === e && _.push(i)
							})) : _.push(e)
						}
					}
					if (h.__preventObserver__ = !0, requestAnimationFrame((() => {
							h.__preventObserver__ = !1
						})), C && b.forEach((t => {
							u[t].swiperLoopMoveDOM = !0, d.prepend(u[t]), u[t].swiperLoopMoveDOM = !1
						})), x && _.forEach((t => {
							u[t].swiperLoopMoveDOM = !0, d.append(u[t]), u[t].swiperLoopMoveDOM = !1
						})), h.recalcSlides(), "auto" === f.slidesPerView ? h.updateSlides() : D && (b.length > 0 && C || _.length > 0 && x) && h.slides.forEach(((t, e) => {
							h.grid.updateSlide(e, t, h.slides)
						})), f.watchSlidesProgress && h.updateSlidesOffset(), i)
						if (b.length > 0 && C) {
							if (void 0 === e) {
								const t = h.slidesGrid[w],
									e = h.slidesGrid[w + E] - t;
								l ? h.setTranslate(h.translate - e) : (h.slideTo(w + Math.ceil(E), 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - e, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - e))
							} else if (n) {
								const t = D ? b.length / f.grid.rows : b.length;
								h.slideTo(h.activeIndex + t, 0, !1, !0), h.touchEventsData.currentTranslate = h.translate
							}
						} else if (_.length > 0 && x)
						if (void 0 === e) {
							const t = h.slidesGrid[w],
								e = h.slidesGrid[w - T] - t;
							l ? h.setTranslate(h.translate - e) : (h.slideTo(w - T, 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - e, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - e))
						} else {
							const t = D ? _.length / f.grid.rows : _.length;
							h.slideTo(h.activeIndex - t, 0, !1, !0)
						} if (h.allowSlidePrev = c, h.allowSlideNext = p, h.controller && h.controller.control && !o) {
						const t = {
							slideRealIndex: e,
							direction: r,
							setTranslate: n,
							activeSlideIndex: a,
							byController: !0
						};
						Array.isArray(h.controller.control) ? h.controller.control.forEach((e => {
							!e.destroyed && e.params.loop && e.loopFix({
								...t,
								slideTo: e.params.slidesPerView === f.slidesPerView && i
							})
						})) : h.controller.control instanceof h.constructor && h.controller.control.params.loop && h.controller.control.loopFix({
							...t,
							slideTo: h.controller.control.params.slidesPerView === f.slidesPerView && i
						})
					}
					h.emit("loopFix")
				},
				loopDestroy: function() {
					const t = this,
						{
							params: e,
							slidesEl: i
						} = t;
					if (!e.loop || t.virtual && t.params.virtual.enabled) return;
					t.recalcSlides();
					const r = [];
					t.slides.forEach((t => {
						const e = void 0 === t.swiperSlideIndex ? 1 * t.getAttribute("data-swiper-slide-index") : t.swiperSlideIndex;
						r[e] = t
					})), t.slides.forEach((t => {
						t.removeAttribute("data-swiper-slide-index")
					})), r.forEach((t => {
						i.append(t)
					})), t.recalcSlides(), t.slideTo(t.realIndex, 0)
				}
			};

			function w(t, e, i) {
				const s = (0, r.a)(),
					{
						params: n
					} = t,
					a = n.edgeSwipeDetection,
					o = n.edgeSwipeThreshold;
				return !a || !(i <= o || i >= s.innerWidth - o) || "prevent" === a && (e.preventDefault(), !0)
			}

			function x(t) {
				const e = this,
					i = (0, r.g)();
				let n = t;
				n.originalEvent && (n = n.originalEvent);
				const a = e.touchEventsData;
				if ("pointerdown" === n.type) {
					if (null !== a.pointerId && a.pointerId !== n.pointerId) return;
					a.pointerId = n.pointerId
				} else "touchstart" === n.type && 1 === n.targetTouches.length && (a.touchId = n.targetTouches[0].identifier);
				if ("touchstart" === n.type) return void w(e, n, n.targetTouches[0].pageX);
				const {
					params: o,
					touches: l,
					enabled: h
				} = e;
				if (!h) return;
				if (!o.simulateTouch && "mouse" === n.pointerType) return;
				if (e.animating && o.preventInteractionOnTransition) return;
				!e.animating && o.cssMode && o.loop && e.loopFix();
				let u = n.target;
				if ("wrapper" === o.touchEventsTarget && !(0, s.v)(u, e.wrapperEl)) return;
				if ("which" in n && 3 === n.which) return;
				if ("button" in n && n.button > 0) return;
				if (a.isTouched && a.isMoved) return;
				const c = !!o.noSwipingClass && "" !== o.noSwipingClass,
					p = n.composedPath ? n.composedPath() : n.path;
				c && n.target && n.target.shadowRoot && p && (u = p[0]);
				const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
					f = !(!n.target || !n.target.shadowRoot);
				if (o.noSwiping && (f ? function(t, e) {
						return void 0 === e && (e = this),
							function e(i) {
								if (!i || i === (0, r.g)() || i === (0, r.a)()) return null;
								i.assignedSlot && (i = i.assignedSlot);
								const s = i.closest(t);
								return s || i.getRootNode ? s || e(i.getRootNode().host) : null
							}(e)
					}(d, u) : u.closest(d))) return void(e.allowClick = !0);
				if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
				l.currentX = n.pageX, l.currentY = n.pageY;
				const m = l.currentX,
					g = l.currentY;
				if (!w(e, n, m)) return;
				Object.assign(a, {
					isTouched: !0,
					isMoved: !1,
					allowTouchCallbacks: !0,
					isScrolling: void 0,
					startMoving: void 0
				}), l.startX = m, l.startY = g, a.touchStartTime = (0, s.d)(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
				let v = !0;
				u.matches(a.focusableElements) && (v = !1, "SELECT" === u.nodeName && (a.isTouched = !1)), i.activeElement && i.activeElement.matches(a.focusableElements) && i.activeElement !== u && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !u.matches(a.focusableElements)) && i.activeElement.blur();
				const y = v && e.allowTouchMove && o.touchStartPreventDefault;
				!o.touchStartForcePreventDefault && !y || u.isContentEditable || n.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", n)
			}

			function C(t) {
				const e = (0, r.g)(),
					i = this,
					n = i.touchEventsData,
					{
						params: a,
						touches: o,
						rtlTranslate: l,
						enabled: h
					} = i;
				if (!h) return;
				if (!a.simulateTouch && "mouse" === t.pointerType) return;
				let u, c = t;
				if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
					if (null !== n.touchId) return;
					if (c.pointerId !== n.pointerId) return
				}
				if ("touchmove" === c.type) {
					if (u = [...c.changedTouches].filter((t => t.identifier === n.touchId))[0], !u || u.identifier !== n.touchId) return
				} else u = c;
				if (!n.isTouched) return void(n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", c));
				const p = u.pageX,
					d = u.pageY;
				if (c.preventedByNestedSwiper) return o.startX = p, void(o.startY = d);
				if (!i.allowTouchMove) return c.target.matches(n.focusableElements) || (i.allowClick = !1), void(n.isTouched && (Object.assign(o, {
					startX: p,
					startY: d,
					currentX: p,
					currentY: d
				}), n.touchStartTime = (0, s.d)()));
				if (a.touchReleaseOnEdges && !a.loop)
					if (i.isVertical()) {
						if (d < o.startY && i.translate <= i.maxTranslate() || d > o.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
					} else if (p < o.startX && i.translate <= i.maxTranslate() || p > o.startX && i.translate >= i.minTranslate()) return;
				if (e.activeElement && e.activeElement.matches(n.focusableElements) && e.activeElement !== c.target && "mouse" !== c.pointerType && e.activeElement.blur(), e.activeElement && c.target === e.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(i.allowClick = !1);
				n.allowTouchCallbacks && i.emit("touchMove", c), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = d;
				const f = o.currentX - o.startX,
					m = o.currentY - o.startY;
				if (i.params.threshold && Math.sqrt(f ** 2 + m ** 2) < i.params.threshold) return;
				if (void 0 === n.isScrolling) {
					let t;
					i.isHorizontal() && o.currentY === o.startY || i.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : f * f + m * m >= 25 && (t = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, n.isScrolling = i.isHorizontal() ? t > a.touchAngle : 90 - t > a.touchAngle)
				}
				if (n.isScrolling && i.emit("touchMoveOpposite", c), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling || "touchmove" === c.type && n.preventTouchMoveFromPointerMove) return void(n.isTouched = !1);
				if (!n.startMoving) return;
				i.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
				let g = i.isHorizontal() ? f : m,
					v = i.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
				a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= a.touchRatio, l && (g = -g, v = -v);
				const y = i.touchesDirection;
				i.swipeDirection = g > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
				const D = i.params.loop && !a.cssMode,
					b = "next" === i.touchesDirection && i.allowSlideNext || "prev" === i.touchesDirection && i.allowSlidePrev;
				if (!n.isMoved) {
					if (D && b && i.loopFix({
							direction: i.swipeDirection
						}), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
						const t = new window.CustomEvent("transitionend", {
							bubbles: !0,
							cancelable: !0,
							detail: {
								bySwiperTouchMove: !0
							}
						});
						i.wrapperEl.dispatchEvent(t)
					}
					n.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", c)
				}
				if ((new Date).getTime(), n.isMoved && n.allowThresholdMove && y !== i.touchesDirection && D && b && Math.abs(g) >= 1) return Object.assign(o, {
					startX: p,
					startY: d,
					currentX: p,
					currentY: d,
					startTranslate: n.currentTranslate
				}), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
				i.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
				let _ = !0,
					w = a.resistanceRatio;
				if (a.touchReleaseOnEdges && (w = 0), g > 0 ? (D && b && n.allowThresholdMove && n.currentTranslate > (a.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
						direction: "prev",
						setTranslate: !0,
						activeSlideIndex: 0
					}), n.currentTranslate > i.minTranslate() && (_ = !1, a.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + g) ** w))) : g < 0 && (D && b && n.allowThresholdMove && n.currentTranslate < (a.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + ("auto" !== a.slidesPerView && i.slides.length - a.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
						direction: "next",
						setTranslate: !0,
						activeSlideIndex: i.slides.length - ("auto" === a.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
					}), n.currentTranslate < i.maxTranslate() && (_ = !1, a.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - g) ** w))), _ && (c.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate), a.threshold > 0) {
					if (!(Math.abs(g) > a.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
					if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = i.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
				}
				a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
			}

			function E(t) {
				const e = this,
					i = e.touchEventsData;
				let r, n = t;
				n.originalEvent && (n = n.originalEvent);
				if ("touchend" === n.type || "touchcancel" === n.type) {
					if (r = [...n.changedTouches].filter((t => t.identifier === i.touchId))[0], !r || r.identifier !== i.touchId) return
				} else {
					if (null !== i.touchId) return;
					if (n.pointerId !== i.pointerId) return;
					r = n
				}
				if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type)) {
					if (!(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView))) return
				}
				i.pointerId = null, i.touchId = null;
				const {
					params: a,
					touches: o,
					rtlTranslate: l,
					slidesGrid: h,
					enabled: u
				} = e;
				if (!u) return;
				if (!a.simulateTouch && "mouse" === n.pointerType) return;
				if (i.allowTouchCallbacks && e.emit("touchEnd", n), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && a.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
				a.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
				const c = (0, s.d)(),
					p = c - i.touchStartTime;
				if (e.allowClick) {
					const t = n.path || n.composedPath && n.composedPath();
					e.updateClickedSlide(t && t[0] || n.target, t), e.emit("tap click", n), p < 300 && c - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", n)
				}
				if (i.lastClickTime = (0, s.d)(), (0, s.n)((() => {
						e.destroyed || (e.allowClick = !0)
					})), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === o.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
				let d;
				if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, d = a.followFinger ? l ? e.translate : -e.translate : -i.currentTranslate, a.cssMode) return;
				if (a.freeMode && a.freeMode.enabled) return void e.freeMode.onTouchEnd({
					currentPos: d
				});
				const f = d >= -e.maxTranslate() && !e.params.loop;
				let m = 0,
					g = e.slidesSizesGrid[0];
				for (let t = 0; t < h.length; t += t < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
					const e = t < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
					void 0 !== h[t + e] ? (f || d >= h[t] && d < h[t + e]) && (m = t, g = h[t + e] - h[t]) : (f || d >= h[t]) && (m = t, g = h[h.length - 1] - h[h.length - 2])
				}
				let v = null,
					y = null;
				a.rewind && (e.isBeginning ? y = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
				const D = (d - h[m]) / g,
					b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
				if (p > a.longSwipesMs) {
					if (!a.longSwipes) return void e.slideTo(e.activeIndex);
					"next" === e.swipeDirection && (D >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? v : m + b) : e.slideTo(m)), "prev" === e.swipeDirection && (D > 1 - a.longSwipesRatio ? e.slideTo(m + b) : null !== y && D < 0 && Math.abs(D) > a.longSwipesRatio ? e.slideTo(y) : e.slideTo(m))
				} else {
					if (!a.shortSwipes) return void e.slideTo(e.activeIndex);
					e.navigation && (n.target === e.navigation.nextEl || n.target === e.navigation.prevEl) ? n.target === e.navigation.nextEl ? e.slideTo(m + b) : e.slideTo(m) : ("next" === e.swipeDirection && e.slideTo(null !== v ? v : m + b), "prev" === e.swipeDirection && e.slideTo(null !== y ? y : m))
				}
			}

			function T() {
				const t = this,
					{
						params: e,
						el: i
					} = t;
				if (i && 0 === i.offsetWidth) return;
				e.breakpoints && t.setBreakpoint();
				const {
					allowSlideNext: r,
					allowSlidePrev: s,
					snapGrid: n
				} = t, a = t.virtual && t.params.virtual.enabled;
				t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
				const o = a && e.loop;
				!("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || o ? t.params.loop && !a ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout((() => {
					t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
				}), 500)), t.allowSlidePrev = s, t.allowSlideNext = r, t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
			}

			function S(t) {
				const e = this;
				e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
			}

			function k() {
				const t = this,
					{
						wrapperEl: e,
						rtlTranslate: i,
						enabled: r
					} = t;
				if (!r) return;
				let s;
				t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
				const n = t.maxTranslate() - t.minTranslate();
				s = 0 === n ? 0 : (t.translate - t.minTranslate()) / n, s !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
			}

			function P(t) {
				const e = this;
				f(e, t.target), e.params.cssMode || "auto" !== e.params.slidesPerView && !e.params.autoHeight || e.update()
			}

			function A() {
				const t = this;
				t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
			}
			const M = (t, e) => {
				const i = (0, r.g)(),
					{
						params: s,
						el: n,
						wrapperEl: a,
						device: o
					} = t,
					l = !!s.nested,
					h = "on" === e ? "addEventListener" : "removeEventListener",
					u = e;
				n && "string" != typeof n && (i[h]("touchstart", t.onDocumentTouchStart, {
					passive: !1,
					capture: l
				}), n[h]("touchstart", t.onTouchStart, {
					passive: !1
				}), n[h]("pointerdown", t.onTouchStart, {
					passive: !1
				}), i[h]("touchmove", t.onTouchMove, {
					passive: !1,
					capture: l
				}), i[h]("pointermove", t.onTouchMove, {
					passive: !1,
					capture: l
				}), i[h]("touchend", t.onTouchEnd, {
					passive: !0
				}), i[h]("pointerup", t.onTouchEnd, {
					passive: !0
				}), i[h]("pointercancel", t.onTouchEnd, {
					passive: !0
				}), i[h]("touchcancel", t.onTouchEnd, {
					passive: !0
				}), i[h]("pointerout", t.onTouchEnd, {
					passive: !0
				}), i[h]("pointerleave", t.onTouchEnd, {
					passive: !0
				}), i[h]("contextmenu", t.onTouchEnd, {
					passive: !0
				}), (s.preventClicks || s.preventClicksPropagation) && n[h]("click", t.onClick, !0), s.cssMode && a[h]("scroll", t.onScroll), s.updateOnWindowResize ? t[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : t[u]("observerUpdate", T, !0), n[h]("load", t.onLoad, {
					capture: !0
				}))
			};
			const F = (t, e) => t.grid && e.grid && e.grid.rows > 1;
			var L = {
				init: !0,
				direction: "horizontal",
				oneWayMovement: !1,
				swiperElementNodeName: "SWIPER-CONTAINER",
				touchEventsTarget: "wrapper",
				initialSlide: 0,
				speed: 300,
				cssMode: !1,
				updateOnWindowResize: !0,
				resizeObserver: !0,
				nested: !1,
				createElements: !1,
				eventsPrefix: "swiper",
				enabled: !0,
				focusableElements: "input, select, option, textarea, button, video, label",
				width: null,
				height: null,
				preventInteractionOnTransition: !1,
				userAgent: null,
				url: null,
				edgeSwipeDetection: !1,
				edgeSwipeThreshold: 20,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: void 0,
				breakpointsBase: "window",
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerGroup: 1,
				slidesPerGroupSkip: 0,
				slidesPerGroupAuto: !1,
				centeredSlides: !1,
				centeredSlidesBounds: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				centerInsufficientSlides: !1,
				watchOverflow: !0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 5,
				touchMoveStopPropagation: !1,
				touchStartPreventDefault: !0,
				touchStartForcePreventDefault: !1,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: .85,
				watchSlidesProgress: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				loop: !1,
				loopAddBlankSlides: !0,
				loopAdditionalSlides: 0,
				loopPreventsSliding: !0,
				rewind: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				maxBackfaceHiddenSlides: 10,
				containerModifierClass: "swiper-",
				slideClass: "swiper-slide",
				slideBlankClass: "swiper-slide-blank",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideFullyVisibleClass: "swiper-slide-fully-visible",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				lazyPreloaderClass: "swiper-lazy-preloader",
				lazyPreloadPrevNext: 0,
				runCallbacksOnInit: !0,
				_emitClasses: !1
			};

			function I(t, e) {
				return function(i) {
					void 0 === i && (i = {});
					const r = Object.keys(i)[0],
						n = i[r];
					"object" == typeof n && null !== n ? (!0 === t[r] && (t[r] = {
						enabled: !0
					}), "navigation" === r && t[r] && t[r].enabled && !t[r].prevEl && !t[r].nextEl && (t[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && t[r] && t[r].enabled && !t[r].el && (t[r].auto = !0), r in t && "enabled" in n ? ("object" != typeof t[r] || "enabled" in t[r] || (t[r].enabled = !0), t[r] || (t[r] = {
						enabled: !1
					}), (0, s.w)(e, i)) : (0, s.w)(e, i)) : (0, s.w)(e, i)
				}
			}
			const O = {
					eventsEmitter: c,
					update: v,
					translate: y,
					transition: {
						setTransition: function(t, e) {
							const i = this;
							i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = 0 === t ? "0ms" : ""), i.emit("setTransition", t, e)
						},
						transitionStart: function(t, e) {
							void 0 === t && (t = !0);
							const i = this,
								{
									params: r
								} = i;
							r.cssMode || (r.autoHeight && i.updateAutoHeight(), D({
								swiper: i,
								runCallbacks: t,
								direction: e,
								step: "Start"
							}))
						},
						transitionEnd: function(t, e) {
							void 0 === t && (t = !0);
							const i = this,
								{
									params: r
								} = i;
							i.animating = !1, r.cssMode || (i.setTransition(0), D({
								swiper: i,
								runCallbacks: t,
								direction: e,
								step: "End"
							}))
						}
					},
					slide: b,
					loop: _,
					grabCursor: {
						setGrabCursor: function(t) {
							const e = this;
							if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
							const i = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
							e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame((() => {
								e.__preventObserver__ = !1
							}))
						},
						unsetGrabCursor: function() {
							const t = this;
							t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame((() => {
								t.__preventObserver__ = !1
							})))
						}
					},
					events: {
						attachEvents: function() {
							const t = this,
								{
									params: e
								} = t;
							t.onTouchStart = x.bind(t), t.onTouchMove = C.bind(t), t.onTouchEnd = E.bind(t), t.onDocumentTouchStart = A.bind(t), e.cssMode && (t.onScroll = k.bind(t)), t.onClick = S.bind(t), t.onLoad = P.bind(t), M(t, "on")
						},
						detachEvents: function() {
							M(this, "off")
						}
					},
					breakpoints: {
						setBreakpoint: function() {
							const t = this,
								{
									realIndex: e,
									initialized: i,
									params: r,
									el: n
								} = t,
								a = r.breakpoints;
							if (!a || a && 0 === Object.keys(a).length) return;
							const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
							if (!o || t.currentBreakpoint === o) return;
							const l = (o in a ? a[o] : void 0) || t.originalParams,
								h = F(t, r),
								u = F(t, l),
								c = t.params.grabCursor,
								p = l.grabCursor,
								d = r.enabled;
							h && !u ? (n.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), t.emitContainerClasses()) : !h && u && (n.classList.add(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && n.classList.add(`${r.containerModifierClass}grid-column`), t.emitContainerClasses()), c && !p ? t.unsetGrabCursor() : !c && p && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((e => {
								if (void 0 === l[e]) return;
								const i = r[e] && r[e].enabled,
									s = l[e] && l[e].enabled;
								i && !s && t[e].disable(), !i && s && t[e].enable()
							}));
							const f = l.direction && l.direction !== r.direction,
								m = r.loop && (l.slidesPerView !== r.slidesPerView || f),
								g = r.loop;
							f && i && t.changeDirection(), (0, s.w)(t.params, l);
							const v = t.params.enabled,
								y = t.params.loop;
							Object.assign(t, {
								allowTouchMove: t.params.allowTouchMove,
								allowSlideNext: t.params.allowSlideNext,
								allowSlidePrev: t.params.allowSlidePrev
							}), d && !v ? t.disable() : !d && v && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", l), i && (m ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !g && y ? (t.loopCreate(e), t.updateSlides()) : g && !y && t.loopDestroy()), t.emit("breakpoint", l)
						},
						getBreakpoint: function(t, e, i) {
							if (void 0 === e && (e = "window"), !t || "container" === e && !i) return;
							let s = !1;
							const n = (0, r.a)(),
								a = "window" === e ? n.innerHeight : i.clientHeight,
								o = Object.keys(t).map((t => {
									if ("string" == typeof t && 0 === t.indexOf("@")) {
										const e = parseFloat(t.substr(1));
										return {
											value: a * e,
											point: t
										}
									}
									return {
										value: t,
										point: t
									}
								}));
							o.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
							for (let t = 0; t < o.length; t += 1) {
								const {
									point: r,
									value: a
								} = o[t];
								"window" === e ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r) : a <= i.clientWidth && (s = r)
							}
							return s || "max"
						}
					},
					checkOverflow: {
						checkOverflow: function() {
							const t = this,
								{
									isLocked: e,
									params: i
								} = t,
								{
									slidesOffsetBefore: r
								} = i;
							if (r) {
								const e = t.slides.length - 1,
									i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * r;
								t.isLocked = t.size > i
							} else t.isLocked = 1 === t.snapGrid.length;
							!0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
						}
					},
					classes: {
						addClasses: function() {
							const t = this,
								{
									classNames: e,
									params: i,
									rtl: r,
									el: s,
									device: n
								} = t,
								a = function(t, e) {
									const i = [];
									return t.forEach((t => {
										"object" == typeof t ? Object.keys(t).forEach((r => {
											t[r] && i.push(e + r)
										})) : "string" == typeof t && i.push(e + t)
									})), i
								}(["initialized", i.direction, {
									"free-mode": t.params.freeMode && i.freeMode.enabled
								}, {
									autoheight: i.autoHeight
								}, {
									rtl: r
								}, {
									grid: i.grid && i.grid.rows > 1
								}, {
									"grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
								}, {
									android: n.android
								}, {
									ios: n.ios
								}, {
									"css-mode": i.cssMode
								}, {
									centered: i.cssMode && i.centeredSlides
								}, {
									"watch-progress": i.watchSlidesProgress
								}], i.containerModifierClass);
							e.push(...a), s.classList.add(...e), t.emitContainerClasses()
						},
						removeClasses: function() {
							const {
								el: t,
								classNames: e
							} = this;
							t && "string" != typeof t && (t.classList.remove(...e), this.emitContainerClasses())
						}
					}
				},
				R = {};
			class B {
				constructor() {
					let t, e;
					for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
					1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? e = n[0] : [t, e] = n, e || (e = {}), e = (0, s.w)({}, e), t && !e.el && (e.el = t);
					const o = (0, r.g)();
					if (e.el && "string" == typeof e.el && o.querySelectorAll(e.el).length > 1) {
						const t = [];
						return o.querySelectorAll(e.el).forEach((i => {
							const r = (0, s.w)({}, e, {
								el: i
							});
							t.push(new B(r))
						})), t
					}
					const c = this;
					c.__swiper__ = !0, c.support = l(), c.device = h({
						userAgent: e.userAgent
					}), c.browser = u(), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = [...c.__modules__], e.modules && Array.isArray(e.modules) && c.modules.push(...e.modules);
					const p = {};
					c.modules.forEach((t => {
						t({
							params: e,
							swiper: c,
							extendParams: I(e, p),
							on: c.on.bind(c),
							once: c.once.bind(c),
							off: c.off.bind(c),
							emit: c.emit.bind(c)
						})
					}));
					const d = (0, s.w)({}, L, p);
					return c.params = (0, s.w)({}, d, R, e), c.originalParams = (0, s.w)({}, c.params), c.passedParams = (0, s.w)({}, e), c.params && c.params.on && Object.keys(c.params.on).forEach((t => {
						c.on(t, c.params.on[t])
					})), c.params && c.params.onAny && c.onAny(c.params.onAny), Object.assign(c, {
						enabled: c.params.enabled,
						el: t,
						classNames: [],
						slides: [],
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal() {
							return "horizontal" === c.params.direction
						},
						isVertical() {
							return "vertical" === c.params.direction
						},
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						cssOverflowAdjustment() {
							return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
						},
						allowSlideNext: c.params.allowSlideNext,
						allowSlidePrev: c.params.allowSlidePrev,
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							focusableElements: c.params.focusableElements,
							lastClickTime: 0,
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							startMoving: void 0,
							pointerId: null,
							touchId: null
						},
						allowClick: !0,
						allowTouchMove: c.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), c.emit("_swiper"), c.params.init && c.init(), c
				}
				getDirectionLabel(t) {
					return this.isHorizontal() ? t : {
						width: "height",
						"margin-top": "margin-left",
						"margin-bottom ": "margin-right",
						"margin-left": "margin-top",
						"margin-right": "margin-bottom",
						"padding-left": "padding-top",
						"padding-right": "padding-bottom",
						marginRight: "marginBottom"
					} [t]
				}
				getSlideIndex(t) {
					const {
						slidesEl: e,
						params: i
					} = this, r = (0, s.e)(e, `.${i.slideClass}, swiper-slide`), n = (0, s.h)(r[0]);
					return (0, s.h)(t) - n
				}
				getSlideIndexByData(t) {
					return this.getSlideIndex(this.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0])
				}
				recalcSlides() {
					const {
						slidesEl: t,
						params: e
					} = this;
					this.slides = (0, s.e)(t, `.${e.slideClass}, swiper-slide`)
				}
				enable() {
					const t = this;
					t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
				}
				disable() {
					const t = this;
					t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
				}
				setProgress(t, e) {
					const i = this;
					t = Math.min(Math.max(t, 0), 1);
					const r = i.minTranslate(),
						s = (i.maxTranslate() - r) * t + r;
					i.translateTo(s, void 0 === e ? 0 : e), i.updateActiveIndex(), i.updateSlidesClasses()
				}
				emitContainerClasses() {
					const t = this;
					if (!t.params._emitClasses || !t.el) return;
					const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
					t.emit("_containerClasses", e.join(" "))
				}
				getSlideClasses(t) {
					const e = this;
					return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
				}
				emitSlidesClasses() {
					const t = this;
					if (!t.params._emitClasses || !t.el) return;
					const e = [];
					t.slides.forEach((i => {
						const r = t.getSlideClasses(i);
						e.push({
							slideEl: i,
							classNames: r
						}), t.emit("_slideClass", i, r)
					})), t.emit("_slideClasses", e)
				}
				slidesPerViewDynamic(t, e) {
					void 0 === t && (t = "current"), void 0 === e && (e = !1);
					const {
						params: i,
						slides: r,
						slidesGrid: s,
						slidesSizesGrid: n,
						size: a,
						activeIndex: o
					} = this;
					let l = 1;
					if ("number" == typeof i.slidesPerView) return i.slidesPerView;
					if (i.centeredSlides) {
						let t, e = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
						for (let i = o + 1; i < r.length; i += 1) r[i] && !t && (e += Math.ceil(r[i].swiperSlideSize), l += 1, e > a && (t = !0));
						for (let i = o - 1; i >= 0; i -= 1) r[i] && !t && (e += r[i].swiperSlideSize, l += 1, e > a && (t = !0))
					} else if ("current" === t)
						for (let t = o + 1; t < r.length; t += 1) {
							(e ? s[t] + n[t] - s[o] < a : s[t] - s[o] < a) && (l += 1)
						} else
							for (let t = o - 1; t >= 0; t -= 1) {
								s[o] - s[t] < a && (l += 1)
							}
					return l
				}
				update() {
					const t = this;
					if (!t || t.destroyed) return;
					const {
						snapGrid: e,
						params: i
					} = t;

					function r() {
						const e = t.rtlTranslate ? -1 * t.translate : t.translate,
							i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
						t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
					}
					let s;
					if (i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
							e.complete && f(t, e)
						})), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) r(), i.autoHeight && t.updateAutoHeight();
					else {
						if (("auto" === i.slidesPerView || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
							const e = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
							s = t.slideTo(e.length - 1, 0, !1, !0)
						} else s = t.slideTo(t.activeIndex, 0, !1, !0);
						s || r()
					}
					i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
				}
				changeDirection(t, e) {
					void 0 === e && (e = !0);
					const i = this,
						r = i.params.direction;
					return t || (t = "horizontal" === r ? "vertical" : "horizontal"), t === r || "horizontal" !== t && "vertical" !== t || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((e => {
						"vertical" === t ? e.style.width = "" : e.style.height = ""
					})), i.emit("changeDirection"), e && i.update()), i
				}
				changeLanguageDirection(t) {
					const e = this;
					e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
				}
				mount(t) {
					const e = this;
					if (e.mounted) return !0;
					let i = t || e.params.el;
					if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
					i.swiper = e, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === e.params.swiperElementNodeName.toUpperCase() && (e.isElement = !0);
					const r = () => `.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;
					let n = (() => {
						if (i && i.shadowRoot && i.shadowRoot.querySelector) {
							return i.shadowRoot.querySelector(r())
						}
						return (0, s.e)(i, r())[0]
					})();
					return !n && e.params.createElements && (n = (0, s.c)("div", e.params.wrapperClass), i.append(n), (0, s.e)(i, `.${e.params.slideClass}`).forEach((t => {
						n.append(t)
					}))), Object.assign(e, {
						el: i,
						wrapperEl: n,
						slidesEl: e.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : n,
						hostEl: e.isElement ? i.parentNode.host : i,
						mounted: !0,
						rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, s.p)(i, "direction"),
						rtlTranslate: "horizontal" === e.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, s.p)(i, "direction")),
						wrongRTL: "-webkit-box" === (0, s.p)(n, "display")
					}), !0
				}
				init(t) {
					const e = this;
					if (e.initialized) return e;
					if (!1 === e.mount(t)) return e;
					e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.params.loop && e.loopCreate(), e.attachEvents();
					const i = [...e.el.querySelectorAll('[loading="lazy"]')];
					return e.isElement && i.push(...e.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((t => {
						t.complete ? f(e, t) : t.addEventListener("load", (t => {
							f(e, t.target)
						}))
					})), g(e), e.initialized = !0, g(e), e.emit("init"), e.emit("afterInit"), e
				}
				destroy(t, e) {
					void 0 === t && (t = !0), void 0 === e && (e = !0);
					const i = this,
						{
							params: r,
							el: n,
							wrapperEl: a,
							slides: o
						} = i;
					return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), e && (i.removeClasses(), n && "string" != typeof n && n.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach((t => {
						t.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), t.removeAttribute("style"), t.removeAttribute("data-swiper-slide-index")
					}))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((t => {
						i.off(t)
					})), !1 !== t && (i.el && "string" != typeof i.el && (i.el.swiper = null), (0, s.x)(i)), i.destroyed = !0), null
				}
				static extendDefaults(t) {
					(0, s.w)(R, t)
				}
				static get extendedDefaults() {
					return R
				}
				static get defaults() {
					return L
				}
				static installModule(t) {
					B.prototype.__modules__ || (B.prototype.__modules__ = []);
					const e = B.prototype.__modules__;
					"function" == typeof t && e.indexOf(t) < 0 && e.push(t)
				}
				static use(t) {
					return Array.isArray(t) ? (t.forEach((t => B.installModule(t))), B) : (B.installModule(t), B)
				}
			}
			Object.keys(O).forEach((t => {
				Object.keys(O[t]).forEach((e => {
					B.prototype[e] = O[t][e]
				}))
			})), B.use([function(t) {
				let {
					swiper: e,
					on: i,
					emit: s
				} = t;
				const n = (0, r.a)();
				let a = null,
					o = null;
				const l = () => {
						e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
					},
					h = () => {
						e && !e.destroyed && e.initialized && s("orientationchange")
					};
				i("init", (() => {
					e.params.resizeObserver && void 0 !== n.ResizeObserver ? e && !e.destroyed && e.initialized && (a = new ResizeObserver((t => {
						o = n.requestAnimationFrame((() => {
							const {
								width: i,
								height: r
							} = e;
							let s = i,
								n = r;
							t.forEach((t => {
								let {
									contentBoxSize: i,
									contentRect: r,
									target: a
								} = t;
								a && a !== e.el || (s = r ? r.width : (i[0] || i).inlineSize, n = r ? r.height : (i[0] || i).blockSize)
							})), s === i && n === r || l()
						}))
					})), a.observe(e.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", h))
				})), i("destroy", (() => {
					o && n.cancelAnimationFrame(o), a && a.unobserve && e.el && (a.unobserve(e.el), a = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", h)
				}))
			}, function(t) {
				let {
					swiper: e,
					extendParams: i,
					on: n,
					emit: a
				} = t;
				const o = [],
					l = (0, r.a)(),
					h = function(t, i) {
						void 0 === i && (i = {});
						const r = new(l.MutationObserver || l.WebkitMutationObserver)((t => {
							if (e.__preventObserver__) return;
							if (1 === t.length) return void a("observerUpdate", t[0]);
							const i = function() {
								a("observerUpdate", t[0])
							};
							l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
						}));
						r.observe(t, {
							attributes: void 0 === i.attributes || i.attributes,
							childList: e.isElement || (void 0 === i.childList || i).childList,
							characterData: void 0 === i.characterData || i.characterData
						}), o.push(r)
					};
				i({
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1
				}), n("init", (() => {
					if (e.params.observer) {
						if (e.params.observeParents) {
							const t = (0, s.a)(e.hostEl);
							for (let e = 0; e < t.length; e += 1) h(t[e])
						}
						h(e.hostEl, {
							childList: e.params.observeSlideChildren
						}), h(e.wrapperEl, {
							attributes: !1
						})
					}
				})), n("destroy", (() => {
					o.forEach((t => {
						t.disconnect()
					})), o.splice(0, o.length)
				}))
			}])
		}
	}
]);