const Ship = require("../src/Ship.js");

describe("Ship", () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship("Dover");
        expect(ship.startingPort).toBe("Dover");
    })
    it('can set sail', () => {
        //setup
        const ship = new Ship("Dover");
        //exercise 
        ship.setSail();
        //verify
        expect(ship.startingPort).toBeFalsy();
        //teardown (handled automatically by jest)
    })
});