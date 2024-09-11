function updateDateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesCityDateTime = moment.tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML =
    losAngelesCityDateTime.format("MMM D, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesCityDateTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");

  let berlinCityDateTime = moment.tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinCityDateTime.format("MMM D, YYYY");
  berlinTimeElement.innerHTML = berlinCityDateTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Michigan
  let michiganElement = document.querySelector("#michigan");
  let michiganDateElement = michiganElement.querySelector(".date");
  let michiganTimeElement = michiganElement.querySelector(".time");

  let michiganCityDateTime = moment.tz("US/Michigan");
  michiganDateElement.innerHTML = michiganCityDateTime.format("MMM D, YYYY");
  michiganTimeElement.innerHTML = michiganCityDateTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateDateTime();
setInterval(updateDateTime, 1000);
