import React from "react";

function ToggleButton({ isDarkMode, toggleTheme }) {
  return (
      <button onClick={toggleTheme}>
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
  );
}

export default ToggleButton;
