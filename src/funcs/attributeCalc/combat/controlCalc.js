/** Calc Control
 * @param  {number} luck    - the base luck
 * @return {number} Control - formated control bonus */

module.exports = (luck) => Math.floor(luck / 2.5 + Math.random() * 3);
