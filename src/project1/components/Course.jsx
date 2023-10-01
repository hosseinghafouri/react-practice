function Course(props) {
    return (
        <div className="Course">
            <div className="course_box">
                <h1>{props.name}</h1>
                <button onClick={props.delete}><h1>X</h1></button>
            </div>
        </div>
    );
}
export default Course;