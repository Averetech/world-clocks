function updateDateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesCityDateTime = moment.tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesCityDateTime.format("MMM D, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesCityDateTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");

    let berlinCityDateTime = moment.tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinCityDateTime.format("MMM D, YYYY");
    berlinTimeElement.innerHTML = berlinCityDateTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Michigan
  let michiganElement = document.querySelector("#michigan");
  if (michiganElement) {
    let michiganDateElement = michiganElement.querySelector(".date");
    let michiganTimeElement = michiganElement.querySelector(".time");

    let michiganCityDateTime = moment.tz("US/Michigan");
    michiganDateElement.innerHTML = michiganCityDateTime.format("MMM D, YYYY");
    michiganTimeElement.innerHTML = michiganCityDateTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);

//Select a city and display its time zone
function changeCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
    `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", changeCity);
