import React, { Component } from "react";

class Filter extends Component {
  setFilterAll = () => {
    this.props.setFilter("all");
  };
  setFilterActive = () => {
    this.props.setFilter("active");
  };
  setFilterCompleted = () => {
    this.props.setFilter("completed");
  };
  render() {
    const { filter } = this.props;
    return (
      <p>
        Task Status: {""}
        {filter === "all" ? (
          <span>Backlog</span>
        ) : (
          <button onClick={this.setFilterAll}>Backlog</button>
        )}
        {filter === "active" ? (
          <span>Working In Progress</span>
        ) : (
          <button onClick={this.setFilterActive}>Working In Progress</button>
        )}
        {filter === "completed" ? (
          <span>Ready For Reveiew & Done</span>
        ) : (
          <button onClick={this.setFilterCompleted}>
            Ready For Reveiew & Done
          </button>
        )}
      </p>
    );
  }
}
export default Filter;
