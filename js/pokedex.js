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
const entries = "data/pokedex.json";

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
      if($('#typeB').text().length>0){
          $('#typeB').text(data.types[1].type.name)
      }else{
          $('#typeB').append("<p>"+data.types[1].type.name+"</p>")
      }
  })
    $.get(entries).done(function(data,status){
        data.forEach(mon=>{
            if(mon.name.includes(query)){
                $('#deets').text(mon.content)
            }
        })
    })
})

