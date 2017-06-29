
// In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
var pokemonNames = [  "bulbasaur",  "ivysaur",  "venusaur",  "charmander",  "charmeleon",  "charizard",  "squirtle",  "wartortle",  "blastoise",  "caterpie",  "metapod",  "butterfree",  "weedle",  "kakuna",  "beedrill",  "pidgey",  "pidgeotto",  "pidgeot",  "rattata",  "raticate",  "spearow",  "fearow",  "ekans",  "arbok",  "pikachu",  "raichu",  "sandshrew",  "sandslash",  "nidoran-f",  "nidorina",  "nidoqueen",  "nidoran-m",  "nidorino",  "nidoking",  "clefairy",  "clefable",  "vulpix",  "ninetales",  "jigglypuff",  "wigglytuff",  "zubat",  "golbat",  "oddish",  "gloom",  "vileplume",  "paras",  "parasect",  "venonat",  "venomoth",  "diglett",  "dugtrio",  "meowth",  "persian",  "psyduck",  "golduck",  "mankey",  "primeape",  "growlithe",  "arcanine",  "poliwag",  "poliwhirl",  "poliwrath",  "abra",  "kadabra",  "alakazam",  "machop",  "machoke",  "machamp",  "bellsprout",  "weepinbell",  "victreebel",  "tentacool",  "tentacruel",  "geodude",  "graveler",  "golem",  "ponyta",  "rapidash",  "slowpoke",  "slowbro",  "magnemite",  "magneton",  "farfetchd",  "doduo",  "dodrio",  "seel",  "dewgong",  "grimer",  "muk",  "shellder",  "cloyster",  "gastly",  "haunter",  "gengar",  "onix",  "drowzee",  "hypno",  "krabby",  "kingler",  "voltorb",  "electrode",  "exeggcute",  "exeggutor",  "cubone",  "marowak",  "hitmonlee",  "hitmonchan",  "lickitung",  "koffing",  "weezing",  "rhyhorn",  "rhydon",  "chansey",  "tangela",  "kangaskhan",  "horsea",  "seadra",  "goldeen",  "seaking",  "staryu",  "starmie",  "mr-mime",  "scyther",  "jynx",  "electabuzz",  "magmar",  "pinsir",  "tauros",  "magikarp",  "gyarados",  "lapras",  "ditto",  "eevee",  "vaporeon",  "jolteon",  "flareon",  "porygon",  "omanyte",  "omastar",  "kabuto",  "kabutops",  "aerodactyl",  "snorlax",  "articuno",  "zapdos",  "moltres",  "dratini",  "dragonair",  "dragonite",  "mewtwo",  "mew"];



function initForm(){
    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke1Name").append(option);

    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke1Lvl").append(option);

    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke2Name").append(option);

    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke2Lvl").append(option);

    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke3Name").append(option);

    var option = $("<option>");
    option.text("");
    option.attr("value", "")
    $("#poke3Lvl").append(option);

    for(let i=0; i<pokemonNames.length; i++){
        var option = $("<option>");
        option.text(pokemonNames[i]);
        option.attr("value", i+1)
        $("#poke1Name").append(option);

        var option = $("<option>");
        option.text(pokemonNames[i]);
        option.attr("value", i+1)
        $("#poke2Name").append(option);

        var option = $("<option>");
        option.text(pokemonNames[i]);
        option.attr("value", i+1)
        $("#poke3Name").append(option);
    }

    for(let i=1; i<=100; i++){
        var option = $("<option>");
        option.text(i);
        option.attr("value", i)
        $("#poke1Lvl").append(option);

        var option = $("<option>");
        option.text(i);
        option.attr("value", i)
        $("#poke2Lvl").append(option);

        var option = $("<option>");
        option.text(i);
        option.attr("value", i)
        $("#poke3Lvl").append(option);
    }   
}


initForm();


$("#submit").on("click", function(event){
    event.preventDefault();
    var newTrainer = {
        "trainerName": $("#trainerNameForm").val().trim(),
        "photo":  $("#trainerPhotoForm").val().trim(),
        "teamRating": parseInt($("#poke1Lvl").val().trim()) + parseInt($("#poke2Lvl").val().trim()) + parseInt($("#poke3Lvl").val().trim()),
        "poke1": {
            id:  $("#poke1Name").val().trim(),
            level:  $("#poke1Lvl").val().trim()
        },
        "poke2": {
            id:  $("#poke2Name").val().trim(),
            level:  $("#poke2Lvl").val().trim()
        },
        "poke3": {
            id:  $("#poke3Name").val().trim(),
            level:  $("#poke3Lvl").val().trim()
        },
    }

    var currentURL = window.location.origin;

    $.post(currentURL + "/api/friends", newTrainer, function(match){

        var trainerDiv = $("<div>");
		trainerDiv.addClass("vertical-center team-div row");

		var trainerImg = $("<img>");
		trainerImg.addClass("img-responsive trainer-image col-xs-1");
		trainerImg.attr("src", match.photo);
		trainerDiv.append(trainerImg);

		var h5 = $("<h5>");
		h5.addClass("col-xs-4");
		h5.text("Trainer Name: "+match.trainerName);
		trainerDiv.append(h5);

		h5 = $("<h5>");
		h5.addClass("col-xs-4");
		h5.text("Team Strength: "+match.teamRating);
		trainerDiv.append(h5);

		var pokeImg = $("<img>");
		pokeImg.addClass("img-responsive pokemon-sprite col-xs-1");
		pokeImg.attr("src", "assets/sprites/"+match.poke1.id+".png");
		trainerDiv.append(pokeImg);

		pokeImg = $("<img>");
		pokeImg.addClass("img-responsive pokemon-sprite col-xs-1");
		pokeImg.attr("src", "assets/sprites/"+match.poke2.id+".png");
		trainerDiv.append(pokeImg);

		pokeImg = $("<img>");
		pokeImg.addClass("img-responsive pokemon-sprite col-xs-1");
		pokeImg.attr("src", "assets/sprites/"+match.poke3.id+".png");
		trainerDiv.append(pokeImg);


        $("#rivalPanel").append(trainerDiv);
	    $('#rivalModal').modal('show')
        
        //window.location="/";
    });


    $("#trainerNameForm").val("");
    $("#trainerPhotoForm").val("");
    $("#poke1Name").val("");
    $("#poke1Lvl").val("");
    $("#poke2Name").val("");
    $("#poke2Lvl").val("");
    $("#poke3Name").val("");
    $("#poke3Lvl").val("");

    // $('#reserve_name').val("");
        // $('#reserve_phone').val("");
        // $('#reserve_email').val("");
        // $('#reserve_uniqueID').val("");

    return false;

});

