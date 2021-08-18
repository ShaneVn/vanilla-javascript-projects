import { Character } from './Character.js'

export class Wizard extends Character {
    constructor(name, level) {
        super(`${name} 🧙🏽‍♀️`, level)
        this.mana = 4 * level
    }
    
    levelUp(){
        super.levelUp()
        this.mana +=4
    }

   
    attack(target) {
        let updatedHitpoints = target.hitpoints - (1.5 * this.level)
        target.updateHitpoints(updatedHitpoints)
        this.updateMana(this.mana - 2)
    }

    restore() {
        this.updateMana(this.mana + 1)
        this.mana++
    }
    
    updateMana(newMana){
        this.mana = newMana
        document.getElementById(`character-${this.id}-mana`).innerHTML = `Mana: ${this.mana}`
    }

    prepareForBattle(){
        document.getElementById(`character-${this.id}-restore`).onclick= () =>{
            this.restore()
        }
    }

    view() {
        return super.view(`<div id = "character-${this.id}-mana"> Mana: ${this.mana}</div>
        <button id="character-${this.id}-restore">Restore</button>
        `)
    }
}

export class Archer extends Character {
    constructor(name, level) {
        super(`${name} 🏹`, level)
        this.arrows = 3 * level
    }
    
    levelUp(){
        super.levelUp()
        this.arrows +=3
    }
    

    attack(target) {
        super.attack(target)
        this.updateArrows(this.arrows - 1)
    }

    reload() {
        this.updateArrows(this.arrows + 1)
        this.arrows++
    }
    
    prepareForBattle(){
        document.getElementById(`character-${this.id}-reload`).onclick= () =>{
            this.reload()
        }
    }

    updateArrows(newArrows){
        this.arrows = newArrows
        document.getElementById(`character-${this.id}-arrows`).innerHTML = `Arrow: ${this.arrows}`
    }


    view() {
        return super.view(`<div id = "character-${this.id}-arrows">Arrows: ${this.arrows}</div> 
        <button id="character-${this.id}-reload">Reload</button> 

        `)
       
    }
}

export class Warrior extends Character {
    constructor(name, level) {
        super(`${name} ⚔️`, level)
        this.strength = 2.5 * level
    }
    
    levelUp(){
        super.levelUp()
        this.strength += 2.5
    }


    attack(target) {
        let updatedHitpoints = target.hitpoints - this.strength
        target.updateHitpoints(updatedHitpoints)
        this.updateStrength(this.strength - 1)
    }

    updateStrength(newStrength){
        this.strength = newStrength
        document.getElementById(`character-${this.id}-strength`).innerHTML = `Strength: ${this.strength}`
    }

    charge() {
        this.updateStrength(this.strength + 1)
        this.strength++
    }

    prepareForBattle(){
        document.getElementById(`character-${this.id}-charge`).onclick= () =>{
            this.charge()
        }
    }

    
    view() {
        return super.view(` <div id = "character-${this.id}-strength"> Strength: ${this.strength} </div>
        <button id="character-${this.id}-charge">Charge</button>
        `)
    }
}


// export class Priest extends Character{
//     constructor(name,level){
//         super(`${name}🩹`, level)
//         this.wisdom = 4 * level
//     }
    
//     levelUp(){
//         super.levelUp
//         this.wisdom +=4 
//     }

//     updateWisdom(newWidsom){
//         this.wisdom = newWidsom
//         document.getElementById(`character-${this.id}-wisdom`).innerHTML = `Wisdom: ${this.wisdom}`
//     }

//     meditate(){ 
//         this.updateWisdom(this.wisdom + 1)
//         this.wisdom++
//     }
//     view(){
//         return super.view(`<div id = "character-${this.id}-wisdom"> Widsom: ${this.wisdom} </div>`)
//     }
// }