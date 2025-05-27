/*体重：68kg
身長：1.7m
計算式：[体重(kg)]÷[身長(m)×身長(m)]

*/

const userHeight = 1.7;
const userWeight = 68;
let userBmi = (userWeight/(userHeight*userHeight));

console.log(userBmi);
