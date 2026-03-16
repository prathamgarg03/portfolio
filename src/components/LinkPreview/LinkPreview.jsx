import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function LinkPreview({ url, type = 'github' }) {
  const isGithub = type === 'github';
  const displayUrl = url.replace(/^https?:\/\/(www\.)?/, '');

  // Extract repo name from GitHub URL for a nice label
  const label = isGithub
    ? url.split('/').filter(Boolean).slice(-1)[0]?.replace(/-/g, ' ')
    : displayUrl.split('/')[0];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200 no-underline"
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${
        isGithub 
          ? 'bg-gray-900 text-white' 
          : 'bg-blue-500 text-white'
      }`}>
        {isGithub ? <FaGithub className="text-lg" /> : <FaExternalLinkAlt className="text-sm" />}
      </div>

      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-gray-900 capitalize truncate">
          {isGithub ? `${label}` : 'Live Demo'}
        </span>
        <span className="text-xs text-gray-400 truncate">
          {displayUrl}
        </span>
      </div>

      <div className="ml-auto shrink-0 text-gray-300 group-hover:text-gray-500 transition-colors duration-200">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

export default LinkPreview;
