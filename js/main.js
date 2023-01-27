let walkTime = document.getElementById("walkTimes"),
    bikeTime = document.getElementById("bikeTimes"),
    carTime = document.getElementById("carTimes"),
    airplaneTime = document.getElementById("airplaneTimes"),
    inputValue = document.getElementById("inputValue"),
    inputBtn = document.getElementById("inputBtn"),
    error = document.getElementById("error");
// ====Speeds====

const walkSpeed = 5; //km/h
const bikeSpeed = 20; //km/h
const carSpeed = 80; //km/h
const airplaneSpeed = 400; //km/h




let hourWalk = null,
    hourBike = null,
    hourCar = null,
    hourAirplane = null,
    minWalk = null,
    minBike = null,
    minAirplane = null;

document.getElementById("error").style.display = "none";


inputBtn.onclick = function () {

    if (+inputValue.value > 0) {
        document.getElementById("error").style.display = "none";


        // Walk

        hourWalk = (+inputValue.value / walkSpeed);
        minWalk = Math.floor((hourWalk - Math.floor(hourWalk)) * 60);
        // resWalk
        Math.floor(hourWalk) > 0 && minWalk > 0 ? walkTime.textContent = `${Math.floor(hourWalk)} hours ${minWalk} min` : Math.floor(hourWalk) <= 0 ? walkTime.textContent = `${minWalk} min` : walkTime.textContent = `${hourWalk} hour`;
        


        // Bike

        hourBike = (+inputValue.value / bikeSpeed);
        minBike = Math.floor((hourBike - Math.floor(hourBike)) * 60)
        // resBike
        Math.floor(hourBike) > 0 && minBike > 0 ? bikeTime.textContent = `${Math.floor(hourBike)} hours ${minBike} min` : Math.floor(hourBike) <= 0 ? bikeTime.textContent = `${minBike} min` : bikeTime.textContent = `${hourBike} hour`;




        // Car

        hourCar = (+inputValue.value / carSpeed);
        minCar = Math.floor((hourCar - Math.floor(hourCar)) * 60)
        // resCar
        Math.floor(hourCar) > 0 && minCar > 0 ? carTime.textContent = `${Math.floor(hourCar)} hours ${minCar} min` : Math.floor(hourCar) <= 0 ? carTime.textContent = `${minCar} min` : carTime.textContent = `${Math.floor(hourCar)} hour`;



        // Airplane

        hourAirplane = (+inputValue.value / airplaneSpeed);
        minAirplane = Math.floor((hourAirplane - Math.floor(hourAirplane)) * 60)
        // resAirplane
        Math.floor(hourAirplane) > 0 && minAirplane > 0 ? airplaneTime.textContent = `${Math.floor(hourAirplane)} hours ${minAirplane} min` : Math.floor(hourAirplane) <= 0 ? airplaneTime.textContent = `${minAirplane} min` : airplaneTime.textContent = `${Math.floor(hourAirplane)} hour`;

    } else {
        document.getElementById("error").style.display = "block";
        error.textContent = "Incorrect input. You input must be greater than 0";
    }

}

