const b1 = document.getElementById("button1").addEventListener("click", send_group1)
const b2 = document.getElementById("button2").addEventListener("click", send_group2)
const b3 = document.getElementById("button3").addEventListener("click", send_group3)
const b4 = document.getElementById("button4").addEventListener("click", send_group4)
const b5 = document.getElementById("button5").addEventListener("click", send_group5)
const b6 = document.getElementById("button6").addEventListener("click", send_group6)
const b7 = document.getElementById("button7").addEventListener("click", send_group7)
const b8 = document.getElementById("button8").addEventListener("click", send_group8)
const b9 = document.getElementById("button9").addEventListener("click", send_group9)
const b10 = document.getElementById("button10").addEventListener("click", send_group10)
const b11 = document.getElementById("button11").addEventListener("click", send_group11)
const b12 = document.getElementById("button12").addEventListener("click", send_group12)
const b13 = document.getElementById("button13").addEventListener("click", send_group13)


var clicks = 0;

function caller(){

  var chr = new XMLHttpRequest()
  chr.open("GET", "./static/js/damage.json", true)

  chr.onload = function(){
    var dmg = JSON.parse(this.responseText)
   
  if(dmg['selector'] == 0){
    sound();
    check3();
    clicks = 1

  }  
  else if(dmg['selector'] == 1){
      sound();
      check4();
  }
}
chr.send()
}

function send_group1() {
    const data = 'B,C,D,E,F,G,H,I,J,K,L,M'

    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/pod_selector', true)
    xhr.setRequestHeader('Content-Type', 'text/plain')
    
    xhr.send(data)
    caller()
}

function send_group2() {
  const data = 'A,C,D,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group3() {
  const data = 'A,B,D,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group4() {
  const data = 'A,B,C,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group5() {
  const data = 'A,B,C,D,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group6() {
  const data = 'A,B,C,D,E,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group7() {
  const data = 'A,B,C,D,E,F,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group8() {
  const data = 'A,B,C,D,E,F,G,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group9() {
  const data = 'A,B,C,D,E,F,G,H,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group10() {
  const data = 'A,B,C,D,E,F,G,H,I,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group11() {
  const data = 'A,B,C,D,E,F,G,H,I,J,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group12() {
  const data = 'A,B,C,D,E,F,G,H,I,J,K,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
  caller()
}

function send_group13() {
  const data = 'A,B,C,D,E,F,G,H,I,J,K,L'

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



function check3(){
    var popup = document.getElementById("grad1");
    popup.classList.toggle("active");
    var popup3 = document.getElementById("popup3");
    popup3.classList.toggle("active");
    
}

function check4(){
  var popup = document.getElementById("grad1");
  popup.classList.toggle("active");
  var popup4 = document.getElementById("popup4");
  popup4.classList.toggle("active");
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