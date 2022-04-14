import React, { cloneElement } from "react";

export default function Family(props) {
  console.log(typeof props.children.map);
  return (
    <div>
      {props.children.map((child, idx) => {
        return cloneElement(child, { ...props, key: idx });
      })}
    </div>
  );
}
