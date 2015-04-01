(function () {
    var UI = WinJS.Class.define(function (name) {
        this.name = name;
    }
    );
    WinJS.Namespace.define("UI", { UI: UI });

    var Scene = WinJS.Class.define(function (name) {
        this.name = name;
    });
    WinJS.Namespace.define("UI.Scene", { Scene: Scene });

    var Control = WinJS.Class.define(function (name) {
        this.name = name;
    });
    WinJS.Namespace.define("UI.Control", { Control: Control });

    var Menu = WinJS.Class.define(function (name) {
        this.name = name;
    });
    WinJS.Namespace.define("UI.Control", { Menu: Menu });

    var Button = WinJS.Class.define(function (name) {
        this.name = name;
    })
    WinJS.Namespace.define("UI.Control", { Button: Button });

})();