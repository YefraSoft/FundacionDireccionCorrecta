import React from "react";

export default function LoadingCircle() {
  return (
    <span className="flex items-center justify-center animate-pulse">
      <svg
        className="animate-spin h-7 w-7 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle
          className="opacity-25 text-patina-600"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75 text-patina-400"
          fill="none"
          d="M4 12a8 8 0 0116 0"
          strokeWidth="4"
        ></path>
      </svg>
    </span>
  );
}
