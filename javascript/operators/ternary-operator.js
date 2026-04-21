const scoreUser = 1000;
const levelUser = scoreUser >= 1000 ? 'User VIP' : 'User Normal';
console.log(levelUser);

const colorUser = 'Red';
const colorDefault = colorUser ? colorUser : 'Color Undefined';
console.log(colorDefault);