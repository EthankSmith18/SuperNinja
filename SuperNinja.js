class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`${ this.name }`)
    }

    showStats(){
        console.log(` Name: ${ this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health} `)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Health: ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name,health){
        super(name, health);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log('Follow the sound of the waves for a fulfilling life.')
    }
}


const Gokhan = new Ninja("Gokhan", 100);
const Ethan = new Sensei("Ethan", 1000)




Gokhan.sayName();
Gokhan.showStats();
Gokhan.drinkSake();
Ethan.speakWisdom();