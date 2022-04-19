import {
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
 } from '@mui/material'
import {DeleteOutlined} from '@mui/icons-material'

function TodoListItem({todo, completeTodo, deleteTodo}) {
  const onButtonClick = () => deleteTodo(todo.id)
  const onCheckBoxToggle = () => completeTodo(todo.id)
  const completeStyle = todo.complete ? {textDecoration: "line-through"}:{}
  return (
    <ListItem divider>
      <Checkbox
        onClick={onCheckBoxToggle}
        value={todo.complete} />
      <ListItemText primary={todo.title} sx={completeStyle}/>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoListItem