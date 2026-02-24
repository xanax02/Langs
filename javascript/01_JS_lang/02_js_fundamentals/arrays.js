let arr = ["1", "2"];

arr.push(function () {
  console.log(this);
});

arr[2]();

function getMaxSubSum(arr) {
  let maxi = 0;
  let summ = 0;

  for (let val of arr) {
    if (val > 0) {
      summ += val;
      if (summ > maxi) maxi = summ;
    } else summ = 0;
  }

  console.log(maxi);
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([-2, -1, 1, 2]);
