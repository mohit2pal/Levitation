
// var counter = 1
// var block_timer_array = []
// var t = new Date()
// var hr = parseInt(t.getHours())
// var minutes = parseInt(t.getMinutes())
// var seconds = parseInt(t.getSeconds())
// var default_time2 = 0
// var default_time = 0

// time = (hr * 60 * 60) + (minutes * 60) + (seconds)

// console.log(time)

// var xhr = new XMLHttpRequest()
// xhr.open('GET', './static/js/block.json', true)

// xhr.onload = function(){

//   var block = JSON.parse(this.responseText)

//     default_time = block['time_recod']
//     for (var j = default_time; j<-1 ;j++){
//         if(j%90 == 30){
//         default_time2 = j
//         break 
//         }
//     }
//     for (var i = 0; i < 6 ; i++) {
//         block_timer_array.push(default_time2 - ((i*90)+180000))
//     }
//     i = block['pod']
//     seat = block['seats']
//     console.log("i",i)
//     console.log("seat",seat)
//     console.log("block_timer_array",block_timer_array)
//     if(time < block_timer_array[i] && seat == 28) {
//         //not allowed
//         console.log("blocked")
//         document.getElementById('app').innerHTML = "Blocked"
//     }
//     else if(time > block_timer_array[i] && seat ==28){
//         //allowed
//         console.log("1 allowed")
//         document.getElementById('app').innerHTML = "Allowed"
//         block_timer_array[i] = default_time2 + (i*90)+ (180*counter)
//         counter+=1
//     }
//     else{
//         //allowed
//         console.log("2 allowed")
//         document.getElementById('app').innerHTML = "Allowed"
//     }
//     // elif(time < block_timer_array[i] && ((pod_bay_counter != 0 || platform_counter != 0 || seat_counter != 1))){
//     //     //allow
//     // }
//     // for (var i = 0; i <6; i++) {
//     //     if (time < block_timer_array[i]){
//     //         //block
//     //     }
//     //     else if(time > block_timer_array[i]) {

//     //     }
//     // }
//     // if(time > allot_time){
//     //     //not blocked
//     // }
//     // else if(time < allot_time && ((pod_bay_counter != 0 || platform_counter != 0 || seat_counter != 1))) {
//     //     //not blocked
//     // }
//     // else {
//     //     //blocked
//     // }
// }
// xhr.send()


//}

// function small_check() {
//     dmg = []

// }

// function small_differ() {
//     global pod_changed_count
//     time_differ = counth()
//     var pod_differ = pod_changed_count

//     pod_changed = pod_differ - time_differ
//     if(pod_changed < 0){
//        pod_changed_count = pod_changed_count - 1
//        var j = 1
//        return j
//     }
//     else{
//         pod_changed_count = pod_changed
//         k = 0
//         return k
//     }
// }


// function small_allot() {
//     global seat_counter
//     global pod_bay_counter
//     global platform_counter
//     global pod_dmg

//     var timeal = small_differ()
//     if(seat_counter > 0) {
//         if(timeal > 0){
//             pod_bay_counter = pod_bay_counter -1
//             platform_counter = 12
//             if(pod_bay_counter < 0) {
//                 platform_counter = 12
//                 pod_bay_counter = 5
//             }
//             seat_counter = seat_counter-1
//         }
//         else{
//             seat_counter = seat_counter -1
//         }
//     }
//     if(seat_counter == 0 && platform_counter != 0){
//         platform_counter = platform_counter -1
//         seat_counter = 28
//     }
//     if(seat_counter == 0 && platform_counter == 0){
//         pod_bay_counter= pod_bay_counter - 1
//         platform_counter = 12
//         seat_counter = 28
//     }
//     if(pod_bay_counter < 0 ){
//         pod_bay_counter = 5
//     }
//     var pod_change = 5-pod_bay_counter
//     var pod_bay = pod_change +1

//     return pod_bay
// }






// timer
// const FULL_DASH_ARRAY = 283;
// const WARNING_THRESHOLD = 10;
// const ALERT_THRESHOLD = 5;

// const COLOR_CODES = {
//   info: {
//     color: "green"
//   },
//   warning: {
//     color: "orange",
//     threshold: WARNING_THRESHOLD
//   },
//   alert: {
//     color: "red",
//     threshold: ALERT_THRESHOLD
//   }
// };

// const TIME_LIMIT = 100;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;
// let remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -45, 0
//           a 45,45 0 1,0 90,0
//           a 45,45 0 1,0 -90,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(
//     timeLeft
//   )}</span>
// </div>
// `;

// startTimer();

// function onTimesUp() {
//   clearInterval(timerInterval);
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     document.getElementById("base-timer-label").innerHTML = formatTime(
//       timeLeft
//     );
//     setCircleDasharray();
//     setRemainingPathColor(timeLeft);

//     if (timeLeft === 0) {
//       onTimesUp();
//     }
//   }, 1000);
// }

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}`;
// }

// function setRemainingPathColor(timeLeft) {
//   const { alert, warning, info } = COLOR_CODES;
//   if (timeLeft <= alert.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(warning.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(alert.color);
//   } else if (timeLeft <= warning.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(info.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(warning.color);
//   }
// }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / TIME_LIMIT;
//   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} 283`;
//   document
//     .getElementById("base-timer-path-remaining")
//     .setAttribute("stroke-dasharray", circleDasharray);
// }



// const myTimeout = setTimeout(button_click, 21000)

// blocker()


function status_update() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './static/js/theblocker.json', true)

    xhr.onload = function() {
        var block = JSON.parse(this.responseText)

        if(block['status' === 1]){
            document.getElementById('app').innerHTML = "Allowed"
        }
        else if(block['status' === 0]) {
            document.getElementById('app').innerHTML = "Blocked"
        }
    }

    xhr.send()
}

status_update()