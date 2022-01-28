// accept a path(databse file) in argument and read the database file asynchronously

const fs = require('fs');

const countStudents = (db) => {
  const promise = (resolve, reject) => {
    fs.readFile(db, 'utf8', (err, resDat) => {
      if (!err) {
        const output = [];
        let outputData;
        // convert data to string and split at every new line
        const data = resDat.toString().split('\n');
        // console.log(data);

        // further split string data at commas, get data for each student in an array
        const students = data.map((item) => item.split(','));
        // console.log(students);
        outputData = `Number of students: ${students.length - 1}`; // length -1 because the index 0 contains the headings
        console.log(outputData);
        output.push(outputData);

        // sorting the students accoding to their courses
        const courses = {};
        for (const student in students) {
          if (student !== 0) {
            if (!courses[students[student][3]]) {
              courses[students[student][3]] = [];
            }
            courses[students[student][3]].push(students[student][0]);
          }
        }
        delete courses.field;
        // console.log(courses);

        // Presenting output as required
        for (const key of Object.keys(courses)) {
          outputData = `Number of students in ${key}: ${
            courses[key].length}. List: ${courses[key].join(', ')}`;
          console.log(outputData);
          output.push(outputData);
        }
        resolve(output);
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  };

  return new Promise(promise);
};

module.exports = countStudents;
