let todos = [];

function addTodo(){
    todos.push({
        title: document.querySelector("input").value
    });
// add the object to the array
    render();
}

function deleteTodo(index) {
  todos.splice(index, 1); 
  render();
}

function render(){
  const container = document.getElementById("todo-list");
  container.innerHTML = ""; // reset UI

  todos.forEach((todo, index) => {
    const div = document.createElement("div");
     div.className = "todo";

    const span = document.createElement("span");
     span.innerText = todo.title;

    //  creating deletebutton for todo
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = () => deleteTodo(index);

    div.appendChild(span);
    div.appendChild(button);

    container.appendChild(div);
  });
}

