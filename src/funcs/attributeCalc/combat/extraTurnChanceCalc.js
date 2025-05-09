/** Calc Extra Turn
 * @param  {number} luck            - the base char luck
 * @param  {number} skillBonus      - the bonus from any skill
 * @return {number} extraTurnChance - formated Extra Turn Chance bonus */

const { attributsCap } = require('../../../../config.json');

module.exports = (luck, skillBonus) => {
    const skillBonusReduction = skillBonus.reduce((sum, b) => sum + b, 0);
    const rawChance = luck / 7 + skillBonusReduction;

    return Math.min(rawChance, attributsCap.extraTurnChance);
};
