



var wins = 0;
var losses = 0;
var randomNumber

var selectedCharacterIndex = -1;
var attackCharacterIndex = -1;

var values = [
    { name: 'Darth', healthPoints: 120, ap: 8, attackPoints: 8, counterAttack: 10},
    { name: 'Luke', healthPoints: 100, ap: 10, attackPoints: 10, counterAttack: 15},
    { name: 'Yoda', healthPoints: 150, ap: 5, attackPoints: 5, counterAttack: 20},
    { name: 'Solo', healthPoints: 180, ap: 3, attackPoints: 3, counterAttack: 30}
];

// get random number for the place holder 
$(document).ready(function () {

    for(var i = 0; i < values.length; i++) {
        var startWarsCharacter = values[i];
        $("#all_characters").append(`<div id="character_${i}" index="${i}">${startWarsCharacter.name}<br/>${startWarsCharacter.counterAttack}</div>`);
        $(`#character_${i}`).on("click", function () {
            var index = parseInt($(this).attr('index'));
            
            if (selectedCharacterIndex === -1) { 
                selectedCharacterIndex = index;
                var yourCharacter = values[selectedCharacterIndex];
                $("#your_character").append(`<div>${yourCharacter.name}<div id="your_points"${yourCharacter.counterAttack}</div></div>`);
                $(`#character_${selectedCharacterIndex}`).hide();
            } else if (attackCharacterIndex === -1){
                attackCharacterIndex = index;
                var yourCharacter = values[attackCharacterIndex];
                $("#attack_character").append(`<div>${yourCharacter.name}<div id="attacker_points">${yourCharacter.counterAttack}</div></div>`);
                $(`#character_${attackCharacterIndex}`).hide();
            }

        });
    
    }

    $("#attack_button").on("click", function() {
        if (selectedCharacterIndex < 0 || attackCharacterIndex < 0) {
            alert('Selected???');
            return;
        }

        var yourCharacter = values[selectedCharacterIndex];
        var attackCharacter = values[attackCharacterIndex];

        yourCharacter.attackPoints = yourCharacter.attackPoints + yourCharacter.ap;
        yourCharacter.healthPoints = yourCharacter.healthPoints - attackCharacter.counterAttack;
   
        $("#your_points").text(yourCharacter.healthPoints);

        attackCharacter.healthPoints = attackCharacter.healthPoints - yourCharacter.attackPoints;

        $("#attacker_points").text(attackCharacter.healthPoints);

        if (attackCharacter.healthPoints < 0) {
            attackCharacterIndex = -1;
            $("#attack_character").html('');
        }

        console.log(values);

    });


    // on click get totals of each crystal using random numbers

});


















    // window.onload = function() {
    //     if (window.jQuery) {  
    //         // jQuery is loaded  
    //         alert("Yeah!");
    //     } else {
    //         // jQuery is not loaded
    //         alert("Doesn't Work");
    //     }
    // }