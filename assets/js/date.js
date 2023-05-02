let alarmbtn = document.querySelector(".btn");
let errortext = document.querySelector(".text")
let counterdown = document.querySelector(".counterdown")
let intervalID;

alarmbtn.addEventListener("click",()=>{
    let alarmsetting = document.querySelector('.set-alarm').value;
    let date = new Date(alarmsetting);
    let currentTime = new Date();
    if (alarmsetting == '') {
        errortext.innerHTML = 
        `<p>Input is empty!</p>`
  }
    else if(date.getTime()<currentTime.getTime()){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You Cannot set Alarm from the past! ',
          })
    }
    else if(date.getTime()>currentTime.getTime()){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Alarm Setted successfully!',
            showConfirmButton: false,
            timer: 1500
          })

        Countdown(date);
    }
})

function Countdown(settime) {
    intervalID = setInterval(function() {
    const result = settime.getTime() - new Date().getTime();

    if (result <= 0) {
    document.body.style.backgroundColor = "red"
        return
    }

    const hours = Math.floor(result/(1000 * 60 * 60));
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((result % (1000 * 60)) / 1000);

    counterdown.textContent = `${hours}:${minutes} : ${seconds}`;
  }, 1000);
}
