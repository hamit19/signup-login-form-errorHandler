import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnComponent from "../components/BtnComponent";
import FormComponent from "../components/FormComponent";
import IconComponent from "../components/IconComponent";
import InputComponent from "../components/InputComponent";
import ValidateInput from "../components/ValidateInput";

import imageLogin from "../img/image2.jpg";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [inputType, setInputType] = useState("");

  const [errorMessage, setErrorMessage] = useState({});

  const onChangeInputHandler = (e) => {
    let value = e.target.value;

    value.includes("@") ? setInputType("email") : setInputType("username");

    if (inputType === "email") {
      setUserInfo({ ...userInfo, email: value, username: "" });
      console.log(inputType);
    }

    if (inputType === "username") {
      setUserInfo({ ...userInfo, email: "", username: value });
      console.log(inputType);
    }

    if (e.target.name === "password") {
      setUserInfo({ ...userInfo, password: value });
    }

    setErrorMessage(ValidateInput(userInfo));
  };

  return (
    <div className="grid h-full grid-cols-1 bg-white sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12">
      <div className="relative hidden md:col-span-5 lg:col-span-7 md:flex">
        <div className=" after:z-20 w-full h-full after:content-['*'] after:bg-black after:bg-opacity-50 after:absolute after:left-0 after:right-0 after:bottom-0 after:top-0 ">
          <div className="absolute z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-justify font-medium  text-slate-50 p-8 w-[90%] rounded-md lg:max-w-xl bg-black bg-opacity-50">
            <p>
              The mini-project of signup and login has been implemented by{"  "}
              <a className="text-indigo-400" href="https://github.com/hamit19">
                Hamid Hassani
              </a>{" "}
              {"  "}
              my point in implementing the mini-project is to indicate my skill
              in using (React js).
            </p>
            <hr className="my-4" />
            <h5>You can touch in with me by:</h5>
            <div className="flex justify-center w-full gap-6 py-3 ">
              <IconComponent
                link="https://github.com/hamit19"
                icon={<i className="fa fa-github"></i>}
              />
              <IconComponent
                link="https://www.instagram.com/hamid.programmer.js/?igshid=YmMyMTA2M2Y%3D"
                icon={<i className="fa fa-instagram"></i>}
              />
              <IconComponent
                link={`https://wa.me/+989014693924/?text='Hey what's up? '`}
                icon={<i className="fa fa-whatsapp"></i>}
              />
              <IconComponent
                link={`mailto: hamidhassaniofficial@gmail.com`}
                icon={<i className="fa-solid fa-envelope"></i>}
              />
            </div>
          </div>

          <img
            className="relative z-10 object-cover w-full h-full"
            src={imageLogin}
            alt="signup"
          />
        </div>
      </div>
      <div className="relative flex flex-col justify-center col-span-1 gap-4 p-1 px-8 sm:col-span-4 sm:col-start-2 md:col-span-5 lg:col-span-5 lg:px-20 ">
        <div className="mb-8">
          <h1 className="text-2xl font-bold ">Login to your account</h1>
          <span className="text-sm font-medium text-slate-500">
            Thank you for choosing us!
          </span>
        </div>

        <FormComponent>
          <InputComponent
            id="username"
            label="Username or email"
            type="text"
            name={inputType}
            onChange={onChangeInputHandler}
            errorMessage={errorMessage}
          />

          <InputComponent
            id="password"
            label="Password"
            type="password"
            name="password"
            onChange={onChangeInputHandler}
            errorMessage={errorMessage}
          />
          <BtnComponent
            text="Login"
            type="submit"
            bgColor={"bg-slate-700"}
            bgHoverColor={`hover:bg-slate-900`}
            color="text-gray-50"
          />
          <BtnComponent
            icon={<i className="mr-3 text-slate-700 fa fa-google"></i>}
            text="Sign in with google"
            type="submit"
            color="text-gray-700"
          />
        </FormComponent>

        <span className="text-sm font-medium text-center text-slate-500">
          have not an account?{" "}
          <Link className="text-slate-700 hover:text-slate-900" to="/signup">
            Create an account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
