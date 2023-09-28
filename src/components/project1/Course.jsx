import { useState } from "react";

function Course() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  function inputChange(e) {
    setNewCourse(e.target.value);
  }
  function addCourse() {
    let dataCourse = {
      id: 1,
      name: newCourse,
      complete: false,
    };
    courseList.push(dataCourse);
  }
  return (
    <div className="Course">
      <div className="add-course">
        <input type="text" onChange={inputChange}></input>
        <button onClick={addCourse}>add Course</button>
      </div>
      <div className="list">
        {courseList.map((item) => {
        return <h1>{item.name}</h1>
        })}
        </div>
    </div>
  );
}
export default Course;
