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

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");


view.displayMessage("Тук-тук, это работает?");


var ship1 = { location: ["10", "20", "30"], hits: ["", "", ""] };
var ship2 = { location:  ["32", "33", "34"], hits:  ["", "", ""] };
var ship3 = { location: ["63", "64", "65",], hits: ["", "", "hit"] };

var ships = [{ location: ["10", "20", "30"], hits: ["", "", ""] },
            { location: ["32", "33", "34"], hits: ["", "", ""] },
            { location: ["63", "64", "65"], hits: ["", "", "hit"]  }];



var ships = [{ location: ["06", "16", "26"], hits: ["hit", "", ""] },
            { location: ["24", "34", "44"], hits: ["", "", ""] },
            { location: ["10", "11", "12"], hits: ["", "", ""]  }];

var ships = [{ location: ["31", "41", "51"], hits: ["", "", ""] },
            { location: ["14", "24", "34"], hits: ["", "hit", ""] },
            { location: ["00", "01", "02"], hits: ["", "", ""]  }];

var ship2 = ships [1];
var location = ship2.location;
console.log("Location is " + location[ship1])

var ship3 = ships[2];
var hits = ship3. hits;
if ("ship3" === "hit") {
    console.log("Ouch, hit on third ship at location one");
}