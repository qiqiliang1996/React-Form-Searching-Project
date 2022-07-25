import React from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";
class Pagination extends React.Component {
  render() {
    const { itemCount, pageSize, onPaginationChange, currentPage } = this.props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item "
              }
              onClick={() => onPaginationChange(page)}
            >
              <a className="page-link">{page}</a>
              
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPaginationChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
