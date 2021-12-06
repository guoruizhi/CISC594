import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import Filter from "../../components/Filter";
import * as action from "../../actions";

class App extends Component {
  render() {
    console.log(this.props.todos);
    console.log(this.props.filter);
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <TodoList
          list={this.props.todos}
          onTodoClick={this.props.toggleTodo}
          filter={this.props.filter}
        />
        <Filter filter={this.props.filter} setFilter={this.props.setFilter} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(action.addTodo(text));
    },
    toggleTodo: id => {
      dispatch(action.toggleTodo(id));
    },
    setFilter: filter => {
      dispatch(action.setFilter(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
