System.register("test", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log("A simple test");
            exports_1("default", (function () { return console.log("ALSO TEST"); }));
        }
    };
});
System.register("index", ["test"], function (exports_2, context_2) {
    "use strict";
    var test_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            }
        ],
        execute: function () {
            test_1.default();
            console.log("TEST");
            console.log("ONE LAST TEST");
        }
    };
});
//# sourceMappingURL=bundle.js.map