import React from "react";

const IconComponent = ({ icon, link }) => {
  return (
    <div className="flex w-16 h-16 rounded-md flex-centering text-2xl cursor-pointer hover:text-indigo-400 custom-transition bg-slate-700 ">
      <a href={link}>{icon && icon}</a>
    </div>
  );
};

export default IconComponent;
