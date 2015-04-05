window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    //context.canvas.width = 800;
    //context.canvas.height = 480;
    Stage.getInstance();

    SourceController.eventLoaded(queueLoaded);
    SourceController.getInstance();

    gameTimer = setInterval(updateTime, 1000);
}
function updateTime() {

}