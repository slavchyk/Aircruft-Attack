(function () {
    var UI = WinJS.Class.define(function (name) {
        this.name = name;
    },
    {
        Create: function () {

        }
    }
    );
    

    var Scene = WinJS.Class.define(function (name) {
        this.name = name;
    }
    );
    

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
            queue.loadManifest(arraySource);
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
    var queueLoaded;
    return {
        GetInstance: function () {
            if (!instance) {
                instance = new App.Source();
                instance.MethodAfterLoad(queueLoaded);
            }
            return instance;
        },
        EventLoaded: function (queueEvent) {
            queueLoaded = queueEvent;
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