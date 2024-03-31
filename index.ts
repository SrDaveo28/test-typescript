// Function to generate a random number between 100 and 200
function rand(): number {
  return Math.floor(Math.random() * 101) + 100; // Generates a random number between 100 and 200
}

// Function to simulate one year of classroom usage and return the total number of broken tubes
function simulateYear(): number {
  let totalBrokenTubes = 0;
  let totalWorkingHours = 15 * 5 * 4 * 9 * 4; // 15 hours/day * 5 days/week * 4 weeks/month * 9 months/year * 4 tubes/unit
  let tubeLifeHours = Array(16).fill(rand()); // Initialize the life hours of all 16 tubes

  while (totalWorkingHours > 0) {
    for (let i = 0; i < 16; i++) {
      if (tubeLifeHours[i] > 0) {
        tubeLifeHours[i]--;
        if (tubeLifeHours[i] == 0) {
          totalBrokenTubes++;
          if (totalBrokenTubes % 2 == 0) { // If two tubes in the same unit are broken
            tubeLifeHours[i-1] = 0; // The other tube in the unit is also considered as broken
            totalBrokenTubes++;
          }
          tubeLifeHours[i] = rand(); // Replace the broken tube
        }
      }
    }
    totalWorkingHours--;
  }
  return totalBrokenTubes;
}

// Function to calculate the total cost of replacing tubes based on the number of broken tubes
function calculateCost(totalBrokenTubes: number): number {
  const tubesToReplace = totalBrokenTubes + 16; // Don't forget the cost of the first 16 tubes at the beginning of the year
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
