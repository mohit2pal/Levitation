
document.getElementById("submit").addEventListener("click", submitted)

function submitted() {
    // check = 0

    if (document.getElementById("login").value == 'levitation' && document.getElementById("password").value == '222553') {
        // var xhr = new XMLHttpRequest()
        // xhr.open('POST', '/loginfo', true)
        // xhr.setRequestHeader('Content-Type', 'application/json')

        // xhr.send(check)
        window.open("/employee_access","_self")
    } else {
        alert("Please enter proper username and password")
    }
}
