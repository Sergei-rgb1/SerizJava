var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

// view.displayMiss("A0");
// view.displayHit("34");
// view.displayMiss("F5");
// view.displayHit("B2");
// view.displayMiss("C5");
// view.displayHit("C6");


view.displayMessage("Тук-тук, это работает?");


var ship1 = { location: ["A0", "", "30"], hits: ["hits", "hits", "hits"] };
var ship2 = { location:  ["32", "33", "34"], hits:  ["hits", "hits", "hits"] };
var ship3 = { location: ["63", "64", "65",], hits: ["hits", "hits", "hits"] };
