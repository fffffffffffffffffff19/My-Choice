/** Calc Char Focus
 * @param  {number} weaponBonus  - the bonus from helded weapon
 * @param  {number} skillBonus   - the bonus from any skill
 * @param  {number} oponentFocus - the reduction from enemy focus points
 * @return {number} blockChance  - formated char focus */

const { attributsCap } = require('../../../../config.json');

module.exports = (weaponBonus, skillBonus) => {
    const totalSkillBonus = skillBonus.reduce((sum, b) => sum + b, 0);

    return Math.min(Math.max(weaponBonus + totalSkillBonus, 0), attributsCap.focus);
};
