export class Dungeon {
  constructor(hero, enemies) {
    let [currentEnemy, ...remainingEnemies] = enemies;
    Object.assign(this, { hero, currentEnemy, remainingEnemies });
  }

  // Object.assign(this,{hero:hero, currentEnemy:currentEnemy, remainingEnemies:remainingEnemies})
  // same with the above, because es6 object literal, if the property name is the same with the variable name
  // veriable, we can just write the property name and the value will be assined into that name
  // object.assign put the rest of the object variable into the first one.

  start() {
    this.startBattle();
  }

  next() {
    let [currentEnemy, ...remainingEnemies] = this.remainingEnemies;
    Object.assign(this, { currentEnemy, remainingEnemies });
    if (remainingEnemies.length === 0) {
      this.hero.pickup(currentEnemy);
      this.end();
    } else {
      this.start();
    }
  }

  end(){
    document.body.innerHTML =`
      ${this.hero.view()}
      <h1>🥳Congratulations you completed the dungeon!!</h1>
    `
  }

  startBattle() {
    let { hero, currentEnemy } = this;
    document.body.innerHTML = `
      ${this.hero.view()}
      <button id="attack-button">Attack</button>
      ${this.currentEnemy.view()}
  `;
    hero.initializeInventory();
    hero.prepareForBattle();
    document.getElementById("attack-button").onclick = () => {
      hero.attack(currentEnemy);

      if (isKnockedOut(currentEnemy)) {
        this.endBattle(hero);
      } else {
        currentEnemy.attack(hero);
      }
    };
  }

  endBattle() {
    let { hero } = this;
    if (!isKnockedOut(hero)) {
      hero.levelUp();
    }

if(this.remainingEnemies.length ===1){
  document.body.innerHTML = `${hero.view()}
  <button id="next-battle">Pick up the prize</button>
  `
}else{
    document.body.innerHTML = `${hero.view()}
    <button id="next-battle">Start Another Battle</button>
    `;}

    console.log(this.remainingEnemies)

    document.getElementById("next-battle").addEventListener("click", () => {
      this.next();
    });
  }
}

const isKnockedOut = (character) => character.hitpoints <= 0;
