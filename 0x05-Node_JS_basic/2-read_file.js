// function named countStudents. It should accept a path in argument
// reads the database file (arguement) synchronously

const fs = require('fs');

const countStudents = (db) => {
  try {
    const data = fs.readFileSync(db, 'utf8');

    // convrt data to array and get the lenght
    const studentArr = data.trim().split('\n').slice(1);
    // console.log(studentArr)
    console.log(`Number of students: ${studentArr.length}`);

    // further split studentArr into arrays
    const students = studentArr.map((student) => {
      const subEle = student.replace('\r', '').split(',');
      // console.log(subEle)
      return subEle;
    });

    // getting the list of unique courses
    const courses = [...new Set(students.map((student) => student[student.length - 1]))];
    // console.log(courses)

    // extracting data from students for required output string
    courses.forEach((course) => {
      const studentsExtract = students.filter(
        (student) => student[student.length - 1] === course,
      ).map((student) => student[0]);
      console.log(`Number of students in ${course}: ${studentsExtract.length}. List: ${studentsExtract.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
