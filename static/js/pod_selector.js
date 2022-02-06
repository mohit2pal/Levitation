const b1 = document.getElementById("button1").addEventListener("click", deflector1)
const b2 = document.getElementById("button2").addEventListener("click", deflector2)
const b3 = document.getElementById("button3").addEventListener("click", deflector3)
const b4 = document.getElementById("button4").addEventListener("click", deflector4)
const b5 = document.getElementById("button5").addEventListener("click", deflector5)
const b6 = document.getElementById("button6").addEventListener("click", deflector6)
const b7 = document.getElementById("button7").addEventListener("click", deflector7)
const b8 = document.getElementById("button8").addEventListener("click", deflector8)
const b9 = document.getElementById("button9").addEventListener("click", deflector9)
const b10 = document.getElementById("button10").addEventListener("click", deflector10)
const b11 = document.getElementById("button11").addEventListener("click", deflector11)
const b12 = document.getElementById("button12").addEventListener("click", deflector12)
const b13 = document.getElementById("button13").addEventListener("click", deflector13)

/*******   Respective arguments for respective buttons are sended to these functions   **************/ 

function deflector1() {
  caller(1)
}
function deflector2() {
  caller(2)
}
function deflector3() {
  caller(3)
}
function deflector4() {
  caller(4)
}
function deflector5() {
  caller(5)
}
function deflector6() {
  caller(6)
}
function deflector7() {
  caller(7)
}
function deflector8() {
  caller(8)
}
function deflector9() {
  caller(9)
}
function deflector10() {
  caller(10)
}
function deflector11() {
  caller(11)
}
function deflector12() {
  caller(12)
}
function deflector13() {
  caller(13)
}


var data = ''

/*******   Used to call functions at a specific requirement   **************/ 

function caller(d){
  console.log(d)
  var chr = new XMLHttpRequest()
  chr.open("GET", "./static/js/damage.json", true)

  chr.onload = function(){
    var dmg = JSON.parse(this.responseText)
   
  if(dmg['selector'] == 0){
    send_group(d)
    sound();
    end();

  }  
  else if(dmg['selector'] == 1){
      sound();
      check4();
  }
}
chr.send()
}

/*******   Alloting Platform to a respective button   **************/ 

function send_group(t) {

  if(t==1){data = 'B,C,D,E,F,G,H,I,J,K,L,M'}
  else if(t==2){data = 'A,C,D,E,F,G,H,I,J,K,L,M'}
  else if(t==3){data = 'A,B,D,E,F,G,H,I,J,K,L,M'}
  else if(t==4){data = 'A,B,C,E,F,G,H,I,J,K,L,M'}
  else if(t==5){data = 'A,B,C,D,F,G,H,I,J,K,L,M'}
  else if(t==6){data = 'A,B,C,D,E,G,H,I,J,K,L,M'}
  else if(t==7){data = 'A,B,C,D,E,F,H,I,J,K,L,M'}
  else if(t==8){data = 'A,B,C,D,E,F,G,I,J,K,L,M'}
  else if(t==9){data = 'A,B,C,D,E,F,G,H,J,K,L,M'}
  else if(t==10){data = 'A,B,C,D,E,F,G,H,I,K,L,M'}
  else if(t==11){data = 'A,B,C,D,E,F,G,H,I,J,L,M'}
  else if(t==12){data = 'A,B,C,D,E,F,G,H,I,J,K,M'}
  else if(t==13){data = 'A,B,C,D,E,F,G,H,I,J,K,L'}
  
  const datat = data

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
    
  xhr.send(datat)
}

/*******   Sound for buttons   **************/ 

function sound() {
  var audio = new Audio('./static/js/tune.mp3');
  audio.play();
}

/*******   Alert on reselecting platform   **************/ 

function check4(){
  var popup = document.getElementById("grad1");
  popup.classList.toggle("active");
  var popup4 = document.getElementById("popup4");
  popup4.classList.toggle("active");
}

/*******   Leads to submit page on clicking submit button  **************/ 

function end(){
  setTimeout(
function()
{ window.open("/platform_submit","_self");}, 1000);
}



// b1.addEventListener("click", () => {

//     // if(clicks === 0){
//         sound();
//         check3();
//         send_group1();
//         end();
    
//     // if(clicks === 1){
//     //     sound();
//     //     window.alert("ok");
//     // }

    
//     // dicto = {"clicks": clicks }
//     // json_object = json.dumps(dicto, indent = 1)
//     // with open("./static/js/block.json", "w") as outfile:
//     //     outfile.write(json_object, () => { caller(1)}