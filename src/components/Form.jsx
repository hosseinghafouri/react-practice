import { useRef } from "react";
import { useReducer } from "react";

const instialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  tags: [],
  quantity: 0,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return {...state, [action.data.name] : action.data.value};
    case "add_tag":
      return {...state, tags: [...state.tags, action.data]};
    case "remove_tag":
      return {...state, tags: state.tags.filter((tag)=> tag !== action.data) };
    case "increase":
      return {...state, quantity: state.quantity ++};
    case "decrease":
      return {...state, quantity: state.quantity --};
      case "set0":
        return {...state, quantity: 0};
    default:
      return state;
  }
};
function Form(params) {
  const tagRef = useRef();
  const [state, despatch] = useReducer(formReducer, instialState);
  const changeInputHandler = (event) => {
    despatch({type : "change_input", data: {name: event.target.name, value: event.target.value}})
  }
  const handleTags = ()=> {
const tags = tagRef.current.value.split(",");
tags.forEach(t => {
  despatch({type : "add_tag", data: t});
});
  }
  return (
    <div className="Form">
      <form action="">
        <input type="text" placeholder="عنوان" name="title" onChange={changeInputHandler} />
        <input type="text" placeholder="توضیح" name="description" onChange={changeInputHandler} />
        <input type="number" placeholder="قیمت" name="price" onChange={changeInputHandler} />
        <p>مجوموعه</p>
        <select id="" name="category" onChange={changeInputHandler}>
          <option value="bag">کیف</option>
          <option value="shoes">کفش</option>
          <option value="hat">کلاه</option>
        </select>
        <p>تگ</p>
        <textarea ref={tagRef}
          placeholder="tags"
          name=""
          id=""
          cols="30"
          rows="4"
        ></textarea>
        <button type="button" onClick={handleTags}>انتخاب تگ</button>
        {state.tags.map((tag)=> {
        return <button type="button" key={tag} onClick={()=> despatch({type: "remove_tag", data: tag})}>{tag}</button>;
        })}
        <br />
        <div className="counter">
          <button type="button" onClick={()=> despatch({type: "increase"})}>+</button>
          {state.quantity >0 ? <p>تعداد: {state.quantity}</p> : <p>تعداد: 0</p>}
          <button type="button" onClick={()=> despatch({type: "decrease"})}>-</button>
          <br />
          <button type="button" onClick={()=> despatch({type: "set0"})}>set to 0</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
