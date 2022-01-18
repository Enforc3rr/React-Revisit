import { useState } from "react";

let globalID = 0;
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const pushTodo = (event) => {
    event.preventDefault(); // to stop refreshing of page which is a default behaviour of html form .
    setTodos((oldTodos) => {
      setText("");
      globalID++;
      return [...oldTodos, { todo: text, id: globalID }];
    });
  };

  const deleteTodo = (itemID) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((item) => item.id !== itemID);
    });
  };

  return (
    <form onSubmit={pushTodo}>
      <h3>todos</h3>
      Enter Todo :
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">PUSH</button>
      <ul>
        {todos.map((item, index) => {
          return (
            <div>
              <li key={item.id}>
                {item.id} ******* {item.todo}
              </li>
              <button type="button" onClick={() => deleteTodo(item.id)}>
                del
              </button>
            </div>
          );
        })}
      </ul>
    </form>
  );
}

export default App;
/*
TO PUSH TODO VIA ENTER KEY

function App() {
  const [todos, setTodos] = useState(["Hello"]);
  const [text, setText] = useState("");
  const pushTodo = () => {
    setTodos((oldTodos) => {
      setText("");
      return [...oldTodos, text];
    });
  };
  //console log e , there you will
  const addingTodoUsingEnter = (e) => {
    if (e.keyCode === 13) {
      pushTodo();
    }
  };
  return (
    <div>
      <h3>todos</h3>
      Enter Todo :
      <input
        onKeyDown={addingTodoUsingEnter}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={pushTodo}>
        PUSH
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
*/
