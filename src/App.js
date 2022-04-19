import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import {
  AppBar,
  Paper,
  Toolbar,
  Typography
} from '@mui/material'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const initialState = [
  {
    id: 1,
    title: 'create todo list',
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialState)
  const addTodo = e => {
    e.preventDefault()
    if (!e.target.todoTitle.value) return
    setTodos([...todos,
      {
        id: uuid(),
        title: e.target.todoTitle.value,
        complete: false
      }
    ])
    e.target.reset()
  }
  const deleteTodo = id => {
    setTodos(
      todos.filter(item => item.id !==id)
    )
  }
  const completeTodo = id => {
    const newTodoList = todos.map(item => {
      if (item.id === id) {
        return {...item, complete: !item.complete}
      }
      return item
    })
    setTodos(newTodoList)
  }
  return (
    <>
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
    >
      <AppBar
        color="primary"
        position='static'
        style={{height: 64}}
      >
        <Toolbar>
          <Typography variant="h4">MUI Todos</Typography>
        </Toolbar>

      </AppBar>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </Paper>

    </>
  );
}

export default App;
