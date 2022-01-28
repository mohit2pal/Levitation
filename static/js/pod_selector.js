const b1 = document.getElementById("button1").addEventListener("click", caller)
const b2 = document.getElementById("button2").addEventListener("click", caller)
const b3 = document.getElementById("button3").addEventListener("click", caller)
const b4 = document.getElementById("button4").addEventListener("click", caller)
const b5 = document.getElementById("button5").addEventListener("click", caller)
const b6 = document.getElementById("button6").addEventListener("click", caller)
const b7 = document.getElementById("button7").addEventListener("click", caller)
const b8 = document.getElementById("button8").addEventListener("click", caller)
const b9 = document.getElementById("button9").addEventListener("click", caller)
const b10 = document.getElementById("button10").addEventListener("click", caller)
const b11 = document.getElementById("button11").addEventListener("click", caller)
const b12 = document.getElementById("button12").addEventListener("click", caller)
const b13 = document.getElementById("button13").addEventListener("click", caller)



function caller(d){

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

function send_group(t) {

  if(t==1){const data = 'B,C,D,E,F,G,H,I,J,K,L,M'}
  else if(t==2){const data = 'A,C,D,E,F,G,H,I,J,K,L,M'}
  else if(t==3){const data = 'A,B,D,E,F,G,H,I,J,K,L,M'}
  else if(t==4){const data = 'A,B,C,E,F,G,H,I,J,K,L,M'}
  else if(t==5){const data = 'A,B,C,D,F,G,H,I,J,K,L,M'}
  else if(t==6){const data = 'A,B,C,D,E,G,H,I,J,K,L,M'}
  else if(t==7){const data = 'A,B,C,D,E,F,H,I,J,K,L,M'}
  else if(t==8){const data = 'A,B,C,D,E,F,G,I,J,K,L,M'}
  else if(t==9){const data = 'A,B,C,D,E,F,G,H,J,K,L,M'}
  else if(t==10){const data = 'A,B,C,D,E,F,G,H,I,K,L,M'}
  else if(t==11){const data = 'A,B,C,D,E,F,G,H,I,J,L,M'}
  else if(t==12){const data = 'A,B,C,D,E,F,G,H,I,J,K,M'}
  else if(t==13){const data = 'A,B,C,D,E,F,G,H,I,J,K,L'}
  
    

    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/pod_selector', true)
    xhr.setRequestHeader('Content-Type', 'text/plain')
    
    xhr.send(data)
    caller()
}

function sound() {
  var audio = new Audio('./static/js/tune.mp3');
  audio.play();
}



function check4(){
  var popup = document.getElementById("grad1");
  popup.classList.toggle("active");
  var popup4 = document.getElementById("popup4");
  popup4.classList.toggle("active");
}

function end(){
  setTimeout(
function()
{ window.open("/platform_submit","_self");}, 1000);
}

/************* CALLING FUNCTIONS STARTED ******************/


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
//     //     outfile.write(json_object)

// })