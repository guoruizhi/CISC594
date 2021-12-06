import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", inputjudge: false };
  }
  handleInput = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      this.setState({ input: e.target.value });
    } else {
      this.setState({ inputjudge: true });
    }
  };
  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            value={this.state.input}
            onChange={this.handleInput}
            disabled={this.state.inputjudge}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
