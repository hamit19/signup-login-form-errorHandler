import React, { useEffect, useRef, useState } from "react";

const InputComponent = ({ type, name, errorMessage, label, onChange, id }) => {
  const labelRef = useRef(null);
  const lineRef = useRef(null);
  const inputRef = useRef(null);
  const messageRef = useRef(null);

  const [errorHandler, setErrorHandler] = useState({
    errorMessage: "",
    typeError: "",
  });

  // handles the label position
  const handleLabelPositionOnFocus = () => {
    labelRef.current.style.scale = ".8";
    labelRef.current.style.top = "-25px";
    lineRef.current.style.width = "100%";
  };

  // handles the label position onBlur
  const handleLabelPositionOnBlur = () => {
    if (inputRef.current.value.length > 0) {
      labelRef.current.style.scale = ".8";
      labelRef.current.style.top = "-25px";
      lineRef.current.style.width = "100%";
    } else {
      labelRef.current.style.scale = "1";
      labelRef.current.style.top = "-8px";
      lineRef.current.style.width = "0%";
    }
  };

  // checks the input if its value length is logger than 0!
  const checkTheInput = (e) => {
    if (e.target.value <= 0) {
      setErrorHandler({
        ...errorHandler,
        errorMessage: "You should fill the field!",
        typeError: inputRef.current.id,
      });
    } else {
      onChange(e);
      setErrorHandler({ ...errorMessage });
    }
  };

  const errorMessageHandler = () => {
    if (errorHandler.typeError === inputRef.current.id) {
      messageRef.current.classList.remove("hidden");
      inputRef.current.classList.add("text-rose-600");
      inputRef.current.classList.remove("text-slate-500");
      lineRef.current.classList.add("bg-rose-600");
      lineRef.current.classList.remove("bg-green-600");
    } else {
      messageRef.current.classList.add("hidden");
      inputRef.current.classList.remove("text-rose-600");
      inputRef.current.classList.add("text-slate-600");
      lineRef.current.classList.remove("bg-rose-600");
      lineRef.current.classList.add("bg-green-600");
    }
  };

  const onChangeHandler = (e) => {
    checkTheInput(e);
  };

  const onFocusHandler = (e) => {
    checkTheInput(e);
    handleLabelPositionOnFocus();
  };

  const onBlurHandler = (e) => {
    handleLabelPositionOnBlur();
    checkTheInput(e);
  };

  useEffect(() => {
    errorMessageHandler();
  });

  return (
    // input wrapper
    <div className="relative my-4 ">
      {/* customizable label */}
      <label
        ref={labelRef}
        className="absolute -top-2 left-1 text-slate-500 custom-transition "
        htmlFor={id}
      >
        {label}
      </label>
      {/* customizable input */}
      <input
        onChange={(e) => onChangeHandler(e)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        ref={inputRef}
        id={id}
        className="w-full pl-1 bg-transparent border-0 border-b outline-none custom-transition text-slate-500 border-b-slate-400"
        type={type}
        name={name}
      />
      {/* line bottom */}
      <span
        ref={lineRef}
        className=" w-0 custom-transition z-10  absolute bottom-0 left-[50%] -translate-x-2/4  h-[1px]"
      ></span>
      {/* customizable error message */}
      <span
        ref={messageRef}
        className={`absolute hidden -bottom-6 text-xs font-medium text-rose-600 left-0`}
      >
        *{errorHandler.errorMessage}
      </span>
    </div>
  );
};

export default InputComponent;
