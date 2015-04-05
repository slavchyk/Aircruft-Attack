(function () {
    var UI = WinJS.Class.define(function (name) {
        this.name = name;
    }
    );
    

    var Scene = WinJS.Class.define(function (name) {
        this.name = name;
    });
    

    var Control = WinJS.Class.define(function (name) {
        this.name = name;
    });
    

    var Menu = WinJS.Class.define(function (name) {
        this.name = name;
    });
    

    var Button = WinJS.Class.define(function (name) {
        this.name = name;
    });
    WinJS.Namespace.define("App.UI.Control", { Menu: Menu });
    WinJS.Namespace.define("App.UI.Control", { Control: Control });
    WinJS.Namespace.define("App.UI.Scene", { Scene: Scene });
    WinJS.Namespace.define("App.UI", { UI: UI });
    WinJS.Namespace.define("App.UI.Control", { Button: Button });

    var Source = WinJS.Class.define(function () {
        
    },
    {
        afterLoad: 'undefined',
        LoadQueueImages: function (arraySource) {
            
            var queue = new createjs.LoadQueue(false);            
            queue.on("complete", this.afterLoad, this);

            for (item in arraySource) {
                queue.loadManifest([
                    {id: arraySource[item].id, src: arraySource[item].src}
                ]);
            }
            queue.load();
            return queue;
        },
        LoadSounds: function (arraySource) {
            queue.installPlugin(createjs.Sound);
        },
        MethodAfterLoad: function (method) {
            this.afterLoad = method;
        }
    }
    )
    WinJS.Namespace.define("App", { Source: Source });
})();

var SourceController = (function () {
    var instance;
    return {
        GetInstane: function () {
            if (!instance) {
                instance = new App.Source();
            }
            return instance;
        }
    }
})();

var Stage = (function () {
    var instance;
    function createInstance() {
        return new createjs.Stage("myCanvas");
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();