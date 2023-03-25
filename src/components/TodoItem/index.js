// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListDetails, deleteTodo} = props
  const {title, id} = todoListDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
