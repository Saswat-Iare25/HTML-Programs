let nums=[10,20,30,40];
console.log("Numbers:", nums);
console.log("Sum:", nums.reduce((a,b)=>a+b,0));
console.log("Average:", nums.reduce((a,b)=>a+b,0)/nums.length);
console.log("Largest:", Math.max(...nums));