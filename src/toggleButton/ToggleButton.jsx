import React from "react";
import { PiSunThin } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

function ToggleButton({ isDarkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2 rounded focus:outline-none transition-all duration-500 ease-in-out"
    >
      {isDarkMode ? (
        <PiSunThin className="w-6 h-6 text-yellow-700 transform scale-125 " title="Tema claro"/>
      ) : (
        <BsFillMoonStarsFill className="w-6 h-6 text-blue-500 scale-125" title="Tema escuro"/>
      )}
    </button>
  );
}

export default ToggleButton;
