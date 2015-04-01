(function () {
    var UI = WinJS.Class.define(function (name) {
        this.name = name;
    }
    );
    WinJS.Namespace.define("UI", { UI: UI });
})();