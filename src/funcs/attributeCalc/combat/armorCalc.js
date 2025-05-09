/** Calc Max Energy
 * @param  {number} skillBonus  - the bonus from char skills
 * @return {number} blockChance - formated char blockChance */

const { attributsCap } = require('../../../../config.json');

module.exports = (skillBonus) => {
    const totalSkillBonus = skillBonus.reduce((sum, b) => sum + b, 0);

    return Math.min(Math.max(totalSkillBonus, 0), attributsCap.armor);
};
