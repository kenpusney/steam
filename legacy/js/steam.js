define("base", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function extend(self, obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                self[i] = obj[i];
            }
        }
    }
    exports.extend = extend;
    function identity(self) { return self; }
    exports.identity = identity;
});
define("polyfill", ["require", "exports", "base"], function (require, exports, base_1) {
    "use strict";
    exports.__esModule = true;
    var Visual = /** @class */ (function () {
        function Visual() {
        }
        return Visual;
    }());
    exports.Visual = Visual;
    function CreateElement(name) {
        return function (attribute) {
            var content = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                content[_i - 1] = arguments[_i];
            }
            var element = document.createElement(name);
            base_1.extend(element, attribute);
            return {
                render: function () {
                    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                        var el = content_1[_i];
                        if (el.render()['element']) {
                            element.appendChild(el.element());
                        }
                    }
                    return this;
                },
                element: function () {
                    return element;
                }
            };
        };
    }
    exports.a = CreateElement("a");
    exports.i = CreateElement("i");
    exports.div = CreateElement("div");
    exports.input = CreateElement("input");
});
define("steam", ["require", "exports", "polyfill"], function (require, exports, polyfill_1) {
    "use strict";
    exports.__esModule = true;
    var hello = polyfill_1.a({ href: "#", onclick: function () { return alert("bbb"); } }, polyfill_1.i({ textContent: "hello world" }));
    document.body.appendChild(hello.render().element());
    function CreateCombinedElement(ctor) {
        return function () {
            var comps = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                comps[_i] = arguments[_i];
            }
            var elem = ctor.apply(void 0, comps);
            return {
                render: function () {
                    elem.render();
                    return this;
                },
                element: function () {
                    return elem.element();
                }
            };
        };
    }
    var if_ = CreateCombinedElement(function (test, alter, conseq) {
        return polyfill_1.div({ textContent: "hello world" }, polyfill_1.div({}, test), polyfill_1.div({}, alter), polyfill_1.div({}, conseq));
        ;
    });
    document.body.appendChild(if_(polyfill_1.a({ textContent: "hello" }), polyfill_1.a({ textContent: "hello" }), polyfill_1.a({ textContent: "hello" }))
        .render().element());
});
