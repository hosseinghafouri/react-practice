const Users = (props) => {
    return (
        <div className="Users">
            <h1>اسم: {props.name}</h1>
            <h1>سن: {props.age}</h1>
            <h1>شغل: {props.job}</h1>
        </div>
    )
}
export default Users;