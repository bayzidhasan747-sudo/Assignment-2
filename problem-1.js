function matchWinner(teamAGoals, teamBGoals) {

  if (teamAGoals > teamBGoals) {
    return "Team A wins!";
  }
  if (teamBGoals > teamAGoals) {
    return "Team B wins!";
  }
  return "It's a draw!";

 
}

teamAGoals->teamBGoals
(2, 1) // Output: "Team A wins!"

teamAGoals->teamBGoals
(1, 3) // Output: "Team B wins!"

teamAGoals->teamBGoals
(2, 2) // Output: "It's a Draw!"

teamAGoals->teamBGoals
(3, 2) // Output: "It's a Invalid Input!" 


console.log(matchWinner(2, 1)); // Output: "Team A wins!"
console.log(matchWinner(1, 3)); // Output: "Team B wins!"
console.log(matchWinner(2, 2)); // Output: "It's a Draw!"
console.log(matchWinner(3, 2)); // Output: "It's a Invalid Input!"



