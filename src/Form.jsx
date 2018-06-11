import React, { Component, Fragment } from "react";
import UserList from "./UserList";
import PropTypes from "prop-types";
import axios from "axios";
import "./Form.css";
import Filter from "./Filter";

class Form extends Component {
  state = {
    users: []
  };
  myValue = React.createRef();

  getUsers = e => {
    e.preventDefault();
    const number = this.myValue.current.value;
    axios.get(`https://randomuser.me/api/?results=${number}`).then(req => {
      const users = req.data.results;
      console.log(users);
      this.setState({ users });
    });
  };

  Filter = val => {
    const users = this.state.users;
    let arr = users.filter(
      item => item.name.first.match(val) || item.name.last.match(val)
    );
    console.log(users);
    console.log(val);
    this.setState({ users: arr });
  };

  componentWillReceiveProps(nextProps) {
    console.log("will receive");
  }

  render() {
    return (
      <Fragment>
        <form className="form" onSubmit={this.getUsers}>
          <input type="text" className="input" ref={this.myValue} />
          <button>Get Users</button>
        </form>
        <Filter users={this.state.users} Filter={this.Filter} />
        <UserList users={this.state.users} />
      </Fragment>
    );
  }
}

Form.propTypes = {
  getUsers: PropTypes.func
};

export default Form;
