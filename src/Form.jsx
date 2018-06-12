import React, { Component, Fragment } from "react";
import UserList from "./UserList";
import PropTypes from "prop-types";
import axios from "axios";
import "./Form.css";
import Filter from "./Filter";
import Modal from "./Modal";

class Form extends Component {
  state = {
    users: [],
    isModalOpen: false,
    modal: {}
  };
  myValue = React.createRef();

  getUsers = e => {
    e.preventDefault();
    const number = this.myValue.current.value;
    axios.get(`https://randomuser.me/api/?results=${number}`).then(req => {
      const users = req.data.results;
      this.setState({ users });
    });
  };

  Filter = val => {
    const users = this.state.users;
    let arr = users.filter(
      item => item.name.first.match(val) || item.name.last.match(val)
    );
    this.setState({ users: arr });
  };

  toggleModal = e => {
    const li = e.currentTarget;
    this.setState({ modal: li });
    this.setState({ isModalOpen: true });
  };

  leaveModal = e => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Fragment>
        <form className="form" onSubmit={this.getUsers}>
          <input type="text" className="input" ref={this.myValue} />
          <button>Get Users</button>
        </form>
        <Filter users={this.state.users} Filter={this.Filter} />
        <UserList users={this.state.users} toggleModal={this.toggleModal} />
        {this.state.isModalOpen && (
          <Modal
            modal={this.state.modal}
            isModalOpen={this.state.isModalOpen}
            users={this.state.users}
            leaveModal={this.leaveModal}
          />
        )}
      </Fragment>
    );
  }
}

Form.propTypes = {
  getUsers: PropTypes.func
};

export default Form;
