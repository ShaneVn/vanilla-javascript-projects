import { Character } from './Character.js'

export class Spider extends Character{
    constructor(level){
        super(`Spider🕷`,level)
        
    }

    attack(target){
        this.bite(target)
    }

    bite(target){
        let damage = target.maxHitpoints /8
        target.updateHitpoints(target.hitpoints - damage) 
    }

}

export class Scorpion extends Character{
    constructor(level){
        super(` Scorpion🦂 `,level)
        
    }

    attack(target){
        this.sting(target)
    }

    sting(target){
        let damage = target.maxHitpoints /4
        target.updateHitpoints(target.hitpoints - damage) 
    }
}

export class Dragon extends Character{
    constructor(level){
        super(`Dragon🐉`,level)
    }

    attack(target){
        this.fireBreath(target)
    }


    fireBreath(target){
        let damage = target.maxHitpoints /2
        target.updateHitpoints(target.hitpoints - damage) 

    }
}
