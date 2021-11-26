// eslint-disable-next-line import/extensions
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const classrooms = [];
  classrooms.push(new ClassRoom(19));
  classrooms.push(new ClassRoom(20));
  classrooms.push(new ClassRoom(34));

  return classrooms;
}
