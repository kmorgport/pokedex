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

const pokemon = "https://pokeapi.co/api/v2/pokemon/"

$('#userSearch').click(function(e){
  e.preventDefault();
  let query = $("#searchValue").val().toLowerCase();
  $.get(pokemon+query+"/").done(function(data,status){
      console.log(data)
      if($('#picture').find('img').length){
          $('#picture img').attr("src",data.sprites['front_default'])
      }else{$('#picture').append("<img src='"+data.sprites['front_default']+"'>")}

      if($('#typeA').text().length>0){
          $('#typeA').text(data.types[0].type.name)
      }else{
          $('#typeA').append("<p>"+data.types[0].type.name+"</p>")
      }
  })
})


// $.get(pokemon).done(function(data, status, jqXhr){
//     // alert("Went well.");
//     console.log(data)
// }).fail(function(jqXhr, status, error){
//     // alert("Error error");
//     console.log("Response status: "+ status);
//     console.log("Error object: "+ error);
// }).always(function(){
//     console.log("This function runs!");
// });

const entries = "data/pokedex.json";
$.get(entries).done(function(data, status, jqXhr){
    // alert("Went well.");
    console.log(data)
}).fail(function(jqXhr, status, error){
    // alert("Error error");
    console.log("Response status: "+ status);
    console.log("Error object: "+ error);
}).always(function(){
    console.log("This function runs!");
});
