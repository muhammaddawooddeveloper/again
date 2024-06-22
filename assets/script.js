var flag = 1
function formsubmit() {
  if (username.value == "") {
    document.getElementById("name").innerHTML = "Full Name is required";
    flag = 0;
  } else {
    document.getElementById("name").innerHTML = "";
    flag = 1;
  }
  if (phone.value == "") {
    document.getElementById("phoneerror").innerHTML = "Phone is required";
    flag = 0;
  } else {
    document.getElementById("phoneerror").innerHTML = "";
    flag = 1;
  }
  if (db.value == "") {
    document.getElementById("dberror").innerHTML = "Date of birth is required";
    flag = 0;
  } else {
    document.getElementById("dberror").innerHTML = "";
    flag = 1;
  }
  if (state.value == "") {
    document.getElementById("stateerror").innerHTML = "State is required";
    flag = 0;
  } else {
    document.getElementById("stateerror").innerHTML = "";
    flag = 1;
  }
  if (credit.value == "") {
    document.getElementById("scoreerror").innerHTML =
      "What is your credit score? is required";
    flag = 0;
  } else {
    document.getElementById("scoreerror").innerHTML = "";
    flag = 1;
  }
  if (cash.value == "") {
    document.getElementById("casherror").innerHTML =
      "How much total liquid cash in household? is required";
    flag = 0;
  } else {
    document.getElementById("casherror").innerHTML = "";
    flag = 1;
  }
  if (flag == 0) {
    return false;
  } else {
    return true;
  }
}


var an = document.getElementById("analysis");
var no = document.querySelector(".no");
var a = document.getElementById("a");

a.addEventListener("click", function(){
    setTimeout(() => {
    no.classList.toggle("displaye");
    an.classList.toggle("shadow");
    }, 300);
})


var cr = document.getElementById("Certification");
var dn = document.querySelector(".dn");
cr.addEventListener("click", function(){
    setTimeout(() => {
    dn.classList.toggle("displaye");
    cr.classList.toggle("shadow");
    }, 300);
})

var c = document.querySelector("#c");
var cdn = document.querySelector(".cdn");
var sulution = document.querySelector("#sulution");

c.addEventListener("click", () => {
    setTimeout(() => {
        cdn.classList.toggle("displaye");
        sulution.classList.toggle("shadow");
        }, 300);
});

var d = document.querySelector("#d");
var ddn = document.querySelector(".ddn");
var sulution = document.querySelector("#sulution");

d.addEventListener("click", () => {
    setTimeout(() => {
        ddn.classList.toggle("displaye");
        Financial.classList.toggle("shadow");
        }, 300);
});

var e = document.querySelector("#e");
var edn = document.querySelector(".edn");
var Heirloom = document.querySelector("#Heirloom");

e.addEventListener("click", () => {
    setTimeout(() => {
        edn.classList.toggle("displaye");
        Heirloom.classList.toggle("shadow");
        }, 300);
});

var f = document.querySelector("#f");
var fdn = document.querySelector(".fdn");
var Wealth = document.querySelector("#Wealth");

f.addEventListener("click", () => {
    setTimeout(() => {
        fdn.classList.toggle("displaye");
        Wealth.classList.toggle("shadow");
        }, 300);
});

var g = document.querySelector("#g");
var gdn = document.querySelector(".gdn");
var WealthMax = document.querySelector("#WealthMax");

g.addEventListener("click", () => {
    setTimeout(() => {
        gdn.classList.toggle("displaye");
        WealthMax.classList.toggle("shadow");
        }, 300);
});


var h = document.querySelector("#h");
var hdn = document.querySelector(".hdn");
var Reprogramming = document.querySelector("#Reprogramming");

h.addEventListener("click", () => {
    setTimeout(() => {
        hdn.classList.toggle("displaye");
        Reprogramming.classList.toggle("shadow");
        }, 300);
});



function startCountdown(hours, minutes, seconds) {
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateTimer() {
      if (seconds > 0) {
          seconds--;
      } else if (minutes > 0) {
          seconds = 59;
          minutes--;
      } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
      }

      hoursElement.textContent = String(hours).padStart(2, '0');
      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');

      if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timerInterval);
      }
  }

  const timerInterval = setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Start the countdown with the initial values (24 hours, 60 minutes, 60 seconds)
  startCountdown(24, 60, 60);
});

