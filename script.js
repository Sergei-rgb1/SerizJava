var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea")
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
    var cell = document.getElementById(location)
    cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
    var cell = document.getElementById(location)
    cell.setAttribute("class", "miss")
    }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?")

var ship1 = { locations: ["10", "20", "30"], hits: ["", "", ""] };
var ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
var ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };

var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
              { locations: ["32", "33", "34"], hits: ["", "", ""] },
            { locations: ["63", "64", "65"], hits: ["", "", "hit"]} ];

var ships = [{ locations: ["06", "16", "26"], hits: ["hit", "", ""] },
         { locations: ["24", "34", "44"], hits: ["", "", ""] },
          { locations: ["10", "11", "12"], hits: ["", "", ""]} ];


    var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLenght: 3,

ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }],

fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        location = ships.locations
        var index = locations.indexOf(guess);
        if (index >= 0) {
            ship.hits[index] = "hit";
            return true;
        }
        return false;
     }
    }
  };
