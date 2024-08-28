import React from "react";
import { Link } from "react-router-dom";

export const HeaderSkeleton: React.FC = () => (
  <header className="bg-slate-200">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="flex gap-5 justify-center items-center">
            <div className="w-10 h-10 rounded-full animate-pulse bg-gray-400 dark:bg-gray-700" />
            <span className="h-6 animate-pulse bg-gray-400 rounded-full dark:bg-gray-700 w-36"></span>
          </span>
        </Link>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end">
        <div className="h-10 w-10 animate-pulse bg-gray-400 rounded-full dark:bg-gray-700" />
      </div>
    </nav>
  </header>
);
