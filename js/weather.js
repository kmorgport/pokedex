"use strict"
let header = document.getElementById('header')
let tempimage = document.getElementById('tempimage');
let descr = document.getElementById('descr');
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind');
let pressure = document.getElementById('pressure');
const regions = document.querySelectorAll('[data-region]')

regions.forEach(region=>{
    region.addEventListener('click',()=>{
        changeMap(parseInt(region.id))
    })
})

function setWeather(info){
    // header.textContent = info.dt_txt.slice(0,10);
    tempimage.innerHTML = info.main.temp_min +"°F/"+info.main.temp_max+"°F"+"<br>"+"<img src=http://openweathermap.org/img/w/"+info.weather[0].icon+".png width=\"50\" height=\"50\">"
    descr.textContent = "Description: "+info.weather[0].description;
    humidity.textContent = "Humidity: "+info.main.humidity;
    wind.textContent = "Wind: "+info.wind.speed;
    pressure.textContent = "Pressure: "+info.main.pressure;
}

function updateWeather(){
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherToken,
        lat: 32.7767,
        lon: -96.7970,
        units: "imperial",
        cnt: 40
    }).done(function(data){
        console.log(data)
         setWeather(data)
        })
}

updateWeather();

function changeMap(region){
    switch(region){
        case region = 1:
            document.body.style.backgroundImage = "url('img/kanto-pixel.png')"
            break
        case region = 2:
            document.body.style.backgroundImage = "url('img/johto-pixel.png')"
            break
        case region = 3:
            document.body.style.backgroundImage = "url('img/hoenn-pixel.png')"
            break
        case region = 4:
            document.body.style.backgroundImage = "url('img/sinnoh-pixel.png')"
            break
        case region = 5:
            document.body.style.backgroundImage = "url('img/unova-pixel.png')"
            break
        case region = 6:
            document.body.style.backgroundImage = "url('img/kalos-pixel.png')"
            break
        case region = 7:
            document.body.style.backgroundImage = "url('img/alola-pixel.png')"
            break
        case region = 8:
            document.body.style.backgroundImage = "url('img/galar-pixel.png')"
            break
    }
}