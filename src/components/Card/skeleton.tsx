import React from "react";

export const CardSkeleton: React.FC = () => (
  <div
    role="status"
    className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 className="h-8 mb-2 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-48"></h5>
    <p className="h-6 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-36"></p>
  </div>
);
