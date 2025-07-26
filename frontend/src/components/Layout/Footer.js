import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center p-4">
      © {new Date().getFullYear()} CodeBook. All rights reserved.
    </div>
  );
};
