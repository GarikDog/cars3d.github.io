onresize = function()
{
  var bodyWidth  = document.body.clientWidth
      , bodyHeight = document.body.clientHeight;
    var scalable = document.getElementById("containerS");
    scale = Math.min(bodyWidth / 1920, bodyHeight / 1080);
    
    scalable.style.top = (bodyHeight - (scalable.offsetHeight * scale)) / 2 + "px";
    scalable.style.left = (bodyWidth - (scalable.offsetWidth * scale)) / 2 + "px";
    scalable.style.webkitTransform = "scale(" + scale + ")";
    scalable.style.width = bodyWidth +"px";
    scalable.style.height = bodyHeight + "px";
}



onresize();