import { List, Paper } from '@mui/material'
import TodoListItem from './TodoListItem'

function TodoList({todos, completeTodo, deleteTodo}) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <TodoListItem
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
           />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList