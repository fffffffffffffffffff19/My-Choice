/** Calc Bleed Chance
 * @param  {number} weaponBonus - the bonus from helded weapon
 * @param  {number} skillBonus  - the bonus from any skill
 * @return {number} bleedChance - formated Bleed Chance */

const { attributsCap } = require('../../../../config.json');

module.exports = (weaponBonus, skillBonus) => {
    const skillBonusReduction = skillBonus.reduce((sum, b) => sum + b, 0);

    return Math.min(Math.max(weaponBonus + skillBonusReduction, 0), attributsCap.bleedChance);
};
