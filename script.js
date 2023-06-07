const avg = (a, b, c) => (a + b + c) / 3;
console.log(avg(1, 1, 1));

let team1 = avg(2, 2, 2);
let team2 = avg(3, 3, 3);
console.log(team1, team2);

const win = function (team1, team2) {
  if (team1 > team2) {
    console.log("team1 wins");
  } else if (team2 > team1) {
    console.log("team2 wins");
  } else {
    console.log("tie");
    // return win;
  }
};
win(team1, team2);
