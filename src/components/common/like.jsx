import React from "react";
import { PropTypes } from "prop-types";

class Like extends React.Component {
  render() {
    const { item, onLike } = this.props;
    let classes;
    if (item.liked === true) {
      classes = "fa fa-heart";
    } else {
      classes = "fa fa-heart-o";
    }

    return (
      <div>
        <i onClick={onLike} className={classes} aria-hidden="true"></i>
      </div>
    );
  }
}

Like.propTypes = {
  item: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Like;
