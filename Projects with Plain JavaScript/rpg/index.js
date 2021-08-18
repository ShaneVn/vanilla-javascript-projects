// import { Character } from './Character.js'
import {Wizard, Archer, Warrior, } from './characters/Heroes.js'
import { Spider, Scorpion, Dragon } from './Characters/Enemies.js'
import {Food} from "./Food.js"
import { Dungeon } from './Dungeon/Dungeon.js'





const croissant = new Food("🥐", 5)
const bread = new Food("🍞", 10)
const pizza = new Food("🍕", 9)
const dani = new Warrior("Dani", 1000)
const moe = new Archer("Moe", 3)
const liz = new Wizard("Liz", 1)
const spider = new Spider(1)
const scorpion = new Scorpion(5)
const dragon = new Dragon(10)
liz.pickup(croissant)
liz.pickup(bread )
liz.pickup(pizza )
console.log(liz)


let finalDungeon = new Dungeon(dani, [
    new Spider(1), 
    new Spider(1), 
    new Spider(2), 
    new Spider(3), 
    new Scorpion(5), 
    new Scorpion(8),
    new Scorpion(13),
    new Dragon(21),
    new Food("🍪", 1000)
])

finalDungeon.start()
// document.body.innerHTML += spider.view()
// document.body.innerHTML += scorpion.view()
// document.body.innerHTML += dragon.view()
// document.body.innerHTML += dani.view()
// document.body.innerHTML += moe.view()
// document.body.innerHTML += liz.view()
// document.body.innerHTML += shane.view()
// document.body.innerHTML += croissant.view()