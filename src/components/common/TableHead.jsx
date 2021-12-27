import React from "react";
class TableHead extends React.Component {
  //
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  sortIcon = (column) => {
    const { sortColumn } = this.props;
    if (sortColumn.path !== column.path) {
      return null;
    } else if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    } else {
      return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {/* {this.sortIcon(column)} */}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
