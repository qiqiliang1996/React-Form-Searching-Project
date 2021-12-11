import React from "react";
class ListGroup extends React.Component {
  render() {
    const { items, onItemChange, currentItem, textProperty, valueProperty } =
      this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemChange(item)}
            key={item[valueProperty]}
            className={
              item.name === currentItem.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
