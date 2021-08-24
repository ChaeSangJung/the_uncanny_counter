const cm = {
    canvas: undefined,
    context: undefined,
    canvasWidth: 0,
    canvasHeight: 0
};

( function(){
    cm.canvas = document.querySelector("#the_canvas");
    cm.context = cm.canvas.getContext("2d");
    const canvasContainer = document.querySelector(".container_canvas");
    const dpr = window.devicePixelRatio > 1 ? 2 : 1;

    function draw(){

    }
    function setSize(){
        cm.canvasWidth = canvasContainer.clientWidth;
        cm.canvasHeight = canvasContainer.clientHeight;
        cm.canvas.width = cm.canvasWidth * dpr;
        cm.canvas.height = cm.canvasHeight * dpr;
        if(dpr > 1) cm.context.scale(dpr, dpr);
    }
    function setup(){
        setSize();
        draw();
    }
    window.addEventListener("resize", setSize);
    window.addEventListener("load", setup);
})();