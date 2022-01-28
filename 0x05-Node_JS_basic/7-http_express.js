// an express server that reads a file asynchronously

const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async'); // fuction that reads files(databases) asynchronously

const DB = args[0]; // the database file

const app = express();
const port = 1245;

// base/home endpoint/route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// students endpoint/route
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DB); // read db asynchronously
    res.end(`${msg}${students.join('\n')}`); // presenting response as required
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Express Server running at http://localhost:${port}/`);
});

module.exports = app;
