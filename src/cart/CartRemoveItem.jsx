import React from "react";

function RemoveItem({ item, removeFunction, isDarkMode }) {
  return (
    <div className="removeItemBox">
      <button
        className={`remItem w-full ${
          isDarkMode
            ? "bg-gray-600 text-white hover:bg-gray-900"
            : "bg-neutral-300 text-black hover:bg-neutral-400"
        } font-bold py-2 px-4 rounded-lg`}
        onClick={() => removeFunction(item)}
      >
        Remover
      </button>
    </div>
  );
}

export default RemoveItem;
