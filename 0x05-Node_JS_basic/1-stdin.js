// accepts input through stdin and prints to stdout

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const usrname = process.stdin.read();
  if (usrname !== null) {
    process.stdout.write(`Your name is: ${usrname}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
