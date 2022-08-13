const ValidateInput = (userInfo) => {
  const error = {
    errorMessage: "",
    typeError: "",
  };

  console.log(userInfo);

  for (let key in userInfo) {
    switch (key) {
      case "email":
        const emailValidation =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const emailResult =
          userInfo[key].length > 0 ? emailValidation.test(userInfo[key]) : true;

        if (!emailResult) {
          error.errorMessage = "Your email is invalid!";
          error.typeError = "email";
        }

        break;

      case "password":
        const passwordValidation =
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        const passwordResult =
          userInfo[key].length > 0
            ? passwordValidation.test(userInfo[key])
            : true;

        if (!passwordResult) {
          error.errorMessage =
            "Your password must contain a number or capital word and a sign such as % ! @";
          error.typeError = "password";
        }
        break;
      case "username":
        const usernameValidation = /^[a-zA-Z0-9]+$/;

        const usernameResult =
          userInfo[key].length > 0
            ? usernameValidation.test(userInfo[key])
            : true;

        if (!usernameResult) {
          error.errorMessage = "Your username is invalid!";
          error.typeError = "username";
        }

        break;

      default:
        break;
    }
  }

  return error;
};

export default ValidateInput;
