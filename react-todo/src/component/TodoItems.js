import React, { Component } from 'react'
import DialogForm from './DialogForm';
import Button from '@material-ui/core/Button';
class TodoItems extends Component {

  isEdit = false;
  
  createTask = item => {
    return (
      <div key={item.key} >
        <p>{item.text}</p>
        <Button variant="outlined" color="primary"  onClick={() => this.onRemoveTask(item.key)}>Remove</Button>
        <DialogForm taskEditing={item} onEditTask={this.onEditTask}/>
      </div>
      
    )
  }

  onRemoveTask = (key) => {
    this.props.onRemoveTask(key);
  }

  onEditTask = (taskEditing) => {
    this.props.onEditTask(taskEditing);
    this.isEdit = true;
  }

  render() {
    const { entries } = this.props;
    const listItems = entries.map(this.createTask);
    console.log('listItems', listItems);
    return <ul className="theList">{listItems}</ul>
  }
   
}

export default TodoItems;