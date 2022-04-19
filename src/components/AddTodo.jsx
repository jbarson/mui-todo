import {
  Paper,
  Grid,
  TextField,
  Button
} from '@mui/material'

function AddTodo({ addTodo }) {
  return (
    <form onSubmit={addTodo}>
      <Paper
        style={{ margin: 16, padding: 16 }}
      >
        <Grid container={true}>
          <Grid item md={11}>
            <TextField
              label="Add Todo"
              fullWidth
              name="todoTitle"
              variant="standard"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >Add</Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}

export default AddTodo