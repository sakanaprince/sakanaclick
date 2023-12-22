var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

var w = canvas.width;
var h = canvas.height;
var id = setInterval(draw, 10);
var point = 0;
var count = 0;
var sakana = new Image();
sakana.src = "Image/sakana.png";
var mainX = w/2;
var mainY = h/2;
var mes = 0;


function draw(){
    ctx.fillStyle = "#87cefa";
    ctx.fillRect(0, 0, w, h);
    ctx.font = "100px `MSゴシック`"
    ctx.fillStyle = "#000000";
    ctx.fillText("おさかな:" + point, 50,50);
    ctx.drawImage(sakana,mainX,mainY,50,50);
  }

  function Go(){
    
    mes += 1;
    document.getElementById("Button").innerHTML = mes;
  }
