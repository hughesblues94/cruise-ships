function Ship(port) {
    this.startingPort = port;
    this.passengers = 0;
}

Ship.prototype.addPassenger = function () {
    this.passengers++;
}


module.exports = Ship;