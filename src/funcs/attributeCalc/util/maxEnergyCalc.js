/** Calc Max Energy
 * @param  {number} luck       - the base luck
 * @param  {number} skillBonus - the bonus from any skill
 * @return {number} maxEnergy  - formated char max Energy */

module.exports = (luck, skillBonus) => {
    const baseMaxEnergy = 100 + luck * 5;
    const skillBonusReduce = skillBonus.reduce((sum, b) => sum + b, 0) / 100;
    const maxEnergy = Math.floor(baseMaxEnergy * (1 + skillBonusReduce));

    return { baseMaxEnergy, maxEnergy };
};
