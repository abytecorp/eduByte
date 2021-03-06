"use strict";
function _typeof(t) {
	return (_typeof =
		"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
			? function (t) {
				return typeof t;
			}
			: function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
			})(t);
}
function XM_Accordion(t) {
	var s = {
		triggerSelector: ".accordion-trigger",
		contentSelector: ".accordion-content",
		animation: { type: "all", speed: 0.3, ease: "ease-in-out" },
		paddingAnimation: !1,
		startOpenClass: "accordion-open",
		selectedClass: "selected",
		linkTriggers: !1,
	},
		d = {},
		n = function () {
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (var o, r = d.accordions[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
					var i = o.value;
					i.open && ((i.content.style.height = "auto"), (i.content.style.height = "".concat(i.content.scrollHeight, "px")));
				}
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (n) throw e;
				}
			}
		},
		e = function () {
			var t = document.querySelectorAll(s.triggerSelector);
			if (!t.length) throw new Error("Couldn't find ".concat(s.triggerSelector, " in the DOM"));
			var n = !0,
				e = !(d.accordions = []),
				o = void 0;
			try {
				for (var r, i = t[Symbol.iterator](); !(n = (r = i.next()).done); n = !0) {
					var a = r.value,
						c = a.querySelector(s.contentSelector);
					if (!c && !(c = a.parentElement.querySelector(s.contentSelector))) throw new Error("Couldn't find ".concat(s.contentSelector, " in ").concat(s.triggerSelector, " nor as it's sibling"));
					if (s.paddingAnimation) d.accordions.push({ trigger: a, content: c, padding: c.style.padding, open: !0, startOpen: c.classList.contains(s.startOpenClass) });
					else {
						var l = document.createElement("div");
						c.parentElement.appendChild(l), l.appendChild(c), d.accordions.push({ trigger: a, content: l, open: !0, startOpen: c.classList.contains(s.startOpenClass) });
					}
				}
			} catch (t) {
				(e = !0), (o = t);
			} finally {
				try {
					n || null == i.return || i.return();
				} finally {
					if (e) throw o;
				}
			}
		},
		o = function () {
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (var o, r = d.accordions[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
					var i = o.value;
					(i.content.style.overflow = "hidden"), i.startOpen ? ((i.content.style.height = "".concat(i.content.scrollHeight, "px")), i.content.parentElement.classList.add(s.selectedClass)) : f(i);
				}
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (n) throw e;
				}
			}
		},
		r = function () {
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (var o, r = d.accordions[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
					o.value.content.style.transition = "".concat(s.animation.type, " ").concat(s.animation.speed, "s ").concat(s.animation.ease);
				}
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (n) throw e;
				}
			}
		},
		i = function () {
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (
					var o,
					r = function () {
						var c = o.value;
						c.trigger.addEventListener("click", function () {
							if (s.linkTriggers) {
								var t = c.open ? f : y,
									n = !0,
									e = !1,
									o = void 0;
								try {
									for (var r, i = d.accordions[Symbol.iterator](); !(n = (r = i.next()).done); n = !0) {
										var a = r.value;
										f(a);
									}
								} catch (t) {
									(e = !0), (o = t);
								} finally {
									try {
										n || null == i.return || i.return();
									} finally {
										if (e) throw o;
									}
								}
								s.triggerOpens ? y(c) : t(c);
							} else l(c);
						});
					},
					i = d.accordions[Symbol.iterator]();
					!(t = (o = i.next()).done);
					t = !0
				)
					r();
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == i.return || i.return();
				} finally {
					if (n) throw e;
				}
			}
		},
		l = function (t) {
			t.open ? f(t) : y(t);
		},
		y = function (t) {
			t.open || ((t.open = !0), (t.content.style.height = "".concat(t.content.scrollHeight, "px")), t.content.parentElement.classList.add(s.selectedClass), s.paddingAnimation && (t.content.style.padding = t.padding));
		},
		f = function (t) {
			t.open && ((t.open = !1), (t.content.style.height = 0), t.content.parentElement.classList.remove(s.selectedClass), s.paddingAnimation && (t.content.style.padding = 0));
		};
	return (
		(function t(n, e) {
			var o;
			for (var r in e)
				"object" !== _typeof(e[r]) || e[r] instanceof Date ? (e[r] instanceof Date ? (n[r] = new Date(e[r].getTime())) : (n[r] = e[r])) : ((o = e[r] instanceof Array ? [] : {}), void 0 === n[r] && (n[r] = o), t(n[r], e[r]));
		})(s, t),
		e(),
		o(),
		r(),
		i(),
		window.addEventListener("resize", n),
		d
	);
}

("use strict");

function XM_Dropdown(t) {
	var c,
		g = {
			container: ".dropdown",
			trigger: ".dropdown-trigger",
			activeClass: "active",
			triggerEvent: "click",
			offset: {},
			animation: { type: "static", speed: 0.4, ease: "ease-in-out", zIndex: 9999, translateOffset: { horizontal: 40, vertical: 40 } },
			absolute: !1,
			closeOnWindowClick: !0,
			closeOnDropdownClick: !1,
			linkDropdowns: !0,
			controlToggle: !1,
		},
		h = [],
		n = {},
		r = function () {
			if (g.controlToggle) {
				var t = document.querySelectorAll(g.container);
				if (!t.length) throw new Error("".concat(g.container, " not found in the DOM"));
				var n = !0,
					r = !1,
					o = void 0;
				try {
					for (var e, i = t[Symbol.iterator](); !(n = (e = i.next()).done); n = !0) {
						var a = e.value,
							l = {};
						(l.parent = a.parentElement), (l.container = a), h.push(l);
					}
				} catch (t) {
					(r = !0), (o = t);
				} finally {
					try {
						n || null == i.return || i.return();
					} finally {
						if (r) throw o;
					}
				}
			} else {
				var c = document.querySelectorAll(g.trigger);
				if (!c.length) throw new Error("".concat(g.trigger, " not found in the DOM"));
				var f = !0,
					s = !1,
					u = void 0;
				try {
					for (var y, v = c[Symbol.iterator](); !(f = (y = v.next()).done); f = !0) {
						var d = y.value,
							p = d.parentElement.querySelector(g.container);
						if (!p) throw new Error("".concat(g.container, " not found as sibling of ").concat(g.trigger));
						var m = {};
						(m.parent = p.parentElement), (m.trigger = d), (m.container = p), h.push(m);
					}
				} catch (t) {
					(s = !0), (u = t);
				} finally {
					try {
						f || null == v.return || v.return();
					} finally {
						if (s) throw u;
					}
				}
			}
		},
		o = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					a(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		},
		a = function (t) {
			for (var n in ((t.parent.style.position = g.absolute ? "absolute" : "relative"), S(t.container, { position: "absolute", zIndex: g.animation.zIndex }), g.offset)) t.container.style[n] = "".concat(g.offset[n], "px");
		},
		e = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					l(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		},
		l = function (t) {
			("translate-top" !== g.animation.type && "translate-bottom" !== g.animation.type) ||
				(t.container.style.transition = "transform "
					.concat(g.animation.speed, "s ")
					.concat(g.animation.ease, ",\n                                             opacity ")
					.concat(g.animation.speed, "s ")
					.concat(g.animation.ease, ",\n                                             visibility ")
					.concat(g.animation.speed, "s ")
					.concat(g.animation.ease));
		},
		i = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					f(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		},
		f = function (t) {
			"click" === g.triggerEvent
				? t.trigger.addEventListener("click", function () {
					v(t);
				})
				: "hover" === g.triggerEvent &&
				(t.trigger.addEventListener("mouseenter", function () {
					m(t);
				}),
					t.trigger.addEventListener("mouseleave", function () {
						p(t);
					}));
		},
		s = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					u(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		},
		u = function (t) {
			t.container.addEventListener("click", function () {
				p(t);
			});
		},
		y = function () {
			window.addEventListener("click", function (t) {
				if (c) {
					var n = t.target;
					do {
						var r = !0,
							o = !1,
							e = void 0;
						try {
							for (var i, a = h[Symbol.iterator](); !(r = (i = a.next()).done); r = !0) {
								var l = i.value;
								if (n === l.trigger || n === l.container) return;
							}
						} catch (t) {
							(o = !0), (e = t);
						} finally {
							try {
								r || null == a.return || a.return();
							} finally {
								if (o) throw e;
							}
						}
					} while ((n = n.parentElement));
					d();
				}
			});
		},
		v = function (t) {
			(t.active ? p : m)(t);
		},
		d = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					p(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		},
		p = function (t) {
			w(t),
				g.controlToggle ||
				(function (t) {
					t.trigger.classList.remove(g.activeClass);
				})(t),
				(t.active = !1),
				(c = !1);
		},
		m = function (t) {
			g.linkDropdowns && d(),
				b(t),
				g.controlToggle ||
				(function (t) {
					t.trigger.classList.add(g.activeClass);
				})(t),
				(t.active = !0),
				(c = !0);
		},
		w = function (t) {
			"static" === g.animation.type
				? S(t.container, { display: "none" })
				: "translate-top" === g.animation.type
					? S(t.container, { opacity: 0, visibility: "hidden", transform: "translate(0, -".concat(g.animation.translateOffset.vertical, "px)") })
					: "translate-bottom" === g.animation.type && S(t.container, { opacity: 0, visibility: "hidden", transform: "translate(0, ".concat(g.animation.translateOffset.vertical, "px)") });
		},
		b = function (t) {
			"static" === g.animation.type
				? S(t.container, { display: "block" })
				: ("translate-top" !== g.animation.type && "translate-bottom" !== g.animation.type) || S(t.container, { opacity: 1, visibility: "visible", transform: "translate(0, 0)" });
		},
		S = function (t, n) {
			for (var r in n) t.style[r] = n[r];
		};
	return (
		(function t(n, r) {
			var o;
			for (var e in r)
				"object" !== _typeof(r[e]) || r[e] instanceof Date ? (r[e] instanceof Date ? (n[e] = new Date(r[e].getTime())) : (n[e] = r[e])) : ((o = r[e] instanceof Array ? [] : {}), void 0 === n[e] && (n[e] = o), t(n[e], r[e]));
		})(g, t),
		r(),
		o(),
		g.controlToggle || i(),
		g.closeOnDropdownClick && s(),
		g.closeOnWindowClick && y(),
		d(),
		window.setTimeout(e, 300),
		(n.showDropdowns = function () {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var o, e = h[Symbol.iterator](); !(t = (o = e.next()).done); t = !0) {
					var i = o.value;
					m(i);
				}
			} catch (t) {
				(n = !0), (r = t);
			} finally {
				try {
					t || null == e.return || e.return();
				} finally {
					if (n) throw r;
				}
			}
		}),
		(n.hideDropdowns = d),
		n
	);
}

("use strict");
function XM_Hexagon(t) {
	var p = {
		width: 100,
		height: 110,
		lineWidth: 6,
		lineColor: "#fff",
		lineCap: "square",
		buttEnd: !1,
		fill: !1,
		clip: !1,
		roundedCorners: !1,
		roundedCornerRadius: 4,
		animation: { easing: !0 },
		animateOnScroll: !1,
		controlAnimation: !1,
		speed: 50,
		scale: { start: 0, end: 1, stop: 1 },
		invertedProgress: !1,
		reverse: !1,
		linkText: !1,
		innerLink: !0,
		linkToContainer: ".bar-progress-wrap",
		linkTo: ".bar-progress-text",
		extraLinkTo: [],
		linkUnits: "%",
		linkUnitsSelector: ".bar-progress-unit",
		innerTextFollowsProgress: !1,
		decimalPoints: 0,
		barTextStyle: { primaryColor: "#fff", secondaryColor: "#363636", font: "bold 10px Exo, sans-serif" },
	},
		h = [],
		v = {},
		i = function () {
			var t = document.querySelectorAll(p.container);
			if (!t.length) throw Error('Unable to find "'.concat(p.container, '" on the DOM'));
			var i = !0,
				e = !1,
				n = void 0;
			try {
				for (var r, o = t[Symbol.iterator](); !(i = (r = o.next()).done); i = !0) {
					var a = r.value,
						d = {};
					(d.container = a),
						(d.imageSrc = a.getAttribute("data-src")),
						(d.canvas = document.createElement("canvas")),
						(d.ctx = d.canvas.getContext("2d")),
						(d.finishedDrawing = !1),
						(d.canvas.width = p.width),
						(d.canvas.height = p.height),
						(d.canvas.style.position = "absolute"),
						(d.canvas.style.top = 0),
						(d.canvas.style.left = 0),
						(d.container.style.width = "".concat(p.width, "px")),
						(d.container.style.height = "".concat(p.height, "px")),
						(d.container.style.position = "relative"),
						d.container.append(d.canvas),
						h.push(d);
				}
			} catch (t) {
				(e = !0), (n = t);
			} finally {
				try {
					i || null == o.return || o.return();
				} finally {
					if (e) throw n;
				}
			}
		},
		e = function () {
			t.scale &&
				((p.scale.stop = p.scale.stop > p.scale.end ? p.scale.end : p.scale.stop), (p.scale.stop = p.scale.stop < p.scale.start ? p.scale.start : p.scale.stop), (p.scale.stop = void 0 !== t.scale.stop ? p.scale.stop : p.scale.end)),
				(v.sideWidth = o(p.width, p.height)),
				(v.perimeter = 6 * v.sideWidth),
				(v.lineLength = (p.scale.stop / p.scale.end) * v.perimeter),
				(v.sideCount = Math.floor(v.lineLength / v.sideWidth)),
				(p.stopPoint = p.scale.stop);
		},
		n = function () {
			var t = !0,
				i = !1,
				e = void 0;
			try {
				for (var n, r = h[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
					var o = n.value;
					if (p.gradient) {
						var a = o.ctx.createLinearGradient(0, p.height, p.width, 0);
						a.addColorStop(0, p.gradient.colors[0]), a.addColorStop(1, p.gradient.colors[1]), (o.ctx.strokeStyle = a), (o.ctx.fillStyle = a);
					} else (o.ctx.strokeStyle = p.lineColor), (o.ctx.fillStyle = p.lineColor);
					(o.ctx.lineCap = p.lineCap), (o.ctx.lineWidth = p.lineWidth);
				}
			} catch (t) {
				(i = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (i) throw e;
				}
			}
		},
		r = function () {
			var t = !0,
				i = !1,
				e = void 0;
			try {
				for (var n, r = h[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
					var o = n.value;
					(p.speed = 100 < p.speed ? 100 : p.speed),
						(p.speed = p.speed < 1 ? 1 : p.speed),
						(o.animation = {}),
						(o.animation.easing = p.animation.easing),
						(o.animation.speed = p.speed),
						(o.animation.step = (o.animation.speed * p.width) / 2e3),
						(o.animation.currentProgress = 0);
				}
			} catch (t) {
				(i = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (i) throw e;
				}
			}
		};
	function a(t) {
		for (var i = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight, e = t.canvas, n = e.offsetTop; (e = e.offsetParent);) n += e.offsetTop;
		return n <= i;
	}
	function d(t) {
		t.animation.currentProgress < p.stopPoint &&
			(t.animation.easing
				? ((t.animation.currentProgress += 0.06 * (p.stopPoint - t.animation.currentProgress)), t.animation.currentProgress >= p.stopPoint - 1 && ((t.animation.currentProgress = p.stopPoint), (t.finishedDrawing = !0)))
				: ((t.animation.currentProgress += t.animation.step), t.animation.currentProgress >= p.stopPoint && ((t.animation.currentProgress = p.stopPoint), (t.finishedDrawing = !0)))),
			s(t, t.animation.currentProgress),
			t.finishedDrawing || window.requestAnimationFrame(d);
	}
	function m(t, i) {
		return Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2));
	}
	function T(t, i, e) {
		var n = m(t, i),
			r = Math.min(e, n),
			o = (function (t, i, e) {
				var n = i.x - t.x,
					r = i.y - t.y,
					o = m(t, i),
					a = n / o,
					d = r / o;
				return { x: t.x + e * a, y: t.y + e * d };
			})(t, i, r);
		return { x: o.x, y: o.y, distance: r };
	}
	var o = function (t, i) {
		return (-i / 2 + Math.sqrt(Math.pow(i, 2) + 0.75 * Math.pow(t, 2))) / 1.5;
	},
		s = function (n, t) {
			var i = 1 < arguments.length && void 0 !== t ? t : p.stopPoint;
			if ((n.ctx.clearRect(0, 0, p.width, p.height), 0 !== i)) {
				if ((n.ctx.beginPath(), p.roundedCorners)) {
					var e = p.fill || p.clip ? 0 : p.lineWidth / 2,
						r =
							(function (t) {
								var i = (p.height - v.sideWidth) / p.width;
								return (t - (v.sideWidth - p.height) / 2) / i;
							})(p.roundedCornerRadius) -
							p.width / 2,
						o = (function (t) {
							return ((p.height - v.sideWidth) / p.width) * t + (v.sideWidth - p.height) / 2;
						})(p.width - r);
					if (p.clip || p.fill)
						n.ctx.moveTo(p.width / 2 - r, p.roundedCornerRadius + e),
							n.ctx.quadraticCurveTo(p.width / 2, 0 + e, p.width / 2 + r, p.roundedCornerRadius + e),
							n.ctx.lineTo(p.width - e - r, o),
							n.ctx.quadraticCurveTo(p.width - e, (p.height - v.sideWidth) / 2, p.width - e, (p.height - v.sideWidth) / 2 + r),
							n.ctx.lineTo(p.width - e, p.height - (p.height - v.sideWidth) / 2 - r),
							n.ctx.quadraticCurveTo(p.width - e, p.height - (p.height - v.sideWidth) / 2, p.width - e - r, p.height - o),
							n.ctx.lineTo(p.width / 2 + r, p.height - e - p.roundedCornerRadius),
							n.ctx.quadraticCurveTo(p.width / 2, p.height - e, p.width / 2 - r, p.height - e - p.roundedCornerRadius),
							n.ctx.lineTo(0 + e + r, p.height - o),
							n.ctx.quadraticCurveTo(0 + e, p.height - (p.height - v.sideWidth) / 2, 0 + e, p.height - (p.height - v.sideWidth) / 2 - r),
							n.ctx.lineTo(0 + e, (p.height - v.sideWidth) / 2 + r),
							n.ctx.quadraticCurveTo(0 + e, (p.height - v.sideWidth) / 2, 0 + e + r, o),
							n.ctx.lineTo(p.width / 2 - r, p.roundedCornerRadius + e);
					else
						for (; ;) {
							var a = { x: p.width / 2 - r, y: p.roundedCornerRadius + e },
								d = { x: p.width / 2, y: 0 + e },
								h = { x: p.width / 2 + r, y: p.roundedCornerRadius + e },
								s = m(a, d) + m(d, h),
								c = { x: p.width / 2, y: 0 + e },
								l = { x: p.width / 2 + r, y: p.roundedCornerRadius + e },
								u = m(c, l),
								g = v.lineLength - u - s,
								f = void 0,
								x = void 0,
								w = void 0;
							if (
								((f = { x: p.width / 2 + r, y: p.roundedCornerRadius + e }),
									(x = { x: p.width - e - r, y: o }),
									(w = T(f, x, g)),
									n.ctx.moveTo(p.width / 2 + r, p.roundedCornerRadius + e),
									n.ctx.lineTo(w.x, w.y),
									(g -= w.distance) <= 0)
							)
								break;
							if (i <= 1 / 6) break;
							if ((n.ctx.quadraticCurveTo(p.width - e, (p.height - v.sideWidth) / 2, p.width - e, (p.height - v.sideWidth) / 2 + r), (g -= s) <= 0)) break;
							if (((f = { x: p.width - e, y: (p.height - v.sideWidth) / 2 + r }), (x = { x: p.width - e, y: p.height - (p.height - v.sideWidth) / 2 - r }), (w = T(f, x, g)), n.ctx.lineTo(w.x, w.y), (g -= w.distance) <= 0))
								break;
							if (i <= 2 / 6) break;
							if ((n.ctx.quadraticCurveTo(p.width - e, p.height - (p.height - v.sideWidth) / 2, p.width - e - r, p.height - o), (g -= s) <= 0)) break;
							if (((f = { x: p.width - e - r, y: p.height - o }), (x = { x: p.width / 2 + r, y: p.height - e - p.roundedCornerRadius }), (w = T(f, x, g)), n.ctx.lineTo(w.x, w.y), (g -= w.distance) <= 0)) break;
							if (i <= 0.5) break;
							if ((n.ctx.quadraticCurveTo(p.width / 2, p.height - e, p.width / 2 - r, p.height - e - p.roundedCornerRadius), (g -= s) <= 0)) break;
							if (((f = { x: p.width / 2 - r, y: p.height - e - p.roundedCornerRadius }), (x = { x: 0 + e + r, y: p.height - o }), (w = T(f, x, g)), n.ctx.lineTo(w.x, w.y), (g -= w.distance) <= 0)) break;
							if (i <= 4 / 6) break;
							if ((n.ctx.quadraticCurveTo(0 + e, p.height - (p.height - v.sideWidth) / 2, 0 + e, p.height - (p.height - v.sideWidth) / 2 - r), (g -= s) <= 0)) break;
							if (((f = { x: 0 + e, y: p.height - (p.height - v.sideWidth) / 2 - r }), (x = { x: 0 + e, y: (p.height - v.sideWidth) / 2 + r }), (w = T(f, x, g)), n.ctx.lineTo(w.x, w.y), (g -= w.distance) <= 0)) break;
							if (i <= 5 / 6) break;
							if ((n.ctx.quadraticCurveTo(0 + e, (p.height - v.sideWidth) / 2, 0 + e + r, o), (g -= s) <= 0)) break;
							if (((f = { x: 0 + e + r, y: o }), (x = { x: p.width / 2 - r, y: p.roundedCornerRadius + e }), (w = T(f, x, g)), n.ctx.lineTo(w.x, w.y), (g -= w.distance) <= 0)) break;
							if (i < 1) break;
							n.ctx.quadraticCurveTo(p.width / 2, 0 + e, p.width / 2 + r, p.roundedCornerRadius + e);
							break;
						}
				} else
					p.clip || p.fill
						? (n.ctx.moveTo(p.width / 2, 0),
							n.ctx.lineTo(p.width, (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width, p.height - (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width / 2, p.height),
							n.ctx.lineTo(0, p.height - (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(0, (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width / 2, 0))
						: (n.ctx.moveTo(p.width / 2, 0 + p.lineWidth / 2),
							n.ctx.lineTo(p.width - p.lineWidth / 2, (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width - p.lineWidth / 2, p.height - (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width / 2, p.height - p.lineWidth / 2),
							n.ctx.lineTo(0 + p.lineWidth / 2, p.height - (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(0 + p.lineWidth / 2, (p.height - v.sideWidth) / 2),
							n.ctx.lineTo(p.width / 2, 0 + p.lineWidth / 2));
				if (p.clip) {
					if ((n.ctx.clip(), n.imageSrc)) {
						var y = new Image();
						(y.src = n.imageSrc),
							y.addEventListener("load", function () {
								var t = Math.max(p.width, p.height),
									i = (Math.abs(p.width - p.height), p.width < p.height ? (p.width - p.height) / 2 : 0),
									e = p.height < p.width ? (p.height - p.width) / 2 : 0;
								n.ctx.drawImage(y, i, e, t, t);
							});
					}
				} else p.fill ? n.ctx.fill() : n.ctx.stroke();
			} else n.finishedDrawing = !0;
		};
	(this.render = function (t) {
		(t = ((t = (t = t > p.scale.end ? p.scale.end : t) < p.scale.start ? p.scale.start : t) / p.scale.end) * p.width), s(t);
	}),
		(function t(i, e) {
			var n;
			for (var r in e)
				"object" !== _typeof(e[r]) || e[r] instanceof Date ? (e[r] instanceof Date ? (i[r] = new Date(e[r].getTime())) : (i[r] = e[r])) : ((n = e[r] instanceof Array ? [] : {}), void 0 === i[r] && (i[r] = n), t(i[r], e[r]));
		})(p, t),
		i(),
		e(),
		n(),
		r(),
		(function () {
			var t = !0,
				i = !1,
				e = void 0;
			try {
				for (
					var n,
					r = function () {
						var i = n.value;
						p.animateOnScroll
							? a(i)
								? window.requestAnimationFrame(function () {
									d(i);
								})
								: window.addEventListener("scroll", function t() {
									a(i) &&
										(window.requestAnimationFrame(function () {
											d(i);
										}),
											window.removeEventListener("scroll", t));
								})
							: p.controlAnimation || s(i);
					},
					o = h[Symbol.iterator]();
					!(t = (n = o.next()).done);
					t = !0
				)
					r();
			} catch (t) {
				(i = !0), (e = t);
			} finally {
				try {
					t || null == o.return || o.return();
				} finally {
					if (i) throw e;
				}
			}
		})();
}

("use strict");
function XM_Popup(t) {
	function n() {
		"static" === s.overlay.animation.type ? (r.overlay.style.display = "block") : "fade" === s.overlay.animation.type && ((r.overlay.style.opacity = 1), (r.overlay.style.visibility = "visible")),
			(r.visible = !0),
			s.sticky || (r.popupContainer.style.top = "".concat(s.offset.top + window.scrollY, "px")),
			"fade" === s.animation.type
				? ((r.popupContainer.style.opacity = 1), (r.popupContainer.style.visibility = "visible"))
				: "translate-in" === s.animation.type || "translate-out" === s.animation.type
					? ((r.popupContainer.style.visibility = "visible"), (r.popupContainer.style.transform = "translate(0, 0)"))
					: "zoom" === s.animation.type
						? ((r.popupContainer.style.visibility = "visible"), (r.popupContainer.style.transform = "scale(1)"))
						: "translate-in-fade" === s.animation.type || "translate-out-fade" === s.animation.type
							? ((r.popupContainer.style.opacity = 1), (r.popupContainer.style.visibility = "visible"), (r.popupContainer.style.transform = "translate(0, 0)"))
							: "zoom-fade" === s.animation.type && ((r.popupContainer.style.opacity = 1), (r.popupContainer.style.visibility = "visible"), (r.popupContainer.style.transform = "scale(1)")),
			(r.open = !0);
	}
	function p() {
		r.open ? f() : n();
	}
	var s = {
		overlay: { color: "0, 0, 0", opacity: 0.8, closeOnClick: !0, animation: { type: "fade", ease: "ease-in-out", speed: 0.3 } },
		align: "center",
		sticky: !1,
		offset: { top: 100 },
		animation: { type: "fade", ease: "ease-in-out", speed: 0.3, translateOffset: 100 },
		closeOnKey: 27,
	},
		r = {},
		e = function () {
			(r.overlay = document.createElement("div")), o(), document.body.appendChild(r.overlay);
		},
		o = function () {
			(r.overlay.style.width = "100%"),
				(r.overlay.style.height = "100%"),
				(r.overlay.style.backgroundColor = "rgba(".concat(s.overlay.color, ", ").concat(s.overlay.opacity, ")")),
				(r.overlay.style.position = "fixed"),
				(r.overlay.style.top = 0),
				(r.overlay.style.left = 0),
				(r.overlay.style.zIndex = 1e5),
				a(),
				i();
		},
		i = function () {
			"fade" === s.overlay.animation.type &&
				(r.overlay.style.transition = "opacity ".concat(s.overlay.animation.speed, "s ").concat(s.overlay.animation.ease, ", \n      visibility ").concat(s.overlay.animation.speed, "s ").concat(s.overlay.animation.ease));
		},
		a = function () {
			"static" === s.overlay.animation.type ? (r.overlay.style.display = "none") : "fade" === s.overlay.animation.type && ((r.overlay.style.opacity = 0), (r.overlay.style.visibility = "hidden"));
		},
		l = function () {
			if (((r.popupContainer = document.querySelector(s.container)), !r.popupContainer)) throw new Error("Couldn't find ".concat(s.container, " in the DOM"));
			y();
		},
		y = function () {
			(r.popupContainer.style.position = s.sticky ? "fixed" : "absolute"), (r.popupContainer.style.left = "50%"), (r.popupContainer.style.zIndex = 100001), f(), u();
		},
		c = function () {
			var t = window.innerHeight - r.popupContainer.offsetHeight,
				n = t < 0 ? 0 : t / 2,
				e = t < 0 ? 0 : t;
			"center" === s.align
				? (r.popupContainer.style.top = "".concat(n, "px"))
				: "top" === s.align
					? (r.popupContainer.style.top = "".concat(s.offset.top, "px"))
					: "bottom" === s.align && (r.popupContainer.style.top = "".concat(e, "px")),
				s.sticky || (r.visible ? (r.popupContainer.style.top = "".concat(s.offset.top + window.scrollY, "px")) : (r.popupContainer.style.top = "0")),
				(r.popupContainer.style.marginLeft = "-".concat(r.popupContainer.offsetWidth / 2, "px"));
		},
		u = function () {
			"fade" === s.animation.type
				? (r.popupContainer.style.transition = "opacity ".concat(s.animation.speed, "s ").concat(s.animation.ease, ", \n      visibility ").concat(s.animation.speed, "s ").concat(s.animation.ease))
				: "translate-in" === s.animation.type || "translate-out" === s.animation.type || "zoom" === s.animation.type
					? (r.popupContainer.style.transition = "transform ".concat(s.animation.speed, "s ").concat(s.animation.ease, ", \n      visibility ").concat(s.animation.speed, "s ").concat(s.animation.ease))
					: ("translate-in-fade" !== s.animation.type && "translate-out-fade" !== s.animation.type && "zoom-fade" !== s.animation.type) ||
					(r.popupContainer.style.transition = "transform "
						.concat(s.animation.speed, "s ")
						.concat(s.animation.ease, ", \n      opacity ")
						.concat(s.animation.speed, "s ")
						.concat(s.animation.ease, ", visibility ")
						.concat(s.animation.speed, "s ")
						.concat(s.animation.ease));
		},
		f = function () {
			(r.visible = !1),
				"fade" === s.animation.type
					? ((r.popupContainer.style.opacity = 0), (r.popupContainer.style.visibility = "hidden"))
					: "translate-in" === s.animation.type
						? ((r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "translate(0, -".concat(s.animation.translateOffset, "px)")))
						: "translate-out" === s.animation.type
							? ((r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "translate(0, ".concat(s.animation.translateOffset, "px)")))
							: "zoom" === s.animation.type
								? ((r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "scale(0)"))
								: "translate-in-fade" === s.animation.type
									? ((r.popupContainer.style.opacity = 0), (r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "translate(0, -".concat(s.animation.translateOffset, "px)")))
									: "translate-out-fade" === s.animation.type
										? ((r.popupContainer.style.opacity = 0), (r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "translate(0, ".concat(s.animation.translateOffset, "px)")))
										: "zoom-fade" === s.animation.type && ((r.popupContainer.style.opacity = 0), (r.popupContainer.style.visibility = "hidden"), (r.popupContainer.style.transform = "scale(0)")),
				window.setTimeout(function () {
					s.sticky || (r.popupContainer.style.top = "0");
				}, 1e3 * s.animation.speed),
				a(),
				(r.open = !1);
		},
		m = function () {
			var t = document.querySelectorAll(s.trigger);
			if (!t.length) throw new Error("Couldn't find ".concat(s.trigger, " in the DOM"));
			var n = !0,
				e = !1,
				o = void 0;
			try {
				for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
					i.value.addEventListener("click", p);
				}
			} catch (t) {
				(e = !0), (o = t);
			} finally {
				try {
					n || null == a.return || a.return();
				} finally {
					if (e) throw o;
				}
			}
			s.overlay.closeOnClick && r.overlay.addEventListener("click", f),
				s.closeOnKey &&
				window.addEventListener("keydown", function (t) {
					t.keyCode === s.closeOnKey && r.open && f();
				});
		};
	return (
		(function t(n, e) {
			var o;
			for (var i in e)
				"object" !== _typeof(e[i]) || e[i] instanceof Date ? (e[i] instanceof Date ? (n[i] = new Date(e[i].getTime())) : (n[i] = e[i])) : ((o = e[i] instanceof Array ? [] : {}), void 0 === n[i] && (n[i] = o), t(n[i], e[i]));
		})(s, t),
		e(),
		l(),
		m(),
		c(),
		window.addEventListener("resize", c),
		r
	);
}

("use strict");
function XM_ProgressBar(h) {
	function e(e, t) {
		var n = t[0],
			i = t.substring(1);
		"." === n && e.setAttribute("class", i), "#" === n && e.setAttribute("id", i);
	}
	var p = {
		height: 6,
		lineColor: "#ebebeb",
		lineCap: "round",
		buttEnd: !1,
		animation: { easing: !0 },
		animateOnScroll: !1,
		controlAnimation: !1,
		speed: 50,
		scale: { start: 0, end: 1, stop: 1 },
		invertedProgress: !1,
		reverse: !1,
		linkText: !1,
		innerLink: !0,
		linkToContainer: ".bar-progress-wrap",
		linkTo: ".bar-progress-text",
		extraLinkTo: [],
		linkUnits: "%",
		linkUnitsSelector: ".bar-progress-unit",
		innerTextFollowsProgress: !1,
		decimalPoints: 0,
		barTextStyle: { primaryColor: "#fff", secondaryColor: "#363636", font: "bold 10px Exo, sans-serif" },
	},
		o = document.createElement("canvas"),
		r = o.getContext("2d"),
		l = this,
		f = function (e) {
			var t = document.createElement("div");
			(t.style.width = "".concat(e.partWidth + 2 * e.width, "px")),
				(t.style.height = "".concat(p.height + 2 * e.width, "px")),
				(t.style.border = "".concat(e.width, "px solid ").concat(e.color)),
				(t.style.borderRadius = "200px"),
				(t.style.position = "absolute"),
				(t.style.top = "-".concat(e.width, "px")),
				(t.style.left = "".concat(e.offset, "px")),
				l.container.append(t);
		},
		u = function () {
			if (((l.container = document.querySelector(p.container)), !l.container)) throw Error('Unable to find "'.concat(p.container, '" on the DOM'));
			(o.width = p.width),
				(o.height = p.height),
				(o.style.position = "absolute"),
				(o.style.top = 0),
				(o.style.left = 0),
				(l.container.style.width = "".concat(p.width, "px")),
				(l.container.style.height = "".concat(p.height, "px")),
				(l.container.style.position = "relative"),
				l.container.append(o);
		},
		m = function () {
			var e = 1 / 0;
			for (var t in p.breakpoints) window.innerWidth <= t && (e = t < e ? t : e);
			e !== 1 / 0 && ((p.width = p.breakpoints[e].width), (p.height = p.breakpoints[e].height));
		},
		g = function () {
			var e = 1 / 0;
			for (var t in p.breakpoints) window.innerWidth <= t && (e = t < e ? t : e);
			w(e === 1 / 0 ? p.originalDimensions : p.breakpoints[e]);
		},
		w = function (e) {
			void 0 === e && (((e = {}).width = p.width), (e.height = p.height)), (o.width = e.width), (o.height = e.height), (l.container.style.width = "".concat(e.width, "px")), (l.container.style.height = "".concat(e.height, "px"));
			var t = (p.scale.stop / p.scale.end) * e.width;
			if ((a(t), p.linkElContainer && p.innerTextFollowsProgress && (p.linkElContainer.style.left = "".concat(t, "px")), k(), 0 != t)) {
				if ((r.beginPath(), "butt" === p.lineCap && (r.moveTo(0, e.height / 2), r.lineTo(t, e.height / 2)), "round" === p.lineCap)) {
					var n = r.lineWidth / 2,
						i = t - n;
					p.reverse
						? (r.moveTo(e.width - n, e.height / 2), e.width - t <= n ? r.lineTo(n, e.height / 2) : r.lineTo(e.width - t, e.height / 2))
						: (r.moveTo(n, e.height / 2), i < n ? r.lineTo(n, e.height / 2) : r.lineTo(i, e.height / 2));
				}
				r.stroke();
			}
		},
		T = function () {
			p.linkText &&
				(p.innerLink &&
					((p.linkElContainer = l.container.parentElement.querySelector(p.linkToContainer)),
						p.linkElContainer || ((p.linkElContainer = document.createElement("div")), e(p.linkElContainer, p.linkToContainer), l.container.append(p.linkElContainer)),
						(p.linkEl = l.container.parentElement.querySelector(p.linkTo)),
						p.linkEl || ((p.linkEl = document.createElement("p")), e(p.linkEl, p.linkTo), p.linkElContainer.append(p.linkEl)),
						p.innerTextFollowsProgress && (p.linkElContainer.style.position = "absolute"),
						p.linkUnits && ((p.linkUnitsEl = document.createElement("span")), e(p.linkUnitsEl, p.linkUnitsSelector), (p.linkUnitsEl.innerHTML = p.linkUnits))),
					0 < p.extraLinkTo.length &&
					((p.extraLinkEl = []),
						p.extraLinkTo.forEach(function (e) {
							if (!document.querySelector(e)) throw Error('Unable to find "'.concat(e, '" on the DOM'));
							p.extraLinkEl.push(document.querySelector(e));
						})));
		},
		a = function (e) {
			if (p.linkText) {
				var t = ((e / p.width) * p.scale.end).toFixed(p.decimalPoints);
				p.invertedProgress && (t = p.scale.end - t),
					p.innerLink &&
					((p.linkEl.innerHTML = t),
						p.linkUnits && p.linkEl.append(p.linkUnitsEl),
						"/" === p.linkUnits && (p.linkEl.innerHTML += p.scale.end),
						p.innerTextFollowsProgress && (p.linkElContainer.style.left = "".concat(e, "px"))),
					0 < p.extraLinkTo.length &&
					p.extraLinkEl.forEach(function (e) {
						e.innerHTML = t;
					});
			}
		},
		y = function () {
			(p.speed = 100 < p.speed ? 100 : p.speed), (p.speed = p.speed < 1 ? 1 : p.speed), (p.animation.step = (p.speed * p.width) / 2e3), (p.animation.currentProgress = 0);
		};
	function k() {
		if (p.gradient) {
			var e = r.createLinearGradient(0, p.height, p.width, 0);
			e.addColorStop(0, p.gradient.colors[0]), e.addColorStop(1, p.gradient.colors[1]), (r.strokeStyle = e);
		} else r.strokeStyle = p.lineColor;
		(r.lineCap = p.lineCap), (r.lineWidth = p.height);
	}
	function v() {
		for (var e = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight, t = o, n = t.offsetTop; (t = t.offsetParent);) n += t.offsetTop;
		return n <= e;
	}
	function x() {
		p.animation.currentProgress < p.stopPoint &&
			(p.animation.easing
				? ((p.animation.currentProgress += 0.06 * (p.stopPoint - p.animation.currentProgress)), p.animation.currentProgress >= p.stopPoint - 1 && ((p.animation.currentProgress = p.stopPoint), (l.done = !0)))
				: ((p.animation.currentProgress += p.animation.step), p.animation.currentProgress >= p.stopPoint && ((p.animation.currentProgress = p.stopPoint), (l.done = !0)))),
			E(p.animation.currentProgress),
			l.done || window.requestAnimationFrame(x);
	}
	var E = function (e) {
		var t = 0 < arguments.length && void 0 !== e ? e : p.stopPoint;
		if ((a(t), r.clearRect(0, 0, p.width, p.height), 0 === t))
			return p.emptyText && (p.emptyTextContainer ? (p.emptyTextEl = document.querySelector(p.emptyTextContainer)) : (p.emptyTextEl = p.linkEl.parentElement), (p.emptyTextEl.innerHTML = p.emptyText)), void (l.done = !0);
		if ((r.beginPath(), "butt" === p.lineCap && (r.moveTo(0, p.height / 2), r.lineTo(t, p.height / 2), r.stroke()), "round" === p.lineCap)) {
			var n = r.lineWidth / 2,
				i = t - n;
			p.reverse
				? (r.moveTo(p.width - n, p.height / 2), p.width - t <= n ? r.lineTo(n, p.height / 2) : r.lineTo(p.width - t, p.height / 2))
				: (r.moveTo(n, p.height / 2), i < n ? r.lineTo(n, p.height / 2) : r.lineTo(i, p.height / 2)),
				r.stroke(),
				p.buttEnd && ((r.lineCap = "butt"), p.reverse ? (r.moveTo(p.width - t, p.height / 2), r.lineTo(p.width - t - n, p.height / 2)) : (r.moveTo(i, p.height / 2), r.lineTo(t, p.height / 2)), r.stroke(), (r.lineCap = "round"));
		}
		p.barText && s(t),
			p.completeText &&
			t === p.width &&
			(p.completeTextContainer ? (p.completeTextEl = document.querySelector(p.completeTextContainer)) : (p.completeTextEl = p.linkEl.parentElement), (p.completeTextEl.innerHTML = p.completeText));
	},
		s = function (e) {
			var t = 0;
			r.font = p.barTextStyle.font;
			for (var n = 0; n < p.barText.length; n++)
				(r.fillStyle = p.barTextStyle.primaryColor), e < t + 12 && (r.fillStyle = p.barTextStyle.secondaryColor), r.fillText(p.barText[n], 12 + t, 4 + p.height / 2), (t += r.measureText(p.barText[n]).width);
		};
	l.render = function (e) {
		(e = ((e = (e = e > p.scale.end ? p.scale.end : e) < p.scale.start ? p.scale.start : e) / p.scale.end) * p.width), E(e);
	};
	var b = function e(t, n) {
		var i;
		for (var o in n)
			"object" !== _typeof(n[o]) || n[o] instanceof Date ? (n[o] instanceof Date ? (t[o] = new Date(n[o].getTime())) : (t[o] = n[o])) : ((i = n[o] instanceof Array ? [] : {}), void 0 === t[o] && (t[o] = i), e(t[o], n[o]));
	};
	!(function () {
		if ((b(p, h), "auto" === p.width || void 0 === p.width)) {
			var e = document.querySelector(p.container).parentElement;
			(p.width = e.offsetWidth),
				window.addEventListener("resize", function () {
					(p.width = e.offsetWidth), w();
				});
		}
		if (
			((p.originalDimensions = { width: p.width, height: p.height }),
				m(),
				h.scale &&
				((p.scale.stop = p.scale.stop > p.scale.end ? p.scale.end : p.scale.stop), (p.scale.stop = p.scale.stop < p.scale.start ? p.scale.start : p.scale.stop), (p.scale.stop = void 0 !== h.scale.stop ? p.scale.stop : p.scale.end)),
				(p.stopPoint = (p.scale.stop / p.scale.end) * p.width),
				u(),
				T(),
				k(),
				y(),
				p.animateOnScroll
					? v()
						? window.requestAnimationFrame(x)
						: window.addEventListener("scroll", function e() {
							v() && (window.requestAnimationFrame(x), window.removeEventListener("scroll", e));
						})
					: p.controlAnimation || E(),
				void 0 !== p.split)
		)
			if (void 0 !== p.split.parts)
				for (var t = (p.width - p.split.gap * (p.split.parts - 1)) / p.split.parts, n = -p.split.gap, i = 0; i < p.split.parts; i++) f({ width: p.split.gap, color: p.split.color, offset: n, partWidth: t }), (n += t + p.split.gap);
			else if (void 0 !== p.split.partItems) {
				var o = 0,
					r = !0,
					l = !1,
					a = void 0;
				try {
					for (var s, c = p.split.partItems[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
						var d = s.value;
						(o -= d.gap), f({ width: d.gap, color: p.split.color, offset: o, partWidth: d.width }), (o += d.width + 2 * d.gap);
					}
				} catch (e) {
					(l = !0), (a = e);
				} finally {
					try {
						r || null == c.return || c.return();
					} finally {
						if (l) throw a;
					}
				}
			}
		p.breakpoints &&
			window.addEventListener("resize", function () {
				g();
			});
	})();
}

("use strict");

function XM_Tab(n) {
	var a = { triggers: "", elements: "", startOpen: 1, animation: { type: "static", speed: 0.6, easing: "ease-in-out" }, triggerActiveClass: "active", triggerEvent: "click", onTabChange: function (t) { } },
		s = {},
		e = function () {
			return 1366 <= window.innerWidth ? "desktop" : "mobile";
		},
		i = function () {
			return (s.triggers = document.querySelectorAll(a.triggers)), s.triggers.length;
		},
		r = function () {
			return (s.elements = document.querySelectorAll(a.elements)), s.elements.length;
		},
		o = function () {
			for (
				var t = function (t) {
					var n = s.triggers[t];
					n.addEventListener(a.triggerEvent, function () {
						c(n) || u(t);
					});
				},
				n = 0;
				n < s.triggers.length;
				n++
			)
				t(n);
		},
		l = function () {
			for (var t = 0; t < s.elements.length; t++) f(t);
		},
		c = function (t) {
			return t.classList.contains(a.triggerActiveClass);
		},
		f = function (t) {
			!(function (t) {
				t.classList.remove(a.triggerActiveClass);
			})(s.triggers[t]),
				w(s.elements[t]);
		},
		u = function (t) {
			l(),
				(function (t) {
					t.classList.add(a.triggerActiveClass);
				})(s.triggers[t]),
				h(s.elements[t]),
				"static" !== a.animation.type
					? window.setTimeout(function () {
						a.onTabChange(s.elements[t]);
					}, 300)
					: a.onTabChange(s.elements[t]);
		},
		y = function (t) {
			t.style.transition = "all ".concat(a.animation.speed, "s ").concat(a.animation.easing);
		},
		m = function (t) {
			t.style.transition = "none";
		},
		g = function () {
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (var i, r = s.elements[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
					var o = i.value;
					p(o);
				}
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (n) throw e;
				}
			}
			"static" !== a.animation.type &&
				window.setTimeout(function () {
					!(function () {
						var t = !0,
							n = !1,
							e = void 0;
						try {
							for (var i, r = s.elements[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
								var o = i.value;
								y(o);
							}
						} catch (t) {
							(n = !0), (e = t);
						} finally {
							try {
								t || null == r.return || r.return();
							} finally {
								if (n) throw e;
							}
						}
					})();
				}, 300);
		},
		v = function () {
			!(function () {
				var t = !0,
					n = !1,
					e = void 0;
				try {
					for (var i, r = s.elements[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
						var o = i.value;
						m(o);
					}
				} catch (t) {
					(n = !0), (e = t);
				} finally {
					try {
						t || null == r.return || r.return();
					} finally {
						if (n) throw e;
					}
				}
			})();
			var t = !0,
				n = !1,
				e = void 0;
			try {
				for (var i, r = s.elements[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
					var o = i.value;
					b(o);
				}
			} catch (t) {
				(n = !0), (e = t);
			} finally {
				try {
					t || null == r.return || r.return();
				} finally {
					if (n) throw e;
				}
			}
		},
		d = function () {
			for (var t = 0; t < s.triggers.length; t++) {
				var n = s.triggers[t];
				c(n) && (l(), u(t));
			}
		},
		p = function (t) {
			"slide-in-right" === a.animation.type && S(t, { position: "absolute", left: "0", zIndex: 1 });
		},
		b = function (t) {
			"static" === a.animation.type ? S(t, { display: "block" }) : "slide-in-right" === s.animationType && S(t, { position: "static", transform: "translate(0, 0)", opacity: 1, visibility: "visible" });
		},
		h = function (t) {
			if ("static" === a.animation.type) S(t, { display: "block" });
			else if ("slide-in-right" === a.animation.type) {
				for (var n = t; n && !(n = (n = n.previousElementSibling) || s.elements[s.elements.length - 1]).classList.contains(a.elements.substring(1)););
				S(t, { transform: "translate(0, 0)", opacity: 1, visibility: "visible", zIndex: 2 }), w(n);
			}
		},
		w = function (t) {
			"static" === a.animation.type ? S(t, { display: "none" }) : "slide-in-right" === a.animation.type && S(t, { transform: "translate(50%, 0)", opacity: 0, visibility: "hidden", zIndex: 1 });
		},
		S = function (t, n) {
			for (var e in n) t.style[e] = n[e];
		},
		T = function t(n, e) {
			var i;
			for (var r in e)
				"object" !== _typeof(e[r]) || e[r] instanceof Date ? (e[r] instanceof Date ? (n[r] = new Date(e[r].getTime())) : (n[r] = e[r])) : ((i = e[r] instanceof Array ? [] : {}), void 0 === n[r] && (n[r] = i), t(n[r], e[r]));
		};
	return (
		(function () {
			if ((T(a, n), r() && i())) {
				(s.animationType = a.animation.type), window.innerWidth < 1366 && (a.animation.type = "static"), l(), u(a.startOpen - 1), g(), o();
				var t = e();
				window.addEventListener("resize", function () {
					window.innerWidth < 1366 && "desktop" === t ? (v(), (a.animation.type = "static"), d(), g()) : 1366 <= window.innerWidth && "mobile" === t && (v(), (a.animation.type = s.animationType), d(), g()), (t = e());
				});
			}
		})(),
		{}
	);
}

("use strict");

function XM_Tooltip(t) {
	var W = {
		type: "title",
		direction: "top",
		align: "center",
		offset: 20,
		tooltipSelector: ["xm-tooltip"],
		textSelector: "xm-tooltip-text",
		eventHandler: "hover",
		animation: { type: "static", ease: "ease-in-out", speed: 0.3, translateOffset: 10 },
	},
		h = {},
		i = function () {
			var t = document.querySelectorAll(W.container);
			o(t[0], W.container),
				(h.tooltips = []),
				t.forEach(function (t) {
					var i = {},
						e = document.createElement("div"),
						a = !0,
						n = !1,
						o = void 0;
					try {
						for (var r, l = W.tooltipSelector[Symbol.iterator](); !(a = (r = l.next()).done); a = !0) {
							var s = r.value;
							e.classList.add(s);
						}
					} catch (t) {
						(n = !0), (o = t);
					} finally {
						try {
							a || null == l.return || l.return();
						} finally {
							if (n) throw o;
						}
					}
					if ("title" === W.type) {
						var m = document.createElement("p");
						m.classList.add(W.textSelector), (m.innerHTML = t.getAttribute("data-title")), e.append(m);
					} else (W.type = "html") && (e.innerHTML = W.htmlContent);
					void 0 !== W.parent ? t.parentElement.append(e) : t.append(e), (i.containerElement = t), (i.tooltipWrap = { item: e, visible: !1 }), h.tooltips.push(i);
				});
		},
		e = function () {
			var t = !0,
				i = !1,
				e = void 0;
			try {
				for (var a, n = h.tooltips[Symbol.iterator](); !(t = (a = n.next()).done); t = !0) {
					var o = a.value;
					void 0 !== W.parent ? (o.containerElement.parentElement.style.position = "relative") : (o.containerElement.style.position = "relative"),
						(o.tooltipWrap.item.style.whiteSpace = "nowrap"),
						(o.tooltipWrap.item.style.position = "absolute"),
						(o.tooltipWrap.item.style.zIndex = 99999);
					var r = 0;
					"top" === W.direction || "bottom" === W.direction ? (r += o.tooltipWrap.item.offsetHeight) : ("left" !== W.direction && "right" !== W.direction) || (r += o.tooltipWrap.item.offsetWidth);
					var l = -W.offset - r;
					(o.tooltipWrap.item.style[W.direction] = "".concat(l, "px")),
						"center" === W.align
							? "top" === W.direction || "bottom" === W.direction
								? ((o.tooltipWrap.item.style.left = "50%"), (o.tooltipWrap.item.style.marginLeft = "-".concat(o.tooltipWrap.item.offsetWidth / 2, "px")))
								: ("left" !== W.direction && "right" !== W.direction) || ((o.tooltipWrap.item.style.top = "50%"), (o.tooltipWrap.item.style.marginTop = "-".concat(o.tooltipWrap.item.offsetHeight / 2, "px")))
							: (o.tooltipWrap.item.style[W.align] = 0);
				}
			} catch (t) {
				(i = !0), (e = t);
			} finally {
				try {
					t || null == n.return || n.return();
				} finally {
					if (i) throw e;
				}
			}
		},
		a = function () {
			var t = !0,
				i = !1,
				e = void 0;
			try {
				for (
					var a,
					n = function () {
						var t = a.value;
						"static" === W.animation.type
							? (t.tooltipWrap.item.style.display = "none")
							: "fade" === W.animation.type
								? ((t.tooltipWrap.item.style.visibility = "hidden"), (t.tooltipWrap.item.style.opacity = 0))
								: "zoom" === W.animation.type
									? ((t.tooltipWrap.item.style.visibility = "hidden"), (t.tooltipWrap.item.style.transform = "scale(0)"))
									: "zoom-fade" === W.animation.type
										? ((t.tooltipWrap.item.style.visibility = "hidden"), (t.tooltipWrap.item.style.opacity = 0), (t.tooltipWrap.item.style.transform = "scale(0)"))
										: "translate-in" === W.animation.type
											? ((t.tooltipWrap.item.style.visibility = "hidden"),
												"top" === W.direction
													? (t.tooltipWrap.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
													: "bottom" === W.direction
														? (t.tooltipWrap.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
														: "right" === W.direction
															? (t.tooltipWrap.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))
															: "left" === W.direction && (t.tooltipWrap.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)")))
											: "translate-out" === W.animation.type
												? ((t.tooltipWrap.item.style.visibility = "hidden"),
													"top" === W.direction
														? (t.tooltipWrap.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
														: "bottom" === W.direction
															? (t.tooltipWrap.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
															: "right" === W.direction
																? (t.tooltipWrap.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)"))
																: "left" === W.direction && (t.tooltipWrap.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)")))
												: "translate-in-fade" === W.animation.type
													? ((t.tooltipWrap.item.style.opacity = 0),
														(t.tooltipWrap.item.style.visibility = "hidden"),
														"top" === W.direction
															? (t.tooltipWrap.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
															: "bottom" === W.direction
																? (t.tooltipWrap.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
																: "right" === W.direction
																	? (t.tooltipWrap.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))
																	: "left" === W.direction && (t.tooltipWrap.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)")))
													: "translate-out-fade" === W.animation.type &&
													((t.tooltipWrap.item.style.opacity = 0),
														(t.tooltipWrap.item.style.visibility = "hidden"),
														"top" === W.direction
															? (t.tooltipWrap.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
															: "bottom" === W.direction
																? (t.tooltipWrap.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
																: "right" === W.direction
																	? (t.tooltipWrap.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)"))
																	: "left" === W.direction && (t.tooltipWrap.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))),
							window.setTimeout(function () {
								t.tooltipWrap.item.style.transition = "all ".concat(W.animation.speed, "s ").concat(W.animation.ease);
							}, 300);
					},
					o = h.tooltips[Symbol.iterator]();
					!(t = (a = o.next()).done);
					t = !0
				)
					n();
			} catch (t) {
				(i = !0), (e = t);
			} finally {
				try {
					t || null == o.return || o.return();
				} finally {
					if (i) throw e;
				}
			}
		},
		n = function () {
			if ("hover" === W.eventHandler) {
				var t = !0,
					i = !1,
					e = void 0;
				try {
					for (
						var a,
						n = function () {
							var t = a.value;
							t.containerElement.addEventListener("mouseenter", function () {
								O(t.tooltipWrap);
							}),
								t.containerElement.addEventListener("mouseleave", function () {
									w(t.tooltipWrap);
								});
						},
						o = h.tooltips[Symbol.iterator]();
						!(t = (a = o.next()).done);
						t = !0
					)
						n();
				} catch (t) {
					(i = !0), (e = t);
				} finally {
					try {
						t || null == o.return || o.return();
					} finally {
						if (i) throw e;
					}
				}
			} else if ("click" === W.eventHandler) {
				var r = !0,
					l = !1,
					s = void 0;
				try {
					for (
						var m,
						p = function () {
							var t = m.value;
							t.containerElement.addEventListener("click", function () {
								x(t.tooltipWrap);
							});
						},
						c = h.tooltips[Symbol.iterator]();
						!(r = (m = c.next()).done);
						r = !0
					)
						p();
				} catch (t) {
					(l = !0), (s = t);
				} finally {
					try {
						r || null == c.return || c.return();
					} finally {
						if (l) throw s;
					}
				}
				window.addEventListener("click", function () {
					var t = !0,
						i = !1,
						e = void 0;
					try {
						for (var a, n = h.tooltips[Symbol.iterator](); !(t = (a = n.next()).done); t = !0) {
							var o = a.value;
							o.tooltipWrap.visible && w(o.tooltipWrap);
						}
					} catch (t) {
						(i = !0), (e = t);
					} finally {
						try {
							t || null == n.return || n.return();
						} finally {
							if (i) throw e;
						}
					}
				}),
					window.addEventListener("keydown", function (t) {
						if (27 === t.keyCode) {
							var i = !0,
								e = !1,
								a = void 0;
							try {
								for (var n, o = h.tooltips[Symbol.iterator](); !(i = (n = o.next()).done); i = !0) {
									var r = n.value;
									r.tooltipWrap.visible && w(r.tooltipWrap);
								}
							} catch (t) {
								(e = !0), (a = t);
							} finally {
								try {
									i || null == o.return || o.return();
								} finally {
									if (e) throw a;
								}
							}
						}
					});
			} else if ("clickTemp" === W.eventHandler) {
				var f = !0,
					y = !1,
					d = void 0;
				try {
					for (
						var v,
						u = function () {
							var i = v.value;
							i.containerElement.addEventListener("click", function (t) {
								O(i.tooltipWrap),
									window.setTimeout(function () {
										w(i.tooltipWrap);
									}, 2e3);
							});
						},
						b = h.tooltips[Symbol.iterator]();
						!(f = (v = b.next()).done);
						f = !0
					)
						u();
				} catch (t) {
					(y = !0), (d = t);
				} finally {
					try {
						f || null == b.return || b.return();
					} finally {
						if (y) throw d;
					}
				}
			}
		},
		x = function (t) {
			t.visible ? w(t) : O(t);
		},
		O = function (t) {
			"static" === W.animation.type
				? (t.item.style.display = "block")
				: "fade" === W.animation.type
					? ((t.item.style.visibility = "visible"), (t.item.style.opacity = 1))
					: "zoom" === W.animation.type
						? ((t.item.style.visibility = "visible"), (t.item.style.transform = "scale(1)"))
						: "zoom-fade" === W.animation.type
							? ((t.item.style.visibility = "visible"), (t.item.style.opacity = 1), (t.item.style.transform = "scale(1)"))
							: "translate-in" === W.animation.type || "translate-out" === W.animation.type
								? ((t.item.style.visibility = "visible"), (t.item.style.transform = "translate(0, 0)"))
								: ("translate-in-fade" !== W.animation.type && "translate-out-fade" !== W.animation.type) || ((t.item.style.visibility = "visible"), (t.item.style.opacity = 1), (t.item.style.transform = "translate(0, 0)")),
				window.setTimeout(function () {
					t.visible = !0;
				}, W.animation.speed);
		},
		w = function (t) {
			"static" === W.animation.type
				? (t.item.style.display = "none")
				: "fade" === W.animation.type
					? ((t.item.style.visibility = "hidden"), (t.item.style.opacity = 0))
					: "zoom" === W.animation.type
						? ((t.item.style.visibility = "hidden"), (t.item.style.transform = "scale(0)"))
						: "zoom-fade" === W.animation.type
							? ((t.item.style.visibility = "hidden"), (t.item.style.opacity = 0), (t.item.style.transform = "scale(0)"))
							: "translate-in" === W.animation.type
								? ((t.item.style.visibility = "hidden"),
									"top" === W.direction
										? (t.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
										: "bottom" === W.direction
											? (t.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
											: "right" === W.direction
												? (t.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))
												: "left" === W.direction && (t.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)")))
								: "translate-out" === W.animation.type
									? ((t.item.style.visibility = "hidden"),
										"top" === W.direction
											? (t.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
											: "bottom" === W.direction
												? (t.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
												: "right" === W.direction
													? (t.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)"))
													: "left" === W.direction && (t.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)")))
									: "translate-in-fade" === W.animation.type
										? ((t.item.style.opacity = 0),
											(t.item.style.visibility = "hidden"),
											"top" === W.direction
												? (t.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
												: "bottom" === W.direction
													? (t.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
													: "right" === W.direction
														? (t.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))
														: "left" === W.direction && (t.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)")))
										: "translate-out-fade" === W.animation.type &&
										((t.item.style.opacity = 0),
											(t.item.style.visibility = "hidden"),
											"top" === W.direction
												? (t.item.style.transform = "translate(0, ".concat(W.animation.translateOffset, "px)"))
												: "bottom" === W.direction
													? (t.item.style.transform = "translate(0, -".concat(W.animation.translateOffset, "px)"))
													: "right" === W.direction
														? (t.item.style.transform = "translate(-".concat(W.animation.translateOffset, "px, 0)"))
														: "left" === W.direction && (t.item.style.transform = "translate(".concat(W.animation.translateOffset, "px, 0)"))),
				window.setTimeout(function () {
					t.visible = !1;
				}, W.animation.speed);
		},
		o = function (t, i, e) {
			var a = 2 < arguments.length && void 0 !== e && e;
			if (!t) throw a ? new Error("Can't find ".concat(i, " inside ").concat(a)) : new Error("Can't find ".concat(i, " in the DOM"));
		};
	(function t(i, e) {
		var a;
		for (var n in e)
			"object" !== _typeof(e[n]) || e[n] instanceof Date ? (e[n] instanceof Date ? (i[n] = new Date(e[n].getTime())) : (i[n] = e[n])) : ((a = e[n] instanceof Array ? [] : {}), void 0 === i[n] && (i[n] = a), t(i[n], e[n]));
	})(W, t),
		i(),
		e(),
		a(),
		n();
}
