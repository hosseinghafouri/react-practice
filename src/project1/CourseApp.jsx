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
    document.querySelector("#courseInput").focus();
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      name: newCourse,
      isCompleted: false,
    };
    setCourseList([...courseList, course]);
  }
  function deleteCourse(courseID) {
    document.querySelector("#courseInput").focus();
    setCourseList(courseList.filter((course) => courseID !== course.id));
  }
  function completeCourse(courseID) {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseID)
        return { ...course, isCompleted: !course.isCompleted };
      else return course;
    });
    setCourseList(newCourseList);
  }
  return (
    <div className="CourseApp">
      <div className="add-course">
        <input type="text" id="courseInput" onChange={inputChange}></input>
        <button onClick={addCourse}>add Course</button>
      </div>

      <div className="list">
        {courseList.map((course, index) => {
          return (
            <Course
              key={index}
              name={course.name}
              delete={() => deleteCourse(course.id)}
              complete={() => completeCourse(course.id)}
              borderColor={
                course.isCompleted === true ? "5px solid #66f20f" : ""
              }
            />
          );
        })}
      </div>
    </div>
  );
}
export default CourseApp;
