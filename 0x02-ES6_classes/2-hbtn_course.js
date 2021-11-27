export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (students.constructor !== Array && students.every((student) => typeof student !== 'string')) throw TypeError('Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(Name) {
    if (typeof Name !== 'string') throw TypeError('Name must be a string');
    this._name = Name;
  }

  get name() {
    return this._name;
  }

  set length(Length) {
    if (typeof Length !== 'number') throw TypeError('Length must be a number');
    this._length = Length;
  }

  get length() {
    return this._length;
  }

  set students(Students) {
    if (Students.constructor !== Array && Students.every((student) => typeof student !== 'string')) throw TypeError('Students must be an array of strings');
    this._students = Students;
  }

  get students() {
    return this._students;
  }
}
