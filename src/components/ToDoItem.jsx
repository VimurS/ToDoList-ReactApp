import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>
        {props.text}{" "}
        <span
          onClick={() => {
            props.onChecked(props.id);
          }}
          style={{
            fontSize: "15px",
            float: "right",
            background: "wheat",
            height: "25px",
            width: "25px",
            borderRadius: "55%",
            textAlign: "center"
          }}
        >
          x
        </span>
      </li>
    </div>
  );
}

export default ToDoItem;
