export default function getStudentIdsSum(arrOfStudents) {
  return arrOfStudents.reduce((accumulator, content) => (accumulator + content.id), 0);
}
