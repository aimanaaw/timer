const beep = function(anything) {
  let arr  = anything.slice(2).sort((a, b) => a - b)
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return;
    } else if (arr[i] <= 0) {
      console.log('nope');
    } else if (!Number.isInteger(parseInt(arr[i]))) {
      console.log('not a num');
    } else {
      setTimeout(() => { process.stdout.write(`\x07`); }, arr[i] * 1000);
    }
  }
}

beep(process.argv)