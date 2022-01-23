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
// used to listen seat clicking and toggling color
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
        if (document.querySelectorAll(".row .seat.booked").length < 5) {
            e.target.classList.toggle("booked")
        }
        else {
            if (e.target.classList.contains("booked")) {
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
    // console.log(selectedSeats)
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