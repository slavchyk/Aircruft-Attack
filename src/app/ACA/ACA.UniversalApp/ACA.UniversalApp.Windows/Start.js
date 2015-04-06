var images = [
    { id: "city", src: "Assets/City.png" },
    { id: "assault1", src: "Assets/Assault_airplane.png" },
    { id: "assault2", src: "Assets/Assault_airplane2.png" },
    { id: "transport", src: "Assets/Transport_airplane.png" },
];
window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    //context.canvas.width = 800;
    //context.canvas.height = 480;
    Stage.getInstance();

    SourceController.EventLoaded(queueLoaded);
    SourceController.GetInstance();
    SourceController.GetInstance().LoadQueueImages(images);




    gameTimer = setInterval(updateTime, 1000);
}
function updateTime() {

}
function queueLoaded() {

}