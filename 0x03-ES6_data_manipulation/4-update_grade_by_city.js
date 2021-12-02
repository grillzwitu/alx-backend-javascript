export default function updateStudentGradeByCity(arrOfStudents, city, newGrades) {
  return arrOfStudents.filter((content) => content.location === city).map((content) => {
    content.grade = 'N/A'; // eslint-disable-line no-param-reassign
    for (const grad of newGrades) {
      if (grad.studentId === content.id) {
        content.grade = grad.grade; // eslint-disable-line no-param-reassign
      }
    }
    return content;
  });
}
