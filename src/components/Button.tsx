import React from "react";

function Button({ icon, css, text }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`${css} py-2 px-2 rounded-md flex items-center justify-center`}>
        {icon}
      </button>
      <p>{text}</p>
    </div>
  );
}

export default Button;
