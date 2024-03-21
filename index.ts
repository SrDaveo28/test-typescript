// Function to generate a random number between 100 and 200
function rand(): number {
  return Math.floor(Math.random() * 101) + 100; // Generates a random number between 100 and 200
}

// Function to simulate one day of classroom usage and return the number of broken tubes
function simulateDay(): number {
  let totalWorkingHours = 0;
  for (let i = 0; i < 4; i++) {
    const hours = rand();
    totalWorkingHours += hours;
  }
  let brokenTubes = 0;
  while (totalWorkingHours > 0) {
    totalWorkingHours -= 15; // Simulating 15 hours of usage
    if (totalWorkingHours <= 0) {
      // Decrement first, then check
      brokenTubes++;
    }
  }
  return brokenTubes;
}

// Function to simulate one week of classroom usage and return the total number of broken tubes
function simulateWeek(): number {
  let totalBrokenTubes = 0;
  for (let i = 0; i < 5; i++) {
    totalBrokenTubes += simulateDay();
  }
  return totalBrokenTubes;
}

// Function to simulate one year of classroom usage and return the total number of broken tubes
function simulateYear(): number {
  let totalBrokenTubes = 0;
  for (let i = 0; i < 9; i++) {
    totalBrokenTubes += simulateWeek();
  }
  return totalBrokenTubes;
}

// Function to calculate the total cost of replacing tubes based on the number of broken tubes
function calculateCost(totalBrokenTubes: number): number {
  const tubesToReplace = Math.ceil(totalBrokenTubes / 2) * 4;
  return tubesToReplace * 7;
}

// Main function to execute the simulation and print the results
function main() {
  const totalBrokenTubes = simulateYear();
  const totalCost = calculateCost(totalBrokenTubes);

  console.log("1. Total broken tubes in one year:", totalBrokenTubes);
  console.log("2. Total cost per year per classroom:", totalCost, "USD");
}

// Execute the main function
main();
