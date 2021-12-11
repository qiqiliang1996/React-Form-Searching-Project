import TableHead from "./TableHead";
import TableBody from "./TableBody";
const Table = (props) => {
  const { sortColumn, onSort, columns, data } = props;
  return (
    <table className="table ">
      <TableHead sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
