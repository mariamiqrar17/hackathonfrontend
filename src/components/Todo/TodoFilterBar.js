// TodoFilterBar.js
import React from "react";

const TodoFilterBar = () => {
  return (
    <div className="rounded-md bg-gray-100 px-2 py-6 md:px-8">
      <div className="space-y-4 md:flex md:flex-row md:items-center md:justify-between md:space-y-0">
        {/* Add your filter bar content here */}
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <span className="font-semibold">Filters:</span>
          <div className="flex items-center justify-center rounded-md bg-white px-3 py-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-1 h-4 w-4 cursor-pointer"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          
        </div>
        <div>
          <button
            type="button"
            className="hidden rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4"
            >
              <line x1="21" y1="4" x2="14" y2="4"></line>
              <line x1="10" y1="4" x2="3" y2="4"></line>
              <line x1="21" y1="12" x2="12" y2="12"></line>
              <line x1="8" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="20" x2="16" y2="20"></line>
              <line x1="12" y1="20" x2="3" y2="20"></line>
              <line x1="14" y1="2" x2="14" y2="6"></line>
              <line x1="8" y1="10" x2="8" y2="14"></line>
              <line x1="16" y1="18" x2="16" y2="22"></line>
            </svg>
          </button>
          <button
            type="button"
            className="block w-full rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFilterBar;
