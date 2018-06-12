import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";

export default class Modal extends Component {
  componentWillMount() {
    this.mod = document.createElement("div");
    document.body.appendChild(this.mod);
  }

  getSomeUser = () => {
    const likeas = this.props.users.filter(
      key => key.email === this.props.modal.id
    );
    return likeas;
  };

  componentWillUnmount() {
    document.body.removeChild(this.mod);
  }

  render() {
    const arr = this.getSomeUser();
    return ReactDOM.createPortal(
      <div className="overlay" onClick={this.props.leaveModal}>
        <div className="modal">
          {arr.map(per => (
            <div key={per.phone}>
              <img src={per.picture.large} alt={per.name.title} />
              <div className="desc">
                <span>{per.name.first}</span>
                <span>{per.name.last}</span>
                <span>{per.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>,
      this.mod
    );
  }
}

Modal.propTypes = {
  users: PropTypes.array,
  isModalOpen: PropTypes.bool,
  modal: PropTypes.object,
  leaveModal: PropTypes.func
};
