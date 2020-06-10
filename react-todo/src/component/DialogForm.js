import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogForm extends Component {
  // [open, setOpen] = React.useState(false);

  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      open: false,
      currentTask: props.taskEditing
    }
    console.log('props', this.state);
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  onCancel = () => {
    this.setState({
      open: false,
      currentTask: this.props.taskEditing
    })
  };

  onSubmit = (value) => {
    this.setState({
      open: false
    })
    this.props.onEditTask(this.state.currentTask);
  };

  onEditTask = (event) => {
    this.setState({
      currentTask: {key: this.props.taskEditing.key, text: event.target.value}
    })
    
    console.log('adsasdasds=>>>>>', this.state.currentTask); 
  }


  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Modify Task</DialogTitle>
          <DialogContent>
            <TextField
              value={this.state.currentTask.text}
              autoFocus
              margin="dense"
              id="name"
              label="Task Description"
              type="email"
              fullWidth
              onChange={this.onEditTask}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancel} color="primary">
              Cancel
          </Button>
            <Button onClick={() => this.onSubmit()} color="primary" >
              Submit
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default DialogForm;