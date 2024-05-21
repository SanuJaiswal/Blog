import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mt-8 p-6 bg-white shadow-lg rounded-md">
        <h4 className="text-2xl font-bold text-blue-600">
          LOADING<span className="text-gray-800">, please wait...</span>
        </h4>
        <p className="text-lg text-gray-700 mt-2">
          Your content is being prepared. This may take a few seconds.
        </p>
      </div>
    </div>
  );
}

export default Loading;
