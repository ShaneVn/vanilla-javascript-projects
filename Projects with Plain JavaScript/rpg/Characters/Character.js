let id = 0

export class Character {

    constructor(name, level) {
        let myCharacter = {
            name, level, id,
            hitpoints: 4 * level,
            maxHitpoints: 4 * level,
            inventory: []
        }
        Object.assign(this, myCharacter)
        id++

    }

    levelUp() {
      this.level++
      this.maxHitpoints = 4 * this.level
      this.hitpoints = this.maxHitpoints
  } 

    attack(target){
    let updatedHitpoints = target.hitpoints - this.level;
    target.updateHitpoints(updatedHitpoints);

  };


  pickup(item) {
    this.inventory.push(item);
  }

  initializeInventory() {
    for (let item of this.inventory) {
      item.domElement().onclick = () => {
        let updatedHitpoints = this.hitpoints + item.restores;
        this.updateHitpoints(updatedHitpoints);
        this.drop(item);
        let inventoryDom = document.getElementById(
          `character-${this.id}-inventory`
        );
        inventoryDom.innerHTML = this.getInventory();
        this.initializeInventory()
      };
    }
  }

  drop(droppedItem) {
    let inventory = [];

    for (let item of this.inventory) {
      if (droppedItem.id != item.id) {
        inventory.push(item);
      }
    }

    this.inventory = inventory;
  }

  getInventory() {
    let inventoryView = ``;
    for (const food of this.inventory) {
      inventoryView += food.view();
    }

    return inventoryView;
  }

  updateHitpoints(newHitpoints) {
    this.hitpoints = newHitpoints;
    let { id, hitpoints, maxHitpoints } = this;
    const hitpointsDom = document.getElementById(`character-${id}-hitpoints`);
    hitpointsDom.innerHTML = `HP: ${hitpoints}/${maxHitpoints}`;
  }

  view(details = "") {
    let { name, level, id, hitpoints, maxHitpoints } = this;

    return `<div class='character' id='character-${id}'>
           <div> ${name} </div>
           <div> Lv. ${level} </div>
           <div id = 'character-${id}-hitpoints'>
           HP: ${hitpoints}/ ${maxHitpoints} 
           </div>
           <div class="inventory" id="character-${id}-inventory">
           ${this.getInventory()}
           </div>
           <div> ${details} </div>
        </div>
        
        
        `;
  }

  domElement() {
    const domElement = document.getElementById(`character-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }
}
