$(document).ready(function()
{
    $(".board").on(
        {
                mouseenter: function()
                    {
                        if (check==1) 
                        {
                            $("body").css("background-image", "url('tictac1.jpg')");
                            $(".board").css("background-color", "gainsboro");
                        }
                    },
                mouseleave: function()
                    {
                        if (check==1) 
                        {
                            $("body").css("background-image", "none");
                            $("body").css("background-color", "red");
                            $(".board").css("background-color", "gainsboro");
                        }
                    }
        });
});

var player1 = 'X';
var player2 = 'O';
var check=1;
var m11="",m22="",m33="",m44="",m55="",m66="",m77="",m88="",m99="";


var currentTurn = 1;
var movesMade = 0;

var winnerContainer = $('.winner');
var reset = $('.reset');

var sqr = $('.square');


sqr.on('click', (e) => {
    movesMade++;
    if (currentTurn % 2 === 1) {
        if (event.target.innerHTML=="" && check==1)
        { 
        event.target.innerHTML = player1;
        event.target.style.color = "yellow";
        currentTurn++;
        }
    } else {
        if (event.target.innerHTML=="" && check==1) 
        {
        event.target.innerHTML = player2;
        event.target.style.color = "green";
        currentTurn--;
        }
    }

        checkForWinner();
});

reset.on('click', (e) => {
    winnerContainer.html('');
    winnerContainer.css('display', "none");
    currentTurn = 1;
    
    check=1;

    m11="";m22="";m33="";m44="";m55="";m66="";m77="";m88="";m99="";

    document.getElementById('m1').innerHTML="";
    document.getElementById('m2').innerHTML="";
    document.getElementById('m3').innerHTML="";
    document.getElementById('m4').innerHTML="";
    document.getElementById('m5').innerHTML="";    
    document.getElementById('m6').innerHTML="";
    document.getElementById('m7').innerHTML="";
    document.getElementById('m8').innerHTML="";
    document.getElementById('m9').innerHTML="";

    $("body").css("background-color", "gainsboro");
    $("#m1").css("background-color", "gainsboro");
    $("#m2").css("background-color", "gainsboro");
    $("#m3").css("background-color", "gainsboro");
    $("#m4").css("background-color", "gainsboro");
    $("#m5").css("background-color", "gainsboro");
    $("#m6").css("background-color", "gainsboro");
    $("#m7").css("background-color", "gainsboro");
    $("#m8").css("background-color", "gainsboro");
    $("#m9").css("background-color", "gainsboro");


});

function checkForWinner() {
    if (movesMade > 4) {
            winnerContainer.css('display', "block");
        m11=document.getElementById('m1').innerHTML;
        m22=document.getElementById('m2').innerHTML;
        m33=document.getElementById('m3').innerHTML;
        m44=document.getElementById('m4').innerHTML;
        m55=document.getElementById('m5').innerHTML;    
        m66=document.getElementById('m6').innerHTML;
        m77=document.getElementById('m7').innerHTML;
        m88=document.getElementById('m8').innerHTML;
        m99=document.getElementById('m9').innerHTML;

        if(m11=='X'&&m22=='X'&&m33=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m1").css("background-color", "yellow");
            $("#m2").css("background-color", "yellow");
            $("#m3").css("background-color", "yellow");
            $("#m1").css("color", "black");
            $("#m2").css("color", "black");
            $("#m3").css("color", "black");
            check=0;
        }        
        else if(m44=='X'&&m55=='X'&&m66=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m4").css("background-color", "yellow");
            $("#m5").css("background-color", "yellow");
            $("#m6").css("background-color", "yellow");
            $("#m4").css("color", "black");
            $("#m5").css("color", "black");
            $("#m6").css("color", "black");
            check=0;
        }
        else if(m77=='X'&&m88=='X'&&m99=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m7").css("background-color", "yellow");
            $("#m8").css("background-color", "yellow");
            $("#m9").css("background-color", "yellow");
            $("#m7").css("color", "black");
            $("#m8").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m11=='X'&&m44=='X'&&m77=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m1").css("background-color", "yellow");
            $("#m4").css("background-color", "yellow");
            $("#m7").css("background-color", "yellow");
            $("#m1").css("color", "black");
            $("#m4").css("color", "black");
            $("#m7").css("color", "black");
            check=0;
        } 
        else if(m22=='X'&&m55=='X'&&m88=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m2").css("background-color", "yellow");
            $("#m5").css("background-color", "yellow");
            $("#m8").css("background-color", "yellow");
            $("#m2").css("color", "black");
            $("#m5").css("color", "black");
            $("#m8").css("color", "black");
            check=0;
        }
        else if(m33=='X'&&m66=='X'&&m99=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m3").css("background-color", "yellow");
            $("#m6").css("background-color", "yellow");
            $("#m9").css("background-color", "yellow");
            $("#m3").css("color", "black");
            $("#m6").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m11=='X'&&m55=='X'&&m99=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m1").css("background-color", "yellow");
            $("#m5").css("background-color", "yellow");
            $("#m9").css("background-color", "yellow");
            $("#m1").css("color", "black");
            $("#m5").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m33=='X'&&m55=='X'&&m77=='X')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player1 Wins!");
            $("#m3").css("background-color", "yellow");
            $("#m5").css("background-color", "yellow");
            $("#m7").css("background-color", "yellow");
            $("#m3").css("color", "black");
            $("#m5").css("color", "black");
            $("#m7").css("color", "black");
            check=0;
        }


        if(m11=='O'&&m22=='O'&&m33=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m1").css("background-color", "green");
            $("#m2").css("background-color", "green");
            $("#m3").css("background-color", "green");
            $("#m1").css("color", "black");
            $("#m2").css("color", "black");
            $("#m3").css("color", "black");
            check=0;
        }        
        else if(m44=='O'&&m55=='O'&&m66=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m4").css("background-color", "green");
            $("#m5").css("background-color", "green");
            $("#m6").css("background-color", "green");
            $("#m4").css("color", "black");
            $("#m5").css("color", "black");
            $("#m6").css("color", "black");
            check=0;
        }
        else if(m77=='O'&&m88=='O'&&m99=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m7").css("background-color", "green");
            $("#m8").css("background-color", "green");
            $("#m9").css("background-color", "green");
            $("#m7").css("color", "black");
            $("#m8").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m11=='O'&&m44=='O'&&m77=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m1").css("background-color", "green");
            $("#m4").css("background-color", "green");
            $("#m7").css("background-color", "green");
            $("#m1").css("color", "black");
            $("#m4").css("color", "black");
            $("#m7").css("color", "black");
            check=0;
        } 
        else if(m22=='O'&&m55=='O'&&m88=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m2").css("background-color", "green");
            $("#m5").css("background-color", "green");
            $("#m8").css("background-color", "green");
            $("#m2").css("color", "black");
            $("#m5").css("color", "black");
            $("#m8").css("color", "black");
            check=0;
        }
        else if(m33=='O'&&m66=='O'&&m99=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m3").css("background-color", "green");
            $("#m6").css("background-color", "green");
            $("#m9").css("background-color", "green");
            $("#m3").css("color", "black");
            $("#m6").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m11=='O'&&m55=='O'&&m99=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m1").css("background-color", "green");
            $("#m5").css("background-color", "green");
            $("#m9").css("background-color", "green");
            $("#m1").css("color", "black");
            $("#m5").css("color", "black");
            $("#m9").css("color", "black");
            check=0;
        }
        else if(m33=='O'&&m55=='O'&&m77=='O')
        {
            winnerContainer.css('display', "block");
            reset.css('display', 'block');
            winnerContainer.html("Player2 Wins!");
            $("#m3").css("background-color", "green");
            $("#m5").css("background-color", "green");
            $("#m7").css("background-color", "green");
            $("#m3").css("color", "black");
            $("#m5").css("color", "black");
            $("#m7").css("color", "black");
            check=0;
        }

    }
}