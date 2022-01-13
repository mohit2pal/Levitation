const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat")
const button = document.querySelector(".button")
const button2 = document.getElementById("count")
const seatsb = document.querySelectorAll(".row .seat.booked")

updateUI()

//To send and recieve data using ajax
function ajaxx() {
    const markseat = localStorage.getItem("currentSeats")
    console.log(markseat)
    console.log(typeof markseat)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/seat_selection', true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(markseat)
}

//A functio to update the UI
function updateUI() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './static/js/change.json', true)

    xhr.onload = function () {
        if (this.status == 200) {
            var change = JSON.parse(this.responseText)

            if (change['change'] == "true") {
                const bookedSeats = document.querySelectorAll(".row .seat.booked")
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

//to store data of the current seats booked
function current_store() {
    const currentSeats = document.querySelectorAll(".row .seat.booked")
    const currentIndex = [...currentSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem("currentSeats", JSON.stringify(currentIndex))
}
// for storing value in local storage
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

function sound() {
    var audio = new Audio('./static/js/tune.mp3');
    audio.play();
}

var amount = 0
function add() {
    amount += 200;
    button2.innerHTML = "TOTAL AMOUNT:" + amount;
    
}

function sub() {
    amount -= 100;
    button2.innerHTML = "TOTAL AMOUNT:" + amount;
    
}

// used to listen seat clicking and toggling color
container.addEventListener("click",(e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
    //    add()
       sound()
        // amount = amount + 1
        // $.post("/postmethod", {
        //     javascript_data: amount
        //  });
        // famount() 
        // window.alert(amount)
        if( document.querySelectorAll(".row .seat.booked").length < 5) {
         
           e.target.classList.toggle("booked")
        }
        else {
            // amount = amount - 1
            if(e.target.classList.contains("booked")){ 
            
              e.target.classList.toggle("booked")
            }
            // else {
            //     pass
            // }
        }
    }
    // const bookedSeats = document.querySelectorAll(".row .seat.booked")
    // const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    // localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
    // const selectedSeatsCount = selectedSeats.length;

    // console.log(bookedSeats)
    // console.log(seatsIndex)
})

container.addEventListener("click",(e) => {
    const currentSeats = document.querySelectorAll(".row .seat.booked")
    const currentIndex = [...currentSeats].map((seat) => [...seats].indexOf(seat))

    const k = localStorage.setItem("currentSeats", JSON.stringify(currentIndex))
    
    if( e.target.classList.contains("seat") && (k==k)) {
        add();
    }
    if( e.target.classList.contains("seat") && (k != k)) {
        sub();
    }
})

// var audio = new Audio('tune.mp3')
// function myplay(){
//    audio.play()


// button.addEventListener("click", () => {
//     var audio = new Audio('.\static\js\tune.mp3');
//     audio.play();
//  })


button.addEventListener("click", () => {
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
})

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