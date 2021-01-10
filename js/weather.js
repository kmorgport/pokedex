"use strict"
let header = document.getElementById('header')
let tempimage = document.getElementById('tempimage');
let descr = document.getElementById('descr');
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind');
let pressure = document.getElementById('pressure');
const regions = document.querySelectorAll('[data-region]')
const pokemon = "https://pokeapi.co/api/v2/pokemon/"
const monform = "https://pokeapi.co/api/v2/pokemon-form/"

regions.forEach(region=>{
    region.addEventListener('click',()=>{
        changeMap(parseInt(region.id))
        let city = findLocal(parseInt(region.id))
        updateWeather(city)
    })
})

function setWeather(info){
    // header.textContent = info.dt_txt.slice(0,10);
    tempimage.innerHTML = info.main.temp_min +"°F/"+info.main.temp_max+"°F"+"<br>"
    descr.textContent = "Description: "+info.weather[0].description;
    humidity.textContent = "Humidity: "+info.main.humidity;
    wind.textContent = "Wind: "+info.wind.speed;
    pressure.textContent = "Pressure: "+info.main.pressure;
}
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherToken,
    q: "Tokyo, Japan",
    units: "imperial",
    cnt: 40
}).then(function(data){
    setWeather(data)
    return data
}).then(data=>{
    let moncode = parseInt(data.weather[0].id)
    if(moncode>=200&&moncode<=232){
        snagPokemon('thundurus',pokemon)
    }else{
        setCastform(moncode)
    }
})


function updateWeather(local){
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherToken,
        q: local,
        units: "imperial",
        cnt: 40
    }).then(function(data){
         setWeather(data)
        return data
        }).then(data=>{
        let moncode = parseInt(data.weather[0].id)
        if(moncode>=200&&moncode<=232){
            snagPokemon('thundurus',pokemon)
        }else{
            setCastform(moncode)
        }

    })
}
function snagPokemon(mon,api){
    let query = mon
    $.get(api+query+"/").done(data =>{
        tempimage.innerHTML += "<img src='"+data.sprites['front_default']+ "'width=\"100\" height=\"100\">"
})
}
function setCastform(code){
    if(code>=300&&code<=531){
        snagPokemon('castform-rainy',monform)
    }else if(code>=600&&code<=622){
        snagPokemon('castform-snowy',monform)
    }else if(code>=700&&code<=781){
        snagPokemon('castform',monform)
    }else if(code===800){
        snagPokemon('castform-sunny',monform)
    }else if(code>800){
        snagPokemon('castform',monform)
    }
}

updateWeather();

function findLocal(region){
    switch(region){
        case region = 1:
            return "Tokyo, Japan"
        case region = 2:
            return "Kyoto, Japan"
        case region = 3:
            return "Kagoshima, Japan"
        case region = 4:
            return "Hokkaido, Japan"
        case region = 5:
            return "New York City, USA"
        case region = 6:
            return "Paris, France"
        case region = 7:
            return "Honolulu, Hawaii"
        case region = 8:
            return "London, England"
    }
}
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