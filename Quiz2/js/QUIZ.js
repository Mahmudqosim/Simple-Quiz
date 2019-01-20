var username = prompt('Please enter your name');

function body() {
    if (username !== null) {
        document.getElementById("head").innerHTML = "Welcome" + " " + username;
    }
}

var x = 0;

function bani() {
    return x += 1; 
}

function printo() {
    var com = confirm("Are you sure you want to view your result");

    var modal = document.getElementById('resul');

    var span = document.getElementsByClassName("close")[0];

    if (com == true) {
        if (x > 2) {
            document.getElementById("score").innerHTML = "Dear" + " " + username + " " + "you scored" + " " + x+"/"+5 + " " + "You Passed";
            modal.style.display = "block";
        } else {
            document.getElementById("score").innerHTML = "Dear" + " " + username + " " + "you scored" + " " + x+"/"+5 + " " + "You Failed!";
            modal.style.display = "block";
        }
    }
    else {
        com = null;
    }
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
           modal.style.display = "none";
        }
    }
}


