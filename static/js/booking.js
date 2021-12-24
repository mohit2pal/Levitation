const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat")
const button = document.querySelector(".button")

// used to listen seat clicking and toggling color
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
        e.target.classList.toggle("booked")
    }
    const bookedSeats = document.querySelectorAll(".row .seat.booked")
    const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    // console.log(bookedSeats)
    console.log(seatsIndex)
})

button.addEventListener("click", () => {
    console.log("6")
})