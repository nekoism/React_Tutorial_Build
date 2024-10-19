import { useState } from "react";
/* React, a component is a piece of reusable code that represents a part of UI
Components are used to render, manage, update UI elements */
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

//export -> makes this function accessible outside of this files.
//default -> other files using your code that it's the main function in your file
