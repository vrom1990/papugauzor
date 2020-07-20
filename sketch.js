

let papuga, angle=0,size = 50, speed =0.1, step = 0.1, clearTime=false, drawing = true;

function setup() {
  createCanvas(windowWidth, windowWidth);
  papuga = createImg('papuga.png');
  papuga.crossOrigin = 'Anonymous';
  //papuga.hide();
  // loadImage('hamster.jpg', imageLoaded);
  // image(img, 0, 0);
}

function draw() {
  uzor(drawing);
  if (clearTime){
      clear();
    clearTime = false;
      }
  translate(width/2, height/2);
	rotate(angle);
  scale(size/50);
  try{
  image(papuga, 0,0);
  } catch {
    papugaReset();
    
  }
  
  
}

function papush(){
  let URL = papugUrl.value;
  if (URL == '') URL = "papuga.png";
  speed = +speedP.value/10000;
  if (speed != speed){
    speed = 0.1;
    speedP.value = 100;
  }
  if (speed < 0.0001){
    speed = 0.0001;
    speedP.value = 1;
  }
  step = +stepP.value/10000;
  if (step != step) {
    step = 0.1;
    stepP.value = 100;
  }
  if (step < 0.0001){
    step = 0.0001;
    stepP.value = 1;
  }
  size = +sizeP.value;
  if (size != size){
    size = 50;
    sizeP.value = 50;
  }
  if (size < 1){
    size = 50;
    sizeP.value = 50;
  }
  papuga.remove();
  
   papuga = createImg(URL);
  papuga.crossOrigin = 'Anonymous';
  papuga.src="some.url" ;
  
   angle=0;
   clearTime = true;

}

function papugaReset(){
  papuga.remove();
   papuga = createImg("papuga.png");
    angle=0;
   size = +sizeP.value;
  if (size != size){
    size = 50;
    sizeP.value = 50;
  }
  if (size < 1){
    size = 50;
    sizeP.value = 50;
  }
   clearTime = true;
  alert("картинку загрузить не удалось");
}



function uzor(drawing){
 if (drawing){
  angle+=speed;
 size+=step;
     }
}

function startstop(){
  if (drawing){
   drawing = false;
  pause.innerHTML="Продолжить";
  } else {
   drawing = true;
  pause.innerHTML="Пауза"; 
  }
}
