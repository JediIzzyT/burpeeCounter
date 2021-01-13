currentBurpees = 0;

$(document).ready(
    function() {
        currentBurpees = parseInt(prompt("Burpees already completed: "));

	if (isNaN(currentBurpees)) {
		currentBurpees = 0;
	}

	currentBurpees--;
	incrementBurpees();
    }
);

function incrementBurpees() {
    currentBurpees++;
    document.getElementById("counter").innerHTML = currentBurpees;

    gifChoice = "";
    switch(currentBurpees) {
        case 10:
            gifChoice = '<img class="gif" src="Images/10.gif">';
            break;
        case 50:
            gifChoice = '<img class="gif" src="Images/50.gif">';
            break;
        case 100:
            gifChoice = '<img class="gif" src="Images/100.gif">';
            break;
	case 150:
            gifChoice = '<img class="gif" src="Images/150.gif">';
            break;
        case 200:
            gifChoice = '<img class="gif" src="Images/200.gif">';
            break;
        case 250:
            gifChoice = '<img class="gif" src="Images/250.gif">';
            break;
        case 300:
            gifChoice = '<img class="gif" src="Images/300.gif">';
            break;
        case 350:
            gifChoice = '<img class="gif" src="Images/350.gif">';
            break;
        case 400:
            gifChoice = '<img class="gif" src="Images/400.gif">';
            break;
        case 450:
            gifChoice = '<img class="gif" src="Images/450.gif">';
            break;
        case 500:
            gifChoice = '<img class="gif" src="Images/500.gif">';
            break;
        case 550:
            gifChoice = '<img class="gif" src="Images/550.gif">';
            break;
        case 600:
            gifChoice = '<img class="gif" src="Images/600.gif">';
            break;
        case 650:
            gifChoice = '<img class="gif" src="Images/650.gif">';
            break;
        case 700:
            gifChoice = '<img class="gif" src="Images/700.gif">';
            break;
        case 750:
            gifChoice = '<img class="gif" src="Images/750.gif">';
            break;
        case 800:
            gifChoice = '<img class="gif" src="Images/800.gif">';
            break;
        case 850:
            gifChoice = '<img class="gif" src="Images/850.gif">';
            break;
        case 900:
            gifChoice = '<img class="gif" src="Images/900.gif">';
            break;
        case 950:
            gifChoice = '<img class="gif" src="Images/950.gif">';
            break;
        case 1000:
            gifChoice = '<img class="gif" src="Images/1000.gif">';
            break;
        default:
            break;
    }

    document.getElementById("gif-1").innerHTML = gifChoice;
    document.getElementById("gif-2").innerHTML = gifChoice;
    document.getElementById("gif-3").innerHTML = gifChoice;
    document.getElementById("gif-4").innerHTML = gifChoice;
}

$(document).click( function() {
    incrementBurpees();
});

var fired = false;
$(window).keydown(function(e) {
    if (e.which === 32 && !fired) {
        incrementBurpees();
	fired = true;
    }
});

$(window).keyup(function(e) {
    fired = false;
});