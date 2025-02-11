import React from "react";

const Card = ({ title, children, description }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-md space-y-3 h-fit min-w-90 max-h-[820px] overflow-y-auto">
      <div>
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
