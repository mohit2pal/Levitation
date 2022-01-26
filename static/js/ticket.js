const finish = document.getElementById("fin");
const printbutton = document.getElementById("prn");


/*******   TAKING OUT CURRENT BOOKED SEATS FROM LOCAL STORAGE   **************/ 


function seat_ticket() {
    const markseat = localStorage.getItem("currentSeats")

    document.getElementById("seat_ticket").innerHTML = markseat
}


/*******   CALCULATING CURRENT DATE OF BOOKING TO PRINT IN TICKET   **************/ 


function date() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("datetoday").innerHTML = today

}


/*******   DEPARTURE TIME CALCULATED TO PRINT IN TICKET   **************/ 


function show(){

    var today = new Date();
    var h = String(today.getHours()).padStart(2,'0')
    var m = String(today.getMinutes()).padStart(2,'0');

    today = h + ':' + m ;
    document.getElementById("timestart").innerHTML = today
}


/*******   ARRIVAL TIME CALCULATED TO PRINT IN TICKET   **************/ 


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


/*******   TOTAL AMOUNT CALCULATED TO PRINT IN TICKET   **************/ 


function amount(){

    var amount = localStorage.getItem("moneystore");
    var amounth = 0 
    amounth = amount;
    document.getElementById("money").innerHTML = amounth + "Rs."
}



/*******   MAKING BACKGROUND BLUR WHEN THANK YOU POPUP COMES   **************/ 


function check(){

    var popup = document.getElementById("grad1");
    popup.classList.toggle("active");
    var popup2 = document.getElementById("popup2");
    popup2.classList.toggle("active");
}



/*******   TIMER TO RETURN HOME PAGE AFTER CLICKING FINISH BUTTON   **************/ 


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function sentence(){

     document.getElementById("sen").innerHTML = "3s";
     await sleep(1000);
     document.getElementById("sen").innerHTML = "2s";
     await sleep(1000);
     document.getElementById("sen").innerHTML = "1s";
     await sleep(1500);
     window.open("/","_self");
}



/*******   CONFETTI STARTED ON CLICKING FINISH BUTTON   **************/ 


function party(){ 
    
  const start = () => {
   setTimeout(function() {
     confetti.start()
    }, 100); 
 };
 start();
} 


/*******   TO DISPLAY TICK SIGN ON THANK YOU POPUP   **************/ 


function ticks(){
    document.getElementById('mark').style.display = "inline";
}



/*******   SOUND FOR BUTTONS   **************/ 


function sound() {
    var audio = new Audio('./static/js/tune.mp3');
    audio.play();
}



/*******   PRINTING TICKET FUNCTION   **************/ 


function printPage() {
    setTimeout(function() {
        window.print();
     }, 500);
}



/*******   CALLING FUNCTIONS ON CLICK OF FINISH BUTTON   **************/ 


finish.addEventListener("click", finishfun)

function finishfun() {
    sound();
    check();
    ticks();
    party(); 
    sentence();

}


/*******   CALLING FUNCTIONS ON CLICK OF PRINT TICKET BUTTON   **************/ 


printbutton.addEventListener("click", () => {
    sound();
    printPage(); 

})



seat_ticket()
date()
amount()
show()
showend()



const myTimeout = setTimeout(finishfun, 7000)