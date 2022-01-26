function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat")
const button = document.querySelector(".button")
const button2 = document.getElementById("count")
const final = document.getElementById("prn")
const seatsb = document.querySelectorAll(".row .seat.booked")

// seats.forEach((seat,index) => {
//   console.log(seat.classList)
// })

updateUI()


/*******   TO SEND AND RECIEVE DATA USING AJAX     ************/


function ajaxx() {
    const markseat = localStorage.getItem("currentSeats")
    console.log(markseat)
    console.log(typeof markseat)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/seat_selection', true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(markseat)
}


/*******   A FUNCTION TO UPDATE THE UI     ************/


function updateUI() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './static/js/change.json', true)

    xhr.onload = function () {
        if (this.status == 200) {
            var change = JSON.parse(this.responseText)

            if (change['change'] == "true") {
                const bookedSeats = document.querySelectorAll(".row .seat.hooked")
                const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))
                localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
                populateUI()
            }
            else {
                populateUI()
            }
        }
    }
    xhr.send()

}


/*******   TO STORE DATA OF THE CURRENT SEATS BOOKED     ************/


function current_store() {
    const currentSeats = document.querySelectorAll(".row .seat.booked")
    const currentIndex = [...currentSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem("currentSeats", JSON.stringify(currentIndex))
}


/*******   FOR STORING VALUE IN LOCAL STORAGE     ************/


function store() {
    const bookedSeats = document.querySelectorAll(".row .seat.booked, .row .seat.sold")
    const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
} 

// function famount(){
//     const URL = '/seat_selection'
//     const xhr = new XMLHttpRequest();
//     // sender = JSON.stringify(amount)
//     amount = amount + 1
//     xhr.open('POST', URL);
//     xhr.send(amount);
// }


/*******   FUNCTION TO GIVE SOUND ON EACH CLICK     ************/


function sound() {
    var audio = new Audio('./static/js/tune.mp3');
    audio.play();
}

var amount = 0


/*******   USED TO LISTEN SEAT CLICKING AND TOGGLING COLOUR     ************/


container.addEventListener("click",(e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
      //  sound()
      console.log(e)
        if( document.querySelectorAll(".row .seat.booked").length < 28) {
          sound()
          e.target.classList.toggle("booked")
          
        }
        else {
            if(e.target.classList.contains("booked")){ 
              sound()
              e.target.classList.toggle("booked")

            }
            // else {
            //     pass
            // }
        }

        
    }

    submission()
    // const bookedSeats = document.querySelectorAll(".row .seat.booked")
    // const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    // localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
    // const selectedSeatsCount = selectedSeats.length;

    // console.log(bookedSeats)
    // console.log(seatsIndex)
})



/*******   CALCULATES AMOUNT ON EACH SELECT OF SEAT     ************/


function submission(){
   var a = document.querySelectorAll(".row .seat.booked").length
   amount = 500 * a;  
   button2.innerHTML = "TOTAL AMOUNT:" + amount;
   localStorage.setItem("moneystore", amount); 
}


/*******   AFTER CLICKING SUBMIT BUTTON     ************/


final.addEventListener("click", () => {
    sound();
    setTimeout(
        function()
        { window.open("/print_ticket","_self");}, 480); 

})





// button.addEventListener("click", () => {

//     store()
//     current_store()
//     const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats"))

//     if (selectedSeats !== null && selectedSeats.length > 0) {
//         seats.forEach((seat, index) => {
//             if (selectedSeats.indexOf(index) > -1) {
//                 seat.classList.add("sold")
//             }
//         })
//     }
//     // console.log(e)
//     // console.log(selectedSeats)
//     // console.log(typeof(selectedSeats))
//     ajaxx()
// })

button.addEventListener("click", button_click)

function button_click() {
  populator()
    store()
    current_store()
    const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats"))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("sold")
            }
        })
    }
    // console.log(e)
    console.log(selectedSeats)
    // console.log(typeof(selectedSeats))
    ajaxx() 
    window.open("/print_ticket","_self") 
}

function populator(){
  tututu = 0
  if(document.querySelectorAll(".row .seat.booked").length < 1 ){
    // const seatt = document.querySelectorAll(".row .seat")
    seats.forEach((seat, index) => {
      if(seat.classList.contains("sold")){
        //pass
      }
      else{
      if(tututu != 1){
        seat.classList.add("booked")
        tututu = 1
        submission()
      }
    }
    })
  }
}




function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats"))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("sold")
            }
        })
    }
}

// populateUI()


// timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}



const myTimeout = setTimeout(button_click, 21000)

