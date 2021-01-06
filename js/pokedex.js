"use strict"
const dex = "https://pokeapi.co/api/v2/pokedex/kanto/"

$.get(dex).done(function(data, status, jqXhr){
    // alert("Went well.");
    console.log(data)
}).fail(function(jqXhr, status, error){
    // alert("Error error");
    console.log("Response status: "+ status);
    console.log("Error object: "+ error);
}).always(function(){
    console.log("This function runs!");
});

const pokemon = "https://pokeapi.co/api/v2/pokemon/bulbasaur/"

$.get(pokemon).done(function(data, status, jqXhr){
    // alert("Went well.");
    console.log(data)
}).fail(function(jqXhr, status, error){
    // alert("Error error");
    console.log("Response status: "+ status);
    console.log("Error object: "+ error);
}).always(function(){
    console.log("This function runs!");
});