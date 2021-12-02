export default function getStudentsByLocation(arrOfStudents, city) {
  return arrOfStudents.filter((arrOfStudents) => arrOfStudents.location === city);
}
