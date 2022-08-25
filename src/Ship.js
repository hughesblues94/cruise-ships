function Ship(port) {
    this.startingPort = port;
    this.passengers = 0;
}

Ship.prototype.setSail = function () {
    this.startingPort = false;
}

Ship.prototype.addPassenger = function () {
    this.passengers++;
}


module.exports = Ship;