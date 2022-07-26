import React from "react";
import classnames from "classnames";

import "../styles/Button.css";

export default function Button({ text, inputValue, isButtonActive }) {
  return (
    <button
      className={classnames("Button", {
        disabled: inputValue === "",
      })}
      disabled={!(isButtonActive)}
    >
      {text}
    </button>
  );
}
