function describeAge(a){if(a<13){s='kid'}else if(a-18<0){s='teenager'}else if(a-65<0){s='adult'}else{s='elderly'}return'You\'re a(n) '+s}

function move (position, roll) {
  // return the new position
  return position + 2 * roll;
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function litres(time) {
  return Math.round(time/2-0.5);
}

function greet (name, owner) {
  return hello = (name==owner) ? 'Hello boss' : 'Hello guest';
}

//Square(n) Sum
function squareSum(numbers){
return numbers.reduce((a,b) => a + b * b, 0)
}