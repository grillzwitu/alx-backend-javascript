export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof lenght !== 'number') throw TypeError('Length must be a number');
    if (students.constructor !== Array && students.every((student) => typeof student !== 'string')) throw TypeError('Students must be an array of strings');

    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  set name(name = '') {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length = 0) {
    if (typeof lenght !== 'number') throw TypeError('Length must be a number');
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students = []) {
    if (students.constructor !== Array && students.every((student) => typeof student !== 'string')) throw TypeError('Students must be an array of strings');
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
