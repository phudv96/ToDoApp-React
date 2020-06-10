import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    }
    console.log('KLKLKLKLKL', this.props);
  }

  onAddTask = () => {
    const { newTask } = this.state;
    console.log('AAAAAAAAAAAAAAAAAAA', newTask);
    this.props.onAddNewTask(newTask);
    this.setState({
      newTask: ''
    })
  }

  onChangeTask = (event) => {
    this.setState({
      newTask: event.target.value
    })
  }

  render () {
    const { newTask } = this.state;
      return (
        <div className="todoListMain">
          <div className="header">
            {/* <form> */}
              <input type="text" placeholder="Task" value={newTask} onChange={this.onChangeTask}></input>
              <Button type="submit" onClick={this.onAddTask}> Add Task</Button>
            {/* </form> */}
          </div>
        </div>
      )
  }
}

export default TodoList;