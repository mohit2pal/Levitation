const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat")
const button = document.querySelector(".button")

//To send and recieve data using ajax
function ajaxx() {
    const markseat = localStorage.getItem("bookedSeats")
    console.log(markseat)
    console.log(typeof markseat)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/no_work', true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(markseat)
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
        e.target.classList.toggle("booked")
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

populateUI()