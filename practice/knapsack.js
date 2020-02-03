
function knapsack(items, maxWeight) {
  let currMaxW = Number.MIN_SAFE_INTEGER;
  let currMaxV = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < items.length; i++) {
    
    for (let j = 0; j < items.length; j++) {
      if (i == j) continue;

      if (items[i][0] + items[j][0] <= maxWeight) {
        
        currMaxV < items[i][1] + items[j][1]
          ? (currMaxV = items[i][1] + items[j][1])
          : null;
      }
    }
    
  }

  return currMaxV;
}

let r = knapsack(
  [
    [10, 60],
    [20, 100],
    [30, 120]
  ],
  50
);
console.log(r);
