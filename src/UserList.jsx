import React from "react";
import PropTypes from "prop-types";
import "./UserList.css";

const UserList = ({ users, toggleModal }) => (
  <ul className="user-list">
    {users.map(per => (
      <li
        key={per.phone}
        id={per.email}
        onClick={toggleModal}
        className="user-list_item"
      >
        <img src={per.picture.large} alt={per.name.title} />
        <div className="desc">
          <span>{per.name.first}</span>
          <span>{per.name.last}</span>
          <span>{per.email}</span>
        </div>
      </li>
    ))}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.array,
  toggleModal: PropTypes.func
};

export default UserList;
