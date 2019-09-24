const beepFunction = function() {
  let array = process.argv.slice(2).sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++) {
    if(!Number.isInteger(parseInt(array[i]))){
      console.log("Cannot schedule a letter", array[i])
      continue;
    };
    if(array[i] < 0) {
      console.log("Cannot schedule anything in the past", array[i]);
      continue;
    }
    setTimeout(() => process.stdout.write('\x07'), array[i]);
    
    }
  }
  
beepFunction(process.argv);

