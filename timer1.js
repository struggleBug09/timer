const args = process.argv.slice(2);

const timer1 = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (!(input[i] >= 0)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    },1000 * input[i]);
  }
};

timer1(args);
