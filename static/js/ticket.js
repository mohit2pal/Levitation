

function seat_ticket() {
    // var xhr = new XMLHttpRequest()
    // xhr.open('POST', )

    const markseat = localStorage.getItem("currentSeats")
    console.log(markseat)

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

// function printPage()
// {
// window.print()
// }

// document.getElementById("button_print").addEventListener("click", printPage)

seat_ticket()
date()


    // //to force refresh the page for seat booking
    // setInterval('refresh()', 200) // refresh at every 200ms
    // function refresh() {
    //   form.reload()
    // }

