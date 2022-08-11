import React from "react";

const FormComponent = ({ children }) => {
  return (
    <form className="flex flex-col w-full gap-4 bg-transparent ">
      {children}
    </form>
  );
};

export default FormComponent;
