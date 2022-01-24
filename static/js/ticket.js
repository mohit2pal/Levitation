const button = document.getElementById("fin");
// const targetDiv = document.getElementById("mark");
const button2 = document.getElementById("cool");
const button3 = document.getElementById("prn");


function seat_ticket() {
    // var xhr = new XMLHttpRequest()
    // xhr.open('POST', )

    const markseat = localStorage.getItem("currentSeats")
    console.log(markseat);

    document.getElementById("seat_ticket").innerHTML = markseat

}

function date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("datetoday").innerHTML = today
}

function show(){
    var today = new Date();
    var h = String(today.getHours()).padStart(2,'0')
    var m = String(today.getMinutes()).padStart(2,'0');

    today = h + ':' + m ;
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(time)
    document.getElementById("timestart").innerHTML = today
}

function showend(){
    var today = new Date();
    var hint = parseInt(today.getHours())
    mint = parseInt(today.getMinutes() + 30)
    if(mint>60){
        hint = parseInt(today.getHours() + 1)
        if(hint>23){
            hint = 0
        }
        mint = mint - 60;
    }
    mm = String(mint).padStart(2,'0');
    h = String(hint).padStart(2,'0');
    end = h + ':' + mm;
    document.getElementById("timestop").innerHTML = end
}


function amount(){
    var amount = localStorage.getItem("moneystore");
    var amounth = 0 
    amounth = amount;
    document.getElementById("money").innerHTML = amounth + "Rs."
}
// function printPage()
// {
// window.print()
// }

// document.getElementById("button_print").addEventListener("click", printPage)
function check(){
    var popup = document.getElementById("grad1");
    popup.classList.toggle("active");
    var popup2 = document.getElementById("popup2");
    popup2.classList.toggle("active");
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function sentence(){
     document.getElementById("sen").innerHTML = "3s";
     await sleep(1000);
     document.getElementById("sen").innerHTML = "2s";
     await sleep(1000);
     document.getElementById("sen").innerHTML = "1s";
     await sleep(2000);
     window.open("/","_self");
}


function party(){ 
  const start = () => {
   setTimeout(function() {
     confetti.start()
    }, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
 };
 start();
} 


// function ticks(){
//  if (targetDiv.style.display !== "none") {
//    targetDiv.style.display = "none";
//  } else {
//    targetDiv.style.display = "inline";
//  }
// }

//  for stopping the confetti 
function nparty(){
  const stop = () => {
   setTimeout(function() {
       confetti.stop()
    }, 100); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };
 stop();
} 


function sound() {
    var audio = new Audio('./static/js/tune.mp3');
    audio.play();
}


function printPage() {
    setTimeout(function() {
        window.print();
     }, 500);
  }

button.addEventListener("click", () => {
    sound();
    check();
    party(); 
    // sentence();

})

button2.addEventListener("click", () => {
    check();
    nparty();  
    // sentence();

})

button3.addEventListener("click", () => {
    sound();
    printPage();  
    // sentence();

})

seat_ticket()
date()
amount()
show()
showend()



    // //to force refresh the page for seat booking
    // setInterval('refresh()', 200) // refresh at every 200ms
    // function refresh() {
    //   form.reload()
    // }

