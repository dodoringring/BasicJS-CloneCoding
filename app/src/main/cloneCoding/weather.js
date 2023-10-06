const weather=document.querySelector(".js-weather");
const API_KEY='c2f82862f80ecd5b3ae75f806b81fad7';
const COORDS='coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    const temprature=json.main.temp;
    const place=json.name;
    weather.innerText=`${temprature} @ ${place}`;
  });
  //then은 데이터가 완전히 들어온 다음 함수를 호출한다.
  //then은 기다렸다가 함수 실행시킬때 사용함
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));//로컬스토리지에 넣을 키값 벨류 두개넣어야
}

/* 좌표를 가져오는데 성공했을경우 */
function handleGeoSucces (position){
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const coordsObj={
    latitude : latitude,
    longitude : longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
/* 좌표에러 */
function handleGeoError(){
  console.log("Can't accesss geo location...")
}

/* 좌표를 가져오는 함수 */
function askForCoords() {
  //navugator API를 사용한다
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS)
  if(loadedCoords===null){
    //좌표를 요청하는 함수
    askForCoords();
  }else{
    //getWeather
    const parseCoords=JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);

  }

}

function init(){
 loadCoords();
}
init();