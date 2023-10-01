function Course(props) {
    return (
        <div className="Course">
            <div className="course_box" style={{border: props.borderColor}}>
                <h1>{props.name}</h1>
                <button className="delete" onClick={props.delete}><h1>X</h1></button>
                <button className="complete" onClick={props.complete}><h1>✔</h1></button>
            </div>
        </div>
    );
}
export default Course;