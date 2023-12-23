var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

var w = canvas.width;
var h = canvas.height;
var id = setInterval(draw, 10);
var point = 0;
var click = 1;
var count = 0;
var sakana = new Image();
sakana.src = "Image/sakana.png";
var item1 = new Image();
item1.src = "Image/item1.png";
var mainX = w/2;
var mainY = h/2;
var mes = 0;
var itemX = w/2;
var itemY = 700;


function draw(){
    ctx.fillStyle = "#87cefa";
    ctx.fillRect(0, 0, w, h);
    ctx.font = "80px MSゴシック"
    ctx.fillStyle = "#000000";
    ctx.fillText("おさかな　" + point, 100,150);
    ctx.fillText("生産率🐟" + click, 100,250);
    ctx.drawImage(sakana,500,200,600,300);
    ctx.drawImage(item1,itemX,itemY,150,150);
  }


  function Go(){
    
    mes += 1;
    document.getElementById("Button").innerHTML = mes;
  }

  //さかなをクリックした時
  canvas.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    mousePointer_X = e.clientX - rect.left;
    mousePointer_Y = e.clientY - rect.top;

    //500 <=> mainX 200<=>mainY
    if (mousePointer_X > 500 && mousePointer_X < 500 + 700 && mousePointer_Y > 200 && mousePointer_Y < 200 + 300) {
        point += click;
    }
});

//アイテム1をクリックした時
canvas.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    mousePointer_X = e.clientX - rect.left;
    mousePointer_Y = e.clientY - rect.top;

   
    if (mousePointer_X > w/2 && mousePointer_X < w/2 + 200 && mousePointer_Y > 700 && mousePointer_Y < 700 + 200) {
        if(point > 9){
            point -= 10;
            click += 1;
        }
    }
});

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mousePointer_X = e.clientX - rect.left;
    mousePointer_Y = e.clientY - rect.top;

    if (mousePointer_X > w/2 && mousePointer_X < w/2 + 200 && mousePointer_Y > 700 && mousePointer_Y < 700 + 200) {
       ctx.fillText("ほんっとにいつもありがとうございます",200,900);
    }
});
