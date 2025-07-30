import React from 'react';

export function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF4D0D]"></div>
    </div>
  );
}