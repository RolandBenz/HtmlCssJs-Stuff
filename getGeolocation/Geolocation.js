function geoFindMe() {
  /* 1.0 fetch html tags */
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  mapLink.href = "";
  mapLink.textContent = "";
  /* 2.1 Input into navigator: gets navigator.geolocation output*/
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
  /* 2.2 Input into navigator */
  function error() {
    status.textContent = "Unable to retrieve your location";
  }
  /* 2.0 navigator: 
  Fetches client state/info like geolocation, etc as well as audio, video 
  https://developer.mozilla.org/en-US/docs/Web/API/Navigator*/
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
//document.querySelector("#find-me").addEventListener("click", geoFindMe);
