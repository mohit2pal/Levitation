
function status_update() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './static/js/theblocker.json', true)

    xhr.onload = function() {
        var block = JSON.parse(this.responseText)
        console.log(block['status'])

        if(block['status'] == 1){
            document.getElementById('app').innerHTML = "Seat Booking is Allowed"
        }
        else if(block['status'] == 0) {
            document.getElementById('app').innerHTML = "Seat Booking is Blocked"
        }
    }

    xhr.send()
}

status_update()