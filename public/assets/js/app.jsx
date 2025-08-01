// class Components {
//     initBootstrapComponents() {
//         // [...document.querySelectorAll('[data-bs-toggle="popover"]')].map((e) => new bootstrap.Popover(e)),
//         //     [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map((e) => new bootstrap.Tooltip(e)),
//         //     [...document.querySelectorAll(".offcanvas")].map((e) => new bootstrap.Offcanvas(e));
//         document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (popover) {
//             new bootstrap.Popover(popover);
//         });

//         document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (tooltip) {
//             new bootstrap.Tooltip(tooltip);
//         });

//         document.querySelectorAll(".offcanvas").forEach(function (offcanvas) {
//             new bootstrap.Offcanvas(offcanvas);
//         });

//         var e = document.getElementById("toastPlacement");
//         e &&
//             document.getElementById("selectToastPlacement").addEventListener("change", function () {
//                 e.dataset.originalClass || (e.dataset.originalClass = e.className), (e.className = e.dataset.originalClass + " " + this.value);
//             });
//         [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
//             return new bootstrap.Toast(e);
//         });
//         const t = document.getElementById("liveAlertBtn");
//         t &&
//             t.addEventListener("click", () => {
//                 alert("Nice, you triggered this alert message!", "success");
//             });
//     }
//     initfullScreenListener() {
//         // var e = document.querySelector('[data-toggle="fullscreen"]');
//         // e &&
//         //     e.addEventListener("click", function (e) {
//         //         e.preventDefault(),
//         //             document.body.classList.toggle("fullscreen-enable"),
//         //             document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
//         //                 ? document.cancelFullScreen
//         //                     ? document.cancelFullScreen()
//         //                     : document.mozCancelFullScreen
//         //                     ? document.mozCancelFullScreen()
//         //                     : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
//         //                 : document.documentElement.requestFullscreen
//         //                 ? document.documentElement.requestFullscreen()
//         //                 : document.documentElement.mozRequestFullScreen
//         //                 ? document.documentElement.mozRequestFullScreen()
//         //                 : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//         //     });
//     }

//     initAppSearch() {
//         // (this.searchOption = document.getElementById("search-options")), (this.searchDropdown = document.getElementById("search-dropdown")), (this.searchClose = document.getElementById("search-close-options"));
//         // const t = this;
//         // this.searchOption &&
//         //     ["focus", "keyup"].forEach(function (e) {
//         //         t.searchOption.addEventListener(e, function (e) {
//         //             0 < t.searchOption.value.length ? (t.searchDropdown.classList.add("show"), t.searchClose.classList.remove("d-none")) : (t.searchDropdown.classList.remove("show"), t.searchClose.classList.add("d-none"));
//         //         });
//         //     }),
//         //     t.searchClose &&
//         //         t.searchClose.addEventListener("click", function () {
//         //             t.searchDropdown.classList.remove("show"), t.searchClose.classList.add("d-none"), (t.searchOption.value = "");
//         //         });
//         const searchOption = document.getElementById("search-options");
//         const searchDropdown = document.getElementById("search-dropdown");
//         const searchClose = document.getElementById("search-close-options");

//         if (searchOption) {
//             ["focus", "keyup"].forEach(function (eventType) {
//                 searchOption.addEventListener(eventType, function () {
//                     if (searchOption.value.length > 0) {
//                         searchDropdown.classList.add("show");
//                         searchClose.classList.remove("d-none");
//                     } else {
//                         searchDropdown.classList.remove("show");
//                         searchClose.classList.add("d-none");
//                     }
//                 });
//             });
//         }

//         if (searchClose) {
//             searchClose.addEventListener("click", function () {
//                 searchDropdown.classList.remove("show");
//                 searchClose.classList.add("d-none");
//                 searchOption.value = "";
//             });
//         }
//     }
//     initCounter() {
//         // var e = document.querySelectorAll(".counter-value");
//         // function o(e) {
//         //     return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         // }
//         // e &&
//         //     e.forEach(function (n) {
//         //         !(function e() {
//         //             var t = +n.getAttribute("data-target"),
//         //                 a = +n.innerText,
//         //                 i = t / 250;
//         //             i < 1 && (i = 1), a < t ? ((n.innerText = (a + i).toFixed(0)), setTimeout(e, 1)) : (n.innerText = o(t)), o(n.innerText);
//         //         })();
//         //     });
//         document.querySelectorAll(".counter-value").forEach(function (counter) {
//             const target = +counter.getAttribute("data-target");
//             let count = +counter.innerText;
//             const increment = target / 250;

//             function updateCounter() {
//                 if (count < target) {
//                     count = Math.ceil(count + increment);
//                     counter.innerText = count.toLocaleString();
//                     setTimeout(updateCounter, 1);
//                 } else {
//                     counter.innerText = target.toLocaleString();
//                 }
//             }

//             updateCounter();
//         });
//     }
//     init() {
//         this.initBootstrapComponents(), this.initfullScreenListener(), this.initAppSearch(), this.initCounter();
//     }
// }
class FormValidation {
    initFormValidation() {
        document.querySelectorAll(".needs-validation").forEach((t) => {
            t.addEventListener(
                "submit",
                (e) => {
                    t.checkValidity() || (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated");
                },
                !1
            );
        });
    }
    init() {
        this.initFormValidation();
    }
}
class FormAdvanced {
    initMask() {
        document.querySelectorAll('[data-toggle="input-mask"]').forEach((e) => {
            var t = e.getAttribute("data-mask-format").toString().replaceAll("0", "9");
            e.setAttribute("data-mask-format", t);
            const a = new Inputmask(t);
            a.mask(e);
        });
    }
    initFormChoices() {
        document.querySelectorAll("[data-choices]").forEach(function (e) {
            var t = {},
                a = e.attributes;
            a["data-choices-groups"] && (t.placeholderValue = "This is a placeholder set in the config"),
                a["data-choices-search-false"] && (t.searchEnabled = !1),
                a["data-choices-search-true"] && (t.searchEnabled = !0),
                a["data-choices-removeItem"] && (t.removeItemButton = !0),
                a["data-choices-sorting-false"] && (t.shouldSort = !1),
                a["data-choices-sorting-true"] && (t.shouldSort = !0),
                a["data-choices-multiple-remove"] && (t.removeItemButton = !0),
                a["data-choices-limit"] && (t.maxItemCount = a["data-choices-limit"].value.toString()),
                a["data-choices-limit"] && (t.maxItemCount = a["data-choices-limit"].value.toString()),
                a["data-choices-editItem-true"] && (t.maxItemCount = !0),
                a["data-choices-editItem-false"] && (t.maxItemCount = !1),
                a["data-choices-text-unique-true"] && ((t.duplicateItemsAllowed = !1), (t.paste = !1)),
                a["data-choices-text-disabled-true"] && (t.addItems = !1),
                a["data-choices-text-disabled-true"] ? new Choices(e, t).disable() : new Choices(e, t);
        });
    }
    init() {
        this.initMask(), this.initFormChoices();
    }
}
class Portlet {
    constructor() {
        (this.portletIdentifier = ".card"), (this.portletCloser = '.card a[data-toggle="remove"]'), (this.portletRefresher = '.card a[data-toggle="reload"]');
    }
    initCloser() {
        const n = this;
        document.querySelectorAll(this.portletCloser).forEach((i) => {
            i.addEventListener("click", function (e) {
                e.preventDefault();
                const t = i.closest(n.portletIdentifier),
                    a = t?.parentElement;
                t && t.remove(), 0 === a?.children.length && a?.remove(), n.init();
            });
        });
    }
    initRefresher() {
        const n = this,
            e = document.querySelectorAll(this.portletRefresher);
        e.forEach(function (i) {
            i.addEventListener("click", function (e) {
                e.preventDefault();
                const t = i.closest(n.portletIdentifier);
                t && (t.innerHTML += '<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
                let a;
                t?.children.forEach((e) => {
                    e.classList.contains("card-disabled") && (a = e);
                }),
                    setTimeout(function () {
                        a?.remove(), n.init();
                    }, 500 + 5 * Math.random() * 300);
            });
        });
    }
    init = () => {
        this.initRefresher(), this.initCloser();
    };
}
class Code {
    initCode() {
        var e = document.querySelectorAll(".highlight");
        if (e && 0 < e.length)
            for (var t = 0; t < e.length; ++t) {
                var a = e[t].querySelector(".btn-copy-clipboard");
                a &&
                    new ClipboardJS(a, {
                        target: function (e) {
                            var t = e.closest(".highlight"),
                                e = t.querySelector(".tab-pane.active");
                            return (e = null == e ? t.querySelector(".code") : e);
                        },
                    }).on("success", function (e) {
                        var t = e.trigger.innerHTML;
                        (e.trigger.innerHTML = "Copied"),
                            e.clearSelection(),
                            setTimeout(function () {
                                e.trigger.innerHTML = t;
                            }, 2e3);
                    });
            }
        Prism.plugins.NormalizeWhitespace.setDefaults({ "remove-trailing": !0, "remove-indent": !0, "left-trim": !0, "right-trim": !0 }), document.querySelector(".docs-nav a") && new Gumshoe(".docs-nav a");
    }
    init() {
        this.initCode();
    }
}
class Dragula {
    initDragula() {
        document.querySelectorAll("[data-plugin=dragula]").forEach(function (e) {
            var t = JSON.parse(e.getAttribute("data-containers"));
            let a = [];
            if (t) for (let e = 0; e < t.length; e++) a.push(document.querySelectorAll("#" + t[e])[0]);
            else a = [e];
            const i = e.getAttribute("data-handleclass");
            i
                ? dragula(a, {
                    moves: function (e, t, a) {
                        return a.classList.contains(i);
                    },
                })
                : dragula(a);
        });
    }
    init() {
        this.initDragula();
    }
}
class SwiperSlider {
    initSwiperSlider() {
        new Swiper("[data-swiper='default']", { loop: !0, autoplay: { delay: 2500, disableOnInteraction: !1 } }),
            new Swiper("[data-swiper='navigation']", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                pagination: { clickable: !0, el: ".swiper-pagination" },
            }),
            new Swiper("[data-swiper='dynamic']", { loop: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { clickable: !0, el: ".swiper-pagination", dynamicBullets: !0 } }),
            new Swiper("[data-swiper='fraction']", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { clickable: !0, el: ".swiper-pagination", type: "fraction" },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            }),
            new Swiper("[data-swiper='custom']", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: {
                    clickable: !0,
                    el: ".swiper-pagination",
                    renderBullet: function (e, t) {
                        return '<span class="' + t + '">' + (e + 1) + "</span>";
                    },
                },
            }),
            new Swiper("[data-swiper='progress']", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", type: "progressbar" },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            }),
            new Swiper("[data-swiper='scrollbar']", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                scrollbar: { el: ".swiper-scrollbar", hide: !0 },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            }),
            new Swiper("[data-swiper='vertical']", { loop: !0, direction: "vertical", autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
            new Swiper("[data-swiper='mousewheel']", { loop: !0, direction: "vertical", mousewheel: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
            new Swiper("[data-swiper='effect-fade']", { loop: !0, effect: "fade", autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
            new Swiper("[data-swiper='coverflow']", {
                loop: !0,
                effect: "coverflow",
                grabCursor: !0,
                centeredSlides: !0,
                slidesPerView: "4",
                coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 },
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0, dynamicBullets: !0 },
            }),
            new Swiper("[data-swiper='flip']", { loop: !0, effect: "flip", grabCursor: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
            new Swiper("[data-swiper='creative']", {
                loop: !0,
                grabCursor: !0,
                effect: "creative",
                creativeEffect: { prev: { shadow: !0, translate: [0, 0, -400] }, next: { translate: ["100%", 0, 0] } },
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
            }),
            new Swiper("[data-swiper='responsive']", {
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: { el: ".swiper-pagination", clickable: !0 },
                breakpoints: { 768: { slidesPerView: 2, spaceBetween: 40 }, 1200: { slidesPerView: 3, spaceBetween: 50 } },
            });
    }
    init() {
        this.initSwiperSlider();
    }
}
class ToastNotification {
    initToastNotification() {
        document.querySelectorAll("[data-toast]").forEach(function (t) {
            t.addEventListener("click", function () {
                var e = {};
                t.attributes["data-toast-text"] && (e.text = t.attributes["data-toast-text"].value.toString()),
                    t.attributes["data-toast-gravity"] && (e.gravity = t.attributes["data-toast-gravity"].value.toString()),
                    t.attributes["data-toast-position"] && (e.position = t.attributes["data-toast-position"].value.toString()),
                    t.attributes["data-toast-className"] && (e.className = t.attributes["data-toast-className"].value.toString()),
                    t.attributes["data-toast-duration"] && (e.duration = t.attributes["data-toast-duration"].value.toString()),
                    t.attributes["data-toast-close"] && (e.close = t.attributes["data-toast-close"].value.toString()),
                    t.attributes["data-toast-style"] && (e.style = t.attributes["data-toast-style"].value.toString()),
                    t.attributes["data-toast-offset"] && (e.offset = t.attributes["data-toast-offset"]),
                    Toastify({
                        newWindow: !0,
                        text: e.text,
                        gravity: e.gravity,
                        position: e.position,
                        className: "bg-" + e.className,
                        stopOnFocus: !0,
                        offset: { x: e.offset ? 50 : 0, y: e.offset ? 10 : 0 },
                        duration: e.duration,
                        close: "close" == e.close,
                    }).showToast();
            });
        });
    }
    init() {
        this.initToastNotification();
    }
}
// document.addEventListener("DOMContentLoaded", function (e) {
//     new Components().init(), new FormValidation().init(), new FormAdvanced().init(), new Portlet().init(), new Code().init(), new Dragula().init(), new SwiperSlider().init(), new ToastNotification().init();
// });
class ThemeLayout {
    constructor() {
        (this.html = document.getElementsByTagName("html")[0]), (this.config = {}), (this.defaultConfig = window.config);
    }
    initVerticalMenu() {
        const e = document.querySelectorAll(".navbar-nav li .collapse"),
            t = document.querySelectorAll(".navbar-nav li [data-bs-toggle='collapse']");
        t.forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault();
            });
        }),
            e.forEach((e) => {
                e.addEventListener("show.bs.collapse", function (a) {
                    const i = a.target.closest(".collapse.show");
                    document.querySelectorAll(".navbar-nav .collapse.show").forEach((e) => {
                        if (e !== a.target && e !== i) {
                            const t = new bootstrap.Collapse(e);
                            t.hide();
                        }
                    });
                });
            }),
            document.querySelector(".navbar-nav") &&
            (document.querySelectorAll(".navbar-nav a").forEach(function (t) {
                var e = window.location.href.split(/[?#]/)[0];
                if (t.href === e) {
                    t.classList.add("active"), t.parentNode.classList.add("active");
                    let e = t.closest(".collapse");
                    for (; e;) e.classList.add("show"), e.parentElement.children[0].classList.add("active"), e.parentElement.children[0].setAttribute("aria-expanded", "true"), (e = e.parentElement.closest(".collapse"));
                }
            }),
                setTimeout(function () {
                    var e,
                        i,
                        n,
                        o,
                        r,
                        s,
                        t = document.querySelector(".nav-item li a.active");
                    function l() {
                        var e,
                            t,
                            a = ((e = s += 20), (a = o), (t = r), (e /= n / 2) < 1 ? (t / 2) * e * e + a : (-t / 2) * (--e * (e - 2) - 1) + a);
                        (i.scrollTop = a), s < n && setTimeout(l, 20);
                    }
                    null != t && ((e = document.querySelector(".main-nav .simplebar-content-wrapper")), (t = t.offsetTop - 300), e && 100 < t && ((n = 600), (o = (i = e).scrollTop), (r = t - o), (s = 0), l()));
                }, 200));
    }
    initConfig() {
        (this.defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig))), (this.config = JSON.parse(JSON.stringify(window.config))), this.setSwitchFromConfig();
    }
    changeMenuColor(e) {
        (this.config.menu.color = e), this.html.setAttribute("data-menu-color", e), this.setSwitchFromConfig();
    }
    changeMenuSize(e, t = !0) {
        this.html.setAttribute("data-menu-size", e), t && ((this.config.menu.size = e), this.setSwitchFromConfig());
    }
    changeThemeMode(e) {
        (this.config.theme = e), this.html.setAttribute("data-bs-theme", e), this.setSwitchFromConfig();
    }
    changeTopbarColor(e) {
        (this.config.topbar.color = e), this.html.setAttribute("data-topbar-color", e), this.setSwitchFromConfig();
    }
    resetTheme() {
        (this.config = JSON.parse(JSON.stringify(window.defaultConfig))),
            this.changeMenuColor(this.config.menu.color),
            this.changeMenuSize(this.config.menu.size),
            this.changeThemeMode(this.config.theme),
            this.changeTopbarColor(this.config.topbar.color),
            this._adjustLayout();
    }
    initSwitchListener() {
        var a = this;
        document.querySelectorAll("input[name=data-menu-color]").forEach(function (t) {
            t.addEventListener("change", function (e) {
                a.changeMenuColor(t.value);
            });
        }),
            document.querySelectorAll("input[name=data-menu-size]").forEach(function (t) {
                t.addEventListener("change", function (e) {
                    a.changeMenuSize(t.value);
                });
            }),
            document.querySelectorAll("input[name=data-bs-theme]").forEach(function (t) {
                t.addEventListener("change", function (e) {
                    a.changeThemeMode(t.value);
                });
            }),
            document.querySelectorAll("input[name=data-topbar-color]").forEach(function (t) {
                t.addEventListener("change", function (e) {
                    a.changeTopbarColor(t.value);
                });
            });
        var e = document.getElementById("light-dark-mode");
        e &&
            e.addEventListener("click", function (e) {
                "light" === a.config.theme ? a.changeThemeMode("dark") : a.changeThemeMode("light");
            });
        e = document.querySelector("#reset-layout");
        e &&
            e.addEventListener("click", function (e) {
                a.resetTheme();
            });
        e = document.querySelector(".button-toggle-menu");
        e &&
            e.addEventListener("click", function () {
                var e = a.config.menu.size,
                    t = a.html.getAttribute("data-menu-size", e);
                "hidden" !== t ? ("condensed" === t ? a.changeMenuSize("condensed" == e ? "default" : e, !1) : a.changeMenuSize("condensed", !1)) : a.showBackdrop(), a.html.classList.toggle("sidebar-enable");
            }),
            document.querySelectorAll(".button-sm-hover").forEach(function (e) {
                e.addEventListener("click", function () {
                    var e = a.config.menu.size,
                        t = a.html.getAttribute("data-menu-size", e);
                    "sm-hover-active" === e && ("sm-hover-active" === t ? a.changeMenuSize("sm-hover", !0) : a.changeMenuSize("sm-hover-active", !0)),
                        "sm-hover" === e && ("sm-hover" === t ? a.changeMenuSize("sm-hover-active", !0) : a.changeMenuSize("sm-hover", !0));
                });
            });
    }
    showBackdrop() {
        const t = document.createElement("div");
        (t.classList = "offcanvas-backdrop fade show"), document.body.appendChild(t), (document.body.style.overflow = "hidden"), 1040 < window.innerWidth && (document.body.style.paddingRight = "15px");
        const a = this;
        t.addEventListener("click", function (e) {
            a.html.classList.remove("sidebar-enable"), document.body.removeChild(t), (document.body.style.overflow = null), (document.body.style.paddingRight = null);
        });
    }
    initWindowSize() {
        var t = this;
        window.addEventListener("resize", function (e) {
            t._adjustLayout();
        });
    }
    _adjustLayout() {
        window.innerWidth <= 1140 ? this.changeMenuSize("hidden", !1) : this.changeMenuSize(this.config.menu.size);
    }
    setSwitchFromConfig() {
        sessionStorage.setItem("__RAYDAR_CONFIG__", JSON.stringify(this.config)),
            document.querySelectorAll(".settings-bar input[type=radio]").forEach(function (e) {
                e.checked = !1;
            });
        var e,
            t,
            a,
            i = this.config;
        i &&
            ((e = document.querySelector("input[type=radio][name=data-bs-theme][value=" + i.theme + "]")),
                (t = document.querySelector("input[type=radio][name=data-topbar-color][value=" + i.topbar.color + "]")),
                (a = document.querySelector("input[type=radio][name=data-menu-size][value=" + i.menu.size + "]")),
                (i = document.querySelector("input[type=radio][name=data-menu-color][value=" + i.menu.color + "]")),
                e && (e.checked = !0),
                t && (t.checked = !0),
                a && (a.checked = !0),
                i && (i.checked = !0));
    }
    init() {
        this.initVerticalMenu(), this.initConfig(), this.initSwitchListener(), this.initWindowSize(), this._adjustLayout(), this.setSwitchFromConfig();
    }
}
new ThemeLayout().init();
