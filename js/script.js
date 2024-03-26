let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById('host-name').innerHTML = "Vitaliy Paliy";
document.getElementById('collaborator-2-name').innerHTML = 'Harry';


// Question 2
// You can also create their own CSS classes in style.css file and use that. 


let floatingButton = document.querySelector("#instruction_button");
floatingButton.addEventListener("click",hideInstructions);
function hideInstructions() {
    let allQuestions = document.querySelectorAll('.question');
    for (let x of allQuestions) {
        x.classList.toggle("hidden");
    }
    if (this.innerHTML === "Hide Instructions") {
        this.innerHTML = "Show Instructions";
    } else {
        this.innerHTML = "Hide Instructions";
    }
}

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
// As the user types, if the user enters first name as 'John', autopopulate the last name to 'Doe'
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');

firstName.addEventListener('input', function(){
    if(firstName.value == 'John'){
        lastName.value = 'Joe';
    }
});



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let alert = document.getElementById('password-alert');
password.addEventListener('input', function(){
    if(password.value === confirmPassword.value){
        alert.innerHTML = 'Password matches';
    }else{
        alert.innerHTML = "Password doesn't match";
    }
});



//Question 6





//Question 7 





//Question 8
let colorPicker = document.getElementById('color-picker');
let body = document.querySelector('body');
colorPicker.addEventListener('change',function(){
    body.style.backgroundColor = colorPicker.value;
});



//Question 9 

