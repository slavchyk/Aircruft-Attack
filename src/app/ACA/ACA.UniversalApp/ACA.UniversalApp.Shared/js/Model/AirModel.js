//define based class airmodel and derive child classes from parent
(function () {

    var AirModel = WinJS.Class.define(
        function (name) {
            this.name = name;
        },
        { Speed: 0 },
        { Health: 0 },
        {
            Fly: function () {

            },
            Die: function () {

            },
            Shoot: function () {

            }
        }
        );

    var Transport = WinJS.Class.derive(AirModel,
            { Speed: 10 },
            { Health: 10 }
            );

    var Bomber = WinJS.Class.derive(AirModel,
            { Speed: 30 },
            { Health: 80 },
            { Bomb: 4 }
            );

    var Assault = WinJS.Class.derive(AirModel,
        { Speed: 50 },
        { Health: 80 },
        { Rocket: 4 }
        );

    //define namespaces for classes
    WinJS.Namespace.define("AirModel", { AirModel: AirModel });
    WinJS.Namespace.define("AirModel", { Transport: Transport });
    WinJS.Namespace.define("AirModel", { Transport: Bomber });
    WinJS.Namespace.define("AirModel", { Transport: Assault });
    
    var GetInstance = WinJS.Class.define(function (name) {
        switch (name) {
            case "transport": return new Transport(name);
            case "bomber": return new Bomber(name);
            case "assault": return new Assault(name);
            default: return new Bomber(name);
        }
    });
    WinJS.Namespace.define("AirModel", { GetInstance: GetInstance });
})();