import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <>
            <TodoItem
              {...todo}
              key={todo.id}
              // id={todo.id}
              // completed={todo.completed}
              // title={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </>
        );
      })}
    </ul>
  );
};

export default TodoList;
