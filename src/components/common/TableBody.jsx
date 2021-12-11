import React from "react";
import _ from "lodash";

class TableBody extends React.Component {
  getTableData(item, column) {
    if (column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path);
    }

    // if (column.path) {
    //   if (column.path === "title") {
    //     return (
    //       <Link
    //         className="nav-link active"
    //         aria-current="page"
    //         to={`/movies/${item._id}`}
    //       >
    //         {_.get(item, column.path)}
    //       </Link>
    //     );
    //   }
    //   return _.get(item, column.path);
    // } else {
    //   return column.content(item);
    // }
  }

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={column.path || column.key}>
                {this.getTableData(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
