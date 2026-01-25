import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ category, categoryTitle }) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      <Link
        to={createPageUrl("Home")}
        className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Início</span>
      </Link>
      {category && (
        <>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="font-medium text-gray-900">{categoryTitle}</span>
        </>
      )}
    </nav>
  );
}