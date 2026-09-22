function isElevatorSafe(weights) {

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  return totalWeight <= 1000;
  
}

const weights = [60, 75, 50];
const weights2 = [90, 100, 95, 120];
const weights3 = [400];
const weights4 = [60, 75, 50];.


console.log(isElevatorSafe(weights)); // true
console.log(isElevatorSafe(weights2)); // false
console.log(isElevatorSafe(weights3)); // true
console.log(isElevatorSafe(weights4)); // Invalid 


