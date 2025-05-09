/** Calc HP
 * @param   {number|null} baseHp      - the base char Hp
 * @param   {number} level            - the char level
 * @param   {number} vital            - the base char vital
 * @param   {number[]} skillPercBonus - the porcent bonus from any skill
 * @param   {number[]} skillFlatBonus - the flat bonus from any skill
 * @returns {number} { flat, percent, max } */

module.exports = (baseHp, level, vital, skillFlatBonus, skillPercBonus) => {
    if (!baseHp) return 50 + (Math.max(vital, 0) + level * 0.3) * 5;

    const skillFlatReduction = skillFlatBonus.reduce((sum, b) => sum + b, 0);
    const skillPercentReduction = skillPercBonus.reduce((sum, b) => sum + b, 0) / 100;

    class HpMax {
        constructor() {
            this.flat = baseHp + skillFlatReduction;
            this.percent = baseHp * skillPercentReduction;
            this.max = this.flat + this.percent;
        }
    }

    return new HpMax();
};
