



var wins = 0;
var losses = 0;
var randomNumber;
var crystalRandom1 = generateRandomNumber();
var crystalRandom2 = generateRandomNumber();
var crystalRandom3 = generateRandomNumber();
var crystalRandom4 = generateRandomNumber();

var totalCrystal = 0;







function reset() {

    crystalRandom1 = generateRandomNumber();
    crystalRandom2 = generateRandomNumber();
    crystalRandom3 = generateRandomNumber();
    crystalRandom4 = generateRandomNumber();
   

    totalCrystal = 0;
    $(".Crystal-total").text("Crystal total :" + totalCrystal);

    randomNumber = Math.floor((Math.random() * 120) + 19);
        
    $(".randomNum").text("Random number :" + randomNumber);

    $(".Crystalval1").text('');
    $(".Crystalval2").text('');
    $(".Crystalval3").text('');
    $(".Crystalval4").text('');

    console.log (randomNumber)


    

  

}
   


function generateRandomNumber() {
    return Math.floor((Math.random() * 12) + 1);
}

$(document).ready(function () {

    reset();




    $(".crystal1").on("click", function () {

        totalCrystal = totalCrystal + crystalRandom1;

        $(".Crystalval1").text(crystalRandom1)
        $(".Crystal-total").text("Crystal total :" + totalCrystal)

        if (totalCrystal === randomNumber) {
            wins ++;
            $(".winCount").text("Wins : "  + wins);
            alert('You Win');
            reset();    
        }
        else if (totalCrystal > randomNumber) {

           
            losses++;
            $(".lossCount").text("Losses : "  + losses);
            alert('you lose');
            reset();
            
        }
    })



    $(".crystal2").on("click", function () {

        totalCrystal = totalCrystal + crystalRandom2;

        $(".Crystalval2").text(crystalRandom2);
        $(".Crystal-total").text("Crystal total :" + totalCrystal);


        if (totalCrystal === randomNumber) {
            
            wins ++;
            $(".winCount").text("Wins : "  + wins);
            alert('You Win');
            reset();   
       
        }
        else if (totalCrystal > randomNumber) {

            
            losses++;
            $(".lossCount").text("Losses : "  + losses);
            alert('you lose');
            reset();
            
            
        }
    })



    $(".crystal3").on("click", function () {

        totalCrystal = totalCrystal + crystalRandom3;


        $(".Crystalval3").text(crystalRandom3);
        $(".Crystal-total").text("Crystal total :" + totalCrystal);


        if (totalCrystal === randomNumber) {
            
            wins ++;
            $(".winCount").text("Wins : "  + wins);
            alert('You Win');
            reset();              
        }
        else if (totalCrystal > randomNumber) {

            
            losses++;
            $(".lossCount").text("Losses : "  + losses);
            alert('you lose');
            reset();
         
        }

    })


    $(".crystal4").on("click", function () {

        totalCrystal = totalCrystal + crystalRandom4;
        
        $(".Crystalval4").text(crystalRandom4);
        $(".Crystal-total").text("Crystal total :" + totalCrystal);


        if (totalCrystal === randomNumber) {
            
            wins ++;
            $(".winCount").text("Wins : "  + wins);
            alert('You Win');
            reset();

        }
        else if (totalCrystal > randomNumber) {

            
            losses++;
            $(".lossCount").text("Losses : "  + losses);
            alert('you lose');
            reset();

            
            
        }
    });

})


















  