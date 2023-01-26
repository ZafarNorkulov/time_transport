let walkTime = document.getElementById("walkTimes"),
    bikeTime = document.getElementById("bikeTimes"),
    carTime = document.getElementById("carTimes"),
    airplaneTime = document.getElementById("airplaneTimes"),
    inputValue = Number(document.getElementById("inputValue").value),
    inputBtn = document.getElementById("inputBtn");

// ====Speeds====

const walkSpeed = 12 //km/h
const bikeSpeed = 30 //km/h
const carSpeed = 70 //km/h
const airplaneSpeed = 500 //km/h




let hourWalk = null,
    hourBike = null,
    hourCar = null,
    hourAirplane = null,
    minWalk = null,
    minBike = null,
    minAirplane = null;
inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hourWalk = inputValue / walkSpeed;
    console.log(inputValue);
    walkTime.textContent = hourWalk;
})


