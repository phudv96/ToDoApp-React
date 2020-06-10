import React, {Component} from 'react';
import './App.css';
import TodoList from './component/Todolist';
import TodoItems from './component/TodoItems';
import DialogForm from './component/DialogForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [ {
        key: 1,
        text: "Task item 1"
      }, {
        key: 2,
        text: "Task item 2"
      }, {
        key: 3,
        text: "Task item 3"
      }, {
        key: 4,
        text: "Task item 4"
      }],
      taskEditing: 'task'
    }
    this.bbb = 999;
  }

  onAddNewTask = (newTask) => {
    const { items } = this.state;
    items.forEach( (item, index) => {
      item.key = index;
    })
    items.push({
      key: items.length + 1,
      text: newTask
    });
    this.setState({
      items
    })
  }
  
  onRemoveTask = (key) => {
    const { items } = this.state;
    let itemssss = items.filter(item => item.key !== key);
    console.log('items', itemssss);
    this.setState({
      items: itemssss
    })
  }

  onEditTask = (taskEditing) => {
    console.log('items change', taskEditing);
    const item = this.state.items.find(item => item.key === taskEditing.key);
    item.text = taskEditing.text;
    console.log('items change', this.state.items);
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
        <div>
          
          <TodoList aaa= {this.bbb} ccc={this.bbb} onAddNewTask={this.onAddNewTask}/>
          <TodoItems entries={this.state.items} onRemoveTask={this.onRemoveTask} onEditTask={this.onEditTask}/>
          
        </div>
    )
  }
}

export default App