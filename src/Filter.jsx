import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  myValue = React.createRef();
  getValue = () => {
    const val = this.myValue.current.value;
    this.props.Filter(val);
  };

  render() {
    return (
      <input
        type="text"
        ref={this.myValue}
        className="input"
        onChange={this.getValue}
      />
    );
  }
}

Filter.propTypes = {
  users: PropTypes.array,
  Filter: PropTypes.func
};

export default Filter;
