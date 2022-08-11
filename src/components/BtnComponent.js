import React from "react";

const BtnComponent = ({
  type,
  text,
  bgColor,
  bgHoverColor,
  color,
  onClick,
  icon,
}) => {
  return (
    <button
      className={`px-8 py-2 font-medium border-2  rounded-md outline-none ${bgColor}  ${bgHoverColor} hover:shadow-md custom-transition ${color} `}
      type={type}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default BtnComponent;
