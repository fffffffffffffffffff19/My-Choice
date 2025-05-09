/** Calc Dodge Chance
 * @param  {number} agility     - the base char agility
 * @param  {number} weaponBonus - the bonus from helded weapon
 * @param  {number} skillBonus  - the bonus from any skill
 * @return {number} dodgeChance - formated Dodge chance bonus */

const { attributsCap } = require('../../../../config.json');

module.exports = (agility, weaponBonus, skillBonus) => {
    const skillBonusReduction = skillBonus.reduce((sum, b) => sum + b, 0);
    const rawChance = agility / 7 + weaponBonus + skillBonusReduction;

    return Math.min(rawChance, attributsCap.dodgeChance);
};
