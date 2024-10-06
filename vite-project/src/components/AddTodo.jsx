import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  static propTypes = {};

  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add todo list here..."
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input type="submit" value="submit" className="Btn" />
      </form>
    );
  }
}

export default AddTodo;
