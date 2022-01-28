// a http server that reads a file asynchronously

const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async'); // fuction that reads files(databases) asynchronously

const DB = args[0]; // the database file

const hostname = '127.0.0.1';
const port = 1245;

// creating the server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');

    // read db asynchronously
    try {
      const students = await countStudents(DB);

      // presenting response as required
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
