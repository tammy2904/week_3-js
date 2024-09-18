function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2)); // 4
console.log(sum(10, 15, 249, 653, 846)); // 1773
