// Ship blueprint
class Ship {
    constructor(health) {
        // this.name = name;
        this.health = health;
    }
}

//Mothership Class
class MotherShip extends Ship {
    constructor() {
        super(100);
    }

    decrementHealth() {
        this.health = this.health - 9;
    }
}

//Attack Ships
class AttackShip extends Ship {
    constructor() {
        // this adds 45 to the health in 
        super(45);
    }
    //Method reduces health
    decrementHealth() {
        this.health = this.health - 12;
    } 

}

//Defence Ships
class DefenceShip extends Ship {
    constructor()
    //continue from here
        super(80);
    }
    //Method reduces health
    decrementHealth() {
        this.health = this.health - 10;
    }
}

const motherShip = new MotherShip();
const attackShip1 = new AttackShip();
const attackShip2 = new AttackShip();
const attackShip3 = new AttackShip();
const attackShip4 = new AttackShip();
const attackShip5 = new AttackShip();

motherShip.decrementHealth();
attackShip1.decrementHealth();
attackShip2.decrementHealth();
attackShip3.decrementHealth();
attackShip4.decrementHealth();
attackShip5.decrementHealth();

console.log("Mother Ship ",  motherShip);
console.log("Attack Ship 1 ", attackShip1);
console.log("Attack Ship 2 ", attackShip2);
console.log("Attack Ship 3 ", attackShip3);
console.log("Attack Ship 4 ", attackShip4);
console.log("Attack Ship 5 ", attackShip5);



