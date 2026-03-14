import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(null);

  const addTodo = () => {
    if (edit !== null) {
      const updatedTodo = [...todo];
      updatedTodo[edit] = input;
      setTodo(updatedTodo);
      setEdit(null);
    } else {
      setTodo([...todo, input]);
    }
    setInput("");
    console.log(todo);
  };

  const deleteTodo = (indexToDelete) => {
    const newInput = todo.filter((item, index) => index !== indexToDelete);
    setTodo(newInput);
  };

  const handleAlert = () => {
    if (input.trim() === "") {
      alert("Input Needed");
    }
  };

  const editTodo = (index) => {
    setInput(todo[index]);
    setEdit(index);
  };

  return (
    <>
      <main className="main_App">
        <div className="main_wrapper">
          <div>
            <h1>TO DO LIST</h1>
          </div>

          <section className="section1">
            <input
              type="text"
              placeholder="STATE YOUR REQUEST"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input ? (
              <button onClick={addTodo}>Add</button>
            ) : (
              <button className="newbtn" onClick={handleAlert}>
                Add
              </button>
            )}
          </section>

          <section className="section2">
            <ul>
              {todo.map((item, index) => (
                <li key={index}>
                  <p className="para">{item}</p> 
                  <div className="btnHolder">
                    <button onClick={() => editTodo(index)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>
                      Delete
                    </button>{" "}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
