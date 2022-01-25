const container = document.querySelector(".container2")
const seats = document.querySelectorAll(".row2 .seat")
const button = document.querySelector(".button")

// updateUI()

/*******   TO SEND AND RECIEVE DATA USING AJAX     ************/


function ajaxx() {
    const markseat = localStorage.getItem("bookedSeats2")
    console.log(markseat)
    console.log(typeof markseat)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/worker', true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(markseat)
}

//A functio to update the UI
// function updateUI() {
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', './static/js/change.json', true)

//     xhr.onload = function () {
//         if (this.status == 200) {
//             var change = JSON.parse(this.responseText)

//             if (change['change'] == "true") {
//                 const bookedSeats = document.querySelectorAll(".row .seat.hooked")
//                 const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))
//                 localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
//                 populateUI()
//             }
//             else {
//                 populateUI()
//             }
//         }
//     }
//     xhr.send()

// }

/*******   TO STORE DATA OF THE CURRENT SEATS BOOKED     ************/



function current_store() {
    const currentSeats = document.querySelectorAll(".row2 .seat.booked")
    const currentIndex = [...currentSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem("currentSeats2", JSON.stringify(currentIndex))
}


/*******   FOR STORING VALUE IN LOCAL STORAGE     ************/


function store() {
    const bookedSeats = document.querySelectorAll(".row2 .seat.booked, .row2 .seat.sold")
    const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem("bookedSeats2", JSON.stringify(seatsIndex))
}



/*******   FUNCTION TO GIVE SOUND ON EACH CLICK     ************/


function sound() {
    var audio = new Audio('./static/js/tune.mp3');
    audio.play();
}


/*******   USED TO LISTEN SEAT CLICKING AND TOGGLING COLOUR     ************/


container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
        sound()
        e.target.classList.toggle("booked")
        // else {
        //     pass
        // }
    }
    // const bookedSeats = document.querySelectorAll(".row .seat.booked")
    // const seatsIndex = [...bookedSeats].map((seat) => [...seats].indexOf(seat))

    // localStorage.setItem("bookedSeats", JSON.stringify(seatsIndex))
    // const selectedSeatsCount = selectedSeats.length;

    // console.log(bookedSeats)
    // console.log(seatsIndex)
})


function dmgpage(){
    setTimeout(
       function()
         { window.open("/damage_submit","_self");}, 1000);
}


function refresh(){
    console.log(0)
    const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats2"))
    localStorage.getItem("bookedSeats2").clear()
    console.log(selectedSeats)
    // window.open("/employee_access","_self")
    seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.remove("sold")
        }
    })
    window.onload()
    console.log(1)
}


/*******   CALLING FUNCTIONS ON CLICK OF SUBMIT BUTTON   **************/ 


button.addEventListener("click", () => {
    sound()
    dmgpage()
    store()
    current_store()
    const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats2"))

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
    const selectedSeats = JSON.parse(localStorage.getItem("bookedSeats2"))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("sold")
            }
        })
    }
}

populateUI()
