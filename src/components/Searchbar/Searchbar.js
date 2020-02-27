import React, { Component } from "react";
import styles from './Searchbar.module.css'

export default class Searchbar extends Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
        placeholder='Find your movie...'
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        ></input>
        <button className={styles.button} type="submit">Search</button>
      </form>
    );
  }
}
