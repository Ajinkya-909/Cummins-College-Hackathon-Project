import React from 'react';

const Landing = ({ message }) => {
   
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="text-2xl font-semibold text-center px-4">
        {message}
      </div>
    </div>
  );
};

export default Landing;
