import { useState } from "react";
import Course from "./components/Course";

function CourseApp() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  function inputChange(e) {
    setNewCourse(e.target.value);
  }
  function addCourse() {
    document.querySelector("#courseInput").value = "";
  setCourseList( [...courseList, newCourse] );
  }
  function deleteCourse(courseName) {
    const newCourseList = courseList.filter((course) => {
      if (course === courseName) return false
      else return true
    })
    setCourseList(newCourseList);
  }
  return (
    <div className="CourseApp">
      <div className="add-course">
        <input type="text" id="courseInput" onChange={inputChange}></input>
        <button onClick={addCourse}>add Course</button>
      </div>
      <div className="list">

        </div>
        {courseList.map((course, index) => {
        return <Course key={index} name={course} delete={()=> deleteCourse(course)} />;
        })}
    </div>
  );
}
export default CourseApp;
