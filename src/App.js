// import logo from "./logo.svg";
import Users from "./components/Users.jsx";
import "./App.css";

function App() {
  const age = 20;
  const users = [
    { name: "تایماز", age: 19, job: 'front-end', flag:false },
    { name: "حسین", age: 19, job: 'back-end', flag:true },
    { name: "علی", age: 20, job: 'UI/UX', flag:false }
  ]
return (
  <div className="App">
    {age > 22 ? <h1>Over</h1> : <h1>Under</h1>}
    {age === 20 && <h1>age is 20</h1>}
    <button type="submit" className={age >= 20 ? "success" : "danger"}>Click Me</button>
    <button type="submit" style={{fontWeight: age === 20 && 'bolder'}}>Click Me 2</button>
    <br /><br />

    {users.map((user, index) => {
        return user.flag === false && <Users key={index} name={user.name} age={user.age} job={user.job} />;
    })}

  </div>
)
}

export default App;
