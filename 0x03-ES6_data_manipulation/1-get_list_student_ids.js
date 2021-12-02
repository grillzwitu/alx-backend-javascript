export default function getListStudentIds(arrOfStudents) {
  if (Array.isArray(arrOfStudents)) return arrOfStudents.map((content) => content.id);
  return [];
}
