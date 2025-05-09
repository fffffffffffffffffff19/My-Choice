/** Calc new char attributs
 * @param   {number} min – minimum value
 * @param   {number} max – maximum value
 * @returns {number} All basics char attributs*/

class NewCharRandomAttr {
    constructor() {
        this.randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        this.strength = this.randInt(1, 5);
        this.agility = this.randInt(1, 5);
        this.luck = this.randInt(1, 5);
    }
}

module.exports = new NewCharRandomAttr();
