// Creating variables
var myX = 0, myY = 0,updates=0, nachX=80, nachY=510,dx=0,dy=0,
    celX=650,celY=450, nomerNaCel=0, stenaX=450, stenaY=200;
var izstrelvaLiSePticata = false, frasnahLiSeTokuShto=false, upd=0;
function zadavaneNaKoordNaPticata(){
    myX=nachX;
    myY=nachY;
    frasnahLiSeTokuShto=false;
}
function chooseRandomPositionForWall(){
    stenaX = randomInteger(400) + 200;
    stenaY = randomInteger(150) + 150;
}
zadavaneNaKoordNaPticata()
function pravqStupka(){
    myX=myX+dx;
    myY=myY+dy;
    dy=dy+0.01;
    if(myX+30>800){
        dx=-dx;
    }
    if(myY<0){
        dy=-dy;
    }
    if(areColliding(myX, myY, 30, 30, stenaX, stenaY, 1, 200)){
       
        if(!frasnahLiSeTokuShto){
            dx = -dx;
            frasnahLiSeTokuShto=true;
        }         
    }
    
    
    if(myY+30>600){
        dy=-dy;
    }
    if(myX<0){
        izstrelvaLiSePticata=false;
        zadavaneNaKoordNaPticata();
    }

}

function zadavaneNadxdy(){
    dx=(nachX-mouseX)/20;
    dy=(nachY-mouseY)/20;
}
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    if(frasnahLiSeTokuShto){
        upd=100;
    }
    if(upd>0){
        upd--;
    }else{
        frasnahLiSeTokuShto=false;
    }
    if(izstrelvaLiSePticata){
       pravqStupka();
    }  
    if(areColliding(myX,myY,30,30,celX,celY,50,50)){
        celX=800;
        zadavaneNaKoordNaPticata();
        chooseRandomPositionForWall()
        izstrelvaLiSePticata=false;
        dx=0;
        dy=0; 
        nomerNaCel=nomerNaCel+1;
        celX=650;
        console.log("bravo");
    }

}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backTower,0, 0, 800, 600);
    drawImage(gummyWorm,nachX,nachY,40,40);
    drawImage(parrot,myX,myY,30,30);
    drawImage(paddle, stenaX, stenaY, 10, 350);
    if(nomerNaCel>5){
        nomerNaCel=0;
    }
    drawImage(jelly[nomerNaCel], celX, celY, 50, 50);
    if(!izstrelvaLiSePticata){
        
    zadavaneNadxdy();
        
        
        for(let i=0; i < 600; i = i + 1){
            pravqStupka();
            
            if(i%5==0){
                drawImage(star,myX,myY,10,10);
            }     
        }
        zadavaneNaKoordNaPticata();
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    izstrelvaLiSePticata=true;
    zadavaneNadxdy();
};
