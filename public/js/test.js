var a, v, l, m;
var t=0;
var q=0;
var tam=500;
function setup() {
  t=0;
  background(0);
 	createCanvas(800,800)
  a = new Array(tam);
  v = new Array(tam);
  l = new Array(tam);
  m = new Array(tam);
  for(var i=0;i<tam;i++){
  	l[i] = createVector(width/2, height/2);
    
 		v[i] = createVector(0, 0);
		a[i] = createVector(0, 0);
  }
  
}
function draw() {
	//background(0);
	t++;
    q+=0.1;
	rectMode(CENTER);
    var xx=mouseX;
    var yy=mouseY;
	l[0] = createVector(xx,yy);
  for(var i=1;i<tam;i++){
    
    m[i] = createVector(l[i-1].x, l[i-1].y); 
    
  	
    m[i].sub(l[i]);
    m[i].setMag(10.0);
    a[i]=m[i];
    v[i].add(a[i])
    l[i].add(v[i]);
    v[i].limit(12);
  }
	
	for(var i=1;i<tam;i++){
    
    push();
    
    translate(l[i].x,l[i].y-5)
    rotate(-5*l[i].angleBetween(l[i-1]));
		
    
    var x1 = map(l[i-1].x,0,800,0,250)
    var y1 = map(l[i-1].y,0,800,0,250)
    var z1 = map(sin(t),0,1,190,230)
 		//noStroke();
    fill(x1,y1,230);
  	rect(0,0,25,25);
    
    
    pop();
   
  }
	

}
